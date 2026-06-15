import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/utils";
import { pricingPackages } from "@/lib/pricing-packages";
import { geoCoordinatesSchema, organizationSameAs, postalAddressSchema } from "@/lib/schema";
import { siteImages } from "@/lib/images";
import {
  Star, CheckCircle,
  ArrowRight, Phone, MessageCircle, Award, Users, BarChart3,
  Globe, ChevronDown, Quote, Zap, Shield, Target, Clock, TrendingUp
} from "lucide-react";

export const metadata: Metadata = {
  title: "PhuketSEO | รับทำ SEO + เว็บไซต์ภูเก็ต ติด Google พร้อม AI Search",
  description:
    "รับทำ SEO และเว็บไซต์ภูเก็ต สำหรับธุรกิจไทยในภูเก็ต ติด Google Maps, เว็บเร็ว, พร้อม AEO/GEO และ AI Overview เริ่มต้น ฿5,900/เดือน ปรึกษาฟรี!",
  alternates: { canonical: siteConfig.url },
};

// ─── Schema Markup ────────────────────────────────────────────────────────────
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  description: "รับทำ SEO + เว็บไซต์ภูเก็ต สำหรับธุรกิจไทยท้องถิ่น ติด Google Maps และ AI Search",
  url: siteConfig.url,
  telephone: siteConfig.phoneInternational,
  email: siteConfig.email,
  address: postalAddressSchema,
  geo: geoCoordinatesSchema,
  openingHours: "Mo-Fr 09:00-18:00",
  priceRange: "฿฿",
  sameAs: organizationSameAs,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "SEO ภูเก็ต ใช้เวลานานแค่ไหนถึงจะเห็นผล?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "โดยทั่วไปจะเริ่มเห็นผลลัพธ์ที่ชัดเจนภายใน 3-6 เดือน ขึ้นอยู่กับความสามารถในการแข่งขันของ Keyword และสภาพเว็บไซต์เดิม บางคีย์เวิร์ดที่มีการแข่งขันต่ำอาจเห็นผลเร็วกว่านั้น",
      },
    },
    {
      "@type": "Question",
      name: "ค่าบริการ SEO ภูเก็ต เริ่มต้นที่เท่าไหร่?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "แพ็กเกจ SEO Lite เริ่มต้น 5,900 บาท/เดือน (GBP + Social Proof) SEO Pro 8,900 บาท/เดือน (เว็บ + SEO + AEO/GEO) และ SEO Pro Max 15,000 บาท/เดือน (รวม Ads)",
      },
    },
    {
      "@type": "Question",
      name: "PhuketSEO ให้บริการธุรกิจประเภทไหนบ้าง?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "เราให้บริการธุรกิจหลากหลายประเภทในภูเก็ต ได้แก่ โรงแรมและรีสอร์ท, อสังหาริมทรัพย์, ร้านอาหาร, คลินิกและสปา, ทัวร์และกิจกรรม, และธุรกิจท้องถิ่นทั่วไป",
      },
    },
    {
      "@type": "Question",
      name: "SEO ต่างจาก Google Ads อย่างไร?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SEO คือการปรับแต่งเว็บไซต์เพื่อให้ติดอันดับบน Google แบบ Organic (ไม่เสียค่าต่อคลิก) ผลลัพธ์ยั่งยืนแต่ใช้เวลา ส่วน Google Ads คือการซื้อโฆษณาที่ให้ผลทันทีแต่ต้องเสียค่าใช้จ่ายตลอดเวลา",
      },
    },
    {
      "@type": "Question",
      name: "มีรายงานผลให้ดูไหม?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ใช่ครับ เราส่งรายงานรายเดือนที่ครอบคลุม Keyword Rankings, Organic Traffic, Backlinks ที่ได้รับ และ Conversion Rate พร้อมคำแนะนำสำหรับเดือนถัดไป",
      },
    },
  ],
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const services = [
  {
    iconImage: siteImages.icons.seo,
    title: "SEO ภูเก็ต",
    desc: "ติด Google Maps และ Organic Search ด้วย Local SEO, On-page และ AEO/GEO structure",
    result: "เริ่มต้น ฿5,900/เดือน",
    href: "/services/seo-phuket",
    color: "bg-blue-50 text-blue-700",
  },
  {
    iconImage: siteImages.icons.webDesign,
    title: "ทำเว็บไซต์ + SEO",
    desc: "เว็บเร็ว mobile-first พร้อม SEO และ AI Search structure ตั้งแต่วัน launch",
    result: "Setup จาก ฿29,900",
    href: "/services/web-design",
    color: "bg-green-50 text-green-700",
  },
];

const industries = [
  { name: "โรงแรม & รีสอร์ท", icon: "🏨", desc: "Direct Booking ลด OTA commission", href: "/industries/seo-hotels-phuket" },
  { name: "อสังหาริมทรัพย์", icon: "🏢", desc: "ดึง Leads ผู้ซื้อและผู้เช่าคุณภาพสูง", href: "/industries/seo-real-estate-phuket" },
  { name: "ร้านอาหาร & บาร์", icon: "🍽️", desc: "SEO + Maps สำหรับร้านอาหารภูเก็ต", href: "/industries/seo-restaurants-phuket" },
  { name: "คลินิก & สปา", icon: "💆", desc: "Direct Booking ไม่พึ่ง OTA", href: "/industries/seo-spa-phuket" },
  { name: "ทัวร์ & กิจกรรม", icon: "🤿", desc: "เพิ่มการจองทัวร์และกิจกรรมในภูเก็ต", href: "/services/seo-phuket" },
  { name: "ร้านค้าปลีก", icon: "🛍️", desc: "เพิ่มยอดขายออนไลน์และหน้าร้าน", href: "/services/seo-phuket" },
];

const metrics = [
  { value: "฿5,900", label: "เริ่มต้น/เดือน", icon: Users },
  { value: "7 วัน", label: "ส่ง SEO Audit", icon: TrendingUp },
  { value: "3 แพ็ก", label: "Lite / Pro / Max", icon: Star },
  { value: "AI Ready", label: "AEO + GEO", icon: Award },
];

const whyUs = [
  { icon: Target, title: "โฟกัสธุรกิจไทยในภูเก็ต", desc: "เข้าใจตลาดท้องถิ่น ร้านอาหาร สปา อสังหาฯ และ SME ในแต่ละย่าน" },
  { icon: BarChart3, title: "ผลลัพธ์วัดได้จริง", desc: "รายงาน KPI รายเดือน — ranking, traffic, GBP views และ conversion" },
  { icon: Shield, title: "ไม่มีสัญญาผูกมัด", desc: "เชื่อมั่นในผลงาน ยกเลิกได้ทุกเดือน แนะนำขั้นต่ำ 3 เดือนเพื่อเห็นผล" },
  { icon: Clock, title: "ส่งมอบเร็ว", desc: "SEO Audit ภายใน 7 วัน GBP setup ภายใน 14 วัน เห็น impression ใน 30–60 วัน" },
  { icon: Zap, title: "SEO + เว็บ + AI Search", desc: "Phuket Visibility Stack — ติด Google, เว็บเร็ว, พร้อม AI Overview" },
  { icon: Globe, title: "Ads เป็นเทคนิคเสริม", desc: "แพ็ก Pro Max รวม Ads แต่บริการหลักคือ SEO + เว็บที่ส่งมอบได้จริง" },
];

const caseStudies = [
  {
    slug: "phuketseo-website-rebuild",
    client: "PhuketSEO.com",
    industry: "SEO Agency",
    challenge: "เว็บเดิม positioning กระจาย ไม่ชัดว่าขายอะไร และยังไม่มีโครงสร้าง AEO/GEO",
    result: "3 แพ็กราคาชัด · 11+ หน้า SEO-ready · FAQ + llms.txt · Phase 1 live 2 สัปดาห์",
    duration: "Phase 1–2 (2026)",
    services: ["Next.js", "SEO", "AEO/GEO"],
    image: siteImages.services.webDesign,
  },
];

const testimonials = [
  {
    name: "คุณสมชาย วงศ์ทอง",
    role: "เจ้าของ Patong Beach Resort",
    text: "ทีม PhuketSEO ช่วยให้การจองโดยตรงเพิ่มขึ้น 3 เท่าใน 6 เดือน ประหยัดค่า Commission OTA ได้มหาศาล คุ้มค่ามากครับ",
    rating: 5,
  },
  {
    name: "คุณนิภา รัตนชัย",
    role: "ผู้บริหาร Phuket Property Co.",
    text: "จากที่ไม่มีตัวตนออนไลน์เลย ตอนนี้ติดอันดับ 1 ใน Google สำหรับคีย์เวิร์ดหลักทุกตัว Leads เข้ามาทุกวัน",
    rating: 5,
  },
  {
    name: "คุณอาหมัด ซาลิม",
    role: "เจ้าของ Kata Seafood Restaurant",
    text: "ลูกค้าเพิ่มขึ้นชัดเจนมาก โดยเฉพาะนักท่องเที่ยวต่างชาติที่ค้นหาร้านอาหารใน Google Maps ทีมงานดูแลดีมาก",
    rating: 5,
  },
];

const pricing = pricingPackages.map((pkg) => ({
  name: pkg.name,
  price: pkg.priceLabel,
  desc: pkg.desc,
  features: pkg.features.slice(0, 5),
  cta: pkg.cta,
  popular: pkg.popular,
}));

const faqs = [
  {
    q: "SEO ภูเก็ต ใช้เวลานานแค่ไหนถึงจะเห็นผล?",
    a: "โดยทั่วไปจะเริ่มเห็นผลลัพธ์ที่ชัดเจนภายใน 3-6 เดือน ขึ้นอยู่กับความสามารถในการแข่งขันของ Keyword และสภาพเว็บไซต์เดิม บางคีย์เวิร์ดที่มีการแข่งขันต่ำอาจเห็นผลเร็วกว่านั้น",
  },
  {
    q: "ค่าบริการ SEO ภูเก็ต เริ่มต้นที่เท่าไหร่?",
    a: "แพ็กเกจ SEO Lite เริ่ม 5,900 บาท/เดือน SEO Pro 8,900 บาท/เดือน และ SEO Pro Max 15,000 บาท/เดือน ดูรายละเอียดที่หน้าราคา",
  },
  {
    q: "PhuketSEO ให้บริการธุรกิจประเภทไหนบ้าง?",
    a: "เราให้บริการธุรกิจหลากหลายประเภท ได้แก่ โรงแรมและรีสอร์ท, อสังหาริมทรัพย์, ร้านอาหาร, คลินิกและสปา, ทัวร์และกิจกรรม และธุรกิจท้องถิ่นทั่วไปในภูเก็ต",
  },
  {
    q: "SEO ต่างจาก Google Ads อย่างไร?",
    a: "SEO คือการปรับแต่งเว็บไซต์เพื่อให้ติดอันดับแบบ Organic ไม่เสียค่าต่อคลิก ผลลัพธ์ยั่งยืนแต่ใช้เวลา ส่วน Google Ads คือการซื้อโฆษณาที่ให้ผลทันทีแต่ต้องเสียค่าใช้จ่ายตลอด",
  },
  {
    q: "มีรายงานผลให้ดูไหม?",
    a: "ใช่ครับ เราส่งรายงานรายเดือนที่ครอบคลุม Keyword Rankings, Organic Traffic, Backlinks และ Conversion Rate พร้อมคำแนะนำสำหรับเดือนถัดไป",
  },
];

// ─── Page Component ───────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── 1. HERO ── */}
      <section className="relative min-h-screen hero-gradient flex items-center overflow-hidden">
        <Image
          src={siteImages.hero.home.src}
          alt=""
          fill
          className="object-cover opacity-[0.07] pointer-events-none"
          priority
          sizes="100vw"
          aria-hidden
        />
        {/* Soft blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-36 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 text-indigo-600 text-sm font-medium px-4 py-2 rounded-full mb-8">
              <Zap size={13} />
              Phuket Visibility Stack™
            </div>
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 font-serif leading-[1.1] mb-6">
              รับทำ SEO +
              <br />
              <span className="text-gradient">เว็บไซต์ภูเก็ต</span>
              <br />
              ติด Google & AI Search
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-lg">
              ช่วยธุรกิจไทยในภูเก็ต ติด Google Maps มีเว็บเร็วที่ Google ชอบ และพร้อมโผล่ AI Overview
              เริ่มต้น ฿5,900/เดือน ไม่มีสัญญาผูกมัด
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <Link href="/contact" className="btn-pill text-base px-8 py-4">
                ปรึกษาฟรี 30 นาที <ArrowRight size={17} />
              </Link>
              <Link href="#services" className="btn-pill-ghost text-base px-8 py-4">
                ดูบริการของเรา <ChevronDown size={17} />
              </Link>
            </div>
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-1.5">
                <Star size={15} className="text-yellow-400 fill-yellow-400" />
                <span>SEO Lite จาก ฿5,900</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users size={15} className="text-indigo-400" />
                <span>Audit ภายใน 7 วัน</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award size={15} className="text-indigo-400" />
                <span>AEO + GEO Ready</span>
              </div>
            </div>
          </div>

          {/* Right - Stats Cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {[
              { label: "แพ็ก SEO Pro", value: "฿8,900", sub: "เว็บ + SEO + AEO/GEO", color: "bg-indigo-600", light: false },
              { label: "SEO Audit", value: "7 วัน", sub: "ส่งมอบหลังเริ่มงาน", color: "bg-white border border-slate-100 shadow-sm", light: true },
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

      {/* ── 2. SERVICES ── */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-indigo-500 font-semibold text-sm uppercase tracking-wider mb-2">บริการของเรา</div>
            <h2 className="text-4xl font-bold text-slate-900 font-serif mb-4">
              บริการหลักของเรา
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              โฟกัส SEO + เว็บไซต์ที่ส่งมอบได้จริง สำหรับธุรกิจไทยในภูเก็ต
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-12 h-12 ${s.color} rounded-xl flex items-center justify-center mb-4 overflow-hidden`}>
                  <Image
                    src={s.iconImage.src}
                    alt={s.iconImage.alt}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-bold text-blue-950 text-lg mb-2 font-serif">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{s.desc}</p>
                <div className="text-xs font-semibold text-green-600 bg-green-50 px-3 py-1.5 rounded-full inline-block">
                  ✓ {s.result}
                </div>
                <div className="flex items-center gap-1 text-blue-600 text-sm font-medium mt-4 group-hover:gap-2 transition-all">
                  ดูรายละเอียด <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
          <p className="text-center mt-8 text-sm text-slate-500">
            <Link href="/services/ai-search-visibility" className="text-indigo-600 font-medium hover:underline">
              AI Search Visibility (AEO/GEO)
            </Link>
            {" · "}
            <Link href="/methodology/phuket-visibility-stack" className="text-indigo-600 font-medium hover:underline">
              Phuket Visibility Stack™
            </Link>
            {" · "}
            <Link href="/blog" className="text-indigo-600 font-medium hover:underline">
              บทความ SEO
            </Link>
          </p>
        </div>
      </section>
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((m) => (
              <div key={m.label} className="text-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <m.icon size={22} className="text-indigo-600" />
                </div>
                <div className="text-4xl font-bold text-slate-900 font-serif mb-1">{m.value}</div>
                <div className="text-slate-500 text-sm">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. INDUSTRIES ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-indigo-500 font-semibold text-sm uppercase tracking-wider mb-2">อุตสาหกรรม</div>
            <h2 className="text-4xl font-bold text-slate-900 font-serif mb-4">
              เชี่ยวชาญทุกประเภทธุรกิจในภูเก็ต
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              เราเข้าใจความต้องการเฉพาะของแต่ละอุตสาหกรรม พร้อมกลยุทธ์ที่ออกแบบมาเพื่อธุรกิจของคุณโดยเฉพาะ
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {industries.map((ind) => (
              <Link
                key={ind.name}
                href={ind.href}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="text-3xl mb-3">{ind.icon}</div>
                <h3 className="font-bold text-blue-950 mb-1.5 group-hover:text-blue-700 transition-colors">{ind.name}</h3>
                <p className="text-gray-500 text-sm">{ind.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CASE STUDIES ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-indigo-500 font-semibold text-sm uppercase tracking-wider mb-2">ผลงาน</div>
            <h2 className="text-4xl font-bold text-slate-900 font-serif mb-4">
              ผลลัพธ์จริงจากลูกค้าของเรา
            </h2>
          </div>
          <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
            {caseStudies.map((cs) => (
              <Link
                key={cs.client}
                href={`/case-studies/${cs.slug}`}
                className="relative bg-gradient-to-br from-indigo-600 to-violet-700 rounded-2xl p-8 text-white overflow-hidden block hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <Image
                  src={cs.image.src}
                  alt=""
                  fill
                  className="object-cover opacity-20 pointer-events-none"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  aria-hidden
                />
                <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold font-serif mb-1">{cs.client}</h3>
                    <span className="text-indigo-200 text-sm">{cs.industry}</span>
                  </div>
                  <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full border border-white/20">
                    {cs.duration}
                  </span>
                </div>
                <div className="mb-4">
                  <div className="text-indigo-200 text-xs uppercase tracking-wider mb-1">ปัญหาที่พบ</div>
                  <p className="text-white/80 text-sm">{cs.challenge}</p>
                </div>
                <div className="mb-6">
                  <div className="text-indigo-200 text-xs uppercase tracking-wider mb-1">ผลลัพธ์ที่ได้</div>
                  <p className="text-green-300 font-semibold">{cs.result}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cs.services.map((sv) => (
                    <span key={sv} className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">
                      {sv}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 mt-4 text-green-300 text-sm font-semibold group-hover:gap-3 transition-all">
                  อ่าน case study <ArrowRight size={14} />
                </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/case-studies" className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:gap-3 transition-all">
              ดูผลงานทั้งหมด <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 6. WHY US ── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-indigo-500 font-semibold text-sm uppercase tracking-wider mb-2">ทำไมต้องเลือกเรา</div>
            <h2 className="text-4xl font-bold text-slate-900 font-serif mb-4">
              6 เหตุผลที่ธุรกิจในภูเก็ตเลือก PhuketSEO
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((w) => (
              <div key={w.title} className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg hover:border-indigo-100 transition-all duration-300">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-4">
                  <w.icon size={22} className="text-indigo-600" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2 font-serif">{w.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. PRICING ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-indigo-500 font-semibold text-sm uppercase tracking-wider mb-2">ราคา</div>
            <h2 className="text-4xl font-bold text-slate-900 font-serif mb-4">
              Phuket Visibility Stack™
            </h2>
            <p className="text-slate-500">แพ็กเกจ SEO Lite / Pro / Pro Max — ไม่มีค่าใช้จ่ายซ่อนเร้น</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricing.map((p) => (
              <div
                key={p.name}
                className={`rounded-2xl p-8 border-2 relative ${
                  p.popular
                    ? "border-indigo-500 bg-gradient-to-br from-indigo-600 to-violet-700 text-white shadow-2xl shadow-indigo-200 scale-105"
                    : "border-slate-100 bg-white"
                }`}
              >
                {p.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                    ยอดนิยม
                  </div>
                )}
                <h3 className={`text-xl font-bold font-serif mb-1 ${p.popular ? "text-white" : "text-blue-950"}`}>
                  {p.name}
                </h3>
                <p className={`text-sm mb-4 ${p.popular ? "text-blue-300" : "text-gray-500"}`}>{p.desc}</p>
                <div className="mb-6">
                  <span className={`text-4xl font-bold font-serif ${p.popular ? "text-white" : "text-blue-950"}`}>
                    ฿{p.price}
                  </span>
                  <span className={`text-sm ml-1 ${p.popular ? "text-blue-300" : "text-gray-500"}`}>/เดือน</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle size={16} className={`mt-0.5 shrink-0 ${p.popular ? "text-green-400" : "text-green-500"}`} />
                      <span className={p.popular ? "text-blue-100" : "text-gray-700"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block w-full text-center font-semibold py-3 rounded-xl transition-all duration-200 ${
                    p.popular
                      ? "bg-green-500 hover:bg-green-600 text-white"
                      : "border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white"
                  }`}
                >
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            ดูรายละเอียดแพ็กเกจครบที่{" "}
            <Link href="/pricing" className="text-blue-700 font-semibold hover:underline">
              หน้าราคา
            </Link>
            {" · "}
            ต้องการแพ็กเกจพิเศษ?{" "}
            <Link href="/contact" className="text-blue-700 font-semibold hover:underline">
              ติดต่อเราเพื่อรับใบเสนอราคา
            </Link>
          </p>
        </div>
      </section>

      {/* ── 8. TESTIMONIALS ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-indigo-500 font-semibold text-sm uppercase tracking-wider mb-2">รีวิวลูกค้า</div>
            <h2 className="text-4xl font-bold text-slate-900 font-serif mb-4">
              ลูกค้าพูดถึงเราอย่างไร
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
                <Quote size={28} className="text-blue-200 mb-4" />
                <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-sm">
                    {t.name.charAt(2)}
                  </div>
                  <div>
                    <div className="font-semibold text-blue-950 text-sm">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.role}</div>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. FAQ ── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-indigo-500 font-semibold text-sm uppercase tracking-wider mb-2">FAQ</div>
            <h2 className="text-4xl font-bold text-slate-900 font-serif mb-4">
              คำถามที่พบบ่อย
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-gray-50 rounded-xl border border-gray-100 overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-4 font-semibold text-blue-950 hover:bg-blue-50 transition-colors list-none">
                  {faq.q}
                  <ChevronDown size={18} className="text-gray-400 group-open:rotate-180 transition-transform shrink-0 ml-3" />
                </summary>
                <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. FINAL CTA ── */}
      <section className="py-24 relative overflow-hidden hero-gradient">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-100/60 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 text-indigo-600 text-sm font-medium px-4 py-2 rounded-full mb-8">
            <Zap size={13} /> พร้อมให้คำปรึกษาทุกวัน
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 font-serif mb-5">
            พร้อมเพิ่มยอดขาย
            <br />
            <span className="text-gradient">ให้ธุรกิจคุณแล้วหรือยัง?</span>
          </h2>
          <p className="text-slate-500 text-lg mb-10 max-w-xl mx-auto">
            ปรึกษาฟรี 30 นาที ไม่มีข้อผูกมัด เราจะวิเคราะห์เว็บไซต์และแนะนำกลยุทธ์ที่เหมาะกับธุรกิจของคุณ
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-pill text-base px-9 py-4">
              <Phone size={17} /> ปรึกษาฟรี
            </Link>
            <a
              href={`https://line.me/ti/p/${siteConfig.line}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill-ghost text-base px-9 py-4"
            >
              <MessageCircle size={17} /> LINE: {siteConfig.line}
            </a>
          </div>
          <div className="flex justify-center flex-wrap gap-6 mt-10 text-sm text-slate-400">
            <div className="flex items-center gap-1.5"><CheckCircle size={14} className="text-green-500" /> ไม่มีค่าใช้จ่าย</div>
            <div className="flex items-center gap-1.5"><CheckCircle size={14} className="text-green-500" /> ไม่มีข้อผูกมัด</div>
            <div className="flex items-center gap-1.5"><CheckCircle size={14} className="text-green-500" /> ตอบภายใน 1 ชั่วโมง</div>
          </div>
        </div>
      </section>
    </>
  );
}
