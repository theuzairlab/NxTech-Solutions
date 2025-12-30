import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
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

  return NextResponse.json(jobs);
}

