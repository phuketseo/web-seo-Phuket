import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "PhuketSEO — รับทำ SEO + เว็บไซต์ภูเก็ต ติด Google & AI Search";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1e3a8a 0%, #6366f1 50%, #7c3aed 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: 16,
            letterSpacing: "-2px",
          }}
        >
          PhuketSEO
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#e0e7ff",
            textAlign: "center",
            marginBottom: 12,
          }}
        >
          รับทำ SEO + เว็บไซต์ภูเก็ต
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#c7d2fe",
            textAlign: "center",
          }}
        >
          ติด Google Maps · เว็บ Next.js เร็ว · AEO + GEO Ready
        </div>
        <div
          style={{
            marginTop: 36,
            display: "flex",
            gap: 24,
          }}
        >
          {["฿5,900/เดือน", "Audit 7 วัน", "AEO + GEO"].map((text) => (
            <div
              key={text}
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.25)",
                borderRadius: 12,
                padding: "10px 20px",
                color: "#ffffff",
                fontSize: 16,
              }}
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
