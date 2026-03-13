"use client";

import Image from "next/image";
import { useRef, useEffect, useState, useCallback } from "react";
import {
  ArrowRight,
  Bot,
  Globe,
  Smartphone,
  BarChart3,
  Check,
  Zap,
  TrendingUp,
  Users,
  Star,
} from "lucide-react";
import Link from "next/link";
import { motion, useInView } from "motion/react";

/* ───────────────────────── service data ─────────────────────── */

const SERVICES = [
  {
    id: "ai-automation-marketing",
    tabLabel: "AI Automation",
    tag: "Always-on Revenue Engine",
    title: "AI Marketing & Business Automation",
    description:
      "Build a growth system where AI captures, qualifies, and follows up with leads around the clock — while your team stays focused on closing high-intent prospects.",
    bullets: [
      "AI voice calling for instant lead qualification",
      "CRM automation that runs 24/7 follow-up sequences",
      "Smart lead scoring and pipeline routing",
    ],
    metrics: [
      { icon: Zap, value: "< 30s", label: "Response" },
      { icon: TrendingUp, value: "3.2x", label: "Pipeline" },
      { icon: Users, value: "24/7", label: "Coverage" },
    ],
    mainImage:
      "/hero1.jpg",
    visualTopLeft:
      "/abc.png",
    visualTopRight:
      "/abc.png",
    visualBottom:
      "/abc1.png",
    icon: Bot,
    accentClass: "text-primary",
    accentBg: "bg-primary/10",
    accentBorder: "border-primary/20",
    checkBg: "bg-primary",
  },
  {
    id: "web-development",
    tabLabel: "Web Dev",
    tag: "Conversion-Focused Digital HQ",
    title: "Web Development",
    description:
      "High-performance websites engineered to turn visitors into leads and revenue — speed optimised, CRM integrated, built for measurable conversion growth.",
    bullets: [
      "Conversion-first UX and landing page architecture",
      "Core Web Vitals and PageSpeed optimisation",
      "Analytics, CRM, and booking system integration",
    ],
    metrics: [
      { icon: Star, value: "90+", label: "PageSpeed" },
      { icon: TrendingUp, value: "CRO-led", label: "UX Focus" },
      { icon: Zap, value: "2–6 wks", label: "Launch" },
    ],
    mainImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=900&fit=crop&q=80",
    visualTopLeft:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop&q=80",
    visualTopRight:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop&q=80",
    visualBottom:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop&q=80",
    icon: Globe,
    accentClass: "text-indigo-600",
    accentBg: "bg-indigo-500/10",
    accentBorder: "border-indigo-300/25",
    checkBg: "bg-indigo-500",
  },
  {
    id: "app-development",
    tabLabel: "App Dev",
    tag: "Product Experiences People Keep Using",
    title: "App Development",
    description:
      "Design and engineer robust mobile and web applications with product-led UX, scalable architecture, and revenue-ready integrations from day one.",
    bullets: [
      "MVP to production roadmap — fast time to market",
      "Scalable SaaS architecture and infrastructure",
      "Payments, auth, push notifications, and analytics",
    ],
    metrics: [
      { icon: Zap, value: "14 days", label: "First Sprint" },
      { icon: Star, value: "Prod-ready", label: "Quality" },
      { icon: Users, value: "iOS + Web", label: "Platforms" },
    ],
    mainImage:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&h=900&fit=crop&q=80",
    visualTopLeft:
      "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=600&h=400&fit=crop&q=80",
    visualTopRight:
      "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=600&h=400&fit=crop&q=80",
    visualBottom:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop&q=80",
    icon: Smartphone,
    accentClass: "text-violet-600",
    accentBg: "bg-violet-500/10",
    accentBorder: "border-violet-300/25",
    checkBg: "bg-violet-500",
  },
  {
    id: "digital-marketing",
    tabLabel: "Digital Marketing",
    tag: "Performance Media With Measurable ROI",
    title: "Digital Marketing",
    description:
      "Scale demand with paid media, retargeting, and funnel optimisation tuned by daily data — so ad spend stays efficient and outcomes remain predictable.",
    bullets: [
      "Meta and Google Ads with daily optimisation",
      "LinkedIn B2B targeting for high-value pipeline",
      "Retargeting funnels that win back warm visitors",
    ],
    metrics: [
      { icon: TrendingUp, value: "200%+", label: "Leads" },
      { icon: Zap, value: "Daily", label: "Optimisation" },
      { icon: Star, value: "E2E", label: "Attribution" },
    ],
    mainImage:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1400&auto=format&fit=crop",
    visualTopLeft:
      "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=600&h=400&fit=crop&q=80",
    visualTopRight:
      "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=600&h=400&fit=crop&q=80",
    visualBottom:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop&q=80",
    icon: BarChart3,
    accentClass: "text-amber-600",
    accentBg: "bg-amber-500/10",
    accentBorder: "border-amber-300/25",
    checkBg: "bg-amber-500",
  },
] as const;

type Service = (typeof SERVICES)[number];

/* ───────── image collage (same for every service) ───────────── */
/* Layout: main image center, visual top-left, visual top-right,  */
/*         visual bottom-center — all overlapping the main image   */

function ImageCollage({ service }: { service: Service }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="relative sm:h-[440px] lg:h-[480px]">
      {/* Main large image */}
      <div
        className="overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl shadow-black/15 ring-1 ring-black/8 transition-transform duration-700 ease-out"
        style={{ transform: inView ? "scale(1)" : "scale(0.96)" }}
      >
        <img
          src={service.mainImage}
          alt={service.title}
          className="h-[220px] w-full object-cover sm:h-[300px] lg:h-full"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent" />
      </div>

      {/* Visual — top-left overlap (desktop only) */}
      <div
        className="absolute -left-16 top-4 hidden w-32 overflow-hidden rounded-2xl border-4 border-white shadow-lg shadow-black/10 transition-all duration-600 ease-out sm:block"
        style={{
          transform: inView ? "translate(0,0)" : "translate(-16px,-8px)",
          transitionDelay: "150ms",
        }}
      >
        <img
          src={service.visualTopLeft}
          alt={`${service.title} visual`}
          className="w-32"
        />
      </div>

      {/* Visual — top-right overlap (desktop only) */}
      <div
        className="absolute hidden w-32 overflow-hidden rounded-2xl border-4 border-white shadow-lg shadow-black/10 transition-all duration-600 ease-out sm:block"
        style={{
          transform: inView ? "translate(0,0)" : "translate(16px,-8px)",
          transitionDelay: "250ms",
          top: "-30px",
          right: "-30px"
        }}
      >
        <img
          src={service.visualTopRight}
          alt={`${service.title} detail`}
          className="w-32"
        />
      </div>

      {/* Visual — bottom-center overlap (desktop only) */}
      <div
        className="absolute hidden  w-96 overflow-hidden rounded-2xl border-4 border-white shadow-lg shadow-black/10 transition-all duration-600 ease-out sm:block"
        style={{
          transform: inView ? "translateY(0)" : "translateY(16px)",
          transitionDelay: "350ms",
          bottom: "0rem",
          left: "6rem"
        }}
      >
        <img
          src={service.visualBottom}
          alt={`${service.title} feature`}
          className="w-96 "
        />
      </div>
    </div>
  );
}

/* ─────────── service section (same layout for all 4) ────────── */

function ServiceSection({
  service,
  sectionRef,
}: {
  service: Service;
  sectionRef: (el: HTMLDivElement | null) => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const inView = useInView(contentRef, { once: true, margin: "-80px" });
  const Icon = service.icon;

  const stagger = (i: number): object => ({
    initial: { opacity: 0, y: 22 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] },
  });

  return (
    <div
      id={`service-${service.id}`}
      ref={sectionRef}
      className="py-10 sm:py-16 lg:py-28"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Service title bar */}
        {/* <motion.div
          className="mb-10 flex items-center gap-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-xl ${service.accentBg} border ${service.accentBorder}`}
          >
            <Icon className={`h-5 w-5 ${service.accentClass}`} />
          </div>
          <h3 className="text-xl font-bold text-foreground sm:text-2xl">
            {service.title}
          </h3>
        </motion.div> */}

        {/* Two-column: image collage LEFT | content RIGHT */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT — image collage */}
          <ImageCollage service={service} />

          {/* RIGHT — content */}
          <div ref={contentRef} className="space-y-6">
            {/* Tag badge */}
            <motion.span
              {...stagger(0)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[13px] font-semibold ${service.accentBg} ${service.accentBorder} ${service.accentClass}`}
            >
              <Icon className="h-3.5 w-3.5" />
              {service.tag}
            </motion.span>

            {/* Heading */}
            <motion.h4
              {...stagger(1)}
              className="text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-[2.6rem]"
            >
              {service.title}
            </motion.h4>

            {/* Paragraph */}
            <motion.p
              {...stagger(2)}
              className="max-w-lg text-base leading-relaxed text-muted-foreground"
            >
              {service.description}
            </motion.p>

            {/* Bullet points */}
            <motion.ul {...stagger(3)} className="space-y-3">
              {service.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm">
                  <span
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${service.checkBg}`}
                  >
                    <Check className="h-3 w-3 text-white" />
                  </span>
                  <span className="text-foreground/80">{b}</span>
                </li>
              ))}
            </motion.ul>

            {/* Metrics row */}
            <motion.div {...stagger(4)} className="flex flex-wrap gap-3 pt-1">
              {service.metrics.map((m) => {
                const MIcon = m.icon;
                return (
                  <div
                    key={m.label}
                    className={`flex items-center gap-2 rounded-2xl border px-4 py-2.5 ${service.accentBg} ${service.accentBorder}`}
                  >
                    <MIcon className={`h-4 w-4 ${service.accentClass}`} />
                    <div className="leading-none">
                      <p className={`text-sm font-bold ${service.accentClass}`}>
                        {m.value}
                      </p>
                      <p className="mt-0.5 text-[10px] text-muted-foreground">
                        {m.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* CTA */}
            <motion.div {...stagger(5)}>
              <Link
                href={`/services/${service.id}`}
                className="group inline-flex items-center gap-4 rounded-full bg-foreground px-2 py-2 text-sm font-semibold text-background shadow-sm transition-all duration-300 hover:bg-foreground/90 hover:gap-4"
              >
                Explore Service
                <ArrowRight size={30} className="transition-transform text-white bg-primary p-1 rounded-full duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}


/* ───────────── main export ──────────────────────────────────── */

export function CoreServicesGrid() {
  const [activeId, setActiveId] = useState<string>(SERVICES[0].id);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SERVICES.forEach((service, i) => {
      const el = sectionRefs.current[i];
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(service.id);
        },
        { threshold: 0.35 },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleTabClick = useCallback((id: string) => {
    const el = document.getElementById(`service-${id}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const setRef = useCallback(
    (index: number) => (el: HTMLDivElement | null) => {
      sectionRefs.current[index] = el;
    },
    [],
  );

  return (
    <section className="bg-white">
      {/* ══════ Screen 1 — Header + 4 small preview cards ══════ */}
      <div className="pb-6 pt-16 sm:pt-24">
        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8 xl:pl-28"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold leading-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            Our Core <br />
            <div className="flex items-center gap-2">
              <div className="h-px w-24 bg-primary/20 shrink-0 mt-2 sm:w-40 lg:w-64" />
              <span className="text-primary">Services</span>
            </div>
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground/80 sm:text-lg">
            Automation. Development. Performance Marketing.
          </p>
        </motion.div>

        {/* 4 small preview cards */}
        <motion.div
          className="container mx-auto mt-10 grid grid-cols-2 gap-3 px-4 sm:grid-cols-4 sm:gap-4 sm:px-6 lg:px-8 xl:pl-28"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <button
                key={service.id}
                type="button"
                onClick={() => {
                  const el = document.getElementById(`service-${service.id}`);
                  if (el)
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-white p-5 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${service.accentBg} border ${service.accentBorder} transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className={`h-5 w-5 ${service.accentClass}`} />
                </div>
                <p className="text-center text-sm font-semibold text-foreground">
                  {service.tabLabel}
                </p>
              </button>
            );
          })}
        </motion.div>
      </div>

      {/* ══════ Screen 2–5 — Full service sections ══════ */}
      {SERVICES.map((service, index) => (
        <ServiceSection
          key={service.id}
          service={service}
          sectionRef={setRef(index)}
        />
      ))}

      {/* ══════ Bottom CTA ══════ */}
      <div className="py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-6 text-muted-foreground">
            Ready to see how these services work together?
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-white shadow-md transition-all hover:bg-primary/90 hover:gap-3"
          >
            View All Services
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
