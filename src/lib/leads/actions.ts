"use server";

import { createClient } from "@supabase/supabase-js";
import { leadSchema, type LeadInput } from "./schema";

export type SaveLeadResult = { ok: true; stored: boolean } | { ok: false; error: string };

/**
 * Salva o lead na tabela `landing_leads` do Supabase.
 * Usa a chave publicável: a tabela só aceita INSERT por RLS, ninguém consegue ler pelo site.
 * Sem as variáveis de ambiente (dev sem Supabase), não grava e devolve stored=false
 * para o fluxo do WhatsApp continuar funcionando.
 */
export async function saveLead(input: LeadInput): Promise<SaveLeadResult> {
  const parsed = leadSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, error: parsed.error.issues[0]?.message ?? "Dados inválidos" };
  }
  const { empresa, ...lead } = parsed.data;
  if (empresa) return { ok: true, stored: false };

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) {
    console.warn("[leads] SUPABASE_URL/SUPABASE_PUBLISHABLE_KEY ausentes; lead não gravado", lead.origem);
    return { ok: true, stored: false };
  }

  const supabase = createClient(url, key, { auth: { persistSession: false } });
  const { error } = await supabase.from("landing_leads").insert({
    nome: lead.nome,
    telefone: lead.telefone.replace(/\D/g, ""),
    interesse: lead.interesse,
    origem: lead.origem,
  });
  if (error) {
    console.error("[leads] erro ao gravar", error.message);
    return { ok: false, error: "Não conseguimos salvar agora. Tente pelo WhatsApp." };
  }
  return { ok: true, stored: true };
}
