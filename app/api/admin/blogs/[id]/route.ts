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
    excerpt,
    content,
    image,
    categoryId,
    authorUserId,
    authorName,
    authorAvatar,
    authorRole,
    tags,
    publishedAt,
    readTime,
    featured,
    isPublished,
  } = body;

  // Get old slug before update to revalidate old route if slug changed
  const oldBlog = await prisma.blog.findUnique({
    where: { id },
    select: { slug: true, isPublished: true },
  });

  // Calculate read time if content changed
  let calculatedReadTime = readTime;
  if (content) {
    const wordCount = content.split(/\s+/).length;
    calculatedReadTime = Math.ceil(wordCount / 200);
  }

  const updated = await prisma.blog.update({
    where: { id },
    data: {
      slug,
      title,
      excerpt,
      content,
      image,
      categoryId,
      authorUserId,
      authorName,
      authorAvatar,
      authorRole,
      tags,
      publishedAt: publishedAt ? new Date(publishedAt) : null,
      readTime: calculatedReadTime,
      featured,
      isPublished,
    },
    select: {
      id: true,
      slug: true,
      title: true,
      excerpt: true,
      content: true,
      image: true,
      categoryId: true,
      category: {
        select: {
          id: true,
          slug: true,
          name: true,
        },
      },
      authorUserId: true,
      authorName: true,
      authorAvatar: true,
      authorRole: true,
      tags: true,
      publishedAt: true,
      readTime: true,
      featured: true,
      isPublished: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  // Revalidate public pages that display blogs
  await revalidatePublicPages({
    paths: ["/", "/blog"],
  });
  
  // Revalidate the blog detail page (both old and new slug if changed)
  if (updated.isPublished) {
    await revalidateDynamicRoute(`/blog/${updated.slug}`);
  }
  if (oldBlog && oldBlog.slug !== updated.slug && oldBlog.isPublished) {
    await revalidateDynamicRoute(`/blog/${oldBlog.slug}`);
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
  const blog = await prisma.blog.findUnique({
    where: { id },
    select: { slug: true, isPublished: true },
  });

  await prisma.blog.delete({
    where: { id },
  });

  // Revalidate public pages that display blogs
  await revalidatePublicPages({
    paths: ["/", "/blog"],
  });
  
  // Revalidate the deleted blog detail page if it was published
  if (blog && blog.isPublished) {
    await revalidateDynamicRoute(`/blog/${blog.slug}`);
  }

  return new NextResponse(null, { status: 204 });
}

