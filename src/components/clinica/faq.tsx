import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CLINICA } from "./data";
import { DoodleSpiral } from "./doodles";
import { Notation } from "./notation";

export const FAQ_ITENS = [
  {
    pergunta: "Vai doer?",
    resposta:
      "A gente trabalha para que você não sinta dor. Antes da anestesia, passamos um gel na gengiva, e durante o procedimento você pode levantar a mão a qualquer momento para a gente parar. Se algo incomodar, é só avisar: ajustamos na hora.",
  },
  {
    pergunta: "Quanto tempo dura a primeira consulta?",
    resposta:
      "Cerca de 50 minutos. É um tempo para conversar sobre o que te trouxe aqui, examinar com calma, tirar radiografia se for necessário e explicar o que foi encontrado e quais são os caminhos possíveis. Ninguém começa tratamento sem você entender e concordar.",
  },
  {
    pergunta: "Vocês atendem convênio?",
    resposta: `Essa informação muda de tempos em tempos, então o melhor é perguntar direto para a gente. Consulte pelo WhatsApp ${CLINICA.telefoneExibido} e respondemos com o que vale hoje.`,
  },
  {
    pergunta: "Atendem criança?",
    resposta:
      "Sim, temos odontopediatria. A primeira visita é pensada para a criança conhecer a sala, os instrumentos e a dentista antes de qualquer procedimento, e os pais podem ficar junto durante todo o atendimento.",
  },
  {
    pergunta: "Tenho muito medo de dentista. O que eu faço?",
    resposta:
      "Conte isso quando for marcar ou assim que chegar. A gente combina um sinal (levantar a mão), explica cada passo antes de fazer e respeita o seu ritmo. Muitos pacientes chegam assim, e está tudo bem. Você não precisa se justificar.",
  },
  {
    pergunta: "Estou há anos sem ir ao dentista. Vão me dar bronca?",
    resposta:
      "Não. Ninguém aqui está para julgar. A gente olha como está hoje, organiza o que é mais urgente e propõe um plano por etapas, no seu tempo.",
  },
  {
    pergunta: "Atendem à noite e aos sábados?",
    resposta:
      "Sim. De segunda a sexta, das 8h às 20h, e aos sábados, das 8h às 13h. Se o seu horário é apertado, diga no WhatsApp e a gente procura o melhor encaixe.",
  },
] as const;

export function Faq() {
  return (
    <section id="perguntas" aria-labelledby="faq-titulo" className="mx-auto w-full max-w-6xl scroll-mt-4 px-5 pb-20 sm:px-8 lg:pb-28">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="relative lg:col-span-4">
          <h2
            id="faq-titulo"
            className="relative font-heading text-4xl leading-[1.05] font-extrabold tracking-tight text-balance sm:text-5xl"
          >
            Perguntas que todo mundo faz{" "}
            <Notation color="#2F5DB3" strokeWidth={4} padding={2} duration={800}>
              baixinho
            </Notation>
          </h2>
          <p className="mt-5 max-w-sm text-lg leading-relaxed text-muted-foreground">
            Se a sua não está aqui, chame no WhatsApp. A gente responde sem pressa.
          </p>
          <DoodleSpiral aria-hidden className="mt-8 hidden size-14 text-(color:--mint) lg:block" />
        </div>

        <Accordion className="lg:col-span-8">
          {FAQ_ITENS.map((item, i) => (
            <AccordionItem key={item.pergunta} value={`faq-${i}`} className="border-b-2 border-dashed border-foreground/20 not-last:border-b-2">
              <AccordionTrigger className="min-h-14 items-center rounded-none py-4 text-left font-heading text-lg font-bold hover:no-underline sm:text-xl [&_svg]:size-6 [&_svg]:text-primary">
                {item.pergunta}
              </AccordionTrigger>
              <AccordionContent className="pr-8 text-base leading-relaxed text-muted-foreground sm:text-[1.05rem]">
                {item.resposta}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
