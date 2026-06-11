import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, ArrowRight, Target, TrendingUp, BarChart3, Zap } from "lucide-react";
import { siteImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "รับทำ Google Ads ภูเก็ต | ยิงแอดตรงกลุ่มเป้าหมาย - PhuketSEO",
  description: "บริการ Google Ads ภูเก็ต ยิงโฆษณาตรงกลุ่มเป้าหมาย ได้ผลลัพธ์ทันที ประหยัดงบประมาณ ROI สูงสุด ปรึกษาฟรี!",
  alternates: { canonical: "https://phuketseo.com/services/google-ads" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "หน้าแรก", item: "https://phuketseo.com" },
    { "@type": "ListItem", position: 2, name: "บริการ", item: "https://phuketseo.com/services" },
    { "@type": "ListItem", position: 3, name: "Google Ads", item: "https://phuketseo.com/services/google-ads" },
  ],
};

const features = [
  { icon: Target, title: "Search Ads", desc: "โฆษณาบน Google Search ตรงกับคนที่กำลังค้นหาสินค้า/บริการของคุณ" },
  { icon: BarChart3, title: "Display Ads", desc: "Banner โฆษณาบนเว็บไซต์พันธมิตร Google เพิ่ม Brand Awareness" },
  { icon: TrendingUp, title: "Shopping Ads", desc: "แสดงสินค้าพร้อมราคาบน Google Shopping เพิ่ม Conversion" },
  { icon: Zap, title: "Remarketing", desc: "ติดตามผู้เยี่ยมชมเว็บไซต์และแสดงโฆษณาซ้ำเพื่อเพิ่ม Conversion" },
];

export default function GoogleAdsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="bg-gray-50 border-b border-gray-100 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-700">หน้าแรก</Link>
            <span>/</span>
            <span className="text-gray-400">บริการ</span>
            <span>/</span>
            <span className="text-blue-700 font-medium">Google Ads</span>
          </nav>
        </div>
      </div>

      <section className="relative bg-gradient-to-br from-blue-950 to-blue-900 py-20 overflow-hidden">
        <Image
          src={siteImages.services.googleAds.src}
          alt=""
          fill
          className="object-cover opacity-20 pointer-events-none"
          priority
          sizes="100vw"
          aria-hidden
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/30 text-green-300 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Target size={14} />
              Google Ads Management
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white font-serif leading-tight mb-4">
              Google Ads ภูเก็ต
              <br />
              <span className="text-green-400">ยิงแอดตรงกลุ่ม</span>
              <br />
              ได้ผลทันที
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed mb-8">
              บริหารจัดการ Google Ads อย่างมืออาชีพ ลด CPC เพิ่ม Conversion
              ให้ทุกบาทที่ลงทุนได้ผลตอบแทนสูงสุด
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl transition-all hover:shadow-xl hover:-translate-y-0.5">
                ปรึกษาฟรี <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { metric: "-40%", label: "ลด CPC เฉลี่ย" },
              { metric: "+300%", label: "เพิ่ม Conversion Rate" },
              { metric: "5x", label: "ROAS เฉลี่ย" },
              { metric: "24hr", label: "เห็นผลลัพธ์แรก" },
            ].map((s) => (
              <div key={s.label} className="bg-blue-800/40 border border-white/10 rounded-2xl p-5 text-center">
                <div className="text-3xl font-bold text-green-400 font-serif mb-1">{s.metric}</div>
                <div className="text-blue-200 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-blue-950 font-serif mb-4">ประเภท Google Ads ที่เราจัดการ</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow text-center">
                <div className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <f.icon size={22} className="text-white" />
                </div>
                <h3 className="font-bold text-blue-950 mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-blue-950 font-serif mb-6">สิ่งที่รวมอยู่ในบริการ</h2>
            <div className="space-y-3">
              {[
                "Campaign Setup & Strategy",
                "Keyword Research & Bidding",
                "Ad Copywriting (A/B Testing)",
                "Landing Page Optimization",
                "Conversion Tracking Setup",
                "Audience Targeting & Remarketing",
                "Budget Management & Optimization",
                "Weekly & Monthly Reporting",
                "Competitor Ad Analysis",
                "Quality Score Improvement",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle size={18} className="text-green-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-blue-950 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold font-serif mb-2">ค่าบริการเริ่มต้น</h3>
            <div className="text-5xl font-bold text-green-400 font-serif mb-1">฿5,900</div>
            <div className="text-blue-300 mb-6">/เดือน (Management Fee)</div>
            <ul className="space-y-2 mb-8 text-sm text-blue-100">
              {["ไม่รวม Ad Spend", "Campaign Setup ฟรี", "รายงานรายสัปดาห์", "Dedicated Account Manager"].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-green-400" /> {f}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="block w-full text-center bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition-colors">
              ปรึกษาฟรี
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white font-serif mb-4">เริ่มต้น Google Ads วันนี้ เห็นผลภายใน 24 ชั่วโมง</h2>
          <p className="text-green-100 mb-6">ปรึกษาฟรี เราจะวิเคราะห์ธุรกิจและแนะนำกลยุทธ์ Google Ads ที่เหมาะสม</p>
          <Link href="/contact" className="inline-block bg-white text-green-600 font-bold px-8 py-3 rounded-xl hover:shadow-lg transition-all">
            ปรึกษาฟรี
          </Link>
        </div>
      </section>
    </>
  );
}
