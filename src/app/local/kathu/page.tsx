import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { faqSchema, buildBreadcrumb, localServiceProvider } from '@/lib/schema';
import { localSeoContent } from '@/lib/local-seo-content';
import { localSeoServiceStats } from '@/lib/local-seo-stats';
import { siteConfig } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'SEO กะทู้ - เพิ่มการมองเห็นธุรกิจของคุณในภูเก็ต',
  description: 'บริการ SEO สำหรับธุรกิจในกะทู้ ภูเก็ต เช่น สนามกอล์ฟ รีสอร์ท ร้านอาหาร สปา และอสังหาฯ เพิ่มลูกค้าในพื้นที่ด้วยกลยุทธ์ SEO ท้องถิ่น',
  keywords: 'SEO กะทู้, สนามกอล์ฟภูเก็ต, รีสอร์ทกะทู้, อสังหาฯกะทู้, Phuket SEO, Local SEO Phuket',
  alternates: { canonical: `${siteConfig.url}/local/kathu` },
  openGraph: {
    title: 'SEO กะทู้ - เพิ่มการมองเห็นธุรกิจของคุณในภูเก็ต',
    description: 'บริการ SEO สำหรับธุรกิจในกะทู้ ภูเก็ต เช่น สนามกอล์ฟ รีสอร์ท ร้านอาหาร สปา และอสังหาฯ เพิ่มลูกค้าในพื้นที่ด้วยกลยุทธ์ SEO ท้องถิ่น',
    url: `${siteConfig.url}/local/kathu`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO กะทู้ - เพิ่มการมองเห็นธุรกิจของคุณในภูเก็ต',
    description: 'บริการ SEO สำหรับธุรกิจในกะทู้ ภูเก็ต เช่น สนามกอล์ฟ รีสอร์ท ร้านอาหาร สปา และอสังหาฯ เพิ่มลูกค้าในพื้นที่ด้วยกลยุทธ์ SEO ท้องถิ่น',
  },
};

const areaContent = localSeoContent.kathu;

const faqSchemaJson = faqSchema(
  areaContent.faqs.map((faq) => ({ question: faq.q, answer: faq.a }))
);

export default function KathuPage() {
  const areaDetails = {
    area: 'กะทู้',
    areaEn: 'Kathu',
    slug: 'kathu',
    description: 'ย่านที่พักและสนามกอล์ฟชั้นนำของภูเก็ต',
    businesses: ['สนามกอล์ฟ', 'รีสอร์ท', 'ร้านอาหาร', 'สปา', 'อสังหาฯ'],
    keywords: ['SEO กะทู้', 'สนามกอล์ฟภูเก็ต', 'รีสอร์ทกะทู้', 'อสังหาฯกะทู้'],
    landmarks: ['สนามกอล์ฟ Loch Palm', 'ห้างเซ็นทรัลภูเก็ต', 'ถนนวิชิตสงคราม'],
    stats: [...localSeoServiceStats],
    intro: areaContent.intro,
    faqs: areaContent.faqs,
  };

  const breadcrumbSchema = buildBreadcrumb([
    { name: 'หน้าแรก', url: siteConfig.url },
    { name: 'Local SEO กะทู้', url: `${siteConfig.url}/local/kathu` },
  ]);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Local SEO',
    name: 'บริการ SEO สำหรับธุรกิจในกะทู้ ภูเก็ต',
    description: 'เพิ่มการมองเห็นธุรกิจของคุณในกะทู้ ภูเก็ต ด้วยกลยุทธ์ SEO ท้องถิ่นที่ปรับแต่งมาโดยเฉพาะสำหรับสนามกอล์ฟ รีสอร์ท ร้านอาหาร สปา และอสังหาฯ',
    provider: localServiceProvider,
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaJson) }}
      />
      <LocalSeoPage {...areaDetails} />
    </>
  );
}
