"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function NavigationScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    // When the path changes, scroll to the top of the viewport instantly.
    // This fixes issues where scroll-behavior: smooth or scroll-restoration
    // might keep the page scrolled down on mount.
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}
