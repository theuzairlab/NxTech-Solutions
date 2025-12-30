"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase, ArrowRight, Sparkles } from "lucide-react";

type Job = {
  id: string;
  title: string;
  department: string;
  location: string | null;
  type: string | null;
  description: string;
  requirements?: any;
  benefits?: any;
  createdAt: string;
};

export function JobsListing({ jobs }: { jobs: Job[] }) {
  if (jobs.length === 0) {
    return (
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <Briefcase className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-2xl font-semibold mb-2">No Open Positions</h2>
            <p className="text-muted-foreground">
              We don't have any open positions at the moment. Check back soon!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Open Positions
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our current job openings and find the perfect role for you
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job) => (
              <Card key={job.id} className="flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary">{job.department}</Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                  <CardDescription className="flex flex-wrap items-center gap-3 text-sm">
                    {job.location && (
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </span>
                    )}
                    {job.type && (
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        {job.type}
                      </span>
                    )}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">
                    {job.description}
                  </p>
                  {job.requirements && Array.isArray(job.requirements) && job.requirements.length > 0 && (
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-muted-foreground mb-2">Key Requirements:</p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {job.requirements.slice(0, 3).map((req: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Sparkles className="h-3 w-3 mt-0.5 text-primary shrink-0" />
                            {req}
                          </li>
                        ))}
                        {job.requirements.length > 3 && (
                          <li className="text-primary">+{job.requirements.length - 3} more</li>
                        )}
                      </ul>
                    </div>
                  )}
                  <Link href={`/careers/${job.id}`} className="w-full">
                    <Button className="w-full">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

