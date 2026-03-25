import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Globe,
  Smartphone,
  BarChart3,
  Search,
  Code2,
  Wrench,
  TrendingUp,
  TrafficCone,
  FileText,
  Database,
  Phone,
  Mail,
  Tag,
  Calendar,
  CheckCircle,
  Youtube,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

export type CoreServiceId =
  | "ai-automation-marketing"
  | "web-development"
  | "app-development"
  | "digital-marketing";

export type CoreServiceIconKey =
  | "Bot"
  | "Globe"
  | "Smartphone"
  | "BarChart3"
  | "Search"
  | "Code2"
  | "Wrench"
  | "TrendingUp"
  | "TrafficCone"
  | "FileText"
  | "Database"
  | "Phone"
  | "Mail"
  | "Tag"
  | "Calendar"
  | "CheckCircle";

export type CoreSocialIconKey =
  | "Youtube"
  | "Facebook"
  | "Instagram"
  | "Linkedin"
  | "Twitter";

export const CORE_SOCIAL_ICON_MAP: Record<CoreSocialIconKey, LucideIcon> = {
  Youtube,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
};

export type IconMap = Record<CoreServiceIconKey, LucideIcon>;

export const CORE_ICON_MAP: IconMap = {
  Bot,
  Globe,
  Smartphone,
  BarChart3,
  Search,
  Code2,
  Wrench,
  TrendingUp,
  TrafficCone,
  FileText,
  Database,
  Phone,
  Mail,
  Tag,
  Calendar,
  CheckCircle,
};

export type CoreServiceMeta = {
  id: CoreServiceId;
  tabLabel: string;
  title: string;
  description: string;
  href: string;
  image: string;
  iconKey: CoreServiceIconKey;
  accentColor: string;
  buttonBgClass: string;
  pillBgClass: string;
  pillTextClass: string;
};

export const CORE_SERVICES: CoreServiceMeta[] = [
  {
    id: "ai-automation-marketing",
    tabLabel: "AI AUTOMATION",
    title: "AI Marketing & Business Automation",
    description:
      "Always-on systems that capture, qualify, and follow up with leads 24/7—so your team focuses on closing high-intent prospects.",
    href: "/services/ai-automation-marketing",
    image: "/hero1.jpg",
    iconKey: "Bot",
    accentColor: "#7c3aed",
    buttonBgClass: "bg-primary",
    pillBgClass: "bg-primary/15",
    pillTextClass: "text-primary",
  },
  {
    id: "web-development",
    tabLabel: "WEB DEVELOPMENT",
    title: "Web Development",
    description:
      "High-performance websites engineered to turn visitors into leads—fast, conversion-first, and integrated with your CRM and analytics stack.",
    href: "/services/web-development",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=900&fit=crop&q=80",
    iconKey: "Globe",
    accentColor: "#6366f1",
    buttonBgClass: "bg-indigo-500",
    pillBgClass: "bg-indigo-500/15",
    pillTextClass: "text-indigo-200",
  },
  {
    id: "app-development",
    tabLabel: "APP DEVELOPMENT",
    title: "App Development",
    description:
      "Design and build robust mobile + web apps with product-led UX, scalable architecture, and revenue-ready integrations from day one.",
    href: "/services/app-development",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1600&h=900&fit=crop&q=80",
    iconKey: "Smartphone",
    accentColor: "#8b5cf6",
    buttonBgClass: "bg-violet-500",
    pillBgClass: "bg-violet-500/15",
    pillTextClass: "text-violet-200",
  },
  {
    id: "digital-marketing",
    tabLabel: "DIGITAL MARKETING",
    title: "Digital Marketing",
    description:
      "Scale demand with paid media, retargeting, and funnel optimization tuned by daily data—so ad spend stays efficient and outcomes predictable.",
    href: "/services/digital-marketing",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop",
    iconKey: "BarChart3",
    accentColor: "#f59e0b",
    buttonBgClass: "bg-amber-500",
    pillBgClass: "bg-amber-500/15",
    pillTextClass: "text-amber-200",
  },
];

export type CoreHowWeBuildStep = {
  step: number;
  title: string;
  description: string;
  iconKey: CoreServiceIconKey;
  deliverables: readonly string[];
  stat: { value: string; label: string };
  accent: string;
  accentBg: string;
  accentLight: string;
  accentBorder: string;
  color: string;
};

export type CoreHowWeBuildContent = {
  headline: string;
  subHeadline: string;
  steps: CoreHowWeBuildStep[];
};

export type CoreAIWorkflowStep = {
  step: number;
  label: string;
  desc: string;
  iconKey: CoreServiceIconKey;
  phase: string;
  metric: { value: string; label: string };
  progress: number;
  color: string;
};

export type CoreAIWorkflowContent = {
  pill: string;
  title: string;
  subtitle: string;
  steps: CoreAIWorkflowStep[];
};

export type CoreCaseStudiesContent = {
  pill: string;
  headline: string;
  description: string;
  before: { image: string; title: string; rotate: number }[];
  after: {
    images: {
      topLeft: { src: string; alt: string };
      topRight: { src: string; alt: string };
      midLeft: { src: string; alt: string };
      bottomLeft: { src: string; alt: string };
    };
    sliderLogos: { src: string; alt: string }[];
    socialIcons: CoreSocialIconKey[];
  };
};

export type CoreServicesHomeContent = Record<
  CoreServiceId,
  {
    howWeBuild: CoreHowWeBuildContent;
    aiWorkflow: CoreAIWorkflowContent;
    caseStudies: CoreCaseStudiesContent;
  }
>;

const buildHowWeBuildSteps = (
  service: CoreServiceId,
): CoreHowWeBuildStep[] => {
  // Use the same icon set as home `HowWeBuild`, but swap text per service.
  const base = [
    {
      step: 1,
      title: "Strategy & Audit",
      description:
        "We audit your funnel, identify bottlenecks, and map a data-backed action plan tailored to your business goals.",
      iconKey: "Search" as const,
      deliverables: ["Growth audit report", "Opportunity map", "90-day roadmap"],
      stat: { value: "14d", label: "Timeline" },
      accent: "text-primary",
      accentBg: "bg-primary",
      accentLight: "bg-primary/10",
      accentBorder: "border-primary/25",
      color: "#00b4d8",
    },
    {
      step: 2,
      title: "System Architecture",
      description:
        "We architect the right revenue system—CRM flows, automation logic, and the tech stack that keeps everything scalable.",
      iconKey: "Code2" as const,
      deliverables: ["System blueprint", "CRM & automation plan", "Tech stack spec"],
      stat: { value: "48h", label: "Turnaround" },
      accent: "text-indigo-600",
      accentBg: "bg-indigo-500",
      accentLight: "bg-indigo-500/10",
      accentBorder: "border-indigo-400/25",
      color: "#6366f1",
    },
    {
      step: 3,
      title: "Build & Automate",
      description:
        "We build production-ready solutions and deploy integrations so your system starts capturing and converting leads.",
      iconKey: "Wrench" as const,
      deliverables: ["Live systems deployed", "Automations active", "Quality-tested"],
      stat: { value: "4 wks", label: "To launch" },
      accent: "text-violet-600",
      accentBg: "bg-violet-500",
      accentLight: "bg-violet-500/10",
      accentBorder: "border-violet-400/25",
      color: "#8b5cf6",
    },
    {
      step: 4,
      title: "Optimize & Scale",
      description:
        "We continuously optimize performance with A/B testing, funnel tuning, and scaling what works to maximize ROI.",
      iconKey: "TrendingUp" as const,
      deliverables: ["Performance reports", "Scaling playbook", "Ongoing optimization"],
      stat: { value: "3.2x", label: "ROI target" },
      accent: "text-emerald-600",
      accentBg: "bg-emerald-500",
      accentLight: "bg-emerald-500/10",
      accentBorder: "border-emerald-400/25",
      color: "#10b981",
    },
  ] as const;

  if (service === "ai-automation-marketing") {
    return [
      { ...base[0], title: "Lead Capture & Qualification", description: "We align your AI follow-up goals, audit lead sources, and define what qualifies as sales-ready." },
      { ...base[1], title: "AI Workflow Architecture", description: "We design voice/email/CRM automation logic—so lead data is routed to the right next step automatically." },
      { ...base[2], title: "Deploy 24/7 Automations", description: "We build production-ready automations with smart routing and instant qualification for inbound leads." },
      { ...base[3], title: "Optimize for Pipeline Growth", description: "We refine scoring, targeting, and sequences—so conversion improves as traffic scales." },
    ] as CoreHowWeBuildStep[];
  }

  if (service === "web-development") {
    return [
      { ...base[0], title: "Landing Strategy & UX Audit", description: "We audit conversion gaps, analyze content flow, and define a high-intent landing structure for your market." },
      { ...base[1], title: "Performance-first Architecture", description: "We build a scalable website foundation with CRM integration points and measurable conversion events." },
      { ...base[2], title: "Build & Launch Websites", description: "We deliver fast, responsive pages with analytics + CRM-connected forms so visitors become leads." },
      { ...base[3], title: "CRO & Speed Optimization", description: "We optimize Core Web Vitals and conversion funnels with A/B testing to increase booking rates." },
    ] as CoreHowWeBuildStep[];
  }

  if (service === "app-development") {
    return [
      { ...base[0], title: "Product Discovery Sprint", description: "We define requirements, user journeys, and the MVP scope that delivers value quickly." },
      { ...base[1], title: "Scalable App Architecture", description: "We map architecture, integrations, and infrastructure so performance stays strong as usage grows." },
      { ...base[2], title: "Ship Build-ready Features", description: "We implement and deploy the app with quality gates, test automation, and a revenue-ready data model." },
      { ...base[3], title: "Retention & Release Optimization", description: "We refine UX, performance, and release cadence—so your app improves continuously." },
    ] as CoreHowWeBuildStep[];
  }

  return [
    { ...base[0], title: "Campaign Audit & Targeting", description: "We audit media performance, identify audience gaps, and define a measurable acquisition strategy." },
    { ...base[1], title: "Funnel & Measurement Architecture", description: "We set up analytics, attribution, and CRM touchpoints so conversions are trackable end-to-end." },
    { ...base[2], title: "Optimize & Automate Media", description: "We deploy optimization loops and retargeting flows so spend stays efficient and outcomes improve." },
    { ...base[3], title: "Scale ROI with Testing", description: "We expand what works using experimentation, creative tuning, and funnel optimization." },
  ] as CoreHowWeBuildStep[];
};

const buildAIWorkflowSteps = (
  service: CoreServiceId,
): CoreAIWorkflowStep[] => {
  // Keep a consistent 8-step structure for Timeline layout; swap labels/text.
  const common = [
    {
      step: 1,
      iconKey: "TrafficCone" as const,
      color: "#00b4d8",
      phase: "Acquisition",
      metric: { value: "10K+", label: "Monthly visitors" },
      progress: 82,
    },
    {
      step: 2,
      iconKey: "FileText" as const,
      color: "#0891b2",
      phase: "Acquisition",
      metric: { value: "38%", label: "Conversion rate" },
      progress: 68,
    },
    {
      step: 3,
      iconKey: "Database" as const,
      color: "#6366f1",
      phase: "Acquisition",
      metric: { value: "< 2s", label: "Sync time" },
      progress: 95,
    },
    {
      step: 4,
      iconKey: "Phone" as const,
      color: "#7c3aed",
      phase: "Acquisition",
      metric: { value: "< 30s", label: "Response time" },
      progress: 90,
    },
    {
      step: 5,
      iconKey: "Mail" as const,
      color: "#8b5cf6",
      phase: "Conversion",
      metric: { value: "7x", label: "Touch points" },
      progress: 75,
    },
    {
      step: 6,
      iconKey: "Tag" as const,
      color: "#a855f7",
      phase: "Conversion",
      metric: { value: "95%", label: "Accuracy" },
      progress: 95,
    },
    {
      step: 7,
      iconKey: "Calendar" as const,
      color: "#059669",
      phase: "Conversion",
      metric: { value: "24/7", label: "Availability" },
      progress: 100,
    },
    {
      step: 8,
      iconKey: "CheckCircle" as const,
      color: "#10b981",
      phase: "Conversion",
      metric: { value: "3.2x", label: "ROI achieved" },
      progress: 88,
    },
  ];

  const templates: Record<CoreServiceId, { labels: string[]; descs: string[] }> = {
    "ai-automation-marketing": {
      labels: [
        "Traffic Generation",
        "Landing Page Capture",
        "CRM Integration",
        "AI Qualification Call",
        "Follow-up Automation",
        "Hot Lead Scoring",
        "Calendar Booking",
        "Sales Close",
      ],
      descs: [
        "Inbound visitors and targeted campaigns funnel qualified prospects into your automation.",
        "High-converting pages with optimized forms capture lead intent instantly.",
        "Lead data syncs into your CRM so AI can act on accurate information.",
        "AI qualifies leads in seconds and filters out tire-kickers automatically.",
        "Nurture sequences keep follow-ups running across channels until sales-ready.",
        "Lead scoring prioritizes prospects based on behavior and buying signals.",
        "Qualified prospects book directly—reducing friction and boosting conversion.",
        "Pre-qualified appointments convert into paying clients at higher rates.",
      ],
    },
    "web-development": {
      labels: [
        "Visit → Lead System",
        "Landing Capture Setup",
        "CRM & Analytics Sync",
        "Speed-boosted Qualification",
        "Conversion Nurture",
        "CRO-led Lead Scoring",
        "Bookings & Integrations",
        "Revenue Outcomes",
      ],
      descs: [
        "Conversion-first experiences turn traffic into qualified pipeline opportunities.",
        "Optimized pages capture lead details with compelling CTAs and forms.",
        "CRM integration and analytics events connect every submission to reporting.",
        "Fast UX + instant routing improves response times for high-intent users.",
        "Automated messaging nurtures leads with relevant next steps.",
        "CRO-driven scoring ranks leads by engagement and conversion signals.",
        "Booked calls and CRM updates keep sales moving without manual follow-up.",
        "Measured outcomes show higher conversions and predictable pipeline growth.",
      ],
    },
    "app-development": {
      labels: [
        "Product Discovery",
        "MVP Capture Flows",
        "Integration Architecture",
        "AI-assisted Onboarding",
        "Retention Automation",
        "Smart Segmentation",
        "Scheduling & Alerts",
        "Continuous Growth",
      ],
      descs: [
        "We define the user journey so your app captures value quickly from the start.",
        "MVP flows collect requirements and activate users with minimal friction.",
        "Integrations connect your stack so data stays consistent across systems.",
        "AI-assisted onboarding guides users and triggers next actions automatically.",
        "Retention workflows keep users engaged and moving through the product lifecycle.",
        "Segmentation prioritizes the right users based on behavior and engagement.",
        "Scheduling, alerts, and CRM updates streamline communication and next steps.",
        "Optimization loops improve performance and increase long-term value.",
      ],
    },
    "digital-marketing": {
      labels: [
        "Campaign Traffic",
        "Landing Conversion",
        "Measurement & CRM Sync",
        "Instant Lead Response",
        "Retargeting & Nurture",
        "Attribution Scoring",
        "Booking Optimization",
        "ROI Scaling",
      ],
      descs: [
        "Paid media and retargeting generate demand with consistent lead flow.",
        "Conversion-optimized pages and forms capture leads at higher rates.",
        "Analytics and CRM sync enable reliable attribution and routing.",
        "Fast response improves lead pickup and reduces drop-off after campaigns.",
        "Automated sequences nurture leads until they are sales-ready.",
        "Scoring ranks leads based on engagement and channel quality signals.",
        "Booking optimization drives qualified prospects into calendars instantly.",
        "Testing and optimization scale ROI while keeping CPA efficient.",
      ],
    },
  };

  const chosen = templates[service];
  return common.map((s, idx) => ({
    ...s,
    label: chosen.labels[idx] ?? `Step ${s.step}`,
    desc: chosen.descs[idx] ?? "",
  }));
};

const buildCaseStudies = (
  service: CoreServiceId,
): CoreCaseStudiesContent => {
  const beforeByService: Record<CoreServiceId, CoreCaseStudiesContent["before"]> = {
    "ai-automation-marketing": [
      { image: "/images/em.avif", title: "Untracked leads", rotate: -6 },
      { image: "/images/engage.avif", title: "Poor follow-up", rotate: 6 },
      { image: "/images/tasks.avif", title: "Delayed tasks", rotate: -6 },
      { image: "/images/tracking.avif", title: "Manual reporting", rotate: 6 },
    ],
    "web-development": [
      { image: "/images/web/before01.png", title: "No clear attribution", rotate: -6 },
      { image: "/images/web/before02.png", title: "Low conversion pages", rotate: 6 },
      { image: "/images/web/before03.png", title: "Slow load & drop-off", rotate: -6 },
      { image: "/images/web/before04.png", title: "Broken CRM capture", rotate: 6 },
    ],
    "app-development": [
      { image: "/images/app/before01.png", title: "Payment integration issues", rotate: -6 },
      { image: "/images/app/before02.png", title: "Missing performance insights", rotate: 6 },
      { image: "/images/app/before03.png", title: "Unscalable flows", rotate: -6 },
      { image: "/images/app/before.png", title: "Slow release cycle", rotate: 6 },
    ],
    "digital-marketing": [
      { image: "/images/engage.avif", title: "Weak retargeting", rotate: -6 },
      { image: "/images/tasks.avif", title: "High CAC & waste", rotate: 6 },
      { image: "/images/tracking.avif", title: "Lead leakage", rotate: -6 },
      { image: "/images/em.avif", title: "Inefficient campaigns", rotate: 6 },
    ],
  };

  const afterByService: Record<CoreServiceId, CoreCaseStudiesContent["after"]> = {
    "ai-automation-marketing": {
      images: {
        topLeft: { src: "/images/onTrack.avif", alt: "On Track" },
        topRight: { src: "/images/highROI.webp", alt: "High ROI" },
        midLeft: { src: "/images/impEngage.webp", alt: "Improved Engagement" },
        bottomLeft: { src: "/images/lead.avif", alt: "Leads" },
      },
      sliderLogos: [
        { src: "/images/em.avif", alt: "Email" },
        { src: "/images/engage.avif", alt: "Engagement" },
        { src: "/images/tasks.avif", alt: "Tasks" },
        { src: "/images/tracking.avif", alt: "Tracking" },
        { src: "/images/em.avif", alt: "Email duplicate" },
        { src: "/images/engage.avif", alt: "Engagement duplicate" },
        { src: "/images/tasks.avif", alt: "Tasks duplicate" },
        { src: "/images/tracking.avif", alt: "Tracking duplicate" },
      ],
      socialIcons: ["Youtube", "Facebook", "Instagram", "Linkedin", "Twitter"],
    },
    "web-development": {
      images: {
        topLeft: { src: "/images/web/after01.png", alt: "Web after 1" },
        topRight: { src: "/images/web/after02.png", alt: "Web after 2" },
        midLeft: { src: "/images/web/after03.png", alt: "Web after 3" },
        bottomLeft: { src: "/images/web/after04.png", alt: "Web after 4" },
      },
      sliderLogos: [
        { src: "/images/engage.avif", alt: "Engagement" },
        { src: "/images/tasks.avif", alt: "Tasks" },
        { src: "/images/tracking.avif", alt: "Tracking" },
        { src: "/images/em.avif", alt: "Email" },
        { src: "/images/engage.avif", alt: "Engagement duplicate" },
        { src: "/images/tasks.avif", alt: "Tasks duplicate" },
        { src: "/images/tracking.avif", alt: "Tracking duplicate" },
        { src: "/images/em.avif", alt: "Email duplicate" },
      ],
      socialIcons: ["Facebook", "Twitter", "Instagram", "Linkedin", "Youtube"],
    },
    "app-development": {
      images: {
        topLeft: { src: "/images/app/after01.png", alt: "App after 1" },
        topRight: { src: "/images/app/after02.png", alt: "App after 2" },
        midLeft: { src: "/images/app/after03.png", alt: "App after 3" },
        bottomLeft: { src: "/images/app/after04.png", alt: "App after 4" },
      },
      sliderLogos: [
        { src: "/images/tasks.avif", alt: "Tasks" },
        { src: "/images/tracking.avif", alt: "Tracking" },
        { src: "/images/em.avif", alt: "Email" },
        { src: "/images/engage.avif", alt: "Engagement" },
        { src: "/images/tasks.avif", alt: "Tasks duplicate" },
        { src: "/images/tracking.avif", alt: "Tracking duplicate" },
        { src: "/images/em.avif", alt: "Email duplicate" },
        { src: "/images/engage.avif", alt: "Engagement duplicate" },
      ],
      socialIcons: ["Twitter", "Linkedin", "Facebook", "Youtube", "Instagram"],
    },
    "digital-marketing": {
      images: {
        topLeft: { src: "/images/impEngage.webp", alt: "Improved Engagement" },
        topRight: { src: "/images/highROI.webp", alt: "High ROI" },
        midLeft: { src: "/images/lead.avif", alt: "Leads" },
        bottomLeft: { src: "/images/onTrack.avif", alt: "On Track" },
      },
      sliderLogos: [
        { src: "/images/tracking.avif", alt: "Tracking" },
        { src: "/images/em.avif", alt: "Email" },
        { src: "/images/engage.avif", alt: "Engagement" },
        { src: "/images/tasks.avif", alt: "Tasks" },
        { src: "/images/tracking.avif", alt: "Tracking duplicate" },
        { src: "/images/em.avif", alt: "Email duplicate" },
        { src: "/images/engage.avif", alt: "Engagement duplicate" },
        { src: "/images/tasks.avif", alt: "Tasks duplicate" },
      ],
      socialIcons: ["Instagram", "Facebook", "Youtube", "Twitter", "Linkedin"],
    },
  };

  const meta = CORE_SERVICES.find((s) => s.id === service)!;
  return {
    pill: meta.tabLabel,
    headline: "Case Studies",
    description:
      "Our clients don&apos;t just get leads. They get qualified opportunities with clear before and after results.",
    before: beforeByService[service],
    after: afterByService[service],
  };
};

export const CORE_SERVICES_HOME_CONTENT: CoreServicesHomeContent = {
  "ai-automation-marketing": {
    howWeBuild: {
      headline: "How We Build",
      subHeadline: "Growth systems that turn conversations into pipeline — with AI automation at the center.",
      steps: buildHowWeBuildSteps("ai-automation-marketing"),
    },
    aiWorkflow: {
      pill: "AI Pipeline",
      title: "From Traffic to Revenue",
      subtitle: "See how AI automation captures, qualifies, and follows up with leads step by step.",
      steps: buildAIWorkflowSteps("ai-automation-marketing"),
    },
    caseStudies: buildCaseStudies("ai-automation-marketing"),
  },
  "web-development": {
    howWeBuild: {
      headline: "How We Build",
      subHeadline: "Conversion-first web experiences that turn visitors into qualified leads.",
      steps: buildHowWeBuildSteps("web-development"),
    },
    aiWorkflow: {
      pill: "Conversion Workflow",
      title: "From Visit to Lead",
      subtitle: "See how web performance + CRM integration create a seamless lead capture flow.",
      steps: buildAIWorkflowSteps("web-development"),
    },
    caseStudies: buildCaseStudies("web-development"),
  },
  "app-development": {
    howWeBuild: {
      headline: "How We Build",
      subHeadline: "Scalable apps with production-ready architecture and revenue-ready integrations.",
      steps: buildHowWeBuildSteps("app-development"),
    },
    aiWorkflow: {
      pill: "Product Automation",
      title: "From Onboarding to Growth",
      subtitle: "See how app flows and automation increase activation, retention, and revenue outcomes.",
      steps: buildAIWorkflowSteps("app-development"),
    },
    caseStudies: buildCaseStudies("app-development"),
  },
  "digital-marketing": {
    howWeBuild: {
      headline: "How We Build",
      subHeadline: "Measured marketing systems that scale demand and pipeline ROI.",
      steps: buildHowWeBuildSteps("digital-marketing"),
    },
    aiWorkflow: {
      pill: "Performance Pipeline",
      title: "From Campaign to Revenue",
      subtitle: "See how daily optimization and automation keep lead flow predictable.",
      steps: buildAIWorkflowSteps("digital-marketing"),
    },
    caseStudies: buildCaseStudies("digital-marketing"),
  },
};

