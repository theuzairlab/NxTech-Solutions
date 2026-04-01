"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  X,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

import type {
  CoreServiceId,
  CoreSocialIconKey,
} from "@/lib/core-services-home-data";
import {
  CORE_SERVICES,
  CORE_SERVICES_HOME_CONTENT,
  CORE_SOCIAL_ICON_MAP,
} from "@/lib/core-services-home-data";

const CASE_STUDIES = [
  { industry: "Real Estate", leadsIncrease: "180%", revenueGrowth: "142%", automationSaved: "15 hrs/week" },
  { industry: "Dental", leadsIncrease: "210%", revenueGrowth: "95%", automationSaved: "12 hrs/week" },
  { industry: "SaaS", leadsIncrease: "165%", revenueGrowth: "118%", automationSaved: "20 hrs/week" },
];

const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "NxTech Nova";

export function CaseStudiesResults({ serviceId }: { serviceId?: CoreServiceId }) {
  const DEFAULT_SERVICE_ID: CoreServiceId = "ai-automation-marketing";
  const resolvedServiceId = serviceId ?? DEFAULT_SERVICE_ID;

  const content = CORE_SERVICES_HOME_CONTENT[resolvedServiceId].caseStudies;
  const service = CORE_SERVICES.find((s) => s.id === resolvedServiceId)!;
  const after = content.after;

  const [isAfter, setIsAfter] = useState(false);
  const [selectedBeforeImage, setSelectedBeforeImage] = useState<typeof content.before[0] | null>(null);

  const before = useMemo(() => content.before, [content.before]);

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
                  {content.headline}
                </span>{" "}
                <span className="text-foreground/80">{service.tabLabel}</span>
              </h2>

              <p className="max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
                {content.description}
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
                    <ArrowRight
                      className="h-8 w-8 relative left-3 bg-white text-primary size-10 rounded-full p-1"
                      style={{ transform: "rotate(-45deg)" }}
                    />
                  </Link>
                </Button>
              </div>

              {/* Compact results summary */}
              <div className="flex flex-wrap gap-6 pt-2 text-sm text-muted-foreground">
                {CASE_STUDIES.map((cs) => (
                  <div key={cs.industry} className="flex items-baseline gap-2">
                    <span className="font-semibold text-foreground">{cs.industry}</span>
                    <span className="text-primary">{cs.leadsIncrease} leads</span>
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
                      backgroundColor: isAfter ? "var(--primary)" : "var(--slate-700)",
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

                <div>
                  <AnimatePresence mode="wait">
                    {isAfter ? (
                      <div>
                        <div className="flex flex-row gap-2 pb-4 items-center justify-center">
                          <div className="relative h-32 sm:h-36 flex-1 overflow-hidden rounded-lg shadow-lg">
                            <Image
                              src={after.images.topLeft.src}
                              alt={after.images.topLeft.alt}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="relative h-32 sm:h-36 flex-1 overflow-hidden rounded-lg shadow-lg">
                            <Image
                              src={after.images.topRight.src}
                              alt={after.images.topRight.alt}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>

                        <div className="flex flex-row gap-6 pb-4 items-center justify-center">
                          <div className="relative h-32 sm:h-36 flex-1 overflow-hidden rounded-lg shadow-lg">
                            <Image
                              src={after.images.midLeft.src}
                              alt={after.images.midLeft.alt}
                              fill
                              className="object-cover"
                            />
                          </div>

                          <div className="relative overflow-hidden rounded-md border border-white/10">
                            <motion.div
                              className="flex w-max items-center gap-3 p-3"
                              animate={{ x: ["0%", "-50%"] }}
                              transition={{
                                duration: 18,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                            >
                              {after.sliderLogos.map((logo, idx) => (
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
                          <div className="relative h-32 sm:h-36 flex-1 overflow-hidden rounded-lg shadow-lg">
                            <Image
                              src={after.images.bottomLeft.src}
                              alt={after.images.bottomLeft.alt}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex flex-row gap-2">
                            {after.socialIcons.map((key: CoreSocialIconKey) => {
                              const Icon = CORE_SOCIAL_ICON_MAP[key];
                              const rotate =
                                key === "Facebook" || key === "Linkedin"
                                  ? -6
                                  : 6;
                              return (
                                <Icon
                                  key={key}
                                  className="w-7 h-7 bg-primary text-white size-10 rounded-md p-1"
                                  style={{
                                    transform: `rotate(${rotate}deg)`,
                                  }}
                                />
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="relative w-full flex justify-center p-4 bg-card overflow-hidden rounded-xl">
                        <div className="grid grid-cols-2 gap-6 items-center justify-center">
                          {before.map((item, index) => (
                            <motion.div
                              key={index}
                              onClick={() => setSelectedBeforeImage(item)}
                              className="group flex cursor-pointer flex-col items-center justify-center gap-2"
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
                              <div className="relative h-32 sm:h-36 w-40 sm:w-52 overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105">
                                <Image
                                  src={item.image}
                                  alt={item.title}
                                  fill
                                  className="object-cover"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/20">
                                  <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-black opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100">
                                    View Details
                                  </span>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-center bg-primary/20 p-2 rounded-md transition-colors duration-300 group-hover:bg-primary/30">
                                <p className="text-black text-sm font-semibold">
                                  {item.title}
                                </p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {selectedBeforeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
            onClick={() => setSelectedBeforeImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl"
            >
              <button
                onClick={() => setSelectedBeforeImage(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-black/20 p-2 text-white shadow backdrop-blur-md transition-colors hover:bg-black/40"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="relative h-48 w-full sm:h-64">
                <Image
                  src={selectedBeforeImage.image}
                  alt={selectedBeforeImage.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white">{selectedBeforeImage.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-red-500">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-red-600">
                        <X className="h-4 w-4" />
                      </span>
                      The Problem
                    </h4>
                    <p className="mt-2 text-sm text-slate-600 sm:text-base">
                      {selectedBeforeImage.problem}
                    </p>
                  </div>
                  <div className="h-px w-full bg-slate-100" />
                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-emerald-500">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                        <CheckCircle className="h-4 w-4" />
                      </span>
                      Our Solution
                    </h4>
                    <p className="mt-2 text-sm text-slate-600 sm:text-base">
                      {selectedBeforeImage.solution}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

