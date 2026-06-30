import { Metadata } from "next";
import IndustrySeoPage from "@/components/IndustrySeoPage";
import { industrySeoContent } from "@/lib/industry-seo-content";
import {
  faqSchema,
  buildBreadcrumb,
  localServiceProvider,
  areaServedPhuket,
  plainTextForSchema,
  businessEntityId,
} from "@/lib/schema";
import { siteConfig } from "@/lib/utils";

const data = industrySeoContent.tour;
const pageUrl = `${siteConfig.url}/industries/seo-tours-phuket`;

export const metadata: Metadata = {
  title: "SEO บริษัททัวร์ภูเก็ต | Direct Booking - PhuketSEO",
  description: data.description,
  alternates: { canonical: pageUrl },
};

const breadcrumbSchema = buildBreadcrumb([
  { name: "หน้าแรก", url: siteConfig.url },
  { name: "SEO บริษัททัวร์ภูเก็ต", url: pageUrl },
]);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${pageUrl}#service`,
  name: "SEO สำหรับบริษัททัวร์ภูเก็ต",
  serviceType: "SEO สำหรับบริษัททัวร์",
  description: data.description,
  url: pageUrl,
  provider: localServiceProvider,
  areaServed: areaServedPhuket,
  inLanguage: "th-TH",
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
    url: `${siteConfig.url}/pricing`,
  },
};

const faqSchemaJson = faqSchema(
  data.faqs.map((f) => ({
    question: f.q,
    answer: plainTextForSchema(f.a),
  }))
);

const tourExamplesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TouristTrip",
      "@id": `${pageUrl}#trip-phiphi`,
      name: "ทัวร์เกาะพีพีจากป่าตอง",
      description: "Island hopping tour จากจุดรับป่าตอง ไปเกาะพีพี",
      touristType: {
        "@type": "Audience",
        audienceType: "International tourists",
      },
      itinerary: {
        "@type": "ItemList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "จุดรับ ป่าตอง" },
          { "@type": "ListItem", position: 2, name: "เกาะพีพี" },
        ],
      },
      provider: { "@id": businessEntityId },
    },
    {
      "@type": "Product",
      "@id": `${pageUrl}#product-snorkeling`,
      name: "ทัวร์ดำน้ำภูเก็ต",
      description: "Snorkeling day trip ในอ่าวภูเก็ต",
      category: "Tour & Activity",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: "THB",
      },
    },
  ],
};

export default function TourIndustryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaJson) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tourExamplesSchema) }} />
      <IndustrySeoPage data={data} />
    </>
  );
}
