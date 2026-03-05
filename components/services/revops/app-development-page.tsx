"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ServiceInquiryForm } from "@/components/sections/service-inquiry-form";
import { CalendlyModal } from "@/components/ui/calendly-modal";
import { useState } from "react";

const PROCESS_STEPS = ["Product Strategy", "MVP Development", "Tech Architecture", "Admin Dashboard", "Deployment"];

export function AppDevelopmentPage() {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <div className="w-full">
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden rounded-b-[150px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1920&h=1080&fit=crop"
            alt="App Development"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/50 z-[1]" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Build Scalable Apps That Drive Engagement & Revenue
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Mobile and web applications built for growth, performance, and seamless user experience.
          </p>
          <Button
            size="lg"
            className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-white"
            onClick={() => setShowCalendly(true)}
          >
            Get Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              What We Build
            </span>
          </h2>
          <ul className="max-w-2xl mx-auto space-y-4">
            {["MVP Development", "SaaS Platforms", "Admin Dashboards", "Payment Integration"].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Development Process
            </span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">Timeline: 8–16 Weeks</p>
          <div className="flex flex-wrap justify-center gap-4">
            {PROCESS_STEPS.map((step, i) => (
              <div key={step} className="px-4 py-2 rounded-lg bg-card border border-border">
                <span className="text-sm font-bold text-primary">Step {i + 1}</span>
                <span className="ml-2 text-sm font-medium">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Inquiry Form
            </span>
          </h2>
          <div className="max-w-2xl mx-auto">
            <ServiceInquiryForm
              serviceName="App Development"
              serviceSlug="app-development"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-primary/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Build Your App?
          </h2>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6" onClick={() => setShowCalendly(true)}>
            Book Strategy Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <CalendlyModal isOpen={showCalendly} onClose={() => setShowCalendly(false)} />
    </div>
  );
}
