import Link from "next/link";
import { businessEntityId, pricingServicesJsonLd } from "@/lib/schema";
import { BrandGradientDefs } from "@/components/BrandGradientDefs";
import { HomeSection, HomeSectionHeader } from "@/components/home/HomeSection";
import { PricingTabsSection } from "@/components/pricing/PricingTabsSection";
import { GradientButton } from "@/components/GradientButton";
import { siteConfig } from "@/lib/utils";

const pricingPageUrl = `${siteConfig.url}/pricing`;

export const metadata = {
  title: "ราคารับยิงแอด SEO และเว็บไซต์ภูเก็ต | เริ่ม ฿3,000/เดือน - PhuketSEO",
  description:
    "แพ็กโฆษณา Meta/Google จาก ฿3,000/เดือน แพ็ก SEO จาก ฿4,000/เดือน เว็บไซต์ ฿6,500 และโดเมน+เซิร์ฟเวอร์ ฿2,500/ปี",
  alternates: {
    canonical: pricingPageUrl,
  },
  openGraph: {
    title: "ราคารับยิงแอด SEO และเว็บไซต์ภูเก็ต | PhuketSEO",
    description: "แอดจาก ฿3,000/เดือน · SEO จาก ฿4,000/เดือน · เว็บ ฿6,500 · โดเมน+เซิร์ฟเวอร์ ฿2,500/ปี",
    url: pricingPageUrl,
    siteName: "PhuketSEO",
    locale: "th_TH",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "หน้าแรก", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "ราคาบริการ", item: pricingPageUrl },
      ],
    },
    { "@id": businessEntityId },
    ...pricingServicesJsonLd,
  ],
};

export default function PricingPage() {
  return (
    <div className="pt-[var(--site-header-height)]">
      <BrandGradientDefs />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <HomeSection variant="white" containerClass="max-w-6xl">
        <PricingTabsSection defaultTab="ads" titleAs="h1" />
        <p className="text-sm text-slate-600 mt-8 leading-relaxed text-center">
          ค่า ad spend แยกจากค่าบริการ ·{" "}
          <Link href="/services/google-ads" className="text-violet-600 font-medium hover:underline underline-offset-2">
            รับทำ Google Ads ภูเก็ต
          </Link>
          {" · "}
          <Link href="/services/social-media" className="text-violet-600 font-medium hover:underline underline-offset-2">
            รับยิงแอด Facebook ภูเก็ต
          </Link>
          {" · "}
          <Link href="/services/seo-phuket" className="text-violet-600 font-medium hover:underline underline-offset-2">
            รับทำ SEO ภูเก็ต
          </Link>
        </p>
      </HomeSection>

      <HomeSection variant="gradient" containerClass="max-w-2xl">
        <div className="text-center">
          <HomeSectionHeader
            title="ไม่แน่ใจว่าแพ็กไหน"
            titleAccent="เหมาะ?"
            description="ขอคำปรึกษาฟรี — เราแนะนำแพ็กแอด SEO หรือเว็บตามงบและเป้าหมายธุรกิจในภูเก็ต"
            centered
            className="mb-7"
          />
          <GradientButton href="/contact" className="px-7">
            ขอคำปรึกษาฟรี
          </GradientButton>
        </div>
      </HomeSection>
    </div>
  );
}
