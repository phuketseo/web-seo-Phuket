import LocalSeoPage from "@/components/LocalSeoPage";
import { Metadata } from "next";
import { faqSchema, buildBreadcrumb } from "@/lib/schema";
import { localSeoContent } from "@/lib/local-seo-content";
import { siteConfig } from "@/lib/utils";

const areaContent = localSeoContent.kata;

export const metadata: Metadata = {
  title: "SEO กะตะ - Local SEO หาดกะตะ ภูเก็ต | PhuketSEO",
  description:
    "บริการ Local SEO กะตะ ภูเก็ต สปา ร้านอาหาร โรงแรม boutique ติด Google Maps และ Search ในโซนกะตะ",
  alternates: { canonical: `${siteConfig.url}/local/kata` },
};

export default function KataPage() {
  const breadcrumb = buildBreadcrumb([
    { name: "หน้าแรก", url: siteConfig.url },
    { name: "Local SEO กะตะ", url: `${siteConfig.url}/local/kata` },
  ]);
  const faqSchemaJson = faqSchema(areaContent.faqs.map((faq) => ({ question: faq.q, answer: faq.a })));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaJson) }} />
      <LocalSeoPage
        area="กะตะ"
        areaEn="Kata"
        slug="kata"
        description="ย่านหาดครอบครัว สปา และร้านอาหารริมทะเล — โซน keyword แข่งขันสูง"
        answerBlock={areaContent.answerBlock}
        businesses={["สปา", "ร้านอาหาร", "โรงแรม Boutique", "รีสอร์ท", "ทัวร์ดำน้ำ", "ร้านนวด"]}
        keywords={["SEO กะตะ", "spa kata phuket", "restaurant kata beach", "hotel kata", "thai massage kata"]}
        landmarks={["หาดกะตะ", "หาดกะตะน้อย", "ถนนกะตะ", "จุดชมวิว Karon Viewpoint"]}
        stats={[
          { metric: "+180%", label: "Maps Impressions" },
          { metric: "Top 3", label: "Local Pack" },
          { metric: "3 เดือน", label: "เห็นผล" },
          { metric: "฿5,900", label: "เริ่มต้น/เดือน" },
        ]}
        intro={areaContent.intro}
        faqs={areaContent.faqs}
      />
    </>
  );
}
