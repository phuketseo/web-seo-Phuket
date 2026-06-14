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
  "SEO",
  "AI Marketing",
  "Social Media",
  "Web Design",
  "Local SEO",
  "Content Marketing",
] as const;

export const blogPostsMeta: BlogPostMeta[] = [
  {
    slug: "seo-for-phuket-spas",
    title: "SEO สำหรับ Spa & Wellness ภูเก็ต: ดึง Booking ต่างชาติโดยไม่พึ่ง OTA",
    category: "SEO",
    dateISO: "2026-06-14",
    description:
      "สปาในกะตะที่ผ่านมาพึ่ง Agoda/Klook เป็นหลัก — ทำไม SEO + Local ถึงเพิ่ม Direct Booking 60% ใน 5 เดือน",
    thumbnail: getBlogThumbnail("seo-for-phuket-spas"),
  },
  {
    slug: "gemini-hotel-competitor-analysis",
    title: "Gemini Competitive Audit โรงแรมภูเก็ต: วิเคราะห์คู่แข่งแล้ววางแผน SEO 90 วัน",
    category: "AI Marketing",
    dateISO: "2026-06-10",
    description:
      "เรื่องจริงจากโรงแรมในกะตะ — ทำไม Competitive Audit ด้วย Gemini ช่วยให้เห็นช่องว่าง SEO ในโซนภูเก็ต และผลลัพธ์หลัง 90 วัน",
    thumbnail: getBlogThumbnail("gemini-hotel-competitor-analysis"),
  },
  {
    slug: "seo-for-phuket-hotels",
    title: "เพิ่มยอดขายโรงแรมในภูเก็ตด้วย SEO: กลยุทธ์ที่พิสูจน์แล้ว",
    category: "SEO",
    dateISO: "2026-05-20",
    description:
      "โรงแรมป่าตองที่จองผ่าน OTA 90% — ทำไม SEO โซนและ Direct Booking ถึงเปลี่ยนตัวเลขได้ใน 6 เดือน",
    thumbnail: getBlogThumbnail("seo-for-phuket-hotels"),
  },
  {
    slug: "instagram-marketing-phuket-restaurants",
    title: "การตลาดบน Instagram สำหรับธุรกิจร้านอาหารในภูเก็ต",
    category: "Social Media",
    dateISO: "2026-05-15",
    description:
      "ร้านซีฟู้ดตลาดใหม่ที่ Reels 1 คลิปพา walk-in +40% — แนวทาง Instagram สำหรับร้านอาหารภูเก็ตโดย PhuketSEO",
    thumbnail: getBlogThumbnail("instagram-marketing-phuket-restaurants"),
  },
  {
    slug: "web-design-phuket-real-estate",
    title: "สร้างเว็บไซต์ที่ดึงดูดลูกค้าสำหรับธุรกิจอสังหาริมทรัพย์ในภูเก็ต",
    category: "Web Design",
    dateISO: "2026-05-10",
    description:
      "เว็บอสังหาฯ ที่สวยแต่ไม่มี Lead — เรื่องจริงจากตัวแทนขายคอนโดภูเก็ตและวิธีที่ Web + SEO ช่วยเพิ่ม inquiry",
    thumbnail: getBlogThumbnail("web-design-phuket-real-estate"),
  },
  {
    slug: "google-my-business-phuket",
    title: "Google My Business: เครื่องมือสำคัญสำหรับธุรกิจขนาดเล็กในภูเก็ต",
    category: "Local SEO",
    dateISO: "2026-05-05",
    description:
      "ร้านในเมืองเก่าที่ไม่โผล่ Maps — ทำไม Google Business Profile ถึงเป็น Quick Win แรกของธุรกิจเล็กในภูเก็ต",
    thumbnail: getBlogThumbnail("google-my-business-phuket"),
  },
  {
    slug: "tiktok-marketing-phuket-services",
    title: "กลยุทธ์ TikTok Marketing สำหรับธุรกิจบริการในภูเก็ต",
    category: "Social Media",
    dateISO: "2026-04-30",
    description:
      "สปาในกะตะที่ TikTok Organic พา booking ใหม่ทุกสัปดาห์ — กลยุทธ์ TikTok สำหรับธุรกิจบริการภูเก็ต",
    thumbnail: getBlogThumbnail("tiktok-marketing-phuket-services"),
  },
  {
    slug: "content-marketing-phuket-foreigners",
    title: "Content Marketing: สร้างเนื้อหาที่ดึงดูดลูกค้าชาวต่างชาติในภูเก็ต",
    category: "Content Marketing",
    dateISO: "2026-04-25",
    description:
      "ธุรกิจท่องเที่ยวที่ Ads แพงแต่ Organic จาก Google ยังว่าง — Content ภาษาอังกฤษที่ดึงลูกค้าต่างชาติในภูเก็ต",
    thumbnail: getBlogThumbnail("content-marketing-phuket-foreigners"),
  },
];

export const blogPostSlugs = blogPostsMeta.map((post) => post.slug);
