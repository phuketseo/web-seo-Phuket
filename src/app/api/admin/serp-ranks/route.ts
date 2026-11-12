import { NextResponse } from "next/server";
import { focusKeywordRankings } from "@/lib/focus-keyword-rankings";
import {
  buildGroupedFocusPayload,
  readFocusSerpCache,
  writeFocusSerpCache,
  type FocusSerpCache,
  type FocusSerpRankEntry,
} from "@/lib/focus-serp-cache";
import {
  fetchFocusKeywordGscRows,
  getGscAuthStatus,
  isGscRangeKey,
  type GscRangeKey,
} from "@/lib/gsc";
import {
  fetchOrganicRankViaSerpApi,
  isSerpApiConfigured,
} from "@/lib/serpapi-rank";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 120;

export async function GET() {
  const cache = await readFocusSerpCache();
  return NextResponse.json({
    ...buildGroupedFocusPayload(cache),
    serpApiConfigured: isSerpApiConfigured(),
    gsc: await getGscAuthStatus(),
  });
}

/**
 * POST — กด "เช็คอันดับล่าสุด"
 * ลำดับแหล่งข้อมูล:
 * 1) GSC exact query (ตำแหน่งเฉลี่ย 28 วัน) ถ้าเชื่อมแล้ว
 * 2) SerpAPI organic (ถ้ามี SERPAPI_KEY) สำหรับคีย์ที่ GSC ยังไม่มี
 */
export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const range: GscRangeKey = isGscRangeKey(searchParams.get("range"))
    ? (searchParams.get("range") as GscRangeKey)
    : "28d";

  const gscStatus = await getGscAuthStatus();
  const useSerpApi = isSerpApiConfigured();
  const now = new Date().toISOString();
  const ranks: FocusSerpRankEntry[] = [];
  const notes: string[] = [];

  let gscMap = new Map<string, { position: number; clicks: number; impressions: number }>();

  if (gscStatus.configured) {
    try {
      const rows = await fetchFocusKeywordGscRows(
        focusKeywordRankings.map((k) => k.keyword),
        range,
      );
      gscMap = new Map(
        [...rows.entries()].map(([key, row]) => [
          key,
          {
            position: row.position,
            clicks: row.clicks,
            impressions: row.impressions,
          },
        ]),
      );
      notes.push(`GSC exact query ${range}: พบ ${gscMap.size}/${focusKeywordRankings.length} คีย์`);
    } catch (err) {
      notes.push(err instanceof Error ? err.message : "GSC fetch failed");
    }
  } else {
    notes.push("ยังไม่ได้เชื่อม GSC — ข้ามตำแหน่งจาก Search Console");
  }

  for (const item of focusKeywordRankings) {
    const gsc = gscMap.get(item.keyword.toLowerCase());
    if (gsc && gsc.impressions > 0) {
      ranks.push({
        keyword: item.keyword,
        rank: Math.max(1, Math.round(gsc.position)),
        notRanked: false,
        foundPagePath: item.pagePath,
        source: "gsc",
        checkedAt: now,
      });
      continue;
    }

    if (useSerpApi) {
      try {
        const serp = await fetchOrganicRankViaSerpApi(item.keyword);
        let foundPagePath: string | null = null;
        if (serp.foundUrl) {
          try {
            foundPagePath = new URL(serp.foundUrl).pathname || "/";
          } catch {
            foundPagePath = null;
          }
        }
        ranks.push({
          keyword: item.keyword,
          rank: serp.rank,
          notRanked: serp.notRanked,
          foundPagePath,
          source: "serpapi",
          checkedAt: now,
        });
        // หน่วงเล็กน้อยกัน rate limit
        await new Promise((r) => setTimeout(r, 250));
        continue;
      } catch (err) {
        notes.push(
          `SerpAPI ล้มเหลว (${item.keyword}): ${err instanceof Error ? err.message : "error"}`,
        );
      }
    }

    // ไม่มีข้อมูลใหม่ — คงค่าจากไฟล์ static (อย่าทับอันดับมือเดิม เช่น Ads #1)
    ranks.push({
      keyword: item.keyword,
      rank: item.rank,
      notRanked: item.notRanked,
      foundPagePath: item.pagePath,
      source: "manual",
      checkedAt: now,
    });
  }

  const sources = new Set(ranks.map((r) => r.source));
  const source: FocusSerpCache["source"] =
    sources.size > 1 ? "mixed" : sources.has("serpapi") ? "serpapi" : sources.has("gsc") ? "gsc" : "manual";

  if (useSerpApi) notes.push("ใช้ SerpAPI สำหรับคีย์ที่ GSC ไม่มีข้อมูล");
  else notes.push("ไม่มี SERPAPI_KEY — ใช้เฉพาะ GSC (ถ้าเชื่อมแล้ว)");

  const cache: FocusSerpCache = {
    updatedAt: now,
    source,
    note: notes.join(" · "),
    ranks,
  };

  try {
    await writeFocusSerpCache(cache);
  } catch {
    notes.push("บันทึก .data ไม่สำเร็จ (บน Vercel อาจไม่ persist — ผลรอบนี้ยังแสดงใน response)");
  }

  return NextResponse.json({
    ok: true,
    ...buildGroupedFocusPayload(cache),
    serpApiConfigured: useSerpApi,
    gsc: gscStatus,
    note: notes.join(" · "),
  });
}
