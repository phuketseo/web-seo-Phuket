import { siteConfig } from "@/lib/utils";

export function ContactMap() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm bg-gray-50">
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
