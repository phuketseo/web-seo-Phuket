export const COOKIE_CONSENT_KEY = "phuketseo-cookie-consent";
export const COOKIE_CONSENT_EVENT = "phuketseo-cookie-consent-change";

export type CookieConsentChoice = "accepted" | "rejected";

export function getCookieConsent(): CookieConsentChoice | null {
  if (typeof window === "undefined") return null;
  const value = localStorage.getItem(COOKIE_CONSENT_KEY);
  if (value === "accepted" || value === "rejected") return value;
  return null;
}

export function setCookieConsent(choice: CookieConsentChoice) {
  localStorage.setItem(COOKIE_CONSENT_KEY, choice);
  window.dispatchEvent(
    new CustomEvent(COOKIE_CONSENT_EVENT, { detail: choice })
  );
}

export function hasAnalyticsConsent(): boolean {
  return getCookieConsent() === "accepted";
}
