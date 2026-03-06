"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Smartphone,
  Layout,
  CreditCard,
  Rocket,
  Layers,
} from "lucide-react";
import { ServiceInquiryForm } from "@/components/sections/service-inquiry-form";
import { CalendlyModal } from "@/components/ui/calendly-modal";
import { useState } from "react";

const PROCESS_STEPS = [
  { title: "Product Strategy", desc: "Define roadmap & MVP scope" },
  { title: "MVP Development", desc: "Build core features first" },
  { title: "Tech Architecture", desc: "Scalable, secure foundations" },
  { title: "Admin Dashboard", desc: "Back-office tools & reporting" },
  { title: "Deployment", desc: "Launch & iterative improvements" },
];

const WHAT_WE_BUILD = [
  {
    title: "MVP Development",
    desc: "Fast to market, validated with users",
    icon: Rocket,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
  },
  {
    title: "SaaS Platforms",
    desc: "Scalable multi-tenant architecture",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    title: "Admin Dashboards",
    desc: "Powerful back-office controls",
    icon: Layout,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
  },
  {
    title: "Payment Integration",
    desc: "Stripe, subscriptions, invoicing",
    icon: CreditCard,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
  },
];

export function AppDevelopmentPage() {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden rounded-b-[80px] sm:rounded-b-[120px] md:rounded-b-[150px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1480694313141-fce5e697ee25?q=80&w=2070&auto=format"
            alt="App Development"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 z-[1]" />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 pb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Smartphone className="h-4 w-4 text-primary" />
            <span className="text-xs font-semibold tracking-wider text-white/90 uppercase">
              Mobile & Web Apps
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            Build Scalable Apps That Drive Engagement & Revenue
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Mobile and web applications built for growth, performance, and
            seamless user experience.
          </p>
          <Button
            size="lg"
            className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/25"
            onClick={() => setShowCalendly(true)}
          >
            Get Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            {[
              { value: "8–16", label: "Weeks Timeline" },
              { value: "MVP", label: "First" },
              { value: "Scalable", label: "Architecture" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-primary">{s.value}</p>
                <p className="text-xs sm:text-sm text-white/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Build - Visual Cards */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              What We Build
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {WHAT_WE_BUILD.map((item) => {
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

      {/* Development Process - Timeline */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Development Process
            </span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Timeline: 8–16 Weeks
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
      <section className="py-20 sm:py-24 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
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

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-primary via-primary/90 to-primary/80 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Build Your App?
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
