import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { GradientButton } from "@/components/GradientButton";

type HeroImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type HeroStat = { value: string; label: string };

export function ServiceMarketingHero({
  eyebrow,
  title,
  titleAccent,
  description,
  answerBlock,
  image,
  stats,
  trustBadges = [],
  secondaryHref,
  secondaryLabel = "ดูขั้นตอนการทำงาน",
}: {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  description: string;
  answerBlock?: string;
  image: HeroImage;
  stats: HeroStat[];
  trustBadges?: string[];
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="home-section-bg-white border-b border-slate-100/80">
      <div className="container-custom pt-6 pb-12 sm:pb-14 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          <div className="relative order-1 lg:order-2">
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(max-width: 1024px) 100vw, 480px"
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          <div className="min-w-0 order-2 lg:order-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-indigo-600 mb-4 sm:mb-5">
              {eyebrow}
            </p>
            <h1 className="hero-lcp text-[2rem] sm:text-5xl lg:text-[3.25rem] font-bold text-slate-900 leading-[1.08] tracking-[-0.03em] mb-4 sm:mb-6">
              {title}
              {titleAccent && (
                <>
                  {" "}
                  <span className="text-gradient-brand">{titleAccent}</span>
                </>
              )}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-[1.7] max-w-xl mb-5 sm:mb-6">
              {description}
            </p>
            {answerBlock && (
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 sm:mb-8 rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3.5">
                {answerBlock}
              </p>
            )}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 mb-8 sm:mb-10">
              <GradientButton href="/contact">ขอคำปรึกษาฟรี</GradientButton>
              {secondaryHref && (
                <a
                  href={secondaryHref}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-600 sm:text-slate-600 touch-manipulation active:text-violet-700 sm:hover:text-violet-600 transition-colors"
                >
                  {secondaryLabel}
                  <ArrowRight size={14} />
                </a>
              )}
            </div>

            {trustBadges.length > 0 && (
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs sm:text-sm text-slate-600 mb-6 sm:mb-8">
                {trustBadges.map((badge) => (
                  <span key={badge} className="inline-flex items-center gap-1.5">
                    <CheckCircle size={14} className="text-indigo-500 shrink-0" />
                    {badge}
                  </span>
                ))}
              </div>
            )}

            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-6 sm:gap-x-8 gap-y-4 pt-5 sm:pt-7 border-t border-slate-200">
              {stats.map((s) => (
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
