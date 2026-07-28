import Link from "next/link";
import {
  focusKeywordRankings,
  focusKeywordRankingsLastUpdated,
  type FocusKeywordRanking,
} from "@/lib/focus-keyword-rankings";

function formatRank(rank: number | null, notRanked?: boolean) {
  if (notRanked) return "ไม่ติดอันดับ";
  if (rank === null) return "รออัปเดต";
  return `#${rank}`;
}

function rankClass(rank: number | null, notRanked?: boolean) {
  if (notRanked) return "text-slate-500";
  if (rank === 1) return "font-bold text-emerald-700";
  if (rank !== null && rank <= 3) return "font-semibold text-emerald-600";
  if (rank !== null && rank <= 10) return "font-medium text-slate-900";
  return "text-slate-500";
}

function sortByRank(rows: FocusKeywordRanking[]) {
  return [...rows].sort((a, b) => {
    const order = (row: FocusKeywordRanking) => {
      if (row.notRanked) return Number.MAX_SAFE_INTEGER;
      if (row.rank === null) return Number.MAX_SAFE_INTEGER - 1;
      return row.rank;
    };
    const diff = order(a) - order(b);
    if (diff !== 0) return diff;
    return a.keyword.localeCompare(b.keyword, "th");
  });
}

const formattedUpdateDate = new Date(focusKeywordRankingsLastUpdated).toLocaleDateString("th-TH", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export function FocusKeywordRankingsTable() {
  const rows = sortByRank(focusKeywordRankings);

  return (
    <div>
      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full text-sm sm:text-base text-left">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50/80">
              <th className="px-4 py-3 font-semibold text-slate-900">คีย์เวิร์ด</th>
              <th className="px-4 py-3 font-semibold text-slate-900 w-28">อันดับ</th>
              <th className="px-4 py-3 font-semibold text-slate-900">หน้าที่ติด</th>
            </tr>
          </thead>
          <tbody className="text-slate-700">
            {rows.map((row) => (
              <tr key={row.keyword} className="border-b border-slate-100 last:border-0">
                <td className="px-4 py-3 font-medium text-slate-900">{row.keyword}</td>
                <td className={`px-4 py-3 tabular-nums ${rankClass(row.rank, row.notRanked)}`}>
                  {formatRank(row.rank, row.notRanked)}
                </td>
                <td className="px-4 py-3">
                  <Link
                    href={row.pagePath}
                    className="text-violet-600 font-medium hover:underline underline-offset-2"
                  >
                    {row.pagePath}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm text-slate-600 leading-relaxed">
        เช็คอันดับด้วยการค้นหาจริงบน Google (ภูเก็ต). ไม่รับประกันอันดับคงที่ — ใช้เป็นตัวอย่างผลงานของเว็บ
        PhuketSEO เอง
      </p>
      <p className="mt-2 text-xs text-slate-500">
        หมายเหตุ: อัปเดตอันดับ{" "}
        <time dateTime={focusKeywordRankingsLastUpdated}>{formattedUpdateDate}</time>
      </p>
    </div>
  );
}
