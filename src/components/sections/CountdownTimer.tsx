"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export const CountdownTimer = () => {
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

  return (
    <motion.div
      className="mt-4 inline-flex gap-2 rounded-2xl bg-white/20 px-4 py-2 font-mono text-2xl font-bold tabular-nums backdrop-blur-sm"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <span>{pad(h)}</span>
      <span aria-hidden>:</span>
      <span>{pad(m)}</span>
      <span aria-hidden>:</span>
      <span>{pad(s)}</span>
    </motion.div>
  );
};
