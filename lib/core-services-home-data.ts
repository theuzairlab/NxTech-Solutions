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
    tabLabel: "AI MARKETING",
    title: "AI Marketing & Business Automation",
    description:
      "Always-on systems powered by AI Chatbot Development, CRM Management, and Leads & Sales Automation—so your team spends less time chasing and more time closing.",
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
      "High-performance websites built with Custom Software & Website Development, WordPress Development, and Ecommerce Development to turn attention into measurable enquiries and sales.",
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
      "Design and build robust products with Android App Development, iOS App Development, and Custom App Development planned for adoption, retention, and growth from day one.",
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
      "Scale demand with SEO, PPC Advertising, Email Marketing, and Content Marketing tuned by real-time data—so spend stays efficient and revenue stays easier to forecast.",
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
  before: { image: string; title: string; rotate: number; problem: string; solution: string }[];
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
      deliverables: ["UX audit report", "User flow map", "Build roadmap"],
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
      deliverables: ["System blueprint", "CRM & analytics plan", "Tech stack spec"],
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
      deliverables: ["Live systems deployed", "Tracking active", "Quality-tested"],
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
      deliverables: ["Performance reports", "CRO playbook", "Ongoing optimization"],
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
      { ...base[0], title: "Lead Capture & Qualification", description: "We review your channels, define sales-ready intent, and map where Leads & Sales Automation should respond first for faster conversion." },
      { ...base[1], title: "AI Workflow Architecture", description: "We design Workflow & Process Automation logic across email, chat, forms, and CRM—so every lead moves to the right next action without delay." },
      { ...base[2], title: "Deploy 24/7 Automations", description: "We deploy live automations, routing rules, and AI Chatbot Development that qualify enquiries instantly and keep response time low." },
      { ...base[3], title: "Optimize for Pipeline Growth", description: "We improve scoring, follow-up, and messaging so pipeline quality rises as traffic grows and your acquisition cost stays healthier." },
    ] as CoreHowWeBuildStep[];
  }

  if (service === "web-development") {
    return [
      { ...base[0], title: "Landing Strategy & UX Audit", description: "We audit friction points, review user flow, and define a higher-intent website structure aligned with your offer, audience, and buying journey." },
      { ...base[1], title: "Performance-first Architecture", description: "We create a scalable foundation with tracking, CRM touchpoints, and search-friendly structure using Custom Software & Website Development where needed." },
      { ...base[2], title: "Build & Launch Websites", description: "We launch fast, responsive pages using WordPress Development or Ecommerce Development so visitors can convert without friction." },
      { ...base[3], title: "CRO & Speed Optimization", description: "We improve Core Web Vitals, tighten page flow, and test conversion elements so more qualified users take action faster." },
    ] as CoreHowWeBuildStep[];
  }

  if (service === "app-development") {
    return [
      { ...base[0], title: "Product Discovery Sprint", description: "We define product goals, user journeys, and the MVP scope that brings your idea to market with less waste and better clarity." },
      { ...base[1], title: "Scalable App Architecture", description: "We map architecture, infrastructure, and integrations so your app stays fast, stable, and easier to extend as demand increases." },
      { ...base[2], title: "Ship Build-ready Features", description: "We build, test, and deploy features through Custom App Development with clean release processes and revenue-ready integrations." },
      { ...base[3], title: "Retention & Release Optimization", description: "We improve UX, speed, and release cadence so the product keeps getting stronger after launch instead of slowing down." },
    ] as CoreHowWeBuildStep[];
  }

  return [
    { ...base[0], title: "Campaign Audit & Targeting", description: "We review current performance, audience quality, and channel waste to define a stronger acquisition plan with clearer goals." },
    { ...base[1], title: "Funnel & Measurement Architecture", description: "We connect attribution, reporting, and CRM touchpoints so every enquiry, click, and booking is easier to measure across channels." },
    { ...base[2], title: "Optimize & Automate Media", description: "We deploy campaigns, retargeting, and automated follow-up through Email Marketing and Social Media Marketing so momentum does not die after the first click." },
    { ...base[3], title: "Scale ROI with Testing", description: "We scale what proves profitable with tighter creative, landing-page testing, and better channel allocation anchored by PPC Advertising and SEO." },
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
        "Intent Traffic",
        "Landing Page Capture",
        "CRM Integration",
        "AI Qualification Layer",
        "Follow-up Automation",
        "Hot Lead Scoring",
        "Calendar Booking",
        "Sales Close",
      ],
      descs: [
        "Paid, organic, referral, and direct traffic feed qualified demand into your automation layer.",
        "Conversion-first pages and forms capture intent clearly and reduce wasted traffic.",
        "Clean sync into CRM Management keeps lead data accurate, usable, and ready for immediate action.",
        "AI qualifies inbound leads in seconds, filters weak fits, and pushes stronger prospects forward automatically.",
        "Automated voice, email, and chat sequences keep follow-up moving until the lead is ready to buy.",
        "Smart scoring ranks prospects by urgency, intent, and engagement so your team knows who to call first.",
        "Qualified leads book directly into calendars through Leads & Sales Automation, reducing delay and manual back-and-forth.",
        "Pre-qualified conversations arrive warmer, faster, and more likely to convert into revenue.",
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
        "Conversion-first pages turn website traffic into real enquiries, forms, and booked intent.",
        "Clear CTAs, strong structure, and persuasive page flow increase lead capture with less friction.",
        "Every form submission connects to reporting and CRM, giving your team cleaner visibility across the funnel.",
        "Faster UX and instant routing help high-intent users move from click to response without delay.",
        "Automated next-step messaging keeps the conversation moving after form submission or enquiry.",
        "Behaviour and engagement signals help rank the leads most likely to convert first.",
        "Booked calls, live sync, and workflow triggers keep sales moving without extra admin work.",
        "Cleaner data and stronger UX make pipeline growth more measurable and easier to scale.",
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
        "User journeys are shaped early so the product starts delivering value faster after launch.",
        "MVP flows are built to reduce friction and move users into key actions faster.",
        "Product, CRM, payment, and notification systems stay connected so data remains consistent.",
        "Smart onboarding guides users clearly and triggers next actions at the right moment.",
        "Lifecycle workflows keep users engaged, informed, and moving deeper into the product.",
        "Segmentation highlights the users most likely to activate, upgrade, or return.",
        "Alerts, reminders, and synced updates keep communication timely and easier to manage.",
        "Release cycles, testing, and product learning keep performance improving after version one.",
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
        "Search, social, and retargeting campaigns generate qualified demand with more control over spend.",
        "Better offers, sharper messaging, and cleaner forms increase conversion across paid traffic.",
        "Attribution and CRM sync make lead source, quality, and follow-up easier to track end to end.",
        "Faster response protects campaign momentum and reduces drop-off after the first click or form fill.",
        "Retargeting and nurture flows keep prospects warm until they are ready to speak or buy.",
        "Channel quality, intent, and engagement signals help prioritize the best revenue opportunities.",
        "Booking improvements reduce friction and move qualified prospects into calendars faster.",
        "Testing, reporting, and funnel refinement scale return while helping keep acquisition cost efficient.",
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
      { image: "/images/em.avif", title: "Untracked leads", rotate: -6, problem: "Leads from ads, forms, calls, and chat were scattered across tools, which made fast follow-up almost impossible.", solution: "We built centralized CRM Management so every lead is captured, tagged, and routed in real time." },
      { image: "/images/engage.avif", title: "Poor follow-up", rotate: 6, problem: "Slow manual outreach meant high-intent leads cooled off before sales had a chance to respond.", solution: "We launched always-on sequences with Leads & Sales Automation to respond, nurture, and move leads forward faster." },
      { image: "/images/tasks.avif", title: "Delayed tasks", rotate: -6, problem: "Sales time was being wasted on repetitive admin instead of live selling and booked conversations.", solution: "We streamlined admin through Workflow & Process Automation, reducing busywork and improving speed across the team." },
      { image: "/images/tracking.avif", title: "Manual reporting", rotate: 6, problem: "Reporting delays made decision-making slower and kept leadership reacting instead of planning ahead.", solution: "We connected data into real-time dashboards so leaders could see performance, lead quality, and bottlenecks without waiting days." },
    ],
    "web-development": [
      { image: "/images/web/before01.png", title: "No clear attribution", rotate: -6, problem: "Traffic was coming in, but the team could not clearly see which pages and channels were bringing the best enquiries.", solution: "We implemented end-to-end tracking, CRM sync, and cleaner event measurement for better reporting and decisions." },
      { image: "/images/web/before02.png", title: "Low conversion pages", rotate: 6, problem: "Weak structure and unclear messaging caused visitors to leave before taking action.", solution: "We rebuilt page flow, tightened calls to action, and improved the UX through Web Development focused on conversion." },
      { image: "/images/web/before03.png", title: "Slow load & drop-off", rotate: -6, problem: "High drop-off rates due to sluggish page load times negatively impacting user experience.", solution: "Re-architected the frontend leveraging a modern stack and edge caching for sub-second load speeds." },
      { image: "/images/web/before04.png", title: "Broken CRM capture", rotate: 6, problem: "Forms were collecting interest, but data was not passing cleanly into the sales system.", solution: "We fixed form logic, field mapping, and integrations so every submission reached the right destination without loss." },
    ],
    "app-development": [
      { image: "/images/app/before01.png", title: "Payment integration issues", rotate: -6, problem: "Payment drop-off was hurting conversion and creating trust issues at a critical stage.", solution: "We implemented stable payment logic through Custom App Development so checkout became smoother and easier to trust." },
      { image: "/images/app/before02.png", title: "Missing performance insights", rotate: 6, problem: "Product decisions were being made without enough user behaviour data or release feedback.", solution: "We connected in-app analytics, event tracking, and retention signals so product decisions could be made with evidence." },
      { image: "/images/app/before03.png", title: "Unscalable flows", rotate: -6, problem: "Growth exposed technical limits, slowing down delivery and harming user experience.", solution: "We rebuilt the stack with Custom Software & Website Development for stronger scale and cleaner performance." },
      { image: "/images/app/before.png", title: "Slow release cycle", rotate: 6, problem: "Small updates were taking too long because the release process was too manual.", solution: "We streamlined testing and release flow so the team could ship improvements faster with less risk." },
    ],
    "digital-marketing": [
      { image: "/images/engage.avif", title: "Weak retargeting", rotate: -6, problem: "Interested users were leaving the funnel without any smart system pulling them back in.", solution: "We launched retargeting across paid and owned channels to recover higher-intent users already familiar with the brand." },
      { image: "/images/tasks.avif", title: "High CAC & waste", rotate: 6, problem: "Weak targeting and broad audience selection were pushing acquisition cost too high.", solution: "We refined channel targeting and campaign structure through PPC Advertising so spend moved toward better-fit users." },
      { image: "/images/tracking.avif", title: "Lead leakage", rotate: -6, problem: "Traffic was arriving, but weak page flow and delayed follow-up were causing leads to drop.", solution: "We improved landing experience and post-click messaging using Content Marketing and tighter conversion logic." },
      { image: "/images/em.avif", title: "Inefficient campaigns", rotate: 6, problem: "The same creative was being shown to different buyer groups, which kept performance average.", solution: "We segmented messaging, tested offers, and improved channel performance across Social Media Marketing, Email Marketing, and paid acquisition." },
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
      "Our clients do not just get more leads. They get faster response time, better qualification, and cleaner pipeline visibility from first contact to close.",
    before: beforeByService[service],
    after: afterByService[service],
  };
};

export const CORE_SERVICES_HOME_CONTENT: CoreServicesHomeContent = {
  "ai-automation-marketing": {
    howWeBuild: {
      headline: "How We Build",
      subHeadline: "Revenue systems that turn attention into pipeline—with automation, qualification, and follow-up working together from day one.",
      steps: buildHowWeBuildSteps("ai-automation-marketing"),
    },
    aiWorkflow: {
      pill: "AI Pipeline",
      title: "From Traffic to Revenue",
      subtitle: "See how AI Automation captures, qualifies, and follows up with leads step by step until they become booked opportunities.",
      steps: buildAIWorkflowSteps("ai-automation-marketing"),
    },
    caseStudies: buildCaseStudies("ai-automation-marketing"),
  },
  "web-development": {
    howWeBuild: {
      headline: "How We Build",
      subHeadline: "Conversion-first websites that turn visits into leads, enquiries, demos, and booked conversations.",
      steps: buildHowWeBuildSteps("web-development"),
    },
    aiWorkflow: {
      pill: "Conversion Workflow",
      title: "From Visit to Lead",
      subtitle: "See how site performance, conversion UX, and CRM sync create a cleaner path from first visit to qualified lead.",
      steps: buildAIWorkflowSteps("web-development"),
    },
    caseStudies: buildCaseStudies("web-development"),
  },
  "app-development": {
    howWeBuild: {
      headline: "How We Build",
      subHeadline: "Scalable apps with stable architecture, strong UX, and launch-ready systems built for real growth.",
      steps: buildHowWeBuildSteps("app-development"),
    },
    aiWorkflow: {
      pill: "Product Automation",
      title: "From Onboarding to Growth",
      subtitle: "See how app UX, automation, and product logic improve activation, retention, and revenue outcomes over time.",
      steps: buildAIWorkflowSteps("app-development"),
    },
    caseStudies: buildCaseStudies("app-development"),
  },
  "digital-marketing": {
    howWeBuild: {
      headline: "How We Build",
      subHeadline: "Measured marketing systems that grow demand, improve conversion quality, and protect return on spend.",
      steps: buildHowWeBuildSteps("digital-marketing"),
    },
    aiWorkflow: {
      pill: "Performance Pipeline",
      title: "From Campaign to Revenue",
      subtitle: "See how daily optimization, reporting, and automation keep lead flow steadier and more profitable.",
      steps: buildAIWorkflowSteps("digital-marketing"),
    },
    caseStudies: buildCaseStudies("digital-marketing"),
  },
};

