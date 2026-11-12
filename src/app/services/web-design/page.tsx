import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Code,
  Layout,
  FileText,
  Rocket,
  MessageCircle,
  Search,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { siteConfig, defaultOgImage } from "@/lib/utils";
import {
  areaServedPhuket,
  buildBreadcrumb,
  faqSchema,
  localServiceProvider,
} from "@/lib/schema";
import { siteImages, type SiteImage } from "@/lib/images";
import { webDesignContent } from "@/lib/service-content";
import { caseStudies } from "@/lib/case-studies-data";
import { ServiceFaqSection } from "@/components/ServiceFaqSection";
import { BrandGradientDefs } from "@/components/BrandGradientDefs";
import { HomeSection, HomeSectionHeader } from "@/components/home/HomeSection";
import { GradientButton } from "@/components/GradientButton";
import { ServiceBreadcrumb } from "@/components/services/ServiceBreadcrumb";
import { ServiceMarketingHero } from "@/components/services/ServiceMarketingHero";

export const metadata: Metadata = {
  title: "รับทำเว็บไซต์ภูเก็ต | เว็บเร็ว Next.js พร้อม SEO - PhuketSEO",
  description:
    "รับทำเว็บไซต์ภูเก็ต ด้วย Next.js mobile-first สำหรับธุรกิจในป่าตอง กะตะ ตัวเมือง ถลาง กมลา กะทู้ พร้อมโครงสร้าง SEO แพ็ก Starter ฿6,500 ครั้งเดียว ขอคำปรึกษาฟรี",
  keywords: [
    "รับทำเว็บไซต์ภูเก็ต",
    "ทำเว็บไซต์ภูเก็ต",
    "ออกแบบเว็บไซต์ภูเก็ต",
    "สร้างเว็บไซต์ภูเก็ต",
    "เว็บดีไซน์ภูเก็ต",
    "รับทำเว็บ Next.js ภูเก็ต",
  ],
  alternates: { canonical: `${siteConfig.url}/services/web-design` },
  openGraph: {
    title: "รับทำเว็บไซต์ภูเก็ต | เว็บเร็ว Next.js พร้อม SEO - PhuketSEO",
    description:
      "รับทำเว็บไซต์ภูเก็ต Next.js mobile-first พร้อม SEO structure แพ็ก Starter ฿6,500 ไม่เกิน 10 หน้า",
    url: `${siteConfig.url}/services/web-design`,
    type: "website",
    images: [defaultOgImage],
  },
};

const breadcrumbSchema = buildBreadcrumb([
  { name: "หน้าแรก", url: siteConfig.url },
  { name: "รับทำเว็บไซต์ภูเก็ต", url: `${siteConfig.url}/services/web-design` },
]);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "รับทำเว็บไซต์ภูเก็ต",
  alternateName: [
    "ทำเว็บไซต์ภูเก็ต",
    "ออกแบบเว็บไซต์ภูเก็ต",
    "สร้างเว็บไซต์ภูเก็ต",
    "เว็บดีไซน์ภูเก็ต",
    "รับทำเว็บ Next.js ภูเก็ต",
  ],
  provider: localServiceProvider,
  description: webDesignContent.answerBlock,
  areaServed: areaServedPhuket,
  serviceType: "Web Design",
  url: `${siteConfig.url}/services/web-design`,
  offers: {
    "@type": "Offer",
    priceCurrency: "THB",
    price: "6500",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "THB",
      price: "6500",
    },
    url: `${siteConfig.url}/packages/web-starter`,
  },
};

const faqSchemaJson = faqSchema(
  webDesignContent.faqs.map((f) => ({ question: f.question, answer: f.answer })),
);

const webProcess: { step: string; title: string; desc: string; icon: LucideIcon }[] = [
  {
    step: "01",
    title: "Brief ธุรกิจและโซน",
    desc: "เก็บเป้าหมาย จำนวนหน้า ภาษา และโซนบริการ เช่น ป่าตอง กะตะ ตัวเมือง",
    icon: MessageCircle,
  },
  {
    step: "02",
    title: "ออกแบบโครงหน้า",
    desc: "วางหน้าสำคัญ CTA LINE และฟอร์มให้ลูกค้าจากมือถือติดต่อได้ทันที",
    icon: Layout,
  },
  {
    step: "03",
    title: "Build ด้วย Next.js",
    desc: "พัฒนา mobile-first ด้วย Next.js และ Tailwind ให้โหลดเร็วบนมือถือ",
    icon: Code,
  },
  {
    step: "04",
    title: "โครงสร้าง SEO พื้นฐาน",
    desc: "ใส่ title meta heading schema และ sitemap ตั้งแต่ก่อน launch",
    icon: Search,
  },
  {
    step: "05",
    title: "Launch และส่งมอบ",
    desc: "ตั้งโดเมน โฮสต์ ตรวจมือถือ และส่งมอบพร้อมคู่มือใช้งานสั้นๆ",
    icon: Rocket,
  },
  {
    step: "06",
    title: "ดูแลต่อเนื่อง",
    desc: "ต่ออายุโดเมนรายปี หรือบวก SEO Add-on เมื่อพร้อมดัน Maps และ organic",
    icon: FileText,
  },
];

const commonMistakes = [
  "จ้าง design สวยโดยไม่มี title meta schema และ sitemap แล้วต้องแก้ SEO ทีหลัง",
  "ใช้เทมเพลตช้าบนมือถือ ทั้งที่ลูกค้าในภูเก็ตค้นจากมือถือเป็นหลัก",
  "ไม่มีปุ่ม LINE ฟอร์ม หรือเบอร์โทรที่กดได้ ทำให้ traffic ไม่แปลงเป็น lead",
  "คัดลอกข้อความจากร้านอื่นโดยไม่ใส่โซนป่าตอง กะตะ ตัวเมืองตามธุรกิจจริง",
  "ยิงแอดก่อนที่หน้าปลายทางพร้อมความเร็วและ CTA",
];

const webVsTemplateRows: { dimension: string; phuketseo: string; template: string }[] = [
  {
    dimension: "ความเร็วมือถือ",
    phuketseo: "ออกแบบ mobile-first ด้วย Next.js",
    template: "ขึ้นกับเทมเพลตและ plugin ที่ติดตั้ง",
  },
  {
    dimension: "SEO structure",
    phuketseo: "title meta schema sitemap ใส่ตั้งแต่ build",
    template: "มักต้องติดตั้งเพิ่มหรือจ้างแก้ทีหลัง",
  },
  {
    dimension: "เหมาะเมื่อ",
    phuketseo: "ต้องการเว็บแปลง lead ในโซนภูเก็ตจริง",
    template: "ทดลองเองได้ถ้ามีเวลาดูแลความเร็วและปลั๊กอิน",
  },
  {
    dimension: "ราคาเริ่ม",
    phuketseo: "Starter ฿6,500 ครั้งเดียว ไม่เกิน 10 หน้า",
    template: "ค่าเทมเพลตถูก แต่ค่าเวลาและแก้ทีหลังมักสะสม",
  },
  {
    dimension: "หลัง launch",
    phuketseo: "ดูแลโดเมน ฿4,500/ปี หรือบวก SEO รายเดือน",
    template: "ต้องอัปเดตโฮสต์ ปลั๊กอิน และความปลอดภัยเอง",
  },
];

const guideLinks = [
  { href: "/blog/rab-tam-web-phuket", label: "คู่มือรับทำเว็บไซต์ภูเก็ต" },
  { href: "/blog/web-design-phuket-real-estate", label: "เว็บอสังหาฯ ภูเก็ต" },
  { href: "/services/seo-phuket", label: "รับทำ SEO ภูเก็ต" },
  { href: "/packages/web-starter", label: "แพ็กเว็บ Starter" },
  { href: "/packages/seo-addon", label: "บวก SEO กับเว็บ" },
  { href: "/pricing", label: "ดูราคาแพ็กเกจ" },
];

const heroStats = [
  { value: "฿6,500", label: "Starter ครั้งเดียว" },
  { value: "10 หน้า", label: "สูงสุดในแพ็ก" },
  { value: "Next.js", label: "mobile-first" },
  { value: "฿4,500/ปี", label: "ดูแลโดเมน" },
];

const portfolioScreenshots: Record<string, SiteImage> = {
  "hob-thai-massage-cherngtalay": siteImages.portfolio.hobThaiMassage,
  "house-of-beauty-phuket-8-branches": siteImages.portfolio.houseOfBeauty,
};

/** ข้อความพรีวิวแบบแชร์ลิงก์ LINE / Meta */
const portfolioLinkPreview: Record<string, { title: string; description: string }> = {
  "hob-thai-massage-cherngtalay": {
    title: "Massage Near Me | From ฿400 | Open 10AM–12AM | Cherngtalay",
    description:
      "Thai, foot & oil massage near Bang Tao, Boat Avenue & Laguna. Walk-ins welcome — open daily 10:00–24:00.",
  },
  "house-of-beauty-phuket-8-branches": {
    title: "House of Beauty Phuket — Premium Hair & Beauty Salon",
    description:
      "Haircuts, colour, nails and lashes at 8 branches across Phuket. Book on WhatsApp — no prepayment.",
  },
};

/** ผลงานเว็บไซต์ลูกค้าจริง — การ์ดพรีวิวแบบแชร์ลิงก์ */
const webPortfolio = caseStudies
  .filter((s) => Boolean(s.clientUrl) && s.services.includes("เว็บไซต์") && portfolioScreenshots[s.slug])
  .slice(0, 2)
  .map((s) => ({
    client: s.client,
    url: s.clientUrl!,
    host: s.clientUrl!.replace(/^https?:\/\//, "").replace(/\/$/, ""),
    caseHref: `/case-studies/${s.slug}`,
    image: portfolioScreenshots[s.slug],
    title: portfolioLinkPreview[s.slug]?.title ?? s.title,
    description: portfolioLinkPreview[s.slug]?.description ?? s.challenge,
  }));

export default function WebDesignServicePage() {
  return (
    <div>
      <BrandGradientDefs />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaJson) }} />

      <ServiceBreadcrumb serviceName="รับทำเว็บไซต์ภูเก็ต" />

      <ServiceMarketingHero
        eyebrow="หน้าบริการหลัก · รับทำเว็บไซต์ภูเก็ต"
        title="รับทำเว็บไซต์ภูเก็ต"
        titleAccent="เร็ว ติด Google พร้อมแปลง lead"
        description="ทำเว็บไซต์ภูเก็ตด้วย Next.js mobile-first สำหรับธุรกิจในป่าตอง กะตะ ตัวเมือง ถลาง กมลา กะทู้ พร้อมโครงสร้าง SEO และ CTA ชัด"
        answerBlock={webDesignContent.answerBlock}
        image={siteImages.services.webDesign}
        stats={heroStats}
        trustBadges={["Starter ฿6,500", "Mobile-first", "SEO structure พื้นฐาน", "ดูแลหลัง launch"]}
        secondaryHref="#process"
        secondaryLabel="ดูขั้นตอนการทำงาน"
      />

      <HomeSection variant="muted" className="border-t-0">
        <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
          {webDesignContent.intro.map((paragraph) => (
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

      <HomeSection variant="white" containerClass="max-w-5xl">
        <HomeSectionHeader
          eyebrow="ผลงาน"
          title="เว็บไซต์"
          titleAccent="ที่เราทำจริง"
          description="พรีวิวแบบแชร์ลิงก์บน LINE / Meta — คลิกการ์ดเพื่อเปิดเว็บจริง"
          centered
          className="mx-auto max-w-2xl"
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {webPortfolio.map((item) => (
            <div key={item.url} className="space-y-2 min-w-0">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:border-slate-300 hover:shadow-md transition-all duration-200"
                aria-label={`เปิดลิงก์ ${item.client}`}
              >
                <div className="relative aspect-[1.91/1] bg-slate-100">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 40vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="border-t border-slate-100 bg-[#f0f2f5] px-3.5 py-3 group-hover:bg-[#e7e9ee] transition-colors">
                  <p className="truncate text-[11px] font-medium uppercase tracking-wide text-slate-500">
                    {item.host}
                  </p>
                  <p className="mt-0.5 line-clamp-2 text-[15px] font-semibold leading-snug text-slate-900">
                    {item.title}
                  </p>
                  <p className="mt-0.5 line-clamp-2 text-[13px] leading-snug text-slate-600">
                    {item.description}
                  </p>
                </div>
              </a>
              <div className="flex flex-wrap items-center gap-3 px-0.5">
                <span className="text-xs text-slate-500">{item.client}</span>
                <Link
                  href={item.caseHref}
                  className="inline-flex items-center gap-1 text-xs font-medium text-violet-600 hover:underline underline-offset-2"
                >
                  อ่านเคส
                  <ArrowRight size={12} aria-hidden />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-slate-600">
          <Link href="/case-studies" className="text-violet-600 font-medium hover:underline underline-offset-2">
            ดูผลงานทั้งหมด
          </Link>
        </p>
      </HomeSection>

      <HomeSection variant="muted">
        <HomeSectionHeader
          eyebrow="ขอบเขตงาน"
          title="รับทำเว็บไซต์ภูเก็ต"
          titleAccent="ครอบคลุมอะไรบ้าง"
          description="ไม่รับประกันอันดับ 1 เราวัดจากเว็บที่โหลดเร็วบนมือถือ มี CTA ชัด และพร้อมเป็นหน้าปลายทางของ Maps SEO หรือ Ads"
        />
        <div className="grid sm:grid-cols-2 gap-4 text-sm sm:text-base text-slate-700 leading-relaxed">
          <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-5">
            <h3 className="font-semibold text-slate-900 mb-2">โซนและประเภทธุรกิจ</h3>
            <p>
              ทำงานกับธุรกิจในป่าตอง กะตะ ตัวเมือง ถลาง กมลา กะทู้ เช่น ร้านอาหาร สปา คลินิก อสังหาฯ และ SME
              ที่ต้องการเว็บภาษาไทยและช่องทางติดต่อบนมือถือ
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-5">
            <h3 className="font-semibold text-slate-900 mb-2">สิ่งที่ได้ในแพ็ก</h3>
            <ul className="space-y-2">
              {webDesignContent.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </HomeSection>

      <HomeSection variant="white">
        <HomeSectionHeader
          eyebrow="ปัญหาที่พบบ่อย"
          title="ทำไมร้านมีเว็บแล้ว"
          titleAccent="ยังไม่แปลงลูกค้า?"
          description="สาเหตุที่พบบ่อยคือเว็บช้าบนมือถือ ไม่มี CTA หรือไม่มีโครงสร้าง SEO ตั้งแต่แรก ไม่ใช่แค่ยังไม่ได้ยิงแอด"
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
          title="รับทำเว็บไซต์ภูเก็ต"
          titleAccent="ต่างจากเทมเพลตทั่วไปอย่างไร?"
          description="ทำเว็บกับ PhuketSEO เน้นความเร็วมือถือและโครงสร้าง SEO ตั้งแต่แรก ต่างจากการซื้อเทมเพลตแล้วค่อยแก้ทีหลัง"
          centered
          className="mx-auto max-w-2xl"
        />
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-sm sm:text-base text-left">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80">
                <th className="px-4 py-3 font-semibold text-slate-900">มิติ</th>
                <th className="px-4 py-3 font-semibold text-slate-900">รับทำเว็บไซต์ภูเก็ต</th>
                <th className="px-4 py-3 font-semibold text-slate-900">เทมเพลต / WordPress สำเร็จรูป</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              {webVsTemplateRows.map((row) => (
                <tr key={row.dimension} className="border-b border-slate-100 last:border-0">
                  <td className="px-4 py-3 font-medium text-slate-900">{row.dimension}</td>
                  <td className="px-4 py-3">{row.phuketseo}</td>
                  <td className="px-4 py-3">{row.template}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-slate-600 text-center">
          อ่านเพิ่ม:{" "}
          <Link
            href="/blog/rab-tam-web-phuket"
            className="text-violet-600 font-medium hover:underline underline-offset-2"
          >
            คู่มือรับทำเว็บไซต์ภูเก็ต
          </Link>
          {" · "}
          <Link
            href="/services/seo-phuket"
            className="text-violet-600 font-medium hover:underline underline-offset-2"
          >
            รับทำ SEO ภูเก็ต
          </Link>
        </p>
      </HomeSection>

      <HomeSection id="process" variant="muted" containerClass="max-w-6xl">
        <HomeSectionHeader
          eyebrow="ขั้นตอน"
          title="กระบวนการรับทำ"
          titleAccent="เว็บไซต์ภูเก็ตของเรา"
          description="กระบวนการรับทำเว็บไซต์ภูเก็ตของ PhuketSEO เริ่มจาก brief ในโซนจริง ไม่ใช่แค่ส่งเทมเพลต"
          centered
          className="mx-auto max-w-2xl"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {webProcess.map((p) => (
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
              title="ค่าเว็บไซต์"
              titleAccent="ครั้งเดียว"
              className="mb-6"
              description="แพ็กเว็บ Starter ชัดเจน ไม่ผูก SEO รายเดือนจนกว่าจะพร้อมบวกเพิ่ม"
            />
            <ul className="space-y-2.5 text-sm sm:text-base text-slate-700">
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
                เว็บ Starter ฿6,500 ครั้งเดียว ไม่เกิน 10 หน้า
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
                ดูแลโดเมนและโฮสต์ ฿4,500/ปี
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
                SEO Add-on +฿6,500/เดือน เมื่อบวกกับเว็บ ขั้นต่ำ 12 เดือน
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
                งานใหญ่หรือหลายภาษา ติดต่อใบเสนอราคา
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-violet-200 bg-white p-6 sm:p-8 shadow-sm h-full flex flex-col">
            <p className="text-sm text-slate-600">เริ่มต้นที่</p>
            <p className="text-4xl font-bold text-slate-900 tabular-nums mt-1 tracking-tight">฿6,500</p>
            <p className="text-sm text-slate-500 mb-6">ครั้งเดียว · เว็บ Starter</p>
            <ul className="space-y-2.5 mb-8 flex-1 text-sm text-slate-700">
              {["ไม่เกิน 10 หน้า", "Next.js mobile-first", "SEO structure พื้นฐาน", "ดูแลรายปี ฿4,500"].map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <GradientButton href="/packages/web-starter" className="w-full justify-center">
              ดูแพ็กเว็บ Starter
            </GradientButton>
            <p className="text-xs text-slate-500 text-center mt-3">
              <Link href="/pricing" className="text-violet-600 hover:underline underline-offset-2">
                ดูแพ็กเกจทั้งหมด
              </Link>
            </p>
          </div>
        </div>
      </HomeSection>

      <ServiceFaqSection faqs={webDesignContent.faqs} />

      <HomeSection variant="gradient" containerClass="max-w-2xl">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
            พร้อมรับทำเว็บไซต์ภูเก็ต?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mb-6 leading-relaxed">
            ขอคำปรึกษาฟรี เราดูจำนวนหน้า โซนธุรกิจ และบอกลำดับงานที่ควรทำก่อนยิงแอดหรือทำ SEO
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
              href="/packages/web-starter"
              className="inline-flex items-center justify-center text-sm font-medium px-6 py-3 rounded-lg border border-slate-200 text-slate-700 hover:border-violet-200 hover:bg-violet-50/50 transition-colors"
            >
              ดูแพ็กเว็บ Starter
            </Link>
          </div>
        </div>
      </HomeSection>
    </div>
  );
}
