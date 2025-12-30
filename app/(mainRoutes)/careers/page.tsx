import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { CareerHero } from "@/components/sections/career-hero";
import { JobsListing } from "@/components/sections/jobs-listing";

export const metadata: Metadata = {
  title: `Careers - ${process.env.NEXT_PUBLIC_SITE_NAME}`,
  description: `Join ${process.env.NEXT_PUBLIC_SITE_NAME} and be part of a team that's shaping the future of digital solutions.`,
};

export default async function CareersPage() {
  const jobs = await prisma.job.findMany({
    where: {
      isActive: true,
    },
    orderBy: [
      { displayOrder: "asc" },
      { createdAt: "desc" },
    ],
    select: {
      id: true,
      title: true,
      department: true,
      location: true,
      type: true,
      description: true,
      requirements: true,
      benefits: true,
      createdAt: true,
    },
  });

  return (
    <div className="w-full">
      <CareerHero />
      <JobsListing jobs={jobs} />
    </div>
  );
}

