"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { buttonVariants } from "@/components/atoms/Button";
import { PixButtonFixed } from "@/components/molecules/PixButtonFixed";
import { formatBRL } from "@/lib/format-price";
import { trackFbq, trackTikTok } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type Props = {
  price: number;
  productId: string;
};

export const HeroCta = ({ price, productId }: Props) => {
  const router = useRouter();

  const goCheckout = () => {
    trackFbq("InitiateCheckout", {
      content_ids: [productId],
      content_type: "product",
      value: price,
      currency: "BRL",
    });
    trackTikTok("InitiateCheckout", { value: price, currency: "BRL" });
    router.push(`/checkout-pix?product=${productId}`);
  };

  return (
    <div className="mt-8 flex w-full max-w-md flex-col items-stretch gap-3 sm:items-center">
      <PixButtonFixed price={price} onClick={goCheckout} />
      <Link
        href={`/checkout-pix?product=${productId}`}
        onClick={() => {
          trackFbq("AddToCart", {
            content_ids: [productId],
            content_type: "product",
            value: price,
            currency: "BRL",
          });
        }}
        className={cn(
          buttonVariants({ variant: "primary" }),
          "hidden w-full min-h-12 text-base shadow-float sm:w-auto md:inline-flex"
        )}
      >
        Comprar agora — R$ {formatBRL(price)} no Pix
      </Link>
    </div>
  );
};
