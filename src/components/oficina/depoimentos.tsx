"use client";

import { IconStarFilled } from "@tabler/icons-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// EXEMPLO: depoimento fictício para portfólio
const AVALIACOES = [
  {
    nome: "Rafael Moreira",
    inicial: "R",
    cor: "#3b6ea8",
    tempo: "há 2 meses",
    carro: "Gol G6 2016",
    texto:
      "Levei por causa de uma luz de injeção que três lugares não resolveram. Mandaram a foto do sensor com o código e o valor antes de mexer. Resolveram no mesmo dia e ainda devolveram a peça velha.",
  },
  {
    nome: "Camila Siqueira",
    inicial: "C",
    cor: "#8a4f9e",
    tempo: "há 3 semanas",
    carro: "HB20 2020",
    texto:
      "Fiz a revisão dos 40 mil e eles conferiram o manual comigo para eu não ter dor de cabeça com a garantia. Orçamento no WhatsApp, item por item, e saiu bem menos do que eu esperava.",
  },
  {
    nome: "Eduardo Tavares",
    inicial: "E",
    cor: "#2f8f6b",
    tempo: "há 5 meses",
    carro: "Toro 2018",
    texto:
      "Moro em Tremembé e eles buscaram e trouxeram a Toro. Mandaram foto das pastilhas, disseram que ainda tinham vida e não trocaram. Nunca tinha visto oficina recusar serviço.",
  },
  {
    nome: "Márcia Prado",
    inicial: "M",
    cor: "#b5532f",
    tempo: "há 8 meses",
    carro: "Fit 2014",
    texto:
      "Ar-condicionado fraco no calor de Taubaté. Trocaram o filtro, recarregaram o gás e me mostraram o filtro velho, preto de sujeira. Gelou na hora e o preço foi o combinado.",
  },
  {
    nome: "Joaquim Antunes",
    inicial: "J",
    cor: "#6b6f2f",
    tempo: "há 1 ano",
    carro: "Saveiro 2012",
    texto:
      "Alinhamento e troca de óleo, pronto no horário que combinaram. Tem termo de garantia assinado e a quilometragem anotada. Pequeno detalhe que faz diferença.",
  },
] as const;

function Estrelas() {
  return (
    <span className="flex gap-0.5" role="img" aria-label="5 de 5 estrelas">
      {Array.from({ length: 5 }, (_, i) => (
        <IconStarFilled key={i} aria-hidden size={16} className="text-[#ffb000]" />
      ))}
    </span>
  );
}

export function Depoimentos() {
  return (
    <section id="depoimentos" className="scroll-mt-14 border-t border-border bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-heading text-[clamp(3rem,8vw,6rem)] leading-[0.86] font-black uppercase">
            Quem leva o carro,
            <span className="block text-primary">conta.</span>
          </h2>
          <p className="flex items-center gap-3 border border-border bg-background px-4 py-3">
            <span className="font-mono text-4xl leading-none">4,9</span>
            <span className="flex flex-col gap-1 text-sm leading-none text-muted-foreground">
              <Estrelas />
              avaliação média no Google
            </span>
          </p>
        </div>

        <Carousel
          opts={{ align: "start", loop: false }}
          className="mt-12"
          aria-label="Avaliações de clientes"
        >
          <CarouselContent className="-ml-4">
            {AVALIACOES.map((a, i) => (
              <CarouselItem
                key={a.nome}
                className="basis-[88%] pl-4 sm:basis-1/2 lg:basis-1/3"
                aria-label={`Avaliação ${i + 1} de ${AVALIACOES.length}`}
              >
                <figure className={`flex h-full flex-col border border-border bg-background p-5 ${i % 2 === 1 ? "lg:mt-8" : ""}`}>
                  <figcaption className="flex items-center gap-3">
                    <span
                      aria-hidden
                      className="flex size-11 shrink-0 items-center justify-center rounded-full font-sans text-xl font-semibold text-white"
                      style={{ background: a.cor }}
                    >
                      {a.inicial}
                    </span>
                    <span className="flex flex-col">
                      <span className="text-base leading-tight font-semibold">{a.nome}</span>
                      <span className="font-mono text-[0.7rem] tracking-wider text-muted-foreground uppercase">
                        Avaliou no Google
                      </span>
                    </span>
                  </figcaption>
                  <div className="mt-4 flex items-center gap-3">
                    <Estrelas />
                    <span className="text-sm text-muted-foreground">{a.tempo}</span>
                  </div>
                  <blockquote className="mt-3 flex-1 text-base leading-snug">{a.texto}</blockquote>
                  <p className="mt-4 border-t border-border pt-3 font-mono text-xs tracking-wider text-[#ffb000] uppercase">
                    Carro: {a.carro}
                  </p>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mt-6 flex items-center gap-2">
            <CarouselPrevious aria-label="Avaliação anterior" className="static size-11 rounded-none border-border bg-background hover:bg-accent [&_svg]:size-5" />
            <CarouselNext aria-label="Próxima avaliação" className="static size-11 rounded-none border-border bg-background hover:bg-accent [&_svg]:size-5" />
            <span className="ml-2 font-mono text-xs tracking-widest text-muted-foreground uppercase">
              Arraste ou use as setas
            </span>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
