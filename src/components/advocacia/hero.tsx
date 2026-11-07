import Image from "next/image";
import { ESCRITORIO } from "./dados";

/**
 * Hero informativo em colunas, como a primeira página de um caderno de jornal.
 * Título e foto sem animação de entrada (LCP).
 */
export function Hero() {
  return (
    <section aria-labelledby="manchete" className="mx-auto max-w-6xl px-4 pt-8 pb-16 sm:px-6 sm:pt-12 sm:pb-24 lg:px-8">
      <div className="grid gap-x-10 gap-y-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <p className="adv-caps text-[1.05rem] text-muted-foreground">
            Informativo · Direitos do trabalhador e do segurado
          </p>
          <h1
            id="manchete"
            className="mt-4 font-heading text-[2.7rem] leading-[1.02] tracking-[-0.015em] text-balance sm:text-6xl lg:text-[5.4rem]"
          >
            Demitido, afastado ou esperando a aposentadoria?{" "}
            <em className="text-muted-foreground">Entenda o que a lei garante a você.</em>
          </h1>
        </div>

        <figure className="lg:col-span-4 lg:row-span-2 lg:row-start-1 lg:col-start-9">
          <div className="relative aspect-[5/6] w-full overflow-hidden border border-foreground bg-muted">
            <Image
              src="/img/advocacia/biblioteca-hero.jpg"
              alt="Estantes de madeira com livros antigos encadernados em uma biblioteca, em preto e branco"
              width={1400}
              height={1191}
              preload
              sizes="(min-width: 1152px) 360px, (min-width: 640px) 60vw, 100vw"
              className="h-full w-full object-cover object-[62%_50%]"
            />
          </div>
          <figcaption className="mt-2 border-t border-foreground pt-2 text-[0.95rem] leading-snug text-muted-foreground italic">
            Estantes de obras jurídicas encadernadas: a lei está escrita, e entendê-la começa por saber onde procurar.
            <span className="adv-caps mt-1 block not-italic">Foto: Annie Spratt / Unsplash</span>
          </figcaption>
        </figure>

        <div className="lg:col-span-8">
          <div aria-hidden="true" className="h-px bg-foreground" />
          <p className="adv-caps mt-2 text-[1.05rem] text-muted-foreground">Por {ESCRITORIO.nome}</p>

          <div className="adv-prose adv-columns mt-5 text-[1.1875rem] leading-[1.6] md:columns-2 md:gap-10">
            <p className="first-letter:float-left first-letter:mt-1 first-letter:mr-2 first-letter:font-heading first-letter:text-[4.9rem] first-letter:leading-[0.78] first-letter:text-primary">
              Quem perde o emprego, sofre um acidente ou se aproxima da aposentadoria costuma ter, de repente, mais
              perguntas do que respostas: quanto receber, em quanto tempo, que papel guardar. Esta página reúne, em
              linguagem simples, o que a legislação trabalhista e a previdenciária dizem sobre os assuntos que mais
              chegam ao escritório, em Jacareí e região.
            </p>
            <p className="mt-4 md:mt-0">
              Cada situação tem detalhes próprios. O conteúdo aqui é informativo; é na consulta, com os documentos em
              mãos, que o seu caso é analisado. Abaixo, seis assuntos organizados como artigos, os principais prazos e
              o passo a passo para marcar um horário.
            </p>
          </div>

          <div className="mt-8 grid items-center gap-5 border-t border-foreground pt-5 sm:grid-cols-[1fr_auto] sm:gap-8">
            <p className="adv-caps text-[1.05rem] leading-snug text-foreground">
              Atuação desde {ESCRITORIO.desde} · {ESCRITORIO.oab} · Atendimento em Jacareí e região
            </p>
            <a
              href="#solicitar"
              className="inline-flex min-h-12 items-center justify-center bg-primary px-7 text-[1.0625rem] tracking-wide text-primary-foreground transition-colors hover:bg-[color-mix(in_srgb,var(--green),black_18%)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-primary"
            >
              Solicitar consulta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
