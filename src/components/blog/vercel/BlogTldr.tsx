type Props = {
  title?: string;
  items: string[];
};

/** Vercel-style opening summary: H3 + bullet list, no bordered box */
export function BlogTldr({ title, items }: Props) {
  if (!items.length) return null;

  return (
    <section className="mb-10 pb-10 border-b border-neutral-200/80">
      {title && (
        <h3 className="text-base font-semibold text-neutral-900 tracking-tight mb-4">{title}</h3>
      )}
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-neutral-700">
            <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-neutral-400" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
