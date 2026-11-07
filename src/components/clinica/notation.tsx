"use client";

import { useEffect, useRef } from "react";
import { useInView } from "motion/react";
import { annotate } from "rough-notation";

type Props = {
  children: React.ReactNode;
  type?: "underline" | "circle";
  color?: string;
  strokeWidth?: number;
  padding?: number;
  /** Duração do desenho, em ms. */
  duration?: number;
  /** Espera antes de começar a desenhar, em ms. */
  delay?: number;
  iterations?: number;
  className?: string;
};

/**
 * Marca a palavra com um traço à mão (rough-notation) quando ela entra na tela.
 * O texto já nasce visível; só o traço (um SVG absoluto) é desenhado depois,
 * então não há mudança de layout. Com "reduzir movimento", o traço aparece pronto.
 */
export function Notation({
  children,
  type = "underline",
  color = "#7FD1C1",
  strokeWidth = 5,
  padding = 2,
  duration = 700,
  delay = 0,
  iterations,
  className,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });

  useEffect(() => {
    const el = ref.current;
    if (!el || !inView) return;

    let cancelled = false;
    let timer: number | undefined;
    let annotation: ReturnType<typeof annotate> | undefined;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const start = () => {
      if (cancelled) return;
      annotation = annotate(el, {
        type,
        color,
        strokeWidth,
        padding,
        animate: !reduce,
        animationDuration: duration,
        iterations: iterations ?? (type === "circle" ? 2 : 1),
        multiline: true,
      });
      timer = window.setTimeout(() => annotation?.show(), reduce ? 0 : delay);
    };

    // Espera as fontes carregarem para medir a palavra no tamanho final.
    const fontsReady: Promise<unknown> = "fonts" in document ? document.fonts.ready : Promise.resolve();
    fontsReady.then(start, start);

    return () => {
      cancelled = true;
      if (timer !== undefined) window.clearTimeout(timer);
      annotation?.remove();
    };
  }, [inView, type, color, strokeWidth, padding, duration, delay, iterations]);

  return (
    <span ref={ref} className={className}>
      {children}
    </span>
  );
}
