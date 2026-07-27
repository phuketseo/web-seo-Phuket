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
  MapPin,
  type LucideIcon,
} from "lucide-react";
import { siteImages } from "@/lib/images";
import {
  faqSchema,
  buildBreadcrumb,
  localServiceProvider,
  areaServedPhuket,
} from "@/lib/schema";
import { googleAdsContent } from "@/lib/service-content";
import { ServiceFaqSection } from "@/components/ServiceFaqSection";
import { siteConfig } from "@/lib/utils";
import { BrandGradientDefs } from "@/components/BrandGradientDefs";
import { HomeSection, HomeSectionHeader } from "@/components/home/HomeSection";
import { GradientButton } from "@/components/GradientButton";
import { ServiceBreadcrumb } from "@/components/services/ServiceBreadcrumb";
import { ServiceMarketingHero } from "@/components/services/ServiceMarketingHero";
import { ServicePricingTeaser } from "@/components/services/ServicePricingTeaser";
import { ServicePageCta } from "@/components/services/ServicePageCta";

export const metadata: Metadata = {
  title: "รับทำ Google Ads ภูเก็ต | ยิงแอดตรงกลุ่มเป้าหมาย - PhuketSEO",
  description:
    "รับทำ Google Ads ภูเก็ต รับยิงแอด Google และ Google Maps — วางแผน keyword ในโซนจริง ค่าจัดการเริ่ม ฿6,500/เดือน (แพ็ก Ads Starter) ไม่รวม ad spend ขอปรึกษาฟรี",
  alternates: { canonical: `${siteConfig.url}/services/google-ads` },
  keywords: [
    "รับทำ Google Ads ภูเก็ต",
    "รับยิงแอด google ภูเก็ต",
    "รับยิงแอด google map ภูเก็ต",
    "Google Ads ภูเก็ต",
    "เอเยนซี่ Google Ads ภูเก็ต",
    "ยิงแอด ภูเก็ต",
    "จ้างยิงแอด ภูเก็ต",
  ],
};

const breadcrumbSchema = buildBreadcrumb([
  { name: "หน้าแรก", url: siteConfig.url },
  { name: "รับทำ Google Ads ภูเก็ต", url: `${siteConfig.url}/services/google-ads` },
]);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "รับทำ Google Ads ภูเก็ต",
  alternateName: ["รับยิงแอด Google ภูเก็ต", "รับยิงแอด Google Maps ภูเก็ต"],
  provider: localServiceProvider,
  description:
    "รับทำ Google Ads ภูเก็ต — วางแผน keyword ในโซนจริง บริหาร Search, Display และ Remarketing สำหรับธุรกิจในจังหวัดภูเก็ต",
  areaServed: areaServedPhuket,
  url: `${siteConfig.url}/services/google-ads`,
  offers: {
    "@type": "Offer",
    priceCurrency: "THB",
    price: "5900",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      priceCurrency: "THB",
      price: "5900",
      unitText: "MONTH",
    },
  },
};

const faqSchemaJson = faqSchema(googleAdsContent.faqs);

const features: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Target, title: "Search Ads", desc: "โฆษณาบน Google Search ตรงกับคนที่กำลังค้นหาสินค้า/บริการของคุณ" },
  { icon: BarChart3, title: "Display Ads", desc: "Banner โฆษณาบนเว็บไซต์พันธมิตร Google เพิ่ม Brand Awareness" },
  { icon: TrendingUp, title: "Shopping Ads", desc: "แสดงสินค้าพร้อมราคาบน Google Shopping เพิ่ม Conversion" },
  { icon: Zap, title: "Remarketing", desc: "ติดตามผู้เยี่ยมชมเว็บไซต์และแสดงโฆษณาซ้ำเพื่อเพิ่ม Conversion" },
];

const adsProcess: { step: string; title: string; desc: string; icon: LucideIcon }[] = [
  {
    step: "01",
    title: "Audit keyword + landing",
    desc: "ดู cost per click ในโซนป่าตอง กะตะ ตัวเมือง และเช็กว่า landing แปลงผลได้",
    icon: Search,
  },
  {
    step: "02",
    title: "Setup + tracking",
    desc: "ติด conversion tracking (ฟอร์ม, โทร, LINE) ก่อนเปิดแคมเปญ",
    icon: Settings,
  },
  {
    step: "03",
    title: "Campaign launch",
    desc: "Search / Display / Remarketing ตามกลยุทธ์ที่วางไว้",
    icon: Target,
  },
  {
    step: "04",
    title: "Optimize รายสัปดาห์",
    desc: "ปรับ bid, ad copy, audience และ negative keywords",
    icon: BarChart3,
  },
  {
    step: "05",
    title: "รายงาน + แผนถัดไป",
    desc: "CPA, ROAS และแนะนำงบเดือนถัดไป",
    icon: FileText,
  },
];

const commonMistakes = [
  "ยิงแอดโดยไม่มี conversion tracking — ไม่รู้ว่าแอดไหนได้ลูกค้า",
  "landing page ไม่ตรงกับ ad copy (คนกดหา นวดป่าตอง แต่เจอหน้า generic)",
  "งบน้อยในโซนแข่งสูง (ป่าตอง กะตะ) แล้วคาดหวัง lead ทุกวัน",
  "ไม่แยกแคมเปญตามภาษา (ไทย / อังกฤษ / ต่างชาติ)",
  "หยุด optimize หลังเปิดแคมเปญ 2 สัปดาห์",
];

const includedItems = [
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
];

const guideLinks = [
  { href: "/blog/ying-aep-google-maps-phuket", label: "รับยิงแอด Google Maps ภูเก็ต" },
  { href: "/blog/raaka-google-ads-phuket", label: "ราคารับทำ Google Ads ภูเก็ต" },
  { href: "/blog/google-ads-vs-seo-phuket", label: "Google Ads vs SEO ภูเก็ต" },
  { href: "/blog/google-ads-restaurant-phuket", label: "Google Ads ร้านอาหารภูเก็ต" },
  { href: "/blog/google-ads-spa-phuket", label: "Google Ads สปาภูเก็ต" },
  { href: "/blog/google-ads-hotel-phuket", label: "Google Ads โรงแรมภูเก็ต" },
  { href: "/blog/ying-aep-thi-phak-lek-ngoen-noi", label: "ยิงแอดที่พักงบน้อย" },
  { href: "/methodology/phuket-visibility-stack", label: "Phuket Visibility Stack" },
  { href: "/phuketseo", label: "ข้อมูล PhuketSEO (Entity)" },
];

const adsVsSeoRows: { dimension: string; ads: string; seo: string }[] = [
  { dimension: "เห็นผล", ads: "ภายใน 24–48 ชม. หลังเปิดแคมเปญ", seo: "Maps 30–60 วัน, organic 3–6 เดือน" },
  { dimension: "ค่าใช้จ่าย", ads: "ค่าจัดการ + ad spend ต่อคลิก", seo: "แพ็กรายเดือน ไม่จ่ายต่อคลิก" },
  { dimension: "เหมาะเมื่อ", ads: "ต้องการ lead เร็ว, high season, โปรใหม่", seo: "สร้างฐานระยะยาว ลดต้นทุน lead" },
  { dimension: "หยุดแล้ว", ads: "traffic หายทันที", seo: "การมองเห็นลดลงช้ากว่า แต่ไม่หายวันเดียว" },
  { dimension: "ลำดับที่มักถูก", ads: "หลัง GBP/landing พร้อม", seo: "Maps + trust ในโซนก่อน" },
];

export default function GoogleAdsPage() {
  return (
    <div>
      <BrandGradientDefs />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaJson) }} />

      <ServiceBreadcrumb serviceName="รับทำ Google Ads ภูเก็ต" />

      <ServiceMarketingHero
        eyebrow="หน้าบริการหลัก · รับทำ Google Ads ภูเก็ต"
        title="รับทำ Google Ads ภูเก็ต"
        titleAccent="ยิงแอดตรงกลุ่มได้ผลทันที"
        description="เอเยนซี่ Google Ads ภูเก็ตสำหรับธุรกิจไทยท้องถิ่น — วางแผน keyword ในโซนจริง บริหาร Search, Display และ Remarketing ตามงบที่เหมาะสม"
        answerBlock={googleAdsContent.answerBlock}
        image={siteImages.services.googleAds}
        stats={[
          { value: "฿6,500", label: "ค่าจัดการเริ่มต้น" },
          { value: "24hr", label: "แคมเปญเริ่มแสดง" },
          { value: "2–4wk", label: "ระยะ optimize CPA" },
          { value: "0", label: "ไม่ผูกมัด" },
        ]}
        trustBadges={["ไม่รวม Ad Spend", "Campaign Setup ฟรี", "รายงานรายสัปดาห์", "Dedicated Manager"]}
        secondaryHref="#process"
        secondaryLabel="ดูขั้นตอนการทำงาน"
      />

      <HomeSection variant="muted" className="border-t-0">
        <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
          {googleAdsContent.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
          <p className="text-slate-600">
            อ่านคู่มือที่เกี่ยวข้อง:{" "}
            {guideLinks.map((link, i) => (
              <span key={link.href}>
                {i > 0 ? " · " : null}
                <Link href={link.href} className="text-violet-600 font-medium hover:underline underline-offset-2">
                  {link.label}
                </Link>
              </span>
            ))}
          </p>
          <p className="text-slate-600">
            <Link href="/seo-audit" className="text-violet-600 font-medium hover:underline underline-offset-2">
              ขอ SEO Audit ฟรี
            </Link>
            {" · "}
            <Link href="/contact" className="text-violet-600 font-medium hover:underline underline-offset-2">
              ปรึกษาฟรี
            </Link>
            {" · "}
            <Link href="/services/seo-phuket" className="text-violet-600 font-medium hover:underline underline-offset-2">
              บริการ SEO ภูเก็ต
            </Link>
            {" · "}
            <Link href="/packages/seo-pro-max" className="text-violet-600 font-medium hover:underline underline-offset-2">
              SEO Pro Max (รวม Ads)
            </Link>
            {" · "}
            <Link href="/services/social-media" className="text-violet-600 font-medium hover:underline underline-offset-2">
              รับยิงแอด Facebook ภูเก็ต
            </Link>
          </p>
        </div>
      </HomeSection>

      <HomeSection variant="white">
        <HomeSectionHeader
          eyebrow="ขอบเขตงาน"
          title="รับทำ Google Ads ภูเก็ต"
          titleAccent="ครอบคลุมอะไรบ้าง"
          description="ไม่รับประกันอันดับ 1 — เราวัดจากสิ่งที่ธุรกิจใช้ตัดสินใจจริง เช่น จำนวน lead, การจอง หรือ cost per acquisition"
        />
        <div className="grid sm:grid-cols-2 gap-4 text-sm sm:text-base text-slate-700 leading-relaxed">
          <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-5">
            <h3 className="font-semibold text-slate-900 mb-2">โซนและประเภทธุรกิจ</h3>
            <p>
              ทำงานกับธุรกิจในป่าตอง กะตะ ตัวเมือง ถลาง กมลา กะทู้ — โรงแรม ร้านอาหาร สปา อสังหาฯ ทัวร์ คลินิก
              และ SME ที่ต้องการลูกค้าจาก Google ทันที
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-5">
            <h3 className="font-semibold text-slate-900 mb-2">สิ่งที่เราวัด (ไม่ใช่แค่ impressions)</h3>
            <p>
              CPA, ROAS, conversion จากฟอร์ม โทร หรือการจอง ตามที่ตกลงตอนเริ่มงาน — ดูเปรียบเทียบกับ SEO ที่{" "}
              <Link
                href="/blog/google-ads-vs-seo-phuket"
                className="text-violet-600 font-medium hover:underline underline-offset-2"
              >
                Google Ads vs SEO ภูเก็ต
              </Link>
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-5">
            <h3 className="font-semibold text-slate-900 mb-2">ลำดับงานก่อนยิงแอด</h3>
            <p>
              Google Business Profile และ landing page ที่แปลงผลได้ก่อนเผาเงิน — ตาม{" "}
              <Link
                href="/methodology/phuket-visibility-stack"
                className="text-violet-600 font-medium hover:underline underline-offset-2"
              >
                Phuket Visibility Stack
              </Link>
              {" "}และเช็กจาก{" "}
              <Link
                href="/blog/ying-aep-thi-phak-lek-ngoen-noi"
                className="text-violet-600 font-medium hover:underline underline-offset-2"
              >
                ยิงแอดที่พักงบน้อย
              </Link>
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-5">
            <h3 className="font-semibold text-slate-900 mb-2">ข้อมูลเอเจนซี่แบบ entity</h3>
            <p>
              จุดเด่น บริการ พิกัด และราคาแบบอ้างอิงได้ — ดูที่{" "}
              <Link href="/phuketseo" className="text-violet-600 font-medium hover:underline underline-offset-2">
                หน้า PhuketSEO Entity
              </Link>
              {" "}· NAP ตรงกับ Google Business Profile
            </p>
          </div>
        </div>
      </HomeSection>

      <HomeSection id="features" variant="muted" containerClass="max-w-6xl">
        <HomeSectionHeader
          title="ประเภท Google Ads"
          titleAccent="ที่เราจัดการ"
          centered
          className="mx-auto"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <f.icon size={20} />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </HomeSection>

      <HomeSection variant="white" containerClass="max-w-4xl">
        <HomeSectionHeader
          eyebrow="Google Maps"
          title="รับยิงแอด Google Maps"
          titleAccent="ภูเก็ต ครอบคลุมอะไร?"
          description="รับยิงแอด Google Maps ภูเก็ต คือการโปรโมต Google Business Profile บน Maps ให้ลูกค้าเห็นเมื่อค้นหา near me ในโซนป่าตอง กะตะ ตัวเมือง ถลาง กมลา กะทู้ — เหมาะกับร้าน walk-in ที่ต้องการโทร ขอเส้นทาง หรือดูโปรไฟล์"
        />
        <div className="grid sm:grid-cols-2 gap-4 text-sm sm:text-base text-slate-700 leading-relaxed">
          <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-5">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="text-indigo-600 shrink-0" size={18} />
              <h3 className="font-semibold text-slate-900">แอดโปรโมต GBP/Maps</h3>
            </div>
            <p>
              ตั้งและดูแลแคมเปญโปรโมต listing บน Maps — วัดจากโทร ขอเส้นทาง และการดูโปรไฟล์ รวมใน{" "}
              <Link href="/packages/ads-starter" className="text-violet-600 font-medium hover:underline underline-offset-2">
                แพ็ก Ads Starter ฿6,500/เดือน
              </Link>
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-5">
            <h3 className="font-semibold text-slate-900 mb-2">ลำดับก่อนยิงแอด Maps</h3>
            <p>
              ต้องมี GBP ครบ รีวิว และราคา/เมนูชัดก่อน — ไม่แนะนำยิง Maps โดย listing ว่าง อ่าน{" "}
              <Link
                href="/blog/ying-aep-google-maps-phuket"
                className="text-violet-600 font-medium hover:underline underline-offset-2"
              >
                รับยิงแอด Google Maps ภูเก็ต
              </Link>
            </p>
          </div>
        </div>
      </HomeSection>

      <HomeSection variant="white">
        <HomeSectionHeader
          eyebrow="ปัญหาที่พบบ่อย"
          title="ทำไมธุรกิจในภูเก็ต"
          titleAccent="ยิงแอดแล้วไม่ได้ลูกค้า?"
          description="สาเหตุที่พบบ่อยคือยิงแอดก่อนมี landing page หรือ Google Business Profile ที่แปลงผลได้ — ลูกค้าคลิกแล้วไม่จอง ไม่โทร หรือ bounce สูง"
        />
        <ul className="space-y-2.5 text-sm sm:text-base text-slate-700">
          {commonMistakes.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </HomeSection>

      <HomeSection variant="muted" containerClass="max-w-4xl">
        <HomeSectionHeader
          eyebrow="เปรียบเทียบ"
          title="Google Ads กับ SEO ภูเก็ต"
          titleAccent="ต่างกันอย่างไร?"
          description="Google Ads ภูเก็ต ได้ lead เร็วเมื่อจ่ายงบ SEO ภูเก็ต สร้างฐานระยะยาวโดยไม่จ่ายต่อคลิก — ธุรกิจในภูเก็ตมักใช้ทั้งคู่ตามลำดับงาน"
          centered
          className="mx-auto max-w-2xl"
        />
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-sm sm:text-base text-left">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80">
                <th className="px-4 py-3 font-semibold text-slate-900">มิติ</th>
                <th className="px-4 py-3 font-semibold text-slate-900">Google Ads ภูเก็ต</th>
                <th className="px-4 py-3 font-semibold text-slate-900">SEO ภูเก็ต</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              {adsVsSeoRows.map((row) => (
                <tr key={row.dimension} className="border-b border-slate-100 last:border-0">
                  <td className="px-4 py-3 font-medium text-slate-900">{row.dimension}</td>
                  <td className="px-4 py-3">{row.ads}</td>
                  <td className="px-4 py-3">{row.seo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-slate-600 text-center">
          อ่านเพิ่ม:{" "}
          <Link
            href="/blog/google-ads-vs-seo-phuket"
            className="text-violet-600 font-medium hover:underline underline-offset-2"
          >
            Google Ads vs SEO ภูเก็ต
          </Link>
        </p>
      </HomeSection>

      <HomeSection id="process" variant="white" containerClass="max-w-6xl">
        <HomeSectionHeader
          eyebrow="ขั้นตอน"
          title="กระบวนการรับทำ"
          titleAccent="Google Ads ของเรา"
          description="กระบวนการรับทำ Google Ads ของ PhuketSEO เริ่มจาก audit ในโซนจริง ไม่ใช่เปิดแคมเปญทันที"
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

      <HomeSection variant="muted" containerClass="max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div>
            <HomeSectionHeader title="สิ่งที่รวมอยู่" titleAccent="ในบริการ" className="mb-6" />
            <ul className="space-y-2.5">
              {includedItems.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-700">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <ServicePricingTeaser
            priceLabel="6,500"
            planName="Ads Starter"
            features={["ไม่รวม Ad Spend", "Google หรือ Meta 1 แคมเปญ", "รายงานรายเดือน", "แยกจากค่าทำเว็บ"]}
            proNote="แนะนำทำควบคู่ SEO เพื่อ traffic ระยะสั้น + ยั่งยืน"
          />
        </div>
      </HomeSection>

      <ServiceFaqSection faqs={googleAdsContent.faqs} />

      <HomeSection variant="gradient" containerClass="max-w-2xl">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
            พร้อมรับทำ Google Ads ภูเก็ต?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mb-6 leading-relaxed">
            ขอคำปรึกษาฟรี — เราวิเคราะห์ธุรกิจ โซน และงบ ad spend ที่เหมาะสมก่อนเปิดแคมเปญ
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <GradientButton href="/contact">ขอคำปรึกษาฟรี</GradientButton>
            <Link
              href="/pricing"
              className="text-sm font-medium text-violet-600 hover:underline underline-offset-2"
            >
              ดูราคาแพ็กเกจทั้งหมด
            </Link>
          </div>
        </div>
      </HomeSection>

      <ServicePageCta
        title="เริ่มต้น Google Ads"
        titleAccent="วันนี้?"
        description="ขอคำปรึกษาฟรี เราจะวิเคราะห์ธุรกิจและแนะนำกลยุทธ์ Google Ads ที่เหมาะสม — เห็นผลภายใน 24 ชั่วโมง"
        secondaryHref="/pricing"
      />
    </div>
  );
}
