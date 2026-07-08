import { blogPostsMeta, type BlogPostMeta } from "@/lib/blog-posts-meta";

export type RelatedBlogPost = {
  slug: string;
  title: string;
  href: string;
  category: string;
};

/** Curated blog-to-blog links by topic cluster */
const blogRelatedSlugs: Record<string, string[]> = {
  "ai-overview-pao-mai-seo": [
    "aeo-kue-arai",
    "ai-overview-kue-arai",
    "seo-for-phuket-spas",
    "seo-phuket-kue-arai",
  ],

  "andap-web-tok-ai-search": [
    "andap-google-tok-kuen-nai-30-wan",
    "witi-kae-web-don-core-update",
    "aeo-kue-arai",
    "ai-overview-pao-mai-seo",
  ],
  "andap-google-tok-kuen-nai-30-wan": [
    "andap-web-tok-ai-search",
    "witi-kae-web-don-core-update",
    "google-search-console-phuket",
    "checklist-seo-phuket",
    "aeo-kue-arai",
  ],
  "witi-kae-web-don-core-update": [
    "andap-web-tok-ai-search",
    "andap-google-tok-kuen-nai-30-wan",
    "aeo-kue-arai",
    "checklist-seo-phuket",
    "google-search-console-phuket",
  ],

  // Pillars & foundations
  "seo-phuket-kue-arai": [
    "rab-tam-seo-phuket",
    "checklist-seo-phuket",
    "raaka-seo-phuket",
    "local-seo-phuket-kue-arai",
  ],
  "local-seo-phuket-kue-arai": [
    "local-seo-phuket",
    "google-my-business-phuket",
    "near-me-seo-phuket",
    "nap-local-seo-phuket",
  ],
  "local-seo-phuket": [
    "checklist-seo-phuket",
    "local-seo-phuket-kue-arai",
    "google-my-business-phuket",
    "near-me-seo-phuket",
  ],

  // Local SEO ร้านค้า — vertical pillar + cluster
  "tam-local-seo-rang-kha": [
    "raaka-local-seo-rang-kha",
    "gbp-rang-kha-local-seo",
    "kham-kha-local-seo-rang-kha",
    "local-seo-rang-kha-mistakes",
  ],
  "raaka-local-seo-rang-kha": [
    "tam-local-seo-rang-kha",
    "gbp-rang-kha-local-seo",
    "kham-kha-local-seo-rang-kha",
    "local-seo-rang-kha-mistakes",
  ],
  "gbp-rang-kha-local-seo": [
    "tam-local-seo-rang-kha",
    "google-business-profile-local-seo",
    "kham-kha-local-seo-rang-kha",
    "raaka-local-seo-rang-kha",
  ],
  "kham-kha-local-seo-rang-kha": [
    "tam-local-seo-rang-kha",
    "gbp-rang-kha-local-seo",
    "near-me-seo-phuket",
    "local-seo-rang-kha-mistakes",
  ],
  "local-seo-rang-kha-mistakes": [
    "tam-local-seo-rang-kha",
    "gbp-rang-kha-local-seo",
    "leuk-aecensi-local-seo",
    "raaka-local-seo-rang-kha",
  ],

  // Local SEO ทั่วประเทศ — pillar + cluster
  "local-seo-kue-arai": [
    "tam-local-seo-rang-kha",
    "raaka-local-seo",
    "leuk-aecensi-local-seo",
    "local-seo-vs-seo",
    "google-business-profile-local-seo",
  ],
  "raaka-local-seo": [
    "local-seo-kue-arai",
    "leuk-aecensi-local-seo",
    "local-seo-vs-seo",
    "google-business-profile-local-seo",
  ],
  "leuk-aecensi-local-seo": [
    "local-seo-kue-arai",
    "raaka-local-seo",
    "local-seo-vs-seo",
    "google-business-profile-local-seo",
  ],
  "local-seo-vs-seo": [
    "local-seo-kue-arai",
    "google-business-profile-local-seo",
    "raaka-local-seo",
    "seo-phuket-kue-arai",
  ],
  "google-business-profile-local-seo": [
    "local-seo-kue-arai",
    "google-my-business-phuket",
    "google-reviews-phuket",
    "raaka-local-seo",
  ],

  "raaka-seo-phuket": [
    "rab-tam-seo-phuket",
    "checklist-seo-phuket",
    "seo-phuket-kue-arai",
    "google-ads-vs-seo-phuket",
    "seo-sme-phuket",
  ],
  "rab-tam-web-phuket": [
    "website-speed-seo-phuket",
    "seo-phuket-kue-arai",
    "raaka-seo-phuket",
    "web-design-phuket-real-estate",
  ],
  "google-ads-vs-seo-phuket": [
    "thipak-mai-mee-luk-kha-tham-yang-ngai",
    "ying-aep-thi-phak-lek-ngoen-noi",
    "raaka-seo-phuket",
    "low-season-seo-phuket",
    "seo-phuket-kue-arai",
    "direct-booking-hotel-phuket",
  ],
  "website-speed-seo-phuket": [
    "rab-tam-web-phuket",
    "seo-phuket-kue-arai",
    "web-design-phuket-real-estate",
    "seo-sme-phuket",
  ],
  "seo-sme-phuket": [
    "checklist-seo-phuket",
    "seo-phuket-kue-arai",
    "google-my-business-phuket",
    "local-seo-phuket-kue-arai",
  ],
  "rab-tam-seo-phuket": [
    "checklist-seo-phuket",
    "raaka-seo-phuket",
    "seo-phuket-kue-arai",
    "dan-andap-google-maps-phuket",
  ],
  "checklist-seo-phuket": [
    "rab-tam-seo-phuket",
    "dan-andap-google-maps-phuket",
    "raaka-seo-phuket",
    "google-my-business-phuket",
  ],

  // AEO / GEO
  "aeo-kue-arai": ["ai-overview-kue-arai", "geo-kue-arai", "seo-phuket-kue-arai", "seo-clinic-phuket"],
  "geo-kue-arai": ["aeo-kue-arai", "ai-overview-kue-arai", "content-marketing-phuket-foreigners", "seo-phuket-kue-arai"],
  "ai-overview-kue-arai": ["aeo-kue-arai", "geo-kue-arai", "seo-phuket-kue-arai", "seo-for-phuket-hotels"],

  // Local SEO zones
  "local-seo-patong-phuket": [
    "near-me-seo-phuket",
    "google-reviews-phuket",
    "local-seo-kata-phuket",
    "google-my-business-phuket",
  ],
  "local-seo-kata-phuket": [
    "local-seo-patong-phuket",
    "local-seo-kamala-phuket",
    "seo-for-phuket-spas",
    "near-me-seo-phuket",
    "local-seo-phuket-kue-arai",
  ],
  "local-seo-kamala-phuket": [
    "seo-real-estate-phuket",
    "local-seo-thalang-phuket",
    "local-seo-kata-phuket",
    "local-seo-patong-phuket",
    "google-my-business-phuket",
  ],
  "local-seo-kathu-phuket": [
    "local-seo-bang-tao-phuket",
    "local-seo-rawai-phuket",
    "local-seo-kata-phuket",
    "local-seo-phuket-kue-arai",
  ],
  "local-seo-bang-tao-phuket": [
    "local-seo-kamala-phuket",
    "seo-real-estate-phuket",
    "google-my-business-phuket",
    "local-seo-phuket-kue-arai",
  ],
  "local-seo-rawai-phuket": [
    "local-seo-kata-phuket",
    "seo-for-phuket-spas",
    "seo-real-estate-phuket",
    "local-seo-phuket-kue-arai",
  ],
  "local-seo-thalang-phuket": [
    "seo-real-estate-phuket",
    "local-seo-kamala-phuket",
    "seo-for-phuket-hotels",
    "google-my-business-phuket",
  ],
  "local-seo-phuket-town": [
    "nap-local-seo-phuket",
    "near-me-seo-phuket",
    "google-my-business-phuket",
    "seo-clinic-phuket",
  ],
  "near-me-seo-phuket": [
    "google-my-business-phuket",
    "nap-local-seo-phuket",
    "local-seo-phuket-kue-arai",
    "google-reviews-phuket",
  ],
  "nap-local-seo-phuket": [
    "google-my-business-phuket",
    "local-seo-phuket-kue-arai",
    "near-me-seo-phuket",
    "google-reviews-phuket",
  ],
  "google-my-business-phuket": [
    "google-search-console-phuket",
    "google-reviews-phuket",
    "local-seo-phuket-kue-arai",
    "nap-local-seo-phuket",
  ],
  "google-search-console-phuket": [
    "google-my-business-phuket",
    "local-seo-phuket-kue-arai",
    "website-speed-seo-phuket",
    "google-reviews-phuket",
  ],
  "google-reviews-phuket": [
    "google-my-business-phuket",
    "local-seo-phuket-kue-arai",
    "near-me-seo-phuket",
    "local-seo-patong-phuket",
  ],

  // Hotels & tours
  "hotel-phuket-seo-problems": [
    "thipak-mai-mee-luk-kha-tham-yang-ngai",
    "ying-aep-thi-phak-lek-ngoen-noi",
    "seo-for-phuket-hotels",
    "direct-booking-hotel-phuket",
    "gemini-hotel-competitor-analysis",
    "google-reviews-phuket",
  ],
  "thipak-mai-mee-luk-kha-tham-yang-ngai": [
    "seo-for-phuket-hotels",
    "ying-aep-thi-phak-lek-ngoen-noi",
    "direct-booking-hotel-phuket",
    "hotel-phuket-seo-problems",
    "google-my-business-phuket",
  ],
  "ying-aep-thi-phak-lek-ngoen-noi": [
    "thipak-mai-mee-luk-kha-tham-yang-ngai",
    "seo-for-phuket-hotels",
    "google-ads-vs-seo-phuket",
    "direct-booking-hotel-phuket",
    "google-my-business-phuket",
  ],
  "seo-for-phuket-hotels": [
    "thipak-mai-mee-luk-kha-tham-yang-ngai",
    "ying-aep-thi-phak-lek-ngoen-noi",
    "hotel-phuket-seo-problems",
    "direct-booking-hotel-phuket",
    "gemini-hotel-competitor-analysis",
    "low-season-seo-phuket",
  ],
  "direct-booking-hotel-phuket": [
    "thipak-mai-mee-luk-kha-tham-yang-ngai",
    "ying-aep-thi-phak-lek-ngoen-noi",
    "seo-for-phuket-hotels",
    "low-season-seo-phuket",
    "google-ads-vs-seo-phuket",
    "gemini-hotel-competitor-analysis",
  ],
  "gemini-hotel-competitor-analysis": [
    "thipak-mai-mee-luk-kha-tham-yang-ngai",
    "seo-for-phuket-hotels",
    "direct-booking-hotel-phuket",
    "local-seo-patong-phuket",
    "google-reviews-phuket",
  ],
  "seo-tours-phuket": [
    "content-marketing-phuket-foreigners",
    "low-season-seo-phuket",
    "google-my-business-phuket",
    "direct-booking-hotel-phuket",
  ],
  "low-season-seo-phuket": [
    "direct-booking-hotel-phuket",
    "seo-tours-phuket",
    "google-ads-vs-seo-phuket",
    "seo-for-phuket-hotels",
  ],

  // Restaurants & services
  "seo-restaurants-phuket": [
    "dan-andap-google-maps-phuket",
    "instagram-marketing-phuket-restaurants",
    "near-me-seo-phuket",
    "google-reviews-phuket",
    "local-seo-patong-phuket",
  ],
  "instagram-marketing-phuket-restaurants": [
    "seo-restaurants-phuket",
    "google-my-business-phuket",
    "near-me-seo-phuket",
    "tiktok-marketing-phuket-services",
  ],
  "seo-for-phuket-spas": [
    "ran-nuad-kap-spa-promote-tang-kan-yang-ngai",
    "kan-marketing-ran-nuad-phaen-thai",
    "local-seo-kata-phuket",
    "google-reviews-phuket",
    "promote-ran-nuad-thai-phuket",
  ],
  "kan-marketing-ran-nuad-phaen-thai": [
    "poet-ran-nuad-mai-mai-mee-luk-kha-tham-yang-ngai",
    "ran-nuad-kap-spa-promote-tang-kan-yang-ngai",
    "ran-nuad-mai-mee-luk-kha-tham-yang-ngai",
    "promote-ran-nuad-thai-phuket",
    "google-reviews-phuket",
  ],
  "promote-ran-nuad-thai-phuket": [
    "ran-nuad-kap-spa-promote-tang-kan-yang-ngai",
    "poet-ran-nuad-mai-mai-mee-luk-kha-tham-yang-ngai",
    "ran-nuad-mai-mee-luk-kha-tham-yang-ngai",
    "kan-marketing-ran-nuad-phaen-thai",
    "dan-andap-google-maps-phuket",
  ],
  "ran-nuad-mai-mee-luk-kha-tham-yang-ngai": [
    "poet-ran-nuad-mai-mai-mee-luk-kha-tham-yang-ngai",
    "promote-ran-nuad-thai-phuket",
    "google-maps-mai-tid-phuket",
    "google-reviews-phuket",
    "kan-marketing-ran-nuad-phaen-thai",
  ],
  "poet-ran-nuad-mai-mai-mee-luk-kha-tham-yang-ngai": [
    "ran-nuad-mai-mee-luk-kha-tham-yang-ngai",
    "promote-ran-nuad-thai-phuket",
    "ran-nuad-kap-spa-promote-tang-kan-yang-ngai",
    "kan-marketing-ran-nuad-phaen-thai",
    "google-my-business-phuket",
  ],
  "ran-nuad-kap-spa-promote-tang-kan-yang-ngai": [
    "promote-ran-nuad-thai-phuket",
    "seo-for-phuket-spas",
    "kan-marketing-ran-nuad-phaen-thai",
    "poet-ran-nuad-mai-mai-mee-luk-kha-tham-yang-ngai",
    "google-reviews-phuket",
  ],
  "dan-andap-google-maps-phuket": [
    "google-maps-mai-tid-phuket",
    "rap-pak-mut-thurakij-phuket",
    "checklist-seo-phuket",
    "google-my-business-phuket",
  ],
  "google-maps-mai-tid-phuket": [
    "dan-andap-google-maps-phuket",
    "rap-pak-mut-thurakij-phuket",
    "nap-local-seo-phuket",
    "local-seo-rang-kha-mistakes",
  ],
  "rap-pak-mut-thurakij-phuket": [
    "dan-andap-google-maps-phuket",
    "google-maps-mai-tid-phuket",
    "google-my-business-phuket",
    "near-me-seo-phuket",
  ],
  "seo-clinic-phuket": [
    "local-seo-phuket-town",
    "google-reviews-phuket",
    "google-my-business-phuket",
    "aeo-kue-arai",
  ],
  "tiktok-marketing-phuket-services": [
    "google-my-business-phuket",
    "seo-sme-phuket",
    "instagram-marketing-phuket-restaurants",
    "near-me-seo-phuket",
  ],

  // Real estate & EN content
  "seo-real-estate-phuket": [
    "web-design-phuket-real-estate",
    "content-marketing-phuket-foreigners",
    "local-seo-kata-phuket",
    "google-reviews-phuket",
  ],
  "web-design-phuket-real-estate": [
    "seo-real-estate-phuket",
    "content-marketing-phuket-foreigners",
    "website-speed-seo-phuket",
    "rab-tam-web-phuket",
  ],
  "content-marketing-phuket-foreigners": [
    "seo-tours-phuket",
    "seo-for-phuket-hotels",
    "seo-real-estate-phuket",
    "geo-kue-arai",
  ],
};

const metaBySlug = new Map(blogPostsMeta.map((post) => [post.slug, post]));

function toRelatedPost(meta: BlogPostMeta): RelatedBlogPost {
  return {
    slug: meta.slug,
    title: meta.title,
    href: `/blog/${meta.slug}`,
    category: meta.category,
  };
}

export function getRelatedBlogPosts(slug: string, limit = 4): RelatedBlogPost[] {
  const curated = (blogRelatedSlugs[slug] ?? [])
    .map((relatedSlug) => metaBySlug.get(relatedSlug))
    .filter((post): post is BlogPostMeta => Boolean(post))
    .map(toRelatedPost);

  if (curated.length >= limit) {
    return curated.slice(0, limit);
  }

  const current = metaBySlug.get(slug);
  if (!current) return curated;

  const used = new Set([slug, ...curated.map((post) => post.slug)]);
  const fallback = blogPostsMeta
    .filter((post) => post.category === current.category && !used.has(post.slug))
    .map(toRelatedPost);

  return [...curated, ...fallback].slice(0, limit);
}
