import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await getServerSession(authConfig);
  if (!session?.user?.isAdmin) {
    return new NextResponse("Unauthorized", { status: 401 });
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

  return NextResponse.json(jobs);
}

export async function POST(req: Request) {
  const session = await getServerSession(authConfig);
  if (!session?.user?.isAdmin) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const body = await req.json();
  const {
    title,
    department,
    location,
    type,
    description,
    requirements,
    benefits,
    isActive,
    displayOrder,
  } = body as any;

  if (!title || !department || !description) {
    return new NextResponse("Missing required fields: title, department, description", { status: 400 });
  }

  const created = await prisma.job.create({
    data: {
      title,
      department,
      location: location || null,
      type: type || null,
      description,
      requirements: requirements || null,
      benefits: benefits || null,
      isActive: isActive ?? true,
      displayOrder: displayOrder ?? null,
    },
    include: {
      _count: {
        select: {
          applications: true,
        },
      },
    },
  });

  return NextResponse.json(created, { status: 201 });
}

