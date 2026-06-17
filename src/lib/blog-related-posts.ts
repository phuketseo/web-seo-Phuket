import { blogPostsMeta, type BlogPostMeta } from "@/lib/blog-posts-meta";

export type RelatedBlogPost = {
  slug: string;
  title: string;
  href: string;
  category: string;
};

/** Curated blog-to-blog links by topic cluster */
const blogRelatedSlugs: Record<string, string[]> = {
  // Pillars & foundations
  "seo-phuket-kue-arai": [
    "local-seo-phuket-kue-arai",
    "raaka-seo-phuket",
    "google-my-business-phuket",
    "seo-sme-phuket",
  ],
  "local-seo-phuket-kue-arai": [
    "google-my-business-phuket",
    "near-me-seo-phuket",
    "nap-local-seo-phuket",
    "google-reviews-phuket",
  ],
  "raaka-seo-phuket": [
    "seo-phuket-kue-arai",
    "google-ads-vs-seo-phuket",
    "rab-tam-web-phuket",
    "seo-sme-phuket",
  ],
  "rab-tam-web-phuket": [
    "website-speed-seo-phuket",
    "seo-phuket-kue-arai",
    "raaka-seo-phuket",
    "web-design-phuket-real-estate",
  ],
  "google-ads-vs-seo-phuket": [
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
    "seo-phuket-kue-arai",
    "google-my-business-phuket",
    "local-seo-phuket-kue-arai",
    "nap-local-seo-phuket",
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
    "seo-for-phuket-spas",
    "near-me-seo-phuket",
    "local-seo-phuket-kue-arai",
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
    "google-reviews-phuket",
    "local-seo-phuket-kue-arai",
    "nap-local-seo-phuket",
    "near-me-seo-phuket",
  ],
  "google-reviews-phuket": [
    "google-my-business-phuket",
    "local-seo-phuket-kue-arai",
    "near-me-seo-phuket",
    "local-seo-patong-phuket",
  ],

  // Hotels & tours
  "seo-for-phuket-hotels": [
    "direct-booking-hotel-phuket",
    "gemini-hotel-competitor-analysis",
    "low-season-seo-phuket",
    "google-reviews-phuket",
  ],
  "direct-booking-hotel-phuket": [
    "seo-for-phuket-hotels",
    "low-season-seo-phuket",
    "google-ads-vs-seo-phuket",
    "gemini-hotel-competitor-analysis",
  ],
  "gemini-hotel-competitor-analysis": [
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
    "local-seo-kata-phuket",
    "google-reviews-phuket",
    "direct-booking-hotel-phuket",
    "content-marketing-phuket-foreigners",
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
