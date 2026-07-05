"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle, AlertCircle, Loader2, Search, Globe, MapPin, BarChart3 } from "lucide-react";
import { localServiceProvider } from "@/lib/schema";
import { siteConfig } from "@/lib/utils";
import { responseTimeCopy } from "@/lib/response-times";
import { formInputClass } from "@/lib/form-styles";
import { ContactChannels } from "@/components/ContactChannels";
import { BrandGradientDefs } from "@/components/BrandGradientDefs";
import { HomeSection, HomeSectionHeader } from "@/components/home/HomeSection";
import { MarketingBreadcrumb } from "@/components/MarketingBreadcrumb";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "ขอ SEO Audit ฟรี — PhuketSEO",
  description: "วิเคราะห์ SEO เว็บไซต์และ Google Maps สำหรับธุรกิจในภูเก็ต",
  url: `${siteConfig.url}/seo-audit`,
  provider: localServiceProvider,
};

const auditIncludes = [
  { icon: Globe, text: "Technical SEO + On-page ของเว็บ" },
  { icon: MapPin, text: "Google Business Profile & Local visibility" },
  { icon: BarChart3, text: "คู่แข่งและ keyword โซนภูเก็ต" },
  { icon: Search, text: "Quick wins + แนะนำแพ็ก Lite / Pro / Max" },
];

type FormStatus = "idle" | "loading" | "success" | "error";

export default function SeoAuditPage() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("auditName") as HTMLInputElement).value,
      email: (form.elements.namedItem("auditEmail") as HTMLInputElement).value,
      phone: (form.elements.namedItem("auditPhone") as HTMLInputElement).value,
      business: (form.elements.namedItem("websiteUrl") as HTMLInputElement).value,
      service: "ขอ SEO Audit ฟรี",
      message: `ประเภทธุรกิจ: ${(form.elements.namedItem("businessType") as HTMLInputElement).value}\nKeywords: ${(form.elements.namedItem("targetKeywords") as HTMLInputElement).value}`,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "เกิดข้อผิดพลาด");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "เกิดข้อผิดพลาด กรุณาลองใหม่");
    }
  }

  return (
    <div className="pt-[var(--site-header-height)]">
      <BrandGradientDefs />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="home-section-bg-white border-b border-slate-100/80">
        <div className="container-custom max-w-4xl py-10 sm:py-12">
          <MarketingBreadcrumb
            items={[
              { label: "หน้าแรก", href: "/" },
              { label: "SEO Audit ฟรี" },
            ]}
          />
          <HomeSectionHeader
            eyebrow="ฟรี — ไม่มีข้อผูกมัด"
            title="ขอ SEO Audit"
            titleAccent="ฟรี"
            description={responseTimeCopy.auditFormIntro}
            className="mb-0"
          />
        </div>
      </section>

      <HomeSection variant="muted" className="border-t-0" containerClass="max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Audit ครอบคลุมอะไรบ้าง</h2>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              เหมาะกับธุรกิจในภูเก็ต ที่อยากรู้ว่าควรเริ่มจาก Maps, เว็บ หรือ content — เราส่งรายงานพร้อม quick wins
              ไม่ใช่แค่ checklist ทั่วไป
            </p>
            <ul className="space-y-3 mb-8">
              {auditIncludes.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-violet-50 rounded-lg flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-violet-600" />
                  </div>
                  <span className="text-slate-700 text-sm sm:text-base pt-1.5 leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-slate-500">
              มีคำถามทั่วไปหรืออยากคุยเรื่องแพ็ก?{" "}
              <Link href="/contact" className="text-violet-600 font-medium hover:underline underline-offset-2">
                ไปหน้าติดต่อ
              </Link>
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-2">กรอกข้อมูลขอ Audit</h2>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">{responseTimeCopy.auditFormIntro}</p>

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="w-14 h-14 text-violet-600 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">รับคำขอแล้ว!</h3>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">{responseTimeCopy.auditReportThankYou}</p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="btn-gradient-brand px-6 py-2.5 text-sm"
                >
                  ส่งอีกครั้ง
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="auditName" className="block text-sm font-medium text-slate-800 mb-1.5">
                      ชื่อ <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="auditName"
                      name="auditName"
                      required
                      autoComplete="name"
                      className={formInputClass}
                      placeholder="ชื่อของคุณ"
                    />
                  </div>
                  <div>
                    <label htmlFor="auditPhone" className="block text-sm font-medium text-slate-800 mb-1.5">
                      เบอร์โทร <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="auditPhone"
                      name="auditPhone"
                      required
                      autoComplete="tel"
                      className={formInputClass}
                      placeholder="08XXXXXXXX"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="auditEmail" className="block text-sm font-medium text-slate-800 mb-1.5">
                    อีเมล <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="auditEmail"
                    name="auditEmail"
                    required
                    autoComplete="email"
                    className={formInputClass}
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="websiteUrl" className="block text-sm font-medium text-slate-800 mb-1.5">
                    URL เว็บไซต์ <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="url"
                    id="websiteUrl"
                    name="websiteUrl"
                    required
                    className={formInputClass}
                    placeholder="https://www.yourwebsite.com"
                  />
                </div>
                <div>
                  <label htmlFor="businessType" className="block text-sm font-medium text-slate-800 mb-1.5">
                    ประเภทธุรกิจ
                  </label>
                  <input
                    type="text"
                    id="businessType"
                    name="businessType"
                    className={formInputClass}
                    placeholder="โรงแรม, ร้านอาหาร, อสังหาฯ"
                  />
                </div>
                <div>
                  <label htmlFor="targetKeywords" className="block text-sm font-medium text-slate-800 mb-1.5">
                    Keywords เป้าหมาย
                  </label>
                  <input
                    type="text"
                    id="targetKeywords"
                    name="targetKeywords"
                    className={formInputClass}
                    placeholder="SEO ภูเก็ต, โรงแรม ภูเก็ต"
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-700 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                    <AlertCircle size={16} className="shrink-0" /> {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-gradient-brand w-full flex items-center justify-center gap-2 py-3 px-6 text-sm disabled:opacity-60"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> กำลังส่ง...
                    </>
                  ) : (
                    "รับ SEO Audit ฟรี"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-10 lg:mt-12">
          <ContactChannels showAuditLink={false} />
        </div>
      </HomeSection>
    </div>
  );
}
