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
    description: "SEO ภูเก็ต คืออะไร ทำไมธุรกิจในภูเก็ตต้องทำ ใช้เวลานานแค่ไหร่ ราคาเท่าไหร่",
    thumbnail: getBlogThumbnail("seo-phuket-kue-arai"),
  },
  {
    slug: "local-seo-phuket-kue-arai",
    title: "Local SEO ภูเก็ต คืออะไร? วิธีให้ธุรกิจติด Google Maps",
    category: "Local SEO",
    dateISO: "2026-06-15",
    description: "Local SEO ภูเก็ต ทำอย่างไรให้ติด Google Maps และ Local Pack",
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
      "SEO สปาภูเก็ต ทำอย่างไรให้ Direct Booking โต ลด OTA ด้วย Local SEO เว็บ Next.js และ AEO แพ็ก Pro ฿8,900",
    thumbnail: getBlogThumbnail("seo-for-phuket-spas"),
  },
  {
    slug: "gemini-hotel-competitor-analysis",
    title: "Competitive Audit โรงแรมภูเก็ต: วิเคราะห์คู่แข่ง + วางแผน SEO 90 วัน",
    category: "AEO & GEO",
    dateISO: "2026-06-17",
    description:
      "Competitive Audit โรงแรมภูเก็ต ด้วย Gemini + ข้อมูลจริง วางแผน SEO AEO 90 วัน แพ็ก Pro ฿8,900",
    thumbnail: getBlogThumbnail("gemini-hotel-competitor-analysis"),
  },
  {
    slug: "seo-for-phuket-hotels",
    title: "SEO โรงแรมภูเก็ต: เพิ่ม Direct Booking ลด OTA",
    category: "Industry Guide",
    dateISO: "2026-06-17",
    description:
      "SEO โรงแรมภูเก็ต ทำอย่างไรให้ Direct Booking โต ลด OTA ด้วย Local SEO เว็บ Next.js และ AEO แพ็ก Pro ฿8,900",
    thumbnail: getBlogThumbnail("seo-for-phuket-hotels"),
  },
  {
    slug: "instagram-marketing-phuket-restaurants",
    title: "ร้านอาหารภูเก็ต: ทำ Google Maps ก่อน Instagram",
    category: "Industry Guide",
    dateISO: "2026-06-17",
    description:
      "ร้านอาหารภูเก็ต ทำ Local SEO + Google Maps ก่อน Instagram แพ็ก Lite ฿5,900 Social เป็นเทคนิคเสริม",
    thumbnail: getBlogThumbnail("instagram-marketing-phuket-restaurants"),
  },
  {
    slug: "web-design-phuket-real-estate",
    title: "เว็บอสังหาริมทรัพย์ภูเก็ต: Next.js + SEO ดึง Lead จริง",
    category: "เว็บ Next.js",
    dateISO: "2026-06-17",
    description:
      "รับทำเว็บอสังหาฯ ภูเก็ต Next.js mobile-first พร้อม SEO lead gen setup ฿29,900 ขึ้นไป",
    thumbnail: getBlogThumbnail("web-design-phuket-real-estate"),
  },
  {
    slug: "google-my-business-phuket",
    title: "Google Business Profile ภูเก็ต: Quick Win แรกของ Local SEO",
    category: "Local SEO",
    dateISO: "2026-06-17",
    description:
      "Google Business Profile ภูเก็ต ทำอย่างไรให้โผล่ Maps รวมในแพ็ก SEO Lite ฿5,900/เดือน",
    thumbnail: getBlogThumbnail("google-my-business-phuket"),
  },
  {
    slug: "tiktok-marketing-phuket-services",
    title: "ธุรกิจบริการภูเก็ต: ทำ Google Maps ก่อน TikTok",
    category: "Industry Guide",
    dateISO: "2026-06-17",
    description:
      "สปาและธุรกิจบริการภูเก็ต ทำ Local SEO + Direct Booking ก่อน TikTok แพ็ก Pro ฿8,900",
    thumbnail: getBlogThumbnail("tiktok-marketing-phuket-services"),
  },
  {
    slug: "content-marketing-phuket-foreigners",
    title: "SEO Content EN ภูเก็ต: ดึงลูกค้าต่างชาติจาก Google",
    category: "SEO ภูเก็ต",
    dateISO: "2026-06-17",
    description:
      "Content EN สำหรับธุรกิจภูเก็ต ติด Google organic ลด dependency Ads รวมในแพ็ก Pro ฿8,900",
    thumbnail: getBlogThumbnail("content-marketing-phuket-foreigners"),
  },
];

export const blogPostSlugs = blogPostsMeta.map((post) => post.slug);
