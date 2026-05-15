import { ReactNode } from "react";
import { motion } from "framer-motion";

interface HighlightBoxProps {
  miniTag?: string;
  miniTagColor?: string;
  topLine?: string;
  bottomLine: ReactNode;
  variant?: "default" | "danger";
}

export function HighlightBox({
  miniTag,
  miniTagColor = "#00D4FF",
  topLine,
  bottomLine,
  variant = "default",
}: HighlightBoxProps) {
  const bgGradient =
    variant === "danger"
      ? "from-[#3D0B0B]/60 via-[#2A0606]/40 to-[#0F1B3D]/60"
      : "from-[#8B1FA9]/40 via-[#6B1583]/30 to-[#0F1B3D]/60";

  const borderColor =
    variant === "danger" ? "border-[#EF4444]/30" : "border-[#00D4FF]/30";

  const gradientText =
    variant === "danger"
      ? "from-white via-[#FFE4E4] to-[#EF4444]"
      : "from-white via-[#E8E4F0] to-[#00D4FF]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`relative overflow-hidden rounded-2xl border ${borderColor} bg-gradient-to-br ${bgGradient} p-8 md:p-12 my-10`}
    >
      {miniTag && (
        <div
          className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-4"
          style={{ color: miniTagColor }}
        >
          {miniTag}
        </div>
      )}

      {topLine && (
        <p className="text-base md:text-lg text-white/60 font-light mb-3">
          {topLine}
        </p>
      )}

      <p
        className={`text-2xl md:text-4xl lg:text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r ${gradientText}`}
      >
        {bottomLine}
      </p>
    </motion.div>
  );
}
