import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function MarketingBreadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-500 mb-6">
      {items.map((item, i) => (
        <span key={`${item.label}-${i}`} className="inline-flex items-center gap-x-2">
          {i > 0 && <span aria-hidden>/</span>}
          {item.href ? (
            <Link href={item.href} className="hover:text-violet-600 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="font-medium text-slate-800">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
