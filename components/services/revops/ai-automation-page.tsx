"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Phone, Database, Target, Calendar, Bell, BarChart3 } from "lucide-react";
import { ServiceInquiryForm } from "@/components/sections/service-inquiry-form";
import { CalendlyModal } from "@/components/ui/calendly-modal";
import { useState } from "react";
import { RevopsHero } from "./core-hero";
import { RevopsCoreProblemSolution } from "./core-problem-solution";
import { RevopsCoreHowItWorks } from "./core-how-it-works";
import { AIAutomationLeadIdentification } from "./ai-lead-identification";
import { CoreProcessSlider } from "./core-process-slider";
import { CoreServiceCTA } from "./core-cta";

const HOW_IT_WORKS = [
  { step: 1, title: "Lead Captured", icon: Database },
  { step: 2, title: "Instant AI Call", icon: Phone },
  { step: 3, title: "Smart Qualification", icon: Target },
  { step: 4, title: "Lead Scoring", icon: BarChart3 },
  { step: 5, title: "Calendar Booking", icon: Calendar },
  { step: 6, title: "Sales Notification", icon: Bell },
];

const ONBOARDING_STEPS = [
  { title: "Discovery Call", desc: "Understand your funnel & goals" },
  { title: "Funnel Mapping", desc: "Map lead flow end-to-end" },
  { title: "CRM Setup", desc: "Configure HubSpot/Salesforce" },
  { title: "AI Calling Setup", desc: "Train & deploy AI voice" },
  { title: "Workflow Testing", desc: "Validate every touchpoint" },
  { title: "Launch", desc: "Go live with monitoring" },
  { title: "Optimization", desc: "Iterate based on data" },
];

const LEAD_SCORING_ITEMS = [
  "Behavior Tracking",
  "Email Opens",
  "Call Duration",
  "Budget Selection",
  "Website Visits",
];

export function AIAutomationPage() {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <div className="w-full">
      <RevopsHero
        eyebrow="AI-Powered Growth"
        titleLines={["AI Sales Systems That Convert"]}
        highlightLine="Cold Leads Into Hot Appointments"
        description="Automate lead response, qualification, and booking with AI-powered voice calling and CRM workflows."
        primaryCtaLabel="Book a Call"
        onPrimaryClick={() => setShowCalendly(true)}
        secondaryCtaLabel="Explore All Services"
        secondaryCtaHref="/services"
        stats={[
          { value: "24/7", label: "Response" },
          { value: "180%+", label: "Qualified Leads" },
          { value: "14 Days", label: "To Launch" },
        ]}
        rightImageSrc="https://i.pinimg.com/736x/7f/73/1d/7f731ddb6b9a1ba077d97104f573a328.jpg"
        rightImageAlt="AI automation workspace"
      />

      <RevopsCoreProblemSolution service="ai-automation-marketing" />

      <RevopsCoreHowItWorks service="ai-automation-marketing" />

      <AIAutomationLeadIdentification />

      {/* <CoreProcessSlider service="ai-automation-marketing" /> */}



      {/* Inquiry Form */}
      <section className="py-20 sm:py-24 bg-linear-to-b from-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="bg-linear-to-r from-foreground to-primary bg-clip-text text-transparent">
                  Get Your Free AI Blueprint
                </span>
              </h2>
              <p className="text-muted-foreground">
                Tell us about your business and we&apos;ll send a customized automation plan.
              </p>
            </div>
            <div className="rounded-2xl bg-card border border-border p-6 sm:p-8 shadow-lg">
              <ServiceInquiryForm
                serviceName="AI Marketing & Business Automation"
                serviceSlug="ai-automation-marketing"
              />
            </div>
          </div>
        </div>
      </section>

      <CoreServiceCTA service="ai-automation-marketing" />

      <CalendlyModal isOpen={showCalendly} onClose={() => setShowCalendly(false)} />
    </div>
  );
}
