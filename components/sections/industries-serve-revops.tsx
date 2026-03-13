"use client";

import Image from "next/image";
import { HeroParallax } from "@/components/ui/hero-parallax";

const INDUSTRIES = [
  {
    name: "Real Estate",
    description:
      "Automate lead follow-up, CRM workflows, and booking systems with AI-powered growth solutions tailored for agents and brokerages.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
  },
  {
    name: "Dental",
    description:
      "Complete AI-driven patient scheduling, recall campaigns, and practice growth automation for dental clinics.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop",
  },
  {
    name: "SaaS",
    description:
      "Scale your product with conversion-optimized funnels, CRM integration, and AI-powered sales pipelines.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
  },
  {
    name: "Coaches",
    description:
      "Automate client onboarding, booking, and follow-up with AI systems that turn traffic into booked calls.",
    image: "https://images.unsplash.com/photo-1712253600732-baa27bf3c012?w=800&h=600&fit=crop",
  },
  {
    name: "E-commerce",
    description:
      "Conversion-focused storefronts, abandoned cart flows, and performance marketing that drives measurable ROI.",
    image: "https://images.unsplash.com/photo-1688561807440-8a57dfa77ee3?w=800&h=600&fit=crop",
  },
  {
    name: "Local Businesses",
    description:
      "Local SEO, booking systems, and AI follow-up that help you capture and convert more local leads.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
  },
  {
    name: "Real Estate",
    description:
      "Automate lead follow-up, CRM workflows, and booking systems with AI-powered growth solutions tailored for agents and brokerages.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
  },
  {
    name: "Dental",
    description:
      "Complete AI-driven patient scheduling, recall campaigns, and practice growth automation for dental clinics.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop",
  },
  {
    name: "SaaS",
    description:
      "Scale your product with conversion-optimized funnels, CRM integration, and AI-powered sales pipelines.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
  },
  {
    name: "Coaches",
    description:
      "Automate client onboarding, booking, and follow-up with AI systems that turn traffic into booked calls.",
    image: "https://images.unsplash.com/photo-1712253600732-baa27bf3c012?w=800&h=600&fit=crop",
  },
  {
    name: "E-commerce",
    description:
      "Conversion-focused storefronts, abandoned cart flows, and performance marketing that drives measurable ROI.",
    image: "https://images.unsplash.com/photo-1688561807440-8a57dfa77ee3?w=800&h=600&fit=crop",
  },
  {
    name: "Real Estate",
    description:
      "Automate lead follow-up, CRM workflows, and booking systems with AI-powered growth solutions tailored for agents and brokerages.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
  },
  {
    name: "Dental",
    description:
      "Complete AI-driven patient scheduling, recall campaigns, and practice growth automation for dental clinics.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop",
  },
  {
    name: "SaaS",
    description:
      "Scale your product with conversion-optimized funnels, CRM integration, and AI-powered sales pipelines.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
  },
  {
    name: "Coaches",
    description:
      "Automate client onboarding, booking, and follow-up with AI systems that turn traffic into booked calls.",
    image: "https://images.unsplash.com/photo-1712253600732-baa27bf3c012?w=800&h=600&fit=crop",
  },
  {
    name: "E-commerce",
    description:
      "Conversion-focused storefronts, abandoned cart flows, and performance marketing that drives measurable ROI.",
    image: "https://images.unsplash.com/photo-1688561807440-8a57dfa77ee3?w=800&h=600&fit=crop",
  },
] as const;

export function IndustriesServeRevOps() {
  const products = INDUSTRIES.map((industry) => ({
    title: industry.name,
    link: "/services#industries",
    thumbnail: industry.image,
    description: industry.description,
  }));

  const firstSix = INDUSTRIES.slice(0, 6);

  return (
    <section className="relative">
      {/* Mobile: simple responsive grid */}
      <div className="block px-4 py-16 sm:px-6 lg:hidden">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
            Industries
          </span>
        </div>
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
          Industries <span className="text-primary">We Serve</span>
        </h2>
        <p className="mt-3 max-w-lg text-sm text-muted-foreground sm:text-base">
          Proven expertise across sectors like real estate, dental, SaaS,
          coaches, e-commerce, and local businesses.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {firstSix.map((ind) => (
            <div
              key={ind.name}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="relative aspect-4/3">
                <Image
                  src={ind.image}
                  alt={ind.name}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-sm font-semibold text-black/80">{ind.name}</p>
                <p className="mt-0.5 text-[10px] leading-snug text-black/70 line-clamp-2">
                  {ind.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: full parallax */}
      <div className="hidden lg:block">
        <HeroParallax
          products={products}
          badge="Industries"
          title={
            <>
              Industries <span className="text-primary">We Serve</span>
            </>
          }
          subtitle="Proven expertise across sectors like real estate, dental, SaaS, coaches, e‑commerce, and local businesses."
        />
      </div>
    </section>
  );
}
