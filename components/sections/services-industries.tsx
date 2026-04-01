"use client";

import { CheckCircle2, AlertCircle, Lightbulb, FileText, ArrowRight, Zap, Target, Layers } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { prisma } from "@/lib/prisma";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

type IndustryData = {
  id: string;
  name: string;
  image: string;
  services: {
    painPoints?: string[];
    solutions?: string[];
    caseStudy?: {
      title: string;
      result: string;
      description: string;
    };
  } | null;
};

// Client component wrapper for animation logic
function IndustryCard({ industry }: { industry: IndustryData }) {
  const [isHovered, setIsHovered] = useState(false);
  const painPoints = industry.services?.painPoints || [];
  const solutions = industry.services?.solutions || [];
  const caseStudy = industry.services?.caseStudy || { title: "", result: "", description: "" };

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative flex h-[480px] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10"
    >
      {/* Premium Header - No Image */}
      <div className="relative h-24 w-full overflow-hidden sm:h-28">
        <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-transparent" />
        <div className="absolute top-6 left-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm border border-slate-100 transition-transform group-hover:scale-110">
            <Layers className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-2xl font-bold tracking-tight text-slate-800">
            {industry.name}
          </h3>
        </div>
      </div>

      {/* Card Content Area */}
      <div className="relative flex-1 p-6 sm:p-8">
        <AnimatePresence mode="wait">
          {!isHovered ? (
            <motion.div
              key="pain-points"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-[10px] font-black text-red-600">!</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-red-500/80">Critical Pain Points</span>
              </div>
              <ul className="space-y-4">
                {painPoints.slice(0, 3).map((point, idx) => (
                  <li key={idx} className="flex gap-3">
                    <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                    <p className="text-sm font-medium leading-relaxed text-slate-600">{point}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-center justify-center pt-4">
                <div className="flex animate-bounce flex-col items-center gap-1 opacity-40">
                  <span className="text-[9px] font-bold uppercase tracking-tighter">Hover to see our solution</span>
                  <ArrowRight className="h-3 w-3 rotate-90" />
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="solutions"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100">
                  <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600">Strategic Solutions</span>
              </div>
              <ul className="space-y-4">
                {solutions.slice(0, 3).map((solution, idx) => (
                  <li key={idx} className="flex gap-3">
                    <Zap className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <p className="text-sm font-bold leading-relaxed text-slate-700">{solution}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Case Study Footer - Always Visible */}
      {caseStudy.title && (
        <div className="bg-slate-50 p-6 border-t border-slate-100">
          <div className="flex items-center gap-2 mb-3">
            <Target className="h-4 w-4 text-primary" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Proven ROI</span>
          </div>
          <p className="text-xs font-bold text-slate-800 line-clamp-1 mb-1">{caseStudy.title}</p>
          <p className="text-[10px] text-primary font-black uppercase tracking-tight">{caseStudy.result}</p>
        </div>
      )}
      
      {/* Decorative Gradient Overlay on Hover */}
      <div className={`absolute inset-0 bg-linear-to-br from-primary/5 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
    </motion.div>
  );
}

export function ServicesIndustries({ industries }: { industries: IndustryData[] }) {
  return (
    <section id="industries" className="relative py-24 overflow-hidden bg-slate-50/50">
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-24 right-1/4 w-[520px] h-[520px] bg-primary/10 blur-3xl rounded-full" />
        <div className="absolute -bottom-20 left-10 w-[480px] h-[480px] bg-primary/5 blur-3xl rounded-full" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100">
            <span className="text-xs font-black tracking-[0.3em] text-primary uppercase">MARKET EXPERTISE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-4 tracking-tight">
            <span className="bg-linear-to-r from-slate-900 via-primary to-primary bg-clip-text text-transparent">
              Targeted Impact. <br className="hidden md:block" /> Every Industry.
            </span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Eliminating operational bottlenecks with data-backed digital strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind) => (
            <IndustryCard key={ind.id} industry={ind} />
          ))}
        </div>
      </div>
    </section>
  );
}


