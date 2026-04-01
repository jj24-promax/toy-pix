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
      <h3 className="font-display font-bold text-slate-900">Envio para todo o Brasil</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        Separação em até 1 dia útil com atualização de rastreio por e-mail em
        cada etapa da entrega.
      </p>
    </div>
    <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5 shadow-sm">
      <h3 className="font-display font-bold text-slate-900">Compra em breve</h3>
      <ol className="mt-3 list-decimal space-y-2 pl-4 text-sm leading-relaxed text-slate-600">
        <li>Escolha seu produto e veja todos os detalhes.</li>
        <li>Clique em Quero este produto para falar com nosso time.</li>
        <li>Finalize a compra assim que o checkout oficial for liberado.</li>
      </ol>
    </div>
  </aside>
);
