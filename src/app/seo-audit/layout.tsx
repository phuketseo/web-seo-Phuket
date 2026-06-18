import type { Metadata } from "next";
import { defaultOgImage, siteConfig } from "@/lib/utils";
import { responseTimeCopy } from "@/lib/response-times";

export const metadata: Metadata = {
  title: "ขอ SEO Audit ฟรี — วิเคราะห์เว็บ & Google Maps ภูเก็ต",
  description:
    `ขอ SEO Audit ฟรีจาก PhuketSEO วิเคราะห์เว็บ Google Business Profile และคู่แข่งในภูเก็ต ${responseTimeCopy.auditReport} ไม่มีข้อผูกมัด`,
  alternates: { canonical: `${siteConfig.url}/seo-audit` },
  openGraph: {
    title: "ขอ SEO Audit ฟรี | PhuketSEO",
    description: `วิเคราะห์ SEO + Maps สำหรับธุรกิจในภูเก็ต ${responseTimeCopy.auditReport}`,
    url: `${siteConfig.url}/seo-audit`,
    type: "website",
    images: [defaultOgImage],
  },
};

export default function SeoAuditLayout({ children }: { children: React.ReactNode }) {
  return children;
}
