import { CLINICA, ENDERECO_COMPLETO } from "./data";
import { DoodleStar, SmileMark } from "./doodles";

export function Footer() {
  return (
    <footer className="mx-3 mt-4 rounded-t-[24px] bg-foreground px-5 pt-14 pb-28 text-background sm:mx-6 sm:px-10 sm:pb-14">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-2.5">
            <SmileMark className="size-9 text-(color:--mint)" />
            <span className="font-heading text-2xl font-extrabold tracking-tight">{CLINICA.nome}</span>
          </div>
          <p className="mt-4 max-w-sm text-base leading-relaxed text-background/80">
            Odontologia em {CLINICA.cidade}, para quem adiou o dentista por medo e quer voltar com calma.
          </p>
        </div>

        <div className="space-y-1.5 text-base text-background/90 lg:col-span-4">
          <p className="font-semibold text-background">Contato</p>
          <p>{ENDERECO_COMPLETO}</p>
          <p>
            WhatsApp:{" "}
            <a
              href={`https://wa.me/${CLINICA.whatsapp}`}
              className="font-semibold underline underline-offset-4 outline-none focus-visible:ring-3 focus-visible:ring-white/70"
            >
              {CLINICA.telefoneExibido}
            </a>
          </p>
          <p>Seg a sex, 8h às 20h · Sáb, 8h às 13h</p>
        </div>

        <div className="space-y-1.5 text-base text-background/90 lg:col-span-3">
          <p className="flex items-center gap-2 font-semibold text-background">
            <DoodleStar className="size-4 text-(color:--mint)" />
            Responsável técnica
          </p>
          <p>
            {CLINICA.responsavel.nome}
            <br />
            {CLINICA.responsavel.cro}
          </p>
          <p>CNPJ {CLINICA.cnpj}</p>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-background/20 pt-6 text-sm leading-relaxed text-background/75">
        <p>
          Todo tratamento depende de avaliação do cirurgião-dentista, e os resultados variam de pessoa para
          pessoa. As informações deste site não substituem uma consulta.
        </p>
        <p className="mt-2">
          © 2026 {CLINICA.nome}. Site de demonstração: negócio, profissionais e registros fictícios.
        </p>
      </div>
    </footer>
  );
}
