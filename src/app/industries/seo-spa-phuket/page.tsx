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

const data = industrySeoContent.spa;
const pageUrl = `${siteConfig.url}/industries/seo-spa-phuket`;

export const metadata: Metadata = {
  title: "SEO สปาและร้านนวดภูเก็ต | รับทำ SEO สปา - PhuketSEO",
  description: data.description,
  alternates: { canonical: pageUrl },
  keywords: data.keywords,
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO สปาและร้านนวดภูเก็ต",
  alternateName: ["SEO สปาภูเก็ต", "รับทำ SEO สปา", "SEO ร้านนวดภูเก็ต"],
  provider: localServiceProvider,
  description: data.answerBlock,
  areaServed: areaServedPhuket,
  serviceType: "Spa and Massage SEO",
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
    description: "แพ็ก SEO Lite เริ่มต้น หรือ Pro รวมเว็บ",
    url: `${siteConfig.url}/packages/seo-lite`,
  },
};

export default function SpaIndustryPage() {
  const faqJson = faqSchema(data.faqs.map((f) => ({ question: f.q, answer: f.a })));
  const breadcrumb = buildBreadcrumb([
    { name: "หน้าแรก", url: siteConfig.url },
    { name: "SEO สปาและร้านนวดภูเก็ต", url: pageUrl },
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
