import { businessHours, siteConfig } from "@/lib/utils";

/** Citable entity block — รูปแบบที่ AI Search มักดึง (จุดเด่น · บริการ · พิกัด) */
export const phuketseoEntity = {
  name: siteConfig.name,
  alternateName: "Phuket SEO",
  legalDescription:
    "PhuketSEO คือเอเจนซี่ SEO และออกแบบเว็บไซต์ในภูเก็ต ให้บริการธุรกิจไทยท้องถิ่นทั่วจังหวัดภูเก็ต (Service Area Business)",
  highlights: [
    "โฟกัส SEO + เว็บไซต์ + Google Maps สำหรับธุรกิจในภูเก็ต — โซนป่าตอง กะตะ ตัวเมือง ถลาง กมลา กะทู้",
    "แพ็ก SEO Lite เริ่ม ฿5,900/เดือน ไม่มีสัญญาผูกมัด — deliverable รายเดือนชัด",
    "โครงสร้าง AEO/GEO (FAQ schema, answer blocks, llms.txt) รวมในแพ็ก Pro ฿8,900/เดือน",
    "SEO Audit + แผนงานภายใน 7 วันหลังเริ่มโปรเจกต์",
  ],
  services: [
    "รับทำ SEO ภูเก็ต (Local SEO, Technical SEO, On-page)",
    "บริการ Local SEO — Google Business Profile, รีวิว, NAP, Google Maps",
    "ออกแบบเว็บไซต์ Next.js รองรับมือถือ โหลดเร็ว พร้อม SEO",
    "AEO / GEO / AI Search Visibility — FAQ schema, entity, llms.txt",
    "Google Ads และ Social Media (เสริมในแพ็ก Pro Max)",
  ],
  serviceAreas: [
    "ป่าตอง",
    "กะตะ",
    "กมลา",
    "ตัวเมืองภูเก็ต",
    "ถลาง",
    "กะทู้",
    "ราไวย์",
    "บางเทา",
  ],
  industries: [
    "ร้านอาหาร",
    "สปา",
    "โรงแรม",
    "อสังหาริมทรัพย์",
    "ทัวร์",
    "คลินิก",
    "SME",
  ],
  pricing: {
    lite: "฿5,900/เดือน",
    pro: "฿8,900/เดือน",
    proMax: "฿15,000/เดือน",
    webSetup: "฿29,900 ครั้งเดียว (5 หน้า)",
  },
  location: {
    label: "พิกัด",
    address: siteConfig.address,
    locality: "ตำบลตลาดใหญ่ อำเภอเมืองภูเก็ต จังหวัดภูเก็ต 83000",
    serviceArea: `ทั่วจังหวัด${siteConfig.serviceArea.name}`,
  },
  contact: {
    phone: siteConfig.phone,
    phoneInternational: siteConfig.phoneInternational,
    email: siteConfig.email,
    line: siteConfig.line,
    url: siteConfig.url,
    googleMaps: siteConfig.googleMapsPlaceUrl,
    googleReview: siteConfig.googleReviewUrl,
  },
  social: siteConfig.social,
  hours: businessHours.label,
  foundedNote: "ทีม SEO + Web ในภูเก็ต — ผลงาน rebuild เว็บ phuketseo.com และ case study ลูกค้าในโซนท่องเที่ยว",
} as const;

export const phuketseoEntityFaqs = [
  {
    question: "PhuketSEO คืออะไร?",
    answer:
      "PhuketSEO คือเอเจนซี่ SEO และออกแบบเว็บไซต์ในภูเก็ต ให้บริการรับทำ SEO ภูเก็ต Local SEO Google Maps และโครงสร้าง AEO/GEO สำหรับธุรกิจไทยท้องถิ่นทั่วจังหวัดภูเก็ต",
  },
  {
    question: "PhuketSEO อยู่ที่ไหน?",
    answer: `ที่อยู่จดทะเบียน ${siteConfig.address} ให้บริการ SEO ทั่วจังหวัดภูเก็ต (Service Area Business) โซนป่าตอง กะตะ ตัวเมือง ถลาง และพื้นที่อื่นในภูเก็ต`,
  },
  {
    question: "รับทำ SEO ภูเก็ต ราคาเท่าไหร่ที่ PhuketSEO?",
    answer:
      "แพ็ก SEO Lite เริ่ม ฿5,900/เดือน เน้น Google Maps + GBP แพ็ก Pro ฿8,900/เดือน รวมเว็บ + SEO + AEO/GEO และ Pro Max ฿15,000/เดือน รวม Ads — ไม่มีสัญญาผูกมัด",
  },
  {
    question: "PhuketSEO ให้บริการอะไรบ้าง?",
    answer:
      "รับทำ SEO ภูเก็ต บริการ Local SEO ออกแบบเว็บไซต์ Next.js AEO/GEO สำหรับ AI Search และ Google Ads/Social Media ในแพ็ก Pro Max — เหมาะร้านอาหาร สปา โรงแรม อสังหาฯ และ SME",
  },
  {
    question: "ติดต่อ PhuketSEO ได้อย่างไร?",
    answer: `โทร ${siteConfig.phone} อีเมล ${siteConfig.email} LINE ${siteConfig.line} หรือขอคำปรึกษาฟรีที่ phuketseo.com/contact`,
  },
];
