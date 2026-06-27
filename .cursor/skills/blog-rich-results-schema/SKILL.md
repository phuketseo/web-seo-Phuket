---
name: blog-rich-results-schema
description: >-
  Implement and verify Google Rich Results structured data for PhuketSEO blog
  posts. Use when adding or auditing blog articles, JSON-LD schema, Rich Results
  Test, Article/Breadcrumb/Organization/ItemList markup, or fixing schema warnings.
---

# Blog Rich Results Schema (PhuketSEO)

เป้าหมาย: ทุกหน้า `/blog/[slug]` ผ่าน **Google Rich Results Test** ด้วย **5 รายการที่ถูกต้อง** (ไม่มี warning):

1. บทความ (`Article`)
2. การแสดงเส้นทาง (`BreadcrumbList`)
3. ภาพหมุน (`ItemList` — บทความที่เกี่ยวข้อง)
4. ธุรกิจท้องถิ่น (Google อนุมานจาก `Organization` ที่มี address + openingHours)
5. องค์การ (`Organization`)

อ้างอิงที่ผ่านแล้ว: `https://phuketseo.com/blog/seo-sme-phuket`

## ไฟล์หลัก (อย่าแก้ซ้ำต่อบทความ)

| ไฟล์ | หน้าที่ |
|------|---------|
| `src/lib/schema.ts` | helpers: `buildArticleSchema`, `buildBreadcrumb`, `buildRelatedArticlesItemList`, `organizationSchema`, `toSchemaDateTime`, `plainTextForSchema` |
| `src/app/blog/[slug]/page.tsx` | ประกอบ JSON-LD ทุกบทความ + Open Graph `publishedTime` |

**อย่า** copy schema ไปใส่ทีละบทความ — ใช้ template ร่วมใน `[slug]/page.tsx` เท่านั้น

## Schema ที่ต้องมีต่อหน้า

```tsx
// ลำดับ script tags ใน page.tsx
organizationSchema          // Organization + Local Business signals
breadcrumbSchema            // หน้าแรก → บล็อก → ชื่อบทความ
articleSchema               // buildArticleSchema(...)
relatedArticlesSchema       // buildRelatedArticlesItemList(...) — ถ้ามี related posts
faqSchema                   // ถ้า post.faqs?.length — ไม่นับใน Rich Results แต่ควรมี
```

## กฎสำคัญ (จากการแก้ warning จริง)

### Article

- `datePublished` / `dateModified` ต้องผ่าน `toSchemaDateTime()` → `YYYY-MM-DDT00:00:00+07:00`
- **ห้าม** ใช้แค่ `2026-06-17` (Google เตือน: DateTime ไม่ถูกต้อง / ไม่มี timezone)
- `image` ต้องเป็น `ImageObject` พร้อม `width` + `height` จาก `getBlogThumbnail(slug)`
- `publisher` ต้องมี `@type`, `@id`, `name`, `logo` (ImageObject) — **ห้าม** ใส่แค่ `{ "@id": "..." }`

### Organization

- `logo` เป็น `publisherLogoSchema` (ImageObject ชี้ `ogImagePath` ที่ crawl ได้)
- มี `openingHoursSpecification` (ช่วย clear Local Business warning)
- มี `image`, `address`, `telephone`

### FAQ

- คำตอบต้องผ่าน `plainTextForSchema()` (ตัด markdown link/bold)
- FAQ ต้องมีในเนื้อหาหน้าจริงด้วย (ห้าม schema หลอก)
- Google มัก**ไม่แสดง** FAQ ใน Rich Results Test สำหรับเว็บเชิงพาณิชย์ — ปกติ

### Open Graph

ใน `generateMetadata` ต้องมี:
```ts
publishedTime: post.dateISO,
modifiedTime: post.dateISO,
```

## Checklist ต่อบทความใหม่ / บทความที่เหลือ

เมื่อเพิ่มหรือ audit บทความใน `blog-posts-*.ts` หรือ `page.tsx`:

```
- [ ] มี `dateISO` (YYYY-MM-DD) ใน post data
- [ ] มี `author` หรือใช้ defaultAuthor
- [ ] มี `category` สำหรับ articleSection
- [ ] thumbnail ลงทะเบียนใน `src/lib/images.ts` (getBlogThumbnail)
- [ ] ถ้ามี FAQ: ใส่ `faqs: [{ q, a }]` และมี section "คำถามที่พบบ่อย" ใน content
- [ ] related posts ตั้งใน `src/lib/blog-related-posts.ts` (อย่างน้อย 1 รายการ → ItemList)
- [ ] deploy แล้วทดสอบ Rich Results Test
```

## การทดสอบหลัง deploy

1. เปิด [Google Rich Results Test](https://search.google.com/test/rich-results)
2. ใส่ URL: `https://phuketseo.com/blog/{slug}`
3. ต้องได้ **5 รายการที่ถูกต้อง** ไม่มีจุดส้ม
4. ถ้า Article เตือนเรื่องวันที่ → ตรวจว่าใช้ `toSchemaDateTime` แล้ว
5. ถ้า Organization/Local Business เตือน → ตรวจ `logo` ImageObject + `openingHoursSpecification`

## สิ่งที่ไม่ต้องทำ

- ไม่ต้องไล่เพิ่ม schema แยกในแต่ละไฟล์บทความ
- ไม่ต้องเพิ่ม `LocalBusiness` แยกในหน้า blog (Organization ครอบคลุมแล้ว)
- ไม่ต้องกังวลถ้า FAQ ไม่โผล่ใน Rich Results Test (จำกัดโดย Google)
- ไม่ใช้ `logoPath` ที่ยัง 404 บน production — ใช้ `ogImagePath` ผ่าน `publisherLogoSchema`

## Commits อ้างอิง

- `d3c4e7f` — Article + Breadcrumb + Organization + ItemList
- `0b527bd` — แก้ publisher logo, image dimensions, openingHours
- `0ef7920` — ISO 8601 timezone สำหรับ datePublished/dateModified
