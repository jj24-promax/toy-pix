"use client";

import * as Tabs from "@radix-ui/react-tabs";
import Image from "next/image";

type Img = { src: string; alt: string };

export const ProductImageCarousel = ({ images }: { images: Img[] }) => (
  <Tabs.Root defaultValue="0" className="w-full">
    {images.map((img, i) => (
      <Tabs.Content
        key={img.src}
        value={String(i)}
        className="relative aspect-square w-full overflow-hidden rounded-3xl bg-mint-50 outline-none data-[state=inactive]:hidden"
      >
        <Image
          src={img.src}
          alt={img.alt}
          fill
          className="object-cover"
          sizes="(max-width:1024px) 100vw, 50vw"
          priority={i === 0}
        />
      </Tabs.Content>
    ))}
    <Tabs.List
      className="mt-3 flex gap-2 overflow-x-auto pb-1"
      aria-label="Miniaturas do produto"
    >
      {images.map((img, i) => (
        <Tabs.Trigger
          key={img.src}
          value={String(i)}
          className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl ring-offset-2 data-[state=active]:ring-2 data-[state=active]:ring-mint-500"
        >
          <Image
            src={img.src}
            alt=""
            fill
            className="object-cover"
            sizes="64px"
          />
        </Tabs.Trigger>
      ))}
    </Tabs.List>
  </Tabs.Root>
);
