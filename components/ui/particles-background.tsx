"use client";
import { useEffect, useRef } from "react";

export function ParticlesBackground() {
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
    <>
      {/* Base gradient similar to about hero */}
      <div className="absolute inset-0 z-0 bg-linear-to-br from-primary/15 via-background to-primary/10" />

      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-10" />

      {/* Soft gradient blobs like about hero */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute bottom-[-20%] right-[-10%] h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl" />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 z-9999 opacity-100 bg-size-[30px_30px] sm:bg-size-[40px_40px] md:bg-size-[50px_50px]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 206, 209, 0.22) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 206, 209, 0.22) 1px, transparent 1px)
          `,
        }}
      />

      {/* Animated Gradient Orbs */}
      <div
        className="absolute top-10 left-4 sm:top-20 sm:left-10 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-primary/25 rounded-full blur-3xl animate-pulse z-40"
        style={{ animation: "float 6s ease-in-out infinite" }}
      />
      <div
        className="absolute bottom-10 right-4 sm:bottom-20 sm:right-10 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-primary/25 rounded-full blur-3xl animate-pulse z-40"
        style={{ animation: "float 8s ease-in-out infinite reverse" }}
      />
    </>
  );
}

export default ParticlesBackground;
