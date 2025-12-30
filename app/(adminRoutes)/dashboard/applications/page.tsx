import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { ApplicationsManagement } from "@/components/admin/applications-management";
import { DashboardHeader } from "@/components/admin/dashboard-header";

export const metadata: Metadata = {
  title: "Applications - " + process.env.NEXT_PUBLIC_SITE_NAME + " Admin",
  description: "Manage job applications for " + process.env.NEXT_PUBLIC_SITE_NAME,
};

export default async function ApplicationsPage() {
  const session = await getServerSession(authConfig);
  
  if (!session?.user?.isAdmin) {
    redirect("/");
  }

  const applications = await prisma.jobApplication.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      job: {
        select: {
          id: true,
          title: true,
          department: true,
        },
      },
    },
  });

  return (
    <div className="space-y-6">
      <DashboardHeader
        title="Job Applications"
        description="View and manage job applications submitted by candidates."
        healthStatus={false}
      />
      <ApplicationsManagement
        initialApplications={applications.map((a: any) => ({
          ...a,
          createdAt: a.createdAt.toISOString(),
          updatedAt: a.updatedAt.toISOString(),
        }))}
      />
    </div>
  );
}

