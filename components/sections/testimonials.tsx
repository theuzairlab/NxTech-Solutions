"use client";

import Image from "next/image";
import { Star, Quote } from "lucide-react";

type TestimonialData = {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
};

type TestimonialsProps = {
  testimonials: TestimonialData[];
};

function TestimonialCard({ testimonial }: { testimonial: TestimonialData }) {
  return (
    <div className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 shrink-0 w-full sm:w-[380px]">
      <div className="absolute top-6 right-6 opacity-10">
        <Quote className="h-16 w-16 text-primary" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
      <div className="relative z-10">
        <div className="flex gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star
              key={i}
              className="h-5 w-5 fill-primary text-primary"
            />
          ))}
        </div>
        <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
          "{testimonial.content}"
        </p>
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 shrink-0">
            <Image
              src={testimonial.image || "/icon.png"}
              alt={testimonial.name}
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>
          <div className="min-w-0">
            <div className="font-semibold text-foreground truncate">{testimonial.name}</div>
            <div className="text-sm text-muted-foreground truncate">{testimonial.role}</div>
            <div className="text-xs text-primary font-medium truncate">{testimonial.company}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  if (testimonials.length === 0) return null;

  // 2x duplication for seamless CSS loop (was 3x - reduces DOM ~33%)
  const duplicated = [...testimonials, ...testimonials];

  return (
    <section className="py-24 relative overflow-hidden -mt-32 pt-40 rounded-b-[50px] sm:rounded-b-[100px] md:rounded-b-[150px] bg-linear-to-b from-[#f5f5ff] via-white to-[#e6e6ff] z-6">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/3 w-[420px] h-[420px] bg-primary/12 blur-3xl" />
        <div className="absolute bottom-[-200px] right-[-120px] w-[520px] h-[520px] bg-primary/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-size-[140px_140px] opacity-60" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur">
            <span className="text-xs font-semibold tracking-[0.25em] text-primary">TESTIMONIALS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-foreground via-primary to-primary bg-clip-text text-transparent">
              Client Testimonials
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground/90 max-w-2xl mx-auto">
            Industry leaders trust {process.env.NEXT_PUBLIC_SITE_NAME} for reliability, innovation, and measurable results
          </p>
        </div>

        {/* CSS-only marquee - no RAF, offloads to compositor. Pause on hover. */}
        <div className="mb-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] group/testimonial-top">
          <div
            className="flex gap-6 w-max will-change-transform group-hover/testimonial-top:[animation-play-state:paused]"
            style={{ animation: "testimonial-scroll-left 45s linear infinite" }}
          >
            {duplicated.map((t, i) => (
              <TestimonialCard key={`top-${t.id}-${i}`} testimonial={t} />
            ))}
          </div>
        </div>
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] group/testimonial-bottom">
          <div
            className="flex gap-6 w-max will-change-transform group-hover/testimonial-bottom:[animation-play-state:paused]"
            style={{ animation: "testimonial-scroll-right 45s linear infinite" }}
          >
            {duplicated.map((t, i) => (
              <TestimonialCard key={`bottom-${t.id}-${i}`} testimonial={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
