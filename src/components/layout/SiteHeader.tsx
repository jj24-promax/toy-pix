"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { buttonVariants } from "@/components/atoms/Button";
import { MobileDrawer } from "@/components/layout/MobileDrawer";
import { cn } from "@/lib/utils";

export const SiteHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <div className="bg-slate-900 px-4 py-2 text-center text-xs font-semibold text-white">
        Frete grátis para todo o Brasil
      </div>
      <header className="sticky top-0 z-30 border-b border-mint-100/80 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex min-h-14 max-w-6xl items-center justify-between gap-3 px-4 py-2 md:py-0">
          <Link
            href="/#inicio"
            className="inline-flex min-h-11 min-w-[44px] items-center rounded-lg font-display text-xl font-bold text-bubblegum-600 transition hover:text-bubblegum-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bubblegum-500 focus-visible:ring-offset-2"
          >
            Toy Pix
          </Link>
          <form className="hidden max-w-sm flex-1 md:block" action="/produtos">
            <label htmlFor="busca-header" className="sr-only">
              Buscar produtos
            </label>
            <input
              id="busca-header"
              name="q"
              type="search"
              placeholder="Buscar brinquedos, marcas e categorias"
              className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-800 outline-none ring-primary/30 placeholder:text-slate-400 focus:border-primary focus:ring-2"
            />
          </form>
          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label="Principal"
          >
            <Link href="/produtos" className={buttonVariants({ variant: "ghost" })}>
              Produtos
            </Link>
            <Link href="/#inicio" className={buttonVariants({ variant: "ghost" })}>
              Início
            </Link>
            <Link href="/#kits" className={buttonVariants({ variant: "ghost" })}>
              Kits
            </Link>
            <Link href="/#avaliacoes" className={buttonVariants({ variant: "ghost" })}>
              Avaliações
            </Link>
            <Link href="/#faq" className={buttonVariants({ variant: "ghost" })}>
              FAQ
            </Link>
            <Link href="/#contato" className={buttonVariants({ variant: "ghost" })}>
              Contato
            </Link>
            <Link
              href="/#kits"
              className={cn(
                buttonVariants({ variant: "primary" }),
                "ml-2 min-h-12 px-6 text-base shadow-[0_14px_30px_-16px_rgba(20,184,150,0.9)]"
              )}
            >
              Comprar agora
            </Link>
          </nav>
          <button
            ref={menuButtonRef}
            type="button"
            className={cn(
              "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mint-100 text-mint-800 transition hover:bg-mint-100/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 md:hidden"
            )}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu-dialog"
            aria-haspopup="dialog"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="sr-only">
              {menuOpen ? "Fechar menu" : "Abrir menu"}
            </span>
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              aria-hidden
              className={menuOpen ? "hidden" : "block"}
            >
              <path
                fill="currentColor"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
              />
            </svg>
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              aria-hidden
              className={menuOpen ? "block" : "hidden"}
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                d="M6 6l12 12M18 6L6 18"
              />
            </svg>
          </button>
        </div>
      </header>
      <div id="mobile-menu">
        <MobileDrawer
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
          triggerRef={menuButtonRef}
        />
      </div>
    </>
  );
};
