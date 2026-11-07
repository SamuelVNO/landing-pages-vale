import { ImageResponse } from "next/og";

export const alt = "Oficina Torque: revisão sem surpresa em Taubaté";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          background: "#0E0F11",
          color: "#F2F0EB",
          padding: 64,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 30, letterSpacing: 6, color: "#FFB000" }}>
          <div style={{ width: 22, height: 22, background: "#FF6A13" }} />
          OFICINA TORQUE · TAUBATÉ-SP
        </div>

        <div style={{ display: "flex", flexDirection: "column", fontSize: 168, fontWeight: 900, lineHeight: 0.86, letterSpacing: -4 }}>
          <div style={{ display: "flex" }}>REVISÃO</div>
          <div style={{ display: "flex", alignItems: "center", color: "#FF6A13" }}>
            SEM
            <div style={{ display: "flex", flex: 1, height: 18, background: "#FF6A13", marginLeft: 24, marginTop: 18 }} />
          </div>
          <div style={{ display: "flex" }}>SURPRESA</div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", fontSize: 30, color: "#9AA0A8" }}>
          <div style={{ display: "flex" }}>Você aprova o orçamento pelo WhatsApp, com foto das peças.</div>
          <div style={{ display: "flex", background: "#FF6A13", color: "#0E0F11", padding: "12px 24px", fontWeight: 900 }}>
            (12) 90000-0001
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
