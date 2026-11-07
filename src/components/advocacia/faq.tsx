import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQ } from "./dados";
import { DrawRule, Reveal, RevealLines } from "./reveal";

export function Faq() {
  return (
    <section id="duvidas" aria-labelledby="titulo-duvidas" className="scroll-mt-4 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-x-12 lg:px-8">
        <header className="lg:col-span-4">
          <DrawRule />
          <p className="adv-caps mt-2 text-[0.95rem] text-muted-foreground">Dúvidas comuns</p>
          <h2
            id="titulo-duvidas"
            className="mt-6 font-heading text-[2.5rem] leading-[1.04] tracking-[-0.01em] text-balance sm:text-6xl lg:text-[3.75rem]"
          >
            <RevealLines lines={["Perguntas", "frequentes"]} />
          </h2>
          <Reveal className="mt-5">
            <p className="adv-prose text-[1.125rem] leading-[1.6] text-muted-foreground">
              As respostas são gerais e informativas. Para o seu caso, a consulta é o caminho.
            </p>
          </Reveal>
        </header>

        <div className="lg:col-span-8">
          <DrawRule double />
          <Accordion className="w-full">
            {FAQ.map((item) => (
              <AccordionItem key={item.id} value={item.id} className="border-b border-foreground/55">
                <AccordionTrigger className="items-center gap-6 rounded-none border-0 py-5 text-left font-heading text-[1.5rem] leading-[1.15] font-normal hover:no-underline focus-visible:ring-2 focus-visible:ring-primary sm:text-[1.85rem] **:data-[slot=accordion-trigger-icon]:hidden!">
                  <span className="text-balance">{item.pergunta}</span>
                  <span aria-hidden="true" className="shrink-0 text-[2.2rem] leading-none text-primary">
                    <span className="group-aria-expanded/accordion-trigger:hidden">+</span>
                    <span className="hidden group-aria-expanded/accordion-trigger:inline">−</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-7 sm:max-w-[40rem]">
                  <p className="adv-prose text-[1.125rem] leading-[1.65]">{item.resposta}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
