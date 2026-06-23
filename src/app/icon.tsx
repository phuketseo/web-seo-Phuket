import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 48, height: 48 };
export const contentType = "image/png";

/** Favicon — ตรง Navbar (PS + indigo) สำหรับ Google SERP */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #4f46e5 0%, #6366f1 55%, #7c3aed 100%)",
          borderRadius: 12,
        }}
      >
        <span
          style={{
            color: "#ffffff",
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "-0.5px",
            fontFamily: "Tahoma, sans-serif",
          }}
        >
          PS
        </span>
      </div>
    ),
    { ...size }
  );
}
