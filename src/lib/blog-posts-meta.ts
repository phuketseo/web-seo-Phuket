/**
 * Blog post metadata — ใช้ร่วมกับ sitemap และ blog listing
 * เมื่อเพิ่มบทความใหม่ ให้อัปเดตไฟล์นี้พร้อมกับ blog/[slug]/page.tsx
 */
import { getBlogThumbnail, type SiteImage } from "@/lib/images";

export type BlogPostMeta = {
  slug: string;
  title: string;
  category: string;
  dateISO: string;
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
    slug: "direct-booking-hotel-phuket",
    title: "Direct Booking โรงแรมภูเก็ต 2026 — เมื่อ OTA กิน margin แล้วจองตรงเป็นอย่างไร",
    category: "Industry Guide",
    dateISO: "2026-06-19",
    description:
      "Direct Booking โรงแรมภูเก็ต ทำอย่างไรเมื่อ OTA กิน commission — ปัญหาช่องทางจองตรงที่พัง และทิศทางแก้สำหรับโรงแรมในภูเก็ต",
    thumbnail: getBlogThumbnail("direct-booking-hotel-phuket"),
  },
  {
    slug: "seo-clinic-phuket",
    title: "SEO คลินิกภูเก็ต 2026 — เพิ่มการมองเห็นให้ลูกค้ารู้จักธุรกิจคุณมากขึ้น",
    category: "Industry Guide",
    dateISO: "2026-06-18",
    description:
      "SEO คลินิกภูเก็ต ทำอย่างไรให้โผล่ Google Maps และ Search สร้างการมองเห็นและความน่าเชื่อถือสำหรับคลินิกในภูเก็ต",
    thumbnail: getBlogThumbnail("seo-clinic-phuket"),
  },
  {
    slug: "google-ads-vs-seo-phuket",
    title: "Google Ads vs SEO ภูเก็ต 2026 — ธุรกิจไหนควรเริ่มอะไรก่อน?",
    category: "SEO ภูเก็ต",
    dateISO: "2026-06-17",
    description:
      "Google Ads vs SEO ภูเก็ต เปรียบเทียบต้นทุน เวลา และแนวทางเริ่มต้นสำหรับโรงแรม ร้านอาหาร สปา และ SME",
    thumbnail: getBlogThumbnail("google-ads-vs-seo-phuket"),
  },
  {
    slug: "rab-tam-web-phuket",
    title: "รับทำเว็บไซต์ภูเก็ต — เว็บ Next.js เร็ว ติด Google พร้อม SEO",
    category: "เว็บ Next.js",
    dateISO: "2026-06-17",
    description: "รับทำเว็บไซต์ภูเก็ต Next.js mobile-first พร้อม SEO AEO ราคา setup ฿29,900 ขึ้นไป",
    thumbnail: getBlogThumbnail("rab-tam-web-phuket"),
  },
  {
    slug: "geo-kue-arai",
    title: "GEO คืออะไร? Generative Engine Optimization สำหรับธุรกิจภูเก็ต",
    category: "AEO & GEO",
    dateISO: "2026-06-17",
    description: "GEO คืออะไร ทำอย่างไรให้ ChatGPT Perplexity อ้างอิงธุรกิจในภูเก็ต",
    thumbnail: getBlogThumbnail("geo-kue-arai"),
  },
  {
    slug: "aeo-kue-arai",
    title: "AEO คืออะไร? Answer Engine Optimization สำหรับธุรกิจในภูเก็ต",
    category: "AEO & GEO",
    dateISO: "2026-06-16",
    description: "AEO คืออะไร ต่างจาก SEO อย่างไร GEO llms.txt และวิธีเตรียมธุรกิจภูเก็ตให้ AI อ้างอิง",
    thumbnail: getBlogThumbnail("aeo-kue-arai"),
  },
  {
    slug: "ai-overview-kue-arai",
    title: "AI Overview คืออะไร? ผลกระทบต่อ SEO ภูเก็ตและวิธีปรับตัว",
    category: "AEO & GEO",
    dateISO: "2026-06-16",
    description: "Google AI Overview คืออะไร กระทบ SEO ภูเก็ตอย่างไร ธุรกิจท้องถิ่นควรทำอะไร",
    thumbnail: getBlogThumbnail("ai-overview-kue-arai"),
  },
  {
    slug: "seo-phuket-kue-arai",
    title: "SEO ภูเก็ต คืออะไร? คู่มือฉบับสมบูรณ์สำหรับธุรกิจในภูเก็ต",
    category: "SEO ภูเก็ต",
    dateISO: "2026-06-15",
    description: "SEO ภูเกต คืออะไร ทำไมธุรกิจในภูเกตต้องทำ และควรเริ่มจากอะไร",
    thumbnail: getBlogThumbnail("seo-phuket-kue-arai"),
  },
  {
    slug: "local-seo-phuket-kue-arai",
    title: "Local SEO ภูเก็ต คืออะไร? วิธีให้ธุรกิจติด Google Maps",
    category: "Local SEO",
    dateISO: "2026-06-15",
    description: "Local SEO ภูเกต ทำอย่างไรให้ธุรกิจโผล่ Google Maps ในโซนจริง",
    thumbnail: getBlogThumbnail("local-seo-phuket-kue-arai"),
  },
  {
    slug: "raaka-seo-phuket",
    title: "ราคา SEO ภูเก็ต 2026 — ควรจ่ายเท่าไหร่ถึงคุ้มค่า?",
    category: "SEO ภูเก็ต",
    dateISO: "2026-06-15",
    description: "ราคา SEO ภูเก็ต 2026 แพ็ก Lite ฿5,900 Pro ฿8,900 Pro Max ฿15,000",
    thumbnail: getBlogThumbnail("raaka-seo-phuket"),
  },
  {
    slug: "seo-for-phuket-spas",
    title: "SEO สปาภูเก็ต: ดึง Direct Booking ไม่พึ่ง OTA",
    category: "Industry Guide",
    dateISO: "2026-06-17",
    description:
      "SEO สปาภูเกต ทำอย่างไรให้ Direct Booking โต ลด OTA ด้วย Local SEO และการมองเห็นบน Google",
    thumbnail: getBlogThumbnail("seo-for-phuket-spas"),
  },
  {
    slug: "gemini-hotel-competitor-analysis",
    title: "Competitive Audit โรงแรมภูเก็ต: วิเคราะห์คู่แข่ง + วางแผน SEO 90 วัน",
    category: "AEO & GEO",
    dateISO: "2026-06-17",
    description:
      "Competitive Audit โรงแรมภูเกต วิเคราะห์คู่แข่งในโซนและวางแผน SEO ตามข้อมูลจริง",
    thumbnail: getBlogThumbnail("gemini-hotel-competitor-analysis"),
  },
  {
    slug: "seo-for-phuket-hotels",
    title: "SEO โรงแรมภูเก็ต: เพิ่ม Direct Booking ลด OTA",
    category: "Industry Guide",
    dateISO: "2026-06-17",
    description:
      "SEO โรงแรมภูเกต ทำอย่างไรให้ Direct Booking โต ลด OTA ด้วยการมองเห็นบน Google",
    thumbnail: getBlogThumbnail("seo-for-phuket-hotels"),
  },
  {
    slug: "instagram-marketing-phuket-restaurants",
    title: "ร้านอาหารภูเก็ต: ทำ Google Maps ก่อน Instagram",
    category: "Industry Guide",
    dateISO: "2026-06-17",
    description:
      "ร้านอาหารภูเกต ทำ Google Maps ก่อน Instagram — Social เป็นเทคนิคเสริม",
    thumbnail: getBlogThumbnail("instagram-marketing-phuket-restaurants"),
  },
  {
    slug: "web-design-phuket-real-estate",
    title: "เว็บอสังหาริมทรัพย์ภูเก็ต: Next.js + SEO ดึง Lead จริง",
    category: "เว็บ Next.js",
    dateISO: "2026-06-17",
    description:
      "เว็บอสังหาริมทรัพย์ภูเกต ที่ดึง lead ได้จริง — mobile-first และ SEO structure",
    thumbnail: getBlogThumbnail("web-design-phuket-real-estate"),
  },
  {
    slug: "google-my-business-phuket",
    title: "Google Business Profile ภูเก็ต: Quick Win แรกของ Local SEO",
    category: "Local SEO",
    dateISO: "2026-06-17",
    description:
      "Google Business Profile ภูเกต ทำอย่างไรให้ธุรกิจโผล่ Maps",
    thumbnail: getBlogThumbnail("google-my-business-phuket"),
  },
  {
    slug: "tiktok-marketing-phuket-services",
    title: "ธุรกิจบริการภูเก็ต: ทำ Google Maps ก่อน TikTok",
    category: "Industry Guide",
    dateISO: "2026-06-17",
    description:
      "ธุรกิจบริการภูเกต ทำ Google Maps ก่อน TikTok — Social เป็นเทคนิคเสริม",
    thumbnail: getBlogThumbnail("tiktok-marketing-phuket-services"),
  },
  {
    slug: "content-marketing-phuket-foreigners",
    title: "SEO Content EN ภูเก็ต: ดึงลูกค้าต่างชาติจาก Google",
    category: "SEO ภูเก็ต",
    dateISO: "2026-06-17",
    description:
      "Content EN สำหรับธุรกิจภูเกต ดึงลูกค้าต่างชาติจาก Google organic",
    thumbnail: getBlogThumbnail("content-marketing-phuket-foreigners"),
  },
];

export const blogPostSlugs = blogPostsMeta.map((post) => post.slug);
