"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { CalendlyModal } from "@/components/ui/calendly-modal";

interface ServiceInquiryFormProps {
  serviceName: string;
  serviceSlug: string;
}

export function ServiceInquiryForm({ serviceName, serviceSlug }: ServiceInquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    website: "",
    budget: "",
    industry: "",
    biggestChallenge: "",
    email: "",
    whatsapp: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.whatsapp) {
      alert("Please fill in Name, Email, and WhatsApp");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/quote-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.whatsapp,
          company: formData.company || undefined,
          website: formData.website || undefined,
          budget: formData.budget || "Not specified",
          projectDescription: `Industry: ${formData.industry || "Not specified"}\n\nBiggest Challenge: ${formData.biggestChallenge || "Not specified"}`,
          timeline: "ASAP",
          services: [serviceName],
        }),
      });

      if (!res.ok) throw new Error("Failed to submit");
      setShowCalendly(true);
      setFormData({
        name: "",
        company: "",
        website: "",
        budget: "",
        industry: "",
        biggestChallenge: "",
        email: "",
        whatsapp: "",
      });
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const budgetOptions = [
    "Under $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000+",
    "Not sure",
  ];

  const industryOptions = [
    "Real Estate",
    "Dental",
    "SaaS",
    "Coaches",
    "E-commerce",
    "Local Business",
    "Other",
  ];

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Name *</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-border bg-background"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-1">Company</label>
            <input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-border bg-background"
            />
          </div>
        </div>
        <div>
          <label htmlFor="website" className="block text-sm font-medium mb-1">Website</label>
          <input
            id="website"
            name="website"
            type="url"
            placeholder="https://"
            value={formData.website}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-border bg-background"
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="budget" className="block text-sm font-medium mb-1">Budget</label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-border bg-background"
            >
              <option value="">Select budget</option>
              {budgetOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="industry" className="block text-sm font-medium mb-1">Industry</label>
            <select
              id="industry"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-border bg-background"
            >
              <option value="">Select industry</option>
              {industryOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="biggestChallenge" className="block text-sm font-medium mb-1">Biggest Challenge</label>
          <textarea
            id="biggestChallenge"
            name="biggestChallenge"
            rows={3}
            value={formData.biggestChallenge}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-border bg-background"
            placeholder="What's your biggest growth challenge?"
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email *</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-border bg-background"
            />
          </div>
          <div>
            <label htmlFor="whatsapp" className="block text-sm font-medium mb-1">WhatsApp *</label>
            <input
              id="whatsapp"
              name="whatsapp"
              type="tel"
              required
              value={formData.whatsapp}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-border bg-background"
              placeholder="+1234567890"
            />
          </div>
        </div>
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="w-full sm:w-auto"
        >
          {isSubmitting ? "Submitting..." : "Submit & Book Strategy Call"}
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <p className="text-xs text-muted-foreground">
          After submission you&apos;ll be redirected to book your strategy call.
        </p>
      </form>

      <CalendlyModal isOpen={showCalendly} onClose={() => setShowCalendly(false)} />
    </>
  );
}
