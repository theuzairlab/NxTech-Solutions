import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { JobDetailPage } from "@/components/sections/job-detail-page";

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
  const otherJobs = await prisma.job.findMany({
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
    },
  });

  return <JobDetailPage job={job} otherJobs={otherJobs} />;
}

