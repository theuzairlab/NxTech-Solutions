"use client";

import { useState } from "react";
import { BarChart3, ArrowRight, Zap, TrendingUp, Search } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

type PortfolioCardProps = {
  title: string;
  category: string;
  type?: string | null;
  image: string;
  description: string;
  slug: string;
  metrics?: {
    label: string;
    value: string;
    icon: string;
  } | null;
  before?: Record<string, string> | null;
  after?: Record<string, string> | null;
  link?: string | null;
  // Admin mode props
  adminMode?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
};

export function PortfolioCard({
  title,
  category,
  type,
  description,
  metrics,
  before,
  after,
  adminMode = false,
  onEdit,
  onDelete,
}: PortfolioCardProps) {
  const [activeTab, setActiveTab] = useState<"before" | "after">(after ? "after" : "before");

  const MetricIcon = metrics?.icon
    ? (LucideIcons[metrics.icon as keyof typeof LucideIcons] as React.ComponentType<{ className?: string }>)
    : TrendingUp;

  const cardContent = (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5">
      {/* Premium Header Gradient */}
      <div className="relative h-32 w-full overflow-hidden sm:h-40">
        <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-primary/5 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(var(--primary-rgb),0.1),transparent)]" />
        
        {/* Category & Type Badges */}
        <div className="absolute top-6 left-6 flex flex-wrap gap-2">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary backdrop-blur-md">
            {category}
          </span>
          {type && (
            <span className="rounded-full bg-slate-900/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-600 backdrop-blur-md">
              {type}
            </span>
          )}
        </div>

        {/* Decorative Icon */}
        <div className="absolute -right-8 -top-8 opacity-[0.03] transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12">
          <LucideIcons.Layers size={160} />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative -mt-12 flex flex-1 flex-col p-6 sm:p-8">
        <div className="mb-6 flex flex-col gap-4">
          <h3 className="text-2xl font-bold leading-tight text-foreground transition-colors group-hover:text-primary">
            {title}
          </h3>
          <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {description}
          </p>
        </div>

        {/* Interactive Comparison Section */}
        {(before || after) && (
          <div className="mb-8 overflow-hidden rounded-2xl border border-slate-100 bg-slate-50/50 p-2 transition-colors group-hover:border-primary/10">
            {/* Toggle Header */}
            <div className="mb-2 flex items-center justify-between px-2 pt-2">
              <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                <Search className="h-3 w-3" />
                Case Impact
              </span>
              <div className="flex gap-1 rounded-lg bg-white p-1 shadow-sm border border-slate-100">
                <button
                  onClick={(e) => { e.preventDefault(); setActiveTab("before"); }}
                  className={`rounded-md px-3 py-1 text-[10px] font-bold transition-all ${
                    activeTab === "before" ? "bg-red-50 text-red-600 shadow-xs" : "text-slate-400 hover:text-slate-600"
                  }`}
                >
                  BEFORE
                </button>
                <button
                   onClick={(e) => { e.preventDefault(); setActiveTab("after"); }}
                  className={`rounded-md px-3 py-1 text-[10px] font-bold transition-all ${
                    activeTab === "after" ? "bg-emerald-50 text-emerald-600 shadow-xs" : "text-slate-400 hover:text-slate-600"
                  }`}
                >
                  AFTER
                </button>
              </div>
            </div>

            {/* List Content */}
            <div className="min-h-[100px] p-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: activeTab === "after" ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: activeTab === "after" ? -20 : 20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="space-y-3"
                >
                  {Object.entries((activeTab === "after" ? after : before) || {}).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between">
                      <span className="text-xs font-medium text-slate-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                      <div className="flex items-center gap-2">
                        <div className={`h-1.5 w-1.5 rounded-full ${activeTab === "after" ? "bg-emerald-400" : "bg-red-400"}`} />
                        <span className={`text-xs font-bold ${activeTab === "after" ? "text-emerald-700" : "text-red-700"}`}>{value as string}</span>
                      </div>
                    </div>
                  ))}
                  {Object.keys((activeTab === "after" ? after : before) || {}).length === 0 && (
                    <div className="flex h-full items-center justify-center italic text-slate-300 text-xs">
                      No data available
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* Premium Metrics Indicator */}
        {metrics && (
          <div className="mt-auto">
            <div className="group/metric relative flex items-center gap-4 overflow-hidden rounded-2xl bg-linear-to-br from-primary/5 to-transparent p-5 border border-primary/10 transition-all hover:bg-primary/10">
              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/30">
                <MetricIcon className="h-7 w-7" />
                <motion.div 
                   animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                   transition={{ duration: 3, repeat: Infinity }}
                   className="absolute inset-0 rounded-xl bg-white/20" 
                />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black tracking-tight text-primary">
                  {metrics.value}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  {metrics.label}
                </span>
              </div>
              <LucideIcons.TrendingUp className="absolute -right-4 -bottom-4 h-24 w-24 opacity-[0.03] text-primary" />
            </div>
          </div>
        )}

        {/* Admin Actions */}
        {adminMode && (
          <div className="mt-6 flex gap-3 border-t border-slate-100 pt-6">
            <button
              onClick={(e) => {
                e.preventDefault();
                onEdit?.();
              }}
              className="flex-1 rounded-xl border border-primary/20 py-2.5 text-xs font-bold text-primary transition-colors hover:bg-primary/5"
            >
              EDIT ENTRY
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                onDelete?.();
              }}
              className="flex-1 rounded-xl border border-red-100 py-2.5 text-xs font-bold text-red-500 transition-colors hover:bg-red-50"
            >
              DELETE
            </button>
          </div>
        )}
      </div>

      {/* Premium Hover Interaction */}
      <div className="pointer-events-none absolute inset-0 border-2 border-primary/0 transition-all duration-500 group-hover:border-primary/20 rounded-3xl" />
    </div>
  );

  return cardContent;
}


