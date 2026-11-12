import { promises as fs } from "fs";
import path from "path";
import {
  focusKeywordRankings,
  focusKeywordRankingsLastUpdated,
  groupFocusKeywordsByPage,
  type FocusKeywordRanking,
} from "@/lib/focus-keyword-rankings";

export type FocusSerpRankEntry = {
  keyword: string;
  /** อันดับล่าสุดจากแหล่งเช็ค (GSC ปัดเศษ หรือ SerpAPI organic) */
  rank: number | null;
  notRanked?: boolean;
  /** หน้าที่เจอบน SERP/GSC ถ้ามี */
  foundPagePath?: string | null;
  source: "gsc" | "serpapi" | "manual";
  checkedAt: string;
};

export type FocusSerpCache = {
  updatedAt: string;
  source: "gsc" | "serpapi" | "mixed" | "manual";
  note?: string;
  ranks: FocusSerpRankEntry[];
};

const CACHE_DIR = path.join(process.cwd(), ".data");
const CACHE_FILE = path.join(CACHE_DIR, "focus-serp-ranks.json");

export async function readFocusSerpCache(): Promise<FocusSerpCache | null> {
  try {
    const raw = await fs.readFile(CACHE_FILE, "utf8");
    return JSON.parse(raw) as FocusSerpCache;
  } catch {
    return null;
  }
}

export async function writeFocusSerpCache(cache: FocusSerpCache): Promise<void> {
  await fs.mkdir(CACHE_DIR, { recursive: true });
  await fs.writeFile(CACHE_FILE, JSON.stringify(cache, null, 2), "utf8");
}

export function mergeFocusRanksWithCache(
  base: FocusKeywordRanking[] = focusKeywordRankings,
  cache: FocusSerpCache | null,
): FocusKeywordRanking[] {
  if (!cache?.ranks?.length) return base;
  const byKeyword = new Map(cache.ranks.map((r) => [r.keyword.toLowerCase(), r]));

  return base.map((row) => {
    const hit = byKeyword.get(row.keyword.toLowerCase());
    if (!hit) return row;
    return {
      ...row,
      rank: hit.rank,
      notRanked: hit.notRanked ?? (hit.rank == null),
    };
  });
}

export function resolvedFocusLastUpdated(cache: FocusSerpCache | null) {
  return cache?.updatedAt?.slice(0, 10) ?? focusKeywordRankingsLastUpdated;
}

export function buildGroupedFocusPayload(cache: FocusSerpCache | null) {
  const merged = mergeFocusRanksWithCache(focusKeywordRankings, cache);
  return {
    updatedAt: resolvedFocusLastUpdated(cache),
    cacheSource: cache?.source ?? null,
    cacheNote: cache?.note ?? null,
    groups: groupFocusKeywordsByPage(merged),
    flat: merged,
  };
}
