import type { Metadata } from "next";
import Link from "next/link";
import { Target, TrendingUp, BarChart3, Zap, type LucideIcon } from "lucide-react";
import { siteImages } from "@/lib/images";
import { faqSchema, buildBreadcrumb } from "@/lib/schema";
import { googleAdsContent } from "@/lib/service-content";
import { ServiceFaqSection } from "@/components/ServiceFaqSection";
import { siteConfig } from "@/lib/utils";
import { BrandGradientDefs } from "@/components/BrandGradientDefs";
import { HomeSection, HomeSectionHeader } from "@/components/home/HomeSection";
import { ServiceBreadcrumb } from "@/components/services/ServiceBreadcrumb";
import { ServiceMarketingHero } from "@/components/services/ServiceMarketingHero";
import { ServicePricingTeaser } from "@/components/services/ServicePricingTeaser";
import { ServicePageCta } from "@/components/services/ServicePageCta";

export const metadata: Metadata = {
  title: "รับทำ Google Ads ภูเก็ต | ยิงแอดตรงกลุ่มเป้าหมาย - PhuketSEO",
  description:
    "บริการ Google Ads ภูเก็ต ยิงโฆษณาตรงกลุ่มเป้าหมาย ได้ผลลัพธ์ทันที ประหยัดงบประมาณ ROI สูงสุด ขอคำปรึกษาฟรี!",
  alternates: { canonical: `${siteConfig.url}/services/google-ads` },
};

const breadcrumbSchema = buildBreadcrumb([
  { name: "หน้าแรก", url: siteConfig.url },
  { name: "Google Ads ภูเก็ต", url: `${siteConfig.url}/services/google-ads` },
]);

const faqSchemaJson = faqSchema(googleAdsContent.faqs);

const features: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Target, title: "Search Ads", desc: "โฆษณาบน Google Search ตรงกับคนที่กำลังค้นหาสินค้า/บริการของคุณ" },
  { icon: BarChart3, title: "Display Ads", desc: "Banner โฆษณาบนเว็บไซต์พันธมิตร Google เพิ่ม Brand Awareness" },
  { icon: TrendingUp, title: "Shopping Ads", desc: "แสดงสินค้าพร้อมราคาบน Google Shopping เพิ่ม Conversion" },
  { icon: Zap, title: "Remarketing", desc: "ติดตามผู้เยี่ยมชมเว็บไซต์และแสดงโฆษณาซ้ำเพื่อเพิ่ม Conversion" },
];

const includedItems = [
  "Campaign Setup & Strategy",
  "Keyword Research & Bidding",
  "Ad Copywriting (A/B Testing)",
  "Landing Page Optimization",
  "Conversion Tracking Setup",
  "Audience Targeting & Remarketing",
  "Budget Management & Optimization",
  "Weekly & Monthly Reporting",
  "Competitor Ad Analysis",
  "Quality Score Improvement",
];

export default function GoogleAdsPage() {
  return (
    <div>
      <BrandGradientDefs />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaJson) }} />

      <ServiceBreadcrumb serviceName="Google Ads" />

      <ServiceMarketingHero
        eyebrow="Google Ads Management"
        title="Google Ads ภูเก็ต"
        titleAccent="ยิงแอดตรงกลุ่มได้ผลทันที"
        description="บริหารจัดการ Google Ads อย่างมืออาชีพ ลด CPC เพิ่ม Conversion ให้ทุกบาทที่ลงทุนได้ผลตอบแทนสูงสุด"
        answerBlock={googleAdsContent.answerBlock}
        image={siteImages.services.googleAds}
        stats={[
          { value: "-40%", label: "ลด CPC เฉลี่ย" },
          { value: "+300%", label: "เพิ่ม Conversion Rate" },
          { value: "5x", label: "ROAS เฉลี่ย" },
          { value: "24hr", label: "เห็นผลลัพธ์แรก" },
        ]}
        trustBadges={["ไม่รวม Ad Spend", "Campaign Setup ฟรี", "รายงานรายสัปดาห์", "Dedicated Manager"]}
        secondaryHref="#features"
        secondaryLabel="ดูประเภทแอด"
      />

      <HomeSection variant="muted" className="border-t-0">
        <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
          {googleAdsContent.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
          <p className="text-slate-600">
            อ่านเพิ่ม:{" "}
            <Link href="/services/seo-phuket" className="text-violet-600 font-medium hover:underline underline-offset-2">
              บริการ SEO ภูเก็ต
            </Link>
            {" · "}
            <Link href="/packages/seo-pro-max" className="text-violet-600 font-medium hover:underline underline-offset-2">
              SEO Pro Max (รวม Ads)
            </Link>
          </p>
        </div>
      </HomeSection>

      <HomeSection id="features" variant="white" containerClass="max-w-6xl">
        <HomeSectionHeader
          title="ประเภท Google Ads"
          titleAccent="ที่เราจัดการ"
          centered
          className="mx-auto"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <f.icon size={20} />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </HomeSection>

      <HomeSection variant="muted" containerClass="max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div>
            <HomeSectionHeader title="สิ่งที่รวมอยู่" titleAccent="ในบริการ" className="mb-6" />
            <ul className="space-y-2.5">
              {includedItems.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-700">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <ServicePricingTeaser
            priceLabel="5,900"
            planName="Management Fee"
            features={["ไม่รวม Ad Spend", "Campaign Setup ฟรี", "รายงานรายสัปดาห์", "Pro Max รวม Ads ฿15,000"]}
            proNote="แนะนำทำควบคู่ SEO เพื่อ traffic ระยะสั้น + ยั่งยืน"
          />
        </div>
      </HomeSection>

      <ServiceFaqSection faqs={googleAdsContent.faqs} />

      <ServicePageCta
        title="เริ่มต้น Google Ads"
        titleAccent="วันนี้?"
        description="ขอคำปรึกษาฟรี เราจะวิเคราะห์ธุรกิจและแนะนำกลยุทธ์ Google Ads ที่เหมาะสม — เห็นผลภายใน 24 ชั่วโมง"
        secondaryHref="/pricing"
      />
    </div>
  );
}
