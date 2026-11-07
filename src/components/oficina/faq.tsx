import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQ } from "./data";

export function Faq() {
  return (
    <section id="duvidas" className="scroll-mt-14 bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="lg:col-span-4">
          <h2 className="font-heading text-[clamp(3rem,7vw,5.5rem)] leading-[0.86] font-black uppercase lg:sticky lg:top-24">
            Antes de
            <span className="block text-primary">perguntar,</span>
            <span className="block">olhe aqui.</span>
          </h2>
        </div>

        <Accordion className="border-t border-border lg:col-span-8" defaultValue={[FAQ[0].pergunta]}>
          {FAQ.map((item, i) => (
            <AccordionItem key={item.pergunta} value={item.pergunta} className="border-b border-border">
              <AccordionTrigger className="items-center gap-4 rounded-none border-0 py-5 text-lg leading-snug font-semibold hover:no-underline focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring sm:text-xl [&_[data-slot=accordion-trigger-icon]]:size-6 [&_[data-slot=accordion-trigger-icon]]:text-primary">
                <span aria-hidden className="w-8 shrink-0 font-mono text-sm text-[#ffb000]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1">{item.pergunta}</span>
              </AccordionTrigger>
              <AccordionContent className="pr-10 pl-12 text-base leading-relaxed text-muted-foreground sm:text-lg">
                <p>{item.resposta}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
