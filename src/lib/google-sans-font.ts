import localFont from "next/font/local";

/** Self-hosted via next/font — non-blocking, preloaded, swap fallback */
export const googleSans = localFont({
  src: [
    {
      path: "../../node_modules/@fontsource/google-sans/files/google-sans-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/google-sans/files/google-sans-thai-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/google-sans/files/google-sans-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/google-sans/files/google-sans-thai-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/google-sans/files/google-sans-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/google-sans/files/google-sans-thai-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  fallback: ["Tahoma", "Segoe UI", "sans-serif"],
  variable: "--font-google-sans",
});
