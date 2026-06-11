import { AlertTriangle, Info, Lightbulb } from "lucide-react";
import type { BlogTheme } from "@/lib/blog-theme";

type CalloutType = "tip" | "warning" | "info";

const defaultStyles: Record<CalloutType, { box: string; icon: typeof Info; label: string }> = {
  tip: {
    box: "border-green-200 bg-green-50 text-green-950",
    icon: Lightbulb,
    label: "เคล็ดลับ",
  },
  warning: {
    box: "border-amber-200 bg-amber-50 text-amber-950",
    icon: AlertTriangle,
    label: "ข้อควรระวัง",
  },
  info: {
    box: "border-blue-200 bg-blue-50 text-blue-950",
    icon: Info,
    label: "หมายเหตุ",
  },
};

const vercelLabels: Record<CalloutType, string> = {
  tip: "เคล็ดลับ",
  warning: "ข้อควรระวัง",
  info: "หมายเหตุ",
};

type Props = {
  type?: CalloutType;
  theme?: BlogTheme;
  children: React.ReactNode;
};

export function BlogCallout({ type = "info", theme = "default", children }: Props) {
  if (theme === "vercel") {
    return (
      <aside className="my-8 rounded-lg border border-neutral-200 bg-neutral-50/80 p-5">
        <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-500 mb-2">
          {vercelLabels[type]}
        </p>
        <div className="text-[15px] leading-relaxed text-neutral-700 [&_strong]:font-semibold [&_strong]:text-neutral-900">
          {children}
        </div>
      </aside>
    );
  }

  const style = defaultStyles[type] ?? defaultStyles.info;
  const Icon = style.icon;

  return (
    <aside className={`my-8 flex gap-3 rounded-xl border p-5 ${style.box}`}>
      <Icon size={20} className="shrink-0 mt-0.5 opacity-80" aria-hidden />
      <div>
        <p className="text-xs font-bold uppercase tracking-wide opacity-70 mb-1">{style.label}</p>
        <div className="text-base leading-relaxed [&_strong]:font-semibold">{children}</div>
      </div>
    </aside>
  );
}
