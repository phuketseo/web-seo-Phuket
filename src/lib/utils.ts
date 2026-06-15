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
  line: "@adscafe",
  address: "4/4 ซอย 6 ถนนพังงา ตำบลตลาดใหญ่ อำเภอเมือง จังหวัดภูเก็ต 83000",
  postalAddress: {
    streetAddress: "4/4 ซอย 6 ถนนพังงา",
    addressLocality: "ตลาดใหญ่",
    addressRegion: "ภูเก็ต",
    postalCode: "83000",
    addressCountry: "TH",
  },
  geo: {
    latitude: 7.8804,
    longitude: 98.3923,
  },
  social: {
    facebook: "https://facebook.com/phuketseo",
    instagram: "https://instagram.com/phuketseo",
    linkedin: "https://linkedin.com/company/phuketseo",
    youtube: "https://youtube.com/@phuketseo",
  },
};
