"use client";

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

import { motion, useScroll, useTransform, useMotionValue } from "motion/react";
import { useState, useEffect } from "react";

function ServiceCarousel({ service, index }: { service: MainService; index: number }) {
  const targetRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const ServiceIcon = service.icon;
  const [scrollRange, setScrollRange] = useState(0);

  // Horizontal Scroll Logic
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  useEffect(() => {
    const calculateScrollRange = () => {
      if (contentRef.current) {
        setScrollRange(contentRef.current.scrollWidth - contentRef.current.offsetWidth);
      }
    };

    calculateScrollRange();
    window.addEventListener("resize", calculateScrollRange);
    return () => window.removeEventListener("resize", calculateScrollRange);
  }, []);

  // Use the transform, but we will apply it only conditionally in style
  const x = useTransform(scrollYProgress, [0.1, 0.9], [0, -scrollRange]);

  return (
    <div ref={targetRef} className="relative h-auto py-12 lg:h-[250vh] lg:py-0">
      {/* Sticky Container (Desktop) / Flow Container (Mobile) */}
      <div className="relative h-auto flex flex-col justify-center overflow-visible lg:sticky lg:top-0 lg:h-screen lg:overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: index * 0.05 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* Main Service Header Layer */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-primary/10 pb-8 mb-10 text-center sm:text-left">
            <div className="max-w-2xl px-2 sm:px-0">
              <div className="inline-flex items-center gap-4 mb-4 justify-center sm:justify-start">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center bg-primary/10 border border-primary/20 shrink-0">
                  <ServiceIcon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-tight">
                  {service.label}
                </h2>
              </div>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed pl-1 max-w-[90%] mx-auto sm:mx-0">
                {service.description}
              </p>
            </div>

            <Link
              href={`/services/${service.slug}`}
              className="inline-flex items-center gap-2 font-bold text-primary hover:text-primary/80 transition-all group bg-white/50 px-8 py-3.5 rounded-full border border-primary/15 hover:bg-white shadow-sm hover:shadow-md w-max mx-auto lg:mx-0"
            >
              Explore {service.label}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="relative">
            {/* 
              Desktop: motion.div with horizontal translation based on scroll.
              Mobile: motion.div with standard overflow scroll.
            */}
            <motion.div
              ref={contentRef}
              style={{ x: typeof window !== 'undefined' && window.innerWidth >= 1024 ? x : 0 }}
              className="flex gap-6 sm:gap-10 overflow-x-auto lg:overflow-visible pb-12 lg:pb-0 px-4 sm:px-0 hide-scrollbar snap-x snap-mandatory -mx-4 lg:mx-0"
            >
              {service.subServices.map((sub) => {
                const SubIcon = sub.icon;
                return (
                  <Link
                    key={sub.slug}
                    href={`/services/${service.slug}/${sub.slug}`}
                    className="group relative shrink-0 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer block transform snap-center lg:snap-start w-[290px] h-[400px] sm:w-[350px] sm:h-[450px] lg:w-[420px] lg:h-[500px] rounded-[2rem] sm:rounded-[2.5rem]"
                  >
                    {/* 1. Background Gradient */}
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${sub.gradient} transition-transform duration-700 group-hover:scale-110`}
                    />

                    {/* 2. Abstract Decorative Background Elements */}
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white/10 blur-3xl group-hover:scale-150 transition-transform duration-700 delay-75" />
                    <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 rounded-full bg-black/10 blur-2xl group-hover:scale-150 transition-transform duration-700 delay-100" />

                    {/* 3. NORMAL STATE */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 sm:p-12 text-center transition-all duration-500 ease-in-out group-hover:-translate-y-24 group-hover:opacity-0 group-hover:blur-sm z-10">
                      <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center shadow-inner mb-6 sm:mb-10 border border-white/30 transition-transform duration-500">
                        <SubIcon className="w-8 h-8 sm:w-12 sm:h-12 text-white" strokeWidth={2} />
                      </div>
                      <h3 className="text-xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight drop-shadow-xl">
                        {sub.label}
                      </h3>
                    </div>

                    {/* 4. HOVER STATE */}
                    <div className="absolute inset-0 flex flex-col items-center justify-between p-8 sm:p-12 text-center translate-y-24 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 z-20">
                      <div className="mt-2 w-full">
                        <h3 className="text-xl sm:text-3xl font-black text-white tracking-tight drop-shadow-xl">
                          {sub.label}
                        </h3>
                        <div className="w-12 sm:w-16 h-1.5 bg-white/40 mx-auto mt-6 rounded-full" />
                      </div>

                      <p className="text-white/95 text-sm sm:text-lg leading-relaxed my-auto drop-shadow-md font-semibold">
                        {sub.description}
                      </p>

                      <div className="bg-white text-slate-900 rounded-full px-8 sm:px-12 py-3.5 sm:py-4 text-xs sm:text-sm font-black shadow-2xl flex items-center gap-2 sm:gap-3 hover:bg-slate-50 transition-all w-max mx-auto group/btn hover:scale-105 active:scale-95">
                        LEARN MORE
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary transition-transform group-hover/btn:translate-x-1.5" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
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
        <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          {MAIN_SERVICES.map((service, serviceIdx) => (
            <ServiceCarousel key={service.id} service={service} index={serviceIdx} />
          ))}
        </div>
      </div>
    </section>
  );
}
