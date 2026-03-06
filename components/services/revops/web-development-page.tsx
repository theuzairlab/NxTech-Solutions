"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Gauge,
  BarChart3,
  Layout,
  Code,
} from "lucide-react";
import { ServiceInquiryForm } from "@/components/sections/service-inquiry-form";
import { CalendlyModal } from "@/components/ui/calendly-modal";
import { useState } from "react";

const PROCESS_STEPS = [
  { title: "Discovery", desc: "Goals, audiences & conversion metrics" },
  { title: "Design", desc: "UX flows & high-fidelity mockups" },
  { title: "Development", desc: "Coding, integrations & QA" },
  { title: "CRO Optimization", desc: "A/B tests & conversion tuning" },
  { title: "Launch", desc: "Deploy, analytics & handoff" },
];

const STRATEGY_ITEMS = [
  { label: "Conversion-focused UX", icon: Layout },
  { label: "Speed optimized", icon: Zap },
  { label: "CRM integrated", icon: BarChart3 },
  { label: "Analytics ready", icon: Gauge },
];

export function WebDevelopmentPage() {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden rounded-b-[80px] sm:rounded-b-[120px] md:rounded-b-[150px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop"
            alt="Web Development"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 z-[1]" />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 pb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Code className="h-4 w-4 text-primary" />
            <span className="text-xs font-semibold tracking-wider text-white/90 uppercase">
              Conversion-First
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            Websites Built to Convert, Not Just Look Good
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-8">
            High-performance websites engineered to turn visitors into leads and
            revenue.
          </p>
          <Button
            size="lg"
            className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/25"
            onClick={() => setShowCalendly(true)}
          >
            Get Free Growth Plan
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            {[
              { value: "4–6", label: "Weeks to Launch" },
              { value: "100+", label: "Core Web Vitals" },
              { value: "CRM", label: "Ready" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-primary">{s.value}</p>
                <p className="text-xs sm:text-sm text-white/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                  The Problem: Low Conversion
                </span>
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Most websites are built for aesthetics, not revenue. Visitors
                leave without taking action.
              </p>
              <div className="space-y-4">
                {["Visitors bounce without converting", "Slow load times hurt SEO", "No CRM or lead tracking"].map(
                  (item, i) => (
                    <div
                      key={item}
                      className="flex items-center gap-4 p-4 rounded-xl bg-card/80 border border-border"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-foreground font-medium">{item}</span>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
                alt="Web conversion"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-semibold text-sm">
                  We build for conversion from day one
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Strategy - Visual Cards */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Our Conversion Strategy
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {STRATEGY_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <p className="font-semibold">{item.label}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=600&fit=crop"
                alt="High-performance website"
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Development Process - Timeline */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Development Process
            </span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Timeline: 4–6 Weeks
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary/20 hidden sm:block" />
              <div className="space-y-6">
                {PROCESS_STEPS.map((step, i) => (
                  <div key={step.title} className="relative flex gap-6 sm:gap-8">
                    <div className="relative z-10 shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                      {i + 1}
                    </div>
                    <div className="flex-1 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors">
                      <h4 className="font-bold text-lg mb-1">{step.title}</h4>
                      <p className="text-muted-foreground text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                  Get Your Free Growth Plan
                </span>
              </h2>
              <p className="text-muted-foreground">
                Tell us about your goals and we&apos;ll send a customized website strategy.
              </p>
            </div>
            <div className="rounded-2xl bg-card border border-border p-6 sm:p-8 shadow-lg">
              <ServiceInquiryForm
                serviceName="Web Development"
                serviceSlug="web-development"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-primary via-primary/90 to-primary/80 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready for a Website That Converts?
          </h2>
          <Button
            size="lg"
            variant="secondary"
            className="text-lg px-8 py-6 shadow-xl"
            onClick={() => setShowCalendly(true)}
          >
            Book Strategy Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <CalendlyModal isOpen={showCalendly} onClose={() => setShowCalendly(false)} />
    </div>
  );
}
