import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteConfig = {
  name: "PhuketSEO",
  tagline: "SEO ภูเก็ต ติดอันดับได้จริง",
  description: "บริการ SEO ภูเก็ต, Google Ads, Social Media Marketing และ Web Design สำหรับธุรกิจในภูเก็ต",
  url: "https://phuketseo.com",
  phone: "076-123-456",
  email: "hello@phuketseo.com",
  line: "@phuketseo",
  address: "123/45 ถนนภูเก็ต ตำบลตลาดใหญ่ อำเภอเมือง จังหวัดภูเก็ต 83000",
  social: {
    facebook: "https://facebook.com/phuketseo",
    instagram: "https://instagram.com/phuketseo",
    linkedin: "https://linkedin.com/company/phuketseo",
    youtube: "https://youtube.com/@phuketseo",
  },
};
