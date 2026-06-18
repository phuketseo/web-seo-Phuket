import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DeferredLineChat from "@/components/DeferredLineChat";
import DeferredGoogleAnalytics from "@/components/DeferredGoogleAnalytics";
import { defaultOgImage, siteConfig } from "@/lib/utils";

const kanitBold = Kanit({
  subsets: ["latin", "thai"],
  weight: "700",
  variable: "--font-kanit-bold",
  display: "swap",
  preload: false,
  adjustFontFallback: true,
  fallback: ["Tahoma", "Arial", "sans-serif"],
});

const kanitRegular = Kanit({
  subsets: ["latin", "thai"],
  weight: "400",
  variable: "--font-kanit",
  display: "swap",
  preload: false,
  adjustFontFallback: true,
  fallback: ["Tahoma", "Arial", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://phuketseo.com"),
  title: {
    default: "PhuketSEO | รับทำ SEO ภูเก็ต ติดอันดับ Google ได้จริง",
    template: "%s | PhuketSEO",
  },
  description: siteConfig.description,
  keywords: [
    "SEO ภูเก็ต",
    "รับทำ SEO ภูเก็ต",
    "การตลาดออนไลน์ภูเก็ต",
    "Google Ads ภูเก็ต",
    "Digital Marketing Phuket",
    "SEO Phuket",
  ],
  authors: [{ name: "PhuketSEO" }],
  creator: "PhuketSEO",
  publisher: "PhuketSEO",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "PhuketSEO | รับทำ SEO + เว็บไซต์ภูเก็ต ติด Google พร้อม AI Search",
    description: siteConfig.description,
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "PhuketSEO | รับทำ SEO + เว็บไซต์ภูเก็ต",
    description: siteConfig.description,
    images: [defaultOgImage.url],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="th" className={`${kanitBold.variable} ${kanitRegular.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <DeferredLineChat />
      </body>
      {gaId && <DeferredGoogleAnalytics gaId={gaId} />}
    </html>
  );
}
