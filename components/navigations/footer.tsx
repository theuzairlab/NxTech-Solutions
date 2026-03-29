"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  MapPin,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Send,
  ArrowUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blogs", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const services = [
  { name: "AI Automation", href: "/services/ai-automation-marketing" },
  { name: "Web Development", href: "/services/web-development" },
  { name: "App Development", href: "/services/app-development" },
  { name: "Digital Marketing", href: "/services/digital-marketing" },
];

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    href: process.env.NEXT_PUBLIC_FACEBOOK_URL || "",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: process.env.NEXT_PUBLIC_TWITTER_URL || "",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: process.env.NEXT_PUBLIC_LINKEDIN_URL || "",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "",
  },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [showTop, setShowTop] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setShowTop(scrolled > 300);
      setScrollPct(total > 0 ? scrolled / total : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // SVG ring constants
  const r = 20;
  const circumference = 2 * Math.PI * r;
  const dashOffset = circumference * (1 - scrollPct);

  const user_email = process.env.NEXT_PUBLIC_USER_EMAIL || "";
  const user_phone = process.env.NEXT_PUBLIC_USER_PHONE || "";

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <footer className="bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link
              href="/"
              className="relative z-20 flex items-center space-x-2 py-1 text-base font-normal group shrink-0 "
            >
              <Image
                src="/icon.png"
                alt={`${process.env.NEXT_PUBLIC_SITE_NAME || "NxTech"}`}
                width={40}
                height={40}
                className=" rounded-full"
              />
              <div className="flex flex-col">
                <span className="font-medium text-foreground whitespace-nowrap">
                  {process.env.NEXT_PUBLIC_SITE_NAME || "NxTech"}
                </span>
                <span className="text-[0.7rem] -mt-1 text-muted-foreground whitespace-nowrap">
                  {process.env.NEXT_PUBLIC_SITE_TAGLINE ||
                    "Simplify the future"}
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {process.env.NEXT_PUBLIC_SITE_NAME} delivers cutting-edge digital
              solutions that drive revenue, automate operations, and scale your
              business.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <a
                  href={`tel:${user_phone}`}
                  className="hover:text-primary transition-colors"
                >
                  {user_phone}
                </a>
              </div>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span>
                  71-75 Shelton Street,
                  <br />
                  Covent Garden,
                  <br />
                  London, WC2H 9JQ
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href={`mailto:${user_email}`}
                  className="hover:text-primary transition-colors"
                >
                  {user_email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              Newsletter
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to get updates on our latest solutions and industry
              insights.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
                <Button
                  type="submit"
                  size="icon"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  aria-label="Subscribe to newsletter"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3 text-foreground">
                Follow Us
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary hover:text-primary transition-colors"
                      aria-label={social.name}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} {process.env.NEXT_PUBLIC_SITE_NAME}.
              All rights reserved.
            </p>

            {/* Scroll-to-top button — centered */}
            <motion.button
              onClick={scrollToTop}
              initial={false}
              animate={showTop ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.7, y: 4 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              whileHover={{ scale: showTop ? 1.1 : 0.7 }}
              whileTap={{ scale: 0.92 }}
              aria-label="Scroll to top"
              className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              style={{ pointerEvents: showTop ? "auto" : "none" }}
            >
              {/* Progress ring */}
              <svg
                className="absolute inset-0 -rotate-90"
                width="48"
                height="48"
                viewBox="0 0 48 48"
              >
                <circle cx="24" cy="24" r="20" fill="none" stroke="white" strokeOpacity={0.25} strokeWidth="2.5" />
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={dashOffset}
                  style={{ transition: "stroke-dashoffset 0.15s ease" }}
                />
              </svg>
              {/* Arrow bounces up on hover */}
              <motion.span
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <ArrowUp className="relative z-10 h-5 w-5" strokeWidth={2.5} />
              </motion.span>
            </motion.button>

            <div className="flex flex-wrap gap-4 justify-center md:justify-end">
              <Link
                href="/terms-of-service"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
              <span className="text-muted-foreground">|</span>
              <Link
                href="/privacy-policy"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
