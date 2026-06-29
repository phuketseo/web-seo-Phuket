import Link from "next/link";
import { Check } from "lucide-react";
import { GradientButton } from "@/components/GradientButton";

export function ServicePricingTeaser({
  priceLabel,
  planName,
  features,
  proNote,
}: {
  priceLabel: string;
  planName: string;
  features: string[];
  proNote?: string;
}) {
  return (
    <div className="rounded-xl border border-violet-200 bg-white p-6 sm:p-8 shadow-sm h-full flex flex-col">
      <p className="text-sm text-slate-600">เริ่มต้นที่</p>
      <p className="text-4xl font-bold text-slate-900 tabular-nums mt-1 tracking-tight">
        ฿{priceLabel}
      </p>
      <p className="text-sm text-slate-500 mb-6">/เดือน ({planName})</p>
      <ul className="space-y-2.5 mb-8 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-slate-700">
            <Check size={16} className="text-indigo-600 shrink-0 mt-0.5" strokeWidth={2.5} />
            {f}
          </li>
        ))}
      </ul>
      <GradientButton href="/contact" className="w-full justify-center">
        ขอคำปรึกษาฟรี
      </GradientButton>
      <p className="text-xs text-slate-500 text-center mt-3">
        ไม่มีสัญญาผูกมัด ·{" "}
        <Link href="/pricing" className="text-violet-600 hover:underline underline-offset-2">
          ดูแพ็กเกจทั้งหมด
        </Link>
      </p>
      {proNote && (
        <p className="text-xs text-slate-500 text-center mt-2">{proNote}</p>
      )}
    </div>
  );
}
