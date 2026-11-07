"use client";

import { useRef } from "react";
import { useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import * as m from "motion/react-m";

const PASSOS = [
  {
    n: "01",
    titulo: "Agenda no WhatsApp",
    texto:
      "Você manda a placa e o que o carro está fazendo. A gente responde com dia e horário, sem ligação e sem fila de espera.",
    etiqueta: "Resposta em minutos, no horário comercial",
  },
  {
    n: "02",
    titulo: "Diagnóstico com fotos",
    texto:
      "O mecânico abre, mede, testa e fotografa cada peça com problema. As fotos chegam no seu WhatsApp com a explicação em português claro.",
    etiqueta: "Foto de cada peça, sem “mecanês”",
  },
  {
    n: "03",
    titulo: "Você aprova o orçamento",
    texto:
      "Peça e mão de obra separadas, item por item. A gente só mexe no que você aprovar, e o valor combinado não sobe no meio do serviço.",
    etiqueta: "Nada é feito sem o seu OK",
  },
  {
    n: "04",
    titulo: "Entrega com as peças velhas na mão",
    texto:
      "Você retira o carro, confere o serviço com o mecânico e leva as peças trocadas numa caixa. A garantia de 90 dias sai por escrito.",
    etiqueta: "Garantia de 90 dias por escrito",
  },
] as const;

/** Lista vertical simples, para celular, tablet e quem prefere menos movimento. */
function ListaVertical() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <p className="font-mono text-xs tracking-[0.2em] text-[#ffb000] uppercase">Como funciona</p>
      <h2 className="mt-3 font-heading text-[clamp(2.9rem,9vw,5.5rem)] leading-[0.88] font-black uppercase">
        Do primeiro “oi” <span className="text-primary">até a chave na mão.</span>
      </h2>
      <ol className="mt-12 border-t border-border">
        {PASSOS.map((p) => (
          <li key={p.n} className="grid grid-cols-[4.25rem_1fr] gap-4 border-b border-border py-7 sm:grid-cols-[7rem_1fr]">
            <span className="font-heading text-6xl leading-[0.85] font-black text-primary sm:text-8xl">{p.n}</span>
            <div>
              <h3 className="font-heading text-3xl leading-none font-extrabold uppercase sm:text-4xl">{p.titulo}</h3>
              <p className="mt-3 text-lg leading-snug text-muted-foreground">{p.texto}</p>
              <p className="mt-4 inline-block border border-[#ffb000]/60 px-2.5 py-1 font-mono text-xs tracking-wider text-[#ffb000] uppercase">
                {p.etiqueta}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function PainelPasso({ passo, indice, progresso }: { passo: (typeof PASSOS)[number]; indice: number; progresso: MotionValue<number> }) {
  // Cada painel fica mais claro quando está no centro da rolagem e esmaece nos lados (só opacidade).
  // Faixa de entrada presa em [0, 1]: o Motion acelera via ScrollTimeline e o navegador recusa offsets fora disso.
  const centro = indice / (PASSOS.length - 1);
  const inicio = Math.max(0, centro - 0.34);
  const fim = Math.min(1, centro + 0.34);
  const entrada = [inicio, centro, fim].filter((v, i, arr) => i === 0 || v > arr[i - 1]);
  const saida = entrada.map((v) => (v === centro ? 1 : 0.28));
  const opacidade = useTransform(progresso, entrada, saida);

  return (
    <m.li
      style={{ opacity: opacidade }}
      className="flex h-full w-screen shrink-0 items-center px-[8vw]"
      aria-label={`Passo ${passo.n}`}
    >
      <div className="grid w-full max-w-6xl grid-cols-[auto_1fr] items-center gap-12 lg:gap-16">
        <span className="font-heading text-[clamp(10rem,32vh,22rem)] leading-[0.78] font-black text-primary">
          {passo.n}
        </span>
        <div className="max-w-xl">
          <h3 className="font-heading text-[clamp(3rem,6.2vw,6rem)] leading-[0.88] font-black uppercase">
            {passo.titulo}
          </h3>
          <p className="mt-5 text-xl leading-snug text-muted-foreground">{passo.texto}</p>
          <p className="mt-6 inline-block border border-[#ffb000]/60 px-3 py-1.5 font-mono text-sm tracking-wider text-[#ffb000] uppercase">
            {passo.etiqueta}
          </p>
        </div>
      </div>
    </m.li>
  );
}

/** Desktop: a seção fica fixa (sticky) e os passos rolam na horizontal conforme a página desce. */
function TrilhoHorizontal() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", `-${(PASSOS.length - 1) * 100}vw`]);
  const barra = useTransform(scrollYProgress, [0, 1], [0.25, 1]);

  return (
    <div ref={ref} className="relative h-[330vh]">
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden pt-14">
        <div className="mx-auto flex w-full max-w-7xl items-end justify-between gap-8 px-8 pt-10">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-[#ffb000] uppercase">Como funciona · 4 passos</p>
            <h2 className="mt-2 font-heading text-[clamp(2.6rem,4.4vw,4.4rem)] leading-[0.9] font-black uppercase">
              Do primeiro “oi” <span className="text-primary">até a chave na mão.</span>
            </h2>
          </div>
          <p className="shrink-0 font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
            Role para avançar
          </p>
        </div>

        <div className="relative min-h-0 flex-1">
          <m.ol style={{ x }} className="absolute inset-y-0 left-0 flex w-[400vw]">
            {PASSOS.map((p, i) => (
              <PainelPasso key={p.n} passo={p} indice={i} progresso={scrollYProgress} />
            ))}
          </m.ol>
        </div>

        <div aria-hidden className="mx-auto mb-10 w-full max-w-7xl px-8">
          <div className="h-1.5 w-full bg-border">
            <m.div style={{ scaleX: barra }} className="h-full origin-left bg-primary" />
          </div>
          <div className="mt-2 flex justify-between font-mono text-xs tracking-widest text-muted-foreground uppercase">
            {PASSOS.map((p) => (
              <span key={p.n}>{p.n}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ComoFunciona() {
  const reduzir = useReducedMotion();

  return (
    <section id="como-funciona" className="scroll-mt-14 border-y border-border bg-card">
      <div className={reduzir ? "block" : "lg:hidden"}>
        <ListaVertical />
      </div>
      {reduzir ? null : (
        <div className="hidden lg:block">
          <TrilhoHorizontal />
        </div>
      )}
    </section>
  );
}
