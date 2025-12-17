import type { Metadata } from "next";
import { DashboardHeader } from "@/components/admin/dashboard-header";
import { AnalyticsCards } from "@/components/admin/analytics-cards";
import { RecentActivity } from "@/components/admin/recent-activity";
import { TrafficOverview } from "@/components/admin/traffic-overview";

export const metadata: Metadata = {
  title: "Dashboard - NxTech Solutions",
  description: "Admin dashboard for NxTech Solutions",
};

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <DashboardHeader title="Dashboard" description="Overview of NxTech website performance, leads, and content activity." healthStatus={true} />
      <AnalyticsCards />
      <div className="grid gap-4 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)]">
        <TrafficOverview />
        <RecentActivity />
      </div>
    </div>
  );
}

