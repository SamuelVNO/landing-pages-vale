/**
 * Rabiscos desenhados à mão (SVG) que servem de assinatura gráfica da página.
 * Todos usam `currentColor`: a cor vem da classe de texto de quem usa.
 */
import type { SVGProps } from "react";

type DoodleProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
} as const;

/** Seta curva com ponta aberta. */
export function DoodleArrow(props: DoodleProps) {
  return (
    <svg viewBox="0 0 90 70" strokeWidth={3} {...base} {...props}>
      <path d="M6 10c22-6 56 4 66 40" />
      <path d="M58 44l14 8 6-16" />
    </svg>
  );
}

/** Estrelinha de quatro pontas, meio torta. */
export function DoodleStar(props: DoodleProps) {
  return (
    <svg viewBox="0 0 44 44" strokeWidth={3} {...base} {...props}>
      <path d="M22 4c1 11 6 17 18 18-12 2-17 7-18 19-1-12-7-17-18-19 11-1 17-6 18-18z" />
    </svg>
  );
}

/** Linha ondulada, boa para separar blocos. */
export function DoodleSquiggle(props: DoodleProps) {
  return (
    <svg viewBox="0 0 140 16" strokeWidth={3.5} preserveAspectRatio="none" {...base} {...props}>
      <path d="M3 9c9-9 17 6 27-1s17-7 26 0 18 7 27 0 17-7 26 0 18 6 28-1" />
    </svg>
  );
}

/** Sublinhado de traço único, levemente inclinado. */
export function DoodleUnderline(props: DoodleProps) {
  return (
    <svg viewBox="0 0 160 14" strokeWidth={4} preserveAspectRatio="none" {...base} {...props}>
      <path d="M3 9c30-6 62-7 93-4 23 2 42 3 61 0" />
    </svg>
  );
}

/** Espiral solta. */
export function DoodleSpiral(props: DoodleProps) {
  return (
    <svg viewBox="0 0 60 60" strokeWidth={3} {...base} {...props}>
      <path d="M30 30c0-4 5-5 7-2s-1 9-8 9-12-6-11-14 9-14 18-13 16 9 15 19" />
    </svg>
  );
}

/** Aspas grandes desenhadas à mão. */
export function DoodleQuote(props: DoodleProps) {
  return (
    <svg viewBox="0 0 72 56" strokeWidth={5} {...base} {...props}>
      <path d="M26 6C12 12 5 24 7 40c1 8 13 9 16 1 3-8-3-13-9-11" />
      <path d="M58 6C44 12 37 24 39 40c1 8 13 9 16 1 3-8-3-13-9-11" />
    </svg>
  );
}

/** Rosto sorrindo de traço simples: símbolo da marca. */
export function SmileMark(props: DoodleProps) {
  return (
    <svg viewBox="0 0 44 44" strokeWidth={3.2} {...base} {...props}>
      <path d="M22 4c11-1 19 8 18 19-1 11-9 18-19 17C10 39 3 31 4 21 5 11 12 5 22 4z" />
      <path d="M15 17v3" />
      <path d="M29 17v3" />
      <path d="M13 26c3 7 15 8 19 0" />
    </svg>
  );
}

/** Aspas de contorno para aspas grandes sobre cartões coloridos. */
export function DoodleCircleScribble(props: DoodleProps) {
  return (
    <svg viewBox="0 0 120 80" strokeWidth={3} {...base} {...props}>
      <path d="M60 6C28 4 6 22 8 42s30 32 60 30 46-16 44-34S90 2 54 8" />
    </svg>
  );
}
