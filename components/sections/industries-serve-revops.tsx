"use client";

import Image from "next/image";

const INDUSTRIES = [
  {
    name: "Real Estate",
    description:
      "Automate lead follow-up, CRM workflows, and booking systems with AI-powered growth solutions tailored for agents and brokerages.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=400&fit=crop",
    textBg: "beige" as const,
  },
  {
    name: "Dental",
    description:
      "Complete AI-driven patient scheduling, recall campaigns, and practice growth automation for dental clinics.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit",
    textBg: "green" as const,
  },
  {
    name: "SaaS",
    description:
      "Scale your product with conversion-optimized funnels, CRM integration, and AI-powered sales pipelines.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
    textBg: "beige" as const,
  },
  {
    name: "Coaches",
    description:
      "Automate client onboarding, booking, and follow-up with AI systems that turn traffic into booked calls.",
    image: "https://images.unsplash.com/photo-1712253600732-baa27bf3c012?q=80&w=2070&auto=format&fit=crop",
    textBg: "green" as const,
  },
  {
    name: "E-commerce",
    description:
      "Conversion-focused storefronts, abandoned cart flows, and performance marketing that drives measurable ROI.",
    image: "https://images.unsplash.com/photo-1688561807440-8a57dfa77ee3?q=80&w=2940&auto=format&fit=crop",
    textBg: "beige" as const,
  },
  {
    name: "Local Businesses",
    description:
      "Local SEO, booking systems, and AI follow-up that help you capture and convert more local leads.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=400&fit=crop",
    textBg: "green" as const,
  },
] as const;

export function IndustriesServeRevOps() {
  return (
    <section className="relative py-24 overflow-hidden -mt-32 pt-40 rounded-b-[50px] sm:rounded-b-[100px] md:rounded-b-[150px] z-7">
      {/* Dark blurred background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop"
          alt=""
          fill
          className="object-cover scale-105"
          sizes="100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur">
            <span className="text-xs font-semibold tracking-[0.25em] text-white/90 uppercase">
              INDUSTRIES
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-white">
            Industries We Serve
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
            Proven expertise across diverse sectors with tailored solutions
          </p>
        </div>

        <div className="space-y-6 max-w-5xl mx-auto">
          {INDUSTRIES.map((industry) => (
            <div
              key={industry.name}
              className="flex flex-col sm:flex-row gap-0 sm:gap-6 items-stretch"
            >
              {/* Square icon/image on left */}
              <div className="relative w-full sm:w-40 md:w-48 shrink-0 aspect-square rounded-2xl overflow-hidden bg-white shadow-lg">
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 192px"
                  loading="lazy"
                />
              </div>

              {/* Text box on right - alternating bg colors */}
              <div
                className={`
                  flex-1 rounded-2xl p-6 md:p-8 flex flex-col justify-center
                  ${
                    industry.textBg === "beige"
                      ? "bg-[#f5f0e8] text-foreground"
                      : "bg-[#e8f5e9] text-foreground"
                  }
                `}
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  {industry.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/services#industries"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white transition-colors"
          >
            Explore All Industries →
          </a>
        </div>
      </div>
    </section>
  );
}
