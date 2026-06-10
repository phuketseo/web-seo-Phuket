# CURSOR_GUIDE.md — PhuketSEO Next.js Project

> คู่มือสำหรับ Cursor AI และนักพัฒนาเพื่อต่องานโปรเจ็ค PhuketSEO ต่อจากจุดที่หยุดไว้

---

## 1. ภาพรวมโปรเจ็ค

**PhuketSEO** คือเว็บไซต์ Digital Marketing Agency ในภูเก็ต สร้างด้วย:

| เทคโนโลยี | เวอร์ชัน | หมายเหตุ |
|---|---|---|
| Next.js | 15 (App Router) | SSR + SSG + ISR |
| Tailwind CSS | 4 | Utility-first CSS |
| TypeScript | 5 | Strict mode |
| Deployment | Vercel | Edge Network |

**โครงสร้างไฟล์หลัก:**

```
src/
├── app/
│   ├── layout.tsx          ← Root Layout + Metadata + Schema
│   ├── page.tsx            ← Homepage (11 Sections)
│   ├── sitemap.ts          ← Dynamic Sitemap
│   ├── robots.ts           ← Robots.txt
│   ├── opengraph-image.tsx ← OG Image Generator
│   ├── services/
│   │   ├── seo-phuket/page.tsx
│   │   ├── google-ads/page.tsx
│   │   ├── social-media/page.tsx
│   │   └── web-design/page.tsx
│   ├── local/
│   │   ├── patong/page.tsx
│   │   ├── kathu/page.tsx
│   │   ├── phuket-town/page.tsx
│   │   └── thalang/page.tsx
│   ├── blog/page.tsx
│   ├── contact/page.tsx
│   ├── about/page.tsx
│   ├── pricing/page.tsx
│   └── case-studies/page.tsx
├── components/
│   ├── Navbar.tsx          ← Sticky Navigation
│   ├── Footer.tsx          ← Footer with Links
│   └── LocalSeoPage.tsx    ← Reusable Local SEO Template
└── lib/
    ├── utils.ts            ← cn() helper
    └── schema.ts           ← Schema Markup helpers
```

---

## 2. การ Deploy บน Vercel

### ขั้นตอนการ Deploy ครั้งแรก:

```bash
# 1. ติดตั้ง dependencies
npm install

# 2. ทดสอบ local
npm run dev

# 3. Build ทดสอบ
npm run build

# 4. Deploy บน Vercel
npx vercel --prod
```

### Environment Variables ที่ต้องตั้งค่าบน Vercel:

```env
NEXT_PUBLIC_SITE_URL=https://phuketseo.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX          # Google Analytics 4
NEXT_PUBLIC_LINE_OA=@phuketseo          # LINE Official Account
RESEND_API_KEY=re_XXXXXXXXXX            # Email service (Resend.com)
CONTACT_EMAIL=info@phuketseo.com        # รับ Lead notifications
```

---

## 3. งานที่ต้องทำต่อ (Priority Order)

### 🔴 Priority 1 — ต้องทำก่อน Deploy

- [ ] **แก้ไขข้อมูลติดต่อ** ใน `src/components/Footer.tsx` และ `src/lib/schema.ts`
  - เบอร์โทรศัพท์จริง
  - ที่อยู่จริง
  - LINE OA จริง
  - Email จริง

- [ ] **เพิ่มรูปภาพจริง** ใน `public/` folder:
  - `public/logo.png` — Logo PhuketSEO (300x80px)
  - `public/og-image.png` — OG Image (1200x630px)
  - `public/team/` — รูปทีมงาน
  - `public/case-studies/` — รูป Case Studies

- [ ] **ตั้งค่า Domain** บน Vercel Dashboard → Settings → Domains → Add `phuketseo.com`

- [ ] **ตั้งค่า Google Analytics 4**:
  ```tsx
  // src/app/layout.tsx — เพิ่ม GA4 Script
  import { GoogleAnalytics } from '@next/third-parties/google'
  // ใน <body>:
  <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
  ```

### 🟡 Priority 2 — ทำหลัง Deploy

- [ ] **Contact Form Backend** — เชื่อมต่อ Form กับ Email service:
  ```bash
  npm install resend
  ```
  สร้าง `src/app/api/contact/route.ts`:
  ```ts
  import { Resend } from 'resend';
  const resend = new Resend(process.env.RESEND_API_KEY);
  
  export async function POST(req: Request) {
    const body = await req.json();
    await resend.emails.send({
      from: 'noreply@phuketseo.com',
      to: process.env.CONTACT_EMAIL!,
      subject: `Lead ใหม่: ${body.name} - ${body.business}`,
      html: `<p>ชื่อ: ${body.name}</p><p>Email: ${body.email}</p>...`,
    });
    return Response.json({ success: true });
  }
  ```

- [ ] **Blog CMS** — เชื่อมต่อ Contentful หรือ Sanity:
  ```bash
  npm install @contentful/rich-text-react-renderer contentful
  ```
  หรือใช้ MDX files ใน `src/content/blog/`

- [ ] **Google Search Console** — ยืนยัน Domain และ Submit Sitemap:
  - เพิ่ม `<meta name="google-site-verification" content="XXX" />` ใน `layout.tsx`
  - Submit `https://phuketseo.com/sitemap.xml`

- [ ] **LINE Live Chat Widget**:
  ```tsx
  // src/components/LineChat.tsx
  // เพิ่ม LINE Chat Plugin script
  ```

### 🟢 Priority 3 — ทำเพื่อ SEO ระยะยาว

- [ ] **Blog Posts จริง** — สร้างบทความตาม Content Calendar (ดูหัวข้อ 5)
- [ ] **Google Business Profile** — Optimize และเชื่อมต่อกับเว็บไซต์
- [ ] **Core Web Vitals** — ตรวจสอบและปรับปรุง LCP, FID, CLS
- [ ] **Exit-Intent Popup** — ใช้ `react-hot-toast` หรือ custom modal
- [ ] **A/B Testing** — ทดสอบ Hero Section variants ด้วย Vercel Edge Config

---

## 4. Technical SEO Checklist

### On-Page SEO (ตรวจสอบทุกหน้า):

```
✅ Title Tag: 50-60 ตัวอักษร มี Primary Keyword
✅ Meta Description: 150-160 ตัวอักษร มี CTA
✅ H1: 1 ต่อหน้า มี Primary Keyword
✅ H2-H6: โครงสร้างชัดเจน มี Secondary Keywords
✅ Alt Text: รูปภาพทุกรูปมี Alt Text ที่มี Keyword
✅ Internal Links: แต่ละหน้ามี Internal Links ไปหน้าอื่น 3-5 ลิงก์
✅ Canonical URL: ทุกหน้ามี canonical tag
✅ BreadcrumbList Schema: ทุกหน้าย่อยมี Breadcrumb
```

### Schema Markup (ใช้ helpers จาก `src/lib/schema.ts`):

```tsx
// Homepage — Organization + LocalBusiness + FAQ + Review
import { organizationSchema, localBusinessSchema, faqSchema } from "@/lib/schema";

// Service Pages — Service + BreadcrumbList
import { buildBreadcrumb } from "@/lib/schema";

// Blog Posts — Article + BreadcrumbList
// Contact Page — ContactPage + LocalBusiness
```

### Technical SEO:

```
✅ sitemap.xml: /sitemap.xml (Auto-generated)
✅ robots.txt: /robots.txt (Auto-generated)
✅ OG Image: /opengraph-image.tsx (Auto-generated)
✅ Canonical URLs: ทุกหน้า
✅ HTTPS: Vercel ให้ SSL อัตโนมัติ
✅ Mobile-First: Tailwind responsive classes
✅ Page Speed: Next.js Image Optimization + Font Optimization
⬜ Core Web Vitals: ตรวจสอบหลัง Deploy ด้วย PageSpeed Insights
⬜ Structured Data Testing: ใช้ Google Rich Results Test
```

---

## 5. Content Calendar (30 บทความแรก)

### เดือน 1 — Foundational Content (High Volume Keywords)

| # | หัวข้อบทความ | Primary Keyword | Search Intent |
|---|---|---|---|
| 1 | SEO ภูเก็ต คืออะไร ทำไมธุรกิจในภูเก็ตต้องทำ | SEO ภูเก็ต | Informational |
| 2 | วิธีทำ SEO สำหรับโรงแรมในภูเก็ต ให้ติดอันดับ Google | SEO โรงแรมภูเก็ต | Informational |
| 3 | Google Ads vs SEO อะไรดีกว่าสำหรับธุรกิจในภูเก็ต | Google Ads ภูเก็ต | Commercial |
| 4 | Local SEO ภูเก็ต คืออะไร ทำอย่างไรให้ติด Google Maps | Local SEO ภูเก็ต | Informational |
| 5 | รับทำเว็บไซต์ภูเก็ต ราคาเท่าไหร่ ต้องเลือกอะไร | รับทำเว็บไซต์ภูเก็ต | Commercial |

### เดือน 2 — Industry-Specific Content

| # | หัวข้อบทความ | Primary Keyword | Search Intent |
|---|---|---|---|
| 6 | SEO สำหรับร้านอาหารในภูเก็ต เพิ่ม Booking ได้อย่างไร | SEO ร้านอาหารภูเก็ต | Commercial |
| 7 | Digital Marketing สำหรับอสังหาริมทรัพย์ภูเก็ต | Digital Marketing อสังหาฯภูเก็ต | Commercial |
| 8 | วิธีทำ Google Business Profile สำหรับธุรกิจในภูเก็ต | Google Business ภูเก็ต | Informational |
| 9 | Social Media Marketing สำหรับ Spa ในภูเก็ต | Social Media Spa ภูเก็ต | Commercial |
| 10 | SEO สำหรับคลินิกในภูเก็ต เพิ่มผู้ป่วยใหม่ได้อย่างไร | SEO คลินิกภูเก็ต | Commercial |

### เดือน 3 — Local Area Content

| # | หัวข้อบทความ | Primary Keyword | Search Intent |
|---|---|---|---|
| 11 | SEO ป่าตอง ภูเก็ต ธุรกิจท่องเที่ยวติดอันดับอย่างไร | SEO ป่าตอง | Commercial |
| 12 | Digital Marketing สำหรับธุรกิจในย่านตัวเมืองภูเก็ต | Digital Marketing ตัวเมืองภูเก็ต | Commercial |
| 13 | SEO กะทู้ ภูเก็ต สนามกอล์ฟและรีสอร์ทติดอันดับ | SEO กะทู้ | Commercial |
| 14 | ธุรกิจในถลาง ภูเก็ต ทำ SEO อย่างไรให้ได้ผล | SEO ถลาง | Commercial |
| 15 | Keyword ภูเก็ต ที่ธุรกิจควรรู้ในปี 2025 | Keyword ภูเก็ต | Informational |

### เดือน 4-6 — Advanced & Long-tail Content

| # | หัวข้อบทความ | Primary Keyword | Search Intent |
|---|---|---|---|
| 16 | Core Web Vitals คืออะไร ทำไมสำคัญสำหรับ SEO | Core Web Vitals | Informational |
| 17 | Backlink Building สำหรับธุรกิจในภูเก็ต | Backlink ภูเก็ต | Informational |
| 18 | วิธีวัดผล SEO ให้ถูกต้อง ใช้ Google Analytics 4 | วัดผล SEO | Informational |
| 19 | Content Marketing สำหรับธุรกิจท่องเที่ยวภูเก็ต | Content Marketing ภูเก็ต | Commercial |
| 20 | ราคา SEO ภูเก็ต ควรจ่ายเท่าไหร่ถึงคุ้มค่า | ราคา SEO ภูเก็ต | Commercial |
| 21-30 | (ดำเนินการตาม Keyword Research จริง) | — | — |

---

## 6. Internal Linking Strategy

### Hub & Spoke Model:

```
Homepage (Hub)
├── /services/seo-phuket (Spoke)
│   ├── /local/patong
│   ├── /local/kathu
│   ├── /local/phuket-town
│   └── /local/thalang
├── /services/google-ads (Spoke)
├── /services/social-media (Spoke)
├── /services/web-design (Spoke)
├── /blog (Hub)
│   └── /blog/[slug] (Spoke)
├── /case-studies (Spoke)
├── /pricing (Spoke)
└── /contact (Spoke)
```

### กฎ Internal Linking:
1. ทุก Service Page ต้องลิงก์ไปที่ `/contact` และ `/pricing`
2. ทุก Local SEO Page ต้องลิงก์ไปที่ `/services/seo-phuket`
3. ทุก Blog Post ต้องลิงก์ไปที่ Service Page ที่เกี่ยวข้อง 2-3 ลิงก์
4. Homepage ต้องลิงก์ไปทุก Service Page และ Local SEO Page หลัก

---

## 7. Brand Guidelines

### สีหลัก:

```css
--color-primary: #1e3a8a;    /* Blue 950 — Headlines, Navbar, Footer */
--color-secondary: #1e40af;  /* Blue 800 — Buttons, Accents */
--color-accent: #f97316;     /* Orange 500 — CTA Buttons, Highlights */
--color-text: #111827;       /* Gray 900 — Body text */
--color-muted: #6b7280;      /* Gray 500 — Secondary text */
--color-bg: #ffffff;         /* White — Background */
--color-bg-alt: #f9fafb;     /* Gray 50 — Section backgrounds */
```

### Typography:

```css
font-family-heading: 'Playfair Display', serif;  /* H1-H3 */
font-family-body: 'Inter', sans-serif;           /* Body, UI */
```

### Tone of Voice:
- **มืออาชีพ** แต่ **เข้าถึงได้**
- เน้น **ผลลัพธ์ที่วัดได้** ไม่ใช่แค่คำสัญญา
- ใช้ตัวเลขจริง: "+250% Traffic", "ติดอันดับใน 3 เดือน"
- ภาษาไทยเป็นหลัก มีภาษาอังกฤษสำหรับ Technical Terms

---

## 8. Performance Optimization

### Next.js Best Practices ที่ใช้แล้ว:
- `next/image` — Image Optimization อัตโนมัติ
- `next/font` — Font Optimization (Playfair Display + Inter)
- `generateMetadata()` — Dynamic SEO Metadata
- App Router — Automatic Code Splitting
- Server Components — ลด JavaScript Bundle

### สิ่งที่ต้องทำเพิ่ม:
```tsx
// 1. เพิ่ม loading.tsx สำหรับ Suspense
// src/app/loading.tsx
export default function Loading() {
  return <div className="min-h-screen bg-gray-50 animate-pulse" />;
}

// 2. เพิ่ม error.tsx สำหรับ Error Boundary
// src/app/error.tsx
'use client';
export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <button onClick={reset}>ลองใหม่</button>
    </div>
  );
}

// 3. เพิ่ม not-found.tsx
// src/app/not-found.tsx
export default function NotFound() {
  return <div>ไม่พบหน้าที่คุณต้องการ</div>;
}
```

---

## 9. คำสั่ง Cursor AI ที่แนะนำ

เมื่อเปิดโปรเจ็คนี้ใน Cursor AI ให้ใช้ Prompts เหล่านี้:

```
"เพิ่ม Blog Post ใหม่เรื่อง [หัวข้อ] ตาม Content Calendar ใน CURSOR_GUIDE.md"

"สร้าง Contact Form API Route ที่ส่ง Email ด้วย Resend ตาม CURSOR_GUIDE.md Priority 2"

"เพิ่ม Google Analytics 4 ตาม CURSOR_GUIDE.md Priority 1"

"ปรับปรุง Core Web Vitals ของหน้า [หน้า] ให้ผ่าน PageSpeed Insights"

"สร้าง Blog Post หน้า [slug] พร้อม Schema Markup ตาม CURSOR_GUIDE.md"

"เพิ่ม Exit-Intent Popup ที่แสดงหลังจากผู้ใช้อยู่บนเว็บ 30 วินาที"
```

---

## 10. Deployment Checklist ก่อน Go-Live

```
□ ข้อมูลติดต่อจริงทั้งหมด (เบอร์, ที่อยู่, Email, LINE)
□ รูปภาพจริงทั้งหมด (Logo, Team, Case Studies)
□ Google Analytics 4 ติดตั้งแล้ว
□ Google Search Console ยืนยัน Domain แล้ว
□ Sitemap Submit แล้ว
□ Contact Form ส่ง Email ได้จริง
□ SSL Certificate (Vercel ให้อัตโนมัติ)
□ Domain ชี้มาที่ Vercel แล้ว
□ Schema Markup ผ่าน Google Rich Results Test
□ PageSpeed Score > 90 (Mobile + Desktop)
□ ทดสอบ Contact Form บน Mobile
□ ทดสอบ Navbar บน Mobile
□ ตรวจสอบ Broken Links ทั้งหมด
```

---

*อัปเดตล่าสุด: มิถุนายน 2026 | สร้างโดย Manus AI สำหรับ PhuketSEO*
