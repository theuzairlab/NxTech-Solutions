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

export interface SubServiceDefinitionSection {
  heading: string;
  body: string;
}

export interface SubServiceStrategicItem {
  title?: string;
  description: string;
}

export interface SubServiceStrategicSection {
  heading: string;
  body?: string;
  items?: SubServiceStrategicItem[];
}

export interface SubServiceData {
  slug: string;
  parentSlug: string;
  parentLabel: string;
  eyebrow: string;
  title: string;
  highlightLine: string;
  description: string;
  metaTitle?: string;
  metaDescription?: string;
  heroImageSrc: string;
  heroImageAlt: string;
  features: SubServiceFeature[];
  outcomes: string[];
  stats: SubServiceStat[];
  featuresDescription?: string;
  outcomesDescription?: string;
  /** Slim snippet/definition block rendered between features and outcomes */
  definitionSection?: SubServiceDefinitionSection;
  /** Authority/strategic section rendered between outcomes and CTA */
  strategicSection?: SubServiceStrategicSection;
  ctaDescription?: string;
  ctaHeading: string;
  ctaButton: string;
}

export const SUB_SERVICE_DATA: Record<string, SubServiceData> = {
  // ── AI Marketing ─────────────────────────────────────────────────────────
  "workflow-process-automation": {
    slug: "workflow-process-automation",
    parentSlug: "ai-automation-marketing",
    parentLabel: "AI Marketing",
    eyebrow: "AI Marketing · Workflow & Process Automation",
    title: "Remove Manual Bottlenecks With",
    highlightLine: "Workflow & Process Automation",
    description:
      "Our Workflow & Process Automation service builds business automation workflow systems across CRM, email, approvals, reporting, and internal operations — so your team spends less time on repeat admin and more time on work that drives revenue.",
    metaTitle: "Business Process Automation | Save 40+ Hours Every Week",
    metaDescription: "Stop wasting time on repetitive tasks. We automate your workflows so you can focus on scaling. See how much you can save with a Workflow Audit.",
    heroImageSrc:
      "https://i.pinimg.com/736x/19/84/80/1984807c45900dadb88c1e43d2816467.jpg",
    heroImageAlt: "Workflow automation dashboard",
    features: [
      {
        icon: Bot,
        title: "Multi-Step Workflow Builder",
        description:
          "We map and build workflow automation systems with triggers, branches, delays, actions, and fallback logic so processes run cleanly from start to finish.",
      },
      {
        icon: Database,
        title: "Cross-Platform Integration",
        description:
          "We connect CRM, email, Slack, Sheets, billing, forms, and support tools into one working flow, using ai workflow automation services that reduce handoff friction.",
      },
      {
        icon: TrendingUp,
        title: "Error Detection & Alerts",
        description:
          "Monitoring rules track failures, delays, and broken actions in real time, so your team can act before a customer, lead, or task is lost.",
      },
      {
        icon: MessageSquare,
        title: "Approval & Notification Flows",
        description:
          "We automate approvals, team alerts, status changes, and internal routing so work keeps moving without manual follow-up or missed messages.",
      },
      {
        icon: FileText,
        title: "Document & Report Automation",
        description:
          "From proposals to invoices and scheduled reports, we create document workflow automation that generates output automatically from live data.",
      },
      {
        icon: Layers,
        title: "Ongoing Optimization",
        description:
          "We review performance, fix edge cases, and refine logic over time so your enterprise workflow automation keeps pace as operations grow.",
      },
    ],
    outcomes: [
      "Reduce manual workload by up to 80%",
      "Stop leads, approvals, and tasks from slipping between teams",
      "Speed up delivery and sales movement with automated handoffs",
      "Keep execution consistent as volume, staff, and systems grow",
      "See workflow status, errors, and throughput in real time",
    ],
    stats: [
      { value: "80%", label: "Time Saved" },
      { value: "24/7", label: "Running" },
      { value: "2 Wks", label: "To Deploy" },
    ],
    
    featuresDescription: "A complete done-for-you build designed to create working workflow automation services, remove repetitive steps, and connect the systems your team already uses.",
    outcomesDescription: "You do not just get automations built. You get a cleaner operating system with fewer delays, better execution, and more control across your workflows.",
    ctaDescription: "Book a free 30-minute strategy call and we will review your current process, identify bottlenecks, and show where Workflow & Process Automation can save time, reduce errors, and scale execution.",
    ctaHeading: "Ready to Replace Repetition With Reliable Automation?",
    ctaButton: "Book a Workflow Audit",
  },

  "ai-chatbot-development": {
    slug: "ai-chatbot-development",
    parentSlug: "ai-automation-marketing",
    parentLabel: "AI Marketing",
    eyebrow: "AI Marketing · AI Chatbot Development",
    title: "Turn Conversations Into Qualified Pipeline With",
    highlightLine: "AI Chatbot Development",
    description:
      "AI Chatbot Development helps you answer faster, qualify better, and book more meetings automatically across your website, WhatsApp, and connected channels — without adding headcount or slowing down your sales team.",
    metaTitle: "Custom AI Chatbot Development | 24/7 Automated Support",
    metaDescription: "Build a smart AI bot trained on your data. Automate leads and customer service instantly. Get your first AI Bot integrated with a 14-day Free Trial!",
    heroImageSrc:
      "https://i.pinimg.com/736x/e2/8c/20/e28c2018de95d120a8abce86262e8dab.jpg",
    heroImageAlt: "AI chatbot interface",
    features: [
      {
        icon: MessageSquare,
        title: "Custom Conversation Flows",
        description:
          "We create tailored chatbot flows around your offer, brand voice, and qualification rules so every conversation feels relevant, consistent, and built to move buyers forward.",
      },
      {
        icon: Bot,
        title: "Lead Qualification Engine",
        description:
          "Your bot asks the right pre-sales questions, identifies buyer intent, and routes ready-to-buy prospects into your team, calendar, or Leads & Sales Automation workflow.",
      },
      {
        icon: Globe,
        title: "Multi-Channel Deployment",
        description:
          "Launch from one connected setup across your website, WhatsApp, and other customer touchpoints, giving you faster response coverage without creating channel-by-channel operational chaos.",
      },
      {
        icon: Database,
        title: "CRM & Calendar Integration",
        description:
          "Every qualified lead can sync directly into your CRM Management system while high-intent prospects move straight into your calendar for faster follow-up and cleaner pipeline visibility.",
      },
      {
        icon: TrendingUp,
        title: "Analytics & Improvement",
        description:
          "Track completion rates, handoff points, drop-offs, and booking quality so your team can keep improving performance and measuring your chatbot’s impact against real business outcomes.",
      },
      {
        icon: Layers,
        title: "Smart Handoff to Human Support",
        description:
          "When a conversation needs a person, the chatbot escalates instantly with full context passed through, protecting the customer experience while reducing friction for support and sales teams.",
      },
    ],
    outcomes: [
      "24/7 lead capture without increasing internal headcount",
      "More qualified meetings from the same traffic and ad spend",
      "Near-instant first response across high-intent conversations",
      "Consistent messaging across every chat touchpoint",
      "Cleaner handoff into CRM Management and better follow-up speed",
    ],
    stats: [
      { value: "24/7", label: "Active" },
      { value: "40%+", label: "More Qualified Meetings" },
      { value: "< 2s", label: "Response Time" },
    ],
    
    featuresDescription: "A complete, done-for-you service covering every component needed to get a reliable, high-converting chatbot live.",
    outcomesDescription: "Strong chatbot performance comes from better logic, better routing, better follow-up, and better measurement — not from adding another widget that talks but does not move pipeline.",
    ctaDescription: "Book a free 30-minute strategy call and we’ll review your current setup, identify missed conversion points, and show you how AI Chatbot Development, CRM Management, and Leads & Sales Automation can work together.",
    ctaHeading: "Ready for an AI Chatbot That Actually Books Meetings?",
    ctaButton: "Book a Demo",
  },

  "automated-crm-management": {
    slug: "automated-crm-management",
    parentSlug: "ai-automation-marketing",
    parentLabel: "AI Marketing",
    eyebrow: "AI Marketing · CRM Automation",
    title: "Keep Your Sales Data Clean With",
    highlightLine: "Automated CRM Management",
    description:
      "Our crm automation services remove manual admin and keep your CRM accurate, current, and usable automatically. From first lead capture to closed revenue, every update is tracked.",
    metaTitle: "Automated CRM Solutions | Never Lose a Lead Again",
    metaDescription: "We set up CRMs that sell for you. Automated follow-ups, lead scoring, and zero data entry. Free CRM Setup Guide included with every consultation.",
    heroImageSrc:
      "https://i.pinimg.com/1200x/d6/01/e3/d601e39071ecc38c2fb782dc1d73929a.jpg",
    heroImageAlt: "CRM dashboard",
    features: [
      {
        icon: Database,
        title: "Lead Capture, Creation & Enrichment",
        description:
          "New leads from forms, ads, calls, or inboxes are created automatically with enriched data, cleaner fields, and better sales context.",
      },
      {
        icon: TrendingUp,
        title: "Pipeline Stage Automation",
        description:
          "Deals move through stages automatically using business automation workflow rules triggered by calls, meetings, emails, and real sales activity.",
      },
      {
        icon: Bot,
        title: "Smart Follow-Up Sequences",
        description:
          "Emails and tasks fire automatically through connected sales automation agency logic based on deal age, silence windows, and prospect behaviour.",
      },
      {
        icon: MessageSquare,
        title: "Task & Reminder Automation",
        description:
          "Reps receive automatic reminders for calls, proposals, and check-ins, so no deal stalls because someone missed the next action.",
      },
      {
        icon: FileText,
        title: "Reporting & Forecasting",
        description:
          "Weekly pipeline reports and revenue forecasts are delivered automatically, giving leadership clear numbers without manual exports or spreadsheet chasing.",
      },
      {
        icon: Layers,
        title: "Multi-Tool CRM Sync",
        description:
          "Keep HubSpot, Salesforce, Pipedrive, or other CRMs synced with email, calendar, billing, and connected ai workflow automation services across your stack.",
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
      { value: "95%", label: "Cleaner CRM Data" },
      { value: "3×", label: "Faster Follow-Up" },
      { value: "14 Days", label: "Typical Setup" },
    ],
    
    featuresDescription: "A complete done-for-you build designed to create an automated CRM system, remove manual entry, and give you clean data you can trust.",
    outcomesDescription: "You do not just get a software setup. You get a cleaner operating system with fewer delays, better execution, and more control across your sales process.",
    ctaDescription: "Book a free 30-minute strategy call. We’ll review your current setup, find the gaps, and show where smarter automation can improve performance fast.",
    ctaHeading: "Ready for a CRM That Runs Itself?",
    ctaButton: "Get CRM Automation Demo",
  },

  "leads-sales-automation": {
    slug: "leads-sales-automation",
    parentSlug: "ai-automation-marketing",
    parentLabel: "AI Marketing",
    eyebrow: "AI Marketing · Sales Automation",
    title: "[Turn New Leads Into Qualified Sales Calls With]",
    highlightLine: "Leads & Sales Automation",
    description:
      "[Our sales automation service builds an ai sales automation system that responds in seconds, qualifies leads through real conversations, ranks intent, and books meetings automatically. Connected with CRM Management, AI Chatbot Development, and Workflow & Process Automation, it helps you scale sales process automation without adding manual work.]",
    metaTitle: "Sales Automation Agency | Automate Your Entire Pipeline",
    metaDescription: "Close deals faster with automated proposals and order tracking. High-performance sales tech for any niche. Free Sales Funnel Audit for First 10 Signups!",
    heroImageSrc:
      "https://i.pinimg.com/1200x/c5/93/99/c59399c94e777710163f3ed0695d858d.jpg",
    heroImageAlt: "Sales automation pipeline",
    features: [
      {
        icon: Bot,
        title: "Instant AI Lead Response",
        description:
          "[New leads are contacted in seconds through an outbound ai sales agent using call, SMS, email, or chat, helping you win attention while intent is still high.]",
      },
      {
        icon: TrendingUp,
        title: "Intent-Based Lead Scoring",
        description:
          "[We build automated crm logic that scores leads using engagement, source quality, replies, budget fit, and buying signals so your team sees who matters first.]",
      },
      {
        icon: MessageSquare,
        title: "Qualification Conversation Flows",
        description:
          "[Custom qualification flows ask the right questions around fit, need, location, timeline, and budget so only relevant prospects move deeper into your sales automation system.]",
      },
      {
        icon: Database,
        title: "Auto Calendar Booking",
        description:
          "[Qualified prospects are routed straight into rep calendars with automated confirmations, reminders, and handoff steps built through crm automation services.]",
      },
      {
        icon: FileText,
        title: "Re-Engagement Campaigns",
        description:
          "[Cold or inactive leads re-enter personalized follow-up flows at the right moment, giving your sales process automation setup more chances to convert missed demand.]",
      },
      {
        icon: Layers,
        title: "Sales Performance Dashboard",
        description:
          "[A live dashboard tracks lead flow, response speed, booking rates, pipeline movement, and your ai marketing roi so every decision stays measurable.]",
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
    
    featuresDescription: "A complete, done-for-you build covering every component to get a working sales automation system live and driving revenue.",
    outcomesDescription: "You do not just get a software setup. You get a connected sales engine with fewer delays, better follow-up, and more control across your pipeline.",
    ctaDescription: "Book a free 30-minute strategy call and we’ll review your current pipeline, find the leaks, and show how a custom sales automation agency system can help your team close more deals with less effort.",
    ctaHeading: "[Ready to Fill Your Calendar With Qualified Leads?]",
    ctaButton: "[Book a Strategy Call]",
  },

  // ── Digital Marketing ─────────────────────────────────────────────────────
  seo: {
    slug: "seo",
    parentSlug: "digital-marketing",
    parentLabel: "Digital Marketing",
    eyebrow: "Digital Marketing · SEO",
    title: "Rank Smarter and Drive Revenue With",
    highlightLine: "Search Engine Optimization",
    description:
      "Search Engine Optimization is the process of improving technical structure, page relevance, content depth, and authority so your website earns better rankings and more qualified traffic. Our approach helps businesses comparing seo services near me https://www.nxtechnova.com/services/digital-marketing/seo turn search visibility into steady leads and revenue.",
    metaTitle: "Authority SEO Services | Dominate Your Search Niche",
    metaDescription: "Rank #1 and stay there. Technical SEO, Content, and High-Tier Backlinks. Get a Free Technical SEO Audit Report of your Top 3 Competitors!",
    heroImageSrc:
      "https://i.pinimg.com/736x/4d/0c/82/4d0c82eb021115981eae3d879eb6c154.jpg",
    heroImageAlt: "SEO analytics dashboard",
    features: [
      {
        icon: Search,
        title: "Technical SEO Audit",
        description:
          "Full technical review of speed, Core Web Vitals, schema, crawl depth, indexation, and the issues that hold back seo company near me https://www.nxtechnova.com/services/digital-marketing/seo performance.",
      },
      {
        icon: FileText,
        title: "Keyword & Intent Research",
        description:
          "High-value keyword mapping tied to awareness, consideration, and conversion so small business marketing services near me https://www.nxtechnova.com/services/digital-marketing campaigns attract the right traffic.",
      },
      {
        icon: Globe,
        title: "On-Page Optimization",
        description:
          "Titles, meta descriptions, headers, page structure, and internal links refined to improve rank, relevance, and website design and seo near me https://www.nxtechnova.com/services/web-development performance.",
      },
      {
        icon: TrendingUp,
        title: "Link Building",
        description:
          "Authority growth through quality link acquisition, outreach, digital PR, and partnerships that strengthen trust signals and search visibility.",
      },
      {
        icon: BarChart3,
        title: "Content Strategy",
        description:
          "Topic clusters, landing page planning, and conversion-focused content aligned to search demand and content marketing services near me https://www.nxtechnova.com/services/digital-marketing/content-marketing goals.",
      },
      {
        icon: Layers,
        title: "Monthly Reporting",
        description:
          "Clear monthly reporting on rankings, traffic, lead quality, and ROI so digital marketing firms near me https://www.nxtechnova.com/services/digital-marketing decisions stay grounded in results.",
      },
    ],
    outcomes: [
      "First-page visibility for high-intent commercial searches",
      "Steady month-over-month growth in qualified organic traffic",
      "Lower acquisition costs compared with short-term paid traffic",
      "Stronger authority, trust, and search credibility over time",
      "More sales-ready leads coming directly from search intent",
    ],
    stats: [
      { value: "3–6", label: "Months to Measurable Lift" },
      { value: "200%+", label: "Organic Traffic Growth" },
      { value: "60+", label: "DA Clients" },
    ],
    
    featuresDescription: "A complete, done-for-you build covering every component needed to get your website ranking higher and driving organic leads.",
    outcomesDescription: "You do not just get higher rankings. You get a stronger foundation with better search visibility, more organic traffic, and a measurable increase in quality leads.",
    strategicSection: {
      heading: "Connected Growth Stack",
      body: "SEO compounds faster when it works alongside Content Marketing, PPC Advertising, Email Marketing, and Social Media Marketing under one performance strategy.",
      items: [
        {
          title: "Technical Foundation",
          description: "For brands rebuilding weak sites, Web Development and Custom Website Development remove the technical friction that limits SEO gains.",
        },
        {
          title: "CMS and Commerce SEO",
          description: "If your growth depends on CMS or store performance, WordPress Development and Ecommerce Development help SEO land on faster, cleaner pages.",
        },
        {
          title: "AI and Process Support",
          description: "Teams scaling content and lead handling can pair SEO with AI automation and Workflow & Process Automation for faster execution.",
        },
        {
          title: "Lead Capture and Nurture",
          description: "Traffic performs better when follow-up systems are in place, including AI Chatbot Development, CRM Management, and Leads & Sales Automation.",
        },
      ],
    },
    ctaDescription: "An SEO audit shows the technical, content, and authority gaps that stop growth. In one focused strategy call, we review your setup, prioritize the fastest wins, and show how specialized seo experts near me can improve traffic, leads, and conversion quality.",
    ctaHeading: "Ready to Turn Rankings Into Revenue?",
    ctaButton: "Get Free SEO Audit",
  },

  smm: {
    slug: "smm",
    parentSlug: "digital-marketing",
    parentLabel: "Digital Marketing",
    eyebrow: "Digital Marketing · Social Media",
    title: "Turn Social Attention Into",
    highlightLine: "Social Media Marketing",
    description:
      "Social media marketing services built around strategy, creative, and consistent publishing to grow audience trust, increase engagement, and turn every platform into a stronger source of qualified leads.",
    metaTitle: "Social Media Growth Agency | Build a Viral Brand Presence",
    metaDescription: "Engaging content and strategic ads for any platform. We grow your community and your sales. Buy 2 Months of Management, Get the 3rd Month 50% OFF!",
    heroImageSrc:
      "https://i.pinimg.com/1200x/03/75/e5/0375e52f2d1e9df339ed8cfbb981ccff.jpg",
    heroImageAlt: "Social media content strategy",
    features: [
      {
        icon: Share2,
        title: "Platform Strategy",
        description:
          "Custom platform plans for Instagram, LinkedIn, TikTok, X, and Facebook based on audience intent, offer positioning, campaign goals, and the role of SEO, PPC, and Content Marketing.",
      },
      {
        icon: FileText,
        title: "Content Creation",
        description:
          "Scroll-stopping graphics, captions, reels, carousels, and post concepts planned, produced, and scheduled for you with messaging aligned to Content Marketing and broader Digital Marketing execution.",
      },
      {
        icon: TrendingUp,
        title: "Community Management",
        description:
          "Daily engagement across comments, direct messages, and brand mentions to build a responsive community, protect brand perception, and support faster customer journeys with AI Chatbot Development where automation makes sense.",
      },
      {
        icon: Search,
        title: "Hashtag & Trend Research",
        description:
          "Data-backed hashtag selection, trend tracking, topic timing, and platform-specific distribution choices designed to improve organic reach, discoverability, and post relevance without relying on random posting or short-term spikes.",
      },
      {
        icon: Bot,
        title: "Influencer Collaboration",
        description:
          "Identify, vet, and coordinate with micro and macro influencers that match your audience, credibility goals, commercial positioning, and budget so partnerships feel aligned, useful, and more likely to drive action.",
      },
      {
        icon: Layers,
        title: "Performance Analytics",
        description:
          "Monthly reporting on reach, engagement, follower quality, clicks, enquiries, and content performance with practical next steps so decisions stay tied to business outcomes, not vanity metrics alone.",
      },
    ],
    outcomes: [
      "Consistent publishing across your highest-value social channels",
      "Better follower quality and stronger engagement signals",
      "Higher brand recall, authority, and audience trust",
      "More inbound enquiries and warmer social leads",
      "Content that informs, engages, and moves prospects to action",
    ],
    stats: [
      { value: "3–5×", label: "Engagement Lift" },
      { value: "30+", label: "Posts/Month" },
      { value: "All", label: "Core Platforms" },
    ],
    
    featuresDescription: "Social media marketing combines channel planning, content creation, publishing, engagement, and reporting into one system to keep your brand visible, relevant, and conversion-ready across the platforms your audience uses most.",
    outcomesDescription: "Clear business outcomes, not just activity. This service is built to improve visibility, strengthen audience quality, increase response rates, and create a more reliable flow of leads from social channels.",
    strategicSection: {
      heading: "Why This Service Performs",
      items: [
        {
          description: "Clear channel strategy that gives each platform a defined role in awareness, trust, and lead generation.",
        },
        {
          description: "Creative built for how people actually consume content, not generic posting calendars.",
        },
        {
          description: "Reporting that shows what content drives engagement quality, clicks, enquiries, and growth.",
        },
      ],
    },
    ctaDescription: "Book a free 30-minute strategy call. We'll review your current channels, content gaps, response flow, and growth opportunities, then show you how Social Media Marketing, SEO, PPC Advertising, Email Marketing, and Content Marketing can work together more effectively.",
    ctaHeading: "Ready to Build a Social Presence That Sells?",
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
    metaTitle: "Professional PPC Management | Instant Leads & High ROI",
    metaDescription: "Stop burning cash on ads. We build high-converting Google & Meta Ad campaigns. We optimize until you see a positive ROI. Start Today!",
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
    
    featuresDescription: "A complete, done-for-you service covering every component needed to run profitable, high-converting ad campaigns.",
    outcomesDescription: "You do not just get ads running. You get a measurable acquisition channel with lower cost-per-lead, better targeting, and more control over your revenue growth.",
    ctaDescription: "Book a free 30-minute strategy call. We’ll review your current ad performance, identify wasted spend, and show how a tighter PPC Advertising strategy can lower your CPL and increase revenue.",
    strategicSection: {
      heading: "Why This PPC System Performs Better",
      body: "Most PPC pages talk about clicks. This one is built around search intent, negative keyword control, landing-page alignment, first-party tracking, and disciplined scaling. It also works alongside SEO, Social Media Marketing, Email Marketing, and Content Marketing for stronger full-funnel performance.",
    },
    ctaHeading: "Ready to Turn Ad Spend Into Predictable Revenue?",
    ctaButton: "Get Free PPC Audit",
  },

  "email-marketing": {
    slug: "email-marketing",
    parentSlug: "digital-marketing",
    parentLabel: "Digital Marketing",
    eyebrow: "Digital Marketing · Email",
    title: "Turn Subscribers Into Revenue With",
    highlightLine: "Email Marketing",
    description:
      "Work with email marketing experts who build lifecycle email marketing, automated email marketing, and data driven email marketing systems that keep your brand visible, nurture intent, and turn subscribers into paying customers with measurable growth. Email Marketing https://www.nxtechnova.com/services/digital-marketing/email-marketing",
    metaTitle: "Automated Email Marketing | High-Conversion Sales Funnels",
    metaDescription: "Smart email sequences that turn cold subscribers into loyal fans. 5 Free High-Converting Email Templates with every strategy call!",
    heroImageSrc:
      "https://i.pinimg.com/1200x/50/ce/95/50ce95cdcc26caf8b66c01411f3e47fa.jpg",
    heroImageAlt: "Email marketing campaign",
    features: [
      {
        icon: Mail,
        title: "Welcome & Lifecycle Email Marketing",
        description:
          "We build welcome journeys and lifecycle email marketing sequences that educate new leads, build trust fast, and move subscribers toward action without manual follow-up.",
      },
      {
        icon: Bot,
        title: "Behavioral Trigger Automation",
        description:
          "We create automated email marketing triggers around page views, form actions, downloads, inactivity, and buying signals using workflow automation and sales automation support.",
      },
      {
        icon: FileText,
        title: "Newsletter and Email Marketing Management",
        description:
          "From weekly newsletters to launch campaigns, we handle email calendars, campaign sends, creative direction, and copywriting that drives clicks and revenue.",
      },
      {
        icon: TrendingUp,
        title: "Segmentation, Personalization & CRM Logic",
        description:
          "We map your email marketing customer journey by source, stage, interest, and behavior so each subscriber gets relevant messaging backed by automated CRM.",
      },
      {
        icon: Database,
        title: "List Health, Hygiene & Deliverability",
        description:
          "We protect list quality through cleaning, suppression logic, warm-up management, and ongoing monitoring so your email marketing performs in the inbox instead of disappearing into spam.",
      },
      {
        icon: Layers,
        title: "Testing, Reporting & Optimization",
        description:
          "We test subject lines, timing, offers, CTAs, and structure, then turn results into clear email marketing reporting and analytics so every send gets smarter.",
      },
    ],
    outcomes: [
      "Higher open rates, stronger click-through rates, and sharper message-to-offer alignment",
      "Automated sequences that nurture leads around the clock with less manual chasing",
      "More revenue from your current list through better timing, targeting, and offer positioning",
      "Better list health, stronger inbox placement, and more reliable deliverability over time",
      "Consistent customer communication without extra strain on your sales or marketing team",
    ],
    stats: [
      { value: "42×", label: "Revenue Potential" },
      { value: "35%+", label: "Open Rate Growth" },
      { value: "1 Wk", label: "Launch Window" },
    ],
    
    featuresDescription: "A complete, done-for-you service built by an email marketing consultant to improve performance, automate follow-up, and support stronger email marketing conversion across your funnel.",
    outcomesDescription: "Real, measurable improvements shaped around retention email marketing, lead generation email marketing, and stronger campaign performance — not just more sends sitting in your platform.",
    definitionSection: {
      heading: "What Is Email Marketing?",
      body: "Email marketing is a permission-based channel that uses segmentation, automation, testing, and message sequencing to move leads through the customer journey. A strong setup improves conversions, supports retention, and turns subscriber attention into measurable business growth.",
    },
    ctaDescription: "Book a free 30-minute strategy call and get an email marketing audit from our team. We'll review your setup, identify missed revenue opportunities, and show where Email Marketing, Content Marketing, and CRM can lift results.",
    ctaHeading: "Ready to Turn Your Email List Into Consistent Revenue?",
    ctaButton: "Get Email Marketing Plan",
  },

  "content-marketing": {
    slug: "content-marketing",
    parentSlug: "digital-marketing",
    parentLabel: "Digital Marketing",
    eyebrow: "Digital Marketing · Content Marketing",
    title: "Build Authority & Convert With",
    highlightLine: "Content Marketing",
    description:
      "Content Marketing built around search intent, buyer education, and conversion strategy that grows organic traffic, strengthens authority, and turns readers into qualified leads. Supported by SEO, extended through Email Marketing, and amplified with Social Media Marketing.",
    metaTitle: "Premium Content Marketing | Articles & Blogs That Rank",
    metaDescription: "Expert storytelling combined with SEO precision. We write content that builds trust. Order 5 Blogs, Get the 6th One Absolutely FREE!",
    heroImageSrc:
      "https://i.pinimg.com/736x/7f/c4/26/7fc426ab864baa0c5e5a73c5e4e17376.jpg",
    heroImageAlt: "Content marketing strategy",
    features: [
      {
        icon: FileText,
        title: "Content Strategy & Planning",
        description:
          "Research-led content plans built around buyer intent, search demand, and the topics your audience needs before they are ready to convert.",
      },
      {
        icon: Search,
        title: "SEO Blog Writing",
        description:
          "Long-form articles written to support SEO, match commercial search intent, and move readers from problem-aware traffic to qualified opportunities.",
      },
      {
        icon: Globe,
        title: "Pillar Pages & Topic Clusters",
        description:
          "Authority-building content hubs structured to strengthen relevance, improve internal linking, and give search engines a clear map of your expertise.",
      },
      {
        icon: TrendingUp,
        title: "Lead Magnet Creation",
        description:
          "Downloadable assets designed to capture demand and feed Email Marketing sequences that nurture prospects into sales-ready leads.",
      },
      {
        icon: Share2,
        title: "Content Distribution",
        description:
          "Strategic repurposing across Social Media Marketing, email, and campaign support for PPC Advertising so every asset delivers more than one result.",
      },
      {
        icon: Layers,
        title: "Performance Tracking",
        description:
          "Clear reporting on traffic, rankings, engagement, leads, and content-attributed ROI, with support from AI Automation and Workflow & Process Automation where speed and accuracy matter.",
      },
    ],
    outcomes: [
      "Compounding organic traffic growth with stronger intent alignment",
      "Stronger authority and market trust in your category",
      "More inbound leads from content built around buyer decisions",
      "Lower acquisition costs as content reduces paid dependency",
      "Content assets that attract, educate, and convert around the clock",
    ],
    stats: [
      { value: "3×", label: "More Qualified Leads" },
      { value: "6 Mo", label: "To Compound" },
      { value: "4–8", label: "Assets/Month" },
    ],
    
    featuresDescription: "A complete, done-for-you Content Marketing system built to plan, create, distribute, and measure content that supports SEO, improves lead quality, and gives your business a repeatable growth engine.",
    outcomesDescription: "Real results, not just published assets. You get a content system that builds visibility, improves trust, supports conversion, and keeps producing value long after each piece goes live.",
    strategicSection: {
      heading: "Why This Service Compounds",
      body: "Content marketing is a compounding growth system that combines search visibility, editorial authority, and conversion assets to bring in qualified traffic over time. Instead of renting attention, you build owned content that ranks, nurtures, and supports sales across every stage of the funnel.",
      items: [
        {
          title: "Search-Led Planning",
          description: "Every topic is chosen to match demand, intent, and business value rather than vanity traffic.",
        },
        {
          title: "Conversion-Focused Structure",
          description: "Every asset is written to educate first, then move readers toward a clear next step.",
        },
        {
          title: "Cross-Channel Leverage",
          description: "Strong content performs longer when it is connected to SEO, Email Marketing, Social Media Marketing, and AI Chatbot Development.",
        },
      ],
    },
    ctaDescription: "Book a free 30-minute strategy call. We’ll review your current content, search visibility, conversion paths, and distribution gaps, then show how Content Marketing, SEO, Email Marketing, and AI Automation can turn your traffic into measurable growth.",
    ctaHeading: "Ready to Launch Content That Builds Traffic and Revenue?",
    ctaButton: "Get Content Strategy",
  },

  // ── Web Development ───────────────────────────────────────────────────────
  "wordpress-development": {
    slug: "wordpress-development",
    parentSlug: "web-development",
    parentLabel: "Web Development",
    eyebrow: "Web Development · WordPress",
    title: "Custom WordPress Website",
    highlightLine: "Design and Development",
    description:
      "WordPress website design and development is the process of planning, designing, coding, and optimizing a site for speed, visibility, and conversions. Our service delivers secure, editable builds with custom functionality, clean structure, and admin workflows your team can manage confidently.",
    metaTitle: "Expert WordPress Development | Fast & SEO-Friendly Sites",
    metaDescription: "Custom themes, plugin development, and speed optimization. Get a Free Speed Audit & Security Check with every WordPress project!",
    heroImageSrc:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&h=675&fit=crop",
    heroImageAlt: "WordPress website development",
    features: [
      {
        icon: Globe,
        title: "Custom Theme Development",
        description:
          "Pixel-perfect custom WordPress website development built around your brand, UX, and conversion goals—without bloated builders, rigid templates, or code that limits performance.",
      },
      {
        icon: Code2,
        title: "Plugin Development & Integration",
        description:
          "Custom plugins, API connections, and integration support for CRMs, payment gateways, booking systems, and CRM Management workflows.",
      },
      {
        icon: TrendingUp,
        title: "SEO-Optimized Architecture",
        description:
          "Clean semantic markup, schema, internal structure, and fast-loading templates aligned with SEO from the first line of code.",
      },
      {
        icon: Smartphone,
        title: "Responsive & Mobile-First",
        description:
          "Every page is designed mobile-first so your site looks polished, loads quickly, and converts clearly across phones, tablets, and desktops.",
      },
      {
        icon: Database,
        title: "CMS & Training",
        description:
          "You get a clean editor experience, reusable content blocks, and practical training so your team can update pages, publish posts, and manage content without touching code.",
      },
      {
        icon: Layers,
        title: "Security & Maintenance",
        description:
          "SSL, hardening, backups, updates, and monitoring keep your site protected and stable, with expansion paths into Workflow & Process Automation when your operations grow.",
      },
    ],
    outcomes: [
      "A site your team can edit, expand, and publish on without bottlenecks",
      "Fast load times built to support strong Core Web Vitals performance",
      "Launch-ready structure aligned with SEO and long-term content growth",
      "A secure, backed-up environment with dependable maintenance coverage",
      "A flexible platform that can scale into Ecommerce, Leads & Sales Automation, or Custom Software Development",
    ],
    stats: [
      { value: "3–5", label: "Weeks to Launch" },
      { value: "100", label: "PageSpeed Focus" },
      { value: "SSL", label: "Secured" },
    ],
    
    featuresDescription: "A complete wordpress website design and development service covering strategy, build, launch, integrations, and post-launch stability—so you get a site that performs, ranks well, and supports growth without unnecessary complexity.",
    outcomesDescription: "Real business impact, not just pages and plugins. This service is built to improve usability, speed, search readiness, and the day-to-day efficiency of managing your website.",
    ctaDescription: "Book a free 30-minute strategy call and we’ll review your current setup, identify performance and conversion gaps, and show you how our WordPress Development service can improve speed, usability, SEO structure, and growth readiness.",
    strategicSection: {
      heading: "Why This WordPress Build Outperforms Standard Setups",
      body: "Most WordPress sites underperform because design, speed, SEO, and integrations are treated as separate tasks. We build them as one system—so your site is easier to manage, less likely to break, and better prepared for traffic, leads, and future expansion.",
      items: [
        {
          title: "Cleaner Codebase",
          description: "Built for maintainability, not short-term patches or builder clutter.",
        },
        {
          title: "Better Editing Experience",
          description: "Structured content blocks help your team update pages without layout issues.",
        },
        {
          title: "Smarter Growth Paths",
          description: "Add AI Chatbot Development or connected workflows when your site needs more than static pages.",
        },
        {
          title: "Built for Business Use",
          description: "Ideal for service brands, campaigns, lead generation, and WordPress ecommerce development.",
        },
      ],
    },
    ctaHeading: "Ready for WordPress Website Design and Development That Delivers?",
    ctaButton: "Get Free Consultation",
  },

  "ecommerce-website-development": {
    slug: "ecommerce-website-development",
    parentSlug: "web-development",
    parentLabel: "Web Development",
    eyebrow: "Web Development · E-commerce",
    title: "Launch Faster and Sell More With",
    highlightLine: "E-commerce Website Development",
    description:
      "An ecommerce website development company should do more than launch pages. We build WooCommerce, Shopify, and custom stacks with faster checkout, smarter product discovery, and full payment integration so your store converts cleanly across every device.",
    metaTitle: "Scalable E-commerce Development | Sell More Online",
    metaDescription: "Powerful online stores designed for high conversion and automated management. Free Payment Gateway Integration for all new E-com builds!",
    heroImageSrc:
      "https://i.pinimg.com/736x/3b/f1/6a/3bf16a32dd08d61a7c485118baa1f4ca.jpg",
    heroImageAlt: "E-commerce store development",
    features: [
      {
        icon: ShoppingCart,
        title: "Store Architecture & UX Design",
        description:
          "Product navigation, category structure, filters, search, and checkout flows shaped like strong ecommerce web design builds so shoppers find products faster and move through the funnel with less friction.",
      },
      {
        icon: Code2,
        title: "Payment Gateway Integration",
        description:
          "Stripe, PayPal, Razorpay, and local gateways configured for secure checkout, tax logic, shipping rules, receipts, and dependable order capture from day one.",
      },
      {
        icon: Database,
        title: "Inventory & Order Management",
        description:
          "Real-time inventory sync, order dashboards, and fulfilment alerts connected to workflow automation services so operations stay accurate as order volume increases.",
      },
      {
        icon: TrendingUp,
        title: "Conversion Rate Optimization",
        description:
          "Upsell blocks, cross-sell logic, cart recovery, reviews, trust signals, and ai chatbot ecommerce journeys built in to increase conversion rate and reduce hesitation before purchase.",
      },
      {
        icon: Search,
        title: "SEO & Product Schema",
        description:
          "Rich product schema, fast load times, crawl-ready architecture, and ecommerce seo services built into product and category pages to improve rankings and visibility in search.",
      },
      {
        icon: Smartphone,
        title: "Mobile Shopping Experience",
        description:
          "Fast mobile UX, thumb-friendly navigation, one-tap checkout, and payment support designed for shoppers who buy on the move and expect speed at every step.",
      },
    ],
    outcomes: [
      "Higher conversion rate and average order value",
      "Smoother checkout with lower abandonment",
      "Clear inventory and order visibility",
      "Stronger product page visibility in search",
      "Scalable store built for traffic spikes",
    ],
    stats: [
      { value: "4–8", label: "Weeks to Launch" },
      { value: "+35%", label: "CVR Increase" },
      { value: "Multi", label: "Payment Options" },
    ],
    
    featuresDescription: "A complete done-for-you build designed to launch a fast, high-converting online store with seamless inventory and payment integration.",
    outcomesDescription: "The strongest stores balance design, speed, operations, and growth. That means cleaner merchandising, dependable checkout, easier catalog management, and a build that can expand into shopify marketing agency, ai marketing agency, and small business automation initiatives when needed.",
    ctaDescription: "Book a free 30-minute strategy call. We will review your current setup, identify conversion blockers, and show where stronger ecommerce website development services, ecommerce seo services, or workflow automation services can create the fastest lift.",
    definitionSection: {
      heading: "What This Service Covers",
      body: "E-commerce website development is the process of building a store that lets customers browse products, search inventory, pay securely, and manage orders across devices. A strong build combines UX, platform setup, integrations, and conversion systems so traffic turns into measurable revenue.",
    },
    strategicSection: {
      heading: "Why Brands Choose This Build",
      body: "The strongest stores balance design, speed, operations, and growth. That means cleaner merchandising, dependable checkout, easier catalog management, and a build that can expand into Shopify marketing, AI automation, and small business automation initiatives when needed.",
      items: [
        {
          title: "Platform Fit",
          description: "WooCommerce works well for content-led brands needing flexible WordPress ecommerce. Shopify suits fast-moving retail teams wanting simpler store management. Custom builds are best for brands needing advanced logic or deeper system integrations.",
        },
        {
          title: "Built for Growth Beyond Launch",
          description: "Your store connects directly with the channels that drive revenue — PPC, email, content marketing, CRM, and sales process automation so the store keeps improving after go-live.",
        },
      ],
    },
    ctaHeading: "Ready to Launch a Store That Sells Every Day?",
    ctaButton: "Get E-commerce Consultation",
  },

  "custom-website-development": {
    slug: "custom-website-development",
    parentSlug: "web-development",
    parentLabel: "Web Development",
    eyebrow: "Web Development · Custom Software",
    title: "Built for What Templates Can’t Handle",
    highlightLine: "custom website development",
    description:
      "Our custom website development service delivers fully bespoke websites and platforms engineered around your business logic, user journeys, and growth goals — using Next.js, React, or the right stack for the job when off-the-shelf themes cannot support the experience you need.",
    metaTitle: "Bespoke Web Application Development | Unique Digital Tech",
    metaDescription: "No templates. Just pure, custom-coded excellence tailored to your business goals. Get a Free Technical Blueprint for your custom idea!",
    heroImageSrc:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&h=675&fit=crop",
    heroImageAlt: "Custom web development",
    features: [
      {
        icon: Code2,
        title: "Bespoke Frontend Development",
        description:
          "Custom React and Next.js frontends built with precision, polished interaction, and conversion-focused UX — ideal when you need more than a typical theme or a generic website development company near me.",
      },
      {
        icon: Database,
        title: "API & Backend Integration",
        description:
          "Secure integrations across REST APIs, GraphQL, payments, auth, data layers, and third-party tools — including expansion into crm automation services, sales automation agency, and custom business workflows.",
      },
      {
        icon: TrendingUp,
        title: "Performance Engineering",
        description:
          "Server-side rendering, smart caching, asset optimization, and CDN delivery engineered for speed, stability, and modern seo and web development performance standards.",
      },
      {
        icon: Globe,
        title: "CMS Integration",
        description:
          "Headless CMS setup with flexible editing workflows so your team can manage landing pages, case studies, and updates without developer reliance — especially useful when paired with ongoing content marketing service execution.",
      },
      {
        icon: Layers,
        title: "Scalable Architecture",
        description:
          "Growth-ready architecture with modular code, CI/CD pipelines, cloud deployment, and clean foundations for future custom software development services, portal features, and advanced product expansion.",
      },
      {
        icon: Smartphone,
        title: "Accessibility & QA",
        description:
          "Accessibility-first development, cross-browser testing, responsive QA, and release checks across devices so your build launches stable, usable, and ready for real traffic from day one.",
      },
    ],
    outcomes: [
      "Exactly what your business needs — not a workaround",
      "Performance built for speed, stability, and scale",
      "Clean code your team can maintain and extend",
      "Full ownership with no theme or platform limits",
      "Connected systems across data, CRM, sales, and ops",
    ],
    stats: [
      { value: "6–12", label: "Weeks Build" },
      { value: "100%", label: "Custom Code" },
      { value: "99.9%", label: "Uptime SLA" },
    ],
    definitionSection: {
      heading: "What Custom Website Development Means",
      body: "Custom website development is the process of designing and engineering a website around your exact business model, integrations, and performance goals instead of forcing your workflow into a template. It gives you cleaner code, better scalability, stronger UX, and complete control over future features.",
    },
    strategicSection: {
      heading: "Why Businesses Choose Custom",
      body: "The right custom build removes the friction that slows teams down. When you need advanced workflows, user roles, third-party integrations, or tailored customer journeys, a bespoke platform gives you the flexibility templates cannot.",
      items: [
        {
          title: "Complex Business Logic",
          description: "Custom rules, gated experiences, booking flows, calculators, dashboards, and role-based functionality designed around how your business actually operates.",
        },
        {
          title: "System Connectivity",
          description: "Reliable connections across payments, internal tools, support systems, and workflow automation so your website works like part of the business, not a disconnected front end.",
        },
        {
          title: "AI and Support Expansion",
          description: "Launch with a strong foundation for future AI Chatbot Development, smarter support flows, lead capture, and sales automation without rebuilding from scratch.",
        },
        {
          title: "Future App Readiness",
          description: "Build the web layer now and expand later with a trusted custom app development company when your roadmap includes customer apps, internal tools, or mobile product extensions.",
        },
      ],
    },
    ctaHeading: "Ready to Build a Platform That Fits the Way You Work?",
    ctaButton: "Start Custom Project",
  },

  // ── App Development ───────────────────────────────────────────────────────
  "android-app-development": {
    slug: "android-app-development",
    parentSlug: "app-development",
    parentLabel: "App Development",
    eyebrow: "App Development · Android",
    title: "Launch Faster With",
    highlightLine: "Android App Development",
    description:
      "Custom android app development services built for speed, scale, and a smoother Google Play launch. Android app development is the process of designing, building, testing, and releasing apps that perform reliably across devices, OS versions, and real user demand.",
    metaTitle: "Expert Android App Development | High-Performance Mobile Tech",
    metaDescription: "Build a stable, scalable Android app for any industry. Native & Hybrid solutions optimized for the Play Store. Get a Free App UI/UX Audit + 1 Month Post-Launch Support!",
    heroImageSrc:
      "https://i.pinimg.com/736x/7b/e0/3d/7be03d03e4c567ed9cff6c702e08a2c5.jpg",
    heroImageAlt: "Android app development",
    features: [
      {
        icon: Smartphone,
        title: "Native & Cross-Platform Development",
        description:
          "Native Kotlin or Java builds, plus React Native app development services when speed, budget, and cross-platform app development matter to your roadmap.",
      },
      {
        icon: Code2,
        title: "Custom UI/UX Design",
        description:
          "Material Design-led interfaces built for clarity, retention, and smooth interactions across Android phones, tablets, and modern device sizes.",
      },
      {
        icon: Database,
        title: "Backend, API & Automation Integration",
        description:
          "Backend delivery with Node.js, Firebase, or existing APIs, plus Workflow & Process Automation, AI Chatbot Development, and CRM Management when the product needs smarter operations.",
      },
      {
        icon: TrendingUp,
        title: "Google Play Store Launch",
        description:
          "Store listing strategy, release handling, policy checks, and launch support designed to improve approvals, visibility, downloads, and day-one momentum.",
      },
      {
        icon: Bot,
        title: "Push Notifications & Product Analytics",
        description:
          "Behavior-based messaging, event tracking, and analytics setup that help your team measure engagement, improve retention, and guide smarter feature decisions.",
      },
      {
        icon: Layers,
        title: "Ongoing Maintenance & Updates",
        description:
          "Post-launch fixes, Android version updates, performance tuning, and feature releases that keep your app stable as users, traffic, and expectations grow.",
      },
    ],
    outcomes: [
      "Smooth, reliable app performance across Android devices",
      "Published on Google Play with launch-ready assets",
      "Fast load times with offline-ready core flows",
      "Higher retention through better UX and tracking",
      "Scalable architecture built for long-term growth",
    ],
    stats: [
      { value: "8–14", label: "Weeks to Launch" },
      { value: "3B+", label: "Android Users" },
      { value: "99%", label: "Crash-Free" },
    ],
    
    featuresDescription: "A complete, done-for-you Android delivery service covering product planning, design, development, QA, launch, and post-release support.",
    outcomesDescription: "Real results, not just shipped features. You get a stronger product foundation, cleaner releases, better user experience, and a clearer path to growth.",
    ctaDescription: "Book a free 30-minute strategy call. We'll review your product scope, architecture, launch blockers, and the fastest path forward.",
    strategicSection: {
      heading: "Why This Android Build Performs Better",
      body: "Android app development is not only about shipping code. The strongest delivery teams reduce launch risk, improve retention, support scale, and create cleaner release processes.",
      items: [
        {
          description: "Release-ready architecture from the first build",
        },
        {
          description: "Device testing across screen sizes and Android versions",
        },
        {
          description: "Retention tracking built into the product, not added later",
        },
        {
          description: "Scalable foundations for future iOS App Development, Custom App Development, or Web Development",
        },
      ],
    },
    ctaHeading: "Ready to Launch Your Android App?",
    ctaButton: "Get App Development Estimate",
  },

  "ios-app-development": {
    slug: "ios-app-development",
    parentSlug: "app-development",
    parentLabel: "App Development",
    eyebrow: "App Development · iOS",
    title: "Build for Apple With",
    highlightLine: "iOS App Development",
    description:
      "Choose an iOS app development company that builds premium iPhone and iPad products in Swift or React Native, engineered for App Store approval, scalable growth, secure integrations, and the performance standards Apple users expect.",
    metaTitle: "Premium iOS App Development | Swift & UIKit Experts",
    metaDescription: "High-end iPhone & iPad apps with seamless performance and top-tier security. We bring your vision to the App Store. 15% Off on iOS Development for First-Time Clients!",
    heroImageSrc:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900&h=675&fit=crop",
    heroImageAlt: "iOS app development",
    features: [
      {
        icon: Apple,
        title: "Swift & React Native Development",
        description:
          "Native Swift for Apple-first speed, or a flexible build path when your roadmap later expands into Android App Development.",
      },
      {
        icon: Code2,
        title: "Human Interface Guidelines Design",
        description:
          "Interfaces built around Apple's HIG standards for clarity, motion, accessibility, and a premium feel that supports clean review approval and stronger user trust from the first session.",
      },
      {
        icon: Database,
        title: "iCloud & API Integration",
        description:
          "iCloud sync, Sign in with Apple, Keychain, payments, maps, and third-party APIs integrated cleanly, with Web Development support when your product also needs an admin dashboard or customer portal.",
      },
      {
        icon: TrendingUp,
        title: "App Store Launch & ASO",
        description:
          "Store-ready listing copy, screenshots, preview assets, and launch support aligned with SEO principles to improve discoverability, conversion, and visibility inside the App Store.",
      },
      {
        icon: Bot,
        title: "Push Notifications & In-App Purchases",
        description:
          "APNs notifications, StoreKit purchases, and subscription billing configured correctly, giving your app a stronger retention and revenue base from day one without costly rebuilds later.",
      },
      {
        icon: Layers,
        title: "TestFlight QA & Ongoing Updates",
        description:
          "Structured TestFlight testing, release hardening, and post-launch updates that keep your build stable, compatible, and ready for future expansion.",
      },
    ],
    outcomes: [
      "Higher odds of App Store approval on the first submission",
      "A polished experience that matches Apple's premium quality bar",
      "Fast, fluid performance across modern iPhone and iPad devices",
      "Stronger ratings, better retention, and more positive reviews",
      "Subscriptions, purchases, and analytics ready from day one",
    ],
    stats: [
      { value: "8–14", label: "Weeks to Launch" },
      { value: "1B+", label: "iPhone Users" },
      { value: "4.8★", label: "Avg App Rating" },
    ],
    
    featuresDescription: "iOS app development services cover strategy, UX, engineering, QA, App Store submission, and lifecycle updates for iPhone and iPad apps.",
    outcomesDescription: "What you get from a professional iOS app development company is a launch-ready product backed by performance engineering, App Store compliance, monetization setup, and post-launch support.",
    ctaDescription: "Book a free 30-minute strategy call. We'll review your product, roadmap, and launch blockers, then show you where iOS app development services and App Development can move the project forward fastest.",
    strategicSection: {
      heading: "Why Teams Choose This Service",
      body: "Apple-focused delivery with review readiness, performance discipline, and post-launch continuity built into the build process from the start.",
      items: [
        {
          title: "App Store Readiness",
          description: "Privacy flows, permissions, compliance checks, and submission packaging handled before launch so your release path is clearer and faster.",
        },
        {
          title: "Scalable Product Foundation",
          description: "A clean architecture ready for future Android App Development, companion Web Development, and deeper custom app development support.",
        },
        {
          title: "Launch Continuity",
          description: "TestFlight, version monitoring, and ongoing release updates planned so your app keeps performing after day one, not just at launch.",
        },
      ],
    },
    ctaHeading: "Ready to Build and Launch Your iOS App?",
    ctaButton: "Get iOS Project Estimate",
  },

  "custom-app-development": {
    slug: "custom-app-development",
    parentSlug: "app-development",
    parentLabel: "App Development",
    eyebrow: "App Development · Custom",
    title: "Build Faster, Smarter, and Around Your Operations",
    highlightLine: "Custom App Development",
    description:
      "Custom application development for businesses that need secure web apps, SaaS platforms, dashboards, and internal tools built around real workflows, users, data, and long-term growth.",
    metaTitle: "Custom Mobile App Development | Unique Solutions for ANY Idea",
    metaDescription: "No templates, just pure custom-coded excellence. Tailor-made apps for startups & enterprises. Get a Free Technical Blueprint & MVP Roadmap. Book Now!",
    heroImageSrc:
      "https://i.pinimg.com/736x/74/c5/a7/74c5a7396b6b09e8d0e7514ed6a824d0.jpg",
    heroImageAlt: "Custom application development",
    features: [
      {
        icon: Code2,
        title: "SaaS & Web Application Builds",
        description:
          "Full-stack SaaS products and web app development builds with user auth, billing, dashboards, and multi-tenant architecture designed for scale.",
      },
      {
        icon: Layers,
        title: "Internal Tools & Dashboards",
        description:
          "Custom admin panels, reporting views, and internal systems connected to CRM automation and decision-making workflows built around your team.",
      },
      {
        icon: Database,
        title: "Database & Backend Architecture",
        description:
          "Scalable databases, secure APIs, and backend systems built through custom software development for performance, stability, and future product expansion.",
      },
      {
        icon: Bot,
        title: "AI & Automation Integration",
        description:
          "Embed custom AI chatbot development, smart recommendations, and AI workflow automation directly into your product experience.",
      },
      {
        icon: TrendingUp,
        title: "Third-Party Integrations",
        description:
          "Connect Stripe, Twilio, Salesforce, HubSpot, ERPs, and sales tools with clean API implementation and sales automation consulting where it improves operations.",
      },
      {
        icon: Globe,
        title: "Cloud Deployment & DevOps",
        description:
          "AWS, GCP, or Vercel deployment with CI/CD, monitoring, scaling rules, and release workflows handled by a proven app development team.",
      },
    ],
    outcomes: [
      "Faster launch momentum and clearer delivery milestones",
      "A product built around your workflows, users, and revenue model",
      "Architecture prepared for heavy traffic, new features, and scale",
      "Clean, documented code that supports long-term maintainability",
      "Full ownership of your IP, codebase, data, and infrastructure",
    ],
    stats: [
      { value: "8–16", label: "Weeks to Launch" },
      { value: "MVP", label: "MVP-First Delivery" },
      { value: "100%", label: "IP Ownership" },
    ],
    
    featuresDescription: "Custom app development is a full-service build process covering discovery, UX, architecture, engineering, integrations, testing, deployment, and launch readiness in one connected workflow.",
    outcomesDescription: "What do you get from custom app development? You get a production-ready product aligned to your workflows, users, and growth plan, with scalable infrastructure, maintainable code, and full ownership.",
    ctaDescription: "Book a free 30-minute strategy call and we'll review your scope, feature priorities, technical risks, and growth path.",
    strategicSection: {
      heading: "Why Custom Beats Off-the-Shelf Software",
      body: "Custom application development gives you control over workflows, permissions, integrations, reporting, and product direction—which means fewer tool limitations, less manual work, and a system built for the way your business actually operates.",
      items: [
        {
          description: "No feature bloat or forced workflows",
        },
        {
          description: "No platform lock-in or shared ownership risk",
        },
        {
          description: "No patchwork tools slowing your team down",
        },
      ],
    },
    ctaHeading: "Ready to Build the App Your Business Actually Needs?",
    ctaButton: "Start Custom App Project",
  },
};

// Type alias for the BarChart3 icon used in SEO feature — import it separately
import { BarChart3 } from "lucide-react";

export const ALL_SUB_SERVICE_SLUGS = Object.keys(SUB_SERVICE_DATA);
