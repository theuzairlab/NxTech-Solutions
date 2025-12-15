"use client";
import Image from "next/image";
import { ArrowRight, CheckCircle2, AlertCircle, Lightbulb, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const industries = [
  {
    name: "E-commerce",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    painPoints: [
      "Low conversion rates and cart abandonment",
      "Poor inventory management",
      "Limited payment gateway options",
      "Inefficient order fulfillment",
      "Weak customer retention strategies"
    ],
    solutions: [
      "AI-powered product recommendations",
      "Integrated inventory management systems",
      "Multi-payment gateway integration",
      "Automated order processing",
      "Personalized marketing automation"
    ],
    caseStudy: {
      title: "ABC Inc. E-commerce Platform",
      result: "250% revenue increase in 6 months",
      description: "Complete platform redesign with AI recommendations and seamless checkout"
    }
  },
  {
    name: "Real Estate",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    painPoints: [
      "Manual property listing management",
      "Inefficient lead tracking",
      "Poor client communication",
      "Time-consuming document processing",
      "Limited virtual tour capabilities"
    ],
    solutions: [
      "Automated property listing platforms",
      "CRM integration for lead management",
      "AI-powered chatbots for inquiries",
      "Document automation systems",
      "360° virtual tour integration"
    ],
    caseStudy: {
      title: "XYZ Realty CRM System",
      result: "180% increase in qualified leads",
      description: "Custom CRM with automated workflows and virtual tour integration"
    }
  },
  {
    name: "Travel & Tourism",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
    painPoints: [
      "Complex booking management",
      "Poor customer support response times",
      "Limited mobile accessibility",
      "Inefficient payment processing",
      "Difficulty managing multiple vendors"
    ],
    solutions: [
      "Integrated booking platforms",
      "AI chatbots for 24/7 support",
      "Mobile-first travel apps",
      "Multi-currency payment systems",
      "Vendor management portals"
    ],
    caseStudy: {
      title: "TravelHub Booking Platform",
      result: "320% increase in bookings",
      description: "Complete booking system with AI recommendations and mobile app"
    }
  },
  {
    name: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
    painPoints: [
      "Manual patient record management",
      "Long appointment wait times",
      "HIPAA compliance challenges",
      "Inefficient billing processes",
      "Limited telemedicine capabilities"
    ],
    solutions: [
      "Electronic Health Records (EHR) systems",
      "Automated appointment scheduling",
      "HIPAA-compliant cloud solutions",
      "Automated billing and invoicing",
      "Telemedicine platform integration"
    ],
    caseStudy: {
      title: "MedCare Patient Portal",
      result: "60% reduction in admin time",
      description: "HIPAA-compliant patient management system with telemedicine"
    }
  },
  {
    name: "FinTech",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    painPoints: [
      "Security and fraud concerns",
      "Regulatory compliance complexity",
      "Slow transaction processing",
      "Poor user experience",
      "Limited integration capabilities"
    ],
    solutions: [
      "Advanced fraud detection systems",
      "Regulatory compliance automation",
      "High-performance payment processing",
      "Intuitive mobile banking apps",
      "API-first architecture"
    ],
    caseStudy: {
      title: "PaySecure Payment Platform",
      result: "99.9% uptime with zero fraud incidents",
      description: "Secure payment gateway with real-time fraud detection"
    }
  },
  {
    name: "Logistics & Transport",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
    painPoints: [
      "Inefficient route planning",
      "Poor real-time tracking",
      "Manual inventory management",
      "Limited visibility into operations",
      "High operational costs"
    ],
    solutions: [
      "AI-powered route optimization",
      "Real-time GPS tracking systems",
      "Automated warehouse management",
      "Comprehensive analytics dashboards",
      "Cost optimization algorithms"
    ],
    caseStudy: {
      title: "LogiTrack Fleet Management",
      result: "35% reduction in fuel costs",
      description: "Complete logistics platform with route optimization and tracking"
    }
  },
  {
    name: "Education & E-learning",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
    painPoints: [
      "Outdated learning management systems",
      "Poor student engagement",
      "Limited assessment tools",
      "Inefficient content delivery",
      "Difficulty tracking progress"
    ],
    solutions: [
      "Modern LMS platforms",
      "Interactive learning modules",
      "Automated assessment systems",
      "Video streaming and content delivery",
      "Comprehensive progress analytics"
    ],
    caseStudy: {
      title: "EduLearn Platform",
      result: "400% increase in student engagement",
      description: "Interactive learning platform with AI-powered personalization"
    }
  },
  {
    name: "SaaS Companies",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    painPoints: [
      "Scalability challenges",
      "Complex subscription management",
      "Limited API capabilities",
      "Poor user onboarding",
      "Insufficient analytics"
    ],
    solutions: [
      "Cloud-native architecture",
      "Automated subscription billing",
      "Comprehensive API development",
      "Interactive onboarding flows",
      "Advanced analytics and reporting"
    ],
    caseStudy: {
      title: "CloudSaaS Platform",
      result: "500% user growth in 12 months",
      description: "Scalable SaaS platform with automated billing and analytics"
    }
  },
  {
    name: "Hospitality & Restaurants",
    image: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=800&h=600&fit=crop",
    painPoints: [
      "Manual reservation management",
      "Poor guest experience",
      "Inefficient POS systems",
      "Limited loyalty program capabilities",
      "Difficulty managing multiple locations"
    ],
    solutions: [
      "Automated reservation systems",
      "Guest management platforms",
      "Integrated POS solutions",
      "Loyalty program automation",
      "Multi-location management dashboards"
    ],
    caseStudy: {
      title: "HotelPro Management System",
      result: "45% increase in repeat bookings",
      description: "Complete hospitality management with guest engagement tools"
    }
  },
  {
    name: "Professional Services",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop",
    painPoints: [
      "Manual client management",
      "Time tracking inefficiencies",
      "Complex billing processes",
      "Poor project visibility",
      "Limited collaboration tools"
    ],
    solutions: [
      "Client relationship management systems",
      "Automated time tracking",
      "Streamlined billing and invoicing",
      "Project management dashboards",
      "Collaboration and communication tools"
    ],
    caseStudy: {
      title: "ProManage CRM",
      result: "50% reduction in administrative overhead",
      description: "Comprehensive CRM for professional services with automation"
    }
  },
  {
    name: "Automotive",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop",
    painPoints: [
      "Outdated inventory systems",
      "Poor customer service",
      "Limited online presence",
      "Inefficient service scheduling",
      "Difficulty managing parts inventory"
    ],
    solutions: [
      "Modern inventory management",
      "AI-powered customer support",
      "E-commerce platforms",
      "Automated service scheduling",
      "Parts tracking and management"
    ],
    caseStudy: {
      title: "AutoDealer Platform",
      result: "200% increase in online sales",
      description: "Complete automotive dealership management system"
    }
  },
];

export function ServicesIndustries() {
  return (
    <section className="relative py-24 overflow-hidden -mt-32 pt-40 rounded-b-[150px] bg-linear-to-b from-[#f0f9ff] via-white to-[#e0f2fe] z-6">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 right-1/4 w-[520px] h-[520px] bg-primary/12 blur-3xl" />
        <div className="absolute -bottom-20 left-10 w-[480px] h-[480px] bg-primary/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-size-[140px_140px] opacity-60" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur">
            <span className="text-xs font-semibold tracking-[0.25em] text-primary">INDUSTRIES</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-foreground to-primary bg-clip-text text-transparent">
              Industries We Serve
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tailored solutions addressing specific industry challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
            >
              {/* Image Background */}
              <div className="absolute inset-0 opacity-90 group-hover:opacity-75 transition-opacity duration-500 ease-in-out">
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  className="object-cover scale-100 group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Hover Background Animation */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />
              <div className="absolute inset-0 bg-linear-to-t from-card/95 via-card/70 to-transparent" />

              {/* Content */}
              <div className="relative p-6 z-10">
                <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {industry.name}
                </h3>
                
                {/* Pain Points */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle className="h-4 w-4 text-red-500" />
                    <h4 className="text-sm font-semibold text-foreground">Pain Points</h4>
                  </div>
                  <ul className="space-y-1">
                    {industry.painPoints.slice(0, 3).map((point, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="text-red-500 mt-0.5">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solutions */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb className="h-4 w-4 text-primary" />
                    <h4 className="text-sm font-semibold text-foreground">Our Solutions</h4>
                  </div>
                  <ul className="space-y-1">
                    {industry.solutions.slice(0, 3).map((solution, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                        <CheckCircle2 className="h-3 w-3 text-primary mt-0.5 shrink-0" />
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Case Study */}
                <div className="pt-3 border-t border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="h-4 w-4 text-primary" />
                    <h4 className="text-sm font-semibold text-foreground">Case Study</h4>
                  </div>
                  <p className="text-xs font-medium text-primary mb-1">{industry.caseStudy.title}</p>
                  <p className="text-xs text-muted-foreground">{industry.caseStudy.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center">
          <Button size="lg" variant="outline" className="border-2 border-primary/30 hover:bg-primary/10 text-primary hover:text-primary hover:border-primary/50">
            Explore All Industries
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div> */}
      </div>
    </section>
  );
}

