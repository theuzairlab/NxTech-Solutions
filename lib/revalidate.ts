import { revalidatePath } from "next/cache";

/**
 * Revalidates public pages that display dynamic content
 * Call this after creating, updating, or deleting content in admin API routes
 */
export async function revalidatePublicPages(options?: {
  paths?: string[];
}) {
  // Get the production URL - prefer NEXT_PUBLIC_SITE_URL, fallback to production domain
  const productionUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nxtechnova.com";
  const isProduction = process.env.NODE_ENV === "production" || process.env.VERCEL;

  // Default paths that should be revalidated
  // Note: Dynamic routes (like /services/[slug]) should be revalidated individually
  // using revalidateDynamicRoute() with the actual path (e.g., "/services/my-service")
  const defaultPaths = [
    "/", // Homepage
    "/services", // Services listing
    "/blog", // Blog listing
    "/careers", // Careers listing
  ];

  const pathsToRevalidate = options?.paths || defaultPaths;

  try {
    // Step 1: Revalidate paths using Next.js revalidatePath (works within current execution)
    for (const path of pathsToRevalidate) {
      revalidatePath(path, 'page');
      console.log(`[Revalidation] Revalidated path: ${path}`);
    }

    // Step 2: In production, trigger a fetch with cache-busting to ensure edge cache is cleared
    // This helps ensure Vercel's edge network picks up the revalidation
    if (isProduction && productionUrl) {
      const revalidationPromises = pathsToRevalidate.map(async (path) => {
        try {
          const url = `${productionUrl}${path}?revalidate=${Date.now()}`;
          const response = await fetch(url, {
            method: "GET",
            headers: {
              "Cache-Control": "no-cache, no-store, must-revalidate",
              "Pragma": "no-cache",
              "X-Revalidate": "true",
            },
            cache: "no-store", // Ensure no caching of this request
          });
          console.log(`[Revalidation] Triggered fetch for ${path}, status: ${response.status}`);
          return { path, success: true, status: response.status };
        } catch (error: any) {
          console.error(`[Revalidation] Failed to fetch ${productionUrl}${path}:`, error.message);
          return { path, success: false, error: error.message };
        }
      });
      
      // Wait for all revalidation requests (but don't fail if some fail)
      await Promise.allSettled(revalidationPromises);
    }

    return { success: true, revalidated: pathsToRevalidate.length };
  } catch (error: any) {
    console.error("[Revalidation] Error:", error.message);
    return { success: false, error: error.message };
  }
}

/**
 * Revalidates a specific dynamic route (e.g., service detail page)
 */
export async function revalidateDynamicRoute(path: string) {
  // Get the production URL
  const productionUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nxtechnova.com";
  const isProduction = process.env.NODE_ENV === "production" || process.env.VERCEL;

  try {
    // Step 1: Revalidate path using Next.js revalidatePath
    revalidatePath(path, 'page');
    console.log(`[Revalidation] Revalidated dynamic route: ${path}`);
    
    // Step 2: In production, trigger fetch to clear edge cache
    if (isProduction && productionUrl) {
      try {
        const url = `${productionUrl}${path}?revalidate=${Date.now()}`;
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
            "Pragma": "no-cache",
            "X-Revalidate": "true",
          },
          cache: "no-store", // Ensure no caching of this request
        });
        console.log(`[Revalidation] Triggered fetch for ${path}, status: ${response.status}`);
      } catch (error: any) {
        console.error(`[Revalidation] Failed to fetch ${productionUrl}${path}:`, error.message);
      }
    }
    
    return { success: true };
  } catch (error: any) {
    console.error("[Revalidation] Error:", error.message);
    return { success: false, error: error.message };
  }
}

