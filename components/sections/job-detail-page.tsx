"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase, ArrowLeft, ArrowRight, Sparkles, CheckCircle2, Building } from "lucide-react";
import { JobApplicationForm } from "@/components/sections/job-application-form";

type Job = {
  id: string;
  title: string;
  department: string;
  location: string | null;
  type: string | null;
  description: string;
  requirements: any;
  benefits: any;
  createdAt: string;
};

export function JobDetailPage({ job, otherJobs }: { job: Job; otherJobs: Job[] }) {
  const [showApplicationForm, setShowApplicationForm] = useState(false);
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
      <div className="w-full">
        {/* Hero Section */}
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
            <div className="max-w-4xl mx-auto">
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Careers
              </Link>

              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-foreground via-primary to-primary bg-clip-text text-transparent">
                  {job.title}
                </span>
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-8">
                {job.location && (
                  <span className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    {job.location}
                  </span>
                )}
                {/* <Badge variant="secondary" className="mb-4">
                {job.department}
              </Badge> */}
              {job.department && (
                  <span className="flex items-center gap-2">
                    <Building className="h-5 w-5" />
                    {job.department}
                  </span>
                )}

                {job.type && (
                  <span className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5" />
                    {job.type}
                  </span>
                )}
              </div>
              <Button
                size="lg"
                onClick={() => setShowApplicationForm(true)}
                className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg shadow-primary/25"
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Job Details */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none mb-12">
                <div className="whitespace-pre-wrap text-muted-foreground leading-relaxed">
                  {job.description}
                </div>
              </div>

              {/* Requirements */}
              {job.requirements && Array.isArray(job.requirements) && job.requirements.length > 0 && (
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-primary" />
                      Requirements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {job.requirements.map((req: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                          <span className="text-muted-foreground">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {/* Benefits */}
              {job.benefits && Array.isArray(job.benefits) && job.benefits.length > 0 && (
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      Benefits
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {job.benefits.map((benefit: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {/* CTA Section */}
              <div className="bg-primary/5 rounded-2xl p-8 text-center mb-12">
                <h2 className="text-2xl font-bold mb-4">Ready to Apply?</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Join our team and help us build innovative solutions. We're looking forward to hearing from you!
                </p>
                <Button
                  size="lg"
                  onClick={() => setShowApplicationForm(true)}
                  className="text-lg px-8 py-6"
                >
                  Submit Your Application
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              {/* Other Openings */}
              {otherJobs.length > 0 && (
                <div>
                  <h2 className="text-3xl font-bold mb-6">Other Open Positions</h2>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {otherJobs.map((otherJob) => (
                      <Link key={otherJob.id} href={`/careers/${otherJob.id}`}>
                        <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                          <CardHeader>
                            <Badge variant="secondary" className="mb-2 w-fit">
                              {otherJob.department}
                            </Badge>
                            <CardTitle className="text-lg">{otherJob.title}</CardTitle>
                            <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mt-2">
                              {otherJob.location && (
                                <span className="flex items-center gap-1">
                                  <MapPin className="h-3 w-3" />
                                  {otherJob.location}
                                </span>
                              )}
                              {otherJob.type && (
                                <span className="flex items-center gap-1">
                                  <Briefcase className="h-3 w-3" />
                                  {otherJob.type}
                                </span>
                              )}
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                              {otherJob.description}
                            </p>
                            <Button variant="outline" className="w-full">
                              View Details
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>

      {showApplicationForm && (
        <JobApplicationForm
          job={job}
          onClose={() => setShowApplicationForm(false)}
        />
      )}
    </>
  );
}

