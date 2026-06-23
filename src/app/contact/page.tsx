"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Home, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { siteConfig } from "@/lib/utils";
import { contactPageJsonLd } from "@/lib/schema";
import { pricingPackages } from "@/lib/pricing-packages";
import { responseTimeCopy } from "@/lib/response-times";
import { ContactChannels } from "@/components/ContactChannels";

const planLabels = Object.fromEntries(
  pricingPackages.map((pkg) => [pkg.id, `${pkg.name} ฿${pkg.priceLabel}/เดือน`])
) as Record<string, string>;

const jsonLd = contactPageJsonLd;

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  useEffect(() => {
    const plan = new URLSearchParams(window.location.search).get("plan");
    if (plan && planLabels[plan]) setSelectedPlan(plan);
  }, []);

  const selectedPlanLabel = selectedPlan ? planLabels[selectedPlan] : null;

  async function handleContactSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      business: (form.elements.namedItem("business") as HTMLInputElement).value,
      message: selectedPlanLabel ? `[สนใจแพ็ก: ${selectedPlanLabel}]\n${message}` : message,
      service: selectedPlanLabel ? `สมัครแพ็ก ${selectedPlanLabel}` : "ติดต่อทั่วไป",
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
            <span className="text-white">ติดต่อเรา</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">ติดต่อเรา</h1>
          <p className="text-xl text-blue-200">{responseTimeCopy.contactReply}</p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <section className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-serif font-bold text-blue-950 mb-2">แบบฟอร์มติดต่อ</h2>
            {selectedPlanLabel && (
              <div className="mb-4 rounded-xl bg-emerald-50 border border-emerald-200 px-4 py-3 text-sm text-emerald-900">
                สนใจแพ็ก: <strong>{selectedPlanLabel}</strong>{" "}
                <Link href="/pricing" className="text-emerald-700 underline ml-1">
                  ดูรายละเอียดแพ็ก
                </Link>
              </div>
            )}
            <p className="text-gray-500 text-sm mb-6">กรอกข้อมูลด้านล่าง — {responseTimeCopy.contactReply}</p>

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">ส่งข้อความสำเร็จ!</h3>
                <p className="text-gray-500 mb-6">ขอบคุณที่ติดต่อมาครับ {responseTimeCopy.contactReplyThankYou}</p>
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
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 focus:border-green-400 text-sm"
                    placeholder="ชื่อของคุณ"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                      อีเมล <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      autoComplete="email"
                      className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 focus:border-green-400 text-sm"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                      เบอร์โทร <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      autoComplete="tel"
                      className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 focus:border-green-400 text-sm"
                      placeholder="08XXXXXXXX"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-1.5">
                    ชื่อธุรกิจ
                  </label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    autoComplete="organization"
                    className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 focus:border-green-400 text-sm"
                    placeholder="ชื่อธุรกิจหรือองค์กร"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                    ข้อความ <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 focus:border-green-400 text-sm"
                    placeholder="รายละเอียดเกี่ยวกับโครงการหรือคำถามของคุณ"
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">
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
                    "ส่งข้อความ"
                  )}
                </button>
              </form>
            )}
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-blue-950 mb-4 sr-only">ช่องทางติดต่อ</h2>
            <ContactChannels />
          </section>
        </div>
      </main>
    </div>
  );
}
