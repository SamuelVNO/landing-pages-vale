import { Instrument_Serif, Newsreader } from "next/font/google";

// Manchetes e números: Instrument Serif (só tem peso 400, com itálico).
export const display = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

// Texto corrido, rótulos em versalete e legendas: Newsreader 400 estático.
// A versão variável com eixo opsz pesava ~270 KB e atrasava o LCP no celular.
export const body = Newsreader({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});
