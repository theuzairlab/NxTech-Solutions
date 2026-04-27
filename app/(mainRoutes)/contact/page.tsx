import { ContactHero } from "@/components/sections/contact-hero";
import { ContactForm } from "@/components/sections/contact-form";
import { OfficeLocations } from "@/components/sections/office-locations";
import { CalendlyEmbed } from "@/components/sections/calendly-embed";
import { JsonLd } from "@/components/ui/json-ld";
import { CONTACT_SCHEMA } from "@/lib/seo/page-schemas";

export default function Contact() {
  return (
    <>
      <JsonLd schema={CONTACT_SCHEMA} />
      <ContactHero />
      <ContactForm />
      <CalendlyEmbed />
      <OfficeLocations />
    </>
  );
}

