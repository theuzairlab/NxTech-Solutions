"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Clock, FilePenLine, MessageCircle, UserPlus } from "lucide-react";

const activities = [
  {
    type: "lead",
    title: "New quote request from Acme Corp",
    meta: "Lead · 2 min ago",
    icon: UserPlus,
  },
  {
    type: "blog",
    title: "Published blog: AI Chatbots: Transforming Customer Service",
    meta: "Blog · 35 min ago",
    icon: FilePenLine,
  },
  {
    type: "contact",
    title: "Contact form submitted by Sarah Johnson",
    meta: "Contact · 1 hr ago",
    icon: MessageCircle,
  },
  {
    type: "lead",
    title: "New lead added to CRM from LinkedIn campaign",
    meta: "Lead · 3 hrs ago",
    icon: UserPlus,
  },
];

export function RecentActivity() {
  return (
    <Card className="border border-border/60 bg-background/80 shadow-sm rounded-2xl">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Activity className="h-4 w-4" />
          </span>
          <CardTitle className="text-base md:text-lg">Recent activity</CardTitle>
        </div>
        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="h-3 w-3" />
          Updated live
        </span>
      </CardHeader>
      <CardContent className="space-y-3">
        {activities.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex items-start gap-3 rounded-xl border border-border/60 bg-muted/40 px-3 py-2.5 hover:bg-muted/70 transition"
            >
              <div className="mt-0.5">
                <Icon className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium leading-snug">{item.title}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{item.meta}</p>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}


