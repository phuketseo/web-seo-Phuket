import type { MetadataRoute } from "next";
import { blogPostsMeta } from "@/lib/blog-posts-meta";
import { siteConfig } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url;
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, priority: 1.0, changeFrequency: "weekly", lastModified: now },
    { url: `${baseUrl}/about`, priority: 0.7, changeFrequency: "monthly", lastModified: now },
    { url: `${baseUrl}/pricing`, priority: 0.8, changeFrequency: "monthly", lastModified: now },
    { url: `${baseUrl}/contact`, priority: 0.9, changeFrequency: "monthly", lastModified: now },
    { url: `${baseUrl}/case-studies`, priority: 0.8, changeFrequency: "monthly", lastModified: now },
    { url: `${baseUrl}/blog`, priority: 0.8, changeFrequency: "weekly", lastModified: now },
  ];

  const servicePages: MetadataRoute.Sitemap = [
    "seo-phuket",
    "web-design",
    "ai-search-visibility",
    "google-ads",
    "social-media",
  ].map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    priority: 0.9,
    changeFrequency: "monthly",
    lastModified: now,
  }));

  const methodologyPages: MetadataRoute.Sitemap = [
    "phuket-visibility-stack",
  ].map((slug) => ({
    url: `${baseUrl}/methodology/${slug}`,
    priority: 0.85,
    changeFrequency: "monthly",
    lastModified: now,
  }));

  const industryPages: MetadataRoute.Sitemap = [
    "seo-restaurants-phuket",
    "seo-spa-phuket",
    "seo-hotels-phuket",
    "seo-real-estate-phuket",
  ].map((slug) => ({
    url: `${baseUrl}/industries/${slug}`,
    priority: 0.85,
    changeFrequency: "monthly",
    lastModified: now,
  }));

  const caseStudyPages: MetadataRoute.Sitemap = [
    "phuketseo-website-rebuild",
  ].map((slug) => ({
    url: `${baseUrl}/case-studies/${slug}`,
    priority: 0.8,
    changeFrequency: "monthly",
    lastModified: now,
  }));

  const localPages: MetadataRoute.Sitemap = [
    "patong",
    "kathu",
    "phuket-town",
    "thalang",
    "kata",
    "kamala",
  ].map((slug) => ({
    url: `${baseUrl}/local/${slug}`,
    priority: 0.85,
    changeFrequency: "monthly",
    lastModified: now,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPostsMeta.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    priority: 0.9,
    changeFrequency: "monthly",
    lastModified: new Date(post.dateISO),
  }));

  return [...staticPages, ...servicePages, ...methodologyPages, ...industryPages, ...caseStudyPages, ...localPages, ...blogPages];
}
