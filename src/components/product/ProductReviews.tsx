import Image from "next/image";
import type { Review } from "@/data/reviews";

function Stars({ n }: { n: number }) {
  return (
    <span className="text-sun-500" aria-label={`${n} de 5 estrelas`}>
      {"★".repeat(n)}
      <span className="text-slate-300">{"★".repeat(5 - n)}</span>
    </span>
  );
}

export const ProductReviews = ({ reviews }: { reviews: Review[] }) => (
  <section className="mt-12 rounded-3xl border border-mint-100 bg-white p-6 shadow-sm">
    <h2 className="font-display text-xl font-bold text-slate-900">
      Avaliações deste produto
    </h2>
    <ul className="mt-4 space-y-4">
      {reviews.map((r) => (
        <li
          key={r.id}
          className="flex gap-3 border-b border-slate-100 pb-4 last:border-0 last:pb-0"
        >
          <Image
            src={r.avatar}
            alt=""
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-slate-800">{r.author}</p>
            {r.location ? (
              <p className="text-xs text-slate-500">{r.location}</p>
            ) : null}
            <Stars n={r.rating} />
            <p className="mt-1 text-sm text-slate-600">{r.text}</p>
          </div>
        </li>
      ))}
    </ul>
  </section>
);
