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
  metaTitle?: string;
  metaDescription?: string;
  heroImageSrc: string;
  heroImageAlt: string;
  features: SubServiceFeature[];
  outcomes: string[];
  stats: SubServiceStat[];
  featuresDescription?: string;
  outcomesDescription?: string;
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
    ctaDescription: "An SEO audit shows the technical, content, and authority gaps that stop growth. In one focused strategy call, we review your setup, prioritize the fastest wins, and show how specialized seo experts near me can improve traffic, leads, and conversion quality.",
    ctaHeading: "Ready to Turn Rankings Into Revenue?",
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
    
    featuresDescription: "A complete done-for-you service covering every component needed to build a strong, engaging social media presence.",
    outcomesDescription: "You do not just get posts scheduled. You get a growing community, higher engagement, and a stronger brand presence that builds trust and drives inbound interest.",
    ctaDescription: "Book a free 30-minute strategy call. We’ll review your current social presence, identify engagement gaps, and show how a better Social Media Marketing strategy can build a stronger audience and drive more inbound interest.",
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
      "Work with email marketing experts who build lifecycle email marketing, automated email marketing, and data driven email marketing systems that keep your brand visible, nurture intent, and turn subscribers into paying customers with measurable growth. Email Marketing https://www.nxtechnova.com/services/digital-marketing/email-marketing",
    metaTitle: "Automated Email Marketing | High-Conversion Sales Funnels",
    metaDescription: "Smart email sequences that turn cold subscribers into loyal fans. 5 Free High-Converting Email Templates with every strategy call!",
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
    
    featuresDescription: "A complete, done-for-you service covering every component needed to build high-converting email sequences and campaigns.",
    outcomesDescription: "You do not just get emails sent. You get an automated revenue channel with higher open rates, better engagement, and consistent conversions from your list.",
    ctaDescription: "Book a free 30-minute strategy call. We’ll review your current email performance, identify nurture gaps, and show how a stronger Email Marketing strategy can turn more subscribers into paying customers.",
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
      "Lower acquisition costs compared with short-term paid traffic",
      "Content that works for you 24/7",
    ],
    stats: [
      { value: "3×", label: "More Leads" },
      { value: "6 Mo", label: "To Scale" },
      { value: "4–8", label: "Posts/Month" },
    ],
    
    featuresDescription: "A complete done-for-you service covering every component needed to build a strong content engine that drives traffic and trust.",
    outcomesDescription: "You do not just get articles written. You get a growing content library with better search visibility, stronger brand authority, and more inbound leads over time.",
    ctaDescription: "Book a free 30-minute strategy call. We’ll review your current content, search visibility, conversion paths, and distribution gaps, then show how Content Marketing, SEO, Email Marketing, and AI Automation can turn your traffic into measurable growth.",
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
    
    featuresDescription: "A complete done-for-you build designed to deliver a fast, secure, and fully custom WordPress website your team can actually manage.",
    outcomesDescription: "You do not just get a theme installed. You get a high-performance website with fast load times, clean code, and a foundation built to rank and convert.",
    ctaDescription: "Book a free 30-minute strategy call and we’ll review your current setup, identify performance and conversion gaps, and show you how our WordPress Development service can improve speed, usability, SEO structure, and growth readiness.",
    ctaHeading: "Ready for a WordPress Site That Actually Performs?",
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
    ctaHeading: "Ready to Launch a Store That Sells Every Day?",
    ctaButton: "Get E-commerce Consultation",
  },

  "custom website development": {
    slug: "custom website development",
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
    ctaHeading: "Ready to Build a Platform That Fits the Way You Work?",
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
    metaTitle: "Expert Android App Development | High-Performance Mobile Tech",
    metaDescription: "Build a stable, scalable Android app for any industry. Native & Hybrid solutions optimized for the Play Store. Get a Free App UI/UX Audit + 1 Month Post-Launch Support!",
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
    
    featuresDescription: "A complete done-for-you build covering every component needed to launch a high-performance, crash-free Android app to the Play Store.",
    outcomesDescription: "Scalable architecture built for long-term growth.",
    ctaDescription: "Book a free 30-minute strategy call. We'll audit your current setup and show you exactly where we can help.",
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
    
    featuresDescription: "A complete done-for-you build covering every component needed to launch a high-performance, crash-free iOS app to the App Store.",
    outcomesDescription: "A roadmap built for stability, retention, and App Store growth.",
    ctaDescription: "Book a free 30-minute strategy call. We'll audit your current setup and show you exactly where we can help.",
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
    
    featuresDescription: "A complete done-for-you build covering every component needed to launch a scalable, cross-platform app tailored to your exact business needs.",
    outcomesDescription: "A roadmap ready for custom android mobile app design and development or custom ios mobile app design and development as you grow.",
    ctaDescription: "Book a free 30-minute strategy call. We’ll audit your current setup and show you exactly where we can help.",
    ctaHeading: "Ready to Build the App You've Been Imagining?",
    ctaButton: "Start Custom App Project",
  },
};

// Type alias for the BarChart3 icon used in SEO feature — import it separately
import { BarChart3 } from "lucide-react";

export const ALL_SUB_SERVICE_SLUGS = Object.keys(SUB_SERVICE_DATA);
