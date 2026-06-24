import type { Metadata } from "next";
import { PackageDetailPage } from "@/components/PackageDetailPage";
import { getPackagePage } from "@/lib/package-pages-content";
import { siteConfig } from "@/lib/utils";

const content = getPackagePage("pro");

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
  alternates: { canonical: `${siteConfig.url}${content.path}` },
  openGraph: {
    title: content.metaTitle,
    description: content.metaDescription,
    url: `${siteConfig.url}${content.path}`,
    siteName: "PhuketSEO",
    locale: "th_TH",
    type: "website",
  },
};

export default function SeoProPackagePage() {
  return <PackageDetailPage content={content} />;
}
