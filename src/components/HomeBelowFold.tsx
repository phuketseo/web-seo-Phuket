import { ChevronDown } from "lucide-react";
import { GradientButton } from "@/components/GradientButton";
import { HomeSection, HomeSectionHeader } from "@/components/home/HomeSection";
import { HomeServicesSection } from "@/components/home/HomeServicesSection";
import { PricingTabsSection } from "@/components/pricing/PricingTabsSection";
import { areaServedPhuket, localServiceProvider } from "@/lib/schema";
import { siteConfig } from "@/lib/utils";

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
    desc: "เลือกระยะสัญญาโฆษณาและ SEO ได้ชัดเจน ดูราคารวมก่อนเริ่ม",
  },
];

const faqs = [
  {
    q: "รับยิงแอด ภูเก็ต คืออะไร?",
    a: "รับยิงแอด ภูเก็ตคือการจ้างดูแลโฆษณา Google หรือ Facebook ให้ร้านในภูเก็ตโผล่ตอนลูกค้าค้นหา แล้วโทรหรือทัก LINE ได้ ค่าบริการเริ่ม ฿3,000/เดือน (สัญญารายปี) ค่ายิงแอดจ่ายแพลตฟอร์มแยก",
  },
  {
    q: "รับยิงแอด ภูเก็ต ราคาเท่าไหร่?",
    a: "ค่าบริการโฆษณา Meta/Google ตามสัญญา: รายเดือน ฿6,000 · 3 เดือน ฿5,000 · 6 เดือน ฿4,000 · ปี ฿3,000 ต่อเดือน ค่ายิงแอดแยก",
  },
  {
    q: "รับยิงแอด Facebook ภูเก็ต ต่างจาก Google Ads ยังไง?",
    a: "Facebook Ads จับคนบนฟีดและ retarget Google Ads จับคนที่กำลังค้นหา ค่าบริการแพ็กเดียวกัน เริ่ม ฿3,000–6,000/เดือนตามระยะสัญญา",
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
    "รับยิงแอด ภูเก็ตบน Google และ Facebook สำหรับธุรกิจในป่าตอง กะตะ ตัวเมือง ถลาง กมลา กะทู้ ค่าบริการเริ่ม ฿3,000/เดือน ไม่รวม ad spend",
  areaServed: areaServedPhuket,
  url: siteConfig.url,
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

      <HomeSection id="services" variant="muted" containerClass="max-w-6xl">
        <HomeServicesSection />
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
          <PricingTabsSection defaultTab="ads" showPricingLink />
      </HomeSection>

      <HomeSection variant="muted" containerClass="max-w-4xl">
          <HomeSectionHeader
            eyebrow="FAQ"
            title="คำถามที่"
            titleAccent="พบบ่อย"
            description="สรุปสั้นๆ ก่อนติดต่อ — ถามเพิ่มได้ตลอด"
            centered
            className="mb-8"
          />

          <div className="mx-auto w-full max-w-md sm:max-w-[50%] divide-y divide-slate-200 border border-slate-200 bg-white rounded-xl shadow-sm overflow-hidden">
            {faqs.map((f) => (
              <details key={f.q} className="group px-4 sm:px-5 py-0.5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-3.5 text-sm font-medium text-slate-900 touch-manipulation active:text-violet-700 sm:hover:text-violet-700 transition-colors [&::-webkit-details-marker]:hidden">
                  <span className="pr-2 group-open:text-violet-700">{f.q}</span>
                  <ChevronDown
                    size={16}
                    className="shrink-0 text-slate-400 group-open:text-violet-600 transition-transform group-open:rotate-180"
                    aria-hidden
                  />
                </summary>
                <p className="pb-3.5 text-sm text-slate-700 sm:text-slate-600 leading-relaxed">{f.a}</p>
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
