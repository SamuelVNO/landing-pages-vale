import { IconBrandWhatsapp } from "@tabler/icons-react";
import { NAV, WHATSAPP_AGENDAR } from "./data";

export function Cabecalho() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a
          href="#topo"
          aria-label="Oficina Torque, voltar ao topo"
          className="flex items-center gap-2 outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <span aria-hidden className="size-3 bg-primary" />
          <span className="font-heading text-3xl leading-none font-black tracking-[0.04em] uppercase">
            Torque
          </span>
          <span
            aria-hidden
            className="hidden border border-border px-1.5 py-0.5 font-mono text-[0.65rem] tracking-widest text-muted-foreground uppercase sm:inline"
          >
            Taubaté
          </span>
        </a>

        <nav aria-label="Seções da página" className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="py-2 text-sm font-medium tracking-wide text-muted-foreground uppercase transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              {item.rotulo}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_AGENDAR}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center gap-2 bg-primary px-4 font-heading text-lg font-extrabold tracking-wide text-primary-foreground uppercase transition-colors hover:bg-[#ff8340] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <IconBrandWhatsapp aria-hidden size={20} stroke={2} />
          Agendar
        </a>
      </div>
    </header>
  );
}
