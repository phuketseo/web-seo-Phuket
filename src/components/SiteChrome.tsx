"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DeferredLineChat from "@/components/DeferredLineChat";
import CookieConsent from "@/components/CookieConsent";
import MobileBottomNav from "@/components/MobileBottomNav";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");
  const isPreview = pathname?.startsWith("/preview");

  // Preview routes own their chrome (Cap system experiment) — no site nav/footer/LINE
  if (isAdmin || isPreview) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <div className="pb-[calc(4.75rem+env(safe-area-inset-bottom))] md:pb-0">
        <Footer />
      </div>
      {/* มือถือใช้ LINE ใน bottom nav แล้ว — ปุ่มลอยเหลือแค่เดสก์ท็อป */}
      <div className="hidden md:contents">
        <DeferredLineChat />
      </div>
      <MobileBottomNav />
      <CookieConsent />
    </>
  );
}
