import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ไม่พบหน้าที่ต้องการ (404)",
  description: "ขออภัย ไม่พบหน้าที่คุณกำลังมองหา",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <p className="text-8xl font-bold text-blue-950 font-serif mb-4">404</p>
        <h1 className="text-2xl font-bold text-gray-900 mb-3 font-serif">
          ไม่พบหน้าที่คุณต้องการ
        </h1>
        <p className="text-gray-500 mb-8">
          หน้านี้อาจถูกลบ ย้าย หรือ URL ไม่ถูกต้อง
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-blue-950 text-white rounded-lg hover:bg-blue-900 transition-colors font-medium"
          >
            กลับหน้าแรก
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors font-medium"
          >
            ติดต่อเรา
          </Link>
        </div>
        <div className="mt-10 text-sm text-gray-400">
          <p className="mb-2">หน้าที่พบบ่อย:</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center">
            <Link href="/services/seo-phuket" className="text-blue-600 hover:underline">SEO ภูเก็ต</Link>
            <Link href="/services/google-ads" className="text-blue-600 hover:underline">Google Ads</Link>
            <Link href="/pricing" className="text-blue-600 hover:underline">ราคา</Link>
            <Link href="/blog" className="text-blue-600 hover:underline">บทความ</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
