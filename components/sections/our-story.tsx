"use client";
import Image from "next/image";
import { ArrowRight, Lightbulb, Rocket, Users } from "lucide-react";

const storyTimeline = [
  {
    year: "2020",
    title: "The Beginning",
    description: "NxTech Solutions was founded with a vision to bridge the gap between cutting-edge technology and business growth. Our founders recognized the need for comprehensive digital solutions.",
    icon: Lightbulb,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
  },
  {
    year: "2021-2022",
    title: "Rapid Growth",
    description: "We expanded our team, added AI and automation services, and began serving clients across multiple industries. Our commitment to innovation and client success drove exponential growth.",
    icon: Rocket,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
  },
  {
    year: "2023-Present",
    title: "Industry Leadership",
    description: "Today, NxTech is a trusted partner for 500+ projects across 20+ industries. We continue to innovate with AI-powered solutions, helping businesses transform digitally and scale efficiently.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop",
  },
];

export function OurStory() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Our Story
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            How NxTech started and evolved into a leading digital solutions provider
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {storyTimeline.map((story, index) => {
            const Icon = story.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent" />
                  
                  {/* Year Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-full bg-primary/90 backdrop-blur-sm text-white text-xs font-medium shadow-lg">
                      {story.year}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {story.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {story.description}
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

