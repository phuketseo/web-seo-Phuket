import type { SiteImage } from "@/lib/images";
import { siteImages } from "@/lib/images";
import type { PricingPackage } from "@/lib/pricing-packages";
import { planContactHref, pricingPackages } from "@/lib/pricing-packages";

export type PackagePageId = "lite" | "pro" | "max";

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
};

const pkg = (id: PackagePageId) => pricingPackages.find((p) => p.id === id)!;

const compareOthers = (current: PackagePageId): PackageCompareCard[] => {
  const all: PackagePageId[] = ["lite", "pro", "max"];
  return all
    .filter((id) => id !== current)
    .map((id) => {
      const p = pkg(id);
      const hooks: Record<PackagePageId, string> = {
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
  lite: "/packages/seo-lite",
  pro: "/packages/seo-pro",
  max: "/packages/seo-pro-max",
};

export const packagePagesContent: Record<PackagePageId, PackagePageContent> = {
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
      { label: "บริการ Google Ads ภูเก็ต", href: "/services/google-ads" },
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
      { label: "บริการ Google Ads ภูเก็ต", href: "/services/google-ads" },
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

export const allPackagePageIds: PackagePageId[] = ["lite", "pro", "max"];
