import Image from "next/image";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import {
  BabyIcon,
  HeartbeatIcon,
  SmileyIcon,
  ToothIcon,
} from "@phosphor-icons/react/ssr";
import { cn } from "@/lib/utils";
import { DoodleSpiral, DoodleSquiggle, DoodleStar } from "./doodles";
import { Notation } from "./notation";

type Cell = {
  id: string;
  titulo: string;
  texto: string;
  className: string;
} & (
  | { kind: "photo"; src: string; alt: string; sizes: string; position: string }
  | { kind: "solid"; Icon: PhosphorIcon; tone: string; deco: "star" | "squiggle" | "spiral" }
);

const CELLS: readonly Cell[] = [
  {
    id: "geral",
    titulo: "Clínica geral e limpeza",
    texto:
      "Revisão, limpeza, restauração e tratamento de cárie. É a porta de entrada: a gente olha a boca inteira e explica o que viu, na tela, antes de sugerir qualquer coisa.",
    className: "sm:col-span-2 lg:col-span-7 min-h-[22rem]",
    kind: "photo",
    src: "/img/clinica/estrutura.jpg",
    alt: "Consultório odontológico claro, com cadeira branca e azul-turquesa e janela com persiana",
    sizes: "(min-width: 1024px) 640px, (min-width: 640px) 90vw, 100vw",
    position: "object-[50%_40%]",
  },
  {
    id: "canal",
    titulo: "Canal (endodontia)",
    texto:
      "A palavra assusta mais do que o procedimento. Com anestesia e o passo a passo explicado, a gente trata a inflamação ou a infecção para tentar manter o seu dente.",
    className: "lg:col-span-5",
    kind: "solid",
    Icon: HeartbeatIcon,
    tone: "bg-secondary text-foreground",
    deco: "star",
  },
  {
    id: "implantes",
    titulo: "Implantes",
    texto:
      "Para repor dentes que faltam, com exames e planejamento antes e acompanhamento depois. Você vê o plano inteiro, etapa por etapa.",
    className: "lg:col-span-4",
    kind: "solid",
    Icon: ToothIcon,
    tone: "bg-primary text-primary-foreground",
    deco: "squiggle",
  },
  {
    id: "orto",
    titulo: "Ortodontia e alinhadores",
    texto:
      "Aparelho fixo, estético ou alinhador transparente, para adolescentes e adultos. Você entende como funciona e como é o acompanhamento.",
    className: "lg:col-span-4",
    kind: "solid",
    Icon: SmileyIcon,
    tone: "bg-(--mint) text-foreground",
    deco: "spiral",
  },
  {
    id: "clareamento",
    titulo: "Clareamento",
    texto:
      "Antes de clarear, o dentista confere se dentes e gengiva estão saudáveis e indica o que serve para o seu caso.",
    className: "lg:col-span-4 lg:row-span-2 min-h-[26rem]",
    kind: "photo",
    src: "/img/clinica/clareamento.jpg",
    alt: "Mulher sorrindo de leve enquanto olha para um espelho de mão, sentada na cadeira do consultório",
    sizes: "(min-width: 1024px) 400px, (min-width: 640px) 45vw, 100vw",
    position: "object-[50%_25%]",
  },
  {
    id: "odonto",
    titulo: "Odontopediatria",
    texto:
      "A primeira visita é quase uma brincadeira: a criança conhece a sala, os instrumentos e a dentista antes de qualquer procedimento. Os pais podem ficar junto.",
    className: "sm:col-span-2 lg:col-span-8",
    kind: "solid",
    Icon: BabyIcon,
    tone: "bg-(--peach) text-foreground",
    deco: "star",
  },
] as const;

function Deco({ kind, className }: { kind: "star" | "squiggle" | "spiral"; className?: string }) {
  if (kind === "star") return <DoodleStar className={cn("size-10", className)} />;
  if (kind === "spiral") return <DoodleSpiral className={cn("size-14", className)} />;
  return <DoodleSquiggle className={cn("h-4 w-28", className)} />;
}

export function Treatments() {
  return (
    <section id="tratamentos" aria-labelledby="tratamentos-titulo" className="mx-auto w-full max-w-6xl scroll-mt-4 px-5 py-20 sm:px-8 lg:py-28">
      <div className="grid gap-5 lg:grid-cols-12 lg:items-end">
        <h2
          id="tratamentos-titulo"
          className="relative font-heading text-4xl leading-[1.05] font-extrabold tracking-tight text-balance sm:text-5xl lg:col-span-7 lg:text-6xl"
        >
          Do check-up ao implante,{" "}
          <Notation color="#7FD1C1" strokeWidth={7} padding={1}>
            sem susto
          </Notation>
          .
        </h2>
        <p className="max-w-md text-lg leading-relaxed text-muted-foreground lg:col-span-5 lg:justify-self-end">
          Seis áreas no mesmo endereço, no Jardim Apolo. Em todas, o combinado é o mesmo: você sabe o que vai
          ser feito antes de a gente começar.
        </p>
      </div>

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:auto-rows-[minmax(15rem,auto)]">
        {CELLS.map((cell) =>
          cell.kind === "photo" ? (
            <li key={cell.id} className={cn("relative overflow-hidden rounded-[24px] bg-secondary", cell.className)}>
              <Image src={cell.src} alt={cell.alt} fill sizes={cell.sizes} className={cn("object-cover", cell.position)} />
              <div className="absolute inset-x-3 bottom-3 rounded-[18px] bg-white p-5 shadow-[0_3px_0_0_#1f2a44]">
                <h3 className="font-heading text-xl font-extrabold tracking-tight">{cell.titulo}</h3>
                <p className="mt-1.5 text-[0.95rem] leading-relaxed text-muted-foreground">{cell.texto}</p>
              </div>
            </li>
          ) : (
            <li key={cell.id} className={cn("relative overflow-hidden rounded-[24px] p-6 sm:p-8", cell.tone, cell.className)}>
              <cell.Icon weight="duotone" aria-hidden className="size-14 sm:size-16" />
              <h3 className="mt-5 font-heading text-2xl font-extrabold tracking-tight sm:text-[1.7rem]">{cell.titulo}</h3>
              <p className="mt-2 max-w-md text-base leading-relaxed opacity-90">{cell.texto}</p>
              <Deco kind={cell.deco} className="absolute top-6 right-6 opacity-80" />
            </li>
          ),
        )}
      </ul>
    </section>
  );
}
