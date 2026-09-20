import { siteConfig } from "@/lib/utils";

export type CaseStudyMetric = { metric: string; label: string };

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  /** เว็บจริงของลูกค้า — ให้ผู้อ่านและ AI ตรวจสอบผลงานได้ */
  clientUrl?: string;
  industry: string;
  duration: string;
  isOwnProject?: boolean;
  challenge: string;
  approach: string[];
  deliverables: CaseStudyMetric[];
  outcomes: CaseStudyMetric[];
  /** ช่วงเวลาที่เก็บตัวเลขใน outcomes */
  outcomesPeriod?: string;
  services: string[];
  quote?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "phuketseo-website-rebuild",
    title: "PhuketSEO.com — Rebuild ด้วย Next.js + AEO/GEO",
    client: "PhuketSEO.com",
    industry: "SEO Agency · เว็บตัวเอง",
    duration: "Phase 1–2 (2026)",
    isOwnProject: true,
    challenge:
      "เว็บเดิม positioning กระจาย (full-service agency) ไม่ชัดว่าขายอะไร ราคาไม่ตรงแพ็กจริง และยังไม่มีโครงสร้าง AEO/GEO",
    approach: [
      "Reposition เป็น SEO + เว็บ + AI Search สำหรับ SME ภูเก็ต",
      "สร้างแพ็ก Lite/Pro/Pro Max ฿5,900–15,000",
      "เพิ่ม answer blocks, FAQ schema, llms.txt",
      "Pillar content: SEO ภูเก็ต, Local SEO, ราคา SEO",
      "Industry pages: ร้านอาหาร, สปา, โรงแรม",
    ],
    deliverables: [
      { metric: "3", label: "แพ็กราคาชัด" },
      { metric: "11+", label: "หน้า SEO-ready" },
      { metric: "AEO", label: "FAQ + llms.txt" },
      { metric: "2 สัปดาห์", label: "Phase 1 live" },
    ],
    outcomes: [
      { metric: "95+", label: "PageSpeed score" },
      { metric: "CWV", label: "Core Web Vitals ผ่าน" },
      { metric: "18", label: "บทความ/หน้า blog" },
      { metric: "Schema", label: "FAQ + LocalBusiness" },
    ],
    services: ["Next.js", "SEO", "AEO/GEO", "Content"],
    quote:
      "เว็บ agency ต้องเป็น case study ของตัวเอง — ถ้าเราไม่ทำ AEO บนเว็บเรา ลูกค้าจะเชื่อเราได้อย่างไร",
  },
  {
    slug: "hob-thai-massage-cherngtalay",
    title: "HOB Thai Massage — เว็บและแอดที่จับคำค้น massage near me",
    client: "HOB Thai Massage",
    clientUrl: "https://hobthaimassage.com",
    industry: "ร้านนวด · เชิงทะเล ถลาง",
    duration: "เริ่มมิถุนายน 2026",
    challenge:
      "ร้านอยู่บนถนนบ่อนตรงข้าม Porto de Phuket ห่างหาดบางเทาแค่ 5 นาที แต่นักท่องเที่ยวที่ค้น massage near me บนมือถือเห็นร้านแถว Boat Avenue ก่อนเสมอ และยังไม่มีหน้าเว็บที่บอกราคาให้ตัดสินใจได้ในครั้งเดียว",
    approach: [
      "ทำเว็บภาษาอังกฤษ mobile-first ให้ตรงกับนักท่องเที่ยวที่ค้นหาตอนอยู่ในโซนแล้ว",
      "แสดงราคาทุกคอร์สแบบเปิดเผย ตั้งแต่นวดเท้า ฿400 ถึงนวดหินร้อน ฿1,500",
      "ทำหน้าบอกตำแหน่งด้วย landmark ที่นักท่องเที่ยวรู้จัก คือ Porto de Phuket, Boat Avenue และ Laguna",
      "ใส่ NAP เวลาเปิด 10:00 ถึง 24:00 และ FAQ ให้ตรงกับ Google Business Profile",
      "ยิงแอด Google Search คู่กับเว็บ โดยเน้นคำค้นใกล้ฉันในรัศมีรอบร้าน",
    ],
    deliverables: [
      { metric: "12", label: "คอร์สพร้อมราคา" },
      { metric: "EN", label: "เว็บสำหรับนักท่องเที่ยว" },
      { metric: "NAP", label: "ตรงกับ Google Maps" },
      { metric: "1", label: "แคมเปญ Search" },
    ],
    outcomes: [
      { metric: "81", label: "Conversion" },
      { metric: "฿36", label: "ต้นทุนต่อ Conversion" },
      { metric: "21.8%", label: "อัตรา Conversion" },
      { metric: "8.4%", label: "CTR โฆษณา" },
    ],
    outcomesPeriod: "Google Ads 21 ส.ค. – 19 ก.ย. 2026 (30 วัน) งบ ฿2,920",
    services: ["เว็บไซต์", "Google Ads", "Local SEO"],
  },
  {
    slug: "house-of-beauty-phuket-8-branches",
    title: "House of Beauty — เว็บรวม 8 สาขา ให้ลูกค้าหาสาขาใกล้ตัวเจอ",
    client: "House of Beauty Phuket",
    clientUrl: "https://houseofbeautyphuket.com",
    industry: "ร้านเสริมสวย · 8 สาขาทั่วภูเก็ต",
    duration: "เริ่มมิถุนายน 2026",
    challenge:
      "มี 8 สาขากระจายตั้งแต่ป่าตองถึงราไวย์ แต่แต่ละสาขาใช้ชื่อต่างกัน ทั้ง House of Beauty, H.O.B, Perfect Hair และ Little H.O.B. ลูกค้าที่เจอสาขาหนึ่งจึงไม่รู้ว่ามีสาขาอื่นใกล้กว่า และไม่มีจุดรวมให้จอง",
    approach: [
      "ทำหน้าเดียวรวมทั้ง 8 สาขา พร้อมลิงก์ Google Maps แยกรายสาขา",
      "ให้จองผ่าน WhatsApp โดยไม่ต้องจ่ายล่วงหน้า ลดแรงเสียดทานสำหรับนักท่องเที่ยว",
      "แสดงราคาเริ่มต้น 400 บาท และแยกบริการเป็น 7 หมวดให้เทียบง่าย",
      "ใส่แกลเลอรีผลงานจริงและรีวิวลูกค้าที่มีอยู่แล้วบน Google",
      "ยิงแอด Google Search พร้อม location asset ครบทุกสาขา เพื่อให้คนเห็นสาขาที่ใกล้ตัวที่สุด",
    ],
    deliverables: [
      { metric: "8", label: "สาขาพร้อมลิงก์ Maps" },
      { metric: "7", label: "หมวดบริการ" },
      { metric: "WhatsApp", label: "ช่องทางจอง" },
      { metric: "฿400", label: "ราคาเริ่มต้นที่แสดง" },
    ],
    outcomes: [
      { metric: "151", label: "ครั้งที่ขอเส้นทางไปสาขา" },
      { metric: "25", label: "คลิกโทรจากโฆษณา" },
      { metric: "65", label: "เข้าเว็บจากข้อมูลสาขา" },
      { metric: "8.6%", label: "CTR โฆษณา" },
    ],
    outcomesPeriod: "Google Ads 21 ส.ค. – 19 ก.ย. 2026 (30 วัน) งบ ฿2,491",
    services: ["เว็บไซต์", "Google Ads", "Local SEO"],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}

export function caseStudyJsonLd(study: CaseStudy) {
  const pageUrl = `${siteConfig.url}/case-studies/${study.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.challenge,
    url: pageUrl,
    mainEntityOfPage: pageUrl,
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    about: [
      { "@type": "Thing", name: study.industry },
      ...(study.clientUrl
        ? [
            {
              "@type": "WebSite",
              name: study.client,
              url: study.clientUrl,
              creator: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
            },
          ]
        : []),
    ],
  };
}
