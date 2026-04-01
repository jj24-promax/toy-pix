import { formatBRL } from "@/lib/format-price";
import { cn } from "@/lib/utils";

type Props = {
  amount: number;
  className?: string;
  size?: "md" | "lg";
};

export const PriceTag = ({ amount, className, size = "md" }: Props) => (
  <span
    className={cn(
      "font-bold tabular-nums text-primary",
      size === "lg" ? "text-2xl" : "text-base",
      className
    )}
    aria-label={`Preço: ${formatBRL(amount)} reais`}
  >
    R$ {formatBRL(amount)}
  </span>
);
