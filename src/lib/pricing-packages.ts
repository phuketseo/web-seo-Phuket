export type PricingPackage = {
  id: "lite" | "pro" | "max";
  name: string;
  tagline: string;
  price: number;
  priceLabel: string;
  desc: string;
  features: string[];
  cta: string;
  popular: boolean;
  /** แสดง badge บนการ์ด (เช่น แพ็กเริ่มต้น) */
  badge?: string;
};

export const planContactHref = (id: PricingPackage["id"]) => `/contact?plan=${id}`;

export const pricingPackages: PricingPackage[] = [
  {
    id: "lite",
    name: "SEO Lite",
    tagline: "Maps + แอดโปรโมต GBP",
    price: 5900,
    priceLabel: "5,900",
    desc: "ดูแล GBP + ยิงแอดโปรโมตบน Maps เน้นตำแหน่งบนสุด — ฿5,900 ค่าจัดการ ค่ายิงแอดแยก",
    features: [
      "Google Business Profile setup + ดูแล",
      "โพสต์ GBP 2 ครั้ง/เดือน",
      "ระบบขอรีวิว (QR + template)",
      "แคมเปญขอรีวิว 1 รอบ/เดือน",
      "Google Ads โปรโมต GBP/Maps 1 แคมเปญ",
      "รายงาน GBP Insights + แอด รายเดือน",
    ],
    cta: "เริ่มต้น Lite",
    popular: false,
    badge: "แพ็กเริ่มต้น",
  },
  {
    id: "pro",
    name: "SEO Pro",
    tagline: "เว็บ + SEO + แอด Landing",
    price: 8900,
    priceLabel: "8,900",
    desc: "รวม Lite + เว็บ organic/AEO/GEO + Google Ads ยิง landing 1 หน้า — ค่ายิงแอดแยก ไม่มี Meta",
    features: [
      "ทุกอย่างใน SEO Lite",
      "ดูแลเว็บไซต์ 2 หน้า/เดือน",
      "On-page SEO 10 หน้า/เดือน",
      "บทความ SEO 1 ชิ้น/เดือน",
      "AEO: FAQ + schema + answer blocks",
      "GEO: entity + llms.txt",
      "Google Ads → landing 1 หน้า 1 แคมเปญ",
      "รายงาน GSC + GBP + แอด รายเดือน",
    ],
    cta: "เลือก Pro",
    popular: true,
  },
  {
    id: "max",
    name: "SEO Pro Max",
    tagline: "GBP + Google + Meta ครบ",
    price: 15000,
    priceLabel: "15,000",
    desc: "ครบทุกอย่างใน Pro + Meta Ads — จัดการแอด GBP, Google (landing), Meta อย่างละ 1 แคมเปญ (ad spend แยก)",
    features: [
      "ทุกอย่างใน SEO Pro",
      "บทความ SEO 2 ชิ้น/เดือน",
      "Meta Ads 1 แคมเปญ",
      "รายงาน ROAS รวม GBP + Google + Meta",
    ],
    cta: "ติดต่อ Pro Max",
    popular: false,
  },
];

export const webSetupPricing = [
  { name: "Landing 5 หน้า", price: "29,900" },
  { name: "Corporate 10 หน้า", price: "39,900" },
  { name: "Multi-service 15+ หน้า", price: "49,900" },
];

export const pricingComparison = [
  { name: "Google Business Profile", lite: true, pro: true, max: true },
  { name: "Social Proof / ขอรีวิว", lite: true, pro: true, max: true },
  { name: "ดูแลเว็บไซต์", lite: false, pro: true, max: true },
  { name: "On-page + Technical SEO", lite: false, pro: true, max: true },
  { name: "AEO + GEO structure", lite: false, pro: true, max: true },
  { name: "บทความ SEO/เดือน", lite: "—", pro: "1", max: "2" },
  { name: "Google Ads โปรโมต GBP/Maps", lite: true, pro: true, max: true },
  { name: "Google Ads → landing 1 หน้า", lite: false, pro: true, max: true },
  { name: "Meta Ads management", lite: false, pro: false, max: true },
];
