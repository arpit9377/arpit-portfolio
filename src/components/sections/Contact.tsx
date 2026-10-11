"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/primitives/GlassCard";
import MagneticButton from "@/components/primitives/MagneticButton";
import Reveal from "@/components/primitives/Reveal";
import { SOCIALS } from "@/lib/data";
import { staggerContainer, fadeUp } from "@/lib/motion";

const LINKS = [
  { label: "LinkedIn", href: SOCIALS.linkedin },
  { label: "GitHub", href: SOCIALS.github },
  { label: "Instagram", href: SOCIALS.instagram },
  { label: "Telegram", href: SOCIALS.telegram },
  { label: "PsychSirAI", href: SOCIALS.psychsirai },
];

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto w-full max-w-5xl px-4 py-28 sm:px-6">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[130px]" />

      <Reveal>
        <GlassCard className="relative z-10 overflow-hidden p-10 text-center sm:p-16" strong>
          <div className="noise-grid pointer-events-none absolute inset-0 opacity-40" />
          <div className="relative">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs uppercase tracking-[0.2em] text-accent-bright">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
              Open to work & collaborations
            </p>
            <h2 className="mx-auto mt-6 max-w-2xl font-sans text-4xl font-bold leading-tight sm:text-5xl">
              <span className="text-gradient">Let&apos;s Build Something</span>{" "}
              <span className="text-gradient-accent">Extraordinary.</span>
            </h2>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <MagneticButton
                href={`mailto:${SOCIALS.email}`}
                className="rounded-xl bg-accent px-8 py-4 font-semibold text-black transition-shadow hover:glow-accent"
                strength={0.5}
              >
                {SOCIALS.email}
              </MagneticButton>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-10 flex flex-wrap items-center justify-center gap-3"
            >
              {LINKS.map((l) => (
                <motion.a
                  key={l.label}
                  variants={fadeUp}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="rounded-xl border border-white/12 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-silver transition-colors hover:border-accent/40 hover:text-accent-bright"
                >
                  {l.label}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </GlassCard>
      </Reveal>
    </section>
  );
}
