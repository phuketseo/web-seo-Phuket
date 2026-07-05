import type { Metadata } from "next";
import "./globals.css";
import { googleSans } from "@/lib/google-sans-font";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DeferredLineChat from "@/components/DeferredLineChat";
import DeferredGoogleAnalytics from "@/components/DeferredGoogleAnalytics";
import CookieConsent from "@/components/CookieConsent";
import { siteEntityGraphSchema } from "@/lib/schema";
import { defaultOgImage, siteConfig } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url),
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
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
};

const CRITICAL_SHELL_CSS = `
:root{--site-header-height:152px}
[data-site-header]{position:fixed;top:0;left:0;right:0;z-index:50;background:#fff;box-shadow:0 1px 2px rgba(15,23,42,.06);border-bottom:1px solid #f1f5f9;padding:.625rem 0}
[data-site-header] .min-h-\\[132px\\]{min-height:132px}
html{scroll-behavior:smooth}
body{margin:0;font-family:Tahoma,"Segoe UI",sans-serif;color:#0f172a;background:#fff;-webkit-font-smoothing:antialiased}
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="th">
      <head>
        <style dangerouslySetInnerHTML={{ __html: CRITICAL_SHELL_CSS }} />
        <link rel="llms-txt" href="/llms.txt" type="text/plain" />
      </head>
      <body className={`${googleSans.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteEntityGraphSchema) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <DeferredLineChat />
        <CookieConsent />
        {gaId && <DeferredGoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
