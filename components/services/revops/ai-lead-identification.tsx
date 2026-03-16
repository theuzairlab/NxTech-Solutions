"use client";

import { motion } from "motion/react";
import Image from "next/image";
import {
  BarChart3,
  MousePointer2,
  Mail,
  PhoneCall,
  DollarSign,
  Globe2,
  FileText,
  CheckCircle2,
} from "lucide-react";

const LEAD_ITEMS = [
  {
    icon: MousePointer2,
    title: "Behavior Tracking",
    desc: "See which pages, funnels, and assets each lead interacts with before and after they opt in.",
  },
  {
    icon: Mail,
    title: "Email Opens",
    desc: "Track open, click, and reply behavior so your AI agent knows who is engaged.",
  },
  {
    icon: PhoneCall,
    title: "Call Duration",
    desc: "Use call length and outcomes as scoring inputs to surface sales‑ready conversations.",
  },
  {
    icon: DollarSign,
    title: "Budget Selection",
    desc: "Capture budget ranges and readiness right inside the flow to qualify in or out instantly.",
  },
  {
    icon: Globe2,
    title: "Website Visits",
    desc: "Identify return visitors, high‑intent paths, and key product pages viewed before booking.",
  },
  {
    icon: FileText,
    title: "Form Answers",
    desc: "Score free‑text and structured answers to route VIP opportunities to the right rep.",
  },
] as const;

export function AIAutomationLeadIdentification() {
  return (
    <section className="py-20 sm:py-24 bg-linear-to-b from-background to-primary/5">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          {/* Left: Heading + visual */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                Lead Identification
              </span>
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold leading-tight text-foreground">
              See Your <span className="text-primary">Best Leads</span> Before
              They Talk To Sales
            </h2>
            <p className="mt-3 max-w-xl text-sm sm:text-base text-muted-foreground">
              Our scoring model tracks multiple signals. When the score exceeds
              threshold → instant sales alert.
            </p>

            <div className="mt-8 relative max-w-md overflow-hidden">
              <Image
                src="https://i.pinimg.com/736x/d6/d7/2e/d6d72e663a22bc8ddb6f594f974718ef.jpg"
                alt="Lead Identification"
                width={500}
                height={500}
                className="rounded-2xl object-cover aspect-square"
              />
            </div>
          </div>

          {/* Right: Items list */}
          <div className="flex flex-col gap-4">
            {LEAD_ITEMS.map((item, idx) => {
              const Icon = item.icon;
              const isWide = idx % 2 === 0;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className={`flex h-full gap-4 items-center rounded-2xl border border-border bg-card px-4 py-4 shadow-sm ${
                    isWide ? "w-full self-start" : "w-11/12 self-end"
                  }`}
                >
                  <div className="mb-3 inline-flex h-10 w-10 p-2 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-10 w-10 size-10 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <div className=" flex items-center gap-1 text-md text-primary">
                      <CheckCircle2 className="h-3 w-3" />
                      <span>Feeds your central lead score</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
