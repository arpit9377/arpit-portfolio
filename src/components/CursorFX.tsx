"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Combines the big ambient mouse-following gradient glow with a small
 * live "visitor" cursor glow dot. Hidden on touch devices.
 */
export default function CursorFX() {
  const [enabled, setEnabled] = useState(false);
  const [pointer, setPointer] = useState(false);

  const gx = useMotionValue(-500);
  const gy = useMotionValue(-500);

  const dotX = useSpring(gx, { stiffness: 500, damping: 40, mass: 0.3 });
  const dotY = useSpring(gy, { stiffness: 500, damping: 40, mass: 0.3 });

  const ringX = useSpring(gx, { stiffness: 120, damping: 20, mass: 0.6 });
  const ringY = useSpring(gy, { stiffness: 120, damping: 20, mass: 0.6 });

  useEffect(() => {
    if (window.matchMedia("(pointer: fine)").matches) setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const move = (e: MouseEvent) => {
      gx.set(e.clientX);
      gy.set(e.clientY);
      const el = e.target as HTMLElement | null;
      setPointer(
        !!el?.closest('a, button, [role="button"], input, textarea, [data-cursor="pointer"]')
      );
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [enabled, gx, gy]);

  if (!enabled) return null;

  return (
    <>
      {/* Ambient mouse-following gradient glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-[2] h-[600px] w-[600px] rounded-full"
        style={{
          left: ringX,
          top: ringY,
          x: "-50%",
          y: "-50%",
          background:
            "radial-gradient(circle, rgba(91,157,255,0.10) 0%, rgba(91,157,255,0.04) 35%, transparent 70%)",
        }}
      />
      {/* Outer ring */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-[70] rounded-full border border-accent/50 mix-blend-screen"
        style={{
          left: ringX,
          top: ringY,
          x: "-50%",
          y: "-50%",
          width: pointer ? 56 : 34,
          height: pointer ? 56 : 34,
          opacity: pointer ? 0.9 : 0.5,
        }}
      />
      {/* Core dot */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-[70] h-2 w-2 rounded-full bg-accent-bright shadow-[0_0_14px_4px_rgba(91,157,255,0.7)]"
        style={{ left: dotX, top: dotY, x: "-50%", y: "-50%" }}
      />
    </>
  );
}
