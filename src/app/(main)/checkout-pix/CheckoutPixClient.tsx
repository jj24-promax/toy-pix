"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { Button, buttonVariants } from "@/components/atoms/Button";
import { getProductById } from "@/data/products";
import { formatBRL } from "@/lib/format-price";
import { trackFbq, trackTikTok } from "@/lib/analytics";
import { cn } from "@/lib/utils";

function parseQty(raw: string | null): number {
  const n = parseInt(raw ?? "1", 10);
  if (Number.isNaN(n) || n < 1) return 1;
  return Math.min(99, n);
}

export const CheckoutPixClient = () => {
  const searchParams = useSearchParams();
  const productId = searchParams.get("product") ?? "1";
  const qtyParam = searchParams.get("qty");
  const qty = useMemo(() => parseQty(qtyParam), [qtyParam]);
  const product = useMemo(() => getProductById(productId), [productId]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    copyPaste: string;
    qrCode: string;
    expiresAt: number;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const lineTotal = product ? product.price * qty : 0;

  if (!product) {
    return (
      <div className="mx-auto max-w-lg px-4 py-16 text-center">
        <p className="text-slate-600">Produto não encontrado.</p>
        <Link
          href="/"
          className={cn(buttonVariants({ variant: "primary" }), "mt-6 inline-flex")}
        >
          Voltar à página inicial
        </Link>
      </div>
    );
  }

  const validityMinutes = result
    ? Math.max(1, Math.round(result.expiresAt / 60))
    : 0;

  const payPix = async () => {
    setLoading(true);
    setError(null);
    trackFbq("InitiateCheckout", {
      content_ids: [product.id],
      content_type: "product",
      value: lineTotal,
      currency: "BRL",
    });
    trackTikTok("InitiateCheckout", {
      value: lineTotal,
      currency: "BRL",
    });

    try {
      const res = await fetch("/api/create-pix", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: product.id,
          parcelas: "pix",
          quantity: qty,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Não foi possível gerar o Pix.");
      setResult(data);
      trackFbq("Purchase", {
        content_ids: [product.id],
        content_type: "product",
        value: lineTotal,
        currency: "BRL",
      });
      trackTikTok("CompletePayment", {
        value: lineTotal,
        currency: "BRL",
      });
    } catch (e) {
      setError(e instanceof Error ? e.message : "Algo deu errado. Tente de novo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto min-h-[70vh] max-w-lg px-4 py-8 md:py-12">
      <div className="mb-8 flex items-center justify-center gap-2 text-xs font-semibold text-slate-500">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
          1
        </span>
        <span className="h-px w-8 bg-slate-200" aria-hidden />
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
          2
        </span>
        <span className="sr-only">Passo 1: revisar pedido. Passo 2: pagar com Pix.</span>
      </div>
      <p className="text-center text-xs font-medium uppercase tracking-wide text-slate-500">
        Checkout seguro
      </p>
      <h1 className="mt-2 text-center font-display text-2xl font-bold text-slate-900 md:text-3xl">
        Finalizar com Pix
      </h1>
      <p className="mx-auto mt-2 max-w-md text-center text-sm text-slate-600">
        Você está comprando um <strong>produto físico</strong>. Após o pagamento
        confirmado, enviamos a confirmação do pedido por e-mail.
      </p>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-float">
        <div className="flex gap-4">
          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-slate-100">
            <Image
              src={product.images[0].src}
              alt={product.images[0].alt}
              fill
              className="object-cover"
              sizes="96px"
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-display font-bold text-slate-900">{product.name}</p>
            <p className="mt-1 text-sm text-slate-600">{product.shortDescription}</p>
            <p className="mt-2 text-xl font-bold tabular-nums text-primary">
              R$ {formatBRL(lineTotal)}
            </p>
            <p className="text-xs text-slate-500">
              {qty}× no Pix · à vista · un. R$ {formatBRL(product.price)}
            </p>
          </div>
        </div>
      </div>

      {error ? (
        <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
          {error}
        </p>
      ) : null}

      {!result ? (
        <>
          <div className="mt-8 rounded-2xl border border-mint-100 bg-mint-50/50 p-4">
            <p className="text-sm font-semibold text-slate-800">Forma de pagamento</p>
            <p className="mt-1 text-sm text-slate-600">
              Pix com QR Code ou código copia e cola — confirmação em minutos na
              maioria dos bancos.
            </p>
          </div>
          <Button
            type="button"
            onClick={payPix}
            disabled={loading}
            className="mt-8 w-full min-h-14 text-lg"
          >
            {loading ? (
              <span className="inline-flex items-center gap-2">
                <span className="h-5 w-5 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                Gerando código Pix…
              </span>
            ) : (
              `Pagar R$ ${formatBRL(lineTotal)} com Pix`
            )}
          </Button>
        </>
      ) : (
        <div className="mt-8 space-y-4">
          <div
            className="rounded-2xl border border-primary/30 bg-primary/5 p-4 text-center"
            role="status"
          >
            <p className="text-sm font-bold text-primary">Código Pix gerado</p>
            <p className="mt-1 text-sm text-slate-600">
              Escaneie o QR no app do banco ou copie o código abaixo.
            </p>
          </div>
          <div className="flex justify-center rounded-2xl border border-slate-200 bg-white p-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={result.qrCode}
              alt="QR Code para pagamento Pix"
              width={176}
              height={176}
              className="h-44 w-44"
            />
          </div>
          <div>
            <label
              htmlFor="pix-copy"
              className="text-xs font-semibold uppercase tracking-wide text-slate-500"
            >
              Pix copia e cola
            </label>
            <textarea
              id="pix-copy"
              readOnly
              rows={3}
              className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-slate-50 p-3 font-mono text-xs text-slate-800"
              value={result.copyPaste}
            />
            <button
              type="button"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "mt-3 w-full"
              )}
              onClick={() => {
                void navigator.clipboard.writeText(result.copyPaste);
              }}
            >
              Copiar código
            </button>
          </div>
          <p className="text-center text-xs text-slate-500">
            Este código permanece válido por aproximadamente {validityMinutes}{" "}
            minutos. Conclua o pagamento no app do seu banco para confirmar seu
            pedido.
          </p>
        </div>
      )}

      <Link
        href="/"
        className="mt-8 block text-center text-sm font-semibold text-primary hover:underline"
      >
        ← Voltar à oferta
      </Link>
    </div>
  );
};
