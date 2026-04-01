import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { Badge } from "@/components/atoms/Badge";

const featured = products.slice(0, 4);

export const FeaturedCarousel = () => (
  <section className="mx-auto max-w-6xl px-4 py-14">
    <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
      <div>
        <h2 className="font-display text-3xl font-bold text-slate-900">
          Produto em destaque
        </h2>
        <p className="mt-1 text-slate-600">Deslize para ver as novidades</p>
      </div>
    </div>
    <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {featured.map((p) => (
        <Link
          key={p.id}
          href={`/produto/${p.slug}`}
          className="w-[min(85vw,280px)] shrink-0 snap-center overflow-hidden rounded-3xl bg-white shadow-float transition hover:-translate-y-1"
        >
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={p.images[0].src}
              alt={p.images[0].alt}
              fill
              className="object-cover"
              sizes="280px"
            />
            {p.badge ? (
              <span className="absolute left-3 top-3">
                <Badge txt={p.badge} />
              </span>
            ) : null}
          </div>
          <div className="p-4">
            <h3 className="font-display font-bold text-slate-900">{p.name}</h3>
            <p className="mt-1 line-clamp-2 text-sm text-slate-600">
              {p.shortDescription}
            </p>
            <p className="mt-2 font-bold text-mint-700">
              R$ {p.price.toFixed(2)}
            </p>
          </div>
        </Link>
      ))}
    </div>
  </section>
);
