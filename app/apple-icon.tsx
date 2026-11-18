// iOS home-screen icon. iOS rounds the corners itself (and paints transparent
// corners black), so this one is a full-bleed square.
import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f766e 0%, #1d4ed8 100%)",
        }}
      >
        <svg width={96} height={96} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: 4 }}>
          <g fill="none" stroke="#ffffff" strokeWidth={9} strokeLinecap="round" strokeLinejoin="round">
            <rect x="16" y="30" width="68" height="52" rx="10" />
            <path d="M36 30 V20 A6 6 0 0 1 42 14 H58 A6 6 0 0 1 64 20 V30" />
            <path d="M30 66 L44 52 L54 60 L70 42" />
            <path d="M58 42 H70 V54" />
          </g>
        </svg>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 4,
            padding: "2px 14px",
            borderRadius: 999,
            background: "#ffffff",
            color: "#0f766e",
            fontSize: 20,
            fontWeight: 800,
            letterSpacing: 1.5,
          }}
        >
          4BS1
        </div>
      </div>
    ),
    { ...size },
  );
}
