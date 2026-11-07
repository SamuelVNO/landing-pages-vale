import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AREAS } from "./dados";
import { DrawRule, Reveal } from "./reveal";
import { SecaoCabecalho } from "./secao";

/**
 * ELEMENTO-ASSINATURA: as áreas de atuação como artigos de um índice de jornal.
 * O Accordion do shadcn é estilizado como linha de índice (número, pergunta, "ler"), não como card.
 */
export function Artigos() {
  return (
    <section id="artigos" aria-labelledby="titulo-artigos" className="scroll-mt-4 pb-20 sm:pb-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SecaoCabecalho
          headingId="titulo-artigos"
          kicker="Áreas de atuação"
          aside="Arts. 1º a 6º"
          titulo={["Seis assuntos,", "seis perguntas que", "chegam ao escritório"]}
        />

        <Reveal className="mt-6 max-w-2xl">
          <p className="adv-prose text-[1.1875rem] leading-[1.6] text-muted-foreground">
            Toque em um artigo para ler o que a lei diz em linguagem simples e quais documentos costumam ser
            necessários na consulta.
          </p>
        </Reveal>

        <div className="mt-12">
          <DrawRule double />
          <Accordion defaultValue={["art-1"]} className="w-full">
            {AREAS.map((area) => (
              <AccordionItem key={area.id} value={area.id} className="border-b border-foreground/55">
                <AccordionTrigger className="grid grid-cols-[3.75rem_1fr] items-baseline gap-x-3 gap-y-1 rounded-none border-0 py-6 text-left text-base font-normal hover:no-underline focus-visible:ring-2 focus-visible:ring-primary sm:grid-cols-[6.5rem_1fr_auto] sm:gap-x-6 **:data-[slot=accordion-trigger-icon]:hidden!">
                  <span className="adv-caps pt-1 text-[1.2rem] text-primary sm:text-[1.35rem]">{area.numero}</span>
                  <span className="block">
                    <span className="adv-caps block text-[1rem] text-muted-foreground">{area.area}</span>
                    <span className="mt-1 block font-heading text-[1.7rem] leading-[1.12] text-balance sm:text-[2.35rem]">
                      {area.pergunta}
                    </span>
                  </span>
                  <span className="adv-caps col-start-2 mt-2 text-[1.05rem] text-primary underline underline-offset-4 sm:col-start-3 sm:mt-0">
                    <span className="group-aria-expanded/accordion-trigger:hidden">Ler artigo</span>
                    <span className="hidden group-aria-expanded/accordion-trigger:inline">Fechar</span>
                  </span>
                </AccordionTrigger>

                <AccordionContent className="pb-10 sm:pl-[6.5rem]">
                  <div className="grid gap-8 md:grid-cols-[1fr_19rem] md:gap-12">
                    <div className="adv-prose text-[1.125rem] leading-[1.65]">
                      {area.lei.map((par) => (
                        <p key={par.slice(0, 24)}>{par}</p>
                      ))}
                    </div>
                    <aside aria-label={`Documentos para levar: ${area.area}`} className="border-t border-foreground pt-3 md:border-t-0 md:border-l md:pt-0 md:pl-6">
                      <p className="adv-caps text-[1.05rem] text-primary">Documentos para levar</p>
                      <ul className="mt-3 text-[1.0625rem] leading-snug">
                        {area.documentos.map((doc) => (
                          <li key={doc} className="border-b border-foreground/25 py-2 last:border-b-0">
                            {doc}
                          </li>
                        ))}
                      </ul>
                    </aside>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
