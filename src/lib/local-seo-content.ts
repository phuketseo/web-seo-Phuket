export type LocalAreaFaq = { q: string; a: string };

export type LocalAreaContent = {
  answerBlock?: string;
  intro: string[];
  faqs: LocalAreaFaq[];
};

export const localSeoContent: Record<string, LocalAreaContent> = {
  patong: {
    answerBlock:
      "Local SEO ป่าตอง คือการทำให้ธุรกิจในโซนหาดป่าตอง ถนนบางลา และย่านท่องเที่ยวโผล่ Google Maps เมื่อลูกค้าค้นหา โรงแรมป่าตอง ร้านอาหารป่าตอง หรือทัวร์ป่าตอง PhuketSEO เริ่มจาก GBP แพ็ก Lite ฿5,900/เดือน",
    intro: [
      "Local SEO ป่าตองจาก PhuketSEO ช่วยให้ธุรกิจในโซนหาดป่าตอง ถนนบางลา และย่านท่องเที่ยวหลักโผล่ Google Maps และ organic search เมื่อลูกค้าค้นหา โรงแรมป่าตอง ร้านอาหารป่าตอง หรือทัวร์ป่าตอง ตลาดป่าตองแข่งสูงมาก การไล่ keyword ทั้งเกาะจึงไม่ realistic — เราเน้น long-tail ในโซนจริง",
      "บริการครอบคลุม Google Business Profile optimization, NAP consistency, review strategy และ landing page ตาม Content Gap ในโซนป่าตอง อ่านเพิ่มเกี่ยวกับ SEO โรงแรมและ Google Business Profile ในบล็อกของเรา",
    ],
    faqs: [
      {
        q: "SEO ป่าตองต่างจาก SEO ภูเก็ตทั้งเกาะอย่างไร?",
        a: "ป่าตองมี buyer intent และคู่แข่งเฉพาะในโซน keyword เช่น hotel patong beach หรือ restaurant bangla road แตกต่างจาก keyword กว้างอย่าง โรงแรมภูเก็ต การทำ Local SEO ต้อง optimize GBP และเนื้อหาให้ตรงโซนป่าตอง",
      },
      {
        q: "ธุรกิจประเภทไหนในป่าตองควรทำ Local SEO?",
        a: "โรงแรม บาร์ ร้านอาหาร ร้านนวด ทัวร์ และดำน้ำ — ธุรกิจที่ลูกค้าค้นหา near me หรือ in patong ก่อนตัดสินใจจอง",
      },
      {
        q: "ใช้เวลานานแค่ไหนถึงติด Google Maps 3-Pack ในป่าตอง?",
        a: "หลัง verify GBP และ optimize NAP รูป posts มักเห็น impressions ใน 30–60 วัน การติด 3-Pack ขึ้นกับการแข่งขันและรีวิว โดยทั่วไป 2–4 เดือน",
      },
      {
        q: "PhuketSEO ช่วย Local SEO ป่าตองอย่างไร?",
        a: "Audit โซนและคู่แข่ง optimize Google Business Profile สร้าง landing ตาม keyword gap และรายงาน Maps impressions กับ calls รายเดือน",
      },
    ],
  },
  "phuket-town": {
    intro: [
      "Local SEO ตัวเมืองภูเก็ตเหมาะกับร้านค้า ร้านอาหาร คลินิก สำนักงาน และโรงแรม boutique ในย่านเมืองเก่า ถนนถลาง และพื้นที่ธุรกิจใจกลางเกาะ ลูกค้าทั้งคนท้องถิ่นและนักท่องเที่ยวที่อยู่ภูเก็ตระยะยาวมักค้นหาธุรกิจในโซนนี้ผ่าน Google Maps",
      "PhuketSEO ช่วย optimize Google Business Profile สร้างเนื้อหา local keyword และ review strategy ให้ธุรกิจในเมืองเก่าและตัวเมืองภูเก็ตโผล่ผลค้นหาเมื่อลูกค้าพิมพ์ ร้านกาแฟเมืองเก่า คลินิกภูเก็ต หรือ ร้านอาหารตลาดใหม่",
    ],
    faqs: [
      {
        q: "Local SEO ตัวเมืองภูเก็ตเหมาะกับธุรกิจแบบไหน?",
        a: "ร้านอาหาร specialty coffee คลินิก ร้านค้า สำนักงาน และโรงแรม boutique ที่พึ่ง walk-in และลูกค้าในพื้นที่มากกว่า OTA",
      },
      {
        q: "ทำไมร้านในเมืองเก่าถึงไม่โผล่ Google Maps?",
        a: "สาเหตุที่พบบ่อย: ไม่ verify listing หมวดหมู่ผิด NAP ไม่ตรงป้ายร้าน รูปน้อย และไม่ตอบรีวิว",
      },
      {
        q: "ควรโพสต์ Google Posts บ่อยแค่ไหน?",
        a: "อย่างน้อยสัปดาห์ละ 1 โพสต์ — โปรโมชั่น เมนูใหม่ หรือ event ช่วยให้ profile active",
      },
      {
        q: "Local SEO ตัวเมืองใช้เวลานานแค่ไหน?",
        a: "Maps impressions มักเห็นใน 30–60 วัน หลังแก้ GBP ส่วน organic traffic จาก local keyword มักใช้ 2–4 เดือน",
      },
    ],
  },
  kathu: {
    intro: [
      "Local SEO กะทู้จาก PhuketSEO เน้นธุรกิจในโซนกะทู้ ห้างเซ็นทรัลภูเก็ต สนามกอล์ฟ และรีสอร์ทใกล้กะตะ ลูกค้าเป้าหมายรวมทั้ง resident ชาวต่างชาติและนักท่องเที่ยวที่พักระยะกลาง",
      "เราช่วย optimize Google Business Profile สร้าง landing ตาม keyword เช่น สนามกอล์ฟภูเก็ต รีสอร์ทกะทู้ และสปากะทู้ พร้อม NAP consistency ทุกช่องทาง",
    ],
    faqs: [
      {
        q: "SEO กะทู้เหมาะกับธุรกิจอะไร?",
        a: "สนามกอล์ฟ รีสอร์ท ร้านอาหาร สปา และอสังหาริมทรัพย์ในโซนกะทู้และใกล้เซ็นทรัลภูเก็ต",
      },
      {
        q: "Local SEO กะทู้ต่างจากป่าตองอย่างไร?",
        a: "กะทู้มี mix ของ resident และ tourist ที่พักระยะกลาง keyword และ intent ต่างจากป่าตองที่เน้น nightlife และ beach tourism",
      },
      {
        q: "ต้องมีเว็บไซต์ก่อนทำ Local SEO ไหม?",
        a: "ไม่จำเป็น — เริ่มจาก Google Business Profile ได้เลย แต่เว็บไซต์ที่มี NAP ตรงกันและ local keyword ช่วยเสริมอันดับ organic",
      },
      {
        q: "PhuketSEO รายงานผล Local SEO อย่างไร?",
        a: "รายงาน Maps impressions, direction requests, phone calls และ keyword rankings ในโซนกะทู้รายเดือน",
      },
    ],
  },
  thalang: {
    intro: [
      "Local SEO ถลางจาก PhuketSEO ครอบคลุมโซนใกล้สนามบินภูเก็ต หาดไม้ขาว หาดนาทอน และย่านอสังหาริมทรัพย์ luxury ลูกค้าเป้าหมายรวมโรงแรม airport hotel รีสอร์ท beachfront และ agency ขายคอนโด",
      "เราวางกลยุทธ์ keyword เช่น โรงแรมใกล้สนามบินภูเก็ต คอนโดกมลา และ resort mai khao พร้อม optimize Google Business Profile สำหรับแต่ละ location",
    ],
    faqs: [
      {
        q: "Local SEO ถลางเหมาะกับธุรกิจแบบไหน?",
        a: "โรงแรมใกล้สนามบิน รีสอร์ทหาดไม้ขาว อสังหาริมทรัพย์ และร้านอาหารในโซนถลาง",
      },
      {
        q: "ธุรกิจหลาย location ควรทำ GBP อย่างไร?",
        a: "แยก Google Business Profile ต่อสาขา ห้ามรวม location ในหน้าเดียว NAP ต้องตรงกับที่อยู่จริงทุกแห่ง",
      },
      {
        q: "keyword ภาษาอังกฤษสำคัญสำหรับถลางไหม?",
        a: "สำคัญมาก โดยเฉพาะ airport hotel, kamala condo และ mai khao resort — ลูกค้าต่างชาติค้นหาเป็นภาษาอังกฤษก่อนจอง",
      },
      {
        q: "ใช้เวลานานแค่ไหนถึงเห็นผล?",
        a: "GBP views มักเห็นใน 30–60 วัน organic traffic จาก local landing มักใช้ 3–5 เดือน ขึ้นกับการแข่งขัน",
      },
    ],
  },
  kata: {
    answerBlock:
      "Local SEO กะตะ คือการ optimize ให้ธุรกิจในโซนหาดกะตะ กะตะน้อย และถนนกะตะโผล่ Google Maps และ Search เมื่อลูกค้าค้นหา spa kata, restaurant kata หรือ hotel kata beach PhuketSEO แพ็ก Lite ฿5,900/เดือน",
    intro: [
      "Local SEO กะตะจาก PhuketSEO เน้นธุรกิจในโซนหาดกะตะ กะตะน้อย และถนนกะตะ — ย่านที่ผสม family tourist, สปา และร้านอาหารริมหาด ลูกค้าค้นหา spa kata phuket, thai massage kata หรือ restaurant kata beach บน Google ก่อนจอง",
      "เราช่วย optimize Google Business Profile สร้าง landing ตาม keyword gap ในโซนกะตะ และเชื่อมกับ industry pages สำหรับสปาและร้านอาหาร",
    ],
    faqs: [
      {
        q: "SEO กะตะต่างจากป่าตองอย่างไร?",
        a: "กะตะเน้น family beach, spa และ boutique hotel keyword มากกว่า nightlife ของป่าตอง buyer intent และคู่แข่งในโซนต่างกัน ต้อง optimize แยก",
      },
      {
        q: "ธุรกิจประเภทไหนในกะตะควรทำ Local SEO?",
        a: "สปา ร้านอาหาร โรงแรม boutique รีสอร์ท และทัวร์ดำน้ำ — ธุรกิจที่ลูกค้าค้นหา near kata beach หรือ spa kata ก่อนตัดสินใจ",
      },
      {
        q: "Local SEO กะตะ ใช้เวลานานแค่ไหน?",
        a: "GBP impressions มักเห็นใน 30–60 วัน การติด Maps 3-Pack ขึ้นกับรีวิวและคู่แข่ง โดยทั่วไป 2–4 เดือน",
      },
      {
        q: "PhuketSEO ช่วย Local SEO กะตะอย่างไร?",
        a: "Audit โซนกะตะ optimize GBP สร้าง landing ตาม keyword gap และรายงาน Maps impressions, calls รายเดือน",
      },
    ],
  },
  kamala: {
    answerBlock:
      "Local SEO กมลา คือการทำให้ธุรกิจในโซนหาดกมลา กมลา village และ luxury zone โผล่ Google เมื่อลูกค้าค้นหา condo kamala, resort kamala หรือ restaurant kamala beach PhuketSEO แพ็ก Pro ฿8,900 สำหรับธุรกิจที่ต้องการเว็บ + AEO",
    intro: [
      "Local SEO กมลาจาก PhuketSEO ครอบคลุมโซนหาดกมลา กมลา village และ luxury residential — ลูกค้าเป้าหมายรวม condo buyer, resort guest และ fine dining เราช่วย optimize GBP, zone landing และ SEO อสังหาริมทรัพย์ในโซน",
      "keyword ภาษาอังกฤษและรัสเซียสำคัญในโซนกมลา — เราวาง content EN/RU ตาม buyer mix พร้อม NAP consistency ทุกช่องทาง",
    ],
    faqs: [
      {
        q: "Local SEO กมลาเหมาะกับธุรกิจแบบไหน?",
        a: "อสังหาริมทรัพย์ รีสอร์ท luxury ร้านอาหาร fine dining และ spa premium ในโซนกมลา",
      },
      {
        q: "ทำไม keyword EN/RU สำคัญในกมลา?",
        a: "buyer ต่างชาติและ investor ค้นหา condo kamala phuket, villa kamala เป็นภาษาอังกฤษ บาง segment ใช้รัสเซีย — content ต้องครอบคลุม",
      },
      {
        q: "Local SEO กมลาต่างจากถลางอย่างไร?",
        a: "กมลาเน้น luxury beachfront และ condo/resort keyword ถลางครอบคลุม airport hotel และ mai khao กว้างกว่า แต่ทั้งสองโซนแข่ง keyword EN",
      },
      {
        q: "PhuketSEO รายงานผล Local SEO กมลาอย่างไร?",
        a: "รายงาน Maps impressions, direction requests, phone calls และ keyword rankings ในโซนกมลารายเดือน",
      },
    ],
  },
};
