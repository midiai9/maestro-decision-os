import { Workflow, Lightbulb, Bot, Sparkles, Users } from "lucide-react";
import { useEffect, useState } from "react";

const solutions = [
  { id: "flow", label: "Flow", icon: Workflow },
  { id: "insights", label: "Insights", icon: Lightbulb },
  { id: "decision-teams", label: "Decision Teams", icon: Bot },
  { id: "composer", label: "Composer", icon: Sparkles },
  { id: "cx", label: "CX", icon: Users },
];

export function SolutionsNav() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeId, setActiveId] = useState("flow");

  useEffect(() => {
    const watchIds = ["capacidades", "flow", "insights", "decision-teams", "composer", "cx"];

    const evaluate = () => {
      const anyIn = watchIds.some((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return r.top < window.innerHeight * 0.5 && r.bottom > 100;
      });
      setIsVisible(anyIn);

      let bestId = activeId;
      let bestTop = Infinity;
      for (const s of solutions) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight * 0.4 && r.bottom > 120) {
          const dist = Math.abs(r.top - 120);
          if (dist < bestTop) {
            bestTop = dist;
            bestId = s.id;
          }
        }
      }
      setActiveId(bestId);
    };

    evaluate();
    window.addEventListener("scroll", evaluate, { passive: true });
    window.addEventListener("resize", evaluate);
    return () => {
      window.removeEventListener("scroll", evaluate);
      window.removeEventListener("resize", evaluate);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 120;
      const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div
      className={`fixed z-40 top-[74px] md:top-[94px] left-1/2 -translate-x-1/2 w-[calc(100%-1.25rem)] md:w-auto transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
    >
      <div className="flex items-center gap-1.5 md:gap-2 rounded-full border border-white/[0.14] bg-[#0A0D1C]/90 backdrop-blur-xl shadow-[0_14px_36px_-10px_rgba(34,211,238,0.45)] px-2 py-1.5 overflow-x-auto scrollbar-hide">
        <span className="hidden lg:flex items-center pl-2 pr-1 shrink-0 pointer-events-none">
          <img src="/logos/maestro-icon2.svg" alt="" className="h-4 w-auto opacity-90" />
        </span>
        {solutions.map(({ id, label, icon: Icon }) => {
          const active = activeId === id;
          return (
            <button
              key={id}
              onClick={() => handleClick(id)}
              className={`flex items-center gap-1.5 md:gap-2 px-2.5 md:px-4 py-1.5 md:py-2 rounded-full text-[11px] md:text-sm font-medium whitespace-nowrap transition-all flex-shrink-0 ${
                active
                  ? "bg-[#22D3EE]/15 text-[#22D3EE] border border-[#22D3EE]/50 shadow-[0_0_14px_rgba(34,211,238,0.30)]"
                  : "text-white/75 hover:text-white hover:bg-white/10 border border-white/[0.08]"
              }`}
            >
              <Icon size={13} className="md:w-4 md:h-4" strokeWidth={2} />
              <span>{label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
