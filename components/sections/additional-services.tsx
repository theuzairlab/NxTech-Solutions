"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Palette, 
  PenTool, 
  FileText, 
  Target, 
  Megaphone, 
  Briefcase, 
  Monitor, 
  Search, 
  Smartphone, 
  Database, 
  UserPlus, 
  Layers,
  ArrowRight 
} from "lucide-react";

const additionalServices = [
  {
    category: "Creatives",
    icon: Palette,
    services: [
      { name: "Social Media Content Creation", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop" },
      { name: "Brand Identity Design", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop" },
      { name: "Marketing Material Designing", image: "https://images.unsplash.com/photo-1586717791821-3f9c6d4b3b0e?w=400&h=300&fit=crop" },
      { name: "Video Editing / Animation", image: "https://images.unsplash.com/photo-1574717024653-430c6e4e5c5e?w=400&h=300&fit=crop" },
      { name: "Podcast Editing", image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=300&fit=crop" },
    ],
    color: "from-pink-500/20 to-rose-500/10",
  },
  {
    category: "Content Writing",
    icon: PenTool,
    services: [
      { name: "Research", image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop" },
      { name: "Article Writing & Book Writing", image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop" },
      { name: "Scripts / Body Copies", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop" },
      { name: "Website Content", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop" },
      { name: "Proof Reading", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop" },
    ],
    color: "from-blue-500/20 to-indigo-500/10",
  },
  {
    category: "Business Plans & Strategies",
    icon: Target,
    services: [
      { name: "Defining the Scope of Business", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop" },
      { name: "Social Commerce", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop" },
      { name: "Personal Brand Building", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop" },
      { name: "Online Course Creation", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop" },
      { name: "Building an Online Portfolio", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop" },
    ],
    color: "from-green-500/20 to-emerald-500/10",
  },
  {
    category: "Marketing & Lead Generation",
    icon: Megaphone,
    services: [
      { name: "LinkedIn Marketing", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop" },
      { name: "Social Media Marketing", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop" },
      { name: "Inbound / Outbound Calls", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=300&fit=crop" },
      { name: "Email Marketing", image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=400&h=300&fit=crop" },
      { name: "Paid Social Advertising", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop" },
    ],
    color: "from-purple-500/20 to-violet-500/10",
  },
  {
    category: "Administrative Assistance",
    icon: Briefcase,
    services: [
      { name: "Virtual Executive Assistant", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop" },
      { name: "Customer Support", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=300&fit=crop" },
      { name: "Managing CRM / Daily Tasks", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop" },
      { name: "Data Entry / Script Tracing", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop" },
      { name: "Client Follow-ups", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop" },
    ],
    color: "from-orange-500/20 to-amber-500/10",
  },
  {
    category: "Website Designing",
    icon: Monitor,
    services: [
      { name: "Website Designing", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop" },
      { name: "Website Maintenance", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop" },
      { name: "E-commerce / Shopify", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop" },
      { name: "ClickFunnels / Kartra / GoHighLevel", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop" },
      { name: "Website Migration", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop" },
    ],
    color: "from-cyan-500/20 to-teal-500/10",
  },
  {
    category: "SEO",
    icon: Search,
    services: [
      { name: "Competitor Analysis / Keyword Research", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop" },
      { name: "On-Page / Off-Page SEO", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop" },
      { name: "Sitemap Submission", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop" },
      { name: "Directory Listings Update", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop" },
      { name: "YouTube SEO / Google Maps SEO", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop" },
    ],
    color: "from-yellow-500/20 to-orange-500/10",
  },
  {
    category: "Custom Development",
    icon: Smartphone,
    services: [
      { name: "Mobile App Development", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop" },
      { name: "Web Application Development", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop" },
      { name: "Discovery Phase", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop" },
      { name: "QA & Testing", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop" },
      { name: "Deployment & Maintenance", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop" },
    ],
    color: "from-indigo-500/20 to-purple-500/10",
  },
  {
    category: "CRM Assistance",
    icon: Database,
    services: [
      { name: "Data Quality Management", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop" },
      { name: "Integration with Other Systems", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop" },
      { name: "Designing Landing Page", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop" },
      { name: "Email Automation", image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=400&h=300&fit=crop" },
      { name: "Analytics & Reporting", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop" },
    ],
    color: "from-red-500/20 to-pink-500/10",
  },
  {
    category: "Staff Augmentation",
    icon: UserPlus,
    services: [
      { name: "Dedicated Remote Staff", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop" },
      { name: "IT Engineers & Developers", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop" },
      { name: "Digital Marketing Specialists", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop" },
      { name: "Virtual Assistants", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop" },
      { name: "Full-Time / Part-Time / Project-Based Resources", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop" },
      { name: "Managed Talent Oversight", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop" },
    ],
    color: "from-teal-500/20 to-cyan-500/10",
  },
  {
    category: "White Label Services",
    icon: Layers,
    services: [
      { name: "Work Under Client's Brand Identity", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop" },
      { name: "White Label Web Development", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop" },
      { name: "White Label Digital Marketing", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop" },
      { name: "White Label Lead Generation", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop" },
      { name: "Confidential Reporting & Communication", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop" },
      { name: "Complete NDA & Branding Protection", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop" },
    ],
    color: "from-slate-500/20 to-gray-500/10",
  },
];

// Duplicate for infinite scroll
const duplicatedServices = additionalServices.flatMap(category => 
  category.services.map(service => ({ ...service, category: category.category, icon: category.icon, color: category.color }))
);

const duplicatedAllServices = [...duplicatedServices, ...duplicatedServices, ...duplicatedServices];

type Service = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
  icon: string;
};

type AdditionalServicesProps = {
  services: Service[];
};

export function AdditionalServices({ services }: AdditionalServicesProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const positionRef = useRef(0);
  
  // Transform database services to the format expected by the component
  const transformedServices = services.map((service) => ({
    name: service.title,
    image: service.image || "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    slug: service.slug,
  }));
  
  const duplicatedServices = transformedServices.length > 0 
    ? [...transformedServices, ...transformedServices, ...transformedServices]
    : [];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    const speed = 0.5;

    const animate = () => {
      const firstCard = scrollContainer.children[0] as HTMLElement;
      if (firstCard) {
        const cardWidth = firstCard.offsetWidth;
        const gap = 16;
        const setWidth = transformedServices.length > 0 ? (cardWidth + gap) * transformedServices.length : 0;

        if (!isHovered) {
          positionRef.current -= speed;
          if (Math.abs(positionRef.current) >= setWidth) {
            positionRef.current = 0;
          }
          scrollContainer.style.transform = `translateX(${positionRef.current}px)`;
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [isHovered, transformedServices.length]);

  return (
    <section className="relative py-20 bg-gradient-to-b from-primary/90 to-background -mt-32 rounded-t-[50px] sm:rounded-t-[100px] md:rounded-t-[150px] rounded-b-[50px] sm:rounded-b-[100px] md:rounded-b-[150px] z-7">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
            <span className="text-xs font-semibold tracking-[0.25em] text-white">ADDITIONAL SERVICES</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-white to-primary/90 bg-clip-text text-transparent">
              Additional Services
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Specialized services to support every aspect of your business
          </p>
        </div>

        {/* Auto-scrolling Services */}
        <div
          className="overflow-hidden py-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            ref={scrollRef}
            className="flex gap-5 lg:gap-6 will-change-transform"
            style={{ transition: isHovered ? 'transform 0.3s ease-out' : 'none' }}
          >
            {duplicatedServices.length === 0 ? (
              <div className="text-center py-12 w-full">
                <p className="text-white/80">No additional services available at the moment.</p>
              </div>
            ) : (
              duplicatedServices.map((service, index) => {
                return (
                  <Link
                    key={`${service.slug}-${index}`}
                    href={`/services/${service.slug}`}
                    className="group relative shrink-0 w-[300px] sm:w-[320px] rounded-2xl overflow-hidden bg-white border-2 border-white/20 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-2 flex flex-col"
                  >
                    {/* Image Section */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 300px, 320px"
                      />
                      {/* Dark Overlay for better contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 group-hover:via-black/30 transition-all duration-500" />
                      
                      {/* Hover Accent Line */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/80 to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    </div>

                    {/* Content Section */}
                    <div className="p-5 bg-white flex-1 flex flex-col">
                      <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                        {service.name}
                      </h3>
                      
                      {/* Arrow Icon */}
                      <div className="mt-3 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-sm font-semibold">Learn More</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 rounded-2xl" />
                    </div>
                  </Link>
                );
              })
            )}
          </div>
        </div>

        {/* Services Grid */}
        {transformedServices.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-20">
            {transformedServices.map((service) => {
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group relative overflow-hidden rounded-2xl bg-white border-2 border-white/20 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 flex flex-col h-full"
                >
                  {/* Image Section */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Dark Overlay for better text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10 group-hover:from-black/80 group-hover:via-black/40 transition-all duration-500" />
                    
                    {/* Service Name Badge */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                      <h3 className="text-xl font-bold text-white mb-0 group-hover:text-primary-foreground transition-colors duration-300 drop-shadow-lg">
                        {service.name}
                      </h3>
                    </div>

                    {/* Hover Accent Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/80 to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>

                  {/* Content Section */}
                  <div className="relative p-6 bg-white flex-1 flex flex-col">
                    {/* Learn More Section */}
                    <div className="mt-auto flex items-center gap-2 text-primary duration-300">
                      <span className="text-sm font-semibold">Explore Service</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 rounded-2xl" />
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

