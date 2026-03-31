"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CalendlyModal } from "@/components/ui/calendly-modal";
import { ParticlesBackground } from "@/components/ui/particles-background";
import { WavyBackground } from "@/components/ui/wavy-background";
import { SUB_SERVICE_DATA, type SubServiceData } from "./sub-service-data";

interface SubServicePageProps {
  slug: string;
}

export function SubServicePage({ slug }: SubServicePageProps) {
  const [showCalendly, setShowCalendly] = useState(false);
  const data = SUB_SERVICE_DATA[slug];

  if (!data) return null;

  return (
    <div className="w-full">
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParticlesBackground />
        </div>

        <div className="container relative z-10 mx-auto px-4 pb-16 pt-24 sm:px-6 sm:pt-28 sm:pb-20 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between"
          >
            {/* Left: Copy */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="flex-1 max-w-xl lg:max-w-2xl"
            >
              {/* Breadcrumb */}
              <div className="mb-5 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                <Link href="/services" className="hover:text-primary transition-colors">
                  Services
                </Link>
                <ChevronRight className="h-3.5 w-3.5" />
                <Link
                  href={`/services/${data.parentSlug}`}
                  className="hover:text-primary transition-colors"
                >
                  {data.parentLabel}
                </Link>
                <ChevronRight className="h-3.5 w-3.5" />
                <span className="text-foreground/70 truncate max-w-[160px]">
                  {data.highlightLine}
                </span>
              </div>

              {/* Eyebrow */}
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  {data.eyebrow}
                </span>
              </div>

              <h1 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl xl:text-6xl">
                <span className="block">{data.title}</span>
                <span className="mt-2 block text-primary">{data.highlightLine}</span>
              </h1>

              <p className="mt-5 max-w-xl text-sm leading-relaxed text-foreground/80 sm:text-base md:text-lg">
                {data.description}
              </p>

              {/* Stats */}
              <div className="mt-8 flex gap-6">
                {data.stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-2xl sm:text-3xl font-bold text-primary">{stat.value}</p>
                    <p className="text-xs sm:text-sm text-foreground/70">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
                className="mt-8 flex flex-col gap-4 sm:flex-row"
              >
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="group cursor-pointer px-10 py-6 rounded-full text-base sm:text-lg bg-primary hover:bg-primary/90 text-primary-foreground"
                // onClick={() => setShowCalendly(true)}
                >
                  <Link href="/get-quote" className="flex items-center justify-between">
                    Book a Free Call
                    <ArrowRight className="relative left-2 h-10 w-10 size-10 bg-white text-primary rounded-full p-1 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="cursor-pointer rounded-full border-2 border-primary/40 bg-white/80 hover:bg-white/90 hover:text-primary px-10 py-6 text-base sm:text-lg hover:border-primary"
                >
                  <Link href={`/services/${data.parentSlug}`} className="flex items-center text-primary">
                    Back to {data.parentLabel}
                    <ArrowRight className="relative left-2 h-10 w-10 size-10 bg-primary/10 text-primary rounded-full p-1 -rotate-180" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right: Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.18 }}
              className="mt-6 flex w-full justify-center lg:mt-0 lg:w-auto lg:justify-end"
            >
              <motion.div
                className="relative mx-auto w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[440px] rounded-3xl border border-foreground/10 bg-background/30 p-3 backdrop-blur-2xl shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden">
                  <img
                    src={data.heroImageSrc}
                    alt={data.heroImageAlt}
                    className="object-cover w-full h-full rounded-2xl"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent rounded-2xl" />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Features Grid ─────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-linear-to-b from-background to-primary/5">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-6">
              What&apos;s Included
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-foreground">
              Everything You Need,{" "}
              <span className="text-primary">Nothing You Don&apos;t</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              A complete, done-for-you service covering every component to get you real results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.08)] hover:shadow-[0_12px_40px_rgba(15,23,42,0.14)] transition-shadow duration-300"
                >
                  {/* Top accent */}
                  <div className="absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-primary/60 via-sky-400/60 to-emerald-400/60" />

                  <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-primary/10 p-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Outcomes ──────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-linear-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            {/* Left: Heading */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/60 bg-emerald-50 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-emerald-600 mb-6">
                Outcomes
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-foreground">
                What You&apos;ll{" "}
                <span className="text-primary">Actually Get</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground">
                Real, measurable results — not just deliverables. Here&apos;s what our clients experience after working with us.
              </p>

              <Button
                size="lg"
                className="mt-8 group cursor-pointer px-10 py-6 rounded-full text-base bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => setShowCalendly(true)}
              >
                Start Getting Results
                <ArrowRight className="relative left-2 h-10 w-10 size-10 bg-white text-primary rounded-full p-1 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </motion.div>

            {/* Right: Outcome list */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              {data.outcomes.map((outcome, idx) => (
                <motion.div
                  key={outcome}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"
                >
                  <span className="shrink-0 mt-0.5 flex items-center justify-center w-7 h-7 rounded-full bg-emerald-100">
                    <Check className="h-4 w-4 text-emerald-600" />
                  </span>
                  <p className="text-sm sm:text-base font-medium text-foreground">
                    {outcome}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────────────── */}
      <section className="relative z-1 overflow-hidden py-20 bg-accent-foreground">
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <WavyBackground
            containerClassName="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#00c2c7] via-[#00b1bb] to-[#009aa8]"
            className="mx-auto max-w-6xl px-4 py-16 text-center"
            backgroundFill="#022c32"
            waveOpacity={0.35}
            speed="slow"
          >
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              {data.ctaHeading}
            </h2>
            <p className="mb-8 text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
              Book a free 30-minute strategy call. We&apos;ll audit your current setup and show you exactly where we can help.
            </p>
            <Button
              size="lg"
              className="group rounded-full bg-white px-8 py-6 text-lg text-primary shadow-lg shadow-white/20 hover:bg-white/90"
              onClick={() => setShowCalendly(true)}
            >
              {data.ctaButton}
              <ArrowRight
                size={40}
                className="size-10 relative left-2 rounded-full bg-primary p-1 text-white transition-transform group-hover:translate-x-1"
              />
            </Button>
          </WavyBackground>
        </div>

        <CalendlyModal isOpen={showCalendly} onClose={() => setShowCalendly(false)} />
      </section>
    </div>
  );
}
