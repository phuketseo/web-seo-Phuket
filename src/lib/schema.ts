/**
 * Schema Markup Helpers for PhuketSEO
 * ใช้ใน page.tsx โดย:
 * <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
 */

import { siteConfig } from "@/lib/utils";

export const postalAddressSchema = {
  "@type": "PostalAddress",
  ...siteConfig.postalAddress,
};

export const geoCoordinatesSchema = {
  "@type": "GeoCoordinates",
  ...siteConfig.geo,
};

export const organizationSameAs = [
  siteConfig.social.facebook,
  siteConfig.social.instagram,
  siteConfig.social.linkedin,
  siteConfig.social.youtube,
];

export const organizationJsonLd = {
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}${siteConfig.logoPath}`,
  email: siteConfig.email,
  telephone: siteConfig.phoneInternational,
  address: postalAddressSchema,
  sameAs: organizationSameAs,
};

export const localBusinessJsonLd = {
  "@type": "LocalBusiness",
  "@id": siteConfig.url,
  name: siteConfig.name,
  image: `${siteConfig.url}${siteConfig.ogImagePath}`,
  url: siteConfig.url,
  telephone: siteConfig.phoneInternational,
  email: siteConfig.email,
  priceRange: "฿฿",
  description: siteConfig.description,
  address: postalAddressSchema,
  geo: geoCoordinatesSchema,
  sameAs: organizationSameAs,
};

export const organizationSchema = {
  "@context": "https://schema.org",
  ...organizationJsonLd,
  description:
    "บริษัท Digital Marketing Agency ในภูเก็ต ให้บริการ SEO, Google Ads, Social Media Marketing และ Web Design",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.phoneInternational,
    email: siteConfig.email,
    contactType: "customer service",
    availableLanguage: ["Thai", "English"],
  },
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  ...localBusinessJsonLd,
  priceRange: "฿฿฿",
  description:
    "Digital Marketing Agency ในภูเก็ต เชี่ยวชาญ SEO, Google Ads, Social Media และ Web Design สำหรับธุรกิจในภูเก็ต",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
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

export const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  itemReviewed: {
    "@type": "LocalBusiness",
    name: "PhuketSEO",
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
