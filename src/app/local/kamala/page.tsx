import LocalSeoPage from "@/components/LocalSeoPage";
import { Metadata } from "next";
import { faqSchema, buildBreadcrumb } from "@/lib/schema";
import { localSeoContent } from "@/lib/local-seo-content";
import { siteConfig } from "@/lib/utils";

const areaContent = localSeoContent.kamala;

export const metadata: Metadata = {
  title: "SEO กมลา - Local SEO หาดกมลา ภูเก็ต | PhuketSEO",
  description:
    "บริการ Local SEO กมลา ภูเก็ต อสังหาริมทรัพย์ รีสอร์ท luxury ร้านอาหาร ติด Google Maps และ Search",
  alternates: { canonical: `${siteConfig.url}/local/kamala` },
};

export default function KamalaPage() {
  const breadcrumb = buildBreadcrumb([
    { name: "หน้าแรก", url: siteConfig.url },
    { name: "Local SEO กมลา", url: `${siteConfig.url}/local/kamala` },
  ]);
  const faqSchemaJson = faqSchema(areaContent.faqs.map((faq) => ({ question: faq.q, answer: faq.a })));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaJson) }} />
      <LocalSeoPage
        area="กมลา"
        areaEn="Kamala"
        slug="kamala"
        description="ย่าน luxury beachfront คอนโด และ fine dining — buyer ต่างชาติค้นหา EN keyword"
        answerBlock={areaContent.answerBlock}
        businesses={["อสังหาริมทรัพย์", "รีสอร์ท Luxury", "ร้านอาหาร Fine Dining", "สปา Premium", "คอนโด Sales Office"]}
        keywords={["SEO กมลา", "condo kamala phuket", "resort kamala", "restaurant kamala beach", "villa kamala"]}
        landmarks={["หาดกมลา", "Kamala Village", "Phuket FantaSea", "Luxury Zone Kamala"]}
        stats={[
          { metric: "+220%", label: "Organic Leads" },
          { metric: "EN+RU", label: "Content" },
          { metric: "4 เดือน", label: "เห็นผล" },
          { metric: "฿8,900", label: "แพ็ก Pro" },
        ]}
        intro={areaContent.intro}
        faqs={areaContent.faqs}
      />
    </>
  );
}
