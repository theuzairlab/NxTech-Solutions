"use client";

import {
  TrafficCone,
  FileText,
  Database,
  Phone,
  Mail,
  Tag,
  Calendar,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const LEFT_STEPS = [
  { step: 1, label: "Traffic", desc: "Inbound visitors & ads", icon: TrafficCone },
  { step: 2, label: "Landing Page", desc: "Capture with forms", icon: FileText },
  { step: 3, label: "CRM", desc: "Centralized lead data", icon: Database },
  { step: 4, label: "AI Call", desc: "Instant qualification", icon: Phone },
];

const RIGHT_STEPS = [
  { step: 5, label: "Follow-up Automation", desc: "Email & SMS sequences", icon: Mail },
  { step: 6, label: "Hot Lead Tag", desc: "Score & prioritize", icon: Tag },
  { step: 7, label: "Calendar Booking", desc: "Self-serve scheduling", icon: Calendar },
  { step: 8, label: "Sales Close", desc: "Booked appointment → deal", icon: CheckCircle },
];

export function AIWorkflowVisual() {
  return (
    <section className="relative py-24 overflow-hidden -mt-32 pt-40 rounded-b-[50px] sm:rounded-b-[100px] md:rounded-b-[150px] bg-linear-to-b from-[#eef4ff] via-white to-[#d5e6ff] z-9">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-10 w-[520px] h-[520px] bg-primary/15 blur-3xl" />
        <div className="absolute bottom-[-200px] right-[-120px] w-[620px] h-[620px] bg-primary/12 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur">
            <span className="text-xs font-semibold tracking-[0.25em] text-primary">
              AI PIPELINE
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            <span className="bg-linear-to-r from-foreground via-primary to-primary bg-clip-text text-transparent">
              From Traffic to Revenue
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground/90 max-w-2xl mx-auto">
            See how we turn cold traffic into closed deals
          </p>
        </div>

        {/* Two-column grid with visual flow */}
        <div className="max-w-5xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-10 md:gap-6 lg:gap-16">
            {/* Left column - Acquisition */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-px flex-1 bg-primary/30 rounded-full" />
                <span className="text-xs font-bold uppercase tracking-widest text-primary/80">
                  Acquisition
                </span>
                <div className="h-px flex-1 bg-primary/30 rounded-full" />
              </div>
              {LEFT_STEPS.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.step}
                    className="group relative flex items-start gap-4 p-5 rounded-2xl bg-white/90 border-2 border-border/60 shadow-sm hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="flex flex-col items-center shrink-0">
                      <span className="text-[10px] font-bold text-primary/70 mb-1">
                        {String(item.step).padStart(2, "0")}
                      </span>
                      <div className="w-12 h-12 rounded-xl bg-linear-to-br from-primary/30 to-primary/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground mb-1">
                        {item.label}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.desc}
                      </p>
                      {item.step < 4 && (
                        <div className="mt-2 flex items-center gap-1 text-primary/60">
                          <div className="h-0.5 w-8 bg-primary/40 rounded-full" />
                          <span className="text-[10px] font-medium">↓</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right column - Conversion */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-px flex-1 bg-primary/30 rounded-full" />
                <span className="text-xs font-bold uppercase tracking-widest text-primary/80">
                  Conversion
                </span>
                <div className="h-px flex-1 bg-primary/30 rounded-full" />
              </div>
              {RIGHT_STEPS.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.step}
                    className="group relative flex items-start gap-4 p-5 rounded-2xl bg-white/90 border-2 border-border/60 shadow-sm hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="flex flex-col items-center shrink-0">
                      <span className="text-[10px] font-bold text-primary/70 mb-1">
                        {String(item.step).padStart(2, "0")}
                      </span>
                      <div className="w-12 h-12 rounded-xl bg-linear-to-br from-primary/30 to-primary/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground mb-1">
                        {item.label}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.desc}
                      </p>
                      {item.step < 8 && (
                        <div className="mt-2 flex items-center gap-1 text-primary/60">
                          <div className="h-0.5 w-8 bg-primary/40 rounded-full" />
                          <span className="text-[10px] font-medium">↓</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Center connector - visible on desktop, between columns */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center pointer-events-none z-10">
            <div className="w-12 h-12 rounded-full bg-white border-2 border-primary/40 shadow-lg flex items-center justify-center">
              <ArrowRight className="h-5 w-5 text-primary" />
            </div>
            <span className="text-[9px] font-semibold text-primary/70 mt-1 uppercase tracking-wider">
              Flow
            </span>
          </div>
        </div>

        {/* Visual flow bar - bottom */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 overflow-x-auto py-3">
            <span className="text-[10px] font-semibold text-muted-foreground shrink-0">Pipeline:</span>
            <div className="flex items-center gap-2 flex-wrap justify-center">
              {[...LEFT_STEPS, ...RIGHT_STEPS].map((s, i) => (
                <span key={s.label} className="flex items-center gap-1.5">
                  <span className="px-2 py-1 rounded-md bg-primary/10 text-[10px] font-medium text-primary">
                    {s.step}
                  </span>
                  {i < 7 && (
                    <span className="text-primary/40 text-xs hidden sm:inline">→</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
