const CRITICAL_HERO_CSS = `
.hero-section{min-height:100svh;display:flex;align-items:center;position:relative;overflow:hidden;background:radial-gradient(ellipse 80% 60% at 60% -10%,#e0e7ff 0%,transparent 60%),radial-gradient(ellipse 60% 50% at -10% 80%,#fce7f3 0%,transparent 60%),#fff}
.hero-inner{max-width:80rem;margin:0 auto;padding:9rem 1rem 3rem;width:100%;position:relative;z-index:1}
.hero-badge{display:inline-flex;align-items:center;gap:.5rem;background:#eef2ff;border:1px solid #c7d2fe;color:#4f46e5;font-family:Tahoma,"Segoe UI",sans-serif;font-size:.875rem;font-weight:500;padding:.5rem 1rem;border-radius:9999px;margin-bottom:2rem}
.hero-lcp{font-family:Tahoma,"Segoe UI",sans-serif;font-weight:700;color:#0f172a;font-size:3rem;line-height:1.1;margin:0 0 1.5rem}
.hero-accent{color:#6366f1}
.hero-lead{font-family:Tahoma,"Segoe UI",sans-serif;color:#64748b;font-size:1.125rem;line-height:1.625;margin:0 0 2.5rem;max-width:32rem}
.hero-actions{display:flex;flex-wrap:wrap;gap:.75rem;margin-bottom:2.5rem}
.hero-btn-primary{display:inline-flex;align-items:center;gap:.5rem;background:#4f46e5;color:#fff;font-family:Tahoma,"Segoe UI",sans-serif;font-weight:600;padding:1rem 2rem;border-radius:9999px;text-decoration:none;font-size:1rem}
.hero-btn-ghost{display:inline-flex;align-items:center;gap:.5rem;border:1px solid #e2e8f0;color:#334155;font-family:Tahoma,"Segoe UI",sans-serif;font-weight:500;padding:1rem 2rem;border-radius:9999px;text-decoration:none;font-size:1rem}
@media(min-width:1024px){.hero-lcp{font-size:4.5rem}.hero-inner{padding-top:9rem}}
`;

export default function HomeHero() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CRITICAL_HERO_CSS }} />
      <section className="hero-section hero-gradient relative min-h-screen flex items-center overflow-hidden">
        <div className="hero-inner relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-36 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="hero-badge">
              ⚡ Phuket Visibility Stack™
            </div>
            <h1 className="hero-lcp text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
              รับทำ SEO +
              <br />
              <span className="hero-accent text-indigo-600">เว็บไซต์ภูเก็ต</span>
              <br />
              ติด Google & AI Search
            </h1>
            <p className="hero-lead text-slate-500 text-lg leading-relaxed mb-10 max-w-lg">
              ช่วยธุรกิจไทยในภูเก็ต ติด Google Maps มีเว็บเร็วที่ Google ชอบ และพร้อมโผล่ AI Overview
              เริ่มต้น ฿5,900/เดือน ไม่มีสัญญาผูกมัด
            </p>
            <div className="hero-actions flex flex-wrap gap-3 mb-10">
              <a href="/contact" className="hero-btn-primary btn-pill text-base px-8 py-4">
                ขอคำปรึกษาฟรี →
              </a>
              <a href="#services" className="hero-btn-ghost btn-pill-ghost text-base px-8 py-4">
                ดูบริการของเรา ↓
              </a>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-1.5">
                <span className="text-yellow-400">★</span>
                <a href="/pricing#lite" className="hover:text-green-600 hover:underline">
                  SEO Lite จาก ฿5,900
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-indigo-400">✓</span>
                <span>Audit ภายใน 7 วัน</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-indigo-400">✓</span>
                <span>AEO + GEO Ready</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:grid grid-cols-2 gap-4">
            {[
              { label: "แพ็ก SEO Pro", value: "฿8,900", sub: "เว็บ + SEO + AEO/GEO", color: "bg-indigo-600", light: false },
              { label: "Audit รายงาน", value: "7 วัน", sub: "ส่งมอบหลังเริ่มงาน", color: "bg-white border border-slate-100 shadow-sm", light: true },
              { label: "GBP Views", value: "30-60 วัน", sub: "เริ่มเห็น impression", color: "bg-white border border-slate-100 shadow-sm", light: true },
              { label: "AI Search", value: "AEO+GEO", sub: "พร้อม AI Overview", color: "bg-green-500", light: false },
            ].map((stat) => (
              <div key={stat.label} className={`${stat.color} rounded-2xl p-6`}>
                <div className={`text-3xl font-bold font-serif mb-1 ${stat.light ? "text-slate-900" : "text-white"}`}>{stat.value}</div>
                <div className={`text-sm font-semibold mb-0.5 ${stat.light ? "text-slate-700" : "text-white/90"}`}>{stat.label}</div>
                <div className={`text-xs ${stat.light ? "text-slate-400" : "text-white/70"}`}>{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
