import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { siteImages, type SiteImage } from "@/lib/images";
import { pricingPackages } from "@/lib/pricing-packages";
import { GradientButton } from "@/components/GradientButton";
import { HomeSection, HomeSectionHeader } from "@/components/home/HomeSection";
import { PricingPlanGrid } from "@/components/pricing/PricingPlanGrid";

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
    title: "รับยิงแอด Google & Facebook",
    desc: "ลูกค้าค้นหาอยู่แล้ว เราช่วยให้เจอร้านคุณบน Google หรือ Facebook",
    meta: "จาก ฿6,500/เดือน",
    href: "/services/google-ads",
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
    q: "รับยิงแอด Google/Meta เริ่มเท่าไหร่?",
    a: "แพ็ก Ads Starter ฿6,500/เดือน — เลือก Google Ads (Search/Maps) หรือ Meta Ads (Facebook/Instagram) 1 แคมเปญ ค่ายิงแอดแยก ยกเลิกได้ทุกเดือน",
  },
  {
    q: "ทำเว็บไซต์ภูเก็ตเท่าไหร่?",
    a: "แพ็กเว็บ Starter ฿6,500 ครั้งเดียว ไม่เกิน 10 หน้า ดูแลโดเมน/โฮสต์ ฿4,500/ปี แยกจากแพ็กยิงแอด",
  },
  {
    q: "SEO ขายแยกจากเว็บได้ไหม?",
    a: "ไม่ได้ — SEO Add-on +฿6,500/เดือน บวกกับแพ็กเว็บ Starter หรือเว็บจาก PhuketSEO เท่านั้น สัญญาขั้นต่ำ 12 เดือน",
  },
  {
    q: "Google Ads กับ SEO ต่างกันอย่างไร?",
    a: "Google Ads ได้ lead เร็วแต่จ่าย ad spend ต่อเนื่อง SEO compound ช้ากว่าแต่ยั่งยืน — หลายธุรกิจเริ่มแอดก่อน แล้วบวก SEO เมื่อมีเว็บ",
  },
  {
    q: "มีรายงานผลให้ดูไหม?",
    a: "แพ็กแอดส่งรายงานรายเดือน (คลิก, lead, ค่าใช้จ่าย) SEO Add-on ส่งรายงาน GSC + GBP Insights รายเดือน",
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
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <HomeSection id="services" variant="muted">
        <HomeSectionHeader
          eyebrow="บริการ"
          title="เริ่มจากอะไร"
          titleAccent="ก่อนดีที่สุด"
          description="อยากให้ลูกค้าโทรหรือทัก LINE เร็วๆ เริ่มจากยิงแอดก่อนได้ ยังไม่ต้องมีเว็บ เมื่อพร้อมแล้วค่อยทำเว็บ หรือให้เว็บขึ้นหน้า Google ทีหลัง"
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
