import type { Metadata } from "next";
import Link from "next/link";
import {
  Target,
  Megaphone,
  BarChart3,
  Share2,
  MessageCircle,
  ImageIcon,
  type LucideIcon,
} from "lucide-react";
import { siteConfig, defaultOgImage } from "@/lib/utils";
import {
  areaServedPhuket,
  buildBreadcrumb,
  faqSchema,
  localServiceProvider,
} from "@/lib/schema";
import { siteImages } from "@/lib/images";
import { socialMediaContent } from "@/lib/service-content";
import { ServiceFaqSection } from "@/components/ServiceFaqSection";
import { BrandGradientDefs } from "@/components/BrandGradientDefs";
import { HomeSection, HomeSectionHeader } from "@/components/home/HomeSection";
import { GradientButton } from "@/components/GradientButton";
import { ServiceBreadcrumb } from "@/components/services/ServiceBreadcrumb";
import { ServiceMarketingHero } from "@/components/services/ServiceMarketingHero";

export const metadata: Metadata = {
  title: "รับยิงแอด Facebook ภูเก็ต | Meta Ads สำหรับธุรกิจท้องถิ่น - PhuketSEO",
  description:
    "รับยิงแอด Facebook ภูเก็ต บริหาร Meta Ads บน Facebook และ Instagram ในโซนป่าตอง กะตะ ตัวเมือง ถลาง กมลา กะทู้ ค่าจัดการเริ่ม ฿3,000/เดือน ไม่รวม ad spend ขอคำปรึกษาฟรี",
  alternates: { canonical: `${siteConfig.url}/services/social-media` },
  keywords: [
    "รับยิงแอด facebook ภูเก็ต",
    "รับยิงแอด Facebook ภูเก็ต",
    "ยิงแอด Facebook ภูเก็ต",
    "Facebook Ads ภูเก็ต",
    "Meta Ads ภูเก็ต",
  ],
  openGraph: {
    title: "รับยิงแอด Facebook ภูเก็ต | Meta Ads - PhuketSEO",
    description:
      "รับยิงแอด Facebook ภูเก็ต — Meta Ads ค่าจัดการเริ่ม ฿3,000/เดือน สำหรับธุรกิจในโซนจริง",
    url: `${siteConfig.url}/services/social-media`,
    type: "website",
    images: [defaultOgImage],
  },
};

const breadcrumbSchema = buildBreadcrumb([
  { name: "หน้าแรก", url: siteConfig.url },
  { name: "รับยิงแอด Facebook ภูเก็ต", url: `${siteConfig.url}/services/social-media` },
]);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "รับยิงแอด Facebook ภูเก็ต",
  alternateName: [
    "รับยิงแอด facebook ภูเก็ต",
    "ยิงแอด Facebook ภูเก็ต",
    "Facebook Ads ภูเก็ต",
    "Meta Ads ภูเก็ต",
  ],
  provider: localServiceProvider,
  description: socialMediaContent.answerBlock,
  areaServed: areaServedPhuket,
  serviceType: "Facebook Ads Management",
  url: `${siteConfig.url}/services/social-media`,
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
  socialMediaContent.faqs.map((f) => ({ question: f.question, answer: f.answer })),
);

const metaProcess: { step: string; title: string; desc: string; icon: LucideIcon }[] = [
  {
    step: "01",
    title: "คุยเป้าหมายและงบ",
    desc: "กำหนด lead booking หรือ awareness และงบ ad spend ที่ร้านรับได้ในโซน",
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
    desc: "เลือกกลุ่มเป้าหมายในโซนและทดสอบภาพ วิดีโอ ข้อความบน Facebook และ Instagram",
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
    desc: "ถ้าต้องการคนที่กำลังค้นหา เติม Google Ads หรือฐาน SEO/Maps ตามลำดับงาน",
    icon: MessageCircle,
  },
];

const commonMistakes = [
  "เปิดแอดก่อนตั้ง Pixel หรือ conversion ทำให้ไม่รู้ว่าอะไรขายได้",
  "ใช้ creative เดียวทั้งเดือนโดยไม่ทดสอบภาพหรือข้อความ",
  "ยิงกว้างทั้งเกาะโดยไม่แยกโซนป่าตอง กะตะ หรือตัวเมือง",
  "ส่งคนไปหน้าปลายทางช้าหรือไม่มีปุ่ม LINE/โทร",
  "หยุดแอดแล้วคิดว่าผลจะค้างเหมือน SEO ทั้งที่ traffic จากแอดหายทันที",
];

const fbVsGoogleRows: { dimension: string; facebook: string; google: string }[] = [
  {
    dimension: "จับลูกค้าเมื่อ",
    facebook: "กำลังเลื่อนฟีด ยังไม่ค้นหา หรือเคยเห็นแบรนด์แล้ว",
    google: "กำลังพิมพ์ค้นหาบริการอยู่แล้ว",
  },
  {
    dimension: "เห็นผล",
    facebook: "เริ่มแสดงได้ภายใน 24–48 ชม. หลังเปิดแคมเปญ",
    google: "เริ่มแสดงได้ภายใน 24–48 ชม. หลังผ่านการตรวจ",
  },
  {
    dimension: "เหมาะเมื่อ",
    facebook: "โปรโมชัน high season หรือ retarget คนเคยเข้าเว็บ",
    google: "ต้องการ lead จากคำค้นที่มี demand ชัด",
  },
  {
    dimension: "ค่าใช้จ่าย",
    facebook: "ค่าจัดการบวกงบยิงแอดบน Meta",
    google: "ค่าจัดการบวกงบยิงแอดบน Google",
  },
  {
    dimension: "ลำดับที่มักถูก",
    facebook: "หลังมีหน้าปลายทางและ Pixel พร้อม",
    google: "หลัง listing หรือเว็บพร้อมแปลงผล",
  },
];

const guideLinks = [
  { href: "/services/google-ads", label: "รับทำ Google Ads ภูเก็ต" },
  { href: "/services/facebook-ads", label: "รับยิงแอด Facebook ทั่วประเทศ" },
  { href: "/packages/ads-starter", label: "แพ็ก แพ็กโฆษณา" },
  { href: "/packages/seo-pro-max", label: "SEO Pro Max รวม Meta" },
  { href: "/services/seo-phuket", label: "รับทำ SEO ภูเก็ต" },
  { href: "/pricing", label: "ดูราคาแพ็กเกจ" },
];

const heroStats = [
  { value: "฿3,000", label: "ค่าจัดการ/เดือน" },
  { value: "24–48 ชม.", label: "เริ่มแสดงแอด" },
  { value: "FB + IG", label: "แพลตฟอร์มหลัก" },
  { value: "0", label: "สัญญาผูกมัด" },
];

export default function SocialMediaPage() {
  return (
    <div>
      <BrandGradientDefs />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaJson) }} />

      <ServiceBreadcrumb serviceName="รับยิงแอด Facebook ภูเก็ต" />

      <ServiceMarketingHero
        eyebrow="หน้าบริการหลัก · รับยิงแอด Facebook ภูเก็ต"
        title="รับยิงแอด Facebook ภูเก็ต"
        titleAccent="Meta Ads ที่วัด lead ได้"
        description="บริหาร Facebook และ Instagram Ads สำหรับธุรกิจในป่าตอง กะตะ ตัวเมือง ถลาง กมลา กะทู้ ค่าจัดการเริ่ม ฿3,000/เดือน"
        answerBlock={socialMediaContent.answerBlock}
        image={siteImages.services.socialMedia}
        stats={heroStats}
        trustBadges={["แพ็กโฆษณา ฿3,000", "Facebook + Instagram", "รายงานรายเดือน", "ไม่มีสัญญาผูกมัด"]}
        secondaryHref="#process"
        secondaryLabel="ดูขั้นตอนการทำงาน"
      />

      <HomeSection variant="muted" className="border-t-0">
        <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
          {socialMediaContent.intro.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
          <p className="text-slate-600">
            อ่านที่เกี่ยวข้อง:{" "}
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
            <Link href="/contact" className="text-violet-600 font-medium hover:underline underline-offset-2">
              ปรึกษาฟรี
            </Link>
            {" · "}
            <Link href="/" className="text-violet-600 font-medium hover:underline underline-offset-2">
              รับยิงแอด ภูเก็ต
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
          title="รับยิงแอด Facebook ภูเก็ต"
          titleAccent="ครอบคลุมอะไรบ้าง"
          description="ไม่รับประกันยอดขาย เราวัดจาก lead การจอง หรือต้นทุนต่อ conversion ที่ตกลงตอนเริ่มงาน"
        />
        <div className="grid sm:grid-cols-2 gap-4 text-sm sm:text-base text-slate-700 leading-relaxed">
          <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-5">
            <h3 className="font-semibold text-slate-900 mb-2">โซนและประเภทธุรกิจ</h3>
            <p>
              ทำงานกับธุรกิจในป่าตอง กะตะ ตัวเมือง ถลาง กมลา กะทู้ เช่น ร้านอาหาร สปา โรงแรม คลินิก และ SME
              ที่ต้องการ reach บน Facebook และ Instagram
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-5">
            <h3 className="font-semibold text-slate-900 mb-2">สิ่งที่ได้ในแพ็ก</h3>
            <ul className="space-y-2">
              {socialMediaContent.deliverables.map((item) => (
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
          title="ทำไมยิงแอด Facebook แล้ว"
          titleAccent="งบหมดโดยไม่ได้ lead?"
          description="สาเหตุที่พบบ่อยคือยังไม่ตั้ง conversion ให้วัดได้ หรือหน้าปลายทางยังไม่พร้อม ไม่ใช่แค่ยังไม่ได้เพิ่มงบ"
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
          title="Facebook Ads กับ Google Ads"
          titleAccent="ต่างกันอย่างไร?"
          description="Facebook จับคนบนฟีด Google จับคนที่กำลังค้นหา ธุรกิจในภูเก็ตมักใช้ทั้งคู่ตามจังหวะงาน"
          centered
          className="mx-auto max-w-2xl"
        />
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-sm sm:text-base text-left">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80">
                <th className="px-4 py-3 font-semibold text-slate-900">มิติ</th>
                <th className="px-4 py-3 font-semibold text-slate-900">รับยิงแอด Facebook ภูเก็ต</th>
                <th className="px-4 py-3 font-semibold text-slate-900">Google Ads</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              {fbVsGoogleRows.map((row) => (
                <tr key={row.dimension} className="border-b border-slate-100 last:border-0">
                  <td className="px-4 py-3 font-medium text-slate-900">{row.dimension}</td>
                  <td className="px-4 py-3">{row.facebook}</td>
                  <td className="px-4 py-3">{row.google}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-slate-600 text-center">
          อ่านเพิ่ม:{" "}
          <Link
            href="/services/google-ads"
            className="text-violet-600 font-medium hover:underline underline-offset-2"
          >
            รับทำ Google Ads ภูเก็ต
          </Link>
          {" · "}
          <Link href="/" className="text-violet-600 font-medium hover:underline underline-offset-2">
            รับยิงแอด ภูเก็ต
          </Link>
        </p>
      </HomeSection>

      <HomeSection id="process" variant="muted" containerClass="max-w-6xl">
        <HomeSectionHeader
          eyebrow="ขั้นตอน"
          title="กระบวนการรับยิงแอด"
          titleAccent="Facebook ภูเก็ต"
          description="กระบวนการรับยิงแอด Facebook ภูเก็ตของ PhuketSEO เริ่มจากเป้าหมายและ Pixel ไม่ใช่เปิดแอดแล้วค่อยวัด"
          centered
          className="mx-auto max-w-2xl"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {metaProcess.map((p) => (
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
              title="ค่าจัดการ"
              titleAccent="Meta Ads"
              className="mb-6"
              description="แพ็ก แพ็กโฆษณา ชัดเจน ไม่ผูกสัญญา ยกเลิกได้ทุกเดือน"
            />
            <ul className="space-y-2.5 text-sm sm:text-base text-slate-700">
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
                แพ็กโฆษณา ฿3,000/เดือน — Meta 1 แคมเปญ
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
                ไม่รวม ad spend จ่ายตรงแพลตฟอร์ม
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
                หรือรวมใน SEO Pro Max ฿15,000/เดือน คู่กับ Google Ads
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
                ไม่มีสัญญาผูกมัด ยกเลิกได้ตามรอบบิล
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-violet-200 bg-white p-6 sm:p-8 shadow-sm h-full flex flex-col">
            <p className="text-sm text-slate-600">เริ่มต้นที่</p>
            <p className="text-4xl font-bold text-slate-900 tabular-nums mt-1 tracking-tight">฿3,000</p>
            <p className="text-sm text-slate-500 mb-6">/เดือน · แพ็กโฆษณา (Meta)</p>
            <ul className="space-y-2.5 mb-8 flex-1 text-sm text-slate-700">
              {["Facebook + Instagram 1 แคมเปญ", "ไม่รวม Ad Spend", "รายงานรายเดือน", "ไม่มีสัญญาผูกมัด"].map(
                (f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
                    {f}
                  </li>
                ),
              )}
            </ul>
            <GradientButton href="/packages/ads-starter" className="w-full justify-center">
              ดูแพ็ก แพ็กโฆษณา
            </GradientButton>
            <p className="text-xs text-slate-500 text-center mt-3">
              <Link href="/pricing" className="text-violet-600 hover:underline underline-offset-2">
                ดูแพ็กเกจทั้งหมด
              </Link>
            </p>
          </div>
        </div>
      </HomeSection>

      <ServiceFaqSection faqs={socialMediaContent.faqs} />

      <HomeSection variant="gradient" containerClass="max-w-2xl">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
            พร้อมรับยิงแอด Facebook ภูเก็ต?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mb-6 leading-relaxed">
            ขอคำปรึกษาฟรี เราวางแผน Meta Ads ตามโซนธุรกิจและงบที่รับได้จริง
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <GradientButton href="/contact" className="px-7">
              ขอคำปรึกษาฟรี
            </GradientButton>
            <Link
              href="/pricing"
              className="text-sm font-medium text-violet-600 hover:underline underline-offset-2"
            >
              ดูราคาแพ็กเกจทั้งหมด
            </Link>
            <Link
              href="/services/google-ads"
              className="inline-flex items-center justify-center text-sm font-medium px-6 py-3 rounded-lg border border-slate-200 text-slate-700 hover:border-violet-200 hover:bg-violet-50/50 transition-colors"
            >
              ดู Google Ads
            </Link>
          </div>
        </div>
      </HomeSection>
    </div>
  );
}

