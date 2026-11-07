import { NAV } from "./dados";

/** Cabeçalho de jornal: linha fina, nome do escritório em destaque, fio duplo e navegação discreta. */
export function Masthead() {
  return (
    <header className="mx-auto max-w-6xl px-4 pt-4 sm:px-6 lg:px-8">
      <div className="adv-caps flex flex-col items-center gap-0.5 border-b border-foreground pb-2 text-[0.95rem] text-muted-foreground sm:flex-row sm:justify-between">
        <span>Jacareí · Edição de novembro de 2026</span>
        <span>Direito do Trabalho e Previdenciário</span>
      </div>

      <p className="pt-5 pb-4 text-center font-heading text-[2.9rem] leading-none tracking-[-0.01em] sm:pt-7 sm:pb-6 sm:text-8xl lg:text-[8.5rem]">
        Mendes Advocacia
      </p>

      <div aria-hidden="true" className="h-[5px] border-y border-foreground" />

      <nav aria-label="Seções da página" className="py-1">
        <ul className="adv-caps flex flex-wrap items-center justify-center gap-x-5 text-[1.02rem] sm:gap-x-9">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="inline-flex min-h-11 items-center px-1 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div aria-hidden="true" className="h-px bg-foreground" />
    </header>
  );
}
