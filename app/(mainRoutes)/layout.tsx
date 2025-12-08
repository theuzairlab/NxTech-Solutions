import type { Metadata } from "next";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Footer } from "@/components/navigations/footer";
import { Home, User, Mail } from "lucide-react";
export const metadata: Metadata = {
  title: "NxTech Solutions - Empowering Businesses with IT, Marketing & AI Solutions",
  description: "NxTech delivers cutting-edge digital solutions that drive revenue, automate operations, and scale your business. IT Services, Digital Marketing, AI Agents, Lead Generation & more.",
};

export default function MainRoutesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const navItems = [
        {
          name: "Home",
          link: "/",
          icon: <Home className="h-4 w-4 text-muted-foreground" />,
        },
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
      ];

  return (
    <>
      <main className="relative w-full">
        <FloatingNav navItems={navItems} />
        {children}
      </main>
      <Footer />
    </>
  );
}
