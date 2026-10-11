"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/primitives/GlassCard";
import SectionHeading from "@/components/primitives/SectionHeading";
import Reveal from "@/components/primitives/Reveal";
import { staggerContainer, fadeUp } from "@/lib/motion";

const PLATFORMS = [
  "AWS",
  "GCP",
  "Azure",
  "Oracle Cloud",
  "Terraform",
  "Kubernetes",
  "CI/CD",
  "Infrastructure Automation",
];

const STEPS = [
  {
    title: "Started as a Frontend Developer",
    desc: "Fell in love with building things people actually use — crafting interfaces in React.",
  },
  {
    title: "Evolved into Cloud & DevOps",
    desc: "Went deeper into the systems behind the product — infrastructure, automation, reliability.",
  },
  {
    title: "Multi-cloud Engineer today",
    desc: "Working across AWS, GCP, Azure & OCI with Terraform, Kubernetes and CI/CD pipelines.",
  },
  {
    title: "Founder of PsychSirAI",
    desc: "Building an AI platform helping SSB aspirants improve via psychology-based assessments.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading
        eyebrow="About"
        title="From pixels to pipelines."
        description="I started as a frontend developer and evolved into a cloud and DevOps engineer. My passion lies in building products that solve real problems."
      />

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-5">
        {/* Story / platforms */}
        <Reveal className="lg:col-span-2">
          <GlassCard className="h-full p-7" tilt={6}>
            <h3 className="font-sans text-xl font-bold text-foreground">
              Today I work across
            </h3>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-5 flex flex-wrap gap-2"
            >
              {PLATFORMS.map((p) => (
                <motion.span
                  key={p}
                  variants={fadeUp}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-silver transition-colors hover:border-accent/40 hover:text-accent-bright"
                >
                  {p}
                </motion.span>
              ))}
            </motion.div>

            <div className="mt-7 rounded-2xl border border-accent/20 bg-accent/[0.06] p-5">
              <p className="text-sm leading-relaxed text-silver">
                Beyond my engineering career, I&apos;m the{" "}
                <span className="font-semibold text-accent-bright">
                  Founder of PsychSirAI
                </span>{" "}
                — an AI-powered platform helping SSB aspirants improve through
                psychology-based assessments and feedback.
              </p>
            </div>
          </GlassCard>
        </Reveal>

        {/* Timeline */}
        <div className="lg:col-span-3">
          <div className="relative pl-6">
            <div className="absolute left-0 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-accent/60 via-accent/20 to-transparent" />
            <div className="space-y-5">
              {STEPS.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.08}>
                  <div className="relative">
                    <span className="absolute -left-[26px] top-5 h-3 w-3 rounded-full border-2 border-accent bg-background shadow-[0_0_12px_2px_rgba(91,157,255,0.5)]" />
                    <GlassCard className="p-5" tilt={5}>
                      <p className="font-sans font-bold text-foreground">
                        {s.title}
                      </p>
                      <p className="mt-1 text-sm text-silver-dim">{s.desc}</p>
                    </GlassCard>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
