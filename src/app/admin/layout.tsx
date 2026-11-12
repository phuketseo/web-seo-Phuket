import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | PhuketSEO",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#202124]">
      <header className="border-b border-[#dadce0] bg-white">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1a73e8] text-xs font-bold text-white">
              PS
            </div>
            <div>
              <p className="text-sm font-medium text-[#202124]">PhuketSEO · Admin</p>
              <p className="text-xs text-[#5f6368]">Overview · GSC · Analytics · Keyword Focus</p>
            </div>
          </div>
          <a href="/" className="text-sm font-medium text-[#1a73e8] hover:underline">
            เปิดเว็บไซต์
          </a>
        </div>
      </header>
      <main className="mx-auto max-w-[1400px] px-4 py-6 sm:px-6">{children}</main>
    </div>
  );
}
