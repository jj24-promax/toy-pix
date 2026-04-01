import Image from "next/image";
import { homeReviews } from "@/data/reviews";

function Stars({ n }: { n: number }) {
  return (
    <span className="text-sun-500" aria-label={`${n} de 5 estrelas`}>
      {"★".repeat(n)}
      <span className="text-slate-300">{"★".repeat(5 - n)}</span>
    </span>
  );
}

export const SocialProof = () => (
  <section
    className="border-y border-mint-100 bg-mint-50/80 py-14 md:py-16"
    aria-labelledby="reviews-heading"
  >
    <div className="mx-auto max-w-6xl px-4">
      <h2
        id="reviews-heading"
        className="font-display text-center text-2xl font-bold tracking-tight text-slate-900 md:text-3xl"
      >
        Quem já levou alegria pra casa
      </h2>
      <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {homeReviews.map((r) => (
          <article
            key={r.author}
            className="w-[min(100%,320px)] shrink-0 snap-center rounded-2xl bg-white p-5 shadow-float"
          >
            <div className="flex items-center gap-3">
              <Image
                src={r.avatar}
                alt=""
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
              <div>
                <p className="font-bold text-slate-800">{r.author}</p>
                <Stars n={r.rating} />
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {r.text}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
