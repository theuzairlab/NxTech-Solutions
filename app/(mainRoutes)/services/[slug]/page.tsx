import { notFound } from "next/navigation";
import { ServiceDetailPage } from "@/components/services/service-detail-page";
import {
  AIAutomationPage,
  WebDevelopmentPage,
  AppDevelopmentPage,
  DigitalMarketingPage,
} from "@/components/services/revops";
import { SubServicePage } from "@/components/services/sub-services/sub-service-page";
import { SUB_SERVICE_DATA } from "@/components/services/sub-services/sub-service-data";
import { prisma } from "@/lib/prisma";
import { JsonLd } from "@/components/ui/json-ld";
import { SERVICE_SCHEMAS } from "@/lib/seo/service-schemas";
import type { ServiceData } from "@/lib/services-data";

const REVOPS_SLUGS = [
  "ai-automation-marketing",
  "web-development",
  "app-development",
  "digital-marketing",
] as const;

const REVOPS_PAGES = {
  "ai-automation-marketing": AIAutomationPage,
  "web-development": WebDevelopmentPage,
  "app-development": AppDevelopmentPage,
  "digital-marketing": DigitalMarketingPage,
} as const;

export const revalidate = 60;

export async function generateStaticParams() {
  const dbServices = await prisma.service.findMany({
    where: { isActive: true },
    select: { slug: true },
  });
  const revopsSlugs = REVOPS_SLUGS.map((slug) => ({ slug }));
  const dbSlugs = dbServices
    .filter((s: typeof dbServices[0]) => !REVOPS_SLUGS.includes(s.slug as any))
    .map((s: typeof dbServices[0]) => ({ slug: s.slug }));
  return [...revopsSlugs, ...dbSlugs];
}

const REVOPS_METADATA: Record<string, { title: string; description: string }> = {
  "ai-automation-marketing": {
    title: "AI-Powered Marketing Solutions | 10x Your Efficiency",
    description: "Future-proof your brand with machine learning. We optimize ad spend and content for maximum ROI. Try our AI Content Strategy for 30% Off this month!",
  },
  "web-development": {
    title: "On Demand Web Development & Design | Fast, Secure & Scalable",
    description: "We build websites that work as hard as you do. Next.js, React, and PHP experts. 20% Discount on all Custom Web Projects for New Clients!",
  },
  "app-development": {
    title: "Mobile App Development Agency | iOS & Android Solutions",
    description: "Turn your vision into a world-class app. From Ecommerce to Custom Tools, we build for all platforms. Get a Free App Prototype Consultation Now!",
  },
  "digital-marketing": {
    title: "Full-Service Digital Marketing Agency | ROI-Driven Strategies",
    description: "From startups to established firms, we handle your complete digital presence. Data-backed growth for any industry. Claim Your Free Performance Report Today!",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (REVOPS_METADATA[slug]) {
    const meta = REVOPS_METADATA[slug];
    return {
      title: { absolute: meta.title },
      description: meta.description,
    };
  }


  const service = await prisma.service.findUnique({
    where: { slug, isActive: true },
    select: { title: true, shortDescription: true, overview: true },
  });

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${service.title} - ${process.env.NEXT_PUBLIC_SITE_NAME}`,
    description: service.shortDescription || service.overview || `Learn more about ${service.title} at ${process.env.NEXT_PUBLIC_SITE_NAME}`,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // RevOps service pages (hardcoded)
  if (slug in REVOPS_PAGES) {
    const PageComponent = REVOPS_PAGES[slug as keyof typeof REVOPS_PAGES];
    return (
      <>
        {SERVICE_SCHEMAS[slug] && <JsonLd schema={SERVICE_SCHEMAS[slug]} />}
        <PageComponent />
      </>
    );
  }


  // Database-driven services
  const service = await prisma.service.findUnique({
    where: { slug, isActive: true },
  });

  if (!service) {
    notFound();
  }

  const fullServiceData: ServiceData = {
    slug: service.slug,
    title: service.title,
    shortDescription: service.shortDescription,
    overview: service.overview,
    image: service.image,
    icon: service.icon,
    sections: (service.sections as any) || [],
    features: (service.features as any) || [],
    benefits: (service.benefits as any) || [],
    useCases: (service.useCases as any) || [],
    caseStudies: (service.caseStudies as any) || [],
    pricing: (service.pricing as any) || undefined,
    cta: (service.cta as any) || { text: "Get Started", link: "/contact" },
  };

  return (
    <>
      {SERVICE_SCHEMAS[slug] && <JsonLd schema={SERVICE_SCHEMAS[slug]} />}
      <ServiceDetailPage service={fullServiceData} />
    </>
  );
}

