import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Brain, Search, FileText, type LucideIcon } from "lucide-react";
import { localServiceProvider, areaServedPhuket, faqSchema, buildBreadcrumb } from "@/lib/schema";
import { siteImages } from "@/lib/images";
import { aiSearchContent } from "@/lib/service-content";
import { ServiceFaqSection } from "@/components/ServiceFaqSection";
import { siteConfig } from "@/lib/utils";
import { BrandGradientDefs } from "@/components/BrandGradientDefs";
import { HomeSection, HomeSectionHeader } from "@/components/home/HomeSection";
import { ServiceBreadcrumb } from "@/components/services/ServiceBreadcrumb";
import { ServiceMarketingHero } from "@/components/services/ServiceMarketingHero";
import { ServicePricingTeaser } from "@/components/services/ServicePricingTeaser";
import { ServicePageCta } from "@/components/services/ServicePageCta";

export const metadata: Metadata = {
  title: "AEO / GEO / AI Search Visibility ภูเก็ต | PhuketSEO",
  description:
    "บริการ AEO GEO และ AI Overview SEO สำหรับธุรกิจในภูเก็ต โครงสร้างคำตอบ FAQ schema llms.txt รวมในแพ็ก SEO Pro ฿8,900/เดือน",
  alternates: { canonical: `${siteConfig.url}/services/ai-search-visibility` },
};

const breadcrumbSchema = buildBreadcrumb([
  { name: "หน้าแรก", url: siteConfig.url },
  { name: "AI Search Visibility", url: `${siteConfig.url}/services/ai-search-visibility` },
]);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Search Visibility (AEO / GEO)",
  provider: localServiceProvider,
  description: aiSearchContent.answerBlock,
  areaServed: areaServedPhuket,
  offers: {
    "@type": "Offer",
    priceCurrency: "THB",
    price: "8900",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      priceCurrency: "THB",
      price: "8900",
      unitText: "MONTH",
    },
  },
};

const pillars: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Search, title: "AEO", desc: "Google AI Overview + Featured Snippets" },
  { icon: Brain, title: "GEO", desc: "ChatGPT · Perplexity citation" },
  { icon: Sparkles, title: "Entity", desc: "llms.txt · schema · NAP" },
];

export default function AiSearchVisibilityPage() {
  return (
    <div>
      <BrandGradientDefs />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(aiSearchContent.faqs)) }} />

      <ServiceBreadcrumb serviceName="AI Search Visibility" />

      <ServiceMarketingHero
        eyebrow="AEO · GEO · AI Overview"
        title="AI Search Visibility"
        titleAccent="สำหรับธุรกิจภูเก็ต"
        description="ช่วยธุรกิจในภูเก็ตโผล่ทั้ง Google Search, Google AI Overview และ AI chatbots ด้วยโครงสร้าง AEO และ GEO"
        answerBlock={aiSearchContent.answerBlock}
        image={siteImages.services.seo}
        stats={[
          { value: "AEO", label: "AI Overview ready" },
          { value: "GEO", label: "ChatGPT citation" },
          { value: "Schema", label: "FAQ + entity" },
          { value: "Pro", label: "฿8,900/เดือน" },
        ]}
        trustBadges={["FAQ schema", "llms.txt setup", "Answer blocks", "รายงาน quarterly"]}
        secondaryHref="#deliverables"
        secondaryLabel="ดูสิ่งที่ส่งมอบ"
      />

      <HomeSection variant="muted" className="border-t-0">
        <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
          {aiSearchContent.intro.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
          <p className="text-slate-600">
            <Link href="/methodology/phuket-visibility-stack" className="text-violet-600 font-medium hover:underline underline-offset-2">
              Phuket Visibility Stack™
            </Link>
            {" · "}
            <Link href="/blog/aeo-kue-arai" className="text-violet-600 font-medium hover:underline underline-offset-2">
              AEO คืออะไร
            </Link>
          </p>
        </div>
      </HomeSection>

      <HomeSection id="deliverables" variant="white" containerClass="max-w-6xl">
        <HomeSectionHeader
          eyebrow="Framework"
          title="AEO / GEO"
          titleAccent="3 เสา"
          centered
          className="mx-auto"
        />
        <div className="grid md:grid-cols-3 gap-3 md:gap-4 mb-10">
          {pillars.map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
              <div className="w-9 h-9 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center mb-4">
                <item.icon size={18} />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </HomeSection>

      <HomeSection variant="muted" containerClass="max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div>
            <HomeSectionHeader
              title="สิ่งที่ส่งมอบ"
              titleAccent="(SEO Pro ขึ้นไป)"
              className="mb-6"
            />
            <ul className="space-y-2.5">
              {aiSearchContent.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-700">
                  <FileText size={16} className="text-indigo-600 shrink-0 mt-0.5" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <ServicePricingTeaser
            priceLabel="8,900"
            planName="SEO Pro"
            features={["AEO: FAQ + schema + answer blocks", "GEO: entity + llms.txt", "เว็บ + SEO รายเดือน", "Lite ยังไม่รวม AEO/GEO"]}
            proNote="รวมใน SEO Pro และ Pro Max — ไม่มีสัญญาผูกมัด"
          />
        </div>
      </HomeSection>

      <ServiceFaqSection faqs={aiSearchContent.faqs} />

      <ServicePageCta
        title="รวมในแพ็ก"
        titleAccent="SEO Pro"
        description="฿8,900/เดือน — AEO/GEO structure ครบตั้งแต่เดือนแรก"
        secondaryHref="/pricing"
        secondaryLabel="ดูราคาแพ็กเกจ"
      />
    </div>
  );
}
