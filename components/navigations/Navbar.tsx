"use client";

import {
  Navbar,
  NavBody,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useScroll, useMotionValueEvent } from "motion/react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import {
  Bot,
  Globe,
  Smartphone,
  BarChart3,
  ArrowRight,
  ChevronDown,
  Zap,
} from "lucide-react";
import { Button } from "../ui/button";

// ─── Services mega-dropdown data ───────────────────────────────────────────────
const CORE_SERVICES = [
  {
    id: "ai-automation-marketing",
    label: "AI Automation",
    icon: Bot,
    href: "/services/ai-automation-marketing",
    gradient: "linear-gradient(135deg, #7c3aed, #9333ea)",
    cardBg: "#f5f3ff",
    cardBorder: "#ede9fe",
    labelColor: "#7c3aed",
    badgeBg: "#ede9fe",
    badgeColor: "#6d28d9",
    stat: { value: "+210%", label: "Leads" },
    subServices: [
      { label: "Workflow & Process Automation", href: "/services/ai-automation-marketing/workflow-process-automation" },
      { label: "AI Chatbot Development", href: "/services/ai-automation-marketing/ai-chatbot-development" },
      { label: "Automated CRM Management", href: "/services/ai-automation-marketing/automated-crm-management" },
      { label: "Leads & Sales Automation", href: "/services/ai-automation-marketing/leads-sales-automation" },
    ],
  },
  {
    id: "web-development",
    label: "Web Development",
    icon: Globe,
    href: "/services/web-development",
    gradient: "linear-gradient(135deg, #4f46e5, #2563eb)",
    cardBg: "#eef2ff",
    cardBorder: "#e0e7ff",
    labelColor: "#4338ca",
    badgeBg: "#e0e7ff",
    badgeColor: "#3730a3",
    stat: { value: "+165%", label: "Conversions" },
    subServices: [
      { label: "WordPress Development", href: "/services/web-development/wordpress-development" },
      { label: "E-commerce Development", href: "/services/web-development/ecommerce-website-development" },
      { label: "Custom Website Development", href: "/services/web-development/custom-website-development" },
    ],
  },
  {
    id: "app-development",
    label: "App Development",
    icon: Smartphone,
    href: "/services/app-development",
    gradient: "linear-gradient(135deg, #c026d3, #db2777)",
    cardBg: "#fdf4ff",
    cardBorder: "#fae8ff",
    labelColor: "#a21caf",
    badgeBg: "#fae8ff",
    badgeColor: "#86198f",
    stat: { value: "+140%", label: "Retention" },
    subServices: [
      { label: "Android App Development", href: "/services/app-development/android-app-development" },
      { label: "iOS App Development", href: "/services/app-development/ios-app-development" },
      { label: "Custom App Development", href: "/services/app-development/custom-app-development" },
    ],
  },
  {
    id: "digital-marketing",
    label: "Digital Marketing",
    icon: BarChart3,
    href: "/services/digital-marketing",
    gradient: "linear-gradient(135deg, #f59e0b, #f97316)",
    cardBg: "#fffbeb",
    cardBorder: "#fde68a",
    labelColor: "#b45309",
    badgeBg: "#fef3c7",
    badgeColor: "#92400e",
    stat: { value: "+92%", label: "ROI" },
    subServices: [
      { label: "SEO", href: "/services/digital-marketing/seo" },
      { label: "Social Media Marketing", href: "/services/digital-marketing/smm" },
      { label: "PPC Advertising", href: "/services/digital-marketing/ppc" },
      { label: "Email Marketing", href: "/services/digital-marketing/email-marketing" },
      { label: "Content Marketing", href: "/services/digital-marketing/content-marketing" },
    ],
  },
] as const;

// ─── ServicesDropdown ───────────────────────────────────────────────────────────
function ServicesDropdown({ visible }: { visible?: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isActive = pathname.startsWith("/services");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 120);
  };

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger */}
      <button
        type="button"
        className={cn(
          "relative flex items-center gap-1 rounded-lg py-2 font-medium transition-all duration-200 whitespace-nowrap shrink-0 focus:outline-none",
          visible ? "px-2 text-sm" : "px-4 text-base",
          isActive
            ? "text-primary font-medium"
            : "text-muted-foreground hover:text-foreground",
        )}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {/* Hover background pill */}
        {open && (
          <motion.div
            layoutId="hovered"
            className="absolute inset-0 h-full w-full rounded-lg bg-primary/10"
          />
        )}
        {isActive && (
          <motion.div
            layoutId="activeTab"
            className="absolute inset-0 h-full w-full rounded-lg bg-primary/10"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
        <span className="relative z-20">Services</span>
        <motion.span
          className="relative z-20"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
        >
          <ChevronDown className="h-3.5 w-3.5" />
        </motion.span>
      </button>

      {/* Dropdown panel — anchored so it stays within viewport */}
      <AnimatePresence>
        {open && (
          /* Positioning wrapper — separate from the animated element so Framer
             doesn't override the CSS left+translateX with its own transform */
          <div
            className="absolute z-9999 "
            style={{ left: "50%", top: "55px", transform: "translateX(-50%)", width: "560px" }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.96 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-[560px] rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_24px_64px_-12px_rgba(0,0,0,0.20)]"
              style={{ transformOrigin: "top center" }}
            >

              {/* Header */}
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
                    <Zap className="h-3 w-3" />
                    Core Services
                  </span>
                  <span className="text-[11px] text-slate-500">
                    AI-powered growth systems
                  </span>
                </div>
                {/* <Link
                  href="/services"
                  className="flex items-center gap-1 text-[11px] font-semibold text-primary hover:underline"
                >
                  View all
                  <ArrowRight className="h-3 w-3" />
                </Link> */}
              </div>

              {/* Service cards — 2 columns */}
              <div className="grid grid-cols-2 gap-2">
                {CORE_SERVICES.map((svc, idx) => {
                  const Icon = svc.icon;
                  return (
                    <motion.div
                      key={svc.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: idx * 0.05, ease: "easeOut" }}
                    >
                      <div
                        className="group flex flex-col items-start gap-2.5 rounded-xl border p-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                        style={{ backgroundColor: svc.cardBg, borderColor: svc.cardBorder }}
                      >
                        {/* Header Link */}
                        <Link href={svc.href} className="flex items-center gap-3 w-full group/head">
                          {/* Gradient icon box */}
                          <div
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl shadow-sm transition-transform group-hover/head:scale-105"
                            style={{ background: svc.gradient }}
                          >
                            <Icon className="h-5 w-5 text-white" />
                          </div>

                          {/* Text */}
                          <div className="min-w-0 flex-1 flex flex-col">
                            <div className="flex items-center justify-between gap-1 w-full">
                              <p className="text-base font-bold leading-tight group-hover/head:underline" style={{ color: svc.labelColor }}>
                                {svc.label}
                              </p>
                            </div>
                          </div>
                        </Link>

                        {/* Sub-Services Links */}
                        <div className="flex flex-col gap-1.5 w-full pl-[5px]">
                          {svc.subServices.map((sub, i) => (
                            <Link
                              key={i}
                              href={sub.href}
                              className="text-sm font-medium text-slate-500 hover:text-primary transition-colors flex items-center gap-1 w-fit group/sub"
                            >
                              <span className="opacity-40 transition-opacity group-hover/sub:opacity-100 group-hover/sub:translate-x-0.5 duration-200">›</span>
                              <span className="group-hover/sub:translate-x-0.5 transition-transform duration-200 truncate ">{sub.label}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Footer CTA */}
              <div className="mt-3 flex items-center justify-between gap-3 rounded-xl border border-primary/20 bg-linear-to-r from-primary/5 to-primary/10 px-4 py-2.5">
                <div className="min-w-0">
                  <p className="text-[12px] font-semibold text-foreground">Not sure which fits?</p>
                  <p className="text-[11px] text-slate-500">Explore all services to find the perfect solution for your business.</p>
                </div>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="cursor-pointer text-white rounded-full border-2 border-primary/40 bg-primary hover:bg-primary/90 px-10 py-6 text-base sm:text-lg"
                >
                  <Link href="/services" className="flex items-center">
                    Explore All Services
                    <ArrowRight
                      size={36}
                      className="bg-white text-primary relative left-2 rounded-full size-10 transition-transform translate-x-1 -rotate-45 group-hover:translate-x-0.5"
                    />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── NavItems (custom, without Services) ────────────────────────────────────────
function CustomNavItems({
  items,
  visible,
}: {
  items: { name: string; link: string; icon?: React.ReactNode }[];
  visible?: boolean;
}) {
  const [hovered, setHovered] = useState<number | null>(null);
  const pathname = usePathname();

  // Filter out Services — it's rendered separately as ServicesDropdown
  const otherItems = items.filter((i) => i.name !== "Services");

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "hidden flex-row items-center font-medium transition duration-200 lg:flex flex-1 justify-center",
        visible ? "gap-0 text-sm" : "gap-1 text-base",
      )}
    >
      {otherItems.map((item, idx) => {
        // Insert ServicesDropdown after "About" (idx 1 in filtered list = after About)
        const insertDropdownAfter = otherItems.findIndex((i) => i.name === "About");
        const isActive =
          pathname === item.link ||
          (item.link !== "/" && pathname.startsWith(item.link));

        return (
          <div key={`group-${idx}`} className="flex items-center">
            <Link
              onMouseEnter={() => setHovered(idx)}
              className={cn(
                "relative py-2 rounded-lg transition-all duration-200 whitespace-nowrap shrink-0",
                visible ? "px-2 text-sm" : "px-4 text-base",
                isActive
                  ? "text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground",
              )}
              key={`link-${idx}`}
              href={item.link}
            >
              {hovered === idx && (
                <motion.div
                  layoutId="hovered"
                  className="absolute inset-0 h-full w-full rounded-lg bg-primary/10"
                />
              )}
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 h-full w-full rounded-lg bg-primary/10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-20">{item.name}</span>
            </Link>
            {/* Insert Services dropdown right after About */}
            {idx === insertDropdownAfter && (
              <ServicesDropdown visible={visible} />
            )}
          </div>
        );
      })}
    </motion.div>
  );
}

// ─── Main NavbarComponent ────────────────────────────────────────────────────────
const NAV_SCROLL_THRESHOLD = 80;

export function NavbarComponent({
  navItems,
}: {
  navItems: { name: string; link: string; icon?: React.ReactNode }[];
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setNavVisible(latest > NAV_SCROLL_THRESHOLD);
  });

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          {/* We pass visible via NavBody's cloneElement — but CustomNavItems
              needs it too. We handle this by wrapping in a relay component. */}
          <VisibleRelay navItems={navItems} visible={navVisible} />
          <div className="flex items-center gap-2 shrink-0 min-w-0">
            <NavbarButton
              href="/get-quote"
              variant="secondary"
              className="text-xs sm:text-sm px-2 sm:px-3 py-1.5 whitespace-nowrap shrink-0"
            >
              Get a Quote
            </NavbarButton>
            <NavbarButton
              href="/contact"
              variant="primary"
              className="text-xs sm:text-sm px-2 sm:px-3 py-1.5 whitespace-nowrap shrink-0"
            >
              Contact Us
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>
        </MobileNav>
      </Navbar>

      {/* Mobile Sidebar */}
      <MobileNavMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      >
        {navItems.map((item, idx) => {
          const isActive =
            pathname === item.link ||
            (item.link !== "/" && pathname.startsWith(item.link));

          return (
            <Link
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "flex items-center gap-4 px-4 py-4 rounded-lg transition-all duration-200",
                isActive
                  ? "bg-primary/10 text-primary font-semibold"
                  : "text-foreground hover:bg-accent",
              )}
            >
              {item.icon && (
                <span
                  className={cn(
                    "text-xl",
                    isActive ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  {item.icon}
                </span>
              )}
              <span className="text-lg">{item.name}</span>
            </Link>
          );
        })}

        {/* Mobile services sub-links */}
        <div className="mx-4 mt-1 rounded-xl border border-border/60 bg-slate-50 p-3">
          <p className="mb-2 px-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
            Core Services
          </p>
          <div className="space-y-4">
            {CORE_SERVICES.map((svc) => {
              const Icon = svc.icon;
              return (
                <div key={svc.id} className="flex flex-col gap-1">
                  <Link
                    href={svc.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 rounded-lg px-3 py-2 transition-colors hover:bg-white"
                    style={{ color: svc.labelColor }}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span className="text-[14px] font-bold">{svc.label}</span>
                  </Link>
                  <div className="flex flex-col gap-1 pl-10 pr-2">
                    {svc.subServices.map((sub, idx) => (
                      <Link
                        key={idx}
                        href={sub.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-[13px] font-medium text-slate-500 hover:text-primary py-1.5 transition-colors border-l-2 border-slate-200 pl-3"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex w-full flex-col gap-4 pt-4 mt-4 border-t border-border">
          <NavbarButton
            href="/get-quote"
            onClick={() => setIsMobileMenuOpen(false)}
            variant="primary"
            className="w-full"
          >
            Get a Quote
          </NavbarButton>
        </div>
      </MobileNavMenu>
    </>
  );
}

/**
 * NavBody uses React.Children.cloneElement to pass `visible` to NavItems.
 * Since we replaced NavItems with CustomNavItems (a non-NavItems type),
 * we need a relay wrapper that receives the `visible` prop from NavBody
 * and forwards it to CustomNavItems.
 *
 * NavBody only clones children whose type === NavItems, but we can
 * simply pass visible as a normal prop here since we control the wrapper.
 */
function VisibleRelay({
  navItems,
  visible,
}: {
  navItems: { name: string; link: string; icon?: React.ReactNode }[];
  visible?: boolean;
}) {
  return <CustomNavItems items={navItems} visible={visible} />;
}
