# PhuketSEO Anti-Patterns (AI Slop)

ห้ามใช้ — แม้จะดู "สวย" ใน generic AI output

## Typography

| ❌ ห้าม | ✅ ใช้แทน |
|---------|----------|
| Inter, Roboto, system-ui เป็นหลัก | Kanit 400/700 |
| Gradient text ทุก h1/h2 | `text-slate-900` + accent บรรทัดเดียว `text-indigo-600` |
| Font size สุ่ม (text-6xl ทุก section) | Hero 4xl→6xl, section h2 `text-4xl` |

## Color

| ❌ ห้าม | ✅ ใช้แทน |
|---------|----------|
| Purple-pink gradient ทั้งหน้า | `.hero-gradient` soft radial |
| Neon / cyberpunk palette | indigo + slate + green accent |
| Random accent colors per card | `bg-blue-50`, `bg-green-50`, `bg-indigo-50` (semantic) |
| Glassmorphism ทุกการ์ด | white solid + soft border |

## Layout

| ❌ ห้าม | ✅ ใช้แทน |
|---------|----------|
| max-w-5xl / max-w-4xl สลับกัน | `.container-custom` (max-w-7xl) |
| Section ไม่มี eyebrow | eyebrow indigo uppercase ก่อน h2 |
| Hero 1 column บน desktop โดยไม่จำเป็น | `lg:grid-cols-2` + stat/visual ขวา |

## Components

| ❌ ห้าม | ✅ ใช้แทน |
|---------|----------|
| ปุ่ม `rounded-lg bg-purple-600` | `.btn-pill` / `.btn-pill-ghost` |
| Card `rounded-3xl shadow-2xl` ทุกใบ | `rounded-2xl` + hover shadow |
| Emoji เป็นหลักแทน icon | lucide-react หรือ brand PNG |
| สร้าง `<Button>` component ใหม่ | utilities ใน globals.css |

## Motion

| ❌ ห้าม | ✅ ใช้แทน |
|---------|----------|
| bounce, pulse ทุก element | subtle translate + shadow |
| Image scale on hover | border/shadow change only |
| Parallax scroll | static backgrounds |

## Content / Brand

| ❌ ห้าม | ✅ ใช้แทน |
|---------|----------|
| "Boost your productivity" EN copy | ภาษาไทย B2B ภูเก็ต |
| Stock photo hero คนยิ้ม | Smooth Purple mockup / stat cards |
| ราคา/สัญญา overpromise | ตรง `siteConfig` + pricing packages |

## Register mixing

| ❌ ห้าม | ✅ ใช้แทน |
|---------|----------|
| Blog vercel neutral บน marketing page | เลือก register เดียวต่อหน้า |
| Local SEO green CTA บนหน้าแรก hero | marketing = indigo pill |
| Marketing gradient บน blog article | blog = #FAFAFA flat |

## Performance

| ❌ ห้าม | ✅ ใช้แทน |
|---------|----------|
| Kanit preload ทุก weight | `hero-lcp` system font ก่อน |
| Animation บน LCP element | static critical CSS |
