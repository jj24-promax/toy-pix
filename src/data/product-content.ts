import { products } from "@/data/products";
import { productReviewsByProductId, type Review } from "@/data/reviews";

export type ProductFaqItem = {
  question: string;
  answer: string;
};

export type ProductSpec = {
  label: string;
  value: string;
};

export type ProductDetailContent = {
  longDescription: string;
  highlights: string[];
  specs: ProductSpec[];
  inTheBox: string[];
  safety: string[];
  faq: ProductFaqItem[];
};

const defaultDetail = (productName: string): ProductDetailContent => ({
  longDescription:
    `${productName} foi pensado para famílias que buscam brincadeiras seguras, criativas e com boa durabilidade. ` +
    "Com acabamento cuidadoso e visual encantador, ele ajuda no desenvolvimento infantil sem abrir mão da diversão.",
  highlights: [
    "Design infantil com acabamento premium",
    "Materiais selecionados para uso diário",
    "Excelente opção para presentear",
  ],
  specs: [
    { label: "Material", value: "Plástico atóxico e componentes seguros" },
    { label: "Faixa etária", value: "Conforme indicação do produto" },
    { label: "Origem", value: "Fabricado por marca parceira homologada" },
  ],
  inTheBox: ["1 unidade principal", "Manual de uso", "Embalagem de proteção"],
  safety: [
    "Utilizar com supervisão de um adulto responsável",
    "Manter fora do alcance de crianças menores de 3 anos quando houver peças pequenas",
    "Limpar com pano macio e seco após o uso",
  ],
  faq: [
    {
      question: "Qual é o prazo de envio?",
      answer:
        "Após a aprovação do pedido, a separação ocorre em até 1 dia útil e o rastreio é enviado por e-mail.",
    },
    {
      question: "Este produto possui garantia?",
      answer:
        "Sim. Você conta com garantia legal e suporte da nossa equipe para orientar troca ou devolução.",
    },
  ],
});

export const productDetailsById: Record<string, ProductDetailContent> = {
  "1": {
    longDescription:
      "O Kit Bomba de Banho é o destaque da Toy Pix para transformar o momento do banho em uma experiência divertida. " +
      "A proposta combina brincadeira, criatividade e rotina com mais leveza para pais e responsáveis.",
    highlights: [
      "Produto campeão de vendas da loja",
      "Visual colorido e atrativo para crianças",
      "Ideal para presente e datas especiais",
    ],
    specs: [
      { label: "Marca", value: "Toy Pix" },
      { label: "Categoria", value: "Montar e criar" },
      { label: "Faixa etária", value: "3+ anos" },
      { label: "Peso aproximado", value: "450 g" },
    ],
    inTheBox: [
      "Kit principal com unidades de bomba de banho",
      "Embalagem temática",
      "Guia rápido para responsáveis",
    ],
    safety: [
      "Utilizar sempre com supervisão de um adulto",
      "Evitar contato com olhos e boca",
      "Armazenar em local seco e arejado",
    ],
    faq: [
      {
        question: "A fragrância é forte?",
        answer:
          "Não. O aroma é suave e pensado para o público infantil, sem exageros.",
      },
      {
        question: "É uma boa opção para presente?",
        answer:
          "Sim. A apresentação é premium e o kit costuma ser um dos favoritos para aniversários.",
      },
    ],
  },
};

export function getProductDetails(productId: string): ProductDetailContent {
  const product = products.find((p) => p.id === productId);
  return productDetailsById[productId] ?? defaultDetail(product?.name ?? "Produto");
}

export function getProductFaq(productId: string): ProductFaqItem[] {
  return getProductDetails(productId).faq;
}

export function getProductReviews(productId: string): Review[] {
  return productReviewsByProductId[productId] ?? [];
}

export function getRelatedProducts(productId: string, limit = 4) {
  const product = products.find((p) => p.id === productId);
  if (!product) return products.slice(0, limit);
  return products
    .filter((p) => p.id !== productId)
    .sort((a, b) => Number(b.category === product.category) - Number(a.category === product.category))
    .slice(0, limit);
}
