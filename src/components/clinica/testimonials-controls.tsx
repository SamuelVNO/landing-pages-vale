"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react/ssr";
import { useCarousel } from "@/components/ui/carousel";

const botao =
  "grid size-12 place-items-center rounded-full border-2 border-foreground bg-white text-foreground shadow-[0_3px_0_0_#1f2a44] transition-all outline-none hover:bg-(--peach) focus-visible:ring-3 focus-visible:ring-ring/60 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40";

/** Setas do carrossel no estilo da página (usa o contexto do Carousel do shadcn). */
export function TestimonialsControls() {
  const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } = useCarousel();
  return (
    <div className="flex gap-3">
      <button type="button" onClick={scrollPrev} disabled={!canScrollPrev} aria-label="Depoimento anterior" className={botao}>
        <ArrowLeftIcon weight="bold" aria-hidden className="size-5" />
      </button>
      <button type="button" onClick={scrollNext} disabled={!canScrollNext} aria-label="Próximo depoimento" className={botao}>
        <ArrowRightIcon weight="bold" aria-hidden className="size-5" />
      </button>
    </div>
  );
}
