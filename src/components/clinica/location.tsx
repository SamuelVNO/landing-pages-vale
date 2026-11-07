import { ClockIcon, MapPinIcon, NavigationArrowIcon, WhatsappLogoIcon } from "@phosphor-icons/react/ssr";
import { whatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { CLINICA, HORARIOS, MAPS_LINK, WHATSAPP_MENSAGEM_GERAL } from "./data";
import { DoodleSquiggle } from "./doodles";
import { MapFacade } from "./map-facade";
import { Notation } from "./notation";

export function Location() {
  return (
    <section id="onde-fica" aria-labelledby="local-titulo" className="mx-auto w-full max-w-6xl scroll-mt-4 px-5 py-20 sm:px-8 lg:py-28">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <h2
            id="local-titulo"
            className="relative font-heading text-4xl leading-[1.05] font-extrabold tracking-tight text-balance sm:text-5xl"
          >
            Fácil de chegar, no{" "}
            <Notation color="#7FD1C1" strokeWidth={7} padding={1}>
              Jardim Apolo
            </Notation>
          </h2>

          <address className="mt-6 flex items-start gap-3 text-lg leading-relaxed not-italic">
            <MapPinIcon weight="duotone" aria-hidden className="mt-0.5 size-7 shrink-0 text-primary" />
            <span>
              <strong className="font-semibold">{CLINICA.endereco}</strong>
              <br />
              {CLINICA.bairro}, {CLINICA.cidade} – {CLINICA.uf}
              <br />
              CEP {CLINICA.cep}
            </span>
          </address>

          <div className="mt-7 flex items-start gap-3">
            <ClockIcon weight="duotone" aria-hidden className="mt-0.5 size-7 shrink-0 text-primary" />
            <dl className="flex-1 text-lg">
              {HORARIOS.map((h) => (
                <div key={h.dia} className="flex justify-between gap-4 border-b-2 border-dashed border-foreground/15 py-2 last:border-b-0">
                  <dt className={cn(h.destaque && "font-semibold")}>{h.dia}</dt>
                  <dd className={cn("text-right", h.destaque ? "font-semibold text-primary" : "text-muted-foreground")}>{h.horas}</dd>
                </div>
              ))}
            </dl>
          </div>

          <DoodleSquiggle className="mt-6 h-3 w-24 text-(color:--mint)" />

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-foreground bg-white px-6 text-base font-semibold shadow-[0_3px_0_0_#1f2a44] transition-transform outline-none hover:translate-y-0.5 hover:bg-(--peach) focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:ring-offset-2"
            >
              <NavigationArrowIcon weight="duotone" aria-hidden className="size-5" />
              Como chegar
              <span className="sr-only"> (abre o Google Maps em outra aba)</span>
            </a>
            <a
              href={whatsappUrl(CLINICA.whatsapp, WHATSAPP_MENSAGEM_GERAL)}
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-6 text-base font-semibold text-primary-foreground shadow-[0_4px_0_0_#1f3f80] transition-transform outline-none hover:translate-y-0.5 hover:shadow-[0_2px_0_0_#1f3f80] focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:ring-offset-2"
            >
              <WhatsappLogoIcon weight="duotone" aria-hidden className="size-5" />
              {CLINICA.telefoneExibido}
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
          <MapFacade />
        </div>
      </div>
    </section>
  );
}
