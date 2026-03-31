import {
  Bot,
  MessageSquare,
  Database,
  TrendingUp,
  Search,
  Share2,
  MousePointerClick,
  Mail,
  FileText,
  Globe,
  ShoppingCart,
  Code2,
  Smartphone,
  Apple,
  Layers,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface SubServiceFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface SubServiceStat {
  value: string;
  label: string;
}

export interface SubServiceData {
  slug: string;
  parentSlug: string;
  parentLabel: string;
  eyebrow: string;
  title: string;
  highlightLine: string;
  description: string;
  heroImageSrc: string;
  heroImageAlt: string;
  features: SubServiceFeature[];
  outcomes: string[];
  stats: SubServiceStat[];
  ctaHeading: string;
  ctaButton: string;
}

export const SUB_SERVICE_DATA: Record<string, SubServiceData> = {
  // ── AI Marketing ─────────────────────────────────────────────────────────
  "workflow-process-automation": {
    slug: "workflow-process-automation",
    parentSlug: "ai-automation-marketing",
    parentLabel: "AI Marketing",
    eyebrow: "AI Marketing · Workflow Automation",
    title: "Eliminate Repetitive Tasks With",
    highlightLine: "Workflow & Process Automation",
    description:
      "Automate multi-step business workflows across CRM, email, notifications, and internal ops — so your team focuses on high-value work, not busywork.",
    heroImageSrc:
      "https://i.pinimg.com/736x/19/84/80/1984807c45900dadb88c1e43d2816467.jpg",
    heroImageAlt: "Workflow automation dashboard",
    features: [
      {
        icon: Bot,
        title: "Multi-Step Workflow Builder",
        description:
          "Design complex if/then automation flows visually — triggers, conditions, delays, and actions across any tool.",
      },
      {
        icon: Database,
        title: "Cross-Platform Integration",
        description:
          "Connect your CRM, email, Slack, Sheets, billing, and support tools into one unified automated pipeline.",
      },
      {
        icon: TrendingUp,
        title: "Error Detection & Alerts",
        description:
          "Automatic monitoring catches failed steps and alerts your team in real-time before a lead or task slips through.",
      },
      {
        icon: MessageSquare,
        title: "Approval & Notification Flows",
        description:
          "Automate internal approvals, handoff notifications, and status updates so nothing blocks your pipeline.",
      },
      {
        icon: FileText,
        title: "Document & Report Automation",
        description:
          "Auto-generate proposals, reports, and invoices from templates — triggered by deals, form fills, or schedules.",
      },
      {
        icon: Layers,
        title: "Ongoing Optimization",
        description:
          "We monitor workflow performance and iterate — improving throughput and fixing edge cases as your business scales.",
      },
    ],
    outcomes: [
      "Cut manual task time by up to 80%",
      "Zero leads or tasks fall through the cracks",
      "Faster deal cycles with automated handoffs",
      "Consistent process execution at any scale",
      "Real-time visibility into every workflow",
    ],
    stats: [
      { value: "80%", label: "Time Saved" },
      { value: "24/7", label: "Running" },
      { value: "2 Wks", label: "To Deploy" },
    ],
    ctaHeading: "Ready to Stop Doing Work a Machine Can Do?",
    ctaButton: "Book a Workflow Audit",
  },

  "ai-chatbot-development": {
    slug: "ai-chatbot-development",
    parentSlug: "ai-automation-marketing",
    parentLabel: "AI Marketing",
    eyebrow: "AI Marketing · Chatbot Development",
    title: "Convert Visitors Into Leads With",
    highlightLine: "AI Chatbot Development",
    description:
      "Deploy intelligent AI chatbots that answer questions, qualify leads, and book appointments automatically — on your website, WhatsApp, or any channel.",
    heroImageSrc:
      "https://i.pinimg.com/736x/e2/8c/20/e28c2018de95d120a8abce86262e8dab.jpg",
    heroImageAlt: "AI chatbot interface",
    features: [
      {
        icon: MessageSquare,
        title: "Custom Conversation Flows",
        description:
          "Scripted + AI-powered conversations tailored to your offer, tone, and qualification criteria.",
      },
      {
        icon: Bot,
        title: "Lead Qualification Engine",
        description:
          "Chatbot asks the right questions, scores intent, and routes hot leads directly to your sales team or calendar.",
      },
      {
        icon: Globe,
        title: "Multi-Channel Deployment",
        description:
          "Deploy on your website, WhatsApp, Facebook Messenger, and Instagram from a single bot configuration.",
      },
      {
        icon: Database,
        title: "CRM & Calendar Integration",
        description:
          "Captured leads sync instantly to your CRM and qualified prospects get booked straight to your calendar.",
      },
      {
        icon: TrendingUp,
        title: "Analytics & Improvement",
        description:
          "Track conversation completion rates, drop-offs, and lead quality — iterate to improve over time.",
      },
      {
        icon: Layers,
        title: "Handoff to Human Agent",
        description:
          "Intelligent escalation to a live agent when complex questions arise — with full context passed through.",
      },
    ],
    outcomes: [
      "24/7 lead capture without extra headcount",
      "40%+ increase in qualified bookings",
      "Faster response than any human team",
      "Consistent brand voice across all conversations",
      "Instant CRM sync for every captured lead",
    ],
    stats: [
      { value: "24/7", label: "Active" },
      { value: "40%+", label: "More Bookings" },
      { value: "< 2s", label: "Response Time" },
    ],
    ctaHeading: "Ready for a Chatbot That Actually Books Meetings?",
    ctaButton: "Book a Demo",
  },

  "automated-crm-management": {
    slug: "automated-crm-management",
    parentSlug: "ai-automation-marketing",
    parentLabel: "AI Marketing",
    eyebrow: "AI Marketing · CRM Automation",
    title: "Keep Your Pipeline Clean With",
    highlightLine: "Automated CRM Management",
    description:
      "Eliminate manual data entry and keep your CRM accurate, up-to-date, and actionable — automatically. From lead capture to deal close, every step is tracked.",
    heroImageSrc:
      "https://i.pinimg.com/1200x/d6/01/e3/d601e39071ecc38c2fb782dc1d73929a.jpg",
    heroImageAlt: "CRM dashboard",
    features: [
      {
        icon: Database,
        title: "Auto Lead Creation & Enrichment",
        description:
          "New leads from any source are auto-created in your CRM with enriched data — company, role, LinkedIn, and more.",
      },
      {
        icon: TrendingUp,
        title: "Pipeline Stage Automation",
        description:
          "Deals move automatically through pipeline stages based on email opens, calls, meetings, and activity signals.",
      },
      {
        icon: Bot,
        title: "AI-Powered Follow-Up Sequences",
        description:
          "Automated follow-up emails and tasks fire based on deal age, no-contact windows, and prospect behavior.",
      },
      {
        icon: MessageSquare,
        title: "Task & Reminder Automation",
        description:
          "Reps get automatic task reminders for calls, proposals, and check-ins — no deal goes cold from neglect.",
      },
      {
        icon: FileText,
        title: "Reporting & Forecasting",
        description:
          "Automated weekly pipeline reports and revenue forecasts delivered to your inbox without manual exports.",
      },
      {
        icon: Layers,
        title: "Multi-Tool CRM Sync",
        description:
          "Keep HubSpot, Salesforce, Pipedrive, or any CRM in sync with your email, calendar, and billing systems.",
      },
    ],
    outcomes: [
      "Zero manual data entry for your sales team",
      "Full pipeline visibility at all times",
      "Faster follow-up and shorter deal cycles",
      "Accurate revenue forecasting",
      "Reps spend time selling, not admin",
    ],
    stats: [
      { value: "95%", label: "Data Accuracy" },
      { value: "3×", label: "Faster Follow-Up" },
      { value: "14 Days", label: "Implementation" },
    ],
    ctaHeading: "Ready for a CRM That Runs Itself?",
    ctaButton: "Get CRM Automation Demo",
  },

  "leads-sales-automation": {
    slug: "leads-sales-automation",
    parentSlug: "ai-automation-marketing",
    parentLabel: "AI Marketing",
    eyebrow: "AI Marketing · Sales Automation",
    title: "Turn Cold Leads Into Booked Meetings With",
    highlightLine: "Leads & Sales Automation",
    description:
      "AI-driven systems that instantly contact new leads, qualify them through conversations, score their intent, and book meetings — all without a human needing to lift a finger.",
    heroImageSrc:
      "https://i.pinimg.com/1200x/c5/93/99/c59399c94e777710163f3ed0695d858d.jpg",
    heroImageAlt: "Sales automation pipeline",
    features: [
      {
        icon: Bot,
        title: "Instant AI Lead Response",
        description:
          "AI contacts new leads within seconds via call, SMS, or email — before your competitors even see the form.",
      },
      {
        icon: TrendingUp,
        title: "Intent-Based Lead Scoring",
        description:
          "Behavior, budget signals, call duration, and engagement are scored automatically to rank your hottest leads.",
      },
      {
        icon: MessageSquare,
        title: "Qualification Conversation Flows",
        description:
          "Custom scripts qualify leads using your ICP, pricing, and offer — routing only the right ones to your team.",
      },
      {
        icon: Database,
        title: "Auto Calendar Booking",
        description:
          "Qualified leads are sent directly to your sales rep's calendar with confirmation emails and reminders.",
      },
      {
        icon: FileText,
        title: "Re-Engagement Campaigns",
        description:
          "Dormant leads are automatically re-engaged at the right time with personalized follow-up sequences.",
      },
      {
        icon: Layers,
        title: "Sales Performance Dashboard",
        description:
          "Real-time view of lead flow, response rates, booking rates, and revenue attribution across all channels.",
      },
    ],
    outcomes: [
      "Response time reduced from hours to seconds",
      "2–3× more meetings booked per lead volume",
      "Reps only talk to pre-qualified prospects",
      "No lead ever goes uncontacted",
      "Full ROI tracking from lead source to close",
    ],
    stats: [
      { value: "< 60s", label: "Response Time" },
      { value: "180%", label: "More Meetings" },
      { value: "14 Days", label: "To Go Live" },
    ],
    ctaHeading: "Ready to Fill Your Calendar With Qualified Leads?",
    ctaButton: "Book a Strategy Call",
  },

  // ── Digital Marketing ─────────────────────────────────────────────────────
  seo: {
    slug: "seo",
    parentSlug: "digital-marketing",
    parentLabel: "Digital Marketing",
    eyebrow: "Digital Marketing · SEO",
    title: "Rank Higher and Drive Revenue With",
    highlightLine: "Search Engine Optimization",
    description:
      "Data-driven SEO that builds long-term organic traffic — from technical audits and on-page optimization to link building and content strategy.",
    heroImageSrc:
      "https://i.pinimg.com/736x/4d/0c/82/4d0c82eb021115981eae3d879eb6c154.jpg",
    heroImageAlt: "SEO analytics dashboard",
    features: [
      {
        icon: Search,
        title: "Technical SEO Audit",
        description:
          "Full crawl of site speed, Core Web Vitals, schema markup, indexability, and mobile-friendliness.",
      },
      {
        icon: FileText,
        title: "Keyword & Intent Research",
        description:
          "Map high-value keywords to buyer intent stages — awareness, consideration, and conversion.",
      },
      {
        icon: Globe,
        title: "On-Page Optimization",
        description:
          "Title tags, meta descriptions, headers, content structure, and internal linking optimized for rank.",
      },
      {
        icon: TrendingUp,
        title: "Link Building",
        description:
          "High-quality backlink acquisition through outreach, digital PR, and strategic partnerships.",
      },
      {
        icon: BarChart3,
        title: "Content Strategy",
        description:
          "Topic cluster planning, blog production, and landing page optimization aligned to search demand.",
      },
      {
        icon: Layers,
        title: "Monthly Reporting",
        description:
          "Clear rank tracking, traffic analytics, and ROI attribution delivered every month.",
      },
    ],
    outcomes: [
      "First-page rankings for target keywords",
      "Consistent organic traffic growth month over month",
      "Lower cost-per-acquisition vs paid ads",
      "Increased domain authority and brand trust",
      "More qualified leads from search",
    ],
    stats: [
      { value: "3–6", label: "Months to Results" },
      { value: "200%+", label: "Organic Growth" },
      { value: "60+", label: "DA Clients" },
    ],
    ctaHeading: "Ready to Own Page 1 for Your Best Keywords?",
    ctaButton: "Get Free SEO Audit",
  },

  smm: {
    slug: "smm",
    parentSlug: "digital-marketing",
    parentLabel: "Digital Marketing",
    eyebrow: "Digital Marketing · Social Media",
    title: "Build a Brand Audience With",
    highlightLine: "Social Media Marketing",
    description:
      "Strategic social media management and content creation that grows your audience, builds trust, and drives consistent engagement across every platform.",
    heroImageSrc:
      "https://i.pinimg.com/1200x/03/75/e5/0375e52f2d1e9df339ed8cfbb981ccff.jpg",
    heroImageAlt: "Social media content strategy",
    features: [
      {
        icon: Share2,
        title: "Platform Strategy",
        description:
          "Custom strategy for Instagram, LinkedIn, TikTok, X, and Facebook based on your audience and goals.",
      },
      {
        icon: FileText,
        title: "Content Creation",
        description:
          "Scroll-stopping graphics, captions, reels, and carousels planned, designed, and scheduled for you.",
      },
      {
        icon: TrendingUp,
        title: "Community Management",
        description:
          "Daily engagement — responding to comments, DMs, and mentions to build a loyal, active community.",
      },
      {
        icon: Search,
        title: "Hashtag & Trend Research",
        description:
          "Data-backed hashtag selection and trend-jacking to maximize organic reach on each post.",
      },
      {
        icon: Bot,
        title: "Influencer Collaboration",
        description:
          "Identify and coordinate with micro and macro influencers that align with your brand and budget.",
      },
      {
        icon: Layers,
        title: "Performance Analytics",
        description:
          "Monthly reports on reach, engagement, follower growth, and content performance with actionable insights.",
      },
    ],
    outcomes: [
      "Consistent posting schedule across all platforms",
      "Growing follower count and engagement rate",
      "Stronger brand recognition and trust",
      "More inbound leads from social channels",
      "Content that educates, entertains, and converts",
    ],
    stats: [
      { value: "10×", label: "Engagement Boost" },
      { value: "30+", label: "Posts/Month" },
      { value: "All", label: "Major Platforms" },
    ],
    ctaHeading: "Ready to Build a Social Presence That Converts?",
    ctaButton: "Get Social Media Strategy",
  },

  ppc: {
    slug: "ppc",
    parentSlug: "digital-marketing",
    parentLabel: "Digital Marketing",
    eyebrow: "Digital Marketing · PPC",
    title: "Get Immediate Revenue With",
    highlightLine: "Pay-Per-Click Advertising",
    description:
      "ROI-focused Google, Meta, and LinkedIn ad campaigns that drive qualified clicks, optimize CPL, and scale what's working — fast.",
    heroImageSrc:
      "https://i.pinimg.com/1200x/35/9c/d9/359cd90148c2062143bbac564fbd9945.jpg",
    heroImageAlt: "PPC advertising dashboard",
    features: [
      {
        icon: MousePointerClick,
        title: "Google Search & Display Ads",
        description:
          "Intent-driven search campaigns and visual display ads optimized for your target keywords and audience.",
      },
      {
        icon: TrendingUp,
        title: "Meta (Facebook & Instagram) Ads",
        description:
          "Audience targeting, creative testing, and funnel-matched campaigns to drive leads and purchases.",
      },
      {
        icon: Search,
        title: "Keyword & Audience Research",
        description:
          "Deep research into high-intent keywords, negative keywords, and audience segments to maximize ROI.",
      },
      {
        icon: FileText,
        title: "Ad Creative & Copywriting",
        description:
          "High-converting ad copy and visuals written and designed to match your offer and target persona.",
      },
      {
        icon: Database,
        title: "Conversion Tracking Setup",
        description:
          "Full pixel, GA4, and CRM tracking so every click, lead, and sale is attributed accurately.",
      },
      {
        icon: Layers,
        title: "Ongoing Split Testing & Scaling",
        description:
          "Continuous A/B testing of audiences, creatives, and landing pages — scaling budget into winners.",
      },
    ],
    outcomes: [
      "Immediate traffic from day one",
      "Lower CPL through continuous optimization",
      "Clear ROAS tracking across all channels",
      "More quality leads for the same budget",
      "Scalable campaigns that grow with you",
    ],
    stats: [
      { value: "4×", label: "Average ROAS" },
      { value: "-40%", label: "CPL Reduction" },
      { value: "7 Days", label: "Campaign Launch" },
    ],
    ctaHeading: "Ready to Turn Ad Spend Into Predictable Revenue?",
    ctaButton: "Get Free PPC Audit",
  },

  "email-marketing": {
    slug: "email-marketing",
    parentSlug: "digital-marketing",
    parentLabel: "Digital Marketing",
    eyebrow: "Digital Marketing · Email",
    title: "Nurture Leads Into Customers With",
    highlightLine: "Email Marketing",
    description:
      "Strategic email campaigns, sequences, and automation that keep your brand top-of-mind and convert subscribers into paying clients.",
    heroImageSrc:
      "https://i.pinimg.com/1200x/50/ce/95/50ce95cdcc26caf8b66c01411f3e47fa.jpg",
    heroImageAlt: "Email marketing campaign",
    features: [
      {
        icon: Mail,
        title: "Welcome & Onboarding Sequences",
        description:
          "Automated email sequences that educate, build trust, and move new subscribers toward their first purchase.",
      },
      {
        icon: Bot,
        title: "Behavioral Trigger Emails",
        description:
          "Emails that fire based on user behavior — page visits, downloads, cart abandonment, or inactivity.",
      },
      {
        icon: FileText,
        title: "Newsletter & Campaign Management",
        description:
          "Monthly or weekly branded newsletters and promotional campaigns that drive clicks and revenue.",
      },
      {
        icon: TrendingUp,
        title: "List Segmentation & Personalization",
        description:
          "Segment your list by behavior, industry, stage, or source — and send hyper-relevant messages to each group.",
      },
      {
        icon: Database,
        title: "List Health & Deliverability",
        description:
          "Regular list cleaning, domain warm-up, and deliverability monitoring to keep your emails out of spam.",
      },
      {
        icon: Layers,
        title: "A/B Testing & Optimization",
        description:
          "Subject line, send time, CTA, and content testing to continuously improve open and click rates.",
      },
    ],
    outcomes: [
      "Higher open rates and click-through rates",
      "Automated sequence that nurtures on autopilot",
      "More revenue from your existing email list",
      "Better list health and inbox placement",
      "Consistent communication without extra effort",
    ],
    stats: [
      { value: "42×", label: "ROI Potential" },
      { value: "35%+", label: "Open Rates" },
      { value: "1 Wk", label: "Launch Time" },
    ],
    ctaHeading: "Ready to Make Your Email List a Revenue Machine?",
    ctaButton: "Get Email Marketing Plan",
  },

  "content-marketing": {
    slug: "content-marketing",
    parentSlug: "digital-marketing",
    parentLabel: "Digital Marketing",
    eyebrow: "Digital Marketing · Content",
    title: "Attract & Convert With",
    highlightLine: "Content Marketing",
    description:
      "Strategic content that builds authority, drives organic traffic, and educates your audience — ultimately turning readers into leads and clients.",
    heroImageSrc:
      "https://i.pinimg.com/736x/7f/c4/26/7fc426ab864baa0c5e5a73c5e4e17376.jpg",
    heroImageAlt: "Content marketing strategy",
    features: [
      {
        icon: FileText,
        title: "Content Strategy & Planning",
        description:
          "Keyword-driven content calendars built around your audience's pain points and decision journey.",
      },
      {
        icon: Search,
        title: "SEO Blog Writing",
        description:
          "Long-form, well-researched articles optimized for search intent and designed to rank and convert.",
      },
      {
        icon: Globe,
        title: "Pillar Pages & Topic Clusters",
        description:
          "Authority content hubs that dominate entire topic areas and signal expertise to search engines.",
      },
      {
        icon: TrendingUp,
        title: "Lead Magnet Creation",
        description:
          "E-books, guides, checklists, and templates that capture emails and nurture prospects.",
      },
      {
        icon: Share2,
        title: "Content Distribution",
        description:
          "Repurpose and distribute content across social, email, and partner channels for maximum reach.",
      },
      {
        icon: Layers,
        title: "Performance Tracking",
        description:
          "Monthly reports on traffic, time-on-page, leads generated, and content ROI.",
      },
    ],
    outcomes: [
      "Sustainable organic traffic growth",
      "Position as a thought leader in your industry",
      "More inbound leads from content",
      "Lower cost per acquisition vs paid ads",
      "Content that works for you 24/7",
    ],
    stats: [
      { value: "3×", label: "More Leads" },
      { value: "6 Mo", label: "To Scale" },
      { value: "4–8", label: "Posts/Month" },
    ],
    ctaHeading: "Ready to Build Content That Ranks and Converts?",
    ctaButton: "Get Content Strategy",
  },

  // ── Web Development ───────────────────────────────────────────────────────
  "wordpress-development": {
    slug: "wordpress-development",
    parentSlug: "web-development",
    parentLabel: "Web Development",
    eyebrow: "Web Development · WordPress",
    title: "Professional Sites Built on",
    highlightLine: "WordPress Development",
    description:
      "Fast, secure, and fully custom WordPress websites designed to convert visitors — with CMSs your team can actually use without developer help.",
    heroImageSrc:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&h=675&fit=crop",
    heroImageAlt: "WordPress website development",
    features: [
      {
        icon: Globe,
        title: "Custom Theme Development",
        description:
          "Pixel-perfect custom themes built from scratch — no bloated page builders, no template limitations.",
      },
      {
        icon: Code2,
        title: "Plugin Development & Integration",
        description:
          "Custom plugins for any functionality plus integration with your CRM, payment gateway, and tools.",
      },
      {
        icon: TrendingUp,
        title: "SEO-Optimized Architecture",
        description:
          "Clean semantic markup, schema, fast load times, and proper heading structure baked in from the start.",
      },
      {
        icon: Smartphone,
        title: "Responsive & Mobile-First",
        description:
          "Every site looks and performs perfectly on phones, tablets, and desktops.",
      },
      {
        icon: Database,
        title: "CMS & Training",
        description:
          "You get full control to edit pages, add posts, and manage content without touching any code.",
      },
      {
        icon: Layers,
        title: "Security & Maintenance",
        description:
          "SSL, firewall, backups, updates, and uptime monitoring — so your site stays fast and safe.",
      },
    ],
    outcomes: [
      "A website your team can manage independently",
      "Fast load times and top Core Web Vitals scores",
      "SEO-ready from day one",
      "Secure, backed-up, and maintained",
      "Scalable to grow with your business",
    ],
    stats: [
      { value: "3–5", label: "Weeks to Launch" },
      { value: "100", label: "PageSpeed Score" },
      { value: "SSL", label: "Secured" },
    ],
    ctaHeading: "Ready for a WordPress Site That Actually Performs?",
    ctaButton: "Get Free Consultation",
  },

  "ecommerce-website-development": {
    slug: "ecommerce-website-development",
    parentSlug: "web-development",
    parentLabel: "Web Development",
    eyebrow: "Web Development · E-commerce",
    title: "Sell More Online With",
    highlightLine: "E-commerce Website Development",
    description:
      "High-converting online stores built on WooCommerce, Shopify, or custom stacks — with fast checkout, smart product discovery, and full payment integration.",
    heroImageSrc:
      "https://i.pinimg.com/736x/3b/f1/6a/3bf16a32dd08d61a7c485118baa1f4ca.jpg",
    heroImageAlt: "E-commerce store development",
    features: [
      {
        icon: ShoppingCart,
        title: "Store Architecture & UX Design",
        description:
          "Product navigation, category pages, filters, and checkout flows optimized for maximum conversion.",
      },
      {
        icon: Code2,
        title: "Payment Gateway Integration",
        description:
          "Stripe, PayPal, Razorpay, or local gateways — configured with secure checkout and auto-receipts.",
      },
      {
        icon: Database,
        title: "Inventory & Order Management",
        description:
          "Real-time inventory tracking, order management dashboard, and automated fulfillment notifications.",
      },
      {
        icon: TrendingUp,
        title: "Conversion Rate Optimization",
        description:
          "Upsell/cross-sell widgets, abandoned cart recovery, reviews, and trust signals built in.",
      },
      {
        icon: Search,
        title: "SEO & Product Schema",
        description:
          "Rich product schema, fast load times, and SEO-optimized product pages to rank in Google Shopping.",
      },
      {
        icon: Smartphone,
        title: "Mobile Shopping Experience",
        description:
          "Fast, thumb-friendly mobile UX that converts — with one-tap checkout and mobile payment support.",
      },
    ],
    outcomes: [
      "Higher conversion rate and average order value",
      "Smooth checkout with minimal abandonment",
      "Full inventory and order visibility",
      "Ranking product pages in search",
      "Scalable store that handles traffic spikes",
    ],
    stats: [
      { value: "4–8", label: "Weeks to Launch" },
      { value: "+35%", label: "CVR Increase" },
      { value: "Multi", label: "Payment Options" },
    ],
    ctaHeading: "Ready to Build a Store That Sells While You Sleep?",
    ctaButton: "Get E-commerce Consultation",
  },

  "custom-website-development": {
    slug: "custom-website-development",
    parentSlug: "web-development",
    parentLabel: "Web Development",
    eyebrow: "Web Development · Custom",
    title: "Unlimited Possibilities With",
    highlightLine: "Custom Website Development",
    description:
      "Fully bespoke web experiences built from scratch with Next.js, React, or your preferred stack — when templates and themes simply can't do what you need.",
    heroImageSrc:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&h=675&fit=crop",
    heroImageAlt: "Custom web development",
    features: [
      {
        icon: Code2,
        title: "Bespoke Frontend Development",
        description:
          "Custom-built React / Next.js frontends with pixel-perfect design implementation and smooth animations.",
      },
      {
        icon: Database,
        title: "API & Backend Integration",
        description:
          "REST APIs, GraphQL, and third-party integrations — Stripe, Auth, CRM, and anything else you need.",
      },
      {
        icon: TrendingUp,
        title: "Performance Engineering",
        description:
          "SSR, ISR, edge caching, and CDN configuration for sub-second load times globally.",
      },
      {
        icon: Globe,
        title: "CMS Integration",
        description:
          "Headless CMS (Sanity, Contentful, Strapi) setup so your team can manage content without dev help.",
      },
      {
        icon: Layers,
        title: "Scalable Architecture",
        description:
          "Built to handle growth — modular codebase, CI/CD pipelines, and cloud-native deployment.",
      },
      {
        icon: Smartphone,
        title: "Accessibility & QA",
        description:
          "WCAG compliance, cross-browser testing, and device QA before every launch.",
      },
    ],
    outcomes: [
      "Exactly what you envisioned — not a compromise",
      "Performance scores in the top percentile",
      "Fully maintainable and extendable codebase",
      "No vendor lock-in or template constraints",
      "Seamless integrations with any tool",
    ],
    stats: [
      { value: "6–12", label: "Weeks Build" },
      { value: "100%", label: "Custom Code" },
      { value: "99.9%", label: "Uptime SLA" },
    ],
    ctaHeading: "Ready to Build Your Dream Website From Scratch?",
    ctaButton: "Start Custom Project",
  },

  // ── App Development ───────────────────────────────────────────────────────
  "android-app-development": {
    slug: "android-app-development",
    parentSlug: "app-development",
    parentLabel: "App Development",
    eyebrow: "App Development · Android",
    title: "Reach 3 Billion Users With",
    highlightLine: "Android App Development",
    description:
      "Native and cross-platform Android applications built for performance, scalability, and a seamless Google Play Store launch.",
    heroImageSrc:
      "https://i.pinimg.com/736x/7b/e0/3d/7be03d03e4c567ed9cff6c702e08a2c5.jpg",
    heroImageAlt: "Android app development",
    features: [
      {
        icon: Smartphone,
        title: "Native & React Native Development",
        description:
          "Native Kotlin/Java or cross-platform React Native — whichever fits your timeline and budget best.",
      },
      {
        icon: Code2,
        title: "Custom UI/UX Design",
        description:
          "Material Design-compliant, pixel-perfect interfaces that feel native and delight users.",
      },
      {
        icon: Database,
        title: "Backend & API Integration",
        description:
          "Full backend setup with Node.js, Firebase, or your existing API — with real-time data sync.",
      },
      {
        icon: TrendingUp,
        title: "Google Play Store Launch",
        description:
          "Complete ASO, store listing optimization, and launch support for maximum visibility and downloads.",
      },
      {
        icon: Bot,
        title: "Push Notifications & Analytics",
        description:
          "Automated push notifications, in-app events, and analytics to track user behavior and retention.",
      },
      {
        icon: Layers,
        title: "Ongoing Maintenance & Updates",
        description:
          "Post-launch bug fixes, OS compatibility updates, and feature iterations as your user base grows.",
      },
    ],
    outcomes: [
      "Smooth, crash-free app on all Android devices",
      "Published on Google Play with optimized listing",
      "Fast load times and offline capability",
      "High user retention and engagement",
      "Scalable to millions of users",
    ],
    stats: [
      { value: "8–14", label: "Weeks to Launch" },
      { value: "3B+", label: "Android Users" },
      { value: "99%", label: "Crash-Free" },
    ],
    ctaHeading: "Ready to Ship Your Android App?",
    ctaButton: "Get App Development Estimate",
  },

  "ios-app-development": {
    slug: "ios-app-development",
    parentSlug: "app-development",
    parentLabel: "App Development",
    eyebrow: "App Development · iOS",
    title: "Launch on Apple With",
    highlightLine: "iOS App Development",
    description:
      "Premium iOS applications for iPhone and iPad — built with Swift or React Native, designed for App Store approval, and engineered for Apple's high standards.",
    heroImageSrc:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900&h=675&fit=crop",
    heroImageAlt: "iOS app development",
    features: [
      {
        icon: Apple,
        title: "Swift & React Native Development",
        description:
          "Native Swift for maximum performance or React Native for cross-platform efficiency — you choose.",
      },
      {
        icon: Code2,
        title: "Human Interface Guidelines Design",
        description:
          "Interfaces built to Apple's HIG standards — intuitive, beautiful, and ready for App Store review.",
      },
      {
        icon: Database,
        title: "iCloud & API Integration",
        description:
          "iCloud sync, Sign in with Apple, Keychain, and any third-party API your app needs.",
      },
      {
        icon: TrendingUp,
        title: "App Store Launch & ASO",
        description:
          "Optimized App Store listing, screenshots, preview video, and keyword strategy for max discoverability.",
      },
      {
        icon: Bot,
        title: "Push Notifications & In-App Purchases",
        description:
          "APNs push notifications, StoreKit in-app purchases, and subscription billing configured correctly.",
      },
      {
        icon: Layers,
        title: "TestFlight QA & Ongoing Updates",
        description:
          "Rigorous TestFlight testing before launch, plus post-launch updates for every new iOS version.",
      },
    ],
    outcomes: [
      "App Store approved first time",
      "Premium feel that matches Apple's quality bar",
      "Fast, fluid performance on all iOS devices",
      "High ratings and positive reviews",
      "Monetization-ready from day one",
    ],
    stats: [
      { value: "8–14", label: "Weeks to Launch" },
      { value: "1B+", label: "iPhone Users" },
      { value: "4.8★", label: "Avg App Rating" },
    ],
    ctaHeading: "Ready to Launch Your iOS App?",
    ctaButton: "Get iOS Project Estimate",
  },

  "custom-app-development": {
    slug: "custom-app-development",
    parentSlug: "app-development",
    parentLabel: "App Development",
    eyebrow: "App Development · Custom",
    title: "Build Exactly What You Need With",
    highlightLine: "Custom App Development",
    description:
      "End-to-end custom application development — web apps, SaaS platforms, dashboards, and internal tools built precisely to your specification.",
    heroImageSrc:
      "https://i.pinimg.com/736x/74/c5/a7/74c5a7396b6b09e8d0e7514ed6a824d0.jpg",
    heroImageAlt: "Custom application development",
    features: [
      {
        icon: Code2,
        title: "SaaS & Web Application Builds",
        description:
          "Full-stack SaaS platforms with user auth, billing, dashboards, and multi-tenant architecture.",
      },
      {
        icon: Layers,
        title: "Internal Tools & Dashboards",
        description:
          "Custom admin panels, reporting dashboards, and internal ops tools tailored to your workflows.",
      },
      {
        icon: Database,
        title: "Database & Backend Architecture",
        description:
          "Scalable databases, REST/GraphQL APIs, and cloud infrastructure designed for reliability and growth.",
      },
      {
        icon: Bot,
        title: "AI & Automation Integration",
        description:
          "Embed AI features — chatbots, recommendation engines, prediction models — directly into your app.",
      },
      {
        icon: TrendingUp,
        title: "Third-Party Integrations",
        description:
          "Connect to Stripe, Twilio, Salesforce, HubSpot, or any API your business relies on.",
      },
      {
        icon: Globe,
        title: "Cloud Deployment & DevOps",
        description:
          "AWS, GCP, or Vercel deployment with CI/CD pipelines, auto-scaling, and monitoring built in.",
      },
    ],
    outcomes: [
      "A product built exactly to your requirements",
      "Scalable to support millions of users",
      "Clean, documented, maintainable codebase",
      "Full ownership — your IP, your code",
      "Fast iteration with agile sprints",
    ],
    stats: [
      { value: "8–16", label: "Weeks Build" },
      { value: "MVP", label: "First Approach" },
      { value: "100%", label: "Your Ownership" },
    ],
    ctaHeading: "Ready to Build the App You've Been Imagining?",
    ctaButton: "Start Custom App Project",
  },
};

// Type alias for the BarChart3 icon used in SEO feature — import it separately
import { BarChart3 } from "lucide-react";

export const ALL_SUB_SERVICE_SLUGS = Object.keys(SUB_SERVICE_DATA);
