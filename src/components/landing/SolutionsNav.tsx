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
      className={`fixed left-0 right-0 z-40 top-[60px] md:top-[68px] transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-2 pointer-events-none"
      } bg-[#0F1B3D]/92 backdrop-blur-md border-b border-white/10`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide py-2.5">
          <span className="hidden lg:block text-[10px] uppercase tracking-widest text-white/40 mr-3 whitespace-nowrap">
            Maestro AI OS
          </span>
          {solutions.map(({ id, label, icon: Icon }) => {
            const active = activeId === id;
            return (
              <button
                key={id}
                onClick={() => handleClick(id)}
                className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium whitespace-nowrap transition-all flex-shrink-0 ${
                  active
                    ? "bg-[#00D4FF]/15 text-[#00D4FF] border border-[#00D4FF]/40 shadow-[0_0_12px_rgba(0,212,255,0.2)]"
                    : "text-white/65 hover:text-white hover:bg-white/5 border border-transparent"
                }`}
              >
                <Icon size={16} strokeWidth={2} />
                <span>{label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
