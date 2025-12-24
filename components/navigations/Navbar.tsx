

"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function NavbarComponent({ navItems }: { navItems: { name: string; link: string; icon?: React.ReactNode }[] }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton href="/contact" variant="primary">
              Get a Quote
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>
        </MobileNav>
      </Navbar>

      {/* Mobile Sidebar - Rendered outside Navbar for proper overlay */}
      <MobileNavMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      >
        {navItems.map((item, idx) => {
          const isActive = pathname === item.link || 
            (item.link !== "/" && pathname.startsWith(item.link));
          
          return (
            <Link
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "flex items-center gap-4 px-4 py-4 rounded-lg transition-all duration-200",
                isActive
                  ? "bg-primary/10 text-primary font-semibold"
                  : "text-foreground hover:bg-accent"
              )}
            >
              {item.icon && (
                <span className={cn(
                  "text-xl",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}>
                  {item.icon}
                </span>
              )}
              <span className="text-lg">{item.name}</span>
            </Link>
          );
        })}
        <div className="flex w-full flex-col gap-4 pt-4 mt-4 border-t border-border">
          <NavbarButton
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            variant="primary"
            className="w-full"
          >
            Get a Quote
          </NavbarButton>
        </div>
      </MobileNavMenu>
    </>
  );
}
