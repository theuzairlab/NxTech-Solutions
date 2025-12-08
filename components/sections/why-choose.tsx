"use client";
import { 
  Globe2, 
  Award, 
  TrendingUp, 
  DollarSign, 
  Zap, 
  Brain
} from "lucide-react";

const features = [
  {
    icon: Globe2,
    title: "360° Digital Transformation",
    description: "End-to-end solutions covering every aspect of your digital presence",
    gradient: "from-primary/20 to-primary/10",
  },
  {
    icon: Award,
    title: "Certified Experts",
    description: "Team of certified professionals across IT, AI & Marketing",
    gradient: "from-primary/20 to-primary/10",
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    description: "Success stories across 20+ industries with measurable results",
    gradient: "from-primary/20 to-primary/10",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "Clear, upfront pricing with no hidden fees or surprises",
    gradient: "from-primary/20 to-primary/10",
  },
  {
    icon: Zap,
    title: "AI-Powered Workflow",
    description: "Leverage cutting-edge AI to automate and optimize operations",
    gradient: "from-primary/20 to-primary/10",
  },
  {
    icon: Brain,
    title: "Reliable Support",
    description: "Dedicated support teams, quick issue resolution.",
    gradient: "from-primary/20 to-primary/10",
  },
];

export function WhyChoose() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Why Choose NxTech
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade solutions with transparent execution and proven results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

