"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import Link from "next/link";
import { getProductById } from "@/data/products";
import { trackFbq, trackTikTok } from "@/lib/analytics";

export const CheckoutPixClient = () => {
  const searchParams = useSearchParams();
  const productId = searchParams.get("product") ?? "1";
  const product = useMemo(() => getProductById(productId), [productId]);
  const [parcelas, setParcelas] = useState<"pix" | "cc2">("pix");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    copyPaste: string;
    qrCode: string;
    expiresAt: number;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  if (!product) {
    return (
      <div className="mx-auto max-w-lg px-4 py-16 text-center">
        <p className="text-slate-600">Produto não encontrado.</p>
        <Link href="/" className="mt-4 inline-block font-bold text-mint-600">
          Voltar
        </Link>
      </div>
    );
  }

  const payPix = async () => {
    setLoading(true);
    setError(null);
    trackFbq("InitiateCheckout", {
      content_ids: [product.id],
      content_type: "product",
      value: product.price,
      currency: "BRL",
    });
    trackTikTok("InitiateCheckout", {
      value: product.price,
      currency: "BRL",
    });

    try {
      const res = await fetch("/api/create-pix", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: product.id,
          parcelas,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Erro ao gerar Pix");
      setResult(data);
      trackFbq("Purchase", {
        content_ids: [product.id],
        content_type: "product",
        value: product.price,
        currency: "BRL",
      });
      trackTikTok("CompletePayment", {
        value: product.price,
        currency: "BRL",
      });
    } catch (e) {
      setError(e instanceof Error ? e.message : "Falha na requisição");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-lg px-4 py-10">
      <h1 className="font-display text-2xl font-bold text-slate-900">
        Checkout Pix
      </h1>
      <p className="mt-1 text-sm text-slate-600">
        Sem endereço de entrega — só voucher digital após pagamento.
      </p>

      <div className="mt-8 flex gap-4 rounded-2xl border border-mint-100 bg-white p-4 shadow-float">
        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl">
          <Image
            src={product.images[0].src}
            alt={product.images[0].alt}
            fill
            className="object-cover"
            sizes="96px"
          />
        </div>
        <div>
          <p className="font-semibold text-slate-900">{product.name}</p>
          <p className="mt-1 text-lg font-bold text-mint-700">
            R$ {product.price.toFixed(2)}
          </p>
        </div>
      </div>

      <fieldset className="mt-8">
        <legend className="font-display font-bold text-slate-800">
          Pagamento
        </legend>
        <div className="mt-3 space-y-2">
          <label className="flex cursor-pointer items-center gap-2 rounded-xl border border-mint-200 bg-mint-50/50 px-4 py-3">
            <input
              type="radio"
              name="pay"
              checked={parcelas === "pix"}
              onChange={() => setParcelas("pix")}
            />
            <span>1× no Pix (instantâneo)</span>
          </label>
          <label className="flex cursor-pointer items-center gap-2 rounded-xl border border-slate-200 px-4 py-3 opacity-80">
            <input
              type="radio"
              name="pay"
              checked={parcelas === "cc2"}
              onChange={() => setParcelas("cc2")}
            />
            <span>2× no cartão (opcional / mock)</span>
          </label>
        </div>
      </fieldset>

      {error ? (
        <p className="mt-4 text-sm text-red-600" role="alert">
          {error}
        </p>
      ) : null}

      <button
        type="button"
        onClick={payPix}
        disabled={loading}
        className="mt-8 w-full rounded-full bg-bubblegum-500 py-4 font-display text-lg font-bold text-white shadow-float-pink transition hover:bg-bubblegum-600 disabled:opacity-60"
      >
        {loading ? "Gerando Pix…" : "Pagar com Pix"}
      </button>

      {result ? (
        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm font-semibold text-slate-800">
            Copia e cola (mock)
          </p>
          <pre className="mt-2 max-h-24 overflow-auto break-all text-xs text-slate-600">
            {result.copyPaste}
          </pre>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={result.qrCode}
            alt="QR Code Pix"
            className="mx-auto mt-4 h-40 w-40"
          />
          <p className="mt-2 text-center text-xs text-slate-500">
            Expira em {result.expiresAt}s (simulado). Conecte Mercado Pago /
            Pagar.me / Gerencianet na API real.
          </p>
        </div>
      ) : null}

      <Link
        href={`/produto/${product.slug}`}
        className="mt-6 inline-block text-sm font-semibold text-mint-700"
      >
        ← Voltar ao produto
      </Link>
    </div>
  );
};
