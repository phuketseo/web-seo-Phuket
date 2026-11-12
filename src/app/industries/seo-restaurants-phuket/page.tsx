import { Metadata } from "next";
import IndustrySeoPage from "@/components/IndustrySeoPage";
import { industrySeoContent } from "@/lib/industry-seo-content";
import {
  areaServedPhuket,
  buildBreadcrumb,
  faqSchema,
  localServiceProvider,
} from "@/lib/schema";
import { siteConfig } from "@/lib/utils";

const data = industrySeoContent.restaurant;
const pageUrl = `${siteConfig.url}/industries/seo-restaurants-phuket`;

export const metadata: Metadata = {
  title: "SEO ร้านอาหารภูเก็ต | รับทำ SEO ร้านอาหาร ติด Google Maps - PhuketSEO",
  description: data.description,
  alternates: { canonical: pageUrl },
  keywords: data.keywords,
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO ร้านอาหารภูเก็ต",
  alternateName: ["รับทำ SEO ร้านอาหาร", "Google Maps ร้านอาหารภูเก็ต"],
  provider: localServiceProvider,
  description: data.answerBlock,
  areaServed: areaServedPhuket,
  serviceType: "Restaurant SEO",
  url: pageUrl,
  offers: {
    "@type": "Offer",
    priceCurrency: "THB",
    price: "5900",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      priceCurrency: "THB",
      price: "5900",
      unitText: "MONTH",
    },
    description: "แพ็ก SEO Lite เริ่มต้น หรือ Pro รวมเว็บจองโต๊ะ",
    url: `${siteConfig.url}/packages/seo-lite`,
  },
};

export default function RestaurantIndustryPage() {
  const faqJson = faqSchema(data.faqs.map((f) => ({ question: f.q, answer: f.a })));
  const breadcrumb = buildBreadcrumb([
    { name: "หน้าแรก", url: siteConfig.url },
    { name: "SEO ร้านอาหารภูเก็ต", url: pageUrl },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }} />
      <IndustrySeoPage data={data} />
    </>
  );
}
