/**
 * Image briefs — /blog/seo-phuket-kue-arai (4 รูป Smooth Purple)
 *
 * 1. สร้างรูปจาก prompt ด้านล่าง → บันทึกลง assets/ ตามชื่อ src
 * 2. node scripts/upscale-seo-phuket-kue-arai-images.mjs
 * 3. npm run check:images && npm run build
 */

export const seoPhuketKueAraiImages = [
  {
    id: 1,
    role: "hero-thumbnail",
    src: "seo-phuket-hero-src.png",
    out: "blog-thumb-seo-phuket-kue-arai-2026-clean.png",
    placement: "Featured image + blog listing",
    caption: "SEO ภูเก็ต — Google Search และ Maps สำหรับธุรกิจในภูเก็ต",
    prompt: `Thai B2B digital marketing infographic, PhuketSEO Smooth Purple brand, 3:2 aspect ratio 2304x1536.

STYLE: Soft mesh gradient background off-white #f8fafc, blurred blobs teal→blue→indigo→violet at 12-20% opacity. White frosted glass cards, 24px rounded corners, soft ambient shadow. Clean modern Thai sans-serif. No human faces, no 3D plastic render, no satellite photos.

HEADER: Large Thai headline with purple-indigo gradient text: "SEO ภูเก็ต คืออะไร?"
Second line navy #1e3a8a: "ถูกค้นพบบน Google Search และ Maps"
Pill badge: "คำตอบสั้นๆ"

LEFT (~40%): 4 circular icons with Thai labels: "Google Maps", "เว็บเร็ว", "รีวิว", "AI Search"

RIGHT (~60%): Floating laptop showing SEO analytics dashboard + phone showing Google Maps local pack with pins in Phuket area, search bar with Thai query "ร้านอาหาร ป่าตอง". Soft depth layers.

Footer thin gradient bar with 3 benefit chips. Crisp vector-flat, export quality, no watermark.`,
  },
  {
    id: 2,
    role: "inline-after-definition",
    src: "seo-phuket-search-maps-src.png",
    out: "blog-inline-seo-phuket-search-maps-clean.png",
    placement: "หลัง ## SEO ภูเก็ต คืออะไร",
    caption: "SEO ภูเก็ต — ลูกค้าค้นหาทั้งบน Google Search และ Google Maps ในโซนจริง",
    prompt: `Thai B2B infographic, PhuketSEO Smooth Purple, 3:2 2304x1536.

TITLE gradient: "Search + Maps ทำงานคู่กัน"
SUBTITLE navy: "ลูกค้าค้นหาในโซนจริง — ป่าตอง กะตะ ตัวเมือง"

LAYOUT split 50/50:
LEFT: Browser mockup Google Search results with local business snippet, purple accent highlights.
RIGHT: Phone mockup Google Maps 3-pack listing, star ratings, call button, route button. Pins on simplified flat Phuket island map illustration (soft purple-blue tones, NOT photorealistic 3D satellite).

Two curved arrows between panels labeled Thai: "ค้นหา" and "เปรียบเทียบรีวิว"
Glass cards, mesh background, no watermark.`,
  },
  {
    id: 3,
    role: "inline-after-steps",
    src: "seo-phuket-stack-src.png",
    out: "blog-inline-seo-phuket-stack-2026-clean.png",
    placement: "หลัง ## SEO ภูเก็ต เริ่มจากอะไร",
    caption: "Phuket Visibility Stack — ลำดับงาน SEO ภูเก็ต จาก Maps ไปจนถึง AI Search",
    prompt: `Thai B2B infographic, PhuketSEO Smooth Purple, 3:2 2304x1536.

HEADLINE gradient: "Phuket Visibility Stack"
SUBTITLE navy: "เริ่มจากอะไร — 4 ชั้น"

LEFT SIDEBAR 25% — vertical stack of 4 numbered glass cards:
1. "Google Maps" — "หน้าร้านครบ ยืนยันตัวตน"
2. "รีวิว & ข้อมูลตรง" — "ชื่อ ที่อยู่ เบอร์สอดคล้อง"
3. "เว็บเร็ว" — "ตอบคำถามลูกค้า"
4. "AI Search" — "โครงสร้างคำตอบชัด"

RIGHT 75%: Ascending staircase or layered stack diagram with same 4 labels, soft purple gradient arrows upward. Small phone + laptop mockups beside each layer.

Mesh background, professional EdTech feel, no pricing tables, no watermark.`,
  },
  {
    id: 4,
    role: "inline-after-zones",
    src: "seo-phuket-zones-src.png",
    out: "blog-inline-seo-phuket-zones-clean.png",
    placement: "หลัง ## SEO ภูเก็ต ต่างจาก SEO ทั่วไป",
    caption: "โซนภูเก็ตต่างกัน — ป่าตอง กะตะ ตัวเมือง ถลาง กมลา ใช้คำค้นและแผนไม่เหมือนกัน",
    prompt: `Thai B2B infographic, PhuketSEO Smooth Purple, 3:2 2304x1536.

HEADLINE gradient: "SEO ภูเก็ต แบ่งตามโซน"
SUBTITLE navy: "ไม่เล่นคำค้นทั้งเกาะ"

CENTER: Simplified flat illustrated map of Phuket island, soft purple-blue gradient landmass on white, NOT 3D satellite. Five labeled zone pins with color dots:
- "ป่าตอง" (restaurant icon)
- "กะตะ" (family resort icon)
- "ตัวเมือง" (shop/clinic icon)
- "ถลาง" (airport/hotel icon)
- "กมลา" (luxury condo icon)

BOTTOM: 3 comparison mini-cards showing different Thai search examples per zone (short text only, legible Thai).

Glass style, mesh background, clean whitespace, no watermark.`,
  },
];

if (process.argv[1]?.endsWith("seo-phuket-kue-arai-image-briefs.mjs")) {
  for (const img of seoPhuketKueAraiImages) {
    console.log(`\n${"=".repeat(72)}\n#${img.id} ${img.role}\n${"=".repeat(72)}`);
    console.log(`assets/${img.src} → public/images/blog/${img.out}`);
    console.log(`วางในบทความ: ${img.placement}`);
    console.log(`caption: ${img.caption}\n`);
    console.log(img.prompt);
  }
}
