import type { Metadata } from "next";
import { Inter, Kanit } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LineChat from "@/components/LineChat";
import { defaultOgImage, siteConfig } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const kanit = Kanit({
  subsets: ["latin", "thai"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-kanit",
  display: "swap",
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
  return (
    <html lang="th" className={`${inter.variable} ${kanit.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <LineChat />
      </body>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
    </html>
  );
}
