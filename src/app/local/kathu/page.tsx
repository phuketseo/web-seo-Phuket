import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';

// Metadata for Kathu page
export const metadata: Metadata = {
  title: 'SEO กะทู้ - เพิ่มการมองเห็นธุรกิจของคุณในภูเก็ต',
  description: 'บริการ SEO สำหรับธุรกิจในกะทู้ ภูเก็ต เช่น สนามกอล์ฟ รีสอร์ท ร้านอาหาร สปา และอสังหาฯ เพิ่มลูกค้าในพื้นที่ด้วยกลยุทธ์ SEO ท้องถิ่น',
  keywords: 'SEO กะทู้, สนามกอล์ฟภูเก็ต, รีสอร์ทกะทู้, อสังหาฯกะทู้, Phuket SEO, Local SEO Phuket',
  openGraph: {
    title: 'SEO กะทู้ - เพิ่มการมองเห็นธุรกิจของคุณในภูเก็ต',
    description: 'บริการ SEO สำหรับธุรกิจในกะทู้ ภูเก็ต เช่น สนามกอล์ฟ รีสอร์ท ร้านอาหาร สปา และอสังหาฯ เพิ่มลูกค้าในพื้นที่ด้วยกลยุทธ์ SEO ท้องถิ่น',
    url: 'https://www.phuketseo.com/local/kathu', // Assuming this is the URL structure
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO กะทู้ - เพิ่มการมองเห็นธุรกิจของคุณในภูเก็ต',
    description: 'บริการ SEO สำหรับธุรกิจในกะทู้ ภูเก็ต เช่น สนามกอล์ฟ รีสอร์ท ร้านอาหาร สปา และอสังหาฯ เพิ่มลูกค้าในพื้นที่ด้วยกลยุทธ์ SEO ท้องถิ่น',
  },
};

export default function KathuPage() {
  const areaDetails = {
    area: 'กะทู้',
    areaEn: 'Kathu',
    slug: 'kathu',
    description: 'ย่านที่พักและสนามกอล์ฟชั้นนำของภูเก็ต',
    businesses: ['สนามกอล์ฟ', 'รีสอร์ท', 'ร้านอาหาร', 'สปา', 'อสังหาฯ'],
    keywords: ['SEO กะทู้', 'สนามกอล์ฟภูเก็ต', 'รีสอร์ทกะทู้', 'อสังหาฯกะทู้'],
    landmarks: ['สนามกอล์ฟ Loch Palm', 'ห้างเซ็นทรัลภูเก็ต', 'ถนนวิชิตสงคราม'],
    stats: [
      { metric: "+220%", label: "Organic Traffic" },
      { metric: "Top 3", label: "ติดอันดับ Google" },
      { metric: "3 เดือน", label: "เห็นผลลัพธ์" },
      { metric: "30+", label: "ธุรกิจในกะทู้" },
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'หน้าแรก',
        item: 'https://www.phuketseo.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'บริการ Local SEO',
        item: 'https://www.phuketseo.com/local',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'กะทู้',
        item: 'https://www.phuketseo.com/local/kathu',
      },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Local SEO',
    name: 'บริการ SEO สำหรับธุรกิจในกะทู้ ภูเก็ต',
    description: 'เพิ่มการมองเห็นธุรกิจของคุณในกะทู้ ภูเก็ต ด้วยกลยุทธ์ SEO ท้องถิ่นที่ปรับแต่งมาโดยเฉพาะสำหรับสนามกอล์ฟ รีสอร์ท ร้านอาหาร สปา และอสังหาฯ',
    provider: {
      '@type': 'Organization',
      name: 'PhuketSEO',
      url: 'https://www.phuketseo.com',
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'กะทู้',
    },
    hasOffer: {
      '@type': 'Offer',
      priceCurrency: 'THB',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        unitText: 'month',
      },
      availability: 'https://schema.org/InStock',
    },
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
      <LocalSeoPage {...areaDetails} />
    </>
  );
}
