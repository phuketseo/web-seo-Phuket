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

const data = industrySeoContent.realEstate;
const pageUrl = `${siteConfig.url}/industries/seo-real-estate-phuket`;

export const metadata: Metadata = {
  title: "SEO อสังหาริมทรัพย์ภูเก็ต | รับทำ SEO อสังหา Lead Gen - PhuketSEO",
  description: data.description,
  alternates: { canonical: pageUrl },
  keywords: data.keywords,
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO อสังหาริมทรัพย์ภูเก็ต",
  alternateName: ["รับทำ SEO อสังหา ภูเก็ต", "SEO อสังหาฯ ภูเก็ต", "phuket property seo"],
  provider: localServiceProvider,
  description: data.answerBlock,
  areaServed: areaServedPhuket,
  serviceType: "Real Estate SEO",
  url: pageUrl,
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
    description: "แพ็ก SEO Pro รวมเว็บ lead gen + SEO + AEO",
    url: `${siteConfig.url}/packages/seo-pro`,
  },
};

export default function RealEstateIndustryPage() {
  const faqJson = faqSchema(data.faqs.map((f) => ({ question: f.q, answer: f.a })));
  const breadcrumb = buildBreadcrumb([
    { name: "หน้าแรก", url: siteConfig.url },
    { name: "SEO อสังหาริมทรัพย์ภูเก็ต", url: pageUrl },
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
