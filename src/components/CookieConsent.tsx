"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getCookieConsent, setCookieConsent } from "@/lib/cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(getCookieConsent() === null);
  }, []);

  if (!visible) return null;

  const handleChoice = (choice: "accepted" | "rejected") => {
    setCookieConsent(choice);
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
      className="fixed bottom-4 left-4 right-4 md:right-auto md:max-w-md z-[60] animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/60 p-4 sm:p-5">
        <p id="cookie-consent-desc" className="text-sm text-slate-600 leading-relaxed mb-4">
          <span id="cookie-consent-title" className="text-slate-800">
            เราใช้คุกกี้เพื่อพัฒนาประสบการณ์การใช้งานของคุณ
          </span>{" "}
          <Link
            href="/privacy-policy"
            className="text-indigo-600 hover:text-indigo-700 font-medium hover:underline whitespace-nowrap"
          >
            เรียนรู้เพิ่มเติม
          </Link>
        </p>
        <div className="flex gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => handleChoice("rejected")}
            className="flex-1 border-2 border-indigo-600 text-indigo-600 font-semibold px-4 py-2.5 rounded-full text-sm transition-colors hover:bg-indigo-50 active:scale-[0.98]"
          >
            ปฏิเสธ
          </button>
          <button
            type="button"
            onClick={() => handleChoice("accepted")}
            className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-4 py-2.5 rounded-full text-sm transition-all hover:shadow-lg hover:shadow-indigo-200 active:scale-[0.98]"
          >
            ยอมรับ
          </button>
        </div>
      </div>
    </div>
  );
}
