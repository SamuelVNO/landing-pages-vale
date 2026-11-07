import type { Metadata } from "next";
import { JsonLd } from "@/components/shared/json-ld";
import { SITE_URL } from "@/lib/site";
import { Cabecalho } from "@/components/oficina/cabecalho";
import { ComoFunciona } from "@/components/oficina/como-funciona";
import { Depoimentos } from "@/components/oficina/depoimentos";
import { FAQ, NEGOCIO } from "@/components/oficina/data";
import { Faq } from "@/components/oficina/faq";
import { Formulario } from "@/components/oficina/formulario";
import { Hero } from "@/components/oficina/hero";
import { Mapa } from "@/components/oficina/mapa";
import { NumerosMarcas } from "@/components/oficina/numeros-marcas";
import { PainelLuzes } from "@/components/oficina/painel-luzes";
import { PorQueNos } from "@/components/oficina/por-que-nos";
import { Rodape } from "@/components/oficina/rodape";
import { WhatsappFlutuante } from "@/components/oficina/whatsapp-flutuante";

const TITULO = "Oficina Torque | Revisão de carros em Taubaté, orçamento aprovado no WhatsApp";
const DESCRICAO =
  "Mecânica e revisão em Taubaté-SP, na Vila Costa. Você aprova o orçamento pelo WhatsApp, com foto das peças, antes de qualquer serviço. 18 anos de oficina, garantia de 90 dias por escrito.";

export const metadata: Metadata = {
  title: TITULO,
  description: DESCRICAO,
  alternates: { canonical: "/oficina" },
  openGraph: {
    title: TITULO,
    description: DESCRICAO,
    url: "/oficina",
    siteName: NEGOCIO.nome,
    locale: "pt_BR",
    type: "website",
  },
};

const URL_PAGINA = `${SITE_URL}/oficina`;

const negocioLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "@id": `${URL_PAGINA}#negocio`,
  name: NEGOCIO.nome,
  description: DESCRICAO,
  url: URL_PAGINA,
  image: `${SITE_URL}/img/oficina/hero.jpg`,
  telephone: `+${NEGOCIO.whatsapp}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${NEGOCIO.rua} - ${NEGOCIO.bairro}`,
    addressLocality: NEGOCIO.cidade,
    addressRegion: NEGOCIO.uf,
    postalCode: NEGOCIO.cep,
    addressCountry: "BR",
  },
  geo: { "@type": "GeoCoordinates", latitude: NEGOCIO.lat, longitude: NEGOCIO.lng },
  hasMap: `https://www.google.com/maps/search/?api=1&query=${NEGOCIO.lat},${NEGOCIO.lng}`,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:30",
      closes: "18:00",
    },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "12:00" },
  ],
  areaServed: [
    { "@type": "City", name: "Taubaté" },
    { "@type": "City", name: "Tremembé" },
  ],
  knowsAbout: ["Revisão por quilometragem", "Troca de óleo", "Freios", "Suspensão", "Ar-condicionado", "Embreagem"],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((item) => ({
    "@type": "Question",
    name: item.pergunta,
    acceptedAnswer: { "@type": "Answer", text: item.resposta },
  })),
};

export default function OficinaPage() {
  return (
    <>
      <JsonLd data={negocioLd} />
      <JsonLd data={faqLd} />
      <a
        href="#conteudo"
        className="fixed top-2 left-2 z-[80] -translate-y-20 bg-primary px-4 py-2 font-semibold text-primary-foreground focus:translate-y-0"
      >
        Pular para o conteúdo
      </a>
      <Cabecalho />
      <main id="conteudo">
        <Hero />
        <NumerosMarcas />
        <PainelLuzes />
        <ComoFunciona />
        <PorQueNos />
        <Depoimentos />
        <Faq />
        <Formulario />
        <Mapa />
      </main>
      <Rodape />
      <WhatsappFlutuante />
    </>
  );
}
