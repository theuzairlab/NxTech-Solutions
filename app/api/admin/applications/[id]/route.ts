import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

interface RouteContext {
  params: Promise<{ id: string }>;
}

export async function PATCH(req: Request, { params }: RouteContext) {
  const { id } = await params;
  const session = await getServerSession(authConfig);
  if (!session?.user?.isAdmin) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const body = await req.json();
  const { status } = body as { status?: string };

  if (!status || !["NEW", "SHORTLISTED", "REJECTED"].includes(status)) {
    return new NextResponse("Invalid status", { status: 400 });
  }

  const updated = await prisma.jobApplication.update({
    where: { id },
    data: {
      status: status as any,
    },
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

  return NextResponse.json(updated);
}

