import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "PhuketSEO - SEO ภูเก็ต ติดอันดับได้จริง";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)",
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
            fontSize: 72,
            fontWeight: 700,
            color: "#25D366",
            marginBottom: 20,
            letterSpacing: "-2px",
          }}
        >
          PhuketSEO
        </div>
        <div
          style={{
            fontSize: 36,
            color: "#ffffff",
            textAlign: "center",
            marginBottom: 16,
          }}
        >
          SEO ภูเก็ต ติดอันดับได้จริง
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#93c5fd",
            textAlign: "center",
          }}
        >
          เพิ่มยอดขายให้ธุรกิจคุณด้วย Digital Marketing
        </div>
        <div
          style={{
            marginTop: 40,
            display: "flex",
            gap: 32,
          }}
        >
          {["50+ ลูกค้า", "⭐ 4.9/5", "10+ ปี ประสบการณ์"].map((text) => (
            <div
              key={text}
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: 12,
                padding: "12px 24px",
                color: "#ffffff",
                fontSize: 18,
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
