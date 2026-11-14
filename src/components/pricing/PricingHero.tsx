import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteImages } from "@/lib/images";
import { GradientButton } from "@/components/GradientButton";

const priceHighlights = [
  {
    label: "โฆษณาออนไลน์",
    value: "฿3,000",
    unit: "เริ่มต้น / เดือน",
    href: "#pricing-tabs",
  },
  {
    label: "SEO",
    value: "฿4,000",
    unit: "เริ่มต้น / เดือน",
    href: "#pricing-tabs",
  },
  {
    label: "เว็บไซต์",
    value: "฿6,500",
    unit: "ครั้งแรก · ปีถัดไป ฿2,500",
    href: "#web-standard",
  },
];

export function PricingHero() {
  const heroImage = siteImages.hero.home;

  return (
    <section className="relative overflow-hidden border-b border-slate-100/80">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(99,102,241,0.12),_transparent_55%),radial-gradient(ellipse_at_bottom_left,_rgba(139,92,246,0.08),_transparent_50%)]"
      />
      <div className="container-custom relative pt-10 pb-12 sm:pt-12 sm:pb-14 lg:pt-14 lg:pb-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
          <div className="min-w-0 order-2 lg:order-1">
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-indigo-600 mb-4">
              ราคาโปร่งใส · ไม่ซ่อนค่าใช้จ่าย
            </p>
            <h1 className="hero-lcp text-[2.35rem] sm:text-5xl lg:text-[3.25rem] font-bold text-slate-900 leading-[1.05] tracking-[-0.035em] mb-5">
              เลือกแพ็กตามงบ
              <br />
              <span className="text-gradient-brand">แอด · SEO · เว็บ</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg mb-8">
              ดูราคารายเดือนและราคารวมทั้งสัญญาก่อนเริ่ม — สำหรับธุรกิจในป่าตอง กะตะ ตัวเมือง ถลาง กมลา กะทู้
            </p>

            <div className="grid grid-cols-2 gap-x-5 gap-y-5 mb-9 max-w-md">
              {priceHighlights.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group block border-l-2 border-indigo-200 pl-3.5 hover:border-indigo-500 transition-colors"
                >
                  <p className="text-[11px] sm:text-xs font-medium text-slate-500 mb-1">
                    {item.label}
                  </p>
                  <p className="text-2xl sm:text-[1.75rem] font-bold text-slate-900 tabular-nums tracking-tight leading-none group-hover:text-indigo-700 transition-colors">
                    {item.value}
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-1.5">{item.unit}</p>
                </Link>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <GradientButton href="#pricing-tabs">ดูแพ็กทั้งหมด</GradientButton>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-600 hover:text-violet-700 transition-colors"
              >
                ขอคำปรึกษาฟรี
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div
              aria-hidden
              className="absolute -inset-3 sm:-inset-4 rounded-[1.75rem] bg-gradient-to-br from-indigo-200/40 via-violet-100/30 to-transparent blur-sm"
            />
            <div className="relative overflow-hidden rounded-2xl border border-indigo-100/80 bg-slate-50 shadow-[0_20px_50px_-24px_rgba(79,70,229,0.35)]">
              <Image
                src={heroImage.src}
                alt="แพ็กโฆษณา SEO และเว็บไซต์ภูเก็ต — ราคาชัดเจนจาก PhuketSEO"
                width={heroImage.width}
                height={heroImage.height}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 520px"
                className="w-full h-auto object-cover"
                priority
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
