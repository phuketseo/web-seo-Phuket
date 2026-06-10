/**
 * Schema Markup Helpers for PhuketSEO
 * ใช้ใน page.tsx โดย:
 * <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
 */

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PhuketSEO",
  url: "https://phuketseo.com",
  logo: "https://phuketseo.com/logo.png",
  description:
    "บริษัท Digital Marketing Agency ในภูเก็ต ให้บริการ SEO, Google Ads, Social Media Marketing และ Web Design",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 ถนนภูเก็ต",
    addressLocality: "เมืองภูเก็ต",
    addressRegion: "ภูเก็ต",
    postalCode: "83000",
    addressCountry: "TH",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+66-76-XXX-XXX",
    contactType: "customer service",
    availableLanguage: ["Thai", "English"],
  },
  sameAs: [
    "https://www.facebook.com/phuketseo",
    "https://www.instagram.com/phuketseo",
    "https://lin.ee/phuketseo",
  ],
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://phuketseo.com",
  name: "PhuketSEO",
  image: "https://phuketseo.com/og-image.png",
  url: "https://phuketseo.com",
  telephone: "+66-76-XXX-XXX",
  priceRange: "฿฿฿",
  description:
    "Digital Marketing Agency ในภูเก็ต เชี่ยวชาญ SEO, Google Ads, Social Media และ Web Design สำหรับธุรกิจในภูเก็ต",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 ถนนภูเก็ต",
    addressLocality: "เมืองภูเก็ต",
    addressRegion: "ภูเก็ต",
    postalCode: "83000",
    addressCountry: "TH",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 7.8804,
    longitude: 98.3923,
  },
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
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "47",
    bestRating: "5",
    worstRating: "1",
  },
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
    name: "คุณสมชาย โรงแรม Patong Beach",
  },
  reviewBody:
    "PhuketSEO ช่วยให้โรงแรมของเราติดอันดับ 1 บน Google ใน 4 เดือน Organic Traffic เพิ่มขึ้น 250% และ Booking เพิ่มขึ้น 180% ประทับใจมากครับ",
};
