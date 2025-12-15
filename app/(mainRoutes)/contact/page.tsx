import { ContactHero } from "@/components/sections/contact-hero";
import { ContactForm } from "@/components/sections/contact-form";
import { OfficeLocations } from "@/components/sections/office-locations";
import { GetQuoteForm } from "@/components/sections/get-quote-form";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { LiveChatWidget } from "@/components/ui/live-chat-widget";

export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <OfficeLocations />
      <GetQuoteForm />
    </>
  );
}

