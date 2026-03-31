"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ParticlesBackground } from "@/components/ui/particles-background";
import { ArrowRight, TrendingUp, Users, Target, Zap, Clock, CalendarDays, ExternalLink } from "lucide-react";
import { CTABanner } from "@/components/sections/cta-banner";

// Placeholder Case Studies Data
const CASE_STUDIES = [
  {
    id: "ai-dental",
    title: "Revolutionizing Dental Practice Growth with AI Lead Follow-up",
    client: "SmileBright Clinics",
    industry: "Healthcare / Dental",
    image: "https://i.pinimg.com/736x/3d/be/78/3dbe78887c6edb1851e5d992ca834d97.jpg",
    metrics: [
      { label: "Consult Bookings", value: "+145%", icon: CalendarDays },
      { label: "No-Show Rate", value: "-40%", icon: Target },
      { label: "Revenue", value: "+$42k/mo", icon: TrendingUp },
    ],
    summary: "Implemented an automated AI chatbot and SMS nurture sequence that instantly qualified leads and booked consultations, eliminating manual front-desk bottlenecks.",
    color: "group-hover:shadow-blue-500/10 border-border/60 hover:border-blue-500/30",
    badgeLabel: "AI Automation"
  },
  {
    id: "ecommerce-scale",
    title: "Scaling D2C E-commerce Revenue via Automated Klaviyo Flows",
    client: "Luminary Home",
    industry: "E-Commerce",
    image: "https://images.unsplash.com/photo-1688561807440-8a57dfa77ee3?w=800&h=600&fit=crop",
    metrics: [
      { label: "Email Revenue", value: "32%", icon: TrendingUp },
      { label: "Cart Recovery", value: "+28%", icon: Users },
      { label: "Customer LTV", value: "+1.5x", icon: Zap },
    ],
    summary: "Rebuilt the entire email automation lifecycle from welcome series to win-back flows, driving a massive increase in baseline MRR without increasing ad spend.",
    color: "group-hover:shadow-purple-500/10 border-border/60 hover:border-purple-500/30",
    badgeLabel: "Digital Marketing"
  },
  {
    id: "realestate-crm",
    title: "Custom CRM & Workflow Automation for Regional Brokerage",
    client: "Apex Realty Group",
    industry: "Real Estate",
    image: "https://i.pinimg.com/1200x/b3/f6/02/b3f602ac9ac722ac55b649bfa543a347.jpg",
    metrics: [
      { label: "Lead Response", value: "< 2 mins", icon: Clock },
      { label: "Time Saved", value: "15 hrs/wk", icon: Zap },
      { label: "Conversion", value: "+85%", icon: Target },
    ],
    summary: "Consolidated scattered tools into a single streamlined CRM dashboard, setting up instant routing rules and AI-assisted email drafting for a team of 50+ agents.",
    color: "group-hover:shadow-emerald-500/10 border-border/60 hover:border-emerald-500/30",
    badgeLabel: "Web Development"
  },
  {
    id: "saas-seo",
    title: "Dominating B2B Search Real Estate for FinTech SaaS",
    client: "LedgerFlow Inc.",
    industry: "Software / SaaS",
    image: "https://i.pinimg.com/736x/cb/e8/3f/cbe83fae53de46d45bd0d491a5523260.jpg",
    metrics: [
      { label: "Organic Traffic", value: "+410%", icon: TrendingUp },
      { label: "Demo Calls", value: "+2x", icon: Users },
      { label: "Acquisition Cost", value: "-35%", icon: Target },
    ],
    summary: "Executed a highly targeted programmatic SEO and authority content strategy that ranked LedgerFlow for over 200 high-intent transactional keywords in just 6 months.",
    color: "group-hover:shadow-orange-500/10 border-border/60 hover:border-orange-500/30",
    badgeLabel: "SEO Services"
  }
];

import type { Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  }
};

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Hero Section */}
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

      {/* Case Studies Grid Section */}
      <section className="relative z-20 pb-32 mx-auto min-h-screen">
        <motion.div
          className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {CASE_STUDIES.map((study) => (
            <motion.div key={study.id} variants={itemVariants}>
              <Link
                href="#"
                className={`group flex flex-col h-full bg-white rounded-3xl overflow-hidden border-2 transition-all duration-500 shadow-sm hover:shadow-2xl hover:-translate-y-2 cursor-pointer ${study.color}`}
              >
                {/* Image Wrapper */}
                <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Overlay Gradient for Image */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent opacity-80" />

                  {/* Top Badge */}
                  <div className="absolute top-6 left-6 flex gap-2">
                    <span className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold text-slate-800 shadow-sm">
                      {study.industry}
                    </span>
                    <span className="px-3 py-1.5 rounded-full bg-primary text-white text-xs font-bold shadow-sm">
                      {study.badgeLabel}
                    </span>
                  </div>

                  {/* Client Info Float */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white/80 text-sm font-semibold mb-1 uppercase tracking-wider">{study.client}</p>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight drop-shadow-md decoration-white/30 decoration-2 underline-offset-4 group-hover:underline">
                      {study.title}
                    </h2>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow">

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {study.metrics.map((metric, idx) => {
                      const MetricIcon = metric.icon;
                      return (
                        <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left bg-slate-50 rounded-2xl p-4 border border-border/50 transition-colors group-hover:bg-primary/5 group-hover:border-primary/20">
                          <MetricIcon className="w-6 h-6 text-primary mb-3" />
                          <span className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight leading-none mb-1">
                            {metric.value}
                          </span>
                          <span className="text-xs sm:text-sm font-semibold text-slate-500 line-clamp-1">
                            {metric.label}
                          </span>
                        </div>
                      )
                    })}
                  </div>

                  {/* Summary Text */}
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 flex-grow">
                    {study.summary}
                  </p>

                  {/* Footer Action */}
                  <div className="pt-6 mt-auto border-t border-border/60 flex items-center justify-between text-primary font-bold">
                    <span className="flex items-center gap-2 group-hover:text-primary transition-colors">
                      Read Full Case Study
                    </span>
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center transition-transform duration-300 group-hover:bg-primary group-hover:text-white transform group-hover:translate-x-1">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <CTABanner />

      </section>
    </main>
  );
}
