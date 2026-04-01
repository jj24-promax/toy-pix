import Link from "next/link";
import { buttonVariants } from "@/components/atoms/Button";
import { cn } from "@/lib/utils";

export default function CheckoutPixPage() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-12 text-center">
      <h1 className="font-display text-3xl font-bold text-slate-900">
        Finalização de compra em breve
      </h1>
      <p className="mt-3 text-slate-600">
        Esta loja está recebendo melhorias e o checkout será disponibilizado em
        breve. Continue navegando no catálogo ou fale com nosso time.
      </p>
      <div className="mt-6 flex justify-center gap-3">
        <Link href="/produtos" className={cn(buttonVariants({ variant: "primary" }))}>
          Ver produtos
        </Link>
        <Link href="/contato" className={cn(buttonVariants({ variant: "outline" }))}>
          Falar com atendimento
        </Link>
      </div>
    </section>
  );
}
