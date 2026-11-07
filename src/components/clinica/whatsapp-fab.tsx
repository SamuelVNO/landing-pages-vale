"use client";

import { useEffect, useState } from "react";
import { WhatsappLogoIcon } from "@phosphor-icons/react/ssr";
import { whatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { CLINICA, WHATSAPP_MENSAGEM_GERAL } from "./data";
import { FORM_ID } from "./interesse-event";

/** Botão flutuante: pílula azul com texto curto. Some enquanto o formulário está na tela. */
export function WhatsappFab() {
  const [escondido, setEscondido] = useState(false);

  useEffect(() => {
    const alvo = document.getElementById(FORM_ID);
    if (!alvo || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entrada]) => setEscondido(entrada.isIntersecting), {
      threshold: 0.05,
    });
    observer.observe(alvo);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={whatsappUrl(CLINICA.whatsapp, WHATSAPP_MENSAGEM_GERAL)}
      aria-label="Agendar avaliação pelo WhatsApp"
      tabIndex={escondido ? -1 : undefined}
      className={cn(
        "fixed right-4 bottom-4 z-40 inline-flex min-h-14 items-center gap-2 rounded-full border-2 border-white bg-primary pr-6 pl-5 text-base font-bold text-primary-foreground shadow-[0_5px_0_0_#1f3f80] transition-all duration-200 outline-none hover:translate-y-0.5 hover:shadow-[0_3px_0_0_#1f3f80] focus-visible:ring-3 focus-visible:ring-ring/60 focus-visible:ring-offset-2 sm:right-6 sm:bottom-6",
        escondido && "pointer-events-none translate-y-6 opacity-0",
      )}
    >
      <WhatsappLogoIcon weight="duotone" aria-hidden className="size-6" />
      Agendar
    </a>
  );
}
