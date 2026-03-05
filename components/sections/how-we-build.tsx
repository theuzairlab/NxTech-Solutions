"use client";

import { Search, Layout, Wrench, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const STEPS = [
  {
    step: 1,
    title: "Strategy & Audit",
    description: "We audit your growth gaps and identify opportunities",
    icon: Search,
  },
  {
    step: 2,
    title: "System Architecture",
    description: "We architect a scalable system tailored to your business",
    icon: Layout,
  },
  {
    step: 3,
    title: "Build & Automate",
    description: "We build and automate your revenue systems",
    icon: Wrench,
  },
  {
    step: 4,
    title: "Optimize & Scale",
    description: "We optimize for performance and scale with your growth",
    icon: TrendingUp,
  },
] as const;

export function HowWeBuild() {
  return (
    <section className="relative py-24 overflow-hidden -mt-32 pt-40 rounded-b-[50px] sm:rounded-b-[100px] md:rounded-b-[150px] bg-linear-to-b from-[#f2fbff] via-white to-[#dff3ff] z-10">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[420px] h-[420px] bg-primary/12 blur-3xl" />
        <div className="absolute bottom-[-180px] right-0 w-[520px] h-[520px] bg-primary/14 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,transparent_40%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur">
            <span className="text-xs font-semibold tracking-[0.25em] text-primary">
              PROCESS
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            <span className="bg-linear-to-r from-foreground via-primary to-primary bg-clip-text text-transparent">
              How We Build Growth Systems
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground/90 max-w-2xl mx-auto">
            Every decision is data-driven. Every system is built for revenue.
          </p>
        </div>

        {/* Horizontal 4-step Timeline */}
        <div className="relative">
          {/* Connector line - visible on desktop */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary/20 hidden md:block -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
            {STEPS.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="relative flex flex-col items-center text-center group"
                >
                  {/* Step circle */}
                  <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center mb-4 group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300">
                    <Icon className="h-8 w-8 sm:h-9 sm:w-9 text-primary" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">
                      Step {item.step}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button
            asChild
            size="lg"
            className="bg-linear-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg shadow-primary/25"
          >
            <Link href="/get-quote" className="flex items-center">
              Get Free Growth Plan
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
