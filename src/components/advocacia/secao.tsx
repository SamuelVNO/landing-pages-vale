import type { ReactNode } from "react";
import { DrawRule, RevealLines } from "./reveal";

/** Cabeçalho de seção de jornal: fio, rótulo em versalete, título grande que aparece linha a linha. */
export function SecaoCabecalho({
  kicker,
  aside,
  titulo,
  headingId,
  className = "",
  children,
}: {
  kicker: string;
  aside?: string;
  titulo: readonly ReactNode[];
  headingId: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <header className={className}>
      <DrawRule />
      <div className="adv-caps mt-2 flex items-baseline justify-between gap-4 text-[0.95rem] text-muted-foreground">
        <span>{kicker}</span>
        {aside ? <span className="text-right">{aside}</span> : null}
      </div>
      <h2
        id={headingId}
        className="mt-6 max-w-[18ch] font-heading text-[2.5rem] leading-[1.04] tracking-[-0.01em] text-balance sm:text-6xl lg:text-[4.25rem]"
      >
        <RevealLines lines={titulo} />
      </h2>
      {children}
    </header>
  );
}
