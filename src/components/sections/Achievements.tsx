"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/primitives/GlassCard";
import SectionHeading from "@/components/primitives/SectionHeading";
import Counter from "@/components/primitives/Counter";
import { ACHIEVEMENTS } from "@/lib/data";
import { staggerContainer, fadeUp } from "@/lib/motion";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative mx-auto w-full max-w-6xl px-4 py-24 sm:px-6"
    >
      <SectionHeading
        eyebrow="Achievements"
        title="Proof of work."
        description="Recognized for competitive programming, community building, and cloud infrastructure automation & platform reliability work."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {ACHIEVEMENTS.map((a) => (
          <motion.div key={a.label} variants={fadeUp}>
            <GlassCard className="h-full p-7" tilt={9}>
              <div className="flex items-baseline gap-1">
                <Counter
                  value={a.value}
                  prefix={a.prefix ?? ""}
                  suffix={a.suffix ?? ""}
                  className="font-sans text-4xl font-bold text-gradient-accent"
                />
              </div>
              <p className="mt-3 font-sans font-semibold text-foreground">
                {a.label}
              </p>
              <p className="mt-1 text-sm text-silver-dim">{a.note}</p>
            </GlassCard>
          </motion.div>
        ))}

        <motion.div variants={fadeUp}>
          <GlassCard className="flex h-full flex-col justify-center p-7" tilt={9} strong>
            <p className="font-sans text-lg font-bold text-foreground">
              Cloud reliability & automation
            </p>
            <p className="mt-2 text-sm text-silver-dim">
              Recognized for infrastructure automation and platform reliability
              work across multi-cloud environments.
            </p>
          </GlassCard>
        </motion.div>
      </motion.div>
    </section>
  );
}
