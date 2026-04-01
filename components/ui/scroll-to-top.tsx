"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
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
    // Run once to initialize
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // SVG ring constants
  const r = 20;
  const circumference = 2 * Math.PI * r;
  const dashOffset = circumference * (1 - scrollPct);

  return (
    <AnimatePresence>
      {showTop && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-1/2 z-50 group flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30 outline-none hover:shadow-xl hover:shadow-primary/40 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          {/* Progress ring */}
          <svg
            className="absolute inset-0 -rotate-90"
            width="48"
            height="48"
            viewBox="0 0 48 48"
          >
            <circle
              cx="24"
              cy="24"
              r="20"
              fill="none"
              stroke="white"
              strokeOpacity={0.25}
              strokeWidth="2.5"
            />
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
      )}
    </AnimatePresence>
  );
}
