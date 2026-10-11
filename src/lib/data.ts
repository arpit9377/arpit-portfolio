export const SOCIALS = {
  email: "arpitcyber@gmail.com",
  linkedin: "https://www.linkedin.com/in/im-arpit-yadav-/",
  github: "https://github.com/arpit9377/",
  instagram: "https://www.instagram.com/psychsirai",
  telegram: "#",
  psychsirai: "https://www.psychsirai.in",
};

export const ROTATING_WORDS = [
  "AWS",
  "GCP",
  "Azure",
  "Terraform",
  "Kubernetes",
  "DevOps",
  "Startup Builder",
  "AI Products",
];

export const HERO_STATS = [
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 1000, suffix: "+", label: "Users Built Organically" },
  { value: 16, suffix: "K+", label: "Instagram Community" },
  { value: 1000, suffix: "+", label: "Telegram Members" },
  { value: 2000, suffix: "+", label: "LinkedIn Followers" },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
};

export const EXPERIENCES: Experience[] = [
  {
    company: "AHEAD",
    role: "Associate Cloud Engineer",
    period: "Mar 2025 — Present",
    highlights: [
      "Multi-cloud operations",
      "Incident management",
      "Terraform automation",
      "Kubernetes administration",
      "FinOps optimization",
      "CI/CD engineering",
    ],
  },
  {
    company: "LTIMindtree",
    role: "Cloud Engineer",
    period: "Jan 2024 — Mar 2025",
    highlights: [
      "Azure infrastructure",
      "Automation",
      "Cost optimization",
      "Cloud security",
    ],
  },
  {
    company: "STCO",
    role: "Frontend Developer Intern",
    period: "Sep 2023 — Dec 2023",
    highlights: ["React development", "Performance optimization"],
  },
];

export type TechGroup = {
  title: string;
  items: string[];
};

export const TECH_GROUPS: TechGroup[] = [
  { title: "Cloud", items: ["AWS", "GCP", "Azure", "OCI"] },
  { title: "IaC", items: ["Terraform", "Ansible"] },
  { title: "Containers", items: ["Docker", "Kubernetes", "Helm"] },
  { title: "CI/CD", items: ["Jenkins", "Harness", "GitHub Actions"] },
  { title: "Monitoring", items: ["Grafana", "Prometheus", "CloudWatch"] },
  { title: "Programming", items: ["Python", "Bash", "JavaScript"] },
];

export const ACHIEVEMENTS = [
  { value: 157, prefix: "#", label: "CodeChef Global Rank", note: "Competitive programming" },
  { value: 2005, prefix: "#", label: "CodeChef National Rank", note: "India leaderboard" },
  { value: 1000, suffix: "+", label: "PsychSirAI Users", note: "Grown organically" },
  { value: 2000, suffix: "+", label: "LinkedIn Followers", note: "Professional network" },
  { value: 16, suffix: "K+", label: "Instagram Followers", note: "Creator community" },
];

export const PSYCH_METRICS = [
  { value: 1000, suffix: "+", label: "Users Organically" },
  { value: 16, suffix: "K+", label: "Instagram Audience" },
  { value: 1000, suffix: "+", label: "Telegram Members" },
  { value: 0, suffix: "₹0", label: "Paid Marketing", raw: true },
];

export const PSYCH_JOURNEY = [
  { phase: "Spark", desc: "Noticed SSB aspirants lacked smart, personalized feedback." },
  { phase: "Build", desc: "Built an AI platform for psychology-based assessments after work hours." },
  { phase: "Launch", desc: "Shipped to real users — zero paid ads, pure product value." },
  { phase: "Community", desc: "Grew an active audience across Instagram & Telegram." },
  { phase: "Scale", desc: "Crossed 1000+ users across India and still growing." },
];
