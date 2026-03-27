import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { prisma } from "@/lib/prisma";
import { HomeHeroAndCore } from "@/components/sections/home-hero-and-core";

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
  description: `${process.env.NEXT_PUBLIC_SITE_NAME} helps service-based businesses automate lead generation, qualify prospects using AI, and convert them into booked appointments and paying clients. Automation. Development. Performance Marketing. We are a team of experienced developers and marketers who are dedicated to helping businesses grow and succeed.`,
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
      <HomeHeroAndCore />
      <IndustriesServeRevOps />
      <Testimonials testimonials={testimonials} />
      <CTABanner />
    </div>
  );
}
