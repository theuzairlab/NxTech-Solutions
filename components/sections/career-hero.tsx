"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Briefcase } from "lucide-react";

export function CareerHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

  return (
    <section className="relative  flex items-center justify-center overflow-hidden rounded-b-[50px] sm:rounded-b-[100px] md:rounded-b-[150px] shadow-sm z-11">
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
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <Briefcase className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Join Our Team</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-semibold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-foreground via-primary to-primary bg-clip-text text-transparent">
              We don't look for people.
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              We look for innovative brains
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Join {process.env.NEXT_PUBLIC_SITE_NAME} Solutions and be part of a team that's shaping the future of digital solutions.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

