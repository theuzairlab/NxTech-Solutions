"use client";

import { useMemo, useRef, useId } from "react";
import type { MotionValue } from "motion/react";
import { motion, useScroll, useTransform } from "motion/react";
import type { SubServiceFeature } from "./sub-service-data";

function TimelineNodeCircle({
  scrollYProgress,
  threshold,
  cx,
  cy,
}: {
  scrollYProgress: MotionValue<number>;
  threshold: [number, number];
  cx: number;
  cy: number;
}) {
  const opacity = useTransform(
    scrollYProgress,
    [threshold[0], threshold[1]],
    [0.35, 1],
  );
  const scale = useTransform(
    scrollYProgress,
    [threshold[0], threshold[1]],
    [0.82, 1],
  );
  return (
    <motion.circle
      cx={cx}
      cy={cy}
      r="18"
      fill="white"
      stroke="rgba(2,132,199,0.6)"
      strokeWidth="3"
      style={{ opacity, scale }}
    />
  );
}

function TimelineNodeLabel({
  scrollYProgress,
  threshold,
  x,
  y,
  n,
}: {
  scrollYProgress: MotionValue<number>;
  threshold: [number, number];
  x: number;
  y: number;
  n: number;
}) {
  const opacity = useTransform(
    scrollYProgress,
    [threshold[0], threshold[1]],
    [0, 1],
  );
  return (
    <motion.text
      x={x}
      y={y + 1}
      textAnchor="middle"
      dominantBaseline="central"
      className="text-[13px] font-bold"
      fill="rgba(2,132,199,0.95)"
      style={{ opacity }}
    >
      {n}
    </motion.text>
  );
}

function ScrollRevealFeatureCard({
  item,
  idx,
  scrollYProgress,
  threshold,
  isLeft,
}: {
  item: SubServiceFeature;
  idx: number;
  scrollYProgress: MotionValue<number>;
  threshold: [number, number];
  isLeft: boolean;
}) {
  const Icon = item.icon;
  const opacity = useTransform(scrollYProgress, [threshold[0], threshold[1]], [0, 1]);
  const x = useTransform(
    scrollYProgress,
    [threshold[0], threshold[1]],
    [isLeft ? -24 : 24, 0],
  );
  const y = useTransform(scrollYProgress, [threshold[0], threshold[1]], [16, 0]);

  return (
    <div className="relative flex min-h-[230px] items-center">
      <motion.div
        className={`w-[46%] ${isLeft ? "mr-auto" : "ml-auto"}`}
        style={{ opacity, x, y }}
      >
        <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_22px_55px_rgba(15,23,42,0.1)]">
          <div className="absolute inset-x-0 top-0 h-1 rounded-t-3xl bg-linear-to-r from-primary/60 via-sky-400/60 to-emerald-400/60" />
          <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/10 blur-2xl" />

          <div className="relative flex items-start gap-4">
            <motion.div
              className="rounded-2xl bg-primary/10 p-3"
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 2.4, repeat: Infinity }}
            >
              <Icon className="h-6 w-6 text-primary" />
            </motion.div>
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                Step {String(idx + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-1 text-2xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>

              <div className="mt-4 space-y-2">
                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                  <motion.div
                    className="h-full rounded-full bg-linear-to-r from-primary to-sky-500"
                    initial={{ width: "0%" }}
                    whileInView={{
                      width: `${Math.min(96, 72 + idx * 6)}%`,
                    }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                  />
                </div>
                <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-primary font-medium">
                    Included
                  </span>
                  <span>In your delivery scope</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function buildVerticalCurvedPath(points: { x: number; y: number }[]) {
  if (points.length === 0) return "";
  if (points.length === 1) return `M ${points[0].x} ${points[0].y}`;

  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const midY = prev.y + (curr.y - prev.y) * 0.5;
    d += ` C ${prev.x} ${midY}, ${curr.x} ${midY}, ${curr.x} ${curr.y}`;
  }
  return d;
}

export interface SubServiceFeaturesTimelineProps {
  features: SubServiceFeature[];
  /** Pill label (matches core “Answer” placement) */
  badge: string;
  /** Main heading — non-accent portion */
  titleLead: string;
  /** Heading accent span (typically primary-colored) */
  titleAccent: string;
  subtitle?: string;
}

export function SubServiceFeaturesTimeline({
  features,
  badge,
  titleLead,
  titleAccent,
  subtitle,
}: SubServiceFeaturesTimelineProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const uid = useId().replace(/:/g, "");
  const gradientId = `subServiceFeatGrad-${uid}`;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const stepCount = features.length;

  const stepThresholds = useMemo(() => {
    const startBase = 0.05;
    const range = 0.85;
    return features.map((_, i) => {
      const start = startBase + (i * range) / Math.max(1, stepCount);
      const end = start + 0.14;
      return [start, end] as [number, number];
    });
  }, [features, stepCount]);

  const svg = useMemo(() => {
    const width = 1200;
    const topPad = 80;
    const gap = 230;
    const height = topPad * 2 + Math.max(0, stepCount - 1) * gap;
    const centerX = width / 2;
    const leftX = centerX - 54;
    const rightX = centerX + 54;
    const pts = Array.from({ length: stepCount }).map((_, i) => ({
      x: i % 2 === 0 ? leftX : rightX,
      y: topPad + i * gap,
    }));
    const d = buildVerticalCurvedPath(pts);
    return { width, height, pts, d };
  }, [stepCount]);

  const pathLength = useTransform(scrollYProgress, [0.02, 0.95], [0, 1]);

  if (features.length === 0) return null;

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-24 bg-linear-to-b from-background to-primary/5"
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/60 bg-emerald-50 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-emerald-600">
            {badge}
          </span>
        </div>
        <div className="mt-6 text-center">
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold">
            <span className="text-slate-900">{titleLead}</span>{" "}
            <span className="text-primary">{titleAccent}</span>
          </h2>
          {subtitle ? (
            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          ) : null}
        </div>

        {/* Mobile: stacked Answer-style cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:hidden">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={`${item.title}-${idx}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="relative overflow-hidden rounded-2xl bg-white shadow-[0_18px_45px_rgba(15,23,42,0.09)] border border-slate-100 p-6"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-primary/60 via-sky-400/60 to-emerald-400/60" />
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-primary/10 p-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                      Step {String(idx + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.description}</p>
                    <div className="mt-4 space-y-2">
                      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                        <motion.div
                          className="h-full rounded-full bg-linear-to-r from-primary to-sky-500"
                          initial={{ width: "0%" }}
                          whileInView={{
                            width: `${Math.min(96, 58 + idx * 7)}%`,
                          }}
                          viewport={{ once: true, amount: 0.6 }}
                          transition={{ duration: 0.8, delay: 0.1 }}
                        />
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                        <span className="rounded-full bg-primary/10 px-2 py-0.5 text-primary font-medium">
                          Included
                        </span>
                        <span>In your delivery scope</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Desktop: scroll-linked curved timeline (parity with Revops “Answer”) */}
        <div className="relative mt-14 hidden lg:block">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-40 top-[-10%] h-[520px] w-[520px] rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute right-[-20%] bottom-[-10%] h-[620px] w-[620px] rounded-full bg-sky-500/8 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-6xl">
            <svg
              viewBox={`0 0 ${svg.width} ${svg.height}`}
              className="pointer-events-none absolute inset-0 h-full w-full"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path
                d={svg.d}
                stroke="rgba(148,163,184,0.45)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <motion.path
                d={svg.d}
                stroke={`url(#${gradientId})`}
                strokeWidth="3"
                strokeLinecap="round"
                style={{ pathLength }}
              />

              {svg.pts.map((p, i) => (
                <TimelineNodeCircle
                  key={`node-${i}`}
                  scrollYProgress={scrollYProgress}
                  threshold={stepThresholds[i]}
                  cx={p.x}
                  cy={p.y}
                />
              ))}

              {svg.pts.map((p, i) => (
                <TimelineNodeLabel
                  key={`num-${i}`}
                  scrollYProgress={scrollYProgress}
                  threshold={stepThresholds[i]}
                  x={p.x}
                  y={p.y}
                  n={i + 1}
                />
              ))}

              <defs>
                <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(2,132,199,0.95)" />
                  <stop offset="50%" stopColor="rgba(124,58,237,0.85)" />
                  <stop offset="100%" stopColor="rgba(16,185,129,0.9)" />
                </linearGradient>
              </defs>
            </svg>

            <div className="relative">
              {features.map((item, idx) => (
                <ScrollRevealFeatureCard
                  key={`${item.title}-${idx}`}
                  item={item}
                  idx={idx}
                  scrollYProgress={scrollYProgress}
                  threshold={stepThresholds[idx]}
                  isLeft={idx % 2 === 0}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
