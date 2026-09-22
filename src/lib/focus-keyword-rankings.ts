/**
 * คีย์โฟกัสสำหรับติดตามอันดับ SERP — อัปเดต rank หลังเช็ค Google จริง
 * ใช้แสดงบน /services/seo-phuket
 */
export type FocusKeywordRanking = {
  keyword: string;
  /** อันดับบน Google (null = ยังไม่อัปเดต) */
  rank: number | null;
  /** path ภายในไซต์ที่ติดอันดับ */
  pagePath: string;
  /** เช็คแล้วไม่ติดอันดับ (ไม่ใช่รออัปเดต) */
  notRanked?: boolean;
};

/** อัปเดตทุกครั้งที่เช็คอันดับใหม่ */
export const focusKeywordRankingsLastUpdated = "2026-09-22";

export const focusKeywordRankings: FocusKeywordRanking[] = [
  {
    keyword: "รับทำแอด google ภูเก็ต",
    rank: 1,
    pagePath: "/services/google-ads",
  },
  {
    keyword: "รับทำ SEO ภูเก็ต",
    rank: 2,
    pagePath: "/services/seo-phuket",
  },
  {
    keyword: "รับยิงแอด ภูเก็ต",
    rank: 3,
    pagePath: "/",
  },
  {
    keyword: "รับทำแอด ภูเก็ต",
    rank: 1,
    pagePath: "/",
  },
  {
    keyword: "รับทำ Google Ads ภูเก็ต",
    rank: 8,
    pagePath: "/services/google-ads",
  },
  {
    keyword: "รับยิงแอด google ภูเก็ต",
    rank: 14,
    pagePath: "/services/google-ads",
  },
  {
    keyword: "รับยิงแอด google map ภูเก็ต",
    rank: 4,
    pagePath: "/services/google-ads",
  },
  {
    keyword: "รับยิงแอด facebook ภูเก็ต",
    rank: null,
    notRanked: true,
    pagePath: "/services/social-media",
  },
  {
    keyword: "รับยิงแอด facebook",
    rank: null,
    notRanked: true,
    pagePath: "/services/social-media",
  },
  {
    keyword: "เอเยนซี่ Google Ads ภูเก็ต",
    rank: null,
    notRanked: true,
    pagePath: "/services/google-ads",
  },
  {
    keyword: "ราคารับทำ Google Ads ภูเก็ต",
    rank: 14,
    pagePath: "/blog/raaka-google-ads-phuket",
  },
  {
    keyword: "รับทำเว็บไซต์ภูเก็ต",
    rank: 25,
    pagePath: "/services/web-design",
  },
];
