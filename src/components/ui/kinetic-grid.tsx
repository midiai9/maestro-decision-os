"use client";

import { useEffect, useRef, useCallback } from "react";

/**
 * KineticGrid — rede reativa ao ponteiro, adaptada como OVERLAY transparente.
 * Preenche o elemento-pai (position: relative). Não pinta fundo (o vídeo aparece atrás).
 * pointer-events: none — não bloqueia cliques nos CTAs do hero.
 */

interface Point { x: number; y: number; }
interface Ripple { x: number; y: number; radius: number; opacity: number; born: number; }

const CELL_SIZE = 58;
const INFLUENCE_RADIUS = 240;
const MAX_WARP = 22;
const LERP_SPEED = 0.09;

const LINE_BASE = { r: 180, g: 200, b: 255, a: 0.10 };
const LINE_ACTIVE = { r: 34, g: 211, b: 238, a: 0.9 };   // ciano
const NODE_ACTIVE = { r: 124, g: 92, b: 246, a: 1.0 };    // violeta
const GLOW = "34,211,238";
const RIPPLE = "124,92,246";
const NODE_BASE_RADIUS = 1.4;
const NODE_ACTIVE_RADIUS = 3.0;

const lerpN = (a: number, b: number, t: number) => a + (b - a) * t;
function lerpColor(base: typeof LINE_BASE, active: typeof LINE_ACTIVE, t: number) {
  const r = Math.round(lerpN(base.r, active.r, t));
  const g = Math.round(lerpN(base.g, active.g, t));
  const b = Math.round(lerpN(base.b, active.b, t));
  const a = lerpN(base.a, active.a, t);
  return `rgba(${r},${g},${b},${a.toFixed(3)})`;
}

export default function KineticGrid({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<Point>({ x: -9999, y: -9999 });
  const targetRef = useRef<Point>({ x: -9999, y: -9999 });
  const ripplesRef = useRef<Ripple[]>([]);
  const rafRef = useRef<number>(0);
  const sizeRef = useRef<{ w: number; h: number }>({ w: 0, h: 0 });

  const getWarped = useCallback(
    (gx: number, gy: number, col: number, row: number, mouse: Point, ripples: Ripple[], cols: number, rows: number) => {
      const edge = 1.5;
      const colPin = Math.min(col / edge, (cols - 1 - col) / edge, 1);
      const rowPin = Math.min(row / edge, (rows - 1 - row) / edge, 1);
      const pin = colPin * colPin * rowPin * rowPin;

      const dx = gx - mouse.x;
      const dy = gy - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const proximity = Math.max(0, 1 - dist / INFLUENCE_RADIUS) * pin;

      let rx = 0, ry = 0;
      for (const r of ripples) {
        const rdx = gx - r.x, rdy = gy - r.y;
        const rdist = Math.sqrt(rdx * rdx + rdy * rdy);
        const waveWidth = 55;
        const diff = rdist - r.radius;
        if (Math.abs(diff) < waveWidth) {
          const strength = (1 - Math.abs(diff) / waveWidth) * r.opacity * 16 * pin;
          const angle = Math.atan2(rdy, rdx);
          const sign = diff < 0 ? -1 : 1;
          rx += Math.cos(angle) * strength * sign * -1;
          ry += Math.sin(angle) * strength * sign * -1;
        }
      }

      if (dist < INFLUENCE_RADIUS && dist > 0 && pin > 0) {
        const t = dist / INFLUENCE_RADIUS;
        const eased = t < 0.01 ? 0 : (1 - t) * (1 - t) * Math.min(1, dist / 60);
        const warp = eased * MAX_WARP * pin;
        const angle = Math.atan2(dy, dx);
        return { pt: { x: gx - Math.cos(angle) * warp + rx, y: gy - Math.sin(angle) * warp + ry }, proximity };
      }
      return { pt: { x: gx + rx, y: gy + ry }, proximity };
    },
    [],
  );

  const draw = useCallback((now: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const { w: W, h: H } = sizeRef.current;
    const mouse = mouseRef.current;
    const ripples = ripplesRef.current;

    ctx.clearRect(0, 0, W, H); // transparente — deixa o vídeo aparecer

    for (let i = ripples.length - 1; i >= 0; i--) {
      const r = ripples[i];
      const age = (now - r.born) / 1000;
      r.radius = Math.max(0, age * 420);
      r.opacity = Math.max(0, 1 - age * 1.2);
      if (r.opacity <= 0) ripples.splice(i, 1);
    }

    const cols = Math.max(2, Math.ceil(W / CELL_SIZE)) + 1;
    const rows = Math.max(2, Math.ceil(H / CELL_SIZE)) + 1;
    const cellW = W / (cols - 1);
    const cellH = H / (rows - 1);

    const pts: Point[][] = [];
    const prox: number[][] = [];
    for (let row = 0; row < rows; row++) {
      pts[row] = []; prox[row] = [];
      for (let col = 0; col < cols; col++) {
        const { pt, proximity } = getWarped(col * cellW, row * cellH, col, row, mouse, ripples, cols, rows);
        pts[row][col] = pt; prox[row][col] = proximity;
      }
    }

    const seg = (p1: Point, p2: Point, pr1: number, pr2: number) => {
      const avg = (pr1 + pr2) / 2;
      const t = avg * avg * (3 - 2 * avg);
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.strokeStyle = lerpColor(LINE_BASE, LINE_ACTIVE, t);
      ctx.lineWidth = lerpN(0.7, 1.4, t);
      ctx.stroke();
    };
    ctx.lineCap = "butt";
    for (let row = 0; row < rows; row++)
      for (let col = 0; col < cols - 1; col++)
        seg(pts[row][col], pts[row][col + 1], prox[row][col], prox[row][col + 1]);
    for (let col = 0; col < cols; col++)
      for (let row = 0; row < rows - 1; row++)
        seg(pts[row][col], pts[row + 1][col], prox[row][col], prox[row + 1][col]);

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const p = pts[row][col];
        const pr = prox[row][col];
        const t = pr * pr * (3 - 2 * pr);
        const r = lerpN(NODE_BASE_RADIUS, NODE_ACTIVE_RADIUS, t);
        if (t > 0.3) {
          const glowR = r + lerpN(0, 6, (t - 0.3) / 0.7);
          const grd = ctx.createRadialGradient(p.x, p.y, r * 0.5, p.x, p.y, glowR);
          grd.addColorStop(0, `rgba(${GLOW},${(t * 0.35).toFixed(3)})`);
          grd.addColorStop(1, `rgba(${GLOW},0)`);
          ctx.beginPath();
          ctx.arc(p.x, p.y, glowR, 0, Math.PI * 2);
          ctx.fillStyle = grd; ctx.fill();
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fillStyle = lerpColor({ r: 200, g: 210, b: 255, a: 0.18 }, NODE_ACTIVE, t);
        ctx.fill();
      }
    }

    for (const r of ripples) {
      const safe = Math.max(0, r.radius);
      ctx.beginPath();
      ctx.arc(r.x, r.y, safe, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${RIPPLE},${(r.opacity * 0.3).toFixed(3)})`;
      ctx.lineWidth = 1.4;
      ctx.stroke();
    }
  }, [getWarped]);

  const animate = useCallback((now: number) => {
    const m = mouseRef.current, t = targetRef.current;
    m.x = lerpN(m.x, t.x, LERP_SPEED);
    m.y = lerpN(m.y, t.y, LERP_SPEED);
    draw(now);
    rafRef.current = requestAnimationFrame(animate);
  }, [draw]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const setSize = () => {
      const rect = (parent ?? canvas).getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      const ctx = canvas.getContext("2d");
      if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      sizeRef.current = { w: rect.width, h: rect.height };
    };
    setSize();
    window.addEventListener("resize", setSize);

    const toLocal = (clientX: number, clientY: number) => {
      const rect = (parent ?? canvas).getBoundingClientRect();
      return { x: clientX - rect.left, y: clientY - rect.top };
    };
    const onMove = (e: MouseEvent) => { targetRef.current = toLocal(e.clientX, e.clientY); };
    const onClick = (e: MouseEvent) => {
      const l = toLocal(e.clientX, e.clientY);
      if (l.x < 0 || l.y < 0 || l.x > sizeRef.current.w || l.y > sizeRef.current.h) return;
      ripplesRef.current.push({ x: l.x, y: l.y, radius: 0, opacity: 1, born: performance.now() });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("click", onClick);

    const startLoop = () => { if (!rafRef.current) rafRef.current = requestAnimationFrame(animate); };
    const stopLoop = () => { if (rafRef.current) { cancelAnimationFrame(rafRef.current); rafRef.current = 0; } };

    let observer: IntersectionObserver | null = null;
    if (reduce) {
      draw(0); // desenho estático, sem loop
    } else if (parent && "IntersectionObserver" in window) {
      // Só anima enquanto a seção está visível — mantém tudo leve com várias redes na página
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) startLoop();
          else stopLoop();
        },
        { threshold: 0 }
      );
      observer.observe(parent);
    } else {
      startLoop();
    }

    return () => {
      window.removeEventListener("resize", setSize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("click", onClick);
      if (observer) observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [animate, draw]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  );
}
