import { CONTACT_EMAIL, CONTACT_LABEL, CONTACT_URL, OWNER_NAME } from "./config";

const linkClass =
  "inline-flex min-h-11 items-center underline decoration-[#111111]/30 underline-offset-4 transition-colors hover:text-[#E8451E] hover:decoration-[#E8451E]";

export function Footer() {
  return (
    <footer className="bg-[#111111] px-5 pb-8 pt-14 text-[#FAFAF7] md:px-10 md:pt-20">
      <p className="max-w-[18ch] text-[clamp(2rem,5.5vw,4.5rem)] font-medium leading-[0.95] tracking-[-0.035em]">
        Tem um negócio que precisa ser encontrado?
      </p>

      <div className="mt-10 flex flex-col gap-1 text-lg md:flex-row md:gap-10">
        <a href={CONTACT_URL} className={`${linkClass} decoration-[#FAFAF7]/40`} target="_blank" rel="noopener noreferrer">
          {CONTACT_LABEL}
        </a>
        <a href={`mailto:${CONTACT_EMAIL}`} className={`${linkClass} decoration-[#FAFAF7]/40`}>
          {CONTACT_EMAIL}
        </a>
      </div>

      <div className="mt-16 flex justify-between font-mono text-xs uppercase tracking-wider text-[#FAFAF7]/60">
        <span>
          © 2026 {OWNER_NAME}
        </span>
        <span>Next.js · Supabase · Vercel</span>
      </div>
    </footer>
  );
}
