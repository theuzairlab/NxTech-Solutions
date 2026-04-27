import { notFound } from "next/navigation";
import { SubServicePage } from "@/components/services/sub-services/sub-service-page";
import { SUB_SERVICE_DATA, ALL_SUB_SERVICE_SLUGS } from "@/components/services/sub-services/sub-service-data";
import { JsonLd } from "@/components/ui/json-ld";
import { SERVICE_SCHEMAS } from "@/lib/seo/service-schemas";

export const revalidate = 60;

export async function generateStaticParams() {
  const params: { slug: string; "sub-service": string }[] = [];
  
  for (const item of ALL_SUB_SERVICE_SLUGS) {
    const data = SUB_SERVICE_DATA[item];
    if (data) {
      params.push({
        slug: data.parentSlug,
        "sub-service": item,
      });
    }
  }
  
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; "sub-service": string }> }) {
  const { slug: mainService, "sub-service": subService } = await params;
  
  const sub = SUB_SERVICE_DATA[subService];
  
  // Validate sub-service exists and URL matches parent slug
  if (!sub || sub.parentSlug !== mainService) {
    return { title: "Service Not Found" };
  }

  return {
    title: { absolute: sub.metaTitle || `${sub.highlightLine} - ${process.env.NEXT_PUBLIC_SITE_NAME}` },
    description: sub.metaDescription || sub.description,
  };
}

export default async function NestedSubServicePage({ params }: { params: Promise<{ slug: string; "sub-service": string }> }) {
  const { slug: mainService, "sub-service": subService } = await params;

  const data = SUB_SERVICE_DATA[subService];

  // If sub-service doesn't exist or main-service in URL is wrong, throw 404
  if (!data || data.parentSlug !== mainService) {
    notFound();
  }

  const schemaKey = `${mainService}/${subService}`;
  const schema = SERVICE_SCHEMAS[schemaKey];

  return (
    <>
      {schema && <JsonLd schema={schema} />}
      <SubServicePage slug={subService} />
    </>
  );
}
