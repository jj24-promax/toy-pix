import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/atoms/Button";
import { PriceTag } from "@/components/atoms/PriceTag";
import type { Product } from "@/data/products";
import { cn } from "@/lib/utils";

export function RelatedProducts({ products }: { products: Product[] }) {
  if (products.length === 0) return null;
  return (
    <section className="mt-10">
      <h2 className="font-display text-2xl font-bold text-slate-900">
        Produtos relacionados
      </h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <article
            key={product.id}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
          >
            <Link href={`/produto/${product.slug}`} className="relative block aspect-square">
              <Image
                src={product.images[0].src}
                alt={product.images[0].alt}
                fill
                className="object-cover"
                sizes="280px"
              />
            </Link>
            <div className="p-4">
              <h3 className="font-semibold text-slate-900">{product.name}</h3>
              <PriceTag amount={product.price} className="mt-2 block" />
              <Link
                href={`/produto/${product.slug}`}
                className={cn(buttonVariants({ variant: "outline" }), "mt-3 w-full")}
              >
                Ver detalhes
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
