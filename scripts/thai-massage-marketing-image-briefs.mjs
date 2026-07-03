/**
 * Image briefs — /blog/kan-marketing-ran-nuad-phaen-thai (7 รูป Smooth Purple สว่าง)
 *
 * 1. สร้างรูปจาก prompt → assets/thai-massage-marketing/*-src.png
 * 2. node scripts/compose-phuketseo-brand-bar.mjs assets/thai-massage-marketing
 * 3. node scripts/upscale-thai-massage-marketing-images.mjs
 * 4. npm run check:images && npm run build
 */

const LIGHT_STYLE = `STYLE — Smooth Purple light (PhuketSEO):
- Bright off-white background #f8fafc covering 85%+ of canvas, high-key lighting.
- Very subtle mesh blobs teal→indigo→violet at 8–15% opacity only — NO dark backgrounds.
- White frosted glass cards, 24px rounded corners, soft ambient shadow.
- Clean modern Thai sans-serif, legible Thai text, generous whitespace.
- Leave empty bottom strip 90px (no text, no logo) for brand bar overlay.
- No human faces, no watermark, no third-party logos except Google Maps pin icon stylized.`;

export const thaiMassageMarketingImages = [
  {
    id: 1,
    role: "hero-thumbnail",
    src: "kan-marketing-nuad-hero-src.png",
    out: "blog-thumb-kan-marketing-ran-nuad-phaen-thai-clean.png",
    key: "massageMarketingHero",
    placement: "Featured thumbnail",
    caption: "การตลาดร้านนวดแผนไทย — หาลูกค้าใหม่บน Google Maps",
    prompt: `Thai B2B marketing infographic, 3:2 landscape 2304x1536. ${LIGHT_STYLE}

HEADER: Large Thai headline gradient purple-indigo: "การตลาดร้านนวดแผนไทย"
Second line navy bold: "หาลูกค้าใหม่บน Google Maps"
Pill badge: "Industry Guide"

CENTER: 4 circular icons row — Maps (35-50%), รีวิว, LINE, ราคาชัด — short Thai labels under each.

RIGHT: Phone mockup Google Maps search "นวดแผนไทย near me" with star ratings and pins in Phuket.

Soft lotus accent, professional vector-flat illustration.`,
  },
  {
    id: 2,
    role: "inline-compare",
    src: "kan-marketing-nuad-compare-src.png",
    out: "blog-inline-kan-marketing-nuad-compare-clean.png",
    key: "massageMarketingCompare",
    placement: "หลัง intro — ทำไมไม่เหมือนร้านค้าทั่วไป",
    caption: "การตลาดร้านนวดแผนไทย vs ร้านค้าทั่วไป — ขายความไว้วางใจ ไม่ใช่แค่ราคา",
    prompt: `Thai B2B comparison infographic, 3:2 2304x1536. ${LIGHT_STYLE}

TITLE gradient: "ร้านนวด vs ร้านค้าทั่วไป"
SUBTITLE navy: "การตลาดต่างกันตรงไหน"

TWO COLUMN comparison table in glass cards:
LEFT column header "ร้านค้าทั่วไป" — bullets: สินค้าจับต้องได้, ตัดสินใจจากราคา, โปรโมชันลดราคา
RIGHT column header "ร้านนวดแผนไทย" — bullets: บริการ 30-120 นาที, ตัดสินใจจากรีวิว, เน้นความน่าเชื่อถือ

Bottom insight chip: "ลดราคาอย่างเดียว → ลูกค้ามาครั้งเดียว"`,
  },
  {
    id: 3,
    role: "inline-channels",
    src: "kan-marketing-nuad-channels-src.png",
    out: "blog-inline-kan-marketing-nuad-channels-clean.png",
    key: "massageMarketingChannels",
    placement: "ลูกค้ามาจากไหน",
    caption: "ลูกค้าร้านนวดมาจากไหน — Google Maps 35–50% ในโซนท่องเที่ยว",
    prompt: `Thai B2B infographic, 3:2 2304x1536. ${LIGHT_STYLE}

TITLE gradient: "ลูกค้าร้านนวดมาจากไหน"
SUBTITLE navy: "สำรวจ 12 ร้าน โซนท่องเที่ยวภาคใต้"

LEFT: 4 stacked glass cards with % badges:
1. Google Maps 35-50% (highlight largest, purple accent)
2. เดินผ่าน 20-35%
3. โรงแรม/ไกด์ 10-25%
4. ลูกค้าซ้ำ/LINE 15-30%

RIGHT: Simple customer journey funnel 3 steps — ค้นหา → เปรียบเทียบรีวิว → จอง`,
  },
  {
    id: 4,
    role: "inline-steps",
    src: "kan-marketing-nuad-steps-src.png",
    out: "blog-inline-kan-marketing-nuad-steps-clean.png",
    key: "massageMarketingSteps",
    placement: "ลำดับการตลาด 7 ขั้น",
    caption: "ลำดับการตลาดร้านนวดแผนไทย 7 ขั้น — เริ่มจากความน่าเชื่อถือก่อนแอด",
    prompt: `Thai B2B step infographic, 3:2 2304x1536. ${LIGHT_STYLE}

TITLE gradient: "ลำดับการตลาด 7 ขั้น"
SUBTITLE navy: "ทำตามลำดับ — อย่าเริ่มจากแอด"

Numbered vertical timeline 7 steps in glass cards (short Thai):
1. ราคาชัดหน้าร้าน
2. Google Business Profile ครบ
3. ระบบขอรีวิว QR
4. LINE ตอบภายใน 1 ชม.
5. เมนูราคา EN
6. โปร low season
7. ความร่วมมือโรงแรม

Highlight steps 1-3 with green "เริ่มที่นี่" badge. Arrow flow downward.`,
  },
  {
    id: 5,
    role: "inline-reviews",
    src: "kan-marketing-nuad-reviews-src.png",
    out: "blog-inline-kan-marketing-nuad-reviews-clean.png",
    key: "massageMarketingReviews",
    placement: "รีวิวและความน่าเชื่อถือ",
    caption: "รีวิว Google Maps — ร้าน 3 เตียง เพิ่มคำสั่งจาก Maps +22% ใน 4 เดือน",
    prompt: `Thai B2B infographic, 3:2 2304x1536. ${LIGHT_STYLE}

TITLE gradient: "รีวิว = สินทรัพย์หลัก"
SUBTITLE navy: "Google Maps Reviews"

LEFT: Phone mockup showing 4.5 star reviews with Thai comment snippets about cleanliness and skill.

RIGHT: Stat cards:
- "ต่ำกว่า 4.2 ดาว → แพ้คู่แข่ง"
- "Case: 28 → 61 รีวิว ใน 4 เดือน"
- "+22% คำสั่งจาก Maps" in large green text

3 tip chips: ตอบภายใน 48 ชม. | ขอรีวิวมีข้อความ | ห้ามซื้อรีวิวปลอม`,
  },
  {
    id: 6,
    role: "inline-budget",
    src: "kan-marketing-nuad-budget-src.png",
    out: "blog-inline-kan-marketing-nuad-budget-clean.png",
    key: "massageMarketingBudget",
    placement: "งบประมาณและระยะเวลา",
    caption: "งบการตลาดร้านนวดแผนไทย — ตามขนาดร้านและสัญญาณแรกที่เห็น",
    prompt: `Thai B2B budget infographic, 3:2 2304x1536. ${LIGHT_STYLE}

TITLE gradient: "งบและระยะเวลาที่สมจริง"
SUBTITLE navy: "การตลาดร้านนวดแผนไทย"

THREE tier glass cards horizontal:
1. "ร้านเล็ก ทำเอง" — ฿0-2,000/เดือน — เห็นผล 4-8 สัปดาห์
2. "ร้านกลาง 3-6 เตียง" — ฿5,000-12,000/เดือน — 2-4 เดือน
3. "ร้านใหญ่/หลายสาขา" — ฿15,000-40,000+ — 3-6 เดือน

Small channel icons below: GBP ฟรี | ป้าย | LINE | Google Ads`,
  },
  {
    id: 7,
    role: "inline-mistakes",
    src: "kan-marketing-nuad-mistakes-src.png",
    out: "blog-inline-kan-marketing-nuad-mistakes-clean.png",
    key: "massageMarketingMistakes",
    placement: "ข้อผิดพลาด + Quick Wins",
    caption: "ข้อผิดพลาดการตลาดร้านนวดที่พบบ่อย — และสิ่งที่ควรทำก่อน",
    prompt: `Thai B2B checklist infographic, 3:2 2304x1536. ${LIGHT_STYLE}

SPLIT layout:

LEFT half red-tint header "5 ข้อผิดพลาดที่พบบ่อย" — numbered list:
1. ราคาออนไลน์ไม่ตรงหน้าร้าน
2. รูปสต็อกไม่ตรงปก
3. ไม่ตอบโทร/LINE ภายใน 30 นาที
4. ยิงแอดก่อน listing พร้อม
5. ไม่เก็บลูกค้าซ้ำ

RIGHT half green-tint header "Quick Wins" — checkmarks:
GBP ครบ | ราคาชัด | ขอรีวิว QR | ตอบ LINE 1 ชม. | รูปอัปเดต 2-3 เดือน | เมนู EN`,
  },
];

if (process.argv[1]?.endsWith("thai-massage-marketing-image-briefs.mjs")) {
  for (const img of thaiMassageMarketingImages) {
    console.log(`\n${"=".repeat(72)}\n#${img.id} ${img.role} → ${img.key}\n${"=".repeat(72)}`);
    console.log(`assets/thai-massage-marketing/${img.src}`);
    console.log(`→ public/images/blog/${img.out}`);
    console.log(`\n${img.prompt}\n`);
  }
}
