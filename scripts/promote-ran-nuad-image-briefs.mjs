/**
 * AI briefs — /blog/promote-ran-nuad-thai-phuket (maps-cluster style)
 *
 * 1. node scripts/generate-promote-ran-nuad-ai.mjs
 * 2. node scripts/compose-maps-cluster-frame.mjs assets/promote-ran-nuad-thai
 * 3. node scripts/upscale-promote-ran-nuad-images.mjs
 */
import { MAPS_CLUSTER_STYLE } from "./maps-cluster-image-briefs.mjs";

export const promoteRanNuadBriefs = [
  {
    file: "promote-ran-nuad-thai-phuket-hero-ai.png",
    key: "promoteRanNuadHero",
    prompt: `${MAPS_CLUSTER_STYLE}

TITLE (gradient purple): "โปรโมทร้านนวดไทยอย่างไรดี"
SUBTITLE navy: "ลำดับช่องทางที่ทำได้จริง · ภูเก็ต"

4 frosted cards in a row:
1. Google Maps ก่อน
2. รีวิวจริง
3. ราคาชัด
4. LINE จอง

Stat highlight: "35–50%" with label "ลูกค้าจาก Maps ในโซนท่องเที่ยว"`,
  },
  {
    file: "promote-ran-nuad-thai-steps-ai.png",
    key: "promoteRanNuadSteps",
    prompt: `${MAPS_CLUSTER_STYLE}

TITLE: "ลำดับโปรโมท 5 ขั้น"
SUBTITLE: "ทำตามลำดับ — อย่าเริ่มจากแอด"

5 numbered purple circles with frosted cards:
1. ยืนยัน Google Business Profile
2. ราคาและเมนูอ่านง่าย
3. ขอรีวิวหลังบริการ
4. LINE และปุ่มโทร
5. โปรโมชันและโซเชียล`,
  },
  {
    file: "promote-ran-nuad-thai-channels-ai.png",
    key: "promoteRanNuadChannels",
    prompt: `${MAPS_CLUSTER_STYLE}

TITLE: "ช่องทางที่ได้ลูกค้าจริง"
SUBTITLE: "ร้านนวดในโซนท่องเที่ยวภูเก็ต"

Horizontal bar chart 4 rows:
Google Maps 48%
เดินผ่าน 28%
โรงแรม/ทัวร์ 18%
ลูกค้าซ้ำ/LINE 22%`,
  },
  {
    file: "promote-ran-nuad-thai-keywords-ai.png",
    key: "promoteRanNuadKeywords",
    prompt: `${MAPS_CLUSTER_STYLE}

TITLE: "ลูกค้าค้นหาคำว่าอะไร"
SUBTITLE: "นักท่องเที่ยว vs คนท้องถิ่น"

TWO frosted cards side by side:
LEFT "นักท่องเที่ยว" — thai massage patong, spa near me
RIGHT "คนท้องถิ่น" — นวดไทย ภูเก็ต, massage กะตะ`,
  },
  {
    file: "promote-ran-nuad-thai-compare-ai.png",
    key: "promoteRanNuadCompare",
    prompt: `${MAPS_CLUSTER_STYLE}

TITLE: "เปรียบเทียบแนวทางโปรโมท"
SUBTITLE: "ทำถูกลำดับ vs สิ่งที่มักพลาด"

Table 3 columns 5 rows:
ปัจจัย | แนวทางที่ถูกต้อง | ข้อผิดพลาด`,
  },
  {
    file: "promote-ran-nuad-thai-mistakes-ai.png",
    key: "promoteRanNuadMistakes",
    prompt: `${MAPS_CLUSTER_STYLE}

TITLE: "ข้อผิดพลาดที่พบบ่อย"
SUBTITLE: "และสิ่งที่ควรทำก่อนโปรโมชัน"

SPLIT: LEFT red-tint "ห้าม" 5 bullets | RIGHT green-tint "ทำก่อน" 5 checkmarks`,
  },
];
