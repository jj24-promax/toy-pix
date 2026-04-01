import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/atoms/Badge";
import { buttonVariants } from "@/components/atoms/Button";
import { PriceTag } from "@/components/atoms/PriceTag";
import { ProductImageCarousel } from "@/components/product/ProductImageCarousel";
import { ProductFaq } from "@/components/product/ProductFaq";
import { RelatedProducts } from "@/components/product/RelatedProducts";
import { ProductReviews } from "@/components/product/ProductReviews";
import { ProductSidebar } from "@/components/product/ProductSidebar";
import { ProductStickyBar } from "@/components/product/ProductStickyBar";
import { ProductViewTracker } from "@/components/product/ProductViewTracker";
import { products, getProductBySlug } from "@/data/products";
import {
  getProductDetails,
  getProductFaq,
  getProductReviews,
  getRelatedProducts,
} from "@/data/product-content";
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
  const details = getProductDetails(product.id);
  const productFaq = getProductFaq(product.id);
  const productReviews = getProductReviews(product.id);
  const relatedProducts = getRelatedProducts(product.id, 4);

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
        productName={product.name}
      />
      <article className="mx-auto max-w-6xl px-4 pb-16 pt-6">
        <p className="mb-4 rounded-xl bg-primary/10 px-4 py-3 text-sm text-slate-700">
          <Link href="/#oferta" className="font-bold text-primary hover:underline">
            Ver oferta principal do Kit Bomba de Banho na página inicial →
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
              {product.compareAtPrice ? (
                <p className="mt-1 text-sm text-slate-400 line-through">
                  De R$ {formatBRL(product.compareAtPrice)}
                </p>
              ) : null}
              <Link
                href="/contato"
                className={cn(
                  buttonVariants({ variant: "primary" }),
                  "mt-6 w-full min-h-12 md:hidden"
                )}
              >
                Comprar em breve
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
                  Descrição completa
                </h2>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  {details.longDescription}
                </p>
              </section>
              <section className="mt-8 grid gap-6 md:grid-cols-2">
                <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h2 className="font-display text-lg font-bold text-slate-900">
                    Benefícios principais
                  </h2>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
                    {details.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
                <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h2 className="font-display text-lg font-bold text-slate-900">
                    O que vem na caixa
                  </h2>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
                    {details.inTheBox.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </section>
              <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h2 className="font-display text-lg font-bold text-slate-900">
                  Especificações técnicas
                </h2>
                <dl className="mt-3 grid gap-2 sm:grid-cols-2">
                  {details.specs.map((spec) => (
                    <div key={spec.label} className="rounded-xl bg-slate-50 p-3">
                      <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        {spec.label}
                      </dt>
                      <dd className="mt-1 text-sm text-slate-800">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </section>
              <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h2 className="font-display text-lg font-bold text-slate-900">
                  Segurança e cuidados
                </h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
                  {details.safety.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
              <ProductFaq items={productFaq} />
              <ProductReviews reviews={productReviews} />
            </div>
          </div>
          <ProductSidebar />
        </div>

        <section
          className="mt-10 hidden rounded-3xl border border-mint-100 bg-mint-50/50 p-6 md:block"
          aria-label="Resumo de compra"
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
              href="/contato"
              className={cn(buttonVariants({ variant: "primary" }), "shrink-0")}
            >
              Quero este produto
            </Link>
          </div>
        </section>
        <RelatedProducts products={relatedProducts} />
      </article>
    </>
  );
}
