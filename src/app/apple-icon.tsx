import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Apple touch icon — ชุดเดียวกับ favicon */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1e3a8a 0%, #6366f1 50%, #7c3aed 100%)",
          borderRadius: 40,
        }}
      >
        <span
          style={{
            color: "#ffffff",
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: "-2px",
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
