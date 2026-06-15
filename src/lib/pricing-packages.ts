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
};

export const pricingPackages: PricingPackage[] = [
  {
    id: "lite",
    name: "SEO Lite",
    tagline: "เริ่มติด Google Maps",
    price: 5900,
    priceLabel: "5,900",
    desc: "เหมาะกับร้านเล็กที่ต้องการโผล่ Maps และสร้างความน่าเชื่อถือด้วยรีวิว",
    features: [
      "Google Business Profile setup + ดูแล",
      "โพสต์ GBP 2 ครั้ง/เดือน",
      "ระบบขอรีวิว (QR + template)",
      "แคมเปญขอรีวิว 1 รอบ/เดือน",
      "ติดตาม keyword 5 คำ",
      "รายงาน GBP รายเดือน",
    ],
    cta: "เริ่มต้น Lite",
    popular: false,
  },
  {
    id: "pro",
    name: "SEO Pro",
    tagline: "เว็บ + SEO + AI Search",
    price: 8900,
    priceLabel: "8,900",
    desc: "แพ็กเกจแนะนำ — เว็บเร็ว ติด Google พร้อมโครงสร้าง AEO/GEO",
    features: [
      "ทุกอย่างใน SEO Lite",
      "ดูแลเว็บไซต์ 2 หน้า/เดือน",
      "On-page SEO 10 หน้า/เดือน",
      "บทความ SEO 1 ชิ้น/เดือน",
      "AEO: FAQ + schema + answer blocks",
      "GEO: entity + llms.txt",
      "ติดตาม keyword 15 คำ",
    ],
    cta: "เลือก Pro",
    popular: true,
  },
  {
    id: "max",
    name: "SEO Pro Max",
    tagline: "Organic + Paid",
    price: 15000,
    priceLabel: "15,000",
    desc: "ครบทุกอย่างใน Pro + จัดการ Google Ads และ Meta Ads (ad spend แยก)",
    features: [
      "ทุกอย่างใน SEO Pro",
      "บทความ SEO 2 ชิ้น/เดือน",
      "Google Ads 1 แคมเปญ",
      "Meta Ads 1 แคมเปญ",
      "Landing page สำหรับ ads",
      "รายงาน ROAS + SEO รวม",
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
  { name: "Google Ads management", lite: false, pro: false, max: true },
  { name: "Meta Ads management", lite: false, pro: false, max: true },
];
