import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePublicPages } from "@/lib/revalidate";

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
    slug,
    name,
    description,
    image,
    services,
    displayOrder,
    isActive,
  } = body;

  const updated = await prisma.industry.update({
    where: { id },
    data: {
      slug,
      name,
      description,
      image,
      services,
      displayOrder,
      isActive,
    },
    select: {
      id: true,
      slug: true,
      name: true,
      description: true,
      image: true,
      services: true,
      displayOrder: true,
      isActive: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  // Revalidate public pages that display industries (homepage and services page)
  await revalidatePublicPages({
    paths: ["/", "/services"],
  });

  return NextResponse.json(updated);
}

export async function DELETE(_req: Request, { params }: RouteContext) {
  const { id } = await params;
  const session = await getServerSession(authConfig);
  if (!session?.user?.isAdmin) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  await prisma.industry.delete({
    where: { id },
  });

  // Revalidate public pages that display industries (homepage and services page)
  await revalidatePublicPages({
    paths: ["/", "/services"],
  });

  return new NextResponse(null, { status: 204 });
}

