import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type HomeSectionVariant = "white" | "muted" | "gradient";

const variantClass: Record<HomeSectionVariant, string> = {
  white: "home-section-bg-white",
  muted: "home-section-bg-muted",
  gradient: "home-section-bg-gradient",
};

export function HomeSection({
  id,
  variant = "white",
  className,
  children,
  containerClass,
}: {
  id?: string;
  variant?: HomeSectionVariant;
  className?: string;
  containerClass?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "home-section scroll-mt-28 border-t border-slate-100/80 first:border-t-0",
        variantClass[variant],
        className
      )}
    >
      <div className={cn("container-custom", containerClass ?? "max-w-4xl")}>{children}</div>
    </section>
  );
}

export function HomeSectionHeader({
  eyebrow,
  title,
  titleAccent,
  description,
  className,
  centered,
}: {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  description?: ReactNode;
  className?: string;
  centered?: boolean;
}) {
  return (
    <div
      className={cn(
        "home-section-header",
        centered && "mx-auto text-center max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-indigo-600 mb-2.5 sm:mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2.5 sm:mb-3">
        {title}
        {titleAccent && (
          <>
            {" "}
            <span className="text-gradient-brand">{titleAccent}</span>
          </>
        )}
      </h2>
      {description && (
        <div className="text-slate-600 leading-relaxed text-sm sm:text-base">{description}</div>
      )}
    </div>
  );
}
