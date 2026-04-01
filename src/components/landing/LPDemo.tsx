import Image from "next/image";
import type { Product } from "@/data/products";
import { landing } from "@/data/landing";

type Props = { product: Product };

export function LPDemo({ product }: Props) {
  const a = product.images[0];
  const b = product.images[2] ?? product.images[1];

  return (
    <section
      className="bg-slate-50 py-16 md:py-20"
      aria-labelledby="demo-heading"
    >
      <div className="mx-auto max-w-6xl px-4">
        <h2
          id="demo-heading"
          className="text-center font-display text-3xl font-bold text-slate-900 md:text-4xl"
        >
          {landing.demo.title}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600 md:text-lg">
          {landing.demo.subtitle}
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
          <figure className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="relative aspect-[4/3]">
              <Image
                src={a.src}
                alt={a.alt}
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 50vw"
              />
            </div>
            <figcaption className="border-t border-slate-100 px-4 py-3 text-center text-sm font-medium text-slate-600">
              {landing.demo.beforeCaption}
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="relative aspect-[4/3]">
              <Image
                src={b.src}
                alt={b.alt}
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 50vw"
              />
            </div>
            <figcaption className="border-t border-slate-100 px-4 py-3 text-center text-sm font-medium text-slate-600">
              {landing.demo.afterCaption}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
