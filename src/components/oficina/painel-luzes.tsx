"use client";

import { useRef, useState, type ComponentType, type CSSProperties, type SVGProps } from "react";
import { useInView } from "motion/react";
import { IconArrowRight } from "@tabler/icons-react";
import {
  IconeAbs,
  IconeBateria,
  IconeFreio,
  IconeInjecao,
  IconeOleo,
  IconeTemperatura,
} from "./icones-painel";
import { selecionarInteresse } from "./interesse";

type Luz = {
  id: string;
  nome: string;
  rotulo: string;
  cor: string;
  corNome: string;
  Icone: ComponentType<SVGProps<SVGSVGElement>>;
  podeSer: string;
  fazemos: string;
  rodar: string;
  interesse: string;
};

const AMBAR = "#ffb000";
const VERMELHO = "#ff3b30";

const LUZES: readonly Luz[] = [
  {
    id: "injecao",
    nome: "Injeção eletrônica",
    rotulo: "Injeção",
    cor: AMBAR,
    corNome: "âmbar",
    Icone: IconeInjecao,
    podeSer:
      "Sensor de oxigênio, bobina ou vela falhando, bico entupido por combustível ruim ou até a tampa do tanque mal fechada.",
    fazemos:
      "Ligamos o scanner, lemos o código de falha e confirmamos na peça. Você recebe a foto da leitura e só trocamos o que o teste condenou.",
    rodar: "Fixa: dá para chegar até a oficina, devagar. Piscando: pare.",
    interesse: "Luz acesa no painel",
  },
  {
    id: "freio",
    nome: "Sistema de freio",
    rotulo: "Freio",
    cor: VERMELHO,
    corNome: "vermelha",
    Icone: IconeFreio,
    podeSer: "Pastilha no fim da vida, fluido de freio baixo ou freio de estacionamento ainda puxado.",
    fazemos:
      "Medimos pastilhas e discos com paquímetro, testamos o fluido e mandamos a foto da peça antes de falar em valor.",
    rodar: "Evite rodar. Se o pedal ficar baixo ou mole, chame o guincho.",
    interesse: "Freios",
  },
  {
    id: "oleo",
    nome: "Pressão do óleo",
    rotulo: "Óleo",
    cor: VERMELHO,
    corNome: "vermelha",
    Icone: IconeOleo,
    podeSer: "Nível muito baixo, vazamento no cárter ou bomba de óleo cansada. A pressão caiu abaixo do mínimo.",
    fazemos:
      "Conferimos nível e vazamentos antes de qualquer outra coisa, medimos a pressão real e só então definimos o reparo.",
    rodar: "Pare agora e desligue o motor. Rodar assim pode fundir o motor.",
    interesse: "Luz acesa no painel",
  },
  {
    id: "bateria",
    nome: "Carga da bateria",
    rotulo: "Bateria",
    cor: VERMELHO,
    corNome: "vermelha",
    Icone: IconeBateria,
    podeSer:
      "Alternador sem carregar, correia frouxa ou bateria no fim da vida, bem comum depois de verões quentes como os do Vale.",
    fazemos: "Teste de carga da bateria e do alternador no mesmo dia, com o resultado impresso para você levar.",
    rodar: "Dá para chegar até nós, mas sem desligar o carro no caminho.",
    interesse: "Luz acesa no painel",
  },
  {
    id: "temperatura",
    nome: "Temperatura do motor",
    rotulo: "Temperatura",
    cor: VERMELHO,
    corNome: "vermelha",
    Icone: IconeTemperatura,
    podeSer:
      "Pouco líquido de arrefecimento, ventoinha parada, válvula termostática travada ou radiador entupido. Aparece muito depois de trânsito parado na Dutra.",
    fazemos:
      "Teste de pressão no sistema, troca do fluido, conferência da ventoinha e da válvula. Você vê o que estava travado.",
    rodar: "Pare e desligue. Não abra a tampa do radiador com o motor quente.",
    interesse: "Luz acesa no painel",
  },
  {
    id: "abs",
    nome: "ABS",
    rotulo: "ABS",
    cor: AMBAR,
    corNome: "âmbar",
    Icone: IconeAbs,
    podeSer:
      "Sensor de roda sujo ou com defeito, ou chicote rompido. O freio comum continua funcionando, só sem a ajuda do ABS.",
    fazemos: "Lemos o módulo, testamos o sensor da roda indicada e limpamos ou trocamos. Sem chute.",
    rodar: "Dá para rodar com mais distância de frenagem. Marque logo.",
    interesse: "Freios",
  },
] as const;

const ROTINA = [
  { nome: "Revisão por km", interesse: "Revisão por km" },
  { nome: "Troca de óleo", interesse: "Revisão por km" },
  { nome: "Suspensão", interesse: "Suspensão" },
  { nome: "Ar-condicionado", interesse: "Ar-condicionado" },
  { nome: "Embreagem", interesse: "Outro" },
] as const;

export function PainelLuzes() {
  const [ativaId, setAtivaId] = useState<string>(LUZES[0].id);
  const painelRef = useRef<HTMLDivElement>(null);
  const ligado = useInView(painelRef, { once: true, amount: 0.4 });
  const ativa = LUZES.find((l) => l.id === ativaId) ?? LUZES[0];

  return (
    <section id="servicos" className="scroll-mt-14 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2 className="font-heading text-[clamp(2.9rem,8.2vw,6.5rem)] leading-[0.86] font-black uppercase lg:col-span-8">
            Acendeu essa luz?
            <span className="block text-primary">A gente descobre o porquê.</span>
          </h2>
          <p className="max-w-md text-lg leading-snug text-muted-foreground lg:col-span-4 lg:justify-self-end">
            Toque ou passe o mouse em cada luz do painel. A gente conta o que costuma ser, o que faz e se dá para
            rodar até a oficina.
          </p>
        </div>

        <div
          ref={painelRef}
          className={`mt-12 grid gap-px border border-border bg-border lg:grid-cols-12 ${ligado ? "painel-teste" : ""}`}
        >
          {/* Painel preto com as luzes */}
          <div className="bg-black p-4 sm:p-6 lg:col-span-7">
            <div className="mb-4 flex items-center justify-between font-mono text-[0.7rem] tracking-[0.2em] text-[#9aa0a8] uppercase">
              <span>Painel · ignição ligada</span>
              <span aria-hidden className="display-pisca text-[#ffb000]">
                ●
              </span>
            </div>
            <div role="group" aria-label="Luzes do painel" className="grid grid-cols-3 gap-2 sm:gap-3">
              {LUZES.map((luz) => {
                const acesa = luz.id === ativaId;
                const estilo = { "--luz-final": acesa ? 1 : 0 } as CSSProperties;
                return (
                  <button
                    key={luz.id}
                    type="button"
                    aria-pressed={acesa}
                    aria-label={`Luz de ${luz.nome}`}
                    onPointerEnter={(e) => {
                      if (e.pointerType === "mouse") setAtivaId(luz.id);
                    }}
                    onFocus={() => setAtivaId(luz.id)}
                    onClick={() => setAtivaId(luz.id)}
                    className="group relative flex aspect-square min-h-[5.5rem] flex-col items-center justify-center gap-2 border bg-[#0a0b0c] outline-none transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffb000]"
                    style={{ borderColor: acesa ? `${luz.cor}88` : "#23262b" }}
                  >
                    <span className="relative block size-[clamp(2.5rem,9vw,4.5rem)]">
                      {/* apagada */}
                      <luz.Icone className="absolute inset-0 size-full text-[#33363c]" />
                      {/* acesa: só opacidade muda, o brilho já está desenhado */}
                      <span
                        className="luz-acesa absolute inset-0 transition-opacity duration-200"
                        style={{
                          ...estilo,
                          color: luz.cor,
                          opacity: acesa ? 1 : 0,
                          filter: `drop-shadow(0 0 5px ${luz.cor}) drop-shadow(0 0 14px ${luz.cor}99)`,
                        }}
                      >
                        <luz.Icone className="size-full" />
                      </span>
                    </span>
                    <span
                      className="font-mono text-[0.62rem] tracking-[0.16em] uppercase transition-colors sm:text-xs"
                      style={{ color: acesa ? luz.cor : "#9aa0a8" }}
                    >
                      {luz.rotulo}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* "Display" com a explicação da luz acesa */}
          <div className="flex flex-col bg-card p-5 sm:p-7 lg:col-span-5" aria-live="polite">
            <div className="flex items-center gap-3 border-b border-border pb-4">
              <span
                aria-hidden
                className="size-3 shrink-0 rounded-full"
                style={{ background: ativa.cor, boxShadow: `0 0 10px ${ativa.cor}` }}
              />
              <div>
                <p className="font-mono text-[0.68rem] tracking-[0.18em] text-muted-foreground uppercase">
                  Luz {ativa.corNome}
                </p>
                <h3 className="font-heading text-3xl leading-none font-extrabold uppercase">{ativa.nome}</h3>
              </div>
            </div>

            <dl className="mt-5 flex flex-1 flex-col gap-5 text-base leading-snug">
              <div>
                <dt className="font-mono text-xs tracking-[0.16em] text-[#ffb000] uppercase">O que pode ser</dt>
                <dd className="mt-1.5">{ativa.podeSer}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs tracking-[0.16em] text-[#ffb000] uppercase">O que a gente faz</dt>
                <dd className="mt-1.5">{ativa.fazemos}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs tracking-[0.16em] text-[#ffb000] uppercase">Posso rodar?</dt>
                <dd className="mt-1.5 text-muted-foreground">{ativa.rodar}</dd>
              </div>
            </dl>

            <a
              href="#agendar"
              onClick={() => selecionarInteresse(ativa.interesse)}
              className="mt-6 inline-flex h-12 items-center justify-between gap-3 bg-primary px-5 font-heading text-xl font-extrabold tracking-wide text-primary-foreground uppercase transition-colors hover:bg-[#ff8340] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Agendar diagnóstico
              <IconArrowRight aria-hidden size={22} stroke={2.4} />
            </a>
          </div>
        </div>

        {/* Serviços de rotina, em linha */}
        <div className="mt-10 flex flex-col gap-4 border-b border-border pb-8 lg:flex-row lg:items-center lg:gap-8">
          <p className="shrink-0 font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
            E na rotina do carro
          </p>
          <ul className="flex flex-wrap gap-x-2 gap-y-2">
            {ROTINA.map((item, i) => (
              <li key={item.nome} className="flex items-center gap-2">
                <a
                  href="#agendar"
                  onClick={() => selecionarInteresse(item.interesse)}
                  className="inline-flex min-h-11 items-center gap-2 border border-border px-3.5 py-2 text-base font-semibold transition-colors hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  <span aria-hidden className="font-mono text-xs text-[#ffb000]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item.nome}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
