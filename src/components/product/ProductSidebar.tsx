export const ProductSidebar = () => (
  <aside className="hidden space-y-4 lg:block">
    <div className="rounded-2xl border border-mint-100 bg-mint-50/60 p-5 shadow-sm">
      <h3 className="font-display font-bold text-slate-900">Garantia</h3>
      <p className="mt-2 text-sm text-slate-600">
        7 dias para solicitar troca com lacre original. Atendimento humano em
        horário comercial.
      </p>
    </div>
    <div className="rounded-2xl border border-skyplay-400/30 bg-sky-50/80 p-5 shadow-sm">
      <h3 className="font-display font-bold text-slate-900">
        Entrega digital
      </h3>
      <p className="mt-2 text-sm text-slate-600">
        Após confirmação do Pix você recebe o voucher e o QR para retirada em
        loja credenciada — sem frete físico da nossa parte.
      </p>
    </div>
    <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-5 text-center">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        QR Pix (placeholder)
      </p>
      <div className="mx-auto mt-3 flex h-28 w-28 items-center justify-center rounded-lg bg-slate-100 text-2xl text-slate-400">
        ▣
      </div>
      <p className="mt-2 text-xs text-slate-500">
        Troque pelo código gerado no checkout.
      </p>
    </div>
  </aside>
);
