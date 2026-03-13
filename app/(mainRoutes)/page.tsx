import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { HeroSection } from "@/components/sections/hero-section";
import { CoreServicesGrid } from "@/components/sections/core-services-grid";
import { prisma } from "@/lib/prisma";
const HowWeBuild = dynamic(() =>
  import("@/components/sections/how-we-build").then((m) => ({ default: m.HowWeBuild }))
);

const AIWorkflowVisual = dynamic(() =>
  import("@/components/sections/ai-workflow-visual").then((m) => ({ default: m.AIWorkflowVisual }))
);

const CaseStudiesResults = dynamic(() =>
  import("@/components/sections/case-studies-results").then((m) => ({ default: m.CaseStudiesResults }))
);

const IndustriesServeRevOps = dynamic(() =>
  import("@/components/sections/industries-serve-revops").then((m) => ({ default: m.IndustriesServeRevOps }))
);

const Testimonials = dynamic(() =>
  import("@/components/sections/testimonials").then((m) => ({ default: m.Testimonials }))
);

const CTABanner = dynamic(() =>
  import("@/components/sections/cta-banner").then((m) => ({ default: m.CTABanner }))
);

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
