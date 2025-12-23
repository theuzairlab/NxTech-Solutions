"use client";
import { Search, Target, Rocket, TrendingUp } from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "Discovery & Consultation",
    description: "We begin by understanding your business goals, challenges, and opportunities through comprehensive consultations and analysis.",
    icon: Search,
    color: "from-[#00c2c7] to-[#00b1bb]",
  },
  {
    step: "02",
    title: "Strategy Development",
    description: "Our experts create a tailored strategy aligned with your objectives, leveraging data-driven insights and industry best practices.",
    icon: Target,
    color: "from-[#009aa8] to-[#008896]",
  },
  {
    step: "03",
    title: "Execution & Implementation",
    description: "We execute your strategy with precision, using agile methodologies and cutting-edge technologies to deliver results efficiently.",
    icon: Rocket,
    color: "from-[#006d7a] to-[#005a66]",
  },
  {
    step: "04",
    title: "Optimization & Reporting",
    description: "Continuous monitoring, optimization, and detailed reporting ensure your solutions evolve and deliver maximum value over time.",
    icon: TrendingUp,
    color: "from-[#006d7a] to-[#005a66]",
  },
];

export function OurProcess() {
  return (
    <section className="py-20 relative overflow-hidden bg-white">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Our Process
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A proven methodology for delivering exceptional results
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Vertical Dotted Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 hidden lg:block">
            <div className="absolute inset-0 border-l-2 border-dashed border-primary/30"></div>
          </div>

          {/* Process Steps */}
          <div className="space-y-12 lg:space-y-16">
            {processSteps.map((process, index) => {
              const Icon = process.icon;
              const isEven = index % 2 === 0;
              const isLast = index === processSteps.length - 1;

              return (
                <div key={index} className="relative">
                  {/* Connection Point Circle */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-2 border-white shadow-lg z-10"></div>

                  {/* Step Content */}
                  <div className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-8 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Step Number */}
                    <div className={`w-full lg:w-1/2 flex ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
                      <div className={isEven ? 'text-right lg:text-right' : 'text-right lg:text-left'}>
                        <div className="text-3xl sm:text-7xl font-bold text-primary mb-2">
                          STEP {process.step}
                        </div>
                      </div>
                    </div>

                    {/* Step Card */}
                    <div className={`w-full lg:w-1/2 ${isEven ? 'lg:pr-8' : 'lg:pl-8'}`}>
                      <div className={`relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 bg-gradient-to-br ${process.color} shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300`}>
                        {/* Content Layout */}
                        <div className={`flex flex-col sm:flex-row items-center gap-6 ${isEven ? 'sm:flex-row-reverse' : ''}`}>
                          {/* Icon Container */}
                          <div className="flex-shrink-0">
                            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <Icon className="h-10 w-10 sm:h-12 sm:w-12 text-primary" />
                            </div>
                          </div>

                          {/* Text Content */}
                          <div className="flex-1 text-center sm:text-left">
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                              {process.title}
                            </h3>
                            <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                              {process.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for last item */}
                  {isLast && <div className="h-8"></div>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

