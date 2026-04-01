import Image from "next/image";
import { HeroCta } from "@/components/molecules/HeroCta";
import { HeroTrustStrip } from "@/components/molecules/HeroTrustStrip";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1600&q=80&auto=format&fit=crop";

export const Hero = () => (
  <section
    className="relative flex min-h-[min(70vh,640px)] items-center justify-center overflow-hidden bg-slate-900"
    aria-labelledby="hero-heading"
  >
    <div className="absolute inset-0 z-0">
      <Image
        src={HERO_IMAGE}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/45 to-slate-900/85"
        aria-hidden
      />
    </div>
    <div className="relative z-10 flex w-full max-w-4xl flex-col items-center px-4 py-16 text-center text-white md:py-20">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
        Toy Pix
      </p>
      <h1
        id="hero-heading"
        className="font-display text-balance text-4xl font-extrabold leading-tight drop-shadow-md md:text-6xl md:leading-[1.1]"
      >
        Brinquedos que brilham nos olhos das crianças
      </h1>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
        Entrega digital + Pix sem complicação. Escolha o kit e receba o voucher
        em minutos.
      </p>
      <HeroCta price={89.9} productId="1" />
      <HeroTrustStrip />
    </div>
  </section>
);
