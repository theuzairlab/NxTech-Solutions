import Image from "next/image";
import { CheckCircle2, AlertCircle, Lightbulb, FileText } from "lucide-react";
import { prisma } from "@/lib/prisma";

type IndustryData = {
  id: string;
  name: string;
  image: string;
  services: {
    painPoints?: string[];
    solutions?: string[];
    caseStudy?: {
      title: string;
      result: string;
      description: string;
    };
  } | null;
};

export async function ServicesIndustries() {
  const industries = await prisma.industry.findMany({
    where: {
      isActive: true,
    },
    orderBy: [
      { displayOrder: "asc" },
      { createdAt: "asc" },
    ],
    select: {
      id: true,
      name: true,
      image: true,
      services: true,
    },
  });

  // Transform database data to match component structure
  const transformedIndustries: IndustryData[] = industries.map((industry) => {
    const services = industry.services as any;
    return {
      id: industry.id,
      name: industry.name,
      image: industry.image || "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      services: services || {
        painPoints: [],
        solutions: [],
        caseStudy: { title: "", result: "", description: "" },
      },
    };
  });

  return (
    <section id="industries" className="relative py-24 overflow-hidden -mt-32 pt-40 rounded-b-[50px] sm:rounded-b-[100px] md:rounded-b-[150px] bg-gradient-to-b from-[#f0f9ff] via-white to-[#e0f2fe] z-6">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 right-1/4 w-[520px] h-[520px] bg-primary/12 blur-3xl" />
        <div className="absolute -bottom-20 left-10 w-[480px] h-[480px] bg-primary/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:140px_140px] opacity-60" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <span className="text-xs font-semibold tracking-[0.25em] text-primary">INDUSTRIES</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-foreground via-primary to-primary bg-clip-text text-transparent">
              Industries We Serve
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Tailored solutions addressing specific industry challenges
          </p>
        </div>

        {transformedIndustries.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No industries available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {transformedIndustries.map((industry) => {
              const painPoints = industry.services?.painPoints || [];
              const solutions = industry.services?.solutions || [];
              const caseStudy = industry.services?.caseStudy || { title: "", result: "", description: "" };

              return (
                <div
                  key={industry.id}
                  className="group relative overflow-hidden rounded-2xl bg-white border-2 border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 flex flex-col h-full"
                >
                  {/* Image Section with Overlay */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={industry.image}
                      alt={industry.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Dark Overlay for better text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/90 group-hover:via-black/60 transition-all duration-500" />
                    
                    {/* Industry Name Badge */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                      <h3 className="text-2xl font-bold text-white mb-0 group-hover:text-primary-foreground transition-colors duration-300 drop-shadow-lg">
                        {industry.name}
                      </h3>
                    </div>

                    {/* Hover Accent Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/80 to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>

                  {/* Content Section */}
                  <div className="relative p-6 bg-white flex-1 flex flex-col">
                    {/* Pain Points */}
                    {painPoints.length > 0 && (
                      <div className="mb-5">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="p-1.5 rounded-lg bg-red-50 group-hover:bg-red-100 transition-colors">
                            <AlertCircle className="h-4 w-4 text-red-600" />
                          </div>
                          <h4 className="text-sm font-bold text-foreground uppercase tracking-wide">Pain Points</h4>
                        </div>
                        <ul className="space-y-2">
                          {painPoints.slice(0, 3).map((point, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2 group-hover:text-foreground transition-colors">
                              <span className="text-red-500 mt-1 font-bold">•</span>
                              <span className="leading-relaxed">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Solutions */}
                    {solutions.length > 0 && (
                      <div className="mb-5">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="p-1.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <Lightbulb className="h-4 w-4 text-primary" />
                          </div>
                          <h4 className="text-sm font-bold text-foreground uppercase tracking-wide">Our Solutions</h4>
                        </div>
                        <ul className="space-y-2">
                          {solutions.slice(0, 3).map((solution, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2 group-hover:text-foreground transition-colors">
                              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                              <span className="leading-relaxed">{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Case Study */}
                    {caseStudy.title && (
                      <div className="pt-4 mt-auto border-t-2 border-border/50 group-hover:border-primary/30 transition-colors">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="p-1.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <FileText className="h-4 w-4 text-primary" />
                          </div>
                          <h4 className="text-sm font-bold text-foreground uppercase tracking-wide">Case Study</h4>
                        </div>
                        <p className="text-sm font-semibold text-primary mb-1 group-hover:text-primary/90 transition-colors">{caseStudy.title}</p>
                        {caseStudy.result && (
                          <p className="text-xs text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">{caseStudy.result}</p>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 rounded-2xl" />
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* <div className="text-center">
          <Button size="lg" variant="outline" className="border-2 border-primary/30 hover:bg-primary/10 text-primary hover:text-primary hover:border-primary/50">
            Explore All Industries
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div> */}
      </div>
    </section>
  );
}

