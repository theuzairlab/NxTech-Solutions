"use client";

import { useState } from "react";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

const CASE_STUDIES = [
  {
    industry: "Real Estate",
    leadsIncrease: "180%",
    revenueGrowth: "142%",
    automationSaved: "15 hrs/week",
  },
  {
    industry: "Dental",
    leadsIncrease: "210%",
    revenueGrowth: "95%",
    automationSaved: "12 hrs/week",
  },
  {
    industry: "SaaS",
    leadsIncrease: "165%",
    revenueGrowth: "118%",
    automationSaved: "20 hrs/week",
  },
];

const before = [
  {
    image: "/images/em.avif",
    title: "Untracked leads",
    rotate: -6,
  },
  {
    image: "/images/engage.avif",
    title: "Poor AD Performance",
    rotate: 6,
  },
  {
    image: "/images/tasks.avif",
    title: "Delayed tasks",
    rotate: -6,
  },
  {
    image: "/images/tracking.avif",
    title: "Manual reporting ",
    rotate: 6,
  },
];
const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "NxTech Nova";

export function CaseStudiesResults() {
  const [isAfter, setIsAfter] = useState(false);

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#f5f5ff] via-white to-[#e6e6ff] py-16 pb-24 sm:py-24 sm:pb-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/3 h-[420px] w-[420px] rounded-full bg-primary/12 blur-3xl" />
        <div className="absolute bottom-[-200px] right-[-120px] h-[520px] w-[520px] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left: Copy + CTA */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Results
                </span>
              </div>
              <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-7xl">
                <span className="bg-linear-to-r from-foreground via-primary to-primary bg-clip-text text-transparent">
                  Case Studies
                </span>
              </h2>
              <p className="max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
                Our clients don&apos;t just get leads. They get qualified
                opportunities with clear before and after results.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-primary px-8 text-white shadow-lg hover:bg-primary/90"
                >
                  <Link
                    href="/services#portfolio-section"
                    className="inline-flex items-center gap-2"
                  >
                    See How We Did It
                    <ArrowRight className="h-8 w-8 relative left-3 bg-white text-primary size-10 rounded-full p-1" style={{ transform: 'rotate(-45deg)' }}/>
                  </Link>
                </Button>
              </div>
              {/* Compact results summary */}
              <div className="flex flex-wrap gap-6 pt-2 text-sm text-muted-foreground">
                {CASE_STUDIES.slice(0, 3).map((cs) => (
                  <div key={cs.industry} className="flex items-baseline gap-2">
                    <span className="font-semibold text-foreground">
                      {cs.industry}
                    </span>
                    <span className="text-primary">
                      {cs.leadsIncrease} leads
                    </span>
                    <span>{cs.revenueGrowth} revenue</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Dashboard sample (Before / After) */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="rounded-2xl border border-border bg-card p-4 shadow-2xl backdrop-blur sm:p-5">
                {/* Dashboard header */}
                <div className="mb-4 flex items-center justify-between">
                  <span
                    className={`text-lg font-bold transition-colors ${
                      isAfter ? "text-primary" : "text-slate-400"
                    }`}
                  >
                    {isAfter ? `After ${siteName}` : `Before ${siteName}`}
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsAfter((p) => !p)}
                    className="relative h-7 w-12 rounded-full shadow-sm border-2 border-primary bg-slate-700 transition-colors"
                    aria-label="Toggle before / after"
                    style={{
                      backgroundColor: isAfter
                        ? "var(--primary)"
                        : "var(--slate-700)",
                    }}
                  >
                    <motion.div
                      className="absolute h-5 w-5 rounded-full shadow"
                      initial={false}
                      style={{
                        top: "2px",
                        backgroundColor: isAfter ? "white" : "var(--primary)",
                      }}
                      animate={{ left: isAfter ? "20px" : "4px" }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  </button>
                </div>

                <div className="">
                  <AnimatePresence mode="wait">
                    {isAfter ? (
                      <div className="">
                        <div className="flex flex-row gap-2 pb-4 items-center justify-center">
                          <Image
                            src="/images/onTrack.avif"
                            alt="On Track"
                            width={100}
                            height={90}
                            className="shadow-lg rounded-lg w-full"
                          />
                          <Image
                            src="/images/highROI.webp"
                            alt="hight roi"
                            width={200}
                            height={200}
                            className="shadow-lg rounded-lg"
                          />
                        </div>
                        <div className="flex flex-row gap-6 pb-4 items-center justify-center">
                          <Image
                            src="/images/impEngage.webp"
                            alt="On Track"
                            width={100}
                            height={90}
                            className="shadow-lg rounded-lg w-full"
                          />

                          <div className="relative overflow-hidden rounded-md border border-white/10 ">
                            <motion.div
                              className="flex w-max items-center gap-3 p-3"
                              animate={{ x: ["0%", "-50%"] }}
                              transition={{
                                duration: 18,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                            >
                              {[
                                { src: "/images/em.avif", alt: "Email" },
                                {
                                  src: "/images/engage.avif",
                                  alt: "Engagement",
                                },
                                { src: "/images/tasks.avif", alt: "Tasks" },
                                {
                                  src: "/images/tracking.avif",
                                  alt: "Tracking",
                                },
                                {
                                  src: "/images/em.avif",
                                  alt: "Email duplicate",
                                },
                                {
                                  src: "/images/engage.avif",
                                  alt: "Engagement duplicate",
                                },
                                {
                                  src: "/images/tasks.avif",
                                  alt: "Tasks duplicate",
                                },
                                {
                                  src: "/images/tracking.avif",
                                  alt: "Tracking duplicate",
                                },
                              ].map((logo, idx) => (
                                <div
                                  key={`${logo.alt}-${idx}`}
                                  className="h-10 w-16 overflow-hidden"
                                >
                                  <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    width={120}
                                    height={80}
                                    className="h-full w-full object-cover"
                                  />
                                </div>
                              ))}
                            </motion.div>
                          </div>
                        </div>
                        <div className="flex flex-row gap-2 pb-4 items-center justify-center">
                          <Image
                            src="/images/lead.avif"
                            alt="On Track"
                            width={100}
                            height={90}
                            className="shadow-lg rounded-lg w-full"
                          />
                          <div className="flex flex-row gap-2">
                            <Youtube className="w-7 h-7 bg-primary text-white size-10 rounded-md p-1" style={{ transform: 'rotate(6deg)' }}/>
                            <Facebook className="w-7 h-7 bg-primary text-white size-10 rounded-md p-1" style={{ transform: 'rotate(-6deg)' }}/>
                            <Instagram className="w-7 h-7 bg-primary text-white size-10 rounded-md p-1" style={{ transform: 'rotate(6deg)' }}/>
                            <Linkedin className="w-7 h-7 bg-primary text-white size-10 rounded-md p-1" style={{ transform: 'rotate(-6deg)' }}/>
                            <Twitter className="w-7 h-7 bg-primary text-white size-10 rounded-md p-1" style={{ transform: 'rotate(6deg)' }}/>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="relative w-full flex justify-center p-4 bg-card overflow-hidden rounded-xl">
                        <div className="grid grid-cols-2 gap-6 items-center justify-center">
                          {/* Card 1: New Emails */}
                          {before.map(
                            (
                              item: {
                                image: string;
                                title: string;
                                rotate: number;
                              },
                              index: number,
                            ) => (
                              <motion.div
                                key={index}
                                className="flex flex-col items-center justify-center gap-2 -rotate-6"
                                animate={{
                                  rotate: [item.rotate, -2, item.rotate],
                                  y: [0, -6, 0],
                                }}
                                transition={{
                                  duration: 4,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                  delay: 0,
                                }}
                              >
                                <Image
                                  src={item.image}
                                  alt={item.title}
                                  width={230}
                                  height={200}
                                  className="shadow-lg rounded-lg"
                                />
                                <div className="flex flex-col items-center justify-center bg-primary/20 p-2 rounded-md">
                                  <p className="text-black text-sm font-semibold">
                                    {item.title}
                                  </p>
                                </div>
                              </motion.div>
                            ),
                          )}
                        </div>
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom bullets + CTA */}
        <motion.ul
          className="mt-12 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.05, delayChildren: 0.1 },
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
              className="flex items-center gap-2 rounded-full border border-primary/15 bg-white/80 px-4 py-2 shadow-sm"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <span className="text-primary">✔</span> {item}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
