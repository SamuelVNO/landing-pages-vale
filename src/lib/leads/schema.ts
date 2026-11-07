import { z } from "zod";
import { ORIGENS } from "@/lib/site";

export const leadSchema = z.object({
  nome: z.string().trim().min(2, "Digite seu nome").max(80, "Nome muito longo"),
  telefone: z
    .string()
    .trim()
    .refine((v) => {
      const d = v.replace(/\D/g, "");
      return d.length === 10 || d.length === 11;
    }, "Digite um telefone com DDD"),
  interesse: z.string().trim().min(1, "Escolha uma opção").max(120),
  origem: z.enum(ORIGENS),
  /** Honeypot: campo escondido. Se vier preenchido, é robô. */
  empresa: z.string().max(0).optional().or(z.literal("")),
});

export type LeadInput = z.infer<typeof leadSchema>;
