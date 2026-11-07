"use client";

import { useEffect, useState } from "react";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/csr/WhatsappLogo";
import { whatsappUrl } from "@/lib/whatsapp";
import { ESCRITORIO } from "./dados";

/**
 * Botão flutuante discreto: retângulo verde-escuro com texto no desktop, só o ícone no celular.
 * Some enquanto o formulário está na tela, para não cobrir os campos.
 */
export function WhatsAppFlutuante() {
  const [sobreFormulario, setSobreFormulario] = useState(false);

  useEffect(() => {
    const alvo = document.getElementById("solicitar");
    if (!alvo || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(([entrada]) => setSobreFormulario(entrada.isIntersecting), {
      threshold: 0.05,
    });
    observer.observe(alvo);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={whatsappUrl(ESCRITORIO.whatsapp, "Olá, Dra. Carolina. Gostaria de falar com o escritório.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com o escritório pelo WhatsApp"
      tabIndex={sobreFormulario ? -1 : undefined}
      aria-hidden={sobreFormulario ? true : undefined}
      className={`fixed right-4 bottom-4 z-40 inline-flex min-h-12 min-w-12 items-center justify-center gap-2 bg-primary px-3 text-[1rem] tracking-wide text-primary-foreground shadow-[0_1px_0_0_var(--gold)] transition-[opacity,transform] duration-300 hover:bg-[color-mix(in_srgb,var(--green),black_18%)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-primary sm:right-6 sm:bottom-6 sm:px-5 ${
        sobreFormulario ? "pointer-events-none translate-y-2 opacity-0" : "opacity-100"
      }`}
    >
      <WhatsappLogoIcon aria-hidden="true" weight="fill" size={22} />
      <span className="hidden sm:inline">Falar com o escritório</span>
    </a>
  );
}
