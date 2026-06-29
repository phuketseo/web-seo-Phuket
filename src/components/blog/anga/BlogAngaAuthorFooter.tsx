import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteImages } from "@/lib/images";

type Props = {
  name: string;
  role: string;
};

export function BlogAngaAuthorFooter({ name, role }: Props) {
  return (
    <section className="mt-14 pt-10 border-t border-slate-200">
      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-gradient-brand mb-4">
        เขียนโดย
      </p>
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 rounded-2xl border border-violet-100/80 bg-gradient-to-br from-white to-violet-50/30 p-5 sm:p-6 shadow-sm">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full ring-2 ring-violet-100 bg-white">
          <Image
            src={siteImages.team.somchai.src}
            alt=""
            fill
            className="object-cover"
            sizes="64px"
          />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-bold text-slate-900">{name}</h3>
          <p className="mt-0.5 text-sm text-slate-600 leading-relaxed">{role}</p>
          <Link
            href="/about"
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-violet-600 hover:text-indigo-600 transition-colors"
          >
            ดูโปรไฟล์และบทความอื่นๆ
            <ArrowRight size={14} aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
