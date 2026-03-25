/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  TrendingUp,
  Users,
  Zap,
  MessageCircle,
  BarChart3,
  Bot,
  Globe,
  Smartphone,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ParticlesBackground } from "@/components/ui/particles-background";
import type { CoreServiceId } from "@/lib/core-services-home-data";

const DASHBOARD_SLIDES = [
  {
    serviceTitle: "AI Marketing & Business Automation",
    slug: "ai-automation-marketing",
    campaigns: [
      { name: "AI lead follow-up", status: "24/7 automation", change: "+98%" },
      { name: "CRM sequences", status: "Qualified pipeline", change: "+45%" },
      { name: "Voice AI", status: "Instant qualification", change: "Live" },
    ],
    chart: { label: "High ROI & Leads", value: "3.2K", badge: "ROI +92%" },
    engagement: { value: "210%", delta: "20.5% Up Everyday" },
    tools: [
      { label: "Automation", icon: Bot, tone: "from-primary/25 to-primary/5" },
      { label: "CRM", icon: Users, tone: "from-emerald-500/20 to-emerald-500/5" },
      { label: "AI Ops", icon: Zap, tone: "from-sky-500/20 to-sky-500/5" },
    ],
    followUp: {
      title: "Lead Follow-up",
      message:
        "“Thanks for the proposal! We’d like to start with a 3‑month package. Looking forward to results.”",
    },
  },
  {
    serviceTitle: "Web Development",
    slug: "web-development",
    campaigns: [
      { name: "Landing pages", status: "Conversion-optimized", change: "+52%" },
      { name: "Core Web Vitals", status: "All green", change: "+38%" },
      { name: "CRM integration", status: "Leads synced", change: "Live" },
    ],
    chart: { label: "Conversion & Speed", value: "< 2s", badge: "CWV Green" },
    engagement: { value: "165%", delta: "Higher Conversion Rate" },
    tools: [
      { label: "Web", icon: Globe, tone: "from-indigo-500/20 to-indigo-500/5" },
      { label: "SEO", icon: TrendingUp, tone: "from-amber-500/20 to-amber-500/5" },
      { label: "Analytics", icon: BarChart3, tone: "from-sky-500/20 to-sky-500/5" },
    ],
    followUp: {
      title: "Lead Follow-up",
      message:
        "“Love the new landing page. We’re seeing better leads and faster load times already.”",
    },
  },
  {
    serviceTitle: "App Development",
    slug: "app-development",
    campaigns: [
      { name: "MVP launch", status: "On schedule", change: "+12w" },
      { name: "SaaS stack", status: "Scalable architecture", change: "Live" },
      { name: "Payments", status: "Stripe integrated", change: "Live" },
    ],
    chart: { label: "Users & Growth", value: "8.4K", badge: "MoM +18%" },
    engagement: { value: "140%", delta: "Better Retention" },
    tools: [
      { label: "Mobile", icon: Smartphone, tone: "from-violet-500/20 to-violet-500/5" },
      { label: "Payments", icon: Zap, tone: "from-emerald-500/20 to-emerald-500/5" },
      { label: "Infra", icon: BarChart3, tone: "from-slate-500/20 to-slate-500/5" },
    ],
    followUp: {
      title: "Lead Follow-up",
      message:
        "“App is smooth—users are sticking around and the onboarding feels effortless.”",
    },
  },
  {
    serviceTitle: "Digital Marketing",
    slug: "digital-marketing",
    campaigns: [
      { name: "Social media ads", status: "Optimizing creative", change: "+34%" },
      { name: "Email nurture", status: "High intent leads", change: "+21%" },
      { name: "Paid search", status: "New keywords live", change: "+18%" },
    ],
    chart: { label: "High ROI & Leads", value: "3.2K", badge: "ROI +92%" },
    engagement: { value: "210%", delta: "20.5% Up Everyday" },
    tools: [
      { label: "Ads", icon: TrendingUp, tone: "from-primary/25 to-primary/5" },
      { label: "SEO", icon: BarChart3, tone: "from-amber-500/20 to-amber-500/5" },
      { label: "Email", icon: MessageCircle, tone: "from-sky-500/20 to-sky-500/5" },
    ],
    followUp: {
      title: "Lead Follow-up",
      message:
        "“We want to start with a 3‑month package. Looking forward to results.”",
    },
  },
] as const;

const CalendlyModal = dynamic(
  () =>
    import("@/components/ui/calendly-modal").then((m) => ({
      default: m.CalendlyModal,
    })),
  { ssr: false },
);

type HeroTab = "contact" | "dashboard";

export function HeroSection({
  activeServiceId,
  onActiveServiceIdChange,
  paused,
}: {
  activeServiceId?: CoreServiceId;
  onActiveServiceIdChange?: (id: CoreServiceId) => void;
  paused?: boolean;
}) {
  const [showCalendlyModal, setShowCalendlyModal] = useState(false);
  const [activeTab, setActiveTab] = useState<HeroTab>("dashboard");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact-submissions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: "Homepage Hero Contact",
        }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Failed to submit message");
      }

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 4000);
    } catch (error) {
      console.error("Failed to submit hero contact form", error);
      alert(
        "Something went wrong while sending your message. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const isContactTab = activeTab === "contact";
  const derivedSlide = useMemo(() => {
    if (!activeServiceId) return 0;
    const idx = DASHBOARD_SLIDES.findIndex((s) => s.slug === activeServiceId);
    return idx >= 0 ? idx : 0;
  }, [activeServiceId]);

  const [dashboardSlide, setDashboardSlide] = useState(0);
  const [isDashboardPaused, setIsDashboardPaused] = useState(false);

  const goNextSlide = () => {
    setDashboardSlide((i) => (i + 1) % DASHBOARD_SLIDES.length);
  };

  const goPrevSlide = () => {
    setDashboardSlide((i) => (i - 1 + DASHBOARD_SLIDES.length) % DASHBOARD_SLIDES.length);
  };

  // Sync internal slide with external activeServiceId (when controlled).
  useEffect(() => {
    if (!activeServiceId) return;
    setDashboardSlide(derivedSlide);
  }, [activeServiceId, derivedSlide]);

  // When slide changes (auto / arrows / dots), update activeServiceId for the rest of home.
  useEffect(() => {
    if (!onActiveServiceIdChange) return;
    const slug = DASHBOARD_SLIDES[dashboardSlide]?.slug;
    if (!slug) return;
    onActiveServiceIdChange(slug);
  }, [dashboardSlide, onActiveServiceIdChange]);

  useEffect(() => {
    if (activeTab !== "dashboard") return;
    if (isDashboardPaused) return;
    if (paused) return;
    const t = setInterval(() => {
      goNextSlide();
    }, 5500);
    return () => clearInterval(t);
  }, [activeTab, isDashboardPaused, paused]);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-background">
      {/* Particle + grid background */}
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>

      <div className="container relative z-10 mx-auto px-4 pb-16 pt-24 sm:px-6 sm:pt-28 sm:pb-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-start gap-4 lg:flex-row lg:items-center lg:justify-between"
        >
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="flex-1 max-w-xl lg:max-w-2xl"
          >

            <h1 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl xl:text-6xl">
              <span className="block">We Build</span>
              <span className="block">AI Powered</span>
              <span className="block lg:inline">Growth Systems</span>
              <span className="mt-2 block text-primary">
                That Turn Traffic Into Revenue
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
              {process.env.NEXT_PUBLIC_SITE_NAME} builds AI-powered systems that
              automate lead generation and convert prospects into paying
              clients.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <Button
                size="lg"
                className="group cursor-pointer px-10 py-6 rounded-full text-base sm:text-lg bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => setShowCalendlyModal(true)}
              >
                Get Free Consultation
                <ArrowRight
                  size={36}
                  className="bg-white relative left-2 text-primary/80 rounded-full size-10 transition-transform group-hover:translate-x-0.5"
                />
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="cursor-pointer rounded-full border-2 border-primary/40 bg-white/80 hover:bg-white/90 hover:text-primary px-10 py-6 text-base sm:text-lg hover:border-primary "
              >
                <Link href="/services" className="flex items-center text-primary">
                  Explore Services
                  <ArrowRight
                    size={36}
                    className="bg-primary/10 relative left-2 text-primary  rounded-full size-10 transition-transform translate-x-1 -rotate-45 group-hover:translate-x-0.5"
                  />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: Tabbed card (Contact / Dashboard) */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.18 }}
            className="mt-6 flex w-full justify-center lg:mt-0 lg:w-auto lg:justify-end"
          >
            <motion.div
              className="relative mx-auto w-full max-w-[340px] rounded-3xl border border-primary/15 bg-white/80 p-1.5 backdrop-blur-2xl sm:max-w-[420px] aspect-square md:max-w-[480px] lg:max-w-[560px]"
              style={{
                maxWidth: "560px",
                boxShadow:
                  "0 25px 80px rgba(15,23,42,0.35), 0 0 0 1px rgba(148,163,184,0.3) inset",
              }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              onMouseEnter={() => setIsDashboardPaused(true)}
              onMouseLeave={() => setIsDashboardPaused(false)}
            >
              {/* Mirror / glow ring */}
              {/* <div className="pointer-events-none absolute -inset-px rounded-[28px] bg-linear-to-br from-primary/80 via-primary/50 to-transparent opacity-70 blur-sm" />
              <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-linear-to-t from-white/80 to-transparent" /> */}

              <div className="relative h-full rounded-[22px] bg-white/95 backdrop-blur-xl text-foreground flex flex-col overflow-hidden">
                {/* Tabs header */}
                <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-3 py-1 backdrop-blur">
                    <span className="text-[11px] font-medium text-foreground/80">
                      After NxTechNova
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold text-primary-foreground">
                      <Zap className="h-3 w-3" />
                      AI On
                    </span>
                  </div>

                  <div className="flex gap-1 rounded-full bg-slate-100 p-1 text-xs backdrop-blur">
                    <button
                      type="button"
                      onClick={() => setActiveTab("contact")}
                      className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 transition-colors ${
                        isContactTab
                          ? "bg-white text-primary shadow-sm"
                          : "text-slate-500 hover:text-primary"
                      }`}
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      <span>Contact</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("dashboard")}
                      className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 transition-colors ${
                        !isContactTab
                          ? "bg-white text-primary shadow-sm"
                          : "text-slate-500 hover:text-primary"
                      }`}
                    >
                      <TrendingUp className="h-3.5 w-3.5" />
                      <span>Dashboard</span>
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-h-0 p-4 sm:p-5 flex flex-col gap-4 min-w-[560px] sm:max-w-[420px] aspect-square md:max-w-[480px]">
                  {isContactTab ? (
                    /* 2-column grid: form left | stat cards right — mirrors dashboard layout */
                    <div className="grid min-h-0">

                      {/* LEFT — form */}
                      <div className="flex flex-col gap-2 min-h-0 overflow-y-auto overscroll-contain">
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                            Get in touch
                          </p>
                          <p className="mt-0.5 text-[11px] text-muted-foreground leading-snug">
                            Tell us your growth goals — we reply within 24 h.
                          </p>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                          <div className="space-y-1">
                            <label
                              htmlFor="hero-name"
                              className="text-[11px] font-medium text-foreground/80"
                            >
                              Name *
                            </label>
                            <input
                              id="hero-name"
                              name="name"
                              type="text"
                              required
                              value={formData.name}
                              onChange={handleInputChange}
                              className="h-9 w-full rounded-xl border border-slate-200 bg-white px-3 text-[13px] text-foreground placeholder:text-muted-foreground outline-none transition-shadow focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/25"
                              placeholder="Jane Doe"
                            />
                          </div>

                          <div className="space-y-1">
                            <label
                              htmlFor="hero-email"
                              className="text-[11px] font-medium text-foreground/80"
                            >
                              Work email *
                            </label>
                            <input
                              id="hero-email"
                              name="email"
                              type="email"
                              required
                              value={formData.email}
                              onChange={handleInputChange}
                              className="h-9 w-full rounded-xl border border-slate-200 bg-white px-3 text-[13px] text-foreground placeholder:text-muted-foreground outline-none transition-shadow focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/25"
                              placeholder="you@company.com"
                            />
                          </div>

                          <div className="flex flex-col flex-1 space-y-1 min-h-0">
                            <label
                              htmlFor="hero-message"
                              className="text-[11px] font-medium text-foreground/80"
                            >
                              What to improve? *
                            </label>
                            <textarea
                              id="hero-message"
                              name="message"
                              required
                              value={formData.message}
                              onChange={handleInputChange}
                              className="flex-1 min-h-0 w-full resize-none rounded-xl border border-slate-200 bg-white px-3 py-2 text-[13px] text-foreground placeholder:text-muted-foreground outline-none transition-shadow focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/25"
                              placeholder="Automate lead follow-up, qualify demos…"
                            />
                          </div>

                          <Button
                            type="submit"
                            size="sm"
                            disabled={isSubmitting}
                            className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-[13px] font-semibold text-primary-foreground shadow-md hover:bg-primary/90"
                          >
                            {isSubmitting ? (
                              <>
                                <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-primary-foreground/40 border-t-transparent" />
                                Sending…
                              </>
                            ) : (
                              <>
                                <ArrowRight className="h-3.5 w-3.5" />
                                Send message
                              </>
                            )}
                          </Button>

                          {isSubmitted && (
                            <motion.p
                              initial={{ opacity: 0, y: 4 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-[11px] font-medium text-emerald-600"
                            >
                              Message received. We&apos;ll reach out shortly.
                            </motion.p>
                          )}
                        </form>
                      </div>

                      {/* RIGHT — stat cards (same column structure as dashboard) */}
                      
                    </div>
                  ) : (
                    /* Dashboard tab: service slider with mirror/blur glass */
                    <div className="flex flex-col gap-3 min-h-0 flex-1">
                      <div className="relative min-h-0 flex-1 overflow-y-auto overscroll-contain pr-2">
                        <AnimatePresence mode="wait" initial={false}>
                          {DASHBOARD_SLIDES.map(
                            (slide, idx) =>
                              idx === dashboardSlide && (
                                <motion.div
                                  key={slide.slug}
                                  initial={{ opacity: 0, x: 24 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: -24 }}
                                  transition={{
                                    duration: 0.5,
                                    ease: [0.32, 0.72, 0, 1],
                                  }}
                                  className="space-y-3 text-foreground"
                                >
                                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/90">
                                    {slide.serviceTitle}
                                  </p>
                                  {/* 3 rows x 2 columns dashboard grid (like screenshot) */}
                                  <div className="grid gap-3">
                                    {/* Row 1 */}
                                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 shadow-lg backdrop-blur-md">
                                        <div className="flex items-center justify-between">
                                          <p className="text-[11px] font-semibold text-foreground">
                                            Campaigns on Track
                                          </p>
                                          <span className="rounded-xl border border-primary/10 bg-primary/5 p-1.5">
                                            <BarChart3 className="h-4 w-4 text-primary" />
                                          </span>
                                        </div>
                                        <div className="mt-3 space-y-2.5">
                                          {slide.campaigns.map((item) => (
                                            <div
                                              key={item.name}
                                              className="flex items-center justify-between rounded-xl border border-white/10 bg-primary/5 px-2.5 py-2"
                                            >
                                              <div className="min-w-0">
                                                <p className="truncate text-[12px] font-semibold text-foreground">
                                                  {item.name}
                                                </p>
                                                <p className="truncate text-[10px] text-muted-foreground">
                                                  {item.status}
                                                </p>
                                              </div>
                                              <span className="shrink-0 rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                                                {item.change}
                                              </span>
                                            </div>
                                          ))}
                                        </div>
                                      </div>

                                      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-3 shadow-lg backdrop-blur-md">
                                        <div className="flex items-start justify-between gap-2">
                                          <div className="text-center w-full">
                                            <p className="text-[11px] text-muted-foreground">
                                              {slide.chart.label}
                                            </p>
                                            <p className="mt-1 text-3xl font-bold text-foreground">
                                              {slide.chart.value}
                                            </p>
                                            <span className="mt-2 inline-flex items-center justify-center rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold text-primary">
                                              {slide.chart.badge}
                                            </span>
                                          </div>
                                          <span className="rounded-xl border border-primary/10 bg-primary/5 p-1.5">
                                            <BarChart3 className="h-4 w-4 text-primary" />
                                          </span>
                                        </div>
                                        {/* Line chart */}
                                        <svg
                                          viewBox="0 0 320 120"
                                          className="mt-3 h-[96px] w-full"
                                          aria-hidden="true"
                                        >
                                          <defs>
                                            <linearGradient id="nxChartFill" x1="0" y1="0" x2="0" y2="1">
                                              <stop offset="0%" stopColor="rgba(34,197,94,0.35)" />
                                              <stop offset="100%" stopColor="rgba(34,197,94,0)" />
                                            </linearGradient>
                                          </defs>
                                          <path
                                            d="M0,85 C35,65 55,95 85,75 C115,55 140,110 165,88 C190,66 210,50 235,70 C260,90 285,55 320,68"
                                            fill="none"
                                            stroke="rgba(34,197,94,0.9)"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                          />
                                          <path
                                            d="M0,85 C35,65 55,95 85,75 C115,55 140,110 165,88 C190,66 210,50 235,70 C260,90 285,55 320,68 L320,120 L0,120 Z"
                                            fill="url(#nxChartFill)"
                                          />
                                        </svg>
                                      </div>
                                    </div>

                                    {/* Row 2 */}
                                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 shadow-lg backdrop-blur-md">
                                        <div className="flex items-start justify-between">
                                          <p className="text-[13px] font-semibold text-foreground">
                                            Improved Engagement
                                          </p>
                                          <span className="rounded-xl border border-primary/10 bg-primary/5 p-2">
                                            <Users className="h-4 w-4 text-primary" />
                                          </span>
                                        </div>
                                        <p className="mt-2 text-4xl font-bold text-foreground">
                                          {slide.engagement.value}
                                        </p>
                                        <p className="mt-2 text-[12px] text-emerald-700">
                                          {slide.engagement.delta}
                                        </p>
                                      </div>

                                      <div className="grid grid-cols-3 gap-3">
                                        {slide.tools.map((t) => {
                                          const Icon = t.icon;
                                          return (
                                            <div
                                              key={t.label}
                                              className={`rounded-2xl border border-slate-200 bg-linear-to-b ${t.tone} p-3 shadow-lg backdrop-blur-md`}
                                            >
                                              <div className="flex h-full flex-col items-center justify-center gap-2">
                                                <div className="rounded-2xl bg-white p-2">
                                                  <Icon className="h-6 w-6 text-primary" />
                                                </div>
                                                <p className="text-[10px] font-semibold text-muted-foreground text-center">
                                                  {t.label}
                                                </p>
                                              </div>
                                            </div>
                                          );
                                        })}
                                      </div>
                                    </div>

                                    {/* Row 3 */}
                                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 shadow-lg backdrop-blur-md">
                                        <div className="flex items-center gap-2">
                                          <div className="h-9 w-9 rounded-2xl bg-primary/5" />
                                          <div className="min-w-0">
                                            <p className="text-[12px] font-semibold text-foreground">
                                              {slide.followUp.title}
                                            </p>
                                            <p className="text-[10px] text-muted-foreground">
                                              AI reply · Instant follow‑up
                                            </p>
                                          </div>
                                        </div>
                                        <p className="mt-3 text-[11px] text-muted-foreground leading-relaxed">
                                          {slide.followUp.message}
                                        </p>
                                      </div>

                                      <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-3 shadow-lg backdrop-blur-md">
                                        {[
                                          { label: "YouTube", short: "YT" },
                                          { label: "Meta", short: "M" },
                                          { label: "LinkedIn", short: "in" },
                                          { label: "X", short: "X" },
                                        ].map((s) => (
                                          <div
                                            key={s.label}
                                            className="h-10 w-10 rounded-2xl border border-primary/15 bg-white text-primary flex items-center justify-center text-[11px] font-semibold"
                                            title={s.label}
                                          >
                                            {s.short}
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </motion.div>
                              ),
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Slider dots + Explore link */}
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={goPrevSlide}
                            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-muted-foreground backdrop-blur transition hover:bg-primary/5 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                            aria-label="Previous slide"
                          >
                            <ChevronLeft className="h-4 w-4" />
                          </button>
                          {DASHBOARD_SLIDES.map((_, i) => (
                            <button
                              key={i}
                              type="button"
                              onClick={() => setDashboardSlide(i)}
                              className="rounded-full p-1 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                              aria-label={`Go to slide ${i + 1}`}
                            >
                              <motion.span
                                className="block h-2 w-2 rounded-full"
                                animate={{
                                  scale: i === dashboardSlide ? 1.2 : 1,
                                  backgroundColor:
                                    i === dashboardSlide
                                      ? "var(--primary)"
                                      : "hsl(var(--muted-foreground) / 0.4)",
                                }}
                                transition={{ duration: 0.2 }}
                              />
                            </button>
                          ))}
                          <button
                            type="button"
                            onClick={goNextSlide}
                            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-muted-foreground backdrop-blur transition hover:bg-primary/5 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                            aria-label="Next slide"
                          >
                            <ChevronRight className="h-4 w-4" />
                          </button>
                        </div>
                        <Link
                          href={`/services/${DASHBOARD_SLIDES[dashboardSlide].slug}`}
                          className="text-[11px] font-medium text-primary hover:underline"
                        >
                          Explore {DASHBOARD_SLIDES[dashboardSlide].serviceTitle}
                          <ArrowRight className="ml-0.5 inline h-3 w-3" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <CalendlyModal
        isOpen={showCalendlyModal}
        onClose={() => setShowCalendlyModal(false)}
      />
    </section>
  );
}
