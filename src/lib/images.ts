/**
 * Image assets — paths, alt text, dimensions
 * อ้างอิงจาก PhuketSEO.com - Image Assets Package.md
 *
 * ## Clean Purple Hero Template (มาตรฐาน blog 2026)
 * - Layout: ข้อความซ้าย ~42% | ภาพ/mockup ขวา ~58%
 * - พื้นหลัง: ขาว/เทาอ่อน + purple curve อ่อนมุม
 * - สี: navy #1e3a8a · indigo/violet #6366f1–#7c3aed · accent 4 สี (purple/orange/green/blue)
 * - หัวข้อ: keyword หลักเป็นสี purple, บรรทัดรอง navy
 * - ซ้ายล่าง: ไอคอนกลม 4 จุด + label สั้น
 * - ขวา: laptop/มือถือ + floating UI (search bar, keyword tags, stats card)
 * - ขนาด: 3:2 → 2304×1536 px
 * - ไฟล์ใหม่ใช้ suffix `-clean.png` (v1) หรือ `-smooth.png` (v2 — ดู image-style-smooth-purple.ts)
 * - ไม่ใส่ใบหน้าคนจริง
 *
 * ### บทความที่ใช้ Clean Purple แล้ว
 * - seo-phuket-kue-arai (hero + search/maps + stack + zones inline)
 * - local-seo-phuket-kue-arai (hero + maps + results inline)
 * - rab-tam-web-phuket (hero + pricing + results inline)
 * - raaka-seo-phuket (hero + pricing inline)
 * - aeo-kue-arai (hero + compare inline)
 * - ai-overview-kue-arai (hero + SERP inline)
 * - geo-kue-arai (hero + steps inline)
 * - seo-for-phuket-spas (hero + maps + case study inline)
 * - gemini-hotel-competitor-analysis (hero + serp + results inline)
 * - seo-for-phuket-hotels (hero + maps + results inline)
 * - instagram-marketing-phuket-restaurants (hero + results inline)
 * - web-design-phuket-real-estate (hero + results inline)
 * - google-my-business-phuket (hero + results inline)
 * - google-search-console-phuket (hero + dashboard inline)
 * - tiktok-marketing-phuket-services (hero + results inline)
 * - content-marketing-phuket-foreigners (hero + results inline)
 *
 * ### QA: รัน `npm run check:images` ตรวจ path ทุกไฟล์
 *
 * ## Smooth Purple v2 (มาตรฐานใหม่ — gradient นุ่มแบบ Canva)
 * - ไฟล์: `src/lib/image-style-smooth-purple.ts` → `buildSmoothPurplePrompt()`
 * - Gradient: teal #06b6d4 → blue → indigo #6366f1 → violet #8b5cf6 (mesh/blob 12–20% opacity)
 * - Glass cards + soft shadow · ไม่มี mascot/คน
 * - Layout: 42/58 (blog) หรือ 25/75 + sidebar 5 การ์ด (pillar infographic)
 * - Suffix: `-smooth.png`
 *
 * ## Site-wide Clean Purple (Phase 7)
 * - hero/ services/ icons/ case-studies/ team/ stats/ — ใช้ suffix `-clean.png`
 * - Hero & service banners: 16:9 → 2560×1440
 * - Icons & team avatars: 1:1 → 1920×1920
 * - Case studies: 4:3 → 2176×1632
 */
export type SiteImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** landscape = 3:2 (default) · portrait = infographic แนวตั้ง */
  layout?: "landscape" | "portrait";
  /** portrait only — 4:5 Facebook-style (default ใหม่) · 9:16 สำหรับ :::split */
  ratio?: "4:5" | "9:16";
  /** bump เมื่อเปลี่ยนไฟล์รูป — bust browser / Next image cache (?v=) */
  rev?: number;
};

/** URL สำหรับ next/image — ใส่ ?v= เมื่อมี rev */
export function resolveImageSrc(image: Pick<SiteImage, "src" | "rev">): string {
  if (!image.rev) return image.src;
  const joiner = image.src.includes("?") ? "&" : "?";
  return `${image.src}${joiner}v=${image.rev}`;
}

export const siteImages = {
  hero: {
    home: {
      src: "/images/hero/hero-home-visibility-stack-smooth.webp",
      alt: "รับทำ SEO และเว็บไซต์ภูเก็ต — ติด Google Maps และ AI Search",
      width: 1536,
      height: 1024,
    },
    about: {
      src: "/images/hero/hero-about-team-clean.png",
      alt: "ทีมงาน PhuketSEO ผู้เชี่ยวชาญ Digital Marketing ภูเก็ต",
      width: 2560,
      height: 1440,
    },
  },
  services: {
    seo: {
      src: "/images/services/hero-service-seo-clean.png",
      alt: "บริการ SEO ภูเก็ต เพิ่มอันดับ Google",
      width: 2560,
      height: 1440,
    },
    googleAds: {
      src: "/images/services/hero-service-google-ads-clean.png",
      alt: "บริการ Google Ads ภูเก็ต เพิ่ม ROI",
      width: 2560,
      height: 1440,
    },
    socialMedia: {
      src: "/images/services/hero-service-social-media-clean.png",
      alt: "บริการ Social Media Marketing ภูเก็ต",
      width: 2560,
      height: 1440,
    },
    webDesign: {
      src: "/images/services/hero-service-web-design-clean.png",
      alt: "บริการออกแบบเว็บไซต์ภูเก็ต",
      width: 2560,
      height: 1440,
    },
    localSeo: {
      src: "/images/services/hero-service-local-seo-clean.png",
      alt: "บริการ Local SEO — ติด Google Maps รีวิว NAP แพ็กเริ่ม ฿5,900/เดือน",
      width: 3840,
      height: 2560,
    },
  },
  icons: {
    seo: {
      src: "/images/icons/icon-seo-service-clean.png",
      alt: "ไอคอนบริการ SEO",
      width: 1920,
      height: 1920,
    },
    googleAds: {
      src: "/images/icons/icon-google-ads-clean.png",
      alt: "ไอคอนบริการ Google Ads",
      width: 1920,
      height: 1920,
    },
    socialMedia: {
      src: "/images/icons/icon-social-media-clean.png",
      alt: "ไอคอนบริการ Social Media",
      width: 1920,
      height: 1920,
    },
    webDesign: {
      src: "/images/icons/icon-web-design-clean.png",
      alt: "ไอคอนบริการออกแบบเว็บไซต์",
      width: 1920,
      height: 1920,
    },
  },
  caseStudies: {
    hotel: {
      src: "/images/case-studies/case-study-hotel-clean.png",
      alt: "ผลงาน SEO โรงแรมภูเก็ต เพิ่ม Traffic 250%",
      width: 2176,
      height: 1632,
    },
    realestate: {
      src: "/images/case-studies/case-study-realestate-clean.png",
      alt: "ผลงาน SEO อสังหาริมทรัพย์ภูเก็ต เพิ่ม Leads 320%",
      width: 2176,
      height: 1632,
    },
    restaurant: {
      src: "/images/case-studies/case-study-restaurant-clean.png",
      alt: "ผลงาน SEO ร้านอาหารภูเก็ต เพิ่ม Bookings 180%",
      width: 2176,
      height: 1632,
    },
    clinic: {
      src: "/images/case-studies/case-study-clinic-clean.png",
      alt: "ผลงาน SEO คลินิกภูเก็ต เพิ่ม Appointments 200%",
      width: 2176,
      height: 1632,
    },
  },
  blog: {
    seoHotel: {
      src: "/images/blog/blog-thumb-seo-hotel-phuket.png",
      alt: "SEO สำหรับโรงแรมในภูเก็ต",
      width: 2304,
      height: 1536,
    },
    googleAds: {
      src: "/images/blog/blog-thumb-google-ads-2025.png",
      alt: "กลยุทธ์ Google Ads 2025",
      width: 2304,
      height: 1536,
    },
    socialMedia: {
      src: "/images/blog/blog-thumb-social-media-strategy.png",
      alt: "กลยุทธ์ Social Media Marketing",
      width: 2304,
      height: 1536,
    },
    localSeo: {
      src: "/images/blog/blog-thumb-local-seo-phuket.png",
      alt: "Local SEO ภูเก็ต",
      width: 2304,
      height: 1536,
    },
    localSeoPillar: {
      src: "/images/blog/blog-thumb-local-seo-phuket-kue-arai-clean.png",
      alt: "Local SEO ภูเก็ต คืออะไร — ติด Google Maps 3-Pack Maps Impressions +240%",
      width: 2304,
      height: 1536,
    },
    localSeoMaps: {
      src: "/images/blog/blog-inline-local-seo-maps-clean.png",
      alt: "Google Maps 3-Pack — ช่องทางลูกค้าท้องถิ่นภูเก็ต Maps Impressions +240%",
      width: 2304,
      height: 1536,
    },
    localSeoResults: {
      src: "/images/blog/blog-inline-local-seo-results-clean.png",
      alt: "ผลลัพธ์ 3 เดือน Local SEO ภูเก็ต — Maps +240% Phone Calls +85% Reviews 12→48",
      width: 2304,
      height: 1536,
    },
    contentMarketing: {
      src: "/images/blog/blog-thumb-content-marketing.png",
      alt: "Content Marketing Strategy",
      width: 2304,
      height: 1536,
    },
    seoSpa: {
      src: "/images/blog/blog-thumb-seo-spa-phuket-clean.png",
      alt: "SEO สำหรับ Spa & Wellness ภูเก็ต — เพิ่ม Direct Booking ไม่พึ่ง OTA",
      width: 2304,
      height: 1536,
    },
    spaLocalSeo: {
      src: "/images/blog/blog-inline-spa-local-seo-clean.png",
      alt: "Google Maps 3-Pack สำหรับสปาภูเก็ต — ช่องทาง Direct Booking ที่ไม่เสีย commission",
      width: 2304,
      height: 1536,
    },
    spaCaseStudy: {
      src: "/images/blog/blog-inline-spa-case-study-clean.png",
      alt: "ผลลัพธ์จริง SEO สปาภูเก็ต — Direct Booking +60% Organic Traffic +190% ใน 5 เดือน",
      width: 2304,
      height: 1536,
    },
    geminiHotel: {
      src: "/images/blog/blog-thumb-gemini-hotel-clean.png",
      alt: "Gemini วิเคราะห์คู่แข่งโรงแรมภูเก็ต — แผน SEO 90 วัน",
      width: 2304,
      height: 1536,
    },
    seoHotelNew: {
      src: "/images/blog/blog-thumb-seo-hotel-clean.png",
      alt: "SEO โรงแรมภูเก็ต — เพิ่ม Direct Booking ลด OTA commission",
      width: 2304,
      height: 1536,
    },
    instagramRestaurant: {
      src: "/images/blog/blog-thumb-instagram-restaurant-clean.png",
      alt: "Instagram Marketing สำหรับร้านอาหารภูเก็ต — Walk-in +40%",
      width: 2304,
      height: 1536,
    },
    webDesignRealestate: {
      src: "/images/blog/blog-thumb-web-design-realestate-clean.png",
      alt: "เว็บไซต์อสังหาฯ ภูเก็ต ที่ดึงดูด Lead ได้จริง — Leads +320%",
      width: 2304,
      height: 1536,
    },
    gmbPhuket: {
      src: "/images/blog/blog-thumb-gmb-phuket-clean.png",
      alt: "Google My Business เครื่องมือสำคัญธุรกิจเล็กภูเก็ต — Maps Impressions +240%",
      width: 2304,
      height: 1536,
    },
    gscPhuket: {
      src: "/images/blog/blog-thumb-gsc-phuket-clean.png",
      alt: "Google Search Console ภูเก็ต — วัดผล Local SEO หลังตั้ง GBP Performance Indexing Sitemap",
      width: 2304,
      height: 1536,
    },
    gscGbpCompare: {
      src: "/images/blog/blog-inline-gsc-gbp-compare-clean.png",
      alt: "เปรียบเทียบ Google Business Profile กับ Google Search Console — Maps vs organic search",
      width: 2304,
      height: 1536,
    },
    tiktokServices: {
      src: "/images/blog/blog-thumb-tiktok-services-clean.png",
      alt: "TikTok Marketing สำหรับธุรกิจบริการภูเก็ต — Booking +55%",
      width: 2304,
      height: 1536,
    },
    contentForeigners: {
      src: "/images/blog/blog-thumb-content-foreigners-clean.png",
      alt: "Content Marketing ดึงลูกค้าต่างชาติในภูเก็ต — Organic EN +210%",
      width: 2304,
      height: 1536,
    },
    geminiSerp: {
      src: "/images/blog/blog-inline-gemini-serp-clean.png",
      alt: "Competitive Audit ด้วย Gemini — มองเห็นช่องว่าง SEO ในโซนภูเก็ต",
      width: 2304,
      height: 1536,
    },
    geminiResults: {
      src: "/images/blog/blog-inline-gemini-results-clean.png",
      alt: "ผลลัพธ์ 90 วัน หลัง Competitive Audit โรงแรมภูเก็ต",
      width: 2304,
      height: 1536,
    },
    hotelMaps: {
      src: "/images/blog/blog-inline-hotel-maps-clean.png",
      alt: "Google Maps 3-Pack — ช่องทาง Direct Booking โรงแรมภูเก็ต Maps Impressions +220%",
      width: 2304,
      height: 1536,
    },
    hotelResults: {
      src: "/images/blog/blog-inline-hotel-results-clean.png",
      alt: "ผลลัพธ์ 6 เดือน SEO โรงแรมป่าตอง — Organic Traffic +180% Direct Booking +34%",
      width: 2304,
      height: 1536,
    },
    instagramResults: {
      src: "/images/blog/blog-inline-instagram-results-clean.png",
      alt: "ผลลัพธ์ 90 วัน Instagram ร้านซีฟู้ดตลาดใหม่ภูเก็ต",
      width: 2304,
      height: 1536,
    },
    realestateResults: {
      src: "/images/blog/blog-inline-realestate-results-clean.png",
      alt: "ผลลัพธ์ 4 เดือน Web + SEO อสังหาริมทรัพย์ภูเก็ต — Leads +320%",
      width: 2304,
      height: 1536,
    },
    gmbResults: {
      src: "/images/blog/blog-inline-gmb-results-clean.png",
      alt: "ผลลัพธ์ 4 เดือน GBP ร้านกาแฟเมืองเก่าภูเก็ต — Maps Impressions +240%",
      width: 2304,
      height: 1536,
    },
    tiktokResults: {
      src: "/images/blog/blog-inline-tiktok-results-clean.png",
      alt: "ผลลัพธ์ 3 เดือน TikTok สปากะตะ — Booking วันธรรมดา +55%",
      width: 2304,
      height: 1536,
    },
    contentResults: {
      src: "/images/blog/blog-inline-content-results-clean.png",
      alt: "ผลลัพธ์ 5 เดือน Content EN ดึงลูกค้าต่างชาติภูเก็ต — Organic EN +210%",
      width: 2304,
      height: 1536,
    },
    webDesignSeo: {
      src: "/images/blog/blog-thumb-web-design-seo.png",
      alt: "Web Design กับ SEO",
      width: 2304,
      height: 1536,
    },
    seoPhuketPillar: {
      src: "/images/blog/blog-thumb-seo-phuket-kue-arai-2026-clean.png",
      alt: "SEO ภูเก็ต คืออะไร — Google Search และ Maps สำหรับธุรกิจในภูเก็ต",
      width: 3840,
      height: 2560,
    },
    seoPhuketSearchMaps: {
      src: "/images/blog/blog-inline-seo-phuket-search-maps-clean.png",
      alt: "SEO ภูเก็ต — ลูกค้าค้นหาทั้งบน Google Search และ Google Maps ในโซนจริง",
      width: 3840,
      height: 2560,
    },
    seoPhuketStack: {
      src: "/images/blog/blog-inline-seo-phuket-stack-2026-clean.png",
      alt: "Phuket Visibility Stack — ลำดับงาน SEO ภูเก็ต จาก Maps ไปจนถึง AI Search",
      width: 3840,
      height: 2560,
    },
    seoPhuketZones: {
      src: "/images/blog/blog-inline-seo-phuket-zones-clean.png",
      alt: "SEO ภูเก็ต — โซนป่าตอง กะตะ ตัวเมือง ถลาง กมลา กะทู้ ใช้คำค้นและแผนไม่เหมือนกัน",
      width: 3840,
      height: 2560,
    },
    rabTamWebPillar: {
      src: "/images/blog/blog-thumb-rab-tam-web-phuket-clean.png",
      alt: "รับทำเว็บไซต์ภูเก็ต — Next.js เร็ว PageSpeed 95+ Setup ฿29,900",
      width: 2304,
      height: 1536,
    },
    rabTamWebPricing: {
      src: "/images/blog/blog-inline-rab-tam-web-pricing-clean.png",
      alt: "แพ็กเว็บ + SEO ภูเก็ต — Landing ฿29,900 Corporate ฿39,900 Multi-service ฿49,900",
      width: 2304,
      height: 1536,
    },
    rabTamWebResults: {
      src: "/images/blog/blog-inline-rab-tam-web-results-clean.png",
      alt: "Next.js vs WordPress ภูเก็ต — PageSpeed 95+ Core Web Vitals ผ่านทุกตัว",
      width: 2304,
      height: 1536,
    },
    raakaSeoPillar: {
      src: "/images/blog/blog-thumb-raaka-seo-phuket-clean.png",
      alt: "ราคา SEO ภูเก็ต 2026 — Lite ฿5,900 Pro ฿8,900 Pro Max ฿15,000",
      width: 2304,
      height: 1536,
    },
    raakaSeoPricing: {
      src: "/images/blog/blog-inline-raaka-seo-phuket-clean.png",
      alt: "ราคา SEO ภูเก็ต 2026 — แพ็กรายเดือน + ค่า Setup เว็บไซต์",
      width: 2304,
      height: 1536,
    },
    aeoPillar: {
      src: "/images/blog/blog-thumb-aeo-kue-arai-clean.png",
      alt: "AEO คืออะไร — Answer Engine Optimization สำหรับธุรกิจในภูเก็ต",
      width: 2304,
      height: 1536,
    },
    aeoCompare: {
      src: "/images/blog/blog-inline-aeo-kue-arai-clean.png",
      alt: "AEO vs SEO vs GEO — เปรียบเทียบเป้าหมายและช่องทาง",
      width: 2304,
      height: 1536,
    },
    aiOverviewPillar: {
      src: "/images/blog/blog-thumb-ai-overview-kue-arai-clean.png",
      alt: "AI Overview คืออะไร — ผลกระทบต่อ SEO ภูเก็ตและวิธีปรับตัว",
      width: 2304,
      height: 1536,
    },
    aiOverviewInline: {
      src: "/images/blog/blog-inline-ai-overview-kue-arai-clean.png",
      alt: "Google AI Overview บน SERP — informational vs local queries",
      width: 2304,
      height: 1536,
    },
    geoPillar: {
      src: "/images/blog/blog-thumb-geo-kue-arai-clean.png",
      alt: "GEO คืออะไร — Generative Engine Optimization สำหรับธุรกิจภูเก็ต",
      width: 2304,
      height: 1536,
    },
    geoSteps: {
      src: "/images/blog/blog-inline-geo-kue-arai-clean.png",
      alt: "GEO 4 ขั้นตอน — Entity llms.txt Content FAQ Schema",
      width: 2304,
      height: 1536,
    },
    kamalaHero: {
      src: "/images/blog/blog-thumb-local-seo-kamala-clean.png",
      alt: "Local SEO กมลา 2026 — luxury beachfront condo resort fine dining EN buyer โซนหาดกมลา",
      width: 3840,
      height: 2560,
    },
    kamalaZones: {
      src: "/images/blog/blog-inline-kamala-zones-clean.png",
      alt: "เปรียบเทียบโซนภูเก็ต — ป่าตอง nightlife walk-in · กะตะ family resort · กมลา luxury condo EN buyer",
      width: 3840,
      height: 2560,
    },
    kamalaMaps: {
      src: "/images/blog/blog-inline-kamala-maps-clean.png",
      alt: "Google Maps กมลา Local Pack — guest ค้นหา spa restaurant ในโซน Maps Impressions +240%",
      width: 3840,
      height: 2560,
    },
    kamalaBuyer: {
      src: "/images/blog/blog-inline-kamala-buyer-clean.png",
      alt: "Buyer ต่างชาติค้นหาในกมลา — condo kamala phuket villa kamala resort kamala beach EN RU keyword",
      width: 3840,
      height: 2560,
    },
    thalangHero: {
      src: "/images/blog/blog-thumb-local-seo-thalang-clean.png",
      alt: "Local SEO ถลาง 2026 — โรงแรมใกล้สนามบิน หาดไม้ขาว หาดนาทอน อสังหาริมทรัพย์ อำเภอถลางภูเก็ต",
      width: 3840,
      height: 2560,
    },
    thalangAirportPhoto: {
      src: "/images/blog/blog-inline-thalang-zone-infographic-clean.png",
      alt: "แผนที่โซนถลาง — สนามบินภูเก็ต หาดไม้ขาว หาดในทอน โรงแรมใกล้สนามบิน รีสอร์ท อสังหาริมทรัพย์",
      width: 3840,
      height: 2560,
    },
    thalangZones: {
      src: "/images/blog/blog-inline-thalang-zones-clean.png",
      alt: "เปรียบเทียบโซนภูเก็ต — ป่าตอง nightlife · กมลา luxury condo · ถลาง airport hotel mai khao",
      width: 3840,
      height: 2560,
    },
    thalangMaps: {
      src: "/images/blog/blog-inline-thalang-maps-clean.png",
      alt: "Google Maps ถลาง Local Pack — ค้นหา hotel near phuket airport Maps Impressions Direction Requests",
      width: 3840,
      height: 2560,
    },
    kathuHero: {
      src: "/images/blog/blog-thumb-local-seo-kathu-clean.png",
      alt: "Local SEO กะทู้ 2026 — สนามกอล์ฟ เซ็นทรัลภูเก็ต รีสอร์ท สปา โซนกะทู้ภูเก็ต",
      width: 3840,
      height: 2560,
    },
    kathuMaps: {
      src: "/images/blog/blog-inline-kathu-maps-clean.png",
      alt: "Google Maps กะทู้ — ลูกค้าค้นหาแล้วเลือกจากรายการบนแผนที่ ตรงกับคำค้น อยู่ใกล้ รีวิวดี",
      width: 3840,
      height: 2560,
    },
    kathuZones: {
      src: "/images/blog/blog-inline-kathu-zones-clean.png",
      alt: "เปรียบเทียบโซนภูเก็ต — ป่าตองชายหาด · ตัวเมืองลูกค้าไทย · กะทู้กอล์ฟเซ็นทรัลรีสอร์ท",
      width: 3840,
      height: 2560,
    },
    kathuKeywords: {
      src: "/images/blog/blog-inline-kathu-keywords-clean.png",
      alt: "คำค้นในกะทู้ — สนามกอล์ฟภูเก็ต รีสอร์ทกะทู้ สปากะทู้ ร้านอาหารใกล้เซ็นทรัลภูเก็ต",
      width: 3840,
      height: 2560,
    },
    bangtaoHero: {
      src: "/images/blog/blog-thumb-local-seo-bang-tao-clean.png",
      alt: "Local SEO บางเทา 2026 — ลากูนา villa beach club fine dining โซนหาดบางเทา",
      width: 3840,
      height: 2560,
    },
    bangtaoMaps: {
      src: "/images/blog/blog-inline-bang-tao-maps-clean.png",
      alt: "Google Maps บางเทา — ลูกค้าค้นหาแล้วเลือกจากรายการบนแผนที่ ตรงคำค้น อยู่ใกล้ รีวิวดี",
      width: 3840,
      height: 2560,
    },
    bangtaoZones: {
      src: "/images/blog/blog-inline-bang-tao-zones-clean.png",
      alt: "เปรียบเทียบโซนภูเก็ต — ป่าตองชายหาด · กมลา condo ริมหาด · บางเทาลากูนา villa",
      width: 3840,
      height: 2560,
    },
    bangtaoKeywords: {
      src: "/images/blog/blog-inline-bang-tao-keywords-clean.png",
      alt: "คำค้นในบางเทา — villa bang tao restaurant laguna beach club condo bang tao",
      width: 3840,
      height: 2560,
    },
    rawaiHero: {
      src: "/images/blog/blog-thumb-local-seo-rawai-clean.png",
      alt: "Local SEO ราไวย์ 2026 — ร้านอาหารทะเล มารีน่า villa สปา โซนราไวย์ฉลอง",
      width: 3840,
      height: 2560,
    },
    rawaiMaps: {
      src: "/images/blog/blog-inline-rawai-maps-clean.png",
      alt: "Google Maps ราไวย์ — ลูกค้าค้นหาแล้วเลือกจากรายการบนแผนที่ ตรงคำค้น อยู่ใกล้ รีวิวดี",
      width: 3840,
      height: 2560,
    },
    rawaiZones: {
      src: "/images/blog/blog-inline-rawai-zones-clean.png",
      alt: "เปรียบเทียบโซนภูเก็ต — กะตะครอบครัวริมหาด · ตัวเมืองลูกค้าไทย · ราไวย์ทะเลมารีน่า villa",
      width: 3840,
      height: 2560,
    },
    rawaiKeywords: {
      src: "/images/blog/blog-inline-rawai-keywords-clean.png",
      alt: "คำค้นในราไวย์ — seafood rawai villa rawai phuket marina phuket cafe rawai",
      width: 3840,
      height: 2560,
    },
    localSeoNationalHero: {
      src: "/images/blog/blog-thumb-local-seo-kue-arai-clean.png",
      alt: "Local SEO คืออะไร — ธุรกิจโผล่ Google Maps เมื่อลูกค้าค้นหาในโซน บริการ local seo",
      width: 3840,
      height: 2560,
    },
    localSeoNationalDeliverables: {
      src: "/images/blog/blog-inline-local-seo-kue-arai-deliverables-clean.png",
      alt: "บริการ local seo ได้อะไร — Google Business Profile รีวิว NAP คำค้นโซน รายงานผล",
      width: 3840,
      height: 2560,
    },
    localSeoNationalMaps: {
      src: "/images/blog/blog-inline-local-seo-kue-arai-maps-clean.png",
      alt: "Google Maps Local Pack — ลูกค้าเลือกจากรายการบนแผนที่ก่อนโทรหรือมาหน้าร้าน",
      width: 3840,
      height: 2560,
    },
    localSeoNationalSteps: {
      src: "/images/blog/blog-inline-local-seo-kue-arai-steps-clean.png",
      alt: "วิธีติด Google Maps — 4 ขั้นตอน Local SEO GBP รีวิว คำค้นโซน",
      width: 3840,
      height: 2560,
    },
    raakaLocalSeoHero: {
      src: "/images/blog/blog-thumb-raaka-local-seo-clean.png",
      alt: "จ้างทำ Local SEO ราคาเท่าไหร่ — แพ็ก Lite Pro Pro Max สำหรับธุรกิจในประเทศไทย",
      width: 3840,
      height: 2560,
    },
    raakaLocalSeoPricing: {
      src: "/images/blog/blog-inline-raaka-local-seo-pricing-clean.png",
      alt: "ราคา local seo — ตารางแพ็ก SEO Lite ฿5,900 Pro ฿8,900 Pro Max ฿15,000",
      width: 3840,
      height: 2560,
    },
    raakaLocalSeoPacks: {
      src: "/images/blog/blog-inline-raaka-local-seo-packs-clean.png",
      alt: "แพ็ก Local SEO เหมาะกับธุรกิจแบบไหน — ร้านอาหาร คลินิก สปา SME",
      width: 3840,
      height: 2560,
    },
    raakaLocalSeoMistakes: {
      src: "/images/blog/blog-inline-raaka-local-seo-mistakes-clean.png",
      alt: "ข้อผิดพลาดเมื่อเลือกแพ็ก Local SEO จากราคาอย่างเดียว — deliverable KPI โซน",
      width: 3840,
      height: 2560,
    },
    leukAecensiHero: {
      src: "/images/blog/blog-thumb-leuk-aecensi-local-seo-clean.png",
      alt: "เลือกเอเจนซี่ Local SEO — เกณฑ์ก่อนจ้างบริการ local seo ไม่เสียเงินฟรี",
      width: 3840,
      height: 2560,
    },
    leukAecensiCriteria: {
      src: "/images/blog/blog-inline-leuk-aecensi-criteria-clean.png",
      alt: "เกณฑ์ 4 ข้อก่อนจ้างเอเจนซี่ Local SEO — deliverable KPI เจ้าของ GBP แผนโซน",
      width: 3840,
      height: 2560,
    },
    leukAecensiRedflags: {
      src: "/images/blog/blog-inline-leuk-aecensi-redflags-clean.png",
      alt: "Red flag เอเจนซี่ Local SEO — รับประกันอันดับ 1 สัญญาผูกมัด ไม่แตะ GBP",
      width: 3840,
      height: 2560,
    },
    leukAecensiProviders: {
      src: "/images/blog/blog-inline-leuk-aecensi-providers-clean.png",
      alt: "เปรียบเทียบผู้ให้บริการ local seo — Local SEO กับ SEO ทั่วไป",
      width: 3840,
      height: 2560,
    },
    localSeoVsSeoHero: {
      src: "/images/blog/blog-thumb-local-seo-vs-seo-clean.png",
      alt: "Local SEO กับ SEO ต่างกันยังไง — Maps กับ Google Search บนเว็บ",
      width: 3840,
      height: 2560,
    },
    localSeoVsSeoCompare: {
      src: "/images/blog/blog-inline-local-seo-vs-seo-compare-clean.png",
      alt: "เปรียบเทียบ Local SEO กับ SEO — Google Maps Local Pack vs blue link บน Search",
      width: 3840,
      height: 2560,
    },
    localSeoVsSeoStart: {
      src: "/images/blog/blog-inline-local-seo-vs-seo-start-clean.png",
      alt: "ธุรกิจไหนควรเริ่ม Local SEO หรือ SEO ก่อน — ร้านอาหาร คลินิก อสังหาฯ",
      width: 3840,
      height: 2560,
    },
    localSeoVsSeoFunnel: {
      src: "/images/blog/blog-inline-local-seo-vs-seo-funnel-clean.png",
      alt: "Local SEO กับ Google Ads — ฐานระยะยาว vs lead เร็ว",
      width: 3840,
      height: 2560,
    },
    gbpLocalSeoHero: {
      src: "/images/blog/blog-thumb-gbp-local-seo-clean.png",
      alt: "Google Business Profile คืออะไร — หัวใจของบริการ local seo บน Google Maps",
      width: 3840,
      height: 2560,
    },
    gbpLocalSeoAnatomy: {
      src: "/images/blog/blog-inline-gbp-local-seo-anatomy-clean.png",
      alt: "โครงสร้าง Google Business Profile — ชื่อ ที่อยู่ รีวิว รูป โพสต์ ปุ่มโทร",
      width: 3840,
      height: 2560,
    },
    gbpLocalSeoPhuket: {
      src: "/images/blog/blog-inline-gbp-local-seo-phuket-clean.png",
      alt: "เคสจริง Google Business Profile ภูเก็ต — ป่าตอง กมลา ตัวเมือง listing รีวิว NAP",
      width: 3840,
      height: 2560,
    },
    gbpLocalSeoSetup: {
      src: "/images/blog/blog-inline-gbp-local-seo-setup-clean.png",
      alt: "ตั้งค่า Google Business Profile — 5 ขั้นตอน Local SEO ยืนยันตัวตน รีวิว คำค้นโซน",
      width: 3840,
      height: 2560,
    },
    retailLocalSeoHero: {
      src: "/images/blog/blog-thumb-tam-local-seo-rang-kha-clean.png",
      alt: "ทำ Local SEO ร้านค้า — ให้ลูกค้าในโซนเจอร้านบน Google Maps",
      width: 3840,
      height: 2560,
    },
    retailLocalSeoWhy: {
      src: "/images/blog/blog-inline-tam-local-seo-rang-kha-why-clean.png",
      alt: "ทำไมร้านค้าต้องทำ Local SEO — ลูกค้าค้นหาก่อนมาหน้าร้าน",
      width: 3840,
      height: 2560,
    },
    retailLocalSeoMaps: {
      src: "/images/blog/blog-inline-tam-local-seo-rang-kha-maps-clean.png",
      alt: "Google Maps ร้านค้า — ลูกค้าเลือกจากรายการบนแผนที่ก่อนมาหน้าร้าน",
      width: 3840,
      height: 2560,
    },
    retailLocalSeoSteps: {
      src: "/images/blog/blog-inline-tam-local-seo-rang-kha-steps-clean.png",
      alt: "ทำ Local SEO ร้านค้า 4 ขั้น — GBP รูปสินค้า รีวิว คำค้นโซน",
      width: 3840,
      height: 2560,
    },
    retailPricingHero: {
      src: "/images/blog/blog-thumb-raaka-local-seo-rang-kha-clean.png",
      alt: "จ้างทำ Local SEO ร้านค้า ราคาเท่าไหร่ — แพ็ก Lite Pro Pro Max",
      width: 3840,
      height: 2560,
    },
    retailPricingTable: {
      src: "/images/blog/blog-inline-raaka-local-seo-rang-kha-pricing-clean.png",
      alt: "ราคา local seo ร้านค้า — ตารางแพ็ก SEO Lite ฿5,900 Pro ฿8,900",
      width: 3840,
      height: 2560,
    },
    retailPricingPacks: {
      src: "/images/blog/blog-inline-raaka-local-seo-rang-kha-packs-clean.png",
      alt: "แพ็ก Local SEO ร้านค้า — ร้านขายของ ร้านเสื้อผ้า ร้านมือถือ",
      width: 3840,
      height: 2560,
    },
    retailPricingMistakes: {
      src: "/images/blog/blog-inline-raaka-local-seo-rang-kha-mistakes-clean.png",
      alt: "ข้อผิดพลาดเมื่อเลือกแพ็ก Local SEO ร้านค้าจากราคาอย่างเดียว",
      width: 3840,
      height: 2560,
    },
    gbpRetailHero: {
      src: "/images/blog/blog-thumb-gbp-rang-kha-clean.png",
      alt: "Google Business Profile ร้านค้า — หน้าร้านบน Google Maps",
      width: 3840,
      height: 2560,
    },
    gbpRetailAnatomy: {
      src: "/images/blog/blog-inline-gbp-rang-kha-anatomy-clean.png",
      alt: "โครงสร้าง GBP ร้านค้า — ชื่อ ที่อยู่ รูปสินค้า รีวิว โพสต์",
      width: 3840,
      height: 2560,
    },
    gbpRetailCategories: {
      src: "/images/blog/blog-inline-gbp-rang-kha-categories-clean.png",
      alt: "หมวดหมู่ GBP ร้านค้า — เลือกให้ตรงประเภทสินค้า",
      width: 3840,
      height: 2560,
    },
    gbpRetailSetup: {
      src: "/images/blog/blog-inline-gbp-rang-kha-setup-clean.png",
      alt: "ตั้งค่า GBP ร้านค้า — 5 ขั้นตอน Local SEO",
      width: 3840,
      height: 2560,
    },
    retailKwHero: {
      src: "/images/blog/blog-thumb-kham-kha-rang-kha-clean.png",
      alt: "คำค้น Local SEO ร้านค้า — ลูกค้าค้นหาอะไรบน Google Maps",
      width: 3840,
      height: 2560,
    },
    retailKwNearMe: {
      src: "/images/blog/blog-inline-kham-kha-rang-kha-nearme-clean.png",
      alt: "คำค้น near me ร้านค้า — ลูกค้าค้นหาใกล้ฉันก่อนมาหน้าร้าน",
      width: 3840,
      height: 2560,
    },
    retailKwByType: {
      src: "/images/blog/blog-inline-kham-kha-rang-kha-types-clean.png",
      alt: "คำค้น Local SEO ร้านค้า — แยกตามประเภทสินค้า",
      width: 3840,
      height: 2560,
    },
    retailKwZones: {
      src: "/images/blog/blog-inline-kham-kha-rang-kha-zones-clean.png",
      alt: "คำค้นร้านค้าตามย่าน — ตัวเมือง ป่าตอง ถลาง ภูเก็ต",
      width: 3840,
      height: 2560,
    },
    retailMistakesHero: {
      src: "/images/blog/blog-thumb-rang-kha-mistakes-clean.png",
      alt: "ข้อผิดพลาด Local SEO ร้านค้า — ทำไมร้านไม่ติด Google Maps",
      width: 3840,
      height: 2560,
    },
    retailMistakesNap: {
      src: "/images/blog/blog-inline-rang-kha-mistakes-nap-clean.png",
      alt: "NAP ร้านค้าไม่ตรง — ชื่อ เบอร์ ที่อยู่ต้องเหมือนทุกช่องทาง",
      width: 3840,
      height: 2560,
    },
    retailMistakesCompare: {
      src: "/images/blog/blog-inline-rang-kha-mistakes-compare-clean.png",
      alt: "ข้อผิดพลาด Local SEO ร้านค้า vs ร้านอาหาร — จุดที่ต่างกัน",
      width: 3840,
      height: 2560,
    },
    retailMistakesFix: {
      src: "/images/blog/blog-inline-rang-kha-mistakes-fix-clean.png",
      alt: "วิธีแก้ข้อผิดพลาด Local SEO ร้านค้า — 5 ขั้นตอน",
      width: 3840,
      height: 2560,
    },
    massageMarketingHero: {
      src: "/images/blog/blog-thumb-kan-marketing-ran-nuad-phaen-thai-clean.png",
      alt: "การตลาดร้านนวดแผนไทย — หาลูกค้าใหม่บน Google Maps",
      width: 3840,
      height: 2560,
    },
    massageMarketingCompare: {
      src: "/images/blog/blog-inline-kan-marketing-nuad-compare-clean.png",
      alt: "การตลาดร้านนวดแผนไทย vs ร้านค้าทั่วไป — ขายความไว้วางใจ ไม่ใช่แค่ราคา",
      width: 3840,
      height: 2560,
    },
    massageMarketingChannels: {
      src: "/images/blog/blog-inline-kan-marketing-nuad-channels-clean.png",
      alt: "ลูกค้าร้านนวดมาจากไหน — Google Maps 35–50% ในโซนท่องเที่ยว",
      width: 3840,
      height: 2560,
    },
    massageMarketingReviews: {
      src: "/images/blog/blog-inline-kan-marketing-nuad-reviews-clean.png",
      alt: "รีวิว Google Maps การตลาดร้านนวด — ร้าน 3 เตียง เพิ่มคำสั่งจาก Maps +22%",
      width: 3840,
      height: 2560,
    },
    massageMarketingSteps: {
      src: "/images/blog/blog-inline-kan-marketing-nuad-steps-clean.png",
      alt: "ลำดับการตลาดร้านนวดแผนไทย 7 ขั้น — เริ่มจากความน่าเชื่อถือก่อนแอด",
      width: 3840,
      height: 2560,
    },
    massageMarketingBudget: {
      src: "/images/blog/blog-inline-kan-marketing-nuad-budget-clean.png",
      alt: "งบการตลาดร้านนวดแผนไทย — ตามขนาดร้านและระยะเวลาที่เห็นผล",
      width: 3840,
      height: 2560,
    },
    massageMarketingMistakes: {
      src: "/images/blog/blog-inline-kan-marketing-nuad-mistakes-clean.png",
      alt: "ข้อผิดพลาดการตลาดร้านนวดที่พบบ่อย และ Quick Wins ที่ควรทำก่อน",
      width: 3840,
      height: 2560,
    },
    mapsBoostHero: {
      src: "/images/blog/blog-thumb-dan-andap-google-maps-phuket-clean.png",
      alt: "ดันอันดับ Google Maps ภูเก็ต — ให้ธุรกิจโผล่ต้นๆบนแผนที่",
      width: 3840,
      height: 2560,
      rev: 2,
    },
    mapsBoostFactors: {
      src: "/images/blog/blog-inline-dan-andap-google-maps-phuket-factors-clean.png",
      alt: "ปัจจัยดันอันดับ Google Maps — ตรงคำค้น ระยะทาง ความน่าเชื่อถือ",
      width: 3840,
      height: 2560,
      rev: 2,
    },
    mapsBoostSteps: {
      src: "/images/blog/blog-inline-dan-andap-google-maps-phuket-steps-clean.png",
      alt: "5 วิธีดันอันดับ Google Maps ภูเก็ต — GBP รีวิว รูป คำค้นโซน",
      width: 3840,
      height: 2560,
      rev: 2,
    },
    mapsBoostZones: {
      src: "/images/blog/blog-inline-dan-andap-google-maps-phuket-zones-clean.png",
      alt: "ดันอันดับ Google Maps แยกโซนภูเก็ต — ป่าตอง กะตะ ตัวเมือง ถลาง",
      width: 3840,
      height: 2560,
      rev: 2,
    },
    mapsFixHero: {
      src: "/images/blog/blog-thumb-google-maps-mai-tid-phuket-clean.png",
      alt: "วิธีแก้ Google Maps ไม่ติด — ธุรกิจไม่โผล่บนแผนที่",
      width: 3840,
      height: 2560,
      rev: 2,
    },
    mapsFixSymptoms: {
      src: "/images/blog/blog-inline-google-maps-mai-tid-phuket-symptoms-clean.png",
      alt: "อาการ Google Maps ไม่ติด — ค้นไม่เจอ อันดับต่ำ โทรจาก Maps น้อย",
      width: 3840,
      height: 2560,
      rev: 2,
    },
    mapsFixCauses: {
      src: "/images/blog/blog-inline-google-maps-mai-tid-phuket-causes-clean.png",
      alt: "สาเหตุ Google Maps ไม่ติด — GBP ปักหมุด NAP รีวิว",
      width: 3840,
      height: 2560,
      rev: 2,
    },
    mapsFixChecklist: {
      src: "/images/blog/blog-inline-google-maps-mai-tid-phuket-fix-clean.png",
      alt: "เช็กลิสต์แก้ Google Maps ไม่ติด — ก่อนดันอันดับ",
      width: 3840,
      height: 2560,
      rev: 2,
    },
    mapsPinHero: {
      src: "/images/blog/blog-thumb-rap-pak-mut-thurakij-phuket-clean.png",
      alt: "รับปักหมุดธุรกิจ Google Maps ภูเก็ต — ยืนยันตำแหน่งร้าน",
      width: 3840,
      height: 2560,
      rev: 2,
    },
    mapsPinFbPost: {
      src: "/images/blog/blog-fb-rap-pak-mut-thurakij-phuket-4x5.png",
      alt: "รับปักหมุดธุรกิจ Google Maps ภูเก็ต — ยืนยันตำแหน่งร้าน (โพสต์ Facebook 4:5)",
      width: 1440,
      height: 1800,
      layout: "portrait",
      ratio: "4:5",
      rev: 1,
    },
    mapsPinWrong: {
      src: "/images/blog/blog-inline-rap-pak-mut-thurakij-phuket-wrong-clean.png",
      alt: "ปักหมุดธุรกิจผิด — ผลกระทบต่อ Google Maps",
      width: 3840,
      height: 2560,
      rev: 2,
    },
    mapsPinVerify: {
      src: "/images/blog/blog-inline-rap-pak-mut-thurakij-phuket-verify-clean.png",
      alt: "ขั้นตอนยืนยันตัวตน Google Business Profile",
      width: 3840,
      height: 2560,
      rev: 2,
    },
    mapsPinZones: {
      src: "/images/blog/blog-inline-rap-pak-mut-thurakij-phuket-zones-clean.png",
      alt: "รับปักหมุดธุรกิจ — โซนบริการภูเก็ต ป่าตอง ตัวเมือง ถลาง",
      width: 3840,
      height: 2560,
      rev: 2,
    },
  },
  team: {
    somchai: {
      src: "/images/team/team-somchai-digital-clean.png",
      alt: "สมชาย - ผู้เชี่ยวชาญ SEO และ Digital Marketing",
      width: 1920,
      height: 1920,
    },
    oranong: {
      src: "/images/team/team-oranong-webmaster-clean.png",
      alt: "อรนงค์ - Web Designer และ Developer",
      width: 1920,
      height: 1920,
    },
    vichai: {
      src: "/images/team/team-vichai-social-clean.png",
      alt: "วิชัย - Social Media Marketing Manager",
      width: 1920,
      height: 1920,
    },
  },
  stats: {
    results: {
      src: "/images/stats/stats-infographic-results-clean.png",
      alt: "ผลลัพธ์ PhuketSEO: 500+ Projects, 95% Retention, 10+ Years, 3x ROI",
      width: 2560,
      height: 1440,
    },
  },
} as const;

export const blogThumbnailBySlug: Record<string, SiteImage> = {
  "gemini-hotel-competitor-analysis": siteImages.blog.geminiHotel,
  "hotel-phuket-seo-problems": siteImages.blog.seoHotelNew,
  "seo-for-phuket-hotels": siteImages.blog.seoHotelNew,
  "instagram-marketing-phuket-restaurants": siteImages.blog.instagramRestaurant,
  "web-design-phuket-real-estate": siteImages.blog.webDesignRealestate,
  "google-my-business-phuket": siteImages.blog.gmbPhuket,
  "tiktok-marketing-phuket-services": siteImages.blog.tiktokServices,
  "content-marketing-phuket-foreigners": siteImages.blog.contentForeigners,
  "seo-for-phuket-spas": siteImages.blog.seoSpa,
  "seo-phuket-kue-arai": siteImages.blog.seoPhuketPillar,
  "local-seo-phuket-kue-arai": siteImages.blog.localSeoPillar,
  "local-seo-phuket": siteImages.blog.localSeoPillar,
  "raaka-seo-phuket": siteImages.blog.raakaSeoPillar,
  "aeo-kue-arai": siteImages.blog.aeoPillar,
  "ai-overview-kue-arai": siteImages.blog.aiOverviewPillar,
  "rab-tam-web-phuket": siteImages.blog.rabTamWebPillar,
  "geo-kue-arai": siteImages.blog.geoPillar,
  "google-ads-vs-seo-phuket": siteImages.services.googleAds,
  "seo-clinic-phuket": siteImages.caseStudies.clinic,
  "direct-booking-hotel-phuket": siteImages.blog.seoHotelNew,
  "google-reviews-phuket": siteImages.blog.gmbPhuket,
  "seo-real-estate-phuket": siteImages.caseStudies.realestate,
  "seo-tours-phuket": siteImages.blog.contentForeigners,
  "local-seo-patong-phuket": siteImages.blog.localSeoPillar,
  "website-speed-seo-phuket": siteImages.blog.rabTamWebPillar,
  "near-me-seo-phuket": siteImages.blog.gmbPhuket,
  "low-season-seo-phuket": siteImages.blog.seoPhuketPillar,
  "local-seo-kata-phuket": siteImages.blog.seoSpa,
  "local-seo-phuket-town": siteImages.blog.localSeoPillar,
  "nap-local-seo-phuket": siteImages.blog.gmbPhuket,
  "seo-restaurants-phuket": siteImages.blog.instagramRestaurant,
  "seo-sme-phuket": siteImages.blog.seoPhuketStack,
  "rab-tam-seo-phuket": siteImages.services.seo,
  "checklist-seo-phuket": siteImages.services.seo,
  "google-search-console-phuket": siteImages.blog.gscPhuket,
  "local-seo-kamala-phuket": siteImages.blog.kamalaHero,
  "local-seo-thalang-phuket": siteImages.blog.thalangHero,
  "local-seo-kathu-phuket": siteImages.blog.kathuHero,
  "local-seo-bang-tao-phuket": siteImages.blog.bangtaoHero,
  "local-seo-rawai-phuket": siteImages.blog.rawaiHero,
  "local-seo-kue-arai": siteImages.blog.localSeoNationalHero,
  "raaka-local-seo": siteImages.blog.raakaLocalSeoHero,
  "leuk-aecensi-local-seo": siteImages.blog.leukAecensiHero,
  "local-seo-vs-seo": siteImages.blog.localSeoVsSeoHero,
  "google-business-profile-local-seo": siteImages.blog.gbpLocalSeoHero,
  "tam-local-seo-rang-kha": siteImages.blog.retailLocalSeoHero,
  "raaka-local-seo-rang-kha": siteImages.blog.retailPricingHero,
  "gbp-rang-kha-local-seo": siteImages.blog.gbpRetailHero,
  "kham-kha-local-seo-rang-kha": siteImages.blog.retailKwHero,
  "local-seo-rang-kha-mistakes": siteImages.blog.retailMistakesHero,
  "kan-marketing-ran-nuad-phaen-thai": siteImages.blog.massageMarketingHero,
  "dan-andap-google-maps-phuket": siteImages.blog.mapsBoostHero,
  "google-maps-mai-tid-phuket": siteImages.blog.mapsFixHero,
  "rap-pak-mut-thurakij-phuket": siteImages.blog.mapsPinHero,
};

export function getBlogThumbnail(slug: string): SiteImage {
  return blogThumbnailBySlug[slug] ?? siteImages.blog.seoHotel;
}

/** ไฟล์ 4:5 สำหรับโพสต์ native บนเพจ Facebook — ไม่ render บนหน้าเว็บ */
export const blogFbPostBySlug: Record<string, SiteImage> = {
  "rap-pak-mut-thurakij-phuket": siteImages.blog.mapsPinFbPost,
};

/** Keys for :::image blocks in blog markdown */
export const blogInlineImages: Record<string, SiteImage> = {
  localSeo: siteImages.blog.localSeo,
  localSeoPillar: siteImages.blog.localSeoPillar,
  caseStudyHotel: siteImages.caseStudies.hotel,
  caseStudyRestaurant: siteImages.caseStudies.restaurant,
  caseStudyRealestate: siteImages.caseStudies.realestate,
  caseStudyClinic: siteImages.caseStudies.clinic,
  serviceSeo: siteImages.services.seo,
  serviceSocialMedia: siteImages.services.socialMedia,
  serviceWebDesign: siteImages.services.webDesign,
  spaLocalSeo: siteImages.blog.spaLocalSeo,
  spaCaseStudy: siteImages.blog.spaCaseStudy,
  geminiSerp: siteImages.blog.geminiSerp,
  geminiResults: siteImages.blog.geminiResults,
  hotelMaps: siteImages.blog.hotelMaps,
  hotelResults: siteImages.blog.hotelResults,
  instagramResults: siteImages.blog.instagramResults,
  realestateResults: siteImages.blog.realestateResults,
  gmbResults: siteImages.blog.gmbResults,
  gscGbpCompare: siteImages.blog.gscGbpCompare,
  tiktokResults: siteImages.blog.tiktokResults,
  contentResults: siteImages.blog.contentResults,
  seoPhuketStack: siteImages.blog.seoPhuketStack,
  seoPhuketSearchMaps: siteImages.blog.seoPhuketSearchMaps,
  seoPhuketZones: siteImages.blog.seoPhuketZones,
  localSeoMaps: siteImages.blog.localSeoMaps,
  localSeoResults: siteImages.blog.localSeoResults,
  rabTamWebPricing: siteImages.blog.rabTamWebPricing,
  rabTamWebResults: siteImages.blog.rabTamWebResults,
  raakaSeoPricing: siteImages.blog.raakaSeoPricing,
  aeoCompare: siteImages.blog.aeoCompare,
  aiOverviewInline: siteImages.blog.aiOverviewInline,
  geoSteps: siteImages.blog.geoSteps,
  kamalaZones: siteImages.blog.kamalaZones,
  kamalaMaps: siteImages.blog.kamalaMaps,
  kamalaBuyer: siteImages.blog.kamalaBuyer,
  thalangAirportPhoto: siteImages.blog.thalangAirportPhoto,
  thalangZones: siteImages.blog.thalangZones,
  thalangMaps: siteImages.blog.thalangMaps,
  kathuHero: siteImages.blog.kathuHero,
  kathuMaps: siteImages.blog.kathuMaps,
  kathuZones: siteImages.blog.kathuZones,
  kathuKeywords: siteImages.blog.kathuKeywords,
  bangtaoHero: siteImages.blog.bangtaoHero,
  bangtaoMaps: siteImages.blog.bangtaoMaps,
  bangtaoZones: siteImages.blog.bangtaoZones,
  bangtaoKeywords: siteImages.blog.bangtaoKeywords,
  rawaiHero: siteImages.blog.rawaiHero,
  rawaiMaps: siteImages.blog.rawaiMaps,
  rawaiZones: siteImages.blog.rawaiZones,
  rawaiKeywords: siteImages.blog.rawaiKeywords,
  localSeoNationalHero: siteImages.blog.localSeoNationalHero,
  localSeoNationalDeliverables: siteImages.blog.localSeoNationalDeliverables,
  localSeoNationalMaps: siteImages.blog.localSeoNationalMaps,
  localSeoNationalSteps: siteImages.blog.localSeoNationalSteps,
  raakaLocalSeoHero: siteImages.blog.raakaLocalSeoHero,
  raakaLocalSeoPricing: siteImages.blog.raakaLocalSeoPricing,
  raakaLocalSeoPacks: siteImages.blog.raakaLocalSeoPacks,
  raakaLocalSeoMistakes: siteImages.blog.raakaLocalSeoMistakes,
  leukAecensiHero: siteImages.blog.leukAecensiHero,
  leukAecensiCriteria: siteImages.blog.leukAecensiCriteria,
  leukAecensiRedflags: siteImages.blog.leukAecensiRedflags,
  leukAecensiProviders: siteImages.blog.leukAecensiProviders,
  localSeoVsSeoHero: siteImages.blog.localSeoVsSeoHero,
  localSeoVsSeoCompare: siteImages.blog.localSeoVsSeoCompare,
  localSeoVsSeoStart: siteImages.blog.localSeoVsSeoStart,
  localSeoVsSeoFunnel: siteImages.blog.localSeoVsSeoFunnel,
  gbpLocalSeoHero: siteImages.blog.gbpLocalSeoHero,
  gbpLocalSeoAnatomy: siteImages.blog.gbpLocalSeoAnatomy,
  gbpLocalSeoPhuket: siteImages.blog.gbpLocalSeoPhuket,
  gbpLocalSeoSetup: siteImages.blog.gbpLocalSeoSetup,
  retailLocalSeoHero: siteImages.blog.retailLocalSeoHero,
  retailLocalSeoWhy: siteImages.blog.retailLocalSeoWhy,
  retailLocalSeoMaps: siteImages.blog.retailLocalSeoMaps,
  retailLocalSeoSteps: siteImages.blog.retailLocalSeoSteps,
  retailPricingHero: siteImages.blog.retailPricingHero,
  retailPricingTable: siteImages.blog.retailPricingTable,
  retailPricingPacks: siteImages.blog.retailPricingPacks,
  retailPricingMistakes: siteImages.blog.retailPricingMistakes,
  gbpRetailHero: siteImages.blog.gbpRetailHero,
  gbpRetailAnatomy: siteImages.blog.gbpRetailAnatomy,
  gbpRetailCategories: siteImages.blog.gbpRetailCategories,
  gbpRetailSetup: siteImages.blog.gbpRetailSetup,
  retailKwHero: siteImages.blog.retailKwHero,
  retailKwNearMe: siteImages.blog.retailKwNearMe,
  retailKwByType: siteImages.blog.retailKwByType,
  retailKwZones: siteImages.blog.retailKwZones,
  retailMistakesHero: siteImages.blog.retailMistakesHero,
  retailMistakesNap: siteImages.blog.retailMistakesNap,
  retailMistakesCompare: siteImages.blog.retailMistakesCompare,
  retailMistakesFix: siteImages.blog.retailMistakesFix,
  massageMarketingCompare: siteImages.blog.massageMarketingCompare,
  massageMarketingChannels: siteImages.blog.massageMarketingChannels,
  massageMarketingReviews: siteImages.blog.massageMarketingReviews,
  massageMarketingSteps: siteImages.blog.massageMarketingSteps,
  massageMarketingBudget: siteImages.blog.massageMarketingBudget,
  massageMarketingMistakes: siteImages.blog.massageMarketingMistakes,
  mapsBoostFactors: siteImages.blog.mapsBoostFactors,
  mapsBoostSteps: siteImages.blog.mapsBoostSteps,
  mapsBoostZones: siteImages.blog.mapsBoostZones,
  mapsFixSymptoms: siteImages.blog.mapsFixSymptoms,
  mapsFixCauses: siteImages.blog.mapsFixCauses,
  mapsFixChecklist: siteImages.blog.mapsFixChecklist,
  mapsPinWrong: siteImages.blog.mapsPinWrong,
  mapsPinVerify: siteImages.blog.mapsPinVerify,
  mapsPinZones: siteImages.blog.mapsPinZones,
  serviceGoogleAds: siteImages.services.googleAds,
};

export function resolveBlogInlineImage(key: string): SiteImage | null {
  return blogInlineImages[key.trim()] ?? null;
}
