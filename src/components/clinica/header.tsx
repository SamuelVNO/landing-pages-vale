import { SmileMark } from "./doodles";

export function Header() {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8 sm:py-6">
      <a href="#topo" className="flex items-center gap-2.5 rounded-full outline-none focus-visible:ring-3 focus-visible:ring-ring/50" aria-label="Clínica Sorriso Vale, início">
        <SmileMark className="size-9 text-primary" />
        <span className="font-heading leading-none">
          <span className="block text-[0.7rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
            Clínica
          </span>
          <span className="block text-xl font-extrabold tracking-tight">Sorriso Vale</span>
        </span>
      </a>
      <a
        href="#agendar"
        aria-label="Agendar avaliação"
        className="inline-flex min-h-11 items-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors outline-none hover:bg-primary/90 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:ring-offset-2"
      >
        Agendar<span className="hidden sm:inline">&nbsp;avaliação</span>
      </a>
    </header>
  );
}
