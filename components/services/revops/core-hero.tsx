"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ParticlesBackground } from "@/components/ui/particles-background";

interface StatItem {
  value: string;
  label: string;
}

interface RevopsHeroProps {
  eyebrow: string;
  titleLines: string[];
  highlightLine: string;
  description: string;
  primaryCtaLabel: string;
  onPrimaryClick: () => void;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  stats?: StatItem[];
  rightImageSrc: string;
  rightImageAlt: string;
}

export function RevopsHero({
  eyebrow,
  titleLines,
  highlightLine,
  description,
  primaryCtaLabel,
  onPrimaryClick,
  secondaryCtaLabel,
  secondaryCtaHref,
  stats,
  rightImageSrc,
  rightImageAlt,
}: RevopsHeroProps) {
  return (
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
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm border border-white/20 mb-5">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-xs font-semibold tracking-[0.18em] text-foreground/90 uppercase">
                {eyebrow}
              </span>
            </div>

            <h1 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl xl:text-6xl">
              {titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
              <span className="mt-2 block text-primary">{highlightLine}</span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-foreground/80 sm:text-base md:text-lg">
              {description}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <Button
                size="lg"
                className="group cursor-pointer px-10 py-6 rounded-full text-base sm:text-lg bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={onPrimaryClick}
              >
                {primaryCtaLabel}
                <ArrowRight className="relative left-2 h-10 w-10 size-10 bg-white text-primary rounded-full p-1 transition-transform group-hover:translate-x-0.5" />
              </Button>

              {secondaryCtaLabel && secondaryCtaHref && (
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="cursor-pointer rounded-full border-2 border-primary bg-transparent px-10 py-6 text-base hover:text-primary sm:text-lg hover:border-primary/40 hover:bg-primary/5 text-foreground"
                >
                  <Link href={secondaryCtaHref} className="flex items-center text-foreground">
                    {secondaryCtaLabel}
                    <ArrowRight className="relative left-3 h-10 w-10 size-10 bg-primary text-foreground rounded-full p-1 -rotate-45" />
                  </Link>
                </Button>
              )}
            </motion.div>

            {stats && stats.length > 0 && (
              <div className="mt-10 grid max-w-2xl grid-cols-3 gap-6">
                {stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-2xl sm:text-3xl font-bold text-primary">
                      {s.value}
                    </p>
                    <p className="text-xs sm:text-sm text-foreground/70">{s.label}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Right: Service specific image card */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.18 }}
            className="mt-6 flex w-full justify-center lg:mt-0 lg:w-auto lg:justify-end"
          >
            <motion.div
              className="relative mx-auto w-full max-w-[340px] sm:max-w-[380px] md:max-w-[400px] lg:max-w-[420px] rounded-3xl border border-foreground/15 bg-background/30 p-3 backdrop-blur-2xl shadow-2xl"
              style={{ maxWidth: '480px' }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="relative aspect-square w-full rounded-2xl">
                <img
                  src={rightImageSrc}
                  alt={rightImageAlt}
                  className="object-cover w-full h-full rounded-2xl"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

