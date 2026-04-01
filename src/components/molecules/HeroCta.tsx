"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { PixButtonFixed } from "@/components/molecules/PixButtonFixed";
import { trackFbq, trackTikTok } from "@/lib/analytics";

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
    <div className="mt-8 flex min-h-[3.5rem] flex-col items-center justify-center gap-4 space-y-2">
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
        className="hidden rounded-full bg-white/95 px-8 py-3 text-base font-bold text-slate-900 shadow-float-sun transition hover:bg-sun-300 md:inline-flex"
      >
        Comprar agora — R$ {price.toFixed(2)} no Pix
      </Link>
    </div>
  );
};
