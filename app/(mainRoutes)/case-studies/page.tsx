import { prisma } from "@/lib/prisma";
import { ServicesIndustries } from "@/components/sections/services-industries";
import { ServicesPortfolio } from "@/components/sections/services-portfolio";
import { CaseStudiesHero } from "@/components/sections/case-studies-hero";
import { Metadata } from "next";
import { CTABanner } from "@/components/sections/cta-banner";
import { JsonLd } from "@/components/ui/json-ld";
import { CASE_STUDIES_SCHEMA } from "@/lib/seo/page-schemas";

export const metadata: Metadata = {
  title: "Case Studies & Results",
  description: "Explore how we've helped ambitious brands scale their operations.",
};

export default async function CaseStudiesPage() {
  const [portfolios, industries] = await Promise.all([
    prisma.portfolio.findMany({
      where: {
        isActive: true,
      },
      orderBy: [
        { displayOrder: "asc" },
        { createdAt: "asc" },
      ],
      select: {
        id: true,
        slug: true,
        title: true,
        category: true,
        type: true,
        image: true,
        description: true,
        link: true,
        client: true,
        metrics: true,
        before: true,
        after: true,
        isFeatured: true,
        isActive: true,
        displayOrder: true,
      },
    }),
    prisma.industry.findMany({
      where: {
        isActive: true,
      },
      orderBy: [
        { displayOrder: "asc" },
        { createdAt: "asc" },
      ],
      select: {
        id: true,
        name: true,
        image: true,
        services: true,
      },
    }),
  ]);

  const transformedIndustries = industries.map((industry: any) => ({
    id: industry.id,
    name: industry.name,
    image: industry.image || "",
    services: (industry.services as any) || {
      painPoints: [],
      solutions: [],
      caseStudy: { title: "", result: "", description: "" },
    },
  }));

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <JsonLd schema={CASE_STUDIES_SCHEMA} />
      <CaseStudiesHero />
      <ServicesPortfolio portfolios={portfolios} />
      <ServicesIndustries industries={transformedIndustries} />
      <CTABanner />
    </main>
  );
}
