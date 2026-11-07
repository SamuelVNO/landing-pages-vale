"use client";

import { useState } from "react";
import { MapPinIcon } from "@phosphor-icons/react/ssr";
import { CLINICA, ENDERECO_COMPLETO, MAPS_EMBED } from "./data";

/**
 * Fachada do mapa: um bloco ilustrado com o endereço. O iframe do Google Maps
 * só é carregado quando a pessoa clica (não pesa no Lighthouse).
 */
export function MapFacade() {
  const [carregado, setCarregado] = useState(false);

  return (
    <div className="relative aspect-[4/3] min-h-[19rem] w-full overflow-hidden rounded-[24px] bg-secondary sm:aspect-[16/10]">
      {carregado ? (
        <iframe
          title={`Mapa com a localização da ${CLINICA.nome}`}
          src={MAPS_EMBED}
          className="absolute inset-0 size-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <>
          {/* Ruas desenhadas à mão: só decoração. */}
          <svg
            aria-hidden
            viewBox="0 0 400 260"
            preserveAspectRatio="xMidYMid slice"
            className="absolute inset-0 size-full"
            fill="none"
            stroke="#ffffff"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M-10 190C60 170 110 120 200 130S340 70 420 40" strokeWidth={22} />
            <path d="M120 -10C130 60 90 120 110 180S150 250 160 280" strokeWidth={14} />
            <path d="M260 -10C250 50 300 100 280 160S300 240 330 280" strokeWidth={14} />
            <path d="M-10 60C60 70 100 40 160 52" strokeWidth={10} />
            <path d="M300 200C340 190 380 210 420 200" strokeWidth={10} />
            <path d="M175 138C185 100 215 96 240 112" stroke="#7fd1c1" strokeWidth={5} strokeDasharray="2 12" />
          </svg>

          <div className="relative flex h-full flex-col items-center justify-center gap-4 p-6 text-center">
            <MapPinIcon weight="duotone" aria-hidden className="size-16 text-primary" />
            <p className="max-w-xs rounded-2xl bg-white px-4 py-3 text-base leading-snug font-semibold shadow-[0_3px_0_0_#1f2a44]">
              {ENDERECO_COMPLETO}
            </p>
            <button
              type="button"
              onClick={() => setCarregado(true)}
              className="inline-flex min-h-12 items-center rounded-full bg-primary px-7 text-base font-semibold text-primary-foreground shadow-[0_4px_0_0_#1f3f80] transition-transform outline-none hover:translate-y-0.5 hover:shadow-[0_2px_0_0_#1f3f80] focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:ring-offset-2"
            >
              Ver no mapa
            </button>
          </div>
        </>
      )}
    </div>
  );
}
