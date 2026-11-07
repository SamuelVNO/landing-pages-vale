import { whatsappUrl } from "@/lib/whatsapp";

export const NEGOCIO = {
  nome: "Oficina Torque",
  whatsapp: "5512900000001",
  telefoneExibicao: "(12) 90000-0001",
  cnpj: "00.000.000/0001-00",
  rua: "Av. Charles Schnneider, 1.840",
  bairro: "Vila Costa",
  cidade: "Taubaté",
  uf: "SP",
  cep: "12040-001",
  lat: -23.0205,
  lng: -45.5585,
} as const;

export const ENDERECO_LINHA = `${NEGOCIO.rua} – ${NEGOCIO.bairro}, ${NEGOCIO.cidade} – ${NEGOCIO.uf}, ${NEGOCIO.cep}`;

export const HORARIOS = [
  { dias: "Segunda a sexta", horas: "7h30 às 18h" },
  { dias: "Sábado", horas: "8h às 12h" },
  { dias: "Domingo e feriados", horas: "Fechado" },
] as const;

export const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${NEGOCIO.lat},${NEGOCIO.lng}`;
export const MAPS_EMBED = `https://www.google.com/maps?q=${NEGOCIO.lat},${NEGOCIO.lng}&z=16&output=embed`;

/** Link do WhatsApp com mensagem genérica de agendamento. */
export const WHATSAPP_AGENDAR = whatsappUrl(
  NEGOCIO.whatsapp,
  "Olá, Oficina Torque! Quero agendar uma revisão.",
);

export const INTERESSES = [
  "Revisão por km",
  "Luz acesa no painel",
  "Freios",
  "Suspensão",
  "Ar-condicionado",
  "Outro",
] as const;

export const MARCAS = [
  "Fiat",
  "Volkswagen",
  "Chevrolet",
  "Ford",
  "Hyundai",
  "Toyota",
  "Renault",
  "Honda",
  "Jeep",
  "Nissan",
] as const;

export const NAV = [
  { href: "#servicos", rotulo: "Serviços" },
  { href: "#como-funciona", rotulo: "Como funciona" },
  { href: "#duvidas", rotulo: "Dúvidas" },
  { href: "#onde", rotulo: "Onde estamos" },
] as const;

export const FAQ = [
  {
    pergunta: "Quanto tempo leva uma revisão?",
    resposta:
      "Revisão simples (óleo, filtros e checagem dos itens de segurança) leva de 2 a 3 horas. A revisão completa por quilometragem sai no mesmo dia na maioria dos casos. Se aparecer peça para trocar, a gente avisa pelo WhatsApp antes de mexer, e o prazo entra no orçamento.",
  },
  {
    pergunta: "Perco a garantia de fábrica se revisar fora da concessionária?",
    resposta:
      "Depende do contrato do seu carro. Muitos fabricantes aceitam a revisão em oficina independente, desde que siga o plano do manual, use peças e fluidos de especificação equivalente e você guarde a nota. Alguns exigem a concessionária. Mande o modelo e o ano pelo WhatsApp que a gente confere o manual e te fala a verdade, mesmo que a resposta seja 'faça na concessionária'.",
  },
  {
    pergunta: "Aceita cartão e parcela?",
    resposta:
      "Sim. Pix, débito e crédito em até 10x direto na maquininha. Peça e mão de obra aparecem separadas no orçamento, então você sabe exatamente o que está parcelando.",
  },
  {
    pergunta: "Preciso agendar ou posso chegar direto?",
    resposta:
      "Agendando, você escolhe o horário e o mecânico já separa o scanner e as peças comuns do seu modelo. Atendemos encaixe quando há vaga. Com luz vermelha acesa no painel, não rode: mande mensagem e a gente encaixa o seu carro no mesmo dia.",
  },
  {
    pergunta: "Vocês fazem revisão de carro elétrico ou híbrido?",
    resposta:
      "Na parte mecânica, sim: freios, suspensão, ar-condicionado, fluidos e pneus de híbridos e elétricos. Bateria de alta tensão e módulos do motor elétrico a gente não abre. Nesses casos, entregamos o diagnóstico da parte mecânica feito e encaminhamos para a rede do fabricante.",
  },
  {
    pergunta: "Trabalham com peça original?",
    resposta:
      "Trabalhamos com três opções: original, original de linha (da mesma fábrica que abastece a montadora) e paralela de marca conhecida. No orçamento você vê as opções lado a lado e escolhe. A nota da peça acompanha o carro na entrega.",
  },
  {
    pergunta: "O orçamento tem custo?",
    resposta:
      "Não. A avaliação visual e o orçamento pelo WhatsApp são sem custo. Quando é preciso scanner ou teste de bancada para achar um defeito elétrico, avisamos o valor antes de fazer, e ele é abatido se você fechar o serviço com a gente.",
  },
] as const;
