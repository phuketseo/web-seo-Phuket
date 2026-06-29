# PhuketSEO Component Patterns

Copy-adapt จากไฟล์จริง — อย่า invent ใหม่ถ้ามี pattern นี้แล้ว

---

## Marketing hero

Register: **marketing** · Ref: `HomeHero.tsx`

```tsx
<section className="hero-gradient relative min-h-screen flex items-center overflow-hidden pt-24">
  <div className="container-custom py-16 lg:py-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
    <div>
      <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 text-indigo-600 text-sm font-medium px-4 py-2 rounded-full mb-6">
        ⚡ Phuket Visibility Stack™
      </div>
      <h1 className="hero-lcp text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] mb-6">
        หัวข้อหลัก
        <br />
        <span className="text-indigo-600">keyword สำคัญ</span>
      </h1>
      <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-lg">{lead}</p>
      <div className="flex flex-wrap gap-3">
        <Link href="/contact" className="btn-pill text-base px-8 py-4">ขอคำปรึกษาฟรี →</Link>
        <a href="#services" className="btn-pill-ghost text-base px-8 py-4">ดูบริการ ↓</a>
      </div>
    </div>
    {/* Stat grid 2×2 — hidden lg:grid */}
  </div>
</section>
```

---

## Section header

```tsx
function SectionHeader({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
  return (
    <div className="text-center mb-14">
      <div className="text-indigo-500 font-semibold text-sm uppercase tracking-wider mb-2">{eyebrow}</div>
      <h2 className="text-4xl font-bold text-slate-900 font-serif mb-4">{title}</h2>
      {lead && <p className="text-slate-500 max-w-2xl mx-auto">{lead}</p>}
    </div>
  );
}
```

---

## Service card (link)

Ref: `HomeBelowFold.tsx`

```tsx
<Link
  href={href}
  className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
>
  <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded-xl flex items-center justify-center mb-4">
    {/* icon */}
  </div>
  <h3 className="font-bold text-blue-950 text-lg mb-2 font-serif">{title}</h3>
  <p className="text-gray-600 text-sm leading-relaxed mb-4">{desc}</p>
  <div className="text-xs font-semibold text-green-600 bg-green-50 px-3 py-1.5 rounded-full inline-block">
    ✓ {result}
  </div>
</Link>
```

---

## Metric row

```tsx
<section className="py-16 bg-slate-50 border-y border-slate-100">
  <div className="container-custom">
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {metrics.map((m) => (
        <div key={m.label} className="text-center">
          <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-3">
            <Icon size={22} className="text-indigo-600" />
          </div>
          <div className="text-4xl font-bold text-slate-900 font-serif mb-1">{m.value}</div>
          <div className="text-slate-500 text-sm">{m.label}</div>
        </div>
      ))}
    </div>
  </div>
</section>
```

---

## Case study card (gradient)

```tsx
<Link
  href={href}
  className="relative bg-gradient-to-br from-indigo-600 to-violet-700 rounded-2xl p-8 text-white overflow-hidden block hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group"
>
  <div className="absolute inset-0 pointer-events-none" aria-hidden>
    <div className="absolute -right-20 -bottom-20 w-72 h-72 rounded-full bg-white/[0.06]" />
  </div>
  {/* content z-10 */}
</Link>
```

---

## CTA band (dark)

```tsx
<section className="py-20 bg-blue-950 text-white">
  <div className="container-custom text-center">
    <h2 className="text-3xl lg:text-4xl font-bold font-serif mb-4">{title}</h2>
    <p className="text-blue-200 max-w-xl mx-auto mb-8">{lead}</p>
    <Link href="/contact" className="btn-pill-green text-base px-8 py-4 inline-flex">
      ขอคำปรึกษาฟรี
    </Link>
  </div>
</section>
```

---

## Local SEO hero

Register: **local-seo** · Ref: `LocalSeoPage.tsx`

- Background: `bg-gradient-to-br from-blue-950 to-blue-900`
- Badge: `bg-green-500/20 border-green-400/30 text-green-300 rounded-full`
- Accent line: `text-green-400`
- CTA: `bg-green-500 hover:bg-green-600 rounded-xl` (not pill)

---

## Blog vercel article

Register: **blog-vercel** · Ref: `BlogVercelLayout.tsx`

- Page bg: `#FAFAFA`
- Prose: `.blog-prose-vercel`
- Images: `rounded-lg border-neutral-200`
- Callouts: `border-neutral-200 bg-neutral-50/80`

---

## Preview banner (demo pages only)

```tsx
<div className="bg-amber-50 border-b border-amber-200 text-amber-900 text-sm text-center py-2 px-4">
  ตัวอย่าง design จากสกิล phuketseo-web-design — ไม่ใช่หน้าแรกจริง ·{" "}
  <Link href="/" className="font-semibold underline">กลับหน้าแรก</Link>
</div>
```
