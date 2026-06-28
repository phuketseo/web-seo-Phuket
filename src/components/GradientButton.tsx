import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function GradientButton({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "btn-gradient-brand relative z-10 inline-flex items-center justify-center px-6 py-3 text-sm",
        className
      )}
    >
      {children}
    </Link>
  );
}
