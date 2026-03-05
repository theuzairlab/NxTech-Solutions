"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { CalendlyModal } from "@/components/ui/calendly-modal";

export function CTABanner() {
  const [showCalendlyModal, setShowCalendlyModal] = useState(false);

  return (
    <section className="py-24 relative overflow-hidden -mt-32 pt-40 rounded-b-[50px] sm:rounded-b-[100px] md:rounded-b-[150px] bg-linear-to-b from-[#00c2c7] via-[#00b1bb] to-[#009aa8] z-1">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:32px_32px] opacity-70" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/15 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 mb-8">
            <Sparkles className="h-10 w-10 text-white" />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Ready to Turn Your Business Into a Scalable AI Growth Engine?
          </h2>

          <div className="flex justify-center">
            <Button
              size="lg"
              className="group text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 shadow-lg shadow-white/20"
              onClick={() => setShowCalendlyModal(true)}
            >
              Book Strategy Call
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/80">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">50+ Clients</div>
              <div className="text-sm">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">100% Satisfaction</div>
              <div className="text-sm">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">24/7 Support</div>
              <div className="text-sm">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      <CalendlyModal isOpen={showCalendlyModal} onClose={() => setShowCalendlyModal(false)} />
    </section>
  );
}

