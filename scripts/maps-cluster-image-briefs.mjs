/**
 * AI briefs — Google Maps pillar cluster (landscape 3:2)
 * Style: white background, purple-blue accents, NO logo (added in compose-maps-cluster-frame.mjs)
 *
 * 1. Generate *-ai.png from prompts below → assets/google-maps-cluster/
 * 2. node scripts/compose-maps-cluster-frame.mjs assets/google-maps-cluster
 * 3. node scripts/upscale-google-maps-cluster-images.mjs
 */

export const MAPS_CLUSTER_STYLE = `
STYLE (strict, same for all images in this cluster):
- Landscape 3:2 marketing infographic for Thai B2B audience
- Pure white background #ffffff — clean, bright, minimal
- Purple-indigo accent colors (#6366f1, #7c3aed) for headers, icons, numbered circles only
- Soft blue-purple gradient on main headline text only
- White frosted cards with thin light purple border, 16px rounded corners
- 3D flat icons (map pin, phone, stars, checklist) in purple/blue tones
- Large legible Thai sans-serif typography
- NO logo, NO watermark, NO footer bar — leave bottom 12% of canvas empty white space
- NO dark backgrounds, NO outer colored margins
`.trim();

export const mapsClusterBriefs = [
  {
    file: "dan-andap-google-maps-phuket-hero-ai.png",
    prompt: `${MAPS_CLUSTER_STYLE}

TITLE (gradient purple): "ดันอันดับ Google Maps ภูเก็ต"
SUBTITLE: "ให้ธุรกิจโผล่ต้นๆบนแผนที่"

CENTER: Google Maps 3-Pack mockup with 3 business pins in Patong Phuket area.

3 cards below:
1. "GBP ครบและยืนยันแล้ว"
2. "รีวิวมีข้อความจริง"
3. "รูปและโพสต์อัปเดต"`,
  },
  {
    file: "dan-andap-google-maps-phuket-factors-ai.png",
    prompt: `${MAPS_CLUSTER_STYLE}

TITLE: "Google จัดอันดับอย่างไร"
SUBTITLE: "3 ปัจจัยหลักบน Maps"

3 large cards with icons:
1. "ตรงกับคำค้น" — search icon
2. "อยู่ใกล้ลูกค้า" — distance/map pin
3. "น่าเชื่อถือ" — stars + review`,
  },
  {
    file: "dan-andap-google-maps-phuket-steps-ai.png",
    prompt: `${MAPS_CLUSTER_STYLE}

TITLE: "5 วิธีดันอันดับ Maps"
SUBTITLE: "ทำได้จริงในภูเก็ต"

5 numbered steps vertical:
1. ยืนยันตัวตนและปักหมุด
2. หมวด GBP ถูกต้อง
3. ขอรีวิวจากลูกค้าจริง
4. อัปเดตรูปเดือนละครั้ง
5. ใช้คำค้นโซนในโพสต์`,
  },
  {
    file: "dan-andap-google-maps-phuket-zones-ai.png",
    prompt: `${MAPS_CLUSTER_STYLE}

TITLE: "ดันอันดับแยกโซน"
SUBTITLE: "ภูเก็ต — แต่ละพื้นที่แข่งต่างกัน"

Map of Phuket with labeled zones as cards:
- ป่าตอง
- กะตะ
- ตัวเมือง
- ถลาง กมลา กะทู้`,
  },
  {
    file: "google-maps-mai-tid-phuket-hero-ai.png",
    prompt: `${MAPS_CLUSTER_STYLE}

TITLE (purple): "Google Maps ไม่ติด"
SUBTITLE: "วิธีแก้ให้ธุรกิจโผล่บนแผนที่"

Warning-style but soft orange accent on icons only (not background).
4 symptom cards with X icons:
- ค้นชื่อร้านไม่เจอ
- อันดับต่ำมาก
- โทรจาก Maps น้อย
- รีวิวหยุดนิ่ง`,
  },
  {
    file: "google-maps-mai-tid-phuket-symptoms-ai.png",
    prompt: `${MAPS_CLUSTER_STYLE}

TITLE: "อาการที่พบบ่อย"
SUBTITLE: "เมื่อ Maps ไม่ติด"

4 horizontal rows with alert icons (soft amber):
1. ไม่โผล่ใน near me
2. คู่แข่งโผล่ก่อนเสมอ
3. listing ซ้ำ 2 รายการ
4. สถานะ GBP รอดำเนินการ`,
  },
  {
    file: "google-maps-mai-tid-phuket-causes-ai.png",
    prompt: `${MAPS_CLUSTER_STYLE}

TITLE: "สาเหตุหลัก"
SUBTITLE: "ทำไม Google Maps ไม่ติด"

4 cards with red accent icons (soft, not aggressive):
1. GBP ไม่ยืนยันตัวตน
2. ปักหมุดผิดตำแหน่ง
3. NAP ไม่ตรงกัน
4. รีวิวน้อยกว่าคู่แข่ง`,
  },
  {
    file: "google-maps-mai-tid-phuket-fix-ai.png",
    prompt: `${MAPS_CLUSTER_STYLE}

TITLE: "เช็กลิสต์แก้ไข"
SUBTITLE: "ก่อนจ้างดันอันดับ"

Green checkmark icons on white cards:
1. ยืนยันตัวตน GBP
2. แก้ปักหมุดให้ตรง
3. รวม listing ซ้ำ
4. รูป 10+ รูป
5. ตอบรีวิวภายใน 48 ชม.`,
  },
  {
    file: "rap-pak-mut-thurakij-phuket-hero-ai.png",
    prompt: `${MAPS_CLUSTER_STYLE}

TITLE: "รับปักหมุดธุรกิจ"
SUBTITLE: "Google Maps ภูเก็ต"

Large map pin on Google Maps UI mockup, pin dropped on correct shop location.
3 cards:
1. ยืนยันตำแหน่งร้าน
2. แก้หมุดผิด
3. ตั้งโซนบริการ`,
  },
  {
    file: "rap-pak-mut-thurakij-phuket-wrong-ai.png",
    prompt: `${MAPS_CLUSTER_STYLE}

TITLE: "ปักหมุดผิด"
SUBTITLE: "ผลกระทบต่อธุรกิจ"

Split comparison: wrong pin (red X) vs correct pin (green check).
3 impact bullets:
- ลูกค้าหาทางผิด
- รีวิวลบเรื่องหาไม่เจอ
- อันดับ Maps ตก`,
  },
  {
    file: "rap-pak-mut-thurakij-phuket-verify-ai.png",
    prompt: `${MAPS_CLUSTER_STYLE}

TITLE: "ขั้นตอนยืนยันตัวตน"
SUBTITLE: "Google Business Profile"

4 steps with icons:
1. ไปรษณีย์ (postcard)
2. โทรศัพท์
3. อีเมล
4. วิดีโอ (บางเคส)`,
  },
  {
    file: "rap-pak-mut-thurakij-phuket-zones-ai.png",
    prompt: `${MAPS_CLUSTER_STYLE}

TITLE: "โซนบริการภูเก็ต"
SUBTITLE: "ปักหมุดตรงทำเลจริง"

Phuket map with purple pins in zones:
ป่าตอง, กะตะ, ตัวเมือง, ถลาง, กมลา, กะทู้
Each zone as small card with pin icon.`,
  },
];
