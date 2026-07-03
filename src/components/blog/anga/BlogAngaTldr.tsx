type Props = {
  title?: string;
  items: string[];
};

/** TLDR box — Smooth Purple brand (คำตอบสั้นๆ) */
export function BlogAngaTldr({ title, items }: Props) {
  if (!items.length) return null;

  return (
    <section className="blog-anga-tldr mb-10 rounded-2xl border border-violet-100/90 bg-gradient-to-br from-violet-50/80 via-white to-indigo-50/40 p-6 sm:p-7 shadow-sm ring-1 ring-violet-100/50">
      {title && (
        <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-gradient-brand mb-4">
          {title}
        </h3>
      )}
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-slate-700">
            <span
              className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500"
              aria-hidden
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
