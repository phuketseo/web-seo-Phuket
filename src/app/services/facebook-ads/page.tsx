import type { Metadata } from "next";
import Link from "next/link";
import {
  Target,
  Megaphone,
  BarChart3,
  Share2,
  MessageCircle,
  ImageIcon,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import { siteConfig, defaultOgImage } from "@/lib/utils";
import {
  areaServedThailand,
  buildBreadcrumb,
  faqSchema,
  localServiceProvider,
} from "@/lib/schema";
import { siteImages } from "@/lib/images";
import { facebookAdsNationwideContent } from "@/lib/service-content";
import { ServiceFaqSection } from "@/components/ServiceFaqSection";
import { BrandGradientDefs } from "@/components/BrandGradientDefs";
import { HomeSection, HomeSectionHeader } from "@/components/home/HomeSection";
import { GradientButton } from "@/components/GradientButton";
import { ServiceBreadcrumb } from "@/components/services/ServiceBreadcrumb";
import { ServiceMarketingHero } from "@/components/services/ServiceMarketingHero";

export const metadata: Metadata = {
  title: "รับยิงแอด Facebook | Meta Ads (FB + IG) เริ่ม ฿3,000/เดือน - PhuketSEO",
  description:
    "รับยิงแอด Facebook ทั่วประเทศ — บริหาร Meta Ads บน Facebook และ Instagram ค่าจัดการเริ่ม ฿3,000/เดือน ไม่รวม ad spend ขอคำปรึกษาฟรี",
  alternates: { canonical: `${siteConfig.url}/services/facebook-ads` },
  keywords: [
    "รับยิงแอด facebook",
    "รับยิงแอดโฆษณา facebook",
    "บริการ ยิง แอด facebook",
    "จ้าง ยิง แอด โฆษณา facebook",
    "agency ยิง แอด",
    "meta ยิง แอด",
    "ยิง ads ig",
    "ยิงแอดคอนเวอร์ชั่น",
    "ราคารับยิงแอด facebook",
  ],
  openGraph: {
    title: "รับยิงแอด Facebook | Meta Ads - PhuketSEO",
    description:
      "รับยิงแอด Facebook ทั่วประเทศ — Meta Ads ค่าจัดการเริ่ม ฿3,000/เดือน ไม่รวม ad spend",
    url: `${siteConfig.url}/services/facebook-ads`,
    type: "website",
    images: [defaultOgImage],
  },
};

const breadcrumbSchema = buildBreadcrumb([
  { name: "หน้าแรก", url: siteConfig.url },
  { name: "รับยิงแอด Facebook", url: `${siteConfig.url}/services/facebook-ads` },
]);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "รับยิงแอด Facebook",
  alternateName: [
    "รับยิงแอด facebook",
    "บริการ ยิง แอด facebook",
    "Meta Ads",
    "ยิง ads instagram",
  ],
  provider: localServiceProvider,
  description: facebookAdsNationwideContent.answerBlock,
  areaServed: areaServedThailand,
  serviceType: "Facebook Ads Management",
  url: `${siteConfig.url}/services/facebook-ads`,
  offers: {
    "@type": "Offer",
    priceCurrency: "THB",
    price: "3000",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      priceCurrency: "THB",
      price: "3000",
      unitText: "MONTH",
    },
    url: `${siteConfig.url}/packages/ads-starter`,
  },
};

const faqSchemaJson = faqSchema(
  facebookAdsNationwideContent.faqs.map((f) => ({
    question: f.question,
    answer: f.answer,
  })),
);

const metaProcess: { step: string; title: string; desc: string; icon: LucideIcon }[] = [
  {
    step: "01",
    title: "คุยเป้าหมายและงบ",
    desc: "กำหนด lead booking หรือยอดขาย และงบ ad spend ที่ธุรกิจรับได้",
    icon: Target,
  },
  {
    step: "02",
    title: "ตั้ง Pixel และ conversion",
    desc: "ติดตั้ง Meta Pixel กับเหตุการณ์ที่วัดได้ เช่น ฟอร์ม โทร หรือทัก LINE",
    icon: BarChart3,
  },
  {
    step: "03",
    title: "Audience และ creative",
    desc: "เลือกกลุ่มเป้าหมายและทดสอบภาพ วิดีโอ ข้อความบน Facebook และ Instagram",
    icon: ImageIcon,
  },
  {
    step: "04",
    title: "เปิดแคมเปญ Meta",
    desc: "ดูแล 1 แคมเปญในแพ็ก แพ็กโฆษณา ปรับบิดและ creative ตามผลจริง",
    icon: Megaphone,
  },
  {
    step: "05",
    title: "รายงานรายเดือน",
    desc: "สรุป lead CTR ต้นทุนต่อ conversion และสิ่งที่ปรับในรอบถัดไป",
    icon: Share2,
  },
  {
    step: "06",
    title: "ต่อยอดกับ Google หรือ SEO",
    desc: "ถ้าต้องการคนที่กำลังค้นหา เติม Google Ads หรือฐาน SEO ตามลำดับงาน",
    icon: MessageCircle,
  },
];

const commonMistakes = [
  "เปิดแอดก่อนตั้ง Pixel หรือ conversion ทำให้ไม่รู้ว่าอะไรขายได้",
  "ใช้ creative เดียวทั้งเดือนโดยไม่ทดสอบภาพหรือข้อความ",
  "ยิงกว้างโดยไม่แยกกลุ่มลูกค้าหรือวัตถุประสงค์แคมเปญ",
  "ส่งคนไปหน้าปลายทางช้าหรือไม่มีปุ่ม LINE/โทร",
  "หยุดแอดแล้วคิดว่าผลจะค้างเหมือน SEO ทั้งที่ traffic จากแอดหายทันที",
];

const featureCards: { title: string; desc: string; icon: LucideIcon }[] = [
  {
    title: "Pixel + Conversion",
    desc: "ตั้ง Meta Pixel และเหตุการณ์ที่วัดได้ก่อนเปิดงบ เพื่อรู้ว่าแอดไหนขายได้",
    icon: BarChart3,
  },
  {
    title: "Audience + Creative",
    desc: "วางกลุ่มเป้าหมายและทดสอบภาพ วิดีโอ ข้อความบน Facebook และ Instagram",
    icon: ImageIcon,
  },
  {
    title: "Optimize รายเดือน",
    desc: "ปรับบิด creative และรายงาน lead CTR ต้นทุนต่อ conversion ต่อเนื่อง",
    icon: Megaphone,
  },
];

const benefitItems = [
  "ตั้ง Pixel และ conversion ให้วัดได้",
  "ดูแล Facebook + Instagram ในแคมเปญเดียว",
  "รายงานรายเดือนชัดเจน ไม่รับประกันยอดขายมั่ว",
  "ไม่มีสัญญาผูกมัด ยกเลิกได้ตามรอบบิล",
  "ต่อยอด Google Ads หรือ SEO ได้เมื่อพร้อม",
];

const pricingCards: {
  name: string;
  price: string;
  unit: string;
  desc: string;
  features: string[];
  href: string;
  featured?: boolean;
  cta: string;
}[] = [
  {
    name: "ปรึกษาฟรี",
    price: "฿0",
    unit: "เริ่มคุยก่อน",
    desc: "ประเมินเป้าหมายและงบก่อนตัดสินใจจ้าง",
    features: ["คุยเป้าหมาย lead", "แนะนำแพลตฟอร์ม", "ไม่มีค่าใช้จ่าย"],
    href: "/contact",
    cta: "นัดคุยฟรี",
  },
  {
    name: "แพ็กโฆษณา",
    price: "฿3,000",
    unit: "/เดือน",
    desc: "Meta 1 แคมเปญ ค่าจัดการชัด ไม่รวม ad spend",
    features: [
      "Facebook + Instagram",
      "Pixel + conversion",
      "รายงานรายเดือน",
      "ไม่มีสัญญาผูกมัด",
    ],
    href: "/packages/ads-starter",
    featured: true,
    cta: "ดูแพ็ก แพ็กโฆษณา",
  },
  {
    name: "SEO Pro Max",
    price: "฿15,000",
    unit: "/เดือน",
    desc: "Google + Meta คู่กัน สำหรับทีมที่อยากครบช่องทาง",
    features: ["Google Ads 1 แคมเปญ", "Meta Ads 1 แคมเปญ", "รายงานรวม", "เหมาะขยายผล"],
    href: "/packages/seo-pro-max",
    cta: "ดูแพ็ก Pro Max",
  },
];

const fbVsIgRows: { dimension: string; facebook: string; instagram: string }[] = [
  {
    dimension: "พื้นที่โชว์",
    facebook: "ฟีด Stories Reels และรูปแบบหลากหลาย",
    instagram: "ฟีด Stories Reels เน้นภาพและวิดีโอสั้น",
  },
  {
    dimension: "เหมาะเมื่อ",
    facebook: "อยากครอบคลุมหลายรูปแบบโฆษณาและ retarget",
    instagram: "สินค้าหรือบริการขายด้วยภาพ ไลฟ์สไตล์ รีลส์",
  },
  {
    dimension: "ระบบหลังบ้าน",
    facebook: "Meta Ads Manager ชุดเดียว",
    instagram: "Meta Ads Manager ชุดเดียว",
  },
];

const nationwideVsPhuketRows: { dimension: string; nationwide: string; phuket: string }[] = [
  {
    dimension: "พื้นที่ลูกค้า",
    nationwide: "ทั่วประเทศหรือหลายจังหวัด",
    phuket: "โฟกัสโซนในภูเก็ต",
  },
  {
    dimension: "หน้าบริการ",
    nationwide: "/services/facebook-ads",
    phuket: "/services/social-media",
  },
  {
    dimension: "คีย์หลัก",
    nationwide: "รับยิงแอด facebook",
    phuket: "รับยิงแอด facebook ภูเก็ต",
  },
];

const guideLinks = [
  { href: "/services/google-ads-thailand", label: "รับทำ Google Ads ทั่วประเทศ" },
  { href: "/services/social-media", label: "รับยิงแอด Facebook ภูเก็ต" },
  { href: "/packages/ads-starter", label: "แพ็ก แพ็กโฆษณา" },
  { href: "/pricing", label: "ดูราคาแพ็กเกจ" },
];

const heroStats = [
  { value: "฿3,000", label: "ค่าจัดการ/เดือน" },
  { value: "24–48 ชม.", label: "เริ่มแสดงแอด" },
  { value: "FB + IG", label: "แพลตฟอร์มหลัก" },
  { value: "0", label: "สัญญาผูกมัด" },
];

const useCases = [
  {
    quote:
      "ร้านค้าและอีคอมเมิร์ซใช้ Meta Ads เพื่อยิงคนที่สนใจสินค้าจริง ไม่ใช่แค่ดัน reach แล้วจบ",
    role: "ร้านค้า / อีคอมเมิร์ซ",
  },
  {
    quote:
      "คลินิกและบริการท้องถิ่นโฟกัส lead จากฟอร์ม LINE หรือโทร พร้อมตั้ง conversion ก่อนเปิดงบ",
    role: "คลินิก / บริการ",
  },
  {
    quote:
      "ธุรกิจที่อยากครบช่องทางต่อด้วย Google Ads หรือ SEO เมื่อมีฐาน conversion จาก Meta แล้ว",
    role: "ทีมที่ขยายช่องทาง",
  },
];

export default function FacebookAdsNationwidePage() {
  return (
    <div>
      <BrandGradientDefs />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaJson) }}
      />

      <ServiceBreadcrumb serviceName="รับยิงแอด Facebook" />

      <ServiceMarketingHero
        variant="saas"
        eyebrow="รับยิงแอด Facebook · ทั่วประเทศ"
        title="รับยิงแอด Facebook"
        titleAccent="เพิ่ม lead จาก Meta Ads"
        description="บริหาร Facebook และ Instagram Ads ให้วัด conversion ได้จริง ค่าจัดการเริ่ม ฿3,000/เดือน ไม่รวม ad spend"
        image={{
          ...siteImages.services.socialMedia,
          alt: "รับยิงแอด Facebook Meta Ads — ตัวอย่างแดชบอร์ดและผลแคมเปญ PhuketSEO",
        }}
        stats={heroStats}
        floatingCards={[
          { value: "฿3,000", label: "ค่าจัดการเริ่มต้น / เดือน" },
          { value: "24–48 ชม.", label: "แอดเริ่มแสดงหลังเปิด" },
          { value: "FB+IG", label: "แพลตฟอร์ม" },
        ]}
        secondaryHref="#process"
        secondaryLabel="ดูขั้นตอนการทำงาน"
      />

      <HomeSection variant="white" className="border-t-0 !pt-10 !pb-10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-slate-500 mb-4">รองรับแพลตฟอร์มที่ธุรกิจใช้ยิงแอดจริง</p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
            {["Facebook Ads", "Instagram Ads", "Meta Pixel", "Conversion", "Ads Manager"].map(
              (label) => (
                <span
                  key={label}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-600"
                >
                  {label}
                </span>
              ),
            )}
          </div>
        </div>
      </HomeSection>

      <HomeSection variant="muted">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4">
              เราซัพพอร์ตธุรกิจที่ต้องการ{" "}
              <span className="text-gradient-brand">lead จาก Meta</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              {facebookAdsNationwideContent.answerBlock}
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {heroStats.slice(0, 2).map((s) => (
                <div key={s.label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-2xl font-bold text-slate-900 tabular-nums">{s.value}</p>
                  <p className="text-sm text-slate-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-5">
            {featureCards.map((f) => (
              <div key={f.title} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <f.icon size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{f.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </HomeSection>

      <HomeSection variant="white" containerClass="max-w-6xl">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <HomeSectionHeader
            title="ฟีเจอร์ที่คุณได้"
            titleAccent="จากรับยิงแอด Facebook"
            description="ไม่รับประกันยอดขาย เราวัดจาก lead การจอง หรือต้นทุนต่อ conversion ที่ตกลงตอนเริ่มงาน"
            className="mb-0 max-w-2xl"
          />
          <GradientButton href="/contact" className="shrink-0 self-start lg:self-auto px-8 py-3.5">
            เริ่มต้นเลย
          </GradientButton>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {facebookAdsNationwideContent.deliverables.slice(0, 3).map((item, i) => {
            const Icon = featureCards[i]?.icon ?? Target;
            return (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-[#f8f7ff] p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-white text-indigo-600 shadow-sm">
                  <Icon size={22} />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2 leading-snug">{item}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  รวมในแพ็ก แพ็กโฆษณา และปรับตามเป้าหมายแคมเปญจริง
                </p>
              </div>
            );
          })}
        </div>
      </HomeSection>

      <HomeSection variant="muted">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-6">
              ประโยชน์ที่ธุรกิจได้จาก{" "}
              <span className="text-gradient-brand">การจ้างยิงแอด</span>
            </h2>
            <ul className="space-y-3.5">
              {benefitItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-indigo-500" />
                  <span className="text-sm sm:text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-slate-500 leading-relaxed">
              {facebookAdsNationwideContent.intro[0]}
            </p>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-indigo-500/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={siteImages.services.socialMedia.src}
                alt="ตัวอย่างงานรับยิงแอด Facebook ที่วัดผลได้"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:w-56 rounded-xl border border-slate-100 bg-white p-4 shadow-xl">
              <p className="text-xs text-slate-500">สิ่งที่ได้ในแพ็ก</p>
              <p className="text-sm font-semibold text-slate-900 mt-1">
                {facebookAdsNationwideContent.deliverables.length} รายการหลักใน แพ็กโฆษณา
              </p>
            </div>
          </div>
        </div>
      </HomeSection>

      <HomeSection variant="white" containerClass="max-w-6xl">
        <HomeSectionHeader
          title="เลือกแพ็กที่เหมาะ"
          titleAccent="กับงบของคุณ"
          description="ค่าจัดการแยกจาก ad spend ชัดเจน ไม่ผูกสัญญา"
          centered
          className="mx-auto max-w-2xl"
        />
        <div className="grid md:grid-cols-3 gap-5 items-stretch">
          {pricingCards.map((card) => (
            <div
              key={card.name}
              className={
                card.featured
                  ? "rounded-2xl bg-indigo-600 text-white p-6 sm:p-7 shadow-xl shadow-indigo-500/25 flex flex-col"
                  : "rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm flex flex-col"
              }
            >
              <p className={`text-sm font-semibold ${card.featured ? "text-indigo-100" : "text-slate-500"}`}>
                {card.name}
              </p>
              <p className="mt-3 flex items-end gap-1">
                <span className="text-4xl font-bold tracking-tight tabular-nums">{card.price}</span>
                <span className={`pb-1 text-sm ${card.featured ? "text-indigo-100" : "text-slate-500"}`}>
                  {card.unit}
                </span>
              </p>
              <p className={`mt-3 text-sm leading-relaxed ${card.featured ? "text-indigo-50" : "text-slate-600"}`}>
                {card.desc}
              </p>
              <ul className="mt-5 space-y-2.5 flex-1">
                {card.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckCircle2
                      className={`mt-0.5 size-4 shrink-0 ${card.featured ? "text-indigo-200" : "text-indigo-500"}`}
                    />
                    <span className={card.featured ? "text-indigo-50" : "text-slate-700"}>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={card.href}
                className={
                  card.featured
                    ? "mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-indigo-700 shadow-sm hover:bg-indigo-50 transition-colors"
                    : "mt-6 inline-flex h-12 w-full items-center justify-center rounded-full border border-slate-200 bg-white px-7 text-sm font-semibold text-slate-800 hover:border-violet-200 hover:bg-violet-50/50 transition-colors"
                }
              >
                {card.cta}
              </Link>
            </div>
          ))}
        </div>
      </HomeSection>

      <HomeSection variant="muted" containerClass="max-w-4xl">
        <HomeSectionHeader
          title="Facebook กับ Instagram"
          titleAccent="ต่างกันอย่างไร?"
          description="ทั้งคู่รันผ่าน Meta — เลือก creative ตามแพลตฟอร์ม ไม่ต้องแยกหน้าบริการ"
          centered
          className="mx-auto max-w-2xl"
        />
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-sm sm:text-base text-left">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80">
                <th className="px-4 py-3 font-semibold text-slate-900">มิติ</th>
                <th className="px-4 py-3 font-semibold text-slate-900">Facebook</th>
                <th className="px-4 py-3 font-semibold text-slate-900">Instagram</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              {fbVsIgRows.map((row) => (
                <tr key={row.dimension} className="border-b border-slate-100 last:border-0">
                  <td className="px-4 py-3 font-medium text-slate-900">{row.dimension}</td>
                  <td className="px-4 py-3">{row.facebook}</td>
                  <td className="px-4 py-3">{row.instagram}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </HomeSection>

      <HomeSection id="process" variant="white" containerClass="max-w-6xl">
        <HomeSectionHeader
          title="กระบวนการรับยิงแอด"
          titleAccent="Facebook"
          description="เริ่มจากเป้าหมายและ Pixel ไม่ใช่เปิดแอดแล้วค่อยวัด"
          centered
          className="mx-auto max-w-2xl"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {metaProcess.map((p) => (
            <div
              key={p.step}
              className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                <p.icon size={18} />
              </div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-indigo-600 mb-1.5">
                Step {p.step}
              </p>
              <h3 className="font-semibold text-slate-900 mb-2">{p.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </HomeSection>

      <HomeSection variant="muted" containerClass="max-w-4xl">
        <HomeSectionHeader
          title="ทั่วประเทศกับภูเก็ต"
          titleAccent="ต่างกันอย่างไร?"
          description="เลือกหน้าตามพื้นที่ลูกค้าจริง เพื่อไม่ให้คีย์แย่งกันเอง"
          centered
          className="mx-auto max-w-2xl"
        />
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-sm sm:text-base text-left">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80">
                <th className="px-4 py-3 font-semibold text-slate-900">มิติ</th>
                <th className="px-4 py-3 font-semibold text-slate-900">ทั่วประเทศ</th>
                <th className="px-4 py-3 font-semibold text-slate-900">ภูเก็ต</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              {nationwideVsPhuketRows.map((row) => (
                <tr key={row.dimension} className="border-b border-slate-100 last:border-0">
                  <td className="px-4 py-3 font-medium text-slate-900">{row.dimension}</td>
                  <td className="px-4 py-3">{row.nationwide}</td>
                  <td className="px-4 py-3">{row.phuket}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-slate-600 text-center">
          ธุรกิจในภูเก็ต:{" "}
          <Link
            href="/services/social-media"
            className="text-violet-600 font-medium hover:underline underline-offset-2"
          >
            รับยิงแอด Facebook ภูเก็ต
          </Link>
          {" · "}
          {guideLinks.slice(0, 2).map((link, i) => (
            <span key={link.href}>
              {i > 0 ? " · " : null}
              <Link href={link.href} className="text-violet-600 font-medium hover:underline underline-offset-2">
                {link.label}
              </Link>
            </span>
          ))}
        </p>
      </HomeSection>

      <HomeSection variant="white">
        <HomeSectionHeader
          title="จ้างเอเยนซี่เมื่อไหร่"
          titleAccent="ดีกว่าทำเอง?"
          description="จ้างเมื่อไม่มีเวลาทดลองบนงบเอง หรือต้องการคนปรับแคมเปญเป็นระบบ"
        />
        <ul className="max-w-3xl space-y-3 text-sm sm:text-base text-slate-700">
          {commonMistakes.map((item) => (
            <li key={item} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3">
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-indigo-500" />
              {item}
            </li>
          ))}
        </ul>
      </HomeSection>

      <HomeSection variant="white" containerClass="max-w-6xl">
        <HomeSectionHeader
          title="เหมาะกับธุรกิจแบบไหน"
          titleAccent="ที่ใช้ Meta Ads"
          description="ตัวอย่างกลุ่มที่มักเริ่มจากรับยิงแอด Facebook ก่อนขยายช่องทางอื่น"
          centered
          className="mx-auto max-w-2xl"
        />
        <div className="grid md:grid-cols-3 gap-5">
          {useCases.map((item) => (
            <blockquote
              key={item.role}
              className="rounded-2xl border border-slate-200 bg-[#f8f7ff] p-6 shadow-sm"
            >
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-5">
                “{item.quote}”
              </p>
              <footer className="text-sm font-semibold text-indigo-600">{item.role}</footer>
            </blockquote>
          ))}
        </div>
      </HomeSection>

      <ServiceFaqSection faqs={facebookAdsNationwideContent.faqs} />

      <HomeSection variant="muted" className="!pb-16">
        <div className="max-w-5xl mx-auto overflow-hidden rounded-3xl bg-indigo-600 px-6 py-10 sm:px-12 sm:py-14 text-center shadow-xl shadow-indigo-500/25">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
            พร้อมรับยิงแอด Facebook?
          </h2>
          <p className="text-indigo-100 text-sm sm:text-base mb-7 leading-relaxed max-w-xl mx-auto">
            ขอคำปรึกษาฟรี เราวางแผน Meta Ads ตามเป้าหมายและงบที่รับได้จริง
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-indigo-700 shadow-sm hover:bg-indigo-50 transition-colors"
            >
              ขอคำปรึกษาฟรี
            </Link>
            <Link
              href="/services/google-ads-thailand"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/50 bg-transparent px-8 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              ดู Google Ads ทั่วประเทศ
            </Link>
          </div>
        </div>
      </HomeSection>
    </div>
  );
}

