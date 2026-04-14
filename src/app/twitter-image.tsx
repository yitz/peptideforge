import { ImageResponse } from "next/og";

export const alt = "AetherPeptide — Peptide Therapy. Refined.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const SPA_PATH =
  "M480-80q-94-12-168-48t-125.5-94Q135-280 108-356.5T81-526q110 11 186 40t123.5 82Q438-351 459-271.5T480-80Zm0-337q-23-35-62.5-69T326-548q6-42 20-87t34-88.5q20-43.5 45.5-83.5t54.5-73q29 33 54.5 73t45.5 83.5q20 43.5 34 88.5t20 87q-52 27-91.5 61T480-417Zm80 321q-2-70-10.5-129.5T523-338q47-81 129.5-132T879-526q1 158-84.5 272.5T560-96Z";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0F1520 0%, #0D3D38 50%, #0F1520 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 60,
        }}
      >
        <svg
          viewBox="0 -960 960 960"
          width="56"
          height="56"
          fill="#2DD4BF"
          style={{ marginBottom: 20 }}
        >
          <path d={SPA_PATH} />
        </svg>
        <div style={{ display: "flex", alignItems: "baseline", marginBottom: 16 }}>
          <span style={{ fontSize: 48, fontWeight: 700, color: "#2DD4BF", letterSpacing: "-0.02em" }}>Aether</span>
          <span style={{ fontSize: 48, fontWeight: 700, color: "#FFFFFF", letterSpacing: "-0.02em" }}>Peptide</span>
        </div>
        <div style={{ fontSize: 20, color: "#6BD8CB", letterSpacing: "0.1em", textTransform: "uppercase" as const }}>
          Peptide Therapy. Refined.
        </div>
      </div>
    ),
    { ...size }
  );
}
