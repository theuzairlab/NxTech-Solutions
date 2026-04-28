"use client";

import { motion } from "motion/react";
import {
  Database,
  Phone,
  Target,
  BarChart3,
  Calendar,
  Bell,
  Layout,
  Zap,
  Gauge,
  Smartphone,
  Rocket,
  Layers,
  Megaphone,
  Search,
  RefreshCw,
} from "lucide-react";

export type CoreServiceKey =
  | "ai-automation-marketing"
  | "web-development"
  | "app-development"
  | "digital-marketing";

interface StepItem {
  title: string;
  desc: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface LeadItem {
  label: string;
}

interface CaseStudyConfig {
  beforeTitle: string;
  beforeMetric: string;
  beforeBadge: string;
  afterTitle: string;
  afterMetric: string;
  afterBadge: string;
  summary: string;
}

export interface FlowConfig {
  howTitle: string;
  howSubtitle: string;
  howSteps: StepItem[];
  leadTitle?: string;
  leadSubtitle?: string;
  leadItems?: LeadItem[];
  caseStudy?: CaseStudyConfig;
  onboardingTitle: string;
  onboardingTimelineLabel: string;
  onboardingSteps: StepItem[];
}

export const FLOW_CONFIG: Record<CoreServiceKey, FlowConfig> = {
  "ai-automation-marketing": {
    howTitle: "How It Works",
    howSubtitle:
      "From lead capture to booked calls, your funnel is automated end‑to‑end.",
    howSteps: [
      { title: "Lead Captured", desc: "A lead enters through your form, ad, chat, or inbound source and is logged instantly.", icon: Database },
      { title: "Instant AI Call", desc: "The system starts contact immediately using your response rules and campaign logic.", icon: Phone },
      { title: "Smart Qualification", desc: "Each reply is checked against fit, urgency, budget, and service need.", icon: Target },
      { title: "Lead Scoring", desc: "Scoring adjusts live so your team sees lead quality before the call.", icon: BarChart3 },
      { title: "Calendar Booking", desc: "Best-fit leads move straight to booking without waiting on manual follow-up.", icon: Calendar },
      { title: "Sales Notification", desc: "Your team receives the lead score, notes, and next-step context in real time.", icon: Bell },
    ],
    caseStudy: {
      beforeTitle: "Manual follow-ups",
      beforeMetric: "~5 hrs/week",
      beforeBadge: "Slow",
      afterTitle: "Automated 24/7",
      afterMetric: "180% more qualified leads",
      afterBadge: "+210% bookings",
      summary: "Dental practice automated lead response and increased bookings 210% in 90 days.",
    },
    onboardingTitle: "Onboarding Process",
    onboardingTimelineLabel: "Timeline: 14–21 Days",
    onboardingSteps: [
      { title: "Discovery Call", desc: "Understand your funnel, volumes, and sales motion." },
      { title: "Funnel Mapping", desc: "Map every touchpoint from lead source to booking." },
      { title: "CRM Setup", desc: "Connect and configure HubSpot, Salesforce, or your CRM." },
      { title: "AI Calling Setup", desc: "Train the AI voice with scripts, FAQs, and objection handling." },
      { title: "Workflow Testing", desc: "Test calls, scoring, and routing before going live." },
      { title: "Launch", desc: "Go live with monitoring and alerts in place." },
      { title: "Optimization", desc: "Iterate on scripts and routing based on results." },
    ],
  },
  "web-development": {
    howTitle: "How It Works",
    howSubtitle:
      "From planning to launch, every phase is structured to improve clarity, speed, usability, and long-term conversion performance.",
    howSteps: [
      { title: "Discovery", desc: "Business goals, user intent, and success metrics are defined before design or development begins.", icon: Layout },
      { title: "Planning", desc: "We map the site structure, content flow, and technical scope to match the right build path from day one.", icon: Layout },
      { title: "Wireframing", desc: "Wireframes shape the user journey early so key pages, content blocks, and actions are placed with purpose.", icon: Zap },
      { title: "UI/UX Design", desc: "Design is refined for trust, clarity, and responsiveness, whether the project needs WordPress Development, Ecommerce Development, or Custom Software & Website Development.", icon: BarChart3 },
      { title: "Testing", desc: "We test layout, speed, forms, links, events, and device behaviour to reduce issues before launch.", icon: Gauge },
      { title: "Deployment, Launch & Maintenance", desc: "The site goes live with the right setup, then ongoing updates and improvements keep performance stable as traffic grows.", icon: Gauge },
    ],
    leadTitle: "Lead Identification",
    leadSubtitle:
      "Pages are wired to capture, qualify, and track every lead that lands on your site.",
    leadItems: [
      { label: "High‑intent CTAs" },
      { label: "Forms & multi‑step flows" },
      { label: "CRM & pipeline tagging" },
      { label: "Analytics events & pixels" },
      { label: "Source & campaign tracking" },
      { label: "Conversion heatmaps" },
    ],
    caseStudy: {
      beforeTitle: "Pretty brochure site",
      beforeMetric: "Low demo requests",
      beforeBadge: "Underperforming",
      afterTitle: "Conversion‑engine",
      afterMetric: "+40% more qualified leads",
      afterBadge: "CWV Green",
      summary: "B2B SaaS website redesign improved load times and lifted demo requests by 40%.",
    },
    onboardingTitle: "Development Process",
    onboardingTimelineLabel: "Timeline: 4–6 Weeks",
    onboardingSteps: [
      { title: "Kickoff & Scope", desc: "Define pages, goals, and success metrics." },
      { title: "Wireframes", desc: "Content and layout structure agreed before design." },
      { title: "Design System", desc: "Components, typography, and UI states created." },
      { title: "Build & Integrate", desc: "Frontend, CMS, and CRM connections implemented." },
      { title: "QA & Launch", desc: "Cross‑browser checks, performance tuning, and go‑live." },
    ],
  },
  "app-development": {
    howTitle: "How It Works",
    howSubtitle:
      "From concept to release, every phase is structured to keep scope, speed, quality, and decision-making aligned across product, design, and engineering.",
    howSteps: [
      { title: "Strategy", desc: "We define the product vision, user flows, technical scope, and MVP priorities so the build starts with clarity instead of guesswork.", icon: Smartphone },
      { title: "UX/UI Design", desc: "Wireframes and interface systems are created to improve usability, reduce friction, and shape a consistent product experience across screens.", icon: Rocket },
      { title: "Engineering", desc: "Frontend, backend, APIs, integrations, and admin logic are built in planned sprints with performance and maintainability in mind.", icon: Layers },
      { title: "QA & Validation", desc: "We test critical flows, device behavior, edge cases, and release readiness to catch issues before users ever see them.", icon: Layout },
      { title: "Launch & Deployment", desc: "We handle production release, store submission, tracking setup, and rollout support so launch is controlled, measurable, and stable.", icon: BarChart3 },
      { title: "Support & Growth", desc: "After launch, we improve speed, fix issues, expand features, and guide the roadmap using real product and user data.", icon: BarChart3 },
    ],
    leadTitle: "Lead / User Identification",
    leadSubtitle:
      "Product analytics and events show who’s using what, and where the value is.",
    leadItems: [
      { label: "User onboarding flows" },
      { label: "Feature usage tracking" },
      { label: "Plan & account analytics" },
      { label: "Churn & retention signals" },
      { label: "In‑app feedback loops" },
      { label: "Experiment flags" },
    ],
    caseStudy: {
      beforeTitle: "Unlaunched product",
      beforeMetric: "Roadmap only",
      beforeBadge: "Delayed",
      afterTitle: "Live MVP",
      afterMetric: "First 100+ active users",
      afterBadge: "Shipped",
      summary: "Start‑up went from idea to live MVP with paying users in under 16 weeks.",
    },
    onboardingTitle: "Onboarding Process",
    onboardingTimelineLabel: "Timeline: 8–16 Weeks",
    onboardingSteps: [
      { title: "Discovery & Scope", desc: "Define MVP features, constraints, and tech stack." },
      { title: "Design Sprint", desc: "Flows and UI for key journeys validated with stakeholders." },
      { title: "MVP Build", desc: "Core features implemented with room to iterate." },
      { title: "Beta Launch", desc: "Invite early customers and capture feedback." },
      { title: "Scale‑up Plan", desc: "Prioritize roadmap based on usage and feedback." },
    ],
  },
  "digital-marketing": {
    howTitle: "How It Works",
    howSubtitle:
      "We align research, creative, funnels, and data into one performance loop.",
    howSteps: [
      { title: "Plan", desc: "A plan is created for the marketing campaign to ensure the campaign is correct.", icon: Search },
      { title: "Create", desc: "The marketing campaign is created to ensure it is working correctly.", icon: Layout },
      { title: "Launch", desc: "The marketing campaign is launched to the public to ensure it is working correctly.", icon: Megaphone },
      { title: "Analyze", desc: "The marketing campaign is analyzed to ensure it is working correctly.", icon: RefreshCw },
      { title: "Improve", desc: "The marketing campaign is improved to ensure it is working correctly.", icon: BarChart3 },
      { title: "Scale", desc: "The marketing campaign is scaled to ensure it is working correctly.", icon: BarChart3 },
    ],
    leadTitle: "Lead Identification",
    leadSubtitle:
      "Clear tracking from click to customer so you know which campaigns drive real pipeline.",
    leadItems: [
      { label: "UTM & funnel tracking" },
      { label: "CRM and pixel events" },
      { label: "Channel & offer attribution" },
      { label: "Lead quality scoring" },
      { label: "CPL / CAC dashboards" },
      { label: "Multi‑touch insights" },
    ],
    caseStudy: {
      beforeTitle: "Unprofitable ads",
      beforeMetric: "High CPL",
      beforeBadge: "Wasted spend",
      afterTitle: "Performance engine",
      afterMetric: "ROI‑positive campaigns",
      afterBadge: "Scalable",
      summary: "Service brand turned ad accounts from random testing into a measured, ROI‑driven engine.",
    },
    onboardingTitle: "Launch Process",
    onboardingTimelineLabel: "Timeline: 7–14 Days",
    onboardingSteps: [
      { title: "Audit & Goals", desc: "Audit existing accounts and define growth targets." },
      { title: "Offer & Funnel", desc: "Refine offers and landing experiences to match intent." },
      { title: "Campaign Build", desc: "Create structures, audiences, and creative sets." },
      { title: "Launch & Learn", desc: "Go live with guardrails and early‑phase testing." },
      { title: "Optimize & Scale", desc: "Reinvest into winners and pause underperformers." },
    ],
  },
};

interface RevopsCoreServiceFlowProps {
  service: CoreServiceKey;
}

export function RevopsCoreServiceFlow({ service }: RevopsCoreServiceFlowProps) {
  const cfg = FLOW_CONFIG[service];

  return (
    <>
      {/* Lead Identification */}
      {cfg.leadItems && cfg.leadItems.length > 0 && (
        <section className="py-20 sm:py-24 bg-linear-to-b from-background to-primary/5">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  <span className="bg-linear-to-r from-foreground to-primary bg-clip-text text-transparent">
                    {cfg.leadTitle || "Lead Identification"}
                  </span>
                </h2>
                <p className="text-muted-foreground mb-8 text-sm sm:text-base">
                  {cfg.leadSubtitle}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cfg.leadItems.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 rounded-xl border border-border bg-card px-3 py-3"
                    >
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                        <BarChart3 className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-foreground">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-linear-to-br from-primary/15 via-sky-500/10 to-emerald-400/10 blur-2xl" />
                <div className="relative rounded-3xl border border-primary/15 bg-slate-900/90 px-6 py-6 shadow-2xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-2">
                    Signal Score
                  </p>
                  <p className="text-3xl font-bold text-white mb-4">Lead 92 / 100</p>
                  <p className="text-xs text-white/70 mb-6">
                    When a lead crosses your score threshold, sales gets an instant alert with full context.
                  </p>
                  <div className="flex flex-col gap-2 text-xs text-white/80">
                    <div className="flex items-center justify-between">
                      <span>Engagement</span>
                      <span className="text-emerald-300 font-semibold">High</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Intent Signals</span>
                      <span className="text-emerald-300 font-semibold">Strong</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Fit Score</span>
                      <span className="text-emerald-300 font-semibold">Ideal</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Case Study */}
      {cfg.caseStudy && (
        <section className="py-20 sm:py-24 bg-linear-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-3">
                <span className="bg-linear-to-r from-foreground to-primary bg-clip-text text-transparent">
                  Case Study
                </span>
              </h2>
            </div>
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="border-b border-border/80 bg-muted/30 p-8 md:border-b-0 md:border-r">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-2">
                    Before
                  </p>
                  <p className="text-2xl font-bold text-foreground mb-1">
                    {cfg.caseStudy.beforeTitle}
                  </p>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {cfg.caseStudy.beforeMetric}
                  </p>
                  <span className="inline-flex rounded-full bg-rose-50 px-3 py-1 text-xs font-medium text-rose-600">
                    {cfg.caseStudy.beforeBadge}
                  </span>
                </div>
                <div className="bg-primary/5 p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-2">
                    After
                  </p>
                  <p className="text-2xl font-bold text-primary mb-1">
                    {cfg.caseStudy.afterTitle}
                  </p>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {cfg.caseStudy.afterMetric}
                  </p>
                  <span className="inline-flex rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary">
                    {cfg.caseStudy.afterBadge}
                  </span>
                </div>
              </div>
              <div className="border-t border-border bg-card/60 p-6 text-center text-sm text-muted-foreground">
                {cfg.caseStudy.summary}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Onboarding */}
      <section className="py-20 sm:py-24 bg-linear-to-b from-background to-primary/5">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-center">
            <span className="bg-linear-to-r from-foreground to-primary bg-clip-text text-transparent">
              {cfg.onboardingTitle}
            </span>
          </h2>
          <p className="mb-12 text-center text-sm text-muted-foreground">
            {cfg.onboardingTimelineLabel}
          </p>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 hidden w-0.5 bg-primary/20 sm:block" />
            <div className="space-y-6">
              {cfg.onboardingSteps.map((step, idx) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  className="relative flex gap-6 sm:gap-8"
                >
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    {idx + 1}
                  </div>
                  <div className="flex-1 rounded-2xl border border-border bg-card px-5 py-4">
                    <h4 className="mb-1 text-base font-semibold text-foreground">
                      {step.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

