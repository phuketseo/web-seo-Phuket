/**
 * Schema Markup Helpers for PhuketSEO
 * ใช้ใน page.tsx โดย:
 * <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
 */

import { siteConfig, businessHours } from "@/lib/utils";
import { pricingPackages } from "@/lib/pricing-packages";

export const businessEntityId = `${siteConfig.url}/#localbusiness`;

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

/** ฟิลด์ SAB ที่ใช้ร่วมกับ LocalBusiness / ProfessionalService */
export const sabSchemaFields = {
  "@id": businessEntityId,
  "@type": ["LocalBusiness", "ProfessionalService"],
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

export const organizationJsonLd = {
  "@type": "Organization",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}${siteConfig.logoPath}`,
  email: siteConfig.email,
  telephone: siteConfig.phoneInternational,
  address: postalAddressSchema,
  areaServed: areaServedPhuket,
  sameAs: organizationSameAs,
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

export const localBusinessSchema = {
  "@context": "https://schema.org",
  ...localBusinessJsonLd,
  priceRange: "฿฿฿",
  description:
    "รับทำ SEO + เว็บไซต์ภูเก็ต สำหรับธุรกิจไทยท้องถิ่น (Service Area Business) ให้บริการทั่วจังหวัดภูเก็ต ติด Google Maps และ AI Search",
  contactPoint: contactPointBase,
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
      ...localBusinessJsonLd,
      contactPoint: contactPointBase,
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
    url: `${siteConfig.url}/pricing#${pkg.id}`,
  },
}));

/** Provider node สำหรับหน้า Local SEO — อ้างอิง entity เดียวกับ homepage */
export const localServiceProvider = { "@id": businessEntityId };
