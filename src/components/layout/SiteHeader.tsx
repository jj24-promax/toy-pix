"use client";

import Link from "next/link";
import { useState } from "react";
import { MobileDrawer } from "@/components/layout/MobileDrawer";

export const SiteHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-mint-100/80 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
          <Link
            href="/"
            className="font-display text-xl font-bold text-bubblegum-600"
          >
            Toy Pix
          </Link>
          <nav className="hidden items-center gap-6 md:flex" aria-label="Principal">
            <Link
              href="/"
              className="text-sm font-semibold text-slate-700 hover:text-mint-600"
            >
              Início
            </Link>
            <Link
              href="/produto/kit-aventura-espacial"
              className="text-sm font-semibold text-slate-700 hover:text-mint-600"
            >
              Produtos
            </Link>
            <Link
              href="/checkout-pix?product=1"
              className="rounded-full bg-mint-500 px-4 py-2 text-sm font-bold text-white shadow-float"
            >
              Pix
            </Link>
          </nav>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-mint-100 text-mint-800 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="sr-only">Abrir menu</span>
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden>
              <path
                fill="currentColor"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
              />
            </svg>
          </button>
        </div>
      </header>
      <div id="mobile-menu">
        <MobileDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>
    </>
  );
};
