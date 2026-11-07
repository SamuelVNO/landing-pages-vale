"use client";

import type { ReactNode } from "react";
import * as m from "motion/react-m";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = { once: true, margin: "0px 0px -10% 0px" } as const;

/** Bloco que aparece (fade + leve subida) ao entrar na tela. Não usar no título nem na foto do hero. */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </m.div>
  );
}

/** Texto que aparece linha a linha (cada linha é um item de `lines`). Usar dentro de h2, p ou blockquote. */
export function RevealLines({
  lines,
  className,
  lineClassName,
  delay = 0,
  step = 0.12,
}: {
  lines: readonly ReactNode[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  step?: number;
}) {
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <m.span
          key={i}
          className={`block ${lineClassName ?? ""}`}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.7, delay: delay + i * step, ease: EASE }}
        >
          {line}
        </m.span>
      ))}
    </span>
  );
}

/** Fio de 1px que se desenha da esquerda para a direita (scaleX). */
export function DrawRule({
  className = "",
  delay = 0,
  double = false,
}: {
  className?: string;
  delay?: number;
  double?: boolean;
}) {
  const line = (extra: string, d: number) => (
    <m.div
      aria-hidden="true"
      className={`h-px w-full origin-left bg-foreground ${extra}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={VIEWPORT}
      transition={{ duration: 1.1, delay: d, ease: EASE }}
    />
  );
  if (double) {
    return (
      <div className={className}>
        {line("", delay)}
        <div className="h-[3px]" />
        {line("", delay + 0.15)}
      </div>
    );
  }
  return <div className={className}>{line("", delay)}</div>;
}
