import Link from "next/link";

export function ServiceBreadcrumb({
  serviceName,
}: {
  serviceName: string;
}) {
  return (
    <div className="border-b border-slate-100/80 bg-white pt-[var(--site-header-height)]">
      <div className="container-custom py-3">
        <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-500">
          <Link href="/" className="hover:text-violet-600 transition-colors">
            หน้าแรก
          </Link>
          <span aria-hidden>/</span>
          <span className="text-slate-400">บริการ</span>
          <span aria-hidden>/</span>
          <span className="font-medium text-slate-800">{serviceName}</span>
        </nav>
      </div>
    </div>
  );
}
