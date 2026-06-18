import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageSquare, Search, ExternalLink } from "lucide-react";
import { lineContactUrl, siteConfig, businessHours } from "@/lib/utils";

export function ContactChannels({ showAuditLink = true }: { showAuditLink?: boolean }) {
  return (
    <div className="space-y-6">
      {showAuditLink && (
        <div className="p-6 bg-blue-950 rounded-2xl text-white">
          <div className="flex items-center gap-2 text-green-300 text-xs font-semibold uppercase tracking-wider mb-2">
            <Search size={14} /> ฟรี
          </div>
          <h3 className="text-lg font-serif font-bold mb-2">ขอ SEO Audit ฟรี</h3>
          <p className="text-blue-200 text-sm mb-4">
            วิเคราะห์เว็บ + Google Maps + คู่แข่งในภูเก็ต — ไม่มีข้อผูกมัด
          </p>
          <Link
            href="/seo-audit"
            className="inline-block w-full text-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 rounded-lg text-sm transition-colors"
          >
            ไปหน้าขอ Audit
          </Link>
        </div>
      )}

      <div className="space-y-3">
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
            className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-green-200 hover:bg-green-50 transition-colors group"
          >
            <div className="w-9 h-9 bg-green-100 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-green-500 transition-colors">
              <Icon size={16} className="text-green-600 group-hover:text-white transition-colors" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium">{title}</p>
              <p className="text-sm text-gray-800 font-medium">{value}</p>
            </div>
          </a>
        ))}
      </div>

      <div className="p-4 bg-gray-50 border border-gray-100 rounded-xl text-sm text-gray-700 space-y-3">
        <div className="flex items-start gap-3">
          <MapPin size={16} className="text-green-500 shrink-0 mt-0.5" />
          <div>
            <p>{siteConfig.address}</p>
            <a
              href={siteConfig.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-2 text-green-700 font-medium hover:underline"
            >
              เขียนรีวิวบน Google
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-100 rounded-xl text-sm text-green-800">
        <Clock size={16} className="text-green-500 shrink-0" />
        <span>
          <strong>เวลาทำการ:</strong> {businessHours.label}
        </span>
      </div>
    </div>
  );
}
