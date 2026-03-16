"use client";

import { motion } from "motion/react";
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
                  transition={{ duration: 1, delay: idx * 0.2 }}
                  animate={{
                    rotate: [6, -2, 6],
                    y: [0, -6, 0],
                  }}
                  className="flex h-full flex-col items-center justify-center rounded-2xl bg-white shadow-[0_18px_45px_rgba(15,23,42,0.09)] border border-slate-100 px-5 py-6 text-left"
                >
                  <div
                    className="mb-4 inline-flex items-center justify-center rounded-xl bg-rose-50 p-4"
                    style={{ transform: "rotate(6deg)" }}
                  >
                    <Icon className="h-16 w-16 size-16 text-rose-500" />
                  </div>
                  <p className="text-center text-sm text-slate-900 font-medium leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Solution */}
        <div className="pt-6 border-t border-slate-200">
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

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {config.solutions.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: 0.1 + idx * 0.05 }}
                  className="relative overflow-hidden rounded-2xl bg-white shadow-[0_18px_45px_rgba(15,23,42,0.09)] border border-slate-100 p-2"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-primary/60 via-sky-400/60 to-emerald-400/60" />
                  <div className="my-2 px-6">
                    <Icon className="h-10 w-10 size-10 p-2 text-primary bg-primary/10 rounded-xl" />
                  </div>
                  <h3 className="text-2xl px-6 font-semibold text-slate-900 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-base pb-4 px-6 text-slate-600">{item.desc}</p>
                  {item.image && (
                    <div className="relative aspect-square w-full rounded-2xl">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="object-cover w-full h-full rounded-2xl"
                      />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
