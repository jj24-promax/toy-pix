"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { buttonVariants } from "@/components/atoms/Button";
import { cn } from "@/lib/utils";

type Props = {
  open: boolean;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
};

const links = [
  { href: "/produtos", label: "Produtos", variant: "default" as const },
  { href: "/#inicio", label: "Início", variant: "default" as const },
  { href: "/#kits", label: "Kits", variant: "default" as const },
  { href: "/#avaliacoes", label: "Avaliações", variant: "default" as const },
  { href: "/#faq", label: "FAQ", variant: "default" as const },
  { href: "/#contato", label: "Contato", variant: "default" as const },
  {
    href: "/#kits",
    label: "Comprar agora",
    variant: "cta" as const,
  },
];

function getFocusable(container: HTMLElement): HTMLElement[] {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
  ).filter((el) => el.tabIndex !== -1);
}

export const MobileDrawer = ({ open, onClose, triggerRef }: Props) => {
  const panelRef = useRef<HTMLElement>(null);
  const wasOpenRef = useRef(false);

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    if (!panel) return;

    const focusables = getFocusable(panel);
    const focusFirst = () => focusables[0]?.focus();

    const id = window.requestAnimationFrame(() => {
      focusFirst();
    });

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== "Tab" || focusables.length === 0) return;

      const firstEl = focusables[0];
      const lastEl = focusables[focusables.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        }
      } else if (document.activeElement === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.cancelAnimationFrame(id);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (wasOpenRef.current && !open) {
      triggerRef.current?.focus();
    }
    wasOpenRef.current = open;
  }, [open, triggerRef]);

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.button
            type="button"
            tabIndex={-1}
            className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm md:hidden"
            aria-label="Fechar menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.nav
            ref={panelRef}
            id="mobile-menu-dialog"
            className="fixed bottom-0 left-0 right-0 z-50 rounded-t-3xl bg-white px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-5 shadow-float md:hidden"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            role="dialog"
            aria-modal="true"
            aria-label="Menu principal"
          >
            <div
              className="mx-auto mb-4 h-1 w-10 rounded-full bg-slate-200"
              aria-hidden
            />
            <ul className="flex flex-col gap-2">
              {links.map((l) => (
                <li key={l.href + l.label}>
                  <Link
                    href={l.href}
                    className={cn(
                      buttonVariants({
                        variant:
                          l.variant === "cta" ? "drawerCta" : "drawer",
                      }),
                      l.variant === "cta" && "justify-center"
                    )}
                    onClick={onClose}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        </>
      ) : null}
    </AnimatePresence>
  );
};
