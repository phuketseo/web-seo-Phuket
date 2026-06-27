import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Clock, Target } from "lucide-react";
import { siteConfig } from "@/lib/utils";

export const metadata: Metadata = {
  title: "เกี่ยวกับเรา - PhuketSEO | SEO + เว็บไซต์ภูเก็ต",
  description:
    "PhuketSEO ทีม SEO + Web ในภูเก็ต โฟกัสธุรกิจไทยท้องถิ่น ส่ง SEO Audit ใน 7 วัน แพ็กเกจ Lite ฿5,900 / Pro ฿8,900 / Pro Max ฿15,000",
  alternates: { canonical: "https://phuketseo.com/about" },
};

const deliveryTimeline = [
  { period: "7 วัน", title: "SEO Audit + แผนงาน", desc: "วิเคราะห์เว็บ, GBP, คู่แข่ง และ keyword โซนภูเก็ต" },
  { period: "14 วัน", title: "Quick Wins", desc: "แก้ GBP, on-page หลัก, schema และระบบขอรีวิว" },
  { period: "30–60 วัน", title: "GBP + Impression", desc: "เริ่มเห็น views/calls จาก Google Maps" },
  { period: "3–6 เดือน", title: "Organic Traffic", desc: "traffic และ leads จาก Google Search ชัดขึ้น" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "หน้าแรก", item: siteConfig.url },
                  { "@type": "ListItem", position: 2, name: "เกี่ยวกับเรา", item: `${siteConfig.url}/about` },
                ],
              },
            ],
          }),
        }}
      />

      <section className="bg-gradient-to-r from-blue-950 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="font-serif text-5xl font-bold mb-4">เกี่ยวกับ PhuketSEO</h1>
          <p className="text-xl text-blue-100">
            รับทำ SEO + เว็บไซต์ภูเก็ต สำหรับธุรกิจไทยท้องถิ่น — ติด Google, เว็บเร็ว, พร้อม AI Search
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-blue-950 mb-6">เราทำอะไร</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            PhuketSEO โฟกัสบริการที่ส่งมอบได้จริงและเห็นผลเร็ว: <strong>SEO ภูเก็ต</strong>,{" "}
            <strong>เว็บไซต์ที่ Google ชอบ</strong>, และ <strong>โครงสร้าง AEO/GEO</strong> ให้โผล่ AI Overview
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            เราใช้ framework <strong>Phuket Visibility Stack™</strong> — Lite (Maps + รีวิว) → Pro (เว็บ + SEO + AI) →
            Pro Max (+ Ads) ออกแบบมาสำหรับร้านอาหาร สปา อสังหาริมทรัพย์ และ SME ในภูเก็ต
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-blue-950 mb-6">ส่งมอบอะไร เมื่อไหร่</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {deliveryTimeline.map((item) => (
              <div key={item.period} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <div className="flex items-center gap-2 text-indigo-600 font-bold mb-2">
                  <Clock size={18} />
                  {item.period}
                </div>
                <h3 className="font-semibold text-blue-950 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 bg-indigo-50 rounded-2xl p-8 border border-indigo-100">
          <h2 className="font-serif text-2xl font-bold text-blue-950 mb-4">ทำไมไม่รับจัดการ Ads/Social แบบเต็มรูปแบบ?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Google Ads และ Social Media เป็นเทคนิคการตลาดที่สำคัญ — เราแนะนำและสอนลูกค้าในแพ็กเกจ SEO (เช่น ขอรีวิว,
            GBP posts) แต่การจัดการแคมเปญ Ads และโพสต์ Social รายวันต้องการทีม specialist
          </p>
          <p className="text-gray-700 leading-relaxed">
            แพ็กเกจ <strong>SEO Pro Max</strong> รวม Google + Meta Ads management สำหรับลูกค้าที่ต้องการ lead เร็ว
            แต่บริการหลักที่เราเชี่ยวชาญคือ <strong>SEO + เว็บไซต์</strong> ที่ลูกค้าเห็นผลยั่งยืน
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/services/google-ads" className="text-sm text-blue-700 hover:underline">
              ดูบริการ Google Ads (เสริม)
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/services/social-media" className="text-sm text-blue-700 hover:underline">
              ดูบริการ Social Media (เสริม)
            </Link>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-blue-950 mb-6">ค่านิยม</h2>
          <div className="space-y-4">
            {[
              { icon: Target, title: "โฟกัสชัด", desc: "ทำเฉพาะ SEO + เว็บ + AI Search — ไม่กระจายไปทุกอย่าง" },
              { icon: CheckCircle, title: "ส่งมอบได้จริง", desc: "ทุกแพ็กมี deliverables ชัด ไม่ over-promise" },
              { icon: Clock, title: "เห็นผลเร็ว", desc: "Audit 7 วัน, GBP impression 30–60 วัน, traffic 3–6 เดือน" },
            ].map((v) => (
              <div key={v.title} className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0">
                  <v.icon size={20} className="text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-950">{v.title}</h3>
                  <p className="text-gray-600 text-sm">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center bg-green-500 text-white rounded-2xl p-10">
          <h2 className="text-2xl font-serif font-bold mb-3">พร้อมเริ่มต้น?</h2>
          <p className="mb-6 text-green-100">ขอคำปรึกษาฟรี หรือขอ SEO Audit ไม่มีค่าใช้จ่าย</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-green-600 font-bold px-8 py-3 rounded-xl hover:shadow-lg">
              ติดต่อเรา
            </Link>
            <Link href="/seo-audit" className="border-2 border-white text-white font-bold px-8 py-3 rounded-xl hover:bg-white/10">
              ขอ SEO Audit ฟรี
            </Link>
            <Link href="/pricing" className="border-2 border-white/60 text-white font-bold px-8 py-3 rounded-xl hover:bg-white/10">
              ดูราคา
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
