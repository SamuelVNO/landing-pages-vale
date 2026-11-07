import { OWNER_NAME } from "./config";

export function Hero() {
  return (
    <header className="px-5 pb-14 pt-6 md:px-10 md:pb-24 md:pt-8">
      <div className="flex items-baseline justify-between font-mono text-xs uppercase tracking-wider text-[#6B6B6B]">
        <span className="text-[#111111]">
          {OWNER_NAME}
          <span aria-hidden="true" className="ml-2 inline-block size-1.5 rounded-full bg-[#E8451E] align-middle" />
        </span>
        <span>Vale do Paraíba, SP</span>
      </div>

      <h1 className="mt-16 max-w-[16ch] text-[clamp(2.9rem,10.5vw,9.5rem)] font-medium leading-[0.9] tracking-[-0.045em] md:mt-28">
        Landing pages que fazem o telefone tocar.
      </h1>

      <p className="mt-10 max-w-xl text-lg leading-snug text-[#6B6B6B] md:ml-auto md:mt-16 md:text-xl">
        Páginas de conversão para negócios locais, com formulário que cai no WhatsApp. Feitas em Next.js, com
        Supabase guardando os contatos e publicação na Vercel.
      </p>
    </header>
  );
}
