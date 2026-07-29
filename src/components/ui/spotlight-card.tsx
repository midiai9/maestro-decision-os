import React, { useEffect, ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "blue" | "purple" | "cyan" | "green" | "red" | "orange";
  size?: "sm" | "md" | "lg";
  width?: string | number;
  height?: string | number;
  /** When true, ignores size/aspect/padding and lets className control layout. */
  customSize?: boolean;
}

const glowColorMap = {
  blue: { base: 220, spread: 200 },
  purple: { base: 280, spread: 300 },
  cyan: { base: 190, spread: 170 },
  green: { base: 120, spread: 200 },
  red: { base: 0, spread: 200 },
  orange: { base: 30, spread: 200 },
};

const sizeMap = {
  sm: "w-48 h-64",
  md: "w-64 h-80",
  lg: "w-80 h-96",
};

/* ── Single shared pointer listener (writes CSS vars on :root, inherited by all cards) ── */
let pointerRefs = 0;
function useSharedPointer() {
  useEffect(() => {
    pointerRefs += 1;
    if (pointerRefs === 1) {
      const reduce =
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (!reduce) {
        const sync = (e: PointerEvent) => {
          const root = document.documentElement;
          root.style.setProperty("--x", e.clientX.toFixed(2));
          root.style.setProperty("--xp", (e.clientX / window.innerWidth).toFixed(3));
          root.style.setProperty("--y", e.clientY.toFixed(2));
          root.style.setProperty("--yp", (e.clientY / window.innerHeight).toFixed(3));
        };
        document.addEventListener("pointermove", sync, { passive: true });
        (useSharedPointer as unknown as { _sync?: (e: PointerEvent) => void })._sync = sync;
      }
    }
    return () => {
      pointerRefs -= 1;
      if (pointerRefs === 0) {
        const sync = (useSharedPointer as unknown as { _sync?: (e: PointerEvent) => void })._sync;
        if (sync) document.removeEventListener("pointermove", sync);
      }
    };
  }, []);
}

const beforeAfterStyles = `
  [data-glow]::before,
  [data-glow]::after {
    pointer-events: none;
    content: "";
    position: absolute;
    inset: calc(var(--border-size) * -1);
    border: var(--border-size) solid transparent;
    border-radius: calc(var(--radius) * 1px);
    background-attachment: fixed;
    background-size: calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)));
    background-repeat: no-repeat;
    background-position: 50% 50%;
    mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
    -webkit-mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
    mask-clip: padding-box, border-box;
    -webkit-mask-clip: padding-box, border-box;
    mask-composite: intersect;
    -webkit-mask-composite: source-in, xor;
  }
  [data-glow]::before {
    background-image: radial-gradient(
      calc(var(--spotlight-size) * 0.75) calc(var(--spotlight-size) * 0.75) at
      calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px),
      hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 55) * 1%) / var(--border-spot-opacity, 1)), transparent 100%
    );
    filter: brightness(1.6);
  }
  [data-glow]::after {
    background-image: radial-gradient(
      calc(var(--spotlight-size) * 0.5) calc(var(--spotlight-size) * 0.5) at
      calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px),
      hsl(0 100% 100% / var(--border-light-opacity, 0.9)), transparent 100%
    );
  }
  [data-glow] [data-glow] {
    position: absolute;
    inset: 0;
    will-change: filter;
    opacity: var(--outer, 1);
    border-radius: calc(var(--radius) * 1px);
    border-width: calc(var(--border-size) * 20);
    filter: blur(calc(var(--border-size) * 10));
    background: none;
    pointer-events: none;
    border: none;
  }
  [data-glow] > [data-glow]::before { inset: -10px; border-width: 10px; }
  @media (prefers-reduced-motion: reduce) {
    [data-glow]::before, [data-glow]::after { display: none; }
  }
`;

const GlowCard: React.FC<GlowCardProps> = ({
  children,
  className = "",
  glowColor = "purple",
  size = "md",
  width,
  height,
  customSize = false,
}) => {
  useSharedPointer();
  const { base, spread } = glowColorMap[glowColor];

  const getSizeClasses = () => (customSize ? "" : sizeMap[size]);

  const baseStyles: React.CSSProperties & Record<string, string | number> = {
    "--base": base,
    "--spread": spread,
    "--radius": "18",
    "--border": "2",
    "--backdrop": "hsl(240 30% 12% / 0.55)",
    "--backup-border": "hsl(0 0% 100% / 0.08)",
    "--size": "220",
    "--outer": "1",
    "--border-size": "calc(var(--border, 2) * 1px)",
    "--spotlight-size": "calc(var(--size, 150) * 1px)",
    "--hue": "calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))",
    backgroundImage: `radial-gradient(
      var(--spotlight-size) var(--spotlight-size) at
      calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px),
      hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 60) * 1%) / var(--bg-spot-opacity, 0.10)), transparent
    )`,
    backgroundColor: "var(--backdrop, transparent)",
    backgroundSize:
      "calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)))",
    backgroundPosition: "50% 50%",
    backgroundAttachment: "fixed",
    border: "var(--border-size) solid var(--backup-border)",
    position: "relative",
    touchAction: "none",
  };
  if (width !== undefined) baseStyles.width = typeof width === "number" ? `${width}px` : width;
  if (height !== undefined) baseStyles.height = typeof height === "number" ? `${height}px` : height;

  const layoutClasses = customSize
    ? ""
    : `${getSizeClasses()} aspect-[3/4] grid grid-rows-[1fr_auto] p-4 gap-4`;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: beforeAfterStyles }} />
      <div
        data-glow
        style={baseStyles}
        className={`rounded-2xl relative backdrop-blur-[6px] shadow-[0_1rem_2rem_-1rem_black] ${layoutClasses} ${className}`}
      >
        <div data-glow />
        {children}
      </div>
    </>
  );
};

export { GlowCard };
