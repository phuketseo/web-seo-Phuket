import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/utils";
import { cn } from "@/lib/utils";

type LogoVariant = "horizontal" | "icon" | "footer";

const sizes: Record<LogoVariant, { width: number; height: number; className: string }> = {
  horizontal: {
    width: 240,
    height: 56,
    className: "h-9 sm:h-10 w-auto max-w-[200px] sm:max-w-[240px]",
  },
  icon: {
    width: 40,
    height: 40,
    className: "h-9 w-9",
  },
  footer: {
    width: 220,
    height: 52,
    className: "h-11 w-auto max-w-[220px]",
  },
};

export function Logo({
  variant = "horizontal",
  className,
  priority = false,
}: {
  variant?: LogoVariant;
  className?: string;
  priority?: boolean;
}) {
  const src =
    variant === "icon" ? siteConfig.logo.icon : siteConfig.logo.horizontal;
  const { width, height, className: sizeClass } = sizes[variant];

  return (
    <Link
      href="/"
      className={cn("inline-flex shrink-0 items-center", className)}
      aria-label={`${siteConfig.name} — หน้าแรก`}
    >
      <Image
        src={src}
        alt={siteConfig.name}
        width={width}
        height={height}
        priority={priority}
        className={cn(sizeClass, "object-contain object-left")}
      />
    </Link>
  );
}
