"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/primitives/GlassCard";
import SectionHeading from "@/components/primitives/SectionHeading";
import { EXPERIENCES } from "@/lib/data";
import { staggerContainer, fadeUp } from "@/lib/motion";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative mx-auto w-full max-w-6xl px-4 py-24 sm:px-6"
    >
      <SectionHeading
        eyebrow="Experience"
        title="The road so far."
        description="A hands-on journey across multi-cloud operations, automation and reliability engineering."
      />

      <div className="mt-14 relative">
        {/* center line on desktop */}
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-accent/50 via-accent/15 to-transparent md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-8">
          {EXPERIENCES.map((exp, i) => {
            const left = i % 2 === 0;
            return (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: left ? -40 : 40, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex ${
                  left ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* node */}
                <span className="absolute left-4 top-6 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-accent bg-background shadow-[0_0_14px_3px_rgba(91,157,255,0.5)] md:left-1/2" />

                <div className="w-full pl-10 md:w-[calc(50%-2rem)] md:pl-0">
                  <GlassCard className="p-6" tilt={7}>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-sans text-xl font-bold text-foreground">
                        {exp.company}
                      </h3>
                      <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs text-accent-bright">
                        {exp.period}
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-silver">
                      {exp.role}
                    </p>
                    <motion.ul
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2"
                    >
                      {exp.highlights.map((h) => (
                        <motion.li
                          key={h}
                          variants={fadeUp}
                          className="flex items-center gap-2 text-sm text-silver-dim"
                        >
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {h}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </GlassCard>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
