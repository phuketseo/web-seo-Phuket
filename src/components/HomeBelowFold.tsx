import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { siteImages, type SiteImage } from "@/lib/images";
import { caseStudies } from "@/lib/case-studies-data";
import { pricingPackages, planContactHref } from "@/lib/pricing-packages";
import { GradientButton } from "@/components/GradientButton";

const services: {
  num: string;
  title: string;
  desc: string;
  meta: string;
  href: string;
  iconImage?: SiteImage;
}[] = [
  {
    num: "01",
    iconImage: siteImages.icons.seo,
    title: "SEO ภูเก็ต",
    desc: "Local SEO, On-page และ AEO/GEO — ติด Google Maps และ Organic Search",
    meta: "จาก ฿5,900/เดือน",
    href: "/services/seo-phuket",
  },
  {
    num: "02",
    iconImage: siteImages.icons.webDesign,
    title: "ทำเว็บไซต์ + SEO",
    desc: "เว็บเร็ว mobile-first พร้อม structure สำหรับ Google และ AI Search",
    meta: "Setup จาก ฿29,900",
    href: "/services/web-design",
  },
  {
    num: "03",
    title: "AI Search Visibility",
    desc: "AEO/GEO ให้ธุรกิจโผล่ AI Overview และ answer engines",
    meta: "รวมในแพ็ก Pro",
    href: "/services/ai-search-visibility",
  },
];

const whyUs = [
  {
    title: "โฟกัสธุรกิจไทยในภูเก็ต",
    desc: "เข้าใจตลาดท้องถิ่น — ร้านอาหาร สปา อสังหาฯ SME ในแต่ละย่าน",
  },
  {
    title: "ผลลัพธ์วัดได้จริง",
    desc: "รายงาน KPI รายเดือน: ranking, traffic, GBP views, conversion",
  },
  {
    title: "ไม่มีสัญญาผูกมัด",
    desc: "ยกเลิกได้ทุกเดือน — แนะนำขั้นต่ำ 3 เดือนเพื่อเห็นผล",
  },
];

const faqs = [
  {
    q: "SEO ภูเก็ต ใช้เวลานานแค่ไหนถึงจะเห็นผล?",
    a: "โดยทั่วไปจะเริ่มเห็นผลลัพธ์ที่ชัดเจนภายใน 3–6 เดือน ขึ้นอยู่กับความแข่งขันของ keyword และสภาพเว็บเดิม บางคีย์เวิร์ดอาจเห็นผลเร็วกว่า",
  },
  {
    q: "ค่าบริการ SEO ภูเก็ต เริ่มต้นที่เท่าไหร่?",
    a: "แพ็ก Lite เริ่ม 5,900 บาท/เดือน แพ็ก Pro 8,900 บาท/เดือน และ Pro Max 15,000 บาท/เดือน — ค่ายิงแอดแยกจากค่าจัดการ",
  },
  {
    q: "PhuketSEO ให้บริการธุรกิจประเภทไหนบ้าง?",
    a: "โรงแรม รีสอร์ท อสังหาริมทรัพย์ ร้านอาหาร คลินิก สปา ทัวร์ และ SME ท้องถิ่นในภูเก็ต",
  },
  {
    q: "SEO ต่างจาก Google Ads อย่างไร?",
    a: "SEO คือการติดอันดับ Organic ไม่เสียค่าต่อคลิก ผลยั่งยืนแต่ใช้เวลา Google Ads ให้ผลทันทีแต่ต้องจ่ายตลอด",
  },
  {
    q: "มีรายงานผลให้ดูไหม?",
    a: "ส่งรายงานรายเดือน — keyword rankings, organic traffic, GBP views และ conversion พร้อมคำแนะนำเดือนถัดไป",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function HomeBelowFold() {
  const cs = caseStudies[0];
  const pricing = pricingPackages.map((pkg) => ({
    id: pkg.id,
    name: pkg.name,
    price: pkg.priceLabel,
    tagline: pkg.tagline,
    features: pkg.features.slice(0, 5),
    cta: pkg.cta,
    popular: pkg.popular,
    adsNote: pkg.id === "lite" ? "ค่ายิงแอด GBP/Maps แยกจากค่าจัดการ" : undefined,
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section id="services" className="section-padding bg-slate-50 scroll-mt-28">
        <div className="container-custom max-w-4xl">
          <div className="mb-10 sm:mb-12 max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
              บริการหลัก
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              การมองเห็นบน Google + เว็บไซต์ที่ส่งมอบได้จริง สำหรับธุรกิจไทยในภูเก็ต
            </p>
          </div>

          <ul className="divide-y divide-slate-200 border-y border-slate-200 bg-white rounded-lg overflow-hidden">
            {services.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="group relative z-10 flex gap-4 sm:gap-8 p-5 sm:p-8 hover:bg-slate-50/80 transition-colors duration-150"
                >
                  <span className="text-xs font-medium text-slate-300 tabular-nums pt-1 shrink-0 w-6">
                    {s.num}
                  </span>
                  {s.iconImage && (
                    <div className="hidden sm:flex w-10 h-10 shrink-0 items-center justify-center opacity-80">
                      <Image
                        src={s.iconImage.src}
                        alt=""
                        width={40}
                        height={40}
                        sizes="40px"
                        className="object-contain"
                        aria-hidden
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1.5">
                      <h3 className="text-base sm:text-lg font-semibold text-slate-900 group-hover:text-violet-600 transition-colors">
                        {s.title}
                      </h3>
                      <span className="text-xs text-slate-400 shrink-0">{s.meta}</span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                  </div>
                  <ArrowRight
                    size={18}
                    className="hidden sm:block shrink-0 text-slate-300 group-hover:text-violet-500 group-hover:translate-x-0.5 transition-all mt-1"
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
                ทำไมธุรกิจในภูเก็ตเลือกเรา
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm">
                ไม่ขายฝัน — วัดผลได้ รายงานชัด ยกเลิกได้เมื่อไหร่ก็ได้
              </p>
            </div>
            <ol className="space-y-8">
              {whyUs.map((w, i) => (
                <li key={w.title} className="flex gap-4 sm:gap-5">
                  <span className="text-sm font-semibold text-gradient-brand tabular-nums shrink-0 pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1.5">{w.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{w.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {cs && (
        <section className="section-padding bg-slate-50 border-t border-slate-200">
          <div className="container-custom max-w-4xl">
            <div className="mb-8 sm:mb-10">
              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-slate-400 mb-3">
                ผลงาน
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                เริ่มจากเว็บของเราเอง
              </h2>
            </div>

            <article className="bg-white rounded-lg border border-slate-200 p-6 sm:p-10">
              <div className="flex flex-wrap items-center gap-2 mb-4 text-xs text-slate-500">
                <span>{cs.industry}</span>
                <span aria-hidden>·</span>
                <span>{cs.duration}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
                {cs.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 max-w-2xl">
                {cs.challenge}
              </p>
              {cs.quote && (
                <blockquote className="border-l-2 border-violet-300 pl-4 mb-8 text-sm text-slate-600 italic max-w-2xl">
                  &ldquo;{cs.quote}&rdquo;
                </blockquote>
              )}

              <div className="grid sm:grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-slate-400 mb-3">
                    สิ่งที่ส่งมอบ
                  </p>
                  <ul className="space-y-2">
                    {cs.deliverables.map((d) => (
                      <li key={d.label} className="text-sm text-slate-700">
                        <span className="font-semibold text-slate-900 tabular-nums">{d.metric}</span>
                        <span className="text-slate-500"> · {d.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-slate-400 mb-3">
                    สัญญาณที่วัดได้
                  </p>
                  <ul className="space-y-2">
                    {cs.outcomes.map((o) => (
                      <li key={o.label} className="text-sm text-slate-700">
                        <span className="font-semibold text-slate-900">{o.metric}</span>
                        <span className="text-slate-500"> · {o.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link
                href={`/case-studies/${cs.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-600 hover:text-violet-700 transition-colors"
              >
                อ่าน case study เต็ม
                <ArrowRight size={14} />
              </Link>
            </article>
          </div>
        </section>
      )}

      <section className="section-padding bg-white border-t border-slate-200">
        <div className="container-custom max-w-4xl">
          <div className="mb-10 sm:mb-12 max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
              แพ็กราคา
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Lite / Pro / Pro Max — ไม่มีค่าใช้จ่ายซ่อนเร้น
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {pricing.map((p) => (
              <div
                key={p.name}
                className={`flex flex-col rounded-lg border bg-white p-6 ${
                  p.popular
                    ? "border-violet-500 ring-1 ring-violet-500 shadow-sm"
                    : "border-slate-200"
                }`}
              >
                {p.popular && (
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-gradient-brand mb-3">
                    แนะนำ
                  </p>
                )}
                <h3 className="text-base font-semibold text-slate-900">{p.name}</h3>
                <p className="text-xs text-slate-500 mt-1 mb-4">{p.tagline}</p>
                <div className="mb-1">
                  <span
                    className={`text-3xl font-bold tabular-nums tracking-tight ${
                      p.popular ? "text-gradient-brand" : "text-slate-900"
                    }`}
                  >
                    ฿{p.price}
                  </span>
                  <span className="text-sm text-slate-400 ml-1">/เดือน</span>
                </div>
                {p.adsNote && (
                  <p className="text-[11px] text-slate-400 mb-4 leading-relaxed">{p.adsNote}</p>
                )}
                {!p.adsNote && <div className="mb-4" />}
                <ul className="space-y-2.5 mb-8 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                      <Check size={14} className="shrink-0 mt-0.5 text-slate-400" strokeWidth={2.5} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={planContactHref(p.id)}
                  className={
                    p.popular
                      ? "btn-gradient-brand relative z-10 block w-full text-center text-sm py-2.5"
                      : "relative z-10 block w-full text-center text-sm font-medium py-2.5 rounded-lg border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-colors duration-150"
                  }
                >
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-slate-500">
            <Link href="/pricing" className="text-violet-600 hover:underline underline-offset-2">
              ดูรายละเอียดแพ็กทั้งหมด
            </Link>
          </p>
        </div>
      </section>

      <section className="section-padding bg-slate-50 border-t border-slate-200">
        <div className="container-custom max-w-3xl">
          <div className="mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
              คำถามที่พบบ่อย
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              สรุปสั้นๆ ก่อนติดต่อ — ถามเพิ่มได้ตลอด
            </p>
          </div>

          <div className="divide-y divide-slate-200 border-y border-slate-200 bg-white rounded-lg">
            {faqs.map((f) => (
              <details key={f.q} className="group px-5 sm:px-6 py-1">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-sm sm:text-base font-medium text-slate-900 hover:text-violet-700 transition-colors [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <ChevronDown
                    size={18}
                    className="shrink-0 text-slate-400 transition-transform group-open:rotate-180"
                    aria-hidden
                  />
                </summary>
                <p className="pb-4 text-sm text-slate-600 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-white border-t border-slate-200">
        <div className="container-custom max-w-2xl text-center px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4">
            วิเคราะห์ธุรกิจของคุณก่อนเริ่ม
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
            ขอคำปรึกษาฟรี ไม่มีค่าใช้จ่าย ไม่มีสัญญาผูกมัด — เราจะดูโซน คู่แข่ง และแพ็กที่เหมาะก่อน
          </p>
          <GradientButton href="/contact" className="px-7">
            ขอคำปรึกษาฟรี
          </GradientButton>
        </div>
      </section>
    </>
  );
}
