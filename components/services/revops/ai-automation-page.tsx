"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Phone, Database, Target, Mail, Tag, Calendar, Bell } from "lucide-react";
import { ServiceInquiryForm } from "@/components/sections/service-inquiry-form";
import { CalendlyModal } from "@/components/ui/calendly-modal";
import { useState } from "react";

const HOW_IT_WORKS = [
  { step: 1, title: "Lead Captured", icon: Database },
  { step: 2, title: "Instant AI Call", icon: Phone },
  { step: 3, title: "Smart Qualification", icon: Target },
  { step: 4, title: "Lead Scoring", icon: Target },
  { step: 5, title: "Calendar Booking", icon: Calendar },
  { step: 6, title: "Sales Notification", icon: Bell },
];

const ONBOARDING_STEPS = [
  "Discovery Call",
  "Funnel Mapping",
  "CRM Setup",
  "AI Calling Setup",
  "Workflow Testing",
  "Launch",
  "Optimization",
];

export function AIAutomationPage() {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden rounded-b-[150px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&h=1080&fit=crop"
            alt="AI Automation"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/50 z-[1]" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
            AI Sales Systems That Convert Cold Leads Into Hot Appointments
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Automate lead response, qualification, and booking with AI-powered voice calling and CRM workflows.
          </p>
          <Button
            size="lg"
            className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-white"
            onClick={() => setShowCalendly(true)}
          >
            Get Free AI Blueprint
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Sound Familiar?
              </span>
            </h2>
            <ul className="space-y-4 text-lg text-muted-foreground">
              {["Leads ignored for hours or days", "Slow response times hurt conversions", "Manual follow-ups eating your time", "No qualification system to prioritize hot leads"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="text-destructive">✗</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Our Automation Solution */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Our Automation Solution
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "AI Voice Calling", desc: "Instant outbound calls to qualify leads" },
              { title: "CRM Automation", desc: "Seamless sync and workflows" },
              { title: "Lead Scoring", desc: "Prioritize hot prospects automatically" },
              { title: "Multi-Channel Follow-up", desc: "Email, SMS, and voice" },
              { title: "Appointment Booking", desc: "Automated calendar scheduling" },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-xl bg-card border border-border hover:border-primary/50">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {HOW_IT_WORKS.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-2">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-primary">Step {item.step}</span>
                  <p className="text-sm font-medium">{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lead Scoring */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
              <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Lead Identification
              </span>
            </h2>
            <p className="text-muted-foreground mb-6 text-center">
              Our scoring model tracks: Behavior, Email opens, Call duration, Budget selection, Website visits. When score exceeds threshold → Sales Alert.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              {["Behavior Tracking", "Email Opens", "Call Duration", "Budget Selection", "Website Visits"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Case Study placeholder */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Case Study
            </span>
          </h2>
          <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-card border border-border">
            <div className="grid grid-cols-2 gap-8 mb-6">
              <div>
                <h4 className="text-sm font-semibold text-muted-foreground mb-2">Before</h4>
                <p className="text-2xl font-bold text-foreground">Manual follow-ups</p>
                <p className="text-sm text-muted-foreground">~5 hrs/week</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-muted-foreground mb-2">After</h4>
                <p className="text-2xl font-bold text-primary">Automated 24/7</p>
                <p className="text-sm text-muted-foreground">180% more qualified leads</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm text-center">
              Dental practice automated lead response. Bookings increased 210% in 90 days.
            </p>
          </div>
        </div>
      </section>

      {/* Onboarding */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Onboarding Process
            </span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">Timeline: 14–21 Days</p>
          <div className="flex flex-wrap justify-center gap-4">
            {ONBOARDING_STEPS.map((step, i) => (
              <div
                key={step}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border"
              >
                <span className="text-sm font-bold text-primary">Step {i + 1}</span>
                <span className="text-sm font-medium">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
              <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Get Your Free AI Blueprint
              </span>
            </h2>
            <ServiceInquiryForm
              serviceName="AI Marketing & Business Automation"
              serviceSlug="ai-automation-marketing"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-primary/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Automate Your Sales Pipeline?
          </h2>
          <Button
            size="lg"
            variant="secondary"
            className="text-lg px-8 py-6"
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
