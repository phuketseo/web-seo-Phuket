import Link from "next/link";
import { X } from "lucide-react";
import { siteImages } from "@/lib/images";
import type { SiteImage } from "@/lib/images";
import type { IndustryContent } from "@/lib/industry-seo-content";
import { BrandGradientDefs } from "@/components/BrandGradientDefs";
import { HomeSection, HomeSectionHeader } from "@/components/home/HomeSection";
import { MarketingBreadcrumb } from "@/components/MarketingBreadcrumb";
import { ServiceMarketingHero } from "@/components/services/ServiceMarketingHero";
import { ServicePricingTeaser } from "@/components/services/ServicePricingTeaser";
import { ServicePageCta } from "@/components/services/ServicePageCta";
import { ServiceFaqSection } from "@/components/ServiceFaqSection";

const industryHeroImages: Record<string, SiteImage> = {
  "seo-restaurants-phuket": siteImages.caseStudies.restaurant,
  "seo-spa-phuket": siteImages.blog.seoSpa,
  "seo-hotels-phuket": siteImages.caseStudies.hotel,
  "seo-real-estate-phuket": siteImages.caseStudies.realestate,
  "seo-tours-phuket": siteImages.blog.contentForeigners,
};

function pricingForIndustry(data: IndustryContent) {
  const priceStat = data.stats.find((s) => s.metric.includes("฿"));
  if (priceStat?.metric.includes("5,900")) {
    return {
      priceLabel: "5,900",
      planName: "SEO Lite",
      features: ["GBP + Social Proof", "โพสต์ GBP", "ระบบขอรีวิว", "Pro ฿8,900 (+เว็บ+AEO)"],
    };
  }
  return {
    priceLabel: "8,900",
    planName: "SEO Pro",
    features: ["เว็บ + SEO รายเดือน", "AEO/GEO structure", "บทความ SEO 1 ชิ้น/เดือน", "Pro Max ฿15,000 (+Ads)"],
  };
}

export default function IndustrySeoPage({ data }: { data: IndustryContent }) {
  const heroImage = industryHeroImages[data.slug] ?? siteImages.services.seo;
  const pricing = pricingForIndustry(data);
  const faqs = data.faqs.map((f) => ({ question: f.q, answer: f.a }));

  return (
    <div>
      <BrandGradientDefs />

      <div className="border-b border-slate-100/80 bg-white pt-[var(--site-header-height)]">
        <div className="container-custom py-3">
          <MarketingBreadcrumb
            items={[
              { label: "หน้าแรก", href: "/" },
              { label: "Industry" },
              { label: data.headline },
            ]}
          />
        </div>
      </div>

      <ServiceMarketingHero
        eyebrow={data.industryEn}
        title={data.headline}
        titleAccent="ภูเก็ต"
        description={data.description}
        answerBlock={data.answerBlock}
        image={heroImage}
        stats={data.stats.map((s) => ({ value: s.metric, label: s.label }))}
        trustBadges={["ผลลัพธ์วัดได้จริง", "โซนภูเก็ตจริง", "ไม่มีสัญญาผูกมัด", "ขอ Audit ฟรี"]}
        secondaryHref="#pain-points"
        secondaryLabel="ดู pain points"
      />

      <HomeSection variant="muted" className="border-t-0">
        <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
          {data.intro.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
          {(data.relatedBlog || data.relatedLinks?.length) && (
            <p className="text-slate-600">
              อ่านเพิ่ม:{" "}
              {data.relatedBlog && (
                <>
                  <Link
                    href={data.relatedBlog.href}
                    className="text-violet-600 font-medium hover:underline underline-offset-2"
                  >
                    {data.relatedBlog.name}
                  </Link>
                  {" · "}
                </>
              )}
              {data.relatedLinks?.map((link, i) => (
                <span key={link.href}>
                  <Link
                    href={link.href}
                    className="text-violet-600 font-medium hover:underline underline-offset-2"
                  >
                    {link.name}
                  </Link>
                  {i < (data.relatedLinks?.length ?? 0) - 1 ? " · " : ""}
                </span>
              ))}
              {data.relatedLinks?.length ? " · " : null}
              <Link href="/pricing" className="text-violet-600 font-medium hover:underline underline-offset-2">
                ดูราคา
              </Link>
            </p>
          )}
        </div>
      </HomeSection>

      <HomeSection id="pain-points" variant="white" containerClass="max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <HomeSectionHeader title="Pain Points" titleAccent="ที่เราแก้" className="mb-6" />
            <ul className="space-y-2.5">
              {data.painPoints.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-700">
                  <X size={16} className="text-red-400 shrink-0 mt-0.5" strokeWidth={2} />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <HomeSectionHeader title="สิ่งที่รวม" titleAccent="ในแพ็กเกจ" className="mb-6" />
            <ul className="space-y-2.5">
              {data.services.map((s) => (
                <li key={s} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-700">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </HomeSection>

      <HomeSection variant="muted" containerClass="max-w-4xl">
        <HomeSectionHeader title="Keywords" titleAccent="เป้าหมาย" centered className="mx-auto" />
        <div className="flex flex-wrap justify-center gap-2">
          {data.keywords.map((kw) => (
            <span
              key={kw}
              className="bg-white border border-slate-200 text-slate-700 px-3.5 py-1.5 rounded-full text-xs sm:text-sm"
            >
              {kw}
            </span>
          ))}
        </div>
      </HomeSection>

      <HomeSection variant="white" containerClass="max-w-lg mx-auto">
        <ServicePricingTeaser
          priceLabel={pricing.priceLabel}
          planName={pricing.planName}
          features={pricing.features}
          proNote={`เหมาะกับ${data.industry}ในภูเก็ต — อัปเกรดได้ทุกเมื่อ`}
        />
      </HomeSection>

      <ServiceFaqSection title="คำถามเกี่ยวกับ" titleAccent={data.industry} faqs={faqs} />

      <ServicePageCta
        title={`พร้อมให้${data.industry}`}
        titleAccent="ติด Google?"
        description="ขอคำปรึกษาฟรี เราจะวิเคราะห์โซน คู่แข่ง และแนะนำแพ็กที่เหมาะกับธุรกิจคุณ"
        secondaryHref="/services/seo-phuket"
        secondaryLabel="บริการ SEO ภูเก็ต"
      />
    </div>
  );
}
