import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, MapPin } from "lucide-react";
import type { SiteImage } from "@/lib/images";
import { cn } from "@/lib/utils";

type HeroStat = { value: string; label: string };

export function LocalSeoHero({
  area,
  areaEn,
  description,
  answerBlock,
  stats,
  image,
  secondaryHref,
  secondaryLabel,
}: {
  area: string;
  areaEn: string;
  description: string;
  answerBlock?: string;
  stats: HeroStat[];
  image?: SiteImage;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="bg-gradient-to-br from-blue-950 to-blue-900 border-b border-blue-900/50">
      <div className="container-custom py-12 sm:py-14 lg:py-16">
        <div
          className={cn(
            "grid gap-8 lg:gap-12 items-center max-w-6xl mx-auto",
            image ? "lg:grid-cols-2" : "max-w-3xl"
          )}
        >
          <div className={cn(image && "order-2 lg:order-1")}>
            <p className="inline-flex items-center gap-2 bg-green-500/15 border border-green-400/25 text-green-300 text-[11px] font-semibold uppercase tracking-[0.12em] px-3.5 py-1.5 rounded-full mb-4 sm:mb-5">
              <MapPin size={12} />
              Local SEO {areaEn}
            </p>
            <h1 className="hero-lcp text-[2rem] sm:text-4xl lg:text-[2.75rem] font-bold text-white leading-[1.1] tracking-tight mb-4 sm:mb-5">
              SEO {area}
              <br />
              <span className="text-green-400">ติดอันดับ Google</span>
              <span className="text-blue-200/90 font-semibold"> ในพื้นที่{area}</span>
            </h1>
            <p className="text-blue-100/90 text-base sm:text-lg leading-relaxed mb-4 sm:mb-5 max-w-xl">
              {description}
            </p>
            {answerBlock && (
              <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-6 sm:mb-8 rounded-xl border border-white/15 bg-white/10 px-4 py-3.5 max-w-xl">
                {answerBlock}
              </p>
            )}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 sm:mb-8">
              <Link href="/contact" className="btn-pill-green px-6 py-3 justify-center sm:justify-start">
                ขอคำปรึกษาฟรี
                <ArrowRight size={16} />
              </Link>
              {secondaryHref && secondaryLabel && (
                <a
                  href={secondaryHref}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-200 hover:text-white transition-colors"
                >
                  {secondaryLabel}
                  <ArrowRight size={14} />
                </a>
              )}
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs sm:text-sm text-blue-200/90">
              {[`เชี่ยวชาญตลาด ${area}`, "Google Maps Optimization", "Local Pack Rankings"].map(
                (badge) => (
                  <span key={badge} className="inline-flex items-center gap-1.5">
                    <CheckCircle size={14} className="text-green-400 shrink-0" />
                    {badge}
                  </span>
                )
              )}
            </div>
          </div>

          <div className={cn(image && "order-1 lg:order-2 space-y-4")}>
            {image && (
              <div className="overflow-hidden rounded-xl border border-white/10 bg-blue-900/40 shadow-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="w-full h-auto object-cover opacity-95"
                  priority
                />
              </div>
            )}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-white/10 bg-blue-900/50 p-4 sm:p-5 text-center"
                >
                  <div className="text-xl sm:text-2xl font-bold text-green-400 tabular-nums tracking-tight mb-1">
                    {s.value}
                  </div>
                  <div className="text-blue-200/90 text-[11px] sm:text-xs leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
            <p className="text-[10px] sm:text-xs text-blue-300/60 text-center leading-relaxed">
              ขอบเขตบริการและแพ็ก — ไม่ใช่ผลลัพธ์จากลูกค้า
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
