import type { BlogTheme } from "@/lib/blog-theme";
import { isAngaTheme } from "@/lib/blog-theme";

type StatItem = {
  value: string;
  label: string;
  sub?: string;
};

type Props = {
  items: StatItem[];
  theme?: BlogTheme;
};

export function BlogStatRow({ items, theme = "default" }: Props) {
  if (isAngaTheme(theme)) {
    return (
      <div className="my-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
        {items.map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-slate-200 bg-white px-5 py-5 text-center shadow-sm"
          >
            <div className="text-2xl font-bold text-slate-900 tracking-tight leading-tight mb-1 tabular-nums">
              {item.value}
            </div>
            <div className="text-sm font-medium text-slate-700">{item.label}</div>
            {item.sub && <div className="text-xs text-slate-500 mt-1.5">{item.sub}</div>}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="my-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-white px-5 py-4 text-center shadow-sm"
        >
          <div className="text-2xl sm:text-3xl font-bold text-indigo-600 font-serif leading-tight mb-1">
            {item.value}
          </div>
          <div className="text-sm font-semibold text-slate-800">{item.label}</div>
          {item.sub && <div className="text-xs text-slate-500 mt-1">{item.sub}</div>}
        </div>
      ))}
    </div>
  );
}

export function parseStatLine(line: string): StatItem | null {
  const parts = line.split("|").map((p) => p.trim());
  if (parts.length < 2) return null;
  return { value: parts[0], label: parts[1], sub: parts[2] };
}
