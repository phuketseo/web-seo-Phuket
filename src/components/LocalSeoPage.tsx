import Link from "next/link";
import { MapPin } from "lucide-react";
import { siteImages } from "@/lib/images";
import type { SiteImage } from "@/lib/images";
import { BrandGradientDefs } from "@/components/BrandGradientDefs";
import { HomeSection, HomeSectionHeader } from "@/components/home/HomeSection";
import { MarketingBreadcrumb } from "@/components/MarketingBreadcrumb";
import { LocalSeoHero } from "@/components/local/LocalSeoHero";
import { ServiceFaqSection } from "@/components/ServiceFaqSection";

interface LocalSeoPageProps {
  area: string;
  areaEn: string;
  slug: string;
  description: string;
  answerBlock?: string;
  businesses: string[];
  keywords: string[];
  landmarks: string[];
  stats: { metric: string; label: string }[];
  intro?: string[];
  faqs?: { q: string; a: string }[];
}

const localHeroImages: Record<string, SiteImage> = {
  kamala: siteImages.blog.kamalaHero,
  thalang: siteImages.blog.thalangHero,
  patong: siteImages.blog.localSeoPillar,
  kata: siteImages.blog.localSeoPillar,
  kathu: siteImages.blog.localSeoPillar,
  "phuket-town": siteImages.blog.localSeoPillar,
};

export default function LocalSeoPage({
  area,
  areaEn,
  slug,
  description,
  answerBlock,
  businesses,
  keywords,
  landmarks,
  stats,
  intro,
  faqs,
}: LocalSeoPageProps) {
  const heroImage = localHeroImages[slug];
  const faqItems = faqs?.map((f) => ({ question: f.q, answer: f.a })) ?? [];

  return (
    <div>
      <BrandGradientDefs />

      <div className="border-b border-slate-100/80 bg-white pt-24">
        <div className="container-custom py-3">
          <MarketingBreadcrumb
            items={[
              { label: "หน้าแรก", href: "/" },
              { label: "Local SEO" },
              { label: `SEO ${area}` },
            ]}
          />
        </div>
      </div>

      <LocalSeoHero
        area={area}
        areaEn={areaEn}
        description={description}
        answerBlock={answerBlock}
        stats={stats.map((s) => ({ value: s.metric, label: s.label }))}
        image={heroImage}
        secondaryHref="#businesses"
        secondaryLabel="ดูธุรกิจในโซน"
      />

      {intro?.length ? (
        <HomeSection variant="muted" className="border-t-0">
          <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
            {intro.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
            <p className="text-slate-600">
              อ่านเพิ่ม:{" "}
              <Link
                href="/blog/google-my-business-phuket"
                className="text-violet-600 font-medium hover:underline underline-offset-2"
              >
                Google Business Profile ภูเก็ต
              </Link>
              {" · "}
              <Link
                href="/services/seo-phuket"
                className="text-violet-600 font-medium hover:underline underline-offset-2"
              >
                บริการ SEO ภูเก็ต
              </Link>
            </p>
          </div>
        </HomeSection>
      ) : null}

      <HomeSection id="businesses" variant="white" containerClass="max-w-6xl">
        <HomeSectionHeader
          title={`ธุรกิจที่เราดูแลใน${area}`}
          description={`เราเข้าใจตลาด${area}เป็นอย่างดี พร้อมกลยุทธ์ที่ตรงกับกลุ่มเป้าหมายในพื้นที่`}
          centered
          className="mx-auto max-w-2xl"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {businesses.map((b) => (
            <div
              key={b}
              className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm hover:border-green-200 hover:shadow-md transition-all duration-300"
            >
              <div className="text-slate-800 font-medium text-sm">{b}</div>
            </div>
          ))}
        </div>
      </HomeSection>

      <HomeSection variant="muted" containerClass="max-w-4xl">
        <HomeSectionHeader
          title={`Keywords ใน${area}`}
          titleAccent="ที่เราดัน"
          centered
          className="mx-auto"
        />
        <div className="flex flex-wrap justify-center gap-2">
          {keywords.map((kw) => (
            <span
              key={kw}
              className="bg-white border border-slate-200 text-slate-700 px-3.5 py-1.5 rounded-full text-xs sm:text-sm hover:border-green-200 transition-colors"
            >
              {kw}
            </span>
          ))}
        </div>
      </HomeSection>

      <HomeSection variant="white" containerClass="max-w-4xl">
        <HomeSectionHeader
          title={`พื้นที่บริการใน${area}`}
          centered
          className="mx-auto"
        />
        <div className="flex flex-wrap justify-center gap-2">
          {landmarks.map((lm) => (
            <span
              key={lm}
              className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-3.5 py-1.5 rounded-full text-xs sm:text-sm text-slate-700"
            >
              <MapPin size={13} className="text-green-600 shrink-0" />
              {lm}
            </span>
          ))}
        </div>
      </HomeSection>

      {faqItems.length > 0 && (
        <ServiceFaqSection title="คำถามเกี่ยวกับ" titleAccent={`SEO ${area}`} faqs={faqItems} />
      )}

      <section className="home-section bg-gradient-to-br from-blue-950 to-blue-900 border-t border-blue-900/50">
        <div className="container-custom max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
            พร้อมให้ธุรกิจใน{area}ติด Google?
          </h2>
          <p className="text-blue-200/90 text-sm sm:text-base leading-relaxed mb-7 max-w-lg mx-auto">
            ขอคำปรึกษาฟรี เราจะวิเคราะห์ตลาดใน{area}และแนะนำกลยุทธ์ที่เหมาะสม
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/contact" className="btn-pill-green px-7">
              ขอคำปรึกษาฟรี
            </Link>
            <Link
              href="/services/seo-phuket"
              className="inline-flex items-center justify-center text-sm font-medium px-6 py-3 rounded-xl border border-white/25 text-white hover:bg-white/10 transition-colors"
            >
              ดูบริการ SEO ทั้งหมด
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
