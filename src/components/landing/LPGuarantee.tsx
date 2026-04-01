import { landing } from "@/data/landing";

export function LPGuarantee() {
  return (
    <section
      id="garantia"
      className="scroll-mt-20 border-t border-mint-100 bg-mint-50/50 py-16 md:py-20"
      aria-labelledby="guarantee-heading"
    >
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2
          id="guarantee-heading"
          className="font-display text-3xl font-bold text-slate-900 md:text-4xl"
        >
          {landing.guarantee.title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
          {landing.guarantee.body}
        </p>
        <ul className="mt-8 flex flex-col gap-3 text-left sm:mx-auto sm:max-w-md">
          {landing.guarantee.bullets.map((line) => (
            <li
              key={line}
              className="flex items-start gap-3 rounded-xl bg-white/80 px-4 py-3 text-sm font-medium text-slate-700 shadow-sm"
            >
              <span
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground"
                aria-hidden
              >
                ✓
              </span>
              {line}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
