export type PricingBillingPeriod = "month" | "once" | "year";

export type PrimaryPackageId = "ads-starter" | "web-starter" | "annual-care";
export type SeoPackageId = "lite" | "pro" | "max";
export type PricingPackageId = PrimaryPackageId | SeoPackageId;

export type PricingPackage = {
  id: PricingPackageId;
  name: string;
  tagline: string;
  price: number;
  priceLabel: string;
  billingPeriod: PricingBillingPeriod;
  desc: string;
  features: string[];
  cta: string;
  popular: boolean;
  badge?: string;
  footnote?: string;
  detailHref: string;
};

export const billingPeriodSuffix: Record<PricingBillingPeriod, string> = {
  month: "/เดือน",
  once: " ครั้งเดียว",
  year: "/ปี",
};

export const billingPeriodSchemaUnit: Record<PricingBillingPeriod, string> = {
  month: "MONTH",
  once: "ONE_TIME",
  year: "YEAR",
};

export const planContactHref = (id: PricingPackageId) => `/contact?plan=${id}`;

export const primaryPricingPackages: PricingPackage[] = [
  {
    id: "ads-starter",
    name: "Ads Starter",
    tagline: "Google หรือ Meta — 1 แคมเปญ",
    price: 6500,
    priceLabel: "6,500",
    billingPeriod: "month",
    desc: "จัดการโฆษณา 1 แคมเปญ — เลือก Google Ads (Search/Maps) หรือ Meta Ads (Facebook/Instagram) ค่ายิงแอดแยก ไม่รวมทำเว็บ",
    features: [
      "เลือก Google Ads หรือ Meta Ads 1 แพลตฟอร์ม",
      "ตั้งแคมเปญ + pixel/tracking เดือนแรก",
      "ปรับแคมเปญ 2 ครั้ง/เดือน",
      "รายงานผลรายเดือน (คลิก, lead, ค่าใช้จ่าย)",
      "ไม่มีสัญญาผูกมัด — ยกเลิกได้ทุกเดือน",
    ],
    cta: "เริ่มยิงแอด",
    popular: true,
    badge: "แพ็กหลัก",
    footnote: "ค่า ad spend แยก — Google แนะนำขั้นต่ำ ~฿5,000/เดือน Meta ~฿3,000/เดือน",
    detailHref: "/packages/ads-starter",
  },
  {
    id: "web-starter",
    name: "เว็บ Starter",
    tagline: "เว็บธุรกิจ ไม่เกิน 10 หน้า",
    price: 6500,
    priceLabel: "6,500",
    billingPeriod: "once",
    desc: "เว็บ Next.js mobile-first ภาษาไทย ฟอร์มติดต่อ + LINE CTA — แยกจากแพ็กยิงแอด ดูแลโดเมน/โฮสต์ผ่านแพ็กรายปี",
    features: [
      "ไม่เกิน 10 หน้า (หน้าแรก, บริการ, ติดต่อ ฯลฯ)",
      "ออกแบบ mobile-first + Core Web Vitals",
      "ฟอร์มติดต่อ + ปุ่ม LINE / โทร",
      "ตั้งค่า title, meta และ schema พื้นฐาน",
      "ส่งมอบภายใน 4–6 สัปดาห์ (ขึ้นกับ content)",
    ],
    cta: "สั่งทำเว็บ",
    popular: false,
    footnote: "ไม่รวม SEO รายเดือน — เพิ่มได้ที่แพ็ก SEO Lite ขึ้นไป",
    detailHref: "/packages/web-starter",
  },
  {
    id: "annual-care",
    name: "ดูแลรายปี",
    tagline: "โดเมน + โฮสติ้ง + อัปเดตระบบ",
    price: 4500,
    priceLabel: "4,500",
    billingPeriod: "year",
    desc: "ต่ออายุโดเมน โฮสติ้ง SSL และ security update — สำหรับลูกค้าที่มีเว็บแล้ว ไม่รวมแก้เนื้อหาหรือยิงแอด",
    features: [
      "โดเมน .com / .co.th (ตามที่ลงทะเบียน)",
      "โฮสติ้ง + SSL certificate",
      "security patch และ dependency update",
      "ตรวจ uptime พื้นฐาน",
      "แจ้งเตือนก่อนหมดอายุโดเมน",
    ],
    cta: "สมัครดูแลรายปี",
    popular: false,
    footnote: "ไม่รวมแก้ข้อความ/รูป — งาน content คิดแยกหรืออัปเป็นแพ็ก SEO",
    detailHref: "/packages/annual-care",
  },
];

export const seoPricingPackages: PricingPackage[] = [
  {
    id: "lite",
    name: "SEO Lite",
    tagline: "Maps + แอดโปรโมต GBP",
    price: 5900,
    priceLabel: "5,900",
    billingPeriod: "month",
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
    badge: "SEO ระยะยาว",
    detailHref: "/packages/seo-lite",
  },
  {
    id: "pro",
    name: "SEO Pro",
    tagline: "เว็บ + SEO + แอด Landing",
    price: 8900,
    priceLabel: "8,900",
    billingPeriod: "month",
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
    popular: false,
    detailHref: "/packages/seo-pro",
  },
  {
    id: "max",
    name: "SEO Pro Max",
    tagline: "GBP + Google + Meta ครบ",
    price: 15000,
    priceLabel: "15,000",
    billingPeriod: "month",
    desc: "ครบทุกอย่างใน Pro + Meta Ads — จัดการแอด GBP, Google (landing), Meta อย่างละ 1 แคมเปญ (ad spend แยก)",
    features: [
      "ทุกอย่างใน SEO Pro",
      "บทความ SEO 2 ชิ้น/เดือน",
      "Meta Ads 1 แคมเปญ",
      "รายงาน ROAS รวม GBP + Google + Meta",
    ],
    cta: "ติดต่อ Pro Max",
    popular: false,
    detailHref: "/packages/seo-pro-max",
  },
];

/** แพ็กหลักบนหน้าแรกและ hero ราคา — โฟกัสแอด */
export const pricingPackages = primaryPricingPackages;

export const allPricingPackages: PricingPackage[] = [...primaryPricingPackages, ...seoPricingPackages];

export function getPricingPackage(id: PricingPackageId): PricingPackage {
  const pkg = allPricingPackages.find((p) => p.id === id);
  if (!pkg) throw new Error(`Unknown pricing package: ${id}`);
  return pkg;
}

export const primaryPricingComparison = [
  { name: "จัดการแอด 1 แคมเปญ", ads: true, web: false, annual: false },
  { name: "เลือก Google หรือ Meta", ads: true, web: false, annual: false },
  { name: "เว็บไซต์ไม่เกิน 10 หน้า", ads: false, web: true, annual: false },
  { name: "ฟอร์มติดต่อ + LINE CTA", ads: false, web: true, annual: false },
  { name: "โดเมน + โฮสติ้ง", ads: false, web: false, annual: true },
  { name: "SSL + security update", ads: false, web: false, annual: true },
  { name: "รายงานแอดรายเดือน", ads: true, web: false, annual: false },
  { name: "SEO / GBP รายเดือน", ads: false, web: false, annual: false },
] as const;

export const seoPricingComparison = [
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

/** @deprecated ใช้ primary + seo แยกบนหน้าราคา */
export const pricingComparison = seoPricingComparison;

export const webSetupPricing = [
  { name: "เว็บ Starter", price: "6,500", note: "ไม่เกิน 10 หน้า" },
  { name: "งานขนาดใหญ่ 15+ หน้า", price: "ติดต่อ", note: "ใบเสนอราคาแยก" },
];
