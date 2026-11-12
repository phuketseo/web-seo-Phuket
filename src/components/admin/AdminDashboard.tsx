"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  focusKeywordRankings,
  focusKeywordRankingsLastUpdated,
  groupFocusKeywordsByPage,
  pageLabelForPath,
  type FocusKeywordPageGroup,
  type FocusKeywordRanking,
} from "@/lib/focus-keyword-rankings";
import type { GscRangeKey, GscRow, GscSnapshot } from "@/lib/gsc";
import type { Ga4Row, Ga4Snapshot } from "@/lib/ga4";
import { AdminOverview } from "@/components/admin/AdminOverview";

type SerpRanksResponse = {
  updatedAt: string;
  cacheSource: string | null;
  cacheNote: string | null;
  groups: FocusKeywordPageGroup[];
  flat: FocusKeywordRanking[];
  serpApiConfigured?: boolean;
  note?: string;
  error?: string;
};

type GscAuthStatus = {
  configured: boolean;
  oauthClientReady: boolean;
  oauthConnected: boolean;
  serviceAccount: boolean;
};

type Ga4AuthStatus = {
  configured: boolean;
  oauthClientReady: boolean;
  oauthConnected: boolean;
  analyticsScope: boolean;
  propertyConfigured: boolean;
};

type GscApiResponse = {
  source: "cache" | "live" | "none";
  configured: boolean;
  auth?: GscAuthStatus;
  error?: string;
  data: GscSnapshot | null;
};

type Ga4ApiResponse = {
  source: "cache" | "live" | "none";
  configured: boolean;
  auth?: Ga4AuthStatus;
  error?: string;
  data: Ga4Snapshot | null;
};

type TabKey = "queries" | "pages" | "countries" | "devices" | "dates";
type SortKey = "clicks" | "impressions" | "ctr" | "position";
type Ga4TabKey = "pages" | "channels" | "countries" | "devices" | "dates";
type Ga4SortKey = "sessions" | "users" | "pageViews" | "bounceRate" | "avgSessionDuration";
type AdminView = "overview" | "gsc" | "analytics" | "keywords";

const ADMIN_NAV: { key: AdminView; label: string; hint: string }[] = [
  { key: "overview", label: "Overview", hint: "สรุปสถานะ" },
  { key: "gsc", label: "Search Console", hint: "SEO / GSC" },
  { key: "analytics", label: "Analytics", hint: "Google Analytics" },
  { key: "keywords", label: "Keyword Focus", hint: "คีย์โฟกัส + อันดับ" },
];

const RANGES: { key: GscRangeKey; label: string }[] = [
  { key: "1d", label: "24 ชั่วโมง" },
  { key: "7d", label: "7 วัน" },
  { key: "28d", label: "28 วัน" },
  { key: "3m", label: "3 เดือน" },
];

function isAdminView(value: string | null): value is AdminView {
  return value === "overview" || value === "gsc" || value === "analytics" || value === "keywords";
}

const TABS: { key: TabKey; label: string }[] = [
  { key: "queries", label: "ข้อความค้นหา" },
  { key: "pages", label: "หน้า" },
  { key: "countries", label: "ประเทศ" },
  { key: "devices", label: "อุปกรณ์" },
  { key: "dates", label: "วัน" },
];

const GA4_TABS: { key: Ga4TabKey; label: string }[] = [
  { key: "pages", label: "หน้า" },
  { key: "channels", label: "ช่องทาง" },
  { key: "countries", label: "ประเทศ" },
  { key: "devices", label: "อุปกรณ์" },
  { key: "dates", label: "วัน" },
];

const DEVICE_LABEL: Record<string, string> = {
  DESKTOP: "เดสก์ท็อป",
  desktop: "เดสก์ท็อป",
  MOBILE: "มือถือ",
  mobile: "มือถือ",
  TABLET: "แท็บเล็ต",
  tablet: "แท็บเล็ต",
};

const COUNTRY_LABEL: Record<string, string> = {
  tha: "ไทย",
  thailand: "ไทย",
  usa: "สหรัฐอเมริกา",
  "united states": "สหรัฐอเมริกา",
  gbr: "สหราชอาณาจักร",
  aus: "ออสเตรเลีย",
  rus: "รัสเซีย",
  deu: "เยอรมนี",
  fra: "ฝรั่งเศส",
  chn: "จีน",
  ind: "อินเดีย",
  sgp: "สิงคโปร์",
  mys: "มาเลเซีย",
};

function formatPct(ctr: number) {
  return `${(ctr * 100).toFixed(0)}%`;
}

function formatBounce(rate: number) {
  return `${(rate * 100).toFixed(1)}%`;
}

function formatDuration(seconds: number) {
  const s = Math.max(0, Math.round(seconds));
  const m = Math.floor(s / 60);
  const r = s % 60;
  return m > 0 ? `${m}:${String(r).padStart(2, "0")}` : `${r}s`;
}

function formatPos(position: number) {
  return position.toFixed(1);
}

function formatInt(n: number) {
  return new Intl.NumberFormat("th-TH").format(Math.round(n));
}

function formatDateTime(iso: string) {
  try {
    return new Date(iso).toLocaleString("th-TH", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  } catch {
    return iso;
  }
}

function labelForRow(tab: TabKey, key: string) {
  if (tab === "pages") return key.replace(/^https?:\/\/[^/]+/, "") || "/";
  if (tab === "devices") return DEVICE_LABEL[key] || key;
  if (tab === "countries") return COUNTRY_LABEL[key.toLowerCase()] || key.toUpperCase();
  return key;
}

function labelForGa4Row(tab: Ga4TabKey, key: string) {
  if (tab === "devices") return DEVICE_LABEL[key] || key;
  if (tab === "countries") return COUNTRY_LABEL[key.toLowerCase()] || key;
  if (tab === "dates" && /^\d{8}$/.test(key)) {
    return `${key.slice(0, 4)}-${key.slice(4, 6)}-${key.slice(6, 8)}`;
  }
  return key || "/";
}

function sortRows(rows: GscRow[], sortKey: SortKey, asc: boolean) {
  const sorted = [...rows].sort((a, b) => {
    const av = a[sortKey];
    const bv = b[sortKey];
    if (av === bv) return b.impressions - a.impressions;
    return av - bv;
  });
  return asc ? sorted : sorted.reverse();
}

function sortGa4Rows(rows: Ga4Row[], sortKey: Ga4SortKey, asc: boolean) {
  const sorted = [...rows].sort((a, b) => {
    const av = a[sortKey];
    const bv = b[sortKey];
    if (av === bv) return b.sessions - a.sessions;
    return av - bv;
  });
  return asc ? sorted : sorted.reverse();
}

export function AdminDashboard() {
  const searchParams = useSearchParams();
  const oauthStatus = searchParams.get("gsc_oauth");
  const oauthReason = searchParams.get("reason");
  const viewFromUrl = searchParams.get("view");

  const [view, setView] = useState<AdminView>(isAdminView(viewFromUrl) ? viewFromUrl : "overview");
  const [range, setRange] = useState<GscRangeKey>("28d");
  const [tab, setTab] = useState<TabKey>("queries");
  const [sortKey, setSortKey] = useState<SortKey>("impressions");
  const [sortAsc, setSortAsc] = useState(false);
  const [ga4Tab, setGa4Tab] = useState<Ga4TabKey>("pages");
  const [ga4SortKey, setGa4SortKey] = useState<Ga4SortKey>("sessions");
  const [ga4SortAsc, setGa4SortAsc] = useState(false);
  const [gsc, setGsc] = useState<GscApiResponse | null>(null);
  const [ga4, setGa4] = useState<Ga4ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [ga4Loading, setGa4Loading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [serp, setSerp] = useState<SerpRanksResponse | null>(null);
  const [serpChecking, setSerpChecking] = useState(false);
  const [serpMessage, setSerpMessage] = useState<string | null>(null);

  useEffect(() => {
    if (isAdminView(viewFromUrl) && viewFromUrl !== view) setView(viewFromUrl);
  }, [viewFromUrl, view]);

  function goView(next: AdminView) {
    setView(next);
    const url = new URL(window.location.href);
    url.searchParams.set("view", next);
    // เก็บ oauth query ไว้ถ้ามี
    window.history.replaceState({}, "", url.pathname + "?" + url.searchParams.toString());
  }

  const loadGsc = useCallback(
    async (opts?: { refresh?: boolean; nextRange?: GscRangeKey }) => {
      const activeRange = opts?.nextRange ?? range;
      try {
        const qs = new URLSearchParams({ range: activeRange });
        if (opts?.refresh) qs.set("refresh", "1");
        const res = await fetch(`/api/admin/gsc?${qs.toString()}`);
        const data = (await res.json()) as GscApiResponse;
        setGsc(data);
      } catch {
        setGsc({
          source: "none",
          configured: false,
          error: "โหลดข้อมูล GSC ไม่สำเร็จ",
          data: null,
        });
      }
    },
    [range],
  );

  const loadGa4 = useCallback(
    async (opts?: { refresh?: boolean; nextRange?: GscRangeKey }) => {
      const activeRange = opts?.nextRange ?? range;
      try {
        const qs = new URLSearchParams({ range: activeRange });
        if (opts?.refresh) qs.set("refresh", "1");
        const res = await fetch(`/api/admin/ga4?${qs.toString()}`);
        const data = (await res.json()) as Ga4ApiResponse;
        setGa4(data);
      } catch {
        setGa4({
          source: "none",
          configured: false,
          error: "โหลดข้อมูล GA4 ไม่สำเร็จ",
          data: null,
        });
      }
    },
    [range],
  );

  const loadAll = useCallback(
    async (opts?: { refresh?: boolean; nextRange?: GscRangeKey }) => {
      if (opts?.refresh) setRefreshing(true);
      else {
        setLoading(true);
        setGa4Loading(true);
      }
      try {
        await Promise.all([loadGsc(opts), loadGa4(opts)]);
      } finally {
        setLoading(false);
        setGa4Loading(false);
        setRefreshing(false);
      }
    },
    [loadGsc, loadGa4],
  );

  const loadSerpRanks = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/serp-ranks");
      const data = (await res.json()) as SerpRanksResponse;
      setSerp(data);
    } catch {
      setSerp({
        updatedAt: focusKeywordRankingsLastUpdated,
        cacheSource: null,
        cacheNote: null,
        groups: groupFocusKeywordsByPage(focusKeywordRankings),
        flat: focusKeywordRankings,
        error: "โหลดคีย์โฟกัสไม่สำเร็จ",
      });
    }
  }, []);

  useEffect(() => {
    void loadAll();
  }, [loadAll]);

  useEffect(() => {
    void loadSerpRanks();
  }, [loadSerpRanks]);

  async function checkLatestRanks() {
    setSerpChecking(true);
    setSerpMessage(null);
    try {
      // รีเฟรช GSC คู่กันเพื่อให้คอลัมน์ GSC ในตารางอัปเดต
      await loadGsc({ refresh: true });
      const res = await fetch(`/api/admin/serp-ranks?range=${range}`, { method: "POST" });
      const data = (await res.json()) as SerpRanksResponse & { ok?: boolean; note?: string };
      setSerp(data);
      setSerpMessage(data.note || data.cacheNote || "อัปเดตอันดับแล้ว");
    } catch {
      setSerpMessage("เช็คอันดับไม่สำเร็จ — ตรวจการเชื่อม GSC หรือ SERPAPI_KEY");
    } finally {
      setSerpChecking(false);
    }
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.href = "/admin/login";
  }

  function onRangeChange(next: GscRangeKey) {
    setRange(next);
    void loadAll({ nextRange: next });
  }

  function onSort(next: SortKey) {
    if (sortKey === next) {
      setSortAsc((v) => !v);
      return;
    }
    setSortKey(next);
    setSortAsc(next === "position");
  }

  function onGa4Sort(next: Ga4SortKey) {
    if (ga4SortKey === next) {
      setGa4SortAsc((v) => !v);
      return;
    }
    setGa4SortKey(next);
    setGa4SortAsc(false);
  }

  const snapshot = gsc?.data;
  const ga4Snapshot = ga4?.data;

  const activeRows = useMemo(() => {
    if (!snapshot) return [] as GscRow[];
    const map: Record<TabKey, GscRow[]> = {
      queries: snapshot.topQueries ?? [],
      pages: snapshot.topPages ?? [],
      countries: snapshot.countries ?? [],
      devices: snapshot.devices ?? [],
      dates: snapshot.dates ?? [],
    };
    return sortRows(map[tab] || [], sortKey, sortAsc);
  }, [snapshot, tab, sortKey, sortAsc]);

  const ga4Rows = useMemo(() => {
    if (!ga4Snapshot) return [] as Ga4Row[];
    const map: Record<Ga4TabKey, Ga4Row[]> = {
      pages: ga4Snapshot.topPages ?? [],
      channels: ga4Snapshot.channels ?? [],
      countries: ga4Snapshot.countries ?? [],
      devices: ga4Snapshot.devices ?? [],
      dates: ga4Snapshot.dates ?? [],
    };
    return sortGa4Rows(map[ga4Tab] || [], ga4SortKey, ga4SortAsc);
  }, [ga4Snapshot, ga4Tab, ga4SortKey, ga4SortAsc]);

  const totals = useMemo(() => {
    return activeRows.reduce(
      (acc, row) => {
        acc.clicks += row.clicks;
        acc.impressions += row.impressions;
        return acc;
      },
      { clicks: 0, impressions: 0 },
    );
  }, [activeRows]);

  const trackedUpdated = new Date(
    serp?.updatedAt ?? focusKeywordRankingsLastUpdated,
  ).toLocaleDateString("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const gscByKeyword = useMemo(() => {
    const map = new Map<string, NonNullable<GscSnapshot["focusKeywords"][number]["gsc"]>>();
    for (const row of snapshot?.focusKeywords ?? []) {
      if (row.gsc) map.set(row.keyword.toLowerCase(), row.gsc);
    }
    return map;
  }, [snapshot]);

  const focusGroups = serp?.groups ?? groupFocusKeywordsByPage(focusKeywordRankings);

  const firstColLabel =
    tab === "queries"
      ? "ข้อความค้นหายอดนิยม"
      : tab === "pages"
        ? "หน้ายอดนิยม"
        : tab === "countries"
          ? "ประเทศ"
          : tab === "devices"
            ? "อุปกรณ์"
            : "วัน";

  const ga4FirstCol =
    ga4Tab === "pages"
      ? "หน้า"
      : ga4Tab === "channels"
        ? "ช่องทาง"
        : ga4Tab === "countries"
          ? "ประเทศ"
          : ga4Tab === "devices"
            ? "อุปกรณ์"
            : "วัน";

  const needsGoogleConnect =
    Boolean(gsc?.auth?.oauthClientReady || ga4?.auth?.oauthClientReady) &&
    (!gsc?.auth?.oauthConnected || ga4?.auth?.analyticsScope === false);

  const connectLabel =
    gsc?.auth?.oauthConnected && ga4?.auth?.analyticsScope === false
      ? "Reconnect Google (GA4)"
      : "Connect Google";

  const viewTitle =
    ADMIN_NAV.find((item) => item.key === view)?.label ?? "Overview";

  const rangePicker = (
    <div className="inline-flex overflow-hidden rounded-full border border-[#dadce0]">
      {RANGES.map((item) => {
        const active = range === item.key;
        return (
          <button
            key={item.key}
            type="button"
            onClick={() => onRangeChange(item.key)}
            className={`px-3 py-1.5 text-sm ${
              active
                ? "bg-[#e8f0fe] font-medium text-[#1967d2]"
                : "bg-white text-[#3c4043] hover:bg-[#f8f9fa]"
            }`}
          >
            {active ? "✓ " : ""}
            {item.label}
          </button>
        );
      })}
    </div>
  );

  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:items-start">
      <aside className="w-full shrink-0 lg:sticky lg:top-4 lg:w-56">
        <nav className="overflow-hidden rounded-2xl border border-[#dadce0] bg-white shadow-sm">
          <p className="border-b border-[#dadce0] px-4 py-3 text-xs font-medium uppercase tracking-wide text-[#5f6368]">
            เมนูแอดมิน
          </p>
          <ul className="p-2">
            {ADMIN_NAV.map((item) => {
              const active = view === item.key;
              return (
                <li key={item.key}>
                  <button
                    type="button"
                    onClick={() => goView(item.key)}
                    className={`flex w-full flex-col rounded-xl px-3 py-2.5 text-left transition-colors ${
                      active
                        ? "bg-[#e8f0fe] text-[#1967d2]"
                        : "text-[#3c4043] hover:bg-[#f8f9fa]"
                    }`}
                  >
                    <span className={`text-sm ${active ? "font-medium" : ""}`}>{item.label}</span>
                    <span className="text-[11px] text-[#5f6368]">{item.hint}</span>
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="space-y-2 border-t border-[#dadce0] p-3">
            {needsGoogleConnect ? (
              <a
                href="/api/admin/gsc/oauth/start"
                className="block rounded-full bg-[#1a73e8] px-3 py-2 text-center text-xs font-medium text-white hover:bg-[#1765cc]"
              >
                {connectLabel}
              </a>
            ) : null}
            <button
              type="button"
              onClick={() => void loadAll({ refresh: true })}
              disabled={refreshing || (!gsc?.configured && !ga4?.configured)}
              className="w-full rounded-full border border-[#dadce0] bg-white px-3 py-2 text-xs font-medium text-[#1a73e8] hover:bg-[#f8f9fa] disabled:opacity-40"
            >
              {refreshing ? "กำลังซิงก์..." : "รีเฟรชข้อมูล"}
            </button>
            <button
              type="button"
              onClick={() => void logout()}
              className="w-full rounded-full border border-[#dadce0] bg-white px-3 py-2 text-xs text-[#5f6368] hover:bg-[#f8f9fa]"
            >
              ออกจากระบบ
            </button>
          </div>
        </nav>
      </aside>

      <div className="min-w-0 flex-1 space-y-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-[28px] font-normal leading-tight text-[#202124]">{viewTitle}</h1>
          <p className="mt-1 text-sm text-[#5f6368]">
            {gsc?.configured ? "GSC เชื่อมแล้ว" : "GSC ยังไม่เชื่อม"}
            {" · "}
            {ga4?.configured ? "GA4 เชื่อมแล้ว" : "GA4 ยังไม่เชื่อม"}
            {snapshot ? ` · GSC อัปเดต ${formatDateTime(snapshot.fetchedAt)}` : null}
            {ga4Snapshot ? ` · GA4 อัปเดต ${formatDateTime(ga4Snapshot.fetchedAt)}` : null}
          </p>
        </div>
        {view === "gsc" || view === "analytics" || view === "overview" ? rangePicker : null}
      </div>

      {oauthStatus === "connected" ? (
        <div className="rounded-lg border border-[#ceead6] bg-[#e6f4ea] px-4 py-3 text-sm text-[#137333]">
          เชื่อม Google สำเร็จแล้ว (GSC + Analytics) — กดรีเฟรชเพื่อดึงข้อมูลล่าสุด
        </div>
      ) : null}
      {oauthStatus === "error" ? (
        <div className="rounded-lg border border-[#fad2cf] bg-[#fce8e6] px-4 py-3 text-sm text-[#c5221f]">
          เชื่อม Google ไม่สำเร็จ: {oauthReason || "unknown"}
        </div>
      ) : null}
      {gsc?.error && (view === "overview" || view === "gsc" || view === "keywords") ? (
        <div className="rounded-lg border border-[#fad2cf] bg-[#fce8e6] px-4 py-3 text-sm text-[#c5221f]">
          GSC: {gsc.error}
        </div>
      ) : null}
      {ga4?.error && (view === "overview" || view === "analytics") ? (
        <div className="rounded-lg border border-[#fad2cf] bg-[#fce8e6] px-4 py-3 text-sm text-[#c5221f]">
          GA4: {ga4.error}
        </div>
      ) : null}

      {view === "overview" ? (
        <AdminOverview
          gsc={snapshot ?? null}
          ga4={ga4Snapshot ?? null}
          focusFlat={serp?.flat ?? focusKeywordRankings}
          trackedUpdated={trackedUpdated}
          onGoView={(next) => goView(next)}
        />
      ) : null}

      {view === "analytics" ? (
      <section className="overflow-hidden rounded-2xl border border-[#dadce0] bg-white shadow-sm">
        <div className="border-b border-[#dadce0] px-4 py-4 sm:px-5">
          <h2 className="text-lg font-medium text-[#202124]">Google Analytics 4</h2>
          <p className="mt-1 text-xs text-[#5f6368]">
            {ga4Snapshot
              ? `${ga4Snapshot.propertyName} · properties/${ga4Snapshot.propertyId}${
                  ga4Snapshot.measurementId ? ` · ${ga4Snapshot.measurementId}` : ""
                } · ${ga4Snapshot.startDate} ถึง ${ga4Snapshot.endDate}`
              : "เซสชัน ผู้ใช้ และหน้ายอดนิยมจาก GA4"}
          </p>
          {ga4Snapshot ? (
            <div className="mt-4 space-y-3">
              <div className="rounded-xl border border-[#ceead6] bg-[#e6f4ea] px-3 py-3 sm:px-4">
                <p className="text-xs font-medium text-[#137333]">เรียลไทม์ (30 นาทีล่าสุด)</p>
                <p className="mt-1 text-2xl font-medium tabular-nums text-[#137333]">
                  {formatInt(ga4Snapshot.realtime?.activeUsers ?? 0)}{" "}
                  <span className="text-sm font-normal">ผู้ใช้ที่ใช้งานอยู่</span>
                </p>
                {(ga4Snapshot.realtime?.topPages?.length ?? 0) > 0 ? (
                  <p className="mt-1 truncate text-xs text-[#137333]">
                    หน้าฮิต:{" "}
                    {ga4Snapshot.realtime.topPages
                      .slice(0, 3)
                      .map((p) => `${p.pagePath} (${p.activeUsers})`)
                      .join(" · ")}
                  </p>
                ) : null}
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
                <div className="rounded-xl bg-[#f8f9fa] px-3 py-3">
                  <p className="text-xs text-[#5f6368]">Sessions</p>
                  <p className="mt-1 text-xl font-medium tabular-nums text-[#4285f4]">
                    {formatInt(ga4Snapshot.totals.sessions)}
                  </p>
                </div>
                <div className="rounded-xl bg-[#f8f9fa] px-3 py-3">
                  <p className="text-xs text-[#5f6368]">Users</p>
                  <p className="mt-1 text-xl font-medium tabular-nums text-[#a142f4]">
                    {formatInt(ga4Snapshot.totals.users)}
                  </p>
                </div>
                <div className="rounded-xl bg-[#f8f9fa] px-3 py-3">
                  <p className="text-xs text-[#5f6368]">Views</p>
                  <p className="mt-1 text-xl font-medium tabular-nums text-[#34a853]">
                    {formatInt(ga4Snapshot.totals.pageViews)}
                  </p>
                </div>
                <div className="rounded-xl bg-[#f8f9fa] px-3 py-3">
                  <p className="text-xs text-[#5f6368]">Bounce rate</p>
                  <p className="mt-1 text-xl font-medium tabular-nums text-[#f9ab00]">
                    {formatBounce(ga4Snapshot.totals.bounceRate)}
                  </p>
                </div>
                <div className="rounded-xl bg-[#f8f9fa] px-3 py-3">
                  <p className="text-xs text-[#5f6368]">Avg. duration</p>
                  <p className="mt-1 text-xl font-medium tabular-nums text-[#202124]">
                    {formatDuration(ga4Snapshot.totals.avgSessionDuration)}
                  </p>
                </div>
              </div>
            </div>
          ) : null}
        </div>

        <div className="overflow-x-auto border-b border-[#dadce0]">
          <div className="flex min-w-max gap-1 px-2 sm:px-3">
            {GA4_TABS.map((item) => {
              const active = ga4Tab === item.key;
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setGa4Tab(item.key)}
                  className={`border-b-2 px-3 py-3 text-sm whitespace-nowrap ${
                    active
                      ? "border-[#202124] font-medium text-[#202124]"
                      : "border-transparent text-[#5f6368] hover:text-[#202124]"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-sm">
            <thead>
              <tr className="border-b border-[#dadce0] text-left">
                <th className="px-4 py-3 font-medium text-[#5f6368] sm:px-5">{ga4FirstCol}</th>
                {(
                  [
                    ["sessions", "Sessions", "#4285f4"],
                    ["users", "Users", "#a142f4"],
                    ["pageViews", "Views", "#34a853"],
                    ["bounceRate", "Bounce", "#f9ab00"],
                    ["avgSessionDuration", "Duration", "#5f6368"],
                  ] as const
                ).map(([key, label, color]) => (
                  <th key={key} className="px-3 py-3 text-right">
                    <button
                      type="button"
                      onClick={() => onGa4Sort(key)}
                      className="font-medium"
                      style={{ color: ga4SortKey === key ? color : "#5f6368" }}
                    >
                      {label}
                      {ga4SortKey === key ? (ga4SortAsc ? " ↑" : " ↓") : ""}
                    </button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ga4Loading ? (
                <tr>
                  <td colSpan={6} className="px-4 py-16 text-center text-[#5f6368]">
                    กำลังโหลด GA4...
                  </td>
                </tr>
              ) : ga4Rows.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-4 py-16 text-center text-[#5f6368]">
                    {ga4?.configured
                      ? "ยังไม่มีข้อมูลในช่วงนี้ (พร็อพเพอร์ตี้ใหม่อาจว่าง 1–2 วัน)"
                      : "ยังไม่ได้เชื่อม GA4 — กด Connect Google"}
                  </td>
                </tr>
              ) : (
                ga4Rows.map((row) => {
                  const key = row.keys[0] ?? "";
                  return (
                    <tr key={`ga4-${ga4Tab}-${key}`} className="border-b border-[#f1f3f4] hover:bg-[#f8f9fa]">
                      <td className="max-w-[360px] truncate px-4 py-3 text-[#202124] sm:px-5">
                        {labelForGa4Row(ga4Tab, key)}
                      </td>
                      <td className="px-3 py-3 text-right tabular-nums text-[#4285f4]">
                        {formatInt(row.sessions)}
                      </td>
                      <td className="px-3 py-3 text-right tabular-nums text-[#a142f4]">
                        {formatInt(row.users)}
                      </td>
                      <td className="px-3 py-3 text-right tabular-nums text-[#34a853]">
                        {formatInt(row.pageViews)}
                      </td>
                      <td className="px-3 py-3 text-right tabular-nums text-[#f9ab00]">
                        {formatBounce(row.bounceRate)}
                      </td>
                      <td className="px-3 py-3 text-right tabular-nums text-[#5f6368]">
                        {formatDuration(row.avgSessionDuration)}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </section>
      ) : null}

      {view === "gsc" ? (
      <section className="overflow-hidden rounded-2xl border border-[#dadce0] bg-white shadow-sm">
        <div className="space-y-3 border-b border-[#dadce0] px-4 py-4 sm:px-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-lg font-medium text-[#202124]">Search Console</h2>
            <span className="rounded-full border border-[#dadce0] bg-white px-3 py-1.5 text-sm text-[#3c4043]">
              ประเภทการค้นหา: เว็บ
            </span>
          </div>
          <p className="text-xs text-[#5f6368]">
            {snapshot
              ? `ช่วงข้อมูล ${snapshot.startDate} ถึง ${snapshot.endDate} · ${snapshot.siteUrl}`
              : "เลือกช่วงเวลาแล้วระบบจะดึงจาก Search Console"}
          </p>
        </div>

        <div className="overflow-x-auto border-b border-[#dadce0]">
          <div className="flex min-w-max gap-1 px-2 sm:px-3">
            {TABS.map((item) => {
              const active = tab === item.key;
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setTab(item.key)}
                  className={`border-b-2 px-3 py-3 text-sm whitespace-nowrap ${
                    active
                      ? "border-[#202124] font-medium text-[#202124]"
                      : "border-transparent text-[#5f6368] hover:text-[#202124]"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-sm">
            <thead>
              <tr className="border-b border-[#dadce0] text-left">
                <th className="px-4 py-3 font-medium text-[#5f6368] sm:px-5">{firstColLabel}</th>
                <th className="px-3 py-3 text-right">
                  <button
                    type="button"
                    onClick={() => onSort("clicks")}
                    className={`font-medium ${sortKey === "clicks" ? "text-[#4285f4]" : "text-[#5f6368]"}`}
                  >
                    การคลิก{sortKey === "clicks" ? (sortAsc ? " ↑" : " ↓") : ""}
                  </button>
                </th>
                <th className="px-3 py-3 text-right">
                  <button
                    type="button"
                    onClick={() => onSort("impressions")}
                    className={`font-medium ${sortKey === "impressions" ? "text-[#a142f4]" : "text-[#5f6368]"}`}
                  >
                    การแสดงผล{sortKey === "impressions" ? (sortAsc ? " ↑" : " ↓") : ""}
                  </button>
                </th>
                <th className="px-3 py-3 text-right">
                  <button
                    type="button"
                    onClick={() => onSort("ctr")}
                    className={`font-medium ${sortKey === "ctr" ? "text-[#34a853]" : "text-[#5f6368]"}`}
                  >
                    CTR{sortKey === "ctr" ? (sortAsc ? " ↑" : " ↓") : ""}
                  </button>
                </th>
                <th className="px-4 py-3 text-right sm:px-5">
                  <button
                    type="button"
                    onClick={() => onSort("position")}
                    className={`font-medium ${sortKey === "position" ? "text-[#f9ab00]" : "text-[#5f6368]"}`}
                  >
                    ตำแหน่ง{sortKey === "position" ? (sortAsc ? " ↑" : " ↓") : ""}
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={5} className="px-4 py-16 text-center text-[#5f6368]">
                    กำลังโหลดข้อมูล...
                  </td>
                </tr>
              ) : activeRows.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-4 py-16 text-center text-[#5f6368]">
                    ไม่มีข้อมูลในช่วงนี้
                  </td>
                </tr>
              ) : (
                activeRows.map((row) => {
                  const key = row.keys[0] ?? "";
                  return (
                    <tr key={`${tab}-${key}`} className="border-b border-[#f1f3f4] hover:bg-[#f8f9fa]">
                      <td className="max-w-[360px] truncate px-4 py-3 text-[#202124] sm:px-5">
                        {labelForRow(tab, key)}
                      </td>
                      <td className="px-3 py-3 text-right tabular-nums text-[#4285f4]">
                        {formatInt(row.clicks)}
                      </td>
                      <td className="px-3 py-3 text-right tabular-nums text-[#a142f4]">
                        {formatInt(row.impressions)}
                      </td>
                      <td className="px-3 py-3 text-right tabular-nums text-[#34a853]">
                        {formatPct(row.ctr)}
                      </td>
                      <td className="px-4 py-3 text-right tabular-nums text-[#f9ab00] sm:px-5">
                        {formatPos(row.position)}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
            {activeRows.length > 0 ? (
              <tfoot>
                <tr className="bg-[#f8f9fa] text-sm">
                  <td className="px-4 py-3 font-medium text-[#202124] sm:px-5">
                    รวม {formatInt(activeRows.length)} รายการ
                  </td>
                  <td className="px-3 py-3 text-right font-medium tabular-nums text-[#4285f4]">
                    {formatInt(totals.clicks)}
                  </td>
                  <td className="px-3 py-3 text-right font-medium tabular-nums text-[#a142f4]">
                    {formatInt(totals.impressions)}
                  </td>
                  <td className="px-3 py-3 text-right text-[#5f6368]">—</td>
                  <td className="px-4 py-3 text-right text-[#5f6368] sm:px-5">—</td>
                </tr>
              </tfoot>
            ) : null}
          </table>
        </div>
      </section>
      ) : null}

      {view === "keywords" ? (
      <section className="overflow-hidden rounded-2xl border border-[#dadce0] bg-white shadow-sm">
        <div className="flex flex-wrap items-end justify-between gap-3 border-b border-[#dadce0] px-4 py-3 sm:px-5">
          <div>
            <h2 className="text-base font-medium text-[#202124]">คีย์โฟกัส — แยกตามหน้า</h2>
            <p className="text-xs text-[#5f6368]">
              ป้าย &quot;ใหม่&quot; = หน้าที่เปิด/ดันรอบล่าสุด · อันดับล่าสุดดึงจาก GSC exact query
              {serp?.serpApiConfigured ? " + SerpAPI" : ""}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-xs text-[#5f6368]">อัปเดต {trackedUpdated}</p>
            <button
              type="button"
              onClick={() => void checkLatestRanks()}
              disabled={serpChecking}
              className="rounded-full bg-[#1a73e8] px-4 py-1.5 text-xs font-medium text-white hover:bg-[#1558b0] disabled:opacity-60"
            >
              {serpChecking ? "กำลังเช็ค…" : "เช็คอันดับล่าสุด"}
            </button>
          </div>
        </div>
        {serpMessage ? (
          <p className="border-b border-[#dadce0] bg-[#f8f9fa] px-4 py-2 text-xs text-[#5f6368] sm:px-5">
            {serpMessage}
          </p>
        ) : null}
        <div className="space-y-6 px-4 py-4 sm:px-5">
          {focusGroups.map((group) => (
            <div key={group.pagePath} className="overflow-hidden rounded-xl border border-[#e8eaed]">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e8eaed] bg-[#f8f9fa] px-3 py-2.5">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-sm font-medium text-[#202124]">{group.pageLabel}</p>
                  {group.cohort === "new-2026-11" ? (
                    <span className="rounded-full bg-[#e8f0fe] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#1a73e8]">
                      ใหม่
                    </span>
                  ) : null}
                </div>
                <Link href={group.pagePath} className="text-xs text-[#1a73e8] hover:underline">
                  {group.pagePath}
                </Link>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-[#dadce0] text-[#5f6368]">
                      <th className="px-3 py-2 font-medium">คีย์เวิร์ด</th>
                      <th className="px-3 py-2 font-medium">อันดับล่าสุด</th>
                      <th className="px-3 py-2 font-medium text-right text-[#f9ab00]">ตำแหน่ง GSC</th>
                      <th className="px-3 py-2 font-medium text-right text-[#4285f4]">คลิก</th>
                      <th className="px-3 py-2 font-medium text-right text-[#a142f4]">แสดงผล</th>
                    </tr>
                  </thead>
                  <tbody>
                    {group.keywords.map((row) => {
                      const gscRow = gscByKeyword.get(row.keyword.toLowerCase()) ?? null;
                      return (
                        <tr key={row.keyword} className="border-b border-[#f1f3f4] last:border-0">
                          <td className="px-3 py-2 text-[#202124]">{row.keyword}</td>
                          <td className="px-3 py-2 tabular-nums text-[#202124]">
                            {row.notRanked
                              ? "ไม่ติด / ยังไม่มีข้อมูล"
                              : row.rank != null
                                ? `#${row.rank}`
                                : "—"}
                          </td>
                          <td className="px-3 py-2 text-right tabular-nums text-[#f9ab00]">
                            {gscRow ? formatPos(gscRow.position) : "—"}
                          </td>
                          <td className="px-3 py-2 text-right tabular-nums text-[#4285f4]">
                            {gscRow ? formatInt(gscRow.clicks) : "—"}
                          </td>
                          <td className="px-3 py-2 text-right tabular-nums text-[#a142f4]">
                            {gscRow ? formatInt(gscRow.impressions) : "—"}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
        <p className="border-t border-[#dadce0] px-4 py-3 text-xs text-[#5f6368] sm:px-5">
          แหล่งอันดับ: GSC = ตำแหน่งเฉลี่ยในช่วงที่เลือก · SerpAPI = อันดับ organic จริง (ถ้าตั้ง{" "}
          <code className="rounded bg-[#f1f3f4] px-1">SERPAPI_KEY</code>) · หน้าเป้าหมาย{" "}
          {pageLabelForPath("/services/seo-phuket")} ฯลฯ
        </p>
      </section>
      ) : null}
      </div>
    </div>
  );
}
