/**
 * Blog post metadata — ใช้ร่วมกับ sitemap และ blog listing
 * เมื่อเพิ่มบทความใหม่ ให้อัปเดตไฟล์นี้พร้อมกับ blog/[slug]/page.tsx
 */
export type BlogPostMeta = {
  slug: string;
  title: string;
  category: string;
  dateISO: string;
};

export const blogPostsMeta: BlogPostMeta[] = [
  {
    slug: "seo-for-phuket-hotels",
    title: "เพิ่มยอดขายโรงแรมในภูเก็ตด้วย SEO: กลยุทธ์ที่พิสูจน์แล้ว",
    category: "SEO",
    dateISO: "2026-05-20",
  },
  {
    slug: "instagram-marketing-phuket-restaurants",
    title: "การตลาดบน Instagram สำหรับธุรกิจร้านอาหารในภูเก็ต",
    category: "Social Media",
    dateISO: "2026-05-15",
  },
  {
    slug: "web-design-phuket-real-estate",
    title: "สร้างเว็บไซต์ที่ดึงดูดลูกค้าสำหรับธุรกิจอสังหาริมทรัพย์ในภูเก็ต",
    category: "Web Design",
    dateISO: "2026-05-10",
  },
  {
    slug: "google-my-business-phuket",
    title: "Google My Business: เครื่องมือสำคัญสำหรับธุรกิจขนาดเล็กในภูเก็ต",
    category: "Local SEO",
    dateISO: "2026-05-05",
  },
  {
    slug: "tiktok-marketing-phuket-services",
    title: "กลยุทธ์ TikTok Marketing สำหรับธุรกิจบริการในภูเก็ต",
    category: "Social Media",
    dateISO: "2026-04-30",
  },
  {
    slug: "content-marketing-phuket-foreigners",
    title: "Content Marketing: สร้างเนื้อหาที่ดึงดูดลูกค้าชาวต่างชาติในภูเก็ต",
    category: "Content Marketing",
    dateISO: "2026-04-25",
  },
];

export const blogPostSlugs = blogPostsMeta.map((post) => post.slug);
