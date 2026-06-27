/**
 * Schema Markup Helpers for PhuketSEO
 * ใช้ใน page.tsx โดย:
 * <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
 */

import { siteConfig, businessHours } from "@/lib/utils";
import { pricingPackages } from "@/lib/pricing-packages";
import { packagePaths } from "@/lib/package-pages-content";

export const businessEntityId = `${siteConfig.url}/#localbusiness`;
export const organizationEntityId = `${siteConfig.url}/#organization`;

export const organizationRef = { "@id": organizationEntityId };

export const postalAddressSchema = {
  "@type": "PostalAddress",
  ...siteConfig.postalAddress,
};

export const organizationSameAs = [siteConfig.social.facebook];

/** พื้นที่ให้บริการ SAB — ทั้งจังหวัดภูเก็ต */
export const areaServedPhuket = [
  {
    "@type": "AdministrativeArea",
    name: siteConfig.serviceArea.nameEn,
    containedInPlace: {
      "@type": "Country",
      name: "Thailand",
    },
  },
  {
    "@type": "City",
    name: siteConfig.serviceArea.name,
  },
];

/** ฟิลด์ SAB ที่ใช้ร่วมกับ LocalBusiness */
export const sabSchemaFields = {
  "@id": businessEntityId,
  "@type": "LocalBusiness",
  additionalType: "https://schema.org/ProfessionalService",
  areaServed: areaServedPhuket,
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.geo.latitude,
    longitude: siteConfig.geo.longitude,
  },
  hasMap: siteConfig.googleMapsPlaceUrl,
};

export const contactPointBase = {
  "@type": "ContactPoint",
  telephone: siteConfig.phoneInternational,
  email: siteConfig.email,
  contactType: "customer service",
  areaServed: areaServedPhuket,
  availableLanguage: ["Thai", "English"],
};

/** Logo สำหรับ publisher / Organization — ใช้ OG image ที่ deploy แล้วและ crawl ได้ */
export const publisherLogoSchema = {
  "@type": "ImageObject",
  url: `${siteConfig.url}${siteConfig.ogImagePath}`,
  width: 1200,
  height: 630,
};

export const organizationJsonLd = {
  "@type": "Organization",
  "@id": organizationEntityId,
  name: siteConfig.name,
  url: siteConfig.url,
  logo: publisherLogoSchema,
  image: `${siteConfig.url}${siteConfig.ogImagePath}`,
  email: siteConfig.email,
  telephone: siteConfig.phoneInternational,
  address: postalAddressSchema,
  areaServed: areaServedPhuket,
  sameAs: organizationSameAs,
  openingHoursSpecification: [businessHours.schemaSpecification],
};

export const localBusinessJsonLd = {
  ...sabSchemaFields,
  name: siteConfig.name,
  image: `${siteConfig.url}${siteConfig.ogImagePath}`,
  url: siteConfig.url,
  telephone: siteConfig.phoneInternational,
  email: siteConfig.email,
  priceRange: "฿฿",
  description: siteConfig.description,
  address: postalAddressSchema,
  openingHoursSpecification: [businessHours.schemaSpecification],
  sameAs: organizationSameAs,
};

export const organizationSchema = {
  "@context": "https://schema.org",
  ...organizationJsonLd,
  description:
    "บริษัท Digital Marketing Agency ในภูเก็ต ให้บริการ SEO, Google Ads, Social Media Marketing และ Web Design",
  contactPoint: contactPointBase,
};

const organizationGraphNode = {
  ...organizationJsonLd,
  description:
    "บริษัท Digital Marketing Agency ในภูเก็ต ให้บริการ SEO, Google Ads, Social Media Marketing และ Web Design",
  contactPoint: contactPointBase,
};

const localBusinessGraphNode = {
  ...localBusinessJsonLd,
  parentOrganization: organizationRef,
  priceRange: "฿฿฿",
  description:
    "รับทำ SEO + เว็บไซต์ภูเก็ต สำหรับธุรกิจไทยท้องถิ่น (Service Area Business) ให้บริการทั่วจังหวัดภูเก็ต ติด Google Maps และ AI Search",
  contactPoint: contactPointBase,
};

/** Organization + LocalBusiness เชื่อมกัน — ใส่ใน root layout ทั้งไซต์ */
export const siteEntityGraphSchema = {
  "@context": "https://schema.org",
  "@graph": [organizationGraphNode, localBusinessGraphNode],
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  ...localBusinessGraphNode,
};

export const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "หน้าแรก", item: `${siteConfig.url}/` },
        { "@type": "ListItem", position: 2, name: "ติดต่อเรา", item: `${siteConfig.url}/contact` },
      ],
    },
    {
      "@id": businessEntityId,
    },
  ],
};

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

export const buildBreadcrumb = (
  items: { name: string; url: string }[]
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

/** แปลง markdown ในคำตอบ FAQ เป็นข้อความล้วนสำหรับ Schema */
export function plainTextForSchema(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1 ($2)")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .trim();
}

/** แปลง YYYY-MM-DD เป็น ISO 8601 พร้อม timezone ไทย (+07:00) สำหรับ Google Rich Results */
export function toSchemaDateTime(dateISO: string): string {
  if (dateISO.includes("T")) return dateISO;
  return `${dateISO}T00:00:00+07:00`;
}

export function buildArticleSchema(params: {
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  imageWidth: number;
  imageHeight: number;
  datePublished: string;
  dateModified?: string;
  author: { name: string; role: string };
  category: string;
}) {
  const pageUrl = `${siteConfig.url}/blog/${params.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${pageUrl}#article`,
    headline: params.title,
    description: params.description,
    image: {
      "@type": "ImageObject",
      url: params.imageUrl,
      width: params.imageWidth,
      height: params.imageHeight,
    },
    datePublished: toSchemaDateTime(params.datePublished),
    dateModified: toSchemaDateTime(params.dateModified ?? params.datePublished),
    inLanguage: "th-TH",
    articleSection: params.category,
    author: {
      "@type": "Person",
      name: params.author.name,
      jobTitle: params.author.role,
      url: `${siteConfig.url}/about`,
    },
    publisher: {
      "@type": "Organization",
      "@id": organizationEntityId,
      name: siteConfig.name,
      logo: publisherLogoSchema,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
    url: pageUrl,
  };
}

export function buildRelatedArticlesItemList(
  items: { title: string; url: string }[],
  pageUrl: string
) {
  if (!items.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "บทความที่เกี่ยวข้อง",
    url: pageUrl,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      url: item.url,
    })),
  };
}

export const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  itemReviewed: {
    "@id": businessEntityId,
  },
  reviewRating: {
    "@type": "Rating",
    ratingValue: "5",
    bestRating: "5",
  },
  author: {
    "@type": "Person",
    name: "ลูกค้าโรงแรม",
  },
  reviewBody:
    "PhuketSEO ช่วยให้โรงแรมของเราติดอันดับ 1 บน Google ใน 4 เดือน Organic Traffic เพิ่มขึ้น 250% และ Booking เพิ่มขึ้น 180% ประทับใจมากครับ",
};

/** Service + Offer สำหรับแพ็กราคา — ใช้ที่ /pricing */
export const pricingServicesJsonLd = pricingPackages.map((pkg) => ({
  "@type": "Service",
  name: pkg.name,
  description: pkg.desc,
  provider: { "@id": businessEntityId },
  areaServed: areaServedPhuket,
  offers: {
    "@type": "Offer",
    price: pkg.price,
    priceCurrency: "THB",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: pkg.price,
      priceCurrency: "THB",
      unitText: "MONTH",
    },
    url: `${siteConfig.url}${packagePaths[pkg.id]}`,
  },
}));

/** Provider node สำหรับหน้า Local SEO — อ้างอิง entity เดียวกับ homepage */
export const localServiceProvider = { "@id": businessEntityId };
