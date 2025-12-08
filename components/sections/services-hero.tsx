"use client";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Zap, Target, Users } from "lucide-react";
import Link from "next/link";

export function ServicesHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = 700;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }> = [];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 3 + 1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 206, 209, 0.4)";
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 700;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const features = [
    { icon: Zap, text: "Fast Delivery" },
    { icon: Target, text: "Proven Results" },
    { icon: Users, text: "Expert Team" },
    { icon: CheckCircle2, text: "Quality Assured" },
  ];

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Base Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-primary/10 z-0" />
      
      {/* Animated Canvas for Particles - Above background image */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-[2]"
      />

      {/* Animated Grid Pattern */}
      <div 
        className="absolute inset-0 z-[2] opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 206, 209, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 206, 209, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          animation: "gridMove 20s linear infinite",
        }}
      />

      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse z-[2]" 
        style={{ animation: "float 6s ease-in-out infinite" }} />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse z-[2]"
        style={{ animation: "float 8s ease-in-out infinite reverse" }} />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto mb-12">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground via-primary to-primary bg-clip-text text-transparent">
              Our Services
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-6">
            Comprehensive digital solutions to transform your business and drive growth
          </p>
          <p className="text-lg text-muted-foreground/80 mb-8">
            From IT infrastructure to AI-powered automation, we deliver end-to-end solutions that scale your business, 
            automate operations, and maximize ROI. Trusted by industry leaders worldwide.
          </p>
        </div>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300"
              >
                <Icon className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-foreground">{feature.text}</span>
              </div>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button asChild size="lg" className="text-lg px-8 py-6 shadow-lg">
            <Link href="/contact">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 bg-card/80 backdrop-blur-sm">
            <Link href="/about">
              Learn More
            </Link>
          </Button>
        </div>

        {/* Stats or Additional Info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Expert Team</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}

