"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
} from "lucide-react";
import { ServiceInquiryForm } from "@/components/sections/service-inquiry-form";
import { CalendlyModal } from "@/components/ui/calendly-modal";
import { useState } from "react";
import { RevopsHero } from "./core-hero";
import { RevopsCoreProblemSolution } from "./core-problem-solution";
import { RevopsCoreHowItWorks } from "./core-how-it-works";
import { CoreProcessSlider } from "./core-process-slider";
import { CoreServiceCTA } from "./core-cta";

export function AppDevelopmentPage() {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <div className="w-full">
      <RevopsHero
        eyebrow="App Development · Mobile & Web"
        titleLines={["Build With a Custom App Development", "Company That Launches Faster and Scales Smarter"]}
        highlightLine="From MVP Validation to Full-Scale Product Growth"
        description="Mobile and web products designed, built, and launched for growth, speed, and seamless UX—combining Custom App Development, Android App Development, iOS App Development, and Web Development in one delivery team."
        primaryCtaLabel="Get Free App Strategy Call"
        onPrimaryClick={() => setShowCalendly(true)}
        secondaryCtaLabel="Explore App Development"
        secondaryCtaHref="/services"
        stats={[
          { value: "8–16", label: "Weeks to Launch" },
          { value: "MVP", label: "Validation First" },
          { value: "Scalable", label: "Cloud Architecture" },
        ]}
        rightImageSrc="https://i.pinimg.com/736x/2c/19/8a/2c198ae7548077a7a372107470b00bd5.jpg"
        rightImageAlt="App development workspace"
      />

      <RevopsCoreProblemSolution service="app-development" />

      <RevopsCoreHowItWorks service="app-development" />

      {/* <CoreProcessSlider service="app-development" /> */}

      {/* Inquiry Form */}
      <section className="py-20 sm:py-24 bg-linear-to-b from-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="bg-linear-to-r from-foreground to-primary bg-clip-text text-transparent">
                  Get Your Free Consultation
                </span>
              </h2>
              <p className="text-muted-foreground">
                Tell us about your app idea and we&apos;ll send a technical roadmap.
              </p>
            </div>
            <div className="rounded-2xl bg-card border border-border p-6 sm:p-8 shadow-lg">
              <ServiceInquiryForm
                serviceName="App Development"
                serviceSlug="app-development"
              />
            </div>
          </div>
        </div>
      </section>

      <CoreServiceCTA service="app-development" />

      <CalendlyModal isOpen={showCalendly} onClose={() => setShowCalendly(false)} />
    </div>
  );
}
