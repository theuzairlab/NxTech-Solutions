import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const session = await getServerSession(authConfig);
  if (!session?.user?.isAdmin) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const jobId = searchParams.get("jobId");
  const status = searchParams.get("status");
  const query = searchParams.get("query");

  const where: any = {};
  if (jobId) where.jobId = jobId;
  if (status) where.status = status;
  if (query) {
    where.OR = [
      { fullName: { contains: query, mode: "insensitive" } },
      { email: { contains: query, mode: "insensitive" } },
      { roleApplyingFor: { contains: query, mode: "insensitive" } },
    ];
  }

  const applications = await prisma.jobApplication.findMany({
    where,
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

  return NextResponse.json(applications);
}

