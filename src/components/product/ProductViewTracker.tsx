"use client";

import { useEffect } from "react";
import { trackFbq, trackTikTok } from "@/lib/analytics";

type Props = { productId: string; price: number; name: string };

export const ProductViewTracker = ({ productId, price, name }: Props) => {
  useEffect(() => {
    trackFbq("ViewContent", {
      content_ids: [productId],
      content_type: "product",
      value: price,
      currency: "BRL",
    });
    trackTikTok("ViewContent", {
      content_id: productId,
      value: price,
      currency: "BRL",
    });
  }, [productId, price, name]);

  return null;
};
