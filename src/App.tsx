import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Menu,
  ChevronDown,
  MessageCircle,
  ArrowDown,
  AlertCircle,
  AlertTriangle,
  Sparkles,
  Clock,
  Shield,
  Database,
  Lightbulb,
  Users,
  Bot,
  Zap,
  BarChart3,
  Rocket,
  Workflow,
  Target,
  Award,
  CheckCircle2,
  Lock,
  KeyRound,
  ClipboardList,
  UserCog,
  X as XIcon,
  Trophy,
  ShoppingCart,
  CreditCard,
  Smartphone,
  Plane,
  GraduationCap,
  Car,
  Factory,
  Mail,
  Phone,
  Linkedin,
  Globe,
} from "lucide-react";
import { Reveal, Section, Tag } from "@/components/landing/Reveal";
import { DemoModal } from "@/components/landing/DemoModal";
import { WhatsAppButton } from "@/components/landing/WhatsAppButton";
// rebuild: 15-mai-0341

export default function Index() {
  const [openDemo, setOpenDemo] = useState(false);
  const openModal = () => setOpenDemo(true);

  return (
    <main className="gradient-purple min-h-screen text-white overflow-hidden">
      <DemoModal open={openDemo} onClose={() => setOpenDemo(false)} />
      <Nav onDemo={openModal} />
      <Hero onDemo={openModal} />
      <Paradoxo />
      <Mudanca />
      <PorQueAgora />
      <CustoInacao />
      <NossaTese />
      <NaoE />
      <Arquitetura />
      <DataFlow />
      <Insights />
      <CX />
      <DecisionTeams />
      <Portfolio />
      <Maturidade />
      <Workflow6 />
      <ComparaCopilots />
      <Seguranca />
      <Diferenciacao />
      <Industrias />
      <AdocaoImpacto />
      <ValidacaoCTA onDemo={openModal} />
      <Footer onDemo={openModal} />
      <WhatsAppButton />
    </main>
  );
}

/* ============ NAV ============ */
const SOLUCOES = [
  { Icon: Database, label: "Maestro Data Flow", href: "#data-flow" },
  { Icon: Lightbulb, label: "Maestro Insights", href: "#insights" },
  { Icon: Users, label: "Maestro CX", href: "#cx" },
  { Icon: Bot, label: "Maestro Decision Teams", href: "#decision-teams" },
];

function Nav({ onDemo }: { onDemo: () => void }) {
  const [solOpen, setSolOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSolOpen, setMobileSolOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-6 flex items-center justify-between">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight text-white">
          Always On <span className="opacity-60">·</span>{" "}
          <span className="text-white">Maestro AI OS</span>
        </a>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <div
            className="relative"
            onMouseEnter={() => setSolOpen(true)}
            onMouseLeave={() => setSolOpen(false)}
          >
            <button
              onClick={() => setSolOpen((v) => !v)}
              className="hover:text-white inline-flex items-center gap-1"
            >
              Soluções <ChevronDown size={14} className={`transition-transform ${solOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {solOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[280px]"
                >
                  <div
                    className="rounded-xl p-4 backdrop-blur-md border border-white/10 flex flex-col gap-1"
                    style={{ backgroundColor: "rgba(15,27,61,0.95)" }}
                  >
                    {SOLUCOES.map(({ Icon, label, href }) => (
                      <a
                        key={href}
                        href={href}
                        onClick={() => setSolOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                      >
                        <Icon className="w-5 h-5" style={{ color: "#00D4FF" }} strokeWidth={1.75} />
                        <span className="text-white text-sm font-medium">{label}</span>
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <a href="#industrias" className="hover:text-white">Indústrias</a>
          <a href="#ganhos" className="hover:text-white">Ganhos</a>
          <button onClick={onDemo} className="hover:text-white inline-flex items-center gap-1.5">
            Agendar Demo <ArrowRight size={14} />
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          aria-label="Abrir menu"
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden text-white p-2 -mr-2"
        >
          {mobileOpen ? <XIcon size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mx-6 rounded-xl border border-white/10 backdrop-blur-md overflow-hidden"
            style={{ backgroundColor: "rgba(15,27,61,0.95)" }}
          >
            <div className="p-4 flex flex-col gap-1 text-sm">
              <button
                onClick={() => setMobileSolOpen((v) => !v)}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-white/5 text-white font-medium"
              >
                Soluções
                <ChevronDown size={16} className={`transition-transform ${mobileSolOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileSolOpen && (
                <div className="pl-2 flex flex-col gap-1">
                  {SOLUCOES.map(({ Icon, label, href }) => (
                    <a
                      key={href}
                      href={href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 text-white/90"
                    >
                      <Icon className="w-5 h-5" style={{ color: "#00D4FF" }} strokeWidth={1.75} />
                      <span className="text-sm">{label}</span>
                    </a>
                  ))}
                </div>
              )}
              <a href="#industrias" onClick={() => setMobileOpen(false)} className="px-3 py-2.5 rounded-lg hover:bg-white/5 text-white">Indústrias</a>
              <a href="#ganhos" onClick={() => setMobileOpen(false)} className="px-3 py-2.5 rounded-lg hover:bg-white/5 text-white">Ganhos</a>
              <button
                onClick={() => { setMobileOpen(false); onDemo(); }}
                className="px-3 py-2.5 rounded-lg hover:bg-white/5 text-white inline-flex items-center gap-1.5 text-left"
              >
                Agendar Demo <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ============ 1. HERO ============ */
function Hero({ onDemo }: { onDemo: () => void }) {
  const ease = [0.22, 1, 0.36, 1] as const;
  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease },
  });
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      <video
        src="/maestro.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <motion.div
        initial={{ backgroundColor: "rgba(0,0,0,0.8)" }}
        animate={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        transition={{ duration: 1.5, ease }}
        className="absolute inset-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
      <div className="absolute inset-0 bg-[#8B1FA9]/20" />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center max-w-5xl mx-auto px-6">
        <motion.div {...fadeUp(0)}>
          <span className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 text-xs uppercase tracking-widest text-white mb-8">
            Maestro AI OS
          </span>
        </motion.div>
        <motion.h1
          {...fadeUp(0.1)}
          className="text-white font-normal text-4xl md:text-7xl lg:text-8xl leading-tight tracking-tight max-w-5xl mb-8"
        >
          Camada estratégica de{" "}
          <span className="font-semibold text-white">decisão</span> baseada em dados, operada por times de IA.
        </motion.h1>
        <motion.p
          {...fadeUp(0.2)}
          className="text-white/80 text-base md:text-xl max-w-2xl mb-10"
        >
          Da análise à ação. Da intuição à decisão orientada por dados.
        </motion.p>
        <motion.div
          {...fadeUp(0.3)}
          className="flex flex-col md:flex-row gap-4 items-center"
        >
          <button
            onClick={onDemo}
            className="bg-white text-[#0F1B3D] rounded-full px-8 py-4 font-semibold transition-transform hover:scale-[1.02] inline-flex items-center gap-2"
          >
            Agendar Demo Estratégica <ArrowRight size={18} />
          </button>
          <a
            href="#arquitetura"
            className="text-white hover:underline inline-flex items-center gap-1.5"
          >
            Explorar a arquitetura <ArrowDown size={16} />
          </a>
        </motion.div>
        <motion.p {...fadeUp(0.4)} className="text-white/60 text-sm mt-6">
          Demo executiva de 30 min · sem compromisso · NDA disponível
        </motion.p>
      </div>
    </section>
  );
}

/* ============ 2. PARADOXO ============ */
function Paradoxo() {
  const items = [
    { t: "Dados Abundantes", d: "Volume exponencial de informação disponível", Icon: Database },
    { t: "Decisões Lentas", d: "Processos analíticos que levam semanas", Icon: Clock },
    { t: "Gargalos Técnicos", d: "Dependência crítica de times especializados", Icon: AlertTriangle },
    { t: "IA Sem Ação", d: "Insights que raramente viram execução", Icon: Bot },
  ];
  return (
    <Section>
      <Reveal><Tag><AlertTriangle size={12} /> Desafio Estratégico</Tag></Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-6 text-4xl md:text-5xl font-light max-w-3xl">
          O Paradoxo da Era dos Dados
        </h2>
      </Reveal>
      <Reveal delay={0.15}>
        <p className="mt-5 text-lg text-offwhite/85 max-w-2xl">
          Nunca tivemos tantos dados disponíveis, mas as decisões estratégicas nunca foram tão lentas e fragmentadas.
        </p>
      </Reveal>
      <div className="mt-14 grid sm:grid-cols-2 gap-5">
        {items.map((it, i) => (
          <Reveal key={it.t} delay={0.1 + i * 0.1}>
            <div className="surface-card p-8 h-full">
              <it.Icon className="w-8 h-8 text-[#00D4FF] mb-6" strokeWidth={1.5} />
              <h3 className="font-display text-xl font-medium">{it.t}</h3>
              <p className="mt-3 text-offwhite/80 text-sm leading-relaxed">{it.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.8}>
        <div className="mt-8 surface-card p-8 md:p-10 rounded-2xl border-l-4 border-l-[#EF4444]">
          <div className="flex items-start gap-3 flex-wrap">
            <AlertCircle className="w-6 h-6 text-[#EF4444] flex-shrink-0 mt-1" strokeWidth={1.5} />
            <p className="flex-1 min-w-0">
              <span className="font-bold text-[#EF4444] text-xl md:text-2xl">O resultado?</span>{" "}
              <span className="text-white/90 text-lg md:text-xl font-normal">
                Decisões tardias, fragmentadas e pouco acionáveis que comprometem a competitividade estratégica.
              </span>
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

/* ============ 3. MUDANÇA ============ */
function Mudanca() {
  return (
    <Section>
      <Reveal><Tag><Sparkles size={12} /> Evolução</Tag></Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-6 text-4xl md:text-5xl font-light max-w-3xl">A Mudança Estrutural em Curso</h2>
      </Reveal>
      <div className="mt-14 grid md:grid-cols-2 gap-6 items-stretch">
        <Reveal>
          <div className="surface-card p-10 h-full">
            <p className="text-xs uppercase tracking-widest text-offwhite/60">Ontem</p>
            <h3 className="mt-3 font-display text-3xl">Analytics</h3>
            <p className="mt-4 text-offwhite/80">Responder perguntas sobre o passado.</p>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="surface-card p-10 h-full" style={{ background: "linear-gradient(160deg, var(--navy-light), var(--navy))" }}>
            <p className="text-xs uppercase tracking-widest text-offwhite/60">Agora</p>
            <h3 className="mt-3 font-display text-3xl text-white">Decision Systems</h3>
            <p className="mt-4 text-offwhite/80">Decidir, priorizar e executar no presente.</p>
          </div>
        </Reveal>
      </div>
      <Reveal delay={0.2}>
        <blockquote className="mt-12 border-l-4 pl-6 max-w-3xl text-2xl md:text-3xl font-display font-light leading-snug" style={{ borderLeftColor: "var(--brand-purple-light)" }}>
          "A próxima onda da IA não é sobre responder perguntas. É sobre decidir, priorizar, executar e aprender continuamente."
        </blockquote>
      </Reveal>
      <Reveal delay={0.25}>
        <p className="mt-8 text-offwhite/85 max-w-3xl">
          Estamos testemunhando a transição fundamental de sistemas que <strong className="text-white">informam</strong> para sistemas que <strong className="text-white">decidem</strong>. Esta mudança redefine como empresas operam e competem.
        </p>
      </Reveal>
    </Section>
  );
}

/* ============ 4. POR QUE AGORA ============ */
function PorQueAgora() {
  const steps = [
    { t: "LLMs Tornaram SQL Natural Operacional", d: "Acesso à análise deixou de depender de especialistas técnicos. Linguagem natural escalou inteligência analítica." },
    { t: "AutoML Democratizou Previsão", d: "Modelos preditivos agora são gerados e atualizados automaticamente, com rigor estatístico e velocidade operacional." },
    { t: "Cloud Eliminou Barreiras de Infraestrutura", d: "Processamento em escala sem CAPEX massivo. Comece pequeno. Escale com valor comprovado." },
    { t: "O Board Exige Eficiência", d: "Fazer mais com menos deixou de ser meta. Virou obrigação estratégica." },
    { t: "Margens Sob Pressão Estrutural", d: "Competição intensa. Custos crescentes. Decisão lenta virou desvantagem competitiva." },
  ];
  return (
    <Section>
      <Reveal><Tag><Clock size={12} /> Timing Estratégico</Tag></Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-6 text-4xl md:text-5xl font-light max-w-3xl">Por Que Agora</h2>
      </Reveal>
      <Reveal delay={0.15}>
        <p className="mt-5 text-lg text-offwhite/85 max-w-2xl">
          A convergência entre tecnologia madura e pressão estrutural abriu uma janela única.
        </p>
      </Reveal>

      <div className="mt-14 relative">
        <div className="absolute left-5 top-2 bottom-2 w-px bg-white/15 hidden md:block" />
        <div className="space-y-5">
          {steps.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.05}>
              <div className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full grid place-items-center font-display text-sm font-semibold relative z-10" style={{ background: "var(--brand-purple-light)", color: "white" }}>
                  {i + 1}
                </div>
                <div className="surface-card p-6 flex-1">
                  <h3 className="font-display text-lg font-medium">{s.t}</h3>
                  <p className="mt-2 text-offwhite/80 text-sm leading-relaxed">{s.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={0.3}>
        <div className="mt-12 rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, var(--brand-purple-dark), var(--brand-purple-light))" }}>
          <p className="text-xl md:text-2xl font-display font-light">
            A tecnologia amadureceu. A pressão aumentou. A decisão precisa evoluir.
            <br />Não é sobre inovação — é sobre <strong>sobrevivência competitiva.</strong>
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

/* ============ 5. CUSTO INAÇÃO ============ */
function CustoInacao() {
  const items = [
    { t: "Margem Corroída por Atraso", d: "Promoções tardias, preços desatualizados e oportunidades de upsell perdidas reduzem margem silenciosamente." },
    { t: "Orçamento Mal Alocado", d: "Investimento em canais de baixo retorno enquanto oportunidades de alto impacto ficam sem recursos." },
    { t: "Estoque Mal Planejado", d: "Excesso onde não vende, falta onde há demanda — capital parado e vendas perdidas simultaneamente." },
    { t: "Oportunidades Não Capturadas", d: "Janelas de conversão fechadas, clientes de alto valor não identificados, momentos críticos ignorados." },
  ];
  return (
    <Section>
      <Reveal><Tag><Shield size={12} /> Urgência</Tag></Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-6 text-4xl md:text-5xl font-light max-w-3xl">O Custo Invisível da Inação</h2>
      </Reveal>
      <Reveal delay={0.15}>
        <p className="mt-5 text-lg text-offwhite/85 max-w-3xl">
          A decisão lenta não é neutra — ela corrói valor, desperdiça recursos e entrega vantagem competitiva aos concorrentes que agem mais rápido.
        </p>
      </Reveal>

      <div className="mt-14 grid md:grid-cols-2 gap-5">
        {items.map((it, i) => (
          <Reveal key={it.t} delay={i * 0.05}>
            <div className="surface-card p-7 h-full">
              <h3 className="font-display text-lg font-medium">{it.t}</h3>
              <p className="mt-3 text-offwhite/80 text-sm leading-relaxed">{it.d}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.25}>
        <div className="mt-5 surface-card p-8">
          <h3 className="font-display text-xl font-medium">Dependência de Análise Manual</h3>
          <p className="mt-3 text-offwhite/80 max-w-3xl">
            Times estratégicos consumidos por tarefas operacionais, decisões atrasadas por falta de capacidade analítica.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.3}>
        <p className="mt-12 max-w-3xl text-2xl md:text-3xl font-display font-light leading-snug border-l-4 pl-6" style={{ borderLeftColor: "var(--brand-purple-light)" }}>
          Decisão tardia é perda estrutural. Não é sobre fazer mais rápido — é sobre <strong>decidir melhor, no momento certo, com dados vivos</strong>.
        </p>
      </Reveal>
    </Section>
  );
}

/* ============ 6. TESE ============ */
function NossaTese() {
  const pilares = [
    "Estruturam Dados Antes de Automatizar Decisões",
    "Transformam Dados em Contexto de Negócio",
    "Antecipam Cenários com Modelos Explicáveis",
    "Operam com Times Digitais Especializados",
  ];
  return (
    <Section>
      <Reveal>
        <h2 className="text-4xl md:text-5xl font-light max-w-3xl">Nossa Tese</h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-3 text-xl text-offwhite/80">O Sistema Operacional para Decisão Empresarial</p>
      </Reveal>
      <Reveal delay={0.15}>
        <p className="mt-6 text-lg text-offwhite/85 max-w-3xl">
          Empresas vencedoras não terão apenas uma IA. Terão uma <strong className="text-white">arquitetura integrada de inteligência</strong> — capaz de estruturar dados, compreender contexto, antecipar cenários e executar com precisão.
        </p>
      </Reveal>

      <div className="mt-14 grid md:grid-cols-2 gap-5">
        {pilares.map((p, i) => (
          <Reveal key={p} delay={i * 0.05}>
            <div className="surface-card p-7 h-full flex items-start gap-4">
              <span className="font-display text-2xl text-brand-purple-light">0{i + 1}</span>
              <p className="font-display text-lg leading-snug">{p}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.25}>
        <div className="mt-5 surface-card p-7 flex items-start gap-4">
          <span className="font-display text-2xl text-brand-purple-light">05</span>
          <p className="font-display text-lg leading-snug">Executam com Governança e Escala</p>
        </div>
      </Reveal>

      <Reveal delay={0.35}>
        <div className="mt-12 rounded-2xl p-10" style={{ background: "var(--brand-purple-light)" }}>
          <p className="text-xl md:text-2xl font-display font-light max-w-3xl">
            O futuro não pertence às empresas com mais dados. Pertence às empresas que conseguem:{" "}
            <strong>orquestrar, contextualizar e executar mais rápido</strong>.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

/* ============ 7. NÃO É ============ */
function NaoE() {
  const items = [
    { t: "Não é Chatbot", d: "Chatbots respondem perguntas. Maestro analisa, diagnostica, prevê e executa ações estratégicas com governança corporativa." },
    { t: "Não é BI (Business Intelligence)", d: "BI mostra o que aconteceu. Maestro explica por que aconteceu, prevê o que vai acontecer e recomenda o que fazer agora." },
    { t: "Não é Copilot", d: "Copilots assistem tarefas individuais. Maestro orquestra times digitais especializados que operam de forma autônoma e coordenada." },
    { t: "Não é Ferramenta Isolada", d: "Ferramentas resolvem problemas pontuais. Maestro é uma camada estratégica que unifica dados, inteligência e execução em toda a empresa." },
  ];
  return (
    <Section>
      <Reveal><Tag><XIcon size={12} /> Posicionamento</Tag></Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-6 text-4xl md:text-5xl font-light max-w-3xl">O Que o Maestro NÃO É</h2>
      </Reveal>
      <Reveal delay={0.15}>
        <p className="mt-5 text-lg text-offwhite/85 max-w-3xl">
          Antes de mostrar a arquitetura, é fundamental entender o que nos diferencia de ferramentas pontuais e chatbots genéricos.
        </p>
      </Reveal>

      <div className="mt-14 grid md:grid-cols-2 gap-5">
        {items.map((it, i) => (
          <Reveal key={it.t} delay={i * 0.05}>
            <div className="surface-card p-7 h-full">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-lg grid place-items-center" style={{ background: "oklch(0.65 0.22 25 / 0.15)", color: "var(--danger)" }}>
                  <XIcon size={18} />
                </span>
                <h3 className="font-display text-xl font-medium">{it.t}</h3>
              </div>
              <p className="mt-4 text-offwhite/80 text-sm leading-relaxed">{it.d}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3}>
        <div className="mt-10 rounded-2xl p-10" style={{ background: "oklch(0.16 0.06 270)" }}>
          <p className="text-xl md:text-2xl font-display font-light">
            Maestro AI OS é uma <strong className="text-white">fundação estratégica — não uma feature</strong>. É a diferença entre ter respostas e ter decisões acionáveis com impacto mensurável.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

/* ============ 8. ARQUITETURA ============ */
function Arquitetura() {
  const cards = [
    { Icon: Database, t: "Maestro Data Flow", d: "Dados unificados, governados e auditáveis em tempo real" },
    { Icon: Lightbulb, t: "Maestro Insights", d: "Diagnóstico, análise, prescrição e previsão integrados" },
    { Icon: Users, t: "Maestro CX", d: "Ativação omnichannel e execução automatizada" },
    { Icon: Bot, t: "Maestro Decision Teams", d: "Criação, treino, governança e orquestração de agentes" },
  ];
  return (
    <Section id="arquitetura">
      <Reveal><Tag>◇ Arquitetura</Tag></Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-6 text-4xl md:text-5xl font-light max-w-3xl">Maestro AI Operating System</h2>
      </Reveal>
      <Reveal delay={0.15}>
        <p className="mt-5 text-lg text-offwhite/85 max-w-3xl">
          Uma fundação estratégica que coordena dados, inteligência e execução para decisões empresariais escaláveis.
        </p>
      </Reveal>

      <div className="mt-14 grid md:grid-cols-2 gap-5">
        {cards.map(({ Icon, t, d }, i) => (
          <Reveal key={t} delay={i * 0.05}>
            <div className="surface-card p-8 h-full">
              <span className="w-12 h-12 rounded-xl grid place-items-center mb-5" style={{ background: "var(--brand-purple-light)" }}>
                <Icon size={22} />
              </span>
              <h3 className="font-display text-2xl font-medium">{t}</h3>
              <p className="mt-3 text-offwhite/80">{d}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3}>
        <div className="mt-6 surface-card p-8">
          <p className="text-offwhite/85">
            <strong className="text-white">Flexibilidade Estrutural:</strong> O Maestro Data Flow opera como camada fundacional independente e modular, permitindo <strong className="text-white">integração progressiva</strong> ao ecossistema do cliente, <strong className="text-white">rápida ativação</strong> de valor e <strong className="text-white">expansão escalável</strong> conforme a complexidade e maturidade da organização.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

/* ============ 9. DATA FLOW ============ */
function DataFlow() {
  const caps = [
    "Conecta Múltiplas Fontes",
    "Integra e Unifica",
    "Governa com Segurança",
    "Processa em Tempo Real",
    "Distribui com Inteligência",
    "Orquestração Inteligente",
  ];
  const impactos = [
    { Icon: Zap, t: "Decisão em horas, não semanas" },
    { Icon: BarChart3, t: "Fonte única de verdade" },
    { Icon: Shield, t: "Governança por design" },
    { Icon: Rocket, t: "Base para IA escalável" },
  ];
  return (
    <Section id="data-flow">
      <Reveal><Tag><Database size={12} /> Infraestrutura Estratégica</Tag></Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-6 text-4xl md:text-5xl font-light max-w-3xl">Maestro Data Flow</h2>
      </Reveal>
      <Reveal delay={0.15}>
        <p className="mt-3 text-xl text-offwhite/80">A fundação que transforma dados em vantagem competitiva</p>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="mt-8 font-display text-3xl md:text-4xl font-light">Sem infraestrutura, não existe decisão.</p>
      </Reveal>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {caps.map((c, i) => (
          <Reveal key={c} delay={i * 0.04}>
            <div className="surface-card p-6 h-full">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-brand-purple-light" style={{ color: "var(--brand-purple-light)" }} />
                <p className="font-medium">{c}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {impactos.map(({ Icon, t }, i) => (
          <Reveal key={t} delay={i * 0.05}>
            <div className="surface-card p-6 h-full">
              <Icon size={22} style={{ color: "var(--brand-purple-light)" }} />
              <p className="mt-3 text-sm font-medium">{t}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3}>
        <p className="mt-12 font-display text-2xl md:text-3xl font-light italic">
          Infraestrutura invisível. Impacto organizacional visível.
        </p>
      </Reveal>
    </Section>
  );
}

/* ============ 10. INSIGHTS ============ */
function Insights() {
  const caps = [
    { t: "Diagnóstico Inteligente", d: "Identifica padrões, anomalias e gargalos com contexto de negócio e priorização por impacto." },
    { t: "Análise Contextualizada", d: "Cruza múltiplas fontes para visão holística, conectando causa e efeito com rigor estatístico." },
    { t: "Previsão Probabilística", d: "Forecast com incerteza explícita e simulação de cenários para decisões baseadas em probabilidades." },
    { t: "Prescrição por Impacto", d: "Recomendações priorizadas por ROI esperado, viabilidade e alinhamento estratégico." },
  ];
  const pratica = [
    "Identificação automática de queda de margem por cluster",
    "Simulação de política comercial antes da ativação",
    "Forecast de vendas com faixa de risco e cenários alternativos",
    "Detecção de gargalos de conversão e priorização de ação",
    "Projeção de impacto antes da execução de campanha",
    "Antes de executar, o Maestro mede, simula e prioriza.",
  ];
  return (
    <Section id="insights">
      <Reveal><Tag><Lightbulb size={12} /> Intelligence Layer</Tag></Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-6 text-4xl md:text-5xl font-light max-w-3xl">Maestro Insights</h2>
      </Reveal>
      <Reveal delay={0.15}>
        <p className="mt-3 text-xl text-offwhite/80">A inteligência que transforma dados em decisões acionáveis</p>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="mt-10 text-center font-display text-3xl md:text-4xl font-light italic">
          Se o Data Flow organiza, o Insights pensa.
        </p>
      </Reveal>

      <div className="mt-12 grid md:grid-cols-2 gap-5">
        {caps.map((c, i) => (
          <Reveal key={c.t} delay={i * 0.05}>
            <div className="surface-card p-7 h-full">
              <h3 className="font-display text-xl font-medium">{c.t}</h3>
              <p className="mt-3 text-offwhite/80 text-sm leading-relaxed">{c.d}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3}>
        <h3 className="mt-16 font-display text-2xl">Insights na Prática</h3>
      </Reveal>
      <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pratica.map((p, i) => (
          <Reveal key={p} delay={i * 0.04}>
            <div className={`surface-card p-5 h-full ${i === pratica.length - 1 ? "italic" : ""}`}>
              <p className="text-sm">{p}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ============ 11. CX ============ */
function CX() {
  const pilares = [
    {
      t: "Customer Profile Vivo (Progressive Profiling)",
      bullets: ["Dados online + offline + IoT + loja física", "Atualização near real-time", "Enriquecimento contínuo", "Visão omnichannel unificada"],
    },
    {
      t: "Segmentação Inteligente (LLM + SQL + Estatística)",
      bullets: ["Linguagem natural vira query", "Segmentação 1:1 e 1:N", "Presets estratégicos", "Controle estatístico"],
    },
    {
      t: "Orquestração com Inteligência de Frequência",
      bullets: ["Identifica saturação por CPF", "Limite ideal por canal", "Distribuição estatística", "Reduz descadastro"],
    },
    {
      t: "Análise de Campanhas com IA",
      bullets: ["Lift automático vs grupo controle", "Alertas de performance", "Recomenda pausar/escalar", "Análise por canal, horário e jornada"],
    },
  ];
  return (
    <Section id="cx">
      <Reveal><Tag><Users size={12} /> Customer First</Tag></Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-6 text-4xl md:text-5xl font-light max-w-3xl">Maestro CX</h2>
      </Reveal>
      <Reveal delay={0.15}>
        <p className="mt-3 text-xl text-offwhite/80">Orquestração Inteligente da Experiência em Tempo Real</p>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="mt-6 text-lg text-offwhite/85 max-w-3xl">
          Da jornada fragmentada à experiência contínua e personalizada. O Maestro CX ativa decisões geradas pela camada de Insights, conectando dados vivos a canais, campanhas e pontos de contato.
        </p>
      </Reveal>

      <div className="mt-14 grid md:grid-cols-2 gap-5">
        {pilares.map((p, i) => (
          <Reveal key={p.t} delay={i * 0.05}>
            <div className="surface-card p-7 h-full">
              <h3 className="font-display text-lg font-medium">{p.t}</h3>
              <ul className="mt-4 space-y-2">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-offwhite/85">
                    <CheckCircle2 size={14} className="mt-0.5 flex-shrink-0" style={{ color: "var(--brand-purple-light)" }} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3}>
        <div className="mt-10 rounded-2xl p-6 text-center font-display text-lg md:text-xl" style={{ background: "linear-gradient(90deg, var(--brand-purple-dark), var(--brand-purple-light))" }}>
          Cada interação: <strong>Contextual · Oportuna · Personalizada · Mensurável</strong>
        </div>
      </Reveal>
    </Section>
  );
}

/* ============ 12. DECISION TEAMS ============ */
function DecisionTeams() {
  const attrs = ["Domínio Específico", "Execução Integrada", "Insights Preditivos", "Ações Priorizadas", "Decisões Baseadas em Dados", "Aprendizado Controlado"];
  return (
    <Section id="decision-teams">
      {/* anchor alias */}
      <span id="teams" className="sr-only" aria-hidden="true" />
      <Reveal><Tag><Bot size={12} /> Digital Decision Teams</Tag></Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-6 text-4xl md:text-5xl font-light max-w-3xl">Maestro Decision Teams</h2>
      </Reveal>
      <Reveal delay={0.15}>
        <p className="mt-3 text-xl text-offwhite/80">Times Digitais de Decisão</p>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="mt-6 text-lg text-offwhite/85 max-w-3xl">
          Times digitais especializados, estruturados para assumir responsabilidades contínuas de decisão e execução dentro de domínios estratégicos do negócio.
        </p>
      </Reveal>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {attrs.map((a, i) => (
          <Reveal key={a} delay={i * 0.04}>
            <div className="surface-card p-6 flex items-center gap-3 h-full">
              <Sparkles size={16} style={{ color: "var(--brand-purple-light)" }} />
              <span className="font-medium">{a}</span>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.3}>
        <p className="mt-12 font-display text-2xl md:text-3xl font-light max-w-3xl border-l-4 pl-6" style={{ borderLeftColor: "var(--brand-purple-light)" }}>
          Não são ferramentas que sugerem. <strong>São times digitais que operam decisões.</strong>
        </p>
      </Reveal>
    </Section>
  );
}

/* ============ 13. PORTFÓLIO TEAMS ============ */
function Portfolio() {
  const teams = [
    { t: "Maestro IA Sales Team", d: "Qualificação de carteira, cross-sell preditivo e otimização de política comercial", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80" },
    { t: "Maestro IA Trade & PDV Team", d: "Gestão de ponto de venda, execução no varejo e otimização de presença", img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80" },
    { t: "Maestro IA Marketing Team", d: "Segmentação inteligente, ROI de campanhas e automação de jornadas", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" },
    { t: "Maestro IA Customer Team", d: "Retenção preditiva, NPS driver analysis e experiência personalizada", img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80" },
    { t: "Maestro IA Planning Team", d: "Forecasting, simulação de cenários e alocação otimizada de recursos", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80" },
  ];
  return (
    <Section>
      <Reveal>
        <h2 className="text-4xl md:text-5xl font-light max-w-3xl">Portfólio Inicial do Maestro Teams</h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-5 text-lg text-offwhite/85 max-w-3xl border-l-4 pl-5" style={{ borderLeftColor: "var(--brand-purple-light)" }}>
          Vendemos times de decisão, não features. Cada Team é especializado em um domínio estratégico de negócio.
        </p>
      </Reveal>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {teams.map((t, i) => (
          <Reveal key={t.t} delay={i * 0.05}>
            <div className="surface-card overflow-hidden h-full">
              <div className="aspect-[16/10] overflow-hidden relative">
                <img src={t.img} alt={t.t} loading="lazy" className="w-full h-full object-cover opacity-70" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent, var(--navy))" }} />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-medium">{t.t}</h3>
                <p className="mt-2 text-sm text-offwhite/80">{t.d}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ============ 14. MATURIDADE ============ */
function Maturidade() {
  const niveis = [
    { t: "Básico", d: "Suporte analítico e respostas assistidas" },
    { t: "Aprendendo", d: "Reconhecimento de padrões e contexto recorrente" },
    { t: "Capaz", d: "Recomendações consistentes e priorizadas" },
    { t: "Avançado", d: "Execução assistida e otimização contínua" },
    { t: "Especialista", d: "Autonomia ampliada com supervisão e governança plena" },
  ];
  return (
    <Section>
      <Reveal>
        <h2 className="text-4xl md:text-5xl font-light max-w-3xl">Evolução Controlada e Segura</h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-5 text-lg text-offwhite/85 max-w-3xl">
          Cada Maestro IA Team evolui de forma estruturada, ampliando sua autonomia somente quando critérios claros de governança, desempenho e segurança são atendidos.
        </p>
      </Reveal>

      <div className="mt-14 relative">
        <div className="hidden md:block absolute top-5 left-5 right-5 h-px bg-white/15" />
        <div className="grid md:grid-cols-5 gap-5">
          {niveis.map((n, i) => (
            <Reveal key={n.t} delay={i * 0.05}>
              <div className="text-center">
                <div className="mx-auto w-10 h-10 rounded-full grid place-items-center font-display font-semibold relative z-10" style={{ background: "var(--brand-purple-light)" }}>
                  {i + 1}
                </div>
                <h3 className="mt-4 font-display text-base font-medium">{n.t}</h3>
                <p className="mt-2 text-xs text-offwhite/75 leading-relaxed">{n.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={0.3}>
        <div className="mt-12 surface-card p-8 flex items-start gap-4">
          <Shield size={22} style={{ color: "var(--brand-purple-light)" }} className="flex-shrink-0 mt-1" />
          <p className="text-offwhite/85">
            <strong className="text-white">Governança por Design:</strong> cada avanço de nível exige <strong className="text-white">validações formais</strong>, critérios de performance e <strong className="text-white">trilhas completas de auditoria</strong>.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

/* ============ 15. WORKFLOW ============ */
function Workflow6() {
  const steps = [
    "Pergunta em linguagem natural",
    "Interpretação do contexto de negócio",
    "Escolha automática do melhor modelo",
    "Análise ou previsão",
    "Explicação de risco e incerteza",
    "Ativação via processos, sistemas e integrações",
  ];
  return (
    <Section>
      <Reveal><Tag><Workflow size={12} /> Workflow</Tag></Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-6 text-4xl md:text-5xl font-light">Do Dado à Decisão</h2>
      </Reveal>
      <Reveal delay={0.15}>
        <p className="mt-3 text-xl text-offwhite/80">Como funciona na prática</p>
      </Reveal>

      <div className="mt-14 grid md:grid-cols-3 lg:grid-cols-6 gap-4">
        {steps.map((s, i) => (
          <Reveal key={s} delay={i * 0.05}>
            <div className="surface-card p-5 h-full relative">
              <span className="text-xs font-display text-brand-purple-light font-semibold" style={{ color: "var(--brand-purple-light)" }}>
                ETAPA {i + 1}
              </span>
              <p className="mt-2 text-sm font-medium">{s}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-5">
        {[
          "O Maestro atua como um gestor especialista, não como um chatbot.",
          "Cada interação percorre contextualização, validação e priorização.",
          "Permite decisões complexas com rapidez — sem abrir mão de rigor analítico.",
        ].map((b, i) => (
          <Reveal key={b} delay={i * 0.05}>
            <div className="surface-card p-6 h-full">
              <p className="text-sm text-offwhite/85 leading-relaxed">{b}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3}>
        <p className="mt-14 font-display text-3xl md:text-4xl font-light text-center italic">
          Não é resposta. É decisão operacionalizada.
        </p>
      </Reveal>
    </Section>
  );
}

/* ============ 16. COMPARA ============ */
function ComparaCopilots() {
  const rows = [
    ["Papel", "Assistem indivíduos", "Orquestra decisões organizacionais"],
    ["Escopo", "Tarefas pontuais", "Domínios completos de negócio"],
    ["Contexto", "Limitado, reativo", "Profundo, contínuo e estratégico"],
    ["Dados", "Parcialmente conectados", "Governados, auditáveis e confiáveis"],
    ["Decisão", "Sugestão isolada", "Decisão coordenada entre áreas"],
    ["Execução", "Manual", "Automatizada via sistemas"],
    ["Aprendizado", "Implícito, não controlado", "Estruturado e governado"],
    ["Responsabilidade", "Do usuário", "Do sistema de decisão"],
    ["Escalabilidade", "Individual", "Organizacional"],
    ["Risco", "Alto (uso ad-hoc)", "Controlado (enterprise-grade)"],
  ];
  return (
    <Section>
      <Reveal>
        <h2 className="text-4xl md:text-5xl font-light max-w-3xl">Maestro AI OS vs Copilots & GenAI Tools</h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-5 text-lg text-offwhite/85 max-w-3xl italic">
          Pergunta real do Board: "Por que eu não resolvo isso com Copilots ou ferramentas GenAI?"
        </p>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="mt-12 surface-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-4 text-xs uppercase tracking-widest text-offwhite/60 font-semibold">Dimensão</th>
                  <th className="p-4 text-xs uppercase tracking-widest text-offwhite/60 font-semibold">Copilots / GenAI</th>
                  <th className="p-4 text-xs uppercase tracking-widest text-brand-purple-light font-semibold" style={{ color: "var(--brand-purple-light)" }}>Maestro AI OS</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r[0]} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="p-4 font-medium">{r[0]}</td>
                    <td className="p-4 text-sm text-offwhite/75">{r[1]}</td>
                    <td className="p-4 text-sm text-white">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.3}>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <span className="tag-pill">Por Que o Maestro</span>
          <p className="font-display text-xl md:text-2xl font-light flex-1 min-w-[260px]">
            Copilots ajudam pessoas a trabalhar melhor. <strong>O Maestro ajuda empresas a decidir melhor.</strong>
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

/* ============ 17. SEGURANÇA ============ */
function Seguranca() {
  const items = [
    { Icon: Lock, t: "Infraestrutura Isolada", d: "Dados nunca saem do ambiente do cliente" },
    { Icon: KeyRound, t: "Criptografia Total", d: "Conexões e armazenamento end-to-end" },
    { Icon: ClipboardList, t: "Auditoria Completa", d: "Logs detalhados de todas as decisões e ações" },
    { Icon: UserCog, t: "Governança Nativa", d: "Controles de acesso, aprovação e compliance por design" },
  ];
  return (
    <Section>
      <Reveal><Tag><Shield size={12} /> Enterprise Grade</Tag></Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-6 text-4xl md:text-5xl font-light max-w-3xl">Segurança e Governança</h2>
      </Reveal>
      <Reveal delay={0.15}>
        <p className="mt-5 text-lg text-offwhite/85 max-w-3xl">
          IA sem controle gera risco operacional e regulatório. O Maestro nasce <strong className="text-white">enterprise-grade</strong> com segurança e governança embutidas na arquitetura.
        </p>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="mt-12 rounded-2xl p-8" style={{ background: "linear-gradient(135deg, var(--brand-purple-dark), var(--brand-purple-light))" }}>
          <h3 className="font-display text-2xl">Conformidade Regulatória</h3>
          <p className="mt-3 text-offwhite/95">
            Atende LGPD, SOX, GDPR e frameworks setoriais. Certificações alinhadas aos mais altos padrões corporativos.
          </p>
        </div>
      </Reveal>

      <div className="mt-6 grid sm:grid-cols-2 gap-5">
        {items.map(({ Icon, t, d }, i) => (
          <Reveal key={t} delay={i * 0.05}>
            <div className="surface-card p-7 h-full flex items-start gap-4">
              <span className="w-11 h-11 rounded-lg grid place-items-center flex-shrink-0" style={{ background: "var(--brand-purple-light)" }}>
                <Icon size={20} />
              </span>
              <div>
                <h3 className="font-display text-lg font-medium">{t}</h3>
                <p className="mt-2 text-sm text-offwhite/80">{d}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ============ 18. DIFERENCIAÇÃO ============ */
function Diferenciacao() {
  const items = [
    { t: "Integração das 4 Camadas", d: "Data Flow + CX + Teams + Governança como sistema único. Replicar uma camada é possível. Replicar a orquestração entre todas é exponencialmente mais difícil." },
    { t: "Governança por Design", d: "Segurança, auditoria e compliance não são add-ons — estão embutidos desde o primeiro dia. Exige anos de maturidade técnica e regulatória." },
    { t: "Modularidade Estratégica", d: "Cada Team é independente mas conectado. Comece com um, expanda sem refazer infraestrutura. Lock-in positivo baseado em valor." },
    { t: "Land & Expand Natural", d: "Cliente valida com um Team e expande organicamente. Cada novo Team aumenta o valor da plataforma inteira (efeito de rede interno)." },
    { t: "Dados Soberanos (Datamart First)", d: "Processamento no ambiente do cliente, zero retenção de dados proprietários. Posicionamento que SaaS tradicionais não replicam sem refazer modelo de negócio." },
  ];
  return (
    <Section>
      <Reveal><Tag>◆ Diferencial Competitivo</Tag></Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-6 text-4xl md:text-5xl font-light max-w-3xl">Por Que o Maestro é Único</h2>
      </Reveal>
      <Reveal delay={0.15}>
        <p className="mt-5 text-lg text-offwhite/85 max-w-3xl">
          Não é apenas tecnologia. É arquitetura estratégica que cria barreiras naturais de entrada e vantagem competitiva sustentável.
        </p>
      </Reveal>

      <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((it, i) => (
          <Reveal key={it.t} delay={i * 0.05}>
            <div className="surface-card p-7 h-full">
              <span className="font-display text-3xl text-brand-purple-light" style={{ color: "var(--brand-purple-light)" }}>0{i + 1}</span>
              <h3 className="mt-3 font-display text-lg font-medium">{it.t}</h3>
              <p className="mt-3 text-sm text-offwhite/80 leading-relaxed">{it.d}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3}>
        <p className="mt-12 max-w-3xl text-2xl md:text-3xl font-display font-light leading-snug border-l-4 pl-6" style={{ borderLeftColor: "var(--brand-purple-light)" }}>
          Defensabilidade não vem de uma feature. Vem da <strong>complexidade sistêmica</strong>, da <strong>governança nativa</strong> e do <strong>modelo de valor</strong> que se auto-reforça a cada expansão.
        </p>
      </Reveal>
    </Section>
  );
}

/* ============ 19. INDÚSTRIAS ============ */
function Industrias() {
  const inds = [
    { Icon: ShoppingCart, k: "Varejo", probs: "Margem pressionada · Ruptura + excesso de estoque · Churn silencioso", sols: "Previsão de demanda granular · Otimização comercial · Retenção preditiva" },
    { Icon: CreditCard, k: "Financeiro", probs: "Inadimplência crescente · CAC alto · Cross-sell ineficiente", sols: "Score preditivo dinâmico · Next best offer · Monitoramento de churn" },
    { Icon: Smartphone, k: "Telecom", probs: "Alto churn · Desconto reativo · Atendimento caro", sols: "Previsão de churn · Next best action · Redução de call center" },
    { Icon: Plane, k: "Viagens / Aéreas", probs: "Yield management complexo · No-show · Experiência fragmentada", sols: "Previsão de ocupação · Política de precificação · Upsell contextual" },
    { Icon: GraduationCap, k: "Educação", probs: "Evasão · Captação ineficiente · Jornada fragmentada", sols: "Previsão de evasão · Otimização de bolsas · Priorização de leads" },
    { Icon: Car, k: "Mobilidade", probs: "Frota ociosa · Pricing ineficiente · Manutenção imprevisível", sols: "Previsão de utilização · Pricing dinâmico · Otimização de frota" },
    { Icon: Factory, k: "Indústrias DTC", probs: "Canal conflitante · Estoque desalinhado · Visão fragmentada", sols: "Previsão por canal · Harmonização de preço · Planejamento por demanda" },
  ];
  const [active, setActive] = useState(0);
  const cur = inds[active];
  return (
    <Section id="industrias">
      <Reveal><Tag><Target size={12} /> Mercado-alvo</Tag></Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-6 text-4xl md:text-5xl font-light max-w-3xl">Problemas Reais por Indústria</h2>
      </Reveal>
      <Reveal delay={0.15}>
        <p className="mt-5 text-lg text-offwhite/85 max-w-3xl">
          O Maestro AI OS resolve dores estruturais que impactam margem, crescimento e risco em setores estratégicos.
        </p>
      </Reveal>

      <div className="mt-12 grid lg:grid-cols-12 gap-6">
        <div className="lg:col-span-4 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
          {inds.map((ind, i) => {
            const Icon = ind.Icon;
            const isActive = i === active;
            return (
              <button
                key={ind.k}
                onClick={() => setActive(i)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-left transition-all flex-shrink-0 lg:flex-shrink ${
                  isActive ? "bg-white/10 border-white/30" : "border-white/10 hover:bg-white/5"
                }`}
              >
                <Icon size={18} style={{ color: isActive ? "var(--brand-purple-light)" : undefined }} />
                <span className="font-medium text-sm whitespace-nowrap">{ind.k}</span>
              </button>
            );
          })}
        </div>
        <div className="lg:col-span-8">
          <motion.div key={active} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="surface-card p-8 h-full">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 rounded-lg grid place-items-center" style={{ background: "var(--brand-purple-light)" }}>
                <cur.Icon size={20} />
              </span>
              <h3 className="font-display text-2xl font-medium">{cur.k}</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-offwhite/60 font-semibold mb-3">Problemas</p>
                <p className="text-sm text-offwhite/85 leading-relaxed">{cur.probs}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: "var(--brand-purple-light)" }}>Soluções Maestro</p>
                <p className="text-sm text-white leading-relaxed">{cur.sols}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Reveal delay={0.3}>
        <p className="mt-12 max-w-3xl text-xl md:text-2xl font-display font-light">
          Não é tecnologia genérica. É <strong>inteligência aplicada a problemas reais</strong> que impactam P&L, risco e crescimento.
        </p>
      </Reveal>
    </Section>
  );
}

/* ============ 20. ADOÇÃO + IMPACTO ============ */
function AdocaoImpacto() {
  const modes = [
    { name: "Entry Mode — Decision Team First", bullets: ["Teams conectados ao stack atual", "POV típico de 6–8 semanas", "Valor rápido e champions internos"] },
    { name: "Scale Mode — Hybrid", bullets: ["Agentic + dados parcialmente unificados", "Múltiplos Teams coordenados", "Redução de silos"] },
    { name: "Enterprise Mode — Full Maestro AI OS", bullets: ["Core Data como fundação única", "Governança total", "Decisão distribuída e auditável"] },
  ];
  const bars = [
    { l: "Velocidade de Decisão", v: 60 },
    { l: "Previsibilidade", v: 80 },
    { l: "Execução Conectada", v: 55 },
    { l: "Eficiência Operacional", v: 45 },
  ];
  const pillars = [
    { t: "Decisões Mais Rápidas", d: "Redução de 60%+ no tempo entre insight e ação" },
    { t: "Menos Dependência Operacional", d: "Times focam em estratégia, não em análise manual" },
    { t: "Mais Previsibilidade", d: "Antecipação de cenários com 80%+ de acurácia" },
    { t: "Execução Conectada", d: "Estratégia traduzida em ação automaticamente" },
  ];
  return (
    <>
      <Section>
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-light max-w-3xl">Modelos de Adoção</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 text-lg text-offwhite/85 max-w-3xl">
            Entrada rápida com valor imediato. Escala progressiva conforme maturidade.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex items-center gap-3 text-sm flex-wrap">
            {["Entry", "Validate", "Scale", "Institutionalize"].map((s, i, arr) => (
              <div key={s} className="flex items-center gap-3">
                <span className="px-4 py-2 rounded-full border border-white/15 bg-white/5 font-medium">{s}</span>
                {i < arr.length - 1 && <ArrowRight size={16} className="text-offwhite/50" />}
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {modes.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.05}>
              <div className="surface-card p-7 h-full">
                <span className="font-display text-3xl" style={{ color: "var(--brand-purple-light)" }}>0{i + 1}</span>
                <h3 className="mt-3 font-display text-lg font-medium">{m.name}</h3>
                <ul className="mt-4 space-y-2">
                  {m.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-offwhite/85">
                      <CheckCircle2 size={14} className="mt-0.5 flex-shrink-0" style={{ color: "var(--brand-purple-light)" }} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="ganhos">
        <Reveal><Tag><Trophy size={12} /> Impacto Board</Tag></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 text-4xl md:text-5xl font-light max-w-3xl">O Que Sua Empresa Ganha</h2>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="surface-card p-8">
              <p className="text-xs uppercase tracking-widest text-offwhite/60 mb-6 font-semibold">Indicadores</p>
              <div className="space-y-5">
                {bars.map((b, i) => (
                  <div key={b.l}>
                    <div className="flex justify-between text-sm mb-2">
                      <span>{b.l}</span>
                      <span className="font-display font-semibold" style={{ color: "var(--brand-purple-light)" }}>+{b.v}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/8 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${b.v}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ background: "linear-gradient(90deg, var(--brand-purple-light), var(--cyan-accent))" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="space-y-4">
            {pillars.map((p, i) => (
              <Reveal key={p.t} delay={i * 0.05}>
                <div className="surface-card p-6 border-l-4" style={{ borderLeftColor: "var(--brand-purple-light)" }}>
                  <h3 className="font-display text-lg font-medium">{p.t}</h3>
                  <p className="mt-2 text-sm text-offwhite/80">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.3}>
          <p className="mt-12 font-display text-2xl md:text-3xl font-light">
            Em mercados onde <strong>margem é pressionada</strong>, <strong>velocidade de decisão é vantagem estrutural</strong>.
          </p>
        </Reveal>
      </Section>
    </>
  );
}

/* ============ 21. VALIDAÇÃO + CTA ============ */
function ValidacaoCTA({ onDemo }: { onDemo: () => void }) {
  const cards = [
    { firm: "McKinsey Global Institute", text: "Até ", strong: "45% de ganho de produtividade", rest: " com IA aplicada à decisão estratégica e operacional" },
    { firm: "Gartner Research", text: "Decision Intelligence será ", strong: "vantagem competitiva crítica", rest: " para 75% das organizações até 2026" },
    { firm: "PwC Global AI Study", text: "ROI médio de ", strong: "340% em iniciativas prescritivas", rest: " vs. 180% em analytics descritivo" },
  ];
  return (
    <>
      <Section>
        <Reveal><Tag><Award size={12} /> Validação</Tag></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 text-4xl md:text-5xl font-light max-w-3xl">O Que o Mercado Diz</h2>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <Reveal key={c.firm} delay={i * 0.05}>
              <div className="surface-card p-7 h-full">
                <p className="text-xs uppercase tracking-widest font-semibold" style={{ color: "var(--brand-purple-light)" }}>{c.firm}</p>
                <p className="mt-4 text-base leading-relaxed">
                  {c.text}<strong className="text-white">{c.strong}</strong>{c.rest}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <Reveal>
            <blockquote className="border-l-4 pl-6 font-display text-xl font-light italic" style={{ borderLeftColor: "var(--brand-purple-light)" }}>
              "O que pode ser medido pode ser gerenciado."
              <footer className="mt-3 not-italic text-sm text-offwhite/70 font-sans">— Peter Drucker</footer>
            </blockquote>
          </Reveal>
          <Reveal delay={0.1}>
            <blockquote className="border-l-4 pl-6 font-display text-xl font-light italic" style={{ borderLeftColor: "var(--brand-purple-light)" }}>
              "Assim como a eletricidade transformou as indústrias, a IA fará o mesmo."
              <footer className="mt-3 not-italic text-sm text-offwhite/70 font-sans">— Andrew Ng</footer>
            </blockquote>
          </Reveal>
        </div>
      </Section>

      <section className="relative px-6 md:px-10 py-24 md:py-32" style={{ background: "linear-gradient(135deg, var(--brand-purple-dark), var(--brand-purple) 50%, var(--brand-purple-light))" }}>
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-light leading-[1.1] tracking-tight">
              Maestro AI OS não é um software. É a arquitetura que permite que sua empresa{" "}
              <strong className="font-medium">pense, decida e execute em escala.</strong>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 text-lg text-offwhite/95 max-w-3xl mx-auto">
              Agende uma demo executiva de 30 minutos. Sem compromisso. Cobrimos sua realidade, sua arquitetura atual e o caminho mais curto para o primeiro Team em produção.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-10 flex justify-center">
              <button onClick={onDemo} className="btn-primary-light text-base">
                Agendar Demo Estratégica <ArrowRight size={18} />
              </button>
            </div>
            <p className="mt-4 text-xs text-white/80">
              Resposta em até 24h úteis · NDA disponível · Conversamos antes de propor
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

/* ============ FOOTER ============ */
function Footer() {
  return (
    <footer className="px-6 md:px-10 pt-20 pb-10 border-t border-white/10" style={{ background: "var(--brand-purple-dark)" }}>
      <div className="mx-auto max-w-7xl grid md:grid-cols-4 gap-10">
        <div>
          <p className="font-display text-2xl font-semibold">Always On</p>
          <p className="mt-3 text-sm text-offwhite/80 max-w-xs">
            Decisão orientada por dados, operada por times de IA.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-offwhite/60 font-semibold mb-4">Contato direto</p>
          <p className="font-medium">Elcio Santos</p>
          <p className="mt-3 text-sm text-offwhite/85 flex items-center gap-2"><Phone size={14} /> 11 994 988 670</p>
          <a href="mailto:elcio@aodigital.com.br" className="mt-2 text-sm text-offwhite/85 flex items-center gap-2 hover:text-white">
            <Mail size={14} /> elcio@aodigital.com.br
          </a>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-offwhite/60 font-semibold mb-4">Links rápidos</p>
          <ul className="space-y-2 text-sm">
            <li><a href="#arquitetura" className="text-offwhite/85 hover:text-white">Arquitetura</a></li>
            <li><a href="#teams" className="text-offwhite/85 hover:text-white">Teams</a></li>
            <li><a href="#industrias" className="text-offwhite/85 hover:text-white">Indústrias</a></li>
            <li><a href="#top" className="text-offwhite/85 hover:text-white">Demo</a></li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-offwhite/60 font-semibold mb-4">Acompanhe</p>
          <div className="flex flex-col gap-2 text-sm">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-offwhite/85 hover:text-white flex items-center gap-2">
              <Linkedin size={14} /> LinkedIn
            </a>
            <a href="https://aodigital.com.br" target="_blank" rel="noreferrer" className="text-offwhite/85 hover:text-white flex items-center gap-2">
              <Globe size={14} /> aodigital.com.br
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl mt-12 pt-6 border-t border-white/10 flex flex-wrap justify-between gap-4 text-xs text-offwhite/60">
        <p>© 2026 Always On. Todos os direitos reservados.</p>
        <p>Política de Privacidade · LGPD</p>
      </div>
    </footer>
  );
}
