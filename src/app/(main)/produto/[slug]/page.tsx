import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/atoms/Badge";
import { buttonVariants } from "@/components/atoms/Button";
import { PriceTag } from "@/components/atoms/PriceTag";
import { ProductImageCarousel } from "@/components/product/ProductImageCarousel";
import { ProductReviews } from "@/components/product/ProductReviews";
import { ProductSidebar } from "@/components/product/ProductSidebar";
import { ProductStickyBar } from "@/components/product/ProductStickyBar";
import { ProductViewTracker } from "@/components/product/ProductViewTracker";
import { products, getProductBySlug } from "@/data/products";
import { productReviews } from "@/data/reviews";
import { formatBRL } from "@/lib/format-price";
import { siteUrl } from "@/lib/site-url";
import { cn } from "@/lib/utils";

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
      url: `${siteUrl}/produto/${product.slug}`,
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
      url: `${siteUrl}/produto/${product.slug}`,
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
      <article className="mx-auto max-w-6xl px-4 pb-16 pt-6">
        <p className="mb-4 rounded-xl bg-primary/10 px-4 py-3 text-sm text-slate-700">
          <Link href="/#oferta" className="font-bold text-primary hover:underline">
            Ver oferta completa do Kit Espacial na página principal →
          </Link>
        </p>
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
          <Link
            href="/produtos"
            className="rounded-md hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Produtos
          </Link>
          <span className="mx-2" aria-hidden>
            /
          </span>
          <span className="text-slate-800">{product.name}</span>
        </nav>

        <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_280px]">
          <div>
            <ProductImageCarousel images={product.images} />
            <div className="mt-6">
              {product.badge ? (
                <Badge txt={product.badge} color="pink" />
              ) : null}
              <h1 className="font-display mt-2 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                {product.name}
              </h1>
              <PriceTag amount={product.price} className="mt-3 block" size="lg" />
              <Link
                href={`/checkout-pix?product=${product.id}`}
                className={cn(
                  buttonVariants({ variant: "primary" }),
                  "mt-6 w-full min-h-12 md:hidden"
                )}
              >
                Comprar com Pix
              </Link>
              <p className="mt-6 text-base leading-relaxed text-slate-700">
                {product.shortDescription}
              </p>
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
              />
              <section className="mt-8" aria-labelledby="product-desc">
                <h2
                  id="product-desc"
                  className="font-display text-xl font-bold text-slate-900"
                >
                  Descrição
                </h2>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  {product.description}
                </p>
              </section>
              <ProductReviews reviews={productReviews} />
            </div>
          </div>
          <ProductSidebar />
        </div>

        <section
          className="mt-10 hidden rounded-3xl border border-mint-100 bg-mint-50/50 p-6 md:block"
          aria-label="Resumo e checkout"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex min-w-0 items-center gap-4">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
                <Image
                  src={product.images[0].src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-slate-900">{product.name}</p>
                <p className="font-bold tabular-nums text-primary">
                  R$ {formatBRL(product.price)}
                </p>
              </div>
            </div>
            <Link
              href={`/checkout-pix?product=${product.id}`}
              className={cn(buttonVariants({ variant: "primary" }), "shrink-0")}
            >
              Pagar com Pix
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
