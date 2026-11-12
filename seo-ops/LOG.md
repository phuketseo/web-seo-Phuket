# SEO Ops Log — PhuketSEO

ที่เก็บถาวรในโฟลเดอร์เว็บ: `seo-ops/LOG.md`

รูปแบบแต่ละรายการ:

```
## YYYY-MM-DD — หัวข้อสั้น
- **ทำอะไร:**
- **หน้า/ไฟล์:**
- **คีย์/ตั้งค่า:**
- **ทำไม:**
- **ผลที่คาด / วัดเมื่อ:**
- **ทำต่อ:**
```

---

## สรุปงาน SEO ทั้งหมด — 2026-11-10

งานที่ทำ/ตั้งค่าวันนี้ครบใน log ด้านล่าง — เช็คลิสต์รวม:

| # | งาน | สถานะ |
|---|---|---|
| 1 | ปรับ Admin Overview (กราฟคลิกแนวนอน, Focus Top 10, ตัดตารางซ้ำ) | ทำแล้ว |
| 2 | วิเคราะห์ GSC: คีย์ Ads `#1` static ไม่มีทราฟิก vs คีย์ที่มี impression จริง | ทำแล้ว |
| 3 | คัดคีย์จาก keyword.io → แยก Local / ทั่วปท. / แพลตฟอร์ม | ทำแล้ว (สูตรใน FORMULA) |
| 4 | จัดคีย์ Local เข้าหน้าเดิม `/` · `/services/google-ads` · `/services/social-media` | ทำแล้ว |
| 5 | สร้างหน้า nationwide `/services/facebook-ads` + `/services/google-ads-thailand` | ทำแล้ว + deploy |
| 6 | ใส่คีย์โฟกัส admin (cohort `new-2026-11`) ติดตาม ~7 วัน | ทำแล้ว + deploy |
| 7 | ล้าง rank `#1` static ของ Ads ที่ไม่มี GSC → `null` | ทำแล้ว |
| 8 | เก็บ primary ยิงแอดบน `/` ไว้ (มีลูกค้าโทรจาก Google) | ล็อกแล้ว |
| 9 | คีย์ local ที่มีทราฟิกจริง (`phuket seo`, `local seo phuket`) — ยังไม่ rewrite on-page | รอทำต่อ |
| 10 | นโยบาย: SEO รับเฉพาะเว็บที่เราทำ · แอดทำบนเว็บคนอื่นได้ | ล็อกแล้ว |
| 11 | สร้าง `seo-ops/` (FORMULA + LOG) ในโฟลเดอร์เว็บ | ทำแล้ว |

**Deploy production วันนี้:** หน้า nationwide + focus keywords ขึ้น `phuketseo.com` แล้ว  
**วัดรอบถัดไป:** ~2026-11-17 กดเช็คอันดับล่าสุดใน Keyword Focus  
**2026-11-10 21:21:** ปิด localhost แล้ว — กลับมาเช็ค admin/GSC อีก 7 วัน (ประมาณ 2026-11-17)

---

## 2026-11-10 — เปิดหน้าเงิน Ads ทั่วประเทศ + จัดโฟกัสคีย์

- **ทำอะไร:** สร้างหน้าเงิน nationwide 2 หน้า และติดตามคีย์ใน admin
- **หน้า/ไฟล์:**
  - `/services/facebook-ads` → `src/app/services/facebook-ads/page.tsx`
  - `/services/google-ads-thailand` → `src/app/services/google-ads-thailand/page.tsx`
  - เนื้อหา: `facebookAdsNationwideContent`, `googleAdsThailandContent` ใน `src/lib/service-content.ts`
  - Sitemap / nav / footer / focus keywords
- **คีย์/ตั้งค่า:**
  - FB primary: `รับยิงแอด facebook` (+ ราคา, บริการ, จ้าง, agency, meta, ig)
  - Google primary: `รับทำ google ads` (+ ยิงแอด กูเกิ้ล, รับยิงแอด google, ราคา, เอเยนซี่)
  - cohort: `new-2026-11`
  - ราคาแพ็กที่ระบุในหน้า: Ads Starter ฿6,500/เดือน · Pro Max ฿15,000
  - areaServed schema: Thailand (ไม่ใช่แค่ Phuket)
- **ทำไม:** แยก intent ทั่วประเทศออกจากหน้าภูเก็ต กันแย่งคีย์; คีย์ยิงแอดภูเก็ตหลายตัว volume/GSC ≈ 0
- **ผลที่คาด / วัดเมื่อ:** ดู GSC exact + Keyword Focus หลัง ~7 วัน (ประมาณ 2026-11-17) และ 14/28 วัน
- **ทำต่อ:**
  1. URL Inspection สองหน้าใหม่
  2. วันที่ +7 กดเช็คอันดับล่าสุดใน admin
  3. ถ้ามี impression ให้ล็อก primary จากข้อมูลจริง (อย่าเดา)
  4. อย่าเปลี่ยน primary หน้าแรก `/` ทิ้งคีย์ยิงแอดภูเก็ต — มี lead โทรจาก Google แล้ว

## 2026-11-10 — ล้างอันดับ Ads static ที่ไม่มี GSC

- **ทำอะไร:** คีย์ Ads ภูเก็ตใน `focus-keyword-rankings.ts` ตั้ง `rank: null` แทน `#1` static
- **หน้า/ไฟล์:** `src/lib/focus-keyword-rankings.ts` · keywords meta บน `/`, `/services/google-ads`, `/services/social-media`
- **คีย์/ตั้งค่า:**
  - `/` : บริษัท โฆษณา ภูเก็ต, agency ภูเก็ต, phuket ads/advertising, รับทำแอด/รับยิงแอด ภูเก็ต
  - ไม่ใส่ `point phuket advertising` (แบรนด์คู่แข่ง — ดู SERP อย่างเดียว)
  - เอา `รับยิงแอด facebook` ทั่วปท. ออกจากหน้าภูเก็ต
- **ทำไม:** GSC ไม่มี exact ของคีย์ Ads `#1` หลายตัว; คีย์ขยะยังมี impression ได้ → `#1` static ทำให้เข้าใจผิด
- **ผลที่คาด / วัดเมื่อ:** Top 10 ใน Overview จะไม่อิง Ads มั่ว; อันดับจริงมาจาก GSC/SERP เท่านั้น
- **ทำต่อ:** เก็บคีย์ยิงแอดบน `/` ไว้ (มีลูกค้าโทรจาก Google); โฟกัสทราฟิก local จริงที่ `phuket seo` / `local seo phuket` ทีหลังบนหน้า SEO

## 2026-11-10 — สูตรคีย์จาก GSC (บทเรียน)

- **ทำอะไร:** ดึง `.data/gsc-cache-28d.json` + `3m` จัดคลัสเตอร์
- **คีย์/ตั้งค่า (สัญญาณแรง):**
  - Local + traffic: `phuket seo` (มีคลิก), `seo phuket`, `seo agency phuket`, `รับทำ seo ภูเก็ต`
  - Local Maps: `local seo phuket` (มีคลิก)
  - Nationwide มี impression แต่พักเป็น primary: `รับทำ local seo`, `local seo`, `local seo thailand`
  - Ads local exact หลายตัว: ไม่มีทราฟิกใน GSC
- **ทำไม:** Planner/GSC ชี้ว่าบางคีย์เงินที่คิดว่า `#1` ไม่มี volume
- **ทำต่อ:** เมื่อพร้อม rewrite on-page — เลื่อน primary `/services/seo-phuket` → คลัสเตอร์ `phuket seo` โดยไม่ทิ้งไทย; `/services/local-seo` → `local seo phuket`

## 2026-11-10 — Admin Overview บางลง

- **ทำอะไร:** ตัดตารางรายวัน/แมทริกซ์ออกจาก Overview; คีย์เป็นกราฟแท่งแนวนอนเฉพาะที่มีคลิก; Focus เหลือ Top 10
- **หน้า/ไฟล์:** `src/components/admin/AdminOverview.tsx`
- **ทำไม:** มีกราฟแล้ว ไม่ซ้ำ; รายละเอียดเต็มดูเมนูซ้าย
- **ทำต่อ:** ใช้ Overview ดูสรุป + Keyword Focus ดูคีย์ใหม่ nationwide

## 2026-11-10 — นโยบายรับงานลูกค้า (Khao Lak case)

- **ทำอะไร:** วิเคราะห์เว็บลูกค้า `khaolak-airport-transfer.com`
- **ตั้งค่าที่พบ:** Angular SPA + Bootstrap บน nginx; จองผ่าน WhatsApp `+66 88 295 9254`; ไม่มีหลังบ้านจอง; LCP มือถือแย่จากรูปหนัก (`view.jpg` ~1.5MB, `popup.png` ~1MB)
- **นโยบายที่ล็อก:**
  - ยิงแอดบนเว็บคนอื่น = ได้ (แก้รูป + Tag + landing)
  - SEO ยาว = รับเฉพาะเว็บที่เราสร้าง
  - ข้อเสนอเว็บใหม่ที่คุย: เว็บ ฿6,500 + SEO 3 เดือนแรกฟรี + โดเมน/เซิร์ฟ ฿2,500/ปี (ล็อก scope)
- **ทำต่อ:** ประชุมลูกค้า+น้องผู้ทำเว็บ — โฟกัสแอด/สปีด/landing บนของเดิม; SEO เสนอเว็บใหม่

## 2026-11-11 — Figma MCP → ปรับ Hero `/services/facebook-ads`

- **ทำอะไร:** เชื่อม Figma MCP แล้วดึงเทมเพลต SaaS Landing (Community) มาเป็นแรงบันดาลใจ ปรับ Hero หน้า facebook-ads
- **หน้า/ไฟล์:**
  - `src/components/services/ServiceMarketingHero.tsx` — เพิ่ม `variant="saas"` + `floatingCards`
  - `src/app/services/facebook-ads/page.tsx` — ใช้ saas hero + แถบ trust แพลตฟอร์ม
- **คีย์/ตั้งค่า:** ไม่เปลี่ยน primary keyword · ปรับหัวข้อ accent เป็น “เพิ่ม lead จาก Meta Ads”
- **ทำไม:** ทดสอบ Figma → โค้ด โดยคงแบรนด์ PhuketSEO (indigo) ไม่ก็อปสีเขียว Biccas ทั้งเพจ
- **ผลที่คาด / วัดเมื่อ:** ดูหน้า live หลัง deploy
- **ทำต่อ:** ถ้าโอเค ค่อยขยาย section อื่นจาก Figma หรือจับหน้าเว็บกลับเข้า Untitled

## 2026-11-10 — สร้างโฟลเดอร์ seo-ops ในโปรเจกต์เว็บ

- **ทำอะไร:** ย้ายที่เก็บสูตร+log มาไว้ที่รากโปรเจกต์ใหหาเจอง่าย
- **หน้า/ไฟล์:** `seo-ops/README.md`, `seo-ops/FORMULA.md`, `seo-ops/LOG.md`
- **ทำไม:** ให้อ่านต่อและอัปเดตในโฟลเดอร์เว็บโดยตรง
- **ทำต่อ:** ทุกงาน SEO ต่อท้ายไฟล์นี้

---

## Template รายการถัดไป (คัดลอก)

```
## YYYY-MM-DD — 
- **ทำอะไร:**
- **หน้า/ไฟล์:**
- **คีย์/ตั้งค่า:**
- **ทำไม:**
- **ผลที่คาด / วัดเมื่อ:**
- **ทำต่อ:**
```
