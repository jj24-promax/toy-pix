export type Review = {
  id: string;
  author: string;
  rating: number;
  text: string;
  avatar: string;
  location?: string;
};

export const homeReviews: Review[] = [
  {
    id: "home-1",
    author: "Marina L.",
    rating: 5,
    text: "Entrega rápida e produto igualzinho às fotos. Minha filha adorou a experiência.",
    avatar: "https://i.pravatar.cc/120?img=32",
    location: "Curitiba, PR",
  },
  {
    id: "home-2",
    author: "Ricardo P.",
    rating: 5,
    text: "Site fácil de navegar e ótima qualidade. Já virei cliente recorrente.",
    avatar: "https://i.pravatar.cc/120?img=12",
    location: "Campinas, SP",
  },
  {
    id: "home-3",
    author: "Ana C.",
    rating: 4,
    text: "Chegou bem embalado e com rastreio em todas as etapas.",
    avatar: "https://i.pravatar.cc/120?img=45",
    location: "Recife, PE",
  },
];

export const productReviewsByProductId: Record<string, Review[]> = {
  "1": [
    {
      id: "p1-1",
      author: "Juliana M.",
      rating: 5,
      text: "As bombas de banho são lindas e o aroma é suave. Virou nosso ritual de sábado.",
      avatar: "https://i.pravatar.cc/120?img=5",
      location: "Belo Horizonte, MG",
    },
    {
      id: "p1-2",
      author: "Pedro H.",
      rating: 5,
      text: "Produto completo e bem apresentado. Ótima opção para presente infantil.",
      avatar: "https://i.pravatar.cc/120?img=33",
      location: "São Paulo, SP",
    },
  ],
};
