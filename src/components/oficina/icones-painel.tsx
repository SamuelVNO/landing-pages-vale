import type { SVGProps } from "react";

/**
 * Símbolos de luz de painel desenhados à mão, no formato das luzes reais.
 * Mesma grade (24x24) e mesmo traço, para parecerem do mesmo painel.
 */
type Props = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

/** Injeção eletrônica / check engine: silhueta do motor. */
export function IconeInjecao(props: Props) {
  return (
    <Base {...props}>
      <path d="M2.5 9.5v6" />
      <path d="M2.5 12h2" />
      <path d="M4.5 9h2.2l1.6-2.2h5.4V9" />
      <path d="M4.5 9v8.4h2.7l1.5 1.8h7l2.3-2.4V14h2" />
      <path d="M21.5 11v6" />
      <path d="M10.5 6.8V5h3" />
    </Base>
  );
}

/** Freio: círculo com exclamação entre parênteses. */
export function IconeFreio(props: Props) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="5" />
      <path d="M12 9.3v3.4" />
      <path d="M12 15.1h.01" strokeWidth={2.4} />
      <path d="M6.4 6.6a8.2 8.2 0 0 0 0 10.8" />
      <path d="M17.6 6.6a8.2 8.2 0 0 1 0 10.8" />
    </Base>
  );
}

/** Pressão do óleo: almotolia pingando. */
export function IconeOleo(props: Props) {
  return (
    <Base {...props}>
      <path d="M2.5 9.8 6.8 11" />
      <path d="M6.8 10.6h9.7v6.2a1 1 0 0 1-1 1H8.1a1.3 1.3 0 0 1-1.3-1.3z" />
      <path d="M16.5 12.2l2.9-2.6h2.1" />
      <path d="M10 10.6V8.6h3.2v2" />
      <path d="M20.2 14.6c-1 1.3-1.5 2.1-1.5 2.8a1.5 1.5 0 0 0 3 0c0-.7-.5-1.5-1.5-2.8z" />
    </Base>
  );
}

/** Bateria: caixa com terminais + e −. */
export function IconeBateria(props: Props) {
  return (
    <Base {...props}>
      <rect x="2.5" y="8" width="19" height="11" />
      <path d="M5.8 8V5.8h3.2V8" />
      <path d="M15 8V5.8h3.2V8" />
      <path d="M6.3 13.5h4.4" />
      <path d="M8.5 11.3v4.4" />
      <path d="M14.3 13.5h4.4" />
    </Base>
  );
}

/** Temperatura do motor: termômetro sobre líquido. */
export function IconeTemperatura(props: Props) {
  return (
    <Base {...props}>
      <path d="M8.5 3.4a2 2 0 0 1 4 0v8.1a3.7 3.7 0 1 1-4 0z" />
      <path d="M10.5 8v6.2" />
      <path d="M15.2 5.5h3M15.2 8.5h3" />
      <path d="M2.5 19c1.6-1.3 3.2-1.3 4.8 0s3.2 1.3 4.8 0 3.2-1.3 4.8 0 3.2 1.3 4.6 0" />
      <path d="M2.5 22c1.6-1.3 3.2-1.3 4.8 0s3.2 1.3 4.8 0 3.2-1.3 4.8 0 3.2 1.3 4.6 0" />
    </Base>
  );
}

/** ABS: sigla dentro de um círculo entre parênteses. */
export function IconeAbs(props: Props) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="5.6" />
      <text
        x="12"
        y="13.6"
        textAnchor="middle"
        fontSize="4.6"
        fontWeight="700"
        fill="currentColor"
        stroke="none"
        style={{ fontFamily: "var(--font-code), ui-monospace, monospace" }}
      >
        ABS
      </text>
      <path d="M6.2 6.4a8.2 8.2 0 0 0 0 11.2" />
      <path d="M17.8 6.4a8.2 8.2 0 0 1 0 11.2" />
    </Base>
  );
}
