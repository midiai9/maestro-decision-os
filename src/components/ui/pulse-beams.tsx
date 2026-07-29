"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type GradientConfig = { initial: any; animate: any; transition: any };
interface ConnectionPoint { cx: number; cy: number; r: number }
export interface Beam {
  path: string;
  gradientConfig: GradientConfig;
  connectionPoints: ConnectionPoint[];
}

interface PulseBeamsProps {
  beams: Beam[];
  gradientColors: { start: string; middle: string; end: string };
  children?: React.ReactNode;
  className?: string;
  width?: number;
  height?: number;
}

export const PulseBeams = ({
  beams,
  gradientColors,
  children,
  className,
  width = 858,
  height = 434,
}: PulseBeamsProps) => {
  return (
    <div className={cn("relative flex h-full w-full items-center justify-center overflow-hidden", className)}>
      <SVGBeams beams={beams} gradientColors={gradientColors} width={width} height={height} />
      {children ? <div className="relative z-10">{children}</div> : null}
    </div>
  );
};

const SVGBeams = ({
  beams,
  gradientColors,
  width,
  height,
}: {
  beams: Beam[];
  gradientColors: PulseBeamsProps["gradientColors"];
  width: number;
  height: number;
}) => {
  return (
    <svg
      className="absolute inset-0 h-full w-full pointer-events-none"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {/* traços-base sutis */}
      {beams.map((beam, i) => (
        <path key={`base-${i}`} d={beam.path} stroke="rgba(148,163,184,0.14)" strokeWidth="1" />
      ))}
      {/* traços com pulso animado */}
      {beams.map((beam, i) => (
        <path key={`beam-${i}`} d={beam.path} stroke={`url(#pulse-grad-${i})`} strokeWidth="1.6" strokeLinecap="round" />
      ))}
      {/* pontos de conexão */}
      {beams.map((beam, i) =>
        beam.connectionPoints.map((p, j) => (
          <g key={`cp-${i}-${j}`}>
            <circle cx={p.cx} cy={p.cy} r={p.r} fill="#0A0D1C" stroke="rgba(148,163,184,0.35)" strokeWidth="1" />
            <circle cx={p.cx} cy={p.cy} r={p.r * 0.45} fill={gradientColors.middle} opacity="0.9" />
          </g>
        ))
      )}
      <defs>
        {beams.map((beam, i) => (
          <motion.linearGradient
            key={`grad-${i}`}
            id={`pulse-grad-${i}`}
            initial={beam.gradientConfig.initial}
            animate={beam.gradientConfig.animate}
            transition={beam.gradientConfig.transition}
          >
            <stop stopColor={gradientColors.start} stopOpacity="0" />
            <stop stopColor={gradientColors.start} />
            <stop offset="0.5" stopColor={gradientColors.middle} />
            <stop offset="1" stopColor={gradientColors.end} stopOpacity="0" />
          </motion.linearGradient>
        ))}
      </defs>
    </svg>
  );
};
