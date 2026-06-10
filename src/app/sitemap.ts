import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://phuketseo.com";
  const now = new Date();

  const staticPages = [
    { url: baseUrl, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/about`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/pricing`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/contact`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/case-studies`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/blog`, priority: 0.8, changeFrequency: "weekly" as const },
  ];

  const servicePages = [
    "seo-phuket",
    "google-ads",
    "social-media",
    "web-design",
  ].map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    priority: 0.9,
    changeFrequency: "monthly" as const,
  }));

  const localPages = [
    "patong",
    "kathu",
    "phuket-town",
    "thalang",
  ].map((slug) => ({
    url: `${baseUrl}/local/${slug}`,
    priority: 0.85,
    changeFrequency: "monthly" as const,
  }));

  return [...staticPages, ...servicePages, ...localPages].map((page) => ({
    ...page,
    lastModified: now,
  }));
}
