"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Building2,
  HeartPulse,
  Laptop,
  Users,
  ShoppingCart,
  Store,
} from "lucide-react";

const INDUSTRIES = [
  {
    name: "Real Estate",
    description:
      "Automate lead follow-up, booking, and sales visibility with AI Automation built for agents, teams, and brokerages that need speed.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    icon: Building2,
  },
  {
    name: "Dental",
    description:
      "Build patient growth systems with scheduling, recall, nurture, and conversion support designed for busy clinics and dental teams.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop",
    icon: HeartPulse,
  },
  {
    name: "SaaS",
    description:
      "Scale your product with sharper funnels, cleaner reporting, and connected systems across App Development and demand generation.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    icon: Laptop,
  },
  {
    name: "Coaches",
    description:
      "Turn traffic into booked calls with automation, nurturing, and conversion systems that reduce manual follow-up and missed opportunities.",
    image: "https://images.unsplash.com/photo-1712253600732-baa27bf3c012?w=800&h=600&fit=crop",
    icon: Users,
  },
  {
    name: "E-commerce",
    description:
      "Grow online sales through Ecommerce Development, lifecycle automation, and performance campaigns built for conversion.",
    image: "https://images.unsplash.com/photo-1688561807440-8a57dfa77ee3?w=800&h=600&fit=crop",
    icon: ShoppingCart,
  },
  {
    name: "Local Businesses",
    description:
      "Capture and convert more local demand with SEO, booking systems, and faster AI-driven follow-up.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
    icon: Store,
  },
] as const;

export function IndustriesServeRevOps() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="relative container mx-auto pb-16 md:pb-24">

      <div className="relative left-0 mx-auto w-full max-w-7xl px-4 pb-12 pt-10 md:pb-20 md:pt-24">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
            Industries
          </span>
        </div>
        <h1 className="text-4xl font-bold text-foreground sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          Industries <br />
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-20 shrink-0 rounded-full bg-primary sm:w-40 lg:w-80" />
            <span className="text-primary">We Serve</span>
          </div>
        </h1>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
          Proven experience across real estate, dental, SaaS, coaching, e-commerce, and local service brands that need sharper systems and stronger revenue execution.
        </p>
      </div>

      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {INDUSTRIES.map((industry, idx) => {
            const Icon = industry.icon;
            const isActive = activeIndex === idx;
            return (
              <div
                key={industry.name}
                onClick={() => setActiveIndex(isActive ? null : idx)}
                className={`group relative h-[400px] rounded-4xl overflow-hidden shadow-lg transition-all duration-500 cursor-pointer block transform hover:-translate-y-1 hover:shadow-2xl ${isActive ? "shadow-2xl -translate-y-1" : ""}`}
              >
                {/* 1. Background Image */}
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  className={`object-cover transition-transform duration-700 ${isActive ? "scale-110" : "group-hover:scale-110"}`}
                />

                {/* Overlay */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${isActive ? "bg-black/60" : "bg-black/40 group-hover:bg-black/60"}`} />

                {/* 2. Abstract Decorative Background Elements */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white/10 blur-3xl group-hover:scale-150 transition-transform duration-700 delay-75" />
                <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 rounded-full bg-black/20 blur-2xl group-hover:scale-150 transition-transform duration-700 delay-100" />

                {/* 3. NORMAL STATE */}
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center p-8 text-center transition-all duration-500 ease-in-out z-10
                    ${isActive ? "-translate-y-24 opacity-0 blur-sm" : ""}
                    group-hover:-translate-y-24 group-hover:opacity-0 group-hover:blur-sm`}
                >
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shadow-inner mb-6 border border-white/30 transition-transform duration-500">
                    <Icon className="w-10 h-10 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide leading-tight drop-shadow-md">
                    {industry.name}
                  </h3>
                </div>

                {/* 4. ACTIVE / HOVER STATE */}
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-between p-8 text-center transition-all duration-500 ease-in-out z-20
                    ${isActive ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"}
                    group-hover:translate-y-0 group-hover:opacity-100`}
                >
                  <div className="mt-2 w-full">
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide drop-shadow-md">
                      {industry.name}
                    </h3>
                    <div className="w-12 h-1 bg-white mx-auto mt-4 rounded-full" />
                  </div>

                  <p className="text-white/95 text-base md:text-lg leading-relaxed my-auto drop-shadow-sm font-medium">
                    {industry.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

