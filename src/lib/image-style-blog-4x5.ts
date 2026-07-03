/**
 * Blog Infographic 4:5 — Facebook native post + inline portrait (PhuketSEO Smooth Purple)
 *
 * สัดส่วน 4:5 → 1080×1350 (publish) · 1440×1800 (retina upscale)
 * ออกแบบให้อ่านใน Facebook feed และย่อเหลือ ~420px ในบทความ
 */

import { smoothPurpleColors, smoothPurpleNegativePrompt } from "@/lib/image-style-smooth-purple";
import type { BlogPortraitCard, BlogPortraitPromptInput } from "@/lib/image-style-blog-portrait";

export const BLOG_4X5_GEN_SIZE = { width: 1080, height: 1350 } as const;
export const BLOG_4X5_RETINA_SIZE = { width: 1440, height: 1800 } as const;

const STYLE_4X5 = `
STYLE — PhuketSEO Smooth Purple 4:5 (Facebook feed + blog inline):
- EXACT canvas 1080×1350 portrait — content MUST bleed to left and right edges (full width).
- NO outer white/grey margin around the design. NO floating card centered on empty canvas.
- Background ${smoothPurpleColors.background} or purple gradient header flush to top edge.
- Subtle mesh blobs teal→indigo→violet at 8–15% opacity. NO dark backgrounds.
- White frosted glass cards, 18px rounded corners — stacked VERTICALLY only (never 4-column row).
- Compact vertical layout — max 4 cards, large legible Thai sans-serif.
- Text must be sharp and readable when image is 420px wide.
- Reserve empty bottom strip 90px (no logo/text) for PhuketSEO brand bar overlay.
- ${smoothPurpleNegativePrompt}
`.trim();

function cardsBlock(cards: BlogPortraitCard[]): string {
  return cards
    .map(
      (card, i) =>
        `CARD ${i + 1}: numbered circle "${i + 1}", bold Thai "${card.title}", subtext "${card.description}", small 3D icon.`
    )
    .join("\n");
}

/** Prompt EN สำหรับ infographic 4:5 */
export function buildBlog4x5Prompt(input: BlogPortraitPromptInput): string {
  const badge = input.badge ? `Pill badge: "${input.badge}" soft purple gradient.` : "";
  const secondary = input.headlineSecondary
    ? `Subtitle navy: "${input.headlineSecondary}".`
    : "";
  const hero = input.heroVisual ? `TOP RIGHT: 3D illustration — ${input.heroVisual}` : "";
  const summary = input.summaryLine
    ? `BOTTOM summary chip Thai: "${input.summaryLine}".`
    : "";

  return `
Thai B2B marketing infographic, 4:5 portrait aspect ratio, 1080x1350 pixels.
${STYLE_4X5}

HEADER (top 28%):
- Large Thai headline purple-indigo gradient: "${input.headlinePrimary}".
${secondary}
${badge}
${hero}

BODY: ${input.cards.length} glass cards stacked vertically:
${cardsBlock(input.cards)}

${summary}

Crisp vector-flat, no watermark, no logo in image.
FULL BLEED: design touches left and right canvas edges. No empty side margins.
`.trim();
}
