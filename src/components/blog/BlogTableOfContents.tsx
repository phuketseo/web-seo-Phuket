import Link from "next/link";
import { List } from "lucide-react";
import type { BlogHeading } from "@/lib/blog-content-utils";
import type { BlogTheme } from "@/lib/blog-theme";

type Props = {
  headings: BlogHeading[];
  variant?: "sidebar" | "mobile";
  theme?: BlogTheme;
};

export function BlogTableOfContents({ headings, variant = "sidebar", theme = "default" }: Props) {
  if (headings.length < 3) return null;

  const isVercel = theme === "vercel";

  if (variant === "mobile") {
    return (
      <details
        className={
          isVercel
            ? "lg:hidden mb-8 border border-neutral-200 rounded-lg overflow-hidden group"
            : "lg:hidden mb-8 rounded-xl border border-slate-200 bg-slate-50 overflow-hidden group"
        }
      >
        <summary
          className={
            isVercel
              ? "flex items-center gap-2 cursor-pointer px-4 py-3 text-sm font-medium text-neutral-900 list-none"
              : "flex items-center gap-2 cursor-pointer px-4 py-3 font-semibold text-slate-800 list-none"
          }
        >
          <List size={16} className={isVercel ? "text-neutral-500" : "text-indigo-600"} />
          สารบัญบทความ
        </summary>
        <ul
          className={
            isVercel
              ? "px-4 pb-4 space-y-2 text-sm border-t border-neutral-200 pt-3"
              : "px-4 pb-4 space-y-2 text-sm border-t border-slate-200 pt-3"
          }
        >
          {headings.map((h) => (
            <li key={h.id}>
              <Link
                href={`#${h.id}`}
                className={
                  isVercel
                    ? "text-neutral-600 hover:text-neutral-900 block py-0.5 transition-colors"
                    : "text-slate-700 hover:text-indigo-600 block py-0.5"
                }
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
      <div className={isVercel ? "lg:sticky lg:top-24" : "rounded-xl border border-slate-200 bg-slate-50 p-5 lg:sticky lg:top-24"}>
        <p
          className={
            isVercel
              ? "text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-500 mb-4"
              : "text-xs font-bold uppercase tracking-wider text-slate-500 mb-3"
          }
        >
          สารบัญ
        </p>
        <ul className="space-y-2.5 text-sm">
          {headings.map((h) => (
            <li key={h.id}>
              <Link
                href={`#${h.id}`}
                className={
                  isVercel
                    ? "text-neutral-600 hover:text-neutral-900 leading-snug block py-0.5 border-l border-transparent hover:border-neutral-900 pl-3 -ml-px transition-colors"
                    : "text-slate-700 hover:text-indigo-600 leading-snug block py-0.5 border-l-2 border-transparent hover:border-indigo-400 pl-3 -ml-px transition-colors"
                }
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
