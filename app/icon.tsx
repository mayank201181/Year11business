// Browser-tab icon: a rounded emerald-cobalt square with a white briefcase + growth line.
import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

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
          background: "linear-gradient(135deg, #0f766e 0%, #1d4ed8 100%)",
          borderRadius: 8,
        }}
      >
        <svg width={24} height={24} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: 1 }}>
          <g fill="none" stroke="#ffffff" strokeWidth={11} strokeLinecap="round" strokeLinejoin="round">
            <rect x="16" y="30" width="68" height="52" rx="10" />
            <path d="M36 30 V20 A6 6 0 0 1 42 14 H58 A6 6 0 0 1 64 20 V30" />
            <path d="M30 66 L44 52 L54 60 L70 42" />
          </g>
        </svg>
      </div>
    ),
    { ...size },
  );
}
