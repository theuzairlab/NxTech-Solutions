import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { JobsManagement } from "@/components/admin/jobs-management";
import { DashboardHeader } from "@/components/admin/dashboard-header";

export const metadata: Metadata = {
  title: "Jobs - " + process.env.NEXT_PUBLIC_SITE_NAME + " Admin",
  description: "Manage job postings for " + process.env.NEXT_PUBLIC_SITE_NAME,
};

export default async function JobsPage() {
  const session = await getServerSession(authConfig);
  
  if (!session?.user?.isAdmin) {
    redirect("/");
  }

  const jobs = await prisma.job.findMany({
    orderBy: [
      { displayOrder: "asc" },
      { createdAt: "desc" },
    ],
    include: {
      _count: {
        select: {
          applications: true,
        },
      },
    },
  });

  return (
    <div className="space-y-6">
      <DashboardHeader
        title="Jobs"
        description="Manage job postings for the careers page."
        healthStatus={false}
      />
      <JobsManagement
        initialJobs={jobs.map((j: any) => ({
          ...j,
          createdAt: j.createdAt.toISOString(),
          updatedAt: j.updatedAt.toISOString(),
        }))}
      />
    </div>
  );
}

