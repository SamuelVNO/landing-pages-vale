import { cn } from "@/lib/utils";
import { DoodleArrow, DoodleStar } from "./doodles";
import { Notation } from "./notation";

const PASSOS = [
  {
    titulo: "A gente explica antes de começar.",
    texto:
      "Cada passo, em palavras simples e mostrando na tela. Você sabe o que vem a seguir antes de acontecer.",
    offset: "lg:ml-0",
  },
  {
    titulo: "Levantou a mão, a gente para.",
    texto: "Sem cara feia e sem “só mais um pouquinho”. O sinal é seu e vale a consulta inteira.",
    offset: "lg:ml-14",
  },
  {
    titulo: "Gel antes da agulha.",
    texto:
      "Um anestésico em gel na gengiva vem primeiro, para a picada incomodar o mínimo possível.",
    offset: "lg:ml-5",
  },
  {
    titulo: "Consulta de 50 minutos, sem relógio na cara.",
    texto:
      "Tempo para conversar, examinar e tirar dúvida, sem a sensação de estar sendo empurrado para o próximo paciente.",
    offset: "lg:ml-20",
  },
  {
    titulo: "Atendemos até as 20h.",
    texto:
      "Você sai do trabalho com calma, sem inventar desculpa para faltar. No sábado também tem horário, até 13h.",
    offset: "lg:ml-9",
  },
] as const;

export function Fear() {
  return (
    <section
      id="primeira-consulta"
      aria-labelledby="medo-titulo"
      className="mx-auto w-full max-w-6xl scroll-mt-4 px-5 pb-20 sm:px-8 lg:pb-28"
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-10">
            <h2
              id="medo-titulo"
              className="relative font-heading text-4xl leading-[1.05] font-extrabold tracking-tight text-balance sm:text-5xl"
            >
              Para quem tem{" "}
              <Notation type="circle" color="#F0A27B" strokeWidth={3.5} padding={8} duration={900}>
                medo
              </Notation>{" "}
              de dentista
            </h2>

            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                Primeiro: o medo faz sentido. Quase todo mundo que senta na nossa cadeira conta uma história
                parecida, de consulta apressada, de anestesia que doeu, de dentista que deu bronca.
              </p>
              <p>
                Você não precisa ser corajoso. Só precisa chegar. O resto a gente combina junto, e a conversa
                começa antes da cadeira.
              </p>
            </div>

            <div className="relative mt-9 max-w-sm rotate-[-1.5deg] rounded-[24px] bg-(--peach) p-6">
              <DoodleStar aria-hidden className="absolute -top-4 -right-3 size-10 rotate-12 text-primary" />
              <p className="font-heading text-2xl leading-snug font-bold tracking-tight">
                Combinado: se você levantar a mão, a gente para. Sempre.
              </p>
              <DoodleArrow aria-hidden className="mt-2 ml-auto size-12 rotate-[110deg] text-foreground/70" />
            </div>
          </div>
        </div>

        <ol className="lg:col-span-7">
          {PASSOS.map((p, i) => (
            <li
              key={p.titulo}
              className={cn("flex items-start gap-4 border-t-2 border-dashed border-foreground/20 py-7 sm:gap-6", p.offset)}
            >
              <span
                aria-hidden
                className={cn(
                  "w-14 shrink-0 font-heading text-[4.5rem] leading-[0.85] font-extrabold sm:w-20 sm:text-[6rem]",
                  i % 2 === 0 ? "text-primary" : "text-transparent [-webkit-text-stroke:2px_#1f2a44]",
                )}
              >
                {i + 1}
              </span>
              <div>
                <h3 className="font-heading text-2xl leading-tight font-bold tracking-tight sm:text-[1.7rem]">{p.titulo}</h3>
                <p className="mt-2 max-w-md text-base leading-relaxed text-muted-foreground">{p.texto}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
