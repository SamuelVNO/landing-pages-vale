import { Big_Shoulders, IBM_Plex_Mono, IBM_Plex_Sans_Condensed } from "next/font/google";

/** Títulos: caixa alta, pesos pesados. */
export const fontDisplay = Big_Shoulders({
  subsets: ["latin"],
  weight: ["800", "900"],
  display: "swap",
  // O Next não tem métricas dessa fonte para gerar o fallback ajustado; evita o aviso no build.
  adjustFontFallback: false,
  fallback: ["Impact", "Arial Narrow", "sans-serif"],
  variable: "--font-display",
});

/** Texto corrido. */
export const fontBody = IBM_Plex_Sans_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-body",
});

/** Números, etiquetas e placas. */
export const fontCode = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
  // Só rótulos pequenos: não precisa disputar o começo do carregamento.
  preload: false,
  variable: "--font-code",
});
