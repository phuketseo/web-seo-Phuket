import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/utils";

export const metadata: Metadata = {
  title: "ข้อกำหนดการใช้งาน",
  description: "ข้อกำหนดการใช้งานเว็บไซต์และบริการของ PhuketSEO",
  robots: { index: false, follow: false },
};

const sections = [
  {
    title: "1. การยอมรับข้อกำหนด",
    content: `การใช้งานเว็บไซต์ phuketseo.com ถือว่าคุณยอมรับข้อกำหนดการใช้งานเหล่านี้ หากคุณไม่เห็นด้วยกับข้อกำหนดใดๆ กรุณาหยุดใช้งานเว็บไซต์`,
  },
  {
    title: "2. บริการที่ให้",
    content: `PhuketSEO ให้บริการด้าน Digital Marketing ได้แก่ SEO, Google Ads, Social Media Marketing และ Web Design สำหรับธุรกิจในภูเก็ตและทั่วประเทศไทย รายละเอียดบริการและราคาอาจเปลี่ยนแปลงได้โดยไม่แจ้งล่วงหน้า`,
  },
  {
    title: "3. ทรัพย์สินทางปัญญา",
    content: `เนื้อหาทั้งหมดบนเว็บไซต์นี้ รวมถึงข้อความ รูปภาพ โลโก้ กราฟิก และโค้ด เป็นทรัพย์สินของ PhuketSEO และได้รับการคุ้มครองตามกฎหมายลิขสิทธิ์ ห้ามทำซ้ำ ดัดแปลง หรือเผยแพร่โดยไม่ได้รับอนุญาตเป็นลายลักษณ์อักษร`,
  },
  {
    title: "4. การใช้งานที่ยอมรับได้",
    content: `คุณตกลงที่จะไม่ใช้เว็บไซต์นี้เพื่อวัตถุประสงค์ที่ผิดกฎหมาย ไม่รบกวนการทำงานของเว็บไซต์ ไม่พยายามเข้าถึงระบบโดยไม่ได้รับอนุญาต และไม่ส่งข้อมูลที่เป็นอันตรายหรือ Spam`,
  },
  {
    title: "5. การปฏิเสธความรับผิดชอบ",
    content: `PhuketSEO จัดทำเว็บไซต์และเนื้อหานี้ "ตามสภาพที่เป็น" โดยไม่มีการรับประกันใดๆ ทั้งโดยชัดแจ้งหรือโดยนัย เราไม่รับผิดชอบต่อความเสียหายทางตรงหรือทางอ้อมที่เกิดจากการใช้งานเว็บไซต์`,
  },
  {
    title: "6. ลิงก์ภายนอก",
    content: `เว็บไซต์ของเราอาจมีลิงก์ไปยังเว็บไซต์ของบุคคลที่สาม เราไม่ได้ควบคุมหรือรับผิดชอบต่อเนื้อหาหรือนโยบายความเป็นส่วนตัวของเว็บไซต์เหล่านั้น`,
  },
  {
    title: "7. กฎหมายที่ใช้บังคับ",
    content: `ข้อกำหนดการใช้งานนี้อยู่ภายใต้กฎหมายของประเทศไทย ข้อพิพาทใดๆ ที่เกิดขึ้นจะอยู่ในเขตอำนาจศาลของประเทศไทย`,
  },
  {
    title: "8. การเปลี่ยนแปลงข้อกำหนด",
    content: `เราอาจแก้ไขข้อกำหนดการใช้งานนี้เป็นครั้งคราว การเปลี่ยนแปลงจะมีผลทันทีที่เผยแพร่บนเว็บไซต์ การใช้งานต่อเนื่องถือว่ายอมรับข้อกำหนดที่แก้ไขแล้ว`,
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-blue-950 pt-32 pb-12 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-blue-300 mb-4">
            <Link href="/" className="hover:text-white transition-colors">หน้าแรก</Link>
            <span>/</span>
            <span className="text-white">ข้อกำหนดการใช้งาน</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold font-serif text-white">ข้อกำหนดการใช้งาน</h1>
          <p className="text-blue-300 mt-3 text-sm">อัปเดตล่าสุด: มิถุนายน 2569</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-14">
        <p className="text-gray-600 leading-relaxed mb-10 text-sm border-l-4 border-green-400 pl-4">
          กรุณาอ่านข้อกำหนดการใช้งานเหล่านี้อย่างละเอียดก่อนใช้บริการของ PhuketSEO การใช้งานเว็บไซต์และบริการของเราถือว่าคุณยอมรับข้อกำหนดเหล่านี้
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
          <p className="text-sm text-gray-600">หากมีคำถามเกี่ยวกับข้อกำหนดการใช้งาน ติดต่อได้ที่</p>
          <a href={`mailto:${siteConfig.email}`} className="text-blue-700 hover:underline text-sm font-medium mt-1 block">
            {siteConfig.email}
          </a>
          <div className="flex gap-4 mt-4">
            <Link href="/privacy-policy" className="text-sm text-blue-600 hover:underline">นโยบายความเป็นส่วนตัว</Link>
            <Link href="/contact" className="text-sm text-blue-600 hover:underline">ติดต่อเรา</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
