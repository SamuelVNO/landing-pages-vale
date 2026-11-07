import type { Metadata } from "next";
import { JsonLd } from "@/components/shared/json-ld";
import { SITE_URL } from "@/lib/site";
import { Concerns } from "@/components/clinica/concerns";
import { CLINICA } from "@/components/clinica/data";
import { Faq, FAQ_ITENS } from "@/components/clinica/faq";
import { Fear } from "@/components/clinica/fear";
import { Footer } from "@/components/clinica/footer";
import { Header } from "@/components/clinica/header";
import { Hero } from "@/components/clinica/hero";
import { LeadSection } from "@/components/clinica/lead-section";
import { Location } from "@/components/clinica/location";
import { Team } from "@/components/clinica/team";
import { Testimonials } from "@/components/clinica/testimonials";
import { Treatments } from "@/components/clinica/treatments";
import { WhatsappFab } from "@/components/clinica/whatsapp-fab";

const TITLE = "Clínica Sorriso Vale | Dentista em São José dos Campos para quem tem medo";
const DESCRIPTION =
  "Odontologia sem pressa no Jardim Apolo, em São José dos Campos. Consultas de 50 minutos, tudo explicado antes de começar e atendimento até as 20h. Agende sua avaliação.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/clinica" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/clinica",
    siteName: CLINICA.nome,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/img/clinica/og.jpg",
        width: 1200,
        height: 630,
        alt: "Dentista conversando com uma paciente em um consultório claro da Clínica Sorriso Vale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/img/clinica/og.jpg"],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Dentist",
      "@id": `${SITE_URL}/clinica#clinica`,
      name: CLINICA.nome,
      url: `${SITE_URL}/clinica`,
      image: `${SITE_URL}/img/clinica/og.jpg`,
      description: DESCRIPTION,
      telephone: `+${CLINICA.whatsapp}`,
      foundingDate: "2014",
      medicalSpecialty: "Dentistry",
      address: {
        "@type": "PostalAddress",
        streetAddress: CLINICA.endereco,
        addressLocality: CLINICA.cidade,
        addressRegion: CLINICA.uf,
        postalCode: CLINICA.cep,
        addressCountry: "BR",
      },
      geo: { "@type": "GeoCoordinates", latitude: CLINICA.geo.lat, longitude: CLINICA.geo.lng },
      areaServed: [{ "@type": "City", name: CLINICA.cidade }],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "20:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "08:00",
          closes: "13:00",
        },
      ],
      // Sem priceRange: a publicidade odontológica (CFO) não permite anunciar preço.
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ_ITENS.map((item) => ({
        "@type": "Question",
        name: item.pergunta,
        acceptedAnswer: { "@type": "Answer", text: item.resposta },
      })),
    },
  ],
};

export default function ClinicaPage() {
  return (
    <>
      <JsonLd data={schema} />
      <div id="topo">
        <Header />
        <main>
          <Hero />
          <Concerns />
          <Treatments />
          <Fear />
          <Team />
          <Testimonials />
          <Faq />
          <LeadSection />
          <Location />
        </main>
        <Footer />
      </div>
      <WhatsappFab />
    </>
  );
}
