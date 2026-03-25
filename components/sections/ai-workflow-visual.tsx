"use client";

import { motion } from "motion/react";

import type { CoreServiceId } from "@/lib/core-services-home-data";
import {
  CORE_ICON_MAP,
  CORE_SERVICES_HOME_CONTENT,
  type CoreAIWorkflowStep,
} from "@/lib/core-services-home-data";
import { Timeline } from "@/components/ui/timeline";

function StepContent({
  step,
}: {
  step: CoreAIWorkflowStep;
}) {
  const Icon = CORE_ICON_MAP[step.iconKey];

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
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 0.3,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export function AIWorkflowVisual({ serviceId }: { serviceId?: CoreServiceId }) {
  const DEFAULT_SERVICE_ID: CoreServiceId = "ai-automation-marketing";
  const resolvedServiceId = serviceId ?? DEFAULT_SERVICE_ID;

  const content = CORE_SERVICES_HOME_CONTENT[resolvedServiceId].aiWorkflow;
  const steps = content.steps;

  const timelineData = steps.map((step) => ({
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
              {content.pill}
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl">
            {content.title.includes(" ") ? (
              <>
                {content.title.split(" ").slice(0, 2).join(" ")}{" "}
                <span className="text-primary">
                  {content.title.split(" ").slice(2).join(" ")}
                </span>
              </>
            ) : (
              content.title
            )}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground/80 sm:text-lg">
            {content.subtitle}
          </p>
        </motion.div>

        {/* Timeline */}
        <Timeline data={timelineData} />
      </div>
    </section>
  );
}

