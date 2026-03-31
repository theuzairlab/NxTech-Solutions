"use client";

import { useMemo, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  Clock,
  XCircle,
  Zap,
  Target,
  Layout,
  Gauge,
  BarChart3,
  Smartphone,
  Rocket,
  Layers,
  Megaphone,
  Search,
  RefreshCw,
} from "lucide-react";

type CoreServiceKey =
  | "ai-automation-marketing"
  | "web-development"
  | "app-development"
  | "digital-marketing";

interface ProblemItem {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
}

interface SolutionItem {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
  image?: string;
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

const CORE_CONFIG: Record<
  CoreServiceKey,
  {
    problemTitle: string;
    problemSubtitle: string;
    problems: ProblemItem[];
    solutionKicker: string;
    solutionTitle: string;
    solutionSubtitle: string;
    solutions: SolutionItem[];
  }
> = {
  "ai-automation-marketing": {
    problemTitle: `Key Challenges <span class='text-primary'>Sales & Marketing </span>Teams Face`,
    problemSubtitle:
      "Slow manual follow-ups, unqualified leads, and missed calls create revenue leaks every single day.",
    problems: [
      { icon: Clock, text: "Leads ignored for hours or days" },
      { icon: XCircle, text: "Slow response times hurt conversions" },
      { icon: Zap, text: "Manual follow-ups eating your team’s time" },
      {
        icon: Target,
        text: "No qualification system to prioritize hot leads",
      },
    ],
    solutionKicker: "AI Sales System",
    solutionTitle: "Our Solution",
    solutionSubtitle:
      "Always-on AI that calls leads, qualifies them, scores intent, and books meetings for your team.",
    solutions: [
      {
        icon: Zap,
        title: "Instant AI Response",
        desc: "AI calls or messages new leads within seconds, 24/7 — no wait, no missed opportunities.",
        image:
          "https://plus.unsplash.com/premium_photo-1725985758385-d5462d6e7f50?q=80&w=2070&auto=format",
      },
      {
        icon: BarChart3,
        title: "Smart Lead Scoring",
        desc: "Behavior, budget, and engagement signals are scored automatically so reps focus on hot deals.",
        image: "https://i.pinimg.com/736x/68/95/ff/6895ffdad693a8a3cab37ac3da402b49.jpg"
      },
      {
        icon: Target,
        title: "Qualification Playbooks",
        desc: "Custom question flows qualify leads using your ICP, offers, and sales scripts.",
        image: "https://i.pinimg.com/736x/30/dc/1d/30dc1dde835c2745f138802cd08db66a.jpg"
      },
      {
        icon: Clock,
        title: "Auto Calendar Booking",
        desc: "Qualified leads are routed straight to your calendar with reminders and follow-ups handled.",
        image: "https://i.pinimg.com/1200x/6d/f1/68/6df168b32d32bb72478e337ecb489154.jpg"
      },
    ],
  },
  "web-development": {
    problemTitle: "Key Challenges Web & Funnel Teams Face",
    problemSubtitle:
      "Sites look pretty but don’t convert. Load times, UX, and tracking issues quietly kill revenue.",
    problems: [
      { icon: XCircle, text: "Visitors bounce without converting" },
      { icon: Gauge, text: "Slow load times hurt SEO and UX" },
      { icon: Layout, text: "Confusing layouts and poor mobile experience" },
      {
        icon: BarChart3,
        text: "No proper CRM, analytics, or funnel tracking",
      },
    ],
    solutionKicker: "Conversion-First Web",
    solutionTitle: "Our Solution",
    solutionSubtitle:
      "High-performance websites built from day one to load fast, tell a clear story, and capture leads.",
    solutions: [
      {
        icon: Layout,
        title: "Conversion UX",
        desc: "Page structure, messaging, and CTAs designed to guide visitors toward one clear action.",
        image: "https://i.pinimg.com/1200x/49/7f/21/497f21faf68f42223c4576f0c4452fd3.jpg"
      },
      {
        icon: Gauge,
        title: "Speed Engineering",
        desc: "Core Web Vitals–friendly builds with optimized assets, caching, and CDN setup.",
        image: "https://i.pinimg.com/1200x/a1/48/79/a14879f46aa6412897a68e10aec2a93e.jpg"
      },
      {
        icon: BarChart3,
        title: "Analytics & CRM Ready",
        desc: "Pixel, tag, and CRM integrations wired in so every lead and event is tracked.",
        image: "https://i.pinimg.com/736x/84/cf/a3/84cfa3cef26963983f010b61bfba28c8.jpg"
      },
      {
        icon: Zap,
        title: "Test & Improve",
        desc: "Room for A/B tests, landing page variations, and rapid iteration as you scale.",
        image: "https://i.pinimg.com/736x/28/35/64/283564374c6f107252f90d80086d4db3.jpg"
      },
    ],
  },
  "app-development": {
    problemTitle: "Key Challenges Product & Engineering Teams Face",
    problemSubtitle:
      "Big app ideas get stuck in endless planning, technical debt, and slow launches.",
    problems: [
      { icon: Smartphone, text: "MVPs take too long to ship" },
      { icon: Layers, text: "Architecture doesn’t scale as users grow" },
      { icon: Rocket, text: "No clear roadmap from MVP to v2/v3" },
      {
        icon: BarChart3,
        text: "Limited visibility into product usage and performance",
      },
    ],
    solutionKicker: "Product-Driven Builds",
    solutionTitle: "Our Solution",
    solutionSubtitle:
      "End-to-end product development from MVP to scalable SaaS platforms and dashboards.",
    solutions: [
      {
        icon: Rocket,
        title: "MVP First",
        desc: "Lean builds focused on validating core value with real users in weeks, not years.",
      },
      {
        icon: Layers,
        title: "Scalable Architecture",
        desc: "Cloud-native, modular stack ready for new features, teams, and traffic spikes.",
      },
      {
        icon: Layout,
        title: "Admin & Analytics",
        desc: "Internal dashboards and controls so your team can operate and iterate quickly.",
      },
      {
        icon: Smartphone,
        title: "Cross-Platform Experience",
        desc: "Consistent UX across web and mobile with performance baked in.",
      },
    ],
  },
  "digital-marketing": {
    problemTitle: "Key Challenges Performance Marketing Teams Face",
    problemSubtitle:
      "Ads run, spend burns, but tracking, funnels, and creative rarely work together.",
    problems: [
      { icon: Megaphone, text: "Ad spend without clear ROI" },
      { icon: Search, text: "Wrong audiences and weak intent traffic" },
      { icon: RefreshCw, text: "No structured testing or retargeting system" },
      {
        icon: BarChart3,
        text: "Scattered reporting across platforms and channels",
      },
    ],
    solutionKicker: "Full-Funnel Performance",
    solutionTitle: "Our Solution",
    solutionSubtitle:
      "Performance marketing that aligns creative, targeting, funnels, and data into one growth engine.",
    solutions: [
      {
        icon: Megaphone,
        title: "Channel Strategy",
        desc: "Meta, Google, and LinkedIn campaigns built around your offer and ICP.",
      },
      {
        icon: Target,
        title: "Funnel Alignment",
        desc: "Landing pages, CRM, and follow-up connected so every click has a path to revenue.",
      },
      {
        icon: RefreshCw,
        title: "Creative & Testing Loops",
        desc: "Structured creative testing, retargeting, and scaling for winning audiences.",
      },
      {
        icon: BarChart3,
        title: "Transparent Reporting",
        desc: "Dashboards and summaries that show what’s working, what’s not, and where to scale.",
      },
    ],
  },
};

interface RevopsCoreProblemSolutionProps {
  service: CoreServiceKey;
}

export function RevopsCoreProblemSolution({
  service,
}: RevopsCoreProblemSolutionProps) {
  const config = CORE_CONFIG[service];
  const solutionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: solutionRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const solutions = config.solutions;
  const stepCount = solutions.length;

  const stepThresholds = useMemo(() => {
    const startBase = 0.05;
    const range = 0.85;
    return solutions.map((_, i) => {
      const start = startBase + (i * range) / Math.max(1, stepCount);
      const end = start + 0.14;
      return [start, end] as [number, number];
    });
  }, [solutions, stepCount]);

  const svg = useMemo(() => {
    const width = 1200;
    const topPad = 80;
    const gap = 230;
    const height = topPad * 2 + (stepCount - 1) * gap;
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

  return (
    <section className="py-20 sm:py-24 bg-linear-to-b from-background to-primary/5">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Problem */}
        <div className="mb-20">
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-primary">
              Problem
            </span>
          </div>
          <div className="mt-6 text-center">
            <h2 className="text-3xl sm:text-6xl font-bold">
              <span
                className="text-foreground"
                dangerouslySetInnerHTML={{ __html: config.problemTitle }}
              />
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              {config.problemSubtitle}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {config.problems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative flex h-full flex-col items-center justify-center overflow-hidden rounded-2xl bg-white shadow-[0_18px_45px_rgba(15,23,42,0.09)] border border-slate-100 px-5 py-6 text-left"
                >
                  {/* Top-to-bottom primary fill on hover */}
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-0 bg-primary transition-all duration-500 ease-out group-hover:h-full"
                    aria-hidden="true"
                  />

                  <div
                    className="relative mb-4 inline-flex items-center justify-center rounded-xl bg-rose-50 p-4 transition-colors duration-500 group-hover:bg-white/15"
                    style={{ transform: "rotate(6deg)" }}
                  >
                    <Icon className="h-16 w-16 size-16 text-rose-500 transition-colors duration-500 group-hover:text-white" />
                  </div>
                  <p className="relative text-center text-sm text-slate-900 font-medium leading-relaxed transition-colors duration-500 group-hover:text-white">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Solution */}
        <section ref={solutionRef} className="pt-6 border-t border-slate-200">
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/60 bg-emerald-50 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-emerald-600">
              Answer
            </span>
          </div>
          <div className="mt-6 text-center">
            <h2 className="text-3xl sm:text-7xl font-bold">
              <span className="text-slate-900">{config.solutionTitle}</span>{" "}
              <span className="text-primary">{config.solutionKicker}</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              {config.solutionSubtitle}
            </p>
          </div>

          {/* Mobile: stacked cards */}
          <div className="mt-10 grid grid-cols-1 gap-6 lg:hidden">
            {solutions.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
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
                      <h3 className="mt-1 text-lg font-semibold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Desktop: scroll-reveal curved SVG timeline */}
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
              >
                <path
                  d={svg.d}
                  stroke="rgba(148,163,184,0.45)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <motion.path
                  d={svg.d}
                  stroke="url(#revopsSolutionGrad)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  style={{ pathLength }}
                />

                {svg.pts.map((p, i) => (
                  <motion.circle
                    key={`node-${i}`}
                    cx={p.x}
                    cy={p.y}
                    r="18"
                    fill="white"
                    stroke="rgba(2,132,199,0.6)"
                    strokeWidth="3"
                    style={{
                      opacity: useTransform(
                        scrollYProgress,
                        [stepThresholds[i][0], stepThresholds[i][1]],
                        [0.35, 1],
                      ),
                      scale: useTransform(
                        scrollYProgress,
                        [stepThresholds[i][0], stepThresholds[i][1]],
                        [0.82, 1],
                      ),
                    }}
                  />
                ))}

                {svg.pts.map((p, i) => (
                  <motion.text
                    key={`num-${i}`}
                    x={p.x}
                    y={p.y + 1}
                    textAnchor="middle"
                    dominantBaseline="central"
                    className="text-[13px] font-bold"
                    fill="rgba(2,132,199,0.95)"
                    style={{
                      opacity: useTransform(
                        scrollYProgress,
                        [stepThresholds[i][0], stepThresholds[i][1]],
                        [0, 1],
                      ),
                    }}
                  >
                    {i + 1}
                  </motion.text>
                ))}

                <defs>
                  <linearGradient
                    id="revopsSolutionGrad"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="rgba(2,132,199,0.95)" />
                    <stop offset="50%" stopColor="rgba(124,58,237,0.85)" />
                    <stop offset="100%" stopColor="rgba(16,185,129,0.9)" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="relative">
                {solutions.map((item, idx) => {
                  const Icon = item.icon;
                  const isLeft = idx % 2 === 0;
                  return (
                    <div
                      key={item.title}
                      className="relative flex min-h-[230px] items-center"
                    >
                      <motion.div
                        className={`w-[46%] ${isLeft ? "mr-auto" : "ml-auto"}`}
                        style={{
                          opacity: useTransform(
                            scrollYProgress,
                            [stepThresholds[idx][0], stepThresholds[idx][1]],
                            [0, 1],
                          ),
                          x: useTransform(
                            scrollYProgress,
                            [stepThresholds[idx][0], stepThresholds[idx][1]],
                            [isLeft ? -24 : 24, 0],
                          ),
                          y: useTransform(
                            scrollYProgress,
                            [stepThresholds[idx][0], stepThresholds[idx][1]],
                            [16, 0],
                          ),
                        }}
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
                              <h3 className="mt-1 text-2xl font-semibold text-slate-900">
                                {item.title}
                              </h3>
                              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                {item.desc}
                              </p>

                              <div className="mt-4 space-y-2">
                                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                                  <motion.div
                                    className="h-full rounded-full bg-linear-to-r from-primary to-sky-500"
                                    initial={{ width: "0%" }}
                                    whileInView={{ width: `${72 + idx * 6}%` }}
                                    viewport={{ once: true, amount: 0.6 }}
                                    transition={{ duration: 0.8, delay: 0.1 }}
                                  />
                                </div>
                                <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-primary font-medium">
                                    Optimized
                                  </span>
                                  <span>Live performance tracking</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
