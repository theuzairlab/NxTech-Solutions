"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MessageSquare, MapPin } from "lucide-react";

export function ContactHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const user_email = process.env.NEXT_PUBLIC_USER_EMAIL|| "";
  const user_phone = process.env.NEXT_PUBLIC_USER_PHONE|| "";
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight > 700 ? 700 : window.innerHeight;

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
      canvas.height = window.innerHeight > 700 ? 700 : window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLocationClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('office-locations');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };
  
  return (
    <section className="relative py-24 overflow-hidden pt-32 rounded-b-[50px] sm:rounded-b-[100px] md:rounded-b-[150px] z-5">
      {/* Base Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-primary/10 z-0" />
      
      {/* Animated Canvas for Particles - Above background image */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-[2]"
      />
      
      {/* Animated Grid Pattern */}
      <div 
        className="absolute inset-0 z-[2] opacity-20 bg-[length:30px_30px] sm:bg-[length:40px_40px] md:bg-[length:50px_50px]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 206, 209, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 206, 209, 0.2) 1px, transparent 1px)
          `,
        }}
      />

      {/* Animated Gradient Orbs */}
      <div className="absolute top-10 left-4 sm:top-20 sm:left-10 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-primary/20 rounded-full blur-3xl animate-pulse z-[2]" 
        style={{ animation: "float 6s ease-in-out infinite" }} />
      <div className="absolute bottom-10 right-4 sm:bottom-20 sm:right-10 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-primary/20 rounded-full blur-3xl animate-pulse z-[2]"
        style={{ animation: "float 8s ease-in-out infinite reverse" }} />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur">
            <span className="text-xs font-semibold tracking-[0.25em] text-primary">CONTACT US</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground via-primary to-primary bg-clip-text text-transparent">
              Let's Start a Conversation
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with our team. We're here to help you transform your business with cutting-edge solutions.
          </p>

          {/* Quick Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            <motion.a
              href={`mailto:${user_email}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div className="text-center">
                <div className="text-sm text-muted-foreground mb-1">Email</div>
                <div className="text-foreground font-semibold">{user_email}</div>
              </div>
            </motion.a>

            <motion.a
              href={`tel:${user_phone}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div className="text-center">
                <div className="text-sm text-muted-foreground mb-1">Phone</div>
                <div className="text-foreground font-semibold">{user_phone}</div>
              </div>
            </motion.a>

            <motion.a
              href={`https://wa.me/${user_phone}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <div className="text-center">
                <div className="text-sm text-muted-foreground mb-1">WhatsApp</div>
                <div className="text-foreground font-semibold">Chat Now</div>
              </div>
            </motion.a>

            <motion.a
              href="#office-locations"
              onClick={handleLocationClick}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div className="text-center">
                <div className="text-sm text-muted-foreground mb-1">Location</div>
                <div className="text-foreground font-semibold">Multiple Offices</div>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

