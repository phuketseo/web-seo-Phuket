/**
 * Blog post metadata — ใช้ร่วมกับ sitemap และ blog listing
 * เมื่อเพิ่มบทความใหม่ ให้อัปเดตไฟล์นี้พร้อมกับ blog/[slug]/page.tsx
 */
import { getBlogThumbnail, type SiteImage } from "@/lib/images";

export type BlogPostMeta = {
  slug: string;
  title: string;
  category: string;
  description: string;
  thumbnail: SiteImage;
};

export const blogCategories = [
  "ทั้งหมด",
  "SEO ภูเก็ต",
  "Local SEO",
  "เว็บ Next.js",
  "AEO & GEO",
  "Industry Guide",
] as const;

export const blogPostsMeta: BlogPostMeta[] = [
  {
    slug: "andap-web-tok-ai-search",
    title: "อันดับเว็บตก — ปรับตัวรับ AI Search",
    category: "SEO ภูเก็ต",
    description:
      "อันดับเว็บตกเพราะอะไร แยกสาเหตุ 5 กลุ่มก่อนแก้ รู้ได้ยังไงว่าโดน Core Update ปรับตัวรับ AI Search อย่างไร — hub วินิจฉัยจาก PhuketSEO รับทำ SEO ภูเก็ต · SEO Audit ฟรี",
    thumbnail: getBlogThumbnail("andap-web-tok-ai-search"),
  },
  {
    slug: "ai-overview-pao-mai-seo",
    title: "AI Overview เป้าหมายใหม่ของคนทำ SEO",
    category: "AEO & GEO",
    description:
      "AI Overview คือเป้าหมายใหม่ของคนทำ SEO — ไม่ใช่แค่ติดหน้าแรก แต่ให้ระบบสรุปคำตอบอ้างอิงแบรนด์ได้ พร้อมตัวอย่างคำค้น SEO สปาภูเก็ต",
    thumbnail: getBlogThumbnail("ai-overview-pao-mai-seo"),
  },
  {
    slug: "witi-kae-web-don-core-update",
    title: "วิธีแก้ปัญหาเว็บโดน Core Update",
    category: "SEO ภูเก็ต",
    description:
      "วิธีแก้ปัญหาเว็บโดน Core Update — คอนเฟิร์มจากวันที่ Google ประกาศ playbook คุณภาพทั้งไซต์ สิ่งที่ห้ามทำ และระยะเวลาที่สมจริงหลังอัปเดต",
    thumbnail: getBlogThumbnail("witi-kae-web-don-core-update"),
  },
  {
    slug: "andap-google-tok-kuen-nai-30-wan",
    title: "อันดับ Google ตก เช็ควิธีกู้คืนใน 30 วัน",
    category: "SEO ภูเก็ต",
    description:
      "อันดับ Google ตก เช็ควิธีกู้คืนใน 30 วัน — แยกสาเหตุก่อนแก้ แผนสัปดาห์ที่ 1–4 สัญญาณฟื้น และข้อผิดพลาดที่ทำให้ตกซ้ำ",
    thumbnail: getBlogThumbnail("andap-google-tok-kuen-nai-30-wan"),
  },
  {
    slug: "dan-andap-google-maps-phuket",
    title: "ดันอันดับ Google Maps ภูเก็ต — วิธีให้ธุรกิจโผล่ต้นๆ",
    category: "Local SEO",
    description:
      "ดันอันดับ Google Maps ภูเก็ต — ปัจจัยที่ Google ใช้จัดอันดับ 5 ขั้นที่ทำได้จริง และข้อผิดพลาดในโซนป่าตอง กะตะ ตัวเมือง",
    thumbnail: getBlogThumbnail("dan-andap-google-maps-phuket"),
  },
  {
    slug: "google-maps-mai-tid-phuket",
    title: "วิธีแก้ Google Maps ไม่ติด — ทำไมธุรกิจไม่โผล่บนแผนที่",
    category: "Local SEO",
    description:
      "วิธีแก้ Google Maps ไม่ติด — สาเหตุ อาการ และเช็กลิสต์แก้ไขก่อนจ้างดันอันดับในภูเก็ต",
    thumbnail: getBlogThumbnail("google-maps-mai-tid-phuket"),
  },
  {
    slug: "rap-pak-mut-thurakij-phuket",
    title: "รับปักหมุดธุรกิจ Google Maps ภูเก็ต — ยืนยันตำแหน่งร้านให้ถูกต้อง",
    category: "Local SEO",
    description:
      "รับปักหมุดธุรกิจ Google Maps ภูเก็ต — แก้หมุดผิด ยืนยันตัวตน GBP โซนป่าตอง ตัวเมือง ถลาง ก่อนดันอันดับ",
    thumbnail: getBlogThumbnail("rap-pak-mut-thurakij-phuket"),
  },
  {
    slug: "poet-ran-nuad-mai-mai-mee-luk-kha-tham-yang-ngai",
    title: "เปิดร้านนวดใหม่ ไม่มีลูกค้า ทำอย่างไร — ลำดับ 30 วันแรกที่ทำได้จริง",
    category: "Industry Guide",
    description:
      "เปิดร้านนวดใหม่ ไม่มีลูกค้า ทำอย่างไร — ลำดับ 30 วันแรกในโซนป่าตอง กะตะ กมลา ภูเก็ต จาก Google Maps รีวิว ราคาชัด ก่อนโปรโมชัน",
    thumbnail: getBlogThumbnail("poet-ran-nuad-mai-mai-mee-luk-kha-tham-yang-ngai"),
  },
  {
    slug: "ran-nuad-kap-spa-promote-tang-kan-yang-ngai",
    title: "ร้านนวดกับสปา โปรโมตต่างกันอย่างไร — ช่องทางและลำดับที่ไม่ควรสลับกัน",
    category: "Industry Guide",
    description:
      "ร้านนวดกับสปา โปรโมตต่างกันอย่างไร — ช่องทาง Google Maps ราคา รีวิว และลูกค้าเป้าหมายในโซนป่าตอง กะตะ ภูเก็ต",
    thumbnail: getBlogThumbnail("ran-nuad-kap-spa-promote-tang-kan-yang-ngai"),
  },
  {
    slug: "kan-marketing-ran-nuad-phaen-thai",
    title: "การตลาดร้านนวดแผนไทย — หาลูกค้าใหม่บน Google Maps",
    category: "Industry Guide",
    description:
      "การตลาดร้านนวดแผนไทย — Google Maps รีวิว LINE โปรโมชัน ลำดับงานและงบตามขนาดร้าน จากสำรวจ 12 ร้านโซนท่องเที่ยว",
    thumbnail: getBlogThumbnail("kan-marketing-ran-nuad-phaen-thai"),
  },
  {
    slug: "promote-ran-nuad-thai-phuket",
    title: "โปรโมทร้านนวดไทยอย่างไรดี — ลำดับช่องทางที่ทำได้จริงในภูเก็ต",
    category: "Industry Guide",
    description:
      "โปรโมทร้านนวดไทยอย่างไรดี — เริ่มจาก Google Maps รีวิว และราคาชัด ก่อนโปรโมชัน สำหรับร้านในโซนป่าตอง กะตะ กมลา และ SME ภูเก็ต",
    thumbnail: getBlogThumbnail("promote-ran-nuad-thai-phuket"),
  },
  {
    slug: "thipak-mai-mee-luk-kha-tham-yang-ngai",
    title: "ที่พักไม่มีลูกค้า ทำยังไง — วิธีแก้ที่ทำได้จริง",
    category: "Industry Guide",
    description:
      "ที่พักไม่มีลูกค้า ทำยังไง — สาเหตุที่พบบ่อยใน guesthouse โฮมสเตย์ ภูเก็ต โซนป่าตอง กะตะ ตัวเมือง และลำดับแก้จาก Google Maps รีวิว ราคาชัด ก่อนยิงแอด",
    thumbnail: getBlogThumbnail("thipak-mai-mee-luk-kha-tham-yang-ngai"),
  },
  {
    slug: "ying-aep-thi-phak-lek-ngoen-noi",
    title: "ยิงแอดที่พักเล็กๆ งบน้อย ทำยังไง — ลำดับช่องทางที่ทำได้จริง",
    category: "Industry Guide",
    description:
      "ยิงแอดที่พักเล็กๆ ภูเก็ต งบน้อย — ลำดับช่องทาง TikTok Facebook Google Maps ช่วงงบ ฿3,000–10,000 และสิ่งที่ควรทำก่อนยิงแอด",
    thumbnail: getBlogThumbnail("ying-aep-thi-phak-lek-ngoen-noi"),
  },
  {
    slug: "ran-nuad-mai-mee-luk-kha-tham-yang-ngai",
    title: "ร้านนวดไม่มีลูกค้า ทำยังไง — วิธีแก้ที่ทำได้จริง",
    category: "Industry Guide",
    description:
      "ร้านนวดไม่มีลูกค้า ทำยังไง — สาเหตุที่พบบ่อยในโซนป่าตอง กะตะ กมลา และลำดับแก้จาก Google Maps รีวิว ราคาชัด ก่อนโปรโมชัน",
    thumbnail: getBlogThumbnail("ran-nuad-mai-mee-luk-kha-tham-yang-ngai"),
  },
  {
    slug: "local-seo-rang-kha-mistakes",
    title: "ข้อผิดพลาด Local SEO ร้านค้า ที่ทำให้ไม่ติด Google Maps",
    category: "Local SEO",
    description:
      "ข้อผิดพลาด Local SEO ร้านค้าที่มักเจอ — หมวด GBP ผิด ไม่มีรูปสินค้า NAP ไม่ตรง รีวิวน้อย และทำ local seo ร้านค้าแล้วลืมดูแล",
    thumbnail: getBlogThumbnail("local-seo-rang-kha-mistakes"),
  },
  {
    slug: "kham-kha-local-seo-rang-kha",
    title: "ลูกค้าค้นหาร้านค้าด้วยคำว่าอะไร? คำค้น Local SEO ร้านค้า",
    category: "Local SEO",
    description:
      "ลูกค้าค้นหาร้านค้าด้วยคำว่าอะไร — คำค้น near me ร้านขายของ ร้านเสื้อผ้า ร้านมือถือ ตามย่าน สำหรับทำ local seo ร้านค้า",
    thumbnail: getBlogThumbnail("kham-kha-local-seo-rang-kha"),
  },
  {
    slug: "gbp-rang-kha-local-seo",
    title: "Google Business Profile สำหรับร้านค้า — ตั้งค่ายังไงให้ติด Maps",
    category: "Local SEO",
    description:
      "Google Business Profile สำหรับร้านค้า ตั้งค่ายังไง หมวดหมู่ รูปสินค้า รีวิว และข้อผิดพลาดที่ร้านขายของ ร้านเสื้อผ้า มักทำ",
    thumbnail: getBlogThumbnail("gbp-rang-kha-local-seo"),
  },
  {
    slug: "raaka-local-seo-rang-kha",
    title: "จ้างทำ Local SEO ร้านค้า ราคาเท่าไหร่ ให้เหมาะกับร้าน (2026)",
    category: "Local SEO",
    description:
      "จ้างทำ Local SEO ร้านค้า ราคาเท่าไหร่ แพ็ก Lite Pro ต่างกันยังไง ร้านขายของ ร้านเสื้อผ้า ควรเลือกแพ็กไหน",
    thumbnail: getBlogThumbnail("raaka-local-seo-rang-kha"),
  },
  {
    slug: "tam-local-seo-rang-kha",
    title: "ทำ Local SEO ร้านค้าอย่างไรให้ติด Google Maps",
    category: "Local SEO",
    description:
      "ทำ Local SEO ร้านค้าอย่างไรให้ลูกค้าในโซนเจอบน Google Maps — ขั้นตอน GBP รีวิว คำค้น near me สำหรับร้านขายของ ร้านเสื้อผ้า SME",
    thumbnail: getBlogThumbnail("tam-local-seo-rang-kha"),
  },
  {
    slug: "google-business-profile-local-seo",
    title: "Google Business Profile คืออะไร? หัวใจของบริการ Local SEO",
    category: "Local SEO",
    description:
      "Google Business Profile คือ listing บน Google Maps ที่ทุกบริการ Local SEO เริ่มจากที่นี่ — ตั้งค่า รีวิว คำผิดที่ธุรกิจมักทำ พร้อมเคสจริงจากภูเก็ต",
    thumbnail: getBlogThumbnail("google-business-profile-local-seo"),
  },
  {
    slug: "local-seo-vs-seo",
    title: "Local SEO กับ SEO ต่างกันยังไง? ธุรกิจไหนควรเริ่มอะไรก่อน",
    category: "Local SEO",
    description:
      "Local SEO กับ SEO ต่างกันตรงไหน — เมื่อไหร่ควรเน้น Google Maps ก่อน เมื่อไหร่ต้องทำเว็บ และธุรกิจแบบไหนควรเริ่มจากบริการ local seo",
    thumbnail: getBlogThumbnail("local-seo-vs-seo"),
  },
  {
    slug: "leuk-aecensi-local-seo",
    title: "เลือกเอเจนซี่ Local SEO ยังไงไม่ให้เสียเงินฟรี",
    category: "Local SEO",
    description:
      "เลือกเอเจนซี่ Local SEO ควรดูอะไรก่อนจ้าง — red flag deliverable KPI และคำถามก่อนเซ็น สำหรับธุรกิจที่หาบริการ local seo ในประเทศไทย",
    thumbnail: getBlogThumbnail("leuk-aecensi-local-seo"),
  },
  {
    slug: "raaka-local-seo",
    title: "จ้างทำ Local SEO ราคาเท่าไหร่ ให้เหมาะกับธุรกิจ (2026)",
    category: "Local SEO",
    description:
      "จ้างทำ Local SEO ราคาเท่าไหร่ แพ็ก Lite Pro ต่างกันยังไง จ่ายเท่าไหร่ถึงคุ้ม — เปรียบเทียบขอบเขตงาน GBP Maps รีวิว สำหรับธุรกิจในประเทศไทย",
    thumbnail: getBlogThumbnail("raaka-local-seo"),
  },
  {
    slug: "local-seo-kue-arai",
    title: "Local SEO คืออะไร? วิธีให้ธุรกิจติด Google Maps",
    category: "Local SEO",
    description:
      "Local SEO คืออะไร บริการ local seo ได้อะไร เหมาะกับธุรกิจแบบไหน และทำอย่างไรให้ติด Google Maps — คู่มือสำหรับธุรกิจในประเทศไทย",
    thumbnail: getBlogThumbnail("local-seo-kue-arai"),
  },
  {
    slug: "local-seo-rawai-phuket",
    title: "Local SEO ราไวย์ 2026 — คู่มือทำให้ธุรกิจโผล่ Google Maps",
    category: "Local SEO",
    description:
      "Local SEO ราไวย์ คืออะไร ทำไมสำคัญ และทำอย่างไรให้ธุรกิจในโซนราไวย์ ฉลอง และปลายใต้เกาะโผล่ Google Maps — อ่านง่าย ไม่ซับซ้อน",
    thumbnail: getBlogThumbnail("local-seo-rawai-phuket"),
  },
  {
    slug: "local-seo-bang-tao-phuket",
    title: "Local SEO บางเทา 2026 — คู่มือทำให้ธุรกิจโผล่ Google Maps",
    category: "Local SEO",
    description:
      "Local SEO บางเทา คืออะไร ทำไมสำคัญ และทำอย่างไรให้ธุรกิจในโซนลากูนา บางเทา และเชิงทะเลโผล่ Google Maps — อ่านง่าย ไม่ซับซ้อน",
    thumbnail: getBlogThumbnail("local-seo-bang-tao-phuket"),
  },
  {
    slug: "local-seo-kathu-phuket",
    title: "Local SEO กะทู้ 2026 — คู่มือทำให้ธุรกิจโผล่ Google Maps",
    category: "Local SEO",
    description:
      "Local SEO กะทู้ คืออะไร ทำไมสำคัญ และทำอย่างไรให้ธุรกิจในโซนกะทู้ ห้างเซ็นทรัลภูเก็ต และสนามกอล์ฟโผล่ Google Maps — อ่านง่าย ไม่ซับซ้อน",
    thumbnail: getBlogThumbnail("local-seo-kathu-phuket"),
  },
  {
    slug: "local-seo-thalang-phuket",
    title: "Local SEO ถลาง 2026 — โซนสนามบิน หาดไม้ขาว และหาดในทอน",
    category: "Local SEO",
    description:
      "Local SEO ถลาง 2026 คือการทำให้ธุรกิจในอำเภอถลางโผล่ Google Maps และ Search เมื่อลูกค้าค้นหาโรงแรมใกล้สนามบิน รีสอร์ทหาดไม้ขาว หรืออสังหาฯ ในโซนนี้",
    thumbnail: getBlogThumbnail("local-seo-thalang-phuket"),
  },
  {
    slug: "local-seo-kamala-phuket",
    title: "Local SEO กมลา 2026 — โซน luxury ที่แข่งต่างจากป่าตองและกะตะ",
    category: "Local SEO",
    description:
      "Local SEO กมลา ทำอย่างไรให้ธุรกิจโผล่ Google Maps ในโซนหาดกมลา — ปัญหาและทิศทางแก้เมื่อ buyer ต่างชาติค้นหา condo, resort และ fine dining ใน Kamala",
    thumbnail: getBlogThumbnail("local-seo-kamala-phuket"),
  },
  {
    slug: "checklist-seo-phuket",
    title: "Checklist SEO ภูเก็ต 2026 — เจ้าของธุรกิจเช็กอะไรก่อนจ้างหรือทำเอง",
    category: "SEO ภูเก็ต",
    description:
      "Checklist SEO ภูเก็ตสำหรับเจ้าของธุรกิจ — เช็ก Google Maps, GBP, NAP, เว็บ และเกณฑ์ก่อนจ้างรับทำ SEO ภูเก็ต โดยไม่ต้องเป็นนักการตลาด",
    thumbnail: getBlogThumbnail("checklist-seo-phuket"),
  },
  {
    slug: "rab-tam-seo-phuket",
    title: "รับทำ SEO ภูเก็ต 2026 — เลือกเอเจนซี่อย่างไรก่อนจ้าง?",
    category: "SEO ภูเก็ต",
    description:
      "รับทำ SEO ภูเก็ต — เปรียบเทียบสิ่งที่ควรดูก่อนจ้าง: ความเชี่ยวชาญโซน รูปแบบราคา ผลลัพธ์ที่วัดได้ และข้อควรระวังในตลาดท่องเที่ยวภูเก็ต ขอคำปรึกษาฟรี",
    thumbnail: getBlogThumbnail("rab-tam-seo-phuket"),
  },
  {
    slug: "seo-sme-phuket",
    title: "SEO SME ภูเก็ต 2026 — ธุรกิจเล็กที่ยังไม่มีตัวตนบน Google",
    category: "SEO ภูเก็ต",
    description:
      "SEO SME ภูเก็ต — Pattern ที่ธุรกิจเล็กในภูเก็ตมักเจอเมื่อยังไม่มีตัวตนบน Google ทิศทางเริ่มต้นและจุดที่ SME มักติด (ไม่ใช่คู่มือ DIY)",
    thumbnail: getBlogThumbnail("seo-sme-phuket"),
  },
  {
    slug: "seo-restaurants-phuket",
    title: "SEO ร้านอาหารภูเก็ต 2026 — walk-in หายเพราะลูกค้าไม่เจอบน Google",
    category: "Industry Guide",
    description:
      "SEO ร้านอาหารภูเก็ต ทำอย่างไรเมื่อ walk-in ลดลง — ปัญหาการมองเห็นบน Maps และทิศทางแก้สำหรับร้านอาหารในภูเก็ต",
    thumbnail: getBlogThumbnail("seo-restaurants-phuket"),
  },
  {
    slug: "nap-local-seo-phuket",
    title: "NAP ไม่ตรง ฆ่า Local SEO ภูเก็ต — เมื่อ Google ไม่เชื่อข้อมูลร้านคุณ",
    category: "Local SEO",
    description:
      "NAP Local SEO ภูเก็ต ทำอย่างไรเมื่อชื่อ ที่อยู่ เบอร์โทรไม่ตรงกัน — ปัญหา listing ซ้ำและทิศทางแก้สำหรับธุรกิจ local",
    thumbnail: getBlogThumbnail("nap-local-seo-phuket"),
  },
  {
    slug: "local-seo-phuket-town",
    title: "Local SEO ตัวเมืองภูเก็ต 2026 — ลูกค้าไทยที่ค้นหาในเมือง",
    category: "Local SEO",
    description:
      "Local SEO ตัวเมืองภูเก็ต ทำอย่างไรให้ธุรกิจโผล่ Google Maps สำหรับลูกค้าไทยในโซนตัวเมือง — ปัญหาและทิศทางแก้",
    thumbnail: getBlogThumbnail("local-seo-phuket-town"),
  },
  {
    slug: "local-seo-kata-phuket",
    title: "Local SEO กะตะ 2026 — โซนครอบครัวที่แข่งต่างจากป่าตอง",
    category: "Local SEO",
    description:
      "Local SEO กะตะ ทำอย่างไรให้ธุรกิจโผล่ Google Maps ในโซนกะตะ/กะรน — ปัญหาและทิศทางแก้เมื่อแข่งกับป่าตองไม่ได้",
    thumbnail: getBlogThumbnail("local-seo-kata-phuket"),
  },
  {
    slug: "low-season-seo-phuket",
    title: "Low Season SEO ภูเก็ต — เมื่อ high season ผ่านไป แล้ว booking หาย",
    category: "SEO ภูเก็ต",
    description:
      "Low Season SEO ภูเก็ต ทำอย่างไรเมื่อ booking หายหลัง high season — ปัญหาการมองเห็นและทิศทางสำหรับธุรกิจท่องเที่ยว",
    thumbnail: getBlogThumbnail("low-season-seo-phuket"),
  },
  {
    slug: "near-me-seo-phuket",
    title: "Near Me SEO ภูเก็ต — ลูกค้าค้นหาใกล้ฉัน แต่ธุรกิจไม่โผล่",
    category: "Local SEO",
    description:
      "Near Me SEO ภูเก็ต ทำอย่างไรเมื่อลูกค้าค้นหา near me แต่ธุรกิจไม่โผล่ Maps — ปัญหาและทิศทางแก้สำหรับ local business",
    thumbnail: getBlogThumbnail("near-me-seo-phuket"),
  },
  {
    slug: "website-speed-seo-phuket",
    title: "เว็บช้าฆ่า SEO ภูเก็ต — เมื่อ Google มองไม่เห็นเพราะ Core Web Vitals",
    category: "เว็บ Next.js",
    description:
      "เว็บช้าส่งผล SEO ภูเก็ตอย่างไร — ปัญหา Core Web Vitals และทิศทางแก้เมื่อเว็บ WordPress หรือเว็บเก่าทำให้ ranking ไม่โต",
    thumbnail: getBlogThumbnail("website-speed-seo-phuket"),
  },
  {
    slug: "local-seo-patong-phuket",
    title: "Local SEO ป่าตอง 2026 — แข่งในโซนที่คนเยอะที่สุด",
    category: "Local SEO",
    description:
      "Local SEO ป่าตอง ทำอย่างไรให้ธุรกิจโผล่ Google Maps ในโซนที่แข่งสูง — ปัญหาและทิศทางแก้สำหรับธุรกิจในป่าตอง",
    thumbnail: getBlogThumbnail("local-seo-patong-phuket"),
  },
  {
    slug: "seo-tours-phuket",
    title: "SEO ทัวร์ภูเก็ต 2026 — เมื่อลูกค้าจองผ่าน OTA แทนเว็บคุณ",
    category: "Industry Guide",
    description:
      "SEO ทัวร์ภูเก็ต ทำอย่างไรเมื่อ booking มาจาก Klook/Viator แทน Google — ปัญหาการมองเห็นและ direct booking สำหรับ tour operator ในภูเก็ต",
    thumbnail: getBlogThumbnail("seo-tours-phuket"),
  },
  {
    slug: "seo-real-estate-phuket",
    title: "SEO อสังหาริมทรัพย์ภูเก็ต 2026 — เมื่อ Lead มาจาก Portal แทน Google",
    category: "Industry Guide",
    description:
      "SEO อสังหาริมทรัพย์ภูเก็ต ทำอย่างไรเมื่อ lead มาจาก portal แทน Google — ปัญหาการมองเห็นและ trust สำหรับ agent ในภูเก็ต",
    thumbnail: getBlogThumbnail("seo-real-estate-phuket"),
  },
  {
    slug: "google-reviews-phuket",
    title: "Google Reviews ภูเก็ต 2026 — เมื่อรีวิวน้อย ลูกค้าเลือกคู่แข่งแทน",
    category: "Local SEO",
    description:
      "Google Reviews ภูเก็ต ทำอย่างไรเมื่อรีวิวน้อยหรือไม่มีคนตอบ — ปัญหา trust บน Maps และทิศทางแก้สำหรับธุรกิจในภูเก็ต",
    thumbnail: getBlogThumbnail("google-reviews-phuket"),
  },
  {
    slug: "direct-booking-hotel-phuket",
    title: "Direct Booking โรงแรมภูเก็ต 2026 — เมื่อ OTA กิน margin แล้วจองตรงเป็นอย่างไร",
    category: "Industry Guide",
    description:
      "Direct Booking โรงแรมภูเก็ต ทำอย่างไรเมื่อ OTA กิน commission — ปัญหาช่องทางจองตรงที่พัง และทิศทางแก้สำหรับโรงแรมในภูเก็ต",
    thumbnail: getBlogThumbnail("direct-booking-hotel-phuket"),
  },
  {
    slug: "seo-clinic-phuket",
    title: "SEO คลินิกภูเก็ต 2026 — เพิ่มการมองเห็นให้ลูกค้ารู้จักธุรกิจคุณมากขึ้น",
    category: "Industry Guide",
    description:
      "SEO คลินิกภูเก็ต ทำอย่างไรให้โผล่ Google Maps และ Search สร้างการมองเห็นและความน่าเชื่อถือสำหรับคลินิกในภูเก็ต",
    thumbnail: getBlogThumbnail("seo-clinic-phuket"),
  },
  {
    slug: "google-ads-vs-seo-phuket",
    title: "Google Ads vs SEO ภูเก็ต 2026 — ธุรกิจไหนควรเริ่มอะไรก่อน?",
    category: "SEO ภูเก็ต",
    description:
      "Google Ads vs SEO ภูเก็ต เปรียบเทียบต้นทุน เวลา และแนวทางเริ่มต้นสำหรับโรงแรม ร้านอาหาร สปา และ SME",
    thumbnail: getBlogThumbnail("google-ads-vs-seo-phuket"),
  },
  {
    slug: "rab-tam-web-phuket",
    title: "รับทำเว็บไซต์ภูเก็ต — เว็บ Next.js เร็ว ติด Google พร้อม SEO",
    category: "เว็บ Next.js",
    description: "รับทำเว็บไซต์ภูเก็ต Next.js mobile-first พร้อม SEO AEO ราคา setup ฿29,900 ขึ้นไป",
    thumbnail: getBlogThumbnail("rab-tam-web-phuket"),
  },
  {
    slug: "geo-kue-arai",
    title: "GEO คืออะไร? Generative Engine Optimization สำหรับธุรกิจภูเก็ต",
    category: "AEO & GEO",
    description: "GEO คืออะไร ทำอย่างไรให้ ChatGPT Perplexity อ้างอิงธุรกิจในภูเก็ต",
    thumbnail: getBlogThumbnail("geo-kue-arai"),
  },
  {
    slug: "aeo-kue-arai",
    title: "AEO คืออะไร? Answer Engine Optimization สำหรับธุรกิจในภูเก็ต",
    category: "AEO & GEO",
    description: "AEO คืออะไร ต่างจาก SEO อย่างไร GEO llms.txt และวิธีเตรียมธุรกิจภูเก็ตให้ AI อ้างอิง",
    thumbnail: getBlogThumbnail("aeo-kue-arai"),
  },
  {
    slug: "ai-overview-kue-arai",
    title: "AI Overview คืออะไร? ผลกระทบต่อ SEO ภูเก็ตและวิธีปรับตัว",
    category: "AEO & GEO",
    description: "Google AI Overview คืออะไร กระทบ SEO ภูเก็ตอย่างไร ธุรกิจท้องถิ่นควรทำอะไร",
    thumbnail: getBlogThumbnail("ai-overview-kue-arai"),
  },
  {
    slug: "seo-phuket-kue-arai",
    title: "SEO ภูเก็ต คืออะไร? คู่มือสำหรับธุรกิจในภูเก็ต",
    category: "SEO ภูเก็ต",
    description: "SEO ภูเก็ต คืออะไร ประโยชน์หลัก เริ่มจากอะไร และปัญหาที่ธุรกิจมักเจอเมื่อลูกค้าค้นหาบน Google",
    thumbnail: getBlogThumbnail("seo-phuket-kue-arai"),
  },
  {
    slug: "local-seo-phuket",
    title: "Local SEO ภูเก็ต คืออะไร? วิธีติด Google Maps (2026)",
    category: "Local SEO",
    description:
      "Local SEO ภูเก็ต คืออะไร ทำไมธุรกิจต้องติดอันดับบน Google Maps ในป่าตอง กะตะ กมลา ตัวเมือง — เริ่มจาก Google Business Profile รีวิว และคำค้นโซนจริง",
    thumbnail: getBlogThumbnail("local-seo-phuket"),
  },
  {
    slug: "local-seo-phuket-kue-arai",
    title: "Local SEO ภูเก็ต คืออะไร? วิธีให้ธุรกิจติด Google Maps",
    category: "Local SEO",
    description: "Local SEO ภูเก็ต คืออะไร ประโยชน์หลัก เริ่มจากอะไร และปัญหาที่ธุรกิจมักเจอเมื่อค้นหา Google Maps",
    thumbnail: getBlogThumbnail("local-seo-phuket-kue-arai"),
  },
  {
    slug: "raaka-seo-phuket",
    title: "ราคา SEO ภูเก็ต 2026 — ควรจ่ายเท่าไหร่ถึงคุ้มค่า?",
    category: "SEO ภูเก็ต",
    description: "ราคา SEO ภูเก็ต 2026 แพ็ก Lite ฿5,900 Pro ฿8,900 Pro Max ฿15,000",
    thumbnail: getBlogThumbnail("raaka-seo-phuket"),
  },
  {
    slug: "seo-for-phuket-spas",
    title: "SEO สปาภูเก็ต: ดึง Direct Booking ไม่พึ่ง OTA",
    category: "Industry Guide",
    description:
      "SEO สปาภูเก็ต ทำอย่างไรให้ Direct Booking โต ลด OTA ด้วย Local SEO และการมองเห็นบน Google",
    thumbnail: getBlogThumbnail("seo-for-phuket-spas"),
  },
  {
    slug: "gemini-hotel-competitor-analysis",
    title: "Competitive Audit โรงแรมภูเก็ต: วิเคราะห์คู่แข่ง + วางแผน SEO 90 วัน",
    category: "AEO & GEO",
    description:
      "Competitive Audit โรงแรมภูเก็ต วิเคราะห์คู่แข่งในโซนและวางแผน SEO ตามข้อมูลจริง",
    thumbnail: getBlogThumbnail("gemini-hotel-competitor-analysis"),
  },
  {
    slug: "hotel-phuket-seo-problems",
    title: "ปัญหา SEO โรงแรมภูเก็ต — เมื่อลูกค้าค้นหาแล้วไปจอง OTA แทน",
    category: "Industry Guide",
    description:
      "ปัญหา SEO โรงแรมภูเก็ตที่พบบ่อย — ไม่โผล่ Maps, เว็บไม่ตอบโซน, แข่ง keyword ผิด และ Direct Booking ไม่โต",
    thumbnail: getBlogThumbnail("hotel-phuket-seo-problems"),
  },
  {
    slug: "seo-for-phuket-hotels",
    title: "SEO โรงแรมภูเก็ต: เพิ่ม Direct Booking ลด OTA",
    category: "Industry Guide",
    description:
      "SEO โรงแรมภูเก็ต ทำอย่างไรให้ Direct Booking โต ลด OTA ด้วยการมองเห็นบน Google",
    thumbnail: getBlogThumbnail("seo-for-phuket-hotels"),
  },
  {
    slug: "instagram-marketing-phuket-restaurants",
    title: "ร้านอาหารภูเก็ต: ทำ Google Maps ก่อน Instagram",
    category: "Industry Guide",
    description:
      "ร้านอาหารภูเก็ต ทำ Google Maps ก่อน Instagram — Social เป็นเทคนิคเสริม",
    thumbnail: getBlogThumbnail("instagram-marketing-phuket-restaurants"),
  },
  {
    slug: "web-design-phuket-real-estate",
    title: "เว็บอสังหาริมทรัพย์ภูเก็ต: Next.js + SEO ดึง Lead จริง",
    category: "เว็บ Next.js",
    description:
      "เว็บอสังหาริมทรัพย์ภูเก็ต ที่ดึง lead ได้จริง — mobile-first และ SEO structure",
    thumbnail: getBlogThumbnail("web-design-phuket-real-estate"),
  },
  {
    slug: "google-my-business-phuket",
    title: "Google Business Profile คืออะไร? Quick Win Local SEO ภูเก็ต",
    category: "Local SEO",
    description:
      "Google Business Profile คืออะไร ทำอย่างไรให้ธุรกิจโผล่ Google Maps เมื่อลูกค้าค้นหาในโซน — คู่มือ GBP ภูเก็ต",
    thumbnail: getBlogThumbnail("google-my-business-phuket"),
  },
  {
    slug: "tiktok-marketing-phuket-services",
    title: "ธุรกิจบริการภูเก็ต: ทำ Google Maps ก่อน TikTok",
    category: "Industry Guide",
    description:
      "ธุรกิจบริการภูเก็ต ทำ Google Maps ก่อน TikTok — Social เป็นเทคนิคเสริม",
    thumbnail: getBlogThumbnail("tiktok-marketing-phuket-services"),
  },
  {
    slug: "content-marketing-phuket-foreigners",
    title: "SEO Content EN ภูเก็ต: ดึงลูกค้าต่างชาติจาก Google",
    category: "SEO ภูเก็ต",
    description:
      "Content EN สำหรับธุรกิจภูเก็ต ดึงลูกค้าต่างชาติจาก Google organic",
    thumbnail: getBlogThumbnail("content-marketing-phuket-foreigners"),
  },
  {
    slug: "google-search-console-phuket",
    title: "Google Search Console คืออะไร? วัดผล Local SEO ภูเก็ต",
    category: "Local SEO",
    description:
      "Google Search Console คืออะไร ใช้อย่างไรวัดผล Local SEO หลังตั้ง Google Business Profile — indexing, query และ KPI ที่ควรดูจริง",
    thumbnail: getBlogThumbnail("google-search-console-phuket"),
  },
];

export const blogPostSlugs = blogPostsMeta.map((post) => post.slug);

export function getBlogPostMetaBySlug(slug: string): BlogPostMeta | undefined {
  return blogPostsMeta.find((post) => post.slug === slug);
}
