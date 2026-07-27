import type { SiteImage } from "@/lib/images";
import { siteImages } from "@/lib/images";
import type { PricingPackage } from "@/lib/pricing-packages";
import { getPricingPackage, planContactHref } from "@/lib/pricing-packages";

export type PrimaryPackagePageId = "ads-starter" | "web-starter" | "annual-care";
export type SeoAddonPackagePageId = "seo-addon";
export type SeoPackagePageId = "lite" | "pro" | "max";
export type PackagePageId = PrimaryPackagePageId | SeoAddonPackagePageId | SeoPackagePageId;

export type PackageFaq = { question: string; answer: string };

export type PackageCompareCard = {
  id: PackagePageId;
  name: string;
  priceLabel: string;
  hook: string;
  href: string;
  cta: string;
};

export type PackagePageContent = {
  id: PackagePageId;
  path: string;
  metaTitle: string;
  metaDescription: string;
  heroBadge: string;
  heroTitle: string;
  heroHighlight: string;
  heroSubtitle: string;
  answerBlock: string;
  heroImage: SiteImage;
  showcaseImage: SiteImage;
  showcaseCaption: string;
  monthlyTitle: string;
  monthlyIntro: string;
  monthOneItems: string[];
  everyMonthItems: string[];
  notIncluded: string[];
  worthItTitle: string;
  worthItPoints: string[];
  idealFor: { title: string; desc: string }[];
  compareIntro: string;
  compareCards: PackageCompareCard[];
  faqs: PackageFaq[];
  relatedLinks: { label: string; href: string }[];
  phaseOneLabel?: string;
  phaseTwoLabel?: string;
};

const pkg = (id: PackagePageId) => getPricingPackage(id);

const compareOthers = (current: SeoPackagePageId): PackageCompareCard[] => {
  const all: SeoPackagePageId[] = ["lite", "pro", "max"];
  return all
    .filter((id) => id !== current)
    .map((id) => {
      const p = pkg(id);
      const hooks: Record<SeoPackagePageId, string> = {
        lite: "Maps + แอด GBP + รีวิว — งบน้อยสุด",
        pro: "เว็บ + SEO + แอด Landing — แพ็กแนะนำ SME",
        max: "GBP + Google + Meta ครบ — scale lead",
      };
      return {
        id,
        name: p.name,
        priceLabel: p.priceLabel,
        hook: hooks[id],
        href: packagePaths[id],
        cta: id === "pro" ? "ดู SEO Pro" : id === "lite" ? "ดู SEO Lite" : "ดู Pro Max",
      };
    });
};

export const packagePaths: Record<PackagePageId, string> = {
  "ads-starter": "/packages/ads-starter",
  "web-starter": "/packages/web-starter",
  "annual-care": "/packages/annual-care",
  "seo-addon": "/packages/seo-addon",
  lite: "/packages/seo-lite",
  pro: "/packages/seo-pro",
  max: "/packages/seo-pro-max",
};

const primaryCompareOthers = (current: PrimaryPackagePageId): PackageCompareCard[] => {
  const all: PrimaryPackagePageId[] = ["ads-starter", "web-starter", "annual-care"];
  const hooks: Record<PrimaryPackagePageId, string> = {
    "ads-starter": "ยิงแอด Google หรือ Meta — 1 แคมเปญ",
    "web-starter": "เว็บธุรกิจ ไม่เกิน 10 หน้า",
    "annual-care": "โดเมน + โฮสติ้ง รายปี",
  };
  const ctas: Record<PrimaryPackagePageId, string> = {
    "ads-starter": "ดู Ads Starter",
    "web-starter": "ดูเว็บ Starter",
    "annual-care": "ดูดูแลรายปี",
  };
  return all
    .filter((id) => id !== current)
    .map((id) => {
      const p = pkg(id);
      return {
        id,
        name: p.name,
        priceLabel: p.priceLabel,
        hook: hooks[id],
        href: packagePaths[id],
        cta: ctas[id],
      };
    });
};

export const packagePagesContent: Record<PackagePageId, PackagePageContent> = {
  "ads-starter": {
    id: "ads-starter",
    path: packagePaths["ads-starter"],
    metaTitle: "แพ็ก Ads Starter ฿6,500 | รับยิงแอด Google/Meta ภูเก็ต",
    metaDescription:
      "Ads Starter ฿6,500/เดือน — จัดการ Google Ads หรือ Meta Ads 1 แคมเปญ สำหรับธุรกิจในภูเก็ต ค่ายิงแอดแยก ไม่รวมทำเว็บ",
    heroBadge: "แพ็กหลัก · Paid Ads",
    heroTitle: "แพ็ก Ads Starter",
    heroHighlight: "Google หรือ Meta",
    heroSubtitle:
      "฿6,500/เดือน (ค่าจัดการ) — เลือกยิงแอด Google Search/Maps หรือ Facebook/Instagram 1 แคมเปญ แยกจากค่าทำเว็บ",
    answerBlock:
      "Ads Starter คือแพ็กจัดการโฆษณารายเดือน ฿6,500 สำหรับธุรกิจในภูเก็ต — เลือก Google Ads (Search, Maps) หรือ Meta Ads (Facebook, Instagram) อย่างใดอย่างหนึ่ง 1 แคมเปญ ค่า ad spend จ่ายแพลตฟอร์มแยก",
    heroImage: siteImages.icons.googleAds,
    showcaseImage: siteImages.services.googleAds,
    showcaseCaption: "เหมาะเริ่มยิงแอดก่อนมีเว็บใหญ่ — ใช้ landing หรือ LINE เป็นปลายทาง lead",
    monthlyTitle: "จ่าย ฿6,500/เดือน แล้วได้อะไร?",
    monthlyIntro: "ค่าจัดการครอบคลุม setup และดูแลแคมเปญ — งบยิงแอดจริงจ่าย Google หรือ Meta แยก",
    monthOneItems: [
      "ประชุมเป้าหมายธุรกิจ โซน (ป่าตอง กะตะ ตัวเมือง ฯลฯ) และงบ ad spend",
      "ตั้งบัญชีโฆษณา + conversion tracking (GA4, pixel, UTM)",
      "สร้างแคมเปญ 1 ชุด — keyword/audience, ad copy, ปลายทาง landing/LINE",
      "ส่งมอบรายงาน baseline — impression, คลิก, cost เริ่มต้น",
    ],
    everyMonthItems: [
      "ปรับแคมเปญ 2 ครั้ง/เดือน (bid, keyword, creative, budget)",
      "ติดตาม conversion และ cost per lead",
      "รายงานรายเดือน — สรุปผล + แนะนำเดือนถัดไป",
      "แจ้งปัญหา tracking หรือ policy จากแพลตฟอร์ม",
    ],
    notIncluded: [
      "ค่า ad spend — จ่าย Google/Meta โดยตรง (Google แนะนำขั้นต่ำ ~฿5,000/เดือน Meta ~฿3,000/เดือน)",
      "ทำเว็บไซต์ — ดูแพ็กเว็บ Starter ฿6,500 ครั้งเดียว",
      "แคมเปญที่ 2 หรือสลับแพลตฟอร์มกลางรอบบิล (ต้องอัปแพ็กหรือเพิ่มแคมเปญ)",
      "ถ่ายรูป/video creative ระดับ production",
      "SEO organic / GBP รายเดือน — ดูแพ็ก SEO Lite",
    ],
    worthItTitle: "฿6,500 คุ้มเมื่อไหร่?",
    worthItPoints: [
      "ต้องการ lead เร็วในโซนภูเก็ต โดยยังไม่พร้อมลงทุนเว็บใหญ่",
      "มี LINE หรือ landing ง่ายๆ เป็นปลายทาง conversion แล้ว",
      "อยากให้มืออาชีพดูแล tracking และลดเวลาลองผิดลองถูกเอง",
    ],
    idealFor: [
      { title: "ร้านอาหาร / สปา", desc: "ยิง Maps หรือ Search ในโซนป่าตอง กะตะ กมลา — เน้นโทรและจอง" },
      { title: "ทัวร์ / กิจกรรม", desc: "ช่วง high season ต้องการ inquiry ทันทีจากนักท่องเที่ยว" },
      { title: "SME ท้องถิ่น", desc: "เริ่มจากแคมเปญเดียว วัด ROAS ก่อนขยายงบ" },
    ],
    compareIntro: "แพ็กหลักอื่น — แยกเว็บกับแอดชัดเจน",
    compareCards: primaryCompareOthers("ads-starter"),
    faqs: [
      {
        question: "Ads Starter ฿6,500 รวมอะไรบ้าง?",
        answer:
          "รวมจัดการ 1 แคมเปญบน Google Ads (Search/Maps) หรือ Meta Ads (Facebook/Instagram) — setup, ปรับแคมเปญ 2 ครั้ง/เดือน และรายงานรายเดือน ไม่รวมค่ายิงแอด",
      },
      {
        question: "เลือก Google กับ Meta ได้ทั้งคู่ไหม?",
        answer:
          "แพ็กนี้เลือก 1 แพลตฟอร์มต่อเดือน — ถ้าต้องการทั้ง Google และ Meta พร้อมกัน ดูแพ็ก SEO Pro Max หรือติดต่อเพิ่มแคมเปญ",
      },
      {
        question: "ต้องมีเว็บไซต์ก่อนไหม?",
        answer:
          "ไม่จำเป็น — ใช้ Google Business Profile, landing สั้น หรือ LINE เป็นปลายทางได้ ถ้าต้องการเว็บ ดูแพ็กเว็บ Starter ฿6,500 (แยกจากแพ็กแอด)",
      },
      {
        question: "งบ ad spend ควรเริ่มเท่าไหร่?",
        answer:
          "Google Ads มักเริ่ม ~฿5,000/เดือนขึ้นไป Meta ~฿3,000/เดือน — ขึ้นกับอุตสาหกรรมและโซนในภูเก็ต",
      },
      {
        question: "ยกเลิกได้เมื่อไหร่?",
        answer: "แจ้งก่อนรอบบิล — ไม่มีสัญญาผูกมัด แคมเปญและบัญชีโฆษณาเป็นของลูกค้า",
      },
    ],
    relatedLinks: [
      { label: "รับทำ Google Ads ภูเก็ต", href: "/services/google-ads" },
      { label: "รับยิงแอด Facebook ภูเก็ต", href: "/services/social-media" },
      { label: "เปรียบเทียบราคาทั้งหมด", href: "/pricing" },
    ],
  },
  "web-starter": {
    id: "web-starter",
    path: packagePaths["web-starter"],
    metaTitle: "แพ็กเว็บ Starter ฿6,500 | รับทำเว็บไซต์ภูเก็ต ไม่เกิน 10 หน้า",
    metaDescription:
      "เว็บ Starter ฿6,500 ครั้งเดียว — เว็บธุรกิจภูเก็ต mobile-first ไม่เกิน 10 หน้า ฟอร์ม + LINE CTA แยกจากแพ็กยิงแอด",
    heroBadge: "เว็บธุรกิจ · One-time",
    heroTitle: "แพ็กเว็บ Starter",
    heroHighlight: "ไม่เกิน 10 หน้า",
    heroSubtitle:
      "฿6,500 ครั้งเดียว — เว็บ Next.js ภาษาไทย mobile-first ฟอร์มติดต่อ + LINE ไม่รวม SEO รายเดือนหรือยิงแอด",
    answerBlock:
      "เว็บ Starter คือบริการทำเว็บไซต์ธุรกิจในภูเก็ต ราคา ฿6,500 ครั้งเดียว ไม่เกิน 10 หน้า ออกแบบ mobile-first พร้อมฟอร์มติดต่อและปุ่ม LINE — แยกจากแพ็กจัดการโฆษณา",
    heroImage: siteImages.services.webDesign,
    showcaseImage: siteImages.services.webDesign,
    showcaseCaption: "เหมาะ SME ที่ต้องการเว็บออนไลน์เร็ว ก่อนลงทุน SEO หรือแอดเต็มรูปแบบ",
    monthlyTitle: "จ่ายครั้งเดียว ฿6,500 แล้วได้อะไร?",
    monthlyIntro: "ส่งมอบเว็บพร้อมใช้งาน — ดูแลโดเมน/โฮสต์ผ่านแพ็กรายปี ฿4,500",
    phaseOneLabel: "สัปดาห์ 1–2 (วางแผน)",
    phaseTwoLabel: "สัปดาห์ 3–6 (พัฒนา + ส่งมอบ)",
    monthOneItems: [
      "เก็บ requirement หน้าเว็บ (ไม่เกิน 10 หน้า) โทนสี โลโก้",
      "วาง wireframe + โครงสร้างเมนูและ CTA",
      "เตรียม content จากลูกค้า (ข้อความ รูป)",
      "ตั้งโดเมน/โฮสต์ (หรือใช้ของลูกค้าเดิม)",
    ],
    everyMonthItems: [
      "พัฒนาเว็บ Next.js mobile-first",
      "ติดตั้งฟอร์มติดต่อ + ปุ่ม LINE / โทร",
      "ตั้งค่า title, meta description และ schema พื้นฐาน",
      "ทดสอบบนมือถือ + ส่งมอบพร้อมคู่มือแก้ข้อความเบื้องต้น",
    ],
    notIncluded: [
      "SEO รายเดือน — ดู SEO Add-on +฿6,500/เดือน (บวกกับเว็บ ขั้นต่ำ 12 เดือน)",
      "ยิงแอด Google/Meta — ดูแพ็ก Ads Starter ฿6,500/เดือน",
      "หน้าเว็บเกิน 10 หน้า — ใบเสนอราคาแยก",
      "ระบบจอง/ชำระเงินเต็มรูปแบบ (e-commerce)",
      "แก้เนื้อหาหลังส่งมอบ (นอกแพ็กดูแลรายปี)",
    ],
    worthItTitle: "฿6,500 คุ้มเมื่อไหร่?",
    worthItPoints: [
      "ต้องการเว็บมืออาชีพงบจำกัด ก่อนลงทุน SEO หนัก",
      "มี content พร้อมแล้ว ต้องการ launch เร็ว",
      "จะยิงแอดทีหลัง — มีเว็บเป็นปลายทาง conversion",
    ],
    idealFor: [
      { title: "ร้านบริการท้องถิ่น", desc: "หน้าแรก บริการ ราคา ติดต่อ — CTA ชัด" },
      { title: "ธุรกิจใหม่ในภูเก็ต", desc: "ต้องการ presence ออนไลน์ก่อนเปิด high season" },
      { title: "ลูกค้าแอด", desc: "มีแพ็ก Ads Starter แล้ว ต้องการ landing บนโดเมนตัวเอง" },
    ],
    compareIntro: "จับคู่กับแพ็กแอดหรือดูแลรายปี",
    compareCards: primaryCompareOthers("web-starter"),
    faqs: [
      {
        question: "เว็บ Starter ฿6,500 รวมกี่หน้า?",
        answer: "ไม่เกิน 10 หน้า เช่น หน้าแรก เกี่ยวกับเรา บริการ แกลเลอรี ติดต่อ — หน้าเพิ่มคิดแยก",
      },
      {
        question: "ใช้เวลาทำนานแค่ไหน?",
        answer: "โดยทั่วไป 4–6 สัปดาห์ หลังได้ content ครบ — ขึ้นกับความซับซ้อนและ feedback",
      },
      {
        question: "รวมโดเมนและโฮสติ้งไหม?",
        answer: "ไม่รวมในราคา ฿6,500 — ดูแพ็กดูแลรายปี ฿4,500/ปี ที่รวมโดเมน + โฮสติ้ง + SSL",
      },
      {
        question: "ทำคู่กับแพ็กแอดได้ไหม?",
        answer: "ได้ — เว็บและแอดแยกราคากัน หลายลูกค้าเริ่มแอดก่อน แล้วค่อยทำเว็บเมื่อ lead เพิ่ม",
      },
      {
        question: "มี SEO รวมไหม?",
        answer: "มีแค่ตั้งค่า on-page พื้นฐาน — SEO รายเดือนผ่าน SEO Add-on +฿6,500/เดือน (บวกกับเว็บ ขั้นต่ำ 12 เดือน)",
      },
    ],
    relatedLinks: [
      { label: "รับทำเว็บไซต์ภูเก็ต", href: "/services/web-design" },
      { label: "แพ็ก Ads Starter", href: "/packages/ads-starter" },
      { label: "ดูแลรายปี ฿4,500", href: "/packages/annual-care" },
    ],
  },
  "annual-care": {
    id: "annual-care",
    path: packagePaths["annual-care"],
    metaTitle: "ดูแลเว็บรายปี ฿4,500 | โดเมน + โฮสติ้ง ภูเก็ต",
    metaDescription:
      "แพ็กดูแลรายปี ฿4,500 — รวมโดเมน โฮสติ้ง SSL และ security update สำหรับเว็บธุรกิจในภูเก็ต ไม่รวมแก้เนื้อหาหรือยิงแอด",
    heroBadge: "ดูแลระบบ · รายปี",
    heroTitle: "ดูแลเว็บ",
    heroHighlight: "รายปี ฿4,500",
    heroSubtitle:
      "ต่ออายุโดเมน โฮสติ้ง SSL และอัปเดตความปลอดภัย — สำหรับลูกค้าที่มีเว็บแล้ว ไม่รวมแก้ข้อความ SEO หรือแอด",
    answerBlock:
      "แพ็กดูแลรายปี ฿4,500 คือบริการต่ออายุโดเมน โฮสติ้ง SSL และ security update สำหรับเว็บธุรกิจในภูเก็ต — ไม่รวมการแก้เนื้อหา ยิงแอด หรือ SEO รายเดือน",
    heroImage: siteImages.icons.webDesign,
    showcaseImage: siteImages.services.webDesign,
    showcaseCaption: "เหมาะคู่กับเว็บ Starter หรือเว็บที่มีอยู่แล้ว — ให้เว็บออนไลน์ต่อเนื่องโดยไม่ต้องจัดการโดเมนเอง",
    monthlyTitle: "จ่าย ฿4,500/ปี แล้วได้อะไร?",
    monthlyIntro: "ดูแลโครงสร้างพื้นฐานของเว็บ — งาน content และ marketing เป็นแพ็กแยก",
    phaseOneLabel: "เมื่อเริ่มแพ็ก",
    phaseTwoLabel: "ตลอด 12 เดือน",
    monthOneItems: [
      "ตรวจสอบโดเมนและโฮสติ้งปัจจุบัน (หรือย้ายเข้าระบบ)",
      "ตั้งค่า SSL และ redirect www/non-www",
      "สำรองข้อมูลก่อนอัปเดตครั้งแรก",
      "แจ้งวันหมดอายุโดเมนและรอบต่ออายุ",
    ],
    everyMonthItems: [
      "ต่ออายุโดเมน (ตาม TLD ที่ลงทะเบียน)",
      "โฮสติ้งและ bandwidth ตามแพ็ก",
      "security patch / dependency update ตามความจำเป็น",
      "ตรวจ uptime พื้นฐานและแจ้งเมื่อเว็บล่ม",
    ],
    notIncluded: [
      "แก้ข้อความ รูป หรือเพิ่มหน้าเว็บ",
      "SEO, GBP, บทความ blog",
      "ยิงแอด Google/Meta",
      "อีเมลธุรกิจ (ถ้าต้องการ — คิดแยก)",
      "recovery จากการแฮกที่เกิดจากรหัสผ่านรั่ว (งาน forensic คิดแยก)",
    ],
    worthItTitle: "฿4,500/ปี คุ้มเมื่อไหร่?",
    worthItPoints: [
      "ไม่อยากจัดการต่ออายุโดเมนและโฮสต์เอง",
      "เว็บเสร็จแล้ว ต้องการให้ออนไลน์ต่อเนื่อง",
      "จะทำ SEO/แอดแยก — แพ็กนี้ดูแลแค่โครงสร้างพื้นฐาน",
    ],
    idealFor: [
      { title: "ลูกค้าเว็บ Starter", desc: "จับคู่หลังส่งมอบเว็บ — โดเมนครบในปีแรก" },
      { title: "เว็บเก่าที่ยังใช้งาน", desc: "ย้ายดูแลมา PhuketSEO โดยไม่ rebuild" },
      { title: "ธุรกิจที่ไม่ได้อัปเดตบ่อย", desc: "เนื้อหาคงที่ ต้องการแค่เว็บไม่ล่ม" },
    ],
    compareIntro: "แพ็กหลักอื่น — เว็บ แอด และดูแลระบบ",
    compareCards: primaryCompareOthers("annual-care"),
    faqs: [
      {
        question: "฿4,500/ปี รวมโดเมนไหม?",
        answer: "รวมต่ออายุโดเมนมาตรฐาน (เช่น .com) และโฮสติ้งตามแพ็ก — TLD พิเศษอาจมีค่าใช้จ่ายเพิ่ม",
      },
      {
        question: "แก้ข้อความบนเว็บได้ไหม?",
        answer: "ไม่รวม — แก้ content คิดแยกต่อครั้ง หรืออัปเป็นแพ็ก SEO Pro ที่มีดูแลเว็บรายเดือน",
      },
      {
        question: "ต้องมีเว็บจาก PhuketSEO ไหม?",
        answer: "ไม่จำเป็น — รับดูแลเว็บที่มีอยู่แล้ว หากโค้ดเข้ากันได้ (ส่วนใหญ่ Next.js/WordPress)",
      },
      {
        question: "รวม backup ไหม?",
        answer: "มี backup ก่อนอัปเดตสำคัญ — ไม่ใช่ backup รายวันแบบ enterprise (ติดต่อถ้าต้องการเพิ่ม)",
      },
      {
        question: "ต่อกับแพ็กแอดได้ไหม?",
        answer: "ได้ — แพ็กนี้ดูแลเว็บอย่างเดียว ยิงแอดดูแพ็ก Ads Starter ฿6,500/เดือน",
      },
    ],
    relatedLinks: [
      { label: "แพ็กเว็บ Starter", href: "/packages/web-starter" },
      { label: "รับทำเว็บไซต์ภูเก็ต", href: "/services/web-design" },
      { label: "เปรียบเทียบราคา", href: "/pricing" },
    ],
  },
  "seo-addon": {
    id: "seo-addon",
    path: packagePaths["seo-addon"],
    metaTitle: "SEO Add-on +฿6,500/เดือน | บวกกับแพ็กเว็บ ขั้นต่ำ 1 ปี",
    metaDescription:
      "SEO Add-on ฿6,500/เดือน — บวกกับแพ็กเว็บ Starter เท่านั้น Local SEO, GBP, on-page สัญญาขั้นต่ำ 12 เดือน ไม่ขาย SEO แยกจากเว็บ",
    heroBadge: "เพิ่มกับเว็บ · Local SEO",
    heroTitle: "SEO Add-on",
    heroHighlight: "+฿6,500/เดือน",
    heroSubtitle:
      "บวกกับแพ็กเว็บ Starter หรือเว็บจาก PhuketSEO — Local SEO, GBP, on-page สัญญาขั้นต่ำ 12 เดือน ไม่ขายแยกจากเว็บ",
    answerBlock:
      "SEO Add-on คือบริการ SEO รายเดือน ฿6,500 ที่บวกกับแพ็กเว็บเท่านั้น — ดูแล Google Business Profile, on-page SEO และรายงาน GSC/GBP สัญญาขั้นต่ำ 12 เดือน ไม่จำหน่ายแยกจากการทำเว็บ",
    heroImage: siteImages.icons.seo,
    showcaseImage: siteImages.services.localSeo,
    showcaseCaption: "เหมาะลูกค้าที่มีเว็บแล้วและต้องการ compound organic ในโซนภูเก็ตระยะยาว",
    monthlyTitle: "จ่าย +฿6,500/เดือน แล้วได้อะไร?",
    monthlyIntro: "บวกกับแพ็กเว็บ — ขั้นต่ำ 12 เดือน แพ็กยิงแอดแยกที่ Ads Starter",
    monthOneItems: [
      "Audit Google Business Profile + เว็บ baseline",
      "ตั้งหรือปรับ GBP — หมวดหมู่, NAP, รูป, เวลาเปิด",
      "ส่งมอบ QR + template ขอรีวิว",
      "วางแผน on-page SEO 10 หน้าแรกบนเว็บ",
    ],
    everyMonthItems: [
      "โพสต์ Google Business Profile 2 ครั้ง/เดือน",
      "On-page + technical check รายเดือน",
      "ติดตามและตอบรีวิว",
      "รายงาน GSC + GBP Insights รายเดือน",
    ],
    notIncluded: [
      "ทำเว็บไซต์ — ต้องมีแพ็กเว็บ Starter ฿6,500 หรือเว็บจาก PhuketSEO ก่อน",
      "ยิงแอด Google/Meta — ดูแพ็ก Ads Starter ฿6,500/เดือน",
      "บทความ blog จำนวนมาก — คิดแยกตาม scope",
      "AEO/GEO เต็มรูปแบบ — ติดต่อสำหรับ scope ขยาย",
      "ยกเลิกก่อนครบ 12 เดือน (ตามสัญญา Add-on)",
    ],
    worthItTitle: "SEO Add-on เหมาะเมื่อไหร่?",
    worthItPoints: [
      "มีเว็บแล้ว ต้องการ Maps + organic ควบคู่กับแอด",
      "ธุรกิจในโซนป่าตอง กะตะ ตัวเมือง ที่แข่งขันสูง",
      "พร้อม commit 1 ปีเพื่อให้ SEO compound",
    ],
    idealFor: [
      { title: "ลูกค้าเว็บ Starter", desc: "ทำเว็บแล้วต่อ SEO ในปีแรก" },
      { title: "SME มีเว็บจากเรา", desc: "ต้องการดูแล GBP และ on-page ต่อเนื่อง" },
      { title: "ธุรกิจบริการท้องถิ่น", desc: "ร้านอาหาร สปา คลินิก ที่พึ่ง Maps + search" },
    ],
    compareIntro: "จับคู่กับแพ็กเว็บหรือแอด",
    compareCards: [
      {
        id: "web-starter",
        name: "เว็บ Starter",
        priceLabel: "6,500",
        hook: "เว็บธุรกิจ ไม่เกิน 10 หน้า — ต้องมีก่อน Add-on",
        href: packagePaths["web-starter"],
        cta: "ดูเว็บ Starter",
      },
      {
        id: "ads-starter",
        name: "Ads Starter",
        priceLabel: "6,500",
        hook: "ยิงแอด Google หรือ Meta — แยกจาก SEO",
        href: packagePaths["ads-starter"],
        cta: "ดู Ads Starter",
      },
    ],
    faqs: [
      {
        question: "SEO Add-on ขายแยกจากเว็บได้ไหม?",
        answer: "ไม่ได้ — SEO Add-on บวกกับแพ็กเว็บ Starter ฿6,500 หรือเว็บที่ทำจาก PhuketSEO เท่านั้น ไม่ขาย SEO แยก",
      },
      {
        question: "ทำไมต้องสัญญาขั้นต่ำ 12 เดือน?",
        answer: "SEO ใช้เวลา compound — Maps และ organic มักเห็นผลชัดใน 3–6 เดือน สัญญา 1 ปีช่วยวางแผนงานต่อเนื่อง",
      },
      {
        question: "รวมยิงแอด Google/Meta ไหม?",
        answer: "ไม่รวม — ยิงแอดดูแพ็ก Ads Starter ฿6,500/เดือน (ยกเลิกได้ทุกเดือน) แยกจาก SEO Add-on",
      },
      {
        question: "เว็บ + SEO ราคารวมเท่าไหร่?",
        answer: "เว็บ Starter ฿6,500 ครั้งเดียว + SEO Add-on ฿6,500/เดือน × 12 = ฿78,000 ปีแรก (บวกดูแลรายปี ฿4,500 ถ้าต้องการ)",
      },
      {
        question: "มีรายงานผลไหม?",
        answer: "ส่งรายงาน GSC + GBP Insights รายเดือน พร้อมคำแนะนำเดือนถัดไป",
      },
    ],
    relatedLinks: [
      { label: "แพ็กเว็บ Starter", href: "/packages/web-starter" },
      { label: "บริการ SEO ภูเก็ต", href: "/services/seo-phuket" },
      { label: "เปรียบเทียบราคา", href: "/pricing" },
    ],
  },
  lite: {
    id: "lite",
    path: packagePaths.lite,
    metaTitle: "แพ็ก SEO Lite ฿5,900 | GBP + แอดโปรโมต Maps ภูเก็ต",
    metaDescription:
      "SEO Lite ฿5,900/เดือน ค่าจัดการ — ดูแล Google Business Profile ยิงแอดโปรโมต GBP/Maps ขอรีวิว รายงานรายเดือน ค่ายิงแอดแยก ไม่รวมเว็บหรือ Meta",
    heroBadge: "แพ็กเริ่มต้น · Local Visibility + Paid Maps",
    heroTitle: "แพ็ก SEO Lite",
    heroHighlight: "Maps + แอด GBP",
    heroSubtitle: "฿5,900/เดือน (ค่าจัดการ) — ดูแล listing ยิงแอดโปรโมตบน Maps เน้นตำแหน่งบนสุด ค่ายิงแอดจ่าย Google แยก ไม่รวมเว็บหรือ Meta",
    answerBlock:
      "SEO Lite คือแพ็กรายเดือน ฿5,900 สำหรับดูแล Google Business Profile และจัดการแอดโปรโมต GBP/Maps — โพสต์ ขอรีวิว ปรับแคมเปญให้เห็นบนสุดใน local search ค่า ad spend แยก ไม่รวมทำเว็บ organic หรือ Meta Ads",
    heroImage: siteImages.blog.gmbPhuket,
    showcaseImage: siteImages.blog.gmbResults,
    showcaseCaption:
      "Lite ผสม organic (listing + รีวิว) กับแอดโปรโมต GBP — เห็นผลโทร/เส้นทางเร็วขึ้นเมื่อมีงบ ad spend (ผลจริงขึ้นกับโซนและงบ)",
    monthlyTitle: "จ่ายรายเดือน ฿5,900 แล้วได้อะไร?",
    monthlyIntro:
      "฿5,900 = ค่าจัดการ GBP + แอด ไม่รวมงบยิง — ทุกเดือนมี deliverable ตรวจได้จาก Google Business Profile และ Google Ads",
    monthOneItems: [
      "ตรวจและตั้ง Google Business Profile — verify, หมวดหมู่, NAP, รูป, เวลาเปิด",
      "แก้ listing ซ้ำหรือข้อมูลผิด (ถ้ามี)",
      "ส่งมอบ QR + template ขอรีวิวให้ทีมร้านใช้",
      "ตั้ง Google Ads แคมเปญโปรโมต GBP/Maps — โทร, ขอเส้นทาง, ดูโปรไฟล์ (ผูก listing)",
      "รายงาน baseline — GBP Insights + สถานะแคมเปญแอด",
    ],
    everyMonthItems: [
      "โพสต์บน Google Business Profile 2 ครั้ง/เดือน",
      "แคมเปญขอรีวิวจากลูกค้าจริง 1 รอบ/เดือน",
      "ตอบรีวิวและดูแลข้อมูล listing ต่อเนื่อง",
      "ดูแลและปรับ Google Ads แคมเปญ GBP/Maps — เน้นตำแหน่งบนสุดใน local search",
      "รายงานรวม GBP Insights + แอด — impression, โทร, เส้นทาง, ค่าใช้จ่าย/คลิกแอด",
    ],
    notIncluded: [
      "ค่า ad spend (งบยิงแอดจริง) — จ่ายให้ Google โดยตรง แนะนำขั้นต่ำ ~฿3,000–5,000/เดือน",
      "แอดปลายทาง landing — อยู่แพ็ก Pro",
      "Meta / Facebook Ads",
      "ทำหรือดูแลเว็บไซต์ — ต้องอัปเป็น SEO Pro หรือซื้อ setup เว็บแยก",
      "On-page SEO, บทความ blog, Technical SEO บนเว็บ",
      "Google Search Console / SEO organic บนเว็บ",
      "AEO / GEO / llms.txt / AI Overview structure",
      "การันตีอันดับ จำนวนลูกค้า หรือยอดขาย",
    ],
    worthItTitle: "฿5,900 + ad spend คุ้มไหม?",
    worthItPoints: [
      "ร้าน walk-in / โทร — เห็นผลโทรและเส้นทางเร็วกว่า organic อย่างเดียว เมื่อมีแอดโปรโมต GBP",
      "฿5,900 รวมทั้งดูแล listing และจัดการแอด — ไม่ต้องจ้างคนละ 2 ที่",
      "คุมงบ ad spend ได้เอง — หยุดแอดได้ แต่ listing + รีวิวยังดูแลต่อ",
      "เมื่อพร้อมมีเว็บ + organic — อัปเป็น Pro โดยไม่เสีย foundation บน Maps",
    ],
    idealFor: [
      { title: "ร้านอาหาร / สปา / คลินิก walk-in", desc: "ต้องการโผล่บน Maps เร็ว + สะสมรีวิวระยะยาว" },
      { title: "ยังไม่มีเว็บ หรือเว็บไม่สำคัญ", desc: "โฟกัสโทร/เส้นทางจาก Maps ไม่ต้องยิงแอดเว็บ" },
      { title: "อยากต่อสัญญายาว ด้วยผลที่วัดได้", desc: "เห็นตัวเลขโทร/แอดรายเดือน — ชั้นที่ 1 ของ Visibility Stack" },
    ],
    compareIntro: "Lite = Maps + แอด GBP — ต้องการเว็บ + แอด landing ดู Pro ต้องการ Meta ด้วย ดู Pro Max",
    compareCards: compareOthers("lite"),
    faqs: [
      {
        question: "SEO Lite ได้อะไรบ้าง?",
        answer:
          "ได้ดูแล Google Business Profile รายเดือน — โพสต์ ขอรีวิว จัดการ Google Ads โปรโมต GBP/Maps 1 แคมเปญ (เน้นตำแหน่งบนสุดใน local search) และรายงาน GBP + แอด รายเดือน ฿5,900 เป็นค่าจัดการ ค่ายิงแอดแยก ไม่รวมเว็บหรือ Meta",
      },
      {
        question: "Lite รวมค่ายิงแอดไหม?",
        answer:
          "ไม่รวม ฿5,900 คือค่าดูแล GBP + จัดการแคมเปญแอด งบ ad spend จ่ายให้ Google โดยตรง — แนะนำขั้นต่ำประมาณ ฿3,000–5,000/เดือนสำหรับ local/GBP",
      },
      {
        question: "แอดใน Lite ยิงอะไรได้บ้าง?",
        answer:
          "เฉพาะแอดโปรโมต Google Business Profile / Maps — เช่น โทร ขอเส้นทาง ดูโปรไฟล์ ใน local search ไม่รวมแอดปลายทาง landing (Search/PMax ไปเว็บ) หรือ Meta/Facebook Ads — อยู่แพ็ก Pro และ Pro Max ตามลำดับ",
      },
      {
        question: "SEO Lite รวมทำเว็บไหม?",
        answer:
          "ไม่รวม ค่า setup เว็บ (เช่น Landing ฿29,900) เป็นรายการแยก และการดูแลเว็บรายเดือนอยู่ในแพ็ก SEO Pro ฿8,900 หากต้องการทั้ง Maps และเว็บ แนะนำ Pro",
      },
      {
        question: "จ่าย ฿5,900 แล้วจะติดอันดับ 1 ไหม?",
        answer:
          "ไม่การันตีอันดับ organic — Lite มีแอดโปรโมต GBP ช่วยดันให้เห็นบนสุดใน Maps/local search เมื่อมีงบ ad spend ส่วน listing และรีวิวสะสมผลระยะยาว ผลจริงขึ้นกับโซน คู่แข่ง และงบแอด",
      },
      {
        question: "เดือนแรกทำอะไรบ้าง?",
        answer:
          "เดือนแรกเน้น setup — verify GBP แก้ NAP/หมวด/รูป ส่ง QR ขอรีวิว ตั้งแคมเปญแอด GBP/Maps ส่งรายงาน baseline โพสต์และแคมเปญรีวิวเริ่มในรอบ billing เดียวกัน",
      },
      {
        question: "ยกเลิกได้เมื่อไหร่?",
        answer: "ไม่มีสัญญาผูกมัด — แจ้งก่อนรอบบิลถัดไปเพื่อไม่ต่ออายุเดือนถัดไป",
      },
      {
        question: "เมื่อไหร่ควรอัปเป็น SEO Pro?",
        answer:
          "เมื่อ Maps พื้นฐานดีแล้ว แต่ต้องการเว็บ organic content หรือ AI Search — Pro รวมทุกอย่างใน Lite + งานฝั่งเว็บ",
      },
    ],
    relatedLinks: [
      { label: "Google Ads vs SEO", href: "/blog/google-ads-vs-seo-phuket" },
      { label: "Google Business Profile คืออะไร", href: "/blog/google-my-business-phuket" },
      { label: "Near Me SEO ภูเก็ต", href: "/blog/near-me-seo-phuket" },
      { label: "Phuket Visibility Stack", href: "/methodology/phuket-visibility-stack" },
    ],
  },

  pro: {
    id: "pro",
    path: packagePaths.pro,
    metaTitle: "แพ็ก SEO Pro ฿8,900 | เว็บ + SEO + แอด Landing ภูเก็ต",
    metaDescription:
      "SEO Pro ฿8,900/เดือน รวม Lite + ดูแลเว็บ On-page SEO บทความ Google Ads ยิง landing 1 หน้า AEO/GEO — ค่ายิงแอดแยก ไม่มี Meta",
    heroBadge: "แนะนำ · Owned Asset + Paid Landing",
    heroTitle: "แพ็ก SEO Pro",
    heroHighlight: "เว็บ + SEO + แอด Landing",
    heroSubtitle: "฿8,900/เดือน (ค่าจัดการ) — รวม Lite บวกเว็บ organic/AEO/GEO และ Google Ads ยิง landing 1 หน้า ค่ายิงแอดแยก ไม่มี Meta",
    answerBlock:
      "SEO Pro คือแพ็กรายเดือน ฿8,900 ที่รวม SEO Lite (GBP + แอด Maps) งานเว็บ — on-page บทความ AEO/GEO และ Google Ads 1 แคมเปญปลายทาง landing 1 หน้า ค่า ad spend แยก ไม่รวม Meta Ads",
    heroImage: siteImages.blog.seoPhuketPillar,
    showcaseImage: siteImages.blog.seoPhuketStack,
    showcaseCaption:
      "Phuket Visibility Stack — Pro ครอบคลุมชั้น Local Visibility + Owned Asset (เว็บ, organic, AEO/GEO)",
    monthlyTitle: "จ่ายรายเดือน ฿8,900 แล้วได้อะไร?",
    monthlyIntro:
      "฿8,900 = ค่าจัดการ ไม่รวมงบยิง — ได้ทั้ง Maps (Lite) เว็บ organic และแอด Google ไป landing 1 หน้า",
    monthOneItems: [
      "ทุกอย่างในเดือนแรกของ SEO Lite (GBP setup + แอด Maps + ระบบรีวิว)",
      "Audit เว็บ — technical, on-page, indexing (GSC)",
      "ส่ง sitemap + verify Google Search Console (ถ้ายังไม่มี)",
      "ตั้งหรือปรับ landing 1 หน้าสำหรับ ads",
      "ตั้ง Google Ads 1 แคมเปญปลายทาง landing + conversion tracking",
      "วางแผน content + query เป้าหมายจาก audit และ GSC (ถ้ามีข้อมูล)",
      "llms.txt + FAQ/answer block บนหน้าสำคัญ (ถ้ายังไม่มี)",
    ],
    everyMonthItems: [
      "ทุกอย่างใน SEO Lite รายเดือน (GBP, รีวิว, แอดโปรโมต Maps, รายงาน)",
      "ดูแลและอัปเดตเว็บ 2 หน้า/เดือน",
      "On-page SEO 10 หน้า/เดือน (title, meta, internal link, โครงสร้าง)",
      "บทความ SEO 1 ชิ้น/เดือน (publish บนเว็บลูกค้า)",
      "AEO: FAQ schema + answer blocks บนหน้าที่แก้",
      "GEO: อัปเดต entity / llms.txt เมื่อมีหน้าใหม่",
      "ดูแลและปรับ Google Ads แคมเปญ landing 1 หน้า",
      "รายงานรวม GBP + GSC + แอด landing — query, click, indexing, ค่าใช้จ่ายแอด",
    ],
    notIncluded: [
      "ค่า ad spend (งบยิงแอด GBP + Google landing) — จ่าย Google โดยตรง",
      "ค่า setup เว็บครั้งแรก (฿29,900+) — ถ้ายังไม่มีเว็บ ต้องทำก่อนหรือคู่กับ Pro",
      "Meta / Facebook Ads — อยู่แพ็ก Pro Max",
      "ติดตามอันดับ keyword รายวัน (rank tracker แยก)",
      "การันตีอันดับหรือจำนวน lead",
      "เนื้อหาภาษาอังกฤษจำนวนมาก — คุย scope แยก",
    ],
    worthItTitle: "฿8,900/เดือน คุ้มกว่า Lite ยังไง?",
    worthItPoints: [
      "SME ที่มีเว็บ — ได้ทั้ง organic สะสมและ lead จากแอด landing โดยไม่ต้องอัป Max",
      "บทความ 1 ชิ้น/เดือน + on-page 10 หน้า = asset compound คู่กับแอดที่ยิงไปหน้าเดียว convert ชัด",
      "AEO/GEO เตรียมโครงสร้างให้ AI อ่านได้ — ไม่การันตีติด AI Overview",
      "รายงาน GSC บอก query ที่คนค้นหาแล้วคลิกเข้าเว็บ — ไม่ใช่ rank tracker รายวัน",
    ],
    idealFor: [
      { title: "SME มีเว็บหรือกำลังทำเว็บ", desc: "ต้องการทั้ง Maps และ organic search" },
      { title: "โรงแรม / ทัวร์ / อสังหาฯ", desc: "ลูกค้าเปรียบเทียบหลายแห่งก่อนจอง" },
      { title: "อยากเตรียม AEO/GEO สำหรับ AI Search", desc: "FAQ schema, answer blocks, llms.txt บนเว็บจริง" },
    ],
    compareIntro: "Pro = Lite + เว็บ + แอด landing — ต้องการ Meta ด้วย อัป Pro Max",
    compareCards: compareOthers("pro"),
    faqs: [
      {
        question: "SEO Pro ต่างจาก Lite อย่างไร?",
        answer:
          "Pro รวมทุกอย่างใน Lite (GBP + แอด Maps) และเพิ่มงานเว็บ — on-page บทความ AEO/GEO Google Ads ยิง landing 1 หน้า 1 แคมเปญ และรายงาน GSC + แอด ไม่มี Meta",
      },
      {
        question: "Pro รวมค่ายิงแอดไหม?",
        answer:
          "ไม่รวม ฿8,900 คือค่าจัดการ งบ ad spend แยก — มี 2 ส่วน: แอดโปรโมต GBP/Maps (จาก Lite) และแอด Google ไป landing 1 หน้า จ่ายให้ Google โดยตรง",
      },
      {
        question: "Pro มี Meta Ads ไหม?",
        answer: "ไม่มี — Pro มีแอด GBP (Lite) + Google Ads ไป landing 1 หน้าเท่านั้น Meta Ads อยู่แพ็ก Pro Max",
      },
      {
        question: "ยังไม่มีเว็บ สมัคร Pro ได้ไหม?",
        answer:
          "ได้ — ต้องมีค่า setup เว็บครั้งเดียว (เช่น Landing 5 หน้า ฿29,900) จากนั้นดูแลรายเดือนรวมใน Pro ฿8,900 หรือเริ่ม Lite ก่อนจนกว่า Maps พร้อม",
      },
      {
        question: "บทความ 1 ชิ้น/เดือน เขียนเรื่องอะไร?",
        answer:
          "เน้น keyword ในโซนภูเก็ตที่ตรงธุรกิจ — ปัญหาลูกค้า บริการ หรือ local intent หัวข้อวางจาก audit และ GSC ไม่ใช่บทความทั่วไป copy มา",
      },
      {
        question: "AEO/GEO ใน Pro ได้อะไรจริง?",
        answer:
          "FAQ schema และ answer blocks บนหน้าที่แก้ llms.txt อธิบายธุรกิจให้ AI crawler entity ที่สอดคล้อง NAP/เกี่ยวกับเรา — ไม่ใช่การันตีติด AI Overview",
      },
      {
        question: "รายงาน Pro มีอะไรบ้าง?",
        answer:
          "รวมรายงาน Lite (GBP + แอด Maps) GSC และแอด landing — query, click, indexing ค่าใช้จ่ายแอด และสรุปงานที่ทำในเดือน",
      },
      {
        question: "ควรเลือก Pro หรือ Pro Max?",
        answer:
          "Pro เพียงพอถ้าโฟกัส Maps + เว็บ + แอด Google ไป landing Pro Max เมื่อต้องการเพิ่ม Meta Ads และบทความ 2 ชิ้น/เดือน",
      },
    ],
    relatedLinks: [
      { label: "รับทำ Google Ads ภูเก็ต", href: "/services/google-ads" },
      { label: "บริการ SEO ภูเก็ต", href: "/services/seo-phuket" },
      { label: "AI Search Visibility", href: "/services/ai-search-visibility" },
      { label: "ราคา SEO ภูเก็ต (บทความ)", href: "/blog/raaka-seo-phuket" },
    ],
  },

  max: {
    id: "max",
    path: packagePaths.max,
    metaTitle: "แพ็ก SEO Pro Max ฿15,000 | GBP + Google + Meta Ads ภูเก็ต",
    metaDescription:
      "SEO Pro Max ฿15,000/เดือน รวม Pro + Meta Ads — จัดการแอด GBP, Google (landing), Meta อย่างละ 1 แคมเปญ บทความ 2 ชิ้น ad spend แยก",
    heroBadge: "Acceleration · GBP + Google + Meta",
    heroTitle: "แพ็ก SEO Pro Max",
    heroHighlight: "แอดครบ 3 ช่องทาง",
    heroSubtitle: "฿15,000/เดือน (ค่าจัดการ) — รวม Pro บวก Meta Ads จัดการแอด GBP + Google landing + Meta อย่างละ 1 แคมเปญ",
    answerBlock:
      "SEO Pro Max คือแพ็ก management ฿15,000/เดือน ที่รวม SEO Pro ทั้งหมด บทความ 2 ชิ้น/เดือน และเพิ่ม Meta Ads 1 แคมเปญ — รวมจัดการแอด GBP/Maps, Google Ads ไป landing และ Meta อย่างละ 1 แคมเปญ ค่า ad spend แยก",
    heroImage: siteImages.services.googleAds,
    showcaseImage: siteImages.blog.hotelResults,
    showcaseCaption:
      "Pro Max จัดการแอดครบ 3 ช่องทาง — GBP/Maps, Google landing, Meta — พร้อม organic ระยะยาว (ผลจริงขึ้นกับงบและโซน)",
    monthlyTitle: "จ่ายรายเดือน ฿15,000 แล้วได้อะไร?",
    monthlyIntro:
      "฿15,000 = ค่าจัดการ ไม่รวมงบยิง — ได้ทุกอย่างใน Pro บวก Meta Ads และรายงานรวม 3 ช่องทางแอด",
    monthOneItems: [
      "ทุกอย่างในเดือนแรกของ SEO Pro (GBP + แอด Maps + เว็บ + แอด landing)",
      "วิเคราะห์โซนและคู่แข่งสำหรับ Meta + cross-channel",
      "ตั้ง Meta Ads 1 แคมเปญ + pixel/conversion tracking",
      "ผูก creative และ audience ให้สอดคล้อง landing + GBP",
    ],
    everyMonthItems: [
      "ทุกอย่างใน SEO Pro รายเดือน (รวมแอด GBP + Google landing)",
      "บทความ SEO 2 ชิ้น/เดือน (แทน 1 ใน Pro)",
      "ดูแลและ optimize Meta Ads 1 แคมเปญ",
      "ปรับ landing + ad copy ข้ามช่องทางตามผลจริง",
      "รายงาน ROAS รวม GBP + Google + Meta + organic ในไฟล์เดียว",
      "ประชุมสรุปหรือสรุปรายงานรายเดือน (ตามที่ตกลง)",
    ],
    notIncluded: [
      "ค่า ad spend — GBP/Google/Meta จ่ายแพลตฟอร์มโดยตรง แนะนำรวมขั้นต่ำ ~฿15,000+/เดือน แยกจาก ฿15,000",
      "แคมเปญเกิน 1 ต่อช่องทาง (GBP / Google / Meta) — คุยเพิ่ม scope",
      "การันตี ROAS หรือจำนวน lead",
      "Production วิดีโอโฆษณาระดับ agency ใหญ่ — ใช้ creative ตาม scope ที่ตกลง",
    ],
    worthItTitle: "฿15,000 + ad spend คุ้มไหม?",
    worthItPoints: [
      "เหมาะ high season / เปิดโปรใหม่ — ต้องการ lead ทันที แต่ไม่เลิกทำ SEO",
      "ได้ครบ 3 ช่องทางแอด — GBP/Maps, Google landing, Meta — อย่างละ 1 แคมเปญ บทความ 2 ชิ้น และรายงาน ROAS รวม",
      "ต้องมี foundation (Maps/เว็บ) ก่อน — ยิง Ads โดย listing แย่ = เสียงบ",
      "ถ้างบแอดต่ำกว่า min แนะนำ Pro ก่อน สะสม organic แล้วค่อยเพิ่ม Ads",
    ],
    idealFor: [
      { title: "โรงแรม / รีสอร์ท / ทัวร์", desc: "ซีซัน peak ต้องการ booking เร็ว + organic ระยะยาว" },
      { title: "ต้องการ lead จากทุกช่องทาง", desc: "Maps + Google Search + Facebook/Instagram" },
      { title: "มีงบ ad spend แยก", desc: "management ฿15,000 + โฆษณาจริง min ~฿15,000/เดือน" },
    ],
    compareIntro: "Pro Max ไม่ใช่จุดเริ่มต้น — ยังไม่มี Maps/เว็บ ดู Lite หรือ Pro ก่อน",
    compareCards: compareOthers("max"),
    faqs: [
      {
        question: "Pro Max รวมค่าโฆษณาไหม?",
        answer:
          "ไม่รวม ฿15,000 คือค่าจัดการ SEO + Ads ทั้ง 3 ช่องทาง งบ ad spend จ่าย GBP/Google/Meta โดยตรง — แนะนำรวมขั้นต่ำประมาณ ฿15,000+/เดือน",
      },
      {
        question: "Pro Max ได้อะไรมากกว่า Pro?",
        answer:
          "ได้ Meta Ads 1 แคมเปญ บทความ 2 ชิ้น/เดือน (แทน 1) และรายงาน ROAS รวม 3 ช่องทาง — Pro มีแอด GBP + Google landing อยู่แล้ว Max เพิ่ม Meta ให้ครบ",
      },
      {
        question: "Pro Max จัดการแอดกี่แคมเปญ?",
        answer:
          "อย่างละ 1 แคมเปญต่อช่องทาง — แอดโปรโมต GBP/Maps, Google Ads ไป landing 1 หน้า, และ Meta Ads รวม 3 แคมเปญ (ค่ายิงแอดแยก)",
      },
      {
        question: "ยกเลิกแพ็กแล้ว Ads หยุดไหม?",
        answer:
          "แจ้งก่อนรอบบิล — หยุด management ได้ แต่แคมเปญและบัญชีโฆษณาเป็นของลูกค้า ควรปิดหรือโอนจัดการเอง",
      },
      {
        question: "Organic ยังทำต่อไหมใน Pro Max?",
        answer:
          "ใช่ — Pro Max ไม่เลิก SEO รวมทุก deliverable ของ Pro บทความเพิ่มเป็น 2 ชิ้น Ads เป็นเลเยอร์เร่งผล",
      },
    ],
    relatedLinks: [
      { label: "รับทำ Google Ads ภูเก็ต", href: "/services/google-ads" },
      { label: "Google Ads vs SEO", href: "/blog/google-ads-vs-seo-phuket" },
      { label: "เปรียบเทียบราคาทุกแพ็ก", href: "/pricing" },
    ],
  },
};

export function getPackagePage(id: PackagePageId): PackagePageContent {
  return packagePagesContent[id];
}

export function getPackagePricing(id: PackagePageId): PricingPackage {
  return pkg(id);
}

export function packageContactHref(id: PackagePageId): string {
  return planContactHref(id);
}

export const allPackagePageIds: PackagePageId[] = [
  "ads-starter",
  "web-starter",
  "annual-care",
  "seo-addon",
  "lite",
  "pro",
  "max",
];
