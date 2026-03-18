"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight, Bot, Globe, Smartphone, BarChart3 } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

/* ───────────────────────── service data ─────────────────────── */

const SERVICES = [
  {
    id: "ai-automation-marketing",
    tabLabel: "AI AUTOMATION",
    title: "AI Marketing & Business Automation",
    description:
      "Always-on systems that capture, qualify, and follow up with leads 24/7—so your team focuses on closing high-intent prospects.",
    cta: "Explore Service",
    href: "/services/ai-automation-marketing",
    image: "/hero1.jpg",
    icon: Bot,
    accentColor: "#7c3aed",
    buttonBg: "bg-primary",
  },
  {
    id: "web-development",
    tabLabel: "WEB DEVELOPMENT",
    title: "Web Development",
    description:
      "High-performance websites engineered to turn visitors into leads—fast, conversion-first, and integrated with your CRM and analytics stack.",
    cta: "Explore Service",
    href: "/services/web-development",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=900&fit=crop&q=80",
    icon: Globe,
    accentColor: "#6366f1",
    buttonBg: "bg-indigo-500",
  },
  {
    id: "app-development",
    tabLabel: "APP DEVELOPMENT",
    title: "App Development",
    description:
      "Design and build robust mobile + web apps with product-led UX, scalable architecture, and revenue-ready integrations from day one.",
    cta: "Explore Service",
    href: "/services/app-development",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1600&h=900&fit=crop&q=80",
    icon: Smartphone,
    accentColor: "#8b5cf6",
    buttonBg: "bg-violet-500",
  },
  {
    id: "digital-marketing",
    tabLabel: "DIGITAL MARKETING",
    title: "Digital Marketing",
    description:
      "Scale demand with paid media, retargeting, and funnel optimization tuned by daily data—so ad spend stays efficient and outcomes predictable.",
    cta: "Explore Service",
    href: "/services/digital-marketing",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop",
    icon: BarChart3,
    accentColor: "#f59e0b",
    buttonBg: "bg-amber-500",
  },
] as const;

type ServiceId = (typeof SERVICES)[number]["id"];

/* ─────────────────────── component ─────────────────────────── */

export function CoreServicesGrid() {
  const [activeId, setActiveId] = useState<ServiceId>("web-development");
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate
  useEffect(() => {
    if (isPaused) return;
    const idx = SERVICES.findIndex((s) => s.id === activeId);
    const t = setInterval(() => {
      setActiveId(SERVICES[(idx + 1) % SERVICES.length].id);
    }, 5500);
    return () => clearInterval(t);
  }, [isPaused, activeId]);

  return (
    <section className="relative overflow-hidden">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-44 top-[-20%] h-[520px] w-[520px] rounded-full bg-primary/18 blur-3xl" />
        <div className="absolute right-[-18%] top-[-10%] h-[620px] w-[620px] rounded-full bg-primary/18 blur-3xl" />
        <div className="absolute bottom-[-35%] left-[20%] h-[700px] w-[700px] rounded-full bg-primary/18 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="pb-6 "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold leading-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            Our Core <br />
            <div className="flex items-center gap-2">
              <div className="h-px w-24 bg-primary/20 shrink-0 mt-2 sm:w-40 lg:w-64" />
              <span className="text-primary">Services</span>
            </div>
          </h2>
          <p className="max-w-2xl text-base text-muted-foreground/80 sm:text-lg">
            Automation. Development. Performance Marketing.
          </p>
        </motion.div>

        {/* Accordion panels */}
        <div
          className="flex h-[520px] w-full gap-3 sm:h-[560px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {SERVICES.map((service) => {
            const isActive = service.id === activeId;
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                layout
                onClick={() => setActiveId(service.id)}
                animate={{ flex: isActive ? 5 : 1 }}
                transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                className="relative cursor-pointer overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.4)]"
                style={{ minWidth: 0 }}
              >
                {/* Background image — always rendered, fades in when active */}
                <div className="absolute inset-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-opacity duration-700"
                    style={{ opacity: isActive ? 1 : 0.45 }}
                    sizes="(max-width: 1280px) 100vw, 1280px"
                    priority={isActive}
                  />
                  {/* Overlay: stronger on inactive */}
                  <div
                    className="absolute inset-0 transition-opacity duration-700"
                    style={{
                      background: isActive
                        ? "linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.18) 100%)"
                        : "linear-gradient(to bottom, rgba(8,9,20,0.68) 0%, rgba(8,9,20,0.55) 100%)",
                    }}
                  />
                  {/* Bottom fade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  {/* Accent colour tint at bottom on inactive */}
                  {!isActive && (
                    <div
                      className="absolute bottom-0 left-0 right-0 h-1/3"
                      style={{
                        background: `linear-gradient(to top, ${service.accentColor}22, transparent)`,
                      }}
                    />
                  )}
                </div>

                {/* ── INACTIVE STATE: vertical label ── */}
                <AnimatePresence>
                  {!isActive && (
                    <motion.div
                      key="label"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 flex flex-col items-center justify-end pb-10"
                    >
                      {/* Vertical text */}
                      <span
                        className="text-2xl font-bold uppercase tracking-[0.28em] text-white/85 whitespace-nowrap"
                        style={{
                          writingMode: "vertical-rl",
                          transform: "rotate(180deg)",
                        }}
                      >
                        {service.tabLabel}
                      </span>

                      <div
                        className="mb-auto mt-8 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/30"
                        style={{ color: service.accentColor }}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* ── ACTIVE STATE: full content ── */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{
                        duration: 0.45,
                        ease: "easeOut",
                        delay: 0.18,
                      }}
                      className="absolute inset-0 z-20 flex flex-col justify-between p-8 sm:p-10"
                    >
                      {/* Top: nav arrows */}
                      <div className="flex items-center justify-between">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            const idx = SERVICES.findIndex(
                              (s) => s.id === activeId,
                            );
                            setActiveId(
                              SERVICES[
                                (idx - 1 + SERVICES.length) % SERVICES.length
                              ].id,
                            );
                          }}
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-black/10 text-white/85 backdrop-blur transition hover:bg-black/55"
                          aria-label="Previous"
                        >
                          ←
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            const idx = SERVICES.findIndex(
                              (s) => s.id === activeId,
                            );
                            setActiveId(
                              SERVICES[(idx + 1) % SERVICES.length].id,
                            );
                          }}
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-black/10 text-white/85 backdrop-blur transition hover:bg-black/55"
                          aria-label="Next"
                        >
                          →
                        </button>
                      </div>

                      {/* Bottom: text content */}
                      <div className="flex flex-col gap-4 justify-center">
                        <h3 className="text-7xl font-bold leading-none tracking-tight text-white">
                          {service.title}
                        </h3>
                        {/* Thin horizontal rule like Geniusee */}
                        <div
                          className="mb-2 h-0.5 w-full max-w-lg opacity-80 rounded-full"
                          style={{ background: service.accentColor }}
                        />

                        <p className="mt-4 text-sm leading-relaxed text-white/75 sm:text-base">
                          {service.description}
                        </p>

                        <div className="mt-7">
                          <Link
                            href={service.href}
                            className="inline-flex items-center justify-center group cursor-pointer px-4 py-2 rounded-full text-base sm:text-lg bg-primary hover:bg-primary/90 text-primary-foreground"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {service.cta}
                            <ArrowRight
                              size={36}
                              className="bg-white relative left-2 text-primary/80 rounded-full size-10 transition-transform group-hover:translate-x-0.5"
                            />
                          </Link>
                        </div>

                        {/* Trust badges */}
                        {/* <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 ">
                          {[
                            "Clutch ★★★★",
                            "ISO 9001:2015",
                            "ISO 27001:2013",
                            "Forbes",
                            "Tech Council",
                          ].map((t) => (
                            <span
                              key={t}
                              className="text-[11px] font-semibold uppercase tracking-wide"
                            >
                              {t}
                            </span>
                          ))}
                        </div> */}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile dot/pill selectors */}
        <div className="mt-5 flex items-center justify-center gap-2 md:hidden">
          {SERVICES.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setActiveId(s.id)}
              className={`rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition ${
                s.id === activeId
                  ? "bg-white text-slate-900"
                  : "border border-white/15 bg-white/5 text-white/75 hover:bg-white/10"
              }`}
            >
              {s.tabLabel}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
