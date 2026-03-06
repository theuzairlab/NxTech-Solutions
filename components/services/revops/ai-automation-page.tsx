"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Database,
  Target,
  Calendar,
  Bell,
  MessageSquare,
  XCircle,
  Zap,
  BarChart3,
  Clock,
} from "lucide-react";
import { ServiceInquiryForm } from "@/components/sections/service-inquiry-form";
import { CalendlyModal } from "@/components/ui/calendly-modal";
import { useState } from "react";

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

const PAIN_POINTS = [
  { text: "Leads ignored for hours or days", icon: Clock },
  { text: "Slow response times hurt conversions", icon: XCircle },
  { text: "Manual follow-ups eating your time", icon: Zap },
  { text: "No qualification system to prioritize hot leads", icon: Target },
];

const SOLUTION_CARDS = [
  {
    title: "AI Voice Calling",
    desc: "Instant outbound calls to qualify leads 24/7",
    icon: Phone,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
  },
  {
    title: "CRM Automation",
    desc: "Seamless sync and workflows across your stack",
    icon: Database,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    title: "Lead Scoring",
    desc: "Prioritize hot prospects automatically",
    icon: BarChart3,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
  },
  {
    title: "Multi-Channel Follow-up",
    desc: "Email, SMS, and voice in one flow",
    icon: MessageSquare,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    title: "Appointment Booking",
    desc: "Automated calendar scheduling without back-and-forth",
    icon: Calendar,
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=600&h=400&fit=crop",
  },
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
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden rounded-b-[80px] sm:rounded-b-[120px] md:rounded-b-[150px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&h=1080&fit=crop"
            alt="AI Automation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 z-[1]" />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 pb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-xs font-semibold tracking-wider text-white/90 uppercase">
              AI-Powered Growth
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            AI Sales Systems That Convert Cold Leads Into Hot Appointments
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Automate lead response, qualification, and booking with AI-powered
            voice calling and CRM workflows.
          </p>
          <Button
            size="lg"
            className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/25"
            onClick={() => setShowCalendly(true)}
          >
            Get Free AI Blueprint
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          {/* Stats bar */}
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            {[
              { value: "24/7", label: "Response" },
              { value: "180%+", label: "Qualified Leads" },
              { value: "14 Days", label: "To Launch" },
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
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop"
                alt="Manual follow-ups"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-semibold text-sm">
                  Manual follow-ups cost time and conversions
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                  Sound Familiar?
                </span>
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Most businesses lose leads to slow response times and manual
                bottlenecks. We fix that with AI.
              </p>
              <div className="space-y-4">
                {PAIN_POINTS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.text}
                      className="flex items-center gap-4 p-4 rounded-xl bg-card/80 border border-border hover:border-destructive/30 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0">
                        <Icon className="h-5 w-5 text-destructive" />
                      </div>
                      <span className="text-foreground font-medium">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Automation Solution */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Our Automation Solution
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              End-to-end AI systems that turn leads into booked calls automatically
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {SOLUTION_CARDS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-primary/90 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works - Visual Pipeline */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          <div className="relative max-w-5xl mx-auto">
            {/* Connecting line (visible on larger screens) */}
            <div className="hidden md:block absolute top-28 left-0 right-0 h-0.5 bg-primary/20" />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10">
              {HOW_IT_WORKS.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.step} className="relative flex flex-col items-center">
                    <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-primary/15 border-2 border-primary/30 flex items-center justify-center mb-3 group-hover:border-primary/60 transition-colors">
                      <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
                    </div>
                    <span className="text-xs font-semibold text-primary mb-4">
                      Step {item.step}
                    </span>
                    <p className="text-sm font-medium text-center">{item.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Lead Scoring - Visual */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                  Lead Identification
                </span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Our scoring model tracks multiple signals. When the score exceeds
                threshold → instant sales alert.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {LEAD_SCORING_ITEMS.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0">
                <div className="flex flex-row lg:flex-col flex-nowrap items-center justify-center gap-2 sm:gap-4 lg:gap-8 w-full">
                  <BarChart3 className="h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 text-primary shrink-0" />
                  <p className="font-bold text-sm sm:text-base lg:text-lg whitespace-nowrap shrink-0">Score Threshold</p>
                  <p className="text-xl sm:text-2xl lg:text-4xl font-black text-primary shrink-0">→</p>
                  <p className="font-semibold text-primary text-xs sm:text-sm lg:text-base whitespace-nowrap shrink-0">Sales Alert</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Case Study
            </span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="rounded-3xl overflow-hidden bg-card border border-border shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-10 bg-muted/30 border-b md:border-b-0 md:border-r">
                  <p className="text-sm font-semibold text-muted-foreground uppercase mb-3">
                    Before
                  </p>
                  <p className="text-2xl font-bold text-foreground mb-1">
                    Manual follow-ups
                  </p>
                  <p className="text-muted-foreground mb-4">~5 hrs/week</p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-destructive/10 text-destructive text-xs font-medium">
                      Slow
                    </span>
                  </div>
                </div>
                <div className="p-8 md:p-10 bg-primary/5">
                  <p className="text-sm font-semibold text-primary uppercase mb-3">
                    After
                  </p>
                  <p className="text-2xl font-bold text-primary mb-1">
                    Automated 24/7
                  </p>
                  <p className="text-muted-foreground mb-4">
                    180% more qualified leads
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                      +210% bookings
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-8 text-center border-t bg-card/50">
                <p className="text-muted-foreground">
                  Dental practice automated lead response. Bookings increased 210%
                  in 90 days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Onboarding - Visual Timeline */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Onboarding Process
            </span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Timeline: 14–21 Days
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical connector */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary/20 hidden sm:block" />
              <div className="space-y-6">
                {ONBOARDING_STEPS.map((step, i) => (
                  <div key={step.title} className="relative flex gap-6 sm:gap-8">
                    <div className="relative z-10 shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                      {i + 1}
                    </div>
                    <div className="flex-1 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors">
                      <h4 className="font-bold text-lg mb-1">{step.title}</h4>
                      <p className="text-muted-foreground text-sm">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
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

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-primary via-primary/90 to-primary/80 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Automate Your Sales Pipeline?
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
