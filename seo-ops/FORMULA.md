# สูตรสำเร็จ SEO — PhuketSEO

อ่านร่วมกับ:
- `seo-ops/LOG.md` — บันทึกงานจริง
- `.cursor/skills/keyword-first-page-checklist/SKILL.md`
- `.cursor/skills/content-seo-aeo-geo/SKILL.md`
- `.cursor/rules/aio-article-rigger.mdc`

---

## 1) เลือกคีย์จากสัญญาณจริง ไม่ใช่จากอันดับในหัว

1. เปิด GSC (28d / 3m): query ที่มี **impressions หรือ clicks**
2. แยก **Local ภูเก็ต** vs **ทั่วประเทศ** — คนละหน้าเงิน
3. คีย์ volume ≈ 0 / ไม่มี GSC → **ไม่เป็น primary** (เก็บ watch ได้)
4. อันดับ `#1` ในไฟล์โฟกัสถ้าไม่มี GSC exact = **อย่าเชื่อ** จนกว่าจะมี impression

## 2) หนึ่ง intent = หนึ่งหน้าเงิน

| Intent | หน้า |
|---|---|
| ยิงแอดภาพรวมภูเก็ต | `/` |
| Google Ads ภูเก็ต | `/services/google-ads` |
| Facebook/Meta ภูเก็ต | `/services/social-media` |
| Facebook/Meta ทั่วปท. | `/services/facebook-ads` |
| Google Ads ทั่วปท. | `/services/google-ads-thailand` |
| SEO ภูเก็ต | `/services/seo-phuket` |
| Local SEO / Maps | `/services/local-seo` |

ห้ามยัดคีย์ nationwide เป็น primary บนหน้าภูเก็ต และกลับกัน

## 3) ก่อน publish หน้าเงินใหม่

1. ขั้นโครงร่าง (aio-article-rigger) → รออนุมัติ
2. Primary ใน H1 + ย่อหน้าแรก + keywords meta + FAQ
3. ตารางเปรียบเทียบ ≥1 · FAQ ≥5 ตอบตรงประโยคแรก
4. Internal link ไปหน้าใกล้เคียง + หน้าภูเก็ต/ทั่วปท. ที่เกี่ยวข้อง
5. ใส่คีย์ใน `src/lib/focus-keyword-rankings.ts` (cohort ชัด)
6. Sitemap / nav / footer
7. Deploy แล้วส่ง URL Inspection (ถ้าทำมือ)
8. **เขียน log** ใน `seo-ops/LOG.md`

## 4) วัดผลหลัง publish (วันที่ +7 / +14 / +28)

1. Admin → Keyword Focus → เช็คอันดับล่าสุด (GSC exact)
2. Overview: คีย์ที่มีคลิก / impression
3. ถ้ายัง null ทั้งก้อน: ตรวจ index, cannibalization, ลิงก์ภายใน — อย่ารีบแตกหน้าใหม่
4. บันทึกผลลง `seo-ops/LOG.md`

## 5) นโยบายรับงานลูกค้า

- **ยิงแอด** บนเว็บคนอื่นทำได้ (สปีดรูป + Tag + landing)
- **SEO ยาว** รับเฉพาะเว็บที่เราสร้าง/คุมโครงสร้างได้
- SPA ไม่มี SSR + ไม่มีหลังบ้านเนื้อหา = ไม่รับการันตี SEO

## ไฟล์สำคัญในระบบ

| เรื่อง | ที่อยู่ |
|---|---|
| คีย์โฟกัส + หน้าเป้าหมาย | `src/lib/focus-keyword-rankings.ts` |
| เนื้อหาหน้าบริการ | `src/lib/service-content.ts` |
| แคช GSC ท้องถิ่น | `.data/gsc-cache-28d.json` / `gsc-cache-3m.json` |
| Admin | `/admin` → Overview / Search Console / Keyword Focus |
| Log + สูตร | `seo-ops/` |
