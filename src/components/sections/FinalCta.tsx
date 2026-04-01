import Link from "next/link";
import { CountdownTimer } from "@/components/sections/CountdownTimer";

export const FinalCta = () => (
  <section
    className="relative overflow-hidden bg-gradient-to-r from-primary via-mint-500 to-skyplay-600 py-16 text-white md:py-20"
    aria-labelledby="final-cta-heading"
  >
    <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
    <div className="pointer-events-none absolute -right-10 bottom-0 h-48 w-48 rounded-full bg-sun-400/25 blur-2xl" />
    <div className="relative mx-auto max-w-3xl px-4 text-center">
      <h2
        id="final-cta-heading"
        className="font-display text-3xl font-extrabold leading-tight drop-shadow md:text-4xl"
      >
        Oferta relâmpago no Pix
      </h2>
      <p className="mt-4 text-base leading-relaxed text-white/95 md:text-lg">
        Garanta seu voucher digital enquanto o timer estiver ativo. Pagamento
        instantâneo e confirmação em minutos.
      </p>
      <CountdownTimer />
      <Link
        href="/checkout-pix?product=1"
        className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-8 text-base font-bold text-primary shadow-float transition hover:bg-white/95 hover:text-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:scale-[0.98]"
      >
        Quero pagar com Pix
      </Link>
    </div>
  </section>
);
