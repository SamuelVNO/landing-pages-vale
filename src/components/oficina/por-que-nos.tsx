import Image from "next/image";

const COMPROMISSOS = [
  {
    cod: "GAR-90",
    titulo: "Garantia de 90 dias, por escrito",
    texto:
      "Serviço e peça saem com termo assinado, com data e quilometragem. Voltou com o mesmo problema dentro do prazo, a gente refaz sem discutir.",
    inclinacao: "lg:-rotate-[1.2deg]",
    recuo: "lg:mr-10",
  },
  {
    cod: "PEÇA-MÃO",
    titulo: "A peça trocada vai para a sua mão",
    texto:
      "Pastilha, filtro, correia: tudo volta numa caixa com o nome do carro. Oficina que troca de verdade não tem medo de mostrar.",
    inclinacao: "lg:rotate-[0.9deg]",
    recuo: "lg:ml-10",
  },
  {
    cod: "ORÇ-FIXO",
    titulo: "Orçamento não muda sem você aprovar",
    texto:
      "Achou outra coisa no meio do serviço? A gente para, manda foto e valor e espera o seu OK pelo WhatsApp. Sem “ah, aproveitei e troquei”.",
    inclinacao: "lg:-rotate-[0.6deg]",
    recuo: "lg:mr-4",
  },
  {
    cod: "LEVA-TRAZ",
    titulo: "Leva-e-traz em Taubaté e Tremembé",
    texto:
      "Sem tempo de ir até a Vila Costa? Buscamos e devolvemos o carro em Taubaté e Tremembé. Carro reserva em alguns serviços, sob consulta.",
    inclinacao: "lg:rotate-[1.1deg]",
    recuo: "lg:ml-14",
  },
] as const;

export function PorQueNos() {
  return (
    <section id="por-que-nos" className="scroll-mt-14 bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
        {/* Fotos: uma grande e uma vertical sobreposta */}
        <div className="lg:col-span-6">
          <div className="lg:sticky lg:top-24">
            <h2 className="font-heading text-[clamp(3rem,8vw,6.2rem)] leading-[0.86] lg:text-[clamp(3rem,5vw,5rem)] font-black uppercase">
              Quatro compromissos.
              <span className="block text-primary">Por escrito.</span>
            </h2>

            <div className="relative mt-10 mb-16 sm:mb-20">
              <div className="relative aspect-[3/2] w-[88%] overflow-hidden border border-border">
                <Image
                  src="/img/oficina/oficina.jpg"
                  alt="Mecânico trabalhando na bancada de uma oficina, com ferramentas na parede e um carro no elevador"
                  fill
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-cover"
                />
                <div aria-hidden className="absolute inset-0 bg-[#0e0f11]/15" />
                <p className="absolute bottom-0 left-0 bg-background px-3 py-1.5 font-mono text-[0.68rem] tracking-[0.18em] text-[#ffb000] uppercase">
                  18 anos na Vila Costa
                </p>
              </div>
              <div className="absolute -right-0 -bottom-12 w-[40%] border-[6px] border-background sm:-bottom-16">
                <div className="relative aspect-[2/3] overflow-hidden outline outline-1 outline-border">
                  <Image
                    src="/img/oficina/mecanico.jpg"
                    alt="Mecânico de macacão olhando para cima, embaixo de um carro erguido no elevador"
                    fill
                    sizes="(min-width: 1024px) 18vw, 36vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Etiquetas de garantia */}
        <ul className="flex flex-col gap-5 lg:col-span-6 lg:pt-24">
          {COMPROMISSOS.map((c, i) => (
            <li key={c.cod} className={`${c.inclinacao} ${c.recuo}`}>
              <article className="relative border border-[#4a4e55] bg-card py-5 pr-5 pl-14 shadow-[6px_6px_0_rgba(0,0,0,0.55)] sm:pl-16">
                {/* furo da etiqueta e rebites */}
                <span aria-hidden className="absolute top-1/2 left-4 size-4 -translate-y-1/2 rounded-full border border-[#4a4e55] bg-background" />
                <span aria-hidden className="absolute top-2 right-2 size-1.5 rounded-full bg-[#4a4e55]" />
                <span aria-hidden className="absolute right-2 bottom-2 size-1.5 rounded-full bg-[#4a4e55]" />
                <p className="flex items-center gap-3 font-mono text-[0.68rem] tracking-[0.18em] text-[#ffb000] uppercase">
                  <span>Compromisso {String(i + 1).padStart(2, "0")}</span>
                  <span aria-hidden className="h-px flex-1 bg-[#4a4e55]" />
                  <span aria-hidden className="text-muted-foreground">
                    {c.cod}
                  </span>
                </p>
                <h3 className="mt-2 font-heading text-[1.9rem] leading-[0.95] font-extrabold uppercase sm:text-4xl">
                  {c.titulo}
                </h3>
                <p className="mt-2.5 text-base leading-snug text-muted-foreground">{c.texto}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
