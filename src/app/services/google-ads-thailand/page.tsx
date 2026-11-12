import type { Metadata } from "next";
import Link from "next/link";
import {
  Target,
  TrendingUp,
  BarChart3,
  Zap,
  Search,
  Settings,
  FileText,
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
import { googleAdsThailandContent } from "@/lib/service-content";
import { ServiceFaqSection } from "@/components/ServiceFaqSection";
import { BrandGradientDefs } from "@/components/BrandGradientDefs";
import { HomeSection, HomeSectionHeader } from "@/components/home/HomeSection";
import { GradientButton } from "@/components/GradientButton";
import { ServiceBreadcrumb } from "@/components/services/ServiceBreadcrumb";
import { ServiceMarketingHero } from "@/components/services/ServiceMarketingHero";

export const metadata: Metadata = {
  title: "รับทำ Google Ads | ยิงแอดกูเกิ้ลทั่วประเทศ เริ่ม ฿3,000/เดือน - PhuketSEO",
  description:
    "รับทำ Google Ads ทั่วประเทศ — ยิงแอดกูเกิ้ล Search Display Remarketing ค่าจัดการเริ่ม ฿3,000/เดือน ไม่รวม ad spend ขอคำปรึกษาฟรี",
  alternates: { canonical: `${siteConfig.url}/services/google-ads-thailand` },
  keywords: [
    "รับทำ google ads",
    "ยิงแอด กูเกิ้ล",
    "รับยิงแอด google",
    "ยิงแอด google",
    "ราคารับทำ google ads",
    "เอเยนซี่ google ads",
    "จ้างทำ google ads",
  ],
  openGraph: {
    title: "รับทำ Google Ads | ยิงแอดกูเกิ้ลทั่วประเทศ - PhuketSEO",
    description:
      "รับทำ Google Ads ทั่วประเทศ ค่าจัดการเริ่ม ฿3,000/เดือน ไม่รวม ad spend",
    url: `${siteConfig.url}/services/google-ads-thailand`,
    type: "website",
    images: [defaultOgImage],
  },
};

const breadcrumbSchema = buildBreadcrumb([
  { name: "หน้าแรก", url: siteConfig.url },
  { name: "รับทำ Google Ads", url: `${siteConfig.url}/services/google-ads-thailand` },
]);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "รับทำ Google Ads",
  alternateName: ["ยิงแอด กูเกิ้ล", "รับยิงแอด google", "Google Ads ทั่วประเทศ"],
  provider: localServiceProvider,
  description: googleAdsThailandContent.answerBlock,
  areaServed: areaServedThailand,
  serviceType: "Google Ads Management",
  url: `${siteConfig.url}/services/google-ads-thailand`,
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
  googleAdsThailandContent.faqs.map((f) => ({
    question: f.question,
    answer: f.answer,
  })),
);

const features: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Target,
    title: "Search Ads",
    desc: "โฆษณาบน Google Search ตรงกับคนที่กำลังค้นหาสินค้าหรือบริการ",
  },
  {
    icon: BarChart3,
    title: "Display Ads",
    desc: "แบนเนอร์บนเครือข่ายพันธมิตร Google เพื่อสร้างการรับรู้แบรนด์",
  },
  {
    icon: TrendingUp,
    title: "Remarketing",
    desc: "แสดงโฆษณาซ้ำกับคนที่เคยเข้าเว็บเพื่อดัน conversion",
  },
  {
    icon: Zap,
    title: "Tracking",
    desc: "ตั้ง conversion ให้รู้ว่าแอดไหนได้ lead จริงก่อนขยายงบ",
  },
];

const adsProcess: { step: string; title: string; desc: string; icon: LucideIcon }[] = [
  {
    step: "01",
    title: "Audit keyword + landing",
    desc: "ดูราคาคลิกของคำค้นและเช็กว่าหน้าปลายทางแปลงผลได้",
    icon: Search,
  },
  {
    step: "02",
    title: "Setup + tracking",
    desc: "ติด conversion tracking เช่น ฟอร์ม โทร LINE ก่อนเปิดแคมเปญ",
    icon: Settings,
  },
  {
    step: "03",
    title: "Campaign launch",
    desc: "เปิด Search Display หรือ Remarketing ตามแผนที่ตกลง",
    icon: Target,
  },
  {
    step: "04",
    title: "Optimize รายสัปดาห์",
    desc: "ปรับ bid ad copy audience และ negative keywords",
    icon: BarChart3,
  },
  {
    step: "05",
    title: "รายงาน + แผนถัดไป",
    desc: "สรุป CPA ROAS และแนะนำงบเดือนถัดไป",
    icon: FileText,
  },
];

const commonMistakes = [
  "ยิงแอดโดยไม่มี conversion tracking — ไม่รู้ว่าแอดไหนได้ลูกค้า",
  "หน้าปลายทางไม่ตรงกับข้อความโฆษณา",
  "งบน้อยเกินไปในคำแข่งสูงแล้วคาดหวัง lead ทุกวัน",
  "ไม่ใส่ negative keywords ทำให้เสียคลิกนอกเป้า",
  "หยุด optimize หลังเปิดแคมเปญสองสัปดาห์",
];

const priceRows: { pack: string; fee: string; spend: string; fit: string }[] = [
  {
    pack: "แพ็กโฆษณา",
    fee: "฿3,000/เดือน",
    spend: "ไม่รวม",
    fit: "Google 1 แคมเปญ",
  },
  {
    pack: "SEO Pro Max",
    fee: "฿15,000/เดือน",
    spend: "ไม่รวม",
    fit: "Google + Meta คู่กัน",
  },
];

const adsVsFbRows: { dimension: string; google: string; facebook: string }[] = [
  {
    dimension: "จับลูกค้าเมื่อ",
    google: "กำลังพิมพ์ค้นหาบริการอยู่แล้ว",
    facebook: "กำลังเลื่อนฟีด หรือเคยเห็นแบรนด์แล้ว",
  },
  {
    dimension: "เห็นผล",
    google: "มักเริ่มแสดงภายใน 24 ชม. หลัง setup",
    facebook: "มักเริ่มแสดงภายใน 24–48 ชม. หลังเปิด",
  },
  {
    dimension: "เหมาะเมื่อ",
    google: "มีคำค้นที่มี demand ชัด ต้องการ lead จาก Search",
    facebook: "โปรโมชัน awareness หรือ retarget",
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
    nationwide: "/services/google-ads-thailand",
    phuket: "/services/google-ads",
  },
  {
    dimension: "คีย์หลัก",
    nationwide: "รับทำ google ads / ยิงแอด กูเกิ้ล",
    phuket: "รับทำ Google Ads ภูเก็ต",
  },
];

const guideLinks = [
  { href: "/services/facebook-ads", label: "รับยิงแอด Facebook" },
  { href: "/services/google-ads", label: "รับทำ Google Ads ภูเก็ต" },
  { href: "/blog/google-ads-vs-seo-phuket", label: "Google Ads vs SEO" },
  { href: "/packages/ads-starter", label: "แพ็ก แพ็กโฆษณา" },
  { href: "/pricing", label: "ดูราคาแพ็กเกจ" },
];

export default function GoogleAdsThailandPage() {
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

      <ServiceBreadcrumb serviceName="รับทำ Google Ads" />

      <ServiceMarketingHero
        eyebrow="หน้าบริการหลัก · รับทำ Google Ads"
        title="รับทำ Google Ads"
        titleAccent="ยิงแอดกูเกิ้ลทั่วประเทศ"
        description="บริหาร Search Display และ Remarketing ค่าจัดการเริ่ม ฿3,000/เดือน ไม่รวม ad spend"
        answerBlock={googleAdsThailandContent.answerBlock}
        image={siteImages.services.googleAds}
        stats={[
          { value: "฿3,000", label: "ค่าจัดการเริ่มต้น" },
          { value: "24hr", label: "แคมเปญเริ่มแสดง" },
          { value: "2–4wk", label: "ระยะ optimize CPA" },
          { value: "0", label: "ไม่ผูกมัด" },
        ]}
        trustBadges={["ไม่รวม Ad Spend", "Campaign Setup", "รายงานรายสัปดาห์", "ไม่มีสัญญาผูกมัด"]}
        secondaryHref="#process"
        secondaryLabel="ดูขั้นตอนการทำงาน"
      />

      <HomeSection variant="muted" className="border-t-0">
        <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
          {googleAdsThailandContent.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
          <p className="text-slate-600">
            อ่านที่เกี่ยวข้อง:{" "}
            {guideLinks.map((link, i) => (
              <span key={link.href}>
                {i > 0 ? " · " : null}
                <Link
                  href={link.href}
                  className="text-violet-600 font-medium hover:underline underline-offset-2"
                >
                  {link.label}
                </Link>
              </span>
            ))}
          </p>
          <p className="text-slate-600">
            <Link href="/contact" className="text-violet-600 font-medium hover:underline underline-offset-2">
              ปรึกษาฟรี
            </Link>
            {" · "}
            <Link href="/seo-audit" className="text-violet-600 font-medium hover:underline underline-offset-2">
              SEO Audit ฟรี
            </Link>
          </p>
        </div>
      </HomeSection>

      <HomeSection variant="white">
        <HomeSectionHeader
          eyebrow="ขอบเขตงาน"
          title="รับทำ Google Ads"
          titleAccent="ครอบคลุมอะไรบ้าง?"
          description="ไม่รับประกันยอดขาย เราวัดจาก lead CPA หรือ ROAS ที่ตกลงตอนเริ่มงาน"
        />
        <div className="grid sm:grid-cols-2 gap-4 text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
          <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-5">
            <h3 className="font-semibold text-slate-900 mb-2">สิ่งที่ได้ในแพ็ก</h3>
            <ul className="space-y-2">
              {googleAdsThailandContent.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-5">
            <h3 className="font-semibold text-slate-900 mb-2">ประเภทแคมเปญ</h3>
            <p>
              Search Ads สำหรับคนที่กำลังค้นหา Display สำหรับการรับรู้ และ Remarketing สำหรับคนเคยเข้าเว็บ
              เลือกตามเป้าหมาย lead ไม่ยิงทุกอย่างพร้อมกันโดยไม่มี tracking
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3">
                <f.icon size={18} />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">{f.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </HomeSection>

      <HomeSection variant="muted" containerClass="max-w-4xl">
        <HomeSectionHeader
          eyebrow="ราคา"
          title="ราคารับทำ Google Ads"
          titleAccent="เท่าไหร่?"
          description="ค่าจัดการแยกจาก ad spend ชัดเจน ไม่ผูกสัญญา"
          centered
          className="mx-auto max-w-2xl"
        />
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-sm sm:text-base text-left">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80">
                <th className="px-4 py-3 font-semibold text-slate-900">แพ็ก</th>
                <th className="px-4 py-3 font-semibold text-slate-900">ค่าจัดการ</th>
                <th className="px-4 py-3 font-semibold text-slate-900">ad spend</th>
                <th className="px-4 py-3 font-semibold text-slate-900">เหมาะกับ</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              {priceRows.map((row) => (
                <tr key={row.pack} className="border-b border-slate-100 last:border-0">
                  <td className="px-4 py-3 font-medium text-slate-900">{row.pack}</td>
                  <td className="px-4 py-3">{row.fee}</td>
                  <td className="px-4 py-3">{row.spend}</td>
                  <td className="px-4 py-3">{row.fit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </HomeSection>

      <HomeSection variant="white" containerClass="max-w-4xl">
        <HomeSectionHeader
          eyebrow="เปรียบเทียบ"
          title="ยิงแอดกูเกิ้ล"
          titleAccent="ต่างจาก Facebook Ads อย่างไร?"
          description="Google จับคนที่กำลังค้นหา Facebook จับคนบนฟีด ธุรกิจมักใช้ทั้งคู่ตามจังหวะ"
          centered
          className="mx-auto max-w-2xl"
        />
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-sm sm:text-base text-left">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80">
                <th className="px-4 py-3 font-semibold text-slate-900">มิติ</th>
                <th className="px-4 py-3 font-semibold text-slate-900">Google Ads</th>
                <th className="px-4 py-3 font-semibold text-slate-900">Facebook Ads</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              {adsVsFbRows.map((row) => (
                <tr key={row.dimension} className="border-b border-slate-100 last:border-0">
                  <td className="px-4 py-3 font-medium text-slate-900">{row.dimension}</td>
                  <td className="px-4 py-3">{row.google}</td>
                  <td className="px-4 py-3">{row.facebook}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-slate-600 text-center">
          ดู Meta:{" "}
          <Link
            href="/services/facebook-ads"
            className="text-violet-600 font-medium hover:underline underline-offset-2"
          >
            รับยิงแอด Facebook
          </Link>
        </p>
      </HomeSection>

      <HomeSection variant="muted">
        <HomeSectionHeader
          eyebrow="งบโฆษณา"
          title="ควรเริ่มงบ ad spend"
          titleAccent="เท่าไหร่?"
          description="ค่าจัดการกับงบคลิกคนละก้อน งบคลิกต้องพอให้ระบบเรียนรู้"
        />
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
          งบ ad spend ที่ควรเริ่มคือช่วง ฿15,000–30,000 ต่อเดือนสำหรับ SME ทั่วไป
          ถ้าราคาคลิกของคำค้นสูงหรือต้องการ lead หนาแน่น อาจต้องสูงกว่านี้
          งบน้อยเกินไปจะเก็บข้อมูลช้าและปรับแคมเปญยาก
        </p>
        <ul className="space-y-2.5 text-sm sm:text-base text-slate-700">
          {commonMistakes.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </HomeSection>

      <HomeSection variant="white" containerClass="max-w-4xl">
        <HomeSectionHeader
          eyebrow="แยกหน้าชัด"
          title="Google Ads ทั่วประเทศ"
          titleAccent="กับ Google Ads ภูเก็ตต่างกันอย่างไร?"
          description="เลือกหน้าตามพื้นที่ลูกค้าจริง เพื่อไม่ให้คีย์แย่งกันเอง"
          centered
          className="mx-auto max-w-2xl"
        />
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
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
            href="/services/google-ads"
            className="text-violet-600 font-medium hover:underline underline-offset-2"
          >
            รับทำ Google Ads ภูเก็ต
          </Link>
        </p>
      </HomeSection>

      <HomeSection id="process" variant="muted" containerClass="max-w-6xl">
        <HomeSectionHeader
          eyebrow="ขั้นตอน"
          title="กระบวนการรับทำ"
          titleAccent="Google Ads"
          description="กระบวนการรับทำ Google Ads ของ PhuketSEO เริ่มจาก audit และ tracking ไม่ใช่เปิดแคมเปญทันที"
          centered
          className="mx-auto max-w-2xl"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {adsProcess.map((p) => (
            <div
              key={p.step}
              className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
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

      <ServiceFaqSection faqs={googleAdsThailandContent.faqs} />

      <HomeSection variant="gradient" containerClass="max-w-2xl">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">พร้อมรับทำ Google Ads?</h2>
          <p className="text-slate-600 text-sm sm:text-base mb-6 leading-relaxed">
            ขอคำปรึกษาฟรี เราวางแผนยิงแอดกูเกิ้ลตามเป้าหมายและงบที่รับได้จริง
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <GradientButton href="/contact" className="px-7">
              ขอคำปรึกษาฟรี
            </GradientButton>
            <Link
              href="/seo-audit"
              className="text-sm font-medium text-violet-600 hover:underline underline-offset-2"
            >
              SEO Audit ฟรี
            </Link>
            <Link
              href="/services/facebook-ads"
              className="inline-flex items-center justify-center text-sm font-medium px-6 py-3 rounded-lg border border-slate-200 text-slate-700 hover:border-violet-200 hover:bg-violet-50/50 transition-colors"
            >
              ดู Facebook Ads
            </Link>
          </div>
        </div>
      </HomeSection>
    </div>
  );
}

