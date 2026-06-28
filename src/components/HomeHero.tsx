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
    <section className="border-b border-slate-200 bg-white">
      <div className="container-custom pt-32 pb-16 lg:pt-36 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
          <div className="min-w-0">
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-slate-400 mb-5 sm:mb-6">
              Phuket Visibility Stack™
            </p>
            <h1 className="hero-lcp text-[2rem] sm:text-5xl lg:text-[3.25rem] font-bold text-slate-900 leading-[1.08] tracking-[-0.03em] mb-5 sm:mb-6">
              รับทำ SEO และ{" "}
              <span className="text-gradient-brand">เว็บไซต์ภูเก็ต</span>
              <span className="text-slate-400 font-bold"> — </span>
              ติด Google และ AI Search
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-[1.7] max-w-xl mb-8 sm:mb-10">
              ช่วยธุรกิจไทยในภูเก็ตให้ติด Google Maps มีเว็บเร็วที่ Google ชอบ
              และพร้อมโผล่ AI Overview เริ่มต้น ฿5,900/เดือน ไม่มีสัญญาผูกมัด
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-10 sm:mb-14">
              <GradientButton href="/contact">ขอคำปรึกษาฟรี</GradientButton>
              <a
                href="#services"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-violet-600 transition-colors"
              >
                ดูบริการ
                <ArrowRight size={14} />
              </a>
            </div>

            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-6 sm:gap-x-8 gap-y-4 pt-6 sm:pt-8 border-t border-slate-200">
              {proofStats.map((s) => (
                <div key={s.label}>
                  <div className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight tabular-nums">
                    {s.value}
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:pl-4">
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm">
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                width={heroImage.width}
                height={heroImage.height}
                sizes="(max-width: 1024px) 100vw, 480px"
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
