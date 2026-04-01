import { landing } from "@/data/landing";
import { LPBenefitIcon } from "@/components/landing/LPBenefitIcon";

export function LPBenefits() {
  return (
    <section
      className="mx-auto max-w-6xl px-4 py-16 md:py-20"
      aria-labelledby="benefits-heading"
    >
      <h2
        id="benefits-heading"
        className="text-center font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
      >
        Por que esse kit faz diferença
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600 md:text-lg">
        Benefícios claros — sem promessa vazia. Foco no que importa para você e
        para a criança.
      </p>
      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {landing.benefits.map((b) => (
          <li
            key={b.title}
            className="flex gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:border-primary/20 hover:shadow-md"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <LPBenefitIcon name={b.icon} className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-slate-900">
                {b.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {b.body}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
