import { ENDERECO_COMPLETO, ESCRITORIO } from "./dados";
import { DrawRule, Reveal, RevealLines } from "./reveal";
import { MapaFachada } from "./mapa";

export function Endereco() {
  return (
    <section id="contato" aria-labelledby="titulo-contato" className="scroll-mt-4 pb-20 sm:pb-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-x-12 lg:px-8">
        <header className="lg:col-span-5">
          <DrawRule />
          <p className="adv-caps mt-2 text-[0.95rem] text-muted-foreground">Serviço</p>
          <h2
            id="titulo-contato"
            className="mt-6 font-heading text-[2.5rem] leading-[1.04] tracking-[-0.01em] text-balance sm:text-6xl"
          >
            <RevealLines lines={["Endereço", "e horário"]} />
          </h2>

          <Reveal className="mt-8">
            <dl className="divide-y divide-foreground/40 border-y border-foreground text-[1.125rem] leading-snug">
              <div className="py-4">
                <dt className="adv-caps text-[1.05rem] text-muted-foreground">Escritório</dt>
                <dd className="mt-1">
                  <address className="not-italic">{ENDERECO_COMPLETO}</address>
                </dd>
              </div>
              <div className="py-4">
                <dt className="adv-caps text-[1.05rem] text-muted-foreground">Horário</dt>
                <dd className="mt-1">{ESCRITORIO.horario}. Atendimento presencial ou por vídeo.</dd>
              </div>
              <div className="py-4">
                <dt className="adv-caps text-[1.05rem] text-muted-foreground">WhatsApp</dt>
                <dd className="mt-1">
                  <a
                    className="inline-flex min-h-11 items-center text-primary underline underline-offset-4"
                    href={`https://wa.me/${ESCRITORIO.whatsapp}`}
                    rel="noopener"
                  >
                    {ESCRITORIO.whatsappExibicao}
                  </a>
                </dd>
              </div>
              <div className="py-4">
                <dt className="adv-caps text-[1.05rem] text-muted-foreground">Região atendida</dt>
                <dd className="mt-1">{ESCRITORIO.regiao.join(", ")}</dd>
              </div>
            </dl>
          </Reveal>
        </header>

        <div className="lg:col-span-7 lg:pt-3">
          <MapaFachada />
        </div>
      </div>
    </section>
  );
}
