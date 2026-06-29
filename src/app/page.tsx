import type { Metadata } from "next";
import { siteConfig } from "@/lib/utils";
import HomeHero from "@/components/HomeHero";
import HomeBelowFold from "@/components/HomeBelowFold";
import { HomeBodyClass } from "@/components/HomeBodyClass";
import { BrandGradientDefs } from "@/components/BrandGradientDefs";

export const metadata: Metadata = {
  title: "PhuketSEO | รับทำ SEO + เว็บไซต์ภูเก็ต ติด Google พร้อม AI Search",
  description:
    "รับทำ SEO และเว็บไซต์ภูเก็ต ติด Google Maps เว็บเร็ว พร้อม AEO/GEO เริ่มต้น ฿5,900/เดือน ขอคำปรึกษาฟรี",
  alternates: { canonical: siteConfig.url },
};

export default function HomePage() {
  return (
    <>
      <HomeBodyClass />
      <div className="home-mobile-type">
        <BrandGradientDefs />
        <HomeHero />
        <HomeBelowFold />
      </div>
    </>
  );
}
