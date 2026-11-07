"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLeadForm } from "@/hooks/use-lead-form";
import { maskPhone } from "@/lib/whatsapp";
import { ASSUNTOS, ESCRITORIO, montarMensagem } from "./dados";
import { Reveal } from "./reveal";

const CAMPO =
  "h-12 rounded-none border-x-0 border-t-0 border-b border-foreground/60 bg-transparent px-0 text-[1.25rem] shadow-none placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-0 focus-visible:[box-shadow:0_1px_0_0_var(--green)] aria-invalid:border-destructive aria-invalid:ring-0 aria-invalid:[box-shadow:0_1px_0_0_var(--destructive)] md:text-[1.25rem]";

const ROTULO = "adv-caps block text-[1.05rem] text-muted-foreground";
const ERRO = "mt-1.5 text-[1rem] text-destructive";

/** Formulário em forma de requerimento de papel: campos com linha embaixo, sem caixas. */
export function Formulario() {
  const { form, onSubmit, submitting } = useLeadForm({
    origem: "advocacia",
    whatsapp: ESCRITORIO.whatsapp,
    buildMessage: montarMensagem,
    successText: "Recebemos sua solicitação. Abrindo o WhatsApp…",
  });
  const {
    register,
    formState: { errors },
  } = form;

  const telefone = register("telefone");

  return (
    <section id="solicitar" aria-labelledby="titulo-solicitar" className="scroll-mt-4 pb-20 sm:pb-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-x-12 lg:px-8">
        <div className="lg:col-span-5">
          <div aria-hidden="true" className="h-px bg-foreground" />
          <p className="adv-caps mt-2 text-[0.95rem] text-muted-foreground">Requerimento</p>
          <h2
            id="titulo-solicitar"
            className="mt-6 font-heading text-[2.5rem] leading-[1.04] tracking-[-0.01em] text-balance sm:text-6xl"
          >
            Solicitar consulta
          </h2>
          <p className="adv-prose mt-5 max-w-md text-[1.125rem] leading-[1.6] text-muted-foreground">
            Preencha o requerimento ao lado. Ao enviar, o WhatsApp abre com a mensagem pronta para o escritório, e
            retornamos para combinar dia e horário, presencial ou por vídeo.
          </p>
          <p className="mt-4 max-w-md text-[1rem] leading-snug text-muted-foreground italic">
            As informações enviadas são usadas apenas para o contato sobre a consulta.
          </p>
        </div>

        <Reveal className="lg:col-span-7">
          <form
            onSubmit={onSubmit}
            noValidate
            aria-label="Solicitar consulta"
            className="relative border border-foreground bg-muted p-6 sm:p-10"
          >
            <div aria-hidden="true" className="pointer-events-none absolute inset-2 border border-foreground/40" />

            <div className="relative">
              <p className="adv-caps text-[1.05rem] text-primary">Requerimento de consulta inicial</p>
              <p className="mt-1 font-heading text-[1.6rem] italic leading-tight">Mendes Advocacia · Jacareí</p>

              <div className="mt-8 space-y-8">
                <div>
                  <label htmlFor="adv-nome" className={ROTULO}>
                    1. Nome
                  </label>
                  <Input
                    id="adv-nome"
                    autoComplete="name"
                    placeholder="Seu nome completo"
                    aria-invalid={errors.nome ? true : undefined}
                    aria-describedby={errors.nome ? "adv-erro-nome" : undefined}
                    className={CAMPO}
                    {...register("nome")}
                  />
                  {errors.nome ? (
                    <p id="adv-erro-nome" role="alert" className={ERRO}>
                      {errors.nome.message}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="adv-telefone" className={ROTULO}>
                    2. Telefone com DDD
                  </label>
                  <Input
                    id="adv-telefone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="(12) 90000-0000"
                    aria-invalid={errors.telefone ? true : undefined}
                    aria-describedby={errors.telefone ? "adv-erro-telefone" : undefined}
                    className={CAMPO}
                    {...telefone}
                    onChange={(e) => {
                      e.target.value = maskPhone(e.target.value);
                      void telefone.onChange(e);
                    }}
                  />
                  {errors.telefone ? (
                    <p id="adv-erro-telefone" role="alert" className={ERRO}>
                      {errors.telefone.message}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="adv-assunto" className={ROTULO}>
                    3. Assunto da consulta
                  </label>
                  {/* <select> nativo: tira o JS do Select do shadcn da página. Placeholder cinza enquanto o valor é "". */}
                  <div className="relative">
                    <select
                      id="adv-assunto"
                      required
                      defaultValue=""
                      aria-invalid={errors.interesse ? true : undefined}
                      aria-describedby={errors.interesse ? "adv-erro-assunto" : undefined}
                      className="h-12 min-h-11 w-full appearance-none rounded-none border-x-0 border-t-0 border-b border-foreground/60 bg-transparent px-0 pr-8 text-[1.25rem] shadow-none outline-none focus-visible:border-primary focus-visible:[box-shadow:0_1px_0_0_var(--green)] aria-invalid:border-destructive aria-invalid:[box-shadow:0_1px_0_0_var(--destructive)] invalid:text-muted-foreground dark:bg-transparent"
                      {...register("interesse")}
                    >
                      <option value="" disabled className="bg-[#F7F4EE] text-[#1C1B19]/60">
                        Escolha um assunto
                      </option>
                      {ASSUNTOS.map((assunto) => (
                        <option key={assunto} value={assunto} className="bg-[#F7F4EE] text-[#1C1B19]">
                          {assunto}
                        </option>
                      ))}
                    </select>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="pointer-events-none absolute top-1/2 right-0 size-5 -translate-y-1/2 text-muted-foreground"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                  {errors.interesse ? (
                    <p id="adv-erro-assunto" role="alert" className={ERRO}>
                      {errors.interesse.message}
                    </p>
                  ) : null}
                </div>
              </div>

              {/* Honeypot: campo escondido contra robôs. */}
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="pointer-events-none absolute -left-[9999px] h-0 w-0 opacity-0"
                {...register("empresa")}
              />

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <Button
                  type="submit"
                  disabled={submitting}
                  className="h-12 rounded-none px-8 text-[1.0625rem] tracking-wide"
                >
                  {submitting ? "Enviando…" : "Solicitar consulta"}
                </Button>
                <p className="text-[1rem] text-muted-foreground italic">
                  Prefere escrever direto?{" "}
                  <a
                    className="text-primary underline underline-offset-4"
                    href={`https://wa.me/${ESCRITORIO.whatsapp}`}
                    rel="noopener"
                  >
                    {ESCRITORIO.whatsappExibicao}
                  </a>
                </p>
              </div>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
