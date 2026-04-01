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
    text: "Chegou o voucher na hora. Retirei na loja parceira sem fila.",
    avatar: "https://i.pravatar.cc/120?img=32",
  },
  {
    author: "Ricardo P.",
    rating: 5,
    text: "Pix super rápido. Meu filho amou o kit espacial.",
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
    text: "Suporte respondeu em minutos quando precisei trocar o voucher.",
    avatar: "https://i.pravatar.cc/120?img=33",
  },
];
