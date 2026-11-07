import { DIREITOS } from "./dados";
import { Reveal } from "./reveal";
import { SecaoCabecalho } from "./secao";

/** Notas curtas em colunas de jornal. Conteúdo informativo permitido pela OAB (no lugar de depoimentos). */
export function Direitos() {
  return (
    <section id="direitos" aria-labelledby="titulo-direitos" className="scroll-mt-4 bg-muted py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SecaoCabecalho
          headingId="titulo-direitos"
          kicker="Coluna informativa"
          aside="Notas do escritório"
          titulo={["Direitos que você", "talvez não conheça"]}
        />

        <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {DIREITOS.map((d, i) => (
            <li
              key={d.titulo}
              className="lg:border-l lg:border-foreground/55 lg:px-6 lg:first:border-l-0 lg:first:pl-0 lg:last:pr-0"
            >
              <Reveal delay={i * 0.1}>
                <p className="adv-caps text-[1rem] text-muted-foreground">Nota {i + 1}</p>
                <h3 className="mt-2 font-heading text-[1.7rem] leading-[1.1] text-balance">{d.titulo}</h3>
                <p className="adv-prose mt-3 text-[1.0625rem] leading-[1.58]">{d.texto}</p>
                <p className="mt-3 border-t border-foreground/40 pt-2 text-[0.98rem] italic text-muted-foreground">
                  Base: {d.base}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>

        <p className="mt-14 max-w-3xl border-t border-foreground pt-4 text-[1.0625rem] italic leading-snug text-muted-foreground">
          Este conteúdo é informativo e não substitui uma consulta. A lista não esgota o assunto, e a aplicação de
          cada regra depende dos fatos e dos documentos de cada pessoa.
        </p>
      </div>
    </section>
  );
}
