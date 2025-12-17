"use client";
import React, { useState } from "react";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


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
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true); // Show navbar at the top
      } else {
        if (direction < 0) {
          setVisible(true); // Show when scrolling up
        } else {
          setVisible(false); // Hide when scrolling down
        }
      }
    }
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-border rounded-full bg-card shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-5000 pr-2 pl-4 py-2 items-center justify-center space-x-4",
          className
        )}
      >
        <Link href="/" className="shrink-0">
          <Image src="/logo.png" alt={`${process.env.NEXT_PUBLIC_SITE_NAME} Solutions`} width={100} height={200} />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative items-center flex space-x-1 text-sm text-muted-foreground hover:text-primary transition-colors"
              )}
            >
              <span>{navItem.name}</span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Dropdown */}
        <div className="md:hidden">
          <DropdownMenu open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <DropdownMenuTrigger asChild>
              <button
                className="p-2 rounded-full hover:bg-primary/10 transition-colors"
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
                      <X className="h-5 w-5 text-foreground" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-5 w-5 text-foreground" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-56 mt-2 rounded-xl border border-border bg-card shadow-lg"
            >
              <AnimatePresence>
                {isMobileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {navItems.map((navItem: any, idx: number) => (
                      <DropdownMenuItem key={`mobile-link=${idx}`} asChild>
                        <Link
                          href={navItem.link}
                          className="flex items-center gap-3 cursor-pointer"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {navItem.icon && (
                            <span className="text-muted-foreground">
                              {navItem.icon}
                            </span>
                          )}
                          <span className="text-foreground">{navItem.name}</span>
                        </Link>
                      </DropdownMenuItem>
                    ))}
                    <DropdownMenuItem asChild>
                      <Link
                        href="/contact"
                        className="flex items-center justify-center cursor-pointer mt-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Button className="w-full bg-primary text-white hover:bg-primary/90">
                          Contact Us
                        </Button>
                      </Link>
                    </DropdownMenuItem>
                  </motion.div>
                )}
              </AnimatePresence>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Desktop Contact Button */}
        <Link href="/contact" className="hidden md:block">
          <button className="border text-sm font-medium relative border-border text-foreground hover:bg-primary hover:text-primary-foreground px-4 py-2 rounded-full transition-colors">
            <span>Contact Us</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-linear-to-r from-transparent via-primary to-transparent h-px" />
          </button>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};
