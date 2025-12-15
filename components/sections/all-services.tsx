"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Server, 
  TrendingUp, 
  Users, 
  Bot, 
  Code, 
  Globe, 
  Cloud, 
  Shield, 
  MessageSquare
} from "lucide-react";

const mainServices = [
  {
    icon: Server,
    title: "IT Services",
    description: "Comprehensive IT consulting, software development, support, and cloud solutions to keep your business running smoothly.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    link: "/services/it-services",
    gradient: "from-blue-500/20 to-cyan-500/10",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing Services",
    description: "SEO, SEM, social media marketing, email campaigns, and content creation to boost your online presence.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    link: "/services/digital-marketing",
    gradient: "from-purple-500/20 to-pink-500/10",
  },
  {
    icon: Users,
    title: "B2B/B2C Lead Generation",
    description: "Strategic lead research, cold outreach, appointment setting, and CRM integration to grow your pipeline.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    link: "/services/lead-generation",
    gradient: "from-green-500/20 to-emerald-500/10",
  },
  {
    icon: Bot,
    title: "AI Sales Agent Solutions",
    description: "Automated sales agents that handle conversations, qualify leads, and integrate with your CRM systems.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    link: "/services/ai-sales-agent",
    gradient: "from-orange-500/20 to-red-500/10",
  },
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored software solutions built to your specifications, from web apps to enterprise systems.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
    link: "/services/custom-software",
    gradient: "from-indigo-500/20 to-blue-500/10",
  },
  {
    icon: Globe,
    title: "Web & App Development",
    description: "Modern websites, e-commerce stores, mobile apps, and web applications for all platforms.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
    link: "/services/web-app-development",
    gradient: "from-teal-500/20 to-cyan-500/10",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Cloud migration, infrastructure setup, and managed cloud services for scalable business operations.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    link: "/services/cloud-solutions",
    gradient: "from-sky-500/20 to-blue-500/10",
  },
  {
    icon: Shield,
    title: "Cybersecurity Services",
    description: "Protect your business with comprehensive security audits, threat monitoring, and compliance solutions.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
    link: "/services/cybersecurity",
    gradient: "from-red-500/20 to-orange-500/10",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbot Development",
    description: "Intelligent chatbots for websites, WhatsApp, and e-commerce to automate customer service 24/7.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop",
    link: "/services/ai-chatbot",
    gradient: "from-violet-500/20 to-purple-500/10",
  },
];

export function AllServices() {
  return (
    <section className="py-20 bg-linear-to-b from-background to-primary/5 pb-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-foreground to-primary bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mainServices.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <div
                key={index}
                className="group relative overflow-visible rounded-2xl bg-white border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 flex flex-col"
              >
                {/* Image - Always Visible */}
                <div className="relative h-64 w-full overflow-hidden rounded-t-2xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Icon - Centered and overlapping image/content */}
                <div className="absolute top-56 left-1/2 -translate-x-1/2 z-20 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white border-2 border-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-primary" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div className="p-6 pt-10 sm:pt-12 flex flex-col flex-1">

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-6 flex-1 leading-relaxed">
                    {service.description}
                  </p>

                  {/* View Service Button */}
                  <Link href={service.link}>
                    <Button 
                      className="w-full bg-primary text-white hover:bg-primary/90 transition-colors"
                      size="lg"
                    >
                      View Service
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

