import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GradientButton } from "@/components/GradientButton";

type HeroImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export function PackageMarketingHero({
  badge,
  title,
  titleAccent,
  priceLabel,
  subtitle,
  answerBlock,
  image,
  primaryHref,
  primaryCta,
  secondaryHref = "/pricing",
  secondaryLabel = "เปรียบเทียบแพ็ก",
}: {
  badge: string;
  title: string;
  titleAccent: string;
  priceLabel: string;
  subtitle: string;
  answerBlock: string;
  image: HeroImage;
  primaryHref: string;
  primaryCta: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="home-section-bg-white border-b border-slate-100/80">
      <div className="container-custom pt-6 pb-12 sm:pb-14 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          <div className="relative order-1 lg:order-2">
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm aspect-[3/2] relative">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 480px"
                priority
              />
            </div>
          </div>

          <div className="min-w-0 order-2 lg:order-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-indigo-600 mb-4 sm:mb-5">
              {badge}
            </p>
            <h1 className="hero-lcp text-[2rem] sm:text-5xl lg:text-[3.25rem] font-bold text-slate-900 leading-[1.08] tracking-[-0.03em] mb-3 sm:mb-4">
              {title}
              <br />
              <span className="text-gradient-brand">{titleAccent}</span>
            </h1>
            <p className="text-2xl sm:text-3xl font-bold text-slate-900 tabular-nums mb-3 sm:mb-4">
              ฿{priceLabel}
              <span className="text-base sm:text-lg font-normal text-slate-500">/เดือน</span>
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-[1.7] max-w-xl mb-5 sm:mb-6">
              {subtitle}
            </p>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 sm:mb-8 rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3.5">
              {answerBlock}
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">
              <GradientButton href={primaryHref} className="px-7">
                {primaryCta}
              </GradientButton>
              <Link
                href={secondaryHref}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-600 sm:text-slate-600 touch-manipulation active:text-violet-700 sm:hover:text-violet-600 transition-colors"
              >
                {secondaryLabel}
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
