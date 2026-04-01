import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/atoms/Button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a equipe Toy Pix para receber aviso de disponibilidade e suporte sobre produtos.",
};

export default function ContatoPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-10 md:py-14">
      <h1 className="font-display text-3xl font-bold text-slate-900 md:text-4xl">
        Atendimento Toy Pix
      </h1>
      <p className="mt-3 text-slate-600">
        O checkout está em fase final de implementação. Enquanto isso, você pode
        falar com nosso time para receber aviso de disponibilidade e condições de
        compra.
      </p>
      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="font-semibold text-slate-800">Canais de contato</p>
        <ul className="mt-3 space-y-2 text-sm text-slate-600">
          <li>WhatsApp: (11) 99999-9999</li>
          <li>E-mail: suporte@toypix.com.br</li>
          <li>Atendimento: segunda a sexta, 9h às 18h</li>
        </ul>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/produtos" className={cn(buttonVariants({ variant: "primary" }))}>
          Ver catálogo
        </Link>
        <Link href="/" className={cn(buttonVariants({ variant: "outline" }))}>
          Voltar para a home
        </Link>
      </div>
    </section>
  );
}
