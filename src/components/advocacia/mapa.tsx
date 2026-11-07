"use client";

import { useState } from "react";
import { ENDERECO_COMPLETO, ESCRITORIO, MAPS_EMBED, MAPS_LINK } from "./dados";

/**
 * Fachada do mapa: bloco com o endereço e uma grade de ruas desenhada em fios.
 * O iframe do Google Maps só é carregado depois do clique (não pesa no Lighthouse).
 */
export function MapaFachada() {
  const [aberto, setAberto] = useState(false);

  return (
    <div className="relative h-[22rem] w-full overflow-hidden border border-foreground bg-muted sm:h-[26rem]">
      {aberto ? (
        <iframe
          title={`Mapa: ${ESCRITORIO.nome}, ${ENDERECO_COMPLETO}`}
          src={MAPS_EMBED}
          className="absolute inset-0 h-full w-full border-0 grayscale"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <>
          <svg
            aria-hidden="true"
            className="absolute inset-0 h-full w-full text-foreground/25"
            preserveAspectRatio="xMidYMid slice"
            viewBox="0 0 600 420"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path d="M-10 90 L610 60" />
            <path d="M-10 190 L610 175" />
            <path d="M-10 300 L610 330" />
            <path d="M80 -10 L110 430" />
            <path d="M230 -10 L215 430" />
            <path d="M390 -10 L420 430" />
            <path d="M520 -10 L505 430" />
            <path d="M-10 380 C150 330 300 400 610 250" />
            <rect x="430" y="80" width="64" height="56" strokeWidth="2" className="text-primary" />
          </svg>
          <div className="relative flex h-full flex-col items-start justify-end gap-4 p-5 sm:p-8">
            <p className="adv-caps bg-muted pr-2 text-[1.05rem] text-muted-foreground">Mapa · Centro de Jacareí</p>
            <p className="max-w-sm bg-muted pr-3 font-heading text-[1.7rem] leading-[1.1] italic">{ENDERECO_COMPLETO}</p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <button
                type="button"
                onClick={() => setAberto(true)}
                className="inline-flex min-h-12 items-center bg-primary px-6 text-[1.0625rem] tracking-wide text-primary-foreground hover:bg-[color-mix(in_srgb,var(--green),black_18%)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-primary"
              >
                Ver no mapa
              </button>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center bg-muted pr-2 text-[1.05rem] text-primary underline underline-offset-4"
              >
                Abrir no Google Maps
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
