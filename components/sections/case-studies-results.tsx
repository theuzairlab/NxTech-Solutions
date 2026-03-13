"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "motion/react";

// Placeholder data per RevOps - Case Studies Results Grid
const CASE_STUDIES = [
  { industry: "Real Estate", leadsIncrease: "180%", revenueGrowth: "142%", automationSaved: "15 hrs/week" },
  { industry: "Dental", leadsIncrease: "210%", revenueGrowth: "95%", automationSaved: "12 hrs/week" },
  { industry: "SaaS", leadsIncrease: "165%", revenueGrowth: "118%", automationSaved: "20 hrs/week" },
];

export function CaseStudiesResults() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#f5f5ff] via-white to-[#e6e6ff] py-16 pb-24 sm:py-24 sm:pb-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/3 h-[420px] w-[420px] rounded-full bg-primary/12 blur-3xl" />
        <div className="absolute bottom-[-200px] right-[-120px] h-[520px] w-[520px] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 space-y-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur">
            <span className="text-xs font-semibold tracking-[0.25em] text-primary">
              RESULTS
            </span>
          </div>
          <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
            <span className="bg-linear-to-r from-foreground via-primary to-primary bg-clip-text text-transparent">
              Case Studies
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground/90 sm:text-xl">
            Our clients don&apos;t just get leads. They get qualified opportunities.
          </p>
        </motion.div>

        {/* Results Grid - 3 columns per RevOps */}
        <motion.div
          className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-primary/10 bg-white/80 p-4 shadow-[0_18px_45px_rgba(15,23,42,0.12)] backdrop-blur"
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="pointer-events-none absolute inset-x-8 top-0 h-24 rounded-b-[40px] " />

          <div className="relative overflow-x-auto">
            <motion.table
              className="mx-auto w-full max-w-4xl border-collapse text-sm sm:text-base"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: 0.15, duration: 0.5 }}
            >
              <thead>
                <tr className="border-b-2 border-primary/20">
                  <th className="py-4 px-4 text-left font-semibold text-foreground sm:px-6">Industry</th>
                  <th className="py-4 px-4 text-center font-semibold text-foreground sm:px-6">Leads Increase</th>
                  <th className="py-4 px-4 text-center font-semibold text-foreground sm:px-6">Revenue Growth</th>
                  <th className="py-4 px-4 text-center font-semibold text-foreground sm:px-6">Automation Time Saved</th>
                </tr>
              </thead>
              <tbody>
                {CASE_STUDIES.map((cs, index) => (
                  <motion.tr
                    key={cs.industry}
                    className="border-b border-border/50"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 + index * 0.08 }}
                  >
                    <td className="py-4 px-4 font-medium text-foreground sm:px-6">{cs.industry}</td>
                    <td className="py-4 px-4 text-center font-semibold text-primary sm:px-6">
                      <span>{cs.leadsIncrease}</span>
                    </td>
                    <td className="py-4 px-4 text-center font-semibold text-primary sm:px-6">
                      <span>{cs.revenueGrowth}</span>
                    </td>
                    <td className="py-4 px-4 text-center text-muted-foreground sm:px-6">
                      {cs.automationSaved}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </motion.table>
          </div>
        </motion.div>

        {/* Results bullets from RevOps */}
        <motion.ul
          className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.06, delayChildren: 0.15 },
            },
          }}
        >
          {[
            "Increased booking rates",
            "Faster response times",
            "Higher close rates",
            "Lower cost per acquisition",
            "Automated follow-ups 24/7",
          ].map((item) => (
            <motion.li
              key={item}
              className="flex items-center gap-2 rounded-full border border-primary/15 bg-white/70 px-4 py-2 shadow-sm backdrop-blur"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <span className="text-primary">✔</span> {item}
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
        >
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-primary/30 text-primary hover:border-primary/80"
          >
            <Link href="/services#portfolio-section" className="flex items-center">
              See How We Did It
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
