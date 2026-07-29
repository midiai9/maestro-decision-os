"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

/**
 * Vinheta animada do logo Maestro (GSAP):
 * barras "equalizer" sobem em stagger + idle sutil, e "Maestro" revela letra a letra.
 * Captura a identidade: motivo de barras (orquestração) + gradiente ciano→índigo→violeta.
 */
export function MaestroIntro() {
  const root = useRef<HTMLDivElement>(null);
  const word = "Maestro".split("");
  const bars = [0, 1, 2, 3, 4];

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      const barEls = gsap.utils.toArray<SVGRectElement>(".mi-bar");
      const letterEls = gsap.utils.toArray<HTMLElement>(".mi-letter");
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      gsap.set(barEls, { transformOrigin: "50% 100%", scaleY: 0 });
      gsap.set(letterEls, { yPercent: 120, opacity: 0 });

      if (reduce) {
        gsap.set(barEls, { scaleY: 1 });
        gsap.set(letterEls, { yPercent: 0, opacity: 1 });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.to(barEls, { scaleY: 1, duration: 0.6, stagger: 0.08, ease: "back.out(2)" })
        .to(letterEls, { yPercent: 0, opacity: 1, duration: 0.55, stagger: 0.045 }, "-=0.3");

      // idle "equalizer" contínuo e sutil
      barEls.forEach((b, i) => {
        gsap.to(b, {
          scaleY: gsap.utils.random(0.5, 1),
          duration: gsap.utils.random(0.8, 1.4),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 0.9 + i * 0.12,
        });
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="flex items-end justify-center gap-3 md:gap-4 drop-shadow-[0_2px_26px_rgba(124,58,237,0.4)]">
      <svg viewBox="0 0 72 80" className="h-14 md:h-20 w-auto" aria-hidden="true">
        <defs>
          <linearGradient id="mi-grad" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0" stopColor="#22D3EE" />
            <stop offset="0.5" stopColor="#4F46E5" />
            <stop offset="1" stopColor="#A855F7" />
          </linearGradient>
        </defs>
        {bars.map((i) => {
          const h = 24 + ((i * 13) % 40);
          return (
            <rect
              key={i}
              className="mi-bar"
              x={2 + i * 14}
              y={80 - h}
              width="9"
              height={h}
              rx="3"
              fill="url(#mi-grad)"
            />
          );
        })}
      </svg>

      <div className="flex overflow-hidden pb-1.5" aria-label="Maestro">
        {word.map((ch, i) => (
          <span
            key={i}
            className="mi-letter inline-block text-gradient-brand text-6xl md:text-8xl font-bold tracking-tight"
          >
            {ch}
          </span>
        ))}
      </div>
    </div>
  );
}
