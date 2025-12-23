"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    // Check if page is loaded
    const handleLoad = () => {
      setProgress(100);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };

    // Check if already loaded
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      clearInterval(progressInterval);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[99999] bg-gradient-to-br from-primary/10 via-background to-primary/5 flex items-center justify-center animate-in fade-in duration-300">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,206,209,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,206,209,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" 
        style={{ animation: "float 6s ease-in-out infinite" }} />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"
        style={{ animation: "float 8s ease-in-out infinite reverse" }} />

      {/* Loading Content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo/Icon */}
        <div className="relative">
          {/* Outer glow */}
          <div className="absolute inset-0 w-32 h-32 rounded-full bg-primary/30 blur-2xl animate-pulse"></div>
          {/* Icon container */}
          <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-2xl">
            <Loader2 className="h-12 w-12 text-white animate-spin" />
          </div>
        </div>

        {/* Company Name */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">
            <span className="bg-gradient-to-r from-primary via-primary/90 to-primary bg-clip-text text-transparent">
              {process.env.NEXT_PUBLIC_SITE_NAME || "NXTECH"} SOLUTIONS
            </span>
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Loading...
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 sm:w-80 h-1.5 bg-primary/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary via-primary/80 to-primary rounded-full transition-all duration-300 ease-out shadow-lg"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Percentage */}
        <div className="text-sm text-muted-foreground">
          {Math.round(progress)}%
        </div>
      </div>

    </div>
  );
}

