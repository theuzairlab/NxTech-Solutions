import { notFound } from "next/navigation";
import { servicesData, additionalServicesData, ServiceData } from "@/lib/services-data";
import { ServiceDetailPage } from "@/components/services/service-detail-page";

export async function generateStaticParams() {
  const mainServiceSlugs = Object.keys(servicesData);
  const additionalServiceSlugs = Object.keys(additionalServicesData);
  return [...mainServiceSlugs, ...additionalServiceSlugs].map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData[slug] || additionalServicesData[slug];
  
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} - NxTech Solutions`,
    description: service.shortDescription || service.overview || `Learn more about ${service.title} at NxTech Solutions`,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData[slug] || additionalServicesData[slug];
  
  if (!service) {
    notFound();
  }

  // Merge additional services data with main services structure
  const fullServiceData: ServiceData = {
    ...service,
    slug: service.slug || slug,
    title: service.title || "",
    shortDescription: service.shortDescription || "",
    overview: service.overview || service.title || "",
    sections: service.sections || [],
    cta: service.cta || { text: "Get Started", link: "/contact" },
    image: service.image || "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    icon: service.icon || "Code",
  } as ServiceData;

  return <ServiceDetailPage service={fullServiceData} />;
}

