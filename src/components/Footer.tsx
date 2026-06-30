import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/utils";
import { Logo } from "@/components/Logo";

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
  </svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02" fill="white" />
  </svg>
);

const linkClass = "text-slate-600 hover:text-violet-600 text-sm transition-colors";
const headingClass = "text-[11px] font-semibold uppercase tracking-[0.12em] text-indigo-600 mb-4";

const services = [
  { name: "SEO ภูเก็ต", href: "/services/seo-phuket" },
  { name: "ทำเว็บไซต์ + SEO", href: "/services/web-design" },
  { name: "AI Search (AEO/GEO)", href: "/services/ai-search-visibility" },
  { name: "แพ็กเกจราคา", href: "/pricing" },
];

const industries = [
  { name: "SEO ร้านอาหารภูเก็ต", href: "/industries/seo-restaurants-phuket" },
  { name: "SEO สปาภูเก็ต", href: "/industries/seo-spa-phuket" },
  { name: "SEO โรงแรมภูเก็ต", href: "/industries/seo-hotels-phuket" },
  { name: "SEO อสังหาฯ ภูเก็ต", href: "/industries/seo-real-estate-phuket" },
  { name: "SEO บริษัททัวร์ภูเก็ต", href: "/industries/seo-tours-phuket" },
];

const secondaryServices = [
  { name: "Google Ads ภูเก็ต", href: "/services/google-ads" },
  { name: "Social Media", href: "/services/social-media" },
];

const localSeo = [
  { name: "SEO ป่าตอง", href: "/local/patong" },
  { name: "SEO กะตะ", href: "/local/kata" },
  { name: "SEO กมลา", href: "/local/kamala" },
  { name: "SEO กะทู้", href: "/local/kathu" },
  { name: "SEO ตัวเมืองภูเก็ต", href: "/local/phuket-town" },
  { name: "SEO ถลาง", href: "/local/thalang" },
];

const company = [
  { name: "เกี่ยวกับเรา", href: "/about" },
  { name: "Phuket Visibility Stack", href: "/methodology/phuket-visibility-stack" },
  { name: "ผลงานของเรา", href: "/case-studies" },
  { name: "แพ็กเกจราคา", href: "/pricing" },
  { name: "บทความ SEO", href: "/blog" },
  { name: "ติดต่อเรา", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 home-section-bg-muted">
      <div className="container-custom py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Logo variant="footer" />
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-6 max-w-xs">
              รับทำ SEO + เว็บไซต์ภูเก็ต สำหรับธุรกิจไทยท้องถิ่น ติด Google Maps, เว็บเร็ว, พร้อม AEO/GEO และ AI Search
            </p>
            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-indigo-500 shrink-0" />
                <span>{siteConfig.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-indigo-500 shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-violet-600 transition-colors">
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-indigo-500 shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-violet-600 transition-colors">
                  {siteConfig.email}
                </a>
              </div>
            </div>
            <div className="flex gap-2.5 mt-6">
              {[
                { icon: FacebookIcon, href: siteConfig.social.facebook, label: "Facebook" },
                { icon: InstagramIcon, href: siteConfig.social.instagram, label: "Instagram" },
                { icon: LinkedinIcon, href: siteConfig.social.linkedin, label: "LinkedIn" },
                { icon: YoutubeIcon, href: siteConfig.social.youtube, label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-slate-200 bg-white text-slate-600 hover:border-violet-200 hover:text-violet-600 flex items-center justify-center transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className={headingClass}>บริการของเรา</h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className={linkClass}>
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
            <p className={`${headingClass} mt-6 mb-3`}>บริการเสริม</p>
            <ul className="space-y-2.5">
              {secondaryServices.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className={linkClass}>
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={headingClass}>Local SEO</h3>
            <ul className="space-y-2.5">
              {localSeo.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className={linkClass}>
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
            <p className={`${headingClass} mt-6 mb-3`}>อุตสาหกรรม</p>
            <ul className="space-y-2.5">
              {industries.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className={linkClass}>
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={headingClass}>บริษัท</h3>
            <ul className="space-y-2.5">
              {company.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className={linkClass}>
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 bg-white">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} PhuketSEO. สงวนลิขสิทธิ์ทั้งหมด.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-violet-600 transition-colors">
              นโยบายความเป็นส่วนตัว
            </Link>
            <Link href="/terms" className="hover:text-violet-600 transition-colors">
              ข้อกำหนดการใช้งาน
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
