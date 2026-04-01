import { landing } from "@/data/landing";

export function LPHowItWorks() {
  return (
    <section
      className="mx-auto max-w-6xl px-4 py-16 md:py-20"
      aria-labelledby="how-heading"
    >
      <h2
        id="how-heading"
        className="text-center font-display text-3xl font-bold text-slate-900 md:text-4xl"
      >
        Como funciona — em 3 passos
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-slate-600">
        Modelo simples: você compra online, paga com Pix e recebe a confirmação
        do pedido. Sem mistério.
      </p>
      <ol className="mt-12 grid gap-6 md:grid-cols-3">
        {landing.howItWorks.map((step, i) => (
          <li
            key={step.title}
            className="relative rounded-2xl border border-slate-100 bg-white p-6 pt-10 shadow-sm"
          >
            <span className="absolute left-6 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              {i + 1}
            </span>
            <h3 className="font-display text-lg font-bold text-slate-900">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {step.body}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
