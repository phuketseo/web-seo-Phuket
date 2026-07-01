/**
 * Blog post metadata — ใช้ร่วมกับ sitemap และ blog listing
 * เมื่อเพิ่มบทความใหม่ ให้อัปเดตไฟล์นี้พร้อมกับ blog/[slug]/page.tsx
 */
import { getBlogThumbnail, type SiteImage } from "@/lib/images";

export type BlogPostMeta = {
  slug: string;
  title: string;
  category: string;
  description: string;
  thumbnail: SiteImage;
};

export const blogCategories = [
  "ทั้งหมด",
  "SEO ภูเก็ต",
  "Local SEO",
  "เว็บ Next.js",
  "AEO & GEO",
  "Industry Guide",
] as const;

export const blogPostsMeta: BlogPostMeta[] = [
  {
    slug: "local-seo-kathu-phuket",
    title: "Local SEO กะทู้ 2026 — คู่มือทำให้ธุรกิจโผล่ Google Maps",
    category: "Local SEO",
    description:
      "Local SEO กะทู้ คืออะไร ทำไมสำคัญ และทำอย่างไรให้ธุรกิจในโซนกะทู้ ห้างเซ็นทรัลภูเก็ต และสนามกอล์ฟโผล่ Google Maps — อ่านง่าย ไม่ซับซ้อน",
    thumbnail: getBlogThumbnail("local-seo-kathu-phuket"),
  },
  {
    slug: "local-seo-thalang-phuket",
    title: "Local SEO ถลาง 2026 — โซนสนามบิน หาดไม้ขาว และหาดในทอน",
    category: "Local SEO",
    description:
      "Local SEO ถลาง 2026 คือการทำให้ธุรกิจในอำเภอถลางโผล่ Google Maps และ Search เมื่อลูกค้าค้นหาโรงแรมใกล้สนามบิน รีสอร์ทหาดไม้ขาว หรืออสังหาฯ ในโซนนี้",
    thumbnail: getBlogThumbnail("local-seo-thalang-phuket"),
  },
  {
    slug: "local-seo-kamala-phuket",
    title: "Local SEO กมลา 2026 — โซน luxury ที่แข่งต่างจากป่าตองและกะตะ",
    category: "Local SEO",
    description:
      "Local SEO กมลา ทำอย่างไรให้ธุรกิจโผล่ Google Maps ในโซนหาดกมลา — ปัญหาและทิศทางแก้เมื่อ buyer ต่างชาติค้นหา condo, resort และ fine dining ใน Kamala",
    thumbnail: getBlogThumbnail("local-seo-kamala-phuket"),
  },
  {
    slug: "rab-tam-seo-phuket",
    title: "รับทำ SEO ภูเก็ต 2026 — เลือกเอเจนซี่อย่างไรก่อนจ้าง?",
    category: "SEO ภูเก็ต",
    description:
      "รับทำ SEO ภูเก็ต — เปรียบเทียบสิ่งที่ควรดูก่อนจ้าง: ความเชี่ยวชาญโซน รูปแบบราคา ผลลัพธ์ที่วัดได้ และข้อควรระวังในตลาดท่องเที่ยวภูเก็ต ขอคำปรึกษาฟรี",
    thumbnail: getBlogThumbnail("rab-tam-seo-phuket"),
  },
  {
    slug: "seo-sme-phuket",
    title: "SEO SME ภูเก็ต 2026 — ธุรกิจเล็กที่ยังไม่มีตัวตนบน Google",
    category: "SEO ภูเก็ต",
    description:
      "SEO SME ภูเก็ต — Pattern ที่ธุรกิจเล็กในภูเก็ตมักเจอเมื่อยังไม่มีตัวตนบน Google ทิศทางเริ่มต้นและจุดที่ SME มักติด (ไม่ใช่คู่มือ DIY)",
    thumbnail: getBlogThumbnail("seo-sme-phuket"),
  },
  {
    slug: "seo-restaurants-phuket",
    title: "SEO ร้านอาหารภูเก็ต 2026 — walk-in หายเพราะลูกค้าไม่เจอบน Google",
    category: "Industry Guide",
    description:
      "SEO ร้านอาหารภูเก็ต ทำอย่างไรเมื่อ walk-in ลดลง — ปัญหาการมองเห็นบน Maps และทิศทางแก้สำหรับร้านอาหารในภูเก็ต",
    thumbnail: getBlogThumbnail("seo-restaurants-phuket"),
  },
  {
    slug: "nap-local-seo-phuket",
    title: "NAP ไม่ตรง ฆ่า Local SEO ภูเก็ต — เมื่อ Google ไม่เชื่อข้อมูลร้านคุณ",
    category: "Local SEO",
    description:
      "NAP Local SEO ภูเก็ต ทำอย่างไรเมื่อชื่อ ที่อยู่ เบอร์โทรไม่ตรงกัน — ปัญหา listing ซ้ำและทิศทางแก้สำหรับธุรกิจ local",
    thumbnail: getBlogThumbnail("nap-local-seo-phuket"),
  },
  {
    slug: "local-seo-phuket-town",
    title: "Local SEO ตัวเมืองภูเก็ต 2026 — ลูกค้าไทยที่ค้นหาในเมือง",
    category: "Local SEO",
    description:
      "Local SEO ตัวเมืองภูเก็ต ทำอย่างไรให้ธุรกิจโผล่ Google Maps สำหรับลูกค้าไทยในโซนตัวเมือง — ปัญหาและทิศทางแก้",
    thumbnail: getBlogThumbnail("local-seo-phuket-town"),
  },
  {
    slug: "local-seo-kata-phuket",
    title: "Local SEO กะตะ 2026 — โซนครอบครัวที่แข่งต่างจากป่าตอง",
    category: "Local SEO",
    description:
      "Local SEO กะตะ ทำอย่างไรให้ธุรกิจโผล่ Google Maps ในโซนกะตะ/กะรน — ปัญหาและทิศทางแก้เมื่อแข่งกับป่าตองไม่ได้",
    thumbnail: getBlogThumbnail("local-seo-kata-phuket"),
  },
  {
    slug: "low-season-seo-phuket",
    title: "Low Season SEO ภูเก็ต — เมื่อ high season ผ่านไป แล้ว booking หาย",
    category: "SEO ภูเก็ต",
    description:
      "Low Season SEO ภูเก็ต ทำอย่างไรเมื่อ booking หายหลัง high season — ปัญหาการมองเห็นและทิศทางสำหรับธุรกิจท่องเที่ยว",
    thumbnail: getBlogThumbnail("low-season-seo-phuket"),
  },
  {
    slug: "near-me-seo-phuket",
    title: "Near Me SEO ภูเก็ต — ลูกค้าค้นหาใกล้ฉัน แต่ธุรกิจไม่โผล่",
    category: "Local SEO",
    description:
      "Near Me SEO ภูเก็ต ทำอย่างไรเมื่อลูกค้าค้นหา near me แต่ธุรกิจไม่โผล่ Maps — ปัญหาและทิศทางแก้สำหรับ local business",
    thumbnail: getBlogThumbnail("near-me-seo-phuket"),
  },
  {
    slug: "website-speed-seo-phuket",
    title: "เว็บช้าฆ่า SEO ภูเก็ต — เมื่อ Google มองไม่เห็นเพราะ Core Web Vitals",
    category: "เว็บ Next.js",
    description:
      "เว็บช้าส่งผล SEO ภูเก็ตอย่างไร — ปัญหา Core Web Vitals และทิศทางแก้เมื่อเว็บ WordPress หรือเว็บเก่าทำให้ ranking ไม่โต",
    thumbnail: getBlogThumbnail("website-speed-seo-phuket"),
  },
  {
    slug: "local-seo-patong-phuket",
    title: "Local SEO ป่าตอง 2026 — แข่งในโซนที่คนเยอะที่สุด",
    category: "Local SEO",
    description:
      "Local SEO ป่าตอง ทำอย่างไรให้ธุรกิจโผล่ Google Maps ในโซนที่แข่งสูง — ปัญหาและทิศทางแก้สำหรับธุรกิจในป่าตอง",
    thumbnail: getBlogThumbnail("local-seo-patong-phuket"),
  },
  {
    slug: "seo-tours-phuket",
    title: "SEO ทัวร์ภูเก็ต 2026 — เมื่อลูกค้าจองผ่าน OTA แทนเว็บคุณ",
    category: "Industry Guide",
    description:
      "SEO ทัวร์ภูเก็ต ทำอย่างไรเมื่อ booking มาจาก Klook/Viator แทน Google — ปัญหาการมองเห็นและ direct booking สำหรับ tour operator ในภูเก็ต",
    thumbnail: getBlogThumbnail("seo-tours-phuket"),
  },
  {
    slug: "seo-real-estate-phuket",
    title: "SEO อสังหาริมทรัพย์ภูเก็ต 2026 — เมื่อ Lead มาจาก Portal แทน Google",
    category: "Industry Guide",
    description:
      "SEO อสังหาริมทรัพย์ภูเก็ต ทำอย่างไรเมื่อ lead มาจาก portal แทน Google — ปัญหาการมองเห็นและ trust สำหรับ agent ในภูเก็ต",
    thumbnail: getBlogThumbnail("seo-real-estate-phuket"),
  },
  {
    slug: "google-reviews-phuket",
    title: "Google Reviews ภูเก็ต 2026 — เมื่อรีวิวน้อย ลูกค้าเลือกคู่แข่งแทน",
    category: "Local SEO",
    description:
      "Google Reviews ภูเก็ต ทำอย่างไรเมื่อรีวิวน้อยหรือไม่มีคนตอบ — ปัญหา trust บน Maps และทิศทางแก้สำหรับธุรกิจในภูเก็ต",
    thumbnail: getBlogThumbnail("google-reviews-phuket"),
  },
  {
    slug: "direct-booking-hotel-phuket",
    title: "Direct Booking โรงแรมภูเก็ต 2026 — เมื่อ OTA กิน margin แล้วจองตรงเป็นอย่างไร",
    category: "Industry Guide",
    description:
      "Direct Booking โรงแรมภูเก็ต ทำอย่างไรเมื่อ OTA กิน commission — ปัญหาช่องทางจองตรงที่พัง และทิศทางแก้สำหรับโรงแรมในภูเก็ต",
    thumbnail: getBlogThumbnail("direct-booking-hotel-phuket"),
  },
  {
    slug: "seo-clinic-phuket",
    title: "SEO คลินิกภูเก็ต 2026 — เพิ่มการมองเห็นให้ลูกค้ารู้จักธุรกิจคุณมากขึ้น",
    category: "Industry Guide",
    description:
      "SEO คลินิกภูเก็ต ทำอย่างไรให้โผล่ Google Maps และ Search สร้างการมองเห็นและความน่าเชื่อถือสำหรับคลินิกในภูเก็ต",
    thumbnail: getBlogThumbnail("seo-clinic-phuket"),
  },
  {
    slug: "google-ads-vs-seo-phuket",
    title: "Google Ads vs SEO ภูเก็ต 2026 — ธุรกิจไหนควรเริ่มอะไรก่อน?",
    category: "SEO ภูเก็ต",
    description:
      "Google Ads vs SEO ภูเก็ต เปรียบเทียบต้นทุน เวลา และแนวทางเริ่มต้นสำหรับโรงแรม ร้านอาหาร สปา และ SME",
    thumbnail: getBlogThumbnail("google-ads-vs-seo-phuket"),
  },
  {
    slug: "rab-tam-web-phuket",
    title: "รับทำเว็บไซต์ภูเก็ต — เว็บ Next.js เร็ว ติด Google พร้อม SEO",
    category: "เว็บ Next.js",
    description: "รับทำเว็บไซต์ภูเก็ต Next.js mobile-first พร้อม SEO AEO ราคา setup ฿29,900 ขึ้นไป",
    thumbnail: getBlogThumbnail("rab-tam-web-phuket"),
  },
  {
    slug: "geo-kue-arai",
    title: "GEO คืออะไร? Generative Engine Optimization สำหรับธุรกิจภูเก็ต",
    category: "AEO & GEO",
    description: "GEO คืออะไร ทำอย่างไรให้ ChatGPT Perplexity อ้างอิงธุรกิจในภูเก็ต",
    thumbnail: getBlogThumbnail("geo-kue-arai"),
  },
  {
    slug: "aeo-kue-arai",
    title: "AEO คืออะไร? Answer Engine Optimization สำหรับธุรกิจในภูเก็ต",
    category: "AEO & GEO",
    description: "AEO คืออะไร ต่างจาก SEO อย่างไร GEO llms.txt และวิธีเตรียมธุรกิจภูเก็ตให้ AI อ้างอิง",
    thumbnail: getBlogThumbnail("aeo-kue-arai"),
  },
  {
    slug: "ai-overview-kue-arai",
    title: "AI Overview คืออะไร? ผลกระทบต่อ SEO ภูเก็ตและวิธีปรับตัว",
    category: "AEO & GEO",
    description: "Google AI Overview คืออะไร กระทบ SEO ภูเก็ตอย่างไร ธุรกิจท้องถิ่นควรทำอะไร",
    thumbnail: getBlogThumbnail("ai-overview-kue-arai"),
  },
  {
    slug: "seo-phuket-kue-arai",
    title: "SEO ภูเก็ต คืออะไร? คู่มือสำหรับธุรกิจในภูเก็ต",
    category: "SEO ภูเก็ต",
    description: "SEO ภูเก็ต คืออะไร ประโยชน์หลัก เริ่มจากอะไร และปัญหาที่ธุรกิจมักเจอเมื่อลูกค้าค้นหาบน Google",
    thumbnail: getBlogThumbnail("seo-phuket-kue-arai"),
  },
  {
    slug: "local-seo-phuket",
    title: "Local SEO ภูเก็ต คืออะไร? วิธีติด Google Maps (2026)",
    category: "Local SEO",
    description:
      "Local SEO ภูเก็ต คืออะไร ทำไมธุรกิจต้องติดอันดับบน Google Maps ในป่าตอง กะตะ กมลา ตัวเมือง — เริ่มจาก Google Business Profile รีวิว และคำค้นโซนจริง",
    thumbnail: getBlogThumbnail("local-seo-phuket"),
  },
  {
    slug: "local-seo-phuket-kue-arai",
    title: "Local SEO ภูเก็ต คืออะไร? วิธีให้ธุรกิจติด Google Maps",
    category: "Local SEO",
    description: "Local SEO ภูเก็ต คืออะไร ประโยชน์หลัก เริ่มจากอะไร และปัญหาที่ธุรกิจมักเจอเมื่อค้นหา Google Maps",
    thumbnail: getBlogThumbnail("local-seo-phuket-kue-arai"),
  },
  {
    slug: "raaka-seo-phuket",
    title: "ราคา SEO ภูเก็ต 2026 — ควรจ่ายเท่าไหร่ถึงคุ้มค่า?",
    category: "SEO ภูเก็ต",
    description: "ราคา SEO ภูเก็ต 2026 แพ็ก Lite ฿5,900 Pro ฿8,900 Pro Max ฿15,000",
    thumbnail: getBlogThumbnail("raaka-seo-phuket"),
  },
  {
    slug: "seo-for-phuket-spas",
    title: "SEO สปาภูเก็ต: ดึง Direct Booking ไม่พึ่ง OTA",
    category: "Industry Guide",
    description:
      "SEO สปาภูเก็ต ทำอย่างไรให้ Direct Booking โต ลด OTA ด้วย Local SEO และการมองเห็นบน Google",
    thumbnail: getBlogThumbnail("seo-for-phuket-spas"),
  },
  {
    slug: "gemini-hotel-competitor-analysis",
    title: "Competitive Audit โรงแรมภูเก็ต: วิเคราะห์คู่แข่ง + วางแผน SEO 90 วัน",
    category: "AEO & GEO",
    description:
      "Competitive Audit โรงแรมภูเก็ต วิเคราะห์คู่แข่งในโซนและวางแผน SEO ตามข้อมูลจริง",
    thumbnail: getBlogThumbnail("gemini-hotel-competitor-analysis"),
  },
  {
    slug: "hotel-phuket-seo-problems",
    title: "ปัญหา SEO โรงแรมภูเก็ต — เมื่อลูกค้าค้นหาแล้วไปจอง OTA แทน",
    category: "Industry Guide",
    description:
      "ปัญหา SEO โรงแรมภูเก็ตที่พบบ่อย — ไม่โผล่ Maps, เว็บไม่ตอบโซน, แข่ง keyword ผิด และ Direct Booking ไม่โต",
    thumbnail: getBlogThumbnail("hotel-phuket-seo-problems"),
  },
  {
    slug: "seo-for-phuket-hotels",
    title: "SEO โรงแรมภูเก็ต: เพิ่ม Direct Booking ลด OTA",
    category: "Industry Guide",
    description:
      "SEO โรงแรมภูเก็ต ทำอย่างไรให้ Direct Booking โต ลด OTA ด้วยการมองเห็นบน Google",
    thumbnail: getBlogThumbnail("seo-for-phuket-hotels"),
  },
  {
    slug: "instagram-marketing-phuket-restaurants",
    title: "ร้านอาหารภูเก็ต: ทำ Google Maps ก่อน Instagram",
    category: "Industry Guide",
    description:
      "ร้านอาหารภูเก็ต ทำ Google Maps ก่อน Instagram — Social เป็นเทคนิคเสริม",
    thumbnail: getBlogThumbnail("instagram-marketing-phuket-restaurants"),
  },
  {
    slug: "web-design-phuket-real-estate",
    title: "เว็บอสังหาริมทรัพย์ภูเก็ต: Next.js + SEO ดึง Lead จริง",
    category: "เว็บ Next.js",
    description:
      "เว็บอสังหาริมทรัพย์ภูเก็ต ที่ดึง lead ได้จริง — mobile-first และ SEO structure",
    thumbnail: getBlogThumbnail("web-design-phuket-real-estate"),
  },
  {
    slug: "google-my-business-phuket",
    title: "Google Business Profile คืออะไร? Quick Win Local SEO ภูเก็ต",
    category: "Local SEO",
    description:
      "Google Business Profile คืออะไร ทำอย่างไรให้ธุรกิจโผล่ Google Maps เมื่อลูกค้าค้นหาในโซน — คู่มือ GBP ภูเก็ต",
    thumbnail: getBlogThumbnail("google-my-business-phuket"),
  },
  {
    slug: "tiktok-marketing-phuket-services",
    title: "ธุรกิจบริการภูเก็ต: ทำ Google Maps ก่อน TikTok",
    category: "Industry Guide",
    description:
      "ธุรกิจบริการภูเก็ต ทำ Google Maps ก่อน TikTok — Social เป็นเทคนิคเสริม",
    thumbnail: getBlogThumbnail("tiktok-marketing-phuket-services"),
  },
  {
    slug: "content-marketing-phuket-foreigners",
    title: "SEO Content EN ภูเก็ต: ดึงลูกค้าต่างชาติจาก Google",
    category: "SEO ภูเก็ต",
    description:
      "Content EN สำหรับธุรกิจภูเก็ต ดึงลูกค้าต่างชาติจาก Google organic",
    thumbnail: getBlogThumbnail("content-marketing-phuket-foreigners"),
  },
  {
    slug: "google-search-console-phuket",
    title: "Google Search Console คืออะไร? วัดผล Local SEO ภูเก็ต",
    category: "Local SEO",
    description:
      "Google Search Console คืออะไร ใช้อย่างไรวัดผล Local SEO หลังตั้ง Google Business Profile — indexing, query และ KPI ที่ควรดูจริง",
    thumbnail: getBlogThumbnail("google-search-console-phuket"),
  },
];

export const blogPostSlugs = blogPostsMeta.map((post) => post.slug);

export function getBlogPostMetaBySlug(slug: string): BlogPostMeta | undefined {
  return blogPostsMeta.find((post) => post.slug === slug);
}
