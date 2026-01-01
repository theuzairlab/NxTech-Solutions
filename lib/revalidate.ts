import { revalidatePath } from "next/cache";

/**
 * Revalidates public pages that display dynamic content
 * Call this after creating, updating, or deleting content in admin API routes
 */
export async function revalidatePublicPages(options?: {
  paths?: string[];
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}` 
    : "https://nxtechnova.com";

  // Default paths that should be revalidated
  const defaultPaths = [
    "/", // Homepage
    "/services", // Services listing
    "/services/[slug]", // Service detail page
    "/blog/[slug]", // Blog detail page
    "/careers/[id]", // Careers detail page
    "/blog", // Blog listing
    "/careers", // Careers listing
    "/about", // About page
    "/contact", // Contact page
    "/privacy-policy", // Privacy policy page
    "/terms-of-service", // Terms of service page
    "/faq", // FAQ page
    "/testimonials", // Testimonials page
    "/portfolio", // Portfolio page
  ];

  const pathsToRevalidate = options?.paths || defaultPaths;

  try {
    // Revalidate paths
    for (const path of pathsToRevalidate) {
      revalidatePath(path, 'page');
    }

    // Also revalidate dynamic routes by calling the revalidation API
    // This ensures Vercel's edge cache is also cleared
    if (process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL) {
      for (const path of pathsToRevalidate) {
        try {
          await fetch(`${baseUrl}${path}`, {
            method: "GET",
            headers: {
              "Cache-Control": "no-cache",
            },
          });
        } catch (error) {
          // Silently fail - revalidatePath should still work
          console.error(`Failed to revalidate ${path}:`, error);
        }
      }
    }

    return { success: true, revalidated: pathsToRevalidate.length };
  } catch (error) {
    console.error("Revalidation error:", error);
    return { success: false, error };
  }
}

/**
 * Revalidates a specific dynamic route (e.g., service detail page)
 */
export async function revalidateDynamicRoute(path: string) {
  try {
    revalidatePath(path, 'page');
    
    // Also trigger revalidation via fetch if in production
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}` 
      : "https://nxtechnova.com/";
    
    if (baseUrl !== "https://nxtechnova.com") {
      try {
        await fetch(`${baseUrl}${path}`, {
          method: "GET",
          headers: {
            "Cache-Control": "no-cache",
          },
        });
      } catch (error) {
        // Silently fail
        console.error(`Failed to revalidate ${path}:`, error);
      }
    }
    
    return { success: true };
  } catch (error) {
    console.error("Revalidation error:", error);
    return { success: false, error };
  }
}

