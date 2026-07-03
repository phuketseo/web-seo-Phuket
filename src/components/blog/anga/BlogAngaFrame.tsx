import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

/** 3 คอลัมน์ ANGA — ซ้าย/ขวาว่าง · กลาง = บทความ + รูป (748px) */
export function BlogAngaFrame({ children, className = "" }: Props) {
  return (
    <div className={`blog-anga-frame ${className}`.trim()}>
      <div className="blog-anga-col-side blog-anga-col-left" aria-hidden="true" />
      <div className="blog-anga-col-main">{children}</div>
      <div className="blog-anga-col-side blog-anga-col-right" aria-hidden="true" />
    </div>
  );
}
