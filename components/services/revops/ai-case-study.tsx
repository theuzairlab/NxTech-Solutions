"use client";

import { motion } from "motion/react";

export function AIAutomationCaseStudy() {
  return (
    <section className="py-20 sm:py-24 bg-linear-to-b from-primary/5 to-background">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            <span className="bg-linear-to-r from-foreground to-primary bg-clip-text text-transparent">
              Case Study
            </span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="overflow-hidden rounded-3xl border border-border bg-card/95 shadow-[0_22px_60px_rgba(15,23,42,0.18)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Before */}
            <div className="border-b border-border/80 bg-background/70 p-8 sm:p-10 md:border-b-0 md:border-r">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground mb-2">
                Before
              </p>
              <p className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
                Manual follow-ups
              </p>
              <p className="text-sm text-muted-foreground mb-4">~5 hrs/week</p>
              <span className="inline-flex rounded-full bg-rose-50 px-3 py-1 text-xs font-medium text-rose-600">
                Slow
              </span>
            </div>

            {/* After */}
            <div className="bg-primary/5 p-8 sm:p-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary mb-2">
                After
              </p>
              <p className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                Automated 24/7
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                180% more qualified leads
              </p>
              <span className="inline-flex rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary">
                +210% bookings
              </span>
            </div>
          </div>

          <div className="border-t border-border bg-card/80 px-6 py-5 text-center text-sm text-muted-foreground">
            Dental practice automated lead response and increased bookings 210%
            in 90 days using AI voice follow‑up and CRM workflows.
          </div>
        </motion.div>
      </div>
    </section>
  );
}

