"use client";

import { useEffect, useMemo, useState } from "react";
import { CaretDownIcon, SpinnerGapIcon, WhatsappLogoIcon } from "@phosphor-icons/react/ssr";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLeadForm } from "@/hooks/use-lead-form";
import { maskPhone } from "@/lib/whatsapp";
import { CLINICA, HORARIOS, TRATAMENTOS_SELECT } from "./data";
import { DoodleArrow, DoodleSquiggle, DoodleStar } from "./doodles";
import { FORM_ID, INTERESSE_EVENT } from "./interesse-event";
import { Notation } from "./notation";

const campo =
  "h-14 w-full rounded-2xl border-2 border-input bg-white px-4 text-base md:text-base";

const erroClasse = "mt-1.5 text-sm font-medium text-destructive";

export function LeadSection() {
  const { form, onSubmit, submitting } = useLeadForm({
    origem: "clinica",
    whatsapp: CLINICA.whatsapp,
    buildMessage: ({ nome, interesse, telefone }) =>
      `Olá, Clínica Sorriso Vale! Sou ${nome} e gostaria de agendar uma avaliação. Interesse: ${interesse}. Telefone: ${telefone}.`,
    successText: "Recebemos seu contato. Abrindo o WhatsApp com a mensagem pronta…",
  });
  const {
    register,
    setValue,
    getValues,
    formState: { errors },
  } = form;

  const [extra, setExtra] = useState<string | null>(null);
  const [vindoDoCard, setVindoDoCard] = useState<string | null>(null);

  // O "O que está te incomodando?" avisa por evento qual interesse a pessoa escolheu.
  useEffect(() => {
    function aoEscolher(evento: Event) {
      const valor = (evento as CustomEvent<unknown>).detail;
      if (typeof valor !== "string" || !valor) return;
      if (!(TRATAMENTOS_SELECT as readonly string[]).includes(valor)) setExtra(valor);
      setVindoDoCard(valor);
      setValue("interesse", valor, { shouldValidate: true, shouldDirty: true });
    }
    window.addEventListener(INTERESSE_EVENT, aoEscolher);
    return () => window.removeEventListener(INTERESSE_EVENT, aoEscolher);
  }, [setValue]);

  // O <select> nativo só aceita valor que já exista como <option>. Depois que a opção extra é
  // renderizada, reaplica o interesse que veio do card (o setValue do evento rodou antes dela existir).
  useEffect(() => {
    if (extra && getValues("interesse") === extra) {
      setValue("interesse", extra, { shouldValidate: true, shouldDirty: true });
    }
  }, [extra, getValues, setValue]);

  const opcoes = useMemo<readonly string[]>(
    () => (extra ? [extra, ...TRATAMENTOS_SELECT] : TRATAMENTOS_SELECT),
    [extra],
  );

  const telefone = register("telefone");
  const nomeErro = errors.nome?.message;
  const telefoneErro = errors.telefone?.message;
  const interesseErro = errors.interesse?.message;

  return (
    <section
      id={FORM_ID}
      aria-labelledby="agendar-titulo"
      className="mx-3 scroll-mt-4 rounded-[24px] bg-primary px-5 py-16 text-primary-foreground sm:mx-6 sm:px-10 lg:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12 lg:items-center lg:gap-14">
        <div className="relative lg:col-span-5">
          <DoodleStar aria-hidden className="mb-5 size-9 text-(color:--mint)" />
          <h2
            id="agendar-titulo"
            className="relative font-heading text-4xl leading-[1.05] font-extrabold tracking-tight text-balance sm:text-5xl"
          >
            Agende sua{" "}
            <Notation color="#7FD1C1" strokeWidth={7} padding={1}>
              avaliação
            </Notation>
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-primary-foreground/90">
            Deixe seu nome e telefone, diga o que te trouxe e a gente continua a conversa pelo WhatsApp, no
            seu ritmo. Se estiver com medo, pode contar: isso muda a forma como a gente te recebe.
          </p>
          <DoodleSquiggle className="mt-8 h-3 w-24 text-(color:--mint)" />
          <dl className="mt-5 space-y-1.5 text-base">
            {HORARIOS.slice(0, 2).map((h) => (
              <div key={h.dia} className="flex gap-3">
                <dt className="min-w-36 font-semibold">{h.dia}</dt>
                <dd className="text-primary-foreground/90">{h.horas}</dd>
              </div>
            ))}
          </dl>
          <DoodleArrow aria-hidden className="mt-6 ml-24 hidden size-16 rotate-[-20deg] text-(color:--mint) lg:block" />
        </div>

        <div className="lg:col-span-7">
          <form
            onSubmit={onSubmit}
            noValidate
            className="relative rounded-[24px] bg-white p-6 text-foreground shadow-[0_8px_0_0_#1f3f80] sm:p-10"
          >
            <p className="font-heading text-2xl font-extrabold tracking-tight sm:text-3xl">
              Conta pra gente rapidinho
            </p>

            <div className="mt-6 space-y-5">
              <div>
                <Label htmlFor="clinica-nome" className="mb-2 text-base">
                  Seu nome
                </Label>
                <Input
                  id="clinica-nome"
                  autoComplete="name"
                  placeholder="Como você gosta de ser chamado(a)?"
                  aria-invalid={nomeErro ? true : undefined}
                  aria-describedby={nomeErro ? "clinica-nome-erro" : undefined}
                  className={campo}
                  {...register("nome")}
                />
                {nomeErro ? (
                  <p id="clinica-nome-erro" role="alert" className={erroClasse}>
                    {nomeErro}
                  </p>
                ) : null}
              </div>

              <div>
                <Label htmlFor="clinica-telefone" className="mb-2 text-base">
                  Telefone com DDD
                </Label>
                <Input
                  id="clinica-telefone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="(12) 90000-0000"
                  aria-invalid={telefoneErro ? true : undefined}
                  aria-describedby={telefoneErro ? "clinica-telefone-erro" : undefined}
                  className={campo}
                  {...telefone}
                  onChange={(e) => {
                    e.target.value = maskPhone(e.target.value);
                    return telefone.onChange(e);
                  }}
                />
                {telefoneErro ? (
                  <p id="clinica-telefone-erro" role="alert" className={erroClasse}>
                    {telefoneErro}
                  </p>
                ) : null}
              </div>

              <div>
                <Label htmlFor="clinica-interesse" className="mb-2 text-base">
                  O que você quer resolver?
                </Label>
                {/* <select> nativo: tira o JS do Select do shadcn da página. Placeholder cinza enquanto o valor é "". */}
                <div className="relative">
                  <select
                    id="clinica-interesse"
                    required
                    defaultValue=""
                    aria-invalid={interesseErro ? true : undefined}
                    aria-describedby={interesseErro ? "clinica-interesse-erro" : vindoDoCard ? "clinica-interesse-dica" : undefined}
                    className={`${campo} min-h-11 appearance-none pr-12 outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 invalid:text-muted-foreground`}
                    {...register("interesse")}
                  >
                    <option value="" disabled className="bg-white text-muted-foreground">
                      Escolha uma opção
                    </option>
                    {opcoes.map((o) => (
                      <option key={o} value={o} className="bg-white text-foreground">
                        {o}
                      </option>
                    ))}
                  </select>
                  <CaretDownIcon
                    aria-hidden
                    className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-muted-foreground"
                  />
                </div>
                {interesseErro ? (
                  <p id="clinica-interesse-erro" role="alert" className={erroClasse}>
                    {interesseErro}
                  </p>
                ) : vindoDoCard && vindoDoCard === getValues("interesse") ? (
                  <p id="clinica-interesse-dica" className="mt-1.5 text-sm text-muted-foreground">
                    Preenchido com a sua escolha lá em cima. Pode trocar se quiser.
                  </p>
                ) : null}
              </div>

              {/* Honeypot: robôs preenchem, gente não vê. */}
              <div aria-hidden className="pointer-events-none absolute left-[-9999px] h-0 w-0 overflow-hidden opacity-0">
                <input type="text" tabIndex={-1} autoComplete="off" aria-hidden {...register("empresa")} />
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="mt-8 inline-flex min-h-14 w-full items-center justify-center gap-2.5 rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-[0_5px_0_0_#1f3f80] transition-transform outline-none hover:translate-y-0.5 hover:shadow-[0_3px_0_0_#1f3f80] focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-70"
            >
              {submitting ? (
                <>
                  <SpinnerGapIcon aria-hidden className="size-5 animate-spin" />
                  Enviando…
                </>
              ) : (
                <>
                  <WhatsappLogoIcon weight="duotone" aria-hidden className="size-6" />
                  Agendar avaliação
                </>
              )}
            </button>
            <p className="mt-4 text-sm leading-snug text-muted-foreground">
              Ao enviar, abrimos o WhatsApp com a mensagem pronta. Usamos seus dados só para falar sobre o
              agendamento.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
