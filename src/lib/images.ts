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
    webDesignSeo: {
      src: "/images/blog/blog-thumb-web-design-seo.png",
      alt: "Web Design กับ SEO",
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
  "gemini-hotel-competitor-analysis": siteImages.blog.seoHotel,
  "seo-for-phuket-hotels": siteImages.blog.seoHotel,
  "instagram-marketing-phuket-restaurants": siteImages.blog.socialMedia,
  "web-design-phuket-real-estate": siteImages.blog.webDesignSeo,
  "google-my-business-phuket": siteImages.blog.localSeo,
  "tiktok-marketing-phuket-services": siteImages.blog.socialMedia,
  "content-marketing-phuket-foreigners": siteImages.blog.contentMarketing,
  "seo-for-phuket-spas": siteImages.blog.seoSpa,
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
};

export function resolveBlogInlineImage(key: string): SiteImage | null {
  return blogInlineImages[key.trim()] ?? null;
}
