/**
 * Estado compartilhado simples entre o "O que está te incomodando?" e o formulário:
 * um evento customizado no window + rolagem até o formulário.
 */
export const INTERESSE_EVENT = "clinica:interesse";
export const FORM_ID = "agendar";

export function escolherInteresse(interesse: string) {
  window.dispatchEvent(new CustomEvent<string>(INTERESSE_EVENT, { detail: interesse }));
  const alvo = document.getElementById(FORM_ID);
  if (!alvo) return;
  const reduzir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  alvo.scrollIntoView({ behavior: reduzir ? "auto" : "smooth", block: "start" });
}
