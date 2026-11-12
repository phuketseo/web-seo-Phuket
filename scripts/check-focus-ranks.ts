/**
 * เช็คอันดับคีย์โฟกัสจาก GSC (+ SerpAPI ถ้ามี) แล้วเขียน .data/focus-serp-ranks.json
 *
 * npx tsx --env-file=.env.local scripts/check-focus-ranks.ts
 */
import { focusKeywordRankings } from "../src/lib/focus-keyword-rankings";
import {
  writeFocusSerpCache,
  type FocusSerpCache,
  type FocusSerpRankEntry,
} from "../src/lib/focus-serp-cache";
import { fetchFocusKeywordGscRows, getGscAuthStatus } from "../src/lib/gsc";
import {
  fetchOrganicRankViaSerpApi,
  isSerpApiConfigured,
} from "../src/lib/serpapi-rank";

async function main() {
  const gscStatus = await getGscAuthStatus();
  const useSerpApi = isSerpApiConfigured();
  const now = new Date().toISOString();
  const ranks: FocusSerpRankEntry[] = [];
  const notes: string[] = [];

  console.log("GSC configured:", gscStatus.configured);
  console.log("SerpAPI:", useSerpApi);

  let gscMap = new Map<string, { position: number; impressions: number }>();
  if (gscStatus.configured) {
    const rows = await fetchFocusKeywordGscRows(
      focusKeywordRankings.map((k) => k.keyword),
      "28d",
    );
    gscMap = new Map(
      [...rows.entries()].map(([k, row]) => [
        k,
        { position: row.position, impressions: row.impressions },
      ]),
    );
    notes.push(`GSC พบ ${gscMap.size}/${focusKeywordRankings.length}`);
    console.log(notes[0]);
  } else {
    notes.push("GSC ไม่พร้อม");
  }

  for (const item of focusKeywordRankings) {
    const gsc = gscMap.get(item.keyword.toLowerCase());
    if (gsc && gsc.impressions > 0) {
      const rank = Math.max(1, Math.round(gsc.position));
      ranks.push({
        keyword: item.keyword,
        rank,
        notRanked: false,
        foundPagePath: item.pagePath,
        source: "gsc",
        checkedAt: now,
      });
      console.log(`#${rank}\t${item.keyword}\t(GSC pos ${gsc.position.toFixed(1)})`);
      continue;
    }

    if (useSerpApi) {
      const serp = await fetchOrganicRankViaSerpApi(item.keyword);
      ranks.push({
        keyword: item.keyword,
        rank: serp.rank,
        notRanked: serp.notRanked,
        foundPagePath: item.pagePath,
        source: "serpapi",
        checkedAt: now,
      });
      console.log(
        serp.rank != null
          ? `#${serp.rank}\t${item.keyword}\t(SerpAPI)`
          : `—\t${item.keyword}\t(SerpAPI ไม่ติด)`,
      );
      await new Promise((r) => setTimeout(r, 250));
      continue;
    }

    ranks.push({
      keyword: item.keyword,
      rank: item.rank,
      notRanked: item.notRanked,
      foundPagePath: item.pagePath,
      source: "manual",
      checkedAt: now,
    });
    console.log(
      item.rank != null
        ? `#${item.rank}\t${item.keyword}\t(คงค่าเดิม — GSC ยังไม่มี exact)`
        : `—\t${item.keyword}\t(ยังไม่มีใน GSC / ไม่มีอันดับเดิม)`,
    );
  }

  const cache: FocusSerpCache = {
    updatedAt: now,
    source: useSerpApi ? "mixed" : "gsc",
    note: notes.join(" · "),
    ranks,
  };
  await writeFocusSerpCache(cache);
  console.log("Wrote .data/focus-serp-ranks.json");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
