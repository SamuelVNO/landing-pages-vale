"use client";

import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type { LeadInput } from "@/lib/leads/schema";
import { leadResolver } from "@/lib/leads/validate";
import { saveLead } from "@/lib/leads/actions";
import { whatsappUrl } from "@/lib/whatsapp";
import type { Origem } from "@/lib/site";

type Options = {
  origem: Origem;
  /** Número do WhatsApp do negócio, com DDI. */
  whatsapp: string;
  /** Monta a mensagem que vai pronta para o WhatsApp. */
  buildMessage: (lead: Pick<LeadInput, "nome" | "telefone" | "interesse">) => string;
  defaultInteresse?: string;
  successText?: string;
};

/**
 * Lógica do formulário de lead, sem visual. Cada página monta o próprio formulário
 * com os componentes do shadcn e o tema dela, e usa este hook:
 *
 *   const { form, onSubmit, submitting } = useLeadForm({ origem: "oficina", whatsapp, buildMessage })
 *   <form onSubmit={onSubmit}> ... register("nome") ... <input {...form.register("empresa")} hidden honeypot /> </form>
 *
 * Fluxo: valida → salva no Supabase (server action) → abre o WhatsApp com a mensagem pronta.
 */
export function useLeadForm({ origem, whatsapp, buildMessage, defaultInteresse = "", successText }: Options) {
  const form = useForm<LeadInput>({
    resolver: leadResolver,
    defaultValues: { nome: "", telefone: "", interesse: defaultInteresse, origem, empresa: "" },
    mode: "onTouched",
  });

  const onSubmit = form.handleSubmit(async (values) => {
    const result = await saveLead(values);
    if (!result.ok) {
      toast.error(result.error);
      return;
    }
    toast.success(successText ?? "Recebemos seu contato. Abrindo o WhatsApp…");
    const url = whatsappUrl(whatsapp, buildMessage(values));
    // location em vez de window.open: popup depois de await é bloqueado no Safari do iPhone.
    window.setTimeout(() => window.location.assign(url), 600);
    form.reset({ nome: "", telefone: "", interesse: defaultInteresse, origem, empresa: "" });
  });

  return { form, onSubmit, submitting: form.formState.isSubmitting };
}
