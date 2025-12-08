"use client";
import { Award, Trophy, Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const achievements = [
  {
    icon: Trophy,
    title: "Best Digital Agency 2023",
    organization: "Tech Excellence Awards",
    year: "2023",
    description: "Recognized for outstanding innovation in digital transformation",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
  },
  {
    icon: Award,
    title: "AI Innovation Award",
    organization: "Global Tech Summit",
    year: "2023",
    description: "Excellence in AI-powered business solutions",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
  },
  {
    icon: Star,
    title: "Client Satisfaction Excellence",
    organization: "Industry Leaders",
    year: "2024",
    description: "98% client satisfaction rate across all projects",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop",
  },
];

const certifications = [
  {
    name: "ISO 27001",
    status: "Certified",
    logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=100&h=100&fit=crop",
  },
  {
    name: "AWS Advanced",
    status: "Partner",
    logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Google Cloud",
    status: "Partner",
    logo: "https://images.unsplash.com/photo-1728710718080-3cf64d995d2c?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Microsoft",
    status: "Certified Partner",
    logo: "https://images.unsplash.com/photo-1662947036644-ecfde1221ac7?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "HubSpot",
    status: "Certified Agency",
    logo: "https://images.unsplash.com/photo-1602265585142-6b221b9b2c24?q=80&w=1625&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Salesforce",
    status: "Partner",
    logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&h=100&fit=crop",
  },
];

// Duplicate certifications for infinite scroll
const duplicatedCertifications = [...certifications, ...certifications, ...certifications];

export function Achievements() {
  const certificationsRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const positionRef = useRef(0);

  useEffect(() => {
    const certificationsContainer = certificationsRef.current;
    if (!certificationsContainer) return;

    let animationId: number;
    const speed = 0.5; // pixels per frame

    const animate = () => {
      const firstCard = certificationsContainer.children[0] as HTMLElement;
      if (firstCard) {
        const cardWidth = firstCard.offsetWidth;
        const gap = 16; // gap-4 = 1rem = 16px
        const setWidth = (cardWidth + gap) * certifications.length;

        if (!isHovered) {
          positionRef.current -= speed;
          if (Math.abs(positionRef.current) >= setWidth) {
            positionRef.current = 0;
          }
          certificationsContainer.style.transform = `translateX(${positionRef.current}px)`;
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [isHovered]);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Achievements & Certifications
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recognized excellence and industry certifications
          </p>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
              >
                {/* Image Background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                  <Image
                    src={achievement.image}
                    alt={achievement.title}
                    fill
                    className="object-cover scale-100 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative p-6 z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>

                  {/* Year Badge */}
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                    {achievement.year}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-2">
                    {achievement.organization}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="bg-card rounded-2xl border border-border p-8">
          <h3 className="text-2xl font-semibold mb-6 text-center text-foreground">
            Certifications & Partnerships
          </h3>
          <div
            className="overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              ref={certificationsRef}
              className="flex gap-4 will-change-transform"
              style={{ transition: isHovered ? 'transform 0.3s ease-out' : 'none' }}
            >
              {duplicatedCertifications.map((cert, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center justify-center p-4 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 shrink-0 w-[200px]"
                >
                  {/* Company Logo */}
                  <div className="relative w-16 h-16 mb-3 rounded-full overflow-hidden bg-white border border-border/50 flex items-center justify-center">
                    <Image
                      src={cert.logo}
                      alt={cert.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  {/* Certification Name */}
                  <div className="text-center">
                    <div className="text-sm font-semibold text-foreground mb-1">
                      {cert.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {cert.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

