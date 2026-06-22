type Props = {
  title?: string;
  items: string[];
};

/** Vercel-style opening summary: H3 + bullet list, no bordered box */
export function BlogTldr({ title, items }: Props) {
  if (!items.length) return null;

  return (
    <section className="mb-8 pb-8 border-b border-neutral-200/80">
      {title && (
        <h3 className="font-semibold text-neutral-900 tracking-tight">{title}</h3>
      )}
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item} className="flex gap-3 leading-normal text-neutral-700">
            <span className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-neutral-400" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
