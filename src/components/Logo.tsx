import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/utils";
import { cn } from "@/lib/utils";

type LogoVariant = "horizontal" | "icon" | "footer";

const sizes: Record<LogoVariant, { width: number; height: number; className: string }> = {
  horizontal: {
    width: 360,
    height: 84,
    className:
      "h-[54px] sm:h-[60px] w-auto max-w-[min(100%,300px)] sm:max-w-[360px]",
  },
  icon: {
    width: 60,
    height: 60,
    className: "h-[54px] w-[54px]",
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
