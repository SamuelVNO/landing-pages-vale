import type { Metadata } from "next";
import { Artigos } from "@/components/advocacia/artigos";
import { Consulta } from "@/components/advocacia/consulta";
import { Direitos } from "@/components/advocacia/direitos";
import { Endereco } from "@/components/advocacia/endereco";
import { Faq } from "@/components/advocacia/faq";
import { Formulario } from "@/components/advocacia/formulario";
import { Hero } from "@/components/advocacia/hero";
import { Masthead } from "@/components/advocacia/masthead";
import { Prazos } from "@/components/advocacia/prazos";
import { Rodape } from "@/components/advocacia/rodape";
import { Sobre } from "@/components/advocacia/sobre";
import { WhatsAppFlutuante } from "@/components/advocacia/whatsapp-flutuante";
import { AREAS, ESCRITORIO, MAPS_LINK } from "@/components/advocacia/dados";
import { JsonLd } from "@/components/shared/json-ld";
import { SmoothScroll } from "@/components/shared/smooth-scroll";
import { SITE_URL } from "@/lib/site";

/*
 * PUBLICIDADE NA ADVOCACIA: esta página segue o Código de Ética e Disciplina da OAB (arts. 39 a 47) e o
 * Provimento 205/2021 do Conselho Federal:
 *  - tom informativo e discreto, CTA sóbrio ("Solicitar consulta", "Falar com o escritório");
 *  - sem promessa de resultado, sem valores, honorários, gratuidade, descontos ou formas de pagamento;
 *  - sem depoimentos, sem número de clientes ou de casos, sem resultados de processos;
 *  - sem urgência ou medo, sem caixa alta gritando, sem emojis, sem termos de captação;
 *  - prova só por tempo de atuação, formação, inscrição na OAB, áreas de atuação e conteúdo informativo;
 *  - nome da advogada e inscrição na OAB no rodapé; schema.org sem priceRange.
 * Escritório, advogada, OAB, formação e comissão são FICTÍCIOS (projeto de portfólio).
 */

const TITLE = "Mendes Advocacia | Direito do Trabalho e Previdenciário em Jacareí";
const DESCRIPTION =
  "Escritório de advocacia em Jacareí-SP, atuando desde 2009 em Direito do Trabalho e Previdenciário. Conteúdo informativo sobre verbas rescisórias, horas extras, aposentadoria, BPC/LOAS e benefícios do INSS.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/advocacia" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/advocacia",
    siteName: ESCRITORIO.nome,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/img/advocacia/og.jpg",
        width: 1200,
        height: 630,
        alt: "Estantes de madeira com livros jurídicos antigos, em preto e branco",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/img/advocacia/og.jpg"],
  },
};

const advogada = {
  "@type": "Person",
  name: ESCRITORIO.advogadaNome,
  honorificPrefix: "Dra.",
  jobTitle: "Advogada",
  description: `Advogada inscrita na ${ESCRITORIO.oab}, com atuação desde ${ESCRITORIO.desde} em Direito do Trabalho e Previdenciário.`,
  worksFor: { "@id": `${SITE_URL}/advocacia#escritorio` },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": `${SITE_URL}/advocacia#escritorio`,
  name: ESCRITORIO.nome,
  description: DESCRIPTION,
  url: `${SITE_URL}/advocacia`,
  image: `${SITE_URL}/img/advocacia/og.jpg`,
  telephone: ESCRITORIO.telefoneSchema,
  foundingDate: String(ESCRITORIO.desde),
  address: {
    "@type": "PostalAddress",
    streetAddress: ESCRITORIO.rua,
    addressLocality: ESCRITORIO.cidade,
    addressRegion: ESCRITORIO.uf,
    postalCode: ESCRITORIO.cep,
    addressCountry: "BR",
  },
  geo: { "@type": "GeoCoordinates", latitude: ESCRITORIO.geo.lat, longitude: ESCRITORIO.geo.lng },
  hasMap: MAPS_LINK,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  areaServed: ESCRITORIO.regiao.map((nome) => ({
    "@type": "City",
    name: nome,
    containedInPlace: { "@type": "AdministrativeArea", name: "São Paulo" },
  })),
  knowsAbout: AREAS.map((a) => a.area),
  founder: advogada,
  employee: [advogada],
};

export default function AdvocaciaPage() {
  return (
    <SmoothScroll>
      <JsonLd data={schema} />
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-primary focus:px-4 focus:py-3 focus:text-primary-foreground"
      >
        Ir para o conteúdo
      </a>
      <Masthead />
      <main id="conteudo">
        <Hero />
        <Artigos />
        <Prazos />
        <Consulta />
        <Sobre />
        <Direitos />
        <Faq />
        <Formulario />
        <Endereco />
      </main>
      <Rodape />
      <WhatsAppFlutuante />
    </SmoothScroll>
  );
}
