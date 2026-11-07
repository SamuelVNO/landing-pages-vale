import Image from "next/image";
import { IconArrowDown, IconBrandWhatsapp, IconStarFilled } from "@tabler/icons-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CartaoOS } from "./cartao-os";
import { FaixaAlerta } from "./faixa-alerta";
import { WHATSAPP_AGENDAR } from "./data";

/** Hero estático (título e foto não animam, por causa do LCP). Só o cartão da ordem de serviço anima. */
export function Hero() {
  return (
    <section id="topo" className="relative isolate overflow-hidden">
      <Image
        src="/img/oficina/hero.jpg"
        alt="Motor de carro com o capô aberto, em close, na oficina"
        fill
        // A foto é fundo escurecido; o LCP é o texto. Carrega logo, mas sem disputar banda com as fontes.
        loading="eager"
        fetchPriority="low"
        sizes="100vw"
        className="-z-20 object-cover object-[55%_50%] grayscale-[0.35]"
      />
      <div aria-hidden className="hero-overlay absolute inset-0 -z-10" />

      <div className="mx-auto grid max-w-7xl gap-12 px-4 pt-28 pb-16 sm:px-6 lg:min-h-[100svh] lg:grid-cols-12 lg:items-center lg:gap-8 lg:px-8 lg:pt-24 lg:pb-20">
        <div className="lg:col-span-7">
          <p className="flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-[#ffb000] uppercase sm:text-sm">
            <span aria-hidden className="size-2.5 bg-[#ffb000]" />
            Mecânica e revisão · Vila Costa, Taubaté
          </p>

          <h1 className="mt-5 font-heading font-black uppercase leading-[0.8] tracking-[-0.005em] text-[clamp(4.25rem,21vw,9rem)] lg:text-[clamp(5rem,9.6vw,10.5rem)]">
            <span className="block">Revisão</span>
            <span className="my-[0.06em] flex items-center gap-[0.15em] text-primary">
              Sem
              <span aria-hidden className="mt-[0.05em] h-[0.1em] flex-1 bg-primary" />
            </span>
            <span className="block">Surpresa</span>
          </h1>

          <p className="mt-8 max-w-xl text-xl leading-snug font-medium text-[#f2f0eb] sm:text-2xl">
            Você aprova o orçamento pelo WhatsApp, <span className="text-[#ffb000]">com foto das peças</span>, antes
            de qualquer serviço. Se não aprovou, ninguém encosta no seu carro.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP_AGENDAR}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-14 gap-3 rounded-none border-0 px-7 font-heading text-2xl font-extrabold tracking-wide uppercase shadow-[5px_5px_0_#ffb000] transition-transform hover:translate-x-px hover:translate-y-px hover:bg-[#ff8340] hover:shadow-[3px_3px_0_#ffb000]",
              )}
            >
              <IconBrandWhatsapp aria-hidden size={26} stroke={2} />
              Agendar revisão
            </a>
            <a
              href="#servicos"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-14 gap-3 rounded-none border-[#f2f0eb]/50 bg-transparent px-7 font-heading text-2xl font-extrabold tracking-wide text-[#f2f0eb] uppercase hover:border-[#f2f0eb] hover:bg-[#f2f0eb]/10",
              )}
            >
              Ver serviços
              <IconArrowDown aria-hidden size={22} stroke={2.4} />
            </a>
          </div>

          <ul className="mt-10 grid max-w-xl grid-cols-3 border-y border-[#f2f0eb]/20 py-4" aria-label="Resumo">
            <li className="pr-3">
              <p className="font-mono text-3xl leading-none text-[#f2f0eb] sm:text-4xl">18</p>
              <p className="mt-1.5 text-sm leading-tight text-[#c3c8ce]">anos de oficina</p>
            </li>
            <li className="border-l border-[#f2f0eb]/20 px-3 sm:px-5">
              <p className="font-mono text-3xl leading-none text-[#f2f0eb] sm:text-4xl">6.000+</p>
              <p className="mt-1.5 text-sm leading-tight text-[#c3c8ce]">carros atendidos</p>
            </li>
            <li className="border-l border-[#f2f0eb]/20 pl-3 sm:pl-5">
              <p className="flex items-center gap-1.5 font-mono text-3xl leading-none text-[#f2f0eb] sm:text-4xl">
                4,9
                <IconStarFilled aria-hidden size={20} className="text-[#ffb000]" />
              </p>
              <p className="mt-1.5 text-sm leading-tight text-[#c3c8ce]">no Google</p>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-5">
          <CartaoOS />
        </div>
      </div>

      <FaixaAlerta />
    </section>
  );
}
