import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { DashboardHeader } from "@/components/admin/dashboard-header";
import { AchievementsManagement } from "@/components/admin/achievements-management";

export const metadata: Metadata = {
  title: "Achievements & Certifications - NxTech Admin",
  description: "Manage achievements and certifications displayed on the website.",
};

export default async function AchievementsPage() {
  const achievements = await prisma.achievementCertification.findMany({
    orderBy: [
      { displayOrder: "asc" },
      { createdAt: "desc" },
    ],
  });

  return (
    <>
      <DashboardHeader
        title="Achievements & Certifications"
        description="Manage achievements and certifications displayed on the website."
        healthStatus={false}
      />
      <AchievementsManagement
        initialAchievements={achievements.map((a) => ({
          ...a,
          createdAt: a.createdAt.toISOString(),
          updatedAt: a.updatedAt.toISOString(),
        }))}
      />
    </>
  );
}

