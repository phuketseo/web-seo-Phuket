import { Metadata } from "next";
import IndustrySeoPage from "@/components/IndustrySeoPage";
import { industrySeoContent } from "@/lib/industry-seo-content";
import { faqSchema, buildBreadcrumb } from "@/lib/schema";
import { siteConfig } from "@/lib/utils";

const data = industrySeoContent.realEstate;

export const metadata: Metadata = {
  title: "SEO อสังหาริมทรัพย์ภูเก็ต | Lead Generation - PhuketSEO",
  description: data.description,
  alternates: { canonical: `${siteConfig.url}/industries/seo-real-estate-phuket` },
};

export default function RealEstateIndustryPage() {
  const faqJson = faqSchema(data.faqs.map((f) => ({ question: f.q, answer: f.a })));
  const breadcrumb = buildBreadcrumb([
    { name: "หน้าแรก", url: siteConfig.url },
    { name: "SEO อสังหาริมทรัพย์ภูเก็ต", url: `${siteConfig.url}/industries/seo-real-estate-phuket` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }} />
      <IndustrySeoPage data={data} />
    </>
  );
}
