/**
 * Optional SerpAPI organic rank lookup.
 * ตั้ง SERPAPI_KEY ใน .env.local แล้วปุ่มเช็คอันดับจะใช้แหล่งนี้ร่วมกับ GSC
 */

export type SerpApiRankResult = {
  keyword: string;
  rank: number | null;
  foundUrl: string | null;
  notRanked: boolean;
};

function siteHost() {
  try {
    return new URL(
      process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://phuketseo.com",
    ).hostname.replace(/^www\./, "");
  } catch {
    return "phuketseo.com";
  }
}

export function isSerpApiConfigured() {
  return Boolean(process.env.SERPAPI_KEY?.trim());
}

export async function fetchOrganicRankViaSerpApi(
  keyword: string,
): Promise<SerpApiRankResult> {
  const apiKey = process.env.SERPAPI_KEY?.trim();
  if (!apiKey) {
    return { keyword, rank: null, foundUrl: null, notRanked: true };
  }

  const host = siteHost();
  const params = new URLSearchParams({
    engine: "google",
    q: keyword,
    hl: "th",
    gl: "th",
    google_domain: "google.co.th",
    num: "100",
    api_key: apiKey,
  });

  const res = await fetch(`https://serpapi.com/search.json?${params.toString()}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error(`SerpAPI ${res.status}`);
  }

  const data = (await res.json()) as {
    organic_results?: Array<{ position?: number; link?: string }>;
  };

  const hit = (data.organic_results ?? []).find((row) => {
    try {
      const h = new URL(row.link ?? "").hostname.replace(/^www\./, "");
      return h === host || h.endsWith(`.${host}`);
    } catch {
      return false;
    }
  });

  if (!hit?.position) {
    return { keyword, rank: null, foundUrl: null, notRanked: true };
  }

  return {
    keyword,
    rank: hit.position,
    foundUrl: hit.link ?? null,
    notRanked: false,
  };
}
