"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/primitives/GlassCard";
import SectionHeading from "@/components/primitives/SectionHeading";
import Counter from "@/components/primitives/Counter";
import { staggerContainer, fadeUp } from "@/lib/motion";
import { SOCIALS } from "@/lib/data";

const CHANNELS = [
  {
    name: "Instagram Community",
    value: 16000,
    display: 16,
    suffix: "K+",
    bars: [20, 35, 48, 66, 82, 100],
    href: SOCIALS.instagram,
    tag: "@psychsirai",
  },
  {
    name: "Telegram Community",
    value: 1000,
    display: 1000,
    suffix: "+",
    bars: [15, 30, 45, 62, 80, 100],
    href: SOCIALS.telegram,
    tag: "Members",
  },
  {
    name: "LinkedIn Growth",
    value: 2000,
    display: 2000,
    suffix: "+",
    bars: [25, 40, 55, 70, 85, 100],
    href: SOCIALS.linkedin,
    tag: "Followers",
  },
  {
    name: "Founder Journey",
    value: 1000,
    display: 1000,
    suffix: "+",
    bars: [10, 28, 44, 63, 81, 100],
    href: SOCIALS.psychsirai,
    tag: "PsychSirAI users",
  },
];

function MiniChart({ bars }: { bars: number[] }) {
  return (
    <div className="flex h-16 items-end gap-1.5">
      {bars.map((b, i) => (
        <motion.div
          key={i}
          initial={{ height: 0, opacity: 0.4 }}
          whileInView={{ height: `${b}%`, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="w-full rounded-t bg-gradient-to-t from-accent-deep to-accent-bright"
        />
      ))}
    </div>
  );
}

export default function SocialProof() {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading
        eyebrow="Social Proof"
        title="Built in public."
        description="Real communities, grown organically — across every platform."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {CHANNELS.map((c) => (
          <motion.div key={c.name} variants={fadeUp}>
            <a href={c.href} target="_blank" rel="noopener noreferrer">
              <GlassCard className="h-full p-6" tilt={9}>
                <p className="text-xs uppercase tracking-widest text-silver-dim">
                  {c.name}
                </p>
                <div className="mt-2">
                  <Counter
                    value={c.display}
                    suffix={c.suffix}
                    className="font-sans text-3xl font-bold text-gradient-accent"
                  />
                </div>
                <p className="mt-1 text-xs text-accent-bright">{c.tag}</p>
                <div className="mt-5">
                  <MiniChart bars={c.bars} />
                </div>
              </GlassCard>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
