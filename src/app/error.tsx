"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle } from "lucide-react";
import { GradientButton } from "@/components/GradientButton";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="home-section-bg-muted flex min-h-[70vh] items-center justify-center px-4 pt-28 pb-16">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 rounded-2xl border border-red-100 bg-red-50 flex items-center justify-center mx-auto mb-6">
          <AlertCircle size={32} className="text-red-500" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
          เกิดข้อผิดพลาด
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
          ขออภัย เกิดข้อผิดพลาดบางอย่าง กรุณาลองใหม่อีกครั้ง
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            type="button"
            onClick={reset}
            className="btn-gradient-brand inline-flex items-center justify-center px-6 py-3 text-sm"
          >
            ลองใหม่
          </button>
          <GradientButton href="/">กลับหน้าแรก</GradientButton>
        </div>
      </div>
    </div>
  );
}
