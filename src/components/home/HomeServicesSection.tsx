import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { siteImages, type SiteImage } from "@/lib/images";
import { HomeSectionHeader } from "@/components/home/HomeSection";

type ServiceRow = {
  eyebrow: string;
  title: string;
  points: string[];
  href: string;
  cta: string;
  image: SiteImage;
};

const serviceRows: ServiceRow[] = [
  {
    eyebrow: "โฆษณาออนไลน์",
    title: "ดึงลูกค้าที่กำลังค้นหาให้โทรหรือทัก LINE",
    points: [
      "ดูแล Meta และ/หรือ Google Ads ให้ร้านในป่าตอง กะตะ ตัวเมือง",
      "ตั้งแคมเปญ ปรับงบ และครีเอทีฟตามโซนจริง",
      "รายงานคลิก ต้นทุนต่อลูกค้า และช่องทางที่คุ้ม",
    ],
    href: "/services/google-ads",
    cta: "ดูบริการยิงแอด",
    image: siteImages.services.googleAds,
  },
  {
    eyebrow: "ทำเว็บไซต์",
    title: "เว็บพร้อมฟอร์มและปุ่ม LINE ให้ลูกค้าทักได้",
    points: [
      "เหมาะกับร้านที่ยังไม่มีเว็บ หรือเว็บเก่าช้าบนมือถือ",
      "โครงสร้างรองรับ SEO และปุ่มติดต่อชัดบนทุกหน้า",
      "โดเมนกับเซิร์ฟเวอร์จัดแยกเมื่อพร้อม — ไม่บังคับชุดเดียว",
    ],
    href: "/services/web-design",
    cta: "ดูบริการทำเว็บ",
    image: siteImages.services.webDesign,
  },
  {
    eyebrow: "รับทำ SEO",
    title: "Maps + organic ในโซนจริง ไม่ใช่คีย์กว้างทั่วประเทศ",
    points: [
      "เริ่มจาก Google Business Profile และสัญญาณ trust ในโซน",
      "เนื้อหาและหน้าเว็บที่ตอบคำค้นของลูกค้าท้องถิ่น",
      "วัดอันดับและ traffic จากโซนป่าตอง กะตะ ถลาง กมลา กะทู้",
    ],
    href: "/services/seo-phuket",
    cta: "ดูบริการ SEO",
    image: siteImages.services.seo,
  },
  {
    eyebrow: "Local SEO",
    title: "โผล่บน Google Maps ตอนลูกค้าค้นในโซน",
    points: [
      "โฟกัสหมุด Maps รีวิว และ NAP ให้ตรงกับสาขาจริง",
      "ปรับหมวดหมู่และโพสต์ GBP ให้ค้นหาในย่านเจอง่ายขึ้น",
      "เหมาะกับร้านที่มีหน้าร้านและต้องการลูกค้าใกล้ๆ",
    ],
    href: "/services/local-seo",
    cta: "ดูบริการ Local SEO",
    image: siteImages.services.localSeo,
  },
];

export function HomeServicesSection() {
  return (
    <>
      <HomeSectionHeader
        eyebrow="บริการ"
        title="ช่วยร้านในภูเก็ต"
        titleAccent="ให้ลูกค้าเจอและติดต่อได้"
        description="เริ่มจากยิงแอดเมื่อต้องการลูกค้าเร็ว แล้วเสริมเว็บ SEO หรือ Local SEO ตามพร้อมของร้าน — ไม่บังคับซื้อครบชุดวันแรก"
      />

      <div className="mt-10 sm:mt-12 space-y-14 sm:space-y-16 lg:space-y-20">
        {serviceRows.map((row, index) => {
          const imageFirst = index % 2 === 1;
          return (
            <article
              key={row.href}
              className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center"
            >
              <div className={imageFirst ? "lg:order-2" : "lg:order-1"}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-600 mb-3">
                  {row.eyebrow}
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-snug mb-5">
                  {row.title}
                </h3>
                <ul className="space-y-3 mb-7">
                  {row.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                        <Check size={12} strokeWidth={3} aria-hidden />
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={row.href}
                  className="inline-flex items-center justify-center rounded-full border border-indigo-300 bg-white px-5 py-2.5 text-sm font-semibold text-indigo-700 hover:border-indigo-500 hover:bg-indigo-50 transition-colors"
                >
                  {row.cta}
                </Link>
              </div>

              <div className={imageFirst ? "lg:order-1" : "lg:order-2"}>
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-[0_16px_40px_-20px_rgba(79,70,229,0.35)]">
                  <Image
                    src={row.image.src}
                    alt={row.image.alt}
                    width={row.image.width}
                    height={row.image.height}
                    sizes="(max-width: 1024px) 100vw, 520px"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <p className="mt-10 sm:mt-12 text-sm text-slate-600 text-center sm:text-left">
        โฟกัส Meta Ads โดยเฉพาะ:{" "}
        <Link
          href="/services/social-media"
          className="text-violet-600 font-medium hover:underline underline-offset-2"
        >
          รับยิงแอด Facebook ภูเก็ต
        </Link>
        {" · "}
        Search Ads:{" "}
        <Link
          href="/services/google-ads"
          className="text-violet-600 font-medium hover:underline underline-offset-2"
        >
          รับทำ Google Ads ภูเก็ต
        </Link>
        {" · "}
        ดูราคาแพ็ก:{" "}
        <Link href="/pricing" className="text-violet-600 font-medium hover:underline underline-offset-2">
          หน้าแพ็กเกจราคา
        </Link>
      </p>
    </>
  );
}
