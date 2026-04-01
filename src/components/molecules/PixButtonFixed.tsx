"use client";

import { cva } from "class-variance-authority";

const styles = cva(
  "fixed bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full px-6 py-3 shadow-lg md:hidden",
  {
    variants: {
      vibe: {
        hot: "bg-bubblegum-500 text-white shadow-float-pink animate-pulse-soft",
        calm: "bg-mint-500 text-white shadow-float",
      },
    },
    defaultVariants: { vibe: "hot" },
  }
);

interface Props {
  price: number;
  onClick: () => void;
  vibe?: "hot" | "calm";
}

export const PixButtonFixed = ({ price, onClick, vibe }: Props) => (
  <button type="button" onClick={onClick} className={styles({ vibe })}>
    <span className="text-sm font-semibold">Comprar agora</span>
    <span className="ml-1 font-bold">R$ {price.toFixed(2)} no Pix</span>
  </button>
);
