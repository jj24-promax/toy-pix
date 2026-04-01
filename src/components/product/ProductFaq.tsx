import type { ProductFaqItem } from "@/data/product-content";

export function ProductFaq({ items }: { items: ProductFaqItem[] }) {
  if (items.length === 0) return null;
  return (
    <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="font-display text-xl font-bold text-slate-900">
        Dúvidas sobre este produto
      </h2>
      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <details
            key={item.question}
            className="rounded-xl border border-slate-200 bg-slate-50/60 p-4"
          >
            <summary className="cursor-pointer list-none font-semibold text-slate-900 marker:content-none [&::-webkit-details-marker]:hidden">
              {item.question}
            </summary>
            <p className="mt-2 text-sm text-slate-600">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
