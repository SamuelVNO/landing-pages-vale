import type { Metadata } from "next";
import { JsonLd } from "@/components/shared/json-ld";
import { SITE_URL } from "@/lib/site";
import { OWNER_NAME } from "@/components/home/config";
import { Hero } from "@/components/home/hero";
import { ProjectList } from "@/components/home/project-list";
import { Process } from "@/components/home/process";
import { Footer } from "@/components/home/footer";
import { PROJECTS } from "@/components/home/projects";

const TITLE = "Landing pages que fazem o telefone tocar · Portfólio";
const DESCRIPTION =
  "Portfólio de landing pages de conversão para negócios locais do Vale do Paraíba: oficina, clínica odontológica e escritório de advocacia. Next.js, Supabase e Vercel.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    siteName: `${OWNER_NAME} · Landing pages`,
    locale: "pt_BR",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: `${OWNER_NAME} · Landing pages`,
          url: SITE_URL,
          description: DESCRIPTION,
          areaServed: "Vale do Paraíba, SP",
          knowsAbout: ["Landing pages", "Next.js", "Conversão para negócios locais"],
        }}
      />
      <main>
        <Hero />
        <section aria-labelledby="projetos" className="px-5 md:px-10">
          <h2 id="projetos" className="mb-4 font-mono text-xs uppercase tracking-wider text-[#6B6B6B]">
            Projetos ({PROJECTS.length.toString().padStart(2, "0")})
          </h2>
          <ProjectList projects={PROJECTS} />
        </section>
        <div className="mt-14 md:mt-24">
          <Process />
        </div>
      </main>
      <Footer />
    </>
  );
}
