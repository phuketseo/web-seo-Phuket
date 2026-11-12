import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Star, MessageSquare, Database, Check } from "lucide-react";
import { siteConfig, defaultOgImage } from "@/lib/utils";
import {
  areaServedThailand,
  faqSchema,
  localServiceProvider,
} from "@/lib/schema";
import { siteImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "แพ็ก Local SEO | ติด Google Maps เริ่ม ฿5,900/เดือน - PhuketSEO",
  description:
    "แพ็ก Local SEO จาก PhuketSEO — ดูแล Google Business Profile รีวิว NAP และรายงาน Maps เริ่ม SEO Lite ฿5,900/เดือน ไม่มีสัญญาผูกมัด",
  alternates: { canonical: `${siteConfig.url}/local-seo-package` },
  keywords: [
    "แพ็ก Local SEO",
    "ราคา Local SEO",
    "รับทำ Local SEO",
    "SEO Lite",
    "Google Maps SEO",
  ],
  openGraph: {
    title: "แพ็ก Local SEO | เริ่ม ฿5,900/เดือน - PhuketSEO",
    description:
      "ดูแล Google Business Profile รีวิว NAP และรายงาน Maps — SEO Lite ฿5,900/เดือน",
    url: `${siteConfig.url}/local-seo-package`,
    type: "website",
    images: [defaultOgImage],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "แพ็ก Local SEO",
  provider: localServiceProvider,
  description:
    "แพ็ก Local SEO จาก PhuketSEO ดูแล Google Business Profile รีวิว NAP และรายงานผลบน Google Maps เริ่ม ฿5,900/เดือน",
  areaServed: areaServedThailand,
  serviceType: "Local SEO",
  url: `${siteConfig.url}/local-seo-package`,
  offers: {
    "@type": "Offer",
    priceCurrency: "THB",
    price: "5900",
    url: `${siteConfig.url}/packages/seo-lite`,
  },
};

const faqs = [
  {
    q: "แพ็ก Local SEO คืออะไร?",
    a: "แพ็ก Local SEO คือแพ็กดูแลให้ธุรกิจโผล่ Google Maps เมื่อลูกค้าค้นหาในโซน ครอบคลุม GBP รีวิว NAP และรายงานรายเดือน เริ่ม SEO Lite ฿5,900/เดือน",
  },
  {
    q: "แพ็ก Local SEO เริ่มยังไง?",
    a: "นัดคุยเป้าหมายและโซน จากนั้น audit GBP กับคู่แข่ง แล้ววางแผนรีวิว NAP และรายงานในรอบแรก",
  },
  {
    q: "ใช้เวลานานแค่ไหนถึงเห็นผล?",
    a: "โดยทั่วไปเริ่มเห็นสัญญาณบน Maps ใน 1–3 เดือน ขึ้นกับรีวิวเดิม คู่แข่งในโซน และความสม่ำเสมอของข้อมูลร้าน",
  },
  {
    q: "ราคาแพ็ก Local SEO เท่าไหร่?",
    a: "SEO Lite ฿5,900/เดือน เน้น Maps และ GBP SEO Pro ฿8,900 รวมเว็บกับ SEO และ Pro Max ฿15,000 รวม Ads ไม่มีสัญญาผูกมัด",
  },
  {
    q: "ทำ Local SEO เองได้ไหม?",
    a: "อัปเดต GBP และขอรีวิวเองได้ แต่การวิเคราะห์คู่แข่งดูแล NAP และรายงานต่อเนื่องมักใช้เวลา จึงมีแพ็กดูแลรายเดือน",
  },
  {
    q: "Local SEO กับ Google Ads ต่างกันยังไง?",
    a: "Local SEO สร้างการมองเห็นจากการค้นหาปกติโดยไม่จ่ายต่อคลิก Google Ads เร่ง lead ได้เร็วเมื่อมีงบ",
  },
  {
    q: "ทำ SEO แล้วหยุดได้มั้ย?",
    a: "หยุดได้ทุกเดือนเพราะไม่มีสัญญาผูกมัด แต่เมื่อหยุดดูแล สัญญาณบน Maps มักอ่อนลงเมื่อคู่แข่งยังทำต่อ",
  },
];

const faqSchemaJson = faqSchema(faqs.map((f) => ({ question: f.q, answer: f.a })));

const supportItems = [
  {
    title: "Google Business Profile",
    desc: "ตั้งหมวดหมู่ โซนบริการ รูป และ NAP ให้ตรงหน้าร้านจริง",
    icon: "/images/lp/biccas/check.svg",
  },
  {
    title: "รีวิว + Social proof",
    desc: "วางระบบขอรีวิวและตอบรีวิวอย่างสม่ำเสมอในโซน",
    icon: "/images/lp/biccas/check-alt.svg",
  },
  {
    title: "รายงาน Maps รายเดือน",
    desc: "สรุปการแสดงผล การค้นหา การโทร และสิ่งที่ปรับต่อ",
    icon: "/images/lp/biccas/bar-chart.svg",
  },
];

const featureCards = [
  {
    title: "ติด Google Maps",
    desc: "ทำให้ลูกค้าในโซนเจอหน้าร้านเมื่อค้นหาใกล้ฉันหรือชื่อบริการ",
  },
  {
    title: "ดูแล GBP ต่อเนื่อง",
    desc: "อัปเดตรูป โพสต์ หมวดหมู่ และข้อมูลร้านให้ตรงกันทุกเดือน",
  },
  {
    title: "วัดผลจาก Maps",
    desc: "รายงาน impressions การค้นหา และการโทร ไม่ใช่แค่คีย์บนเว็บ",
  },
];

const benefits = [
  "Audit GBP และคู่แข่งในโซนก่อนวางแผน",
  "จัดข้อมูลชื่อ ที่อยู่ เบอร์โทร (NAP) ให้ตรงกัน",
  "กลยุทธ์รีวิวและตอบทุกรายการ",
  "อัปเดตรูป โพสต์ และหมวดหมู่ให้ตรงธุรกิจ",
  "รายงานยอดแสดงผลบน Maps รายเดือน",
];

const plans = [
  {
    name: "ปรึกษาฟรี",
    price: "0",
    blurb: "ประเมินโซนและหน้าร้านก่อนเลือกแพ็ก",
    features: ["คุยเป้าหมายและโซน", "แนะนำแพ็กที่เหมาะ", "ไม่มีค่าใช้จ่าย", "ไม่ผูกมัด", "ตอบภายใน 24 ชม."],
    cta: "นัดคุยฟรี",
    href: "/contact",
    featured: false,
  },
  {
    name: "SEO Lite",
    price: "5,900",
    blurb: "แพ็ก Local SEO หลัก — เน้น Google Maps และ GBP",
    badge: "แนะนำสำหรับ Local SEO",
    features: [
      "Audit GBP + คู่แข่งในโซน",
      "รีวิว + NAP",
      "อัปเดตรูปและโพสต์",
      "รายงาน Maps รายเดือน",
      "ไม่มีสัญญาผูกมัด",
    ],
    cta: "เลือก SEO Lite",
    href: "/packages/seo-lite",
    featured: true,
  },
  {
    name: "SEO Pro",
    price: "8,900",
    blurb: "Maps คู่กับเว็บ SEO และโครงสร้าง AEO/GEO",
    features: [
      "ทุกอย่างใน Lite",
      "On-page + Technical",
      "เนื้อหาตาม intent",
      "AEO/GEO structure",
      "รายงานรวมรายเดือน",
    ],
    cta: "ดู SEO Pro",
    href: "/packages/seo-pro",
    featured: false,
  },
];

const logos = ["Google Maps", "GBP", "รีวิว", "NAP", "Search Console"];

/** Unified LP scale — one rhythm for the whole page */
const shell = "relative mx-auto w-full max-w-[1056px] px-5";
const sectionY = "py-12 sm:py-14";
const h1 =
  "text-[1.65rem] font-bold leading-[1.15] tracking-[-0.02em] text-[#191a15] sm:text-[2rem] lg:text-[2.35rem]";
const h2 =
  "text-xl font-bold leading-snug tracking-tight text-[#191a15] sm:text-[1.35rem] lg:text-[1.5rem]";
const lead = "text-sm leading-relaxed text-slate-600 sm:text-[15px]";
const card = "rounded-2xl border border-slate-100 bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.04)]";
const btnPrimary =
  "inline-flex h-11 items-center justify-center rounded-full bg-indigo-500 px-6 text-sm font-semibold text-white transition hover:bg-indigo-600";
const btnSecondary =
  "inline-flex h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-sm font-semibold text-[#191a15] transition hover:bg-slate-50";

export default function LocalSeoPackageLandingPage() {
  return (
    <div className="relative overflow-hidden bg-white text-[#191a15]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaJson) }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-32 size-[420px] rounded-full bg-indigo-200/35 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-24 size-[420px] rounded-full bg-violet-200/30 blur-3xl"
      />

      {/* HERO — offset fixed header + breathing room like Biccas */}
      <section className={`${shell} pb-12 sm:pb-14 pt-[calc(var(--site-header-height)+1.75rem)] sm:pt-[calc(var(--site-header-height)+2.25rem)]`}>
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="relative z-10 max-w-md lg:pt-2">
            <h1 className={h1}>
              แพ็ก Local SEO
              <br />
              ให้ลูกค้าเจอ
              <br />
              บน Google Maps
            </h1>
            <div className="mt-2 mb-4 w-full max-w-[260px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/lp/biccas/underline.svg" alt="" className="h-3.5 w-full sm:h-4" />
            </div>
            <p className={`${lead} mb-6 text-slate-700`}>
              ดูแล Google Business Profile รีวิว NAP และรายงานผลรายเดือน เริ่ม SEO Lite ฿5,900/เดือน
              ไม่มีสัญญาผูกมัด
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/contact" className={btnPrimary}>
                ขอคำปรึกษาฟรี
              </Link>
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#191a15] transition hover:text-indigo-600"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/lp/biccas/play.svg" alt="" className="size-7" />
                ดูแพ็กและราคา
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[440px] lg:mx-0 lg:justify-self-end">
            <div className="absolute left-4 top-[38%] z-20 hidden size-8 -rotate-[15deg] rounded-lg bg-[#4535af] sm:block" />
            <div className="absolute -right-1 top-4 z-20 flex size-9 rotate-[15deg] items-center justify-center rounded-lg bg-[#fbc75e] shadow-md">
              <Database className="size-4 text-white" />
            </div>
            <div className="absolute bottom-6 right-4 z-20 flex size-8 rotate-[15deg] items-center justify-center rounded-lg bg-[#ffaa94] shadow-md sm:right-0">
              <MessageSquare className="size-3.5 text-white" />
            </div>

            <div className="absolute left-0 top-4 z-20 w-[180px] rounded-xl bg-white p-3 shadow-lg sm:-left-3 sm:w-[200px]">
              <p className="text-[11px] text-[#a9a7b6]">แพ็กเริ่มต้น</p>
              <div className="mt-1 flex items-center justify-between gap-2">
                <p className="text-sm font-semibold text-black">฿5,900</p>
                <span className="rounded-full bg-indigo-500 px-2.5 py-0.5 text-[11px] font-medium text-white">
                  /เดือน
                </span>
              </div>
            </div>

            <div className="relative ml-auto mt-8 h-[300px] w-[82%] overflow-hidden rounded-xl bg-indigo-500 sm:h-[340px] sm:w-[300px]">
              <Image
                src={siteImages.services.localSeo.src}
                alt="แพ็ก Local SEO — ตัวอย่างงานติด Google Maps จาก PhuketSEO"
                width={siteImages.services.localSeo.width}
                height={siteImages.services.localSeo.height}
                className="absolute inset-0 h-full w-full object-cover"
                priority
              />
            </div>

            <div className="absolute bottom-8 left-3 z-20 w-[120px] rounded-xl bg-white p-2.5 shadow-lg sm:left-10">
              <p className="text-[11px] text-[#a9a7b6]">เห็นผลโดยประมาณ</p>
              <div className="mt-0.5 flex items-end justify-between">
                <p className="text-sm font-semibold text-black">1–3 ด.</p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/lp/biccas/bar-chart.svg" alt="" className="size-4" />
              </div>
            </div>

            <div className="absolute -right-1 bottom-24 z-20 hidden w-[120px] rotate-[12deg] overflow-hidden rounded-xl bg-[#161c28] p-2.5 text-white shadow-xl sm:block">
              <p className="text-[10px] text-[#e6e6e6]">โฟกัสหลัก</p>
              <p className="mt-1 text-xs font-semibold">Google Maps</p>
              <p className="mt-1.5 text-[10px] text-[#f8f8fa]">GBP · รีวิว · NAP</p>
            </div>
          </div>
        </div>
      </section>

      {/* LOGO STRIP */}
      <section className="relative border-y border-slate-100 bg-slate-50/60 py-8">
        <div className={`${shell} text-center`}>
          <p className="mb-4 text-xs font-medium text-slate-500 sm:text-sm">
            เครื่องมือที่แพ็ก Local SEO โฟกัสจริง
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {logos.map((name) => (
              <span key={name} className="text-sm font-semibold tracking-tight text-slate-400 sm:text-base">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT */}
      <section className={`${shell} ${sectionY}`}>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 lg:items-start">
          <div>
            <h2 className={`${h2} max-w-sm`}>เราซัพพอร์ตธุรกิจที่ต้องการลูกค้าจาก Maps</h2>
            <p className={`${lead} mt-3 max-w-md`}>
              แพ็ก Local SEO จาก PhuketSEO ดูแล GBP รีวิว NAP และรายงานต่อเนื่อง ไม่ใช่ตั้งค่าครั้งเดียวแล้วจบ
            </p>
            <div className="mt-6 flex flex-wrap gap-6">
              <div>
                <div className="mb-1.5 flex gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3 fill-current" />
                  ))}
                </div>
                <p className="text-lg font-bold tabular-nums">฿5,900</p>
                <p className="text-xs text-slate-500">เริ่มต้น / เดือน</p>
              </div>
              <div>
                <div className="mb-1.5 flex gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3 fill-current" />
                  ))}
                </div>
                <p className="text-lg font-bold tabular-nums">0</p>
                <p className="text-xs text-slate-500">สัญญาผูกมัด</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            {supportItems.map((item) => (
              <div key={item.title} className={`${card} flex gap-3 p-4`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.icon} alt="" className="mt-0.5 size-6 shrink-0" />
                <div>
                  <h3 className="text-sm font-semibold text-[#191a15]">{item.title}</h3>
                  <p className="mt-0.5 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className={`${shell} ${sectionY}`}>
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className={`${h2} max-w-xs`}>สิ่งที่คุณได้จากแพ็ก Local SEO</h2>
          <Link href="/contact" className={`${btnPrimary} shrink-0 self-start sm:self-auto`}>
            เริ่มต้นเลย
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {featureCards.map((item) => (
            <div key={item.title} className={`${card} bg-[#f8f9ff] p-5`}>
              <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-white shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/lp/biccas/check.svg" alt="" className="size-5" />
              </div>
              <h3 className="text-base font-semibold text-[#191a15]">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className={`${shell} ${sectionY}`}>
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className={`${h2} max-w-xs`}>ทำไมธุรกิจเลือกแพ็ก Local SEO</h2>
            <ul className="mt-6 space-y-3">
              {benefits.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/lp/biccas/check.svg" alt="" className="mt-0.5 size-5 shrink-0" />
                  <span className="text-sm font-medium leading-snug text-[#191a15]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={siteImages.blog.localSeoMaps.src}
                alt="แพ็ก Local SEO — ตัวอย่างงาน Google Maps และ GBP"
                width={siteImages.blog.localSeoMaps.width}
                height={siteImages.blog.localSeoMaps.height}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="absolute -left-1 top-5 rounded-xl bg-white px-3 py-2 shadow-lg sm:-left-3">
              <p className="text-[11px] text-[#a9a7b6]">สถานะงาน</p>
              <p className="text-xs font-semibold text-[#191a15]">GBP พร้อมดูแลรายเดือน</p>
            </div>
            <div className="absolute -bottom-3 right-3 rounded-xl bg-white px-3 py-2 shadow-lg sm:right-5">
              <p className="text-[11px] text-[#a9a7b6]">แพ็กแนะนำ</p>
              <p className="text-xs font-semibold text-[#191a15]">SEO Lite ฿5,900</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING — same width/card scale as features */}
      <section id="pricing" className="relative bg-[#f9fafb]">
        <div className={`${shell} ${sectionY}`}>
          <h2 className={`${h2} mx-auto max-w-md text-center`}>เลือกแพ็กที่เหมาะกับงบของคุณ</h2>
          <p className={`${lead} mx-auto mt-2 max-w-md text-center`}>
            ค่าแพ็กชัดเจน ไม่ผูกสัญญา — เริ่มจาก Local SEO หรือขยายเป็น Pro ได้
          </p>

          <div className="mx-auto mt-6 flex w-fit items-center gap-1 rounded-full bg-white p-1 shadow-[0px_4px_9px_rgba(0,0,0,0.05)]">
            <span className="rounded-full bg-indigo-500 px-4 py-1.5 text-xs font-semibold text-white">
              จ่ายรายเดือน
            </span>
            <span className="rounded-full px-4 py-1.5 text-xs font-medium text-slate-500">ไม่มีสัญญาผูกมัด</span>
          </div>

          <div className="mt-8 grid items-stretch gap-4 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={
                  plan.featured
                    ? "relative flex flex-col overflow-hidden rounded-2xl bg-indigo-500 p-4 text-white shadow-lg md:-mt-1"
                    : `${card} flex flex-col p-4`
                }
              >
                <p className={`text-center text-base font-semibold ${plan.featured ? "text-white" : "text-[#191a15]"}`}>
                  {plan.name}
                </p>
                <p
                  className={`mx-auto mt-1.5 max-w-[180px] text-center text-xs leading-snug ${plan.featured ? "text-indigo-100" : "text-slate-500"}`}
                >
                  {plan.blurb}
                </p>
                <p className="mt-4 flex items-start justify-center gap-0.5">
                  <span className={`mt-1 text-sm font-medium ${plan.featured ? "text-white" : "text-slate-400"}`}>
                    ฿
                  </span>
                  <span
                    className={`text-[1.75rem] font-semibold leading-none tabular-nums ${plan.featured ? "text-white" : "text-[#191a15]"}`}
                  >
                    {plan.price}
                  </span>
                </p>
                {plan.badge && (
                  <div className="mx-auto mt-2.5 rounded-lg bg-indigo-400 px-2.5 py-1 text-[10px] font-semibold text-white">
                    {plan.badge}
                  </div>
                )}

                <div
                  className={`mt-4 flex flex-1 flex-col rounded-xl p-3.5 ${plan.featured ? "bg-white" : "bg-[#f9fafb]"}`}
                >
                  <ul className="space-y-2.5">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/images/lp/biccas/check.svg" alt="" className="mt-0.5 size-4 shrink-0" />
                        <span className="text-xs font-medium leading-snug text-[#191a15] sm:text-[13px]">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={plan.href}
                    className={
                      plan.featured
                        ? "mt-4 inline-flex h-10 w-full items-center justify-center rounded-full bg-indigo-500 text-sm font-semibold text-white transition hover:bg-indigo-600"
                        : "mt-4 inline-flex h-10 w-full items-center justify-center rounded-full bg-white text-sm font-semibold text-indigo-500 shadow-[0px_2px_8px_rgba(0,0,0,0.06)] transition hover:bg-indigo-50"
                    }
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-xs text-slate-500 sm:text-sm">
            รายละเอียดบริการเต็มๆ:{" "}
            <Link href="/services/local-seo" className="font-medium text-indigo-600 hover:underline">
              รับทำ Local SEO
            </Link>
            {" · "}
            <Link href="/pricing" className="font-medium text-indigo-600 hover:underline">
              ตารางราคา
            </Link>
          </p>
        </div>
      </section>

      {/* CTA BAND */}
      <section className={`${shell} ${sectionY}`}>
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl bg-[#161c28] p-6 text-white sm:p-7">
            <p className="text-base font-semibold leading-snug sm:text-lg">
              “แพ็ก Local SEO เหมาะกับธุรกิจที่ลูกค้าค้นหาในโซนก่อนโทรหรือเดินเข้าหน้าร้าน”
            </p>
            <p className="mt-5 text-sm font-medium">PhuketSEO</p>
            <p className="text-xs text-slate-400">Local SEO package · เริ่ม ฿5,900/เดือน</p>
            <div className="mt-5 flex -space-x-2">
              {["ร้านอาหาร", "คลินิก", "หลายสาขา"].map((label) => (
                <span
                  key={label}
                  className="inline-flex size-9 items-center justify-center rounded-full border-2 border-[#161c28] bg-indigo-500 text-[9px] font-semibold"
                  title={label}
                >
                  {label.slice(0, 2)}
                </span>
              ))}
            </div>
          </div>

          <div className={`${card} p-6 sm:p-7`}>
            <h2 className="text-base font-semibold text-[#191a15] sm:text-lg">พร้อมเริ่มแพ็ก Local SEO?</h2>
            <p className="mt-1.5 text-sm text-slate-500">ขอคำปรึกษาฟรี หรือทำ SEO Audit ก่อนตัดสินใจ</p>
            <div className="mt-5 space-y-2.5">
              <Link href="/contact" className={`${btnPrimary} w-full`}>
                ขอคำปรึกษาฟรี
              </Link>
              <Link href="/seo-audit" className={`${btnSecondary} w-full`}>
                SEO Audit ฟรี
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`${shell} pb-16 pt-2 sm:pb-20`}>
        <h2 className={`${h2} mb-5 text-center`}>คำถามที่พบบ่อย</h2>
        <div className="mx-auto max-w-2xl space-y-2.5">
          {faqs.map((faq) => (
            <details key={faq.q} className={`group ${card}`}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3.5 text-sm font-semibold text-[#191a15]">
                {faq.q}
                <Check className="size-3.5 shrink-0 text-indigo-500 opacity-40 group-open:opacity-100" />
              </summary>
              <div className="border-t border-slate-100 px-4 py-3 text-sm leading-relaxed text-slate-600">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
