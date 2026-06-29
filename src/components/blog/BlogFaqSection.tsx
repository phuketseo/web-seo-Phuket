import { ChevronDown } from "lucide-react";
import type { BlogTheme } from "@/lib/blog-theme";
import { isAngaTheme } from "@/lib/blog-theme";
import { renderBlogInline } from "@/lib/render-blog-content";

type FaqItem = { q: string; a: string };

type Props = {
  faqs: FaqItem[];
  theme?: BlogTheme;
};

export function BlogFaqSection({ faqs, theme = "default" }: Props) {
  if (!faqs?.length) return null;

  if (isAngaTheme(theme)) {
    return (
      <section className="mt-14 pt-10 border-t border-slate-200 blog-prose-anga">
        <h2
          className="text-2xl font-bold text-slate-900 tracking-tight scroll-mt-28 border-gradient-brand pl-4 !mt-0"
          id="faq"
        >
          คำถามที่พบบ่อย
        </h2>
        <div className="space-y-3 mt-6">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-2xl border border-slate-200/90 bg-white shadow-sm overflow-hidden open:border-violet-200 open:ring-1 open:ring-violet-100"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 font-semibold text-slate-900 hover:bg-violet-50/40 list-none transition-colors">
                <span>{faq.q}</span>
                <ChevronDown
                  size={18}
                  className="shrink-0 text-violet-400 transition-transform group-open:rotate-180"
                />
              </summary>
              <div className="px-5 pb-4 text-slate-600 leading-relaxed border-t border-violet-50 pt-3">
                {renderBlogInline(faq.a, `faq-a-${faq.q}`, theme)}
              </div>
            </details>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="mt-12 pt-10 border-t border-slate-200">
      <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-6 scroll-mt-28" id="faq">
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
              {renderBlogInline(faq.a, `faq-a-${faq.q}`, theme)}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
