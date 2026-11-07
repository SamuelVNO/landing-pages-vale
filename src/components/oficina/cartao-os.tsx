"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";
import * as m from "motion/react-m";
import { IconCamera, IconCheck } from "@tabler/icons-react";

const ITENS = [
  { nome: "Troca de óleo e filtro", nota: "óleo sintético · filtro novo" },
  { nome: "Pastilhas de freio dianteiras", nota: "2 mm, abaixo do limite" },
  { nome: "Alinhamento e balanceamento", nota: "convergência fora do eixo" },
  { nome: "Fluido de arrefecimento", nota: "nível baixo, trocado" },
  { nome: "Filtro do ar-condicionado", nota: "saturado de poeira" },
] as const;

const PASSO_MS = 760;
const INICIO_MS = 900;

/**
 * Elemento-assinatura do hero: uma "Ordem de Serviço" em papel amarelado.
 * Os itens são marcados em sequência e, no fim, o carimbo entra girando.
 * Só este cartão anima: título e foto do hero ficam estáticos (LCP).
 */
export function CartaoOS() {
  const ref = useRef<HTMLDivElement>(null);
  const emVista = useInView(ref, { once: true, amount: 0.35 });
  const reduzir = useReducedMotion();
  const [passo, setPasso] = useState(0);
  const [carimbado, setCarimbado] = useState(false);

  useEffect(() => {
    if (!emVista || reduzir) return;
    const timers: number[] = [];
    ITENS.forEach((_, i) => {
      timers.push(window.setTimeout(() => setPasso(i + 1), INICIO_MS + i * PASSO_MS));
    });
    timers.push(window.setTimeout(() => setCarimbado(true), INICIO_MS + ITENS.length * PASSO_MS + 350));
    return () => timers.forEach((t) => window.clearTimeout(t));
  }, [emVista, reduzir]);

  const marcados = reduzir ? ITENS.length : passo;
  const comCarimbo = reduzir ? true : carimbado;

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-md lg:mx-0 lg:ml-auto lg:rotate-[1.2deg]">
      {/* Prancheta */}
      <div className="relative bg-[#34373d] p-2.5 pt-6 shadow-[8px_8px_0_rgba(0,0,0,0.5)]">
        <div
          aria-hidden
          className="absolute -top-3 left-1/2 h-6 w-28 -translate-x-1/2 border border-[#5a5e66] bg-[#7b8089]"
        >
          <span className="absolute inset-x-3 top-1.5 h-1 bg-[#4a4e55]" />
        </div>

        <article aria-label="Exemplo de ordem de serviço" className="os-papel relative overflow-hidden px-5 pt-5 pb-6">
          <header className="flex items-start justify-between gap-3 border-b-2 border-dashed border-[#2a2417]/40 pb-3">
            <div>
              <p className="font-mono text-[0.68rem] tracking-[0.18em] uppercase">Oficina Torque · Vila Costa</p>
              <h2 className="mt-1 font-heading text-[2.1rem] leading-[0.9] font-black uppercase">
                Ordem de serviço
              </h2>
            </div>
            <p className="shrink-0 border-2 border-[#2a2417] px-2 py-1 text-right font-mono text-sm leading-tight">
              <span className="block text-[0.6rem] tracking-widest">Nº</span>
              0427
            </p>
          </header>

          <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 font-mono text-[0.72rem] uppercase">
            <div>
              <dt className="text-[#2a2417]/70">Veículo</dt>
              <dd>Onix 1.0 · 2019</dd>
            </div>
            <div>
              <dt className="text-[#2a2417]/70">Placa</dt>
              <dd>QRT-4B21</dd>
            </div>
            <div>
              <dt className="text-[#2a2417]/70">Km de entrada</dt>
              <dd>62.480</dd>
            </div>
            <div>
              <dt className="text-[#2a2417]/70">Aprovação</dt>
              <dd>WhatsApp</dd>
            </div>
          </dl>

          <ul className="mt-4 border-t border-[#2a2417]/40">
            {ITENS.map((item, i) => {
              const feito = i < marcados;
              return (
                <li
                  key={item.nome}
                  className="grid min-h-[3.4rem] grid-cols-[1.75rem_1fr_auto] items-center gap-3 border-b border-[#2a2417]/25 py-2"
                >
                  <span
                    aria-hidden
                    className="relative flex size-6 items-center justify-center border-2 border-[#2a2417]"
                  >
                    <m.span
                      className="flex text-[#1f7a3d]"
                      initial={false}
                      animate={{ scale: feito ? 1 : 0.2, opacity: feito ? 1 : 0 }}
                      transition={{ type: "spring", stiffness: 520, damping: 22 }}
                    >
                      <IconCheck size={22} stroke={3.4} />
                    </m.span>
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.95rem] leading-tight font-semibold">{item.nome}</span>
                    <span className="block font-mono text-[0.68rem] leading-tight text-[#2a2417]/75 uppercase">
                      {item.nota}
                    </span>
                  </span>
                  <m.span
                    aria-hidden
                    className="flex items-center gap-1 font-mono text-[0.6rem] tracking-wider text-[#2a2417]/80 uppercase"
                    initial={false}
                    animate={{ opacity: feito ? 1 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <IconCamera size={14} stroke={2} />
                    foto
                  </m.span>
                  <span className="sr-only">{feito ? "Item concluído e aprovado." : "Item pendente."}</span>
                </li>
              );
            })}
          </ul>

          <div className="mt-4 min-h-[5.5rem] max-w-[9.5rem]">
            <p className="font-mono text-[0.68rem] leading-snug tracking-wider uppercase">
              Peças trocadas devolvidas ao cliente
            </p>
          </div>

          {/* Carimbo */}
          <m.div
            aria-hidden={!comCarimbo}
            className="pointer-events-none absolute right-3 bottom-5 w-[13.5rem] origin-center border-[3px] border-double border-[#a1261b] px-3 py-2 text-center font-heading text-[1.45rem] leading-[0.95] font-black tracking-wide text-[#a1261b] uppercase mix-blend-multiply"
            initial={false}
            animate={
              comCarimbo
                ? { opacity: 0.92, scale: 1, rotate: -9 }
                : { opacity: 0, scale: 1.7, rotate: -26 }
            }
            transition={{ type: "spring", stiffness: 300, damping: 17, mass: 0.8 }}
          >
            Aprovado pelo cliente
            <span className="mt-1 block border-t-2 border-[#a1261b] pt-1 font-mono text-[0.62rem] leading-none tracking-[0.14em]">
              via WhatsApp
            </span>
          </m.div>
        </article>
      </div>
    </div>
  );
}
