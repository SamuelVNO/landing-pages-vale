import { PASSOS } from "./dados";
import { Reveal } from "./reveal";
import { SecaoCabecalho } from "./secao";

/** Como funciona a consulta: três passos com números romanos grandes em dourado (só decorativos). */
export function Consulta() {
  return (
    <section id="consulta" aria-labelledby="titulo-consulta" className="scroll-mt-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SecaoCabecalho
          headingId="titulo-consulta"
          kicker="Passo a passo"
          aside="Em três etapas"
          titulo={["Como funciona", "a consulta"]}
        />

        <ol className="mt-14 grid gap-12 md:grid-cols-3 md:gap-0">
          {PASSOS.map((passo, i) => (
            <li
              key={passo.romano}
              className="md:border-l md:border-foreground/55 md:px-8 md:first:border-l-0 md:first:pl-0 md:last:pr-0"
            >
              <Reveal delay={i * 0.12}>
                <p
                  aria-hidden="true"
                  className="adv-gold-text font-heading text-[7.5rem] leading-[0.85] tracking-[-0.02em] sm:text-[9rem]"
                >
                  {passo.romano}
                </p>
                <h3 className="mt-5 max-w-[16ch] font-heading text-[1.9rem] leading-[1.1] text-balance">
                  <span className="sr-only">Passo {i + 1}: </span>
                  {passo.titulo}
                </h3>
                <p className="adv-prose mt-3 text-[1.125rem] leading-[1.6] text-muted-foreground">{passo.texto}</p>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal className="mt-16">
          <div className="flex flex-col gap-4 border-y border-foreground py-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-heading text-[1.6rem] italic leading-tight">Quando quiser conversar sobre o seu caso.</p>
            <a
              href="#solicitar"
              className="inline-flex min-h-12 items-center justify-center bg-primary px-7 text-[1.0625rem] tracking-wide text-primary-foreground transition-colors hover:bg-[color-mix(in_srgb,var(--green),black_18%)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-primary"
            >
              Solicitar consulta
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
