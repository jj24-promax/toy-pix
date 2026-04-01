import { Suspense } from "react";
import { CheckoutPixClient } from "./CheckoutPixClient";

export default function CheckoutPixPage() {
  return (
    <Suspense
      fallback={
        <div className="p-10 text-center text-slate-600">Carregando…</div>
      }
    >
      <CheckoutPixClient />
    </Suspense>
  );
}
