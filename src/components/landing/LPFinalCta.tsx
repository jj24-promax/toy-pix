import Link from "next/link";
import type { Product } from "@/data/products";
import { landing } from "@/data/landing";
import { formatBRL } from "@/lib/format-price";

type Props = { product: Product };

export function LPFinalCta({ product }: Props) {
  return (
    <section
      className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-16 text-white md:py-20"
      aria-labelledby="final-cta-heading"
    >
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2
          id="final-cta-heading"
          className="font-display text-3xl font-extrabold md:text-4xl"
        >
          {landing.finalCta.headline}
        </h2>
        <p className="mt-4 text-lg text-white/85">{landing.finalCta.body}</p>
        <p className="mt-6 font-display text-3xl font-bold text-sun-400">
          R$ {formatBRL(product.price)}{" "}
          <span className="text-lg font-semibold text-white/70">oferta especial</span>
        </p>
        <Link
          href={`/produto/${product.slug}`}
          className="mt-8 inline-flex min-h-14 w-full max-w-md items-center justify-center rounded-full bg-sun-400 px-8 text-lg font-bold text-slate-900 shadow-float-sun transition hover:bg-sun-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 active:scale-[0.98]"
        >
          Quero este produto
        </Link>
        <p className="mt-4 text-xs text-white/50">
          Toy Pix · Loja de brinquedos físicos · Envio nacional
        </p>
      </div>
    </section>
  );
}
