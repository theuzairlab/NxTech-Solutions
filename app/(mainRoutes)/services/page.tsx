import type { Metadata } from "next";
import { ServicesHero } from "@/components/sections/services-hero";
import { AllServices } from "@/components/sections/all-services";
import { AdditionalServices } from "@/components/sections/additional-services";
import { ServicesIndustries } from "@/components/sections/services-industries";
import { ServicesPortfolio } from "@/components/sections/services-portfolio";
import { GetQuoteForm } from "@/components/sections/get-quote-form";
import { CTABanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Services - NxTech Solutions | IT, Marketing, AI & Digital Solutions",
  description: "Comprehensive digital services including IT solutions, digital marketing, AI agents, lead generation, web development, cloud services, and more. Transform your business with NxTech.",
};

export default function Services() {
  return (
    <div className="w-full">
      <ServicesHero />
      <AllServices />
      <AdditionalServices />
      <ServicesIndustries />
      <ServicesPortfolio />
      <GetQuoteForm />
      <CTABanner />
    </div>
  );
}
  