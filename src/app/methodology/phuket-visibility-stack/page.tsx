import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, MapPin, Globe, Megaphone } from "lucide-react";
import { siteConfig } from "@/lib/utils";
import { buildBreadcrumb } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Phuket Visibility Stack™ — กรอบงาน SEO ภูเก็ต | PhuketSEO",
  description:
    "Phuket Visibility Stack คือกรอบงาน 3 ชั้นสำหรับธุรกิจในภูเก็ต — Local Visibility → Owned Asset → Acceleration วางลำดับ SEO ก่อนขยาย Ads",
  alternates: { canonical: "https://phuketseo.com/methodology/phuket-visibility-stack" },
};

const layers = [
  {
    icon: MapPin,
    layer: "ชั้นที่ 1",
    name: "Local Visibility",
    subtitle: "ให้ลูกค้าเจอบน Google Maps ก่อน",
    problem: "ธุรกิจบริการในภูเก็ต — ร้านอาหาร สปา คลินิก — ลูกค้ามักค้นหาในโซนใกล้ก่อนตัดสินใจ",
    focus: ["Google Business Profile ครบและ verify", "NAP ตรงกันทุกช่องทาง", "ระบบรีวิวและ trust signal", "โซน/ย่านที่แข่งจริง (ป่าตอง กะตะ ตัวเมือง)"],
    outcome: "Impression และการติดต่อจาก Maps — ลูกค้าเห็นและโทร/ขอเส้นทางได้",
    package: "SEO Lite",
    href: "/blog/google-my-business-phuket",
    linkLabel: "อ่าน Quick Win: Google Business Profile",
  },
  {
    icon: Globe,
    layer: "ชั้นที่ 2",
    name: "Owned Asset",
    subtitle: "เว็บ + Organic Search + AI Search",
    problem: "Maps ช่วยให้ถูกเห็นในโซนใกล้ แต่เมื่อลูกค้าอยากดูรายละเอียด หรือค้นหาคำกว้าง — ต้องมีเว็บที่ Google ไว้ใจ",
    focus: ["เว็บเร็ว mobile-first (Core Web Vitals)", "On-page SEO + content โซนภูเก็ต", "Schema, FAQ, llms.txt (AEO/GEO)", "Google Search Console + sitemap"],
    outcome: "Organic traffic, query ที่ compound และพร้อม AI Overview",
    package: "SEO Pro",
    href: "/services/ai-search-visibility",
    linkLabel: "ดูบริการ AI Search Visibility",
  },
  {
    icon: Megaphone,
    layer: "ชั้นที่ 3",
    name: "Acceleration",
    subtitle: "Ads เป็นเทคนิคเสริม ไม่ใช่ทดแทน SEO",
    problem: "Organic ใช้เวลา compound — เมื่อ foundation พร้อมแล้ว Ads ช่วยดึง lead เร็วในช่วง peak หรือ keyword ที่แข่งสูง",
    focus: ["Google Ads / Meta Ads 1 แคมเปญ", "Landing page ที่ convert ได้จริง", "ROAS วัดคู่ organic trend", "ไม่พึ่ง paid 100% — margin ยั่งยืน"],
    outcome: "Lead เร็วขึ้น โดยไม่ทิ้ง asset ที่สะสม (Maps + เว็บ + content)",
    package: "SEO Pro Max",
    href: "/services/google-ads",
    linkLabel: "ดูบริการ Google Ads (เสริม)",
  },
];

const whyOrder = [
  {
    title: "Maps ก่อน เพราะ intent ภูเก็ตเป็น local",
    desc: "ลูกค้าค้นหา near me, ร้านอาหาร ป่าตอง, spa kata — ส่วนใหญ่เริ่มจาก Maps ไม่ใช่เว็บ",
  },
  {
    title: "เว็บเมื่อพร้อม convert",
    desc: "Listing ดีแต่ไม่มีเว็บ = ลูกค้าคลิกแล้วไม่ convert หรือ Google ไม่มีสัญญาณคุณภาะเพียงพอ",
  },
  {
    title: "Ads หลัง foundation",
    desc: "ยิง Ads โดยไม่มี GBP/เว็บที่น่าเชื่อถือ = จ่ายแล้ว lead หลุด — foundation ก่อน scale",
  },
];

const startGuide = [
  { profile: "ร้าน walk-in / SME ยังไม่มี listing", start: "ชั้นที่ 1 — Local Visibility" },
  { profile: "มี Maps แล้ว แต่ไม่มี traffic จาก Search", start: "ชั้นที่ 2 — Owned Asset" },
  { profile: "Organic โตแล้ว ต้องการ lead เร็วในฤดูกาล", start: "ชั้นที่ 3 — Acceleration" },
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Phuket Visibility Stack — กรอบงาน SEO ภูเก็ต 3 ชั้น",
  description: "วางลำดับการมองเห็นบน Google สำหรับธุรกิจในภูเก็ต: Local Visibility → Owned Asset → Acceleration",
  step: layers.map((l, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: `${l.layer}: ${l.name}`,
    text: `${l.subtitle}. ${l.outcome}`,
  })),
};

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBreadcrumb([
              { name: "หน้าแรก", url: siteConfig.url },
              { name: "Phuket Visibility Stack", url: `${siteConfig.url}/methodology/phuket-visibility-stack` },
            ])
          ),
        }}
      />

      <section className="bg-gradient-to-br from-blue-950 to-indigo-900 text-white py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-green-400 font-semibold text-sm uppercase tracking-wider mb-3">Methodology</p>
          <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-4">Phuket Visibility Stack™</h1>
          <p className="text-blue-200 text-lg leading-relaxed">
            กรอบงาน 3 ชั้น ที่ PhuketSEO ใช้วางลำดับ SEO สำหรับธุรกิจในภูเก็ต — ไม่ใช่รายการราคา
            แต่คือ <strong className="text-white">ลำดับที่ควรทำ</strong> จาก Maps ไปจนถึง AI Search
          </p>
        </div>
      </section>

      <section className="py-16 max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-serif font-bold text-blue-950 mb-4">Stack นี้แก้ปัญหาอะไร</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          ธุรกิจในภูเก็ตมักเจอปัญหาเดียวกัน: <strong>ลูกค้าไม่รู้จักบน Google</strong> แต่ไม่รู้ว่าควรเริ่มจาก Maps, เว็บ หรือ Ads
        </p>
        <p className="text-gray-700 leading-relaxed">
          Phuket Visibility Stack ตอบคำถามว่า <strong>ทำอะไรก่อน-หลัง</strong> — แต่ละชั้นสร้าง asset ที่ compound
          ไม่ใช่ทำ Ads ก่อนมี listing หรือทำเว็บโดยไม่มี trust บน Maps
        </p>
      </section>

      <section className="py-12 bg-slate-50 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-serif font-bold text-blue-950 mb-8 text-center">ทำไมต้องเรียงลำดับแบบนี้</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {whyOrder.map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-slate-100">
                <h3 className="font-semibold text-blue-950 mb-2 text-sm leading-snug">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-serif font-bold text-blue-950 mb-2 text-center">3 ชั้นของ Stack</h2>
        <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">
          แต่ละชั้น map กับแพ็ก Lite / Pro / Pro Max —{" "}
          <Link href="/pricing" className="text-indigo-600 hover:underline">
            ดูราคาและรายการ deliver ที่หน้า Pricing
          </Link>
        </p>

        <div className="space-y-10">
          {layers.map((l) => {
            const Icon = l.icon;
            return (
              <article key={l.layer} className="border border-gray-200 rounded-2xl p-8 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center shrink-0">
                    <Icon size={22} className="text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-indigo-600 uppercase tracking-wider">{l.layer}</p>
                    <h3 className="text-2xl font-serif font-bold text-blue-950">{l.name}</h3>
                    <p className="text-green-700 font-medium text-sm mt-1">{l.subtitle}</p>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">{l.problem}</p>

                <ul className="space-y-2 mb-4">
                  {l.focus.map((item) => (
                    <li key={item} className="flex gap-2 text-gray-700 text-sm">
                      <CheckCircle size={15} className="text-green-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-sm text-slate-600 bg-slate-50 rounded-lg px-4 py-3 mb-4">
                  <span className="font-semibold text-blue-950">ผลลัพธ์ที่คาดหวัง:</span> {l.outcome}
                </p>

                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <span className="text-gray-400">แพ็กที่สอดคล้อง:</span>
                  <span className="font-semibold text-indigo-700">{l.package}</span>
                  <span className="text-gray-300">|</span>
                  <Link href={l.href} className="inline-flex items-center gap-1 text-blue-700 font-medium hover:gap-2 transition-all">
                    {l.linkLabel} <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="py-16 bg-indigo-50 border-y border-indigo-100">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-serif font-bold text-blue-950 mb-6 text-center">ควรเริ่มจากชั้นไหน</h2>
          <div className="space-y-3">
            {startGuide.map((g) => (
              <div key={g.profile} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 bg-white rounded-xl px-5 py-4 border border-indigo-100">
                <p className="text-gray-600 text-sm flex-1">{g.profile}</p>
                <p className="font-semibold text-indigo-700 text-sm shrink-0">{g.start}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            ไม่แน่ใจ?{" "}
            <Link href="/seo-audit" className="text-indigo-600 font-medium hover:underline">
              ขอ Audit ฟรี
            </Link>{" "}
            — เราวิเคราะห์แล้วบอกลำดับที่เหมาะกับธุรกิจคุณ
          </p>
        </div>
      </section>

      <section className="py-16 text-center px-4">
        <p className="text-gray-600 mb-6 max-w-lg mx-auto">
          Stack คือกรอบงาน — ราคาและรายการ deliver ครบอยู่ที่หน้า Pricing
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
          >
            ดูราคา Lite / Pro / Pro Max <ArrowRight size={18} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-gray-300 hover:border-indigo-400 text-gray-800 font-semibold px-8 py-3 rounded-xl transition-colors"
          >
            ขอคำปรึกษาฟรี
          </Link>
        </div>
      </section>
    </div>
  );
}
