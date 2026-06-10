import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/utils";

export const metadata: Metadata = {
  title: "นโยบายความเป็นส่วนตัว",
  description: "นโยบายความเป็นส่วนตัวของ PhuketSEO — วิธีที่เราเก็บรวบรวม ใช้ และปกป้องข้อมูลส่วนบุคคลของคุณ",
  robots: { index: false, follow: false },
};

const sections = [
  {
    title: "1. ข้อมูลที่เราเก็บรวบรวม",
    content: `เราเก็บรวบรวมข้อมูลที่คุณให้ไว้โดยตรง เช่น ชื่อ อีเมล เบอร์โทรศัพท์ และชื่อธุรกิจ เมื่อคุณกรอกแบบฟอร์มติดต่อหรือขอ SEO Audit ฟรี นอกจากนี้เรายังเก็บข้อมูลการใช้งานเว็บไซต์ผ่าน Google Analytics เช่น หน้าที่เยี่ยมชม ระยะเวลาที่ใช้บนเว็บ และอุปกรณ์ที่ใช้`,
  },
  {
    title: "2. วิธีการใช้ข้อมูล",
    content: `เราใช้ข้อมูลของคุณเพื่อ: (1) ติดต่อกลับและให้บริการที่คุณร้องขอ (2) ส่งข้อมูลบริการและโปรโมชั่นที่เกี่ยวข้อง (3) ปรับปรุงเว็บไซต์และบริการของเรา เราจะไม่ขาย แลกเปลี่ยน หรือเปิดเผยข้อมูลส่วนบุคคลของคุณให้กับบุคคลที่สาม ยกเว้นในกรณีที่ได้รับความยินยอมจากคุณ หรือเมื่อกฎหมายกำหนด`,
  },
  {
    title: "3. Cookies",
    content: `เว็บไซต์ของเราใช้ Cookies เพื่อปรับปรุงประสบการณ์การใช้งาน Cookies คือไฟล์ข้อมูลขนาดเล็กที่ถูกจัดเก็บบนอุปกรณ์ของคุณ คุณสามารถปิดการใช้งาน Cookies ได้จากการตั้งค่าเบราว์เซอร์ แต่อาจทำให้ฟีเจอร์บางส่วนทำงานได้ไม่สมบูรณ์`,
  },
  {
    title: "4. Google Analytics",
    content: `เราใช้ Google Analytics เพื่อวิเคราะห์การใช้งานเว็บไซต์ ข้อมูลที่เก็บรวบรวมจะถูกส่งและจัดเก็บโดย Google คุณสามารถปฏิเสธการเก็บข้อมูลได้โดยติดตั้ง Google Analytics Opt-out Browser Add-on`,
  },
  {
    title: "5. ความปลอดภัยของข้อมูล",
    content: `เราใช้มาตรการรักษาความปลอดภัยที่เหมาะสม รวมถึง SSL Encryption เพื่อปกป้องข้อมูลของคุณจากการเข้าถึงโดยไม่ได้รับอนุญาต อย่างไรก็ตาม ไม่มีวิธีการส่งข้อมูลทางอินเทอร์เน็ตใดที่ปลอดภัย 100%`,
  },
  {
    title: "6. สิทธิ์ของคุณ",
    content: `คุณมีสิทธิ์ในการเข้าถึง แก้ไข หรือลบข้อมูลส่วนบุคคลของคุณ หากต้องการใช้สิทธิ์เหล่านี้ กรุณาติดต่อเราที่ ${siteConfig.email}`,
  },
  {
    title: "7. การเปลี่ยนแปลงนโยบาย",
    content: `เราอาจอัปเดตนโยบายความเป็นส่วนตัวนี้เป็นครั้งคราว การเปลี่ยนแปลงจะมีผลทันทีที่เผยแพร่บนเว็บไซต์ เราแนะนำให้คุณตรวจสอบนโยบายนี้เป็นระยะ`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-blue-950 pt-32 pb-12 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-blue-300 mb-4">
            <Link href="/" className="hover:text-white transition-colors">หน้าแรก</Link>
            <span>/</span>
            <span className="text-white">นโยบายความเป็นส่วนตัว</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold font-serif text-white">นโยบายความเป็นส่วนตัว</h1>
          <p className="text-blue-300 mt-3 text-sm">อัปเดตล่าสุด: มิถุนายน 2569</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-14">
        <p className="text-gray-600 leading-relaxed mb-10 text-sm border-l-4 border-green-400 pl-4">
          PhuketSEO ให้ความสำคัญกับความเป็นส่วนตัวของคุณ นโยบายนี้อธิบายวิธีที่เราเก็บรวบรวม ใช้ และปกป้องข้อมูลส่วนบุคคลของคุณเมื่อใช้บริการของเรา
        </p>

        <div className="space-y-10">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="text-lg font-bold text-blue-950 mb-3 font-serif">{s.title}</h2>
              <p className="text-gray-600 leading-relaxed text-sm">{s.content}</p>
            </section>
          ))}
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-2">ติดต่อเรา</h3>
          <p className="text-sm text-gray-600">หากมีคำถามเกี่ยวกับนโยบายความเป็นส่วนตัว ติดต่อได้ที่</p>
          <a href={`mailto:${siteConfig.email}`} className="text-blue-700 hover:underline text-sm font-medium mt-1 block">
            {siteConfig.email}
          </a>
        </div>
      </div>
    </div>
  );
}
