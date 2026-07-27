import type { Metadata } from "next";
import { siteConfig } from "@/lib/utils";
import HomeHero from "@/components/HomeHero";
import HomeBelowFold from "@/components/HomeBelowFold";
import { HomeBodyClass } from "@/components/HomeBodyClass";
import { BrandGradientDefs } from "@/components/BrandGradientDefs";

export const metadata: Metadata = {
  title: "PhuketSEO | รับยิงแอด Google & Facebook ภูเก็ต ฿6,500/เดือน",
  description:
    "รับยิงแอด Google และ Facebook ภูเก็ต — จัดการ 1 แคมเปญ เริ่ม ฿6,500/เดือน ค่ายิงแอดแยก ไม่ต้องทำเว็บก่อน ยกเลิกได้ทุกเดือน",
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
