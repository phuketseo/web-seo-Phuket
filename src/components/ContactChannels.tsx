import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageSquare, ExternalLink } from "lucide-react";
import { lineContactUrl, siteConfig, businessHours } from "@/lib/utils";
import { ContactMap } from "@/components/ContactMap";

export function ContactChannels({ showAuditLink = true }: { showAuditLink?: boolean }) {
  return (
    <div className="space-y-4">
      {showAuditLink && (
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-indigo-600 mb-2">
            ฟรี
          </p>
          <h3 className="text-lg font-bold text-slate-900 mb-2">ขอ SEO Audit ฟรี</h3>
          <p className="text-slate-600 text-sm mb-4 leading-relaxed">
            วิเคราะห์เว็บ + Google Maps + คู่แข่งในภูเก็ต — ไม่มีข้อผูกมัด
          </p>
          <Link
            href="/seo-audit"
            className="btn-gradient-brand block w-full text-center text-sm py-2.5"
          >
            ไปหน้าขอ Audit
          </Link>
        </div>
      )}

      <div className="space-y-2.5">
        {[
          { icon: Phone, title: "โทรศัพท์", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
          { icon: Mail, title: "อีเมล", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
          {
            icon: MessageSquare,
            title: "LINE",
            value: siteConfig.line,
            href: lineContactUrl(),
            external: true,
          },
        ].map(({ icon: Icon, title, value, href, external }) => (
          <a
            key={title}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 bg-white shadow-sm touch-manipulation active:bg-violet-50 active:border-violet-200 sm:hover:border-violet-200 sm:hover:bg-violet-50/40 transition-colors group"
          >
            <div className="w-9 h-9 bg-violet-50 rounded-lg flex items-center justify-center shrink-0 group-active:bg-violet-100 sm:group-hover:bg-violet-100 transition-colors">
              <Icon size={16} className="text-violet-600" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">{title}</p>
              <p className="text-sm text-slate-900 font-medium">{value}</p>
            </div>
          </a>
        ))}
      </div>

      <ContactMap />

      <div className="p-4 rounded-xl border border-slate-200 bg-white text-sm text-slate-700 space-y-3 shadow-sm">
        <div className="flex items-start gap-3">
          <MapPin size={16} className="text-violet-600 shrink-0 mt-0.5" />
          <div>
            <p className="leading-relaxed">{siteConfig.address}</p>
            <a
              href={siteConfig.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-2 text-violet-600 font-medium hover:underline underline-offset-2"
            >
              เขียนรีวิวบน Google
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-700">
        <Clock size={16} className="text-violet-600 shrink-0" />
        <span>
          <strong className="text-slate-900">เวลาทำการ:</strong> {businessHours.label}
        </span>
      </div>
    </div>
  );
}
