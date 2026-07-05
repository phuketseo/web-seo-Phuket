import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { siteImages } from "@/lib/images";
import { GradientButton } from "@/components/GradientButton";

const proofStats = [
  { value: "฿5,900", label: "เริ่มต้น/เดือน" },
  { value: "7 วัน", label: "ส่ง Audit" },
  { value: "30–60 วัน", label: "GBP impression" },
  { value: "AEO+GEO", label: "AI Search ready" },
];

export default function HomeHero() {
  const heroImage = siteImages.hero.home;

  return (
    <section className="home-section-bg-white border-b border-slate-100/80">
      <div className="container-custom pt-[calc(var(--site-header-height)+3rem)] pb-12 sm:pt-[calc(var(--site-header-height)+4rem)] sm:pb-14 lg:pt-[calc(var(--site-header-height)+5rem)] lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          <div className="relative lg:pl-4 order-1 lg:order-2">
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm">
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                width={heroImage.width}
                height={heroImage.height}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 480px"
                className="w-full h-auto object-cover"
                priority
                fetchPriority="high"
              />
            </div>
          </div>

          <div className="min-w-0 order-2 lg:order-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-indigo-600 mb-4 sm:mb-5">
              Phuket Visibility Stack™
            </p>
            <h1 className="hero-lcp text-[2rem] sm:text-5xl lg:text-[3.25rem] font-bold text-slate-900 leading-[1.08] tracking-[-0.03em] mb-4 sm:mb-6">
              รับทำ SEO และ{" "}
              <span className="text-gradient-brand">เว็บไซต์ภูเก็ต</span>
              <span className="text-slate-400 font-bold"> — </span>
              ติด Google และ AI Search
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-[1.7] max-w-xl mb-7 sm:mb-9">
              ช่วยธุรกิจไทยในภูเก็ตให้ติด Google Maps มีเว็บเร็วที่ Google ชอบ
              และพร้อมโผล่ AI Overview เริ่มต้น ฿5,900/เดือน ไม่มีสัญญาผูกมัด
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 mb-8 sm:mb-10">
              <GradientButton href="/contact">ขอคำปรึกษาฟรี</GradientButton>
              <a
                href="#services"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-600 sm:text-slate-600 touch-manipulation active:text-violet-700 sm:hover:text-violet-600 transition-colors"
              >
                ดูบริการ
                <ArrowRight size={14} />
              </a>
            </div>

            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-6 sm:gap-x-8 gap-y-4 pt-5 sm:pt-7 border-t border-slate-200">
              {proofStats.map((s) => (
                <div key={s.label}>
                  <div className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight tabular-nums">
                    {s.value}
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-600 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
