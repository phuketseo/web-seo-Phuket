import type { MetadataRoute } from "next";
import { blogPostsMeta } from "@/lib/blog-posts-meta";
import { siteConfig } from "@/lib/utils";

function staticPaths(
  baseUrl: string,
  paths: string[],
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly",
  lastModified = new Date()
): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
    priority,
    changeFrequency,
    lastModified,
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url;
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, priority: 1.0, changeFrequency: "weekly", lastModified: now },
    { url: `${baseUrl}/contact`, priority: 0.9, changeFrequency: "monthly", lastModified: now },
    { url: `${baseUrl}/blog`, priority: 0.85, changeFrequency: "weekly", lastModified: now },
    ...staticPaths(
      baseUrl,
      ["/about", "/pricing", "/case-studies", "/privacy-policy", "/terms"],
      0.7,
      "monthly",
      now
    ),
  ];

  const servicePages = staticPaths(
    baseUrl,
    [
      "/services/seo-phuket",
      "/services/web-design",
      "/services/ai-search-visibility",
      "/services/google-ads",
      "/services/social-media",
    ],
    0.9
  );

  const methodologyPages = staticPaths(baseUrl, ["/methodology/phuket-visibility-stack"], 0.85);

  const industryPages = staticPaths(
    baseUrl,
    [
      "/industries/seo-restaurants-phuket",
      "/industries/seo-spa-phuket",
      "/industries/seo-hotels-phuket",
      "/industries/seo-real-estate-phuket",
    ],
    0.85
  );

  const caseStudyPages = staticPaths(baseUrl, ["/case-studies/phuketseo-website-rebuild"], 0.8);

  const localPages = staticPaths(
    baseUrl,
    ["/local/patong", "/local/kathu", "/local/phuket-town", "/local/thalang", "/local/kata", "/local/kamala"],
    0.85
  );

  const blogPages: MetadataRoute.Sitemap = blogPostsMeta.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    priority: post.slug.includes("kue-arai") ? 0.95 : 0.9,
    changeFrequency: "monthly",
    lastModified: new Date(post.dateISO),
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...methodologyPages,
    ...industryPages,
    ...caseStudyPages,
    ...localPages,
    ...blogPages,
  ];
}
