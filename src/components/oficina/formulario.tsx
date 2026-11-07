"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IconBrandWhatsapp, IconChevronDown, IconClockHour4 } from "@tabler/icons-react";
import { useLeadForm } from "@/hooks/use-lead-form";
import { maskPhone } from "@/lib/whatsapp";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { INTERESSES, NEGOCIO } from "./data";
import { INTERESSE_EVENT } from "./interesse";

const campo =
  "h-12 rounded-none border-0 border-b-2 border-input bg-transparent px-0 text-lg text-foreground shadow-none placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-0 aria-invalid:border-destructive aria-invalid:ring-0 dark:bg-transparent md:text-lg";

const rotulo = "font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase";

export function Formulario() {
  const { form, onSubmit, submitting } = useLeadForm({
    origem: "oficina",
    whatsapp: NEGOCIO.whatsapp,
    buildMessage: ({ nome, interesse, telefone }) =>
      `Olá, Oficina Torque! Sou ${nome}. Quero agendar: ${interesse}. Meu telefone: ${telefone}.`,
    successText: "Recebemos seu pedido. Abrindo o WhatsApp…",
  });
  const {
    register,
    setValue,
    formState: { errors },
  } = form;
  const [avisoInteresse, setAvisoInteresse] = useState("");

  // Painel de luzes e lista de serviços disparam este evento para pré-preencher o interesse.
  useEffect(() => {
    function aoSelecionar(evento: Event) {
      const valor = (evento as CustomEvent<string>).detail;
      if (typeof valor !== "string" || !valor) return;
      setValue("interesse", valor, { shouldValidate: true, shouldDirty: true });
      setAvisoInteresse(`Interesse preenchido: ${valor}`);
    }
    window.addEventListener(INTERESSE_EVENT, aoSelecionar);
    return () => window.removeEventListener(INTERESSE_EVENT, aoSelecionar);
  }, [setValue]);

  const telefone = register("telefone");

  return (
    <section id="agendar" className="scroll-mt-14 bg-primary py-20 text-primary-foreground lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:items-stretch lg:gap-12 lg:px-8">
        {/* Coluna da foto (só desktop) */}
        <div className="hidden lg:col-span-4 lg:flex lg:flex-col">
          <div className="relative min-h-[28rem] flex-1 overflow-hidden border-2 border-[#0e0f11]">
            <Image
              src="/img/oficina/motor-br.jpg"
              alt="Mercedes com o capô aberto mostrando o motor, estacionada numa rua de terra"
              fill
              sizes="(min-width: 1024px) 30vw, 0px"
              className="object-cover object-[50%_75%]"
            />
          </div>
          <p className="mt-3 font-mono text-xs tracking-[0.16em] uppercase">
            Capô aberto, orçamento aberto.
          </p>
        </div>

        <div className="lg:col-span-8">
          <h2 className="font-heading text-[clamp(3.2rem,8.5vw,6.8rem)] leading-[0.85] font-black uppercase">
            Agende sua revisão
          </h2>
          <p className="mt-4 max-w-xl text-xl leading-snug font-medium">
            Preencha a ficha e o WhatsApp da oficina abre com a mensagem pronta. A gente responde com dia e horário.
          </p>

          <form
            onSubmit={onSubmit}
            noValidate
            className="ficha-linhas relative mt-8 border-2 border-[#0e0f11] bg-background p-5 text-foreground shadow-[10px_10px_0_#0e0f11] sm:p-8"
            aria-label="Ficha de agendamento"
          >
            <div className="mb-6 flex items-center justify-between border-b border-border pb-3">
              <p className="font-mono text-xs tracking-[0.2em] text-[#ffb000] uppercase">Ficha de entrada</p>
              <p className="flex items-center gap-1.5 font-mono text-xs tracking-wider text-muted-foreground uppercase">
                <IconClockHour4 aria-hidden size={16} />
                Resposta em minutos
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="of-nome" className={rotulo}>
                  Nome
                </Label>
                <Input
                  id="of-nome"
                  autoComplete="name"
                  placeholder="Como podemos te chamar?"
                  aria-invalid={errors.nome ? true : undefined}
                  aria-describedby={errors.nome ? "of-nome-erro" : undefined}
                  className={campo}
                  {...register("nome")}
                />
                {errors.nome ? (
                  <p id="of-nome-erro" role="alert" className="text-sm font-medium text-destructive">
                    {errors.nome.message}
                  </p>
                ) : null}
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="of-telefone" className={rotulo}>
                  Telefone (WhatsApp)
                </Label>
                <Input
                  id="of-telefone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="(12) 90000-0000"
                  aria-invalid={errors.telefone ? true : undefined}
                  aria-describedby={errors.telefone ? "of-telefone-erro" : undefined}
                  className={cn(campo, "font-mono")}
                  {...telefone}
                  onChange={(e) => {
                    e.target.value = maskPhone(e.target.value);
                    void telefone.onChange(e);
                  }}
                />
                {errors.telefone ? (
                  <p id="of-telefone-erro" role="alert" className="text-sm font-medium text-destructive">
                    {errors.telefone.message}
                  </p>
                ) : null}
              </div>

              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <Label htmlFor="of-interesse" className={rotulo}>
                  O que o carro precisa?
                </Label>
                {/* <select> nativo: tira o JS do Select do shadcn da página. Placeholder cinza enquanto o valor é "". */}
                <div className="relative">
                  <select
                    id="of-interesse"
                    required
                    defaultValue=""
                    aria-invalid={errors.interesse ? true : undefined}
                    aria-describedby={errors.interesse ? "of-interesse-erro" : undefined}
                    className="h-12 min-h-11 w-full appearance-none rounded-none border-0 border-b-2 border-input bg-transparent px-0 pr-8 text-lg text-foreground shadow-none outline-none focus-visible:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary aria-invalid:border-destructive invalid:text-muted-foreground dark:bg-transparent"
                    {...register("interesse")}
                  >
                    <option value="" disabled className="bg-card text-muted-foreground">
                      Escolha uma opção
                    </option>
                    {INTERESSES.map((opcao) => (
                      <option key={opcao} value={opcao} className="bg-card text-foreground">
                        {opcao}
                      </option>
                    ))}
                  </select>
                  <IconChevronDown
                    aria-hidden
                    size={20}
                    className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 text-muted-foreground"
                  />
                </div>
                {errors.interesse ? (
                  <p id="of-interesse-erro" role="alert" className="text-sm font-medium text-destructive">
                    {errors.interesse.message}
                  </p>
                ) : null}
                <p className="sr-only" role="status">
                  {avisoInteresse}
                </p>
              </div>
            </div>

            {/* Honeypot: robôs preenchem, gente não vê */}
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden
              className="absolute -left-[9999px] size-px opacity-0"
              {...register("empresa")}
            />

            <button
              type="submit"
              disabled={submitting}
              aria-busy={submitting}
              className="mt-8 flex h-14 w-full items-center justify-center gap-3 bg-primary px-6 font-heading text-2xl font-extrabold tracking-wide text-primary-foreground uppercase shadow-[5px_5px_0_#ffb000] transition-all hover:bg-[#ff8340] hover:shadow-[3px_3px_0_#ffb000] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffb000] disabled:cursor-wait disabled:opacity-70"
            >
              <IconBrandWhatsapp aria-hidden size={26} stroke={2} />
              {submitting ? "Enviando…" : "Agendar pelo WhatsApp"}
            </button>
            <p className="mt-4 text-sm leading-snug text-muted-foreground">
              Ao enviar, abrimos o WhatsApp da oficina com a mensagem pronta. Usamos seus dados só para marcar o
              horário.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
