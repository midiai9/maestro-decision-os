import { ReactNode } from "react";
import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/spotlight-card";

interface HighlightBoxProps {
  miniTag?: string;
  miniTagColor?: string;
  topLine?: string;
  bottomLine: ReactNode;
  variant?: "default" | "danger";
}

export function HighlightBox({
  miniTag,
  miniTagColor = "#22D3EE",
  topLine,
  bottomLine,
  variant = "default",
}: HighlightBoxProps) {
  const bgGradient =
    variant === "danger"
      ? "from-[#4A1414]/75 via-[#2A0C0C]/60 to-[#150F1A]/65"
      : "from-[#3B1D7A]/75 via-[#242C7A]/60 to-[#12173A]/65";

  const glowShadow =
    variant === "danger"
      ? "0 0 55px -14px rgba(239,68,68,0.4)"
      : "0 0 65px -14px rgba(99,102,241,0.5)";

  const gradientText =
    variant === "danger"
      ? "from-white via-[#FFE4E4] to-[#EF4444]"
      : "from-white via-[#C7D2FE] to-[#22D3EE]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="my-10"
    >
      <div className="rounded-2xl" style={{ boxShadow: glowShadow }}>
        <GlowCard
          customSize
          glowColor={variant === "danger" ? "red" : "purple"}
          className="p-8 md:p-12 overflow-hidden"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${bgGradient} pointer-events-none`} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(120% 100% at 18% 0%, rgba(124,58,237,0.28), transparent 60%)" }} />
          <div className="relative z-10">
          {miniTag && (
            <div
              className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-4"
              style={{ color: miniTagColor }}
            >
              {miniTag}
            </div>
          )}
          {topLine && (
            <p className="text-base md:text-lg text-white/60 font-light mb-3">{topLine}</p>
          )}
          <p
            className={`text-2xl md:text-4xl lg:text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r ${gradientText}`}
          >
            {bottomLine}
          </p>
          </div>
        </GlowCard>
      </div>
    </motion.div>
  );
}
