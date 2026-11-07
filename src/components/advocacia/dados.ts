/**
 * Dados e textos da página /advocacia (escritório fictício, para portfólio).
 *
 * REGRAS DA OAB SEGUIDAS NOS TEXTOS (Código de Ética e Disciplina, arts. 39 a 47, e Provimento 205/2021):
 * - tom informativo e discreto; sem promessa de resultado, sem valores, honorários, gratuidade ou descontos;
 * - sem depoimentos, sem número de clientes ou de casos, sem resultados de processos;
 * - sem apelo de urgência ou de medo, sem emojis, sem caixa alta gritando;
 * - prova apenas por tempo de atuação, formação, inscrição na OAB, áreas de atuação e conteúdo informativo;
 * - nada de "especialista" (a advogada tem pós-graduação, que é dito como tal).
 * Os nomes, o número da OAB, a formação e a comissão são FICTÍCIOS.
 */

export const ESCRITORIO = {
  nome: "Mendes Advocacia",
  advogada: "Dra. Carolina Mendes",
  advogadaNome: "Carolina Mendes",
  oab: "OAB/SP 000.000",
  desde: 2009,
  rua: "Rua Barão de Jacareí, 512, sala 34",
  bairro: "Centro",
  cidade: "Jacareí",
  uf: "SP",
  cep: "12327-170",
  geo: { lat: -23.3053, lng: -45.9658 },
  whatsapp: "5512900000003",
  whatsappExibicao: "(12) 90000-0003",
  telefoneSchema: "+55-12-90000-0003",
  horario: "Segunda a sexta, das 9h às 18h, com hora marcada",
  regiao: ["Jacareí", "São José dos Campos", "Santa Branca", "Guararema"],
} as const;

export const ENDERECO_COMPLETO = `${ESCRITORIO.rua} – ${ESCRITORIO.bairro}, ${ESCRITORIO.cidade} – ${ESCRITORIO.uf}, ${ESCRITORIO.cep}`;

export const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=Rua+Bar%C3%A3o+de+Jacare%C3%AD%2C+512%2C+Jacare%C3%AD+-+SP";
export const MAPS_EMBED =
  "https://maps.google.com/maps?q=Rua+Bar%C3%A3o+de+Jacare%C3%AD%2C+512%2C+Jacare%C3%AD+-+SP&z=16&output=embed";

export const NAV = [
  { href: "#artigos", label: "Artigos" },
  { href: "#prazos", label: "Prazos" },
  { href: "#consulta", label: "A consulta" },
  { href: "#escritorio", label: "O escritório" },
  { href: "#contato", label: "Contato" },
] as const;

export type Area = {
  id: string;
  numero: string;
  /** Nome da área (rótulo do artigo). */
  area: string;
  /** Rótulo curto para o campo "assunto" do formulário. */
  curto: string;
  /** Pergunta do cliente (título do artigo). */
  pergunta: string;
  lei: readonly string[];
  documentos: readonly string[];
};

export const AREAS: readonly Area[] = [
  {
    id: "art-1",
    numero: "Art. 1º",
    area: "Demissão e verbas rescisórias",
    curto: "Demissão e verbas rescisórias",
    pergunta: "Fui demitido. O que a empresa precisa me pagar?",
    lei: [
      "Na dispensa sem justa causa, a legislação prevê o pagamento do saldo de salário, do aviso prévio (trabalhado ou indenizado), das férias vencidas e proporcionais com acréscimo de um terço e do 13º salário proporcional. A empresa também deposita a multa de 40% sobre o saldo do FGTS e entrega as guias para o saque do fundo e para o seguro-desemprego, quando houver direito.",
      "O aviso prévio é de 30 dias e cresce 3 dias a cada ano completo na mesma empresa, até 90 dias (Lei 12.506/2011). O pagamento das verbas deve ser feito em até 10 dias após o fim do contrato (art. 477, § 6º, da CLT). Pedido de demissão e justa causa mudam quais verbas são devidas.",
    ],
    documentos: [
      "Carteira de trabalho (física ou digital)",
      "Termo de rescisão (TRCT) e comprovante de pagamento",
      "Contracheques dos últimos meses",
      "Extrato do FGTS",
      "Contrato de trabalho",
      "Mensagens ou e-mails sobre a dispensa",
    ],
  },
  {
    id: "art-2",
    numero: "Art. 2º",
    area: "Horas extras e banco de horas",
    curto: "Horas extras e banco de horas",
    pergunta: "Trabalho além do horário. Isso precisa ser pago?",
    lei: [
      "A jornada regular é de até 8 horas por dia e 44 por semana (art. 7º, XIII, da Constituição). O que passa disso é hora extra, paga com adicional de, no mínimo, 50% sobre a hora normal (art. 7º, XVI). Quando o intervalo para refeição não é concedido ou é reduzido, o período suprimido também é pago com adicional de 50% (art. 71, § 4º, da CLT).",
      "O banco de horas troca o pagamento por folgas. Pode ser combinado por acordo individual escrito, com compensação em até 6 meses, ou por acordo ou convenção coletiva, com prazo de até 1 ano (art. 59 da CLT). Se o contrato terminar com horas ainda não compensadas, elas devem ser pagas na rescisão (art. 59, § 3º).",
    ],
    documentos: [
      "Cartões ou espelho de ponto",
      "Contracheques",
      "Escala de trabalho",
      "Extrato do banco de horas",
      "Mensagens com ordens de serviço fora do horário",
      "Contrato de trabalho",
    ],
  },
  {
    id: "art-3",
    numero: "Art. 3º",
    area: "Acidente de trabalho e doença ocupacional",
    curto: "Acidente ou doença do trabalho",
    pergunta: "Me machuquei, ou adoeci, por causa do trabalho. Quais são meus direitos?",
    lei: [
      "A lei trata como acidente de trabalho o que acontece durante a atividade, o acidente no trajeto entre a casa e o trabalho e as doenças ligadas à profissão, como lesões por esforço repetitivo ou perda auditiva (Lei 8.213/1991, arts. 19 a 21).",
      "A empresa deve emitir a CAT (Comunicação de Acidente de Trabalho) até o primeiro dia útil seguinte ao acidente (art. 22). Se ela não emitir, o trabalhador, um dependente, o sindicato, o médico ou a autoridade pública podem fazê-lo. Nos primeiros 15 dias de afastamento, o salário é pago pela empresa; depois disso, pelo INSS. No afastamento por acidente, a lei prevê depósitos de FGTS no período e estabilidade de 12 meses após a alta (art. 118).",
    ],
    documentos: [
      "CAT, se tiver sido emitida",
      "Atestados, laudos, exames e prontuários",
      "Comunicados e cartas de decisão do INSS",
      "PPP (Perfil Profissiográfico Previdenciário)",
      "Nomes de testemunhas e fotos do local, se houver",
      "Contracheques e carteira de trabalho",
    ],
  },
  {
    id: "art-4",
    numero: "Art. 4º",
    area: "Aposentadoria (tempo, idade, especial)",
    curto: "Aposentadoria",
    pergunta: "Quando posso me aposentar, e por qual regra?",
    lei: [
      "Desde a Emenda Constitucional 103/2019 (reforma da Previdência), a regra geral combina idade mínima, de 65 anos para homens e 62 para mulheres, com tempo mínimo de contribuição. Quem já contribuía antes de 13 de novembro de 2019 pode se enquadrar em regras de transição, que variam conforme idade, tempo de contribuição e data de ingresso.",
      "A aposentadoria especial é voltada a quem trabalhou exposto, de forma habitual e permanente, a agentes nocivos à saúde, como ruído, calor e produtos químicos. Exige comprovação documental, em geral pelo PPP, e, depois da reforma, idade ou pontuação mínima conforme a regra aplicável. O pedido é feito pelo Meu INSS ou pela central 135.",
    ],
    documentos: [
      "CNIS (extrato do Cadastro Nacional de Informações Sociais)",
      "Carteira de trabalho",
      "Carnês ou guias de contribuição",
      "PPP e laudos, nos casos de atividade especial",
      "Certidões de tempo de serviço (militar ou público)",
      "Documento com foto, CPF e comprovante de residência",
    ],
  },
  {
    id: "art-5",
    numero: "Art. 5º",
    area: "BPC/LOAS",
    curto: "BPC/LOAS",
    pergunta: "O que é o BPC/LOAS e quem pode receber?",
    lei: [
      "O Benefício de Prestação Continuada (BPC), previsto na Lei Orgânica da Assistência Social (Lei 8.742/1993), é um benefício assistencial de um salário mínimo por mês para pessoas com 65 anos ou mais e para pessoas com deficiência de longo prazo, desde que a renda da família seja baixa.",
      "Não é aposentadoria e não exige contribuição ao INSS. Em regra, a renda familiar por pessoa deve ser de até 1/4 do salário mínimo, e a família precisa estar inscrita no CadÚnico. Para pessoa com deficiência, o INSS faz avaliação médica e social. Há situações em que a Justiça examina a renda de forma mais ampla do que o critério da lei.",
    ],
    documentos: [
      "Comprovante de inscrição atualizada no CadÚnico",
      "Documentos pessoais de todos que moram na casa",
      "Comprovante de residência",
      "Comprovantes de renda da família, ou declaração",
      "Laudos, atestados e exames (para pessoa com deficiência)",
      "Receitas e relatórios de tratamento",
    ],
  },
  {
    id: "art-6",
    numero: "Art. 6º",
    area: "Auxílio por incapacidade e revisão de benefício negado",
    curto: "Auxílio por incapacidade",
    pergunta: "O INSS negou meu benefício, ou pagou menos do que eu esperava. O que posso fazer?",
    lei: [
      "O auxílio por incapacidade temporária (antigo auxílio-doença) exige qualidade de segurado, em regra 12 contribuições de carência (dispensada em casos como acidente de trabalho e algumas doenças graves) e incapacidade comprovada em perícia médica do INSS. Se a incapacidade for permanente, existe a aposentadoria por incapacidade permanente.",
      "Quando o pedido é indeferido, a carta de decisão traz o motivo. É possível apresentar recurso administrativo no prazo de 30 dias ou levar a discussão ao Judiciário. Benefícios já concedidos também podem ser revistos, por exemplo para incluir contribuições ou períodos que não foram contados, dentro do prazo de 10 anos (art. 103 da Lei 8.213/1991).",
    ],
    documentos: [
      "Carta de decisão do INSS e número do benefício (NB)",
      "CNIS",
      "Laudos, atestados e exames médicos recentes",
      "Carteira de trabalho",
      "Documentos que provem contribuições ou períodos não contados",
      "Documento com foto e CPF",
    ],
  },
];

export const ASSUNTOS = [...AREAS.map((a) => a.curto), "Outro assunto"] as const;

export type Prazo = {
  numero: string;
  unidade: string;
  titulo: string;
  texto: string;
  base: string;
};

// Referências conferidas: CLT art. 477 § 6º; CF art. 7º XXIX; Lei 8.213/1991 art. 126 e Decreto 3.048/1999 art. 305
// (recurso em 30 dias); Lei 8.213/1991 art. 103 (decadência de 10 anos para revisão do ato de concessão).
export const PRAZOS: readonly Prazo[] = [
  {
    numero: "10",
    unidade: "dias",
    titulo: "Pagamento das verbas rescisórias",
    texto: "Contados do fim do contrato de trabalho, é o prazo para a empresa quitar a rescisão.",
    base: "CLT, art. 477, § 6º",
  },
  {
    numero: "30",
    unidade: "dias",
    titulo: "Recurso contra benefício negado no INSS",
    texto: "Prazo do recurso administrativo, contado da ciência da decisão que indeferiu o pedido.",
    base: "Lei 8.213/1991, art. 126, e Decreto 3.048/1999, art. 305",
  },
  {
    numero: "2",
    unidade: "anos",
    titulo: "Ação trabalhista depois de sair da empresa",
    texto:
      "Contados do fim do contrato. A ação pode cobrar direitos não pagos nos cinco anos anteriores ao ajuizamento.",
    base: "Constituição Federal, art. 7º, XXIX",
  },
  {
    numero: "10",
    unidade: "anos",
    titulo: "Revisão de benefício do INSS",
    texto:
      "Prazo para pedir a revisão do ato de concessão, contado do primeiro pagamento ou da decisão que indeferiu o pedido.",
    base: "Lei 8.213/1991, art. 103",
  },
];

export const PASSOS = [
  {
    romano: "I",
    titulo: "Você conta o caso",
    texto:
      "Pelo WhatsApp ou pelo formulário desta página, você descreve a situação em poucas linhas. Não é preciso enviar documentos nesse primeiro contato.",
  },
  {
    romano: "II",
    titulo: "Agendamos a consulta",
    texto:
      "Combinamos dia e horário, de segunda a sexta, das 9h às 18h. O atendimento é presencial, em Jacareí, ou por vídeo.",
  },
  {
    romano: "III",
    titulo: "Você sai sabendo seus direitos e os próximos passos",
    texto:
      "Com os documentos em mãos, explicamos em linguagem simples o que a lei prevê para a sua situação e quais caminhos existem.",
  },
] as const;

export type Direito = { titulo: string; texto: string; base: string };

export const DIREITOS: readonly Direito[] = [
  {
    titulo: "Estabilidade de 12 meses depois do auxílio por acidente",
    texto:
      "Quem recebeu auxílio por incapacidade temporária acidentário tem garantia de manutenção do emprego por 12 meses após o fim do benefício, ressalvadas hipóteses como a justa causa.",
    base: "Lei 8.213/1991, art. 118",
  },
  {
    titulo: "FGTS sobre o aviso prévio",
    texto:
      "O aviso prévio, trabalhado ou indenizado, entra na base de cálculo do FGTS. Vale conferir no extrato se o depósito correspondente consta na conta.",
    base: "Súmula 305 do TST",
  },
  {
    titulo: "Tempo de atividade especial pode antecipar a aposentadoria",
    texto:
      "Períodos de trabalho com exposição habitual e permanente a agentes nocivos, como ruído, calor e produtos químicos, são contados de forma diferenciada. Para períodos até 13/11/2019, a conversão em tempo comum, com acréscimo, ainda é possível. Depende de comprovação, em geral pelo PPP.",
    base: "Lei 8.213/1991, arts. 57 e 58, e EC 103/2019",
  },
  {
    titulo: "O BPC não exige contribuição",
    texto:
      "O BPC é benefício assistencial: não depende de ter contribuído ao INSS. Os requisitos são ter 65 anos ou mais, ou deficiência de longo prazo, e renda familiar baixa.",
    base: "Lei 8.742/1993, art. 20",
  },
];

export type Pergunta = { id: string; pergunta: string; resposta: string };

export const FAQ: readonly Pergunta[] = [
  {
    id: "faq-1",
    pergunta: "Preciso de advogado para pedir a aposentadoria?",
    resposta:
      "Não. O pedido pode ser feito diretamente pelo Meu INSS ou pela central 135. A orientação de um advogado costuma ser útil quando há dúvida sobre qual regra se aplica, quando faltam períodos no CNIS ou quando o pedido foi negado.",
  },
  {
    id: "faq-2",
    pergunta: "Posso processar a empresa ainda trabalhando nela?",
    resposta:
      "Juridicamente, sim: o direito de ação existe durante o contrato, e os prazos de prescrição já correm nesse período. Cada situação tem particularidades e reflexos na relação de trabalho, por isso é uma decisão para conversar com calma em consulta, com os documentos na mesa.",
  },
  {
    id: "faq-3",
    pergunta: "Vocês atendem por vídeo?",
    resposta:
      "Sim. A consulta pode ser presencial, na sala 34 da Rua Barão de Jacareí, 512, ou por videochamada, o que ajuda quem mora em Santa Branca, Guararema, São José dos Campos ou em outra cidade. O atendimento é de segunda a sexta, das 9h às 18h, com hora marcada.",
  },
  {
    id: "faq-4",
    pergunta: "Que documentos devo levar?",
    resposta:
      "Depende do assunto, e cada artigo acima traz uma lista. Em geral: documento com foto e CPF, carteira de trabalho, contracheques, extrato do CNIS e qualquer comunicado recebido da empresa ou do INSS. Na dúvida, traga o que tiver; o restante é indicado na própria consulta.",
  },
  {
    id: "faq-5",
    pergunta: "Quanto tempo demora um processo?",
    resposta:
      "Não é possível informar um prazo. Depende da vara ou da agência, da complexidade do caso, de provas como perícias e de eventuais recursos. Na consulta, explicamos as etapas e o que costuma influenciar o andamento, sem prometer data nem resultado.",
  },
  {
    id: "faq-6",
    pergunta: "O que eu contar ao escritório fica em sigilo?",
    resposta:
      "Sim. O sigilo profissional é um dever do advogado, previsto no Estatuto da Advocacia e no Código de Ética e Disciplina da OAB, e vale desde o primeiro contato.",
  },
];

export function montarMensagem(lead: { nome: string; telefone: string; interesse: string }) {
  return `Olá, Dra. Carolina. Meu nome é ${lead.nome} e gostaria de agendar uma consulta sobre: ${lead.interesse}. Telefone: ${lead.telefone}.`;
}
