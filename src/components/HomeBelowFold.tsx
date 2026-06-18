import Link from "next/link";
import Image from "next/image";
import { lineContactUrl, siteConfig, businessHours } from "@/lib/utils";
import { pricingPackages, planContactHref } from "@/lib/pricing-packages";
import { responseTimeCopy } from "@/lib/response-times";
import { organizationSameAs, postalAddressSchema } from "@/lib/schema";
import { siteImages } from "@/lib/images";
import { caseStudies } from "@/lib/case-studies-data";
import {
  Star, CheckCircle,
  ArrowRight, Phone, MessageCircle, Award, Users, BarChart3,
  Globe, ChevronDown, Quote, Zap, Shield, Target, Clock, TrendingUp
} from "lucide-react";

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
  openingHours: businessHours.schemaOpeningHours,
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
        text: "แพ็ก Lite เริ่มต้น 5,900 บาท/เดือน (GBP + Social Proof) แพ็ก Pro 8,900 บาท/เดือน (เว็บ + การมองเห็นบน Google + AEO/GEO) และ Pro Max 15,000 บาท/เดือน (รวม Ads)",
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
    linkLabel: "ดูบริการ SEO ภูเก็ต",
    color: "bg-blue-50 text-blue-700",
  },
  {
    iconImage: siteImages.icons.webDesign,
    title: "ทำเว็บไซต์ + SEO",
    desc: "เว็บเร็ว mobile-first พร้อม SEO และ AI Search structure ตั้งแต่วัน launch",
    result: "Setup จาก ฿29,900",
    href: "/services/web-design",
    linkLabel: "ดูบริการทำเว็บไซต์ + SEO",
    color: "bg-green-50 text-green-700",
  },
];

const industries = [
  { name: "โรงแรม & รีสอร์ท", icon: "🏨", desc: "Direct Booking ลด OTA commission", href: "/industries/seo-hotels-phuket" },
  { name: "อสังหาริมทรัพย์", icon: "🏢", desc: "ดึง Leads ผู้ซื้อและผู้เช่าคุณภาพสูง", href: "/industries/seo-real-estate-phuket" },
  { name: "ร้านอาหาร & บาร์", icon: "🍽️", desc: "ติด Google Maps สำหรับร้านอาหารภูเก็ต", href: "/industries/seo-restaurants-phuket" },
  { name: "คลินิก & สปา", icon: "💆", desc: "Direct Booking ไม่พึ่ง OTA", href: "/industries/seo-spa-phuket" },
  { name: "ทัวร์ & กิจกรรม", icon: "🤿", desc: "เพิ่มการจองทัวร์และกิจกรรมในภูเก็ต", href: "/services/seo-phuket" },
  { name: "ร้านค้าปลีก", icon: "🛍️", desc: "เพิ่มยอดขายออนไลน์และหน้าร้าน", href: "/services/seo-phuket" },
];

const metrics = [
  { value: "฿5,900", label: "เริ่มต้น/เดือน", icon: Users },
  { value: "7 วัน", label: "ส่ง Audit รายงาน", icon: TrendingUp },
  { value: "3 แพ็ก", label: "Lite / Pro / Max", icon: Star },
  { value: "AI Ready", label: "AEO + GEO", icon: Award },
];

const whyUs = [
  { icon: Target, title: "โฟกัสธุรกิจไทยในภูเก็ต", desc: "เข้าใจตลาดท้องถิ่น ร้านอาหาร สปา อสังหาฯ และ SME ในแต่ละย่าน" },
  { icon: BarChart3, title: "ผลลัพธ์วัดได้จริง", desc: "รายงาน KPI รายเดือน — ranking, traffic, GBP views และ conversion" },
  { icon: Shield, title: "ไม่มีสัญญาผูกมัด", desc: "เชื่อมั่นในผลงาน ยกเลิกได้ทุกเดือน แนะนำขั้นต่ำ 3 เดือนเพื่อเห็นผล" },
  { icon: Clock, title: "ส่งมอบเร็ว", desc: "Audit รายงานภายใน 7 วัน GBP setup ภายใน 14 วัน เห็น impression ใน 30–60 วัน" },
  { icon: Zap, title: "เว็บ + การมองเห็นบน Google", desc: "Phuket Visibility Stack — ติด Google, เว็บเร็ว, พร้อม AI Overview" },
  { icon: Globe, title: "Ads เป็นเทคนิคเสริม", desc: "แพ็ก Pro Max รวม Ads แต่บริการหลักคือการมองเห็นบน Google + เว็บที่ส่งมอบได้จริง" },
];

const testimonials = [
  {
    role: "โรงแรม",
    text: "ทีมช่วยวางแผน Direct Booking และการมองเห็นบน Google ให้ชัดขึ้น ลดการพึ่ง OTA ลงได้ในระยะยาว",
  },
  {
    role: "คลินิก",
    text: "จากที่แทบไม่มีตัวตนออนไลน์ ตอนนี้ลูกค้าเจอเราบน Google Maps มากขึ้น และมีคนติดต่อเข้ามาสม่ำเสมอ",
  },
  {
    role: "ร้านอาหาร",
    text: "ลูกค้าใหม่เพิ่มขึ้น โดยเฉพาะนักท่องเที่ยวที่ค้นหาร้านอาหารใน Google Maps มีการดูแลและอธิบายผลให้เข้าใจ",
  },
];

const pricing = pricingPackages.map((pkg) => ({
  id: pkg.id,
  name: pkg.name,
  price: pkg.priceLabel,
  desc: pkg.desc,
  features: pkg.features.slice(0, 5),
  cta: pkg.cta,
  popular: pkg.popular,
  badge: pkg.badge,
}));

const faqs = [
  {
    q: "SEO ภูเก็ต ใช้เวลานานแค่ไหนถึงจะเห็นผล?",
    a: "โดยทั่วไปจะเริ่มเห็นผลลัพธ์ที่ชัดเจนภายใน 3-6 เดือน ขึ้นอยู่กับความสามารถในการแข่งขันของ Keyword และสภาพเว็บไซต์เดิม บางคีย์เวิร์ดที่มีการแข่งขันต่ำอาจเห็นผลเร็วกว่านั้น",
  },
  {
    q: "ค่าบริการ SEO ภูเก็ต เริ่มต้นที่เท่าไหร่?",
    a: "แพ็ก Lite เริ่มต้น 5,900 บาท/เดือน แพ็ก Pro 8,900 บาท/เดือน และ Pro Max 15,000 บาท/เดือน — ดูราคาแพ็ก SEO ภูเก็ต",
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
export default function HomeBelowFold() {
  return (
    <>
      {/* ── 2. SERVICES ── */}
      <section id="services" className="py-20 bg-white below-fold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-indigo-500 font-semibold text-sm uppercase tracking-wider mb-2">บริการของเรา</div>
            <h2 className="text-4xl font-bold text-slate-900 font-serif mb-4">
              บริการหลักของเรา
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              โฟกัสการมองเห็นบน Google + เว็บไซต์ที่ส่งมอบได้จริง สำหรับธุรกิจไทยในภูเก็ต
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
                    sizes="48px"
                    className="object-contain w-12 h-12"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
                <h3 className="font-bold text-blue-950 text-lg mb-2 font-serif">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{s.desc}</p>
                <div className="text-xs font-semibold text-green-600 bg-green-50 px-3 py-1.5 rounded-full inline-block">
                  ✓ {s.result}
                </div>
                <div className="flex items-center gap-1 text-blue-600 text-sm font-medium mt-4 group-hover:gap-2 transition-all">
                  {s.linkLabel} <ArrowRight size={14} />
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
      <section className="py-16 bg-slate-50 border-y border-slate-100 below-fold">
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
      <section className="py-20 bg-gray-50 below-fold">
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
      <section className="py-20 bg-white below-fold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-indigo-500 font-semibold text-sm uppercase tracking-wider mb-2">ผลงาน</div>
            <h2 className="text-4xl font-bold text-slate-900 font-serif mb-4">
              เริ่มจากเว็บของเราเอง
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Case study แรกคือ PhuketSEO.com — แสดงวิธีที่เราทำ SEO + AEO/GEO บนเว็บจริง ก่อนขยายไปลูกค้าธุรกิจในภูเก็ต
            </p>
          </div>
          <div className="grid md:grid-cols-1 gap-8 max-w-3xl mx-auto">
            {caseStudies.map((cs) => (
              <Link
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                className="relative bg-gradient-to-br from-indigo-600 to-violet-700 rounded-2xl p-8 text-white overflow-hidden block hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="absolute inset-0 pointer-events-none" aria-hidden>
                  <div className="absolute -right-20 -bottom-20 w-72 h-72 rounded-full bg-white/[0.06]" />
                  <div className="absolute right-12 top-10 w-40 h-40 rounded-full bg-white/[0.04]" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      {cs.isOwnProject && (
                        <span className="inline-block bg-white/15 text-indigo-100 text-xs px-3 py-1 rounded-full border border-white/20 mb-3">
                          Case study · เว็บ agency
                        </span>
                      )}
                      <h3 className="text-xl font-bold font-serif mb-1">{cs.client}</h3>
                      <span className="text-indigo-200 text-sm">{cs.industry}</span>
                    </div>
                    <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full border border-white/20 shrink-0">
                      {cs.duration}
                    </span>
                  </div>

                  <div className="mb-5">
                    <div className="text-indigo-200 text-xs uppercase tracking-wider mb-1">ปัญหาที่พบ</div>
                    <p className="text-white/90 text-sm leading-relaxed max-w-2xl">{cs.challenge}</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-6 max-w-2xl">
                    <div>
                      <div className="text-indigo-200 text-xs uppercase tracking-wider mb-2">สิ่งที่ส่งมอบ</div>
                      <ul className="space-y-1.5">
                        {cs.deliverables.map((item) => (
                          <li key={item.label} className="text-sm text-white/90">
                            <span className="font-semibold text-white">{item.metric}</span>
                            <span className="text-indigo-100"> · {item.label}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-indigo-200 text-xs uppercase tracking-wider mb-2">สัญญาณที่วัดได้</div>
                      <ul className="space-y-1.5">
                        {cs.outcomes.map((item) => (
                          <li key={item.label} className="text-sm text-white/90">
                            <span className="font-semibold text-white">{item.metric}</span>
                            <span className="text-indigo-100"> · {item.label}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cs.services.map((sv) => (
                      <span key={sv} className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">
                        {sv}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 mt-4 text-white text-sm font-semibold group-hover:gap-3 transition-all">
                    ดู case study เว็บ agency <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          {caseStudies.length > 1 && (
            <div className="text-center mt-8">
              <Link href="/case-studies" className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:gap-3 transition-all">
                ดู case studies ทั้งหมด <ArrowRight size={16} />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ── 6. WHY US ── */}
      <section className="py-20 bg-slate-50 below-fold">
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
      <section className="py-20 bg-white below-fold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-indigo-500 font-semibold text-sm uppercase tracking-wider mb-2">ราคา</div>
            <h2 className="text-4xl font-bold text-slate-900 font-serif mb-4">
              Phuket Visibility Stack™
            </h2>
            <p className="text-slate-500">แพ็ก Lite / Pro / Pro Max — ไม่มีค่าใช้จ่ายซ่อนเร้น</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricing.map((p) => (
              <div
                key={p.name}
                className={`rounded-2xl p-8 border-2 relative ${
                  p.popular
                    ? "border-indigo-500 bg-gradient-to-br from-indigo-600 to-violet-700 text-white shadow-2xl shadow-indigo-200 scale-105"
                    : p.id === "lite"
                      ? "border-green-400 bg-green-50/50 ring-2 ring-green-400/30"
                      : "border-slate-100 bg-white"
                }`}
              >
                {p.badge && !p.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                    {p.badge}
                  </div>
                )}
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
                  href={planContactHref(p.id)}
                  className={`block w-full text-center font-semibold py-3 rounded-xl transition-all duration-200 ${
                    p.popular
                      ? "bg-green-500 hover:bg-green-600 text-white"
                      : p.id === "lite"
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
            <Link href="/pricing" className="text-blue-700 font-semibold hover:underline">
              ดูราคาแพ็ก SEO ภูเก็ต
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
      <section className="py-20 bg-gray-50 below-fold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-indigo-500 font-semibold text-sm uppercase tracking-wider mb-2">ประสบการณ์จากลูกค้า</div>
            <h2 className="text-4xl font-bold text-slate-900 font-serif mb-4">
              ลูกค้าพูดถึงเราอย่างไร
            </h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">
              ตัวอย่างจากลูกค้าจริง — ไม่แสดงชื่อเพื่อความเป็นส่วนตัว · ไม่ใช่คะแนนรีวิวจาก Google
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.role} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
                <Quote size={28} className="text-blue-200 mb-4" />
                <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-sm">
                    {t.role.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-blue-950 text-sm">{t.role}</div>
                    <div className="text-gray-500 text-xs">ประเภทธุรกิจ</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-sm text-slate-500">
            <a
              href={siteConfig.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 font-medium hover:underline"
            >
              เขียนรีวิวบน Google
            </a>
            {" · "}
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 font-medium hover:underline"
            >
              Facebook
            </a>
          </p>
        </div>
      </section>

      {/* ── 9. FAQ ── */}
      <section className="py-20 bg-white below-fold">
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
      <section className="py-24 relative overflow-hidden hero-gradient below-fold">
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
              href={lineContactUrl()}
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
            <div className="flex items-center gap-1.5"><CheckCircle size={14} className="text-green-500" /> {responseTimeCopy.contactReply}</div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
