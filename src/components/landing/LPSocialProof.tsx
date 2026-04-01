import Image from "next/image";
import type { Review } from "@/data/reviews";
import { landing } from "@/data/landing";
import { StarRow } from "@/components/landing/StarRow";

type Props = { reviews: Review[] };

export function LPSocialProof({ reviews }: Props) {
  return (
    <section
      className="border-y border-mint-100/80 bg-white py-14 md:py-16"
      aria-labelledby="social-proof-heading"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-primary">
            Prova social
          </p>
          <h2
            id="social-proof-heading"
            className="mt-2 font-display text-2xl font-bold text-slate-900 md:text-3xl"
          >
            Quem comprou, recomenda
          </h2>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-slate-600">
            <StarRow rating={landing.ratingAverage} />
            <span className="font-semibold text-slate-800">
              {landing.ratingAverage.toFixed(1)} / 5
            </span>
            <span className="hidden sm:inline">·</span>
            <span className="rounded-full bg-mint-50 px-3 py-1 text-sm font-bold text-mint-800">
              {landing.customersBadge} {landing.customersLine}
            </span>
          </div>
        </div>

        <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {reviews.map((r) => (
            <article
              key={r.author}
              className="w-[min(100%,340px)] shrink-0 snap-center rounded-2xl border border-slate-100 bg-mint-50/40 p-5 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={r.avatar}
                  alt=""
                  width={48}
                  height={48}
                  className="rounded-full object-cover ring-2 ring-white"
                />
                <div>
                  <p className="font-bold text-slate-900">{r.author}</p>
                  <StarRow rating={r.rating} className="text-sm" />
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                “{r.text}”
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
