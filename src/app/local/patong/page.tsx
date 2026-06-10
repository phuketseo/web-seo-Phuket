import LocalSeoPage from "@/components/LocalSeoPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO ป่าตอง - เพิ่มการมองเห็นธุรกิจในป่าตอง ภูเก็ต",
  description: "บริการ SEO สำหรับธุรกิจในป่าตอง ภูเก็ต เพิ่มการมองเห็นออนไลน์ของคุณสำหรับโรงแรม, บาร์, ร้านอาหาร, ร้านนวด, ทัวร์, และดำน้ำ",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "หน้าแรก",
      "item": "https://www.phuketseo.com/",
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Local SEO",
      "item": "https://www.phuketseo.com/local",
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "ป่าตอง",
      "item": "https://www.phuketseo.com/local/patong",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Local SEO Service in Patong",
  "provider": {
    "@type": "Organization",
    "name": "PhuketSEO",
    "url": "https://www.phuketseo.com",
  },
  "areaServed": {
    "@type": "Place",
    "name": "ป่าตอง",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "ป่าตอง",
      "addressRegion": "ภูเก็ต",
      "addressCountry": "TH",
    },
  },
  "description": "บริการ SEO สำหรับธุรกิจในป่าตอง ภูเก็ต เพื่อเพิ่มการมองเห็นและลูกค้าในพื้นที่",
  "name": "บริการ Local SEO ป่าตอง",
  "url": "https://www.phuketseo.com/local/patong",
};

export default function PatongPage() {
  const areaData = {
    area: "ป่าตอง",
    areaEn: "Patong",
    slug: "patong",
    description: "ย่านท่องเที่ยวที่มีชื่อเสียงที่สุดในภูเก็ต",
    businesses: ["โรงแรม", "บาร์", "ร้านอาหาร", "ร้านนวด", "ทัวร์", "ดำน้ำ"],
    keywords: ["SEO ป่าตอง", "โรงแรมป่าตอง", "ร้านอาหารป่าตอง", "ทัวร์ป่าตอง"],
    landmarks: ["หาดป่าตอง", "ถนนบางลา", "จุดชมวิวป่าตอง", "วัดสุวรรณคีรีวงศ์"],
    stats: [
      { metric: "+280%", label: "Organic Traffic" },
      { metric: "Top 3", label: "ติดอันดับ Google" },
      { metric: "4 เดือน", label: "เห็นผลลัพธ์" },
      { metric: "50+", label: "ธุรกิจในป่าตอง" },
    ],
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
      <LocalSeoPage {...areaData} />
    </>
  );
}
