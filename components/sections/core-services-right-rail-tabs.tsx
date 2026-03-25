"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "motion/react";
import type { CoreServiceId } from "@/lib/core-services-home-data";
import { CORE_ICON_MAP, CORE_SERVICES } from "@/lib/core-services-home-data";

export function CoreServicesRightRailTabs({
  activeServiceId,
  onActiveServiceIdChange,
  onHoverPauseChange,
}: {
  activeServiceId: CoreServiceId;
  onActiveServiceIdChange: (id: CoreServiceId) => void;
  onHoverPauseChange?: (paused: boolean) => void;
}) {
  const items = useMemo(() => CORE_SERVICES, []);
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div
      className="fixed right-4 top-1/2 z-[10002] flex -translate-y-1/2 pointer-events-auto"
      onMouseEnter={() => onHoverPauseChange?.(true)}
      onMouseLeave={() => onHoverPauseChange?.(false)}
    >
      {/* Desktop/tablet: always-open rail (like before) */}
      <div className="hidden md:block rounded-3xl border border-border/50 bg-card/70 backdrop-blur px-2 py-3 shadow-lg">
        <div className="flex flex-col gap-2">
          {items.map((item) => {
            const Icon = CORE_ICON_MAP[item.iconKey];
            const isActive = item.id === activeServiceId;

            return (
              <div key={item.id} className="relative group">
                <button
                  type="button"
                  onClick={() => onActiveServiceIdChange(item.id)}
                  aria-label={item.tabLabel}
                  className={`relative flex h-11 w-11 items-center justify-center rounded-2xl border transition-all duration-300 ${
                    isActive
                      ? "border-primary/50 bg-primary/10"
                      : "border-transparent hover:bg-white/5"
                  }`}
                >
                  <Icon className="relative h-5 w-5 text-primary" />
                </button>

                <div className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 opacity-0 translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
                  <div className="relative rounded-2xl border border-border/60 bg-card/95 px-3 py-2 text-sm font-semibold text-foreground shadow-lg backdrop-blur">
                    {item.tabLabel}
                    <span className="absolute right-[-6px] top-1/2 h-3 w-3 -translate-y-1/2 rotate-45 border-r border-t border-border/60 bg-card/95" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Small screens: arrow toggle */}
      <motion.div
        animate={{ width: isOpen ? 72 : 44 }}
        transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
        className="md:hidden rounded-3xl border border-border/50 bg-card/70 backdrop-blur shadow-lg overflow-hidden"
        style={{ willChange: "width" }}
      >
        <div className="flex flex-col items-center gap-2 px-2 py-2.5">
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Collapse service tabs" : "Expand service tabs"}
            className="relative flex h-9 w-9 items-center justify-center rounded-2xl border border-border/60 bg-white/70 text-foreground shadow-sm transition hover:bg-white"
          >
            {isOpen ? (
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            ) : (
              <ChevronLeft className="h-4 w-4 text-muted-foreground" />
            )}
          </button>

          <motion.div
            initial={false}
            animate={{
              opacity: isOpen ? 1 : 0,
              height: isOpen ? "auto" : 0,
            }}
            transition={{ duration: 0.25 }}
            className="flex flex-col gap-2 overflow-hidden"
          >
            {items.map((item) => {
              const Icon = CORE_ICON_MAP[item.iconKey];
              const isActive = item.id === activeServiceId;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onActiveServiceIdChange(item.id)}
                  aria-label={item.tabLabel}
                  className={`relative flex h-11 w-11 items-center justify-center rounded-2xl border transition-all duration-300 ${
                    isActive
                      ? "border-primary/50 bg-primary/10"
                      : "border-transparent hover:bg-white/5"
                  }`}
                >
                  <Icon className="relative h-5 w-5 text-primary" />
                </button>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </div>,
    document.body,
  );
}

