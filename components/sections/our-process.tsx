"use client";
import { useMemo, useRef } from "react";
import { Search, Target, Rocket, TrendingUp, CheckCircle2 } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";

const STEPS = [
  {
    step: 1,
    title: "Discovery & Consultation",
    description:
      "We begin by understanding your goals, constraints, and opportunities through focused consultation and analysis.",
    icon: Search,
    deliverables: ["Goal alignment", "Audit & discovery", "Scope & priorities"],
    color: "#00b4d8",
    accent: "text-primary",
    accentBg: "bg-primary",
    accentBorder: "border-primary/25",
  },
  {
    step: 2,
    title: "Strategy Development",
    description:
      "We create a tailored strategy and execution plan, informed by data and proven best practices.",
    icon: Target,
    deliverables: ["Roadmap", "Milestones", "Success metrics"],
    color: "#6366f1",
    accent: "text-indigo-600",
    accentBg: "bg-indigo-500",
    accentBorder: "border-indigo-400/25",
  },
  {
    step: 3,
    title: "Execution & Typical Setup",
    description:
      "We implement with speed and quality—shipping production-ready work in iterative sprints.",
    icon: Rocket,
    deliverables: ["Build & launch", "QA & validation", "Documentation handoff"],
    color: "#8b5cf6",
    accent: "text-violet-600",
    accentBg: "bg-violet-500",
    accentBorder: "border-violet-400/25",
  },
  {
    step: 4,
    title: "Optimization & Reporting",
    description:
      "We monitor performance, optimize continuously, and report clearly so results keep compounding.",
    icon: TrendingUp,
    deliverables: ["KPI reporting", "Optimization plan", "Scale support"],
    color: "#10b981",
    accent: "text-emerald-600",
    accentBg: "bg-emerald-500",
    accentBorder: "border-emerald-400/25",
  },
];

const STEP_COUNT = STEPS.length;

/* SVG wavy path coordinates — 4 stops across the horizontal line, ball bounces up/down */
const PATH_WIDTH = 1200;
const PATH_HEIGHT = 160;
const STEP_X = [180, 460, 740, 1020];
const WAVE_Y_TOP = 40;
const WAVE_Y_BOT = 120;
const WAVE_MID = (WAVE_Y_TOP + WAVE_Y_BOT) / 2;

function buildWavyPath(): string {
  const pts = STEP_X.map((x, i) => ({ x, y: i % 2 === 0 ? WAVE_Y_TOP : WAVE_Y_BOT }));
  let d = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 1; i < pts.length; i++) {
    const prev = pts[i - 1];
    const curr = pts[i];
    const cpx1 = prev.x + (curr.x - prev.x) * 0.5;
    const cpx2 = prev.x + (curr.x - prev.x) * 0.5;
    d += ` C ${cpx1} ${prev.y}, ${cpx2} ${curr.y}, ${curr.x} ${curr.y}`;
  }
  return d;
}

const WAVY_PATH = buildWavyPath();

export function OurProcess() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  /* Map scroll 0→1 to path draw and ball position */
  const pathLength = useTransform(scrollYProgress, [0.05, 0.85], [0, 1]);
  const ballProgress = useTransform(scrollYProgress, [0.05, 0.85], [0, 1]);

  /* Each step fades in at its segment of the scroll */
  const stepThresholds = STEPS.map((_, i) => {
    const start = 0.05 + (i * 0.8) / STEP_COUNT;
    const end = start + 0.12;
    return [start, end] as [number, number];
  });
  return (
    <section ref={sectionRef} className="relative bg-white">
      {/* Mobile: vertical timeline */}
      <div className="block px-4 py-16 sm:px-6 sm:py-20 lg:hidden">
        <div className="mb-10 text-center">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Our Process
            </span>
          </div>
          <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            How We Deliver{" "}
            <span className="text-primary">Exceptional Results</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground/80 sm:text-base">
            Clear steps. Production-ready delivery. Continuous optimization.
          </p>
        </div>

        <div className="space-y-6">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.step}>
                <div
                  className={`rounded-2xl border bg-white p-5 shadow-md ${step.accentBorder}`}
                >
                  <div className="mb-2 flex items-center gap-3">
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-xl ${step.accentBg}`}
                    >
                      <Icon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className={`text-[10px] font-bold uppercase tracking-widest ${step.accent}`}>
                        Step {step.step}
                      </p>
                      <h4 className="text-sm font-bold text-foreground">{step.title}</h4>
                    </div>
                  </div>
                  <p className="mb-3 text-xs leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                  <ul className="space-y-1">
                    {step.deliverables.map((d) => (
                      <li key={d} className="flex items-center gap-1.5 text-[11px]">
                        <CheckCircle2 className={`h-3 w-3 shrink-0 ${step.accent}`} />
                        <span className="text-foreground/70">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Desktop: sticky diagonal scroll */}
      <div className="hidden lg:block" style={{ height: `${STEP_COUNT * 110 + 70}vh` }}>
        <div className="sticky top-0 flex h-screen flex-col overflow-hidden pb-16">
          {/* Header */}
          <motion.div
            className="shrink-0 pt-20 pb-4 text-center"
            style={{
              opacity: useTransform(scrollYProgress, [0, 0.08], [0, 1]),
              y: useTransform(scrollYProgress, [0, 0.08], [30, 0]),
            }}
          >
            <div className="mx-auto mb-4 mt-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                Our Process
              </span>
            </div>
            <h2 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl">
              How We Deliver{" "}
              <span className="text-primary">Exceptional Results</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground/80">
              Scroll to reveal each step — the path draws live from top-left to bottom-right.
            </p>
          </motion.div>

          {/* ── Horizontal wavy line + ball + step cards ── */}
        <div className="relative flex flex-1 items-center">
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            {/* SVG path layer */}
            <svg
              viewBox={`0 0 ${PATH_WIDTH} ${PATH_HEIGHT}`}
              className="mx-auto w-full max-w-6xl"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Background track */}
              <path
                d={WAVY_PATH}
                stroke="#e5e7eb"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />

              {/* Animated drawn path */}
              <motion.path
                d={WAVY_PATH}
                stroke="url(#processGrad)"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
                style={{ pathLength }}
              />

              {/* Step circles on the path */}
              {STEPS.map((step, i) => {
                const cy = i % 2 === 0 ? WAVE_Y_TOP : WAVE_Y_BOT;
                return (
                  <motion.circle
                    key={step.step}
                    cx={STEP_X[i]}
                    cy={cy}
                    r="18"
                    fill="white"
                    stroke={step.color}
                    strokeWidth="3"
                    style={{
                      opacity: useTransform(
                        scrollYProgress,
                        [stepThresholds[i][0], stepThresholds[i][1]],
                        [0.3, 1],
                      ),
                      scale: useTransform(
                        scrollYProgress,
                        [stepThresholds[i][0], stepThresholds[i][1]],
                        [0.6, 1],
                      ),
                    }}
                  />
                );
              })}

              {/* Step numbers inside circles */}
              {STEPS.map((step, i) => {
                const cy = i % 2 === 0 ? WAVE_Y_TOP : WAVE_Y_BOT;
                return (
                  <motion.text
                    key={`num-${step.step}`}
                    x={STEP_X[i]}
                    y={cy + 1}
                    textAnchor="middle"
                    dominantBaseline="central"
                    className="text-[14px] font-bold"
                    fill={step.color}
                    style={{
                      opacity: useTransform(
                        scrollYProgress,
                        [stepThresholds[i][0], stepThresholds[i][1]],
                        [0, 1],
                      ),
                    }}
                  >
                    {step.step}
                  </motion.text>
                );
              })}

              {/* Bouncing ball */}
              <motion.circle
                r="8"
                fill="url(#ballGrad)"
                style={{
                  offsetPath: `path('${WAVY_PATH}')`,
                  offsetDistance: useTransform(ballProgress, (v) => `${v * 100}%`),
                }}
                filter="url(#glow)"
              />

              <defs>
                <linearGradient id="processGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00b4d8" />
                  <stop offset="33%" stopColor="#6366f1" />
                  <stop offset="66%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
                <radialGradient id="ballGrad">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="50%" stopColor="#00b4d8" />
                  <stop offset="100%" stopColor="#6366f1" />
                </radialGradient>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
            </svg>

            {/* ── Step content cards positioned above/below ── */}
            <div className="pointer-events-none absolute inset-0">
              <div className="relative mx-auto h-full w-full max-w-6xl">
                {STEPS.map((step, i) => {
                  const isTop = i % 2 === 0;
                  const Icon = step.icon;
                  const leftPercent = (STEP_X[i] / PATH_WIDTH) * 100;

                  return (
                    <motion.div
                      key={step.step}
                      className="pointer-events-auto absolute w-[240px] -translate-x-1/2"
                      style={{
                        width: "360px",
                        left: `${leftPercent}%`,
                        ...(isTop
                          ? { bottom: "55%", marginBottom: "12px" }
                          : { top: "55%", marginTop: "12px" }),
                        opacity: useTransform(
                          scrollYProgress,
                          [stepThresholds[i][0], stepThresholds[i][1]],
                          [0, 1],
                        ),
                        y: useTransform(
                          scrollYProgress,
                          [stepThresholds[i][0], stepThresholds[i][1]],
                          [isTop ? 20 : -20, 0],
                        ),
                      }}
                    >
                      <div
                        className={`rounded-2xl border ${step.accentBorder} bg-white p-4 shadow-lg shadow-black/5`}
                      >
                        {/* Card header */}
                        <div className="mb-3 flex items-center gap-4">
                          <div
                            className={`flex h-9 w-9 items-center justify-center rounded-xl ${step.accentBg}`}
                          >
                            <Icon className="h-4 w-4 text-white" />
                          </div>
                          <div>
                            <p
                              className={`text-[10px] font-bold uppercase tracking-widest ${step.accent}`}
                            >
                              Step {step.step}
                            </p>
                            <h4 className="text-sm font-bold text-foreground leading-tight">
                              {step.title}
                            </h4>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="mb-3 text-[11px] leading-relaxed text-muted-foreground">
                          {step.description}
                        </p>

                        {/* Deliverables */}
                        <ul className="space-y-1.5">
                          {step.deliverables.map((d) => (
                            <li key={d} className="flex items-center gap-1.5 text-[11px]">
                              <CheckCircle2
                                className={`h-3 w-3 shrink-0 ${step.accent}`}
                              />
                              <span className="text-foreground/70">{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

