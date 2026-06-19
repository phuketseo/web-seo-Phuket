/** Blog post #31 — Google Search Console after GBP */
export const blogPostsBatch31 = {
  "google-search-console-phuket": {
    title: "Google Search Console ภูเก็ต — วัดผล Local SEO หลังตั้ง GBP แล้ว",
    description:
      "Google Search Console ภูเก็ต ใช้อย่างไรวัดผล Local SEO หลังตั้ง Google Business Profile — ดู indexing, query และสัญญาณที่ควรติดตามจริง",
    category: "Local SEO",
    date: "19 มิถุนายน 2569",
    dateISO: "2026-06-19",
    readingTime: "7 นาที",
    layout: "vercel" as const,
    author: { name: "ทีม PhuketSEO", role: "SEO Consultant · ภูเก็ต" },
    tldrTitle: "Google Search Console ภูเก็ต",
    tldr: [
      "ตั้ง GBP แล้วแต่ไม่รู้ว่าโตจริงไหม — GSC ช่วยดู query, click และ indexing",
      "ปัญหาหลัก: ไม่เคย verify · ไม่ submit sitemap · ดูแค่ impression ใน GBP",
      "ทิศทางแก้: verify domain → sitemap → ดู Performance + Pages + Indexing",
      "GBP Insights กับ GSC ต่างกัน — ใช้คู่กัน ไม่ใช่แทนกัน",
    ],
    keywords: [
      "Google Search Console ภูเก็ต",
      "GSC ภูเก็ต",
      "วัดผล Local SEO",
      "Google Business Profile วัดผล",
      "search console local SEO phuket",
    ],
    relatedServices: [
      { name: "Google Business Profile", href: "/blog/google-my-business-phuket" },
      { name: "Local SEO ภูเก็ต", href: "/blog/local-seo-phuket-kue-arai" },
      { name: "SEO Audit ภูเก็ต", href: "/seo-audit" },
      { name: "บริการ SEO ภูเก็ต", href: "/services/seo-phuket" },
    ],
    faqs: [
      {
        q: "Google Search Console กับ Google Business Profile ต่างกันอย่างไร?",
        a: "GBP คือ listing บน Maps — ดู impression, โทร, เส้นทาง และรีวิว GSC คือเครื่องมือดูเว็บไซต์บน Google Search — query, click, indexing และ sitemap ทั้งสองใช้คู่กัน ไม่ใช่ตัวเดียวกัน",
      },
      {
        q: "ธุรกิจที่ยังไม่มีเว็บ ต้องใช้ GSC ไหม?",
        a: "GBP ยังวัดผลได้จาก Insights ใน Google Business Profile แต่เมื่อมีเว็บ GSC จำเป็นสำหรับดูว่า Google index หน้าไหน คน search คำอะไรแล้วคลิกเข้าเว็บ ธุรกิจที่มีเว็บควร verify GSC ควบคู่ GBP",
      },
      {
        q: "ควรดูตัวเลขอะไรใน GSC สำหรับ Local SEO?",
        a: "โดยทั่วไปดู Performance (query + click + CTR), Pages ที่ได้ impression, สถานะ Indexing และ sitemap ว่า Google crawl ได้หรือไม่ ไม่มีตัวเลขเดียวที่ใช้ได้กับทุกธุรกิจ — ต้องดู trend ร่วมกับ GBP",
      },
      {
        q: "Domain property กับ URL prefix ต่างกันอย่างไร?",
        a: "Domain property ครอบทั้ง phuketseo.com รวม www และ subdomain — เหมาะเมื่อเป็นเจ้าของโดเมน URL prefix ครอบเฉพาะ URL ที่ระบุ สำหรับธุรกิจที่มีเว็บของตัวเอง Domain property มักจัดการง่ายกว่าในระยะยาว",
      },
      {
        q: "ใช้เวลานานแค่ไหนถึงเห็นข้อมูลใน GSC?",
        a: "หลัง verify ข้อมูล Performance มักมี delay 2–3 วัน Indexing และ sitemap อาจเห็นเร็วกว่า สำหรับโดเมนใหม่ index น้อยในช่วงแรกเป็นเรื่องปกติ — ต้องดู trend หลายสัปดาห์ ไม่ใช่ตัดสินจากวันเดียว",
      },
    ],
    content: `
## สรุปสั้นๆ

**Google Search Console ภูเก็ต** คือขั้นต่อจาก [Google Business Profile](/blog/google-my-business-phuket) — เมื่อตั้ง listing แล้ว แต่ยัง **ไม่รู้ว่า Local SEO โตจริงไหม** GSC ช่วยดูว่า Google index หน้าไหน คนค้นหาคำอะไร และคลิกเข้าเว็บหรือไม่

:::quote
ตั้ง GBP แล้วแต่ไม่เคยเปิด GSC = รู้แค่ impression บน Maps ไม่รู้ว่าเว็บและ organic search โตหรือเปล่า
— ทีม PhuketSEO, SEO Consultant · ภูเก็ต
:::

---

## ปัญหาที่ธุรกิจในภูเก็ตมักเจอ

### ตั้ง GBP แล้ว แต่ไม่รู้ว่าผลเป็นอย่างไร

หลายธุรกิจ verify listing ครบ โพสต์รูป ขอรีวิว — แต่ **ไม่มี dashboard รวม** ว่า Google มองเว็บและ search อย่างไร รู้แค่ "มีคนเห็นบน Maps" โดยไม่รู้ query หรือหน้าไหนถูก index

### ดูแค่ GBP Insights อย่างเดียว

Insights ใน Google Business Profile ดีสำหรับ **Maps** — โทร เส้นทาง คลิกเว็บจาก listing แต่ **ไม่บอก** ว่าหน้า blog, บริการ หรือ local landing ติด index หรือคนค้นหา organic คำอะไร

### ไม่เคย verify Search Console

เว็บมีอยู่ แต่ **ไม่เคย claim ใน GSC** — Google อาจ crawl อยู่แล้ว แต่เจ้าของไม่เห็น error, หน้า not indexed หรือ sitemap ที่ส่งไม่สำเร็จ

### Submit sitemap แล้ว แต่ไม่เคยเช็ค Indexing

ส่ง \`/sitemap.xml\` ครั้งเดียวแล้วลืม — หน้าใหม่ blog หรือ [Local SEO โซน](/local/patong) **ไม่ถูก index** โดยไม่รู้ตัว

---

## Google Search Console คืออะไร — ทำไมต้องใช้หลัง GBP

**Google Search Console (GSC)** คือเครื่องมือฟรีจาก Google สำหรับ **เจ้าของเว็บ** ดูว่า Google Search มองเว็บคุณอย่างไร

| หัวข้อ | Google Business Profile | Google Search Console |
|--------|-------------------------|------------------------|
| โฟกัส | Listing บน Maps | เว็บไซต์บน Google Search |
| ดูได้ | Impression Maps, โทร, รีวิว | Query, click, indexing, sitemap |
| เหมาะกับ | ทุกธุรกิจ local | ธุรกิจที่มีเว็บ (หรือกำลังทำ) |

ลำดับที่ PhuketSEO แนะนำใน [Phuket Visibility Stack](/methodology/phuket-visibility-stack):

**1.** [Quick Win แรก — ตั้ง GBP](/blog/google-my-business-phuket)

**2.** Verify GSC + submit sitemap — **รู้ว่า Google index อะไร**

**3.** ดู query + ปรับ content / local pages ตามข้อมูลจริง

:::image gscGbpCompare
Google Business Profile กับ Search Console วัดคนละช่องทาง — Maps กับ organic search ใช้คู่กัน
:::

---

## สิ่งที่ควรดูใน GSC สำหรับ Local SEO ภูเก็ต

### 1. Performance — คนค้นหาอะไรแล้วคลิก

ดู **Queries** ที่มี impression และ click — เช่น "seo ภูเก็ต", "ร้านอาหาร ป่าตอง" หรือชื่อธุรกิจ + โซน

- Impression สูงแต่ click ต่ำ → อาจต้องปรับ title/description
- Query ที่ไม่เกี่ยว → อาจต้องปรับ content ให้ตรง intent
- Query โซน (patong, kata, phuket town) → บอกว่า [local page](/local/kamala) ควรโฟกัสอะไร

### 2. Pages — หน้าไหนถูกเห็นบน Search

ดูว่าหน้าแรก, บริการ, blog หรือ local landing **ได้ impression หรือไม่** หน้าใหม่ที่ publish แล้วไม่โผล่ในรายงานนานๆ อาจยังไม่ index

### 3. Indexing — หน้าไหนถูก index / ไม่ถูก index

สำหรับโดเมนใหม่ **index น้อยในช่วงแรกเป็นเรื่องปกติ** — ไม่ใช่ penalty ทันที แต่ถ้า "Not indexed" สะสม ต้องดูสาเหตุ: noindex, canonical ผิด, เนื้อหาบาง หรือ internal link น้อย

### 4. Sitemaps — ส่งแล้ว Google รับหรือยัง

Submit \`https://yourdomain.com/sitemap.xml\` แล้วเช็คว่า **Success** หรือมี error URL ที่ส่งใน sitemap แต่ไม่ index ควรไล่ทีละหน้า (Request indexing ได้จำกัด — ไม่ควร spam)

---

## GBP Insights vs GSC — ใช้คู่กันอย่างไร

**หลังตั้ง GBP แล้ว** แนะนำดูอย่างน้อย:

| สัปดาห์ | GBP | GSC |
|---------|-----|-----|
| การมองเห็น Maps | Impression, discovery search | — |
| การกระทำ | โทร, เส้นทาง, คลิกเว็บจาก listing | Click จาก organic search |
| เนื้อหา | โพสต์ GBP, Q&A, รีวิว | Query ใหม่, หน้า index เพิ่ม |
| Trust | [Google Reviews](/blog/google-reviews-phuket) | หน้า about/contact index ครบ |

**อย่าเทียบตัวเลข GBP กับ GSC โดยตรง** — คนละช่องทาง แต่ trend โดยรวมควร **สอดคล้อง** เมื่อ Local SEO ไปในทิศทางถูก

---

## ขั้นตอนเริ่มต้น (หลังมีเว็บ + ตั้ง GBP แล้ว)

**1. Verify โดเมนใน GSC** — Domain property ครอบทั้ง www และ non-www

**2. Submit sitemap** — ตรวจว่า \`/sitemap.xml\` return 200 และมี URL สำคัญครบ

**3. ตรวจ Indexing รายสัปดาห์** — หน้าใหม่ index หรือยัง มี error หรือไม่

**4. ดู Performance ราย 28 วัน** — query ไหนโต query ไหนควรเขียน content เพิ่ม

**5. เชื่อมกับ [NAP ที่ตรงกัน](/blog/nap-local-seo-phuket)** — ชื่อ ที่อยู่ เบอร์บนเว็บ ตรง GBP และ schema

---

## สิ่งที่ GSC **ไม่** บอก (อย่าเข้าใจผิด)

- **อันดับ keyword แน่นอนทุกวัน** — GSC เป็น aggregate ไม่ใช่ rank tracker รายวัน
- **ยอดขายหรือ booking** — ต้องดู GA4 หรือ CRM แยก
- **Performance บน Maps โดยตรง** — ใช้ GBP Insights
- **ผลลัพธ์ภายใน 24 ชม.** — โดยเฉพาะโดเมนใหม่ ต้องดูหลายสัปดาห์

เราไม่แนะนำให้ **ตีความตัวเลขวันเดียวเกินไป** — ดู trend และ action ที่ทำได้จริง

---

## ทำเองได้ — แต่ทำไมหลายธุรกิจถึงปรึกษาผู้เชี่ยวชาญ

Verify GSC และ submit sitemap ทำเองได้ แต่มักติดที่:

- **ไม่รู้ว่า query ไหนควรเขียน content ต่อ** — มี impression 100+ แต่ไม่รู้จะทำ landing ไหน
- **Indexing ติด error ซ้ำๆ** — canonical, redirect, หรือ duplicate ที่ไม่ชัด
- **ไม่มีเวลารายงาน KPI รายเดือน** — ทีมเล็ก focus งานร้าน ไม่ใช่ dashboard

PhuketSEO รายงาน KPI รายเดือนในแพ็ก Pro — รวม **GBP + organic trend** ไม่ใช่แค่บอกให้เปิด GSC เอง

[ปรึกษาฟรี 30 นาที](/contact) — วิเคราะห์ว่าหลังตั้ง GBP แล้ว ควรดู GSC ตรงไหนก่อน

---

## สรุป

**Google Search Console ภูเก็ต** คือ Quick Win ที่ 2 หลัง [Google Business Profile](/blog/google-my-business-phuket) — ให้รู้ว่า **เว็บและ organic search โตจริงหรือเปล่า** ไม่ใช่เดาจาก Maps อย่างเดียว

Verify domain → sitemap → Performance + Indexing รายสัปดาห์ คู่กับ GBP Insights แล้วค่อยปรับ content และ local pages ตามข้อมูล

[Local SEO ภูเก็ต](/blog/local-seo-phuket-kue-arai) · [Google Reviews ภูเก็ต](/blog/google-reviews-phuket) · [SEO Audit](/seo-audit)
    `,
  },
};
