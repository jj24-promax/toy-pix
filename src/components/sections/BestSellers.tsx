import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { Badge } from "@/components/atoms/Badge";

export const BestSellers = () => (
  <section className="bg-white py-14">
    <div className="mx-auto max-w-6xl px-4">
      <h2 className="font-display text-center text-3xl font-bold text-slate-900">
        Mais vendidos
      </h2>
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {products.map((p) => (
          <Link
            key={p.id}
            href={`/produto/${p.slug}`}
            className="group overflow-hidden rounded-2xl border border-mint-100 bg-mint-50/40 shadow-sm transition hover:shadow-float"
          >
            <div className="relative aspect-square w-full">
              <Image
                src={p.images[0].src}
                alt={p.images[0].alt}
                fill
                className="object-cover transition group-hover:scale-[1.03]"
                sizes="(max-width:768px) 50vw, 25vw"
              />
              {p.badge ? (
                <span className="absolute left-2 top-2">
                  <Badge txt={p.badge} color="mint" />
                </span>
              ) : null}
            </div>
            <div className="p-3">
              <h3 className="line-clamp-2 font-display text-sm font-bold text-slate-900 md:text-base">
                {p.name}
              </h3>
              <p className="mt-1 font-bold text-bubblegum-600">
                R$ {p.price.toFixed(2)}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);
