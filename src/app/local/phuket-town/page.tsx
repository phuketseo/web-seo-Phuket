import { Metadata } from 'next';
import LocalSeoPage from "@/components/LocalSeoPage";
import { faqSchema, buildBreadcrumb, localServiceProvider } from "@/lib/schema";
import { localSeoContent } from "@/lib/local-seo-content";
import { localSeoServiceStats } from "@/lib/local-seo-stats";
import { siteConfig } from "@/lib/utils";

export const metadata: Metadata = {
  title: 'SEO ตัวเมืองภูเก็ต: เพิ่มการมองเห็นธุรกิจของคุณในย่านวัฒนธรรม',
  description: 'บริการ SEO สำหรับธุรกิจในตัวเมืองภูเก็ต ไม่ว่าจะเป็นร้านค้า ร้านอาหาร คลินิก หรือโรงแรมบูติก เพิ่มโอกาสให้ลูกค้าค้นพบคุณ',
  alternates: { canonical: `${siteConfig.url}/local/phuket-town` },
};

const areaContent = localSeoContent["phuket-town"];

const breadcrumbSchema = buildBreadcrumb([
  { name: "หน้าแรก", url: siteConfig.url },
  { name: "Local SEO ตัวเมืองภูเก็ต", url: `${siteConfig.url}/local/phuket-town` },
]);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Local SEO Services",
  provider: localServiceProvider,
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "ตัวเมืองภูเก็ต"
  },
  "description": "บริการ SEO สำหรับธุรกิจในตัวเมืองภูเก็ต เพื่อเพิ่มการมองเห็นและดึงดูดลูกค้าในพื้นที่",
  "url": "https://phuketseo.com/local/phuket-town",
  "name": "Local SEO ตัวเมืองภูเก็ต"
};

const faqSchemaJson = faqSchema(
  areaContent.faqs.map((faq) => ({ question: faq.q, answer: faq.a }))
);

export default function PhuketTownPage() {
  const areaProps = {
    area: "ตัวเมืองภูเก็ต",
    areaEn: "Phuket Town",
    slug: "phuket-town",
    description: "ย่านธุรกิจและวัฒนธรรม ศูนย์กลางประวัติศาสตร์ของภูเก็ต",
    businesses: ["ร้านค้า", "ร้านอาหาร", "คลินิก", "สำนักงาน", "โรงแรม Boutique"],
    keywords: ["SEO ตัวเมืองภูเก็ต", "ร้านอาหารภูเก็ต", "คลินิกภูเก็ต", "ธุรกิจภูเก็ต"],
    landmarks: ["ย่านเมืองเก่าภูเก็ต", "ถนนถลาง", "วัดมงคลนิมิตร", "ศาลหลักเมือง"],
    stats: [...localSeoServiceStats],
    intro: areaContent.intro,
    faqs: areaContent.faqs,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaJson) }}
      />
      <LocalSeoPage {...areaProps} />
    </>
  );
}
