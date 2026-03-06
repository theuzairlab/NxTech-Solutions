"use client";

import Image from "next/image";
import { ArrowRight, MapPin, Ruler, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CORE_SERVICES = [
  {
    slug: "ai-automation-marketing",
    title: "AI Marketing & Business Automation",
    description:
      "We design AI-driven lead generation and follow-up systems that instantly respond, qualify, and book appointments automatically.",
    details: [
      { icon: MapPin, label: "AI Voice Calling", value: "Instant qualification" },
      { icon: Ruler, label: "CRM Automation", value: "Seamless workflows" },
      { icon: Clock, label: "Lead Scoring", value: "Smart prioritization" },
    ],
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop",
    imagePosition: "left" as const,
  },
  {
    slug: "web-development",
    title: "Web Development",
    description:
      "High-performance websites engineered to convert visitors into leads and revenue. Conversion-focused UX, speed optimized, CRM integrated.",
    details: [
      { icon: MapPin, label: "Conversion UX", value: "Built to convert" },
      { icon: Ruler, label: "Speed optimized", value: "Fast loading" },
      { icon: Clock, label: "Analytics ready", value: "Data-driven" },
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    imagePosition: "right" as const,
  },
  {
    slug: "app-development",
    title: "App Development",
    description:
      "Scalable mobile and web applications built for growth, performance, and seamless user experience.",
    details: [
      { icon: MapPin, label: "MVP Development", value: "Fast to market" },
      { icon: Ruler, label: "SaaS Platforms", value: "Scalable architecture" },
      { icon: Clock, label: "Payment Integration", value: "Revenue ready" },
    ],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    imagePosition: "left" as const,
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Performance-driven paid advertising and funnel optimization designed to generate measurable ROI.",
    details: [
      { icon: MapPin, label: "Meta & Google Ads", value: "Paid acquisition" },
      { icon: Ruler, label: "LinkedIn Ads", value: "B2B targeting" },
      { icon: Clock, label: "Retargeting", value: "Win back visitors" },
    ],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format",
    imagePosition: "right" as const,
  },
];

export function CoreServicesGrid() {
  return (
    <section className="relative py-24 overflow-hidden -mt-32 pt-40 rounded-b-[50px] sm:rounded-b-[100px] md:rounded-b-[150px] bg-linear-to-b from-[#e7f9ff] via-white to-[#c9f2ff] z-11">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-16 w-96 h-96 bg-primary/15 blur-3xl" />
        <div className="absolute -bottom-20 right-10 w-[480px] h-[480px] bg-primary/10 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="h-px w-16 bg-primary/30 mx-auto mb-2" />
          <p className="text-sm font-medium tracking-wider text-primary/80">
            — Core Services
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            <span className="text-foreground">Our </span>
            <span className="text-primary">Core Services</span>
          </h2>
          <p className="text-lg text-muted-foreground/90 max-w-2xl mx-auto">
            Automation. Development. Performance Marketing.
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16 max-w-6xl mx-auto">
          {CORE_SERVICES.map((service) => {
            const isImageLeft = service.imagePosition === "left";
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="block group"
              >
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-card/90 border border-border shadow-lg hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    {/* Image side */}
                    <div
                      className={`relative overflow-hidden m-2 rounded-2xl shadow-lg ${!isImageLeft ? "md:order-2" : ""}`}
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                      />
                      <div
                        className={`absolute inset-0 ${
                          isImageLeft
                            ? "bg-linear-to-r from-transparent to-black/30"
                            : "bg-linear-to-l from-transparent to-black/30"
                        }`}
                      />
                      <div className="absolute bottom-4 left-4 flex gap-2">
                        <span className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
                          {service.slug.includes("ai") && "AI"}
                          {service.slug.includes("web") && "Web"}
                          {service.slug.includes("app") && "App"}
                          {service.slug.includes("digital") && "Marketing"}
                        </span>
                      </div>
                    </div>

                    {/* Content side */}
                    <div
                      className={`flex flex-col justify-center p-6 sm:p-8 md:p-10 ${!isImageLeft ? "md:order-1" : ""}`}
                    >
                      <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      <ul className="space-y-3 mb-6">
                        {service.details.map((item) => {
                          const Icon = item.icon;
                          return (
                            <li
                              key={item.label}
                              className="flex items-center gap-3 text-sm"
                            >
                              <span className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                                <Icon className="h-4 w-4 text-primary" />
                              </span>
                              <span className="text-foreground font-medium">
                                {item.label}
                              </span>
                              <span className="text-muted-foreground">
                                : {item.value}
                              </span>
                            </li>
                          );
                        })}
                      </ul>

                      <span className="inline-flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                        Learn more
                        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-14">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
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
