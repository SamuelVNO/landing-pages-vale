import type { FieldErrors, Resolver } from "react-hook-form";
import type { LeadInput } from "./schema";

/**
 * Validação do formulário no navegador, sem zod (o zod pesa ~100 KB no bundle do cliente).
 * As mesmas regras são revalidadas no servidor com o `leadSchema` em `saveLead`.
 */
export function validateLead(values: LeadInput): FieldErrors<LeadInput> {
  const errors: FieldErrors<LeadInput> = {};
  const nome = values.nome.trim();
  const digitos = values.telefone.replace(/\D/g, "");
  const interesse = values.interesse.trim();

  if (nome.length < 2) errors.nome = { type: "min", message: "Digite seu nome" };
  else if (nome.length > 80) errors.nome = { type: "max", message: "Nome muito longo" };

  if (digitos.length !== 10 && digitos.length !== 11) {
    errors.telefone = { type: "phone", message: "Digite um telefone com DDD" };
  }

  if (!interesse) errors.interesse = { type: "required", message: "Escolha uma opção" };

  return errors;
}

export const leadResolver: Resolver<LeadInput> = async (values) => {
  const errors = validateLead(values);
  if (Object.keys(errors).length > 0) return { values: {}, errors };
  return {
    values: { ...values, nome: values.nome.trim(), interesse: values.interesse.trim() },
    errors: {},
  };
};
