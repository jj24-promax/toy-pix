"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { buttonVariants } from "@/components/atoms/Button";
import { CountdownTimer } from "@/components/sections/CountdownTimer";
import { oceanOffer } from "@/data/ocean-offer";
import { formatBRL } from "@/lib/format-price";
import { cn } from "@/lib/utils";

function Stars({ rating }: { rating: number }) {
  const rounded = Math.round(rating);
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`${rating} de 5 estrelas`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <span key={i} className={i < rounded ? "text-sun-500" : "text-slate-200"}>
          ★
        </span>
      ))}
    </span>
  );
}

export function OceanOfferPage() {
  const [activeImage, setActiveImage] = useState(0);
  const featured = oceanOffer.gallery[activeImage] ?? oceanOffer.gallery[0];
  const flagshipId = "1";

  const kits = useMemo(
    () =>
      oceanOffer.kits.map((k) => ({
        ...k,
        save: Math.max(0, k.oldPrice - k.price),
      })),
    []
  );

  return (
    <div className="bg-background">
      <section id="inicio" className="mx-auto max-w-6xl px-4 pb-14 pt-8 md:pb-20 md:pt-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <article>
            <span className="inline-flex rounded-full bg-sun-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-900">
              Oferta de hoje
            </span>
            <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight text-slate-900 md:text-5xl">
              {oceanOffer.hero.headline}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              {oceanOffer.hero.subheadline}
            </p>
            <ul className="mt-5 space-y-2 text-sm font-semibold text-slate-700 md:text-base">
              {oceanOffer.hero.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span aria-hidden className="text-primary">✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm">
                <Stars rating={4.8} />
                <span className="font-semibold text-slate-800">{oceanOffer.hero.ratingLabel}</span>
              </div>
              <span className="rounded-full bg-primary/10 px-3 py-1.5 text-sm font-bold text-primary">
                {oceanOffer.hero.socialProof}
              </span>
            </div>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Oferta termina em
              </p>
              <CountdownTimer className="mt-2" />
            </div>

            <a
              href="#kits"
              className={cn(buttonVariants({ variant: "primary" }), "mt-7 min-h-14 px-8 text-base")}
            >
              Ver kits e preços
            </a>
            <p className="mt-3 text-xs text-slate-500">{oceanOffer.hero.trustLine}</p>
          </article>

          <article aria-label="Galeria do produto">
            <div className="group relative aspect-square overflow-hidden rounded-3xl border border-white bg-white shadow-float ring-1 ring-slate-100">
              <Image
                src={featured.src}
                alt={featured.alt}
                fill
                priority
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width:1024px) 100vw, 520px"
              />
            </div>
            <div className="mt-3 grid grid-cols-4 gap-2">
              {oceanOffer.gallery.map((g, idx) => (
                <button
                  key={g.alt + g.tag}
                  type="button"
                  onClick={() => setActiveImage(idx)}
                  className={cn(
                    "overflow-hidden rounded-xl border bg-white text-left shadow-sm transition hover:-translate-y-0.5",
                    idx === activeImage ? "border-primary ring-2 ring-primary/30" : "border-slate-200"
                  )}
                >
                  <div className="relative aspect-square">
                    <Image src={g.src} alt={g.alt} fill className="object-cover" sizes="120px" />
                  </div>
                  <p className="px-2 py-1 text-[11px] font-bold uppercase tracking-wide text-slate-600">
                    {g.tag}
                  </p>
                </button>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section id="kits" className="scroll-mt-28 bg-gradient-to-b from-primary/10 to-white py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center font-display text-3xl font-bold text-slate-900 md:text-4xl">
            Kits e preços
          </h2>
          <p className="mt-2 text-center text-sm font-bold text-primary md:text-base">
            {oceanOffer.kitsNotice}
          </p>
          <p className="mt-1 text-center text-sm font-semibold text-red-600">{oceanOffer.urgency}</p>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {kits.map((k) => (
              <article
                key={k.id}
                className={cn(
                  "relative rounded-3xl border bg-white p-6 shadow-sm",
                  k.badge ? "border-primary shadow-float ring-2 ring-primary/20" : "border-slate-200"
                )}
              >
                {k.badge ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                    {k.badge}
                  </span>
                ) : null}
                <h3 className="font-display text-2xl font-bold text-slate-900">{k.title}</h3>
                <p className="mt-1 text-sm font-semibold text-slate-600">{k.quantity} bombas</p>
                <p className="mt-2 text-sm text-slate-500">{k.useCase}</p>
                <p className="mt-5 text-sm text-slate-400 line-through">R$ {formatBRL(k.oldPrice)}</p>
                <p className="font-display text-4xl font-extrabold text-primary">R$ {formatBRL(k.price)}</p>
                <p className="mt-1 text-xs font-semibold text-emerald-700">
                  Economize R$ {formatBRL(k.save)}
                </p>
                <Link
                  href={`/checkout-pix?product=${flagshipId}&qty=${Math.floor(k.quantity / 12)}`}
                  className={cn(buttonVariants({ variant: "primary" }), "mt-5 w-full")}
                >
                  {k.cta}
                </Link>
              </article>
            ))}
          </div>

          <aside className="mt-6 rounded-2xl border border-sun-300/70 bg-sun-50 p-4">
            <p className="text-sm font-bold text-slate-800">{oceanOffer.bonus.title}</p>
            <ul className="mt-2 space-y-1 text-sm text-slate-700">
              {oceanOffer.bonus.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 md:py-20" aria-labelledby="demo-heading">
        <h2 id="demo-heading" className="text-center font-display text-3xl font-bold text-slate-900 md:text-4xl">
          Veja a mágica acontecer
        </h2>
        <div className="mt-8 grid gap-3 md:grid-cols-3">
          {oceanOffer.demoMedia.map((media) => (
            <div key={media.src} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={media.src} alt={media.alt} className="h-72 w-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-14 text-white md:py-20">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 md:grid-cols-3">
          {oceanOffer.benefits.map((b) => (
            <article key={b.title} className="rounded-2xl border border-white/15 bg-white/10 p-5">
              <p className="text-2xl" aria-hidden>{b.icon}</p>
              <h3 className="mt-2 font-display text-xl font-bold">{b.title}</h3>
              <p className="mt-2 text-sm text-slate-200">{b.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="avaliacoes" className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <h2 className="text-center font-display text-3xl font-bold text-slate-900 md:text-4xl">
          Avaliações de famílias reais
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {oceanOffer.reviews.map((r) => (
            <article key={r.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <Image src={r.avatar} alt="" width={44} height={44} className="h-11 w-11 rounded-full" />
                <div>
                  <p className="text-sm font-bold text-slate-900">{r.name}</p>
                  <p className="text-xs text-slate-500">{r.city}</p>
                </div>
              </div>
              <div className="mt-3"><Stars rating={r.rating} /></div>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">“{r.text}”</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contato" className="bg-gradient-to-br from-mint-50 to-white py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="font-display text-3xl font-bold text-slate-900 md:text-4xl">Compra sem risco</h2>
            <div className="mt-6 grid gap-3 text-sm font-semibold text-slate-700 md:grid-cols-3">
              {[
                "30 dias de garantia",
                "Devolução fácil",
                "Compra segura",
                "Frete grátis",
                "Entrega rastreada",
                "Produto certificado",
              ].map((item) => (
                <p key={item} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-4 py-14 md:py-20">
        <h2 className="text-center font-display text-3xl font-bold text-slate-900 md:text-4xl">
          Dúvidas frequentes
        </h2>
        <div className="mt-8 space-y-3">
          {oceanOffer.faq.map((item) => (
            <details key={item.q} className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <summary className="cursor-pointer list-none font-semibold text-slate-900 marker:content-none [&::-webkit-details-marker]:hidden">
                {item.q}
              </summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-14 text-white md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-display text-3xl font-extrabold md:text-4xl">
            {oceanOffer.finalCta.headline}
          </h2>
          <p className="mt-3 text-sm text-slate-200 md:text-base">{oceanOffer.finalCta.trust}</p>
          <a
            href="#kits"
            className={cn(buttonVariants({ variant: "primary" }), "mt-7 min-h-14 px-8 text-base")}
          >
            {oceanOffer.finalCta.button}
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <nav className="flex flex-wrap gap-3">
            <a href="#inicio" className="hover:text-primary">Início</a>
            <a href="#kits" className="hover:text-primary">Kits</a>
            <a href="#avaliacoes" className="hover:text-primary">Avaliações</a>
            <a href="#faq" className="hover:text-primary">FAQ</a>
            <a href="#contato" className="hover:text-primary">Contato</a>
          </nav>
          <div className="space-y-1 text-xs text-slate-500">
            <p>Contato: suporte@seusite.com.br</p>
            <p>Política de Privacidade · Termos de Uso</p>
          </div>
        </div>
      </footer>

      <a
        href="#kits"
        className={cn(
          buttonVariants({ variant: "primary" }),
          "fixed bottom-4 left-4 right-4 z-40 min-h-12 text-base shadow-float md:hidden"
        )}
      >
        Comprar agora
      </a>
    </div>
  );
}
