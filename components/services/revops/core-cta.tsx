"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, RocketIcon } from "lucide-react";
import { CalendlyModal } from "@/components/ui/calendly-modal";
import { WavyBackground } from "@/components/ui/wavy-background";
import type { CoreServiceKey } from "./core-service-flow";

const CTA_COPY: Record<
  CoreServiceKey,
  { heading: string; button: string }
> = {
  "ai-automation-marketing": {
    heading: "Ready to Automate Your Sales Pipeline 24/7?",
    button: "Get AI Automation Blueprint",
  },
  "web-development": {
    heading: "Ready for a Website Built to Convert?",
    button: "Get Web Growth Plan",
  },
  "app-development": {
    heading: "Ready to Ship Your Next App Faster?",
    button: "Get App Strategy Call",
  },
  "digital-marketing": {
    heading: "Ready for Performance Marketing With Measurable ROI?",
    button: "Get Growth Strategy Call",
  },
};

interface CoreCTAProps {
  service: CoreServiceKey;
}

export function CoreServiceCTA({ service }: CoreCTAProps) {
  const [open, setOpen] = useState(false);
  const copy = CTA_COPY[service];

  return (
    <section className="relative z-1 overflow-hidden py-20 bg-accent-foreground">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <WavyBackground
          containerClassName="relative overflow-hidden rounded-3xl bg-linear-to-b from-[#00c2c7] via-[#00b1bb] to-[#009aa8]"
          className="mx-auto max-w-6xl px-4 py-16 text-center"
          backgroundFill="#022c32"
          waveOpacity={0.35}
          speed="slow"
        >
          <RocketIcon className="w-20 h-20 size-10 text-white text-center mx-auto mb-4" />
          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {copy.heading}
          </h2>

          <div className="flex justify-center">
            <Button
              size="lg"
              className="group rounded-full bg-white px-8 py-6 text-lg text-primary shadow-lg shadow-white/20 hover:bg-white/90"
              onClick={() => setOpen(true)}
            >
              {copy.button}
              <ArrowRight
                size={40}
                className="size-10 relative left-2 rounded-full bg-primary p-1 text-white transition-transform group-hover:translate-x-1"
              />
            </Button>
          </div>
        </WavyBackground>
      </div>

      <CalendlyModal isOpen={open} onClose={() => setOpen(false)} />
    </section>
  );
}

