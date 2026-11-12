import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteImages } from "@/lib/images";
import { GradientButton } from "@/components/GradientButton";

const proofStats = [
  { value: "฿3,000", label: "เริ่มต้น / เดือน" },
  { value: "Google · Meta", label: "เลือกช่องทางได้" },
  { value: "ไม่ผูกมัด", label: "แจ้งก่อนรอบบิล" },
];

export default function HomeHero() {
  const heroImage = siteImages.hero.home;

  return (
    <section className="relative overflow-hidden border-b border-slate-100/80 bg-white">
      {/* Stripe-style aurora ribbon — indigo/violet brand, not Stripe orange */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-full lg:w-[58%] opacity-90"
      >
        <div className="absolute -right-[12%] top-[-18%] h-[120%] w-[90%] rotate-[-8deg] rounded-[40%] bg-[radial-gradient(ellipse_at_center,_rgba(147,51,234,0.28)_0%,_rgba(99,102,241,0.22)_35%,_rgba(37,99,235,0.12)_58%,_transparent_72%)] blur-2xl" />
        <div className="absolute right-[4%] top-[8%] h-[70%] w-[55%] rounded-[45%] bg-[conic-gradient(from_210deg_at_50%_50%,_rgba(6,182,212,0.18),_rgba(99,102,241,0.26),_rgba(147,51,234,0.22),_rgba(37,99,235,0.16),_rgba(6,182,212,0.12))] blur-3xl opacity-80" />
      </div>

      <div className="container-custom relative pt-[calc(var(--site-header-height)+2.75rem)] pb-12 sm:pt-[calc(var(--site-header-height)+3.5rem)] sm:pb-14 lg:pt-[calc(var(--site-header-height)+4.5rem)] lg:pb-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-8 items-center max-w-6xl mx-auto">
          <div className="min-w-0 order-2 lg:order-1 lg:pr-4">
            <p className="text-sm text-slate-500 mb-5 sm:mb-6">
              เอเยนซี่ SEO และโฆษณาสำหรับธุรกิจในภูเก็ต
            </p>

            <h1 className="hero-lcp text-[2.15rem] sm:text-5xl lg:text-[3.15rem] font-bold text-slate-900 leading-[1.08] tracking-[-0.03em] mb-5 sm:mb-6">
              รับยิงแอด ภูเก็ต
              <br />
              <span className="text-slate-500 font-semibold">Google & Facebook </span>
              <span className="text-gradient-brand">เริ่ม ฿3,000/เดือน</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-8 sm:mb-9">
              ทำให้ร้านคุณโผล่ตอนลูกค้าค้นหา — โรงแรม ร้านอาหาร สปา ในป่าตอง กะตะ ตัวเมือง ถลาง กมลา กะทู้
              เริ่มได้แม้ยังไม่มีเว็บ
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3.5 sm:gap-4 mb-9 sm:mb-11">
              <GradientButton href="/contact">ขอคำปรึกษาฟรี</GradientButton>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-1.5 rounded-full border border-indigo-200 bg-white/80 px-6 py-3 text-sm font-medium text-indigo-700 hover:border-indigo-400 hover:bg-indigo-50 transition-colors"
              >
                ดูแพ็กเกจราคา
                <ArrowRight size={14} aria-hidden />
              </Link>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-4 pt-6 border-t border-slate-200/80">
              {proofStats.map((s) => (
                <div key={s.label} className="min-w-[7rem]">
                  <div className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight tabular-nums">
                    {s.value}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-2xl border border-white/70 bg-white/40 shadow-[0_20px_50px_-24px_rgba(79,70,229,0.45)] backdrop-blur-[2px]">
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
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
