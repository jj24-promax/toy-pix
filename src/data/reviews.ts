export type Review = {
  author: string;
  rating: number;
  text: string;
  avatar: string;
};

export const homeReviews: Review[] = [
  {
    author: "Marina L.",
    rating: 5,
    text: "Confirmação do pedido chegou na hora. Compra simples e sem complicação.",
    avatar: "https://i.pravatar.cc/120?img=32",
  },
  {
    author: "Ricardo P.",
    rating: 5,
    text: "Pix super rápido. Meu filho amou o kit bomba de banho.",
    avatar: "https://i.pravatar.cc/120?img=12",
  },
  {
    author: "Ana C.",
    rating: 4,
    text: "Embalagem linda e produto exatamente como nas fotos.",
    avatar: "https://i.pravatar.cc/120?img=45",
  },
];

export const productReviews: Review[] = [
  {
    author: "Juliana M.",
    rating: 5,
    text: "Qualidade acima do esperado. Recomendo o Pix, foi instantâneo.",
    avatar: "https://i.pravatar.cc/120?img=5",
  },
  {
    author: "Pedro H.",
    rating: 5,
    text: "Suporte respondeu em minutos quando precisei ajustar meu pedido.",
    avatar: "https://i.pravatar.cc/120?img=33",
  },
];
