"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { CalendlyModal } from "@/components/ui/calendly-modal";
import { WavyBackground } from "../ui/wavy-background";

const DEFAULT_TITLE = "Ready to Turn Your Business Into a Scalable AI Growth Engine?";

export function CTABanner({ title = DEFAULT_TITLE }: { title?: string }) {
  const [showCalendlyModal, setShowCalendlyModal] = useState(false);

  return (
    <section className="relative z-1 overflow-hidden py-24 bg-accent-foreground">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <WavyBackground
          containerClassName="relative overflow-hidden rounded-3xl bg-linear-to-b from-[#00c2c7] via-[#00b1bb] to-[#009aa8]"
          className="max-w-7xl mx-auto px-4 py-16 text-center"
          backgroundFill="#022c32"
          waveOpacity={0.35}
          speed="slow"
        >
          <h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            {title}
          </h2>

          <div className="flex justify-center">
            <Button
              size="lg"
              className="group rounded-full bg-white px-8 py-6 text-lg text-primary shadow-lg shadow-white/20 hover:bg-white/90"
              onClick={() => setShowCalendlyModal(true)}
            >
              Book Strategy Call
              <ArrowRight
                size={40}
                className="size-10 relative left-2 rounded-full bg-primary p-1 text-white transition-transform group-hover:translate-x-1"
              />
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/80">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">50+ Clients</div>
              <div className="text-sm">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">
                100% Satisfaction
              </div>
              <div className="text-sm">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">24/7 Support</div>
              <div className="text-sm">Support Available</div>
            </div>
          </div>
        </WavyBackground>
      </div>

      <CalendlyModal
        isOpen={showCalendlyModal}
        onClose={() => setShowCalendlyModal(false)}
      />
    </section>
  );
}

