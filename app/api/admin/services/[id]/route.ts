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
    slug,
    title,
    shortDescription,
    overview,
    image,
    icon,
    isMainService,
    isActive,
    displayOrder,
    sections,
    features,
    benefits,
    useCases,
    caseStudies,
    pricing,
    cta,
  } = body as any;

  // Get old slug before update to revalidate old route if slug changed
  const oldService = await prisma.service.findUnique({
    where: { id },
    select: { slug: true },
  });

  const updated = await prisma.service.update({
    where: { id },
    data: {
      slug,
      title,
      shortDescription,
      overview,
      image,
      icon,
      isMainService: isMainService ?? undefined,
      isActive: isActive ?? undefined,
      displayOrder,
      sections,
      features,
      benefits,
      useCases,
      caseStudies,
      pricing,
      cta,
    },
    select: {
      id: true,
      slug: true,
      title: true,
      shortDescription: true,
      overview: true,
      image: true,
      icon: true,
      isMainService: true,
      isActive: true,
      displayOrder: true,
      sections: true,
      features: true,
      benefits: true,
      useCases: true,
      caseStudies: true,
      pricing: true,
      cta: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  // Revalidate public pages that display services
  await revalidatePublicPages({
    paths: ["/", "/services"],
  });
  
  // Revalidate the service detail page (both old and new slug if changed)
  await revalidateDynamicRoute(`/services/${updated.slug}`);
  if (oldService && oldService.slug !== updated.slug) {
    await revalidateDynamicRoute(`/services/${oldService.slug}`);
  }

  return NextResponse.json(updated);
}

export async function DELETE(_req: Request, { params }: RouteContext) {
  const { id } = await params;
  const session = await getServerSession(authConfig);
  if (!session?.user?.isAdmin) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  // Get slug before deletion to revalidate the route
  const service = await prisma.service.findUnique({
    where: { id },
    select: { slug: true },
  });

  await prisma.service.delete({ where: { id } });

  // Revalidate public pages that display services
  await revalidatePublicPages({
    paths: ["/", "/services"],
  });
  
  // Revalidate the deleted service detail page
  if (service) {
    await revalidateDynamicRoute(`/services/${service.slug}`);
  }

  return new NextResponse(null, { status: 204 });
}

