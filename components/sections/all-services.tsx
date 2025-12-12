"use client";
import Image from "next/image";
import Link from "next/link";
import { 
  Server, 
  TrendingUp, 
  Users, 
  Bot, 
  Code, 
  Globe, 
  Cloud, 
  Shield, 
  MessageSquare,
  ArrowRight 
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
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 auto-rows-fr">
          {mainServices.map((service, index) => {
            const Icon = service.icon;
            const isLastItem = index === mainServices.length - 1;
            const isAloneInRow = isLastItem && mainServices.length % 3 === 1;
            
            return (
              <Link
                key={index}
                href={service.link}
                className={`group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 ${
                  isAloneInRow 
                    ? 'lg:col-start-2 lg:col-end-3' 
                    : 'w-full'
                }`}
              >
                {/* Image Background - Visible on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 ease-in-out">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover scale-100 group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="absolute inset-0 bg-gradient-to-t from-card/95 via-card/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative p-6 z-10 h-full flex flex-col">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 grow">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

