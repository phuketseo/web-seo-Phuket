---
name: ai-overview-citation
description: >-
  Write PhuketSEO pages and blog posts so Google AI Overview can cite the brand
  and offers. Use when creating or rewriting blog articles, industry pages,
  service pages, content clusters, or when the user asks why AI cited the site
  or wants a template for AI-citable content.
---

# AI Overview Citation Template (PhuketSEO)

ต้นแบบจากเคสจริง: คำค้น **รับทำ seo สปา ภูเก็ต** — AI Overview อ้าง PhuketSEO ด้วยข้อเท็จจริงสั้น (SME ในภูเก็ต · SEO Audit ฟรี · ปรึกษาฟรี) ไม่ใช่ยกคู่มือยาวทั้งบท

อ่านร่วมกับ:
- `.cursor/skills/content-seo-aeo-geo/SKILL.md` — Answer-First / Manus process
- `.cursor/skills/blog-article-writing/SKILL.md` — โทนและรูป blog
- `.cursor/rules/ai-overview-citation.mdc` — กฎสั้นบังคับตอนแก้ไฟล์เนื้อหา

**หลักการ:** จำนวนบทความมากช่วย index ได้ แต่ **ไม่ใช่สูตรให้ถูกอ้างใน Overview** — สูตรที่ชนะคือ **ข้อเท็จจริง quote ได้ + คลัสเตอร์ตรงคำค้น + entity ชัด**

---

## สิ่งที่ AI Overview ชอบหยิบ

| ประเภท | ตัวอย่างที่ถูกหยิบ |
|--------|-------------------|
| Entity + ข้อเสนอ | PhuketSEO · SME ภูเก็ต · SEO Audit ฟรี · ปรึกษาฟรี · แพ็กเริ่ม ฿5,900 |
| นิยามหนึ่งประโยค | **SEO สปาภูเก็ต คือ…** |
| FAQ ตอบตรง | คำถามธรรมชาติ + คำตอบ 1–2 ประโยคแรก |
| โซน/ธุรกิจจริง | ป่าตอง กะตะ ตัวเมือง · สปา · SME |
| ตัวเลขตรวจได้ | ราคาแพ็ก · ระยะเวลา audit · ไม่ผูกมัด |

## สิ่งที่ไม่ใช่ตัวขับหลัก

- บทความจำนวนมากที่พูดกว้างโดยไม่มีข้อเท็จจริง quote ได้
- เนื้อหาไม่มีชื่อแบรนด์ / ข้อเสนอ / โซน
- คู่มือยาวที่ไม่มีประโยคเปิดแบบ “X คือ…”
- หน้าแข่งคำเดียวกันแต่ข้อเสนอคนละแบบ (cannibalization)

---

## คลัสเตอร์ 3 ชั้น (บังคับคิดก่อนเขียน)

อย่าสร้างบทซ้ำที่แข่งคำเดียวกัน — เติมช่องว่างในตาราง:

| ชั้น | บทบาท | ตัวอย่างสปา |
|------|--------|-------------|
| **Service** | คำค้นเชิงพาณิชย์ “รับทำ…” | `/services/seo-phuket` |
| **Industry** | คำค้นแนวตั้ง “SEO [ธุรกิจ]…” | `/industries/seo-spa-phuket` |
| **Supporting blog** | เจาะปัญหา / วิธี / เปรียบเทียบ | `/blog/seo-for-phuket-spas` |

ลิงก์ข้ามทั้งสามชั้นในทุกหน้าของคลัสเตอร์

---

## Checklist ทุกหน้า/บทความใหม่

### A. ประโยคเปิด (≤35–40 คำ)

```markdown
**[หัวข้อ] คือ…** [ผลลัพธ์ที่ลูกค้าได้] เมื่อ [บริบทภูเก็ต / โซน / ประเภทธุรกิจ]
```

ห้ามเปิดด้วย “ในบทความนี้เราจะมาพูดถึง…”

### B. ข้อเท็จจริงแบรนด์ใน body (ไม่ใช่แค่ footer)

ใส่ในเนื้อหาอย่างน้อย 2–3 ข้อ ซ้ำกับทั้งไซต์ (อย่าเปลี่ยนข้อความคนละหน้า):

- PhuketSEO รับทำ SEO สำหรับธุรกิจ / SME ในภูเก็ต
- มี [SEO Audit ฟรี](/seo-audit) และ [ปรึกษาฟรี](/contact)
- เริ่มจาก Maps + trust ในโซนจริง (ป่าตอง กะตะ ตัวเมือง ถลาง กมลา กะทู้ ตามที่เกี่ยว)
- แพ็กเริ่มต้น ฿5,900/เดือน เมื่อหน้าเกี่ยวกับราคาหรือจ้างทำ

ถ้า AI หรือหน้าเว็บเคยระบุรายละเอียดข้อเสนอ (เช่น ระยะเวลาปรึกษา) ให้ใส่ตัวเลขเดียวกันทุกหน้า — ห้ามข้อเท็จจริงเพี้ยน

### C. โครงหน้าสั้น (hub ไม่ยาวเกินจำเป็น)

1. คืออะไร (นิยาม)
2. ปัญหาที่เจอจริงในภูเก็ต
3. ทิศทางแก้ 3–5 ข้อ (ไม่ใช่ tutorial 20 ขั้น)
4. ต่างจากสิ่งที่คนสับสน (ตารางสั้น ถ้าเกี่ยว)
5. FAQ ≥5 ข้อ — ตอบตรงใน 1–2 ประโยคแรก
6. ลิงก์: หน้าบริการหลัก + บทความคลัสเตอร์พี่น้อง + industry ถ้ามี

### D. Schema คู่เนื้อหาจริง

| ประเภทหน้า | Schema |
|------------|--------|
| Blog | Article + FAQPage (ผ่าน `faqs` ใน post data) |
| Service | Service + FAQ |
| Industry | FAQ + answerBlock ในหน้า |

ห้ามใส่ FAQ ใน schema โดยไม่มีในเนื้อหาหน้า

### E. รูปแบบข้อมูลที่ AI parse ง่าย

- นิยาม = ประโยคเดียว quote-ready
- ขั้นตอน = numbered list
- เปรียบเทียบ = ตาราง
- ข้อเสนอ / คุณสมบัติ = bullet สั้น

---

## หน้าอ้างอิงใน repo (ต้นแบบที่ชนะ)

| หน้า | บทบาท |
|------|--------|
| `/services/seo-phuket` | Service + answerBlock + FAQ + ราคา |
| `/industries/seo-spa-phuket` | Industry + answerBlock + FAQ schema |
| `/blog/seo-for-phuket-spas` | Supporting — นิยาม + ปัญหา + ทิศทาง + FAQ |
| `/blog/seo-sme-phuket` | Entity “SME ภูเก็ต” |
| `/seo-audit` | ข้อเสนอ “SEO Audit ฟรี” |

ไฟล์หลัก: `src/lib/service-content.ts`, `src/lib/industry-seo-content.ts`, `src/app/blog/[slug]/page.tsx` / `blog-posts-batch-*.ts`

---

## กระบวนการเมื่อเขียนคลัสเตอร์ใหม่

1. ระบุคำค้นหลักและ intent (นิยาม / จ้างทำ / แก้ปัญหา)
2. เลือกชั้น: service / industry / supporting — อย่าทำทั้งสามซ้ำคำเดียวกัน
3. เขียนตาม checklist A–E
4. ตรวจว่าข้อเท็จจริงแบรนด์ตรงกับหน้าอื่น
5. ลิงก์เข้าคลัสเตอร์พี่น้องและหน้าบริการหลัก
6. หลังขึ้น live: ถ้าถูก AI Overview อ้าง — แคปคำค้น + วันที่ + ข้อความที่ AI สรุป เก็บเป็น case

---

## สิ่งที่ห้าม

- โยนหินถามทางหลายเวอร์ชันโดยไม่มีข้อเท็จจริง quote ได้
- Rewrite ทับหน้าที่มี index/backlink โดยไม่จำเป็น (เสี่ยงเสีย ranking signal)
- รับประกันอันดับใน AI Overview
- ข้อเสนอคนละแบบในคนละหน้า (เช่น หน้าหนึ่งบอก audit ฟรี อีกหน้าเงียบหรือเงื่อนไขต่าง)
