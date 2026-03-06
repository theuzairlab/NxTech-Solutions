"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Zap, Calendar } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";

const CalendlyModal = dynamic(
  () => import("@/components/ui/calendly-modal").then((m) => ({ default: m.CalendlyModal })),
  { ssr: false }
);

const TRUST_INDUSTRIES = [
  "Real Estate",
  "Dental",
  "SaaS",
  "E‑commerce",
  "Coaches",
  "Local Business",
];

export function HeroSection() {
  const [showCalendlyModal, setShowCalendlyModal] = useState(false);

  return (
    <section className="relative min-h-screen lg:min-h-[calc(100vh-8rem)] flex items-center overflow-hidden rounded-b-[50px] sm:rounded-b-[100px] md:rounded-b-[150px] shadow-sm z-12">
      {/* Background Image - next/image for LCP optimization (WebP/AVIF, priority) */}
      <div className="absolute inset-0 z-0 min-h-screen">
        <Image
          src="/abc.jpg"
          alt=""
          fill
          priority
          fetchPriority="high"
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      {/* Gradient Overlay for readability */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/[0.07] via-background/50 to-primary/5 z-1" />

      {/* Subtle Grid Pattern - CSS only */}
      <div
        className="absolute inset-0 z-[2] opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 206, 209, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 206, 209, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Soft gradient orbs - no JS animation, use CSS only */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl z-[2]" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl z-[2]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pt-28 sm:pb-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-6rem)] sm:min-h-[calc(100vh-8rem)]">
          {/* Left: Copy - Refined typography */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-[1.15] tracking-tight text-foreground">
              We Build AI-Powered Growth Systems
              <span className="block mt-2 text-primary">
                That Turn Traffic Into Revenue
              </span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-xl leading-[1.7]">
              {process.env.NEXT_PUBLIC_SITE_NAME} helps service-based businesses
              automate lead generation, qualify prospects using AI, and convert
              them into booked appointments and paying clients.
            </p>
            <p className="text-sm sm:text-base text-foreground/80 mb-8 font-medium">
              Not just marketing. Not just development.{" "}
              <span className="text-primary">We build complete revenue systems.</span>
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="group text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
                onClick={() => setShowCalendlyModal(true)}
              >
                Book Strategy Call
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-0.5 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 border-2 border-primary/30  hover:border-primary/50"
              >
                <Link href="/services" className="flex items-center">
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right: Dashboard-style UI - Pure HTML/CSS, no canvas, no JS */}
          <div className="relative hidden lg:block h-[420px] xl:h-[480px]">
            <div className="absolute inset-0 rounded-2xl border border-border/60 bg-white/95 shadow-xl shadow-black/5 overflow-hidden">
              {/* Dashboard header bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/40 bg-muted/30">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                </div>
                <span className="text-[10px] font-medium text-muted-foreground ml-2">
                  Growth Pipeline Dashboard
                </span>
              </div>

              {/* Dashboard content */}
              <div className="p-4 space-y-4">
                {/* Stat cards row */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-lg bg-primary/10 border border-primary/20 p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="h-3.5 w-3.5 text-primary" />
                      <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wide">Leads</span>
                    </div>
                    <span className="text-lg font-bold text-foreground">2,847</span>
                    <p className="text-[10px] text-primary font-medium mt-0.5">+24% this week</p>
                  </div>
                  <div className="rounded-lg bg-primary/10 border border-primary/20 p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Users className="h-3.5 w-3.5 text-primary" />
                      <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wide">Booked</span>
                    </div>
                    <span className="text-lg font-bold text-foreground">312</span>
                    <p className="text-[10px] text-primary font-medium mt-0.5">Appointments</p>
                  </div>
                  <div className="rounded-lg bg-primary/10 border border-primary/20 p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Zap className="h-3.5 w-3.5 text-primary" />
                      <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wide">Response</span>
                    </div>
                    <span className="text-lg font-bold text-foreground">&lt;30s</span>
                    <p className="text-[10px] text-primary font-medium mt-0.5">Avg. response</p>
                  </div>
                </div>

                {/* Pipeline funnel table */}
                <div className="rounded-lg border border-border/50 overflow-hidden">
                  <div className="bg-muted/50 px-3 py-2 border-b border-border/50">
                    <span className="text-[10px] font-semibold text-muted-foreground uppercase">Pipeline Stage</span>
                  </div>
                  <div className="divide-y divide-border/30">
                    {[
                      { stage: "Traffic → Landing", value: "98%", fill: "w-[98%]" },
                      { stage: "CRM Capture", value: "94%", fill: "w-[94%]" },
                      { stage: "AI Qualification", value: "87%", fill: "w-[87%]" },
                      { stage: "Calendar Booked", value: "72%", fill: "w-[72%]" },
                    ].map((row) => (
                      <div key={row.stage} className="flex items-center justify-between px-3 py-2 text-[11px]">
                        <span className="text-foreground/90 font-medium">{row.stage}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-1.5 rounded-full bg-muted overflow-hidden">
                            <div className={`h-full rounded-full bg-primary/70 ${row.fill}`} />
                          </div>
                          <span className="text-primary font-semibold w-8">{row.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom status row */}
                <div className="flex items-center justify-between text-[10px] text-muted-foreground pt-1">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    AI automation active
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    Live
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile: Compact dashboard-style placeholder */}
          <div className="lg:hidden mt-8">
            <div className="rounded-2xl border border-border/60 bg-white/95 p-4 shadow-lg">
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-primary/10 p-3">
                  <span className="text-xs text-muted-foreground">Leads</span>
                  <p className="text-lg font-bold text-foreground">2,847</p>
                </div>
                <div className="rounded-lg bg-primary/10 p-3">
                  <span className="text-xs text-muted-foreground">Booked</span>
                  <p className="text-lg font-bold text-foreground">312</p>
                </div>
              </div>
              <p className="text-[10px] text-muted-foreground mt-3 text-center">Growth Pipeline Dashboard</p>
            </div>
          </div>
        </div>

        {/* Trust Bar - Centered below both columns, card view */}
        {/* <div className="flex justify-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-3 px-5 sm:px-8 py-4 rounded-2xl border border-border/60 bg-card/80 backdrop-blur-sm shadow-lg shadow-black/5 w-full sm:w-auto max-w-2xl">
            <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase shrink-0">
              Trusted across industries
            </span>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {TRUST_INDUSTRIES.map((industry) => (
                <span
                  key={industry}
                  className="inline-flex items-center px-4 py-2 rounded-xl border border-border/50 bg-background/80 text-sm font-medium text-foreground/90 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-colors cursor-default"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div> */}
      </div>

      <CalendlyModal
        isOpen={showCalendlyModal}
        onClose={() => setShowCalendlyModal(false)}
      />
    </section>
  );
}
