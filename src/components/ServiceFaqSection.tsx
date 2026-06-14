import { ChevronDown } from "lucide-react";

type FaqItem = { question: string; answer: string };

type Props = {
  title?: string;
  faqs: FaqItem[];
};

export function ServiceFaqSection({
  title = "คำถามที่พบบ่อย",
  faqs,
}: Props) {
  if (!faqs.length) return null;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-blue-950 font-serif mb-8 text-center">
          {title}
        </h2>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-gray-200 bg-gray-50 overflow-hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 font-semibold text-blue-950 hover:bg-white list-none">
                <span>{faq.question}</span>
                <ChevronDown
                  size={18}
                  className="shrink-0 text-gray-400 transition-transform group-open:rotate-180"
                />
              </summary>
              <div className="px-5 pb-4 text-gray-600 text-base leading-relaxed border-t border-gray-100 pt-3 bg-white">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
