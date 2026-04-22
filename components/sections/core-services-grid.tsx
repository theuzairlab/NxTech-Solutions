"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import type {
  CoreServiceId,
  CoreServiceMeta,
} from "@/lib/core-services-home-data";
import {
  CORE_ICON_MAP,
  CORE_SERVICES,
  type CoreServiceIconKey,
} from "@/lib/core-services-home-data";

function getIcon(iconKey: CoreServiceIconKey) {
  return CORE_ICON_MAP[iconKey];
}

export function CoreServicesGrid({
  activeServiceId,
  onActiveServiceIdChange,
  paused,
}: {
  activeServiceId: CoreServiceId;
  onActiveServiceIdChange: (id: CoreServiceId) => void;
  paused?: boolean;
}) {
  const [isHoverPaused, setIsHoverPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Track window size to disable performance-heavy auto-rotating tabs on Mobile GPUs
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setIsMobile(window.innerWidth < 768);
      handleResize(); // Set initial value
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const shouldPause = !!paused || isHoverPaused || isMobile;

  const activeIndex = useMemo(
    () =>
      Math.max(
        0,
        CORE_SERVICES.findIndex((s) => s.id === activeServiceId),
      ),
    [activeServiceId],
  );

  const prev =
    CORE_SERVICES[
      (activeIndex - 1 + CORE_SERVICES.length) % CORE_SERVICES.length
    ];
  const next = CORE_SERVICES[(activeIndex + 1) % CORE_SERVICES.length];
  const active = CORE_SERVICES[activeIndex];

  useEffect(() => {
    if (shouldPause) return;
    const t = setInterval(() => {
      const idx = CORE_SERVICES.findIndex((s) => s.id === activeServiceId);
      const nextId = CORE_SERVICES[(idx + 1) % CORE_SERVICES.length].id;
      onActiveServiceIdChange(nextId);
    }, 5500);
    return () => clearInterval(t);
  }, [shouldPause, activeServiceId, onActiveServiceIdChange]);

  return (
    <section
      className="relative overflow-hidden pb-12"
      onMouseEnter={() => setIsHoverPaused(true)}
      onMouseLeave={() => setIsHoverPaused(false)}
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-44 top-[-20%] h-[520px] w-[520px] rounded-full bg-primary/18 blur-3xl" />
        <div className="absolute right-[-18%] top-[-10%] h-[620px] w-[620px] rounded-full bg-primary/18 blur-3xl" />
        <div className="absolute bottom-[-35%] left-[20%] h-[700px] w-[700px] rounded-full bg-primary/18 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20">
        {/* Header */}
        <motion.div
          className="pb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold leading-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            Our Core <span className="text-primary">Services</span>
          </h2>
          <p className="max-w-2xl text-base text-muted-foreground/80 sm:text-lg">
            Automation. Development. Performance Marketing.
          </p>
        </motion.div>

        {/* Mobile: single active card */}
        <div className="md:hidden">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.25)]"
          >
            <div className="absolute inset-0">
              <Image
                src={active.image}
                alt={active.title}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(8,9,20,0.72) 0%, rgba(8,9,20,0.48) 55%, rgba(8,9,20,0.35) 100%)",
                }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/55 via-transparent to-transparent" />
            </div>

            <div className="relative z-10 flex flex-col gap-4 p-5">
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => onActiveServiceIdChange(prev.id)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-black/20 text-white/90 backdrop-blur transition hover:bg-black/45"
                  aria-label="Previous"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => onActiveServiceIdChange(next.id)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-black/20 text-white/90 backdrop-blur transition hover:bg-black/45"
                  aria-label="Next"
                >
                  →
                </button>
              </div>

              <h3 className="text-3xl font-bold leading-tight tracking-tight text-white">
                {active.title}
              </h3>
              <div
                className="h-0.5 w-full max-w-sm opacity-85 rounded-full"
                style={{ background: active.accentColor }}
              />
              <p className="text-sm leading-relaxed text-white/80">
                {active.description}
              </p>

              <Link
                href={active.href}
                className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
              >
                Explore Service <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Desktop: accordion panels */}
        <div className="hidden md:flex h-[520px] w-full gap-3 lg:h-[560px]">
          {CORE_SERVICES.map((service: CoreServiceMeta) => {
            const isActive = service.id === activeServiceId;
            const Icon = getIcon(service.iconKey);

            return (
              <motion.div
                key={service.id}
                layout
                onClick={() => onActiveServiceIdChange(service.id)}
                animate={{ flex: isActive ? 5 : 1 }}
                transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                className="relative cursor-pointer overflow-hidden rounded-[28px] border border-white/10 bg-white/5"
                style={{ minWidth: 0 }}
              >
                {/* Background image */}
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

                  {/* Overlay */}
                  <div
                    className="absolute inset-0 transition-opacity duration-700"
                    style={{
                      background: isActive
                        ? "linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.18) 100%)"
                        : "linear-gradient(to bottom, rgba(8,9,20,0.68) 0%, rgba(8,9,20,0.55) 100%)",
                    }}
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />

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
                      className="absolute inset-0 flex flex-col items-center justify-start pt-20"
                      style={{ textAlign: "start", justifyContent: "start" }}
                    >
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
                            onActiveServiceIdChange(prev.id);
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
                            onActiveServiceIdChange(next.id);
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
                            Explore Service
                            <ArrowRight
                              size={36}
                              className="bg-white relative left-2 text-primary/80 rounded-full size-10 transition-transform group-hover:translate-x-0.5"
                            />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile pill selectors */}
        <div className="mt-5 grid grid-cols-2 items-center justify-center gap-2 md:hidden">
          {CORE_SERVICES.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => onActiveServiceIdChange(s.id)}
              className={`rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition ${
                s.id === activeServiceId
                  ? "bg-primary text-primary-foreground"
                  : "border border-primary/15 bg-primary/5 text-primary/75 hover:bg-primary/10"
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
