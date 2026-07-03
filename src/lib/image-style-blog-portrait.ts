/**
 * Blog Portrait Infographic — mobile-first 9:16 (PhuketSEO Smooth Purple)
 *
 * ออกแบบให้อ่านบนมือถือก่อน แสดงใน blog แบบ grid 2 คอลัมน์บน desktop
 * อ้างอิง layout แนว Work360: หัวข้อใหญ่ → การ์ดซ้อนลง → footer แบรนด์
 *
 * ขนาด: 9:16 → 1536×2730 px (upscale 2160×3840)
 * ใช้ compose-phuketseo-brand-bar.mjs ก่อน upscale
 */

import { smoothPurpleColors, smoothPurpleNegativePrompt } from "@/lib/image-style-smooth-purple";

export type BlogPortraitCard = {
  title: string;
  description: string;
};

export type BlogPortraitPromptInput = {
  /** หัวข้อหลัก (ไทย) — keyword gradient */
  headlinePrimary: string;
  /** บรรทัดรอง navy */
  headlineSecondary?: string;
  /** badge เช่น Industry Guide */
  badge?: string;
  /** การ์ดเนื้อหา 3–6 ใบ เรียงแนวตั้ง */
  cards: BlogPortraitCard[];
  /** ไอคอน 3D ด้านบนขวา (อธิบายสั้น EN) */
  heroVisual?: string;
  /** กล่องสรุปท้าย (optional) */
  summaryLine?: string;
};

const PORTRAIT_STYLE = `
STYLE — PhuketSEO Smooth Purple Portrait (mobile-first 9:16):
- Bright off-white background ${smoothPurpleColors.background} covering 85%+ of canvas, high-key lighting.
- Subtle mesh blobs teal→indigo→violet at 8–15% opacity only. NO dark backgrounds.
- White frosted glass cards, 20px rounded corners, soft ambient shadow.
- VERTICAL layout: content stacked top-to-bottom for phone scrolling.
- Large legible Thai sans-serif — headline must read clearly at phone width.
- Leave empty bottom strip 90px (no logo/text) for PhuketSEO brand bar overlay.
- ${smoothPurpleNegativePrompt}
`.trim();

function cardsBlock(cards: BlogPortraitCard[]): string {
  return cards
    .map(
      (card, i) =>
        `CARD ${i + 1}: numbered blue circle "${i + 1}", bold Thai title "${card.title}", 1-2 line description "${card.description}", small 3D icon left of title.`
    )
    .join("\n");
}

/**
 * Prompt EN สำหรับสร้างอินโฟกราฟิคแนวตั้ง 9:16
 */
export function buildBlogPortraitPrompt(input: BlogPortraitPromptInput): string {
  const badge = input.badge
    ? `Pill badge below headline: "${input.badge}" soft purple gradient.`
    : "";
  const secondary = input.headlineSecondary
    ? `Subtitle navy ${smoothPurpleColors.navy}: "${input.headlineSecondary}".`
    : "";
  const hero = input.heroVisual
    ? `TOP RIGHT: small 3D illustration — ${input.heroVisual}`
    : "";
  const summary = input.summaryLine
    ? `BOTTOM (above brand margin): soft purple summary bar with Thai text "${input.summaryLine}".`
    : "";

  return `
Thai B2B marketing infographic, vertical portrait 9:16 aspect ratio, 1536x2730 pixels.
${PORTRAIT_STYLE}

HEADER (top 22%):
- Large Thai headline, purple-indigo gradient: "${input.headlinePrimary}".
${secondary}
${badge}
${hero}

BODY (middle 65%): vertical stack of ${input.cards.length} equal-width glass cards with spacing:
${cardsBlock(input.cards)}

${summary}

Output: crisp vector-flat illustration, export quality, no watermark, no logo in image.
`.trim();
}

/** ตัวอย่าง — ใช้ copy ใน image briefs */
export const exampleBlogPortraitPrompt = buildBlogPortraitPrompt({
  headlinePrimary: "การตลาดร้านนวดแผนไทย",
  headlineSecondary: "หาลูกค้าใหม่บน Google Maps",
  badge: "Industry Guide",
  cards: [
    { title: "Google Maps 35–50%", description: "ลูกค้าใหม่ในโซนท่องเที่ยวค้นหา near me" },
    { title: "รีวิวมีข้อความ", description: "ดาวเปล่าน้อยกว่ารีวิวที่พูดถึงความสะอาดและมือนวด" },
    { title: "ราคาชัดหน้าร้าน", description: "ออนไลน์ต้องตรงกับหน้าร้าน" },
    { title: "LINE ตอบภายใน 1 ชม.", description: "lead หายใน 30 นาทีถ้าไม่ตอบ" },
  ],
  heroVisual: "smartphone showing Google Maps massage search with star ratings",
  summaryLine: "เริ่มจากความน่าเชื่อถือก่อนยิงแอด",
});
