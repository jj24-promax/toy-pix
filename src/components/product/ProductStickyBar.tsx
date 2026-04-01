"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { buttonVariants } from "@/components/atoms/Button";
import { formatBRL } from "@/lib/format-price";
import { cn } from "@/lib/utils";

type Props = {
  price: number;
  productId: string;
  productName: string;
};

export const ProductStickyBar = ({ price, productId, productName }: Props) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed left-0 right-0 top-14 z-20 flex min-h-14 items-center justify-between gap-3 border-b border-mint-100 bg-white/95 px-4 py-2 shadow-sm backdrop-blur"
      role="region"
      aria-label="Resumo do produto e pagamento"
    >
      <p className="min-w-0 max-w-[50%] truncate text-xs font-semibold text-slate-800 sm:max-w-[55%] sm:text-sm">
        {productName}
      </p>
      <div className="flex shrink-0 items-center gap-3">
        <span className="tabular-nums text-xs font-bold text-primary sm:text-sm md:text-base">
          R$ {formatBRL(price)}
        </span>
        <Link
          href={`/checkout-pix?product=${productId}`}
          className={cn(
            buttonVariants({ variant: "primary" }),
            "min-h-11 px-4 text-xs sm:px-5 sm:text-sm"
          )}
        >
          Pagar com Pix
        </Link>
      </div>
    </div>
  );
};
