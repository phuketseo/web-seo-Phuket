export type PricingTabId = "ads" | "seo" | "web";

export type PricingTabPlan = {
  id: string;
  name: string;
  desc: string;
  priceLabel: string;
  periodSuffix: string;
  unit: string;
  cta: string;
  popular: boolean;
  totalLabel: string;
  totalPrice: string;
  totalSub: string;
};

export type PricingTab = {
  id: PricingTabId;
  label: string;
  headline: string;
  headlineAccent: string;
  lead: string;
  note: string;
  features: string[];
  plans: PricingTabPlan[];
};

export const pricingTabs: PricingTab[] = [
  {
    id: "ads",
    label: "โฆษณาออนไลน์",
    headline: "แพ็ก",
    headlineAccent: "โฆษณาออนไลน์",
    lead: "ค่าบริการดูแล Meta และ Google Ads — ยิ่งสัญญายาว ราคาต่อเดือนยิ่งคุ้ม",
    note: "ราคาคือค่าบริการดูแลต่อเดือน ยังไม่รวมงบโฆษณาที่จ่ายให้ Meta/Google",
    features: [
      "ดูแล Meta และ/หรือ Google Ads",
      "ตั้งแคมเปญและปรับงบ",
      "ปรับครีเอทีฟ / คีย์เวิร์ด",
      "รายงานผลรายเดือน",
    ],
    plans: [
      {
        id: "ads-monthly",
        name: "รายเดือน",
        desc: "เริ่มเร็ว ปรับงบได้ตลอด",
        priceLabel: "6,000",
        periodSuffix: "/เดือน",
        unit: "จ่ายรายเดือน · ไม่ผูกยาว",
        cta: "เลือกรายเดือน",
        popular: false,
        totalLabel: "ราคารวมทั้งสัญญา",
        totalPrice: "6,000",
        totalSub: "฿6,000 × 1 เดือน",
      },
      {
        id: "ads-3m",
        name: "ราย 3 เดือน",
        desc: "ทดสอบและวัดผลแบบไตรมาส",
        priceLabel: "5,000",
        periodSuffix: "/เดือน",
        unit: "สัญญา 3 เดือน",
        cta: "เลือกราย 3 เดือน",
        popular: false,
        totalLabel: "ราคารวมทั้งสัญญา",
        totalPrice: "15,000",
        totalSub: "฿5,000 × 3 เดือน",
      },
      {
        id: "ads-6m",
        name: "ราย 6 เดือน",
        desc: "สเกลโฆษณาแบบมีแผน",
        priceLabel: "4,000",
        periodSuffix: "/เดือน",
        unit: "สัญญา 6 เดือน",
        cta: "เลือกราย 6 เดือน",
        popular: true,
        totalLabel: "ราคารวมทั้งสัญญา",
        totalPrice: "24,000",
        totalSub: "฿4,000 × 6 เดือน",
      },
      {
        id: "ads-yearly",
        name: "รายปี",
        desc: "คุ้มสุดสำหรับงบต่อเนื่อง",
        priceLabel: "3,000",
        periodSuffix: "/เดือน",
        unit: "สัญญา 12 เดือน",
        cta: "เลือกรายปี",
        popular: false,
        totalLabel: "ราคารวมทั้งสัญญา",
        totalPrice: "36,000",
        totalSub: "฿3,000 × 12 เดือน",
      },
    ],
  },
  {
    id: "seo",
    label: "SEO",
    headline: "แพ็ก",
    headlineAccent: "SEO",
    lead: "แพ็ก SEO สำหรับธุรกิจในภูเก็ต — เริ่มจากราย 3 เดือนขึ้นไป",
    note: "ราคาเป็นค่าบริการ SEO ต่อเดือน ตามระยะสัญญา",
    features: [
      "คีย์เวิร์ด + on-page",
      "Local SEO / Google Maps",
      "คอนเทนต์ตามแผน",
      "รายงานผลรายเดือน",
    ],
    plans: [
      {
        id: "seo-3m",
        name: "ราย 3 เดือน",
        desc: "เริ่มสะสมอันดับและวัดผล",
        priceLabel: "6,000",
        periodSuffix: "/เดือน",
        unit: "สัญญา 3 เดือน",
        cta: "เลือกราย 3 เดือน",
        popular: false,
        totalLabel: "ราคารวมทั้งสัญญา",
        totalPrice: "18,000",
        totalSub: "฿6,000 × 3 เดือน",
      },
      {
        id: "seo-6m",
        name: "ราย 6 เดือน",
        desc: "ช่วงที่มักเห็นผลชัดขึ้น",
        priceLabel: "5,000",
        periodSuffix: "/เดือน",
        unit: "สัญญา 6 เดือน",
        cta: "เลือกราย 6 เดือน",
        popular: true,
        totalLabel: "ราคารวมทั้งสัญญา",
        totalPrice: "30,000",
        totalSub: "฿5,000 × 6 เดือน",
      },
      {
        id: "seo-yearly",
        name: "รายปี",
        desc: "คุ้มสุดสำหรับ SEO ระยะยาว",
        priceLabel: "4,000",
        periodSuffix: "/เดือน",
        unit: "สัญญา 12 เดือน",
        cta: "เลือกรายปี",
        popular: false,
        totalLabel: "ราคารวมทั้งสัญญา",
        totalPrice: "48,000",
        totalSub: "฿4,000 × 12 เดือน",
      },
    ],
  },
  {
    id: "web",
    label: "เว็บไซต์",
    headline: "แพ็ก",
    headlineAccent: "เว็บไซต์",
    lead: "สร้างเว็บไซต์ หรือต่ออายุโดเมนและเซิร์ฟเวอร์",
    note: "ขอบเขตงานยืนยันตอนคุย brief",
    features: [],
    plans: [
      {
        id: "web-standard",
        name: "มาตรฐาน",
        desc: "ทำเว็บไซต์ครบชุดตาม brief",
        priceLabel: "6,500",
        periodSuffix: "",
        unit: "แพ็กมาตรฐาน · จ่ายครั้งเดียว",
        cta: "ขอใบเสนอราคา",
        popular: false,
        totalLabel: "ราคารวม",
        totalPrice: "6,500",
        totalSub: "จ่ายครั้งเดียวตามแพ็ก",
      },
      {
        id: "web-annual",
        name: "รายปี",
        desc: "ค่าโดเมนและเซิร์ฟเวอร์ จ่ายปีละครั้ง",
        priceLabel: "2,500",
        periodSuffix: "/ปี",
        unit: "จ่ายปีละ 1 ครั้ง",
        cta: "เลือกรายปี",
        popular: true,
        totalLabel: "ราคารวมต่อปี",
        totalPrice: "2,500",
        totalSub: "ค่าโดเมน + เซิร์ฟเวอร์ · จ่ายปีละ ฿2,500",
      },
    ],
  },
];

export const webTabFeaturesByPlan: Record<string, string[]> = {
  "web-standard": [
    "หน้าหลัก + บริการ",
    "Responsive",
    "ฟอร์ม / CTA",
    "SEO on-page พื้นฐาน",
  ],
  "web-annual": [
    "ค่าโดเมน 1 ปี",
    "ค่าเซิร์ฟเวอร์ / โฮสติ้ง 1 ปี",
    "ต่ออายุให้ต่อเนื่อง",
    "ดูแลเทคนิคพื้นฐานของโฮสต์",
  ],
};

export function planContactHrefFromTab(planId: string) {
  return `/contact?plan=${planId}`;
}
