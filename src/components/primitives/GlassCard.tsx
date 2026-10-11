"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type Props = {
  children: ReactNode;
  className?: string;
  tilt?: number;
  glow?: boolean;
  strong?: boolean;
};

/**
 * Frosted glass card that subtly reacts to the mouse with 3D tilt
 * and a moving light highlight.
 */
export default function GlassCard({
  children,
  className = "",
  tilt = 8,
  glow = true,
  strong = false,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const rx = useSpring(useTransform(py, [0, 1], [tilt, -tilt]), {
    stiffness: 150,
    damping: 15,
  });
  const ry = useSpring(useTransform(px, [0, 1], [-tilt, tilt]), {
    stiffness: 150,
    damping: 15,
  });

  const glowBg = useTransform(
    [px, py],
    ([vx, vy]) =>
      `radial-gradient(420px circle at ${(vx as number) * 100}% ${
        (vy as number) * 100
      }%, rgba(91,157,255,0.14), transparent 60%)`
  );

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };

  const reset = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      className={`group relative overflow-hidden rounded-3xl ${
        strong ? "glass-strong" : "glass"
      } ${className}`}
    >
      {glow && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glowBg }}
        />
      )}
      <div className="relative z-10 h-full" style={{ transform: "translateZ(40px)" }}>
        {children}
      </div>
    </motion.div>
  );
}
