export type LandingBenefit = {
  title: string;
  body: string;
  icon: "play" | "shield" | "clock" | "heart" | "spark" | "gift";
};

export type LandingFaq = { question: string; answer: string };

export type LandingStep = { title: string; body: string };

/** Conteúdo persuasivo da landing — produto âncora: Kit Bomba de Banho. */
export const landing = {
  ratingAverage: 4.9,
  ratingCountLabel: "847 avaliações verificadas",
  customersBadge: "2.400+",
  customersLine: "famílias já levaram alegria pra casa com a Toy Pix",

  headline: "O kit bomba de banho que vira a brincadeira favorita da semana",
  subheadline:
    "Monte, decore e brinque — compra rápida com Pix em minutos. Sem surpresa no preço, sem complicação.",

  /** Preço de referência (anterior) para ancoragem. */
  compareAt: 159.9,

  scarcityHeadline: "Lote promocional limitado",
  scarcityBody:
    "Reservamos um número reduzido de unidades por dia neste valor. Quando o timer zerar, o preço pode ser ajustado.",

  offerBadge: "Oferta Pix ativa hoje",

  benefits: [
    {
      title: "Diversão que segura a atenção",
      body: "Peças grandes, cores vivas e tema que estimula a imaginação — menos tela, mais brincadeira de verdade.",
      icon: "play",
    },
    {
      title: "Material pensado para pais exigentes",
      body: "Acabamento atóxico e peças fáceis de encaixar, com manual ilustrado para montar sem estresse.",
      icon: "shield",
    },
    {
      title: "Do Pix à confirmação em poucos minutos",
      body: "Pague com Pix e receba a confirmação do pedido por e-mail — fluxo claro do início ao fim.",
      icon: "clock",
    },
    {
      title: "Presente que impressiona na hora",
      body: "Embalagem pronta para festa e sensação de kit completo — ótimo para aniversário ou surpresa de fim de semana.",
      icon: "gift",
    },
    {
      title: "Suporte humano de verdade",
      body: "Time no WhatsApp e e-mail em horário comercial para tirar dúvida sobre pedido, entrega ou troca.",
      icon: "heart",
    },
    {
      title: "Bônus digital incluso",
      body: "Código no kit para resgatar conteúdo extra e deixar a experiência ainda mais completa.",
      icon: "spark",
    },
  ] satisfies LandingBenefit[],

  demo: {
    title: "Veja o kit na vida real",
    subtitle:
      "Imagens reais de uso — do que chega na mão da criança ao resultado montado.",
    beforeCaption: "Na caixa: peças organizadas e manual claro",
    afterCaption: "Na prática: montagem rápida e brincadeira imediata",
  },

  howItWorks: [
    {
      title: "Você garante no site",
      body: "Clica em comprar, informa seus dados e escolhe Pix — leva menos de 1 minuto.",
    },
    {
      title: "Paga com Pix",
      body: "Escaneia o QR ou usa copia e cola no app do banco. A confirmação costuma levar instantes.",
    },
    {
      title: "Confirma e acompanha",
      body: "Recebe a confirmação por e-mail e acompanha os próximos passos do pedido sem burocracia.",
    },
  ] satisfies LandingStep[],

  guarantee: {
    title: "Garantia de 7 dias + compra segura",
    body:
      "Se o produto chegar com defeito ou lacre violado, fazemos a troca. Pagamento via Pix com confirmação transparente — você sabe exatamente o que está comprando antes de pagar.",
    bullets: [
      "Pix com QR e código copia e cola",
      "Confirmação do pedido por e-mail",
      "Canal de atendimento em horário comercial",
    ],
  },

  faq: [
    {
      question: "Como funciona a entrega?",
      answer:
        "Após a confirmação do Pix, você recebe a confirmação do pedido por e-mail e as informações de envio do produto.",
    },
    {
      question: "Quanto tempo leva para confirmar o pedido?",
      answer:
        "Na maioria dos casos, em poucos minutos após o banco confirmar o Pix. Se houver qualquer atraso, nosso time ajuda pelo canal de suporte.",
    },
    {
      question: "Posso trocar ou devolver?",
      answer:
        "Sim. Você tem até 7 dias para solicitar troca em caso de defeito ou embalagem violada, conforme nossa política e o Código de Defesa do Consumidor.",
    },
    {
      question: "É seguro pagar por Pix aqui?",
      answer:
        "O pagamento é feito direto no app do seu banco, com QR Code ou copia e cola. Não pedimos senha de banco no site — só os dados necessários para processar o pedido.",
    },
    {
      question: "Serve para qual idade?",
      answer:
        "O kit bomba de banho é indicado para crianças a partir de 3 anos com supervisão. Contém peças pequenas — mantenha fora do alcance de bebês.",
    },
  ] satisfies LandingFaq[],

  finalCta: {
    headline: "Pronto para ver o sorriso na hora da brincadeira?",
    body: "Garanta seu kit pelo Pix agora — confirmação do pedido em minutos.",
  },
} as const;
