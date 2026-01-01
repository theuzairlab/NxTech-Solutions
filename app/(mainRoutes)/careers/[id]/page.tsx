import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { JobDetailPage } from "@/components/sections/job-detail-page";

// ISR: Revalidate every hour (3600 seconds)
// Pages can also be revalidated on-demand when admin makes changes
// Note: This must be a static value (compile-time constant), not a runtime expression
export const revalidate = 600;

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}): Promise<Metadata> {
  const { id } = await params;
  const job = await prisma.job.findUnique({
    where: { id, isActive: true },
    select: {
      title: true,
      description: true,
      department: true,
    },
  });

  if (!job) {
    return {
      title: "Job Not Found",
    };
  }

  return {
    title: `${job.title} - Careers - ${process.env.NEXT_PUBLIC_SITE_NAME}`,
    description: job.description.substring(0, 160),
  };
}

export default async function JobDetailPageRoute({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params;
  const job = await prisma.job.findUnique({
    where: { id, isActive: true },
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

  if (!job) {
    notFound();
  }

  // Get other active jobs for "Other Openings" section
  const otherJobsData = await prisma.job.findMany({
    where: {
      isActive: true,
      id: { not: id },
    },
    orderBy: [
      { displayOrder: "asc" },
      { createdAt: "desc" },
    ],
    take: 3,
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

  // Transform job to match component type (convert Date to string)
  const transformedJob = {
    ...job,
    createdAt: job.createdAt.toISOString(),
  };

  // Transform otherJobs to match component type (only include needed fields)
  const transformedOtherJobs = otherJobsData.map((jobItem: any) => ({
    id: jobItem.id,
    title: jobItem.title,
    department: jobItem.department,
    location: jobItem.location,
    type: jobItem.type,
    description: jobItem.description,
  }));

  return <JobDetailPage job={transformedJob} otherJobs={transformedOtherJobs} />;
}

