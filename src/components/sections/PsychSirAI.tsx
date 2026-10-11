"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/primitives/GlassCard";
import MagneticButton from "@/components/primitives/MagneticButton";
import Counter from "@/components/primitives/Counter";
import Reveal from "@/components/primitives/Reveal";
import { PSYCH_JOURNEY, SOCIALS } from "@/lib/data";
import { staggerContainer, fadeUp } from "@/lib/motion";

const METRICS = [
  { value: 1000, suffix: "+", label: "Users organically", raw: false },
  { value: 16, suffix: "K+", label: "Instagram audience", raw: false },
  { value: 1000, suffix: "+", label: "Telegram members", raw: false },
];

export default function PsychSirAI() {
  return (
    <section id="psychsirai" className="relative mx-auto w-full max-w-6xl px-4 py-28 sm:px-6">
      {/* glow backdrop */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative z-10">
        <Reveal>
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-accent-bright">
              Founder Story · Most Important
            </span>
            <h2 className="mt-6 font-sans text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              <span className="shimmer">BUILDING PSYCHSIRAI</span> 🚀
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-silver">
              While working full-time as a Cloud Engineer, I built PsychSirAI to
              help SSB aspirants prepare smarter using AI — scaled to{" "}
              <span className="font-semibold text-accent-bright">1000+ users</span>{" "}
              with <span className="font-semibold text-accent-bright">zero paid marketing</span>.
            </p>
          </div>
        </Reveal>

        {/* Metrics */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {METRICS.map((m) => (
            <motion.div key={m.label} variants={fadeUp}>
              <GlassCard className="p-6 text-center" tilt={9} strong>
                <Counter
                  value={m.value}
                  suffix={m.suffix}
                  className="font-sans text-4xl font-bold text-gradient-accent"
                />
                <p className="mt-2 text-xs text-silver-dim">{m.label}</p>
              </GlassCard>
            </motion.div>
          ))}
          <motion.div variants={fadeUp}>
            <GlassCard className="p-6 text-center" tilt={9} strong>
              <span className="font-sans text-4xl font-bold text-gradient-accent">
                ₹0
              </span>
              <p className="mt-2 text-xs text-silver-dim">Paid marketing</p>
            </GlassCard>
          </motion.div>
        </motion.div>

        {/* Growth journey timeline */}
        <div className="mt-16">
          <h3 className="text-center font-sans text-xl font-bold text-foreground">
            The growth journey
          </h3>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-5">
            {PSYCH_JOURNEY.map((step, i) => (
              <Reveal key={step.phase} delay={i * 0.1}>
                <GlassCard className="relative h-full p-5" tilt={8}>
                  <span className="font-mono text-xs text-accent-bright">
                    0{i + 1}
                  </span>
                  <p className="mt-2 font-sans font-bold text-foreground">
                    {step.phase}
                  </p>
                  <p className="mt-2 text-sm text-silver-dim">{step.desc}</p>
                  {i < PSYCH_JOURNEY.length - 1 && (
                    <span className="absolute -right-3 top-1/2 hidden text-accent/50 md:block">
                      →
                    </span>
                  )}
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Reveal className="mt-14">
          <GlassCard className="flex flex-col items-center justify-between gap-6 p-8 text-center md:flex-row md:text-left" strong>
            <div>
              <p className="font-sans text-2xl font-bold text-foreground">
                An active community across India 🇮🇳
              </p>
              <p className="mt-2 text-silver-dim">
                Built in public. Driven by product value, not ad spend.
              </p>
            </div>
            <MagneticButton
              href={SOCIALS.psychsirai}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-xl bg-accent px-7 py-3.5 font-semibold text-black transition-shadow hover:glow-accent"
            >
              Visit PsychSirAI →
            </MagneticButton>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
