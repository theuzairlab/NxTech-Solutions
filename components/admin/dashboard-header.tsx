"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function DashboardHeader() {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between mb-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Admin Dashboard
        </h1>
        <p className="text-sm md:text-base text-muted-foreground mt-1">
          Overview of NxTech website performance, leads, and content activity.
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        className={cn(
          "inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs md:text-sm text-primary"
        )}
      >
        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>Systems healthy · Live analytics snapshot</span>
      </motion.div>
    </div>
  );
}


