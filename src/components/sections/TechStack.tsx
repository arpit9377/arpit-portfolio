"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/primitives/GlassCard";
import SectionHeading from "@/components/primitives/SectionHeading";
import { TECH_GROUPS } from "@/lib/data";
import { staggerContainer, fadeUp } from "@/lib/motion";

// Short monogram tokens used as lightweight "logos"
const TOKEN: Record<string, string> = {
  AWS: "aws",
  GCP: "gcp",
  Azure: "az",
  OCI: "oci",
  Terraform: "tf",
  Ansible: "ans",
  Docker: "dk",
  Kubernetes: "k8s",
  Helm: "helm",
  Jenkins: "jk",
  Harness: "hns",
  "GitHub Actions": "gha",
  Grafana: "graf",
  Prometheus: "prom",
  CloudWatch: "cw",
  Python: "py",
  Bash: "sh",
  JavaScript: "js",
};

export default function TechStack() {
  return (
    <section id="stack" className="relative mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading
        eyebrow="Tech Stack"
        title="Tools I build with."
        description="The toolkit powering reliable, automated, multi-cloud infrastructure."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {TECH_GROUPS.map((group) => (
          <motion.div key={group.title} variants={fadeUp}>
            <GlassCard className="h-full p-6" tilt={8}>
              <div className="flex items-center justify-between">
                <h3 className="font-sans text-lg font-bold text-foreground">
                  {group.title}
                </h3>
                <span className="font-mono text-xs text-silver-dim">
                  {group.items.length} tools
                </span>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ y: -4, scale: 1.04 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    className="group/chip flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 transition-colors hover:border-accent/40"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent/15 font-mono text-[10px] font-bold uppercase text-accent-bright transition-all group-hover/chip:bg-accent group-hover/chip:text-black">
                      {TOKEN[item] ?? item.slice(0, 2)}
                    </span>
                    <span className="text-sm text-silver group-hover/chip:text-foreground">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
