"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight, MousePointerClick, Users, FileText } from "lucide-react";

const analytics = [
  {
    label: "Website Visits",
    value: "24,318",
    change: "+18.4%",
    trend: "up",
    icon: MousePointerClick,
  },
  {
    label: "New Leads",
    value: "482",
    change: "+9.2%",
    trend: "up",
    icon: Users,
  },
  {
    label: "Blog Views",
    value: "7,945",
    change: "-2.1%",
    trend: "down",
    icon: FileText,
  },
];

export function AnalyticsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3 mb-6">
      {analytics.map((item) => {
        const Icon = item.icon;
        const isUp = item.trend === "up";
        return (
          <Card
            key={item.label}
            className="border border-border/60 bg-gradient-to-br from-background via-background to-primary/5 shadow-sm hover:shadow-md transition-shadow rounded-2xl"
          >
            <CardContent className="p-4 md:p-5 flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  {item.label}
                </p>
                <p className="mt-2 text-2xl font-semibold">{item.value}</p>
                <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-500">
                  {isUp ? (
                    <ArrowUpRight className="h-3 w-3" />
                  ) : (
                    <ArrowDownRight className="h-3 w-3 text-red-500" />
                  )}
                  <span className={isUp ? "" : "text-red-500"}>{item.change}</span>
                  <span className="text-muted-foreground ml-1">vs last 7 days</span>
                </div>
              </div>
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Icon className="h-5 w-5" />
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}


