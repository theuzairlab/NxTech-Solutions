"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Megaphone,
  BarChart3,
  Target,
  RefreshCw,
  TrendingUp,
  Search,
} from "lucide-react";
import { ServiceInquiryForm } from "@/components/sections/service-inquiry-form";
import { CalendlyModal } from "@/components/ui/calendly-modal";
import { useState } from "react";
import { RevopsHero } from "./core-hero";
import { RevopsCoreProblemSolution } from "./core-problem-solution";
import { RevopsCoreHowItWorks } from "./core-how-it-works";
import { RevopsCoreServiceFlow } from "./core-service-flow";
import { CoreProcessSlider } from "./core-process-slider";
import { CoreServiceCTA } from "./core-cta";

const PROCESS_STEPS = [
  { title: "Market Research", desc: "Audience, competitors & positioning" },
  { title: "Offer Positioning", desc: "Landing pages & conversion copy" },
  { title: "Funnel Setup", desc: "Landing → CRM → Follow-up" },
  { title: "Ad Testing", desc: "Creative & audience tests" },
  { title: "Scaling Strategy", desc: "Scale what works, cut what doesn't" },
];

const APPROACH_ITEMS = [
  {
    title: "Meta Ads",
    desc: "Facebook & Instagram campaigns that convert",
    icon: Megaphone,
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
  },
  {
    title: "Google PPC",
    desc: "Search & Display for intent-driven traffic",
    icon: Search,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    title: "LinkedIn Ads",
    desc: "B2B targeting & thought leadership",
    icon: Target,
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop",
  },
  {
    title: "Retargeting Systems",
    desc: "Win back visitors who didn't convert",
    icon: RefreshCw,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
];

export function DigitalMarketingPage() {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <div className="w-full">
      <RevopsHero
        eyebrow="Performance Marketing"
        titleLines={["Performance Marketing That Delivers", "Measurable ROI"]}
        highlightLine="Paid Growth With Clear Numbers"
        description="Paid advertising and funnel optimization designed to generate measurable revenue growth."
        primaryCtaLabel="Get Free Growth Plan"
        onPrimaryClick={() => setShowCalendly(true)}
        secondaryCtaLabel="Explore All Services"
        secondaryCtaHref="/services"
        stats={[
          { value: "7–14", label: "Days to Launch" },
          { value: "ROI", label: "Driven" },
          { value: "Data", label: "Transparent" },
        ]}
        rightImageSrc="https://i.pinimg.com/736x/d5/bf/cf/d5bfcfbe3a81ae52264f4e64f705a7e9.jpg"
        rightImageAlt="Digital marketing analytics dashboard"
      />

      <RevopsCoreProblemSolution service="digital-marketing" />

      <RevopsCoreHowItWorks service="digital-marketing" />

      {/* <CoreProcessSlider service="digital-marketing" /> */}


      {/* Inquiry Form */}
      <section className="py-20 sm:py-24 bg-linear-to-b from-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="bg-linear-to-r from-foreground to-primary bg-clip-text text-transparent">
                  Get Your Free Growth Plan
                </span>
              </h2>
              <p className="text-muted-foreground">
                Tell us about your goals and we&apos;ll send a customized marketing strategy.
              </p>
            </div>
            <div className="rounded-2xl bg-card border border-border p-6 sm:p-8 shadow-lg">
              <ServiceInquiryForm
                serviceName="Digital Marketing"
                serviceSlug="digital-marketing"
              />
            </div>
          </div>
        </div>
      </section>

      <CoreServiceCTA service="digital-marketing" />

      <CalendlyModal isOpen={showCalendly} onClose={() => setShowCalendly(false)} />
    </div>
  );
}
