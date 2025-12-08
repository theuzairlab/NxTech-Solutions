"use client";
import Image from "next/image";
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-commerce Platform ",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    metrics: {
      label: "Revenue Increase",
      value: "250%",
      icon: TrendingUp,
    },
    description: "Complete platform redesign with AI-powered recommendations",
  },
  {
    title: "AI Sales Agent Implementation",
    category: "AI Solutions",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    metrics: {
      label: "Lead Conversion",
      value: "180%",
      icon: Users,
    },
    description: "Automated lead qualification and meeting scheduling",
  },
  {
    title: "Digital Marketing Campaign",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
    metrics: {
      label: "ROI Improvement",
      value: "320%",
      icon: Zap,
    },
    description: "Multi-channel campaign with advanced targeting",
  },
  {
    title: "Cloud Infrastructure Migration",
    category: "IT Services",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    metrics: {
      label: "Cost Reduction",
      value: "45%",
      icon: TrendingUp,
    },
    description: "Seamless migration with zero downtime",
  },
  {
    title: "Mobile App Development",
    category: "App Development",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    metrics: {
      label: "User Growth",
      value: "500%",
      icon: Users,
    },
    description: "Cross-platform app with native performance",
  },
  {
    title: "SEO & Content Strategy",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    metrics: {
      label: "Organic Traffic",
      value: "400%",
      icon: TrendingUp,
    },
    description: "Comprehensive SEO overhaul with content strategy",
  },
];

export function PortfolioHighlight() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Portfolio Highlights
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A curated selection of successful client projects with measurable impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => {
            const MetricIcon = project.metrics.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
              >
                {/* Image */}
                <div className="relative h-60 overflow-hidden rounded-2xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover p-2 rounded-2xl "
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1.5 rounded-full bg-primary/90 backdrop-blur-sm text-white text-xs font-medium shadow-md">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Metrics - Matching Screenshot Style */}
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <MetricIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-3xl font-bold text-primary mb-0.5">
                        {project.metrics.value}
                      </div>
                      <div className="text-xs text-muted-foreground font-medium">
                        {project.metrics.label}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg shadow-primary/25">
            View Full Portfolio
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}

