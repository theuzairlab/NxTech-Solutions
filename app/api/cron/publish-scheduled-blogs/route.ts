import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { revalidateDynamicRoute, revalidatePublicPages } from "@/lib/revalidate";

function isAuthorized(req: Request) {
  const expected = process.env.CRON_SECRET || process.env.REVALIDATION_SECRET;
  if (!expected) return false;

  const url = new URL(req.url);
  const secretFromQuery = url.searchParams.get("secret");
  if (secretFromQuery && secretFromQuery === expected) {
    return true;
  }

  const authHeader = req.headers.get("authorization");
  if (!authHeader?.startsWith("Bearer ")) return false;

  const token = authHeader.slice("Bearer ".length).trim();
  return token === expected;
}

export async function POST(req: Request) {
  if (!isAuthorized(req)) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const now = new Date();
  const dueBlogs = await prisma.blog.findMany({
    where: {
      isPublished: false,
      scheduledFor: { lte: now },
    },
    select: {
      id: true,
      slug: true,
      scheduledFor: true,
    },
  });

  if (dueBlogs.length === 0) {
    return NextResponse.json({ published: 0 });
  }

  await prisma.$transaction(
    dueBlogs.map((blog) =>
      prisma.blog.update({
        where: { id: blog.id },
        data: {
          isPublished: true,
          publishedAt: blog.scheduledFor ?? now,
          scheduledFor: null,
        },
      }),
    ),
  );

  await revalidatePublicPages({ paths: ["/", "/blog"] });
  await Promise.allSettled(
    dueBlogs.map((blog) => revalidateDynamicRoute(`/blog/${blog.slug}`)),
  );

  return NextResponse.json({ published: dueBlogs.length });
}

export async function GET(req: Request) {
  return POST(req);
}
