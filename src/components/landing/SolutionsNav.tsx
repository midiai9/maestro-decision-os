import { Database, Lightbulb, Users, Bot } from "lucide-react";
import { useEffect, useState } from "react";

const solutions = [
  { id: "data-flow", label: "Data Flow", icon: Database },
  { id: "insights", label: "Insights", icon: Lightbulb },
  { id: "cx", label: "CX", icon: Users },
  { id: "decision-teams", label: "Decision Teams", icon: Bot },
];

export function SolutionsNav() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeId, setActiveId] = useState("data-flow");

  useEffect(() => {
    const watchIds = ["arquitetura", "data-flow", "insights", "cx", "decision-teams"];

    const evaluate = () => {
      const anyIn = watchIds.some((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return r.top < window.innerHeight * 0.5 && r.bottom > 100;
      });
      setIsVisible(anyIn);

      // Active item: solution closest to top
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
      className={`fixed left-0 right-0 z-40 top-[56px] md:top-[68px] transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-2 pointer-events-none"
      } bg-[#8B1FA9]/75 backdrop-blur-xl border-y border-white/[0.10] shadow-[0_4px_20px_rgba(0,0,0,0.15)]`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
        <span className="hidden lg:block absolute left-6 top-1/2 -translate-y-1/2 text-[10px] uppercase tracking-[0.25em] text-white/45 whitespace-nowrap pointer-events-none">
          Maestro AI OS
        </span>
        <div className="flex items-center gap-1.5 md:gap-2 md:justify-center overflow-x-auto scrollbar-hide py-2 md:py-2.5">
          {solutions.map(({ id, label, icon: Icon }) => {
            const active = activeId === id;
            return (
              <button
                key={id}
                onClick={() => handleClick(id)}
                className={`flex items-center gap-1.5 md:gap-2 px-2.5 md:px-4 py-1.5 md:py-2 rounded-full text-[11px] md:text-sm font-medium whitespace-nowrap transition-all flex-shrink-0 ${
                  active
                    ? "bg-[#00D4FF]/15 text-[#00D4FF] border border-[#00D4FF]/50 shadow-[0_0_14px_rgba(0,212,255,0.30)]"
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
    </div>
  );
}
