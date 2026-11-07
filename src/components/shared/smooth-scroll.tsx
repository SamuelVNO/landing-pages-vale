"use client";

import { ReactLenis } from "lenis/react";

/** Rolagem suave (desktop). No toque o Lenis já deixa a rolagem nativa. */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.12, smoothWheel: true, anchors: true }}>
      {children}
    </ReactLenis>
  );
}
