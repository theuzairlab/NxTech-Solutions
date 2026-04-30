"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { CoreServiceKey, FLOW_CONFIG } from "./core-service-flow";

const PATH_WIDTH = 1200;
const PATH_HEIGHT = 160;

function buildStepXs(count: number): number[] {
  if (count <= 1) return [PATH_WIDTH / 2];
  const margin = 160;
  const usable = PATH_WIDTH - margin * 2;
  const gap = usable / (count - 1);
  return Array.from({ length: count }, (_, i) => margin + i * gap);
}

function buildWavyPath(stepXs: number[]): string {
  const top = 40;
  const bot = 120;
  const pts = stepXs.map((x, i) => ({ x, y: i % 2 === 0 ? top : bot }));
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

const ACCENTS = [
  {
    accent: "text-primary",
    accentBg: "bg-primary",
    accentLight: "bg-primary/10",
    accentBorder: "border-primary/25",
  },
  {
    accent: "text-indigo-600",
    accentBg: "bg-indigo-500",
    accentLight: "bg-indigo-500/10",
    accentBorder: "border-indigo-400/25",
  },
  {
    accent: "text-violet-600",
    accentBg: "bg-violet-500",
    accentLight: "bg-violet-500/10",
    accentBorder: "border-violet-400/25",
  },
  {
    accent: "text-emerald-600",
    accentBg: "bg-emerald-500",
    accentLight: "bg-emerald-500/10",
    accentBorder: "border-emerald-400/25",
  },
  {
    accent: "text-sky-600",
    accentBg: "bg-sky-500",
    accentLight: "bg-sky-500/10",
    accentBorder: "border-sky-400/25",
  },
  {
    accent: "text-amber-600",
    accentBg: "bg-amber-500",
    accentLight: "bg-amber-500/10",
    accentBorder: "border-amber-400/25",
  },
];

interface RevopsCoreHowItWorksProps {
  service: CoreServiceKey;
}

export function RevopsCoreHowItWorks({ service }: RevopsCoreHowItWorksProps) {
  const cfg = FLOW_CONFIG[service];
  const steps = cfg.howSteps.slice(0, 6);
  const stepXs = buildStepXs(steps.length);
  const WAVY_PATH = buildWavyPath(stepXs);

  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const pathLength = useTransform(scrollYProgress, [0.05, 0.85], [0, 1]);
  const ballProgress = useTransform(scrollYProgress, [0.05, 0.85], [0, 1]);

  const thresholds = steps.map((_, i) => {
    const start = 0.05 + (i * 0.8) / steps.length;
    const end = start + 0.12;
    return [start, end] as [number, number];
  });

  return (
    <section ref={sectionRef} className="relative bg-white">
      {/* Mobile vertical timeline */}
      <div className="block px-4 py-16 sm:px-6 sm:py-20 lg:hidden">
        <div className="mb-10 text-center">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
              How It Works
            </span>
          </div>
          <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            How We Help With{" "}
            <span className="text-primary">
              {service === "ai-automation-marketing"
                ? "AI Sales"
                : service === "web-development"
                ? "Web"
                : service === "app-development"
                ? "Apps"
                : "Marketing"}
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground/80 sm:text-base">
            {cfg.howSubtitle}
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const accent = ACCENTS[idx % ACCENTS.length];
            return (
              <div key={step.title}>
                <div
                  className={`rounded-2xl border bg-white p-5 shadow-md ${accent.accentBorder}`}
                >
                  <div className="mb-2 flex items-center gap-3">
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-xl ${accent.accentBg}`}
                    >
                      {Icon && <Icon className="h-4 w-4 text-white" />}
                    </div>
                    <div>
                      <p
                        className={`text-[10px] font-bold uppercase tracking-widest ${accent.accent}`}
                      >
                        Step {idx + 1}
                      </p>
                      <h4 className="text-sm font-bold text-foreground">
                        {step.title}
                      </h4>
                    </div>
                  </div>
                  <p className="mb-3 text-xs leading-relaxed text-muted-foreground">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Desktop sticky curved timeline */}
      <div className="hidden lg:block" style={{ height: `${steps.length * 100 + 60}vh` }}>
        <div className="sticky top-0 flex h-screen flex-col overflow-hidden pb-16">
          <motion.div
            className="shrink-0 pt-20 pb-4 text-center"
            style={{
              opacity: useTransform(scrollYProgress, [0, 0.08], [0, 1]),
              y: useTransform(scrollYProgress, [0, 0.08], [30, 0]),
            }}
          >
            <div className="mx-auto mb-4 mt-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                How It Works
              </span>
            </div>
            <h2 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl">
              We Have The Best{" "}
              <span className="text-primary">Process</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground/80">
              {cfg.howSubtitle}
            </p>
          </motion.div>

          <div className="relative flex flex-1 items-center">
            <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
              <svg
                viewBox={`0 0 ${PATH_WIDTH} ${PATH_HEIGHT}`}
                className="mx-auto w-full max-w-6xl"
                fill="none"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d={WAVY_PATH}
                  stroke="#e5e7eb"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />

                <motion.path
                  d={WAVY_PATH}
                  stroke="url(#howGrad)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                  style={{ pathLength }}
                />

                {steps.map((_, i) => {
                  const y = i % 2 === 0 ? 40 : 120;
                  return (
                    <motion.circle
                      key={`dot-${i}`}
                      cx={stepXs[i]}
                      cy={y}
                      r="16"
                      fill="white"
                      stroke="hsl(var(--primary))"
                      strokeWidth="3"
                      style={{
                        opacity: useTransform(
                          scrollYProgress,
                          [thresholds[i][0], thresholds[i][1]],
                          [0.3, 1],
                        ),
                        scale: useTransform(
                          scrollYProgress,
                          [thresholds[i][0], thresholds[i][1]],
                          [0.7, 1],
                        ),
                      }}
                    />
                  );
                })}

                {steps.map((_, i) => {
                  const y = i % 2 === 0 ? 40 : 120;
                  return (
                    <motion.text
                      key={`num-${i}`}
                      x={stepXs[i]}
                      y={y + 1}
                      textAnchor="middle"
                      dominantBaseline="central"
                      className="text-[13px] font-bold"
                      fill="hsl(var(--primary))"
                      style={{
                        opacity: useTransform(
                          scrollYProgress,
                          [thresholds[i][0], thresholds[i][1]],
                          [0, 1],
                        ),
                      }}
                    >
                      {i + 1}
                    </motion.text>
                  );
                })}

                <motion.circle
                  r="8"
                  fill="url(#ballGrad2)"
                  style={{
                    offsetPath: `path('${WAVY_PATH}')`,
                    offsetDistance: useTransform(ballProgress, (v) => `${v * 100}%`),
                  }}
                  filter="url(#glow2)"
                />

                <defs>
                  <linearGradient id="howGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#fb7185" />
                    <stop offset="50%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#22c55e" />
                  </linearGradient>
                  <radialGradient id="ballGrad2">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="50%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </radialGradient>
                  <filter id="glow2" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
              </svg>

              {/* Cards */}
              <div className="pointer-events-none absolute inset-0">
                <div className="relative mx-auto h-full w-full max-w-7xl">
                  {steps.map((step, i) => {
                    const isTop = i % 2 === 0;
                    const Icon = step.icon;
                    const accent = ACCENTS[i % ACCENTS.length];
                    const leftPercent = (stepXs[i] / PATH_WIDTH) * 100;

                    return (
                      <motion.div
                        key={step.title}
                        className="pointer-events-auto absolute -translate-x-1/2"
                        style={{
                          width: "340px",
                          left: `${leftPercent}%`,
                          ...(isTop
                            ? { bottom: "55%", marginBottom: "12px" }
                            : { top: "55%", marginTop: "12px" }),
                          opacity: useTransform(
                            scrollYProgress,
                            [thresholds[i][0], thresholds[i][1]],
                            [0, 1],
                          ),
                          y: useTransform(
                            scrollYProgress,
                            [thresholds[i][0], thresholds[i][1]],
                            [isTop ? 24 : -24, 0],
                          ),
                        }}
                      >
                        <div
                          className={`rounded-2xl border bg-white p-5 shadow-lg shadow-black/5 ${accent.accentBorder}`}
                        >
                          <div className="mb-3 flex items-center gap-4">
                            <div
                              className={`flex h-9 w-9 items-center justify-center rounded-xl ${accent.accentBg}`}
                            >
                              {Icon && <Icon className="h-4 w-4 text-white" />}
                            </div>
                            <div>
                              <p
                                className={`text-[10px] font-bold uppercase tracking-widest ${accent.accent}`}
                              >
                                Step {i + 1}
                              </p>
                              <h4 className="text-lg font-bold text-foreground leading-tight">
                                {step.title}
                              </h4>
                            </div>
                          </div>
                          <p className="text-base leading-relaxed text-muted-foreground">
                            {step.desc}
                          </p>
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

