import { Metadata } from 'next';
import LocalSeoPage from "@/components/LocalSeoPage";

// Metadata
export const metadata: Metadata = {
  title: 'SEO ตัวเมืองภูเก็ต: เพิ่มการมองเห็นธุรกิจของคุณในย่านวัฒนธรรม',
  description: 'บริการ SEO สำหรับธุรกิจในตัวเมืองภูเก็ต ไม่ว่าจะเป็นร้านค้า ร้านอาหาร คลินิก หรือโรงแรมบูติก เพิ่มโอกาสให้ลูกค้าค้นพบคุณ',
};

// BreadcrumbList Schema
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "หน้าแรก",
      "item": "https://phuketseo.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Local SEO",
      "item": "https://phuketseo.com/local/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "ตัวเมืองภูเก็ต",
      "item": "https://phuketseo.com/local/phuket-town/"
    }
  ]
};

// Service Schema
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Local SEO Services",
  "provider": {
    "@type": "Organization",
    "name": "PhuketSEO"
  },
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "ตัวเมืองภูเก็ต"
  },
  "description": "บริการ SEO สำหรับธุรกิจในตัวเมืองภูเก็ต เพื่อเพิ่มการมองเห็นและดึงดูดลูกค้าในพื้นที่",
  "url": "https://phuketseo.com/local/phuket-town/",
  "name": "Local SEO ตัวเมืองภูเก็ต"
};

export default function PhuketTownPage() {
  const areaProps = {
    area: "ตัวเมืองภูเก็ต",
    areaEn: "Phuket Town",
    slug: "phuket-town",
    description: "ย่านธุรกิจและวัฒนธรรม ศูนย์กลางประวัติศาสตร์ของภูเก็ต",
    businesses: ["ร้านค้า", "ร้านอาหาร", "คลินิก", "สำนักงาน", "โรงแรม Boutique"],
    keywords: ["SEO ตัวเมืองภูเก็ต", "ร้านอาหารภูเก็ต", "คลินิกภูเก็ต", "ธุรกิจภูเก็ต"],
    landmarks: ["ย่านเมืองเก่าภูเก็ต", "ถนนถลาง", "วัดมงคลนิมิตร", "ศาลหลักเมือง"],
    stats: [
      { metric: "+300%", label: "Organic Traffic" },
      { metric: "Top 3", label: "ติดอันดับ Google" },
      { metric: "5 เดือน", label: "เห็นผลลัพธ์" },
      { metric: "60+", label: "ธุรกิจในตัวเมือง" },
    ],
  };

  return (
    <LocalSeoPage {...areaProps} />
  );
}
