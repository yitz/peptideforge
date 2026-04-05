import { ImageResponse } from "next/og";

export const alt = "PeptideForge — AI-Powered Personalized Peptide Therapy";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #134e4a 50%, #0f172a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 60,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              background: "rgba(20, 184, 166, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
            }}
          >
            🧬
          </div>
          <span
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: "#f0fdfa",
              letterSpacing: "-0.02em",
            }}
          >
            PeptideForge
          </span>
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#99f6e4",
            textAlign: "center",
            maxWidth: 700,
            lineHeight: 1.4,
          }}
        >
          AI-Powered Personalized Peptide Therapy
        </div>
        <div
          style={{
            fontSize: 18,
            color: "#5eead4",
            marginTop: 20,
            opacity: 0.8,
          }}
        >
          Physician-Supervised · 503A Pharmacy · Science-Backed
        </div>
      </div>
    ),
    { ...size }
  );
}
