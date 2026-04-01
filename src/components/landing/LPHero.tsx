import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import { landing } from "@/data/landing";
import { buttonVariants } from "@/components/atoms/Button";
import { cn } from "@/lib/utils";
import { StarRow } from "@/components/landing/StarRow";
import { formatBRL } from "@/lib/format-price";

type Props = { product: Product };

export function LPHero({ product }: Props) {
  const main = product.images[0];
  const secondary = product.images[1];

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-mint-50 via-white to-white pb-12 pt-6 md:pb-16 md:pt-10"
      aria-labelledby="lp-hero-title"
    >
      <div className="pointer-events-none absolute -right-24 top-20 h-64 w-64 rounded-full bg-bubblegum-400/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-skyplay-400/20 blur-3xl" />

      <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2 md:items-center md:gap-12">
        <div className="order-2 md:order-1">
          {product.badge ? (
            <span className="mb-4 inline-block rounded-full bg-sun-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-900">
              {product.badge}
            </span>
          ) : null}
          <h1
            id="lp-hero-title"
            className="font-display text-balance text-3xl font-extrabold leading-[1.15] tracking-tight text-slate-900 md:text-4xl lg:text-5xl"
          >
            {landing.headline}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
            {landing.subheadline}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <StarRow rating={landing.ratingAverage} className="text-lg" />
            <span className="text-sm font-semibold text-slate-800">
              {landing.ratingAverage.toFixed(1)}
            </span>
            <span className="text-sm text-slate-500">
              · {landing.ratingCountLabel}
            </span>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={`/checkout-pix?product=${product.id}`}
              className={cn(
                buttonVariants({ variant: "primary" }),
                "min-h-14 w-full px-8 text-base sm:w-auto md:min-h-[3.5rem] md:text-lg"
              )}
            >
              Comprar agora — R$ {formatBRL(product.price)}
            </Link>
            <a
              href="#oferta"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "min-h-14 w-full text-base sm:w-auto"
              )}
            >
              Ver oferta completa
            </a>
          </div>

          <p className="mt-4 text-xs text-slate-500 md:text-sm">
            Pagamento via Pix · Compra confirmada por e-mail · Atendimento rápido
          </p>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative mx-auto max-w-md md:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white bg-white shadow-float ring-1 ring-slate-100">
              <Image
                src={main.src}
                alt={main.alt}
                fill
                priority
                className="object-cover"
                sizes="(max-width:768px) 100vw, 50vw"
              />
            </div>
            {secondary ? (
              <div className="absolute -bottom-4 -right-2 hidden w-[42%] overflow-hidden rounded-2xl border-4 border-white shadow-lg md:block">
                <div className="relative aspect-square">
                  <Image
                    src={secondary.src}
                    alt={secondary.alt}
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
