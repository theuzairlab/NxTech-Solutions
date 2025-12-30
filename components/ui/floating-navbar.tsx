"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./button";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const { scrollYProgress, scrollY } = useScroll();
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Track scroll position to determine navbar style
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (typeof latest === "number") {
      // Transform to floating navbar after scrolling 50px (sooner for better UX)
      setIsScrolled(latest > 50);
    }
  });

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Desktop Navbar - Transforms from full-width to floating */}
      <AnimatePresence mode="wait">
        <motion.nav
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className={cn(
            "hidden md:flex fixed top-0 left-0 right-0 z-[9999]",
            isScrolled 
              ? "justify-center" 
              : "w-full",
            className
          )}
        >
          <motion.div
            animate={{
              width: isScrolled ? "fit-content" : "100%",
              maxWidth: isScrolled ? "90%" : "100%",
              borderRadius: isScrolled ? "9999px" : "0px",
              marginTop: isScrolled ? "1rem" : "0px",
            }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
            className={cn(
              "backdrop-blur-md transition-all duration-400",
              isScrolled 
                ? "mx-auto bg-card/95 border border-border shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
                : "w-full bg-card/98 border-b border-border shadow-lg"
            )}
          >
            <div className={cn(
              "flex items-center",
              isScrolled 
                ? "h-14 px-4 gap-2" 
                : "h-20 lg:h-24 px-6 lg:px-8 justify-between w-full"
            )}>
              {/* Logo */}
              <Link href="/" className={cn(
                "shrink-0 flex items-center group",
                isScrolled ? "mr-4" : ""
              )}>
                <motion.div
                  animate={{
                    scale: isScrolled ? 0.9 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                  className="relative"
                >
                  <Image 
                    src="/logo.png" 
                    alt={`${process.env.NEXT_PUBLIC_SITE_NAME}`} 
                    width={isScrolled ? 80 : 120} 
                    height={isScrolled ? 80 : 120}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </motion.div>
              </Link>
              
              {/* Desktop Navigation Links - Centered when floating */}
              <motion.div 
                className={cn(
                  "flex items-center",
                  isScrolled ? "flex-1 justify-center" : ""
                )}
                animate={{
                  gap: isScrolled ? "0.5rem" : "0.25rem",
                }}
                transition={{ duration: 0.4 }}
              >
                {navItems.map((navItem: any, idx: number) => {
                  const isActive = pathname === navItem.link || 
                    (navItem.link !== "/" && pathname.startsWith(navItem.link));
                  
                  return (
                    <Link
                      key={`link=${idx}`}
                      href={navItem.link}
                      className={cn(
                        "relative font-medium transition-all duration-300 rounded-lg whitespace-nowrap",
                        isScrolled
                          ? "px-3 py-1.5 text-sm"
                          : "px-4 lg:px-6 py-2 lg:py-3 text-base lg:text-lg",
                        isActive
                          ? "text-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                      )}
                    >
                      <span className="relative z-10">{navItem.name}</span>
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-primary/10 rounded-lg"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                    </Link>
                  );
                })}
              </motion.div>

              {/* Desktop Contact Button */}
              <Link href="/contact" className={cn(
                "shrink-0",
                isScrolled ? "ml-4" : ""
              )}>
                <motion.div
                  animate={{
                    scale: isScrolled ? 0.95 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <Button 
                    className={cn(
                      "font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap",
                      isScrolled
                        ? "px-4 py-1.5 text-sm h-9"
                        : "px-6 lg:px-8 py-2 lg:py-3 text-base lg:text-lg"
                    )}
                  >
                    Contact Us
                  </Button>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </motion.nav>
      </AnimatePresence>

      {/* Mobile Navbar - Compact Header */}
      <AnimatePresence mode="wait">
        <motion.nav
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className={cn(
            "md:hidden fixed top-0 left-0 right-0 w-full bg-card/95 backdrop-blur-md border-b border-border shadow-lg z-[9999]",
            className
          )}
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link href="/" className="shrink-0">
                <Image 
                  src="/logo.png" 
                  alt={`${process.env.NEXT_PUBLIC_SITE_NAME}`} 
                  width={100} 
                  height={100}
                  className="h-10 w-auto"
                />
              </Link>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-accent transition-colors"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-6 w-6 text-foreground" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-6 w-6 text-foreground" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </motion.nav>
      </AnimatePresence>

      {/* Mobile Sidebar - Slides from Right */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[10000] md:hidden"
            />

            {/* Sidebar */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-card border-l border-border shadow-2xl z-[10001] md:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                {/* Sidebar Header */}
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                    <Image 
                      src="/logo.png" 
                      alt={`${process.env.NEXT_PUBLIC_SITE_NAME}`} 
                      width={120} 
                      height={120}
                      className="h-12 w-auto"
                    />
                  </Link>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-accent transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6 text-foreground" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 px-4 py-6 space-y-2">
                  {navItems.map((navItem: any, idx: number) => {
                    const isActive = pathname === navItem.link || 
                      (navItem.link !== "/" && pathname.startsWith(navItem.link));
                    
                    return (
                      <motion.div
                        key={`mobile-link=${idx}`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <Link
                          href={navItem.link}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={cn(
                            "flex items-center gap-4 px-4 py-4 rounded-lg transition-all duration-200",
                            isActive
                              ? "bg-primary/10 text-primary font-semibold"
                              : "text-foreground hover:bg-accent"
                          )}
                        >
                          {navItem.icon && (
                            <span className={cn(
                              "text-xl",
                              isActive ? "text-primary" : "text-muted-foreground"
                            )}>
                              {navItem.icon}
                            </span>
                          )}
                          <span className="text-lg">{navItem.name}</span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                {/* Contact Button */}
                <div className="p-4 border-t border-border">
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="w-full py-6 text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

