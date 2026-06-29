"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Home, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { contactPageJsonLd } from "@/lib/schema";
import { pricingPackages } from "@/lib/pricing-packages";
import { responseTimeCopy } from "@/lib/response-times";
import { formInputClass } from "@/lib/form-styles";
import { ContactChannels } from "@/components/ContactChannels";
import { BrandGradientDefs } from "@/components/BrandGradientDefs";
import { HomeSection, HomeSectionHeader } from "@/components/home/HomeSection";

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
    <div className="pt-24">
      <BrandGradientDefs />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="home-section-bg-white border-b border-slate-100/80">
        <div className="container-custom max-w-4xl py-10 sm:py-12">
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-1 hover:text-violet-600 transition-colors touch-manipulation"
            >
              <Home size={13} /> หน้าแรก
            </Link>
            <span aria-hidden>/</span>
            <span className="text-slate-900">ติดต่อเรา</span>
          </nav>
          <HomeSectionHeader
            eyebrow="ติดต่อ"
            title="ปรึกษา SEO"
            titleAccent="ภูเก็ต ฟรี"
            description={responseTimeCopy.contactReply}
            className="mb-0"
          />
        </div>
      </section>

      <HomeSection variant="muted" className="border-t-0" containerClass="max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-2">แบบฟอร์มติดต่อ</h2>
            {selectedPlanLabel && (
              <div className="mb-4 rounded-lg bg-violet-50 border border-violet-200 px-4 py-3 text-sm text-slate-800">
                สนใจแพ็ก: <strong>{selectedPlanLabel}</strong>{" "}
                <Link href="/pricing" className="text-violet-600 underline underline-offset-2 ml-1">
                  ดูรายละเอียดแพ็ก
                </Link>
              </div>
            )}
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              กรอกข้อมูลด้านล่าง — {responseTimeCopy.contactReply}
            </p>

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="w-14 h-14 text-violet-600 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">ส่งข้อความสำเร็จ</h3>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  ขอบคุณที่ติดต่อมาครับ {responseTimeCopy.contactReplyThankYou}
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="btn-gradient-brand px-6 py-2.5 text-sm"
                >
                  ส่งข้อความอื่น
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-800 mb-1.5">
                    ชื่อ-นามสกุล <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    className={formInputClass}
                    placeholder="ชื่อของคุณ"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-800 mb-1.5">
                      อีเมล <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      autoComplete="email"
                      className={formInputClass}
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-800 mb-1.5">
                      เบอร์โทร <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      autoComplete="tel"
                      className={formInputClass}
                      placeholder="08XXXXXXXX"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="business" className="block text-sm font-medium text-slate-800 mb-1.5">
                    ชื่อธุรกิจ
                  </label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    autoComplete="organization"
                    className={formInputClass}
                    placeholder="ชื่อธุรกิจหรือองค์กร"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-800 mb-1.5">
                    ข้อความ <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className={formInputClass}
                    placeholder="รายละเอียดเกี่ยวกับโครงการหรือคำถามของคุณ"
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
                    "ส่งข้อความ"
                  )}
                </button>
              </form>
            )}
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4 sr-only">ช่องทางติดต่อ</h2>
            <ContactChannels />
          </div>
        </div>
      </HomeSection>
    </div>
  );
}
