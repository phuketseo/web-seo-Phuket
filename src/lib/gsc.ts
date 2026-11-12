import { google } from "googleapis";
import { focusKeywordRankings } from "@/lib/focus-keyword-rankings";
import { mergeFocusRanksWithCache, readFocusSerpCache } from "@/lib/focus-serp-cache";
import {
  getOAuthAuthenticatedClient,
  hasOAuthRefreshToken,
  isOAuthClientConfigured,
} from "@/lib/gsc-oauth";

export type GscRangeKey = "1d" | "7d" | "28d" | "3m";

export type GscRow = {
  keys: string[];
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
};

export type GscSnapshot = {
  fetchedAt: string;
  siteUrl: string;
  range: GscRangeKey;
  startDate: string;
  endDate: string;
  topQueries: GscRow[];
  topPages: GscRow[];
  countries: GscRow[];
  devices: GscRow[];
  dates: GscRow[];
  focusKeywords: Array<{
    keyword: string;
    pagePath: string;
    trackedRank: number | null;
    notRanked?: boolean;
    gsc: GscRow | null;
  }>;
};

const RANGE_DAYS: Record<GscRangeKey, number> = {
  "1d": 1,
  "7d": 7,
  "28d": 28,
  "3m": 90,
};

export function isGscRangeKey(value: string | null | undefined): value is GscRangeKey {
  return value === "1d" || value === "7d" || value === "28d" || value === "3m";
}

function getSiteUrl() {
  return (
    process.env.GSC_SITE_URL?.trim() ||
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    "https://phuketseo.com/"
  );
}

function normalizeSiteUrl(url: string) {
  if (url.startsWith("sc-domain:")) return url;
  return url.endsWith("/") ? url : `${url}/`;
}

function hasServiceAccount() {
  return Boolean(
    process.env.GOOGLE_CLIENT_EMAIL?.trim() &&
      process.env.GOOGLE_PRIVATE_KEY?.trim(),
  );
}

export async function isGscConfigured() {
  if (hasServiceAccount()) return true;
  if (isOAuthClientConfigured() && (await hasOAuthRefreshToken())) return true;
  return false;
}

export async function getGscAuthStatus() {
  const oauthClientReady = isOAuthClientConfigured();
  const oauthConnected = oauthClientReady && (await hasOAuthRefreshToken());
  const serviceAccount = hasServiceAccount();
  return {
    configured: serviceAccount || oauthConnected,
    oauthClientReady,
    oauthConnected,
    serviceAccount,
  };
}

function daysAgo(days: number) {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - days);
  return d.toISOString().slice(0, 10);
}

function rangeToDates(range: GscRangeKey) {
  // GSC หน่วงข้อมูลประมาณ 2–3 วัน
  const endDate = daysAgo(3);
  const startDate = daysAgo(3 + RANGE_DAYS[range] - 1);
  return { startDate, endDate };
}

async function getAuthClient() {
  if (await hasOAuthRefreshToken()) {
    return getOAuthAuthenticatedClient();
  }

  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL?.trim();
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
  if (!clientEmail || !privateKey) {
    throw new Error(
      "ยังไม่ได้เชื่อม GSC — ตั้ง OAuth (แนะนำ) หรือ Service Account ใน .env.local",
    );
  }

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/webmasters.readonly"],
  });
  await auth.authorize();
  return auth;
}

async function querySearchAnalytics(params: {
  dimensions: string[];
  rowLimit?: number;
  startDate: string;
  endDate: string;
  dimensionFilterGroups?: Array<{
    filters: Array<{
      dimension: string;
      operator: string;
      expression: string;
    }>;
  }>;
}) {
  const auth = await getAuthClient();
  const searchconsole = google.searchconsole({ version: "v1", auth });
  const siteUrl = normalizeSiteUrl(getSiteUrl());

  const res = await searchconsole.searchanalytics.query({
    siteUrl,
    requestBody: {
      startDate: params.startDate,
      endDate: params.endDate,
      dimensions: params.dimensions,
      rowLimit: params.rowLimit ?? 25,
      ...(params.dimensionFilterGroups
        ? { dimensionFilterGroups: params.dimensionFilterGroups }
        : {}),
    },
  });

  const rows: GscRow[] = (res.data.rows ?? []).map((row) => ({
    keys: row.keys ?? [],
    clicks: row.clicks ?? 0,
    impressions: row.impressions ?? 0,
    ctr: row.ctr ?? 0,
    position: row.position ?? 0,
  }));

  return { siteUrl, rows };
}

/** ดึง GSC ทีละคีย์โฟกัส (exact query) — ใช้ตอนกดเช็คอันดับล่าสุดใน /admin */
export async function fetchFocusKeywordGscRows(
  keywords: string[],
  range: GscRangeKey = "28d",
): Promise<Map<string, GscRow>> {
  const { startDate, endDate } = rangeToDates(range);
  const result = new Map<string, GscRow>();

  // จำกัด concurrency กันโดน quota
  const chunkSize = 5;
  for (let i = 0; i < keywords.length; i += chunkSize) {
    const chunk = keywords.slice(i, i + chunkSize);
    const rows = await Promise.all(
      chunk.map(async (keyword) => {
        try {
          const { rows: found } = await querySearchAnalytics({
            dimensions: ["query"],
            rowLimit: 5,
            startDate,
            endDate,
            dimensionFilterGroups: [
              {
                filters: [
                  {
                    dimension: "query",
                    operator: "equals",
                    expression: keyword,
                  },
                ],
              },
            ],
          });
          return { keyword, row: found[0] ?? null };
        } catch {
          return { keyword, row: null };
        }
      }),
    );
    for (const item of rows) {
      if (item.row) result.set(item.keyword.toLowerCase(), item.row);
    }
  }

  return result;
}

function sortByImpressions(rows: GscRow[]) {
  return [...rows].sort((a, b) => b.impressions - a.impressions || b.clicks - a.clicks);
}

export async function fetchGscSnapshot(range: GscRangeKey = "28d"): Promise<GscSnapshot> {
  const { startDate, endDate } = rangeToDates(range);

  const [queries, pages, countries, devices, dates] = await Promise.all([
    querySearchAnalytics({ dimensions: ["query"], rowLimit: 100, startDate, endDate }),
    querySearchAnalytics({ dimensions: ["page"], rowLimit: 100, startDate, endDate }),
    querySearchAnalytics({ dimensions: ["country"], rowLimit: 50, startDate, endDate }),
    querySearchAnalytics({ dimensions: ["device"], rowLimit: 10, startDate, endDate }),
    querySearchAnalytics({ dimensions: ["date"], rowLimit: 120, startDate, endDate }),
  ]);

  const queryMap = new Map(
    queries.rows.map((row) => [row.keys[0]?.toLowerCase() ?? "", row]),
  );

  const serpCache = await readFocusSerpCache();
  const resolved = mergeFocusRanksWithCache(focusKeywordRankings, serpCache);

  const focusKeywords = resolved.map((item) => {
    const gsc = queryMap.get(item.keyword.toLowerCase()) ?? null;
    return {
      keyword: item.keyword,
      pagePath: item.pagePath,
      trackedRank: item.rank,
      notRanked: item.notRanked,
      gsc,
    };
  });

  return {
    fetchedAt: new Date().toISOString(),
    siteUrl: queries.siteUrl,
    range,
    startDate,
    endDate,
    topQueries: sortByImpressions(queries.rows),
    topPages: sortByImpressions(pages.rows),
    countries: sortByImpressions(countries.rows),
    devices: sortByImpressions(devices.rows),
    dates: [...dates.rows].sort((a, b) => (a.keys[0] ?? "").localeCompare(b.keys[0] ?? "")),
    focusKeywords,
  };
}
