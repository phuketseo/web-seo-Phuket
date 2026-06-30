export type IndustryFaq = { q: string; a: string };

export type IndustryContent = {
  slug: string;
  industry: string;
  industryEn: string;
  headline: string;
  description: string;
  answerBlock: string;
  painPoints: string[];
  services: string[];
  keywords: string[];
  stats: { metric: string; label: string }[];
  intro: string[];
  faqs: IndustryFaq[];
  relatedBlog?: { name: string; href: string };
  relatedLinks?: { name: string; href: string }[];
};

export const industrySeoContent: Record<string, IndustryContent> = {
  restaurant: {
    slug: "seo-restaurants-phuket",
    industry: "ร้านอาหาร",
    industryEn: "Restaurants",
    headline: "SEO ร้านอาหารภูเก็ต",
    description:
      "ช่วยร้านอาหารในภูเก็ตติด Google Maps และ Organic Search เพิ่ม walk-in และ booking โดยไม่พึ่งแพลตฟอร์มอย่างเดียว",
    answerBlock:
      "SEO ร้านอาหารภูเก็ต คือการทำให้ร้านโผล่ Google Maps และ Search เมื่อลูกค้าค้นหาในโซนจริง เช่น ร้านอาหารป่าตอง ซีฟู้ดภูเก็ต PhuketSEO เริ่มจาก GBP + Social Proof แพ็ก Lite ฿5,900/เดือน",
    painPoints: [
      "ลูกค้า walk-in ลดลงหลัง low season",
      "พึ่ง Grab/Foodpanda มากเกินไป margin ต่ำ",
      "Google Maps ไม่โผล่แม้ร้านอยู่ทำเลดี",
      "รีวิวน้อย คู่แข่งในโซนแซง",
      "เว็บไซต์ช้า หรือไม่มีเว็บเลย",
    ],
    services: [
      "Google Business Profile + โพสต์",
      "ระบบขอรีวิว (QR/LINE)",
      "Local keyword โซนร้าน",
      "Landing page เมนู/จองโต๊ะ",
      "AEO: FAQ + schema ร้านอาหาร",
    ],
    keywords: [
      "SEO ร้านอาหารภูเก็ต",
      "ร้านอาหารป่าตอง Google",
      "ซีฟู้ดภูเก็ต SEO",
      "ร้านอาหารตัวเมืองภูเก็ต",
      "Google Maps ร้านอาหาร",
    ],
    stats: [
      { metric: "+40%", label: "Walk-in จาก Maps" },
      { metric: "30-60 วัน", label: "GBP Impression" },
      { metric: "฿5,900", label: "เริ่มต้น/เดือน" },
      { metric: "3-Pack", label: "เป้า Local Pack" },
    ],
    intro: [
      "ร้านอาหารในภูเก็ต ได้ลูกค้าจาก Google Maps มากกว่าเว็บไซต์ — โดยเฉพาะนักท่องเที่ยวและคนท้องถิ่นที่ค้นหา near me ก่อนตัดสินใจ PhuketSEO ช่วย optimize GBP, สร้างระบบขอรีวิว และ SEO เว็บ/landing ให้ร้านโผล่ในโซนจริง",
      "แพ็ก SEO Lite ฿5,900 เหมาะกับร้านที่ยังไม่มีเว็บ แพ็ก Pro ฿8,900 รวมเว็บ + content + AEO/GEO สำหรับร้านที่ต้องการ direct booking และลด dependency platform",
    ],
    faqs: [
      {
        q: "ร้านอาหารภูเก็ต ควรเริ่ม SEO จากอะไร?",
        a: "เริ่มจาก Google Business Profile — รูปเมนู ที่อยู่ โพสต์โปรโมชั่น และขอรีวิวจากลูกค้าจริง มักเห็น impression ใน 30–60 วัน ก่อนลงทุน SEO เว็บเต็มรูปแบบ",
      },
      {
        q: "SEO ร้านอาหาร vs Instagram อะไรสำคัญกว่า?",
        a: "Instagram สร้าง awareness แต่ SEO/Maps จับลูกค้าที่พร้อมจองหรือ walk-in ตอนนี้ ควรทำ Maps ก่อน แล้วใช้ IG เป็น social proof สนับสนุน",
      },
      {
        q: "ราคา SEO สำหรับร้านอาหารเท่าไหร่?",
        a: "SEO Lite ฿5,900/เดือน (GBP + ขอรีวิว) SEO Pro ฿8,900 (เว็บ + SEO + AEO) เหมาะกับร้านที่ต้องการ direct booking",
      },
    ],
    relatedBlog: { name: "Instagram Marketing ร้านอาหาร", href: "/blog/instagram-marketing-phuket-restaurants" },
  },
  spa: {
    slug: "seo-spa-phuket",
    industry: "สปา & Wellness",
    industryEn: "Spa & Wellness",
    headline: "SEO สปาภูเก็ต",
    description:
      "ช่วยสปาและ wellness ในภูเก็ต ดึง direct booking ลด dependency OTA ด้วย Local SEO + เว็บ + AEO structure",
    answerBlock:
      "SEO สปาภูเก็ต เน้น treatment-level keyword และ Google Maps ในโซนกะตะ ป่าตอง ตัวเมือง PhuketSEO ช่วย GBP, เนื้อหา EN/TH และโครงสร้าง AI Search แพ็ก Pro ฿8,900/เดือน",
    painPoints: [
      "Booking ผ่าน Agoda/Klook margin ต่ำ",
      "ลูกค้าต่างชาติค้นหา Google ไม่เจอ",
      "GBP ไม่ครบ treatment และรูป",
      "คู่แข่งในโซนมีรีวิวมากกว่า",
      "เว็บช้า ไม่ mobile-friendly",
    ],
    services: [
      "GBP + treatment keywords",
      "เนื้อหา EN สำหรับ tourist",
      "Direct booking landing",
      "FAQ + AEO schema",
      "Review campaign",
    ],
    keywords: [
      "SEO สปาภูเก็ต",
      "spa kata phuket",
      "massage patong",
      "wellness phuket SEO",
      "day spa phuket google",
    ],
    stats: [
      { metric: "+60%", label: "Direct Booking" },
      { metric: "3 เดือน", label: "Maps 3-Pack" },
      { metric: "฿8,900", label: "แพ็ก Pro" },
      { metric: "EN+TH", label: "Content" },
    ],
    intro: [
      "สปาในภูเก็ต แข่งกับ OTA และสปาในโซนเดียวกัน — ลูกค้าต่างชาติมักค้นหา spa kata phuket หรือ thai massage patong บน Google ก่อนจอง PhuketSEO ช่วย optimize GBP ตาม treatment, สร้างเนื้อหา EN และโครงสร้าง AEO ให้โผล่ AI Overview",
      "อ่าน case approach ใน [บทความ SEO สปาภูเก็ต](/blog/seo-for-phuket-spas) — แพ็ก Pro รวมเว็บ + SEO + AEO/GEO ส่งมอบได้ครบโดยทีมเดียว",
    ],
    faqs: [
      {
        q: "SEO สปาต่างจาก SEO โรงแรมอย่างไร?",
        a: "สปาเน้น treatment-level keyword และ GBP services มากกว่า room booking keyword ต้อง optimize ทั้ง Maps และหน้า treatment บนเว็บ",
      },
      {
        q: "ต้องมีเนื้อหาภาษาอังกฤษไหม?",
        a: "ควรมี — ลูกค้าต่างชาติค้นหา EN keyword เป็นหลัก แพ็ก Pro รวมบทความ SEO 1 ชิ้น/เดือน",
      },
      {
        q: "ใช้เวลานานแค่ไหนถึงลด OTA dependency?",
        a: "Direct booking ที่วัดชัดมักใช้ 3–6 เดือนหลัง GBP + SEO + landing page ครบ ขึ้นกับ conversion ของเว็บสปา",
      },
    ],
    relatedBlog: { name: "SEO สปาภูเก็ต", href: "/blog/seo-for-phuket-spas" },
  },
  hotel: {
    slug: "seo-hotels-phuket",
    industry: "โรงแรม & รีสอร์ท",
    industryEn: "Hotels & Resorts",
    headline: "SEO โรงแรมภูเก็ต",
    description:
      "ช่วยโรงแรมและรีสอร์ทในภูเก็ตเพิ่ม Direct Booking ลด OTA commission ด้วย Local SEO, เว็บ Next.js และ AEO structure",
    answerBlock:
      "SEO โรงแรมภูเก็ต เน้น direct booking keyword, Google Maps และเนื้อหา EN สำหรับนักท่องเที่ยว PhuketSEO ช่วย GBP, landing page และ AEO แพ็ก Pro ฿8,900/เดือน หรือ Pro Max สำหรับ Ads",
    painPoints: [
      "จองผ่าน OTA 80–90% commission กิน margin",
      "เว็บช้า mobile ไม่ดี conversion ต่ำ",
      "ไม่ติด organic สำหรับ hotel + zone keyword",
      "GBP ไม่ครบ room types และรูป",
      "คู่แข่งในโซนมี review และ content มากกว่า",
    ],
    services: [
      "GBP + hotel schema",
      "Direct booking landing EN/TH",
      "Zone keyword (Patong, Kata, Kamala)",
      "AEO FAQ + answer blocks",
      "Pro Max: Google Ads retargeting",
    ],
    keywords: [
      "SEO โรงแรมภูเก็ต",
      "hotel patong phuket",
      "direct booking phuket",
      "resort kata seo",
      "luxury hotel phuket google",
    ],
    stats: [
      { metric: "+320%", label: "Direct Booking" },
      { metric: "6 เดือน", label: "ROI ชัด" },
      { metric: "฿8,900", label: "แพ็ก Pro" },
      { metric: "EN+TH", label: "Content" },
    ],
    intro: [
      "โรงแรมในภูเก็ตแข่งกับ OTA และแบรนด์ chain — ลูกค้าค้นหา hotel patong, resort kata หรือ beachfront phuket บน Google ก่อนจอง PhuketSEO ช่วย optimize GBP, สร้าง direct booking landing และโครงสร้าง AEO ให้โผล่ทั้ง Search และ AI Overview",
      "แพ็ก SEO Pro ฿8,900 รวมเว็บ + SEO + AEO/GEO Pro Max ฿15,000 เพิ่ม Google/Meta Ads management สำหรับ high season",
    ],
    faqs: [
      {
        q: "SEO โรงแรมต่างจาก SEO สปาอย่างไร?",
        a: "โรงแรมเน้น room booking keyword, seasonal demand และ multi-language content มากกว่า treatment-level keyword ของสปา ต้อง optimize ทั้ง Maps, organic และ direct booking funnel",
      },
      {
        q: "ใช้เวลานานแค่ไหนถึงลด OTA dependency?",
        a: "Direct booking ที่วัดชัดมักใช้ 4–6 เดือนหลัง GBP + SEO + landing page ครบ ขึ้นกับ conversion rate ของเว็บและ Best Rate Guarantee",
      },
      {
        q: "ต้องมี Ads ด้วยไหม?",
        a: "ไม่บังคับ — organic + Maps ทำได้ด้วย Pro แต่ Pro Max ช่วยเร่ง lead ในช่วง high season ด้วย Google/Meta Ads (ad spend แยก)",
      },
    ],
    relatedBlog: { name: "SEO โรงแรมภูเก็ต", href: "/blog/seo-for-phuket-hotels" },
  },
  realEstate: {
    slug: "seo-real-estate-phuket",
    industry: "อสังหาริมทรัพย์",
    industryEn: "Real Estate",
    headline: "SEO อสังหาริมทรัพย์ภูเก็ต",
    description:
      "ช่วยตัวแทนและโครงการอสังหาริมทรัพย์ในภูเก็ตดึง qualified leads ด้วย Local SEO, เว็บ Next.js และ content ตาม buyer intent",
    answerBlock:
      "SEO อสังหาริมทรัพย์ภูเก็ต เน้น condo, villa และ zone keyword เช่น คอนโดกมลา villa rawai PhuketSEO ช่วยเว็บ lead gen + GBP sales office แพ็ก Pro ฿8,900/เดือน",
    painPoints: [
      "เว็บสวยแต่ไม่มี organic leads",
      "พึ่ง portal (DDproperty, FazWaz) มากเกินไป",
      "ไม่ติด keyword โซนและ property type",
      "ไม่มี content EN/RU ตาม buyer mix",
      "GBP sales office ไม่ optimize",
    ],
    services: [
      "Property landing + lead form",
      "Zone SEO (Kamala, Rawai, Bang Tao)",
      "GBP sales office",
      "Multilingual content structure",
      "AEO FAQ สำหรับ buyer questions",
    ],
    keywords: [
      "SEO อสังหาริมทรัพย์ภูเก็ต",
      "condo kamala phuket",
      "villa phuket for sale",
      "phuket property seo",
      "real estate phuket google",
    ],
    stats: [
      { metric: "+280%", label: "Qualified Leads" },
      { metric: "15+", label: "Keywords Top 10" },
      { metric: "฿8,900", label: "แพ็ก Pro" },
      { metric: "Lead Gen", label: "Focus" },
    ],
    intro: [
      "อสังหาริมทรัพย์ภูเก็ต buyer ค้นหา Google ก่อนติดต่อ agent — keyword เช่น condo kamala, villa rawai หรือ phuket property investment มี commercial intent สูง PhuketSEO ช่วยสร้างเว็บ lead gen, zone landing และ GBP สำหรับ sales office",
      "อ่านแนวทางใน [บทความ Web Design อสังหาฯ](/blog/web-design-phuket-real-estate) — แพ็ก Pro รวมเว็บ Next.js + SEO + AEO ส่งมอบครบ",
    ],
    faqs: [
      {
        q: "SEO อสังหาฯ ควรเริ่มจากอะไร?",
        a: "เริ่มจาก audit keyword โซน + property type แล้วสร้าง landing ต่อโครงการ/zone พร้อม lead form ที่วัด conversion ได้ GBP sales office ช่วย local visibility",
      },
      {
        q: "ต้องมี content ภาษาอังกฤษไหม?",
        a: "ควรมี — buyer ต่างชาติค้นหา EN keyword เป็นหลัก บางโซน (เช่น กมลา) ต้องการ RU content ด้วย แพ็ก Pro รวม SEO content รายเดือน",
      },
      {
        q: "ราคา SEO สำหรับอสังหาฯ เท่าไหร่?",
        a: "SEO Pro ฿8,900/เดือน (เว็บ + SEO + AEO) setup เว็บครั้งเดียว ฿29,900–49,900 ตามจำนวนหน้า",
      },
    ],
    relatedBlog: { name: "Web Design อสังหาฯ ภูเก็ต", href: "/blog/web-design-phuket-real-estate" },
  },
  tour: {
    slug: "seo-tours-phuket",
    industry: "บริษัททัวร์",
    industryEn: "Tour Operators",
    headline: "SEO บริษัททัวร์ภูเก็ต",
    description:
      "รับทำ SEO ทัวร์ภูเก็ต — แข่ง OTA ด้วย Local SEO และ Direct Booking สำหรับ island tour, ดำน้ำ และเรือทัวร์ ขอคำปรึกษาฟรี",
    answerBlock:
      "SEO บริษัททัวร์ภูเก็ต คือการทำให้ tour operator โผล่ Google เมื่อลูกค้าค้นหากิจกรรมในโซนจริง — เป้าหมายคือ direct booking ที่ margin ดีกว่า OTA PhuketSEO เริ่มจาก GBP จุดขึ้นเรือ + เว็บ EN แพ็ก Pro ฿8,900/เดือน",
    painPoints: [
      "แข่ง OTA งบสูง (Klook, Viator, KKday, GetYourGuide) — commission กัด margin ทุก booking",
      "ฤดูกาลผันผวน — พึ่งแอดอย่างเดียว organic หายเมื่อหยุดจ่าย",
      "รีวิวสำคัญมาก — experience-based purchase ลูกค้าเปรียบเทียบ rating ก่อนจอง",
      "ลูกค้าค้นหา Google แต่ไม่เจอ — แม้ boat และ guide ดี",
      "มี Facebook แต่ไม่มี brand บน Google / ไม่มีเว็บ EN",
    ],
    services: [
      "Long-tail + local intent (ทัวร์เกาะพีพีรับจากป่าตอง, เรือทัวร์ออกจากท่าฉลอง)",
      "GBP + Local Pack สำหรับจุดขึ้นเรือ/จุดนัดพบ",
      "Direct booking landing — ไม่เสีย commission ให้ตัวกลาง",
      "เนื้อหา EN สำหรับ tourist search intent",
      "Review campaign + AEO FAQ schema",
      "Pro Max: Google Ads ช่วง high season",
    ],
    keywords: [
      "SEO บริษัททัวร์ภูเก็ต",
      "รับทำ SEO ทัวร์ภูเก็ต",
      "การตลาดออนไลน์ทัวร์ภูเก็ต",
      "SEO เรือทัวร์ภูเก็ต",
      "ทัวร์ใกล้ฉัน ภูเก็ต",
      "ทัวร์เกาะพีพีรับจากป่าตอง",
    ],
    stats: [
      { metric: "+Direct", label: "Booking ไม่ผ่าน OTA" },
      { metric: "3–6 เดือน", label: "เห็น organic ชัด" },
      { metric: "฿8,900", label: "แพ็ก Pro" },
      { metric: "EN+TH", label: "Content" },
    ],
    intro: [
      "บริษัททัวร์ในภูเก็ตแข่งกับ OTA ที่มีงบโฆษณาสูง — ลูกค้าค้นหากิจกรรมบน Google ก่อนจอง (เช่น island tour, snorkeling trip) PhuketSEO ช่วย optimize GBP ที่จุดขึ้นเรือในโซนป่าตองและกะตะ สร้าง direct booking landing และ long-tail ที่ OTA ไม่ได้เจาะจง",
      "ประเภททัวร์ที่ดูแล: ทัวร์เกาะ (พีพี, สิมิลัน) · ทัวร์ดำน้ำ · รถเช่า/รถรับส่ง — แต่ละ activity มี search intent ต่างกัน ต้องวิเคราะห์ก่อนลงมือ",
    ],
    faqs: [
      {
        q: "SEO บริษัททัวร์ภูเก็ต เริ่มจากอะไร?",
        a: "เริ่มจาก audit ช่องทาง booking ปัจจุบัน (OTA vs direct) แล้ว optimize Google Business Profile ที่จุดขึ้นเรือ/จุดนัดพบ พร้อม long-tail keyword ตาม activity และโซน เช่น ทัวร์เกาะพีพีรับจากป่าตอง",
      },
      {
        q: "ยังใช้ Klook/Viator ได้ไหมถ้าทำ SEO?",
        a: "ใช้ได้ — OTA ช่วย exposure ในช่วง peak แต่เป้าหมาย SEO คือเพิ่ม direct booking ที่ margin ดีกว่า ไม่ต้องเลิก OTA ในวันเดียว",
      },
      {
        q: "SEO ทัวร์ vs Google Ads อะไรเหมาะกว่า?",
        a: "SEO สร้าง organic ยั่งยืน — เหมาะกับ low season และ long-tail local intent Ads เร่ง booking ใน high season แพ็ก Pro Max รวมทั้งสองได้",
      },
      {
        q: "ทัวร์ต้องมีเว็บภาษาอังกฤษไหม?",
        a: "ควรมี — ลูกค้าต่างชาติค้นหา EN keyword เป็นหลัก แพ็ก Pro รวมเว็บ + SEO content EN/TH และ direct booking landing",
      },
      {
        q: "ใช้เวลานานแค่ไหนถึงเห็น direct booking โต?",
        a: "โดยทั่วไป 3–6 เดือนหลัง GBP + เว็บ EN + review campaign ครบ ขึ้นกับ activity ที่แข่งและ conversion ของช่องทางจองตรง",
      },
      {
        q: "หยุดทำ SEO แล้วผลจะหายไหม?",
        a: "Organic ที่สะสมแล้วมักยังอยู่ แต่คู่แข่งและ OTA ไม่หยุด — หยุดทำ content และ GBP ระยะยาว ranking มักถอยลง",
      },
    ],
    relatedBlog: { name: "SEO ทัวร์ภูเก็ต", href: "/blog/seo-tours-phuket" },
    relatedLinks: [
      { name: "Local SEO ป่าตอง", href: "/local/patong" },
      { name: "Local SEO กะตะ", href: "/local/kata" },
      { name: "Google Ads ภูเก็ต", href: "/services/google-ads" },
    ],
  },
};
