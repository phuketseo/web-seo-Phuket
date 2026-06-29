import Link from "next/link";
import { List } from "lucide-react";
import type { BlogHeading } from "@/lib/blog-content-utils";

import type { BlogTheme } from "@/lib/blog-theme";

type Props = {
  headings: BlogHeading[];
  variant?: "sidebar" | "mobile";
  theme?: BlogTheme;
};

export function BlogTableOfContents({ headings, variant = "sidebar" }: Props) {
  if (headings.length < 3) return null;

  if (variant === "mobile") {
    return (
      <details className="lg:hidden mb-8 rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden group">
        <summary className="flex items-center gap-2 cursor-pointer px-4 py-3 font-semibold text-slate-800 list-none">
          <List size={16} className="text-indigo-600" />
          สารบัญบทความ
        </summary>
        <ul className="px-4 pb-4 space-y-2 text-sm border-t border-slate-200 pt-3">
          {headings.map((h) => (
            <li key={h.id}>
              <Link
                href={`#${h.id}`}
                className="text-slate-700 hover:text-violet-600 block py-0.5 transition-colors"
              >
                {h.text}
              </Link>
            </li>
          ))}
        </ul>
      </details>
    );
  }

  return (
    <nav aria-label="สารบัญ" className="hidden lg:block">
      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-28">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-indigo-600 mb-4">
          สารบัญ
        </p>
        <ul className="space-y-2.5 text-sm">
          {headings.map((h) => (
            <li key={h.id}>
              <Link
                href={`#${h.id}`}
                className="text-slate-700 hover:text-violet-600 leading-snug block py-0.5 border-l-2 border-transparent hover:border-violet-400 pl-3 -ml-px transition-colors"
              >
                {h.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
