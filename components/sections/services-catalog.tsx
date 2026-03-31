"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useRef } from "react";
import {
  Bot,
  Globe,
  Smartphone,
  TrendingUp,
  ArrowRight,
  MessageSquare,
  Database,
  MousePointerClick,
  Mail,
  FileText,
  Share2,
  Search,
  ShoppingCart,
  Code2,
  Apple,
  Layers,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

interface SubService {
  label: string;
  slug: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: string;
  gradient: string;
}

interface MainService {
  id: string;
  slug: string;
  label: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  subServices: SubService[];
}

// Vibrant solid gradients for the interactive cards
const gradients = {
  blue: "from-blue-600 to-indigo-600",
  pink: "from-pink-500 to-rose-600",
  purple: "from-violet-500 to-purple-700",
  orange: "from-orange-400 to-red-500",
  cyan: "from-cyan-400 to-blue-500",
  emerald: "from-emerald-400 to-teal-500",
  red: "from-red-500 to-rose-700",
} as const;

const MAIN_SERVICES: MainService[] = [
  {
    id: "ai-marketing",
    slug: "ai-automation-marketing",
    label: "AI Marketing",
    description:
      "Automate lead generation, qualification, and follow-up with AI-powered systems that work 24/7.",
    icon: Bot,
    subServices: [
      {
        label: "Workflow & Process Automation",
        slug: "workflow-process-automation",
        icon: Layers,
        description: "Eliminate repetitive tasks with intelligent multi-step automation flows.",
        gradient: gradients.blue,
      },
      {
        label: "AI Chatbot Development",
        slug: "ai-chatbot-development",
        icon: MessageSquare,
        description: "Deploy chatbots that qualify leads and book meetings around the clock.",
        gradient: gradients.pink,
      },
      {
        label: "Automated CRM Management",
        slug: "automated-crm-management",
        icon: Database,
        description: "Keep your pipeline clean and accurate without any manual data entry.",
        gradient: gradients.purple,
      },
      {
        label: "Leads & Sales Automation",
        slug: "leads-sales-automation",
        icon: TrendingUp,
        description: "AI calls, qualifies, and books meetings from every new lead instantly.",
        gradient: gradients.orange,
      },
    ],
  },
  {
    id: "digital-marketing",
    slug: "digital-marketing",
    label: "Digital Marketing",
    description:
      "Performance marketing across every channel — turning traffic into measurable revenue.",
    icon: TrendingUp,
    subServices: [
      {
        label: "SEO",
        slug: "seo",
        icon: Search,
        description: "Rank for high-intent keywords and drive sustainable organic growth.",
        gradient: gradients.emerald,
      },
      {
        label: "Social Media Marketing",
        slug: "smm",
        icon: Share2,
        description: "Build an engaged audience across Instagram, LinkedIn, TikTok, and more.",
        gradient: gradients.cyan,
      },
      {
        label: "PPC Advertising",
        slug: "ppc",
        icon: MousePointerClick,
        description: "ROI-focused Google, Meta, and LinkedIn ad campaigns that scale.",
        gradient: gradients.blue,
      },
      {
        label: "Email Marketing",
        slug: "email-marketing",
        icon: Mail,
        description: "Automated sequences and campaigns that nurture leads into customers.",
        gradient: gradients.red,
      },
      {
        label: "Content Marketing",
        slug: "content-marketing",
        icon: FileText,
        description: "Authority content that attracts, educates, and converts your audience.",
        gradient: gradients.purple,
      },
    ],
  },
  {
    id: "web-development",
    slug: "web-development",
    label: "Web Development",
    description:
      "High-performance websites and web apps engineered to convert visitors into revenue.",
    icon: Globe,
    subServices: [
      {
        label: "WordPress Development",
        slug: "wordpress-development",
        icon: Globe,
        description: "Fast, custom WordPress sites your team can manage without a developer.",
        gradient: gradients.orange,
      },
      {
        label: "E-commerce Development",
        slug: "ecommerce-website-development",
        icon: ShoppingCart,
        description: "High-converting online stores with full payment and inventory integration.",
        gradient: gradients.cyan,
      },
      {
        label: "Custom Website Development",
        slug: "custom-website-development",
        icon: Code2,
        description: "Bespoke Next.js / React builds with zero template constraints.",
        gradient: gradients.emerald,
      },
    ],
  },
  {
    id: "app-development",
    slug: "app-development",
    label: "App Development",
    description:
      "Mobile and web applications built for scale, performance, and seamless user experience.",
    icon: Smartphone,
    subServices: [
      {
        label: "Android App Development",
        slug: "android-app-development",
        icon: Smartphone,
        description: "Native and cross-platform Android apps for 3 billion+ users.",
        gradient: gradients.blue,
      },
      {
        label: "iOS App Development",
        slug: "ios-app-development",
        icon: Apple,
        description: "Premium Swift or React Native apps for iPhone and iPad.",
        gradient: gradients.pink,
      },
      {
        label: "Custom App Development",
        slug: "custom-app-development",
        icon: Layers,
        description: "SaaS platforms, dashboards, and internal tools built to spec.",
        gradient: gradients.purple,
      },
    ],
  },
];

function ServiceCarousel({ service, index }: { service: MainService; index: number }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const ServiceIcon = service.icon;

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -360, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 360, behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
    >
      {/* Main Service Header Layer */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 border-b border-primary/10 pb-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-primary/10 border border-primary/20 shrink-0">
              <ServiceIcon className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              {service.label}
            </h2>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed pl-1">
            {service.description}
          </p>
        </div>

        {/* Navigation & Link */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full border border-primary/20 bg-white flex items-center justify-center text-primary hover:bg-primary/5 transition-colors shadow-sm cursor-pointer hover:shadow-md"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              className="w-12 h-12 rounded-full border border-primary/20 bg-white flex items-center justify-center text-primary hover:bg-primary/5 transition-colors shadow-sm cursor-pointer hover:shadow-md"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <Link
            href={`/services/${service.slug}`}
            className="inline-flex items-center gap-2 font-semibold text-primary hover:text-primary/80 transition-colors group mb-2 sm:mb-0 bg-white/50 px-5 py-2.5 rounded-full border border-primary/15 hover:bg-white"
          >
            Explore {service.label}
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Sub-Services Horizontally Scrolling Carousel */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 sm:gap-8 pb-10 pt-4 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {service.subServices.map((sub) => {
            const SubIcon = sub.icon;
            return (
              <Link
                key={sub.slug}
                href={`/services/${sub.slug}`}
                className="group relative shrink-0 w-[280px] sm:w-[320px] lg:w-[360px] h-[400px] rounded-4xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer block transform hover:-translate-y-1 snap-start"
              >
                {/* 1. Background Gradient */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${sub.gradient} transition-transform duration-700 group-hover:scale-110`}
                />

                {/* 2. Abstract Decorative Background Elements (Visible on base and hover) */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white/10 blur-3xl group-hover:scale-150 transition-transform duration-700 delay-75" />
                <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 rounded-full bg-black/10 blur-2xl group-hover:scale-150 transition-transform duration-700 delay-100" />

                {/* 3. NORMAL STATE (Centered Icon + Title -> Fades away and goes up on hover) */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center transition-all duration-500 ease-in-out group-hover:-translate-y-24 group-hover:opacity-0 group-hover:blur-sm z-10">
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center shadow-inner mb-6 border border-white/30 transition-transform duration-500">
                    <SubIcon className="w-10 h-10 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide leading-tight drop-shadow-md">
                    {sub.label}
                  </h3>
                </div>

                {/* 4. HOVER STATE (Details -> Comes up from bottom and fades in on hover) */}
                <div className="absolute inset-0 flex flex-col items-center justify-between p-8 text-center translate-y-24 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 z-20">
                  {/* Title slides to top of card inner */}
                  <div className="mt-2 w-full">
                    <h3 className="text-2xl font-extrabold text-white tracking-wide drop-shadow-md">
                      {sub.label}
                    </h3>
                    {/* Subtle separator */}
                    <div className="w-12 h-1 bg-white/30 mx-auto mt-4 rounded-full" />
                  </div>

                  {/* Description text center-bottom */}
                  <p className="text-white/95 text-base leading-relaxed my-auto drop-shadow-sm font-medium">
                    {sub.description}
                  </p>

                  {/* CTA button bottom locked */}
                  <div className="bg-white text-slate-900 rounded-full px-8 py-3.5 text-sm font-bold shadow-xl flex items-center gap-2 hover:bg-slate-50 transition-colors w-max mx-auto group/btn">
                    Learn More
                    <ChevronRight className="w-4 h-4 text-primary transition-transform group-hover/btn:translate-x-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Mobile Nav Arrows  */}
      <div className="flex sm:hidden justify-center items-center gap-4 mt-2 mb-8">
        <button
          onClick={scrollLeft}
          className="w-12 h-12 rounded-full border border-primary/20 bg-white flex items-center justify-center text-primary shadow-sm cursor-pointer hover:bg-primary/5"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={scrollRight}
          className="w-12 h-12 rounded-full border border-primary/20 bg-white flex items-center justify-center text-primary shadow-sm cursor-pointer hover:bg-primary/5"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
}

export function ServicesCatalog() {
  return (
    <section className="py-20 sm:py-28 bg-linear-to-b from-background to-primary/5">
      {/* Adding a global style block just for the scrollbar hide to ensure it works across browsers robustly */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
      <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Overall Category Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-6">
            What We Do
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            Services Built to{" "}
            <span className="text-primary">Drive Growth</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive suite of technical and marketing services. Pick exactly what you need, or combine them for maximum velocity.
          </p>
        </motion.div>

        {/* Iterate Main Services Blocks */}
        <div className="space-y-32">
          {MAIN_SERVICES.map((service, serviceIdx) => (
            <ServiceCarousel key={service.id} service={service} index={serviceIdx} />
          ))}
        </div>
      </div>
    </section>
  );
}
