import type { ReactNode } from "react";
import Link from "next/link";
import { HomeSection, HomeSectionHeader } from "@/components/home/HomeSection";
import { GradientButton } from "@/components/GradientButton";

export function ServicePageCta({
  title,
  titleAccent,
  description,
  secondaryHref,
  secondaryLabel = "ดูแพ็กเกจราคา",
}: {
  title: string;
  titleAccent?: string;
  description: ReactNode;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <HomeSection variant="gradient" containerClass="max-w-2xl">
      <div className="text-center">
        <HomeSectionHeader
          title={title}
          titleAccent={titleAccent}
          description={description}
          centered
          className="mb-7"
        />
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <GradientButton href="/contact" className="px-7">
            ขอคำปรึกษาฟรี
          </GradientButton>
          {secondaryHref && (
            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center text-sm font-medium px-6 py-3 rounded-lg border border-slate-200 text-slate-700 hover:border-violet-200 hover:bg-violet-50/50 transition-colors"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </HomeSection>
  );
}
