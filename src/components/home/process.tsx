const STEPS = [
  {
    n: "A",
    title: "Diagnóstico do negócio",
    text: "Converso sobre quem liga hoje, de onde vem e o que faz a pessoa desistir antes de ligar.",
  },
  {
    n: "B",
    title: "Página com foco em uma ação",
    text: "Um único caminho: ligar, chamar no WhatsApp ou pedir orçamento. Todo o resto sai da frente.",
  },
  {
    n: "C",
    title: "Entrega com formulário e métricas",
    text: "Formulário salvando cada contato, mensagem pronta no WhatsApp e números de visita e clique para acompanhar.",
  },
] as const;

export function Process() {
  return (
    <section aria-labelledby="como-trabalho" className="border-t border-[#111111] px-5 py-14 md:px-10 md:py-20">
      <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
        <h2 id="como-trabalho" className="font-mono text-xs uppercase tracking-wider text-[#6B6B6B]">
          Como trabalho
        </h2>
        <ol className="grid gap-8 md:grid-cols-3 md:gap-10">
          {STEPS.map((s) => (
            <li key={s.n}>
              <span className="font-mono text-xs text-[#E8451E]">{s.n}</span>
              <h3 className="mt-2 text-xl font-medium leading-tight tracking-tight">{s.title}</h3>
              <p className="mt-3 text-base leading-snug text-[#6B6B6B]">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
