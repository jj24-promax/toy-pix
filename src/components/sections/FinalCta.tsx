import Link from "next/link";
import { CountdownTimer } from "@/components/sections/CountdownTimer";

export const FinalCta = () => (
  <section className="relative overflow-hidden bg-gradient-to-r from-bubblegum-500 via-lilac-500 to-skyplay-400 py-16 text-white">
    <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
    <div className="pointer-events-none absolute -right-10 bottom-0 h-48 w-48 rounded-full bg-sun-400/30 blur-2xl" />
    <div className="relative mx-auto max-w-3xl px-4 text-center">
      <h2 className="font-display text-3xl font-extrabold drop-shadow md:text-4xl">
        Oferta relâmpago Pix
      </h2>
      <p className="mt-3 text-lg opacity-95">
        Garanta o voucher digital antes do timer zerar — estoque simbólico para
        criar urgência saudável.
      </p>
      <CountdownTimer />
      <Link
        href="/checkout-pix?product=1"
        className="mt-8 inline-flex rounded-full bg-white px-10 py-4 font-display text-lg font-bold text-bubblegum-600 shadow-float-sun transition hover:scale-[1.02]"
      >
        Quero pagar com Pix
      </Link>
    </div>
  </section>
);
