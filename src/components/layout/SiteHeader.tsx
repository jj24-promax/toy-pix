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
      <header className="sticky top-0 z-30 border-b border-mint-100/80 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex min-h-14 max-w-6xl items-center justify-between gap-3 px-4 py-2 md:py-0">
          <Link
            href="/"
            className="inline-flex min-h-11 min-w-[44px] items-center rounded-lg font-display text-xl font-bold text-bubblegum-600 transition hover:text-bubblegum-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bubblegum-500 focus-visible:ring-offset-2"
          >
            Toy Pix
          </Link>
          <nav
            className="hidden items-center gap-2 md:flex"
            aria-label="Principal"
          >
            <Link href="/" className={buttonVariants({ variant: "ghost" })}>
              Início
            </Link>
            <Link
              href="/produto/kit-aventura-espacial"
              className={buttonVariants({ variant: "ghost" })}
            >
              Produtos
            </Link>
            <Link
              href="/checkout-pix?product=1"
              className={buttonVariants({ variant: "primary" })}
            >
              Pagar com Pix
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
