import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { faqSchema, buildBreadcrumb } from '@/lib/schema';
import { localSeoContent } from '@/lib/local-seo-content';
import { localSeoServiceStats } from '@/lib/local-seo-stats';
import { siteConfig } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'SEO ถลาง - บริการเพิ่มอันดับธุรกิจในถลาง ภูเก็ต',
  description: 'เพิ่มการมองเห็นธุรกิจของคุณในถลาง ภูเก็ต ด้วยบริการ SEO ที่เชี่ยวชาญสำหรับโรงแรม, รีสอร์ท, อสังหาฯ, ร้านอาหาร, และสปา',
  alternates: { canonical: `${siteConfig.url}/local/thalang` },
};

const areaContent = localSeoContent.thalang;

const thalangData = {
  area: 'ถลาง',
  areaEn: 'Thalang',
  slug: 'thalang',
  description: 'ย่านที่พักใกล้สนามบินภูเก็ต ศูนย์กลางอสังหาริมทรัพย์ระดับ Luxury',
  businesses: ['โรงแรม', 'รีสอร์ท', 'อสังหาฯ', 'ร้านอาหาร', 'สปา'],
  keywords: ['SEO ถลาง', 'โรงแรมถลาง', 'อสังหาฯถลาง', 'รีสอร์ทถลาง'],
  landmarks: ['สนามบินภูเก็ต', 'หาดไม้ขาว', 'หาดนาทอน', 'อนุสาวรีย์วีรสตรี'],
  stats: [...localSeoServiceStats],
  intro: areaContent.intro,
  faqs: areaContent.faqs,
};

const breadcrumbSchema = buildBreadcrumb([
  { name: 'หน้าแรก', url: siteConfig.url },
  { name: 'Local SEO ถลาง', url: `${siteConfig.url}/local/thalang` },
]);

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'บริการ SEO ในถลาง ภูเก็ต',
  description: 'บริการ SEO สำหรับธุรกิจในถลาง ภูเก็ต เพื่อเพิ่มการมองเห็นและลูกค้า',
  serviceType: 'Local SEO',
  areaServed: {
    '@type': 'Place',
    name: 'ถลาง, ภูเก็ต',
  },
  provider: {
    '@type': 'Organization',
    name: 'PhuketSEO',
    url: 'https://phuketseo.com',
  },
};

const faqSchemaJson = faqSchema(
  areaContent.faqs.map((faq) => ({ question: faq.q, answer: faq.a }))
);

export default function ThalangPage() {
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
      <LocalSeoPage {...thalangData} />
    </>
  );
}
