const items = [
  {
    title: "Frete zero na entrega digital",
    body: "Voucher e instruções chegam na hora — sem esperar transportadora.",
    icon: (
      <svg
        className="h-14 w-14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden
      >
        <path d="M3 7h11v10H3zM14 10h4l3 3v4h-7V10z" />
        <circle cx="7.5" cy="18.5" r="1.5" />
        <circle cx="17.5" cy="18.5" r="1.5" />
      </svg>
    ),
  },
  {
    title: "Garantia de sorriso",
    body: "Troca facilitada em até 7 dias em produtos com lacre intacto.",
    icon: (
      <svg
        className="h-14 w-14"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
      >
        <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7L12 17.8 5.7 21l2.3-7-6-4.6h7.6z" />
      </svg>
    ),
  },
  {
    title: "Troca em 36h úteis",
    body: "Canal direto com nosso time — resposta em até um dia e meio.",
    icon: (
      <svg
        className="h-14 w-14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden
      >
        <path d="M4 4h16v4H4zM4 10h10v10H4zM16 10h4v4h-4z" />
      </svg>
    ),
  },
];

export const Benefits = () => (
  <section
    className="mx-auto max-w-6xl px-4 py-16 md:py-20"
    aria-labelledby="benefits-heading"
  >
    <h2
      id="benefits-heading"
      className="font-display text-center text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
    >
      Por que as famílias confiam
    </h2>
    <div className="mt-10 grid gap-8 md:grid-cols-3 md:gap-10">
      {items.map((item, i) => (
        <article
          key={item.title}
          className="flex flex-col items-center rounded-3xl bg-surface p-8 text-center shadow-float"
        >
          <div
            className="mb-4 text-mint-500 motion-safe:animate-float"
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            {item.icon}
          </div>
          <h3 className="font-display text-xl font-bold text-slate-800">
            {item.title}
          </h3>
          <p className="mt-2 text-slate-600">{item.body}</p>
        </article>
      ))}
    </div>
  </section>
);
