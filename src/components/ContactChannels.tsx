import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageSquare, Search } from "lucide-react";
import { siteConfig } from "@/lib/utils";

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
            href: `https://line.me/ti/p/${siteConfig.line}`,
          },
        ].map(({ icon: Icon, title, value, href }) => (
          <a
            key={title}
            href={href}
            target={title === "LINE" ? "_blank" : undefined}
            rel={title === "LINE" ? "noopener noreferrer" : undefined}
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

      <div className="flex items-start gap-3 p-4 bg-gray-50 border border-gray-100 rounded-xl text-sm text-gray-700">
        <MapPin size={16} className="text-green-500 shrink-0 mt-0.5" />
        <span>{siteConfig.address}</span>
      </div>

      <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-100 rounded-xl text-sm text-green-800">
        <Clock size={16} className="text-green-500 shrink-0" />
        <span>
          <strong>เวลาทำการ:</strong> จันทร์–ศุกร์ 09:00–18:00 | เสาร์ 09:00–13:00
        </span>
      </div>
    </div>
  );
}
