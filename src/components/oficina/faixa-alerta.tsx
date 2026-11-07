/** Divisor de listras amarelo/preto. Decorativo e usado só em poucos pontos. */
export function FaixaAlerta({ className = "" }: { className?: string }) {
  return <div aria-hidden className={`faixa-alerta ${className}`} />;
}
