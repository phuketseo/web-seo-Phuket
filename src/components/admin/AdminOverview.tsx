"use client";

import Link from "next/link";
import type { FocusKeywordRanking } from "@/lib/focus-keyword-rankings";
import type { Ga4Snapshot } from "@/lib/ga4";
import type { GscSnapshot } from "@/lib/gsc";

type Props = {
  gsc: GscSnapshot | null;
  ga4: Ga4Snapshot | null;
  focusFlat: FocusKeywordRanking[];
  trackedUpdated: string;
  onGoView: (view: "gsc" | "analytics" | "keywords") => void;
};

function formatInt(n: number) {
  return new Intl.NumberFormat("th-TH").format(Math.round(n));
}

function formatPct(ctr: number) {
  return `${(ctr * 100).toFixed(1)}%`;
}

function formatBounce(rate: number) {
  return `${(rate * 100).toFixed(1)}%`;
}

function formatPos(position: number) {
  return position.toFixed(1);
}

function shortDay(iso: string) {
  // GSC: YYYY-MM-DD · GA4: YYYYMMDD
  if (/^\d{8}$/.test(iso)) {
    return `${iso.slice(4, 6)}/${iso.slice(6, 8)}`;
  }
  if (/^\d{4}-\d{2}-\d{2}$/.test(iso)) {
    return `${iso.slice(5, 7)}/${iso.slice(8, 10)}`;
  }
  return iso;
}

function normalizeDayKey(raw: string) {
  if (/^\d{8}$/.test(raw)) {
    return `${raw.slice(0, 4)}-${raw.slice(4, 6)}-${raw.slice(6, 8)}`;
  }
  return raw;
}

type DayRow = {
  day: string;
  clicks: number;
  impressions: number;
  sessions: number;
  users: number;
};

function buildDailyMatrix(gsc: GscSnapshot | null, ga4: Ga4Snapshot | null): DayRow[] {
  const map = new Map<string, DayRow>();

  for (const row of gsc?.dates ?? []) {
    const day = normalizeDayKey(row.keys[0] ?? "");
    if (!day) continue;
    const cur = map.get(day) ?? { day, clicks: 0, impressions: 0, sessions: 0, users: 0 };
    cur.clicks = row.clicks;
    cur.impressions = row.impressions;
    map.set(day, cur);
  }

  for (const row of ga4?.dates ?? []) {
    const day = normalizeDayKey(row.keys[0] ?? "");
    if (!day) continue;
    const cur = map.get(day) ?? { day, clicks: 0, impressions: 0, sessions: 0, users: 0 };
    cur.sessions = row.sessions;
    cur.users = row.users;
    map.set(day, cur);
  }

  return [...map.values()].sort((a, b) => a.day.localeCompare(b.day));
}

const CHART_DAYS = 30;
const CHART_HEIGHT_PX = 140;

function BarChart({
  rows,
  valueKey,
  color,
  label,
}: {
  rows: DayRow[];
  valueKey: keyof Pick<DayRow, "clicks" | "impressions" | "sessions" | "users">;
  color: string;
  label: string;
}) {
  const recent = rows.slice(-CHART_DAYS);
  const values = recent.map((r) => r[valueKey]);
  const max = Math.max(1, ...values);

  return (
    <div className="rounded-xl border border-[#e8eaed] bg-[#f8f9fa]/80 p-3 sm:p-4">
      <div className="flex items-baseline justify-between gap-2">
        <p className="text-xs font-medium text-[#5f6368]">{label}</p>
        <p className="text-[10px] tabular-nums text-[#5f6368]">
          สูงสุด {formatInt(max)} · {recent.length} วัน
        </p>
      </div>
      {recent.length === 0 ? (
        <p className="mt-6 text-center text-sm text-[#5f6368]">ยังไม่มีข้อมูลรายวัน</p>
      ) : (
        <div className="mt-3 overflow-x-auto">
          <div
            className="flex items-end gap-[3px] pb-1"
            style={{ minWidth: Math.max(280, recent.length * 18), height: CHART_HEIGHT_PX + 22 }}
          >
            {recent.map((row) => {
              const v = row[valueKey];
              const barH =
                v <= 0 ? 2 : Math.max(6, Math.round((v / max) * CHART_HEIGHT_PX));
              return (
                <div
                  key={`${valueKey}-${row.day}`}
                  className="flex w-[14px] shrink-0 flex-col items-center justify-end gap-1"
                  style={{ height: CHART_HEIGHT_PX + 22 }}
                  title={`${row.day}: ${formatInt(v)}`}
                >
                  <span className="text-[9px] tabular-nums leading-none text-[#5f6368]">
                    {v > 0 ? formatInt(v) : ""}
                  </span>
                  <div
                    className="w-full rounded-t-[3px]"
                    style={{
                      height: barH,
                      backgroundColor: color,
                      opacity: v > 0 ? 1 : 0.25,
                    }}
                  />
                  <span className="truncate text-[8px] leading-none text-[#5f6368]">
                    {shortDay(row.day)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export function AdminOverview({
  gsc,
  ga4,
  focusFlat,
  trackedUpdated,
  onGoView,
}: Props) {
  const daily = buildDailyMatrix(gsc, ga4);

  const gscTotals = (gsc?.dates ?? []).reduce(
    (acc, row) => {
      acc.clicks += row.clicks;
      acc.impressions += row.impressions;
      return acc;
    },
    { clicks: 0, impressions: 0 },
  );
  const gscAvgPos =
    (gsc?.topQueries?.length ?? 0) > 0
      ? gsc!.topQueries.reduce((s, r) => s + r.position, 0) / gsc!.topQueries.length
      : 0;
  const gscCtr = gscTotals.impressions > 0 ? gscTotals.clicks / gscTotals.impressions : 0;

  const ranked = focusFlat.filter((k) => k.rank != null && !k.notRanked);
  const top10 = ranked.filter((k) => (k.rank ?? 99) <= 10);
  const waiting = focusFlat.filter((k) => k.rank == null && !k.notRanked);
  const neu = focusFlat.filter((k) => k.cohort === "new-2026-11");
  const neuWaiting = neu.filter((k) => k.rank == null);

  const keywordClicks = [...(gsc?.topQueries ?? [])]
    .filter((row) => row.clicks > 0)
    .sort((a, b) => b.clicks - a.clicks || b.impressions - a.impressions)
    .slice(0, 12);
  const keywordClickMax = Math.max(1, ...keywordClicks.map((r) => r.clicks));

  const rankedSorted = [...ranked].sort((a, b) => (a.rank ?? 99) - (b.rank ?? 99)).slice(0, 10);

  return (
    <section className="space-y-5">
      {/* Metric cards — 3 แถบ */}
      <div className="grid gap-3 lg:grid-cols-3">
        <div className="rounded-2xl border border-[#dadce0] bg-white p-4 shadow-sm sm:p-5">
          <div className="flex items-center justify-between gap-2">
            <p className="text-sm font-medium text-[#202124]">Search Console</p>
            <button type="button" onClick={() => onGoView("gsc")} className="text-xs text-[#1a73e8] hover:underline">
              ดูเต็ม →
            </button>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div>
              <p className="text-xs text-[#5f6368]">คลิก</p>
              <p className="mt-0.5 text-2xl font-medium tabular-nums text-[#4285f4]">{formatInt(gscTotals.clicks)}</p>
            </div>
            <div>
              <p className="text-xs text-[#5f6368]">แสดงผล</p>
              <p className="mt-0.5 text-2xl font-medium tabular-nums text-[#a142f4]">
                {formatInt(gscTotals.impressions)}
              </p>
            </div>
            <div>
              <p className="text-xs text-[#5f6368]">CTR เฉลี่ย</p>
              <p className="mt-0.5 text-lg font-medium tabular-nums text-[#34a853]">{formatPct(gscCtr)}</p>
            </div>
            <div>
              <p className="text-xs text-[#5f6368]">ตำแหน่งเฉลี่ย*</p>
              <p className="mt-0.5 text-lg font-medium tabular-nums text-[#f9ab00]">
                {gscAvgPos > 0 ? formatPos(gscAvgPos) : "—"}
              </p>
            </div>
          </div>
          <p className="mt-3 text-[11px] text-[#5f6368]">*จาก top queries ในช่วงที่เลือก</p>
        </div>

        <div className="rounded-2xl border border-[#dadce0] bg-white p-4 shadow-sm sm:p-5">
          <div className="flex items-center justify-between gap-2">
            <p className="text-sm font-medium text-[#202124]">Analytics</p>
            <button
              type="button"
              onClick={() => onGoView("analytics")}
              className="text-xs text-[#1a73e8] hover:underline"
            >
              ดูเต็ม →
            </button>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div>
              <p className="text-xs text-[#5f6368]">Sessions</p>
              <p className="mt-0.5 text-2xl font-medium tabular-nums text-[#4285f4]">
                {formatInt(ga4?.totals.sessions ?? 0)}
              </p>
            </div>
            <div>
              <p className="text-xs text-[#5f6368]">Users</p>
              <p className="mt-0.5 text-2xl font-medium tabular-nums text-[#a142f4]">
                {formatInt(ga4?.totals.users ?? 0)}
              </p>
            </div>
            <div>
              <p className="text-xs text-[#5f6368]">Views</p>
              <p className="mt-0.5 text-lg font-medium tabular-nums text-[#34a853]">
                {formatInt(ga4?.totals.pageViews ?? 0)}
              </p>
            </div>
            <div>
              <p className="text-xs text-[#5f6368]">Bounce / Realtime</p>
              <p className="mt-0.5 text-lg font-medium tabular-nums text-[#f9ab00]">
                {ga4 ? formatBounce(ga4.totals.bounceRate) : "—"}
                <span className="ml-2 text-sm text-[#137333]">
                  · {formatInt(ga4?.realtime?.activeUsers ?? 0)} online
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-[#dadce0] bg-white p-4 shadow-sm sm:p-5">
          <div className="flex items-center justify-between gap-2">
            <p className="text-sm font-medium text-[#202124]">Keyword Focus</p>
            <button
              type="button"
              onClick={() => onGoView("keywords")}
              className="text-xs text-[#1a73e8] hover:underline"
            >
              ดูเต็ม →
            </button>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div>
              <p className="text-xs text-[#5f6368]">คีย์ทั้งหมด</p>
              <p className="mt-0.5 text-2xl font-medium tabular-nums text-[#202124]">{focusFlat.length}</p>
            </div>
            <div>
              <p className="text-xs text-[#5f6368]">ติด Top 10</p>
              <p className="mt-0.5 text-2xl font-medium tabular-nums text-[#34a853]">{top10.length}</p>
            </div>
            <div>
              <p className="text-xs text-[#5f6368]">มีอันดับแล้ว</p>
              <p className="mt-0.5 text-lg font-medium tabular-nums text-[#4285f4]">{ranked.length}</p>
            </div>
            <div>
              <p className="text-xs text-[#5f6368]">คีย์ใหม่รอข้อมูล</p>
              <p className="mt-0.5 text-lg font-medium tabular-nums text-[#f9ab00]">
                {neuWaiting.length}/{neu.length}
              </p>
            </div>
          </div>
          <p className="mt-3 text-[11px] text-[#5f6368]">อัปเดตอันดับ {trackedUpdated} · รอข้อมูลรวม {waiting.length}</p>
        </div>
      </div>

      {/* Daily charts */}
      <div className="rounded-2xl border border-[#dadce0] bg-white p-4 shadow-sm sm:p-5">
        <div className="flex flex-wrap items-end justify-between gap-2">
          <div>
            <h2 className="text-base font-medium text-[#202124]">สรุปรายวัน</h2>
            <p className="text-xs text-[#5f6368]">
              กราฟแท่งรายวัน 30 วันล่าสุดในช่วงที่เลือก · GSC คลิก/แสดงผล + GA4 sessions
            </p>
          </div>
        </div>
        <div className="mt-4 grid gap-3 lg:grid-cols-3">
          <BarChart rows={daily} valueKey="clicks" color="#4285f4" label="GSC · คลิก" />
          <BarChart rows={daily} valueKey="impressions" color="#a142f4" label="GSC · แสดงผล" />
          <BarChart rows={daily} valueKey="sessions" color="#34a853" label="GA4 · Sessions" />
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-[#dadce0] bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-[#dadce0] px-4 py-3">
            <div>
              <h2 className="text-sm font-medium text-[#202124]">คีย์เวิร์ด · คลิกมากสุด</h2>
              <p className="text-xs text-[#5f6368]">กราฟแนวนอน · เฉพาะคีย์ที่มีคลิก · รายละเอียดเต็มที่ Search Console</p>
            </div>
            <button type="button" onClick={() => onGoView("gsc")} className="text-xs text-[#1a73e8] hover:underline">
              ดูเต็ม →
            </button>
          </div>
          <div className="space-y-2.5 p-4">
            {keywordClicks.length === 0 ? (
              <p className="py-6 text-center text-sm text-[#5f6368]">ยังไม่มีคีย์ที่มีคลิกในช่วงนี้</p>
            ) : (
              keywordClicks.map((row) => {
                const q = row.keys[0] ?? "";
                const width = Math.max(8, Math.round((row.clicks / keywordClickMax) * 100));
                return (
                  <div key={q} className="grid grid-cols-[minmax(0,1fr)_52px] items-center gap-3">
                    <div className="min-w-0">
                      <p className="truncate text-sm text-[#202124]" title={q}>
                        {q}
                      </p>
                      <div className="mt-1 h-2.5 overflow-hidden rounded-full bg-[#e8eaed]">
                        <div
                          className="h-full rounded-full bg-[#4285f4]"
                          style={{ width: `${width}%` }}
                          title={`${formatInt(row.clicks)} คลิก`}
                        />
                      </div>
                    </div>
                    <p className="text-right text-sm font-medium tabular-nums text-[#4285f4]">
                      {formatInt(row.clicks)}
                    </p>
                  </div>
                );
              })
            )}
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#dadce0] bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-[#dadce0] px-4 py-3">
            <div>
              <h2 className="text-sm font-medium text-[#202124]">Keyword Focus · Top 10</h2>
              <p className="text-xs text-[#5f6368]">ตำแหน่งดีสุด 10 คีย์ · รายละเอียดเต็มที่ Keyword Focus</p>
            </div>
            <button
              type="button"
              onClick={() => onGoView("keywords")}
              className="text-xs text-[#1a73e8] hover:underline"
            >
              ดูเต็ม →
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[360px] text-sm">
              <thead>
                <tr className="border-b border-[#dadce0] text-[#5f6368]">
                  <th className="px-3 py-2 text-left font-medium">#</th>
                  <th className="px-3 py-2 text-left font-medium">คีย์</th>
                  <th className="px-3 py-2 text-right font-medium">อันดับ</th>
                  <th className="px-3 py-2 text-left font-medium">หน้า</th>
                </tr>
              </thead>
              <tbody>
                {rankedSorted.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-3 py-8 text-center text-[#5f6368]">
                      ยังไม่มีอันดับ — ไป Keyword Focus กดเช็คอันดับล่าสุด
                    </td>
                  </tr>
                ) : (
                  rankedSorted.map((row, i) => (
                    <tr key={row.keyword} className="border-b border-[#f1f3f4] last:border-0">
                      <td className="px-3 py-2 tabular-nums text-[#5f6368]">{i + 1}</td>
                      <td className="max-w-[180px] truncate px-3 py-2 text-[#202124]">{row.keyword}</td>
                      <td className="px-3 py-2 text-right tabular-nums font-medium text-[#34a853]">
                        #{row.rank}
                      </td>
                      <td className="px-3 py-2">
                        <Link href={row.pagePath} className="text-xs text-[#1a73e8] hover:underline">
                          {row.pagePath}
                        </Link>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
