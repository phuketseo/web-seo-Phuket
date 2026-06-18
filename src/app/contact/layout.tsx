import type { Metadata } from "next";
import { defaultOgImage, siteConfig } from "@/lib/utils";
import { responseTimeCopy } from "@/lib/response-times";

export const metadata: Metadata = {
  title: "ติดต่อเรา — ปรึกษา SEO ภูเก็ต ฟรี",
  description:
    `ติดต่อ PhuketSEO ปรึกษา SEO และเว็บไซต์ภูเก็ตฟรี โทร 092-555-1369 LINE @phuketseo หรือส่งฟอร์มออนไลน์ ${responseTimeCopy.contactMeta}`,
  alternates: { canonical: `${siteConfig.url}/contact` },
  openGraph: {
    title: "ติดต่อ PhuketSEO — ปรึกษา SEO ภูเก็ต ฟรี",
    description: "ปรึกษา SEO + เว็บไซต์ภูเก็ตฟรี โทร 092-555-1369 หรือ LINE @phuketseo",
    url: `${siteConfig.url}/contact`,
    type: "website",
    images: [defaultOgImage],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
