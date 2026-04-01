export type Product = {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  images: { src: string; alt: string }[];
  badge?: string;
};

export const products: Product[] = [
  {
    id: "1",
    slug: "kit-aventura-espacial",
    name: "Kit Aventura Espacial",
    shortDescription: "Foguete, astronauta e mapa das estrelas — diversão sem fim.",
    description:
      "Kit completo com peças grandes, fáceis de encaixar e pintura atóxica. Inclui manual ilustrado e código para resgate digital do poster exclusivo.",
    price: 89.9,
    images: [
      {
        src: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=800&q=80&auto=format&fit=crop",
        alt: "Brinquedo espacial colorido",
      },
      {
        src: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&q=80&auto=format&fit=crop",
        alt: "Criança brincando com brinquedo",
      },
      {
        src: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80&auto=format&fit=crop",
        alt: "Blocos de montar",
      },
    ],
    badge: "Mais vendido",
  },
  {
    id: "2",
    slug: "bichinhos-da-fazenda",
    name: "Bichinhos da Fazenda",
    shortDescription: "Coleção macia com sons suaves — segura para bebês.",
    description:
      "Tecido hipoalergênico, sem peças soltas. Cada bichinho ativa um som curto ao apertar. Entrega digital do certificado de origem inclusa.",
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
  },
  {
    id: "3",
    slug: "pista-magica-de-carros",
    name: "Pista Mágica de Carros",
    shortDescription: "Pista flexível com curvas neon e 2 mini carrinhos.",
    description:
      "Monte circuitos diferentes em segundos. Acabamento fosco antiderrapante. Pix aprovado = voucher para retirada em loja parceira.",
    price: 119.0,
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
  },
  {
    id: "4",
    slug: "arte-com-adesivos",
    name: "Arte com Adesivos",
    shortDescription: "500 adesivos brilhantes + cartela gigante reutilizável.",
    description:
      "Estimula coordenação motora fina. Tudo lavável. Guia digital com ideias de atividades enviado por e-mail após o Pix.",
    price: 39.9,
    images: [
      {
        src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80&auto=format&fit=crop",
        alt: "Arte e cores infantis",
      },
    ],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: string) {
  return products.find((p) => p.id === id);
}
