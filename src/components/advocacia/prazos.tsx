import { PRAZOS } from "./dados";
import { DrawRule, Reveal } from "./reveal";
import { SecaoCabecalho } from "./secao";

/**
 * Linha do tempo tipográfica: horizontal a partir de md, vertical no celular.
 * Só prazos informativos, com a base legal ao lado de cada um.
 */
export function Prazos() {
  return (
    <section id="prazos" aria-labelledby="titulo-prazos" className="scroll-mt-4 bg-muted py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SecaoCabecalho
          headingId="titulo-prazos"
          kicker="Quadro de prazos"
          aside="Do mais curto ao mais longo"
          titulo={["Prazos que você", "precisa conhecer"]}
        />

        <div className="relative mt-14">
          <DrawRule className="absolute top-0 right-0 left-0 hidden md:block" />
          <ol className="grid gap-0 md:grid-cols-4">
            {PRAZOS.map((prazo, i) => (
              <li
                key={prazo.titulo}
                className="relative border-l border-foreground pb-12 pl-6 last:pb-0 md:border-l-0 md:pt-8 md:pr-8 md:pb-0 md:pl-0"
              >
                <span
                  aria-hidden="true"
                  className="adv-gold-bg absolute top-2 -left-[4px] size-[7px] md:top-[-3px] md:left-0"
                />
                <Reveal delay={i * 0.1}>
                  <p className="flex items-baseline gap-2 font-heading leading-none">
                    <span className="text-[5rem] tracking-[-0.02em] md:text-[5.5rem]">{prazo.numero}</span>
                    <span className="adv-caps text-[1.35rem] text-muted-foreground">{prazo.unidade}</span>
                  </p>
                  <h3 className="mt-4 font-heading text-[1.65rem] leading-[1.12] text-balance">{prazo.titulo}</h3>
                  <p className="adv-prose mt-3 text-[1.0625rem] leading-[1.55]">{prazo.texto}</p>
                  <p className="adv-caps mt-3 text-[1rem] text-muted-foreground">{prazo.base}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <Reveal className="mt-14 max-w-3xl border-t border-foreground pt-4">
          <p className="text-[1.0625rem] leading-snug italic text-muted-foreground">
            Este conteúdo é informativo e não substitui uma consulta. Os prazos dependem da data e das
            circunstâncias de cada caso, e podem ter exceções; confirme o seu antes de agir.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
