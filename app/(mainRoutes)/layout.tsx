import type { Metadata } from "next";
import { Footer } from "@/components/navigations/footer";
import { Home, User, Mail, MessageCircle, BookA, Briefcase, FolderOpen } from "lucide-react";
import { NavbarComponent } from "@/components/navigations/Navbar";
import { LazyWidgets } from "@/components/ui/lazy-widgets-client";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_SITE_NAME + " - Empowering Businesses with IT, Marketing & AI Solutions",
  description: process.env.NEXT_PUBLIC_SITE_NAME + " delivers cutting-edge digital solutions that drive revenue, automate operations, and scale your business. IT Services, Digital Marketing, AI Agents, Lead Generation & more.",
};

export default function MainRoutesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const navItems = [
    {
      name: "About",
      link: "/about",
      icon: <User className="h-4 w-4 text-muted-foreground" />,
    },
    {
      name: "Services",
      link: "/services",
      icon: <Mail className="h-4 w-4 text-muted-foreground" />,
    },
    {
      name: "Case Studies",
      link: "/case-studies",
      icon: <FolderOpen className="h-4 w-4 text-muted-foreground" />,
    },
    {
      name: "Blogs",
      link: "/blog",
      icon: <BookA className="h-4 w-4 text-muted-foreground" />,
    },
    {
      name: "Careers",
      link: "/careers",
      icon: <Briefcase className="h-4 w-4 text-muted-foreground" />,
    },
  ];

  return (
    <>
      <main className="relative w-full">
        <NavbarComponent navItems={navItems} />
        {children}
        <LazyWidgets />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
