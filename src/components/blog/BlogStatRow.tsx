import type { BlogTheme } from "@/lib/blog-theme";

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
  if (theme === "vercel") {
    return (
      <div className="my-10 grid grid-cols-1 sm:grid-cols-3 border border-neutral-200 rounded-lg overflow-hidden divide-y sm:divide-y-0 sm:divide-x divide-neutral-200">
        {items.map((item) => (
          <div key={item.label} className="px-5 py-5 text-center bg-white">
            <div className="text-2xl font-semibold text-neutral-900 tracking-tight leading-tight mb-1">
              {item.value}
            </div>
            <div className="text-sm font-medium text-neutral-700">{item.label}</div>
            {item.sub && <div className="text-xs text-neutral-500 mt-1.5">{item.sub}</div>}
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
