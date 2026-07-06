---
name: blog-article-writing
description: >-
  Write PhuketSEO blog posts in Google AI Overview answer-style Thai with 4K
  Smooth Purple infographics. Use when creating or rewriting blog articles,
  local SEO zone posts, content plan days, or when the user asks for article
  tone like Google AI / 99ads.
---

# Blog Article Writing (PhuketSEO)

เขียนบทความ `/blog/[slug]` แบบ **ตอบคำถามชัด (Google AI Overview)** + **ภาษาไทยอ่านง่าย** + **โทนที่ปรึกษา** (ไม่สอน DIY ยาว)

## Workflow บังคับ — ห้ามลงเว็บก่อนอนุมัติ

**ทุกบทความใหม่ / rewrite** ต้องทำตาม `.cursor/rules/aio-article-rigger.mdc` ก่อนเสมอ:

| ขั้น | ทำอะไร | แก้ repo? |
|------|--------|----------|
| 1 | ส่ง outline + core snippets + FAQ draft + metadata วางแผน | **ไม่** |
| 2 | ผู้ใช้เช็คกับ Gemini แล้วอนุมัติ | — |
| 3 | implement ลง `blog-posts*.ts`, รูป, schema | **ใช่** |

ห้ามข้ามขั้น 1 แม้ผู้ใช้จะบอกหัวข้อสั้นๆ — ถ้ายังไม่อนุมัติ ให้ตอบเป็นโครงร่างในแชทเท่านั้น

อ่านร่วมกับ:
- `.cursorrules` — กฎหลัก SEO/AEO/GEO content editor (โทน โครงสร้าง FAQ สิ่งที่ห้าม)
- `.cursor/rules/aio-article-rigger.mdc` — workflow โครงร่างก่อนลงเว็บ (บังคับ)
- `.cursor/skills/blog-rich-results-schema/SKILL.md` — schema / Rich Results

อ้างอิงบทความที่ผ่านแล้ว:
- **`local-seo-phuket`** — มาตรฐาน AEO/GEO (นิยามหนึ่งประโยค, checklist, ตารางเปรียบเทียบ, CTA ท้ายบทเท่านั้น)
- **`local-seo-kathu-phuket`** — มาตรฐานหัวข้อ + สำนวน Semrush-style
- `local-seo-thalang-phuket`, `local-seo-kamala-phuket`

---

## โทนและภาษา (มาตรฐาน `local-seo-kathu-phuket`)

แบบอย่าง: `/blog/local-seo-kathu-phuket` — อ่านง่ายเหมือนคู่มือ Semrush แต่เป็นภาษาไทย + โซนภูเก็ต

### หัวข้อ (H2) ที่ใช้

เรียงตามลำดับนี้เมื่อเขียน Local SEO / คู่มือทั่วไป:

1. **`[หัวข้อ] คืออะไร`** — ย่อหน้าเดียวตอบครบ (Maps + Search + โซน + GBP)
2. **`ทำไม [หัวข้อ] สำคัญ`** — อธิบายว่าลูกค้าค้นหาก่อนตัดสินใจ ไม่โผล่ = เสียลูกค้า
3. **`Google จัดอันดับธุรกิจท้องถิ่นอย่างไร`** — ตาราง 3 แถว ภาษาง่าย (ตรงคำค้น / อยู่ใกล้ / น่าเชื่อถือ) **ห้าม** ใช้ Relevance, Distance, Prominence
4. **`ทำอย่างไรให้ธุรกิจใน[โซน]โผล่ Google Maps`** — ขั้น **1. 2. 3. 4.** ชื่อขั้นชัด ประโยคสั้น
5. **`ทำไม[โซน]ต้องทำแยกจาก[โซนอื่น]`** — bullet เปรียบเทียบ 2–3 โซน
6. **`ลูกค้าค้นหาคำว่าอะไรในโซน[ชื่อ]`** — แยก `###` ตามประเภทธุรกิจ + bullet คำค้น
7. **`ข้อมูลเชิงลึก — สิ่งที่ธุรกิจ[โซน]มักพลาด`** — bullet 3–4 ข้อ
8. **`สรุป`** — 1 ประโยค + ลิงก์ local page / บริการ

### สำนวนที่ใช้

- ประโยคสั้น ตรงประเด็น — **ไม่ฟุ่มเฟือย ไม่ agency-speak**
- แทนศัพท์เทคนิค: “รายการบนแผนที่” แทน Local Pack · “ตรงกับคำค้น” แทน relevance/intent
- อธิบายเหตุผลก่อนวิธีทำ — อ่านแล้วเข้าใจ *ทำไม* ก่อน *ทำอย่างไร*
- รูป inline ต้อง **ตรงหัวข้อทันที** (Maps หลังอธิบายการจัดอันดับ · เปรียบเทียบโซนหลัง “ทำไมแยก” · คำค้นหลัง “ลูกค้าค้นหาอะไร”)
- `tldrTitle`: **"คำตอบสั้นๆ"**

### ทำ (Google AI + คนไทยอ่านง่าย)

- เปิดด้วย **“[หัวข้อ] คืออะไร”** — ย่อหน้าเดียวตอบให้ครบ
- ใช้หัวข้อ **“ทำอย่างไรให้…”** แล้วตามด้วย **1. 2. 3. 4.** แต่ละข้อมีชื่อหัวข้อชัด
- ใส่ section **“ข้อมูลเชิงลึก — สิ่งที่มักพลาด”** (bullet 3–4 ข้อ)
- ใช้ **ชื่อสถานที่จริง** ที่คนไทยรู้จัก (หาดไม้ขาว, หาดในทอน, ป่าตอง) — ไม่ใช้คำกว้างอย่าง “หาดเหนือ” “ชายหาดกลาง”
- ตัวอย่างคำค้นเป็น bullet แยกประเภทธุรกิจ
- `tldrTitle`: **"คำตอบสั้นๆ"** (ไม่ใช่ "สรุปสั้นๆ")
- อ้างอิงแนวอ่านง่ายจาก [99 Ads knowledge articles](https://99adsagency.com/knowledge/) — หัวข้อตรง ประโยคสั้น ไม่ฟุ่มเฟือย

### AEO / GEO — รูปแบบที่ AI ดึงง่าย (บังคับทุกบทความ)

มาตรฐานจาก `/blog/local-seo-phuket` — เพิ่มโอกาสถูก AI Overview / ChatGPT / Gemini หยิบไปตอบ **โดยไม่การันตีอันดับ**

1. **นิยามหนึ่งประโยค (quote-ready)** — ประโยคแรกของ H2 “[หัวข้อ] คืออะไร” ต้องเป็นนิยามเดี่ยว **ไม่เกิน ~35 คำ** รูปแบบ: `**[หัวข้อ] คือ…**` แล้วค่อยขยายตัวอย่างโซน
2. **Fact เป็นข้อๆ** — เมื่ออธิบาย “ทำงานโดย / ช่วยให้ได้” ใช้ **1. 2. 3.** หรือ bullet สั้นๆ แทนย่อหน้ายาวหลายความหมาย
3. **ตารางใน section “ต่างจาก X”** — เปรียบเทียบหัวข้อหลักกับสิ่งที่คนสับสน (เช่น Local SEO vs SEO เว็บ vs Ads) เป็น markdown table
4. **Checklist สั้น** — section เช็กเร็ว 4–6 ข้อ (หรือลิงก์ไปบทความ checklist ที่เกี่ยวข้อง) ไม่ใช่คู่มือ DIY ทั้งก้อน
5. **CTA เฉพาะท้ายบท (สรุป)** — โทนปรึกษาฟรี ไม่มีค่าใช้จ่าย เช่น `สอบถามหรือปรึกษาเราเพิ่มเติม — [ขอคำปรึกษาฟรี ไม่มีค่าใช้จ่าย](/contact)`  
   - **ห้าม** ใส่ CTA กลางบทในเนื้อหา  
   - **ห้าม** เปิด `midCtaAfterSection` ใน layout (CTA กล่องท้ายบทจาก layout ได้)

**ไม่บังคับ / ห้ามทำเพื่อ “คะแนน AI”:**

- Answer box ซ้ำทุก H2 (รกและยัด)
- AI Summary ซ้ำกับ “คำตอบสั้นๆ”
- ลบราคาหรือ CTA ท้ายบท

### หลีกเลี่ยง (สำนวน AI / agency)

- ศัพท์เทคนิคไม่จำเป็น: intent, micro-zone, Local Pack, buyer mix, commercial intent, transit (ใช้ภาษาไทยแทน)
- ประโยค meta เกี่ยวกับรูป (“รูป hero ด้านบนสรุป…”)
- checklist DIY ยาว, keyword list 20 คำ, timeline รายสัปดาห์
- ราคา/แพ็กใน industry guide (ยกเว้นบทความราคาโดยตรง)
- copy กลยุทธ์จากโซนอื่นโดยไม่อธิบายว่าต่างยังไง

### ปิดท้ายทุกบทความ

- ยอมรับว่า **แต่ละธุรกิจ/โซนต่างกัน — ควรวิเคราะห์ก่อน**
- section **`## สรุป`** — 1–2 ประโยคสรุป + **CTA เดียว** `[ขอคำปรึกษาฟรี ไม่มีค่าใช้จ่าย](/contact)` (+ `/seo-audit` ได้ถ้าเกี่ยวข้อง)
- ลิงก์อ่านเพิ่ม / หน้าบริการที่เกี่ยวข้อง

---

## โครงสร้างเนื้อหา (template — ตาม `local-seo-kathu-phuket`)

```markdown
## [หัวข้อ] คืออะไร

**[หัวข้อ] คือ…** (หนึ่งประโยค ≤35 คำ — quote-ready)

[ขยาย — Maps + Search + โซนภูเก็ต + GBP เป็นหัวใจ]

**[หัวข้อ] ทำงานโดย:**

1. …
2. …
3. …

:::image [heroKey]
[caption สั้น ภาษาไทย ตรงโซน/ธุรกิจ]
:::

---

## Checklist [หัวข้อ] (เช็กเร็ว)

1. …
2. …
3. …
4. …

(หรือลิงก์ไปบทความ checklist ที่เกี่ยวข้อง)

---

## ทำไม [หัวข้อ] สำคัญ
[2–3 ประโยค — ลูกค้าค้นหาก่อนตัดสินใจ ไม่โผล่ = ไปคู่แข่ง]

[หัวข้อ] ช่วยให้ธุรกิจได้รับ:

- …
- …

---

## Google จัดอันดับธุรกิจท้องถิ่นอย่างไร

| สิ่งที่ Google ดู | ความหมายง่ายๆ |
|---|---|
| **ตรงกับที่ค้นหาไหม** | ... |
| **อยู่ใกล้ลูกค้าแค่ไหน** | ... |
| **น่าเชื่อถือแค่ไหน** | ... |

:::image [mapsKey]
[caption Maps / รายการบนแผนที่]
:::

---

## ทำอย่างไรให้ธุรกิจใน[โซน]โผล่ Google Maps

**1. ตั้งค่า Google Business Profile ให้ครบ**
[2–3 ประโยค + ลิงก์ /blog/google-my-business-phuket]

**2. อัปเดตรูปภาพและโพสต์เป็นประจำ**
[สั้นๆ]

**3. สะสมรีวิวและตอบทุกรายการ**
[สั้นๆ + ลิงก์ /blog/google-reviews-phuket]

**4. ใช้คำค้นที่ตรงกับโซน**
[ตัวอย่างคำไทย ไม่ยัด "phuket" ทั้งเกาะ]

:::image [inlineKey2]
:::

---

## ทำไม[โซน]ต้องทำแยกจาก[โซนอื่น]
[bullet ธุรกิจในโซน + เปรียบเทียบ 2–3 โซน]

:::image [inlineKey3]
:::

---

## ลูกค้าค้นหาคำว่าอะไรในโซน[ชื่อ]
[แยกหัวข้อย่อยตามประเภทธุรกิจ + bullet]

:::image [inlineKey4]
:::

---

## [หัวข้อ] ต่างจาก X อย่างไร

| | [หัวข้อ] | สิ่งที่คนสับสน |
|---|---|---|
| **โฟกัส** | … | … |
| **เหมาะกับ** | … | … |

---

## ข้อมูลเชิงลึก — สิ่งที่ธุรกิจ[โซน]มักพลาด

1. …
2. …
3. …

[ย่อหน้า: ไม่มีสูตรเดียว — ไม่ใส่ CTA ตรงนี้]

---

## สรุป

[1–2 ประโยคสรุป]

สอบถามหรือปรึกษาเราเพิ่มเติม — [ขอคำปรึกษาฟรี ไม่มีค่าใช้จ่าย](/contact)

อ่านเพิ่ม: [ลิงก์ที่เกี่ยวข้อง]
```

**FAQ:** อย่างน้อย 5 ข้อ — ข้อแรกมักเป็น “คืออะไร?” ตอบตรงด้วยนิยามเดียวกับประโยคเปิด H2

---

## รูปภาพ — Smooth Purple + Cursor GenerateImage (มาตรฐาน premium)

อ้างอิง: `.cursor/rules/image-layout-standard.mdc` · ตัวอย่าง: `/blog/andap-web-tok-ai-search`

**บทความ premium / ranking-recovery / industry guide** ใช้ pipeline นี้ — **ห้าม** SVG programmatic หรือ Gemini API เป็นค่าเริ่มต้น

| ขั้น | ทำอะไร |
|------|--------|
| 0 | Agent mode + โมเดลที่รองรับ `GenerateImage` (หลีกเลี่ยง Auto/Codex-only ถ้า tool ไม่ขึ้น) |
| 1 | `prompts.json` → `node scripts/promote-ran-nuad-smooth-purple-briefs.mjs` (หรือ `{cluster}-image-briefs.mjs`) |
| 2 | **Cursor `GenerateImage`** จาก `briefs.json` + reference `andap-web-tok-ai-search-hero-branded.png` หรือ hero ชุดเดียวกัน |
| 3 | copy → `assets/{slug}/*-src.png` |
| 4 | `node scripts/process-smooth-purple-images.mjs assets/{slug}` — ตรวจ 3:2 → brand bar → upscale 3840×2560 |
| 5 | bump `rev` ใน `images.ts` · `npm run check:images` |

- สัดส่วน: **3:2 landscape** — src เป้า **2304×1536** · publish **3840×2560**
- สไตล์: mesh `#f8fafc` · sidebar 25% + mockup 75% · 3D icons · แถบ PhuketSEO ล่าง (brand bar script)
- 1 slug = 1 ชุดรูปใหม่ — ห้าม reuse key/path ข้ามบทความ
- **Maps-cluster** (พื้นขาว) ใช้เฉพาะบท Google Maps cluster — ดู rule แยก

### Inline images ใน markdown

```
:::image kamalaMaps
คำอธิบายรูปสั้นๆ ภาษาไทย
:::
```

ลงทะเบียน key ใน `blogInlineImages` + `blogThumbnailBySlug` ใน `src/lib/images.ts`

---

## ไฟล์ที่ต้องอัปเดตต่อบทความ

1. `src/lib/blog-posts-batch-XX.ts` — เนื้อหา + faqs + relatedServices
2. `src/app/blog/[slug]/page.tsx` — import + spread batch
3. `src/lib/blog-posts-meta.ts` — meta ด้านบน array (บทใหม่สุดก่อน)
4. `src/lib/blog-related-posts.ts` — related อย่างน้อย 4 slugs
5. `src/lib/images.ts` — thumbnail + inline keys
6. `public/images/blog/` — รูป 4 ไฟล์

Post data ต้องมี: `dateISO`, `layout: "vercel"`, `author`, `tldr`, `faqs`, `keywords`

---

## Workflow กับผู้ใช้

1. เขียนบทความ + รูป 4 รูป
2. `npm run build` + `npm run check:images`
3. แจ้ง URL localhost — **รอ user อนุมัติก่อน push**
4. **อย่าปิด dev server ให้ user** — user จัดการเอง
5. Push เมื่อ user บอกชัด — commit เฉพาะไฟล์บทความ (ไม่รวมงานค้าง Navbar/Logo)
6. อัปเดตตารางความคืบหน้าแผน 10 บทความ (บอก X/10 เหลือกี่)

### แผน content (อ้างอิง)

| # | slug (แผน) |
|---|------------|
| 1 | `local-seo-thalang-phuket` ✅ |
| 2 | `local-seo-kathu-phuket` ✅ |
| 3 | `local-seo-bang-tao-phuket` ✅ |
| 4 | `local-seo-rawai-phuket` ✅ |
| 5 | `google-business-profile-setup-phuket` |
| 6 | `how-to-get-google-reviews-phuket` |
| 7 | `phuket-hotel-online-marketing` |
| 8 | `seo-car-rental-phuket` |
| 9 | `web-design-phuket` |
| 10 | `seo-villa-rental-phuket` |

---

## Checklist ก่อนส่ง user ดู

```
- [ ] หัวข้อใช้ชื่อโซน/ธุรกิจจริง ไม่มีศัพท์ AI
- [ ] มี section "คืออะไร" + "ทำอย่างไร" 1–4 + "ข้อมูลเชิงลึก"
- [ ] รูปใหม่ 4 รูป 3840×2560 metadata ตรง
- [ ] FAQ 5 ข้อ + มีในเนื้อหา
- [ ] related posts + local page link
- [ ] build + check:images ผ่าน
- [ ] ยังไม่ push จนกว่า user อนุมัติ
```
