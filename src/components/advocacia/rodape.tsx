import { ENDERECO_COMPLETO, ESCRITORIO } from "./dados";

/**
 * Rodapé. Regras de publicidade da OAB seguidas aqui: nome da advogada com número de inscrição,
 * aviso de que o conteúdo é informativo, sem oferta de serviços (Código de Ética e Disciplina,
 * arts. 39 a 47, e Provimento 205/2021 do Conselho Federal).
 */
export function Rodape() {
  return (
    <footer className="bg-primary pt-14 pb-28 text-primary-foreground sm:pb-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div aria-hidden="true" className="adv-gold-bg h-px" />
        <div className="mt-8 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-heading text-[2.4rem] leading-none">{ESCRITORIO.nome}</p>
            <p className="mt-4 text-[1.125rem] leading-snug">
              {ESCRITORIO.advogada} – {ESCRITORIO.oab}
            </p>
            <p className="adv-caps mt-1 text-[1.05rem] opacity-90">
              Direito do Trabalho e Previdenciário · Desde {ESCRITORIO.desde}
            </p>
          </div>
          <div className="text-[1.0625rem] leading-snug md:col-span-4">
            <p>{ENDERECO_COMPLETO}</p>
            <p className="mt-3">{ESCRITORIO.horario}.</p>
            <p className="mt-3">
              WhatsApp:{" "}
              <a
                className="inline-flex min-h-11 items-center underline underline-offset-4"
                href={`https://wa.me/${ESCRITORIO.whatsapp}`}
                rel="noopener"
              >
                {ESCRITORIO.whatsappExibicao}
              </a>
            </p>
          </div>
          <p className="text-[1rem] leading-snug italic opacity-90 md:col-span-3">
            Conteúdo de caráter exclusivamente informativo, elaborado conforme o Código de Ética e Disciplina da OAB
            e o Provimento 205/2021. Não constitui oferta de serviços nem aconselhamento jurídico e não substitui uma
            consulta.
          </p>
        </div>
        <p className="mt-10 border-t border-primary-foreground/40 pt-4 text-[0.95rem] opacity-90">
          © 2026 {ESCRITORIO.nome}. Escritório fictício, criado para fins de demonstração.
        </p>
      </div>
    </footer>
  );
}
