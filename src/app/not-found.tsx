import Link from "next/link";
import type { Metadata } from "next";
import { GradientButton } from "@/components/GradientButton";

export const metadata: Metadata = {
  title: "ไม่พบหน้าที่ต้องการ (404)",
  description: "ขออภัย ไม่พบหน้าที่คุณกำลังมองหา",
  robots: { index: false, follow: false },
};

const quickLinks = [
  { label: "SEO ภูเก็ต", href: "/services/seo-phuket" },
  { label: "Google Ads", href: "/services/google-ads" },
  { label: "ราคา", href: "/pricing" },
  { label: "บทความ", href: "/blog" },
];

export default function NotFound() {
  return (
    <div className="home-section-bg-muted flex min-h-[70vh] items-center justify-center px-4 pt-28 pb-16">
      <div className="text-center max-w-lg">
        <p className="text-7xl sm:text-8xl font-bold text-gradient-brand tracking-tight mb-4">404</p>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
          ไม่พบหน้าที่คุณต้องการ
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
          หน้านี้อาจถูกลบ ย้าย หรือ URL ไม่ถูกต้อง
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <GradientButton href="/">กลับหน้าแรก</GradientButton>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center text-sm font-medium px-6 py-3 rounded-lg border border-slate-200 text-slate-700 hover:border-violet-200 hover:bg-violet-50/50 transition-colors"
          >
            ติดต่อเรา
          </Link>
        </div>
        <div className="mt-10 text-sm text-slate-500">
          <p className="mb-2">หน้าที่พบบ่อย:</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-violet-600 font-medium hover:underline underline-offset-2"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
