"use client";

import { useRef } from "react";
import { useInView } from "motion/react";
import * as m from "motion/react-m";

type Props = {
  /** Valor já formatado em pt-BR, ex.: "6.000" ou "4,9". Dígitos rolam; o resto fica fixo. */
  valor: string;
  /** Texto lido por leitor de tela (a versão visual fica aria-hidden). */
  leitura: string;
  className?: string;
};

function Coluna({ digito, ativo, atraso }: { digito: number; ativo: boolean; atraso: number }) {
  return (
    <span className="relative inline-block h-[1.12em] w-[0.72em] overflow-hidden border border-[#2d3036] bg-black">
      <m.span
        className="absolute inset-x-0 top-0 flex flex-col"
        initial={false}
        animate={{ y: ativo ? `${-digito * 10}%` : "0%" }}
        transition={{ duration: 1.5 + digito * 0.12, delay: atraso, ease: [0.16, 1, 0.3, 1] }}
      >
        {Array.from({ length: 10 }, (_, n) => (
          <span key={n} className="block h-[1.12em] text-center leading-[1.12em]">
            {n}
          </span>
        ))}
      </m.span>
      {/* brilho do vidro do odômetro */}
      <span aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.55),transparent_28%,transparent_72%,rgba(0,0,0,0.55))]" />
    </span>
  );
}

/** Contador estilo odômetro: cada dígito é uma coluna que rola até o número final. */
export function Odometro({ valor, leitura, className = "" }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const ativo = useInView(ref, { once: true, amount: 0.6 });
  const simbolos = Array.from(valor);

  return (
    <span ref={ref} className={`inline-flex items-center gap-[0.12em] font-mono ${className}`}>
      <span className="sr-only">{leitura}</span>
      <span aria-hidden className="inline-flex items-center gap-[0.12em]">
        {simbolos.map((c, i) =>
          /\d/.test(c) ? (
            <Coluna key={i} digito={Number(c)} ativo={ativo} atraso={i * 0.08} />
          ) : (
            <span key={i} className="px-[0.02em] text-[#ffb000]">
              {c}
            </span>
          ),
        )}
      </span>
    </span>
  );
}
