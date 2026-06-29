import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, X, Calendar, RefreshCw, ExternalLink } from "lucide-react";
import { buildBreadcrumb, faqSchema, localServiceProvider, areaServedPhuket } from "@/lib/schema";
import { ServiceFaqSection } from "@/components/ServiceFaqSection";
import { siteConfig } from "@/lib/utils";
import {
  type PackagePageContent,
  getPackagePricing,
  packageContactHref,
} from "@/lib/package-pages-content";
import { BrandGradientDefs } from "@/components/BrandGradientDefs";
import { HomeSection, HomeSectionHeader } from "@/components/home/HomeSection";
import { GradientButton } from "@/components/GradientButton";
import { MarketingBreadcrumb } from "@/components/MarketingBreadcrumb";
import { PackageMarketingHero } from "@/components/packages/PackageMarketingHero";

type Props = {
  content: PackagePageContent;
};

export function PackageDetailPage({ content }: Props) {
  const pricing = getPackagePricing(content.id);
  const pageUrl = `${siteConfig.url}${content.path}`;

  const breadcrumbSchema = buildBreadcrumb([
    { name: "หน้าแรก", url: siteConfig.url },
    { name: "ราคาบริการ", url: `${siteConfig.url}/pricing` },
    { name: pricing.name, url: pageUrl },
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: pricing.name,
    description: content.metaDescription,
    provider: localServiceProvider,
    areaServed: areaServedPhuket,
    offers: {
      "@type": "Offer",
      price: pricing.price,
      priceCurrency: "THB",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: pricing.price,
        priceCurrency: "THB",
        unitText: "MONTH",
      },
      url: pageUrl,
    },
  };

  const faqSchemaJson = faqSchema(content.faqs);

  return (
    <div>
      <BrandGradientDefs />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaJson) }} />

      <div className="border-b border-slate-100/80 bg-white pt-24">
        <div className="container-custom py-3">
          <MarketingBreadcrumb
            items={[
              { label: "หน้าแรก", href: "/" },
              { label: "ราคา", href: "/pricing" },
              { label: pricing.name },
            ]}
          />
        </div>
      </div>

      <PackageMarketingHero
        badge={content.heroBadge}
        title={content.heroTitle}
        titleAccent={content.heroHighlight}
        priceLabel={pricing.priceLabel}
        subtitle={content.heroSubtitle}
        answerBlock={content.answerBlock}
        image={content.heroImage}
        primaryHref={packageContactHref(content.id)}
        primaryCta={pricing.cta}
      />

      <HomeSection variant="muted" className="border-t-0" containerClass="max-w-6xl">
        <HomeSectionHeader title={content.monthlyTitle} description={content.monthlyIntro} centered className="mx-auto max-w-2xl" />

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-10">
          <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
            <div className="flex items-center gap-2 text-indigo-600 font-semibold text-sm mb-4">
              <Calendar size={18} />
              เดือนที่ 1 (Setup)
            </div>
            <ul className="space-y-2.5">
              {content.monthOneItems.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm text-slate-700 leading-relaxed">
                  <Check size={16} className="text-indigo-600 shrink-0 mt-0.5" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
            <div className="flex items-center gap-2 text-violet-600 font-semibold text-sm mb-4">
              <RefreshCw size={18} />
              ทุกเดือนที่ต่ออายุ
            </div>
            <ul className="space-y-2.5">
              {content.everyMonthItems.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm text-slate-700 leading-relaxed">
                  <Check size={16} className="text-violet-600 shrink-0 mt-0.5" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative aspect-[3/2] max-w-4xl mx-auto rounded-xl overflow-hidden border border-slate-200 shadow-sm mb-3">
          <Image
            src={content.showcaseImage.src}
            alt={content.showcaseImage.alt}
            fill
            className="object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
          />
        </div>
        <p className="text-center text-sm text-slate-500 max-w-2xl mx-auto">{content.showcaseCaption}</p>
      </HomeSection>

      <HomeSection variant="white" containerClass="max-w-3xl">
        <HomeSectionHeader
          title="แพ็กนี้"
          titleAccent="ไม่รวมอะไร"
          centered
          className="mx-auto"
        />
        <ul className="space-y-2.5">
          {content.notIncluded.map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-700 text-sm leading-relaxed"
            >
              <X size={16} className="text-red-400 shrink-0 mt-0.5" strokeWidth={2} />
              {item}
            </li>
          ))}
        </ul>
      </HomeSection>

      <HomeSection variant="muted" containerClass="max-w-3xl">
        <HomeSectionHeader title={content.worthItTitle} centered className="mx-auto" />
        <ul className="space-y-3">
          {content.worthItPoints.map((point) => (
            <li key={point} className="flex gap-3 text-slate-700 leading-relaxed text-sm sm:text-base">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
              {point}
            </li>
          ))}
        </ul>
      </HomeSection>

      <HomeSection variant="white" containerClass="max-w-6xl">
        <HomeSectionHeader
          eyebrow="Ideal for"
          title="เหมาะกับธุรกิจ"
          titleAccent="แบบไหน"
          centered
          className="mx-auto"
        />
        <div className="grid md:grid-cols-3 gap-3 md:gap-4">
          {content.idealFor.map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </HomeSection>

      <HomeSection variant="muted" containerClass="max-w-4xl">
        <HomeSectionHeader title="เปรียบเทียบ" titleAccent="แพ็กอื่น" description={content.compareIntro} centered className="mx-auto" />
        <div className="grid md:grid-cols-2 gap-4">
          {content.compareCards.map((card) => (
            <Link
              key={card.id}
              href={card.href}
              className="group block rounded-xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm hover:border-violet-200 hover:shadow-md transition-all"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-indigo-600 mb-1">{card.name}</p>
              <p className="text-2xl font-bold text-slate-900 tabular-nums mb-2">
                ฿{card.priceLabel}
                <span className="text-sm font-normal text-slate-500">/เดือน</span>
              </p>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">{card.hook}</p>
              <span className="inline-flex items-center gap-1 text-violet-600 font-semibold text-sm group-hover:gap-2 transition-all">
                {card.cta} <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
        <p className="text-center mt-8">
          <Link
            href="/pricing"
            className="text-violet-600 font-medium hover:underline underline-offset-2 inline-flex items-center gap-1 text-sm"
          >
            ดูตารางเปรียบเทียบครบ <ExternalLink size={14} />
          </Link>
        </p>
      </HomeSection>

      <HomeSection variant="white" containerClass="max-w-3xl">
        <HomeSectionHeader eyebrow="อ่านเพิ่ม" title="บทความ" titleAccent="ที่เกี่ยวข้อง" centered className="mx-auto" />
        <div className="flex flex-wrap justify-center gap-2.5">
          {content.relatedLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm bg-white border border-slate-200 rounded-full px-4 py-2 text-slate-700 hover:border-violet-200 hover:bg-violet-50/50 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </HomeSection>

      <ServiceFaqSection title="คำถามเกี่ยวกับ" titleAccent={pricing.name} faqs={content.faqs} />

      <HomeSection variant="gradient" containerClass="max-w-2xl">
        <div className="text-center">
          <HomeSectionHeader
            title={`พร้อมเริ่ม ${pricing.name}?`}
            description={`฿${pricing.priceLabel}/เดือน · ไม่มีสัญญาผูกมัด · ขอคำปรึกษาฟรีก่อนตัดสินใจ`}
            centered
            className="mb-7"
          />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <GradientButton href={packageContactHref(content.id)} className="px-7">
              {pricing.cta}
            </GradientButton>
            <Link
              href="/seo-audit"
              className="inline-flex items-center justify-center text-sm font-medium px-6 py-3 rounded-lg border border-slate-200 text-slate-700 hover:border-violet-200 hover:bg-violet-50/50 transition-colors"
            >
              ขอ SEO Audit ฟรี
            </Link>
          </div>
        </div>
      </HomeSection>
    </div>
  );
}
