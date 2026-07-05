import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/utils";
import { cn } from "@/lib/utils";

type LogoVariant = "horizontal" | "icon" | "footer";

const sizes: Record<LogoVariant, { width: number; height: number; className: string }> = {
  horizontal: {
    width: 720,
    height: 168,
    className:
      "h-[108px] sm:h-[120px] w-auto max-w-[min(100%,600px)] sm:max-w-[720px]",
  },
  icon: {
    width: 120,
    height: 120,
    className: "h-[108px] w-[108px]",
  },
  footer: {
    width: 660,
    height: 156,
    className: "h-[132px] w-auto max-w-[660px]",
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
