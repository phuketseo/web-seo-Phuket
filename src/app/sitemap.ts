import type { MetadataRoute } from "next";
import { blogPostsMeta } from "@/lib/blog-posts-meta";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://phuketseo.com";
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, priority: 1.0, changeFrequency: "weekly", lastModified: now },
    { url: `${baseUrl}/about`, priority: 0.7, changeFrequency: "monthly", lastModified: now },
    { url: `${baseUrl}/pricing`, priority: 0.8, changeFrequency: "monthly", lastModified: now },
    { url: `${baseUrl}/contact`, priority: 0.9, changeFrequency: "monthly", lastModified: now },
    { url: `${baseUrl}/case-studies`, priority: 0.8, changeFrequency: "monthly", lastModified: now },
    { url: `${baseUrl}/blog`, priority: 0.8, changeFrequency: "weekly", lastModified: now },
    { url: `${baseUrl}/privacy-policy`, priority: 0.3, changeFrequency: "yearly", lastModified: now },
    { url: `${baseUrl}/terms`, priority: 0.3, changeFrequency: "yearly", lastModified: now },
  ];

  const servicePages: MetadataRoute.Sitemap = [
    "seo-phuket",
    "google-ads",
    "social-media",
    "web-design",
  ].map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    priority: 0.9,
    changeFrequency: "monthly",
    lastModified: now,
  }));

  const localPages: MetadataRoute.Sitemap = [
    "patong",
    "kathu",
    "phuket-town",
    "thalang",
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

  return [...staticPages, ...servicePages, ...localPages, ...blogPages];
}
