"use client";

import { useEffect, useRef, useState } from "react";
import { InteractiveRobotSpline } from "./interactive-3d-robot";

/**
 * Carrega o robô 3D (Spline, ~1.3MB) só quando a seção entra na viewport
 * e só no desktop (>= 1024px). No mobile não baixa nada — ganho grande de performance.
 */
export function DeferredRobot({ scene, className }: { scene: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window === "undefined" || window.innerWidth < 1024) return; // desktop apenas
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShow(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {show ? (
        <>
          <InteractiveRobotSpline scene={scene} className="absolute inset-0 w-full h-full" />
          {/* cobre a marca d'água "Built with Spline" (pintada no canvas) */}
          <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#05070F] via-[#05070F]/92 to-transparent pointer-events-none" />
          <div className="absolute bottom-1.5 right-1.5 w-56 h-12 rounded-xl bg-[#05070F] pointer-events-none" />
        </>
      ) : null}
    </div>
  );
}
