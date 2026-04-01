"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Product } from "@/data/products";
import { buttonVariants } from "@/components/atoms/Button";
import { formatBRL } from "@/lib/format-price";
import { cn } from "@/lib/utils";

type Props = { product: Product };

export function LandingStickyCta({ product }: Props) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = document.getElementById("oferta");
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { root: null, threshold: 0.12, rootMargin: "-80px 0px 0px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200/80 bg-white/95 p-3 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] backdrop-blur-md md:hidden"
      style={{ paddingBottom: "max(12px, env(safe-area-inset-bottom))" }}
      role="region"
      aria-label="Comprar produto"
    >
      <div className="mx-auto flex max-w-lg items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="truncate text-xs font-semibold text-slate-800">
            {product.name}
          </p>
          <p className="text-sm font-bold tabular-nums text-primary">
            R$ {formatBRL(product.price)}
          </p>
        </div>
        <Link
          href={`/checkout-pix?product=${product.id}`}
          className={cn(
            buttonVariants({ variant: "primary" }),
            "min-h-12 shrink-0 px-5 text-sm"
          )}
        >
          Comprar
        </Link>
      </div>
    </div>
  );
}
