"use client";

import { useEffect } from "react";
import Link from "next/link";

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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">⚠️</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-3 font-serif">
          เกิดข้อผิดพลาด
        </h1>
        <p className="text-gray-500 mb-8">
          ขออภัย เกิดข้อผิดพลาดบางอย่าง กรุณาลองใหม่อีกครั้ง
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-blue-950 text-white rounded-lg hover:bg-blue-900 transition-colors font-medium"
          >
            ลองใหม่
          </button>
          <Link
            href="/"
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors font-medium"
          >
            กลับหน้าแรก
          </Link>
        </div>
      </div>
    </div>
  );
}
