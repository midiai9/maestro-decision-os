"use client";

import { useEffect, useRef } from "react";

/**
 * ParticlesBg — rede de partículas (particles.js) adaptada como fundo de SEÇÃO.
 * Fundo transparente, cores da marca (ciano/índigo), interativo (hover = grab).
 * Carrega o particles.js localmente (sem CDN). Respeita prefers-reduced-motion.
 */
export default function ParticlesBg({
  id = "particles-bg",
  className = "",
}: {
  id?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let destroyed = false;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    (async () => {
      await import("particles.js");
      if (destroyed) return;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = window as any;
      if (!w.particlesJS) return;
      w.particlesJS(id, {
        particles: {
          number: { value: 70, density: { enable: true, value_area: 900 } },
          color: { value: "#22D3EE" },
          shape: { type: "circle", stroke: { width: 0.5, color: "#7C3AED" } },
          opacity: { value: 0.5, random: true, anim: { enable: true, speed: 1, opacity_min: 0.2 } },
          size: { value: 2.6, random: true, anim: { enable: true, speed: 2, size_min: 0.6 } },
          line_linked: { enable: true, distance: 150, color: "#6366F1", opacity: 0.35, width: 1 },
          move: { enable: true, speed: 1.6, random: true, out_mode: "bounce" },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            grab: { distance: 200, line_linked: { opacity: 0.7 } },
            push: { particles_nb: 3 },
          },
        },
        retina_detect: true,
      });
    })();

    return () => {
      destroyed = true;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = window as any;
      try {
        if (w.pJSDom?.length) {
          w.pJSDom.forEach((p: { pJS: { fn: { vendors: { destroypJS: () => void } } } }) => {
            try { p.pJS.fn.vendors.destroypJS(); } catch { /* noop */ }
          });
          w.pJSDom = [];
        }
      } catch { /* noop */ }
      const c = document.querySelector(`#${id} canvas`);
      if (c) c.remove();
    };
  }, [id]);

  return <div ref={ref} id={id} className={`absolute inset-0 ${className}`} aria-hidden="true" />;
}
