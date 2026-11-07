"use client";

import { useRef, useState } from "react";
import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import {
  ClockIcon,
  DropIcon,
  LightningIcon,
  PuzzlePieceIcon,
  SmileyIcon,
  SparkleIcon,
  StethoscopeIcon,
  QuestionIcon,
  HandHeartIcon,
} from "@phosphor-icons/react/ssr";
import { cn } from "@/lib/utils";
import { CONCERNS, type Concern } from "./data";
import { DoodleArrow, DoodleSquiggle } from "./doodles";
import { escolherInteresse } from "./interesse-event";
import { Notation } from "./notation";

const CHIP_ICONS: Record<string, PhosphorIcon> = {
  dor: LightningIcon,
  quebrado: PuzzlePieceIcon,
  estetica: SparkleIcon,
  aparelho: SmileyIcon,
  gengiva: DropIcon,
  checkup: StethoscopeIcon,
};

const CHIP_TILTS = ["-rotate-1", "rotate-1", "rotate-[0.5deg]", "-rotate-[0.5deg]", "rotate-1", "-rotate-1"] as const;

export function Concerns() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const active: Concern | null = CONCERNS.find((c) => c.id === activeId) ?? null;

  function choose(id: string) {
    setActiveId(id);
    // No celular o card fica embaixo dos chips: garante que ele apareça.
    if (window.matchMedia("(max-width: 1023px)").matches) {
      const reduzir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.setTimeout(() => {
        cardRef.current?.scrollIntoView({ behavior: reduzir ? "auto" : "smooth", block: "nearest" });
      }, 80);
    }
  }

  return (
    <section
      id="o-que-incomoda"
      aria-labelledby="incomoda-titulo"
      className="mx-3 scroll-mt-4 rounded-[24px] bg-secondary px-5 py-14 sm:mx-6 sm:px-10 lg:py-20"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-6">
          <h2
            id="incomoda-titulo"
            className="relative font-heading text-4xl leading-[1.05] font-extrabold tracking-tight text-balance sm:text-5xl"
          >
            O que está te{" "}
            <Notation color="#2F5DB3" strokeWidth={4} padding={3} duration={700}>
              incomodando
            </Notation>
            ?
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Escolha o que mais se parece com o seu caso. Sem cadastro e sem compromisso: é só para você
            chegar mais tranquilo na consulta, sabendo o que esperar.
          </p>

          <div className="mt-8 flex flex-wrap gap-3" role="group" aria-label="Escolha o que está te incomodando">
            {CONCERNS.map((c, i) => {
              const Icon = CHIP_ICONS[c.id] ?? SmileyIcon;
              const selected = c.id === activeId;
              return (
                <button
                  key={c.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => choose(c.id)}
                  className={cn(
                    "inline-flex min-h-14 items-center gap-2.5 rounded-full border-2 px-5 text-base font-semibold transition-all outline-none focus-visible:ring-3 focus-visible:ring-ring/60 focus-visible:ring-offset-2 sm:text-lg",
                    selected
                      ? "border-primary bg-primary text-primary-foreground shadow-[0_4px_0_0_#1f3f80]"
                      : cn(
                          "border-foreground bg-white text-foreground shadow-[0_4px_0_0_#1f2a44] hover:-translate-y-0.5 hover:bg-(--peach)",
                          CHIP_TILTS[i % CHIP_TILTS.length],
                        ),
                  )}
                >
                  <Icon weight="duotone" aria-hidden className="size-6 shrink-0" />
                  {c.label}
                </button>
              );
            })}
          </div>
        </div>

        <div ref={cardRef} className="scroll-mb-24 lg:col-span-6" aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            {active ? (
              <m.article
                key={active.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="min-h-[30rem] rounded-[24px] border-2 border-foreground bg-white p-6 shadow-[0_6px_0_0_#1f2a44] sm:p-8"
              >
                <h3 className="font-heading text-2xl font-extrabold tracking-tight sm:text-3xl">{active.label}</h3>
                <DoodleSquiggle className="mt-2 h-3 w-24 text-(color:--mint)" />

                <dl className="mt-6 space-y-5">
                  <Bloco Icon={QuestionIcon} titulo="O que provavelmente é">
                    {active.provavel}
                  </Bloco>
                  <Bloco Icon={HandHeartIcon} titulo="Como a gente trata">
                    {active.tratamos}
                  </Bloco>
                  <Bloco Icon={ClockIcon} titulo="A primeira consulta">
                    {active.tempo}
                  </Bloco>
                </dl>

                <button
                  type="button"
                  onClick={() => escolherInteresse(active.interesse)}
                  className="mt-7 inline-flex min-h-14 w-full items-center justify-center rounded-full bg-primary px-7 text-base font-semibold text-primary-foreground shadow-[0_5px_0_0_#1f3f80] transition-transform outline-none hover:translate-y-0.5 hover:shadow-[0_3px_0_0_#1f3f80] focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:ring-offset-2 sm:w-auto"
                >
                  Agendar avaliação para isso
                </button>
                <p className="mt-4 text-sm leading-snug text-muted-foreground">
                  Orientação geral, não é diagnóstico. Quem diagnostica é o dentista, no exame.
                </p>
              </m.article>
            ) : (
              <m.div
                key="vazio"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative flex min-h-[18rem] flex-col justify-center rounded-[24px] bg-(--peach) p-7 sm:min-h-[30rem] sm:p-10"
              >
                <DoodleArrow
                  aria-hidden
                  className="absolute top-5 right-6 size-14 rotate-180 text-foreground/70 lg:top-1/2 lg:right-auto lg:-left-[3.25rem] lg:size-12 lg:-translate-y-1/2 lg:rotate-90"
                />
                <p className="font-heading text-2xl leading-snug font-bold tracking-tight sm:text-3xl">
                  Escolha uma opção e a gente conta, em palavras simples:
                </p>
                <ul className="mt-5 space-y-2 text-lg text-foreground/85">
                  <li>o que isso costuma ser,</li>
                  <li>como a clínica trata,</li>
                  <li>quanto tempo leva a primeira consulta.</li>
                </ul>
              </m.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function Bloco({
  Icon,
  titulo,
  children,
}: {
  Icon: PhosphorIcon;
  titulo: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <dt className="flex items-center gap-2 text-sm font-bold tracking-wide text-primary uppercase">
        <Icon weight="duotone" aria-hidden className="size-5" />
        {titulo}
      </dt>
      <dd className="mt-1.5 text-base leading-relaxed">{children}</dd>
    </div>
  );
}
