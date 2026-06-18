import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteConfig = {
  name: "PhuketSEO",
  tagline: "รับทำ SEO + เว็บไซต์ภูเก็ต — ติด Google พร้อม AI Search",
  description:
    "รับทำ SEO และเว็บไซต์ภูเก็ต สำหรับธุรกิจไทยท้องถิ่น ติด Google Maps, เว็บเร็ว, พร้อม AEO/GEO และ AI Overview เริ่มต้น ฿5,900/เดือน",
  url: "https://phuketseo.com",
  phone: "092-555-1369",
  phoneInternational: "+66-92-555-1369",
  email: "phuketseo369@gmail.com",
  line: "@phuketseo",
  /** Verified GBP — ลิงก์ขอรีวิว (ไม่มีปักหมุดบน Maps) */
  googleReviewUrl: "https://g.page/r/CQ8yhsp4fL4jEAE/review",
  /** Dynamic OG image — used in schema until public/logo.png exists */
  logoPath: "/opengraph-image",
  ogImagePath: "/opengraph-image",
  address: "4/4 ซอย 6 ถนนพังงา ตำบลตลาดใหญ่ อำเภอเมือง จังหวัดภูเก็ต 83000",
  postalAddress: {
    streetAddress: "4/4 ซอย 6 ถนนพังงา",
    addressLocality: "ตลาดใหญ่",
    addressRegion: "ภูเก็ต",
    postalCode: "83000",
    addressCountry: "TH",
  },
  social: {
    facebook: "https://www.facebook.com/phuketseoagency",
    instagram: "https://instagram.com/phuketseo",
    linkedin: "https://linkedin.com/company/phuketseo",
    youtube: "https://youtube.com/@phuketseo",
  },
};

/** เวลาทำการ — ตรง GBP (Open 24 hours) */
export const businessHours = {
  label: "เปิด 24 ชั่วโมง ทุกวัน",
  schemaOpeningHours: "Mo-Su 00:00-23:59",
  schemaSpecification: {
    "@type": "OpeningHoursSpecification" as const,
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
};

/** LINE deep link — supports @phuketseo style IDs */
export function lineContactUrl(lineId: string = siteConfig.line): string {
  const normalized = lineId.startsWith("@") ? lineId : `@${lineId}`;
  return `https://line.me/ti/p/${normalized}`;
}

/** Default OG image — dynamic route at /opengraph-image */
export const defaultOgImage = {
  url: `${siteConfig.url}${siteConfig.ogImagePath}`,
  width: 1200,
  height: 630,
  alt: `${siteConfig.name} — รับทำ SEO + เว็บไซต์ภูเก็ต`,
} as const;
