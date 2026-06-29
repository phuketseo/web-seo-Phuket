import type { Metadata } from "next";
import { BlogListing } from "@/components/blog/BlogListing";
import { BrandGradientDefs } from "@/components/BrandGradientDefs";
import { siteConfig } from "@/lib/utils";

export const metadata: Metadata = {
  title: "บล็อก - PhuketSEO: บทความการตลาดดิจิทัลสำหรับธุรกิจภูเก็ต",
  description:
    "อ่านบทความล่าสุดเกี่ยวกับ SEO, Local SEO, Social Media และ Web Design สำหรับธุรกิจในภูเก็ต",
  alternates: { canonical: `${siteConfig.url}/blog` },
  openGraph: {
    title: "บล็อก PhuketSEO",
    description: "บทความ Digital Marketing สำหรับธุรกิจในภูเก็ต",
    url: `${siteConfig.url}/blog`,
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <>
      <BrandGradientDefs />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "หน้าแรก",
                item: siteConfig.url,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "บล็อก",
                item: `${siteConfig.url}/blog`,
              },
            ],
          }),
        }}
      />
      <BlogListing />
    </>
  );
}
