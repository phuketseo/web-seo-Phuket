import Link from "next/link";
import type { BlogHeading } from "@/lib/blog-content-utils";

type Props = {
  headings: BlogHeading[];
};

export function BlogAngaToc({ headings }: Props) {
  if (headings.length < 3) return null;

  return (
    <nav
      aria-label="สารบัญบทความ"
      className="mb-10 rounded-2xl border border-violet-100/80 bg-gradient-to-br from-slate-50/90 via-white to-violet-50/30 p-5 sm:p-6 shadow-sm"
    >
      <p className="text-sm font-bold uppercase tracking-[0.1em] text-gradient-brand mb-4">
        สารบัญบทความ
      </p>
      <ol className="space-y-2.5 text-[15px] leading-snug list-none">
        {headings.map((h, index) => (
          <li key={h.id} className="flex gap-2.5">
            <span className="shrink-0 font-bold text-transparent bg-clip-text bg-gradient-to-br from-violet-600 to-indigo-600 tabular-nums">
              {index + 1}.
            </span>
            <Link
              href={`#${h.id}`}
              className="text-slate-800 hover:text-violet-700 transition-colors"
            >
              {h.text}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
