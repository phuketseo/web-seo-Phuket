/**
 * คีย์โฟกัสสำหรับติดตามอันดับ SERP — อัปเดต rank หลังเช็ค Google จริง
 * ใช้แสดงบน /services/seo-phuket และ /admin
 *
 * วิธีเช็ค: ปุ่มใน /admin → ดึงจาก GSC (ตำแหน่งเฉลี่ย) และ/หรือ SerpAPI ถ้ามีคีย์
 * นับเฉพาะ organic (ไม่นับ Ads / AI Overview cite)
 */

export type FocusKeywordCohort = "core" | "new-2026-11";

export type FocusKeywordRanking = {
  keyword: string;
  /** อันดับบน Google (null = ยังไม่อัปเดต) */
  rank: number | null;
  /** path ภายในไซต์ที่เป็นหน้าเป้าหมาย */
  pagePath: string;
  /** เช็คแล้วไม่ติดอันดับ (ไม่ใช่รออัปเดต) */
  notRanked?: boolean;
  /** กลุ่มงาน: core = เดิม, new-2026-11 = หน้าที่เปิด/ดันรอบล่าสุด */
  cohort?: FocusKeywordCohort;
};

export type FocusKeywordPageGroup = {
  pagePath: string;
  pageLabel: string;
  cohort: FocusKeywordCohort;
  keywords: FocusKeywordRanking[];
};

/** อัปเดตทุกครั้งที่เช็คอันดับใหม่ (หรือ sync จาก /admin) */
export const focusKeywordRankingsLastUpdated = "2026-11-10";

export const FOCUS_PAGE_LABELS: Record<string, string> = {
  "/": "หน้าแรก (Ads)",
  "/services/google-ads": "รับทำ Google Ads ภูเก็ต",
  "/services/google-ads-thailand": "รับทำ Google Ads",
  "/services/social-media": "รับยิงแอด Facebook ภูเก็ต",
  "/services/facebook-ads": "รับยิงแอด Facebook",
  "/services/seo-phuket": "รับทำ SEO ภูเก็ต",
  "/services/local-seo": "รับทำ Local SEO",
  "/services/google-maps-pin": "รับปักหมุด Google Maps",
  "/services/web-design": "ทำเว็บไซต์ + SEO",
  "/industries/seo-spa-phuket": "SEO สปาและร้านนวด",
  "/industries/seo-hotels-phuket": "SEO โรงแรม",
  "/industries/seo-restaurants-phuket": "SEO ร้านอาหาร",
  "/industries/seo-tours-phuket": "SEO ทัวร์",
  "/industries/seo-real-estate-phuket": "SEO อสังหา",
};

export const focusKeywordRankings: FocusKeywordRanking[] = [
  // —— Ads local ภูเก็ต → หน้าเงินที่มีแล้ว (/ · google-ads · social-media)
  // อันดับ = null จนกว่า GSC exact จะมี impression (ไม่ใช้ค่า static #1)
  // —— `/` เอเจนซี่โฆษณา / ยิงแอดภาพรวม ——
  { keyword: "บริษัท โฆษณา ภูเก็ต", rank: null, pagePath: "/", cohort: "core" },
  { keyword: "บริษัท โฆษณา ใน ภูเก็ต", rank: null, pagePath: "/", cohort: "core" },
  { keyword: "agency ภูเก็ต", rank: null, pagePath: "/", cohort: "core" },
  { keyword: "phuket ads", rank: null, pagePath: "/", cohort: "core" },
  { keyword: "phuket advertising", rank: null, pagePath: "/", cohort: "core" },
  { keyword: "รับทำแอด ภูเก็ต", rank: null, pagePath: "/", cohort: "core" },
  { keyword: "รับยิงแอด ภูเก็ต", rank: null, pagePath: "/", cohort: "core" },
  { keyword: "ยิงแอดภูเก็ต", rank: null, pagePath: "/", cohort: "core" },

  // —— `/services/google-ads` ——
  { keyword: "รับทำ Google Ads ภูเก็ต", rank: null, pagePath: "/services/google-ads", cohort: "core" },
  { keyword: "รับทำแอด google ภูเก็ต", rank: null, pagePath: "/services/google-ads", cohort: "core" },
  { keyword: "เอเยนซี่ Google Ads ภูเก็ต", rank: null, pagePath: "/services/google-ads", cohort: "core" },
  { keyword: "รับยิงแอด google ภูเก็ต", rank: null, pagePath: "/services/google-ads", cohort: "core" },
  { keyword: "รับยิงแอด google map ภูเก็ต", rank: null, pagePath: "/services/google-ads", cohort: "core" },
  { keyword: "ราคารับทำ Google Ads ภูเก็ต", rank: null, pagePath: "/services/google-ads", cohort: "core" },

  // —— `/services/social-media` ——
  { keyword: "รับยิงแอด facebook ภูเก็ต", rank: null, pagePath: "/services/social-media", cohort: "core" },

  // —— Ads ทั่วประเทศ (หน้าใหม่) — ติดตาม GSC ~7 วันหลัง publish 2026-11-10 ——
  { keyword: "รับยิงแอด facebook", rank: null, pagePath: "/services/facebook-ads", cohort: "new-2026-11" },
  { keyword: "รับยิงแอด facebook ราคา", rank: null, pagePath: "/services/facebook-ads", cohort: "new-2026-11" },
  { keyword: "บริการ ยิง แอด facebook", rank: null, pagePath: "/services/facebook-ads", cohort: "new-2026-11" },
  { keyword: "จ้าง ยิง แอด โฆษณา facebook", rank: null, pagePath: "/services/facebook-ads", cohort: "new-2026-11" },
  { keyword: "agency ยิง แอด", rank: null, pagePath: "/services/facebook-ads", cohort: "new-2026-11" },
  { keyword: "meta ยิง แอด", rank: null, pagePath: "/services/facebook-ads", cohort: "new-2026-11" },
  { keyword: "ยิง ads ig", rank: null, pagePath: "/services/facebook-ads", cohort: "new-2026-11" },
  { keyword: "รับทำ google ads", rank: null, pagePath: "/services/google-ads-thailand", cohort: "new-2026-11" },
  { keyword: "ยิงแอด กูเกิ้ล", rank: null, pagePath: "/services/google-ads-thailand", cohort: "new-2026-11" },
  { keyword: "รับยิงแอด google", rank: null, pagePath: "/services/google-ads-thailand", cohort: "new-2026-11" },
  { keyword: "ยิงแอด google", rank: null, pagePath: "/services/google-ads-thailand", cohort: "new-2026-11" },
  { keyword: "ราคารับทำ google ads", rank: null, pagePath: "/services/google-ads-thailand", cohort: "new-2026-11" },
  { keyword: "เอเยนซี่ google ads", rank: null, pagePath: "/services/google-ads-thailand", cohort: "new-2026-11" },

  // —— SEO / Local / Web (core) —— อัปเดตจาก GSC exact 28d (2026-11-10)
  { keyword: "รับทำ SEO ภูเก็ต", rank: 8, pagePath: "/services/seo-phuket", cohort: "core" },
  { keyword: "รับทำ Local SEO", rank: 46, pagePath: "/services/local-seo", cohort: "core" },
  { keyword: "บริการ Local SEO", rank: 37, pagePath: "/services/local-seo", cohort: "core" },
  { keyword: "รับทำ SEO Google Maps", rank: 43, pagePath: "/services/local-seo", cohort: "core" },
  { keyword: "รับทำเว็บไซต์ภูเก็ต", rank: null, pagePath: "/services/web-design", cohort: "core" },
  { keyword: "ทำเว็บไซต์ภูเก็ต", rank: null, pagePath: "/services/web-design", cohort: "core" },
  { keyword: "ออกแบบเว็บไซต์ภูเก็ต", rank: null, pagePath: "/services/web-design", cohort: "core" },

  // —— ใหม่: ปักหมุด ——
  { keyword: "รับปักหมุดธุรกิจ Google Maps ภูเก็ต", rank: null, pagePath: "/services/google-maps-pin", cohort: "new-2026-11" },
  { keyword: "รับปักหมุดธุรกิจ", rank: null, pagePath: "/services/google-maps-pin", cohort: "new-2026-11" },
  { keyword: "ปักหมุด Google Maps", rank: null, pagePath: "/services/google-maps-pin", cohort: "new-2026-11" },

  // —— ใหม่: Industry ——
  { keyword: "SEO สปาภูเก็ต", rank: null, pagePath: "/industries/seo-spa-phuket", cohort: "new-2026-11" },
  { keyword: "รับทำ SEO สปา", rank: null, pagePath: "/industries/seo-spa-phuket", cohort: "new-2026-11" },
  { keyword: "SEO ร้านนวดภูเก็ต", rank: null, pagePath: "/industries/seo-spa-phuket", cohort: "new-2026-11" },
  { keyword: "SEO โรงแรมภูเก็ต", rank: null, pagePath: "/industries/seo-hotels-phuket", cohort: "new-2026-11" },
  { keyword: "รับทำ SEO โรงแรม", rank: null, pagePath: "/industries/seo-hotels-phuket", cohort: "new-2026-11" },
  { keyword: "SEO ร้านอาหารภูเก็ต", rank: null, pagePath: "/industries/seo-restaurants-phuket", cohort: "new-2026-11" },
  { keyword: "รับทำ SEO ร้านอาหาร", rank: null, pagePath: "/industries/seo-restaurants-phuket", cohort: "new-2026-11" },
  { keyword: "SEO บริษัททัวร์ภูเก็ต", rank: null, pagePath: "/industries/seo-tours-phuket", cohort: "new-2026-11" },
  { keyword: "รับทำ SEO ทัวร์ภูเก็ต", rank: null, pagePath: "/industries/seo-tours-phuket", cohort: "new-2026-11" },
  { keyword: "SEO อสังหาริมทรัพย์ภูเก็ต", rank: null, pagePath: "/industries/seo-real-estate-phuket", cohort: "new-2026-11" },
  { keyword: "รับทำ SEO อสังหา ภูเก็ต", rank: null, pagePath: "/industries/seo-real-estate-phuket", cohort: "new-2026-11" },
];

export function pageLabelForPath(pagePath: string) {
  return FOCUS_PAGE_LABELS[pagePath] ?? pagePath;
}

export function groupFocusKeywordsByPage(
  rows: FocusKeywordRanking[] = focusKeywordRankings,
): FocusKeywordPageGroup[] {
  const order = Object.keys(FOCUS_PAGE_LABELS);
  const map = new Map<string, FocusKeywordRanking[]>();

  for (const row of rows) {
    const list = map.get(row.pagePath) ?? [];
    list.push(row);
    map.set(row.pagePath, list);
  }

  const paths = [...map.keys()].sort((a, b) => {
    const ai = order.indexOf(a);
    const bi = order.indexOf(b);
    if (ai === -1 && bi === -1) return a.localeCompare(b);
    if (ai === -1) return 1;
    if (bi === -1) return -1;
    return ai - bi;
  });

  return paths.map((pagePath) => {
    const keywords = map.get(pagePath) ?? [];
    const cohort = keywords.some((k) => k.cohort === "new-2026-11") ? "new-2026-11" : "core";
    return {
      pagePath,
      pageLabel: pageLabelForPath(pagePath),
      cohort,
      keywords,
    };
  });
}
