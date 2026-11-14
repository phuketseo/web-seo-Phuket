export type PricingBillingPeriod = "month" | "once" | "year";

export type PrimaryPackageId = "ads-starter" | "web-starter" | "annual-care";
export type SeoAddonPackageId = "seo-addon";
export type LegacySeoPackageId = "lite" | "pro" | "max";
export type PricingPackageId = PrimaryPackageId | SeoAddonPackageId | LegacySeoPackageId;

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
    name: "Ads",
    tagline: "Google / Meta — ตามระยะสัญญา",
    price: 3000,
    priceLabel: "3,000",
    billingPeriod: "month",
    desc: "ค่าบริการดูแลโฆษณา Meta และ/หรือ Google Ads — รายเดือน ฿6,000 · 3 เดือน ฿5,000 · 6 เดือน ฿4,000 · ปี ฿3,000 ต่อเดือน",
    features: [
      "ดูแล Meta และ/หรือ Google Ads",
      "ตั้งแคมเปญและปรับงบ",
      "ปรับครีเอทีฟ / คีย์เวิร์ด",
      "รายงานผลรายเดือน",
    ],
    cta: "ดูแพ็กโฆษณา",
    popular: true,
    badge: "แพ็กหลัก",
    footnote: "ค่า ad spend แยก — ดูระยะสัญญาและราคารวมที่ /pricing",
    detailHref: "/pricing",
  },
  {
    id: "web-starter",
    name: "เว็บไซต์",
    tagline: "เว็บธุรกิจตาม brief",
    price: 6500,
    priceLabel: "6,500",
    billingPeriod: "once",
    desc: "ทำเว็บไซต์ครบชุดตาม brief — หน้าหลัก บริการ ฟอร์ม/CTA และ SEO on-page พื้นฐาน",
    features: [
      "หน้าหลัก + บริการ",
      "Responsive",
      "ฟอร์ม / CTA",
      "SEO on-page พื้นฐาน",
      "ปีถัดไป: โดเมน + hosting ฿2,500/ปี",
    ],
    cta: "ขอใบเสนอราคา",
    popular: false,
    footnote: "แพ็กเดียว · จ่ายครั้งแรก ฿6,500 · ปีถัดไป ฿2,500 (โดเมน + hosting)",
    detailHref: "/pricing",
  },
  {
    id: "annual-care",
    name: "ต่ออายุโดเมน + hosting",
    tagline: "ปีถัดไปของแพ็กเว็บ",
    price: 2500,
    priceLabel: "2,500",
    billingPeriod: "year",
    desc: "ต่ออายุโดเมนและ hosting ปีละ ฿2,500 หลังมีเว็บกับเราแล้ว — ไม่ใช่แพ็กแยกให้เลือกตอนทำเว็บใหม่",
    features: [
      "ค่าโดเมน 1 ปี",
      "ค่าเซิร์ฟเวอร์ / hosting 1 ปี",
      "ต่ออายุให้ต่อเนื่อง",
      "ดูแลเทคนิคพื้นฐานของโฮสต์",
    ],
    cta: "ต่ออายุรายปี",
    popular: false,
    footnote: "สำหรับลูกค้าที่มีเว็บกับเราแล้ว · ทำเว็บใหม่เริ่มที่ ฿6,500",
    detailHref: "/pricing",
  },
];

/** SEO ตามระยะสัญญา — แสดงในแท็บราคา */
export const seoAddonPackage: PricingPackage = {
  id: "seo-addon",
  name: "SEO",
  tagline: "เริ่มราย 3 เดือนขึ้นไป",
  price: 4000,
  priceLabel: "4,000",
  billingPeriod: "month",
  desc: "แพ็ก SEO — ราย 3 เดือน ฿6,000 · 6 เดือน ฿5,000 · ปี ฿4,000 ต่อเดือน",
  features: [
    "คีย์เวิร์ด + on-page",
    "Local SEO / Google Maps",
    "คอนเทนต์ตามแผน",
    "รายงานผลรายเดือน",
  ],
  cta: "ดูแพ็ก SEO",
  popular: false,
  badge: "SEO",
  footnote: "ราคารวมตามระยะสัญญา — ดูที่ /pricing",
  detailHref: "/pricing",
};

/** แพ็กเก่า — คงหน้ารายละเอียดเดิม ไม่แสดงบนหน้าราคาหลัก */
export const legacySeoPackages: PricingPackage[] = [
  {
    id: "lite",
    name: "SEO Lite",
    tagline: "Maps + แอดโปรโมต GBP",
    price: 5900,
    priceLabel: "5,900",
    billingPeriod: "month",
    desc: "ดูแล GBP + ยิงแอดโปรโมตบน Maps",
    features: [],
    cta: "เริ่มต้น Lite",
    popular: false,
    detailHref: "/packages/seo-lite",
  },
  {
    id: "pro",
    name: "SEO Pro",
    tagline: "เว็บ + SEO + แอด Landing",
    price: 8900,
    priceLabel: "8,900",
    billingPeriod: "month",
    desc: "รวม Lite + เว็บ organic/AEO/GEO",
    features: [],
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
    desc: "ครบทุกอย่างใน Pro + Meta Ads",
    features: [],
    cta: "ติดต่อ Pro Max",
    popular: false,
    detailHref: "/packages/seo-pro-max",
  },
];

/** แพ็กหลักบนหน้าแรกและ hero ราคา — โฟกัสแอด */
export const pricingPackages = primaryPricingPackages;

/** แพ็กที่เปิดขายปัจจุบัน (contact + schema) */
export const activePricingPackages: PricingPackage[] = [
  ...primaryPricingPackages,
  seoAddonPackage,
];

export const allPricingPackages: PricingPackage[] = [
  ...activePricingPackages,
  ...legacySeoPackages,
];

export function getPricingPackage(id: PricingPackageId): PricingPackage {
  const pkg = allPricingPackages.find((p) => p.id === id);
  if (!pkg) throw new Error(`Unknown pricing package: ${id}`);
  return pkg;
}

export const primaryPricingComparison = [
  { name: "ดูแล Meta / Google Ads", ads: true, web: false, annual: false },
  { name: "รายงานผลรายเดือน (แอด)", ads: true, web: false, annual: false },
  { name: "ทำเว็บไซต์ตาม brief", ads: false, web: true, annual: false },
  { name: "ฟอร์ม / CTA + SEO พื้นฐาน", ads: false, web: true, annual: false },
  { name: "โดเมน + เซิร์ฟเวอร์", ads: false, web: false, annual: true },
  { name: "ต่ออายุรายปี", ads: false, web: false, annual: true },
  {
    name: "SEO ตามสัญญา 3/6/12 เดือน",
    ads: false,
    web: "ดูแท็บ SEO",
    annual: false,
  },
] as const;

export const seoAddonFeatures = [
  { name: "ดูแล Google Business Profile", included: true },
  { name: "On-page + technical SEO รายเดือน", included: true },
  { name: "ระบบขอรีวิว + ติดตามรีวิว", included: true },
  { name: "รายงาน GSC + GBP รายเดือน", included: true },
  { name: "ต้องมีแพ็กเว็บก่อน", included: true },
  { name: "สัญญาขั้นต่ำ 12 เดือน", included: true },
  { name: "ยิงแอด Google/Meta", included: false },
] as const;

/** @deprecated */
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

/** @deprecated */
export const seoPricingPackages = legacySeoPackages;

/** @deprecated */
export const pricingComparison = seoPricingComparison;

export const webSetupPricing = [
  { name: "แพ็กเว็บไซต์", price: "6,500", note: "จ่ายครั้งแรก · ปีถัดไป ฿2,500" },
  { name: "โดเมน + hosting (ปีถัดไป)", price: "2,500/ปี", note: "ต่ออายุหลังมีเว็บแล้ว" },
  { name: "SEO", price: "จาก 4,000/เดือน", note: "สัญญา 3/6/12 เดือน" },
];
