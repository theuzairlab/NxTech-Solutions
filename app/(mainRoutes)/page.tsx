import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { prisma } from "@/lib/prisma";
import { HomeHeroAndCore } from "@/components/sections/home-hero-and-core";
import { JsonLd } from "@/components/ui/json-ld";
import { HOMEPAGE_SCHEMA, SEARCH_BOX_SCHEMA } from "@/lib/seo/page-schemas";

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
  title: {
    absolute: "NxTechNova | All-in-One Digital Growth & AI Automation Agency",
  },
  description: "Scale ANY business with Done-For-You Marketing & AI Automation. Get a Free 30-Min Strategy Audit + Custom Roadmap",
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
      <JsonLd schema={HOMEPAGE_SCHEMA} />
      <JsonLd schema={SEARCH_BOX_SCHEMA} />
      <HomeHeroAndCore />
      <IndustriesServeRevOps />
      <Testimonials testimonials={testimonials} />
      <CTABanner />
    </div>
  );
}
