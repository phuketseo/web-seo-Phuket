type Props = {
  title?: string;
  items: string[];
};

export function BlogTldr({ title, items }: Props) {
  if (!items.length) return null;

  return (
    <section className="mb-8 pb-8 border-b border-slate-200">
      {title && <h3 className="font-semibold text-slate-900 tracking-tight">{title}</h3>}
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item} className="flex gap-3 leading-normal text-slate-700">
            <span className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
