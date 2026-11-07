import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { DoodleQuote } from "./doodles";
import { Notation } from "./notation";
import { TestimonialsControls } from "./testimonials-controls";

// EXEMPLO: depoimento fictício para portfólio
const DEPOIMENTOS = [
  {
    nome: "Marina S.",
    bairro: "Jardim Aquarius",
    texto:
      "Fiquei sete anos sem ir ao dentista de tanto medo. A doutora explicou tudo antes de encostar em mim e parou duas vezes quando levantei a mão. Voltei para o retorno sem tremer.",
    tone: "bg-secondary",
  },
  {
    nome: "Carlos E.",
    bairro: "Urbanova",
    texto:
      "Trabalho até tarde e nunca achava horário. Marquei às 19h30, saí sem pressa e ainda me mostraram a radiografia na tela. Pela primeira vez eu entendi o que estava acontecendo na minha boca.",
    tone: "bg-(--peach)",
  },
  {
    nome: "Fernanda L.",
    bairro: "Vila Ema",
    texto:
      "Levei meu filho de 5 anos, que tem medo de tudo. Ele conheceu a sala, brincou com o espelhinho e saiu perguntando quando voltava. Eu quase chorei.",
    tone: "bg-(--mint)",
  },
  {
    nome: "Roberto A.",
    bairro: "Jardim Satélite",
    texto:
      "Eu tinha vergonha do estado dos meus dentes. Ninguém me deu bronca. Disseram “vamos por partes” e foi assim, uma etapa de cada vez, tudo combinado.",
    tone: "bg-secondary",
  },
  {
    nome: "Juliana P.",
    bairro: "Vila Adyana",
    texto:
      "Cheguei com dor e muito nervosa. Perguntaram como eu queria que fosse e respeitaram. Saber o que ia acontecer em cada passo fez toda a diferença para mim.",
    tone: "bg-(--peach)",
  },
] as const;

export function Testimonials() {
  return (
    <section id="depoimentos" aria-labelledby="depoimentos-titulo" className="mx-auto w-full max-w-6xl scroll-mt-4 px-5 py-20 sm:px-8 lg:py-28">
      <Carousel opts={{ align: "start" }} aria-label="Depoimentos de pacientes">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2
            id="depoimentos-titulo"
            className="relative max-w-2xl font-heading text-4xl leading-[1.05] font-extrabold tracking-tight text-balance sm:text-5xl"
          >
            Quem chegou com medo{" "}
            <Notation color="#7FD1C1" strokeWidth={7} padding={1}>
              conta como foi
            </Notation>
          </h2>
          <TestimonialsControls />
        </div>

        <CarouselContent className="mt-10 -ml-4 pb-2">
          {DEPOIMENTOS.map((d) => (
            <CarouselItem key={d.nome} className="basis-[88%] pl-4 sm:basis-1/2 lg:basis-[38%]">
              <figure className={cn("flex h-full min-h-[22rem] flex-col rounded-[24px] p-7 sm:p-8", d.tone)}>
                <DoodleQuote aria-hidden className="h-12 w-16 text-primary" />
                <blockquote className="mt-5 flex-1 text-lg leading-relaxed font-medium">{d.texto}</blockquote>
                <figcaption className="mt-6 border-t-2 border-dashed border-foreground/25 pt-4">
                  <span className="block font-heading text-lg font-bold">{d.nome}</span>
                  <span className="text-sm text-foreground/85">{d.bairro}, São José dos Campos</span>
                </figcaption>
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
