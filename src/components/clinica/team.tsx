import Image from "next/image";
import { cn } from "@/lib/utils";
import { CLINICA } from "./data";
import { DoodleCircleScribble, DoodleSquiggle, DoodleStar } from "./doodles";

// EXEMPLO: profissionais fictícios para portfólio (nomes, especialidades e CRO inventados).
const DENTISTAS = [
  { iniciais: "RM", nome: "Dr. Rafael Menezes", area: "Implantodontia e cirurgia", cro: "CRO-SP 000001", tone: "bg-(--mint)" },
  { iniciais: "CT", nome: "Dra. Camila Torres", area: "Ortodontia e alinhadores", cro: "CRO-SP 000002", tone: "bg-(--peach)" },
  { iniciais: "BF", nome: "Dra. Bianca Ferraz", area: "Odontopediatria", cro: "CRO-SP 000003", tone: "bg-secondary" },
] as const;

export function Team() {
  return (
    <section
      id="equipe"
      aria-labelledby="equipe-titulo"
      className="mx-3 scroll-mt-4 rounded-[24px] bg-white px-5 py-16 sm:mx-6 sm:px-10 lg:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-12 lg:items-center lg:gap-14">
        <div className="relative pb-10 lg:col-span-6">
          <div className="relative aspect-[5/4] overflow-hidden rounded-[24px] bg-secondary">
            <Image
              src="/img/clinica/consultorio.jpg"
              alt="Sala de atendimento com cadeira laranja, janela grande e luz natural entrando"
              fill
              sizes="(min-width: 1024px) 560px, 92vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -right-1 bottom-0 aspect-[3/4] w-[36%] overflow-hidden rounded-[20px] border-[6px] border-white bg-secondary shadow-[0_4px_0_0_#1f2a44] sm:right-4">
            <Image
              src="/img/clinica/recepcao.jpg"
              alt="Recepção com cadeiras de madeira e uma oliveira ao lado, sob luz natural"
              fill
              sizes="(min-width: 1024px) 200px, 34vw"
              className="object-cover object-[50%_80%]"
            />
          </div>
          <DoodleStar aria-hidden className="absolute -top-4 -left-2 size-10 -rotate-12 text-primary" />
        </div>

        <div className="lg:col-span-6">
          <h2
            id="equipe-titulo"
            className="font-heading text-4xl leading-[1.05] font-extrabold tracking-tight text-balance sm:text-5xl"
          >
            Um consultório que não parece consultório
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Salas claras, com janela, recepção sem fila e material lacrado que é aberto na sua frente. Atrás
            disso tem uma equipe que cuida de você pelo nome.
          </p>

          <div className="relative mt-8 rounded-[24px] bg-secondary p-6 sm:p-7">
            <DoodleCircleScribble
              aria-hidden
              className="pointer-events-none absolute top-3 left-3 h-[5.5rem] w-24 text-primary/60 sm:h-24 sm:w-28"
            />
            <div className="relative flex items-center gap-5">
              <span className="grid size-[4.5rem] shrink-0 place-items-center rounded-full bg-primary font-heading text-2xl font-extrabold text-primary-foreground sm:size-20">
                HD
              </span>
              <div>
                <p className="text-sm font-bold tracking-wide text-primary uppercase">Responsável técnica</p>
                <p className="font-heading text-2xl font-extrabold tracking-tight sm:text-3xl">{CLINICA.responsavel.nome}</p>
                <p className="mt-0.5 text-base font-medium text-muted-foreground">
                  Cirurgiã-dentista · {CLINICA.responsavel.cro}
                </p>
              </div>
            </div>
          </div>

          <DoodleSquiggle className="mt-8 h-3 w-24 text-(color:--mint)" />
          <ul className="mt-4 divide-y-2 divide-dashed divide-foreground/15">
            {DENTISTAS.map((d) => (
              <li key={d.cro} className="flex items-center gap-4 py-4">
                <span className={cn("grid size-12 shrink-0 place-items-center rounded-full font-heading text-base font-extrabold", d.tone)}>
                  {d.iniciais}
                </span>
                <div>
                  <p className="font-heading text-lg leading-tight font-bold">{d.nome}</p>
                  <p className="text-sm text-muted-foreground">
                    {d.area} · {d.cro}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
