import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

/**
 * On-demand revalidation API endpoint
 * This is the recommended way to trigger revalidation in Next.js
 * 
 * Usage:
 * POST /api/revalidate?secret=YOUR_SECRET&path=/services
 * POST /api/revalidate?secret=YOUR_SECRET&path=/services/my-service&tag=services
 */
export async function POST(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const secret = searchParams.get("secret");
  const path = searchParams.get("path");
  const tag = searchParams.get("tag");

  // Verify secret token
  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json(
      { message: "Invalid secret token" },
      { status: 401 }
    );
  }

  if (!path && !tag) {
    return NextResponse.json(
      { message: "Path or tag is required" },
      { status: 400 }
    );
  }

  try {
    // Revalidate by path
    if (path) {
      revalidatePath(path, "page");
      console.log(`[Revalidation API] Revalidated path: ${path}`);
    }

    // Revalidate by tag
    if (tag) {
      revalidateTag(tag);
      console.log(`[Revalidation API] Revalidated tag: ${tag}`);
    }

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      path: path || null,
      tag: tag || null,
    });
  } catch (error: any) {
    console.error("[Revalidation API] Error:", error);
    return NextResponse.json(
      { message: "Error revalidating", error: error.message },
      { status: 500 }
    );
  }
}

