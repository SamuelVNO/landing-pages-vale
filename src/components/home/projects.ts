export type HomeProject = {
  slug: string;
  number: string;
  name: string;
  segment: string;
  city: string;
  href: string;
  /** Prévia da página. Troque por .jpg 1600x1000 (screenshot) quando existir. */
  image: string;
  imageAlt: string;
};

export const PROJECTS: readonly HomeProject[] = [
  {
    slug: "oficina",
    number: "01",
    name: "Oficina Torque",
    segment: "Automotivo",
    city: "Taubaté",
    href: "/oficina",
    image: "/img/home/oficina.jpg",
    imageAlt: "Prévia da landing page da Oficina Torque, em preto com detalhes laranja",
  },
  {
    slug: "clinica",
    number: "02",
    name: "Clínica Sorriso Vale",
    segment: "Odontologia",
    city: "São José dos Campos",
    href: "/clinica",
    image: "/img/home/clinica.jpg",
    imageAlt: "Prévia da landing page da Clínica Sorriso Vale, em branco com azul",
  },
  {
    slug: "advocacia",
    number: "03",
    name: "Mendes Advocacia",
    segment: "Jurídico",
    city: "Jacareí",
    href: "/advocacia",
    image: "/img/home/advocacia.jpg",
    imageAlt: "Prévia da landing page do escritório Mendes Advocacia, em creme com verde",
  },
];
