"use client";

import { useState } from "react";
import Link from "next/link";
import { Home, CheckCircle, AlertCircle, Loader2, Search, Globe, MapPin, BarChart3 } from "lucide-react";
import { localServiceProvider } from "@/lib/schema";
import { siteConfig } from "@/lib/utils";
import { responseTimeCopy } from "@/lib/response-times";
import { ContactChannels } from "@/components/ContactChannels";

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
    <div className="min-h-screen bg-white text-gray-800">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="bg-gradient-to-r from-blue-950 to-blue-800 pt-32 pb-16 text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="flex items-center justify-center gap-2 text-sm text-blue-300 mb-6">
            <Link href="/" className="flex items-center gap-1 hover:text-white transition-colors">
              <Home size={13} /> หน้าแรก
            </Link>
            <span>/</span>
            <span className="text-white">SEO Audit ฟรี</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/30 text-green-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
            ฟรี — ไม่มีข้อผูกมัด
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">ขอ SEO Audit ฟรี</h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">{responseTimeCopy.auditFormIntro}</p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <section>
            <h2 className="text-2xl font-serif font-bold text-blue-950 mb-4">Audit ครอบคลุมอะไรบ้าง</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              เหมาะกับธุรกิจในภูเก็ต ที่อยากรู้ว่าควรเริ่มจาก Maps, เว็บ หรือ content — เราส่งรายงานพร้อม quick wins
              ไม่ใช่แค่ checklist ทั่วไป
            </p>
            <ul className="space-y-4 mb-8">
              {auditIncludes.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-green-600" />
                  </div>
                  <span className="text-gray-700 pt-2">{text}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-500">
              มีคำถามทั่วไปหรืออยากคุยเรื่องแพ็ก?{" "}
              <Link href="/contact" className="text-blue-700 font-medium hover:underline">
                ไปหน้าติดต่อ
              </Link>
            </p>
          </section>

          <section className="bg-blue-950 p-8 rounded-2xl shadow-sm text-white">
            <h2 className="text-2xl font-serif font-bold mb-2">กรอกข้อมูลขอ Audit</h2>
            <p className="text-blue-200 text-sm mb-6">{responseTimeCopy.auditFormIntro}</p>

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <CheckCircle className="w-16 h-16 text-green-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">รับคำขอแล้ว!</h3>
                <p className="text-blue-200 mb-6">{responseTimeCopy.auditReportThankYou}</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
                >
                  ส่งอีกครั้ง
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="auditName" className="block text-sm font-medium text-blue-200 mb-1.5">
                      ชื่อ <span className="text-green-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="auditName"
                      name="auditName"
                      required
                      className="block w-full px-4 py-2.5 bg-blue-900/50 border border-blue-700 rounded-lg text-white placeholder-blue-400 focus:ring-2 focus:ring-green-400 focus:border-green-400 text-sm"
                      placeholder="ชื่อของคุณ"
                    />
                  </div>
                  <div>
                    <label htmlFor="auditPhone" className="block text-sm font-medium text-blue-200 mb-1.5">
                      เบอร์โทร <span className="text-green-400">*</span>
                    </label>
                    <input
                      type="tel"
                      id="auditPhone"
                      name="auditPhone"
                      required
                      className="block w-full px-4 py-2.5 bg-blue-900/50 border border-blue-700 rounded-lg text-white placeholder-blue-400 focus:ring-2 focus:ring-green-400 focus:border-green-400 text-sm"
                      placeholder="08XXXXXXXX"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="auditEmail" className="block text-sm font-medium text-blue-200 mb-1.5">
                    อีเมล <span className="text-green-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="auditEmail"
                    name="auditEmail"
                    required
                    className="block w-full px-4 py-2.5 bg-blue-900/50 border border-blue-700 rounded-lg text-white placeholder-blue-400 focus:ring-2 focus:ring-green-400 focus:border-green-400 text-sm"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="websiteUrl" className="block text-sm font-medium text-blue-200 mb-1.5">
                    URL เว็บไซต์ <span className="text-green-400">*</span>
                  </label>
                  <input
                    type="url"
                    id="websiteUrl"
                    name="websiteUrl"
                    required
                    className="block w-full px-4 py-2.5 bg-blue-900/50 border border-blue-700 rounded-lg text-white placeholder-blue-400 focus:ring-2 focus:ring-green-400 focus:border-green-400 text-sm"
                    placeholder="https://www.yourwebsite.com"
                  />
                </div>
                <div>
                  <label htmlFor="businessType" className="block text-sm font-medium text-blue-200 mb-1.5">
                    ประเภทธุรกิจ
                  </label>
                  <input
                    type="text"
                    id="businessType"
                    name="businessType"
                    className="block w-full px-4 py-2.5 bg-blue-900/50 border border-blue-700 rounded-lg text-white placeholder-blue-400 focus:ring-2 focus:ring-green-400 focus:border-green-400 text-sm"
                    placeholder="โรงแรม, ร้านอาหาร, อสังหาฯ"
                  />
                </div>
                <div>
                  <label htmlFor="targetKeywords" className="block text-sm font-medium text-blue-200 mb-1.5">
                    Keywords เป้าหมาย
                  </label>
                  <input
                    type="text"
                    id="targetKeywords"
                    name="targetKeywords"
                    className="block w-full px-4 py-2.5 bg-blue-900/50 border border-blue-700 rounded-lg text-white placeholder-blue-400 focus:ring-2 focus:ring-green-400 focus:border-green-400 text-sm"
                    placeholder="SEO ภูเก็ต, โรงแรม ภูเก็ต"
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-300 text-sm bg-red-900/30 border border-red-700/50 rounded-lg px-4 py-3">
                    <AlertCircle size={16} /> {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-green-500 hover:bg-green-600 disabled:opacity-60 text-white font-semibold rounded-lg transition-colors text-sm"
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
          </section>
        </div>

        <section className="mt-14 max-w-md mx-auto lg:max-w-none lg:mx-0">
          <ContactChannels showAuditLink={false} />
        </section>
      </main>
    </div>
  );
}
