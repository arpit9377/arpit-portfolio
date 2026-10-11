"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SEQUENCE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

const CLOUDS = ["☁️", "🚀", "⚡", "🛰️", "✨", "☁️", "🌩️", "🛰️"];

export default function KonamiEasterEgg() {
  const [active, setActive] = useState(false);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      setIdx((cur) => {
        if (key === SEQUENCE[cur]) {
          const next = cur + 1;
          if (next === SEQUENCE.length) {
            setActive(true);
            setTimeout(() => setActive(false), 6000);
            return 0;
          }
          return next;
        }
        return key === SEQUENCE[0] ? 1 : 0;
      });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-[90] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.6, opacity: 0 }}
            className="absolute left-1/2 top-24 -translate-x-1/2 rounded-2xl glass-strong glow-accent px-6 py-4 text-center"
          >
            <p className="font-sans text-lg font-bold text-gradient-accent">
              ☁️ Cloud Mode Unlocked
            </p>
            <p className="mt-1 font-mono text-xs text-silver">
              Deploying infinite infrastructure...
            </p>
          </motion.div>

          {Array.from({ length: 40 }).map((_, i) => {
            const left = Math.random() * 100;
            const delay = Math.random() * 1.5;
            const dur = 3 + Math.random() * 3;
            const size = 18 + Math.random() * 30;
            return (
              <motion.span
                key={i}
                className="absolute select-none"
                style={{ left: `${left}%`, fontSize: size }}
                initial={{ y: "110vh", opacity: 0, rotate: 0 }}
                animate={{ y: "-15vh", opacity: [0, 1, 1, 0], rotate: 360 }}
                transition={{ duration: dur, delay, ease: "easeOut" }}
              >
                {CLOUDS[i % CLOUDS.length]}
              </motion.span>
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
