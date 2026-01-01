import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

/**
 * On-demand revalidation API endpoint
 * This is the recommended way to trigger revalidation in Next.js
 * 
 * Usage:
 * POST /api/revalidate?secret=YOUR_SECRET&path=/services
 * POST /api/revalidate?secret=YOUR_SECRET&path=/services/my-service
 */
export async function POST(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const secret = searchParams.get("secret");
  const path = searchParams.get("path");

  // Verify secret token
  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json(
      { message: "Invalid secret token" },
      { status: 401 }
    );
  }

  if (!path) {
    return NextResponse.json(
      { message: "Path is required" },
      { status: 400 }
    );
  }

  try {
    // Revalidate by path
    revalidatePath(path, "page");
    console.log(`[Revalidation API] Revalidated path: ${path}`);

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      path: path,
    });
  } catch (error: any) {
    console.error("[Revalidation API] Error:", error);
    return NextResponse.json(
      { message: "Error revalidating", error: error.message },
      { status: 500 }
    );
  }
}

