import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero-section";
import { CoreServicesGrid } from "@/components/sections/core-services-grid";
import { HowWeBuild } from "@/components/sections/how-we-build";
import { AIWorkflowVisual } from "@/components/sections/ai-workflow-visual";
import { CaseStudiesResults } from "@/components/sections/case-studies-results";
import { IndustriesServeRevOps } from "@/components/sections/industries-serve-revops";
import { Testimonials } from "@/components/sections/testimonials";
import { CTABanner } from "@/components/sections/cta-banner";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_SITE_NAME} - AI-Powered Growth Systems That Turn Traffic Into Revenue`,
  description: `${process.env.NEXT_PUBLIC_SITE_NAME} helps service-based businesses automate lead generation, qualify prospects using AI, and convert them into booked appointments and paying clients. Automation. Development. Performance Marketing.`,
};

export const revalidate = 3600;

export default async function Home() {
  const testimonials = await prisma.testimonial.findMany({
    where: { isActive: true },
    orderBy: [
      { displayOrder: "asc" },
      { createdAt: "asc" },
    ],
    select: {
      id: true,
      name: true,
      role: true,
      company: true,
      image: true,
      content: true,
      rating: true,
    },
  });

  return (
    <div className="w-full">
      <HeroSection />
      <CoreServicesGrid />
      <HowWeBuild />
      <AIWorkflowVisual />
      <CaseStudiesResults />
      <IndustriesServeRevOps />
      <Testimonials testimonials={testimonials} />
      <CTABanner />
    </div>
  );
}
