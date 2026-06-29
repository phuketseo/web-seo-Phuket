# PhuketSEO Design System

Portable spec — อ่านโดย agent ก่อนออกแบบ UI

## Brand voice (visual)

- Professional B2B Thai local agency
- Clean, confident, measurable results
- Indigo trust + green action — ไม่ hype เกินไป

## Color tokens

| Token | Hex / Tailwind | Usage |
|-------|----------------|-------|
| `--primary` | `#6366f1` / indigo-600 | Links, accents, primary CTA |
| `--primary-dark` | `#4f46e5` / indigo-700 | CTA hover |
| `--accent` | `#25D366` | WhatsApp, Local SEO CTA, footer link hover |
| `--text-dark` | `#0f172a` / slate-900 | Headings |
| `--text-gray` | `#64748b` / slate-500 | Body secondary |
| `--bg-light` | `#f8fafc` / slate-50 | Alt sections |
| `--border` | `#e2e8f0` / slate-200 | Card borders |
| Dark brand | `blue-950` | Footer, local hero |
| Case study | `indigo-600 → violet-700` | Gradient cards |

## Gradients

| Name | Value | Usage |
|------|-------|-------|
| `.hero-gradient` | indigo `#e0e7ff` + pink `#fce7f3` radial on white | Marketing hero bg |
| `.text-gradient` | `#6366f1 → #8b5cf6` | Keyword accent (sparingly) |
| Smooth Purple mesh | teal→blue→indigo→violet | Infographics only |

## Typography

| Role | Font | Weight | Notes |
|------|------|--------|-------|
| Body | Kanit (`--font-kanit`) | 400 | Thai + Latin |
| Headings | Kanit Bold (`--font-kanit-bold`) | 700 | `letter-spacing: -0.02em`, `line-height: 1.05` |
| Hero LCP | Tahoma / Segoe UI | 700 | `.hero-lcp` — paints before Kanit loads |
| Blog vercel | Kanit | 400/600 | `text-neutral-900`, prose 1.125rem |

## Spacing & layout

| Token | Value |
|-------|-------|
| Container | `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` |
| Section | `py-20 md:py-28` |
| Navbar offset | `pt-24` (fixed header) |
| Card grid gap | `gap-4` to `gap-6` |
| Section header margin | `mb-14` |

## Border radius

| Element | Radius |
|---------|--------|
| Cards | `rounded-2xl` |
| Icon boxes | `rounded-xl` |
| Buttons (marketing) | `rounded-full` (pill) |
| Local SEO CTA | `rounded-xl` |
| Blog vercel | `rounded-lg` |

## Motion

- Default: `transition-all duration-200` (buttons), `duration-300` (cards)
- Hover lift: `-translate-y-0.5` (buttons), `-translate-y-1` (cards)
- Active: `active:scale-95` (pill buttons)
- No bounce, no parallax, no image zoom on hover

## Components (canonical)

- **Primary CTA:** `.btn-pill` or `.btn-gradient-brand` (purple→blue)
- **Accent text:** `.text-gradient-brand`
- **Secondary CTA:** `.btn-pill-ghost`
- **WhatsApp / Local:** `.btn-pill-green` or green `rounded-xl`
- **Card:** white + `border-gray-100` + hover shadow
- **Badge:** pill `bg-indigo-50 border-indigo-200 text-indigo-600`
- **Logo:** `<Logo variant="horizontal|icon|footer" />`

## Registers summary

See SKILL.md — marketing | local-seo | blog-vercel | package

## Assets

- Logo horizontal: `/images/brand/logo-horizontal.png`
- Logo icon: `/images/brand/logo-icon.png`
- Icons: lucide-react (site UI), custom PNG (service icons via `siteImages`)
