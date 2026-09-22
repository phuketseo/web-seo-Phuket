import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { siteImages, type SiteImage } from "@/lib/images";
import { pricingPackages } from "@/lib/pricing-packages";
import { GradientButton } from "@/components/GradientButton";
import { HomeSection, HomeSectionHeader } from "@/components/home/HomeSection";
import { PricingPlanGrid } from "@/components/pricing/PricingPlanGrid";
import { areaServedPhuket, localServiceProvider } from "@/lib/schema";
import { siteConfig } from "@/lib/utils";

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
    iconImage: siteImages.icons.googleAds,
    title: "รับยิงแอด ภูเก็ต",
    desc: "ยิงแอด Google หรือ Facebook ให้ลูกค้าในป่าตอง กะตะ ตัวเมืองเจอร้านคุณ",
    meta: "จาก ฿6,500/เดือน",
    href: "/packages/ads-starter",
  },
  {
    num: "02",
    iconImage: siteImages.icons.webDesign,
    title: "ทำเว็บไซต์ภูเก็ต",
    desc: "สำหรับร้านที่ยังไม่มีเว็บ มีฟอร์มและปุ่ม LINE ให้ลูกค้าทักได้",
    meta: "฿6,500 ครั้งเดียว",
    href: "/services/web-design",
  },
  {
    num: "03",
    iconImage: siteImages.icons.seo,
    title: "บวก SEO กับเว็บ",
    desc: "สำหรับร้านที่มีเว็บแล้ว อยากให้ติด Google และ Maps มากขึ้น สัญญา 1 ปี",
    meta: "+฿6,500/เดือน",
    href: "/packages/seo-addon",
  },
  {
    num: "04",
    title: "ดูแลเว็บรายปี",
    desc: "ต่ออายุโดเมนและโฮสต์ให้เว็บไม่ล่ม ไม่รวมแก้ข้อความในเว็บ",
    meta: "฿4,500/ปี",
    href: "/packages/annual-care",
  },
];

const whyUs = [
  {
    title: "โฟกัสธุรกิจไทยในภูเก็ต",
    desc: "เข้าใจตลาดท้องถิ่น — ร้านอาหาร สปา อสังหาฯ SME ในแต่ละย่าน",
  },
  {
    title: "ผลลัพธ์วัดได้จริง",
    desc: "ส่งรายงานทุกเดือน — จำนวนลูกค้าที่ติดต่อ ค่าใช้จ่ายแอด และการมองเห็นบน Google",
  },
  {
    title: "แพ็กแอดยืดหยุ่น",
    desc: "ยิงแอดไม่ผูกสัญญา บวก SEO กับเว็บขั้นต่ำ 1 ปี",
  },
];

const faqs = [
  {
    q: "รับยิงแอด ภูเก็ต คืออะไร?",
    a: "รับยิงแอด ภูเก็ตคือการจ้างดูแลโฆษณา Google หรือ Facebook ให้ร้านในภูเก็ตโผล่ตอนลูกค้าค้นหา แล้วโทรหรือทัก LINE ได้ ค่าจัดการเริ่ม ฿6,500/เดือน ค่ายิงแอดจ่ายแพลตฟอร์มแยก",
  },
  {
    q: "รับยิงแอด ภูเก็ต ราคาเท่าไหร่?",
    a: "แพ็ก Ads Starter ฿6,500/เดือน สำหรับ 1 แคมเปญ เลือก Google Ads หรือ Facebook Ads ค่ายิงแอดแยก ไม่มีสัญญาผูกมัด ยกเลิกได้ทุกเดือน",
  },
  {
    q: "ยังไม่มีเว็บ เริ่มยิงแอดได้ไหม?",
    a: "เริ่มได้เลย ใช้ LINE หรือ Google Maps เป็นปลายทางก่อนได้ เมื่อพร้อมค่อยทำเว็บแยก ไม่ต้องซื้อครบชุดวันแรก",
  },
  {
    q: "ยิงแอดแล้วเห็นผลช้าแค่ไหน?",
    a: "คลิกมักเริ่มเห็นหลังโฆษณาผ่านการตรวจและเปิดแสดงแล้ว ต้นทุนต่อลูกค้าที่นิ่งขึ้นมักใช้เวลาปรับ 2–4 สัปดาห์ ขึ้นกับโซนและงบ",
  },
  {
    q: "ยิงแอดเองได้ไหม?",
    a: "ทำเองได้ถ้ามีเวลาเรียนระบบบิดและวัดผล หลายร้านในภูเก็ตจ้างเพราะไม่อยากทดลองบนงบโฆษณาเอง",
  },
  {
    q: "SEO กับ Google Ads ต่างกันยังไง?",
    a: "Google Ads ได้ลูกค้าเร็วแต่จ่ายต่อคลิก SEO สะสมการมองเห็นช้ากว่าแต่ไม่จ่ายต่อคลิก หลายร้านเริ่มจากยิงแอด แล้วบวก SEO เมื่อมีเว็บ",
  },
  {
    q: "ทำ SEO แล้วหยุดได้มั้ย?",
    a: "หยุดได้ แต่คู่แข่งในป่าตอง กะตะ ตัวเมืองไม่หยุด การมองเห็นที่สะสมมักค่อยๆ ลดถ้าไม่ดูแลเว็บและ Maps ต่อ",
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

const homeAdsServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "รับยิงแอด ภูเก็ต",
  alternateName: ["รับยิงแอด Google ภูเก็ต", "รับยิงแอด Facebook ภูเก็ต", "รับทำแอด ภูเก็ต"],
  provider: localServiceProvider,
  description:
    "รับยิงแอด ภูเก็ตบน Google และ Facebook สำหรับธุรกิจในป่าตอง กะตะ ตัวเมือง ถลาง กมลา กะทู้ ค่าจัดการเริ่ม ฿6,500/เดือน ไม่รวม ad spend",
  areaServed: areaServedPhuket,
  url: siteConfig.url,
  offers: {
    "@type": "Offer",
    priceCurrency: "THB",
    price: "6500",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      priceCurrency: "THB",
      price: "6500",
      unitText: "MONTH",
    },
  },
};

export default function HomeBelowFold() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeAdsServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <HomeSection id="services" variant="muted">
        <HomeSectionHeader
          eyebrow="บริการ"
          title="รับยิงแอด ภูเก็ต"
          titleAccent="เริ่มจากตรงนี้"
          description="รับยิงแอด ภูเก็ตทำงานโดยดึงลูกค้าที่กำลังค้นหาบน Google หรือ Facebook เข้ามาโทรหรือทัก LINE ก่อน เว็บและ SEO ทำทีหลังเมื่อพร้อม"
        />

          <ul className="flex flex-col gap-3 sm:gap-0 sm:divide-y sm:divide-slate-200 sm:border-y sm:border-slate-200 sm:bg-white sm:rounded-lg sm:overflow-hidden">
            {services.map((s) => (
              <li
                key={s.href}
                className="rounded-xl border border-slate-200 bg-white shadow-sm sm:rounded-none sm:border-0 sm:shadow-none"
              >
                <Link
                  href={s.href}
                  className="group relative z-10 flex gap-3 sm:gap-8 p-5 sm:p-8 touch-manipulation active:bg-violet-50 sm:hover:bg-slate-50/80 transition-colors duration-150"
                >
                  <span className="text-xs font-semibold text-indigo-600 sm:text-slate-400 tabular-nums pt-1 shrink-0 w-6">
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
                      <h3 className="text-base sm:text-lg font-semibold text-slate-900 group-active:text-violet-600 sm:group-hover:text-violet-600 transition-colors">
                        {s.title}
                      </h3>
                      <span className="text-xs text-slate-600 sm:text-slate-500 shrink-0">{s.meta}</span>
                    </div>
                    <p className="text-sm text-slate-700 sm:text-slate-600 leading-relaxed">{s.desc}</p>
                  </div>
                  <ArrowRight
                    size={18}
                    className="shrink-0 self-center text-violet-500 sm:text-slate-300 sm:group-hover:text-violet-500 sm:group-hover:translate-x-0.5 transition-all"
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>
      </HomeSection>

      <HomeSection variant="white">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-12">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <HomeSectionHeader
                eyebrow="ทำไมเลือกเรา"
                title="ธุรกิจในภูเก็ต"
                titleAccent="ไว้ใจเรา"
                description="ไม่ขายฝัน — วัดผลได้ รายงานชัด แพ็กแอดไม่ผูกสัญญา"
                className="mb-0 lg:mb-0"
              />
            </div>
            <ol className="space-y-6 sm:space-y-7">
              {whyUs.map((w, i) => (
                <li key={w.title} className="flex gap-4 sm:gap-5">
                  <span className="text-sm font-semibold text-indigo-600 tabular-nums shrink-0 pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1.5">{w.title}</h3>
                    <p className="text-sm text-slate-700 sm:text-slate-600 leading-relaxed">{w.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
      </HomeSection>

      <HomeSection variant="white">
          <HomeSectionHeader
            eyebrow="ราคา"
            title="แพ็ก"
            titleAccent="ยิงแอด / เว็บ / SEO"
            description="SEO บวกกับเว็บเท่านั้น ดูรายละเอียดและราคาเต็มที่หน้าราคา"
          />

          <PricingPlanGrid packages={pricingPackages} featureLimit={5} />
          <p className="mt-6 md:mt-8 text-sm text-slate-600 text-center md:text-left">
            <Link
              href="/pricing"
              className="text-violet-600 font-medium hover:underline underline-offset-2"
            >
              ดูรายละเอียดแพ็กทั้งหมด
            </Link>
          </p>
      </HomeSection>

      <HomeSection variant="muted" containerClass="max-w-3xl">
          <HomeSectionHeader
            eyebrow="FAQ"
            title="คำถามที่"
            titleAccent="พบบ่อย"
            description="สรุปสั้นๆ ก่อนติดต่อ — ถามเพิ่มได้ตลอด"
          />

          <div className="divide-y divide-slate-200 border border-slate-200 bg-white rounded-xl shadow-sm overflow-hidden">
            {faqs.map((f) => (
              <details key={f.q} className="group px-5 sm:px-6 py-0.5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-sm sm:text-base font-medium text-slate-900 touch-manipulation active:text-violet-700 sm:hover:text-violet-700 transition-colors [&::-webkit-details-marker]:hidden">
                  <span className="pr-2 group-open:text-violet-700">{f.q}</span>
                  <ChevronDown
                    size={18}
                    className="shrink-0 text-slate-400 group-open:text-violet-600 transition-transform group-open:rotate-180"
                    aria-hidden
                  />
                </summary>
                <p className="pb-4 text-sm text-slate-700 sm:text-slate-600 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
      </HomeSection>

      <HomeSection variant="gradient" containerClass="max-w-2xl">
          <div className="text-center">
            <HomeSectionHeader
              title="วิเคราะห์ธุรกิจของคุณ"
              titleAccent="ก่อนเริ่ม"
              description="ขอคำปรึกษาฟรี — แพ็กแอดยกเลิกได้ทุกเดือน SEO Add-on ขั้นต่ำ 12 เดือนเมื่อบวกกับเว็บ"
              centered
              className="mb-7 md:mb-8"
            />
            <GradientButton href="/contact" className="px-7">
              ขอคำปรึกษาฟรี
            </GradientButton>
          </div>
      </HomeSection>
    </>
  );
}
