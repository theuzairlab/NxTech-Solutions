import { revalidatePath } from "next/cache";

/**
 * Revalidates public pages that display dynamic content
 * Call this after creating, updating, or deleting content in admin API routes
 * 
 * This function uses both direct revalidatePath and the revalidation API endpoint
 * for maximum reliability
 */
export async function revalidatePublicPages(options?: {
  paths?: string[];
}) {
  // Get the production URL - prefer NEXT_PUBLIC_SITE_URL, fallback to production domain
  const productionUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nxtechnova.com";
  const revalidationSecret = process.env.REVALIDATION_SECRET || process.env.NEXT_PUBLIC_REVALIDATION_SECRET || "your-secret-key-change-this";
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
    // Step 1: Direct revalidation using revalidatePath (works within current execution)
    for (const path of pathsToRevalidate) {
      revalidatePath(path, 'page');
      console.log(`[Revalidation] Direct revalidation - path: ${path}`);
    }

    // Step 2: Also call the revalidation API endpoint for better reliability
    // This ensures revalidation works even if called from different contexts
    if (isProduction && productionUrl) {
      const revalidationPromises = pathsToRevalidate.map(async (path) => {
        try {
          const apiUrl = `${productionUrl}/api/revalidate?secret=${revalidationSecret}&path=${encodeURIComponent(path)}`;
          const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            cache: "no-store",
          });
          
          if (response.ok) {
            const data = await response.json();
            console.log(`[Revalidation] API revalidation successful - path: ${path}`, data);
            return { path, success: true, status: response.status };
          } else {
            const errorText = await response.text();
            console.error(`[Revalidation] API revalidation failed - path: ${path}, status: ${response.status}, error: ${errorText}`);
            return { path, success: false, status: response.status, error: errorText };
          }
        } catch (error: any) {
          console.error(`[Revalidation] Failed to call revalidation API for ${path}:`, error.message);
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
  const revalidationSecret = process.env.REVALIDATION_SECRET || process.env.NEXT_PUBLIC_REVALIDATION_SECRET || "your-secret-key-change-this";
  const isProduction = process.env.NODE_ENV === "production" || process.env.VERCEL;

  try {
    // Step 1: Direct revalidation using revalidatePath
    revalidatePath(path, 'page');
    console.log(`[Revalidation] Direct revalidation - dynamic route: ${path}`);
    
    // Step 2: Also call the revalidation API endpoint for better reliability
    if (isProduction && productionUrl) {
      try {
        const apiUrl = `${productionUrl}/api/revalidate?secret=${revalidationSecret}&path=${encodeURIComponent(path)}`;
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          cache: "no-store",
        });
        
        if (response.ok) {
          const data = await response.json();
          console.log(`[Revalidation] API revalidation successful - path: ${path}`, data);
        } else {
          const errorText = await response.text();
          console.error(`[Revalidation] API revalidation failed - path: ${path}, status: ${response.status}, error: ${errorText}`);
        }
      } catch (error: any) {
        console.error(`[Revalidation] Failed to call revalidation API for ${path}:`, error.message);
      }
    }
    
    return { success: true };
  } catch (error: any) {
    console.error("[Revalidation] Error:", error.message);
    return { success: false, error: error.message };
  }
}

