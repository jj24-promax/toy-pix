import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductImageCarousel } from "@/components/product/ProductImageCarousel";
import { ProductReviews } from "@/components/product/ProductReviews";
import { ProductSidebar } from "@/components/product/ProductSidebar";
import { ProductStickyBar } from "@/components/product/ProductStickyBar";
import { ProductViewTracker } from "@/components/product/ProductViewTracker";
import { Badge } from "@/components/atoms/Badge";
import { products, getProductBySlug } from "@/data/products";
import { productReviews } from "@/data/reviews";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  if (!product) return { title: "Produto" };

  const ogImage = product.images[0]?.src;

  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: ogImage ? [{ url: ogImage, width: 800, height: 800 }] : [],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.shortDescription,
      images: ogImage ? [ogImage] : [],
    },
  };
}

export default function ProductPage({ params }: Props) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images.map((i) => i.src),
    sku: product.id,
    offers: {
      "@type": "Offer",
      url: `https://example.com/produto/${product.slug}`,
      priceCurrency: "BRL",
      price: product.price.toFixed(2),
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      <ProductViewTracker
        productId={product.id}
        price={product.price}
        name={product.name}
      />
      <ProductStickyBar
        price={product.price}
        productId={product.id}
        productName={product.name}
      />
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-6">
        <nav className="text-sm text-slate-500">
          <Link href="/" className="hover:text-mint-600">
            Início
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-800">{product.name}</span>
        </nav>

        <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_280px]">
          <div>
            <ProductImageCarousel images={product.images} />
            <div className="mt-6">
              {product.badge ? (
                <Badge txt={product.badge} color="pink" />
              ) : null}
              <h1 className="font-display mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
                {product.name}
              </h1>
              <p className="mt-3 text-2xl font-bold text-mint-700">
                R$ {product.price.toFixed(2)}
              </p>
              <Link
                href={`/checkout-pix?product=${product.id}`}
                className="mt-6 inline-flex rounded-full bg-bubblegum-500 px-8 py-3 font-bold text-white shadow-float-pink md:hidden"
              >
                Comprar com Pix
              </Link>
              <p className="mt-6 text-slate-700">{product.shortDescription}</p>
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
              />
              <div className="prose prose-slate mt-6 max-w-none">
                <h2 className="font-display text-xl font-bold text-slate-900">
                  Descrição
                </h2>
                <p className="text-slate-600">{product.description}</p>
              </div>
              <ProductReviews reviews={productReviews} />
            </div>
          </div>
          <ProductSidebar />
        </div>

        <section className="mt-10 hidden rounded-3xl border border-mint-100 bg-mint-50/50 p-6 md:block">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-xl">
                <Image
                  src={product.images[0].src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div>
                <p className="font-semibold text-slate-900">{product.name}</p>
                <p className="text-mint-700">R$ {product.price.toFixed(2)}</p>
              </div>
            </div>
            <Link
              href={`/checkout-pix?product=${product.id}`}
              className="rounded-full bg-bubblegum-500 px-8 py-3 font-bold text-white shadow-float-pink"
            >
              Pagar com Pix
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
