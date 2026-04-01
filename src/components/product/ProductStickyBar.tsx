"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

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
    <div className="fixed left-0 right-0 top-14 z-20 flex h-[50px] items-center justify-between border-b border-mint-100 bg-white/95 px-4 shadow-sm backdrop-blur">
      <p className="max-w-[45%] truncate text-xs font-semibold text-slate-800 sm:max-w-[55%] sm:text-sm">
        {productName}
      </p>
      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
        <span className="text-sm font-bold text-mint-700 sm:text-base">
          R$ {price.toFixed(2)}
        </span>
        <Link
          href={`/checkout-pix?product=${productId}`}
          className="rounded-full bg-bubblegum-500 px-3 py-1.5 text-xs font-bold text-white shadow-float-pink sm:px-4 sm:py-2 sm:text-sm"
        >
          Pix
        </Link>
      </div>
    </div>
  );
};
