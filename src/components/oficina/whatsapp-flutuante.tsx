"use client";

import { useEffect, useState } from "react";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { WHATSAPP_AGENDAR } from "./data";

/**
 * Botão fixo de WhatsApp, estilo etiqueta industrial (quadrado laranja com borda).
 * Some enquanto o formulário está na tela, para não cobrir os campos no celular.
 */
export function WhatsappFlutuante() {
  const [escondido, setEscondido] = useState(false);

  useEffect(() => {
    const alvo = document.getElementById("agendar");
    if (!alvo) return;
    const obs = new IntersectionObserver(([entrada]) => setEscondido(entrada.isIntersecting), {
      threshold: 0.05,
    });
    obs.observe(alvo);
    return () => obs.disconnect();
  }, []);

  return (
    <a
      href={WHATSAPP_AGENDAR}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar revisão pelo WhatsApp"
      tabIndex={escondido ? -1 : undefined}
      aria-hidden={escondido ? true : undefined}
      className={`fixed right-4 bottom-4 z-[60] flex h-14 items-center gap-2 border-2 border-[#f2f0eb] bg-primary px-3.5 text-primary-foreground shadow-[4px_4px_0_#0e0f11] transition-[opacity,transform] duration-200 hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0_#0e0f11] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffb000] ${
        escondido ? "pointer-events-none translate-y-6 opacity-0" : ""
      }`}
    >
      <IconBrandWhatsapp aria-hidden size={28} stroke={2} />
      <span aria-hidden className="hidden flex-col text-left leading-none sm:flex">
        <span className="font-mono text-[0.6rem] tracking-[0.18em] uppercase">Agendar</span>
        <span className="font-heading text-xl font-black tracking-wide uppercase">WhatsApp</span>
      </span>
    </a>
  );
}
