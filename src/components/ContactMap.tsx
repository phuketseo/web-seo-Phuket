import { siteConfig } from "@/lib/utils";

export function ContactMap() {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50/50 shadow-sm">
      <iframe
        src={siteConfig.googleMapsEmbedUrl}
        title="แผนที่พื้นที่ให้บริการ PhuketSEO ภูเก็ต"
        className="block w-full aspect-[4/3] border-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
