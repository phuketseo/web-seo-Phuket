import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  FileCheck,
  Camera,
  Navigation,
  Search,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import {
  areaServedPhuket,
  buildBreadcrumb,
  faqSchema,
  localServiceProvider,
} from "@/lib/schema";
import { siteImages } from "@/lib/images";
import { mapsPinServiceContent } from "@/lib/service-content";
import { ServiceFaqSection } from "@/components/ServiceFaqSection";
import { siteConfig } from "@/lib/utils";
import { BrandGradientDefs } from "@/components/BrandGradientDefs";
import { HomeSection, HomeSectionHeader } from "@/components/home/HomeSection";
import { GradientButton } from "@/components/GradientButton";
import { ServiceBreadcrumb } from "@/components/services/ServiceBreadcrumb";
import { ServiceMarketingHero } from "@/components/services/ServiceMarketingHero";

export const metadata: Metadata = {
  title: "รับปักหมุดธุรกิจ Google Maps ภูเก็ต | ยืนยันตำแหน่งร้าน - PhuketSEO",
  description:
    "รับปักหมุดธุรกิจ Google Maps ภูเก็ต ให้หมุดตรงหน้าร้านจริง ในโซนป่าตอง กะตะ ตัวเมือง ถลาง กมลา กะทู้ แก้หมุดผิด ยืนยันตัวตน GBP ก่อนดันอันดับ Maps ขอคำปรึกษาฟรี",
  alternates: { canonical: `${siteConfig.url}/services/google-maps-pin` },
  keywords: [
    "รับปักหมุดธุรกิจ Google Maps ภูเก็ต",
    "รับปักหมุดธุรกิจ",
    "ปักหมุด Google Maps",
    "แก้หมุด Google Maps ผิด",
    "ยืนยันตัวตน Google Business Profile",
    "ปักหมุดธุรกิจภูเก็ต",
  ],
};

const breadcrumbSchema = buildBreadcrumb([
  { name: "หน้าแรก", url: siteConfig.url },
  {
    name: "รับปักหมุดธุรกิจ Google Maps ภูเก็ต",
    url: `${siteConfig.url}/services/google-maps-pin`,
  },
]);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "รับปักหมุดธุรกิจ Google Maps ภูเก็ต",
  alternateName: [
    "รับปักหมุดธุรกิจ",
    "ปักหมุด Google Maps",
    "แก้หมุด Google Maps ผิด",
    "ยืนยันตัวตน Google Business Profile",
  ],
  provider: localServiceProvider,
  description: mapsPinServiceContent.answerBlock,
  areaServed: areaServedPhuket,
  serviceType: "Google Maps Business Pin Setup",
  url: `${siteConfig.url}/services/google-maps-pin`,
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
    description: "มักรวมในแพ็ก SEO Lite หรือคิดค่า setup ตามเคส",
    url: `${siteConfig.url}/packages/seo-lite`,
  },
};

const faqSchemaJson = faqSchema(
  mapsPinServiceContent.faqs.map((f) => ({ question: f.question, answer: f.answer })),
);

const pinProcess: { step: string; title: string; desc: string; icon: LucideIcon }[] = [
  {
    step: "01",
    title: "ตรวจที่อยู่และพิกัด",
    desc: "เทียบป้ายหน้าร้าน ใบทะเบียน และพิกัดบนแผนที่ในโซนจริง",
    icon: Search,
  },
  {
    step: "02",
    title: "ลากหมุดหรือขอแก้",
    desc: "ปรับหมุดใน Google Business Profile หรือขอให้ Google review เมื่อหมุดถูกล็อก",
    icon: MapPin,
  },
  {
    step: "03",
    title: "ยืนยันตัวตน",
    desc: "ช่วยยืนยันทางไปรษณีย์ โทร อีเมล หรือวิดีโอตามที่ Google เสนอ",
    icon: FileCheck,
  },
  {
    step: "04",
    title: "ตั้งโซนและหมวดหมู่",
    desc: "ใส่โซนบริการและหมวดธุรกิจให้ตรงบริการจริง ไม่กว้างเกินไป",
    icon: Navigation,
  },
  {
    step: "05",
    title: "อัปโหลดรูปหน้าร้าน",
    desc: "ใส่รูปที่เห็นป้ายชัด เพื่อช่วยการ review และการค้นหา near me",
    icon: Camera,
  },
  {
    step: "06",
    title: "ส่งต่อดันอันดับ",
    desc: "หลังหมุดพร้อม แนะนำลำดับงาน Local SEO หรือดันอันดับ Maps ต่อเนื่อง",
    icon: MessageCircle,
  },
];

const commonMistakes = [
  "ใช้ที่อยู่บ้านแทนหน้าร้าน ซึ่งผิดนโยบาย Google",
  "สร้าง listing ใหม่ทั้งที่มี listing เดิมอยู่แล้ว",
  "ปักหมุดกลางถนนเพราะอาคารยังไม่ขึ้นในแผนที่",
  "ข้ามขั้นยืนยันตัวตนแล้วไปซื้อรีวิวหรือยิงแอด",
  "จ้างดันอันดับ Maps ก่อนที่หมุดยังผิดหรือยังไม่ยืนยัน",
];

const pinVsLocalRows: { dimension: string; pin: string; local: string }[] = [
  {
    dimension: "เป้าหมาย",
    pin: "หมุดตรงหน้าร้านและยืนยัน GBP ผ่าน",
    local: "โผล่ Maps ต่อเนื่องและได้โทร/เส้นทาง",
  },
  {
    dimension: "ระยะงาน",
    pin: "งานตั้งฐานครั้งเดียวหรือตามเคส",
    local: "ดูแลรายเดือนหลังฐานพร้อม",
  },
  {
    dimension: "เหมาะเมื่อ",
    pin: "เปิดใหม่ ย้ายที่ หมุดผิด หรือยังไม่ยืนยัน",
    local: "listing พร้อมแล้วอยากแข่งในโซน",
  },
  {
    dimension: "ราคาแนวทาง",
    pin: "รวมใน SEO Lite หรือ setup ตามเคส",
    local: "แพ็ก SEO Lite เริ่ม ฿5,900/เดือน",
  },
  {
    dimension: "ลำดับที่ถูก",
    pin: "ทำก่อนดันอันดับและก่อนยิงแอด Maps",
    local: "ทำหลังหมุดและยืนยันผ่านแล้ว",
  },
];

const guideLinks = [
  { href: "/blog/rap-pak-mut-thurakij-phuket", label: "คู่มือรับปักหมุดธุรกิจ" },
  { href: "/blog/google-maps-mai-tid-phuket", label: "Google Maps ไม่ติด" },
  { href: "/blog/dan-andap-google-maps-phuket", label: "ดันอันดับ Google Maps" },
  { href: "/services/local-seo", label: "รับทำ Local SEO" },
  { href: "/packages/seo-lite", label: "แพ็ก SEO Lite" },
  { href: "/pricing", label: "ดูราคาแพ็กเกจ" },
];

const heroStats = [
  { value: "5–14", label: "วันยืนยันไปรษณีย์" },
  { value: "3–7", label: "วันทำการแก้หมุด" },
  { value: "6 โซน", label: "ป่าตองถึงกะทู้" },
  { value: "฿5,900", label: "มักรวมใน Lite/เดือน" },
];

export default function GoogleMapsPinServicePage() {
  return (
    <div>
      <BrandGradientDefs />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaJson) }} />

      <ServiceBreadcrumb serviceName="รับปักหมุดธุรกิจ Google Maps ภูเก็ต" />

      <ServiceMarketingHero
        eyebrow="หน้าบริการหลัก · รับปักหมุดธุรกิจ"
        title="รับปักหมุดธุรกิจ Google Maps ภูเก็ต"
        titleAccent="หมุดตรง ยืนยันผ่าน ก่อนดันอันดับ"
        description="ตั้งและยืนยันตำแหน่งร้านบน Google Business Profile ในโซนป่าตอง กะตะ ตัวเมือง ถลาง กมลา กะทู้ แก้หมุดผิดก่อนแข่งบน Maps"
        answerBlock={mapsPinServiceContent.answerBlock}
        image={{
          ...siteImages.blog.mapsPinHero,
          alt: "รับปักหมุดธุรกิจ Google Maps ภูเก็ต — ยืนยันตำแหน่งร้านบนแผนที่ให้ตรงหน้าร้านจริง",
        }}
        stats={heroStats}
        trustBadges={["ตั้งหมุดให้ถูก", "ยืนยันตัวตน GBP", "ก่อนดันอันดับ", "ขอใบเสนอราคาได้"]}
        secondaryHref="#process"
        secondaryLabel="ดูขั้นตอนการทำงาน"
      />

      <HomeSection variant="muted" className="border-t-0">
        <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
          {mapsPinServiceContent.intro.map((paragraph) => (
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
            <Link href="/phuketseo" className="text-violet-600 font-medium hover:underline underline-offset-2">
              ข้อมูล PhuketSEO (Entity)
            </Link>
          </p>
        </div>
      </HomeSection>

      <HomeSection variant="white">
        <HomeSectionHeader
          eyebrow="ขอบเขตงาน"
          title="รับปักหมุดธุรกิจ"
          titleAccent="ครอบคลุมอะไรบ้าง"
          description="ไม่รับประกันอันดับ 1 เราวัดจากหมุดตรงหน้าร้าน ยืนยันผ่าน และลูกค้าขอเส้นทางถูก"
        />
        <div className="grid sm:grid-cols-2 gap-4 text-sm sm:text-base text-slate-700 leading-relaxed">
          <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-5">
            <h3 className="font-semibold text-slate-900 mb-2">โซนและประเภทธุรกิจ</h3>
            <p>
              ช่วยร้านในป่าตอง กะตะ ตัวเมือง ถลาง กมลา กะทู้ เช่น ร้านอาหาร สปา คลินิก คาเฟ่ และ SME
              ที่พึ่งลูกค้าค้น near me ก่อนมาหน้าร้าน
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-5">
            <h3 className="font-semibold text-slate-900 mb-2">สิ่งที่ได้</h3>
            <ul className="space-y-2">
              {mapsPinServiceContent.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </HomeSection>

      <HomeSection variant="muted">
        <HomeSectionHeader
          eyebrow="ปัญหาที่พบบ่อย"
          title="ทำไมร้านมีที่อยู่แล้ว"
          titleAccent="ลูกค้ายังหาไม่เจอ?"
          description="สาเหตุที่พบบ่อยคือหมุดผิดซอย ยังไม่ยืนยันตัวตน หรือมี listing ซ้ำ ไม่ใช่แค่ยังไม่ได้ยิงแอด"
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

      <HomeSection variant="white" containerClass="max-w-4xl">
        <HomeSectionHeader
          eyebrow="เปรียบเทียบ"
          title="ปักหมุดกับรับทำ Local SEO"
          titleAccent="ต่างกันอย่างไร?"
          description="ปักหมุดตั้งฐานตำแหน่ง Local SEO ดูแล Maps รายเดือนหลังฐานพร้อม อย่าสลับลำดับ"
          centered
          className="mx-auto max-w-2xl"
        />
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-sm sm:text-base text-left">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80">
                <th className="px-4 py-3 font-semibold text-slate-900">มิติ</th>
                <th className="px-4 py-3 font-semibold text-slate-900">รับปักหมุดธุรกิจ</th>
                <th className="px-4 py-3 font-semibold text-slate-900">รับทำ Local SEO</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              {pinVsLocalRows.map((row) => (
                <tr key={row.dimension} className="border-b border-slate-100 last:border-0">
                  <td className="px-4 py-3 font-medium text-slate-900">{row.dimension}</td>
                  <td className="px-4 py-3">{row.pin}</td>
                  <td className="px-4 py-3">{row.local}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-slate-600 text-center">
          อ่านเพิ่ม:{" "}
          <Link
            href="/services/local-seo"
            className="text-violet-600 font-medium hover:underline underline-offset-2"
          >
            รับทำ Local SEO
          </Link>
          {" · "}
          <Link
            href="/blog/dan-andap-google-maps-phuket"
            className="text-violet-600 font-medium hover:underline underline-offset-2"
          >
            ดันอันดับ Google Maps
          </Link>
        </p>
      </HomeSection>

      <HomeSection id="process" variant="muted" containerClass="max-w-6xl">
        <HomeSectionHeader
          eyebrow="ขั้นตอน"
          title="กระบวนการรับปักหมุด"
          titleAccent="ธุรกิจ Google Maps"
          description="กระบวนการรับปักหมุดธุรกิจ Google Maps ภูเก็ตเริ่มจากพิกัดจริง ไม่ใช่สร้าง listing ใหม่ทุกครั้ง"
          centered
          className="mx-auto max-w-2xl"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {pinProcess.map((p) => (
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

      <HomeSection variant="white" containerClass="max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div>
            <HomeSectionHeader
              eyebrow="ราคา"
              title="ค่าปักหมุด"
              titleAccent="และยืนยัน GBP"
              className="mb-6"
              description="ไม่สร้างราคาปลอม ใช้แนวทางเดียวกับแพ็กที่มีอยู่แล้ว"
            />
            <ul className="space-y-2.5 text-sm sm:text-base text-slate-700">
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
                มักรวมในแพ็ก SEO Lite เริ่ม ฿5,900/เดือน
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
                เคส listing ซ้ำ หรือโดนระงับ คิดค่า setup แยกตามความซับซ้อน
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
                เริ่มจาก audit listing ฟรีก่อนเสนอขอบเขตงาน
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
                หลังหมุดพร้อม ต่อด้วยรับทำ Local SEO ได้ทันที
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-violet-200 bg-white p-6 sm:p-8 shadow-sm h-full flex flex-col">
            <p className="text-sm text-slate-600">แนวทางราคา</p>
            <p className="text-4xl font-bold text-slate-900 tabular-nums mt-1 tracking-tight">฿5,900</p>
            <p className="text-sm text-slate-500 mb-6">/เดือน · มักรวมใน SEO Lite</p>
            <ul className="space-y-2.5 mb-8 flex-1 text-sm text-slate-700">
              {["ตั้งหมุดและยืนยัน GBP", "แก้หมุดผิดตามเคส", "audit listing ก่อนเริ่ม", "ต่อยอด Local SEO ได้"].map(
                (f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
                    {f}
                  </li>
                ),
              )}
            </ul>
            <GradientButton href="/contact" className="w-full justify-center">
              ขอใบเสนอราคา
            </GradientButton>
            <p className="text-xs text-slate-500 text-center mt-3">
              <Link href="/packages/seo-lite" className="text-violet-600 hover:underline underline-offset-2">
                ดูแพ็ก SEO Lite
              </Link>
              {" · "}
              <Link href="/pricing" className="text-violet-600 hover:underline underline-offset-2">
                ราคาทั้งหมด
              </Link>
            </p>
          </div>
        </div>
      </HomeSection>

      <ServiceFaqSection faqs={mapsPinServiceContent.faqs} />

      <HomeSection variant="gradient" containerClass="max-w-2xl">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
            พร้อมรับปักหมุดธุรกิจ Google Maps ภูเก็ต?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mb-6 leading-relaxed">
            ขอคำปรึกษาฟรี เรอดูหมุดและสถานะยืนยันก่อนบอกลำดับงานที่ควรทำ
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <GradientButton href="/contact" className="px-7">
              ขอคำปรึกษาฟรี
            </GradientButton>
            <Link
              href="/seo-audit"
              className="text-sm font-medium text-violet-600 hover:underline underline-offset-2"
            >
              ขอ SEO Audit ฟรี
            </Link>
            <Link
              href="/services/local-seo"
              className="inline-flex items-center justify-center text-sm font-medium px-6 py-3 rounded-lg border border-slate-200 text-slate-700 hover:border-violet-200 hover:bg-violet-50/50 transition-colors"
            >
              ดูรับทำ Local SEO
            </Link>
          </div>
        </div>
      </HomeSection>
    </div>
  );
}
