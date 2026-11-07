/**
 * Estado compartilhado simples entre o painel de luzes (ou a lista de serviços) e o formulário:
 * um evento customizado no window. O formulário escuta e preenche o campo "interesse".
 */
export const INTERESSE_EVENT = "oficina:interesse";

export function selecionarInteresse(valor: string) {
  window.dispatchEvent(new CustomEvent<string>(INTERESSE_EVENT, { detail: valor }));
}
