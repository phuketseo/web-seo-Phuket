import Image from "next/image";
import { ArrowRight, CheckCircle, Play } from "lucide-react";
import { GradientButton } from "@/components/GradientButton";
import { cn } from "@/lib/utils";

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
  floatingCards = [],
  variant = "default",
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
  floatingCards?: HeroStat[];
  variant?: "default" | "saas";
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  const isSaas = variant === "saas";

  return (
    <section
      className={cn(
        "border-b border-slate-100/80",
        isSaas ? "bg-[#f8f7ff]" : "home-section-bg-white",
      )}
    >
      <div
        className={cn(
          "container-custom",
          isSaas ? "pt-8 pb-14 sm:pb-16 lg:pb-24" : "pt-6 pb-12 sm:pb-14 lg:pb-20",
        )}
      >
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
          <div className="relative order-1 lg:order-2">
            <div
              className={cn(
                "relative overflow-hidden",
                isSaas
                  ? "rounded-[1.25rem] bg-indigo-500/90 p-3 sm:p-4 shadow-xl shadow-indigo-500/20"
                  : "rounded-xl border border-slate-200 bg-slate-50 shadow-sm",
              )}
            >
              <div
                className={cn(
                  "overflow-hidden bg-white",
                  isSaas ? "rounded-xl" : "rounded-xl",
                )}
              >
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

            {floatingCards.length > 0 && (
              <div className="pointer-events-none absolute inset-0 hidden sm:block">
                <div className="absolute -left-4 top-10 max-w-[12rem] rounded-xl border border-slate-100 bg-white px-4 py-3 shadow-xl shadow-slate-900/10 lg:-left-8">
                  <p className="text-[11px] text-slate-500">{floatingCards[0]?.label}</p>
                  <p className="text-lg font-bold tabular-nums text-slate-900 tracking-tight mt-0.5">
                    {floatingCards[0]?.value}
                  </p>
                </div>
                {floatingCards[1] && (
                  <div className="absolute -right-3 bottom-12 max-w-[11.5rem] rounded-xl border border-slate-100 bg-white px-4 py-3 shadow-xl shadow-slate-900/10 lg:-right-6">
                    <p className="text-[11px] text-slate-500">{floatingCards[1].label}</p>
                    <p className="text-lg font-bold tabular-nums text-indigo-600 tracking-tight mt-0.5">
                      {floatingCards[1].value}
                    </p>
                  </div>
                )}
                {floatingCards[2] && (
                  <div className="absolute right-4 top-8 flex size-11 items-center justify-center rounded-xl bg-violet-500 text-white shadow-lg shadow-violet-500/30 lg:right-8">
                    <span className="text-[10px] font-bold leading-none text-center px-1">
                      {floatingCards[2].value}
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="min-w-0 order-2 lg:order-1">
            {!isSaas && (
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-indigo-600 mb-4 sm:mb-5">
                {eyebrow}
              </p>
            )}
            {isSaas && (
              <p className="text-sm font-medium text-indigo-600 mb-4">{eyebrow}</p>
            )}
            <h1
              className={cn(
                "hero-lcp font-bold text-slate-900 tracking-[-0.03em]",
                isSaas
                  ? "text-[2.35rem] sm:text-5xl lg:text-[3.5rem] leading-[1.05] mb-3 sm:mb-4"
                  : "text-[2rem] sm:text-5xl lg:text-[3.25rem] leading-[1.08] mb-4 sm:mb-6",
              )}
            >
              {title}
              {titleAccent && (
                <>
                  {isSaas ? <br className="hidden sm:block" /> : " "}
                  <span className="text-gradient-brand">{titleAccent}</span>
                </>
              )}
            </h1>
            {isSaas && titleAccent && (
              <div className="mb-5 sm:mb-6 h-2 w-40 sm:w-56 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" />
            )}
            <p
              className={cn(
                "text-slate-600 leading-[1.7] max-w-xl",
                isSaas ? "text-base sm:text-lg mb-7 sm:mb-8" : "text-base sm:text-lg mb-5 sm:mb-6",
              )}
            >
              {description}
            </p>
            {answerBlock && !isSaas && (
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 sm:mb-8 rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3.5">
                {answerBlock}
              </p>
            )}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 mb-8 sm:mb-10">
              <GradientButton
                href="/contact"
                className={isSaas ? "px-8 py-3.5 text-base" : undefined}
              >
                ขอคำปรึกษาฟรี
              </GradientButton>
              {secondaryHref && (
                <a
                  href={secondaryHref}
                  className={cn(
                    "inline-flex items-center gap-2.5 font-semibold touch-manipulation transition-colors",
                    isSaas
                      ? "text-sm sm:text-base text-slate-800 hover:text-violet-600"
                      : "text-sm text-violet-600 sm:text-slate-600 active:text-violet-700 sm:hover:text-violet-600",
                  )}
                >
                  {isSaas && (
                    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white text-indigo-600 shadow-sm">
                      <Play size={14} className="ml-0.5 fill-current" />
                    </span>
                  )}
                  {secondaryLabel}
                  {!isSaas && <ArrowRight size={14} />}
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

            {!isSaas && (
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-6 sm:gap-x-8 gap-y-4 pt-5 sm:pt-7 border-t border-slate-200/80">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight tabular-nums">
                      {s.value}
                    </div>
                    <div className="text-[11px] sm:text-xs text-slate-600 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
