"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { buttonVariants } from "@/components/atoms/Button";
import { PriceTag } from "@/components/atoms/PriceTag";
import { StarRow } from "@/components/landing/StarRow";
import type { Product } from "@/data/products";
import { formatBRL } from "@/lib/format-price";
import { cn } from "@/lib/utils";

type Props = { product: Product };

export function CatalogProductCard({ product }: Props) {
  const [qty, setQty] = useState(1);
  const installment = formatBRL(product.price / 3);
  const seed = Number(product.id) || 1;
  const stockLeft = Math.max(3, 14 - seed);
  const viewersNow = 9 + seed * 3;
  const reviewsCount = 120 + seed * 37;
  const pctOff =
    product.compareAtPrice && product.compareAtPrice > product.price
      ? Math.round((1 - product.price / product.compareAtPrice) * 100)
      : null;

  const bump = (delta: number) => {
    setQty((q) => Math.min(10, Math.max(1, q + delta)));
  };

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-[0_10px_30px_-20px_rgba(15,23,42,0.45)] transition duration-300 hover:-translate-y-1 hover:scale-[1.015] hover:border-primary/40 hover:shadow-[0_24px_45px_-20px_rgba(20,184,150,0.45)]">
      <Link
        href={`/produto/${product.slug}`}
        className="relative block aspect-square bg-slate-50"
      >
        <Image
          src={product.images[0].src}
          alt={product.images[0].alt}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 280px"
        />
        <span className="absolute right-3 top-3 rounded-full bg-slate-900/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
          Mais vendido
        </span>
        {pctOff ? (
          <span className="absolute left-3 top-3 rounded-lg bg-bubblegum-600 px-2 py-1 text-xs font-bold text-white shadow-sm">
            −{pctOff}%
          </span>
        ) : null}
        {product.badge ? (
          <span className="absolute bottom-3 left-3 rounded-lg bg-primary/95 px-2 py-1 text-xs font-bold text-primary-foreground shadow-sm">
            {product.badge}
          </span>
        ) : null}
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-center justify-between gap-2">
          <div className="inline-flex items-center gap-2">
            <StarRow rating={product.rating} className="text-sm" />
            <span className="text-xs font-semibold text-slate-700">
              {product.rating.toFixed(1)} ({reviewsCount})
            </span>
          </div>
          <span className="rounded-full bg-bubblegum-50 px-2 py-1 text-[11px] font-bold text-bubblegum-700">
            Restam só {stockLeft}
          </span>
        </div>
        <h2 className="font-display text-base font-bold leading-snug text-slate-900">
          <Link
            href={`/produto/${product.slug}`}
            className="rounded-md hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            {product.name}
          </Link>
        </h2>

        <div className="mt-auto space-y-1">
          {product.compareAtPrice ? (
            <p className="text-sm tabular-nums text-slate-400 line-through">
              R$ {formatBRL(product.compareAtPrice)}
            </p>
          ) : null}
          <PriceTag amount={product.price} />
          <p className="text-xs text-slate-500">
            3x de R$ {installment} sem juros
          </p>
        </div>
        <p className="rounded-xl border border-sun-300/60 bg-sun-50 px-2.5 py-1.5 text-xs font-semibold text-slate-700">
          {viewersNow} pessoas vendo agora
        </p>

        <div className="flex flex-wrap items-stretch gap-2 pt-1">
          <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50/80">
            <button
              type="button"
              className="flex min-h-11 min-w-11 items-center justify-center rounded-l-xl text-lg font-bold text-slate-700 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
              onClick={() => bump(-1)}
              aria-label="Diminuir quantidade"
            >
              −
            </button>
            <span
              className="min-w-[2.25rem] select-none text-center text-sm font-bold tabular-nums text-slate-900"
              aria-live="polite"
            >
              {qty}
            </span>
            <button
              type="button"
              className="flex min-h-11 min-w-11 items-center justify-center rounded-r-xl text-lg font-bold text-slate-700 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
              onClick={() => bump(1)}
              aria-label="Aumentar quantidade"
            >
              +
            </button>
          </div>
          <Link
            href={`/produto/${product.slug}`}
            className={cn(
              buttonVariants({ variant: "primary" }),
              "min-h-11 flex-1 text-sm"
            )}
          >
            Ver detalhes
          </Link>
        </div>
      </div>
    </article>
  );
}
