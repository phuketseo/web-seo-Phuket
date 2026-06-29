import { ChevronDown } from "lucide-react";
import { HomeSection, HomeSectionHeader } from "@/components/home/HomeSection";

type FaqItem = { question: string; answer: string };

type Props = {
  title?: string;
  titleAccent?: string;
  faqs: FaqItem[];
};

export function ServiceFaqSection({
  title = "คำถามที่",
  titleAccent = "พบบ่อย",
  faqs,
}: Props) {
  if (!faqs.length) return null;

  return (
    <HomeSection variant="white" containerClass="max-w-3xl">
      <HomeSectionHeader title={title} titleAccent={titleAccent} centered className="mx-auto" />
      <div className="space-y-2.5">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-4 px-4 sm:px-5 py-3.5 sm:py-4 font-semibold text-slate-900 hover:bg-slate-50/80 list-none text-sm sm:text-base">
              <span>{faq.question}</span>
              <ChevronDown
                size={18}
                className="shrink-0 text-slate-400 transition-transform group-open:rotate-180"
              />
            </summary>
            <div className="px-4 sm:px-5 pb-4 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/50">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </HomeSection>
  );
}
