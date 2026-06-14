import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, ArrowRight, Search, TrendingUp, Star, BarChart3, FileText, Link2, MapPin } from "lucide-react";
import { localBusinessJsonLd, faqSchema } from "@/lib/schema";
import { siteImages } from "@/lib/images";
import { seoPhuketContent } from "@/lib/service-content";
import { ServiceFaqSection } from "@/components/ServiceFaqSection";

export const metadata: Metadata = {
  title: "รับทำ SEO ภูเก็ต | ติดอันดับ Google ได้จริง - PhuketSEO",
  description:
    "บริการ SEO ภูเก็ต ติดอันดับ Google หน้า 1 สำหรับธุรกิจในภูเก็ต โรงแรม อสังหาฯ ร้านอาหาร ผลลัพธ์วัดได้จริง ปรึกษาฟรี!",
  alternates: { canonical: "https://phuketseo.com/services/seo-phuket" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "หน้าแรก", item: "https://phuketseo.com" },
    { "@type": "ListItem", position: 2, name: "บริการของเรา", item: "https://phuketseo.com/services" },
    { "@type": "ListItem", position: 3, name: "SEO ภูเก็ต", item: "https://phuketseo.com/services/seo-phuket" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "บริการ SEO ภูเก็ต",
  provider: localBusinessJsonLd,
  description: "บริการ SEO สำหรับธุรกิจในภูเก็ต ติดอันดับ Google หน้า 1",
  areaServed: { "@type": "City", name: "ภูเก็ต" },
  offers: {
    "@type": "Offer",
    priceCurrency: "THB",
    price: "9900",
    priceSpecification: { "@type": "UnitPriceSpecification", priceCurrency: "THB", price: "9900", unitText: "MONTH" },
  },
};

const faqSchemaJson = faqSchema(seoPhuketContent.faqs);

const seoProcess = [
  { step: "01", title: "วิเคราะห์เว็บไซต์ & คู่แข่ง", desc: "ตรวจสอบสภาพเว็บไซต์ปัจจุบัน วิเคราะห์คู่แข่ง และหา Keyword Opportunities ที่ดีที่สุด", icon: Search },
  { step: "02", title: "วางกลยุทธ์ Keyword", desc: "เลือก Keywords ที่มี Search Volume สูง Competition ต่ำ และตรงกับกลุ่มเป้าหมายของธุรกิจคุณ", icon: BarChart3 },
  { step: "03", title: "On-Page SEO Optimization", desc: "ปรับแต่ง Title Tags, Meta Descriptions, Content, Internal Links, Page Speed และ Technical SEO", icon: FileText },
  { step: "04", title: "Content Marketing", desc: "สร้าง Content คุณภาพสูงที่ตอบคำถามลูกค้า เพิ่ม Authority และดึง Organic Traffic", icon: TrendingUp },
  { step: "05", title: "Link Building", desc: "สร้าง Backlinks คุณภาพสูงจากเว็บไซต์ที่น่าเชื่อถือ เพิ่ม Domain Authority", icon: Link2 },
  { step: "06", title: "Local SEO & Google Business", desc: "Optimize Google Business Profile ให้ติดอันดับใน Google Maps และ Local Pack", icon: MapPin },
];

const results = [
  { metric: "+250%", label: "Organic Traffic เฉลี่ย", period: "ใน 6 เดือน" },
  { metric: "Top 3", label: "Keywords ติดอันดับ", period: "ใน 3-6 เดือน" },
  { metric: "+180%", label: "Leads จาก Organic", period: "ใน 6 เดือน" },
  { metric: "10x", label: "ROI เฉลี่ย", period: "ระยะยาว" },
];

export default function SeoPhuketPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaJson) }} />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-700">หน้าแรก</Link>
            <span>/</span>
            <span className="text-gray-400">บริการ</span>
            <span>/</span>
            <span className="text-blue-700 font-medium">SEO ภูเก็ต</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-950 to-blue-900 py-20 overflow-hidden">
        <Image
          src={siteImages.services.seo.src}
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
              <Search size={14} />
              บริการ SEO ภูเก็ต
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white font-serif leading-tight mb-4">
              รับทำ SEO ภูเก็ต
              <br />
              <span className="text-green-400">ติดอันดับ Google</span>
              <br />
              ได้จริง
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed mb-8">
              บริการ SEO สำหรับธุรกิจในภูเก็ต ด้วยกลยุทธ์ที่พิสูจน์แล้วว่าได้ผล
              ติดอันดับ Google หน้า 1 เพิ่ม Organic Traffic และ Leads คุณภาพสูง
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl transition-all hover:shadow-xl hover:-translate-y-0.5">
                ปรึกษาฟรี <ArrowRight size={16} />
              </Link>
              <Link href="#process" className="inline-flex items-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-xl transition-all">
                ดูขั้นตอนการทำงาน
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-blue-200">
              {["ผลลัพธ์วัดได้จริง", "รายงานรายเดือน", "ไม่มีสัญญาผูกมัด", "Support 7 วัน"].map((b) => (
                <div key={b} className="flex items-center gap-1.5">
                  <CheckCircle size={14} className="text-green-400" />
                  {b}
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {results.map((r) => (
              <div key={r.label} className="bg-blue-800/40 border border-white/10 rounded-2xl p-5 text-center">
                <div className="text-3xl font-bold text-green-400 font-serif mb-1">{r.metric}</div>
                <div className="text-white text-sm font-semibold mb-0.5">{r.label}</div>
                <div className="text-blue-300 text-xs">{r.period}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {seoPhuketContent.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="text-gray-700 text-lg leading-relaxed">
              {paragraph}
            </p>
          ))}
          <p className="text-gray-600 leading-relaxed">
            อ่านเพิ่ม:{" "}
            <Link href="/blog/seo-for-phuket-hotels" className="text-blue-700 hover:underline">
              SEO โรงแรมภูเก็ต
            </Link>
            {" · "}
            <Link href="/blog/google-my-business-phuket" className="text-blue-700 hover:underline">
              Google Business Profile
            </Link>
            {" · "}
            <Link href="/local/patong" className="text-blue-700 hover:underline">
              Local SEO ป่าตอง
            </Link>
          </p>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-green-500 font-semibold text-sm uppercase tracking-wider mb-2">ขั้นตอน</div>
            <h2 className="text-4xl font-bold text-blue-950 font-serif mb-4">กระบวนการทำ SEO ของเรา</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">ขั้นตอนที่พิสูจน์แล้วว่าได้ผล ออกแบบมาเพื่อให้ธุรกิจของคุณติดอันดับและเติบโตอย่างยั่งยืน</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {seoProcess.map((p) => (
              <div key={p.step} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-700 rounded-xl flex items-center justify-center shrink-0">
                    <p.icon size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-blue-500 font-bold mb-1">STEP {p.step}</div>
                    <h3 className="font-bold text-blue-950 mb-2">{p.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-green-500 font-semibold text-sm uppercase tracking-wider mb-2">สิ่งที่รวมอยู่</div>
              <h2 className="text-4xl font-bold text-blue-950 font-serif mb-6">บริการ SEO ที่ครอบคลุมทุกด้าน</h2>
              <div className="space-y-3">
                {[
                  "Keyword Research & Strategy",
                  "On-Page SEO Optimization",
                  "Technical SEO Audit & Fix",
                  "Content Creation & Optimization",
                  "Link Building (White Hat)",
                  "Local SEO & Google Business Profile",
                  "Competitor Analysis",
                  "Monthly Reporting & Analytics",
                  "Core Web Vitals Optimization",
                  "Schema Markup Implementation",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle size={18} className="text-green-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-blue-950 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold font-serif mb-2">เริ่มต้นที่</h3>
              <div className="text-5xl font-bold text-green-400 font-serif mb-1">฿9,900</div>
              <div className="text-blue-300 mb-6">/เดือน (แพ็กเกจ Starter)</div>
              <ul className="space-y-2 mb-8 text-sm text-blue-100">
                {["5 Keywords หลัก", "On-Page SEO", "Google Business Profile", "รายงานรายเดือน"].map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-green-400" /> {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="block w-full text-center bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition-colors">
                ปรึกษาฟรี
              </Link>
              <p className="text-blue-300 text-xs text-center mt-3">ไม่มีสัญญาผูกมัด · ยกเลิกได้ทุกเมื่อ</p>
            </div>
          </div>
        </div>
      </section>

      <ServiceFaqSection faqs={seoPhuketContent.faqs} />

      {/* CTA */}
      <section className="py-16 bg-green-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white font-serif mb-4">พร้อมให้ธุรกิจของคุณติดอันดับ Google แล้วหรือยัง?</h2>
          <p className="text-green-100 mb-6">ปรึกษาฟรี 30 นาที เราจะวิเคราะห์เว็บไซต์และแนะนำกลยุทธ์ SEO ที่เหมาะสม</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-green-600 font-bold px-8 py-3 rounded-xl hover:shadow-lg transition-all">
              ปรึกษาฟรี
            </Link>
            <Link href="/pricing" className="border-2 border-white text-white font-bold px-8 py-3 rounded-xl hover:bg-white/10 transition-all">
              ดูแพ็กเกจราคา
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
