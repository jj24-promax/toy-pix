export type ProductGender = "Unissex" | "Menina" | "Menino";

export type Product = {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  images: { src: string; alt: string }[];
  badge?: string;
  category: string;
  brand: string;
  gender: ProductGender;
  ageLabel: string;
  compareAtPrice?: number;
  rating: number;
};

export const products: Product[] = [
  {
    id: "1",
    slug: "kit-aventura-espacial",
    name: "Kit Bomba de Banho",
    shortDescription: "Foguete, astronauta e mapa das estrelas — diversão sem fim.",
    description:
      "Kit completo com peças grandes, fáceis de encaixar e pintura atóxica. Inclui manual ilustrado e embalagem premium para presente.",
    price: 89.9,
    compareAtPrice: 119.9,
    images: [
      {
        src: "/images/brinquedos-vitrine.png",
        alt: "Vitrine com brinquedos coloridos",
      },
      {
        src: "/images/crianca-banho.png",
        alt: "Criança brincando com brinquedos de banho",
      },
      {
        src: "/images/bubbly-buddies-kit.png",
        alt: "Kit BubblyBuddies com bombas de banho",
      },
    ],
    badge: "Mais vendido",
    category: "Montar e criar",
    brand: "Toy Pix",
    gender: "Unissex",
    ageLabel: "3+ anos",
    rating: 4.8,
  },
  {
    id: "2",
    slug: "bichinhos-da-fazenda",
    name: "Bichinhos da Fazenda",
    shortDescription: "Coleção macia com sons suaves — segura para bebês.",
    description:
      "Tecido hipoalergênico, sem peças soltas. Cada bichinho ativa um som curto ao apertar e acompanha instruções de conservação.",
    price: 64.5,
    images: [
      {
        src: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80&auto=format&fit=crop",
        alt: "Pelúcias coloridas",
      },
      {
        src: "https://images.unsplash.com/photo-1560341820-49b1f917f0a4?w=800&q=80&auto=format&fit=crop",
        alt: "Brinquedos infantis",
      },
    ],
    category: "Pelúcias e bebê",
    brand: "Toy Pix",
    gender: "Unissex",
    ageLabel: "0+ meses",
    rating: 4.6,
  },
  {
    id: "3",
    slug: "pista-magica-de-carros",
    name: "Pista Mágica de Carros",
    shortDescription: "Pista flexível com curvas neon e 2 mini carrinhos.",
    description:
      "Monte circuitos diferentes em segundos. Acabamento fosco antiderrapante e excelente durabilidade para uso diário.",
    price: 119.0,
    compareAtPrice: 149.0,
    images: [
      {
        src: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=800&q=80&auto=format&fit=crop",
        alt: "Carrinhos e pista",
      },
      {
        src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format&fit=crop",
        alt: "Brinquedo de carro",
      },
    ],
    badge: "Novo",
    category: "Veículos e pistas",
    brand: "WheelKing",
    gender: "Menino",
    ageLabel: "4+ anos",
    rating: 4.9,
  },
  {
    id: "4",
    slug: "arte-com-adesivos",
    name: "Arte com Adesivos",
    shortDescription: "500 adesivos brilhantes + cartela gigante reutilizável.",
    description:
      "Estimula coordenação motora fina. Tudo lavável e pronto para atividades criativas em casa ou na escola.",
    price: 39.9,
    images: [
      {
        src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80&auto=format&fit=crop",
        alt: "Arte e cores infantis",
      },
    ],
    category: "Arte e criatividade",
    brand: "ColorKid",
    gender: "Unissex",
    ageLabel: "4+ anos",
    rating: 4.7,
  },
  {
    id: "5",
    slug: "blocos-cidade-colorida",
    name: "Blocos Cidade Colorida",
    shortDescription: "120 peças compatíveis com encaixe suave e guia ilustrado.",
    description:
      "Inspire arquitetos mirins: pontes, torres e parques. Peças grandes, fácil de limpar, sem BPA.",
    price: 79.9,
    compareAtPrice: 99.9,
    images: [
      {
        src: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80&auto=format&fit=crop",
        alt: "Blocos de montar coloridos",
      },
      {
        src: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80&auto=format&fit=crop",
        alt: "Criança montando blocos",
      },
    ],
    category: "Montar e criar",
    brand: "BlockPlay",
    gender: "Unissex",
    ageLabel: "5+ anos",
    rating: 4.5,
  },
  {
    id: "6",
    slug: "princesa-aurora",
    name: "Boneca Princesa Aurora",
    shortDescription: "Acessórios mágicos, cabelo pentável e vestido brilhante.",
    description:
      "Detalhes premium com acabamento suave. Inclui coroa removível e sapatinhos. Ideal para brincadeiras narrativas.",
    price: 89.0,
    compareAtPrice: 109.0,
    images: [
      {
        src: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&q=80&auto=format&fit=crop",
        alt: "Boneca infantil",
      },
    ],
    category: "Bonecas e casinha",
    brand: "DreamDoll",
    gender: "Menina",
    ageLabel: "3+ anos",
    rating: 4.8,
  },
  {
    id: "7",
    slug: "garagem-turbo-team",
    name: "Garagem Turbo Team",
    shortDescription: "Elevador manual, lava-rápido e 3 carrinhos metálicos.",
    description:
      "Escala 1:64, compatível com pistas flexíveis. Montagem em 5 minutos com travas seguras.",
    price: 69.9,
    compareAtPrice: 89.9,
    images: [
      {
        src: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=800&q=80&auto=format&fit=crop",
        alt: "Garagem de carrinhos",
      },
    ],
    category: "Veículos e pistas",
    brand: "WheelKing",
    gender: "Menino",
    ageLabel: "4+ anos",
    rating: 4.6,
  },
  {
    id: "8",
    slug: "quebra-cabeca-exploradores",
    name: "Quebra-cabeça Exploradores",
    shortDescription: "100 peças com mapa-múndi ilustrado e bordas encaixáveis.",
    description:
      "Papel grosso com verniz mate. Desafio progressivo: comece pelas bordas e avance para o centro.",
    price: 49.9,
    images: [
      {
        src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80&auto=format&fit=crop",
        alt: "Quebra-cabeça infantil",
      },
    ],
    category: "Jogos e puzzle",
    brand: "MindPlay",
    gender: "Unissex",
    ageLabel: "6+ anos",
    rating: 4.4,
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: string) {
  return products.find((p) => p.id === id);
}

export function getPriceBounds(list: Product[]) {
  if (list.length === 0) return { min: 0, max: 0 };
  const prices = list.map((p) => p.price);
  return { min: Math.min(...prices), max: Math.max(...prices) };
}
