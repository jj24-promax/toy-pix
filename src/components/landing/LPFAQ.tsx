import { landing } from "@/data/landing";

export function LPFAQ() {
  return (
    <section
      id="faq"
      className="mx-auto max-w-3xl scroll-mt-20 px-4 py-16 md:py-20"
      aria-labelledby="faq-heading"
    >
      <h2
        id="faq-heading"
        className="text-center font-display text-3xl font-bold text-slate-900 md:text-4xl"
      >
        Dúvidas frequentes
      </h2>
      <p className="mt-3 text-center text-slate-600">
        Respostas diretas — se ainda tiver dúvida, fale com nosso time após o
        pedido.
      </p>
      <div className="mt-10 space-y-3">
        {landing.faq.map((item) => (
          <details
            key={item.question}
            className="group rounded-2xl border border-slate-200 bg-white px-4 py-1 shadow-sm open:shadow-md"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-display text-base font-bold text-slate-900 marker:content-none [&::-webkit-details-marker]:hidden">
              {item.question}
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition group-open:rotate-45"
                aria-hidden
              >
                +
              </span>
            </summary>
            <p className="border-t border-slate-100 pb-4 pt-2 text-sm leading-relaxed text-slate-600">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
