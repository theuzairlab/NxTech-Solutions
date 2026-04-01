"use client";

import { motion } from "framer-motion";
import { ParticlesBackground } from "@/components/ui/particles-background";

export function CaseStudiesHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden flex flex-col items-center justify-center text-center px-4 min-h-[50vh]">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-6 mt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/60 border border-primary/20 backdrop-blur-md shadow-sm"
        >
          <span className="text-sm font-bold tracking-[0.2em] text-primary uppercase">
            Client Success
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-800 drop-shadow-sm mb-6">
            Proven Results. <br className="hidden md:block" />
            <span className="bg-linear-to-r from-primary to-cyan-500 bg-clip-text text-transparent">Real Impact.</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed border-b border-transparent"
        >
          Explore how we've helped ambitious brands across industries scale their operations, automate workflows, and drive unprecedented revenue growth.
        </motion.p>
      </div>

      {/* Soft Fade Out into the content background */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent z-10 pointer-events-none" />
    </section>
  );
}
