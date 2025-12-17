import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { DashboardHeader } from "@/components/admin/dashboard-header";
import { PortfoliosManagement } from "@/components/admin/portfolios-management";

export const metadata: Metadata = {
  title: "Portfolios - NxTech Admin",
  description: "Manage portfolio projects displayed on the website.",
};

export default async function PortfoliosPage() {
  const portfolios = await prisma.portfolio.findMany({
    orderBy: [
      { displayOrder: "asc" },
      { createdAt: "desc" },
    ],
    select: {
      id: true,
      slug: true,
      title: true,
      category: true,
      type: true,
      image: true,
      description: true,
      link: true,
      client: true,
      metrics: true,
      before: true,
      after: true,
      isFeatured: true,
      isActive: true,
      displayOrder: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return (
    <>
      <DashboardHeader
        title="Portfolios"
        description="Manage portfolio projects displayed on the website."
        healthStatus={false}
      />
      <PortfoliosManagement
        initialPortfolios={portfolios.map((p) => ({
          ...p,
          createdAt: p.createdAt.toISOString(),
          updatedAt: p.updatedAt.toISOString(),
        }))}
      />
    </>
  );
}

