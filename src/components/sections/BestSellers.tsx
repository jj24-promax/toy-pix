import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/atoms/Badge";
import { PriceTag } from "@/components/atoms/PriceTag";
import { products } from "@/data/products";

export const BestSellers = () => (
  <section
    className="border-t border-mint-100/60 bg-white py-16 md:py-20"
    aria-labelledby="bestsellers-heading"
  >
    <div className="mx-auto max-w-6xl px-4">
      <div className="mx-auto max-w-2xl text-center">
        <h2
          id="bestsellers-heading"
          className="font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
        >
          Mais vendidos
        </h2>
        <p className="mt-3 text-sm text-slate-600 md:text-base">
          Os favoritos das famílias — toque no card para ver detalhes e comprar
          com Pix.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:mt-12 md:grid-cols-4 md:gap-6">
        {products.map((p) => (
          <Link
            key={p.id}
            href={`/produto/${p.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-mint-100 bg-mint-50/30 shadow-sm transition duration-200 hover:border-primary/25 hover:shadow-float focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <div className="relative aspect-square w-full overflow-hidden bg-slate-100">
              <Image
                src={p.images[0].src}
                alt={p.images[0].alt}
                fill
                className="object-cover transition duration-300 group-hover:scale-[1.04]"
                sizes="(max-width:640px) 50vw, 25vw"
              />
              {p.badge ? (
                <span className="absolute left-2 top-2 md:left-3 md:top-3">
                  <Badge txt={p.badge} color="mint" />
                </span>
              ) : null}
            </div>
            <div className="flex flex-1 flex-col p-3 md:p-4">
              <h3 className="line-clamp-2 min-h-[2.5rem] font-display text-base font-bold leading-snug text-slate-900 md:min-h-0 md:text-lg">
                {p.name}
              </h3>
              <PriceTag
                amount={p.price}
                className="mt-auto pt-2 text-sm md:text-base"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);
