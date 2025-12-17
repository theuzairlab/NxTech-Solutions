import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { DashboardHeader } from "@/components/admin/dashboard-header";
import { IndustriesManagement } from "@/components/admin/industries-management";

export const metadata: Metadata = {
  title: "Industries - NxTech Admin",
  description: "Manage industries served by NxTech Solutions.",
};

export default async function IndustriesPage() {
  const industries = await prisma.industry.findMany({
    orderBy: [
      { displayOrder: "asc" },
      { createdAt: "asc" },
    ],
    select: {
      id: true,
      slug: true,
      name: true,
      description: true,
      image: true,
      services: true,
      displayOrder: true,
      isActive: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return (
    <>
      <DashboardHeader
        title="Industries"
        description="Manage the industries we serve shown across the website."
        healthStatus={false}
      />
      <IndustriesManagement
        initialIndustries={industries.map((i) => ({
          ...i,
          createdAt: i.createdAt.toISOString(),
          updatedAt: i.updatedAt.toISOString(),
        }))}
      />
    </>
  );
}

