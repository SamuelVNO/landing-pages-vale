/** Dados do negócio (fictício) e conteúdos compartilhados pelas seções de /clinica. */

export const CLINICA = {
  nome: "Clínica Sorriso Vale",
  whatsapp: "5512900000002",
  telefoneExibido: "(12) 90000-0002",
  endereco: "Av. Nove de Julho, 1.250",
  bairro: "Jardim Apolo",
  cidade: "São José dos Campos",
  uf: "SP",
  cep: "12243-001",
  geo: { lat: -23.1979, lng: -45.8996 },
  cnpj: "00.000.000/0001-00",
  responsavel: { nome: "Dra. Helena Duarte", cro: "CRO-SP 000000" },
} as const;

export const ENDERECO_COMPLETO = `${CLINICA.endereco} – ${CLINICA.bairro}, ${CLINICA.cidade} – ${CLINICA.uf}, ${CLINICA.cep}`;

export const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${CLINICA.nome}, ${CLINICA.endereco}, ${CLINICA.bairro}, ${CLINICA.cidade} - ${CLINICA.uf}`,
)}`;

export const MAPS_EMBED = `https://www.google.com/maps?q=${CLINICA.geo.lat},${CLINICA.geo.lng}&z=16&output=embed`;

export const HORARIOS = [
  { dia: "Segunda a sexta", horas: "8h às 20h", destaque: true },
  { dia: "Sábado", horas: "8h às 13h", destaque: false },
  { dia: "Domingo e feriados", horas: "Fechado", destaque: false },
] as const;

/** Tratamentos que aparecem no Select do formulário (+ "Ainda não sei"). */
export const TRATAMENTOS_SELECT = [
  "Clínica geral e limpeza",
  "Canal (endodontia)",
  "Implantes",
  "Clareamento",
  "Ortodontia e alinhadores",
  "Odontopediatria",
  "Ainda não sei",
] as const;

export type Concern = {
  id: string;
  label: string;
  /** Texto que vai para o formulário / WhatsApp quando a pessoa clica em "Agendar avaliação para isso". */
  interesse: string;
  provavel: string;
  tratamos: string;
  tempo: string;
};

/** Elemento-assinatura "O que está te incomodando?". Orientação geral, nunca diagnóstico nem promessa. */
export const CONCERNS: readonly Concern[] = [
  {
    id: "dor",
    label: "Dor de dente",
    interesse: "Dor de dente",
    provavel:
      "Pode ser uma cárie que chegou perto do nervo, uma inflamação ou só um dente sensível. Dois dentes com a mesma dor podem ter causas bem diferentes, por isso só o exame mostra qual é o seu caso.",
    tratamos:
      "Primeiro a gente entende o que está acontecendo, com conversa, exame e radiografia quando precisar. Você fica sabendo o que foi encontrado e quais caminhos existem antes de qualquer procedimento começar.",
    tempo: "Cerca de 50 minutos, sem pressa e com pausa quando você quiser.",
  },
  {
    id: "quebrado",
    label: "Dente quebrado",
    interesse: "Dente quebrado",
    provavel:
      "Costuma ser uma fratura pequena, uma restauração antiga que soltou ou uma cárie que deixou o dente frágil. Mesmo quando não dói, vale olhar logo para não piorar.",
    tratamos:
      "A gente examina o que sobrou do dente, mostra na tela da radiografia e explica as opções de reparo. Só começa quando você entendeu e concordou.",
    tempo: "Cerca de 50 minutos para avaliar com calma.",
  },
  {
    id: "estetica",
    label: "Quero clarear / estética",
    interesse: "Clareamento",
    provavel:
      "Dente amarelado ou manchado pode ter várias origens: café, cigarro, envelhecimento ou até uma cárie escondida. Antes de clarear, o dentista confere se o dente e a gengiva estão saudáveis.",
    tratamos:
      "Na avaliação a gente conversa sobre o que te incomoda no sorriso, examina e explica o que faz sentido para o seu caso, sem empurrar procedimento.",
    tempo: "Cerca de 50 minutos de conversa e exame.",
  },
  {
    id: "aparelho",
    label: "Aparelho / alinhador",
    interesse: "Ortodontia e alinhadores",
    provavel:
      "Dentes tortos ou com espaços podem mexer com a mordida e a limpeza, além do visual. Adultos também usam aparelho, e existem opções discretas.",
    tratamos:
      "A ortodontista examina a mordida, pede as imagens necessárias e explica as opções (fixo, estético ou alinhador) e como funciona o acompanhamento.",
    tempo: "Cerca de 50 minutos na primeira consulta.",
  },
  {
    id: "gengiva",
    label: "Gengiva sangrando",
    interesse: "Gengiva sangrando",
    provavel:
      "Quase sempre é inflamação por acúmulo de placa, a gengivite. Vista cedo, costuma ser tratável. Deixar para depois é o que a faz avançar.",
    tratamos:
      "A gente avalia a gengiva, explica como a limpeza profissional funciona e ensina a escovar e passar fio sem machucar. Sem bronca.",
    tempo: "Cerca de 50 minutos, com tempo para tirar todas as dúvidas.",
  },
  {
    id: "checkup",
    label: "Só um check-up",
    interesse: "Clínica geral e limpeza",
    provavel:
      "Boa decisão. Muita coisa começa sem incomodar, e quanto antes aparece, mais simples tende a ser resolver.",
    tratamos:
      "Exame completo da boca, avaliação da gengiva e orientação sob medida para o seu dia a dia. Se estiver tudo certo, você sai sabendo disso.",
    tempo: "Cerca de 50 minutos.",
  },
] as const;

export const WHATSAPP_MENSAGEM_GERAL =
  "Olá, Clínica Sorriso Vale! Gostaria de agendar uma avaliação.";
