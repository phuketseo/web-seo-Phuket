import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { siteConfig } from "@/lib/utils";
import HomeHero from "@/components/HomeHero";

const HomeBelowFold = dynamic(() => import("@/components/HomeBelowFold"), {
  loading: () => (
    <div className="below-fold min-h-[2400px] bg-white" aria-hidden />
  ),
});

export const metadata: Metadata = {
  title: "PhuketSEO | รับทำ SEO + เว็บไซต์ภูเก็ต ติด Google พร้อม AI Search",
  description:
    "รับทำ SEO และเว็บไซต์ภูเก็ต ติด Google Maps เว็บเร็ว พร้อม AEO/GEO เริ่มต้น ฿5,900/เดือน ปรึกษาฟรี",
  alternates: { canonical: siteConfig.url },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeBelowFold />
    </>
  );
}
