"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import GlassCard from "@/components/primitives/GlassCard";
import MagneticButton from "@/components/primitives/MagneticButton";
import RotatingText from "@/components/primitives/RotatingText";
import TypingText from "@/components/primitives/TypingText";
import Counter from "@/components/primitives/Counter";
import { ROTATING_WORDS, HERO_STATS, SOCIALS } from "@/lib/data";
import { staggerContainer, fadeUp } from "@/lib/motion";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-4 pb-16 pt-28 sm:px-6"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-[auto_auto]"
      >
        {/* Main hero card */}
        <motion.div variants={fadeUp} className="md:col-span-8 md:row-span-2">
          <GlassCard className="h-full p-7 sm:p-10" strong>
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-silver-dim">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400 shadow-[0_0_10px_2px_rgba(74,222,128,0.6)]" />
              Available for opportunities
            </div>

            <h1 className="mt-6 font-sans text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
              <span className="text-gradient">HEY, I&apos;M ARPIT</span>{" "}
              <motion.span
                animate={{ rotate: [0, 18, -8, 18, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 2 }}
                className="inline-block"
              >
                👋
              </motion.span>
            </h1>

            <div className="mt-5 space-y-1 font-sans text-xl font-semibold text-silver sm:text-2xl">
              <p>Cloud Engineer.</p>
              <p>DevOps Builder.</p>
              <p>Startup Founder.</p>
            </div>

            <p className="mt-5 max-w-xl text-silver-dim">
              Building scalable cloud infrastructure by day and AI-powered
              products by night.
            </p>

            <div className="mt-6 flex items-center gap-2 font-mono text-sm text-silver">
              <span className="text-accent-bright">$</span>
              <TypingText
                text="focus = { AWS, GCP, Azure, Terraform, Kubernetes }"
                className="text-silver"
              />
            </div>

            <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
              <span className="text-xs uppercase tracking-widest text-silver-dim">
                I build with
              </span>
              <div className="h-6 overflow-hidden">
                <RotatingText
                  words={ROTATING_WORDS}
                  className="font-sans text-lg font-bold"
                />
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <MagneticButton
                href="#psychsirai"
                className="rounded-xl bg-accent px-6 py-3 font-semibold text-black transition-shadow hover:glow-accent"
              >
                See my startup →
              </MagneticButton>
              <MagneticButton
                href={`mailto:${SOCIALS.email}`}
                className="rounded-xl border border-white/15 px-6 py-3 font-semibold text-foreground transition-colors hover:bg-white/5"
              >
                Get in touch
              </MagneticButton>
            </div>
          </GlassCard>
        </motion.div>

        {/* Photo card */}
        <motion.div variants={fadeUp} className="md:col-span-4">
          <GlassCard className="h-full min-h-[320px] p-0" tilt={10}>
            <div className="relative h-full min-h-[320px] w-full overflow-hidden rounded-3xl">
              <Image
                src="/arpit.jpg"
                alt="Arpit Yadav"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-top grayscale transition-all duration-700 hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <p className="font-sans text-lg font-bold text-white">
                    Arpit Yadav
                  </p>
                  <p className="text-xs text-silver">Cloud · DevOps · Founder</p>
                </div>
                <span className="rounded-full border border-white/20 bg-black/40 px-2 py-1 text-[10px] uppercase tracking-widest text-silver backdrop-blur">
                  India
                </span>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Role + Founder stacked */}
        <motion.div variants={fadeUp} className="md:col-span-4">
          <div className="grid h-full grid-cols-2 gap-4 md:grid-cols-1">
            <GlassCard className="p-5" tilt={6}>
              <p className="text-[10px] uppercase tracking-[0.2em] text-silver-dim">
                Current Role
              </p>
              <p className="mt-2 font-sans font-bold text-foreground">
                Associate Cloud Engineer
              </p>
              <p className="text-sm text-accent-bright">@ AHEAD</p>
            </GlassCard>
            <GlassCard className="p-5" tilt={6}>
              <p className="text-[10px] uppercase tracking-[0.2em] text-silver-dim">
                Founder
              </p>
              <p className="mt-2 font-sans font-bold text-foreground">
                PsychSirAI 🚀
              </p>
              <p className="text-sm text-accent-bright">AI for SSB aspirants</p>
            </GlassCard>
          </div>
        </motion.div>
      </motion.div>

      {/* Stats row */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
      >
        {HERO_STATS.map((s) => (
          <motion.div key={s.label} variants={fadeUp}>
            <GlassCard className="p-5 text-center" tilt={10}>
              <Counter
                value={s.value}
                suffix={s.suffix}
                className="font-sans text-3xl font-bold text-gradient-accent"
              />
              <p className="mt-1 text-xs text-silver-dim">{s.label}</p>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
