import { ChevronDown } from "lucide-react";
import type { BlogTheme } from "@/lib/blog-theme";

type FaqItem = { q: string; a: string };

type Props = {
  faqs: FaqItem[];
  theme?: BlogTheme;
};

export function BlogFaqSection({ faqs, theme = "default" }: Props) {
  if (!faqs?.length) return null;

  if (theme === "vercel") {
    return (
      <section className="mt-14 pt-10 border-t border-neutral-200 blog-prose-vercel">
        <h2
          className="font-bold tracking-tight text-neutral-900 scroll-mt-28"
          id="faq"
        >
          คำถามที่พบบ่อย
        </h2>
        <div className="divide-y divide-neutral-200 border-y border-neutral-200">
          {faqs.map((faq) => (
            <details key={faq.q} className="group">
              <summary className="flex cursor-pointer items-center justify-between gap-4 py-4 font-medium text-neutral-900 hover:text-neutral-600 list-none">
                <span>{faq.q}</span>
                <ChevronDown
                  size={16}
                  className="shrink-0 text-neutral-400 transition-transform group-open:rotate-180"
                />
              </summary>
              <div className="pb-4 text-neutral-600 leading-relaxed pr-8">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="mt-12 pt-10 border-t border-slate-200">
      <h2 className="text-2xl font-bold text-blue-950 font-serif mb-6 scroll-mt-28" id="faq">
        คำถามที่พบบ่อย
      </h2>
      <div className="space-y-3">
        {faqs.map((faq) => (
          <details
            key={faq.q}
            className="group rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 font-semibold text-slate-900 hover:bg-slate-50 list-none">
              <span>{faq.q}</span>
              <ChevronDown
                size={18}
                className="shrink-0 text-slate-400 transition-transform group-open:rotate-180"
              />
            </summary>
            <div className="px-5 pb-4 text-slate-600 text-base leading-relaxed border-t border-slate-100 pt-3">
              {faq.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
