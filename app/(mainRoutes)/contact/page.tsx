import { ContactHero } from "@/components/sections/contact-hero";
import { ContactForm } from "@/components/sections/contact-form";
import { OfficeLocations } from "@/components/sections/office-locations";
import { CalendlyEmbed } from "@/components/sections/calendly-embed";

export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <CalendlyEmbed />
      <OfficeLocations />
    </>
  );
}

