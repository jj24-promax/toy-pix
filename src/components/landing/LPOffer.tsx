import Link from "next/link";
import type { Product } from "@/data/products";
import { landing } from "@/data/landing";
import { buttonVariants } from "@/components/atoms/Button";
import { CountdownTimer } from "@/components/sections/CountdownTimer";
import { formatBRL } from "@/lib/format-price";
import { cn } from "@/lib/utils";

type Props = { product: Product };

export function LPOffer({ product }: Props) {
  return (
    <section
      id="oferta"
      className="scroll-mt-20 bg-gradient-to-br from-primary/10 via-white to-bubblegum-400/10 py-16 md:py-20"
      aria-labelledby="offer-heading"
    >
      <div className="mx-auto max-w-3xl px-4 text-center">
        <span className="inline-block rounded-full bg-primary/15 px-4 py-1 text-xs font-bold uppercase tracking-wide text-primary">
          {landing.offerBadge}
        </span>
        <h2
          id="offer-heading"
          className="mt-4 font-display text-3xl font-extrabold text-slate-900 md:text-4xl"
        >
          {product.name}
        </h2>
        <p className="mt-2 text-slate-600">{product.shortDescription}</p>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-float md:p-8">
          <div className="flex flex-col items-center gap-1">
            <p className="text-sm font-medium text-slate-500">De</p>
            <p className="text-xl text-slate-400 line-through">
              R$ {formatBRL(landing.compareAt)}
            </p>
            <p className="text-sm font-medium text-slate-500">Por apenas</p>
            <p className="font-display text-4xl font-extrabold text-primary md:text-5xl">
              R$ {formatBRL(product.price)}
            </p>
            <p className="text-sm font-semibold text-slate-700">oferta em destaque</p>
          </div>

          <div className="mt-6 rounded-2xl border border-amber-200/80 bg-amber-50/80 px-4 py-3 text-sm text-amber-950">
            <p className="font-bold">{landing.scarcityHeadline}</p>
            <p className="mt-1 text-amber-900/90">{landing.scarcityBody}</p>
          </div>

          <div className="mt-6 flex flex-col items-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Tempo restante nesta página
            </p>
            <CountdownTimer className="mt-3" />
          </div>

          <Link
            href={`/produto/${product.slug}`}
            className={cn(
              buttonVariants({ variant: "primary" }),
              "mt-8 w-full min-h-14 text-lg"
            )}
          >
            Ver detalhes do produto
          </Link>
          <p className="mt-3 text-xs text-slate-500">
            A finalização de compra será liberada em breve.
          </p>
        </div>
      </div>
    </section>
  );
}
