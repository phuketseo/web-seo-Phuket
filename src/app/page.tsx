import type { Metadata } from "next";
import { siteConfig } from "@/lib/utils";
import HomeHero from "@/components/HomeHero";
import HomeBelowFold from "@/components/HomeBelowFold";
import { HomeBodyClass } from "@/components/HomeBodyClass";
import { BrandGradientDefs } from "@/components/BrandGradientDefs";

export const metadata: Metadata = {
  title: "รับยิงแอด ภูเก็ต | Google & Facebook เริ่ม ฿3,000/เดือน - PhuketSEO",
  description:
    "รับยิงแอด ภูเก็ต บน Google และ Facebook เริ่ม ฿3,000/เดือน ไม่ต้องมีเว็บก่อน ค่ายิงแอดแยก โซนป่าตอง กะตะ ตัวเมือง",
  keywords: [
    "บริษัท โฆษณา ภูเก็ต",
    "บริษัท โฆษณา ใน ภูเก็ต",
    "agency ภูเก็ต",
    "phuket ads",
    "phuket advertising",
    "รับทำแอด ภูเก็ต",
    "รับยิงแอด ภูเก็ต",
    "ยิงแอดภูเก็ต",
  ],
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: "รับยิงแอด ภูเก็ต | Google & Facebook เริ่ม ฿3,000/เดือน",
    description:
      "รับยิงแอด ภูเก็ต บน Google และ Facebook เริ่ม ฿3,000/เดือน ไม่ต้องมีเว็บก่อน ค่ายิงแอดแยก",
    url: siteConfig.url,
    siteName: "PhuketSEO",
    locale: "th_TH",
    type: "website",
  },
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
