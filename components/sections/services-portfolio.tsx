"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, TrendingUp, Users, Zap, Code, Megaphone, Bot, Play, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs } from "@/components/ui/tabs";

const caseStudies = [
  {
    title: "E-commerce Platform Transformation",
    category: "IT Projects",
    type: "Web Development",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    client: "ABC Inc.",
    before: {
      revenue: "$500K",
      conversion: "1.2%",
      traffic: "50K/month"
    },
    after: {
      revenue: "$1.75M",
      conversion: "4.2%",
      traffic: "200K/month"
    },
    metrics: {
      label: "Revenue Increase",
      value: "250%",
      icon: TrendingUp,
    },
    description: "Complete platform redesign with AI-powered recommendations and seamless checkout experience",
    videoUrl: "#"
  },
  {
    title: "AI Sales Agent Implementation",
    category: "AI & Automation",
    type: "AI Solutions",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    client: "TechCorp",
    before: {
      leads: "200/month",
      conversion: "5%",
      response: "24 hours"
    },
    after: {
      leads: "800/month",
      conversion: "18%",
      response: "Instant"
    },
    metrics: {
      label: "Lead Conversion",
      value: "180%",
      icon: Bot,
    },
    description: "Automated lead qualification and meeting scheduling with AI-powered chatbots",
    videoUrl: "#"
  },
  {
    title: "Multi-Channel Marketing Campaign",
    category: "Marketing Campaigns",
    type: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
    client: "BrandX",
    before: {
      roi: "120%",
      cpa: "$150",
      leads: "500/month"
    },
    after: {
      roi: "420%",
      cpa: "$45",
      leads: "2500/month"
    },
    metrics: {
      label: "ROI Improvement",
      value: "320%",
      icon: Megaphone,
    },
    description: "Comprehensive SEO, PPC, and social media campaign with advanced targeting",
    videoUrl: "#"
  },
  {
    title: "Cloud Infrastructure Migration",
    category: "IT Projects",
    type: "Cloud Services",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    client: "Enterprise Solutions",
    before: {
      cost: "$50K/month",
      uptime: "95%",
      scalability: "Limited"
    },
    after: {
      cost: "$27.5K/month",
      uptime: "99.9%",
      scalability: "Unlimited"
    },
    metrics: {
      label: "Cost Reduction",
      value: "45%",
      icon: TrendingUp,
    },
    description: "Seamless cloud migration with zero downtime and improved scalability",
    videoUrl: "#"
  },
  {
    title: "Mobile App Development",
    category: "IT Projects",
    type: "App Development",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    client: "StartupXYZ",
    before: {
      users: "5K",
      rating: "3.2/5",
      retention: "25%"
    },
    after: {
      users: "30K",
      rating: "4.8/5",
      retention: "68%"
    },
    metrics: {
      label: "User Growth",
      value: "500%",
      icon: Users,
    },
    description: "Cross-platform mobile app with native performance and modern UI/UX",
    videoUrl: "#"
  },
  {
    title: "SEO & Content Strategy Overhaul",
    category: "Marketing Campaigns",
    type: "SEO Services",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    client: "ContentHub",
    before: {
      traffic: "10K/month",
      rankings: "5 top 10",
      leads: "50/month"
    },
    after: {
      traffic: "50K/month",
      rankings: "25 top 10",
      leads: "400/month"
    },
    metrics: {
      label: "Organic Traffic",
      value: "400%",
      icon: Zap,
    },
    description: "Comprehensive SEO overhaul with content strategy and technical optimization",
    videoUrl: "#"
  },
  {
    title: "SaaS Platform Development",
    category: "IT Projects",
    type: "SaaS Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    client: "CloudSaaS",
    before: {
      users: "1K",
      mrr: "$20K",
      churn: "8%"
    },
    after: {
      users: "15K",
      mrr: "$150K",
      churn: "2%"
    },
    metrics: {
      label: "MRR Growth",
      value: "650%",
      icon: Code,
    },
    description: "Scalable SaaS platform with automated billing and advanced analytics",
    videoUrl: "#"
  },
  {
    title: "Lead Generation Campaign",
    category: "Marketing Campaigns",
    type: "Lead Generation",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    client: "B2B Solutions",
    before: {
      leads: "100/month",
      quality: "30%",
      cost: "$200/lead"
    },
    after: {
      leads: "800/month",
      quality: "75%",
      cost: "$50/lead"
    },
    metrics: {
      label: "Lead Quality",
      value: "150%",
      icon: Users,
    },
    description: "Targeted B2B lead generation with advanced qualification and nurturing",
    videoUrl: "#"
  },
  {
    title: "AI Chatbot Implementation",
    category: "AI & Automation",
    type: "AI Solutions",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop",
    client: "ServicePro",
    before: {
      response: "2 hours",
      satisfaction: "65%",
      cost: "$5K/month"
    },
    after: {
      response: "Instant",
      satisfaction: "92%",
      cost: "$500/month"
    },
    metrics: {
      label: "Cost Savings",
      value: "90%",
      icon: Bot,
    },
    description: "AI-powered chatbot handling 80% of customer inquiries automatically",
    videoUrl: "#"
  },
];

const videoTestimonials = [
  {
    name: "John Smith",
    role: "CEO, ABC Inc.",
    company: "ABC Inc.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    quote: "NxTech transformed our e-commerce platform and increased our revenue by 250% in just 6 months.",
    videoUrl: "#"
  },
  {
    name: "Sarah Johnson",
    role: "Marketing Director, BrandX",
    company: "BrandX",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    quote: "Their marketing campaigns delivered exceptional ROI. We saw a 320% improvement in just 3 months.",
    videoUrl: "#"
  },
  {
    name: "Michael Chen",
    role: "CTO, TechCorp",
    company: "TechCorp",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    quote: "The AI sales agent implementation revolutionized our lead generation process.",
    videoUrl: "#"
  },
];

// Portfolio Card Component
function PortfolioCard({ project }: { project: typeof caseStudies[0] }) {
  const MetricIcon = project.metrics.icon;
  const projectSlug = project.title.toLowerCase().replace(/\s+/g, '-').replace(/[&/]/g, '');

  return (
    <Link
      href={`/portfolio/${projectSlug}`}
      className="group rounded-2xl bg-white border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 flex flex-col overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1.5 rounded-full bg-primary/90 backdrop-blur-sm text-white text-xs font-medium shadow-md">
            {project.type}
          </span>
        </div>

        {/* Play Button */}
        {project.videoUrl && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
            <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
              <Play className="h-8 w-8 text-primary ml-1" />
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 bg-white flex flex-col flex-1">
        <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Metrics */}
        <div className="flex items-center gap-4 p-4 rounded-xl bg-linear-to-br from-primary/5 to-primary/10 border border-primary/20 mb-4">
          <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
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

        {/* Before/After */}
        <div className="pt-4 border-t border-border">
          <div className="flex items-center gap-2 mb-3">
            <BarChart3 className="h-4 w-4 text-primary shrink-0" />
            <h4 className="text-sm font-semibold text-foreground">Before & After</h4>
          </div>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div>
              <div className="text-red-500 font-semibold mb-1">Before</div>
              {Object.entries(project.before).map(([key, value]) => (
                <div key={key} className="text-muted-foreground mb-1">
                  {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
                </div>
              ))}
            </div>
            <div>
              <div className="text-primary font-semibold mb-1">After</div>
              {Object.entries(project.after).map(([key, value]) => (
                <div key={key} className="text-muted-foreground mb-1">
                  {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

// Portfolio Grid Component
function PortfolioGrid({ projects }: { projects: typeof caseStudies }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <PortfolioCard key={project.title} project={project} />
      ))}
    </div>
  );
}

export function ServicesPortfolio() {
  // Prepare tabs data according to Aceternity UI tabs format
  const tabs = [
    {
      title: "All",
      value: "all",
      content: <PortfolioGrid projects={caseStudies} />
    },
    {
      title: "IT Projects",
      value: "it-projects",
      content: <PortfolioGrid projects={caseStudies.filter(p => p.category === "IT Projects")} />
    },
    {
      title: "Marketing Campaigns",
      value: "marketing",
      content: <PortfolioGrid projects={caseStudies.filter(p => p.category === "Marketing Campaigns")} />
    },
    {
      title: "AI & Automation",
      value: "ai-automation",
      content: <PortfolioGrid projects={caseStudies.filter(p => p.category === "AI & Automation")} />
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden -mt-32 pt-40 rounded-b-[150px] bg-linear-to-b from-[#f5f9ff] via-white to-[#e8f2ff] z-5">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/4 w-[520px] h-[520px] bg-primary/12 blur-3xl" />
        <div className="absolute -bottom-20 right-10 w-[480px] h-[480px] bg-primary/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-size-[140px_140px] opacity-60" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur">
            <span className="text-xs font-semibold tracking-[0.25em] text-primary">PORTFOLIO</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-foreground to-primary bg-clip-text text-transparent">
              Our Portfolio & Case Studies
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results from real clients across diverse industries
          </p>
        </div>

        {/* Aceternity UI Tabs - Used exactly as documented */}
        <Tabs
          tabs={tabs}
          containerClassName="flex flex-wrap justify-center gap-4 mb-8"
          activeTabClassName="bg-primary text-white shadow-lg shadow-primary/25"
          tabClassName="px-6 py-3 rounded-full font-medium transition-all duration-300 bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-primary"
          contentClassName="mt-8"
        />

        {/* Video Testimonials */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8">
            <span className="bg-linear-to-r from-foreground to-primary bg-clip-text text-transparent">
              Video Testimonials
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/50 to-transparent" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-8 w-8 text-primary ml-1" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-muted-foreground text-sm mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-primary mt-1">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-linear-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg shadow-primary/25">
            View Full Portfolio
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
