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
import { RevopsHero } from "./core-hero";
import { RevopsCoreProblemSolution } from "./core-problem-solution";
import { RevopsCoreHowItWorks } from "./core-how-it-works";
import { CoreProcessSlider } from "./core-process-slider";
import { CoreServiceCTA } from "./core-cta";

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
      <RevopsHero
        eyebrow="Conversion-First"
        titleLines={["Websites Built to Convert,", "Not Just Look Good"]}
        highlightLine="High-Performance Web Experiences"
        description="High-performance websites engineered to turn visitors into leads and revenue."
        primaryCtaLabel="Get Free Growth Plan"
        onPrimaryClick={() => setShowCalendly(true)}
        secondaryCtaLabel="Explore All Services"
        secondaryCtaHref="/services"
        stats={[
          { value: "4–6", label: "Weeks to Launch" },
          { value: "100+", label: "Core Web Vitals" },
          { value: "CRM", label: "Ready" },
        ]}
        rightImageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=675&fit=crop"
        rightImageAlt="Web development dashboard"
      />

      <RevopsCoreProblemSolution service="web-development" />

      <RevopsCoreHowItWorks service="web-development" />

      <CoreProcessSlider service="web-development" />


      {/* Inquiry Form */}
      <section className="py-20 sm:py-24 bg-linear-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="bg-linear-to-r from-foreground to-primary bg-clip-text text-transparent">
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

      <CoreServiceCTA service="web-development" />
    </div>
  );
}
