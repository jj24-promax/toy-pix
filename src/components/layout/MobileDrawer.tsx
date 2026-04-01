"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  open: boolean;
  onClose: () => void;
};

const links = [
  { href: "/", label: "Início" },
  { href: "/produto/kit-aventura-espacial", label: "Destaque" },
  { href: "/checkout-pix?product=1", label: "Checkout Pix" },
];

export const MobileDrawer = ({ open, onClose }: Props) => (
  <AnimatePresence>
    {open ? (
      <>
        <motion.button
          type="button"
          className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm md:hidden"
          aria-label="Fechar menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />
        <motion.nav
          className="fixed bottom-0 left-0 right-0 z-50 rounded-t-3xl bg-white p-6 shadow-float md:hidden"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", damping: 28, stiffness: 320 }}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-slate-200" />
          <ul className="flex flex-col gap-2">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="block rounded-xl px-4 py-3 font-display text-lg font-semibold text-slate-800 hover:bg-mint-50"
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
