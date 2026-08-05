import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowDown,
  Menu,
  ChevronDown,
  X as XIcon,
  Workflow,
  Lightbulb,
  Bot,
  Sparkles,
  Users,
  Database,
  Shield,
  ShieldCheck,
  Lock,
  KeyRound,
  ClipboardCheck,
  Eye,
  Layers,
  Network,
  GitBranch,
  Cpu,
  Cloud,
  Boxes,
  MessageSquare,
  BarChart3,
  LineChart,
  Search,
  Brain,
  Gauge,
  Target,
  Rocket,
  TrendingUp,
  Repeat,
  Zap,
  CheckCircle2,
  XCircle,
  Building2,
  ShoppingCart,
  Headphones,
  Megaphone,
  Truck,
  Wallet,
  Mail,
  Smartphone,
  Globe,
  Send,
  Plug,
  Compass,
  Wand2,
} from "lucide-react";
import { Reveal, Section, Tag } from "@/components/landing/Reveal";
import { DemoModal } from "@/components/landing/DemoModal";
import { WhatsAppButton } from "@/components/landing/WhatsAppButton";
import { HighlightBox } from "@/components/landing/HighlightBox";
import { SolutionsNav } from "@/components/landing/SolutionsNav";
import { GlowCard } from "@/components/ui/spotlight-card";
import KineticGrid from "@/components/ui/kinetic-grid";
import { PulseBeams, type Beam } from "@/components/ui/pulse-beams";
import { LampContainer } from "@/components/ui/lamp";
import { DeferredRobot } from "@/components/ui/deferred-robot";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { MaestroIntro } from "@/components/ui/maestro-intro";

const CYAN = "#22D3EE";

/* Beams pulsantes de fundo da seção "Decision Orchestration Layer" */
const CATEGORIA_GRADIENT = { start: "#18CCFC", middle: "#6344F5", end: "#AE48FF" };
const CATEGORIA_BEAMS: Beam[] = [
  {
    path: "M269 220.5H16.5C10.9772 220.5 6.5 224.977 6.5 230.5V398.5",
    gradientConfig: {
      initial: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" },
      animate: { x1: ["0%", "0%", "200%"], x2: ["0%", "0%", "180%"], y1: ["80%", "0%", "0%"], y2: ["100%", "20%", "20%"] },
      transition: { duration: 2, repeat: Infinity, repeatType: "loop", ease: "linear", repeatDelay: 2, delay: Math.random() * 2 },
    },
    connectionPoints: [{ cx: 6.5, cy: 398.5, r: 6 }, { cx: 269, cy: 220.5, r: 6 }],
  },
  {
    path: "M568 200H841C846.523 200 851 195.523 851 190V40",
    gradientConfig: {
      initial: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" },
      animate: { x1: ["20%", "100%", "100%"], x2: ["0%", "90%", "90%"], y1: ["80%", "80%", "-20%"], y2: ["100%", "100%", "0%"] },
      transition: { duration: 2, repeat: Infinity, repeatType: "loop", ease: "linear", repeatDelay: 2, delay: Math.random() * 2 },
    },
    connectionPoints: [{ cx: 851, cy: 34, r: 6.5 }, { cx: 568, cy: 200, r: 6 }],
  },
  {
    path: "M425.5 274V333C425.5 338.523 421.023 343 415.5 343H152C146.477 343 142 347.477 142 353V426.5",
    gradientConfig: {
      initial: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" },
      animate: { x1: ["20%", "100%", "100%"], x2: ["0%", "90%", "90%"], y1: ["80%", "80%", "-20%"], y2: ["100%", "100%", "0%"] },
      transition: { duration: 2, repeat: Infinity, repeatType: "loop", ease: "linear", repeatDelay: 2, delay: Math.random() * 2 },
    },
    connectionPoints: [{ cx: 142, cy: 427, r: 6.5 }, { cx: 425.5, cy: 274, r: 6 }],
  },
  {
    path: "M493 274V333.226C493 338.749 497.477 343.226 503 343.226H760C765.523 343.226 770 347.703 770 353.226V427",
    gradientConfig: {
      initial: { x1: "40%", x2: "50%", y1: "160%", y2: "180%" },
      animate: { x1: "0%", x2: "10%", y1: "-40%", y2: "-20%" },
      transition: { duration: 2, repeat: Infinity, repeatType: "loop", ease: "linear", repeatDelay: 2, delay: Math.random() * 2 },
    },
    connectionPoints: [{ cx: 770, cy: 427, r: 6.5 }, { cx: 493, cy: 274, r: 6 }],
  },
  {
    path: "M380 168V17C380 11.4772 384.477 7 390 7H414",
    gradientConfig: {
      initial: { x1: "-40%", x2: "-10%", y1: "0%", y2: "20%" },
      animate: { x1: ["40%", "0%", "0%"], x2: ["10%", "0%", "0%"], y1: ["0%", "0%", "180%"], y2: ["20%", "20%", "200%"] },
      transition: { duration: 2, repeat: Infinity, repeatType: "loop", ease: "linear", repeatDelay: 2, delay: Math.random() * 2 },
    },
    connectionPoints: [{ cx: 420.5, cy: 6.5, r: 6 }, { cx: 380, cy: 168, r: 6 }],
  },
];

export default function Index() {
  const [openDemo, setOpenDemo] = useState(false);
  const openModal = () => setOpenDemo(true);

  return (
    <main className="app-bg min-h-screen text-white overflow-hidden">
      <DemoModal open={openDemo} onClose={() => setOpenDemo(false)} />
      <Nav onDemo={openModal} />
      <SolutionsNav />
      <Hero onDemo={openModal} />
      <ResultsStrip />
      <NaoE />
      <Problema />
      <Categoria />
      <Capacidades />
      <Flow />
      <Insights />
      <DecisionTeams />
      <Composer />
      <CX />
      <Governanca />
      <Arquitetura />
      <Planos onDemo={openModal} />
      <Industrias />
      <OQueDizem />
      <CTAFinal onDemo={openModal} />
      <Footer onDemo={openModal} />
      <WhatsAppButton />
    </main>
  );
}

/* ==================== NAV ==================== */
type NavItem = { Icon: typeof Database; label: string; href: string; desc?: string };

const SOLUCOES: NavItem[] = [
  { Icon: Workflow, label: "Flow", href: "#flow", desc: "Fundação de dados governada" },
  { Icon: Lightbulb, label: "Insights", href: "#insights", desc: "Converse com seus dados" },
  { Icon: Bot, label: "Decision Teams", href: "#decision-teams", desc: "Agentes de IA por área" },
  { Icon: Sparkles, label: "Composer", href: "#composer", desc: "Criação conectada a dados" },
  { Icon: Users, label: "CX", href: "#cx", desc: "Jornadas orquestradas" },
];

const PLATAFORMA: NavItem[] = [
  { Icon: Compass, label: "Por que agora", href: "#por-que" },
  { Icon: Layers, label: "A categoria", href: "#categoria" },
  { Icon: Boxes, label: "As 5 capacidades", href: "#capacidades" },
];

const ENTERPRISE: NavItem[] = [
  { Icon: Shield, label: "Governança", href: "#governanca" },
  { Icon: Network, label: "Arquitetura", href: "#arquitetura" },
  { Icon: Gauge, label: "Planos", href: "#planos" },
];

function Nav({ onDemo }: { onDemo: () => void }) {
  const [solOpen, setSolOpen] = useState(false);
  const [platOpen, setPlatOpen] = useState(false);
  const [entOpen, setEntOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSolOpen, setMobileSolOpen] = useState(false);
  const [mobilePlatOpen, setMobilePlatOpen] = useState(false);
  const [mobileEntOpen, setMobileEntOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const goTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const Dropdown = ({ label, items, open, setOpen, wide }: {
    label: string; items: NavItem[]; open: boolean; setOpen: (v: boolean) => void; wide?: boolean;
  }) => (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        onClick={() => setOpen(!open)}
        className="hover:text-white inline-flex items-center gap-1 uppercase tracking-wider"
      >
        {label} <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18 }}
            className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 ${wide ? "w-[320px]" : "w-[280px]"}`}
          >
            <div className="rounded-xl p-3 backdrop-blur-md border border-white/10 shadow-2xl flex flex-col gap-0.5 bg-[#0A0D1C]/95">
              {items.map(({ Icon, label, href, desc }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors cursor-pointer normal-case tracking-normal group"
                >
                  <Icon className="w-5 h-5 mt-0.5 shrink-0" style={{ color: CYAN }} strokeWidth={1.75} />
                  <span>
                    <span className="block text-white text-sm font-semibold">{label}</span>
                    {desc && <span className="block text-white/50 text-xs mt-0.5">{desc}</span>}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <>
      <header
        className={`left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "fixed top-0 bg-[#0A0D1C]/85 backdrop-blur-md shadow-lg shadow-black/40 border-b border-white/5"
            : "absolute top-0 bg-transparent"
        }`}
      >
        <div className={`mx-auto max-w-7xl px-6 md:px-10 flex items-center justify-between transition-all duration-300 ${scrolled ? "py-3" : "py-6"}`}>
          <a href="#top" onClick={goTop} className="flex items-center cursor-pointer">
            <img src="/logos/maestro-wordmark.svg" alt="Maestro" className="h-11 md:h-14 w-auto" />
          </a>

          {/* Desktop ≥ xl */}
          <nav className="hidden xl:flex items-center gap-x-6 text-xs uppercase tracking-wider text-white/80">
            <a href="#comparativo" className="hover:text-white">Comparativo</a>
            <Dropdown label="Plataforma" items={PLATAFORMA} open={platOpen} setOpen={setPlatOpen} />
            <Dropdown label="Soluções" items={SOLUCOES} open={solOpen} setOpen={setSolOpen} wide />
            <Dropdown label="Enterprise" items={ENTERPRISE} open={entOpen} setOpen={setEntOpen} />
            <a href="#industrias" className="hover:text-white">Indústrias</a>
            <a href="#o-que-dizem" className="hover:text-white">O que dizem</a>
            <button
              onClick={() => document.getElementById("cta-final")?.scrollIntoView({ behavior: "smooth" })}
              className="ml-1 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider hover:scale-[1.03] transition-transform inline-flex items-center gap-1.5"
              style={{ background: "linear-gradient(100deg,#7C3AED,#4F46E5 55%,#06B6D4)", color: "#fff" }}
            >
              Falar com especialista <ArrowRight size={14} />
            </button>
          </nav>

          <button aria-label="Abrir menu" onClick={() => setMobileOpen(true)} className="xl:hidden text-white p-2 -mr-2">
            <Menu className="w-6 h-6" />
          </button>
        </div>
        {scrolled && <div className="menu-glow-line" />}
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[100] xl:hidden">
          <div className="absolute inset-0 bg-[#0A0D1C]" />
          <div className="relative h-full w-full flex flex-col overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <img src="/logos/maestro-wordmark.svg" alt="Maestro" className="h-6 w-auto" />
              <button aria-label="Fechar menu" onClick={() => setMobileOpen(false)} className="text-white p-2">
                <XIcon className="w-7 h-7" />
              </button>
            </div>
            <nav className="flex-1 px-6 py-6 space-y-1 text-white">
              <a href="#comparativo" onClick={() => setMobileOpen(false)} className="block px-3 py-3 rounded-lg hover:bg-white/5 font-medium text-lg">Comparativo</a>

              <button
                onClick={() => setMobilePlatOpen((v) => !v)}
                className="w-full flex items-center justify-between px-3 py-3 rounded-lg hover:bg-white/5 font-medium text-lg text-left"
              >
                Plataforma
                <ChevronDown size={18} className={`transition-transform ${mobilePlatOpen ? "rotate-180" : ""}`} />
              </button>
              {mobilePlatOpen && (
                <div className="pl-4 flex flex-col gap-1">
                  {PLATAFORMA.map(({ Icon, label, href }) => (
                    <a key={href} href={href} onClick={() => setMobileOpen(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 text-white/90">
                      <Icon className="w-5 h-5" style={{ color: CYAN }} strokeWidth={1.75} />
                      <span className="text-base">{label}</span>
                    </a>
                  ))}
                </div>
              )}

              <button
                onClick={() => setMobileSolOpen((v) => !v)}
                className="w-full flex items-center justify-between px-3 py-3 rounded-lg hover:bg-white/5 font-medium text-lg text-left"
              >
                Soluções
                <ChevronDown size={18} className={`transition-transform ${mobileSolOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileSolOpen && (
                <div className="pl-4 flex flex-col gap-1">
                  {SOLUCOES.map(({ Icon, label, href }) => (
                    <a key={href} href={href} onClick={() => setMobileOpen(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 text-white/90">
                      <Icon className="w-5 h-5" style={{ color: CYAN }} strokeWidth={1.75} />
                      <span className="text-base">{label}</span>
                    </a>
                  ))}
                </div>
              )}

              <button
                onClick={() => setMobileEntOpen((v) => !v)}
                className="w-full flex items-center justify-between px-3 py-3 rounded-lg hover:bg-white/5 font-medium text-lg text-left"
              >
                Enterprise
                <ChevronDown size={18} className={`transition-transform ${mobileEntOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileEntOpen && (
                <div className="pl-4 flex flex-col gap-1">
                  {ENTERPRISE.map(({ Icon, label, href }) => (
                    <a key={href} href={href} onClick={() => setMobileOpen(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 text-white/90">
                      <Icon className="w-5 h-5" style={{ color: CYAN }} strokeWidth={1.75} />
                      <span className="text-base">{label}</span>
                    </a>
                  ))}
                </div>
              )}

              <a href="#industrias" onClick={() => setMobileOpen(false)} className="block px-3 py-3 rounded-lg hover:bg-white/5 font-medium text-lg">Indústrias</a>
              <a href="#o-que-dizem" onClick={() => setMobileOpen(false)} className="block px-3 py-3 rounded-lg hover:bg-white/5 font-medium text-lg">O que dizem</a>

              <button
                onClick={() => { setMobileOpen(false); setTimeout(() => document.getElementById("cta-final")?.scrollIntoView({ behavior: "smooth" }), 100); }}
                className="mt-6 w-full px-4 py-3.5 rounded-full font-semibold inline-flex items-center justify-center gap-2"
                style={{ background: "linear-gradient(100deg,#7C3AED,#4F46E5 55%,#06B6D4)", color: "#fff" }}
              >
                Falar com especialista <ArrowRight size={16} />
              </button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

/* ==================== HERO ==================== */
function Hero({ onDemo }: { onDemo: () => void }) {
  const ease = [0.22, 1, 0.36, 1] as const;
  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease },
  });
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");
    const tryPlay = () => { const p = video.play(); if (p !== undefined) p.catch(() => {}); };
    tryPlay();
    const onLoaded = () => tryPlay();
    video.addEventListener("loadedmetadata", onLoaded);
    video.addEventListener("canplay", onLoaded);
    const onFirst = () => {
      tryPlay();
      window.removeEventListener("touchstart", onFirst);
      window.removeEventListener("scroll", onFirst);
      window.removeEventListener("click", onFirst);
    };
    window.addEventListener("touchstart", onFirst, { passive: true });
    window.addEventListener("scroll", onFirst, { passive: true });
    window.addEventListener("click", onFirst);
    return () => {
      video.removeEventListener("loadedmetadata", onLoaded);
      video.removeEventListener("canplay", onLoaded);
      window.removeEventListener("touchstart", onFirst);
      window.removeEventListener("scroll", onFirst);
      window.removeEventListener("click", onFirst);
    };
  }, []);

  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      <video
        ref={videoRef}
        autoPlay loop muted playsInline preload="metadata" poster="/maestro-poster.jpg" disablePictureInPicture
        {...({ "webkit-playsinline": "true" } as Record<string, string>)}
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      >
        <source src="/maestro.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-[#05070F]/75 via-[#05070F]/70 to-[#05070F]/92" />
      <KineticGrid className="opacity-70" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(900px 500px at 78% 8%, rgba(124,58,237,0.30), transparent 60%), radial-gradient(700px 500px at 12% 30%, rgba(34,211,238,0.16), transparent 55%)" }} />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-6 py-24 md:py-28">
        <div className="mb-7">
          <MaestroIntro />
        </div>

        <motion.div {...fadeUp(0.08)}>
          <span className="inline-flex items-center gap-2 bg-white/8 backdrop-blur-md border border-white/15 rounded-full px-5 py-2 text-[11px] md:text-xs uppercase tracking-[0.22em] text-white/85 mb-8">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: CYAN, boxShadow: `0 0 10px ${CYAN}` }} />
            Growth &amp; Decision Operating System
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.16)}
          className="text-2xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight max-w-3xl mb-7 font-bold"
        >
          <span className="text-white/90 font-light">Transforme </span>
          <span className="text-gradient">ruído</span>
          <span className="text-white/90 font-light"> em </span>
          <span className="text-gradient-brand">resultado!</span>
        </motion.h1>

        <motion.p {...fadeUp(0.26)} className="text-white/70 text-sm md:text-lg max-w-xl mb-10 leading-relaxed">
          A camada que faz seus dados, sua IA e suas ferramentas trabalharem juntos,
          por decisões melhores e mais rápidas.
        </motion.p>

        <motion.div {...fadeUp(0.34)} className="flex flex-col sm:flex-row gap-4 items-center">
          <button
            onClick={() => document.getElementById("cta-final")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary-light"
          >
            Falar com especialista <ArrowRight size={18} />
          </button>
          <a href="#comparativo" className="btn-ghost">
            Ver como funciona <ArrowDown size={16} />
          </a>
        </motion.div>

        <motion.p {...fadeUp(0.44)} className="text-white/50 text-sm mt-7">
          Conversa executiva de 30 min · sem compromisso · NDA disponível
        </motion.p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#05070F] to-transparent" />
    </section>
  );
}

/* ==================== FAIXA DE RESULTADOS (marquee) ==================== */
function ResultsStrip() {
  const items = [
    "Decisões melhores", "Campanhas eficazes", "Experiências personalizadas",
    "Maior produtividade", "Crescimento de receita", "Governança by design",
  ];
  const doubled = [...items, ...items];
  return (
    <div className="relative py-6 border-y border-white/[0.06] bg-white/[0.015] overflow-hidden marquee-mask">
      <div className="marquee-track gap-10">
        {doubled.map((t, i) => (
          <span key={i} className="inline-flex items-center gap-3 text-sm md:text-base text-white/55 whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: CYAN }} />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ==================== COMPARATIVO · O QUE O MAESTRO NÃO É ==================== */
function NaoE() {
  const nots = [
    { Icon: MessageSquare, t: "Não é chatbot", d: "Transforma contexto em decisão, não perguntas em respostas. A inteligência opera sobre os dados reais do seu negócio." },
    { Icon: BarChart3, t: "Não é BI tradicional", d: "Vai da análise à recomendação e à ação. O objetivo não é visualizar o dado. É decidir com ele." },
    { Icon: Bot, t: "Não é copilot isolado", d: "Coordena inteligências especializadas e processos entre áreas, em vez de um assistente que só ajuda uma pessoa por vez." },
    { Icon: Plug, t: "Não substitui seu stack", d: "Conecta e potencializa o que já existe: Salesforce, SAP, VTEX, HubSpot e o resto do ecossistema." },
  ];
  return (
    <Section id="comparativo">
      <Reveal><Tag><Compass size={12} /> Onde o Maestro se encaixa</Tag></Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-6 text-4xl md:text-5xl font-semibold max-w-3xl">
          Antes de tudo, o que o Maestro <span className="text-gradient-brand">não é.</span>
        </h2>
      </Reveal>
      <Reveal delay={0.14}>
        <p className="mt-5 text-lg text-white/70 max-w-2xl">
          Entender o Maestro começa desfazendo três ou quatro comparações fáceis. Ele não é mais uma ferramenta
          no stack. É a camada que faz o stack funcionar de forma coordenada.
        </p>
      </Reveal>

      <div className="mt-12 grid sm:grid-cols-2 gap-5">
        {nots.map(({ Icon, t, d }, i) => (
          <Reveal key={t} delay={0.05 * i}>
            <GlowCard customSize glowColor="red" className="p-6 md:p-7 h-full">
              <div className="flex items-center gap-3">
                <span className="grid place-items-center w-10 h-10 rounded-xl bg-white/5 border border-white/10">
                  <Icon size={20} className="text-white/80" />
                </span>
                <XCircle size={18} className="text-[#EF4444]" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{t}</h3>
              <p className="mt-2 text-white/65 leading-relaxed">{d}</p>
            </GlowCard>
          </Reveal>
        ))}
      </div>

      <HighlightBox
        miniTag="Em uma frase"
        bottomLine={<>O Maestro não adiciona mais uma ferramenta ao stack. Ele cria <span className="text-gradient">coordenação</span> entre os ativos que você já tem.</>}
      />
    </Section>
  );
}

/* ==================== PROBLEMA / POR QUE AGORA ==================== */
function Problema() {
  const sequencia = [
    { n: "01", Icon: Plug, t: "Conectar", d: "Integrar sistemas e fontes internas." },
    { n: "02", Icon: Brain, t: "Compreender", d: "Usar IA para interpretar os sinais que importam." },
    { n: "03", Icon: Network, t: "Coordenar", d: "Alinhar ações entre áreas e times." },
    { n: "04", Icon: Rocket, t: "Agir", d: "Executar rápido e medir o resultado." },
  ];
  const cards = [
    { Icon: Database, t: "Dados de sobra, decisões lentas", d: "As empresas têm mais dados do que nunca, e ainda levam semanas para transformá-los em ação." },
    { Icon: Shield, t: "IA sem governança é risco", d: "Modelos rodando sem controle criam exposição regulatória, erro operacional e perda de confiança." },
    { Icon: Boxes, t: "Stack fragmentado", d: "Cada sistema vira um silo. A soma das ferramentas não entrega a soma dos resultados." },
    { Icon: Network, t: "Coordenação é a nova vantagem", d: "Quem conectar dados, IA e execução primeiro vai definir o padrão do próprio setor." },
  ];
  return (
    <Section id="por-que" className="overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute -top-16 right-[-8%] w-[520px] h-[520px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.45), transparent 70%)" }}
          animate={{ y: [0, 26, 0], scale: [1, 1.06, 1], opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-14%] left-[-8%] w-[460px] h-[460px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(34,211,238,0.30), transparent 70%)" }}
          animate={{ y: [0, -22, 0], scale: [1, 1.08, 1], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
      </div>
      <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-12 items-center">
        <div>
          <Reveal><Tag><Zap size={12} /> O novo gargalo</Tag></Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 text-4xl md:text-5xl font-semibold leading-tight">
              O mundo não precisa de mais sistemas.
              <span className="block text-white/55 font-light text-2xl md:text-3xl mt-3">
                Precisa de coordenação entre os que já existem.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-6 text-lg text-white/70 max-w-xl">
              CRM, ERP, BI, CDP, Data Lake, e-commerce, APIs, várias IAs. O stack nunca esteve tão robusto,
              e o resultado segue abaixo do potencial. O problema não é falta de tecnologia. É falta de coordenação
              entre dados, sistemas, inteligência e execução.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.1} className="hidden lg:block">
          <DeferredRobot
            scene="https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode"
            className="relative h-[440px] w-full overflow-hidden"
          />
        </Reveal>
      </div>

      <Reveal delay={0.2}>
        <p className="mt-16 text-sm uppercase tracking-[0.22em] text-white/45">A sequência que separa quem decide melhor</p>
      </Reveal>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {sequencia.map(({ n, Icon, t, d }, i) => (
          <Reveal key={t} delay={0.06 * i}>
            <GlowCard customSize glowColor="purple" className="p-6 h-full">
              <span className="absolute top-5 right-5 text-4xl font-bold text-white/[0.06]">{n}</span>
              <Icon size={26} style={{ color: CYAN }} />
              <h3 className="mt-4 text-lg font-semibold">{t}</h3>
              <p className="mt-1.5 text-sm text-white/60">{d}</p>
            </GlowCard>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <h3 className="mt-20 text-2xl md:text-3xl font-semibold">Por que agora?</h3>
        <p className="mt-2 text-white/60 max-w-2xl">
          A janela de diferenciação está aberta, mas não fica aberta para sempre. Quem constrói a camada de
          orquestração hoje ganha uma vantagem difícil de copiar.
        </p>
      </Reveal>
      <div className="mt-8 grid sm:grid-cols-2 gap-4">
        {cards.map(({ Icon, t, d }, i) => (
          <Reveal key={t} delay={0.05 * i}>
            <div className="flex gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.07] h-full hover:border-white/20 transition-colors">
              <Icon size={24} className="shrink-0 mt-1" style={{ color: "#A855F7" }} />
              <div>
                <h4 className="font-semibold text-lg">{t}</h4>
                <p className="mt-1 text-white/60 text-sm leading-relaxed">{d}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ==================== CATEGORIA · DECISION ORCHESTRATION LAYER ==================== */
function Categoria() {
  const base = [
    { t: "CRM", Icon: Users },
    { t: "ERP", Icon: Boxes },
    { t: "BI", Icon: BarChart3 },
    { t: "CDP", Icon: Database },
    { t: "Data Lake", Icon: Cloud },
    { t: "Commerce", Icon: ShoppingCart },
    { t: "APIs", Icon: Plug },
  ];
  const topo = [
    { Icon: TrendingUp, t: "Crescimento" },
    { Icon: Target, t: "Metas batidas" },
    { Icon: Users, t: "Cliente no centro" },
    { Icon: Zap, t: "Ação rápida" },
    { Icon: Gauge, t: "Performance" },
  ];
  return (
    <Section id="categoria" className="grid-tech overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-70">
        <PulseBeams beams={CATEGORIA_BEAMS} gradientColors={CATEGORIA_GRADIENT} className="h-full w-full" />
      </div>
      <div className="relative z-10">
      <div className="text-center max-w-3xl mx-auto">
        <Reveal><span className="tag-pill mx-auto"><Layers size={12} /> Nova categoria</span></Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 text-4xl md:text-6xl font-bold leading-[1.05]">
            Decision <span className="text-gradient-brand">Orchestration Layer</span>
          </h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mt-6 text-lg text-white/70">
            A camada que transforma sistemas, dados e IA em decisões operacionais. O Maestro fica entre o
            seu stack e a operação do negócio, sem substituir nada, tornando tudo mais inteligente e coordenado.
          </p>
        </Reveal>
      </div>

      {/* Diagrama 3 faixas */}
      <div className="mt-14 max-w-4xl mx-auto space-y-4">
        <Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {topo.map(({ Icon, t }, i) => (
              <div key={t} className="surface-card px-3 py-4 text-center" style={{ animationDelay: `${i * 0.1}s` }}>
                <Icon size={22} className="mx-auto" style={{ color: CYAN }} />
                <p className="mt-2 text-xs text-white/75">{t}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative rounded-2xl p-[1.5px]" style={{ background: "linear-gradient(100deg,#7C3AED,#4F46E5 50%,#06B6D4)" }}>
            <div className="rounded-2xl bg-[#0A0D1C] px-6 py-8 text-center">
              <div className="flex items-center justify-center gap-3">
                <img src="/logos/maestro-icon2.png" alt="" width={36} height={36} className="h-9 w-9 object-contain shrink-0" />
                <span className="text-xl md:text-2xl font-bold">Maestro</span>
              </div>
              <p className="mt-3 text-sm md:text-base text-white/70">
                Conecta · Compreende · Coordena · Distribui
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.13}>
          <div className="flex justify-center" aria-hidden="true">
            <div className="w-px h-6 bg-gradient-to-b from-[#22D3EE]/60 to-transparent" />
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/40 mb-4 text-center">Camada de sistemas</p>
            <div className="flex flex-wrap justify-center gap-2.5">
              {base.map(({ t, Icon }) => (
                <div key={t} className="w-[86px] md:w-[104px] flex flex-col items-center gap-2 py-4 px-2 rounded-xl bg-white border border-white/70 hover:-translate-y-0.5 transition-transform">
                  <Icon size={22} style={{ color: "#4F46E5" }} strokeWidth={2} />
                  <span className="text-xs font-bold text-[#0A0D1C] text-center">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
      </div>
    </Section>
  );
}

/* ==================== AS 5 CAPACIDADES + CICLO ==================== */
function Capacidades() {
  const caps = [
    { Icon: Workflow, t: "Flow", d: "Integra, organiza e governa dados de todas as fontes.", href: "#flow" },
    { Icon: Lightbulb, t: "Insights", d: "Inteligência analítica que revela o que realmente importa.", href: "#insights" },
    { Icon: Bot, t: "Decision Teams", d: "Agentes de IA que interpretam contexto e recomendam ações.", href: "#decision-teams" },
    { Icon: Sparkles, t: "Composer", d: "Criação inteligente de conteúdos e experiências em escala.", href: "#composer" },
    { Icon: Users, t: "CX", d: "Jornadas e ativações que conectam cada decisão ao cliente.", href: "#cx" },
  ];
  return (
    <Section id="capacidades" className="overflow-hidden">
      <LampContainer className="-mt-6 mb-[-3.5rem] md:mb-[-4.5rem]">
        <span className="tag-pill mb-5"><Boxes size={12} /> A plataforma</span>
        <h2 className="text-4xl md:text-5xl font-semibold">
          Cinco capacidades. <span className="text-gradient">Uma inteligência contínua.</span>
        </h2>
      </LampContainer>
      <Reveal delay={0.1} className="relative z-10">
        <p className="text-center text-base md:text-lg text-white max-w-2xl mx-auto">
          Não são cinco produtos soltos. São capacidades de uma única plataforma, feitas para operar em fluxo:
          cada interação gera um sinal, cada sinal melhora a próxima decisão.
        </p>
      </Reveal>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {caps.map(({ Icon, t, d, href }, i) => (
          <Reveal key={t} delay={0.06 * i}>
            <a href={href} className="block h-full group">
              <GlowCard customSize glowColor="purple" className="p-6 h-full">
                <span className="grid place-items-center w-12 h-12 rounded-xl mb-4" style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(34,211,238,0.18))" }}>
                  <Icon size={24} style={{ color: CYAN }} />
                </span>
                <h3 className="text-lg font-semibold flex items-center gap-1.5">
                  {t}
                  <ArrowRight size={15} className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                </h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">{d}</p>
              </GlowCard>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-8 flex items-center justify-center gap-3 text-sm text-white/55">
          <Repeat size={16} style={{ color: CYAN }} />
          <span>Aprendizado contínuo: cada ciclo alimenta o próximo e volta ao Flow.</span>
        </div>
      </Reveal>
    </Section>
  );
}

/* ==================== helper: cabeçalho de módulo ==================== */
function ModuleHeader({ eyebrow, Icon, name, title, lead }: { eyebrow: string; Icon: typeof Database; name: string; title: React.ReactNode; lead: string }) {
  return (
    <>
      <Reveal>
        <span className="tag-pill">
          <Icon size={12} style={{ color: CYAN }} /> {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-6 max-w-4xl leading-tight">
          <span className="glow-name text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight" data-text={name}>{name}</span>
          <span className="block mt-4 text-2xl md:text-3xl font-medium text-white/85">{title}</span>
        </h2>
      </Reveal>
      <Reveal delay={0.14}>
        <p className="mt-5 text-lg text-white/70 max-w-2xl">{lead}</p>
      </Reveal>
    </>
  );
}

/* ==================== FLOW ==================== */
function Flow() {
  const etapas = [
    { t: "Conectar", Icon: Plug },
    { t: "Normalizar", Icon: Layers },
    { t: "Governar", Icon: Shield },
    { t: "Enriquecer", Icon: Sparkles },
    { t: "Modelar", Icon: Boxes },
    { t: "Distribuir", Icon: Send },
  ];
  const ativos = [
    { Icon: Users, t: "Visão de cliente", d: "Perfil unificado, com histórico completo de comportamento e transações." },
    { Icon: LineChart, t: "Scores & propensão", d: "RFM, churn, LTV, propensão de compra e Next Best Action." },
    { Icon: Zap, t: "Sinais acionáveis", d: "Recomendações prontas para agentes, canais e sistemas." },
  ];
  return (
    <Section id="flow" bg={<div className="hidden md:block absolute inset-0"><KineticGrid className="opacity-[0.18]" /></div>}>
      <ModuleHeader
        eyebrow="Flow · Fundação"
        Icon={Workflow}
        name="Maestro Flow"
        title="conecta todos os dados, de todas as fontes."
        lead="Integra e move dados com confiabilidade, governança e contexto, para alimentar decisões em tempo real. Do registro disperso ao ativo pronto para usar em toda a operação."
      />

      <Reveal delay={0.1}>
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-white/45 mb-6 text-center">Esteira de processamento</p>
          <div className="grid grid-cols-3 gap-3 md:flex md:flex-wrap md:items-center md:justify-center md:gap-y-4">
            {etapas.map(({ t, Icon }, i) => (
              <div key={t} className="flex items-center justify-center">
                <div className="flex flex-col items-center gap-2 w-full md:w-28 py-4 px-2 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#22D3EE]/40 transition-colors">
                  <span className="grid place-items-center w-10 h-10 rounded-lg" style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.28), rgba(34,211,238,0.2))" }}>
                    <Icon size={18} style={{ color: CYAN }} />
                  </span>
                  <span className="text-xs md:text-sm text-white/80 text-center">{t}</span>
                </div>
                {i < etapas.length - 1 && <ArrowRight size={16} className="hidden md:block text-white/25 md:mx-2 shrink-0" />}
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {ativos.map(({ Icon, t, d }, i) => (
          <Reveal key={t} delay={0.06 * i}>
            <GlowCard customSize glowColor="cyan" className="p-6 h-full">
              <Icon size={24} style={{ color: CYAN }} />
              <h3 className="mt-4 text-lg font-semibold">{t}</h3>
              <p className="mt-1.5 text-sm text-white/60 leading-relaxed">{d}</p>
            </GlowCard>
          </Reveal>
        ))}
      </div>

      <HighlightBox
        miniTag="O princípio do Flow"
        bottomLine={<>Dados tratados uma vez. <span className="text-gradient">Inteligência reutilizada</span> em toda a operação.</>}
      />
    </Section>
  );
}

/* ==================== INSIGHTS ==================== */
function Insights() {
  const feats = [
    { Icon: MessageSquare, t: "Linguagem natural", d: "Qualquer pessoa explora os dados sem escrever uma linha de SQL." },
    { Icon: BarChart3, t: "Visualização precisa", d: "Gráficos, dashboards e datasets em tempo real." },
    { Icon: Brain, t: "Interpretação com IA", d: "O assistente explica o dado e orienta a decisão." },
  ];
  const estagios = [
    { t: "Diagnóstico", q: "O que está acontecendo agora?", Icon: Search },
    { t: "Causa raiz", q: "Por que está acontecendo?", Icon: GitBranch },
    { t: "Previsão", q: "O que pode acontecer?", Icon: LineChart },
    { t: "Recomendação", q: "O que fazer agora?", Icon: Target },
  ];
  return (
    <Section id="insights" bg={<div className="hidden md:block absolute inset-0"><KineticGrid className="opacity-[0.18]" /></div>}>
      <ModuleHeader
        eyebrow="Insights · Análise"
        Icon={Lightbulb}
        name="Maestro Insights"
        title="deixa você conversar com os seus dados."
        lead="A profundidade de um BI moderno com um assistente treinado no contexto real do seu negócio. Perguntas em linguagem natural viram análise executiva pronta para agir."
      />

      <div className="mt-12 grid md:grid-cols-3 gap-4">
        {feats.map(({ Icon, t, d }, i) => (
          <Reveal key={t} delay={0.06 * i}>
            <GlowCard customSize glowColor="cyan" className="p-6 h-full">
              <Icon size={24} style={{ color: CYAN }} />
              <h3 className="mt-4 text-lg font-semibold">{t}</h3>
              <p className="mt-1.5 text-sm text-white/60 leading-relaxed">{d}</p>
            </GlowCard>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <p className="mt-16 text-sm uppercase tracking-[0.22em] text-white/45">Quatro níveis de profundidade</p>
      </Reveal>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {estagios.map(({ t, q, Icon }, i) => (
          <Reveal key={t} delay={0.06 * i}>
            <GlowCard customSize glowColor="purple" className="p-6 h-full">
              <div className="flex items-center justify-between">
                <span className="grid place-items-center w-11 h-11 rounded-xl" style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(34,211,238,0.2))" }}>
                  <Icon size={19} style={{ color: CYAN }} />
                </span>
                <span className="text-4xl md:text-5xl font-extrabold leading-none text-white/15">0{i + 1}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-white/60 text-sm">{q}</p>
            </GlowCard>
          </Reveal>
        ))}
      </div>

      <HighlightBox
        miniTag="O que muda de verdade"
        bottomLine={<>Não é só dashboard. É <span className="text-gradient">decisão explicada</span>, e o tempo entre entender e decidir encolhe.</>}
      />
    </Section>
  );
}

/* ==================== DECISION TEAMS ==================== */
function DecisionTeams() {
  const agentes = [
    { Icon: Wallet, t: "Financeiro", d: "Decisões por performance, risco e eficiência." },
    { Icon: Megaphone, t: "Marketing", d: "Campanhas, audiência e conteúdo com IA no comando." },
    { Icon: Target, t: "CRM & Vendas", d: "Pipeline inteligente e próximos passos recomendados." },
    { Icon: Gauge, t: "Operações", d: "Processos autônomos, previsão e otimização." },
    { Icon: Headphones, t: "Atendimento", d: "Respostas certas e resolução no primeiro contato." },
    { Icon: Truck, t: "Supply & Trade", d: "Demanda, estoque e parceiros orquestrados por IA." },
  ];
  const niveis = [
    { n: "Nível 1", t: "Responder", Icon: MessageSquare, d: "Consulta direta a dados e contexto. O ponto de partida de qualquer análise." },
    { n: "Nível 2", t: "Recomendar", Icon: Lightbulb, d: "Interpretação e orientação estratégica. A IA explica e sugere o próximo passo." },
    { n: "Nível 3", t: "Prever", Icon: LineChart, d: "Modelos, cenários e probabilidades. Antecipe movimentos antes que virem problema." },
  ];
  return (
    <Section id="decision-teams" bg={<div className="hidden md:block absolute inset-0"><KineticGrid className="opacity-[0.18]" /></div>}>
      <ModuleHeader
        eyebrow="Decision Teams · Agentes"
        Icon={Bot}
        name="Maestro Decision Teams"
        title="alinha times de IA com contexto, permissão e governança por agente."
        lead="Agentes especializados atuam com autonomia guiada, acessando apenas o que é relevante para decidir melhor. Nenhum deles opera fora do perímetro que você define."
      />

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {agentes.map(({ Icon, t, d }, i) => (
          <Reveal key={t} delay={0.05 * i}>
            <GlowCard customSize glowColor="purple" className="p-6 h-full flex gap-4">
              <span className="grid place-items-center w-11 h-11 rounded-xl shrink-0" style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(34,211,238,0.18))" }}>
                <Icon size={20} style={{ color: CYAN }} />
              </span>
              <div>
                <h3 className="text-lg font-semibold">{t}</h3>
                <p className="mt-1 text-sm text-white/60">{d}</p>
              </div>
            </GlowCard>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <p className="mt-16 text-sm uppercase tracking-[0.22em] text-white/45">De resposta a decisão</p>
      </Reveal>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {niveis.map(({ n, t, Icon, d }, i) => (
          <Reveal key={t} delay={0.08 * i}>
            <div style={{ marginTop: `${i * 14}px` }} className="h-full">
              <GlowCard customSize glowColor="purple" className="p-6 h-full">
                <div className="flex items-center gap-3">
                  <span className="grid place-items-center w-11 h-11 rounded-xl" style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(34,211,238,0.2))" }}>
                    <Icon size={20} style={{ color: CYAN }} />
                  </span>
                  <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: "#A855F7" }}>{n}</span>
                </div>
                <h3 className="mt-3 text-xl font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">{d}</p>
              </GlowCard>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ==================== COMPOSER (novo) ==================== */
function Composer() {
  const entradas = ["Dados e comportamento", "Segmentos e audiências", "Insights e performance", "Diretrizes de marca", "Objetivos e KPIs", "Ativos e referências"];
  const saidas = ["Conteúdo personalizado", "Variações inteligentes", "Planos e calendários", "Ativações multicanais", "Previsão de performance", "Aprendizado contínuo"];
  const difs = [
    { Icon: ShieldCheck, t: "Consistência de marca", d: "DNA e guidelines respeitados em todos os formatos." },
    { Icon: Zap, t: "Velocidade", d: "Do briefing ao enxoval completo em uma fração do tempo." },
    { Icon: Repeat, t: "Aprendizado contínuo", d: "Cada campanha alimenta a inteligência da próxima." },
  ];
  return (
    <Section id="composer" bg={<div className="hidden md:block absolute inset-0"><KineticGrid className="opacity-[0.18]" /></div>}>
      <ModuleHeader
        eyebrow="Composer · Criação"
        Icon={Sparkles}
        name="Maestro Composer"
        title="cria com inteligência, orquestrada por contexto."
        lead="Do insight à entrega, com IA e dados trabalhando juntos para gerar experiências que performam. Não é geração de conteúdo: é inteligência criativa conectada ao desempenho."
      />

      <div className="mt-12 grid lg:grid-cols-[1fr_auto_1fr] gap-6 items-stretch">
        <Reveal>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 h-full">
            <p className="text-xs uppercase tracking-[0.2em] text-white/45 mb-4">Entradas de contexto</p>
            <ul className="space-y-2.5">
              {entradas.map((e) => (
                <li key={e} className="flex items-center gap-2.5 text-sm text-white/75">
                  <ArrowRight size={14} style={{ color: "#A855F7" }} /> {e}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="hidden lg:flex items-center">
          <motion.div
            className="relative grid place-items-center w-16 h-16 rounded-2xl"
            style={{ background: "linear-gradient(135deg,#7C3AED,#06B6D4)" }}
            animate={{ boxShadow: ["0 0 0px rgba(34,211,238,0)", "0 0 30px rgba(34,211,238,0.75)", "0 0 0px rgba(34,211,238,0)"] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              animate={{ rotate: [-8, 8, -8], scale: [1, 1.1, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Wand2 size={28} className="text-white" />
            </motion.div>
            <motion.span
              className="absolute -top-1.5 -right-1.5"
              animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5], rotate: [0, 120, 180] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles size={14} className="text-white" />
            </motion.span>
            <motion.span
              className="absolute -bottom-1.5 -left-1"
              animate={{ opacity: [0, 1, 0], scale: [0.4, 0.9, 0.4] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
            >
              <Sparkles size={10} style={{ color: "#E9D5FF" }} />
            </motion.span>
          </motion.div>
        </Reveal>

        <Reveal delay={0.16}>
          <div
            className="h-full rounded-2xl"
            style={{ boxShadow: "0 0 55px -8px rgba(34,211,238,0.5), 0 0 100px -24px rgba(124,58,237,0.55)" }}
          >
            <GlowCard customSize glowColor="cyan" className="p-6 h-full">
              <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ background: "linear-gradient(160deg, rgba(124,58,237,0.22), rgba(6,182,212,0.15))" }} />
              <div className="relative z-10">
                <p className="text-xs uppercase tracking-[0.2em] mb-4 flex items-center gap-2" style={{ color: CYAN }}>
                  <Sparkles size={13} /> Saídas coordenadas
                </p>
                <ul className="space-y-2.5">
                  {saidas.map((s) => (
                    <li key={s} className="flex items-center gap-2.5 text-sm text-white/90">
                      <CheckCircle2 size={14} style={{ color: CYAN }} /> {s}
                    </li>
                  ))}
                </ul>
              </div>
            </GlowCard>
          </div>
        </Reveal>
      </div>

      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {difs.map(({ Icon, t, d }, i) => (
          <Reveal key={t} delay={0.06 * i}>
            <GlowCard customSize glowColor="cyan" className="p-6 h-full">
              <Icon size={24} style={{ color: CYAN }} />
              <h3 className="mt-4 text-lg font-semibold">{t}</h3>
              <p className="mt-1.5 text-sm text-white/60">{d}</p>
            </GlowCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ==================== CX ==================== */
function CX() {
  const certos = [
    { Icon: Users, t: "Pessoa certa", d: "Segmentação que entende quem é, o que importa e o que motiva cada um." },
    { Icon: Zap, t: "Momento certo", d: "A IA lê sinais e gatilhos para agir no instante mais relevante da jornada." },
    { Icon: Network, t: "Canal certo", d: "Escolha dinâmica do melhor canal para atenção, engajamento e conversão." },
    { Icon: Gauge, t: "Frequência certa", d: "Cadência ideal para gerar impacto sem saturar a experiência." },
  ];
  const canais = [
    { Icon: MessageSquare, t: "WhatsApp" }, { Icon: Mail, t: "E-mail" }, { Icon: Smartphone, t: "App" },
    { Icon: Send, t: "SMS" }, { Icon: Globe, t: "Web" }, { Icon: Megaphone, t: "Social" },
  ];
  return (
    <Section id="cx" bg={<div className="hidden md:block absolute inset-0"><KineticGrid className="opacity-[0.18]" /></div>}>
      <ModuleHeader
        eyebrow="CX · Ativação"
        Icon={Users}
        name="Maestro CX"
        title="conecta intenção, contexto e resultado em cada jornada."
        lead="O Maestro orquestra cada jornada para entregar a mensagem certa, para a pessoa certa, no momento certo, pelo canal certo e na frequência certa."
      />

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {certos.map(({ Icon, t, d }, i) => (
          <Reveal key={t} delay={0.06 * i}>
            <GlowCard customSize glowColor="cyan" className="p-6 h-full">
              <Icon size={24} style={{ color: CYAN }} />
              <h3 className="mt-4 text-lg font-semibold">{t}</h3>
              <p className="mt-1.5 text-sm text-white/60 leading-relaxed">{d}</p>
            </GlowCard>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-8">
          <p className="text-sm text-white/45 mb-3 text-center md:text-left">Canais orquestrados</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-2.5">
            {canais.map(({ Icon, t }) => (
              <span key={t} className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/[0.03] border border-white/10 text-sm text-white/75">
                <Icon size={15} style={{ color: CYAN }} /> {t}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

/* ==================== GOVERNANÇA ==================== */
function Governanca() {
  const pilares = [
    { Icon: Lock, t: "Segurança", d: "Proteção de dados em trânsito e em repouso." },
    { Icon: Eye, t: "Rastreabilidade", d: "Log completo de cada decisão e acesso." },
    { Icon: KeyRound, t: "Permissões", d: "Controle granular por perfil e domínio." },
    { Icon: ClipboardCheck, t: "Qualidade", d: "Dados tratados, deduplicados e confiáveis." },
    { Icon: ShieldCheck, t: "Model Governance", d: "Uso controlado de dados reais e sintéticos." },
  ];
  const comp = [
    { trad: "Governança adicionada depois, como camada separada", maestro: "Governança by design: nasce na fundação Flow" },
    { trad: "Permissões manuais e inconsistentes", maestro: "Permissões granulares por perfil e domínio" },
    { trad: "Baixa rastreabilidade das decisões de IA", maestro: "Rastreabilidade completa de cada decisão e acesso" },
    { trad: "Dados expostos a vários modelos sem controle", maestro: "Dados reais e sintéticos sob controle total" },
  ];
  return (
    <Section id="governanca">
      <ModuleHeader
        eyebrow="Governança"
        Icon={Shield}
        title={<>Governança como <span className="text-gradient-brand">fundação competitiva.</span></>}
        lead="Com múltiplos agentes, modelos e dados sensíveis, governança deixou de ser compliance. Virou infraestrutura estratégica, e no Maestro ela é operacional desde o primeiro dia."
      />

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {pilares.map(({ Icon, t, d }, i) => (
          <Reveal key={t} delay={0.05 * i}>
            <GlowCard customSize glowColor="cyan" className="p-5 h-full text-center">
              <Icon size={24} className="mx-auto" style={{ color: CYAN }} />
              <h3 className="mt-3 font-semibold">{t}</h3>
              <p className="mt-1 text-xs text-white/55 leading-relaxed">{d}</p>
            </GlowCard>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-10 grid md:grid-cols-2 gap-px rounded-2xl overflow-hidden border border-white/10">
          <div className="bg-[#1A0B0B]/40 p-6 md:p-8">
            <div className="flex items-center gap-2 text-[#EF4444] mb-4"><XCircle size={18} /> <span className="font-semibold uppercase text-xs tracking-widest">Abordagem tradicional</span></div>
            <ul className="space-y-3">
              {comp.map((c, i) => (
                <li key={i} className="flex gap-2.5 text-sm text-white/60"><XCircle size={16} className="text-[#EF4444]/70 shrink-0 mt-0.5" /> {c.trad}</li>
              ))}
            </ul>
          </div>
          <div className="p-6 md:p-8" style={{ background: "linear-gradient(160deg, rgba(124,58,237,0.12), rgba(6,182,212,0.08))" }}>
            <div className="flex items-center gap-2 mb-4" style={{ color: CYAN }}><ShieldCheck size={18} /> <span className="font-semibold uppercase text-xs tracking-widest">Abordagem Maestro</span></div>
            <ul className="space-y-3">
              {comp.map((c, i) => (
                <li key={i} className="flex gap-2.5 text-sm text-white/85"><CheckCircle2 size={16} className="shrink-0 mt-0.5" style={{ color: CYAN }} /> {c.maestro}</li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

/* ==================== ARQUITETURA DE REFERÊNCIA ==================== */
function Arquitetura() {
  const camadas = [
    { t: "Fontes", sub: "Dados de todas as origens", items: "Data Lake · CRM · ERP · E-commerce · CDP · APIs · Eventos", Icon: Database, color: "#64748B" },
    { t: "Flow", sub: "Dados em movimento com confiança", items: "Ingestão → Normalização → Governança → Enriquecimento → Modelos → Distribuição", Icon: Workflow, color: "#06B6D4" },
    { t: "Inteligência", sub: "IA com contexto, permissão e propósito", items: "Insights · Decision Teams · Composer · CX", Icon: Brain, color: "#7C3AED" },
    { t: "Resultados", sub: "Impactos que aceleram o negócio", items: "Decisões melhores · Campanhas eficazes · Experiências · Produtividade · Receita", Icon: TrendingUp, color: "#22D3EE" },
  ];
  return (
    <Section id="arquitetura" className="grid-tech">
      <div className="text-center max-w-3xl mx-auto">
        <Reveal><span className="tag-pill mx-auto"><Network size={12} /> Arquitetura de referência</span></Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 text-4xl md:text-5xl font-semibold">Da fonte ao <span className="text-gradient">resultado.</span></h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mt-5 text-lg text-white/70">Uma plataforma. Fluxo contínuo. Valor real.</p>
        </Reveal>
      </div>

      <div className="mt-12 max-w-4xl mx-auto space-y-3">
        {camadas.map(({ t, sub, items, Icon, color }, i) => (
          <Reveal key={t} delay={0.08 * i}>
            <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 overflow-hidden">
              <span className="absolute left-0 top-0 bottom-0 w-1" style={{ background: color }} />
              <div className="flex items-start gap-4">
                <span className="grid place-items-center w-11 h-11 rounded-xl shrink-0" style={{ background: `${color}22` }}>
                  <Icon size={22} style={{ color }} />
                </span>
                <div>
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <h3 className="text-lg font-semibold">{t}</h3>
                    <span className="text-sm text-white/50">{sub}</span>
                  </div>
                  <p className="mt-1.5 text-sm text-white/60">{items}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ==================== PLANOS ==================== */
function Planos({ onDemo }: { onDemo: () => void }) {
  const planos = [
    { t: "Professional", d: "Para começar por casos de uso prioritários, com volumes controlados e foco em uma ou poucas áreas.", pts: ["Volumes iniciais de dados", "Menos usuários, agentes e jornadas", "Suporte padrão", "Expansão conforme a adoção"], destaque: false },
    { t: "Scale", d: "Para ampliar o uso entre áreas, aumentando volumes, usuários, agentes e ativações sobre a mesma fundação.", pts: ["Maior capacidade de dados", "Mais agentes e jornadas simultâneas", "Operação multidisciplinar", "Suporte ampliado"], destaque: true },
    { t: "Enterprise", d: "Para arquiteturas complexas, múltiplos domínios, governança avançada e integração com stacks de grande porte.", pts: ["Grandes volumes de dados", "Múltiplas áreas e regiões", "Governança e segurança avançadas", "SLA e suporte dedicado"], destaque: false },
  ];
  return (
    <Section id="planos">
      <div className="text-center max-w-3xl mx-auto">
        <Reveal><span className="tag-pill mx-auto"><Gauge size={12} /> Como começar</span></Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 text-4xl md:text-5xl font-semibold">Uma plataforma. <span className="text-gradient">Três formas de começar.</span></h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mt-5 text-lg text-white/70">
            Comece por um caso de uso e amplie no seu ritmo, sem migração, sem retrabalho e sem perder contexto.
            A mesma suíte, a mesma interface, a mesma fundação.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid md:grid-cols-3 gap-5 items-start">
        {planos.map(({ t, d, pts, destaque }, i) => (
          <Reveal key={t} delay={0.08 * i}>
            <div className={destaque ? "rounded-2xl p-[1.5px]" : ""} style={destaque ? { background: "linear-gradient(160deg,#7C3AED,#4F46E5 50%,#06B6D4)" } : {}}>
              <div className={`rounded-2xl p-7 h-full ${destaque ? "bg-[#0A0D1C]" : "border border-white/10 bg-white/[0.02]"}`}>
                {destaque && <span className="inline-block mb-3 text-[11px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={{ background: `${CYAN}22`, color: CYAN }}>Mais adotado</span>}
                <h3 className="text-2xl font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed min-h-[72px]">{d}</p>
                <ul className="mt-5 space-y-2.5">
                  {pts.map((p) => (
                    <li key={p} className="flex gap-2.5 text-sm text-white/75"><CheckCircle2 size={16} className="shrink-0 mt-0.5" style={{ color: CYAN }} /> {p}</li>
                  ))}
                </ul>
                <button onClick={onDemo} className={`mt-7 w-full justify-center ${destaque ? "btn-primary-light" : "inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 hover:bg-white/5 transition-colors font-medium"}`}>
                  Falar sobre {t} <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ==================== INDÚSTRIAS / FRENTES DE ENTRADA ==================== */
function Industrias() {
  const frentes = [
    { Icon: TrendingUp, t: "Crescimento", casos: ["Recuperação de receita", "CRM Growth", "Reativação"] },
    { Icon: Users, t: "Clientes", casos: ["Customer Intelligence", "Reativação", "CRM Growth"] },
    { Icon: Sparkles, t: "Produtividade", casos: ["Creative Intelligence", "Trade Marketing", "Eficiência operacional"] },
    { Icon: Shield, t: "Eficiência & Risco", casos: ["Eficiência operacional", "Governança de dados", "Redução de exposição"] },
  ];
  return (
    <Section id="industrias">
      <div className="max-w-3xl">
        <Reveal><Tag><Building2 size={12} /> Pontos de entrada</Tag></Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 text-4xl md:text-5xl font-semibold">O Maestro entra pela decisão que <span className="text-gradient-brand">mais impacta</span> o negócio.</h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mt-5 text-lg text-white/70">
            Diferentes pontas de entrada, a mesma camada de inteligência. Cada caso de uso conecta ao Flow,
            gera aprendizado e expande a inteligência para toda a operação.
          </p>
        </Reveal>
      </div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {frentes.map(({ Icon, t, casos }, i) => (
          <Reveal key={t} delay={0.06 * i}>
            <GlowCard customSize glowColor="purple" className="p-6 h-full">
              <span className="grid place-items-center w-12 h-12 rounded-xl mb-4" style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(34,211,238,0.18))" }}>
                <Icon size={24} style={{ color: CYAN }} />
              </span>
              <h3 className="text-lg font-semibold">{t}</h3>
              <ul className="mt-3 space-y-1.5">
                {casos.map((c) => (
                  <li key={c} className="text-sm text-white/60 flex items-center gap-2"><span className="w-1 h-1 rounded-full" style={{ background: CYAN }} /> {c}</li>
                ))}
              </ul>
            </GlowCard>
          </Reveal>
        ))}
      </div>

      <HighlightBox
        miniTag="Comece por uma dor"
        bottomLine={<>Comece por uma dor. <span className="text-gradient">Expanda como sistema</span>: valor primeiro, escala depois, governança desde o início.</>}
      />
    </Section>
  );
}

/* ==================== O QUE DIZEM ==================== */
function OQueDizem() {
  const quotes = [
    { quote: "Assim como a eletricidade transformou as indústrias, a IA fará o mesmo.", name: "Andrew Ng", sub: "Pioneiro em IA e sistemas de decisão" },
    { quote: "As empresas vencedoras não serão as que têm mais IA. Serão as que coordenam melhor as que já têm.", name: "Manifesto Maestro", sub: "Growth & Decision OS" },
    { quote: "O valor não está em visualizar o dado. Está em reduzir o tempo entre compreender e decidir.", name: "Princípio de produto", sub: "Camada Insights" },
  ];
  return (
    <Section id="o-que-dizem" className="grid-tech">
      <div className="max-w-3xl">
        <Reveal><Tag><MessageSquare size={12} /> O que dizem</Tag></Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 text-4xl md:text-5xl font-semibold">A vantagem competitiva vai ser <span className="text-gradient">decidir melhor.</span></h2>
        </Reveal>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-5">
        {quotes.map(({ quote, name, sub }, i) => (
          <Reveal key={name} delay={0.08 * i}>
            <GlowCard customSize glowColor="purple" className="p-7 h-full flex flex-col">
              <span className="text-5xl leading-none font-bold" style={{ color: CYAN, opacity: 0.35 }}>&ldquo;</span>
              <p className="mt-2 text-lg text-white/85 leading-relaxed flex-1">{quote}</p>
              <div className="mt-6 pt-5 border-t border-white/10">
                <p className="font-semibold">{name}</p>
                <p className="text-sm text-white/50">{sub}</p>
              </div>
            </GlowCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ==================== CTA FINAL ==================== */
function CTAFinal({ onDemo }: { onDemo: () => void }) {
  return (
    <section id="cta-final" className="relative px-6 md:px-10 py-24 md:py-36 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "radial-gradient(900px 500px at 50% 0%, rgba(124,58,237,0.35), transparent 60%), radial-gradient(700px 500px at 80% 100%, rgba(6,182,212,0.2), transparent 55%)" }} />
      <BackgroundPaths className="opacity-70" />
      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <img src="/logos/maestro-icon2.png" alt="" width={40} height={40} className="h-10 w-10 object-contain mx-auto mb-8" />
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="text-4xl md:text-6xl font-bold leading-[1.08]">
            A próxima geração de empresas <br className="hidden md:block" />
            será <span className="text-gradient">orquestrada.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Não serão as que têm mais ferramentas ou mais IAs. Serão as que conectam seus dados,
            coordenam suas inteligências e transformam decisão em execução contínua. Essa camada chama-se Maestro.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={onDemo} className="btn-primary-light">
              Falar com especialista <ArrowRight size={18} />
            </button>
            <a href="#capacidades" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/15 hover:bg-white/5 transition-colors font-medium">
              Conhecer a arquitetura <Compass size={16} />
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.32}>
          <p className="mt-6 text-white/45 text-sm">Conversa executiva de 30 min · sem compromisso · NDA disponível</p>
        </Reveal>
      </div>
    </section>
  );
}

/* ==================== FOOTER ==================== */
function Footer({ onDemo }: { onDemo: () => void }) {
  const solLinks = SOLUCOES;
  const platLinks = PLATAFORMA;
  return (
    <footer className="border-t border-white/10 bg-[#05070F]">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-10">
          <div>
            <img src="/logos/maestro-wordmark.svg" alt="Maestro" className="h-7 w-auto" />
            <p className="mt-4 text-sm text-white/55 max-w-xs leading-relaxed">
              Growth &amp; Decision Operating System. A camada de orquestração que transforma ruído em resultado.
            </p>
            <button onClick={onDemo} className="mt-6 inline-flex items-center gap-2 text-sm font-medium" style={{ color: CYAN }}>
              Falar com especialista <ArrowRight size={15} />
            </button>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-white/40 mb-4">Soluções</p>
            <ul className="space-y-2.5">
              {solLinks.map(({ label, href }) => (
                <li key={href}><a href={href} className="text-sm text-white/65 hover:text-white transition-colors">{label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-white/40 mb-4">Plataforma</p>
            <ul className="space-y-2.5">
              {platLinks.map(({ label, href }) => (
                <li key={href}><a href={href} className="text-sm text-white/65 hover:text-white transition-colors">{label}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-sm text-white/50">
            <span>powered by</span>
            <a href="https://aodigital.com.br/" target="_blank" rel="noopener noreferrer" aria-label="Always On" className="inline-flex transition-opacity hover:opacity-100 opacity-90">
              <img src="/alwayson-logo.png" alt="Always On" className="h-6 w-auto" />
            </a>
          </div>
          <p className="text-xs text-white/40">© {new Date().getFullYear()} Maestro · Always On. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
