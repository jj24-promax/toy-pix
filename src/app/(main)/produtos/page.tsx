import type { Metadata } from "next";
import Link from "next/link";
import { ProductCatalog } from "@/components/catalog/ProductCatalog";
import { products } from "@/data/products";
import { siteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Produtos",
  description:
    "Catálogo Toy Pix: brinquedos por categoria, marca e faixa etária para toda a família.",
  openGraph: {
    title: "Produtos | Toy Pix",
    description:
      "Explore montar, pelúcias, pistas e jogos. Filtre por categoria, idade e marca.",
    url: `${siteUrl}/produtos`,
    type: "website",
  },
};

export default function ProdutosPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Produtos Toy Pix",
    description:
      "Catálogo de brinquedos com filtros por categoria, marca e idade.",
    numberOfItems: products.length,
    hasPart: products.map((p) => ({
      "@type": "Product",
      name: p.name,
      url: `${siteUrl}/produto/${p.slug}`,
      image: p.images[0]?.src,
      offers: {
        "@type": "Offer",
        priceCurrency: "BRL",
        price: p.price.toFixed(2),
      },
    })),
  };

  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-6">
      <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
        <Link
          href="/"
          className="rounded-md hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          Início
        </Link>
        <span className="mx-2" aria-hidden>
          /
        </span>
        <span className="text-slate-800">Produtos</span>
      </nav>

      <div className="mt-6">
        <ProductCatalog />
      </div>

      <section
        className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 text-sm leading-relaxed text-slate-600 shadow-sm"
        aria-labelledby="seo-catalog"
      >
        <h2
          id="seo-catalog"
          className="font-display text-lg font-bold text-slate-900"
        >
          Brinquedos online com curadoria Toy Pix
        </h2>
        <p className="mt-3">
          Nosso catálogo reúne opções para montar e criar, pelúcias confortáveis,
          pistas e veículos, além de jogos que estimulam o raciocínio. Use os
          filtros laterais para refinar por categoria, marca, perfil e faixa
          etária. Todos os valores aparecem em reais, com parcelamento
          sugerido apenas como apoio visual para comparar opções.
        </p>
        <p className="mt-3">
          A finalização de compra está em preparação. Em caso de dúvida sobre
          prazos ou trocas, consulte a garantia e o FAQ na página inicial.
        </p>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
