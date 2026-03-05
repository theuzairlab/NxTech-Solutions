"use client";

import {
  Building2,
  Stethoscope,
  Cloud,
  Target,
  ShoppingCart,
  Store,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// RevOps fixed 6 industries
const INDUSTRIES = [
  { name: "Real Estate", icon: Building2 },
  { name: "Dental", icon: Stethoscope },
  { name: "SaaS", icon: Cloud },
  { name: "Coaches", icon: Target },
  { name: "E-commerce", icon: ShoppingCart },
  { name: "Local Businesses", icon: Store },
] as const satisfies Array<{ name: string; icon: LucideIcon }>;

export function IndustriesServeRevOps() {
  return (
    <section className="relative py-24 overflow-hidden -mt-32 pt-40 rounded-b-[50px] sm:rounded-b-[100px] md:rounded-b-[150px] bg-linear-to-b from-[#e9f9f4] via-white to-[#c9f1e6] z-7">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/4 w-[520px] h-[520px] bg-primary/12 blur-3xl" />
        <div className="absolute bottom-[-180px] right-[-80px] w-[620px] h-[620px] bg-primary/14 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur">
            <span className="text-xs font-semibold tracking-[0.25em] text-primary">
              INDUSTRIES
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            <span className="bg-linear-to-r from-foreground via-primary to-primary bg-clip-text text-transparent">
              Industries We Serve
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground/90 max-w-2xl mx-auto">
            Proven expertise across diverse sectors with tailored solutions
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-4xl mx-auto">
          {INDUSTRIES.map((industry) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.name}
                className="group flex flex-col items-center justify-center p-6 rounded-xl bg-card/80 border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-3 group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <span className="text-sm font-semibold text-foreground text-center">
                  {industry.name}
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/services#industries"
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Explore All Industries →
          </a>
        </div>
      </div>
    </section>
  );
}
