"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Bot,
  Globe2,
  Smartphone,
  Megaphone,
  type LucideIcon,
} from "lucide-react";

const CORE_SERVICES = [
  {
    slug: "ai-automation-marketing",
    title: "AI Marketing & Business Automation",
    shortHook:
      "We design AI-driven lead generation and follow-up systems that instantly respond, qualify, and book appointments automatically.",
    bullets: [
      "AI Voice Calling",
      "CRM Automation",
      "Lead Scoring",
      "Multi-Channel Follow-up",
    ],
    ctaText: "Explore AI Automation",
    icon: Bot,
  },
  {
    slug: "web-development",
    title: "Web Development",
    shortHook:
      "High-performance websites engineered to convert visitors into leads and revenue.",
    bullets: [
      "Conversion-focused UX",
      "Speed optimized",
      "CRM integrated",
      "Analytics ready",
    ],
    ctaText: "Explore Web Development",
    icon: Globe2,
  },
  {
    slug: "app-development",
    title: "App Development",
    shortHook:
      "Scalable mobile and web applications built for growth, performance, and seamless user experience.",
    bullets: [
      "MVP Development",
      "SaaS Platforms",
      "Admin Dashboards",
      "Payment Integration",
    ],
    ctaText: "Explore App Development",
    icon: Smartphone,
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    shortHook:
      "Performance-driven paid advertising and funnel optimization designed to generate measurable ROI.",
    bullets: [
      "Meta Ads",
      "Google PPC",
      "LinkedIn Ads",
      "Retargeting Systems",
    ],
    ctaText: "Explore Digital Marketing",
    icon: Megaphone,
  },
] as const satisfies Array<{
  slug: string;
  title: string;
  shortHook: string;
  bullets: string[];
  ctaText: string;
  icon: LucideIcon;
}>;

export function CoreServicesGrid() {
  return (
    <section className="relative py-24 overflow-hidden -mt-32 pt-40 rounded-b-[50px] sm:rounded-b-[100px] md:rounded-b-[150px] bg-linear-to-b from-[#e7f9ff] via-white to-[#c9f2ff] z-11">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-16 w-96 h-96 bg-primary/15 blur-3xl" />
        <div className="absolute -bottom-20 right-10 w-[480px] h-[480px] bg-primary/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-size-[140px_140px] opacity-60" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur">
            <span className="text-xs font-semibold tracking-[0.2em] text-primary">
              SERVICES
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            <span className="bg-linear-to-r from-foreground via-primary to-primary bg-clip-text text-transparent">
              Core Services
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground/90 max-w-2xl mx-auto">
            Automation. Development. Performance Marketing. Engineered for
            scalable businesses.
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-5xl mx-auto">
          {CORE_SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.slug}
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-card/90 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 backdrop-blur-sm p-6"
              >
                <div className="relative z-10 h-full flex flex-col">
                  <div className="w-14 h-14 rounded-xl bg-linear-to-br from-primary/60 to-primary/40 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 grow">
                    {service.shortHook}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-center gap-2 text-sm text-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors group/link"
                  >
                    {service.ctaText}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-primary/30 hover:bg-primary/10 text-primary hover:text-primary hover:border-primary/50 shadow-lg shadow-primary/10"
          >
            <Link href="/services" className="flex items-center">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
