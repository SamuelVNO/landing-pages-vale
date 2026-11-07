"use client";

import { useState } from "react";
import { IconExternalLink, IconMapPinFilled, IconPhone } from "@tabler/icons-react";
import { ENDERECO_LINHA, HORARIOS, MAPS_EMBED, MAPS_LINK, NEGOCIO } from "./data";

/** Mapa em "fachada": o iframe do Google só carrega depois do clique, para não pesar o Lighthouse. */
export function Mapa() {
  const [carregado, setCarregado] = useState(false);

  return (
    <section id="onde" className="scroll-mt-14 bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <div className="lg:col-span-5">
          <h2 className="font-heading text-[clamp(3rem,7vw,5.5rem)] leading-[0.86] font-black uppercase">
            Onde a gente
            <span className="block text-primary">fica.</span>
          </h2>

          <address className="mt-8 border-l-4 border-primary pl-4 text-xl leading-snug not-italic">
            {NEGOCIO.rua}
            <br />
            {NEGOCIO.bairro}, {NEGOCIO.cidade} – {NEGOCIO.uf}
            <br />
            <span className="font-mono text-base text-muted-foreground">CEP {NEGOCIO.cep}</span>
          </address>

          <h3 className="mt-10 font-mono text-xs tracking-[0.2em] text-[#ffb000] uppercase">Horário</h3>
          <dl className="mt-3 border-t border-border">
            {HORARIOS.map((h) => (
              <div key={h.dias} className="flex items-baseline justify-between gap-4 border-b border-border py-3">
                <dt className="text-base text-muted-foreground">{h.dias}</dt>
                <dd className="font-mono text-base">{h.horas}</dd>
              </div>
            ))}
          </dl>

          <a
            href={`tel:+${NEGOCIO.whatsapp}`}
            className="mt-6 inline-flex min-h-11 items-center gap-2 text-lg font-semibold underline decoration-primary decoration-2 underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            <IconPhone aria-hidden size={20} />
            {NEGOCIO.telefoneExibicao}
          </a>
        </div>

        <div className="lg:col-span-7">
          <div className="relative h-[22rem] overflow-hidden border border-border sm:h-[28rem]">
            {carregado ? (
              <iframe
                title={`Mapa do Google com a localização da ${NEGOCIO.nome}`}
                src={MAPS_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="absolute inset-0 size-full border-0 grayscale-[0.6] contrast-110"
              />
            ) : (
              <div className="mapa-fachada absolute inset-0 flex flex-col items-center justify-center gap-5 p-6 text-center">
                <span className="relative flex flex-col items-center">
                  <IconMapPinFilled aria-hidden size={56} className="text-primary drop-shadow-[0_4px_0_rgba(0,0,0,0.6)]" />
                  <span aria-hidden className="-mt-1 h-1.5 w-8 rounded-[50%] bg-black/60" />
                </span>
                <p className="max-w-xs bg-background/90 px-3 py-2 text-base leading-snug">{ENDERECO_LINHA}</p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => setCarregado(true)}
                    className="inline-flex h-12 items-center justify-center bg-primary px-6 font-heading text-xl font-extrabold tracking-wide text-primary-foreground uppercase transition-colors hover:bg-[#ff8340] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffb000]"
                  >
                    Ver no mapa
                  </button>
                  <a
                    href={MAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center justify-center gap-2 border border-[#f2f0eb]/60 bg-background/80 px-5 font-heading text-xl font-extrabold tracking-wide uppercase transition-colors hover:border-[#f2f0eb] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    Como chegar
                    <IconExternalLink aria-hidden size={18} />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
