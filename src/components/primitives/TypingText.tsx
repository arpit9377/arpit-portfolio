"use client";

import { useEffect, useState } from "react";

type Props = {
  text: string;
  speed?: number;
  startDelay?: number;
  className?: string;
  showCaret?: boolean;
};

export default function TypingText({
  text,
  speed = 42,
  startDelay = 300,
  className = "",
  showCaret = true,
}: Props) {
  const [out, setOut] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const id = setInterval(() => {
      i++;
      setOut(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [started, text, speed]);

  return (
    <span className={className}>
      {out}
      {showCaret && (
        <span className="caret-blink ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-accent" />
      )}
    </span>
  );
}
