import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSnapshot } from "@/components/sections/services-snapshot";
import { WhyChoose } from "@/components/sections/why-choose";
import { IndustriesServe } from "@/components/sections/industries-serve";
import { PortfolioHighlight } from "@/components/sections/portfolio-highlight";
import { Testimonials } from "@/components/sections/testimonials";
import { CTABanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "NexTech Solutions - Empowering Businesses with IT, Marketing & AI Solutions",
  description: "NexTech delivers cutting-edge digital solutions that drive revenue, automate operations, and scale your business. IT Services, Digital Marketing, AI Agents, Lead Generation & more.",
};

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <ServicesSnapshot />
      <WhyChoose />
      <IndustriesServe />
      <PortfolioHighlight />
      <Testimonials />
      <CTABanner />
    </div>
  );
}
