"use client";

import Lenis from "lenis";
import { useLenis } from "lenis/react";
import { useEffect, useState } from "react";

export default function ScrollProgressIndicator() {
  const [scroll, setScroll] = useState(0);
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const handleScroll = ({ progress }: Lenis) => {
      const nextScroll = +progress;
      setScroll((prev) => (prev === nextScroll ? prev : nextScroll));
    };

    lenis.on("scroll", handleScroll);

    return () => {
      lenis.off("scroll", handleScroll);
    };
  }, [lenis]);

  return (
    <div className="pointer-events-none fixed top-1/2 right-4 z-40 flex -translate-y-1/2 items-center gap-2 md:right-7">
      <span className="text-brand-gradient inline-block text-[10px] font-semibold tracking-[0.22em] uppercase [writing-mode:vertical-rl]">
        Scroll
      </span>
      <div className="relative h-40 w-1.5 overflow-hidden rounded-full bg-white/20">
        <div
          className="bg-linear-to-b from-primary to-primary-dark absolute bottom-0 w-full rounded-full"
          style={{ height: `${Math.max(scroll * 100, 8)}%` }}
        />
      </div>
    </div>
  );
}
