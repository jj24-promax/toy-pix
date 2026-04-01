export const ProductSidebar = () => (
  <aside className="hidden space-y-4 lg:block" aria-label="Informações de compra">
    <div className="rounded-2xl border border-mint-100 bg-mint-50/60 p-5 shadow-sm">
      <h3 className="font-display font-bold text-slate-900">Garantia</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        7 dias para solicitar troca com lacre original. Atendimento humano em
        horário comercial.
      </p>
    </div>
    <div className="rounded-2xl border border-skyplay-400/30 bg-sky-50/80 p-5 shadow-sm">
      <h3 className="font-display font-bold text-slate-900">
        Entrega digital
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        Após a confirmação do Pix você recebe o voucher e as instruções para
        retirada na loja credenciada — sem frete físico da nossa parte.
      </p>
    </div>
    <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5 shadow-sm">
      <h3 className="font-display font-bold text-slate-900">Pix em 3 passos</h3>
      <ol className="mt-3 list-decimal space-y-2 pl-4 text-sm leading-relaxed text-slate-600">
        <li>Finalize o pedido na página de checkout.</li>
        <li>Pague com QR Code ou Pix copia e cola.</li>
        <li>Receba o voucher digital assim que o pagamento for confirmado.</li>
      </ol>
    </div>
  </aside>
);
