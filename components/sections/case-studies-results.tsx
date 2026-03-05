"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Placeholder data per RevOps - Case Studies Results Grid
const CASE_STUDIES = [
  { industry: "Real Estate", leadsIncrease: "180%", revenueGrowth: "142%", automationSaved: "15 hrs/week" },
  { industry: "Dental", leadsIncrease: "210%", revenueGrowth: "95%", automationSaved: "12 hrs/week" },
  { industry: "SaaS", leadsIncrease: "165%", revenueGrowth: "118%", automationSaved: "20 hrs/week" },
];

export function CaseStudiesResults() {
  return (
    <section className="py-24 relative overflow-hidden -mt-32 pt-40 rounded-b-[50px] sm:rounded-b-[100px] md:rounded-b-[150px] bg-linear-to-b from-[#f5f5ff] via-white to-[#e6e6ff] z-8">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/3 w-[420px] h-[420px] bg-primary/12 blur-3xl" />
        <div className="absolute bottom-[-200px] right-[-120px] w-[520px] h-[520px] bg-primary/10 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur">
            <span className="text-xs font-semibold tracking-[0.25em] text-primary">
              RESULTS
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            <span className="bg-linear-to-r from-foreground via-primary to-primary bg-clip-text text-transparent">
              Case Studies
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground/90 max-w-2xl mx-auto">
            Our clients don&apos;t just get leads. They get qualified opportunities.
          </p>
        </div>

        {/* Results Grid - 3 columns per RevOps */}
        <div className="overflow-x-auto">
          <table className="w-full max-w-4xl mx-auto border-collapse">
            <thead>
              <tr className="border-b-2 border-primary/20">
                <th className="text-left py-4 px-4 sm:px-6 font-semibold text-foreground">Industry</th>
                <th className="text-center py-4 px-4 sm:px-6 font-semibold text-foreground">Leads Increase</th>
                <th className="text-center py-4 px-4 sm:px-6 font-semibold text-foreground">Revenue Growth</th>
                <th className="text-center py-4 px-4 sm:px-6 font-semibold text-foreground">Automation Time Saved</th>
              </tr>
            </thead>
            <tbody>
              {CASE_STUDIES.map((cs) => (
                <tr
                  key={cs.industry}
                  className="border-b border-border/50 hover:bg-primary/5 transition-colors"
                >
                  <td className="py-4 px-4 sm:px-6 font-medium text-foreground">{cs.industry}</td>
                  <td className="py-4 px-4 sm:px-6 text-center text-primary font-semibold">{cs.leadsIncrease}</td>
                  <td className="py-4 px-4 sm:px-6 text-center text-primary font-semibold">{cs.revenueGrowth}</td>
                  <td className="py-4 px-4 sm:px-6 text-center text-muted-foreground">{cs.automationSaved}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Results bullets from RevOps */}
        <ul className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-muted-foreground">
          {["Increased booking rates", "Faster response times", "Higher close rates", "Lower cost per acquisition", "Automated follow-ups 24/7"].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="text-primary">✔</span> {item}
            </li>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline" className="border-2 border-primary/30 hover:bg-primary/10 text-primary hover:border-primary/50">
            <Link href="/services#portfolio-section" className="flex items-center">
              See How We Did It
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
