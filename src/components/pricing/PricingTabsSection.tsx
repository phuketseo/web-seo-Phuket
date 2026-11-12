"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import {
  pricingTabs,
  webTabFeaturesByPlan,
  planContactHrefFromTab,
  type PricingTabId,
} from "@/lib/pricing-tabs";

export function PricingTabsSection({
  defaultTab = "ads",
  showPricingLink = false,
  titleAs = "h3",
}: {
  defaultTab?: PricingTabId;
  showPricingLink?: boolean;
  /** ใช้ h1 บนหน้าราคาเต็ม เพื่อ SEO */
  titleAs?: "h1" | "h3";
}) {
  const [active, setActive] = useState<PricingTabId>(defaultTab);
  const tab = useMemo(
    () => pricingTabs.find((t) => t.id === active) ?? pricingTabs[0],
    [active]
  );

  const colClass =
    tab.plans.length >= 4
      ? "md:grid-cols-4"
      : tab.plans.length === 3
        ? "md:grid-cols-3"
        : "md:grid-cols-2 md:max-w-3xl md:mx-auto";

  const TitleTag = titleAs;

  return (
    <div id="pricing-tabs" className="scroll-mt-28">
      <div className="text-center mb-5 md:mb-6">
        <TitleTag className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
          {tab.headline}{" "}
          <span className="text-gradient-brand">{tab.headlineAccent}</span>
        </TitleTag>
        <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          {tab.lead}
        </p>
      </div>

      <div
        role="tablist"
        aria-label="ประเภทบริการ"
        className="flex justify-center gap-1 overflow-x-auto border-b border-slate-200 mb-8 md:mb-10"
      >
        {pricingTabs.map((t) => {
          const on = t.id === active;
          return (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={on}
              onClick={() => setActive(t.id)}
              className={`shrink-0 px-4 py-3 text-sm font-medium border-b-2 -mb-px transition-colors ${
                on
                  ? "border-indigo-600 text-indigo-700"
                  : "border-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <div
        className={`grid grid-cols-1 gap-0 border border-slate-200 rounded-2xl overflow-hidden bg-white ${colClass}`}
      >
        {tab.plans.map((plan, index) => {
          const features =
            tab.id === "web"
              ? webTabFeaturesByPlan[plan.id] ?? []
              : tab.features;
          const isLast = index === tab.plans.length - 1;
          return (
            <article
              key={plan.id}
              id={plan.id}
              className={`flex flex-col p-6 sm:p-7 scroll-mt-28 ${
                plan.popular ? "bg-indigo-50/40" : "bg-white"
              } ${!isLast ? "border-b md:border-b-0 md:border-r border-slate-200" : ""}`}
            >
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h4 className="text-base font-semibold text-slate-900">{plan.name}</h4>
                {plan.popular && (
                  <span className="inline-flex items-center rounded-full bg-indigo-600 text-white text-[11px] font-medium px-2.5 py-0.5">
                    แพคที่ยอดนิยม
                  </span>
                )}
              </div>
              <p className="text-sm text-slate-600 mb-5 leading-relaxed">{plan.desc}</p>

              <div className="mb-1">
                <span
                  className={`text-3xl sm:text-4xl font-bold tabular-nums tracking-tight ${
                    plan.popular ? "text-gradient-brand" : "text-slate-900"
                  }`}
                >
                  ฿{plan.priceLabel}
                </span>
                {plan.periodSuffix ? (
                  <span className="text-sm text-slate-500 ml-1">{plan.periodSuffix}</span>
                ) : null}
              </div>
              <p className="text-xs text-slate-500 mb-5">{plan.unit}</p>

              <Link
                href={planContactHrefFromTab(plan.id)}
                className={`mb-5 text-sm font-medium self-start ${
                  plan.popular
                    ? "text-indigo-700 hover:underline underline-offset-2"
                    : "text-slate-800 hover:text-indigo-700 hover:underline underline-offset-2"
                }`}
              >
                {plan.cta}
              </Link>

              <ul className="space-y-2.5 flex-1">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                    <Check
                      size={14}
                      className="shrink-0 mt-0.5 text-indigo-600"
                      strokeWidth={2.5}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-4 border-t border-slate-200">
                <p className="text-xs text-slate-500 mb-1">{plan.totalLabel}</p>
                <p className="text-lg font-semibold text-slate-900 tabular-nums">
                  ฿{plan.totalPrice}
                </p>
                <p className="text-xs text-slate-500 mt-1">{plan.totalSub}</p>
              </div>
            </article>
          );
        })}
      </div>

      <p className="mt-4 text-center text-sm text-slate-500 leading-relaxed">{tab.note}</p>

      {showPricingLink ? (
        <p className="mt-6 text-sm text-slate-600 text-center">
          <Link
            href="/pricing"
            className="text-violet-600 font-medium hover:underline underline-offset-2"
          >
            ดูหน้าราคาเต็ม →
          </Link>
        </p>
      ) : null}
    </div>
  );
}
