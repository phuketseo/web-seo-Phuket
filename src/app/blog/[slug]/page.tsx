import Link from "next/link";
import { notFound } from "next/navigation";
import { Home, ChevronRight, Calendar, Tag, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { buildBreadcrumb } from "@/lib/schema";
import { siteConfig } from "@/lib/utils";

const blogPosts: Record<
  string,
  {
    title: string;
    description: string;
    category: string;
    date: string;
    dateISO: string;
    readingTime: string;
    content: string;
    relatedServices: { name: string; href: string }[];
    keywords: string[];
  }
> = {
  "seo-for-phuket-hotels": {
    title: "เพิ่มยอดขายโรงแรมในภูเก็ตด้วย SEO: กลยุทธ์ที่พิสูจน์แล้ว",
    description:
      "ค้นพบวิธีที่ SEO สามารถช่วยให้โรงแรมของคุณโดดเด่นในตลาดการแข่งขันสูงของภูเก็ตและดึงดูดนักท่องเที่ยวได้มากขึ้น",
    category: "SEO",
    date: "20 พฤษภาคม 2569",
    dateISO: "2026-05-20",
    readingTime: "8 นาที",
    keywords: ["SEO โรงแรมภูเก็ต", "การตลาดโรงแรม", "SEO ภูเก็ต"],
    relatedServices: [
      { name: "บริการ SEO ภูเก็ต", href: "/services/seo-phuket" },
      { name: "Local SEO ป่าตอง", href: "/local/patong" },
      { name: "ขอรับ SEO Audit ฟรี", href: "/contact" },
    ],
    content: `
## ทำไมโรงแรมในภูเก็ตต้องทำ SEO?

ภูเก็ตเป็นหนึ่งในจุดหมายปลายทางการท่องเที่ยวที่มีการแข่งขันสูงที่สุดในเอเชีย มีโรงแรมมากกว่า **1,500 แห่ง** ที่แข่งกันดึงดูดนักท่องเที่ยว การทำ SEO จึงเป็นเครื่องมือสำคัญที่จะช่วยให้โรงแรมของคุณโดดเด่นจากคู่แข่ง

จากข้อมูลของ Google พบว่า **53% ของนักท่องเที่ยว** ค้นหาที่พักผ่าน Google ก่อนทำการจอง และกว่า **75% ของการคลิก** เกิดขึ้นที่ผลการค้นหา 3 อันดับแรก

---

## 5 กลยุทธ์ SEO สำหรับโรงแรมในภูเก็ต

### 1. Keyword Research เจาะกลุ่มเป้าหมายจริง

Keywords ที่โรงแรมในภูเก็ตควรเน้น:

- **High Intent (พร้อมจอง):** "โรงแรมป่าตองราคาถูก", "hotel patong beach booking"
- **Informational:** "ที่พักภูเก็ตน่าจอง 2026", "โรงแรมติดหาดภูเก็ต"
- **Long-tail:** "โรงแรมภูเก็ตพร้อมสระว่ายน้ำส่วนตัวราคาไม่เกิน 3000"

การใช้ Google Keyword Planner ร่วมกับ Search Console จะช่วยให้คุณเห็นว่าลูกค้าค้นหาอะไรบ้าง

### 2. On-Page SEO ที่แข็งแกร่ง

ทุกหน้าในเว็บไซต์โรงแรมควรมี:

- **Title Tag:** ชัดเจน มีชื่อโรงแรม + Location เช่น "Patong Beach Resort | โรงแรมติดหาดป่าตอง ภูเก็ต"
- **Meta Description:** 150-160 ตัวอักษร มี CTA เช่น "จองตรงประหยัดกว่า 20% รับส่วนลดพิเศษวันนี้"
- **Alt Text รูปภาพ:** อธิบายรูปอย่างละเอียด เช่น "ห้อง Deluxe Ocean View โรงแรม Patong Beach Resort ภูเก็ต"

### 3. Local SEO — ติด Google Maps

Google Business Profile คือสิ่งที่ขาดไม่ได้ ควรทำ:

1. ยืนยัน Google Business Profile และกรอกข้อมูลให้ครบ 100%
2. ใส่รูปภาพคุณภาพสูงอย่างน้อย **10 รูป** (ห้อง, สระ, อาหาร, วิว)
3. ตอบ Reviews ทุกรีวิวภายใน 24 ชั่วโมง
4. โพสต์ Google Posts อย่างน้อยสัปดาห์ละครั้ง

### 4. Schema Markup สำหรับ Hotel

การใส่ Hotel Schema จะช่วยให้ Google แสดงข้อมูลในรูปแบบ Rich Result พร้อม Star Rating, Check-in/out Time และ Amenities โดยตรงบนหน้าค้นหา

### 5. Content Marketing — สร้างเนื้อหาดึงดูดนักท่องเที่ยว

สร้างบทความที่ตอบคำถามของนักท่องเที่ยว เช่น:

- "10 ที่เที่ยวใกล้[ชื่อโรงแรม] ที่ไม่ควรพลาด"
- "ฤดูกาลท่องเที่ยวภูเก็ต เดือนไหนอากาศดีที่สุด"
- "เดินทางจากสนามบินภูเก็ตมาป่าตองอย่างไร"

---

## ผลลัพธ์ที่คาดหวัง

จากประสบการณ์ที่ PhuketSEO ดูแลโรงแรมมากกว่า **20 แห่ง** ในภูเก็ต ผลลัพธ์เฉลี่ยที่ได้:

| ระยะเวลา | Organic Traffic | Direct Booking |
|---|---|---|
| เดือนที่ 3 | +80-120% | +30-50% |
| เดือนที่ 6 | +150-200% | +80-120% |
| เดือนที่ 12 | +250-350% | +150-250% |

---

## สรุป

SEO สำหรับโรงแรมในภูเก็ตไม่ใช่แค่การทำให้ติดอันดับ แต่คือการสร้างระบบที่ดึงดูดลูกค้าให้เข้ามา **จอง Direct** แทนที่จะผ่าน OTA ที่คิดค่าคอมมิชชั่น 15-25%

หากต้องการ SEO Audit ฟรีสำหรับโรงแรมของคุณ ทีม PhuketSEO พร้อมให้คำปรึกษาโดยไม่มีค่าใช้จ่าย
    `,
  },
  "instagram-marketing-phuket-restaurants": {
    title: "การตลาดบน Instagram สำหรับธุรกิจร้านอาหารในภูเก็ต",
    description:
      "เรียนรู้เคล็ดลับและกลยุทธ์ในการใช้ Instagram เพื่อโปรโมทร้านอาหารของคุณในภูเก็ตและดึงดูดลูกค้าใหม่ๆ",
    category: "Social Media",
    date: "15 พฤษภาคม 2569",
    dateISO: "2026-05-15",
    readingTime: "7 นาที",
    keywords: ["Instagram Marketing ภูเก็ต", "Social Media ร้านอาหาร", "การตลาดร้านอาหาร"],
    relatedServices: [
      { name: "บริการ Social Media Marketing", href: "/services/social-media" },
      { name: "บริการ Google Ads", href: "/services/google-ads" },
      { name: "ขอคำปรึกษาฟรี", href: "/contact" },
    ],
    content: `
## ทำไม Instagram ถึงสำคัญสำหรับร้านอาหารในภูเก็ต?

ภูเก็ตมีนักท่องเที่ยวต่างชาติเข้ามามากกว่า **15 ล้านคนต่อปี** และส่วนใหญ่ใช้ Instagram ในการหาร้านอาหาร **73% ของ Millennials** ตัดสินใจเลือกร้านอาหารจากรูปภาพบน Instagram ก่อนตัดสินใจไปจริง

---

## กลยุทธ์ Instagram สำหรับร้านอาหาร

### 1. สร้าง Visual Identity ที่ชัดเจน

- เลือก **Color Palette** ที่สม่ำเสมอ 2-3 สี
- ใช้ **Preset** หรือ Filter เดิมทุกรูปเพื่อ Feed ที่สวยงาม
- ถ่ายรูปอาหารในแสงธรรมชาติหน้าต่างเสมอ

### 2. Hashtag Strategy ที่ถูกต้อง

ผสม Hashtag 3 ระดับ:
- **Local:** #phuketeats #phuketfood #ภูเก็ตกิน
- **Niche:** #thaistreetfood #seafoodlover
- **Trending:** ติดตามเทรนด์รายสัปดาห์

### 3. Reels สร้าง Reach แบบ Organic

วิดีโอ Reels สั้น 15-30 วินาทีมี Reach มากกว่ารูปปกติ **6-8 เท่า** ลองทำ:
- Behind-the-scenes การทำอาหาร
- Time-lapse ตกแต่งจาน
- Customer reaction

---

## สรุป

Instagram Marketing สำหรับร้านอาหารในภูเก็ตต้องอาศัยความสม่ำเสมอและ Content ที่มีคุณภาพ หากทำอย่างสม่ำเสมอ 3-6 เดือน คุณจะเห็นการเติบโตของ Follower และลูกค้าใหม่อย่างชัดเจน
    `,
  },
  "web-design-phuket-real-estate": {
    title: "สร้างเว็บไซต์ที่ดึงดูดลูกค้าสำหรับธุรกิจอสังหาริมทรัพย์ในภูเก็ต",
    description:
      "แนวทางในการออกแบบเว็บไซต์อสังหาริมทรัพย์ที่สวยงามและใช้งานง่าย เพื่อเปลี่ยนผู้เยี่ยมชมให้เป็นลูกค้าที่มีศักยภาพ",
    category: "Web Design",
    date: "10 พฤษภาคม 2569",
    dateISO: "2026-05-10",
    readingTime: "6 นาที",
    keywords: ["เว็บไซต์อสังหาริมทรัพย์ภูเก็ต", "Web Design ภูเก็ต", "รับทำเว็บภูเก็ต"],
    relatedServices: [
      { name: "บริการ Web Design", href: "/services/web-design" },
      { name: "บริการ SEO ภูเก็ต", href: "/services/seo-phuket" },
      { name: "ดูแพ็กเกจราคา", href: "/pricing" },
    ],
    content: `
## เว็บไซต์อสังหาริมทรัพย์ที่ดีควรมีอะไรบ้าง?

ในตลาดอสังหาริมทรัพย์ภูเก็ตที่มีการแข่งขันสูง เว็บไซต์ที่ดีไม่ได้แค่ "สวย" แต่ต้องช่วย **แปลง Visitor เป็น Lead** ได้จริง

---

## องค์ประกอบสำคัญ 5 ส่วน

### 1. Hero Section ที่ดึงดูด
- รูปภาพ/วิดีโอ Property คุณภาพสูง 4K
- Headline ที่ชัดเจน: "คอนโดติดหาดภูเก็ต ราคาเริ่มต้น 3.5 ล้าน"
- CTA Button ที่เด่น: "ดูโครงการ" หรือ "นัดชมจริง"

### 2. Property Search ที่ใช้งานง่าย
- Filter ตามประเภท, ราคา, พื้นที่, ห้องนอน
- แผนที่ Interactive แสดง Location
- รูปภาพ Gallery คุณภาพสูง

### 3. Social Proof
- Testimonials จากลูกค้าจริง
- จำนวน Properties ที่ขายได้แล้ว
- Awards & Certifications

### 4. Mobile-First Design
- **68% ของการค้นหาอสังหาฯ** ในภูเก็ตมาจาก Mobile
- ต้องโหลดเร็วใน 3G/4G

### 5. Lead Capture ทุกจุด
- Contact Form ที่หน้าแรก
- WhatsApp / LINE Button
- Exit-Intent Popup พร้อม Incentive

---

## สรุป

เว็บไซต์อสังหาริมทรัพย์ที่ดีต้องผสานระหว่างการออกแบบที่สวยงาม ฟังก์ชันที่ใช้งานได้จริง และ SEO ที่แข็งแกร่ง เพื่อดึงดูดทั้งลูกค้าไทยและต่างชาติ
    `,
  },
  "google-my-business-phuket": {
    title: "Google My Business: เครื่องมือสำคัญสำหรับธุรกิจขนาดเล็กในภูเก็ต",
    description:
      "ใช้ประโยชน์จาก Google My Business เพื่อเพิ่มการมองเห็นธุรกิจของคุณบน Google Maps และ Search ในพื้นที่ภูเก็ต",
    category: "Local SEO",
    date: "5 พฤษภาคม 2569",
    dateISO: "2026-05-05",
    readingTime: "5 นาที",
    keywords: ["Google My Business ภูเก็ต", "Local SEO ภูเก็ต", "Google Maps ภูเก็ต"],
    relatedServices: [
      { name: "บริการ SEO ภูเก็ต", href: "/services/seo-phuket" },
      { name: "Local SEO ตัวเมืองภูเก็ต", href: "/local/phuket-town" },
      { name: "ขอ SEO Audit ฟรี", href: "/contact" },
    ],
    content: `
## Google Business Profile คืออะไร?

Google Business Profile (เดิมชื่อ Google My Business) คือหน้าโปรไฟล์ธุรกิจฟรีบน Google ที่ทำให้ธุรกิจของคุณปรากฏใน **Google Maps** และ **Google Search** เมื่อมีคนค้นหาธุรกิจในพื้นที่ภูเก็ต

---

## วิธีตั้งค่า Google Business Profile ให้ได้ผล

### ขั้นที่ 1: กรอกข้อมูลให้ครบ 100%
- ชื่อธุรกิจ (ตรงกับป้ายหน้าร้าน)
- หมวดหมู่ธุรกิจ (เลือกให้ตรงที่สุด)
- ที่อยู่, เบอร์โทร, เว็บไซต์
- เวลาทำการ (อัปเดตในวันหยุด)

### ขั้นที่ 2: เพิ่มรูปภาพคุณภาพสูง
- รูปภายนอกร้าน 3-5 รูป
- รูปภายในร้าน 5-10 รูป
- รูปสินค้า/บริการ 10+ รูป
- อัปเดตรูปใหม่ทุกเดือน

### ขั้นที่ 3: จัดการ Reviews
- ตอบ Reviews ทุกรีวิว (ทั้งดีและไม่ดี)
- ขอ Review จากลูกค้าที่พอใจ
- ห้ามซื้อ Reviews เด็ดขาด

### ขั้นที่ 4: โพสต์ Google Posts สม่ำเสมอ
- โปรโมชั่นพิเศษ
- Event หรือข่าวสาร
- บทความ/เนื้อหาใหม่

---

## ผลลัพธ์ที่คาดหวัง

หลังจาก Optimize Google Business Profile อย่างเต็มที่ ลูกค้า PhuketSEO ส่วนใหญ่เห็นผล:
- **+150-300%** ใน Google Maps Impressions ภายใน 60 วัน
- **+50-100%** ใน Phone Calls จาก Google Maps
- **ติด 3-Pack** (3 อันดับแรกบน Maps) ภายใน 3-6 เดือน
    `,
  },
  "tiktok-marketing-phuket-services": {
    title: "กลยุทธ์ TikTok Marketing สำหรับธุรกิจบริการในภูเก็ต",
    description:
      "เจาะลึกกลยุทธ์การตลาดบน TikTok ที่จะช่วยให้ธุรกิจบริการของคุณเข้าถึงกลุ่มเป้าหมายวัยรุ่นและสร้างกระแสในภูเก็ต",
    category: "Social Media",
    date: "30 เมษายน 2569",
    dateISO: "2026-04-30",
    readingTime: "6 นาที",
    keywords: ["TikTok Marketing ภูเก็ต", "Social Media ภูเก็ต", "การตลาด TikTok"],
    relatedServices: [
      { name: "บริการ Social Media Marketing", href: "/services/social-media" },
      { name: "บริการ Google Ads", href: "/services/google-ads" },
      { name: "ขอคำปรึกษาฟรี", href: "/contact" },
    ],
    content: `
## TikTok กับตลาดภูเก็ต

TikTok มีผู้ใช้งานในไทยมากกว่า **20 ล้านคน** และเป็น Platform ที่เติบโตเร็วที่สุดในกลุ่มอายุ 18-35 ปี สำหรับธุรกิจบริการในภูเก็ต TikTok เป็นช่องทางที่คุ้มค่ามากเพราะ Organic Reach ยังสูงกว่า Facebook และ Instagram มาก

---

## กลยุทธ์ TikTok สำหรับธุรกิจบริการ

### 1. Hook ใน 3 วินาทีแรก
- เริ่มด้วยคำถามที่น่าสนใจ: "รู้มั้ยว่าทำไมธุรกิจในภูเก็ตถึงล้มเหลว?"
- ใช้ Visual ที่แปลกตาหรือน่าตกใจ
- อย่าใส่โลโก้หรือ Intro ยาว

### 2. Content Types ที่ work สำหรับบริการ
- **Behind-the-scenes:** กระบวนการทำงานจริง
- **Before/After:** ผลลัพธ์ที่เห็นได้ชัด
- **Tips & Tricks:** ความรู้ที่มีประโยชน์ 3-5 ข้อ
- **Customer Stories:** เล่าเรื่องลูกค้าที่ประสบความสำเร็จ

### 3. ใช้ Trending Sounds
- เพลงที่กำลัง Trending มี Boost Algorithm
- ตรวจสอบ TikTok Creative Center ทุกสัปดาห์

### 4. TikTok Ads สำหรับ Local Business
- **In-Feed Ads:** แทรกใน For You Page
- **Local Targeting:** เจาะแค่คนในภูเก็ต + จังหวัดใกล้เคียง
- Budget เริ่มต้นที่ 300-500 บาท/วัน

---

## สรุป

TikTok ไม่ใช่แค่แอปของวัยรุ่นอีกต่อไป แต่เป็น Platform ที่ธุรกิจบริการในภูเก็ตสามารถใช้สร้าง Brand Awareness และ Lead Generation ได้อย่างมีประสิทธิภาพด้วยต้นทุนต่ำ
    `,
  },
  "content-marketing-phuket-foreigners": {
    title: "Content Marketing: สร้างเนื้อหาที่ดึงดูดลูกค้าชาวต่างชาติในภูเก็ต",
    description:
      "แนวทางการสร้างสรรค์เนื้อหาที่น่าสนใจและตรงใจนักท่องเที่ยวต่างชาติ เพื่อเพิ่มการมีส่วนร่วมและยอดขายในภูเก็ต",
    category: "Content Marketing",
    date: "25 เมษายน 2569",
    dateISO: "2026-04-25",
    readingTime: "7 นาที",
    keywords: ["Content Marketing ภูเก็ต", "การตลาดต่างชาติ", "Tourism Marketing Phuket"],
    relatedServices: [
      { name: "บริการ SEO ภูเก็ต", href: "/services/seo-phuket" },
      { name: "บริการ Social Media", href: "/services/social-media" },
      { name: "ขอคำปรึกษาฟรี", href: "/contact" },
    ],
    content: `
## ทำไมต้องทำ Content สำหรับต่างชาติ?

ภูเก็ตรับนักท่องเที่ยวต่างชาติมากกว่า **10 ล้านคนต่อปี** จาก Top 5 ประเทศ: รัสเซีย, จีน, ออสเตรเลีย, อังกฤษ, เยอรมนี ธุรกิจที่สร้าง Content เป็นภาษาอังกฤษ (และภาษาอื่นๆ) จะเข้าถึงกลุ่มนี้ได้โดยตรง

---

## กลยุทธ์ Content สำหรับต่างชาติ

### 1. เข้าใจ Search Behavior ของต่างชาติ

นักท่องเที่ยวต่างชาติค้นหาแตกต่างจากคนไทย:

| กลุ่ม | Keywords ที่ใช้ |
|---|---|
| Backpacker | "budget hotel phuket", "cheap food phuket" |
| Family | "family resort phuket", "kid-friendly activities" |
| Luxury | "private pool villa phuket", "best spa phuket" |
| Expat | "long-term rental phuket", "co-working space phuket" |

### 2. Multilingual Content Strategy

- **ภาษาอังกฤษ:** ครอบคลุมตลาด EU, US, AU, SEA ที่พูดอังกฤษ
- **ภาษารัสเซีย:** กลุ่มที่ใหญ่ที่สุดในภูเก็ต
- **ภาษาจีน (Simplified):** WeChat, Baidu, Xiaohongshu

### 3. Content ที่ Work สำหรับต่างชาติ

- **"Best of" Guides:** "Best Restaurants in Phuket 2026"
- **Comparison:** "Patong vs Kata Beach — Which is Better?"
- **How-to:** "How to Get from Phuket Airport to Patong Beach"
- **Local Insider:** "Hidden Gems in Phuket — Places Locals Love"

### 4. Distribution Channels

- **SEO Blog** — ดึง Traffic จาก Google
- **Google Business Profile** — โพสต์เป็นภาษาอังกฤษ
- **TripAdvisor** — ตอบ Review เป็นภาษาของลูกค้า
- **Instagram/Facebook** — Boost โพสต์ที่เป็นภาษาอังกฤษ

---

## สรุป

Content Marketing สำหรับลูกค้าต่างชาติต้องเข้าใจ Search Behavior และ Cultural Context ของแต่ละกลุ่ม การลงทุนใน Content ที่ดีจะสร้างผลตอบแทนระยะยาวที่ดีกว่าการยิง Ads แบบ Short-term
    `,
  },
};

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];
  if (!post) return { title: "ไม่พบบทความ" };

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.dateISO,
      url: `${siteConfig.url}/blog/${slug}`,
    },
    alternates: { canonical: `${siteConfig.url}/blog/${slug}` },
  };
}

function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let tableRows: string[][] = [];
  let tableHeaders: string[] = [];
  let inTable = false;
  let inCodeBlock = false;
  let codeLines: string[] = [];
  let key = 0;

  const flush = () => {
    if (tableRows.length > 0) {
      elements.push(
        <div key={key++} className="overflow-x-auto my-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-blue-950 text-white">
                {tableHeaders.map((h, i) => (
                  <th key={i} className="px-4 py-3 text-left font-semibold">{h.trim()}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  {row.map((cell, j) => (
                    <td key={j} className="px-4 py-3 border-b border-gray-200">{cell.trim()}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      tableRows = [];
      tableHeaders = [];
      inTable = false;
    }
  };

  for (const line of lines) {
    if (line.startsWith("```")) {
      if (inCodeBlock) {
        elements.push(
          <pre key={key++} className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto my-4 text-sm font-mono">
            <code>{codeLines.join("\n")}</code>
          </pre>
        );
        codeLines = [];
        inCodeBlock = false;
      } else {
        inCodeBlock = true;
      }
      continue;
    }
    if (inCodeBlock) { codeLines.push(line); continue; }

    if (line.startsWith("|")) {
      const cells = line.split("|").filter((_, i, a) => i > 0 && i < a.length - 1);
      if (cells.every((c) => /^[-:\s]+$/.test(c))) continue;
      if (!inTable) { tableHeaders = cells; inTable = true; }
      else tableRows.push(cells);
      continue;
    }
    if (inTable) flush();

    if (line.startsWith("## ")) {
      elements.push(<h2 key={key++} className="text-2xl font-bold text-blue-950 mt-10 mb-4 font-serif">{line.slice(3)}</h2>);
    } else if (line.startsWith("### ")) {
      elements.push(<h3 key={key++} className="text-xl font-semibold text-gray-900 mt-6 mb-3">{line.slice(4)}</h3>);
    } else if (line.startsWith("- ")) {
      elements.push(<li key={key++} className="ml-5 list-disc text-gray-700 mb-1">{line.slice(2)}</li>);
    } else if (/^\d+\. /.test(line)) {
      elements.push(<li key={key++} className="ml-5 list-decimal text-gray-700 mb-1">{line.replace(/^\d+\. /, "")}</li>);
    } else if (line.startsWith("---")) {
      elements.push(<hr key={key++} className="border-gray-200 my-8" />);
    } else if (line.trim() === "") {
      elements.push(<div key={key++} className="h-2" />);
    } else {
      const bold = line.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
      elements.push(
        <p key={key++} className="text-gray-700 leading-relaxed mb-3"
          dangerouslySetInnerHTML={{ __html: bold }} />
      );
    }
  }
  flush();
  return elements;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts[slug];
  if (!post) notFound();

  const breadcrumbSchema = buildBreadcrumb([
    { name: "หน้าแรก", url: siteConfig.url },
    { name: "บล็อก", url: `${siteConfig.url}/blog` },
    { name: post.title, url: `${siteConfig.url}/blog/${slug}` },
  ]);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.dateISO,
    author: { "@type": "Organization", name: "PhuketSEO", url: siteConfig.url },
    publisher: {
      "@type": "Organization",
      name: "PhuketSEO",
      logo: { "@type": "ImageObject", url: `${siteConfig.url}/logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/blog/${slug}` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <div className="bg-blue-950 text-white py-14 px-4">
          <div className="max-w-3xl mx-auto">
            <nav className="flex items-center gap-2 text-sm text-blue-300 mb-6">
              <Link href="/" className="flex items-center gap-1 hover:text-white transition-colors">
                <Home size={14} /> หน้าแรก
              </Link>
              <ChevronRight size={14} />
              <Link href="/blog" className="hover:text-white transition-colors">บล็อก</Link>
              <ChevronRight size={14} />
              <span className="text-blue-200 truncate max-w-xs">{post.title}</span>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full flex items-center gap-1">
                <Tag size={11} /> {post.category}
              </span>
              <span className="text-blue-300 text-sm flex items-center gap-1">
                <Calendar size={13} /> {post.date}
              </span>
              <span className="text-blue-300 text-sm">· {post.readingTime} อ่าน</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold font-serif leading-tight">
              {post.title}
            </h1>
            <p className="mt-4 text-blue-200 text-lg leading-relaxed">{post.description}</p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-4 py-12">
          <div className="prose-content">
            {renderContent(post.content)}
          </div>

          {/* Related Services CTA */}
          <div className="mt-12 p-6 bg-blue-50 rounded-2xl border border-blue-100">
            <h3 className="text-lg font-bold text-blue-950 mb-4 font-serif">บริการที่เกี่ยวข้อง</h3>
            <div className="flex flex-wrap gap-3">
              {post.relatedServices.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="px-4 py-2 bg-blue-950 text-white text-sm rounded-lg hover:bg-green-500 transition-colors font-medium"
                >
                  {s.name} →
                </Link>
              ))}
            </div>
          </div>

          {/* Back to Blog */}
          <div className="mt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-950 transition-colors font-medium"
            >
              <ArrowLeft size={16} /> กลับไปหน้ารวมบทความ
            </Link>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-blue-950 to-blue-900 text-white py-14 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold font-serif mb-3">สนใจบริการ Digital Marketing?</h2>
            <p className="text-blue-200 mb-6">
              ทีม PhuketSEO พร้อมให้คำปรึกษาฟรี ไม่มีข้อผูกมัด วิเคราะห์เว็บไซต์ของคุณและบอกว่าควรเริ่มจากตรงไหน
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors"
              >
                ขอรับ SEO Audit ฟรี
              </Link>
              <Link
                href="/pricing"
                className="px-8 py-3 border border-blue-400 text-white hover:bg-blue-800 rounded-lg transition-colors"
              >
                ดูแพ็กเกจราคา
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
