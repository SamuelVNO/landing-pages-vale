import Image from "next/image";
import { ESCRITORIO } from "./dados";
import { Reveal, RevealLines } from "./reveal";
import { SecaoCabecalho } from "./secao";

// EXEMPLO: perfil fictício para portfólio (formação, comissão da OAB e número de inscrição não são reais).
export function Sobre() {
  return (
    <section id="escritorio" aria-labelledby="titulo-escritorio" className="scroll-mt-4 pb-20 sm:pb-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SecaoCabecalho
          headingId="titulo-escritorio"
          kicker="Perfil"
          aside={`${ESCRITORIO.advogada} · ${ESCRITORIO.oab}`}
          titulo={["Quem recebe", "você no escritório"]}
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="adv-prose adv-columns text-[1.1875rem] leading-[1.62] md:columns-2 md:gap-10">
                <p>
                  Carolina Mendes é advogada inscrita na OAB/SP sob o nº 000.000 e atua desde {ESCRITORIO.desde} com
                  Direito do Trabalho e Previdenciário, atendendo trabalhadores e segurados de Jacareí, São José dos
                  Campos, Santa Branca e Guararema.
                </p>
                <p className="mt-4">
                  É graduada em Direito e tem pós-graduação em Direito Previdenciário. Integra uma comissão da OAB
                  Jacareí, onde participa de atividades de orientação à comunidade sobre direitos do trabalho e da
                  previdência.
                </p>
                <p className="mt-4">
                  O escritório funciona na Rua Barão de Jacareí, no Centro, e atende com hora marcada. A rotina é a de
                  uma mesa com papéis: ler o CNIS, a carteira de trabalho, os laudos e os contracheques antes de falar
                  em caminhos, para que cada pessoa tenha o tempo de uma conversa sem pressa.
                </p>
              </div>
            </Reveal>

            <blockquote className="mt-12 adv-gold-border border-t-2 pt-6 sm:mt-14">
              <p className="font-heading text-[2.1rem] leading-[1.12] text-balance sm:text-[2.9rem]">
                <RevealLines
                  lines={[
                    "“Cada caso começa pelos documentos,",
                    "e só depois de lê-los com calma",
                    "é que se conversa sobre os caminhos possíveis.”",
                  ]}
                />
              </p>
              <footer className="adv-caps mt-4 text-[1.1rem] text-muted-foreground">
                {ESCRITORIO.advogada}, sobre a forma de trabalhar do escritório
              </footer>
            </blockquote>
          </div>

          <figure className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-foreground bg-muted sm:aspect-[3/2] lg:aspect-[4/5]">
              <Image
                src="/img/advocacia/biblioteca-escritorio.jpg"
                alt="Corredor de uma biblioteca antiga, com estantes altas de livros encadernados, escada de madeira e bustos de mármore, em preto e branco"
                width={1000}
                height={667}
                sizes="(min-width: 1024px) 440px, (min-width: 640px) 90vw, 100vw"
                className="h-full w-full object-cover object-[35%_50%]"
              />
            </div>
            <figcaption className="mt-2 border-t border-foreground pt-2 text-[0.95rem] leading-snug text-muted-foreground italic">
              Acervo de uma biblioteca de obras antigas. O estudo continua sendo a base do trabalho.
              <span className="adv-caps mt-1 block not-italic">Foto: Giammarco Boscaro / Unsplash</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
