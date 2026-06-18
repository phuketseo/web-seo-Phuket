/**
 * Smooth Purple — มาตรฐานภาพ PhuketSEO v2 (2026)
 *
 * ต่อจาก Clean Purple แต่:
 * - gradient นุ่มแบบ Canva (teal → blue → indigo → violet)
 * - mesh/blob พื้นหลัง + glass card
 * - เงา soft ambient (ไม่ hard shadow)
 * - ไม่มี mascot/คน — ใช้ mockup UI เหมือนเดิม
 *
 * ไฟล์ใหม่: suffix `-smooth.png`
 * Blog hero: 3:2 → 2304×1536 | Site hero: 16:9 → 2560×1440
 */

export const smoothPurpleColors = {
  navy: "#1e3a8a",
  blue: "#2563eb",
  indigo: "#6366f1",
  violet: "#7c3aed",
  purple: "#8b5cf6",
  teal: "#06b6d4",
  cyan: "#22d3ee",
  background: "#f8fafc",
  backgroundAlt: "#f0f4ff",
  card: "#ffffff",
  codePanel: "#1e293b",
  accent: {
    purple: "#8b5cf6",
    orange: "#f97316",
    green: "#22c55e",
    blue: "#3b82f6",
  },
} as const;

/** Canva-like multi-stop gradients (ใช้ใน prompt / CSS mockup) */
export const smoothPurpleGradients = {
  /** โลโก้ Canva ใกล้เคียง: teal → blue → purple */
  brandMesh:
    "linear-gradient(135deg, #06b6d4 0%, #3b82f6 35%, #6366f1 65%, #8b5cf6 100%)",
  heroBlob:
    "radial-gradient(ellipse 80% 60% at 85% 15%, rgba(99,102,241,0.18) 0%, transparent 70%)",
  footerBar:
    "linear-gradient(90deg, #2563eb 0%, #6366f1 50%, #7c3aed 100%)",
  headlineText:
    "linear-gradient(135deg, #6366f1 0%, #7c3aed 50%, #8b5cf6 100%)",
} as const;

export const smoothPurpleNegativePrompt = [
  "photorealistic human face",
  "dark muddy background",
  "harsh black shadows",
  "neon cyberpunk",
  "cluttered layout",
  "illegible Thai text",
  "wrong Thai spelling",
  "watermark",
  "stock photo",
  "3D plastic render",
  "sharp angular design",
  "other brand logos",
].join(", ");

export type SmoothPurpleImageType = "blog-hero" | "blog-inline" | "site-hero";

export type SmoothPurplePromptInput = {
  /** บรรทัดหัวข้อหลัก (ไทย) — keyword จะได้ gradient */
  headlinePrimary: string;
  /** บรรทัดรอง (ไทย) — สี navy */
  headlineSecondary?: string;
  /** badge ใต้หัวข้อ เช่น "คู่มือเริ่มต้น" */
  badge?: string;
  /** 4 ไอคอนซ้ายล่าง */
  iconLabels?: [string, string, string, string];
  /** 5 การ์ด sidebar (แบบ infographic Claude) — ถ้ามีจะใช้ layout 25/75 */
  sidebarItems?: { title: string; description: string }[];
  /** ประเภท mockup ขวา */
  mockupFocus?: "seo-dashboard" | "google-maps" | "website-ui" | "pricing-table" | "aeo-serp";
  /** ข้อความ EN บน mockup (ถ้ามี) */
  mockupTitle?: string;
  type?: SmoothPurpleImageType;
};

const aspectByType: Record<SmoothPurpleImageType, string> = {
  "blog-hero": "3:2 aspect ratio, 2304x1536 pixels",
  "blog-inline": "3:2 aspect ratio, 2304x1536 pixels",
  "site-hero": "16:9 aspect ratio, 2560x1440 pixels",
};

const mockupHints: Record<NonNullable<SmoothPurplePromptInput["mockupFocus"]>, string> = {
  "seo-dashboard":
    "floating laptop and phone with SEO analytics UI: keyword rankings, traffic chart, green metrics",
  "google-maps":
    "floating phone showing Google Maps local pack with pin markers in Phuket area, search bar",
  "website-ui":
    "clean browser mockup with hero section, CTA button, three feature cards, modern landing page",
  "pricing-table":
    "three pricing cards Lite Pro Max with Thai price labels, soft glass panels",
  "aeo-serp":
    "Google SERP mockup with AI Overview answer block, FAQ snippet, purple accent highlights",
};

function sidebarBlock(items: SmoothPurplePromptInput["sidebarItems"]): string {
  if (!items?.length) return "";
  const cards = items
    .map(
      (item, i) =>
        `${i + 1}. rounded white card with soft shadow, pastel icon circle, Thai title "${item.title}", 2-line Thai description "${item.description}"`
    )
    .join("\n");
  return `
LEFT SIDEBAR (~25% width): vertical stack of ${items.length} cards with equal spacing:
${cards}
`;
}

/**
 * สร้าง prompt EN สำหรับ Midjourney / DALL·E / Ideogram / Gemini Image
 */
export function buildSmoothPurplePrompt(input: SmoothPurplePromptInput): string {
  const type = input.type ?? "blog-hero";
  const hasSidebar = Boolean(input.sidebarItems?.length);
  const leftWidth = hasSidebar ? "25%" : "42%";
  const rightWidth = hasSidebar ? "75%" : "58%";

  const icons =
    input.iconLabels?.length === 4
      ? `Row of 4 small circular icons with Thai labels: "${input.iconLabels.join('", "')}" — colors purple, orange, green, blue.`
      : "";

  const badge = input.badge
    ? `Small pill badge below headline with sparkle icon, Thai text "${input.badge}", soft blue-purple gradient fill.`
    : "";

  const mockup = mockupHints[input.mockupFocus ?? "seo-dashboard"];
  const mockupTitle = input.mockupTitle
    ? `Mockup headline in English: "${input.mockupTitle}".`
    : "";

  const secondary = input.headlineSecondary
    ? `Second headline line in Thai navy blue #1e3a8a: "${input.headlineSecondary}".`
    : "";

  return `
Thai B2B digital marketing infographic, PhuketSEO brand style, ${aspectByType[type]}.

STYLE — Smooth Purple (Canva-like):
- Soft mesh gradient background: off-white #f8fafc with large blurred blobs — teal #06b6d4 → blue #3b82f6 → indigo #6366f1 → violet #8b5cf6 at 12–20% opacity, smooth transitions like Canva logo gradients, no hard edges.
- All UI cards: white frosted glass, 24px rounded corners, soft ambient shadow (0 24px 48px rgba(99,102,241,0.12)), subtle inner highlight.
- Typography: clean modern Thai sans-serif, generous whitespace, professional EdTech feel.

HEADER:
- Large Thai headline, primary keyword with smooth purple-indigo gradient text: "${input.headlinePrimary}".
${secondary}
${badge}

LAYOUT:
${sidebarBlock(input.sidebarItems)}
LEFT TEXT ZONE (~${leftWidth}): headline area as above. ${icons}

RIGHT VISUAL ZONE (~${rightWidth}):
- ${mockup}
- Optional floating dark code panels labeled HTML / CSS / JS with minimal readable snippets (semantic HTML, .hero gradient, simple JS) — only if fits, not cluttered.
- Layer depth: faint wireframe sitemap in far background → main mockups mid → small UI chips front.
${mockupTitle}

COLOR RULES:
- Primary: navy #1e3a8a, indigo #6366f1, violet #7c3aed
- Canva-smooth accents: teal #06b6d4 blending into purple #8b5cf6
- 60% whitespace, balanced asymmetrical composition
- No real human faces, no mascot characters

FOOTER (optional thin bar): soft blue-to-purple gradient strip, 3 small benefit icons with short Thai labels, minimal.

Output: crisp vector-flat illustration with smooth gradients, export-quality, no watermark.
`.trim();
}

/** ตัวอย่างพร้อม copy — SEO ภูเก็ต pillar */
export const exampleSmoothPurplePrompt = buildSmoothPurplePrompt({
  type: "blog-hero",
  headlinePrimary: "SEO ภูเก็ต คืออะไร?",
  headlineSecondary: "คู่มือเริ่มต้นสำหรับธุรกิจท้องถิ่น",
  badge: "Phuket Visibility Stack™",
  iconLabels: ["Google Maps", "เว็บเร็ว", "AEO/GEO", "฿5,900"],
  mockupFocus: "google-maps",
  mockupTitle: "Local SEO Dashboard",
});

/** Infographic sidebar แบบภาพ Claude — ใช้กับ pillar / guide ยาว */
export const exampleSmoothPurpleInfographicPrompt = buildSmoothPurplePrompt({
  type: "blog-hero",
  headlinePrimary: "ทำเว็บไซต์ภูเก็ต",
  headlineSecondary: "ด้วย AI + SEO ตั้งแต่เริ่มต้น",
  badge: "คู่มือเริ่มต้นแบบเข้าใจง่าย",
  sidebarItems: [
    { title: "แนวคิด", description: "วางแผนก่อนสร้างเว็บให้ Google อ่านได้" },
    { title: "โครงสร้างเว็บ", description: "header main section footer ที่ถูกต้อง" },
    { title: "Local SEO", description: "GBP Maps และ NAP ในภูเก็ต" },
    { title: "ความเร็ว", description: "Core Web Vitals และ mobile-first" },
    { title: "AEO / GEO", description: "พร้อม AI Search และ schema" },
  ],
  mockupFocus: "website-ui",
  mockupTitle: "Welcome to Your Website",
});
