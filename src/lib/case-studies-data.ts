import { siteConfig } from "@/lib/utils";

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  duration: string;
  challenge: string;
  approach: string[];
  results: { metric: string; label: string }[];
  services: string[];
  quote?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "phuketseo-website-rebuild",
    title: "PhuketSEO.com — Rebuild ด้วย Next.js + AEO/GEO",
    client: "PhuketSEO (เว็บตัวเอง)",
    industry: "SEO Agency",
    duration: "Phase 1–2 (2026)",
    challenge:
      "เว็บเดิม positioning กระจาย (full-service agency) ไม่ชัดว่าขายอะไร ราคาไม่ตรงแพ็กจริง และยังไม่มีโครงสร้าง AEO/GEO",
    approach: [
      "Reposition เป็น SEO + เว็บ + AI Search สำหรับ SME ภูเก็ต",
      "สร้างแพ็ก Lite/Pro/Pro Max ฿5,900–15,000",
      "เพิ่ม answer blocks, FAQ schema, llms.txt",
      "Pillar content: SEO ภูเก็ต, Local SEO, ราคา SEO",
      "Industry pages: ร้านอาหาร, สปา",
    ],
    results: [
      { metric: "3", label: "แพ็กราคาชัด" },
      { metric: "11+", label: "หน้า SEO-ready" },
      { metric: "AEO", label: "FAQ + llms.txt" },
      { metric: "2 สัปดาห์", label: "Phase 1 live" },
    ],
    services: ["Next.js", "SEO", "AEO/GEO", "Content"],
    quote: "เว็บ agency ต้องเป็น case study ของตัวเอง — ถ้าเราไม่ทำ AEO บนเว็บเรา ลูกค้าจะเชื่อเราได้อย่างไร",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}

export function caseStudyJsonLd(study: CaseStudy) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.challenge,
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    about: {
      "@type": "Thing",
      name: study.industry,
    },
  };
}
