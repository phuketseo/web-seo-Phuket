import { google } from "googleapis";
import {
  getOAuthAuthenticatedClient,
  hasAnalyticsOAuthScope,
  hasOAuthRefreshToken,
  isOAuthClientConfigured,
} from "@/lib/gsc-oauth";
import type { GscRangeKey } from "@/lib/gsc";
import { isGscRangeKey } from "@/lib/gsc";

export type Ga4RangeKey = GscRangeKey;
export const isGa4RangeKey = isGscRangeKey;

export type Ga4Row = {
  keys: string[];
  sessions: number;
  users: number;
  pageViews: number;
  bounceRate: number;
  avgSessionDuration: number;
};

export type Ga4Totals = {
  sessions: number;
  users: number;
  pageViews: number;
  bounceRate: number;
  avgSessionDuration: number;
};

export type Ga4Realtime = {
  activeUsers: number;
  topPages: Array<{ pagePath: string; activeUsers: number }>;
};

export type Ga4Snapshot = {
  fetchedAt: string;
  propertyId: string;
  propertyName: string;
  measurementId: string | null;
  range: Ga4RangeKey;
  startDate: string;
  endDate: string;
  totals: Ga4Totals;
  realtime: Ga4Realtime;
  topPages: Ga4Row[];
  channels: Ga4Row[];
  countries: Ga4Row[];
  devices: Ga4Row[];
  dates: Ga4Row[];
};

const RANGE_DAYS: Record<Ga4RangeKey, number> = {
  "1d": 1,
  "7d": 7,
  "28d": 28,
  "3m": 90,
};

function daysAgo(days: number) {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - days);
  return d.toISOString().slice(0, 10);
}

function rangeToDates(range: Ga4RangeKey) {
  // รวมวันนี้ด้วย — พร็อพใหม่/ทราฟฟิกล่าสุดจะเห็นในแดชบอร์ดเร็วขึ้น
  // (ค่าวันนี้ยังประมวลผลไม่สมบูรณ์ได้ จนกว่าจะผ่านไปหลายชั่วโมง)
  const endDate = daysAgo(0);
  const startDate = daysAgo(Math.max(RANGE_DAYS[range] - 1, 0));
  return { startDate, endDate };
}

export async function getGa4AuthStatus() {
  const oauthClientReady = isOAuthClientConfigured();
  const oauthConnected = oauthClientReady && (await hasOAuthRefreshToken());
  const analyticsScope = oauthConnected && (await hasAnalyticsOAuthScope());
  const propertyConfigured = Boolean(process.env.GA4_PROPERTY_ID?.trim() || process.env.NEXT_PUBLIC_GA_ID?.trim());
  return {
    configured: oauthConnected && analyticsScope,
    oauthClientReady,
    oauthConnected,
    analyticsScope,
    propertyConfigured,
  };
}

async function getAuthClient() {
  if (!(await hasOAuthRefreshToken())) {
    throw new Error("ยังไม่ได้เชื่อม Google OAuth — กด Connect Google ในหน้า Admin");
  }
  if (!(await hasAnalyticsOAuthScope())) {
    throw new Error(
      "ยังไม่มีสิทธิ์ Analytics — กด Connect Google อีกครั้งเพื่ออนุญาต analytics.readonly",
    );
  }
  return getOAuthAuthenticatedClient();
}

function metricNumber(values: string[] | null | undefined, index: number) {
  const raw = values?.[index];
  if (!raw) return 0;
  const n = Number(raw);
  return Number.isFinite(n) ? n : 0;
}

function mapRows(
  rows: Array<{ dimensionValues?: Array<{ value?: string | null }> | null; metricValues?: Array<{ value?: string | null }> | null }> | null | undefined,
): Ga4Row[] {
  return (rows ?? []).map((row) => ({
    keys: (row.dimensionValues ?? []).map((d) => d.value ?? ""),
    sessions: metricNumber(row.metricValues?.map((m) => m.value ?? "") ?? [], 0),
    users: metricNumber(row.metricValues?.map((m) => m.value ?? "") ?? [], 1),
    pageViews: metricNumber(row.metricValues?.map((m) => m.value ?? "") ?? [], 2),
    bounceRate: metricNumber(row.metricValues?.map((m) => m.value ?? "") ?? [], 3),
    avgSessionDuration: metricNumber(row.metricValues?.map((m) => m.value ?? "") ?? [], 4),
  }));
}

const BASE_METRICS = [
  { name: "sessions" },
  { name: "totalUsers" },
  { name: "screenPageViews" },
  { name: "bounceRate" },
  { name: "averageSessionDuration" },
] as const;

async function resolveProperty(auth: Awaited<ReturnType<typeof getAuthClient>>) {
  const fromEnv = process.env.GA4_PROPERTY_ID?.trim()?.replace(/^properties\//, "");
  const measurementId = process.env.NEXT_PUBLIC_GA_ID?.trim() || null;
  const admin = google.analyticsadmin({ version: "v1beta", auth });

  if (fromEnv) {
    try {
      const prop = await admin.properties.get({ name: `properties/${fromEnv}` });
      return {
        propertyId: fromEnv,
        propertyName: prop.data.displayName || `properties/${fromEnv}`,
        measurementId,
      };
    } catch {
      return {
        propertyId: fromEnv,
        propertyName: `properties/${fromEnv}`,
        measurementId,
      };
    }
  }

  if (!measurementId || measurementId.includes("XXXX")) {
    throw new Error("ตั้ง GA4_PROPERTY_ID หรือ NEXT_PUBLIC_GA_ID ให้ถูกต้องก่อนดึง Analytics");
  }

  const summaries = await admin.accountSummaries.list();
  for (const account of summaries.data.accountSummaries ?? []) {
    for (const prop of account.propertySummaries ?? []) {
      const name = prop.property;
      if (!name) continue;
      const streams = await admin.properties.dataStreams.list({ parent: name });
      for (const stream of streams.data.dataStreams ?? []) {
        if (stream.webStreamData?.measurementId === measurementId) {
          return {
            propertyId: name.replace(/^properties\//, ""),
            propertyName: prop.displayName || name,
            measurementId,
          };
        }
      }
      const display = (prop.displayName || "").toLowerCase();
      if (display.includes("phuketseo")) {
        return {
          propertyId: name.replace(/^properties\//, ""),
          propertyName: prop.displayName || name,
          measurementId,
        };
      }
    }
  }

  throw new Error(
    "หา GA4 property จาก Measurement ID ไม่เจอ — ใส่ GA4_PROPERTY_ID (ตัวเลขใน Admin → Property settings)",
  );
}

async function runDimensionReport(params: {
  auth: Awaited<ReturnType<typeof getAuthClient>>;
  propertyId: string;
  startDate: string;
  endDate: string;
  dimension: string;
  limit?: number;
  orderBySessions?: boolean;
}) {
  const analyticsdata = google.analyticsdata({ version: "v1beta", auth: params.auth });
  const res = await analyticsdata.properties.runReport({
    property: `properties/${params.propertyId}`,
    requestBody: {
      dateRanges: [{ startDate: params.startDate, endDate: params.endDate }],
      dimensions: [{ name: params.dimension }],
      metrics: [...BASE_METRICS],
      limit: String(params.limit ?? 50),
      orderBys: params.orderBySessions === false
        ? [{ dimension: { dimensionName: params.dimension } }]
        : [{ metric: { metricName: "sessions" }, desc: true }],
    },
  });
  return mapRows(res.data.rows);
}

export async function fetchGa4Snapshot(range: Ga4RangeKey = "28d"): Promise<Ga4Snapshot> {
  const auth = await getAuthClient();
  const { startDate, endDate } = rangeToDates(range);
  const property = await resolveProperty(auth);
  const analyticsdata = google.analyticsdata({ version: "v1beta", auth });

  const [totalsRes, realtimeRes, topPages, channels, countries, devices, dates] = await Promise.all([
    analyticsdata.properties.runReport({
      property: `properties/${property.propertyId}`,
      requestBody: {
        dateRanges: [{ startDate, endDate }],
        metrics: [...BASE_METRICS],
      },
    }),
    analyticsdata.properties.runRealtimeReport({
      property: `properties/${property.propertyId}`,
      requestBody: {
        metrics: [{ name: "activeUsers" }],
        dimensions: [{ name: "unifiedPagePathScreen" }],
        limit: "10",
        orderBys: [{ metric: { metricName: "activeUsers" }, desc: true }],
      },
    }).catch(async () =>
      analyticsdata.properties.runRealtimeReport({
        property: `properties/${property.propertyId}`,
        requestBody: {
          metrics: [{ name: "activeUsers" }],
        },
      }),
    ),
    runDimensionReport({
      auth,
      propertyId: property.propertyId,
      startDate,
      endDate,
      dimension: "pagePath",
      limit: 50,
    }),
    runDimensionReport({
      auth,
      propertyId: property.propertyId,
      startDate,
      endDate,
      dimension: "sessionDefaultChannelGroup",
      limit: 20,
    }),
    runDimensionReport({
      auth,
      propertyId: property.propertyId,
      startDate,
      endDate,
      dimension: "country",
      limit: 30,
    }),
    runDimensionReport({
      auth,
      propertyId: property.propertyId,
      startDate,
      endDate,
      dimension: "deviceCategory",
      limit: 10,
    }),
    runDimensionReport({
      auth,
      propertyId: property.propertyId,
      startDate,
      endDate,
      dimension: "date",
      limit: 120,
      orderBySessions: false,
    }),
  ]);

  const totalRow = mapRows(totalsRes.data.rows)[0];
  const totals: Ga4Totals = totalRow
    ? {
        sessions: totalRow.sessions,
        users: totalRow.users,
        pageViews: totalRow.pageViews,
        bounceRate: totalRow.bounceRate,
        avgSessionDuration: totalRow.avgSessionDuration,
      }
    : {
        sessions: 0,
        users: 0,
        pageViews: 0,
        bounceRate: 0,
        avgSessionDuration: 0,
      };

  const realtimeRows = realtimeRes.data.rows ?? [];
  const realtimeTopPages = realtimeRows.map((row) => ({
    pagePath: row.dimensionValues?.[0]?.value || "/",
    activeUsers: Number(row.metricValues?.[0]?.value || 0) || 0,
  }));
  const activeUsers =
    Number(realtimeRes.data.totals?.[0]?.metricValues?.[0]?.value || 0) ||
    realtimeTopPages.reduce((sum, row) => sum + row.activeUsers, 0);

  return {
    fetchedAt: new Date().toISOString(),
    propertyId: property.propertyId,
    propertyName: property.propertyName,
    measurementId: property.measurementId,
    range,
    startDate,
    endDate,
    totals,
    realtime: {
      activeUsers,
      topPages: realtimeTopPages,
    },
    topPages,
    channels,
    countries,
    devices,
    dates: [...dates].sort((a, b) => (a.keys[0] ?? "").localeCompare(b.keys[0] ?? "")),
  };
}
