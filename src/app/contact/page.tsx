"use client";

import { useState } from "react";
import Link from "next/link";
import { Home, Mail, Phone, Building, MessageSquare, Globe, Search, MapPin, Clock, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { siteConfig } from "@/lib/utils";
import { organizationJsonLd } from "@/lib/schema";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "หน้าแรก", item: `${siteConfig.url}/` },
        { "@type": "ListItem", position: 2, name: "ติดต่อเรา", item: `${siteConfig.url}/contact` },
      ],
    },
    {
      ...organizationJsonLd,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: siteConfig.phoneInternational,
        email: siteConfig.email,
        contactType: "customer service",
        areaServed: "TH",
        availableLanguage: ["Thai", "English"],
      },
    },
  ],
};

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const [auditStatus, setAuditStatus] = useState<FormStatus>("idle");
  const [auditError, setAuditError] = useState("");

  async function handleContactSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      business: (form.elements.namedItem("business") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      service: "ติดต่อทั่วไป",
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

  async function handleAuditSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setAuditStatus("loading");
    setAuditError("");

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
      setAuditStatus("success");
      form.reset();
    } catch (err) {
      setAuditStatus("error");
      setAuditError(err instanceof Error ? err.message : "เกิดข้อผิดพลาด กรุณาลองใหม่");
    }
  }

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-950 to-blue-800 pt-32 pb-16 text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="flex items-center justify-center gap-2 text-sm text-blue-300 mb-6">
            <Link href="/" className="flex items-center gap-1 hover:text-white transition-colors">
              <Home size={13} /> หน้าแรก
            </Link>
            <span>/</span>
            <span className="text-white">ติดต่อเรา</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">ติดต่อเรา</h1>
          <p className="text-xl text-blue-200">เราพร้อมรับฟังและช่วยให้ธุรกิจของคุณเติบโตในภูเก็ต</p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Form */}
          <section className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-serif font-bold text-blue-950 mb-2">แบบฟอร์มติดต่อ</h2>
            <p className="text-gray-500 text-sm mb-6">กรอกข้อมูลด้านล่าง เราจะติดต่อกลับภายใน 1 วันทำการ</p>

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">ส่งข้อความสำเร็จ!</h3>
                <p className="text-gray-500 mb-6">ขอบคุณที่ติดต่อมาครับ เราจะตอบกลับภายใน 1 วันทำการ</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="px-6 py-2 bg-blue-950 text-white rounded-lg hover:bg-blue-900 transition-colors"
                >
                  ส่งข้อความอื่น
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                    ชื่อ-นามสกุล <span className="text-red-500">*</span>
                  </label>
                  <input type="text" id="name" name="name" required
                    className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 focus:border-green-400 text-sm"
                    placeholder="ชื่อของคุณ" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                      อีเมล <span className="text-red-500">*</span>
                    </label>
                    <input type="email" id="email" name="email" required
                      className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 focus:border-green-400 text-sm"
                      placeholder="you@example.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                      เบอร์โทร <span className="text-red-500">*</span>
                    </label>
                    <input type="tel" id="phone" name="phone" required
                      className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 focus:border-green-400 text-sm"
                      placeholder="08XXXXXXXX" />
                  </div>
                </div>
                <div>
                  <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-1.5">ชื่อธุรกิจ</label>
                  <input type="text" id="business" name="business"
                    className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 focus:border-green-400 text-sm"
                    placeholder="ชื่อธุรกิจหรือองค์กร" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                    ข้อความ <span className="text-red-500">*</span>
                  </label>
                  <textarea id="message" name="message" rows={4} required
                    className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 focus:border-green-400 text-sm"
                    placeholder="รายละเอียดเกี่ยวกับโครงการหรือคำถามของคุณ" />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                    <AlertCircle size={16} /> {errorMsg}
                  </div>
                )}

                <button type="submit" disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-green-500 hover:bg-green-600 disabled:opacity-60 text-white font-semibold rounded-lg transition-colors text-sm">
                  {status === "loading" ? <><Loader2 size={16} className="animate-spin" /> กำลังส่ง...</> : "ส่งข้อความ"}
                </button>
              </form>
            )}
          </section>

          {/* SEO Audit Form */}
          <section className="bg-blue-950 p-8 rounded-2xl shadow-sm text-white">
            <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/30 text-green-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              ฟรี — ไม่มีข้อผูกมัด
            </div>
            <h2 className="text-2xl font-serif font-bold mb-2">รับ SEO Audit ฟรี</h2>
            <p className="text-blue-200 text-sm mb-6">วิเคราะห์เว็บไซต์ของคุณฟรี พร้อมรายงานละเอียดภายใน 3 วันทำการ</p>

            {auditStatus === "success" ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <CheckCircle className="w-16 h-16 text-green-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">รับคำขอแล้ว!</h3>
                <p className="text-blue-200 mb-6">ทีมเราจะวิเคราะห์เว็บไซต์และส่งรายงานให้ภายใน 3 วันทำการ</p>
                <button onClick={() => setAuditStatus("idle")}
                  className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors">
                  ส่งอีกครั้ง
                </button>
              </div>
            ) : (
              <form onSubmit={handleAuditSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="auditName" className="block text-sm font-medium text-blue-200 mb-1.5">
                      ชื่อ <span className="text-green-400">*</span>
                    </label>
                    <input type="text" id="auditName" name="auditName" required
                      className="block w-full px-4 py-2.5 bg-blue-900/50 border border-blue-700 rounded-lg text-white placeholder-blue-400 focus:ring-2 focus:ring-green-400 focus:border-green-400 text-sm"
                      placeholder="ชื่อของคุณ" />
                  </div>
                  <div>
                    <label htmlFor="auditPhone" className="block text-sm font-medium text-blue-200 mb-1.5">
                      เบอร์โทร <span className="text-green-400">*</span>
                    </label>
                    <input type="tel" id="auditPhone" name="auditPhone" required
                      className="block w-full px-4 py-2.5 bg-blue-900/50 border border-blue-700 rounded-lg text-white placeholder-blue-400 focus:ring-2 focus:ring-green-400 focus:border-green-400 text-sm"
                      placeholder="08XXXXXXXX" />
                  </div>
                </div>
                <div>
                  <label htmlFor="auditEmail" className="block text-sm font-medium text-blue-200 mb-1.5">
                    อีเมล <span className="text-green-400">*</span>
                  </label>
                  <input type="email" id="auditEmail" name="auditEmail" required
                    className="block w-full px-4 py-2.5 bg-blue-900/50 border border-blue-700 rounded-lg text-white placeholder-blue-400 focus:ring-2 focus:ring-green-400 focus:border-green-400 text-sm"
                    placeholder="you@example.com" />
                </div>
                <div>
                  <label htmlFor="websiteUrl" className="block text-sm font-medium text-blue-200 mb-1.5">
                    URL เว็บไซต์ <span className="text-green-400">*</span>
                  </label>
                  <input type="url" id="websiteUrl" name="websiteUrl" required
                    className="block w-full px-4 py-2.5 bg-blue-900/50 border border-blue-700 rounded-lg text-white placeholder-blue-400 focus:ring-2 focus:ring-green-400 focus:border-green-400 text-sm"
                    placeholder="https://www.yourwebsite.com" />
                </div>
                <div>
                  <label htmlFor="businessType" className="block text-sm font-medium text-blue-200 mb-1.5">ประเภทธุรกิจ</label>
                  <input type="text" id="businessType" name="businessType"
                    className="block w-full px-4 py-2.5 bg-blue-900/50 border border-blue-700 rounded-lg text-white placeholder-blue-400 focus:ring-2 focus:ring-green-400 focus:border-green-400 text-sm"
                    placeholder="โรงแรม, ร้านอาหาร, อสังหาฯ" />
                </div>
                <div>
                  <label htmlFor="targetKeywords" className="block text-sm font-medium text-blue-200 mb-1.5">Keywords เป้าหมาย</label>
                  <input type="text" id="targetKeywords" name="targetKeywords"
                    className="block w-full px-4 py-2.5 bg-blue-900/50 border border-blue-700 rounded-lg text-white placeholder-blue-400 focus:ring-2 focus:ring-green-400 focus:border-green-400 text-sm"
                    placeholder="SEO ภูเก็ต, โรงแรม ภูเก็ต" />
                </div>

                {auditStatus === "error" && (
                  <div className="flex items-center gap-2 text-red-300 text-sm bg-red-900/30 border border-red-700/50 rounded-lg px-4 py-3">
                    <AlertCircle size={16} /> {auditError}
                  </div>
                )}

                <button type="submit" disabled={auditStatus === "loading"}
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-green-500 hover:bg-green-600 disabled:opacity-60 text-white font-semibold rounded-lg transition-colors text-sm">
                  {auditStatus === "loading" ? <><Loader2 size={16} className="animate-spin" /> กำลังส่ง...</> : "รับ SEO Audit ฟรี"}
                </button>
              </form>
            )}
          </section>
        </div>

        {/* Contact Info */}
        <section className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: Phone, title: "โทรศัพท์", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
            { icon: Mail, title: "อีเมล", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
            { icon: MapPin, title: "ที่ตั้ง", value: siteConfig.address, href: "#" },
          ].map(({ icon: Icon, title, value, href }) => (
            <a key={title} href={href}
              className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-green-200 hover:bg-green-50 transition-colors group">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-green-500 transition-colors">
                <Icon size={18} className="text-green-500 group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">{title}</p>
                <p className="text-sm text-gray-800 font-medium">{value}</p>
              </div>
            </a>
          ))}
        </section>

        {/* Hours */}
        <section className="mt-6 flex items-center gap-3 p-4 bg-green-50 border border-green-100 rounded-xl text-sm text-green-800">
          <Clock size={16} className="text-green-500 shrink-0" />
          <span><strong>เวลาทำการ:</strong> จันทร์–ศุกร์ 09:00–18:00 น. | เสาร์ 09:00–13:00 น.</span>
        </section>
      </main>
    </div>
  );
}
