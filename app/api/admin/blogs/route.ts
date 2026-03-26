import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePublicPages, revalidateDynamicRoute } from "@/lib/revalidate";

type PublishMode = "draft" | "publish_now" | "schedule";

function resolvePublishingState(input: {
  schedulingMode?: PublishMode;
  isPublished?: boolean;
  scheduledFor?: string | null;
}) {
  const now = new Date();
  const mode =
    input.schedulingMode ??
    (input.isPublished ? "publish_now" : input.scheduledFor ? "schedule" : "draft");

  if (mode === "schedule") {
    if (!input.scheduledFor) {
      throw new Error("Scheduled date/time is required.");
    }
    const scheduleAt = new Date(input.scheduledFor);
    if (Number.isNaN(scheduleAt.getTime())) {
      throw new Error("Invalid scheduled date/time.");
    }
    if (scheduleAt <= now) {
      throw new Error("Scheduled date/time must be in the future.");
    }
    return {
      isPublished: false,
      publishedAt: null as Date | null,
      scheduledFor: scheduleAt,
    };
  }

  if (mode === "publish_now") {
    return {
      isPublished: true,
      publishedAt: now,
      scheduledFor: null as Date | null,
    };
  }

  return {
    isPublished: false,
    publishedAt: null as Date | null,
    scheduledFor: null as Date | null,
  };
}

export async function GET() {
  const session = await getServerSession(authConfig);
  if (!session?.user?.isAdmin) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const blogs = await prisma.blog.findMany({
    orderBy: { createdAt: "desc" },
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
      scheduledFor: true,
      readTime: true,
      featured: true,
      isPublished: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return NextResponse.json(blogs);
}

export async function POST(req: Request) {
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
    schedulingMode,
    scheduledFor,
    publishedAt,
    readTime,
    featured,
    isPublished,
  } = body;

  if (!slug || !title || !excerpt || !content || !categoryId || !authorName) {
    return new NextResponse(
      "Missing required fields: slug, title, excerpt, content, categoryId, and authorName",
      { status: 400 }
    );
  }

  // Calculate read time (approximate: 200 words per minute)
  const wordCount = content.split(/\s+/).length;
  const calculatedReadTime = readTime || Math.ceil(wordCount / 200);
  let publishState: ReturnType<typeof resolvePublishingState>;
  try {
    publishState = resolvePublishingState({
      schedulingMode,
      isPublished,
      scheduledFor,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Invalid publishing state.";
    return new NextResponse(message, { status: 400 });
  }

  const created = await prisma.blog.create({
    data: {
      slug,
      title,
      excerpt,
      content,
      image: image || "",
      categoryId,
      authorUserId: authorUserId || null,
      authorName,
      authorAvatar: authorAvatar || "",
      authorRole: authorRole || "Author",
      tags: tags || [],
      publishedAt: publishState.publishedAt ?? (publishedAt ? new Date(publishedAt) : null),
      scheduledFor: publishState.scheduledFor,
      readTime: calculatedReadTime,
      featured: featured ?? false,
      isPublished: publishState.isPublished,
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
      scheduledFor: true,
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
  
  // Revalidate the new blog detail page if published
  if (created.isPublished) {
    await revalidateDynamicRoute(`/blog/${created.slug}`);
  }

  return NextResponse.json(created);
}

