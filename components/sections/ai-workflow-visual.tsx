"use client";

import {
  TrafficCone,
  FileText,
  Database,
  Phone,
  Mail,
  Tag,
  Calendar,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { Timeline } from "@/components/ui/timeline";

const STEPS = [
  {
    step: 1,
    label: "Traffic Generation",
    desc: "Inbound visitors & targeted ad campaigns drive qualified prospects straight into your funnel.",
    icon: TrafficCone,
    phase: "Acquisition",
    metric: { value: "10K+", label: "Monthly visitors" },
    progress: 82,
    color: "#00b4d8",
  },
  {
    step: 2,
    label: "Landing Page Capture",
    desc: "High-converting pages with optimized forms and compelling CTAs capture lead information instantly.",
    icon: FileText,
    phase: "Acquisition",
    metric: { value: "38%", label: "Conversion rate" },
    progress: 68,
    color: "#0891b2",
  },
  {
    step: 3,
    label: "CRM Integration",
    desc: "Lead data flows into your centralized CRM — organized, tagged, and ready for AI processing.",
    icon: Database,
    phase: "Acquisition",
    metric: { value: "< 2s", label: "Sync time" },
    progress: 95,
    color: "#6366f1",
  },
  {
    step: 4,
    label: "AI Qualification Call",
    desc: "AI instantly calls and qualifies leads, filtering out tire-kickers and surfacing high-intent prospects.",
    icon: Phone,
    phase: "Acquisition",
    metric: { value: "< 30s", label: "Response time" },
    progress: 90,
    color: "#7c3aed",
  },
  {
    step: 5,
    label: "Follow-up Automation",
    desc: "Multi-channel sequences — email, SMS, and WhatsApp — nurture leads until they're sales-ready.",
    icon: Mail,
    phase: "Conversion",
    metric: { value: "7x", label: "Touch points" },
    progress: 75,
    color: "#8b5cf6",
  },
  {
    step: 6,
    label: "Hot Lead Scoring",
    desc: "AI scores and prioritizes every lead based on behavior, engagement, and buying signals.",
    icon: Tag,
    phase: "Conversion",
    metric: { value: "95%", label: "Accuracy" },
    progress: 95,
    color: "#a855f7",
  },
  {
    step: 7,
    label: "Calendar Booking",
    desc: "Qualified prospects self-schedule directly into your sales team's calendar — zero friction.",
    icon: Calendar,
    phase: "Conversion",
    metric: { value: "24/7", label: "Availability" },
    progress: 100,
    color: "#059669",
  },
  {
    step: 8,
    label: "Sales Close",
    desc: "Warm, pre-qualified appointments convert into paying clients at significantly higher close rates.",
    icon: CheckCircle,
    phase: "Conversion",
    metric: { value: "3.2x", label: "ROI achieved" },
    progress: 88,
    color: "#10b981",
  },
] as const;

function StepContent({ step }: { step: (typeof STEPS)[number] }) {
  const Icon = step.icon;

  return (
    <div
      className="group rounded-2xl border bg-white/95 p-4 shadow-lg shadow-black/4 backdrop-blur-sm transition-all duration-300 hover:shadow-xl sm:p-6"
      style={{ borderColor: `${step.color}30` }}
    >
      {/* Phase badge */}
      <span
        className="mb-4 inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest"
        style={{
          color: step.color,
          backgroundColor: `${step.color}12`,
          border: `1px solid ${step.color}25`,
        }}
      >
        {step.phase} &middot; Step {String(step.step).padStart(2, "0")}
      </span>

      {/* Header */}
      <div className="mb-4 flex items-center gap-4">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl shadow-md transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: step.color }}
        >
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h4 className="text-base font-bold leading-snug text-foreground sm:text-xl">
          {step.label}
        </h4>
      </div>

      {/* Description */}
      <p className="mb-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
        {step.desc}
      </p>

      {/* Metric + progress bar */}
      <div
        className="rounded-xl px-4 py-3.5"
        style={{ backgroundColor: `${step.color}08` }}
      >
        <div className="mb-2 flex items-baseline justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold" style={{ color: step.color }}>
              {step.metric.value}
            </span>
            <span className="text-sm text-muted-foreground">
              {step.metric.label}
            </span>
          </div>
          <span className="text-xs font-semibold" style={{ color: step.color }}>
            {step.progress}%
          </span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-black/5">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: step.color }}
            initial={{ width: "0%" }}
            whileInView={{ width: `${step.progress}%` }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          />
        </div>
      </div>
    </div>
  );
}

export function AIWorkflowVisual() {
  const timelineData = STEPS.map((step) => ({
    title: step.label,
    color: step.color,
    content: <StepContent step={step} />,
  }));

  return (
    <section
      className="relative overflow-hidden py-20 pt-0"
      style={{
        background:
          "linear-gradient(180deg, #eef4ff 0%, #ffffff 35%, #ffffff 65%, #d5e6ff 100%)",
      }}
    >
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-10 h-[280px] w-[280px] rounded-full bg-primary/10 blur-3xl sm:h-[520px] sm:w-[520px]" />
        <div className="absolute bottom-[-200px] right-[-120px] h-[320px] w-[320px] rounded-full bg-indigo-400/8 blur-3xl sm:h-[620px] sm:w-[620px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="pt-16 pb-4 text-center sm:pt-24 lg:pt-32"
        >
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
              AI Pipeline
            </span>
          </div>
          <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl">
            From Traffic to <span className="text-primary">Revenue</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground/80 sm:text-lg">
            See how we turn cold traffic into closed deals — step by step
          </p>
        </motion.div>

        {/* Timeline */}
        <Timeline data={timelineData} />

        {/* Bottom CTA */}
        {/* <motion.div
          className="pb-24 text-center lg:pb-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/get-quote"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:gap-3"
          >
            Start Your AI Pipeline
            <ArrowRight className="h-5 w-5 transition-transform duration-300" />
          </Link>
        </motion.div> */}
      </div>
    </section>
  );
}
