"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import type { CoreServiceKey } from "./core-service-flow";
import { FLOW_CONFIG } from "./core-service-flow";

interface CoreProcessSliderProps {
  service: CoreServiceKey;
}

export function CoreProcessSlider({ service }: CoreProcessSliderProps) {
  const cfg = FLOW_CONFIG[service];
  const steps = cfg.onboardingSteps;
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goNext = () => setIndex((i) => (i + 1) % steps.length);
  const goPrev = () => setIndex((i) => (i - 1 + steps.length) % steps.length);

  useEffect(() => {
    if (isPaused || steps.length === 0) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % steps.length);
    }, 3000);
    return () => clearInterval(id);
  }, [isPaused, steps.length]);

  const imageMap: Record<CoreServiceKey, string[]> = {
    "ai-automation-marketing": [
      "https://i.pinimg.com/736x/50/de/ed/50deedb8ab38c9b866f1318d89545579.jpg",
      "https://i.pinimg.com/736x/e9/e5/ac/e9e5acfb08bd734b06b83f1138375ad4.jpg",
      "https://i.pinimg.com/736x/84/cf/a3/84cfa3cef26963983f010b61bfba28c8.jpg",
      "https://i.pinimg.com/1200x/c4/70/63/c470637314591623f102b96cb2b83c1a.jpg"
    ],
    "web-development": [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&h=600&fit=crop",
    ],
    "app-development": [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&h=600&fit=crop",
    ],
    "digital-marketing": [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=600&fit=crop",
    ],
  };

  const activeImages = imageMap[service] || imageMap["ai-automation-marketing"];
  const activeImage = activeImages[index % activeImages.length];

  const bulletMap: Record<CoreServiceKey, Record<string, string[]>> = {
    "ai-automation-marketing": {
      "Discovery Call": [
        "Align on funnel, volumes, and offer.",
        "Clarify sales motion and hand‑offs.",
      ],
      "Funnel Mapping": [
        "Diagram every touchpoint from opt‑in to booking.",
        "Decide which events should trigger AI actions.",
      ],
      "CRM Setup": [
        "Connect pipelines, stages, and custom fields.",
        "Sync lead sources and owners correctly.",
      ],
      "AI Calling Setup": [
        "Load scripts, FAQs, and objection handling.",
        "Configure call cadence and fallback rules.",
      ],
      "Workflow Testing": [
        "Dry‑run calls and sequences end‑to‑end.",
        "Verify scoring, tags, and hand‑offs.",
      ],
      Launch: [
        "Switch traffic into the new AI‑assisted funnel.",
        "Monitor first week results closely.",
      ],
      Optimization: [
        "Tweak prompts and routing from real calls.",
        "Ship weekly iterations based on data.",
      ],
    },
    "web-development": {
      "Kickoff & Scope": [
        "Define pages, audiences, and KPIs.",
        "Lock in tech stack and integrations.",
      ],
      Wireframes: [
        "Plan layouts for desktop and mobile.",
        "Place CTAs where they convert best.",
      ],
      "Design System": [
        "Build reusable components and states.",
        "Align colors, typography, and spacing.",
      ],
      "Build & Integrate": [
        "Implement responsive layouts and logic.",
        "Wire analytics, CRM, and forms.",
      ],
      "QA & Launch": [
        "Cross‑browser and device testing.",
        "Set up performance and error monitoring.",
      ],
    },
    "app-development": {
      "Discovery & Scope": [
        "Prioritize MVP features by impact.",
        "Clarify constraints and success metrics.",
      ],
      "Design Sprint": [
        "Prototype key journeys and flows.",
        "Validate UX with stakeholders.",
      ],
      "MVP Build": [
        "Ship core features behind feature flags.",
        "Keep architecture ready for v2 and v3.",
      ],
      "Beta Launch": [
        "Invite early adopters into a closed beta.",
        "Capture structured feedback and usage.",
      ],
      "Scale‑up Plan": [
        "Turn learnings into roadmap items.",
        "Plan infra and team scale‑up.",
      ],
    },
    "digital-marketing": {
      "Audit & Goals": [
        "Review current campaigns and spend.",
        "Define CAC, ROAS, and volume targets.",
      ],
      "Offer & Funnel": [
        "Tighten messaging and page structure.",
        "Match offers to each traffic temperature.",
      ],
      "Campaign Build": [
        "Create channel‑specific structures.",
        "Set up audiences, budgets, and tracking.",
      ],
      "Launch & Learn": [
        "Run initial tests with guardrails.",
        "Collect early performance insights.",
      ],
      "Optimize & Scale": [
        "Scale winners and cut poor performers.",
        "Refresh creatives on a set cadence.",
      ],
    },
  };

  const titleMap: Record<CoreServiceKey, string> = {
    "ai-automation-marketing": "Onboarding Process",
    "web-development": "Development Process",
    "app-development": "Product Build Process",
    "digital-marketing": "Launch Process",
  };

  return (
    <section className="py-20 sm:py-24 bg-linear-to-b from-background to-primary/5">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            <span className="bg-linear-to-r from-foreground to-primary bg-clip-text text-transparent">
              {titleMap[service]}
            </span>
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {cfg.onboardingTimelineLabel}
          </p>
        </div>

        <div
          className="relative rounded-3xl border border-border bg-card/95 px-4 py-6 sm:px-6 sm:py-8 shadow-[0_18px_55px_rgba(15,23,42,0.18)]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Decorative progress bar */}
          <div className="mb-6 flex items-center justify-between gap-4">
            <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
              <motion.div
                className="h-full bg-linear-to-r from-primary via-sky-400 to-emerald-400 rounded-full"
                initial={false}
                animate={{ width: `${((index + 1) / steps.length) * 100}%` }}
                transition={{ type: "spring", stiffness: 210, damping: 26 }}
              />
            </div>
            <p className="text-xs font-medium text-muted-foreground whitespace-nowrap">
              Step {index + 1} of {steps.length}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-[1.2fr_minmax(0,0.9fr)] md:items-center">
            {/* Slide card */}
            <div className="relative min-h-[160px]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={steps[index].title}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="rounded-2xl border border-border bg-background/80 px-5 py-5 sm:px-6 sm:py-6"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary mb-1">
                    Step {index + 1}
                  </p>
                  <h3 className="text-5xl font-bold text-foreground mb-2">
                    {steps[index].title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed mb-3">
                    {steps[index].desc}
                  </p>
                  <ul className="space-y-1.5 text-base text-muted-foreground">
                    {(bulletMap[service][steps[index].title] || []).map((b) => (
                      <li key={b} className="flex items-center gap-1.5">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Side image + mini timeline */}
            <div className="flex flex-col justify-between gap-4">
              <div className="relative overflow-hidden rounded-2xl border border-primary/15 bg-slate-950/90 shadow-inner shadow-black/40 h-80">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={activeImage}
                    initial={{ opacity: 0.3, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={activeImage}
                      alt={steps[index].title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-tr from-slate-950/0 via-slate-900/0 to-transparent" />
                  </motion.div>
                </AnimatePresence>

                <div className="relative z-10 h-full px-4 py-4 flex flex-col justify-between">
                  <div>
                    <p className="text-lg font-semibold uppercase tracking-[0.18em] text-black/80 mb-2">
                      Timeline Snapshot
                    </p>
                    <p className="text-base text-black/80 mb-3">
                      Every step is fully managed — from planning to post‑launch optimization.
                    </p>
                  </div>
                  <div className="flex items-end gap-1">
                    {steps.map((_, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 rounded-full bg-white/10"
                        initial={false}
                        animate={{
                          height: i === index ? 32 : 16,
                          backgroundColor:
                            i === index ? "rgba(59,130,246,0.9)" : "rgba(148,163,184,0.7)",
                        }}
                        transition={{ type: "spring", stiffness: 210, damping: 26 }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3">
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={goPrev}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/80 text-foreground shadow-sm hover:bg-background"
                    aria-label="Previous step"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/80 text-foreground shadow-sm hover:bg-background"
                    aria-label="Next step"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex gap-1.5">
                  {steps.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setIndex(i)}
                      className="h-2.5 w-2.5 rounded-full bg-muted"
                    >
                      <motion.span
                        className="block h-full w-full rounded-full"
                        initial={false}
                        animate={{
                          scale: i === index ? 1.4 : 1,
                          backgroundColor:
                            i === index ? "hsl(var(--primary))" : "rgba(148,163,184,0.8)",
                        }}
                        transition={{ duration: 0.2 }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

