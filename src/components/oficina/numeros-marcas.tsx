import { Marquee } from "@/components/ui/marquee";
import { MARCAS } from "./data";
import { Odometro } from "./odometro";

const NUMEROS = [
  { valor: "18", sufixo: "", rotulo: "anos de oficina na Vila Costa", leitura: "18 anos de oficina" },
  { valor: "6.000", sufixo: "+", rotulo: "carros atendidos", leitura: "Mais de 6.000 carros atendidos" },
  { valor: "4,9", sufixo: "★", rotulo: "nota no Google", leitura: "Nota 4,9 no Google" },
  { valor: "90", sufixo: "dias", rotulo: "de garantia por escrito", leitura: "90 dias de garantia por escrito" },
] as const;

export function NumerosMarcas() {
  return (
    <section aria-label="Números da oficina e marcas atendidas" className="border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <dl className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
          {NUMEROS.map((n, i) => (
            <div
              key={n.rotulo}
              className={`flex flex-col-reverse justify-end gap-3 ${i % 2 === 1 ? "border-l border-border pl-5 sm:pl-8" : "pr-4"} ${
                i >= 2 ? "lg:border-l lg:border-border lg:pl-8" : ""
              } ${i === 2 ? "max-lg:border-l-0 max-lg:pl-0" : ""}`}
            >
              <dt className="text-sm font-medium tracking-wide text-muted-foreground uppercase">{n.rotulo}</dt>
              <dd className="flex items-end gap-2 text-4xl sm:text-5xl">
                <Odometro valor={n.valor} leitura={n.leitura} />
                {n.sufixo ? (
                  <span aria-hidden className="pb-1 font-mono text-xl text-[#ffb000] sm:text-2xl">
                    {n.sufixo}
                  </span>
                ) : null}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="border-t border-border bg-background py-4">
        <p className="sr-only">Marcas que atendemos: {MARCAS.join(", ")}.</p>
        <Marquee aria-hidden pauseOnHover repeat={3} className="[--duration:42s] [--gap:3rem]">
          {MARCAS.map((marca, i) => (
            <span key={marca} className="flex items-center gap-12">
              <span
                className={`font-heading text-4xl leading-none font-black tracking-wide uppercase sm:text-5xl ${
                  i % 2 === 0 ? "text-[#f2f0eb]" : "text-[#9aa0a8]"
                }`}
              >
                {marca}
              </span>
              <span aria-hidden className="size-2 shrink-0 bg-primary" />
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
