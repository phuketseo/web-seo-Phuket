import { Suspense } from "react";

export default function AdminLoginLayout({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<p className="text-sm text-slate-500">กำลังโหลด...</p>}>{children}</Suspense>;
}
