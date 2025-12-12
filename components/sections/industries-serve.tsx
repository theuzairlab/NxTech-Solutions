"use client";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const industries = [
  {
    name: "E-commerce",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    description: "Complete digital commerce solutions",
    services: [
      "E-commerce Platform Development",
      "Payment Gateway Integration",
      "Inventory Management Systems",
      "AI-Powered Recommendations",
      "Mobile Commerce Solutions"
    ],
  },
  {
    name: "Real Estate",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    description: "Property management and sales platforms",
    services: [
      "Property Listing Platforms",
      "CRM for Real Estate",
      "Virtual Tour Integration",
      "Lead Management Systems",
      "Document Automation"
    ],
  },
  {
    name: "Travel & Tourism",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop",
    description: "Travel booking and management systems",
    services: [
      "Booking Platforms",
      "Travel Management Systems",
      "Mobile Travel Apps",
      "Payment Processing",
      "Customer Support Automation"
    ],
  },
  {
    name: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
    description: "Healthcare technology solutions",
    services: [
      "Patient Management Systems",
      "Telemedicine Platforms",
      "Medical Records Management",
      "Appointment Scheduling",
      "HIPAA Compliant Solutions"
    ],
  },
  {
    name: "FinTech",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    description: "Financial technology platforms",
    services: [
      "Payment Processing Systems",
      "Banking Applications",
      "Investment Platforms",
      "Fraud Detection Systems",
      "Regulatory Compliance"
    ],
  },
  {
    name: "SaaS",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    description: "Software as a Service platforms",
    services: [
      "Cloud-Based Applications",
      "Subscription Management",
      "API Development",
      "Multi-Tenant Architecture",
      "Analytics & Reporting"
    ],
  },
  {
    name: "Education",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
    description: "E-learning and education platforms",
    services: [
      "Learning Management Systems",
      "Online Course Platforms",
      "Student Information Systems",
      "Virtual Classroom Solutions",
      "Assessment & Testing Tools"
    ],
  },
  {
    name: "Logistics",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
    description: "Supply chain and logistics management",
    services: [
      "Warehouse Management",
      "Fleet Tracking Systems",
      "Route Optimization",
      "Inventory Tracking",
      "Delivery Management"
    ],
  },
  {
    name: "Hospitality",
    image: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=600&h=400&fit=crop",
    description: "Hotel and restaurant management",
    services: [
      "Hotel Booking Systems",
      "POS Integration",
      "Guest Management",
      "Reservation Systems",
      "Loyalty Programs"
    ],
  },
  {
    name: "Professional Services",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop",
    description: "Business and professional solutions",
    services: [
      "Client Management Systems",
      "Project Management Tools",
      "Time Tracking Solutions",
      "Billing & Invoicing",
      "Document Management"
    ],
  },
];

export function IndustriesServe() {
  return (
    <section className="relative py-24 overflow-hidden -mt-32 pt-40 rounded-b-[150px] bg-linear-to-b from-[#e9f9f4] via-white to-[#c9f1e6] z-8">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/4 w-[520px] h-[520px] bg-primary/12 blur-3xl" />
        <div className="absolute bottom-[-180px] right-[-80px] w-[620px] h-[620px] bg-primary/14 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-size-[140px_140px] opacity-60" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur">
            <span className="text-xs font-semibold tracking-[0.25em] text-primary">INDUSTRIES</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            <span className="bg-linear-to-r from-foreground via-primary to-primary bg-clip-text text-transparent">
              Industries We Serve
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground/90 max-w-2xl mx-auto">
            Proven expertise across diverse sectors with tailored solutions
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-xl cursor-pointer flip-card-container"
            >
              {/* Flip Card Container */}
              <div className="flip-card-inner">
                {/* Front Side */}
                <div className="flip-card-front absolute inset-0 w-full h-full rounded-xl overflow-hidden bg-card border border-border">
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    className="object-cover"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/50 to-transparent" />
                  
                  {/* Front Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                    <h3 className="text-white font-bold text-base sm:text-lg mb-2">
                      {industry.name}
                    </h3>
                    <p className="text-white/90 text-xs sm:text-sm">
                      {industry.description}
                    </p>
                  </div>
                </div>

                {/* Back Side */}
                <div className="flip-card-back absolute inset-0 w-full h-full rounded-xl overflow-hidden bg-linear-to-br from-primary via-primary/90 to-primary/80 border-2 border-primary/50">
                  {/* Back Content */}
                  <div className="absolute inset-0 p-4 flex flex-col">
                    <div className="mb-3">
                      <h3 className="text-white font-bold text-base sm:text-lg mb-1">
                        {industry.name}
                      </h3>
                      <p className="text-white/80 text-xs mb-3">
                        {industry.description}
                      </p>
                    </div>
                    
                    {/* Services List */}
                    <div className="flex-1 overflow-y-auto">
                      <ul className="space-y-2">
                        {industry.services.map((service, serviceIndex) => (
                          <li
                            key={serviceIndex}
                            className="flex items-start gap-2 text-white/90 text-xs"
                          >
                            <CheckCircle2 className="h-3 w-3 text-white mt-0.5 shrink-0" />
                            <span className="leading-tight">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Learn More Button */}
                    <div className="mt-3 pt-3 border-t border-white/20">
                      <div className="flex items-center justify-center gap-1 text-white text-xs font-medium group-hover:gap-2 transition-all">
                        <span>Learn more</span>
                        <ArrowRight className="h-3 w-3" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-2 border-primary/30 hover:bg-primary/10 text-primary hover:text-primary hover:border-primary/50">
            Explore All Industries
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}

