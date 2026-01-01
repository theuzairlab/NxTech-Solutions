import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePublicPages, revalidateDynamicRoute } from "@/lib/revalidate";

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

  const updated = await prisma.job.update({
    where: { id },
    data: {
      title: title ?? undefined,
      department: department ?? undefined,
      location: location ?? undefined,
      type: type ?? undefined,
      description: description ?? undefined,
      requirements: requirements ?? undefined,
      benefits: benefits ?? undefined,
      isActive: isActive ?? undefined,
      displayOrder: displayOrder ?? undefined,
    },
    include: {
      _count: {
        select: {
          applications: true,
        },
      },
    },
  });

  // Revalidate public pages that display jobs (careers page and job detail page)
  await revalidatePublicPages({
    paths: ["/careers"],
  });
  
  // Revalidate the job detail page
  await revalidateDynamicRoute(`/careers/${updated.id}`);

  return NextResponse.json(updated);
}

export async function DELETE(_req: Request, { params }: RouteContext) {
  const { id } = await params;
  const session = await getServerSession(authConfig);
  if (!session?.user?.isAdmin) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  await prisma.job.delete({
    where: { id },
  });

  // Revalidate public pages that display jobs (careers page and job detail page)
  await revalidatePublicPages({
    paths: ["/careers"],
  });
  
  // Revalidate the deleted job detail page
  await revalidateDynamicRoute(`/careers/${id}`);

  return new NextResponse(null, { status: 204 });
}

