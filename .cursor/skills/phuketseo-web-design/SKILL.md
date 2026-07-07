---
name: phuketseo-web-design
description: >-
  Design and implement PhuketSEO UI using indigo/green marketing tokens,
  vercel blog theme, and Smooth Purple visuals. Use when building pages,
  components, layout polish, hero sections, CTAs, or when the user asks
  for web design following PhuketSEO brand.
---

# PhuketSEO Web Design

ออกแบบ UI ให้ **ตรง design system ใน repo** — ไม่สร้างธีมใหม่ ไม่ AI slop

อ่านก่อนลงมือ:
- [DESIGN.md](DESIGN.md) — tokens + registers
- [components.md](components.md) — patterns พร้อม copy
- [anti-patterns.md](anti-patterns.md) — สิ่งที่ห้าม

สกิลที่เกี่ยวข้อง (ไม่ duplicate):
- `.cursor/skills/content-seo-aeo-geo/` — เนื้อหา + Smooth Purple images
- `.cursor/skills/blog-rich-results-schema/` — JSON-LD

---

## Workflow

### 1. Scan (ก่อนเขียนโค้ด)

อ่านตามลำดับ:

1. `src/app/globals.css` — CSS variables + utilities
2. Component ที่ใกล้เคียงที่สุด (เช่น `HomeHero`, `LocalSeoPage`, `HomeBelowFold`)
3. ระบุ **register** (ด้านล่าง)

### 2. Match (ใช้ของเดิม)

| ต้อง reuse | ห้ามสร้างใหม่ |
|-----------|--------------|
| `.btn-pill`, `.btn-pill-ghost`, `.btn-pill-green` | ปุ่ม rounded-lg สีสุ่ม |
| `.container-custom`, `.section-padding` | max-w แปลกๆ |
| `.hero-gradient`, `.text-gradient` | gradient ทุก heading |
| `<Logo variant="…" />` | ข้อความแทนโลโก้ |
| `cn()` จาก `@/lib/utils` | class string ยาวไม่ merge |

### 3. Build

เลือก register → ใช้ template จาก [components.md](components.md) → ประกอบ section

### 4. Polish

- Section rhythm: eyebrow → h2 → lead → grid
- Hover: `transition-all duration-300`, `-translate-y-1`, `shadow-xl`
- Spacing: `mb-14` หัว section, `gap-6` การ์ด
- ภาษาไทย: Kanit, ไม่เปลี่ยนฟอนต์

### 5. Validate

เช็ค [anti-patterns.md](anti-patterns.md) ก่อนส่งมอบ

---

## Registers (เลือก 1 ต่อหน้า)

| Register | ใช้กับ | Hero | CTA หลัก |
|----------|--------|------|----------|
| **marketing** | หน้าแรก, services, pricing, about | `.hero-gradient` สว่าง | `.btn-pill` indigo |
| **local-seo** | `/local/*` | `from-blue-950 to-blue-900` | green `rounded-xl` |
| **blog-vercel** | `/blog/[slug]` theme=vercel | `#FAFAFA` flat | link neutral |
| **package** | `/packages/*` | dark blue + green badge | green pill |

---

## Commands (เมื่อ user ขอ refine)

| คำสั่ง | ทำ |
|--------|-----|
| **scan** | อ่าน tokens + component ที่เกี่ยวข้อง สรุป register |
| **hero** | สร้าง/แก้ hero ตาม register |
| **section** | eyebrow + h2 + grid cards |
| **cta** | conversion block + ปุ่มถูก variant |
| **polish** | spacing, hover, contrast, consistency |
| **document** | อัปเดต DESIGN.md ถ้า tokens เปลี่ยน |

---

## Section header (marketing)

```tsx
<div className="text-center mb-14">
  <div className="text-indigo-500 font-semibold text-sm uppercase tracking-wider mb-2">
    {eyebrow}
  </div>
  <h2 className="text-4xl font-bold text-slate-900 font-serif mb-4">{title}</h2>
  {lead && <p className="text-slate-500 max-w-2xl mx-auto">{lead}</p>}
</div>
```

---

## ไฟล์อ้างอิงหลัก

| ไฟล์ | บทบาท |
|------|--------|
| `src/app/globals.css` | Tokens + utilities |
| `src/components/HomeHero.tsx` | Marketing hero + visual |
| `src/components/HomeBelowFold.tsx` | Homepage sections |
| `src/components/GradientButton.tsx` | Gradient CTA helper |
| `src/components/LocalSeoPage.tsx` | Local SEO register |
| `src/components/Navbar.tsx` / `Footer.tsx` | Shell |
| `src/lib/image-style-smooth-purple.ts` | Infographic spec |
