"use client";

import { cva } from "class-variance-authority";
import { formatBRL } from "@/lib/format-price";

const styles = cva(
  "fixed bottom-4 left-1/2 z-20 flex min-h-11 max-w-[calc(100vw-2rem)] -translate-x-1/2 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-primary-foreground shadow-float transition hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-[0.98] md:hidden",
  {
    variants: {
      vibe: {
        hot: "animate-pulse-soft",
        calm: "",
      },
    },
    defaultVariants: { vibe: "hot" },
  }
);

interface Props {
  price: number;
  onClick: () => void;
  /** `hot` mantém pulso suave para destaque na primeira dobra. */
  vibe?: "hot" | "calm";
}

export const PixButtonFixed = ({ price, onClick, vibe }: Props) => (
  <button type="button" onClick={onClick} className={styles({ vibe })}>
    <span className="text-sm font-semibold">Comprar agora</span>
    <span className="font-bold tabular-nums">R$ {formatBRL(price)} no Pix</span>
  </button>
);
