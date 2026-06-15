/**
 * Image assets — paths, alt text, dimensions
 * อ้างอิงจาก PhuketSEO.com - Image Assets Package.md
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
      src: "/images/hero/hero-seo-phuket-2025.png",
      alt: "SEO Agency Phuket - บริษัท SEO ภูเก็ต ชั้นนำ",
      width: 2560,
      height: 1440,
    },
    about: {
      src: "/images/hero/hero-about-team.png",
      alt: "ทีมงาน PhuketSEO ผู้เชี่ยวชาญ Digital Marketing ภูเก็ต",
      width: 2560,
      height: 1440,
    },
  },
  services: {
    seo: {
      src: "/images/services/hero-service-seo.png",
      alt: "บริการ SEO ภูเก็ต เพิ่มอันดับ Google",
      width: 2560,
      height: 1440,
    },
    googleAds: {
      src: "/images/services/hero-service-google-ads.png",
      alt: "บริการ Google Ads ภูเก็ต เพิ่ม ROI",
      width: 2560,
      height: 1440,
    },
    socialMedia: {
      src: "/images/services/hero-service-social-media.png",
      alt: "บริการ Social Media Marketing ภูเก็ต",
      width: 2560,
      height: 1440,
    },
    webDesign: {
      src: "/images/services/hero-service-web-design.png",
      alt: "บริการออกแบบเว็บไซต์ภูเก็ต",
      width: 2560,
      height: 1440,
    },
  },
  icons: {
    seo: {
      src: "/images/icons/icon-seo-service.png",
      alt: "ไอคอนบริการ SEO",
      width: 1920,
      height: 1920,
    },
    googleAds: {
      src: "/images/icons/icon-google-ads.png",
      alt: "ไอคอนบริการ Google Ads",
      width: 1920,
      height: 1920,
    },
    socialMedia: {
      src: "/images/icons/icon-social-media.png",
      alt: "ไอคอนบริการ Social Media",
      width: 1920,
      height: 1920,
    },
    webDesign: {
      src: "/images/icons/icon-web-design.png",
      alt: "ไอคอนบริการออกแบบเว็บไซต์",
      width: 1920,
      height: 1920,
    },
  },
  caseStudies: {
    hotel: {
      src: "/images/case-studies/case-study-hotel.png",
      alt: "ผลงาน SEO โรงแรมภูเก็ต เพิ่ม Traffic 250%",
      width: 2176,
      height: 1632,
    },
    realestate: {
      src: "/images/case-studies/case-study-realestate.png",
      alt: "ผลงาน SEO อสังหาริมทรัพย์ภูเก็ต เพิ่ม Leads 320%",
      width: 2176,
      height: 1632,
    },
    restaurant: {
      src: "/images/case-studies/case-study-restaurant.png",
      alt: "ผลงาน SEO ร้านอาหารภูเก็ต เพิ่ม Bookings 180%",
      width: 2176,
      height: 1632,
    },
    clinic: {
      src: "/images/case-studies/case-study-clinic.png",
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
      src: "/images/blog/blog-thumb-seo-spa-phuket.png",
      alt: "SEO สำหรับ Spa & Wellness ภูเก็ต — เพิ่ม Direct Booking ไม่พึ่ง OTA",
      width: 2304,
      height: 1536,
    },
    spaLocalSeo: {
      src: "/images/blog/blog-inline-spa-local-seo.png",
      alt: "Google Maps 3-Pack สำหรับสปาภูเก็ต — ช่องทาง Direct Booking ที่ไม่เสีย commission",
      width: 2304,
      height: 1536,
    },
    spaCaseStudy: {
      src: "/images/blog/blog-inline-spa-case-study.png",
      alt: "ผลลัพธ์จริง SEO สปาภูเก็ต — Direct Booking +60% Organic Traffic +190% ใน 5 เดือน",
      width: 2304,
      height: 1536,
    },
    geminiHotel: {
      src: "/images/blog/blog-thumb-gemini-hotel.png",
      alt: "Gemini วิเคราะห์คู่แข่งโรงแรมภูเก็ต — แผน SEO 90 วัน",
      width: 2304,
      height: 1536,
    },
    seoHotelNew: {
      src: "/images/blog/blog-thumb-seo-hotel.png",
      alt: "SEO โรงแรมภูเก็ต — เพิ่ม Direct Booking ลด OTA commission",
      width: 2304,
      height: 1536,
    },
    instagramRestaurant: {
      src: "/images/blog/blog-thumb-instagram-restaurant.png",
      alt: "Instagram Marketing สำหรับร้านอาหารภูเก็ต — Walk-in +40%",
      width: 2304,
      height: 1536,
    },
    webDesignRealestate: {
      src: "/images/blog/blog-thumb-web-design-realestate.png",
      alt: "เว็บไซต์อสังหาฯ ภูเก็ต ที่ดึงดูด Lead ได้จริง — Leads +320%",
      width: 2304,
      height: 1536,
    },
    gmbPhuket: {
      src: "/images/blog/blog-thumb-gmb-phuket.png",
      alt: "Google My Business เครื่องมือสำคัญธุรกิจเล็กภูเก็ต — Maps Impressions +240%",
      width: 2304,
      height: 1536,
    },
    tiktokServices: {
      src: "/images/blog/blog-thumb-tiktok-services.png",
      alt: "TikTok Marketing สำหรับธุรกิจบริการภูเก็ต — Booking +55%",
      width: 2304,
      height: 1536,
    },
    contentForeigners: {
      src: "/images/blog/blog-thumb-content-foreigners.png",
      alt: "Content Marketing ดึงลูกค้าต่างชาติในภูเก็ต — Organic EN +210%",
      width: 2304,
      height: 1536,
    },
    geminiSerp: {
      src: "/images/blog/blog-inline-gemini-serp.png",
      alt: "Competitive Audit ด้วย Gemini — มองเห็นช่องว่าง SEO ในโซนภูเก็ต",
      width: 2304,
      height: 1536,
    },
    geminiResults: {
      src: "/images/blog/blog-inline-gemini-results.png",
      alt: "ผลลัพธ์ 90 วัน หลัง Competitive Audit โรงแรมภูเก็ต",
      width: 2304,
      height: 1536,
    },
    hotelMaps: {
      src: "/images/blog/blog-inline-hotel-maps.png",
      alt: "Google Maps 3-Pack — ช่องทาง Direct Booking โรงแรมภูเก็ต Maps Impressions +220%",
      width: 2304,
      height: 1536,
    },
    hotelResults: {
      src: "/images/blog/blog-inline-hotel-results.png",
      alt: "ผลลัพธ์ 6 เดือน SEO โรงแรมป่าตอง — Organic Traffic +180% Direct Booking +34%",
      width: 2304,
      height: 1536,
    },
    instagramResults: {
      src: "/images/blog/blog-inline-instagram-results.png",
      alt: "ผลลัพธ์ 90 วัน Instagram ร้านซีฟู้ดตลาดใหม่ภูเก็ต",
      width: 2304,
      height: 1536,
    },
    realestateResults: {
      src: "/images/blog/blog-inline-realestate-results.png",
      alt: "ผลลัพธ์ 4 เดือน Web + SEO อสังหาริมทรัพย์ภูเก็ต — Leads +320%",
      width: 2304,
      height: 1536,
    },
    gmbResults: {
      src: "/images/blog/blog-inline-gmb-results.png",
      alt: "ผลลัพธ์ 4 เดือน GBP ร้านกาแฟเมืองเก่าภูเก็ต — Maps Impressions +240%",
      width: 2304,
      height: 1536,
    },
    tiktokResults: {
      src: "/images/blog/blog-inline-tiktok-results.png",
      alt: "ผลลัพธ์ 3 เดือน TikTok สปากะตะ — Booking วันธรรมดา +55%",
      width: 2304,
      height: 1536,
    },
    contentResults: {
      src: "/images/blog/blog-inline-content-results.png",
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
  },
  team: {
    somchai: {
      src: "/images/team/team-somchai-digital.png",
      alt: "สมชาย - ผู้เชี่ยวชาญ SEO และ Digital Marketing",
      width: 1920,
      height: 1920,
    },
    oranong: {
      src: "/images/team/team-oranong-webmaster.png",
      alt: "อรนงค์ - Web Designer และ Developer",
      width: 1920,
      height: 1920,
    },
    vichai: {
      src: "/images/team/team-vichai-social.png",
      alt: "วิชัย - Social Media Marketing Manager",
      width: 1920,
      height: 1920,
    },
  },
  stats: {
    results: {
      src: "/images/stats/stats-infographic-results.png",
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
  "raaka-seo-phuket": siteImages.blog.gmbPhuket,
  "aeo-kue-arai": siteImages.blog.geminiSerp,
  "ai-overview-kue-arai": siteImages.blog.contentResults,
  "rab-tam-web-phuket": siteImages.blog.rabTamWebPillar,
  "geo-kue-arai": siteImages.blog.geminiResults,
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
  tiktokResults: siteImages.blog.tiktokResults,
  contentResults: siteImages.blog.contentResults,
  seoPhuketStack: siteImages.blog.seoPhuketStack,
  localSeoMaps: siteImages.blog.localSeoMaps,
  localSeoResults: siteImages.blog.localSeoResults,
  rabTamWebPricing: siteImages.blog.rabTamWebPricing,
  rabTamWebResults: siteImages.blog.rabTamWebResults,
};

export function resolveBlogInlineImage(key: string): SiteImage | null {
  return blogInlineImages[key.trim()] ?? null;
}
