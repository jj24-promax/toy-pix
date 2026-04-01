import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/atoms/Badge";
import { PriceTag } from "@/components/atoms/PriceTag";
import { products } from "@/data/products";

const featured = products.slice(0, 4);

export const FeaturedCarousel = () => (
  <section
    className="mx-auto max-w-6xl px-4 py-16 md:py-20"
    aria-labelledby="featured-heading"
  >
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <h2
          id="featured-heading"
          className="font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
        >
          Produtos em destaque
        </h2>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-600 md:text-base">
          Kits selecionados com entrega digital. Em telas menores, deslize para
          o lado para ver todos.
        </p>
        <p className="mt-2 flex items-center gap-1 text-sm font-medium text-primary md:hidden">
          <span aria-hidden>←</span>
          Deslize para ver mais
          <span aria-hidden>→</span>
        </p>
      </div>
      <Link
        href="/produto/kit-aventura-espacial"
        className="hidden shrink-0 text-sm font-semibold text-primary underline-offset-4 transition hover:underline md:inline-flex"
      >
        Ver página do destaque
      </Link>
    </div>

    <div className="relative mt-8 md:mt-10">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-background to-transparent md:w-12"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-background to-transparent md:w-12"
        aria-hidden
      />
      <div
        role="region"
        aria-roledescription="carrossel"
        aria-label="Lista horizontal de produtos em destaque"
        tabIndex={0}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 pl-1 pr-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        {featured.map((p) => (
          <Link
            key={p.id}
            href={`/produto/${p.slug}`}
            className="w-[min(85vw,300px)] shrink-0 snap-center overflow-hidden rounded-3xl border border-slate-100/80 bg-surface shadow-float transition duration-200 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
              <Image
                src={p.images[0].src}
                alt={p.images[0].alt}
                fill
                className="object-cover transition duration-300 hover:scale-[1.02]"
                sizes="(max-width:768px) 85vw, 300px"
              />
              {p.badge ? (
                <span className="absolute left-3 top-3">
                  <Badge txt={p.badge} />
                </span>
              ) : null}
            </div>
            <div className="p-4 md:p-5">
              <h3 className="font-display text-lg font-bold leading-snug text-slate-900">
                {p.name}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-600">
                {p.shortDescription}
              </p>
              <PriceTag amount={p.price} className="mt-3 block" size="lg" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);
