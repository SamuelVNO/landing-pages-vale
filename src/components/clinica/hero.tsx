import Image from "next/image";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import { MoonIcon, SyringeIcon, ChatsCircleIcon } from "@phosphor-icons/react/ssr";
import { DoodleArrow, DoodleSpiral, DoodleStar } from "./doodles";
import { Notation } from "./notation";

type Tag = {
  label: string;
  Icon: PhosphorIcon;
  className: string;
  tilt: string;
  delay: string;
};

const TAGS: readonly Tag[] = [
  { label: "Gel antes da agulha", Icon: SyringeIcon, className: "left-[-0.5rem] top-[14%] sm:left-[-2rem]", tilt: "-3deg", delay: "0s" },
  { label: "Atende à noite", Icon: MoonIcon, className: "right-[-0.5rem] top-[46%] sm:right-[-2.5rem]", tilt: "2.5deg", delay: "1.6s" },
  { label: "Explica tudo antes", Icon: ChatsCircleIcon, className: "bottom-[9%] left-[-0.25rem] sm:left-[-2.5rem]", tilt: "-1.5deg", delay: "3.1s" },
] as const;

const PROVAS = [
  { numero: "12", legenda: "anos de clínica" },
  { numero: "4.000+", legenda: "pacientes atendidos" },
  { numero: "até 20h", legenda: "atende à noite" },
] as const;

export function Hero() {
  return (
    <section className="mx-auto grid w-full max-w-6xl gap-12 px-5 pt-4 pb-16 sm:px-8 lg:grid-cols-12 lg:items-center lg:gap-10 lg:pt-8 lg:pb-24">
      <div className="lg:col-span-7">
        <p className="mb-5 flex items-center gap-2 text-sm font-semibold tracking-wide text-primary">
          <DoodleStar className="size-5" />
          Odontologia em São José dos Campos
        </p>

        <h1 className="relative font-heading text-[2.6rem] leading-[1.04] font-extrabold tracking-tight text-balance sm:text-6xl lg:text-[4.5rem]">
          Tratamento <Notation color="#7FD1C1" strokeWidth={7} padding={1} duration={800}>sem pressa</Notation>,{" "}
          <Notation type="circle" color="#2F5DB3" strokeWidth={3} padding={7} duration={900} delay={500}>
            explicado
          </Notation>{" "}
          do começo ao fim.
        </h1>

        <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Se você já adiou o dentista por medo, por vergonha do que ele vai dizer ou porque a última vez
          foi ruim: aqui ninguém te julga. A gente conversa, mostra o que está vendo e só começa quando você
          disser que pode.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
          <a
            href="#agendar"
            className="inline-flex min-h-14 items-center gap-2 rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-[0_6px_0_0_#1f3f80] transition-transform outline-none hover:translate-y-0.5 hover:shadow-[0_4px_0_0_#1f3f80] focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:ring-offset-2 active:translate-y-1.5 active:shadow-[0_0_0_0_#1f3f80]"
          >
            Agendar avaliação
          </a>
          <a
            href="#primeira-consulta"
            className="inline-flex min-h-11 items-center gap-2 font-semibold underline decoration-(color:--mint) decoration-[3px] underline-offset-[6px] outline-none hover:decoration-primary focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            Como é a primeira consulta
            <DoodleArrow className="size-6 rotate-[70deg] text-primary" />
          </a>
        </div>

        <dl className="mt-12 flex max-w-xl divide-x-2 divide-foreground/15">
          {PROVAS.map((p) => (
            <div key={p.legenda} className="flex-1 px-3 first:pl-0 sm:px-6 sm:first:pl-0">
              <dt className="font-heading text-2xl leading-none font-extrabold text-primary sm:text-4xl">{p.numero}</dt>
              <dd className="mt-1.5 text-xs leading-snug font-medium text-muted-foreground sm:text-sm">{p.legenda}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="relative mx-auto w-full max-w-[21rem] sm:max-w-[25rem] lg:col-span-5 lg:max-w-none">
        <div aria-hidden className="absolute inset-0 translate-x-3.5 translate-y-3.5 rounded-t-full bg-(--mint)" />
        <div className="relative aspect-[4/5] overflow-hidden rounded-t-full bg-secondary">
          {/* Foto do hero: é o LCP, aparece já visível, sem animação de entrada. */}
          <Image
            src="/img/clinica/hero.jpg"
            alt="Dentista sorrindo e conversando com uma paciente sentada na cadeira, em um consultório claro"
            fill
            preload
            sizes="(min-width: 1024px) 460px, (min-width: 640px) 400px, 340px"
            className="object-cover object-[33%_50%]"
          />
        </div>

        {TAGS.map(({ label, Icon, className, tilt, delay }) => (
          <div
            key={label}
            className={`clinica-float absolute z-10 flex items-center gap-2 rounded-full border-2 border-foreground bg-white py-2 pr-4 pl-3 text-sm font-semibold whitespace-nowrap shadow-[0_3px_0_0_#1f2a44] ${className}`}
            style={{ "--tilt": tilt, "--delay": delay } as React.CSSProperties}
          >
            <Icon weight="duotone" aria-hidden className="size-5 text-primary" />
            {label}
          </div>
        ))}

        <DoodleStar aria-hidden className="absolute -top-3 right-2 size-9 rotate-12 text-primary" />
        <DoodleSpiral aria-hidden className="absolute -bottom-6 right-6 size-12 text-(color:--mint)" />
      </div>
    </section>
  );
}
