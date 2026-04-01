"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

type Props = {
  className?: string;
};

export const CountdownTimer = ({ className }: Props) => {
  const [left, setLeft] = useState(2 * 60 * 60 + 15 * 60);

  useEffect(() => {
    const t = setInterval(() => {
      setLeft((s) => (s <= 0 ? 0 : s - 1));
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const h = Math.floor(left / 3600);
  const m = Math.floor((left % 3600) / 60);
  const s = left % 60;

  const label = `Tempo restante da oferta: ${pad(h)} horas, ${pad(m)} minutos e ${pad(s)} segundos`;

  return (
    <motion.div
      role="timer"
      aria-live="polite"
      aria-label={label}
      className={cn(
        "inline-flex gap-2 rounded-2xl px-4 py-3 font-mono text-2xl font-bold tabular-nums",
        "bg-slate-900 text-white shadow-inner",
        className
      )}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <span aria-hidden>{pad(h)}</span>
      <span aria-hidden>:</span>
      <span aria-hidden>{pad(m)}</span>
      <span aria-hidden>:</span>
      <span aria-hidden>{pad(s)}</span>
      <span className="sr-only">{label}</span>
    </motion.div>
  );
};
