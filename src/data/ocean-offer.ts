export type OfferKit = {
  id: string;
  title: string;
  quantity: number;
  useCase: string;
  oldPrice: number;
  price: number;
  badge?: string;
  cta: string;
};

export type OfferReview = {
  id: string;
  name: string;
  city: string;
  rating: number;
  text: string;
  avatar: string;
};

export type OfferFaq = {
  q: string;
  a: string;
};

export const oceanOffer = {
  announcement: "Frete grátis para todo o Brasil",
  hero: {
    headline: "Transforme o banho do seu filho na hora mais divertida do dia",
    subheadline:
      "Bombas de banho que dissolvem na água e revelam surpresas da coleção oceano em cada unidade.",
    bullets: [
      "Torna o banho mais divertido",
      "Estimula curiosidade e imaginação",
      "Fórmula suave e segura para crianças",
    ],
    ratingLabel: "4,8/5 em avaliações verificadas",
    socialProof: "Mais de 2.000 famílias satisfeitas",
    trustLine: "Pagamento 100% seguro · Entrega garantida",
  },
  gallery: [
    { src: "/images/bubbly-buddies-kit.png", alt: "Caixa do kit de bombas de banho", tag: "caixa" },
    { src: "/images/crianca-banho.png", alt: "Uso no banho", tag: "uso" },
    { src: "/images/brinquedos-vitrine.png", alt: "Variedade de surpresas", tag: "variedade" },
    { src: "/images/bubbly-buddies-kit.png", alt: "Dimensões aproximadas do kit", tag: "dimensões" },
  ],
  kitsNotice: "Quanto mais bombas, maior a economia!",
  urgency: "Estoque quase esgotado",
  kits: [
    {
      id: "explorador",
      title: "Kit Explorador",
      quantity: 12,
      useCase: "Perfeito para testar e começar a coleção",
      oldPrice: 149.9,
      price: 89.9,
      cta: "Quero o Kit Explorador",
    },
    {
      id: "aventura",
      title: "Kit Aventura em Dobro",
      quantity: 24,
      useCase: "Ideal para rotina da semana e mais surpresas",
      oldPrice: 299.8,
      price: 159.9,
      badge: "Mais popular",
      cta: "Quero o Mais Popular",
    },
    {
      id: "familia",
      title: "Kit Família Mágica",
      quantity: 36,
      useCase: "Melhor custo por unidade para famílias",
      oldPrice: 449.7,
      price: 219.9,
      cta: "Quero o Kit Família",
    },
  ] satisfies OfferKit[],
  bonus: {
    title: "Brinde exclusivo incluso",
    items: ["Toalhinha mágica", "Rede organizadora de brinquedos"],
  },
  demoMedia: [
    { src: "/gifs/video1.gif", alt: "Demonstração da espuma colorida 1" },
    { src: "/gifs/video2.gif", alt: "Demonstração da espuma colorida 2" },
    { src: "/gifs/video3.gif", alt: "Demonstração da espuma colorida 3" },
  ],
  benefits: [
    {
      title: "Surpresa a cada banho",
      body: "+20 animais marinhos colecionáveis para montar a própria coleção.",
      icon: "🐙",
    },
    {
      title: "100% seguro",
      body: "Fórmula vegana e dermatologicamente testada para pele sensível.",
      icon: "🛡️",
    },
    {
      title: "Presente perfeito",
      body: "Embalagem premium pronta para surpreender no aniversário ou data especial.",
      icon: "🎁",
    },
  ],
  reviews: [
    {
      id: "r1",
      name: "Camila R.",
      city: "Campinas/SP",
      rating: 5,
      text: "Minha filha pediu para tomar banho sozinha de novo. Virou o momento favorito do dia.",
      avatar: "https://i.pravatar.cc/120?img=12",
    },
    {
      id: "r2",
      name: "Bruno M.",
      city: "Belo Horizonte/MG",
      rating: 5,
      text: "Chegou rápido, embalagem linda e os bichinhos surpresa são muito fofos.",
      avatar: "https://i.pravatar.cc/120?img=32",
    },
    {
      id: "r3",
      name: "Patrícia A.",
      city: "Curitiba/PR",
      rating: 4,
      text: "Produto excelente e seguro. Ótima ideia para reduzir resistência na hora do banho.",
      avatar: "https://i.pravatar.cc/120?img=45",
    },
  ] satisfies OfferReview[],
  faq: [
    {
      q: "A fórmula é segura para crianças?",
      a: "Sim. O produto é formulado para uso infantil, com ingredientes suaves e indicação de uso com supervisão de um adulto.",
    },
    {
      q: "Em quanto tempo recebo meu pedido?",
      a: "Após a confirmação do Pix, o pedido entra em separação e você recebe o rastreio por e-mail.",
    },
    {
      q: "Quais surpresas podem vir dentro?",
      a: "A coleção possui diferentes animais marinhos colecionáveis enviados de forma surpresa.",
    },
    {
      q: "Posso trocar ou devolver?",
      a: "Sim. Você conta com política de troca e devolução em até 30 dias, conforme as condições da loja.",
    },
  ] satisfies OfferFaq[],
  finalCta: {
    headline: "Pronto para transformar o banho em diversão todos os dias?",
    trust: "Compra segura · Frete grátis · Garantia de 30 dias",
    button: "Quero meu kit agora",
  },
} as const;
