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
 * - seo-phuket-kue-arai (hero + stack inline)
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
};

export const siteImages = {
  hero: {
    home: {
      src: "/images/hero/hero-seo-phuket-clean.png",
      alt: "SEO Agency Phuket - บริษัท SEO ภูเก็ต ชั้นนำ",
      width: 2560,
      height: 1440,
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
      src: "/images/blog/blog-thumb-seo-phuket-kue-arai-clean.png",
      alt: "SEO ภูเก็ต คืออะไร — เพิ่มการมองเห็น ติด Google Organic Traffic +180%",
      width: 2304,
      height: 1536,
    },
    seoPhuketStack: {
      src: "/images/blog/blog-inline-seo-phuket-stack-clean.png",
      alt: "Phuket Visibility Stack — แพ็ก SEO Lite ฿5,900 Pro ฿8,900 Pro Max ฿15,000",
      width: 2304,
      height: 1536,
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
  "seo-for-phuket-hotels": siteImages.blog.seoHotelNew,
  "instagram-marketing-phuket-restaurants": siteImages.blog.instagramRestaurant,
  "web-design-phuket-real-estate": siteImages.blog.webDesignRealestate,
  "google-my-business-phuket": siteImages.blog.gmbPhuket,
  "tiktok-marketing-phuket-services": siteImages.blog.tiktokServices,
  "content-marketing-phuket-foreigners": siteImages.blog.contentForeigners,
  "seo-for-phuket-spas": siteImages.blog.seoSpa,
  "seo-phuket-kue-arai": siteImages.blog.seoPhuketPillar,
  "local-seo-phuket-kue-arai": siteImages.blog.localSeoPillar,
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
  "google-search-console-phuket": siteImages.blog.gscPhuket,
};

export function getBlogThumbnail(slug: string): SiteImage {
  return blogThumbnailBySlug[slug] ?? siteImages.blog.seoHotel;
}

/** Keys for :::image blocks in blog markdown */
export const blogInlineImages: Record<string, SiteImage> = {
  localSeo: siteImages.blog.localSeo,
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
  localSeoMaps: siteImages.blog.localSeoMaps,
  localSeoResults: siteImages.blog.localSeoResults,
  rabTamWebPricing: siteImages.blog.rabTamWebPricing,
  rabTamWebResults: siteImages.blog.rabTamWebResults,
  raakaSeoPricing: siteImages.blog.raakaSeoPricing,
  aeoCompare: siteImages.blog.aeoCompare,
  aiOverviewInline: siteImages.blog.aiOverviewInline,
  geoSteps: siteImages.blog.geoSteps,
  serviceGoogleAds: siteImages.services.googleAds,
};

export function resolveBlogInlineImage(key: string): SiteImage | null {
  return blogInlineImages[key.trim()] ?? null;
}
