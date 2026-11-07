import { IconBrandWhatsapp } from "@tabler/icons-react";
import { FaixaAlerta } from "./faixa-alerta";
import { ENDERECO_LINHA, HORARIOS, NAV, NEGOCIO, WHATSAPP_AGENDAR } from "./data";

export function Rodape() {
  return (
    <footer className="relative overflow-hidden bg-card pb-28 lg:pb-12">
      <FaixaAlerta />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 pt-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="flex items-center gap-2 font-heading text-4xl leading-none font-black tracking-[0.04em] uppercase">
            <span aria-hidden className="size-3.5 bg-primary" />
            Torque
          </p>
          <p className="mt-3 text-base leading-snug text-muted-foreground">
            Mecânica e revisão de carros em Taubaté desde 2008. Orçamento aprovado por você, no WhatsApp.
          </p>
        </div>

        <div>
          <h2 className="font-mono text-xs tracking-[0.2em] text-[#ffb000] uppercase">Endereço</h2>
          <address className="mt-3 text-base leading-snug not-italic">{ENDERECO_LINHA}</address>
          <p className="mt-3 font-mono text-sm text-muted-foreground">CNPJ {NEGOCIO.cnpj}</p>
        </div>

        <div>
          <h2 className="font-mono text-xs tracking-[0.2em] text-[#ffb000] uppercase">Horário</h2>
          <ul className="mt-3 space-y-1.5 text-base">
            {HORARIOS.map((h) => (
              <li key={h.dias} className="flex justify-between gap-4">
                <span className="text-muted-foreground">{h.dias}</span>
                <span className="font-mono">{h.horas}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-mono text-xs tracking-[0.2em] text-[#ffb000] uppercase">Links</h2>
          <ul className="mt-3 text-base">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex min-h-11 items-center hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  {item.rotulo}
                </a>
              </li>
            ))}
            <li>
              <a
                href={WHATSAPP_AGENDAR}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 font-semibold text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <IconBrandWhatsapp aria-hidden size={20} />
                {NEGOCIO.telefoneExibicao}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div aria-hidden className="marca-gigante" />
        <div className="relative z-10 flex flex-col gap-2 border-t border-border py-5 text-sm text-muted-foreground sm:flex-row sm:justify-between">
          <p>© 2026 Oficina Torque. Todos os direitos reservados.</p>
          <p>Site de demonstração para portfólio. Empresa, CNPJ e avaliações são fictícios.</p>
        </div>
      </div>
    </footer>
  );
}
