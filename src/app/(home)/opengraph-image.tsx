import { ImageResponse } from "next/og";

export const alt = "Landing pages que fazem o telefone tocar";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ROWS = [
  ["01", "Oficina Torque"],
  ["02", "Clínica Sorriso Vale"],
  ["03", "Mendes Advocacia"],
] as const;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FAFAF7",
          color: "#111111",
          padding: 64,
        }}
      >
        <div style={{ display: "flex", fontSize: 76, fontWeight: 600, lineHeight: 1, letterSpacing: -3, maxWidth: 900 }}>
          Landing pages que fazem o telefone tocar.
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {ROWS.map(([n, name]) => (
            <div
              key={n}
              style={{ display: "flex", alignItems: "baseline", gap: 24, borderTop: "1px solid #CFCFCB", padding: "14px 0", fontSize: 38 }}
            >
              <span style={{ fontSize: 22, color: "#6B6B6B" }}>{n}</span>
              <span>{name}</span>
              {n === "01" ? <span style={{ width: 14, height: 14, borderRadius: 14, background: "#E8451E" }} /> : null}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
