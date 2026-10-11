"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TECH_GROUPS, SOCIALS } from "@/lib/data";

type Line = { type: "in" | "out"; text: string };

const BANNER = [
  "arpit@portfolio:~$ welcome",
  "Type 'help' to see available commands.",
];

function run(cmd: string): string[] {
  const c = cmd.trim().toLowerCase();
  switch (c) {
    case "help":
      return [
        "Available commands:",
        "  whoami    — who is this guy?",
        "  skills    — my tech stack",
        "  socials   — where to find me",
        "  sudo hire-me — 😎",
        "  clear     — clear the screen",
      ];
    case "whoami":
      return ["Arpit Yadav", "Cloud Engineer", "Founder of PsychSirAI"];
    case "skills":
      return TECH_GROUPS.map((g) => `${g.title.padEnd(12)} ${g.items.join(", ")}`);
    case "socials":
      return [
        `linkedin  ${SOCIALS.linkedin}`,
        `github    ${SOCIALS.github}`,
        `instagram ${SOCIALS.instagram}`,
        `psychsirai ${SOCIALS.psychsirai}`,
        `email     ${SOCIALS.email}`,
      ];
    case "sudo hire-me":
      return ["Permission granted ✅", "Let's build something extraordinary → arpitcyber@gmail.com"];
    case "":
      return [];
    default:
      return [`command not found: ${cmd} (try 'help')`];
  }
}

export default function Terminal() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [lines, setLines] = useState<Line[]>(
    BANNER.map((t) => ({ type: "out" as const, text: t }))
  );
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "`" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
  }, [lines, open]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input;
    if (cmd.trim() === "clear") {
      setLines([]);
      setInput("");
      return;
    }
    const out = run(cmd).map((text) => ({ type: "out" as const, text }));
    setLines((p) => [...p, { type: "in", text: cmd }, ...out]);
    setInput("");
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open terminal"
        className="fixed bottom-5 right-5 z-[60] flex h-12 w-12 items-center justify-center rounded-2xl glass-strong text-accent-bright transition-transform hover:scale-110 hover:glow-accent"
      >
        <span className="font-mono text-lg">{">_"}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(e) => e.target === e.currentTarget && setOpen(false)}
          >
            <motion.div
              initial={{ y: 30, opacity: 0, scale: 0.97 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 30, opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-2xl overflow-hidden rounded-2xl glass-strong glow-accent"
            >
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
                <span className="ml-3 font-mono text-xs text-silver-dim">
                  arpit@portfolio — zsh
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="ml-auto text-silver-dim hover:text-foreground"
                >
                  ✕
                </button>
              </div>
              <div
                ref={bodyRef}
                className="h-80 overflow-y-auto px-4 py-3 font-mono text-sm leading-relaxed"
              >
                {lines.map((l, i) => (
                  <div key={i} className="whitespace-pre-wrap break-words">
                    {l.type === "in" ? (
                      <span>
                        <span className="text-accent-bright">➜</span>{" "}
                        <span className="text-silver">~</span>{" "}
                        <span className="text-foreground">{l.text}</span>
                      </span>
                    ) : (
                      <span className="text-silver">{l.text}</span>
                    )}
                  </div>
                ))}
                <form onSubmit={submit} className="mt-1 flex items-center gap-2">
                  <span className="text-accent-bright">➜</span>
                  <span className="text-silver">~</span>
                  <input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    spellCheck={false}
                    autoComplete="off"
                    className="flex-1 bg-transparent text-foreground outline-none"
                  />
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
