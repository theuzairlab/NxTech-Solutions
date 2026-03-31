"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, ArrowLeft, CheckCircle2, Mail, Send,
  Code, Megaphone, Brain, Rocket, Globe, Smartphone,
  Cloud, Shield, Search, Edit3, Palette, Plus, User, Phone, Briefcase, Link as LinkIcon
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { id: "IT Services", label: "IT Services", icon: Code },
  { id: "Digital Marketing", label: "Digital Marketing", icon: Megaphone },
  { id: "AI Solutions", label: "AI Solutions", icon: Brain },
  { id: "Lead Generation", label: "Lead Generation", icon: Rocket },
  { id: "Web Development", label: "Web Development", icon: Globe },
  { id: "Mobile App Development", label: "App Development", icon: Smartphone },
  { id: "Cloud Solutions", label: "Cloud Solutions", icon: Cloud },
  { id: "Cybersecurity", label: "Cybersecurity", icon: Shield },
  { id: "SEO Services", label: "SEO Services", icon: Search },
  { id: "Content Writing", label: "Content Writing", icon: Edit3 },
  { id: "Graphic Design", label: "Graphic Design", icon: Palette },
  { id: "Other", label: "Other", icon: Plus }
];

const timelineOptions = [
  "ASAP / Urgent",
  "1-2 weeks",
  "1 month",
  "2-3 months",
  "3-6 months",
  "6+ months"
];

const budgetOptions = [
  "Under $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000+",
  "Not sure"
];

export function GetQuoteForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(0);
  const [formData, setFormData] = useState({
    services: [] as string[],
    projectDescription: "",
    timeline: "",
    budget: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    website: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep === 1 && formData.services.length === 0) {
      alert("Please select at least one service");
      return;
    }
    if (currentStep === 2 && !formData.projectDescription.trim()) {
      alert("Please describe your project");
      return;
    }
    if (currentStep === 3 && (!formData.timeline || !formData.budget)) {
      alert("Please select timeline and budget");
      return;
    }
    if (currentStep === 4 && (!formData.name || !formData.email || !formData.phone)) {
      alert("Please fill in all required contact details");
      return;
    }
    setDirection(1);
    setCurrentStep(prev => Math.min(prev + 1, 4));
  };

  const handleBack = () => {
    setDirection(-1);
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in all required contact details");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/quote-requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Failed to submit quote request");
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error("Failed to submit quote request", error);
      alert("Something went wrong while submitting your quote request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseModal = () => {
    setIsSubmitted(false);
    setCurrentStep(1);
    setDirection(0);
    setFormData({
      services: [],
      projectDescription: "",
      timeline: "",
      budget: "",
      name: "",
      email: "",
      phone: "",
      company: "",
      website: ""
    });
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 30 : -30,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 30 : -30,
      opacity: 0,
    }),
  };

  return (
    <>
      {/* Success Modal */}
      {isSubmitted && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-300">
          <div className="relative w-full max-w-2xl bg-linear-to-br from-[#00c2c7] via-[#00b1bb] to-[#009aa8] rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-size-[32px_32px] opacity-70" />

            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
              aria-label="Close"
            >
              <span className="text-2xl font-bold">×</span>
            </button>

            <div className="relative p-8 sm:p-12 text-center">
              <div className="flex justify-center mb-6 sm:mb-8">
                <div className="relative">
                  <div className="absolute inset-0 w-24 h-24 rounded-full bg-white/30 blur-xl"></div>
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center shadow-lg">
                    <CheckCircle2 className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
                  </div>
                </div>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white drop-shadow-lg">
                Thank You!
              </h2>

              <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-10 leading-relaxed max-w-xl mx-auto">
                We've received your quote request and will get back to you within 24 hours.
              </p>

              <div className="flex justify-center">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 text-base sm:text-lg rounded-full"
                  onClick={handleCloseModal}
                >
                  Submit Another Request
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Form Container */}
      <section className={`relative max-w-4xl mx-auto py-10 px-4 sm:px-6 z-10 transition-opacity duration-500 ${isSubmitted ? 'opacity-30 pointer-events-none' : ''}`}>

        {/* Progress Tracker */}
        <div className="flex items-center justify-between mb-10 w-full px-2 sm:px-8">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex items-center flex-1 last:flex-none">
              <div className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 transition-all duration-500 shrink-0 shadow-sm ${currentStep > step
                  ? "bg-primary border-primary text-white"
                  : currentStep === step
                    ? "bg-white border-primary text-primary"
                    : "bg-slate-50 border-border/60 text-muted-foreground"
                }`}>
                {currentStep > step ? (
                  <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6" />
                ) : (
                  <span className={`font-bold text-sm sm:text-base ${currentStep === step ? 'text-primary' : ''}`}>{step}</span>
                )}
              </div>
              {step < 4 && (
                <div className="flex-1 h-1.5 mx-2 sm:mx-4 rounded-full bg-slate-100 overflow-hidden relative">
                  <div className={`absolute top-0 left-0 h-full bg-primary transition-all duration-700 ease-in-out ${currentStep > step ? "w-full" : "w-0"
                    }`} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Step Content Wrapper with Framer Motion AnimatePresence */}
        <div className="bg-white/80 backdrop-blur-xl border border-white/40 shadow-xl rounded-4xl p-6 sm:p-10 mb-8 overflow-hidden min-h-[500px] relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentStep}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="w-full"
            >

              {/* Step 1: Select Services */}
              {currentStep === 1 && (
                <div className="space-y-8">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-3xl font-extrabold text-slate-800 tracking-tight">Select Services</h3>
                    <p className="text-muted-foreground text-lg">Choose all the areas where you need our expertise.</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map((service) => {
                      const isSelected = formData.services.includes(service.id);
                      const Icon = service.icon;
                      return (
                        <button
                          key={service.id}
                          onClick={() => handleServiceToggle(service.id)}
                          className={`group relative p-5 rounded-2xl border-2 transition-all duration-300 text-left flex flex-col items-start gap-4 hover:-translate-y-1 ${isSelected
                              ? "border-primary bg-primary/5 shadow-md shadow-primary/10"
                              : "border-border/60 bg-white hover:border-primary/40 hover:shadow-md"
                            }`}
                        >
                          <div className={`p-3 rounded-xl transition-all duration-300 ${isSelected ? "bg-primary text-white scale-110 shadow-sm" : "bg-primary/10 text-primary group-hover:bg-primary/20"}`}>
                            <Icon className="w-6 h-6" strokeWidth={isSelected ? 2.5 : 2} />
                          </div>
                          <div className="flex w-full items-center justify-between">
                            <span className={`font-semibold transition-colors duration-300 ${isSelected ? "text-primary" : "text-slate-700"}`}>{service.label}</span>
                            {isSelected && (
                              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                                <CheckCircle2 className="w-5 h-5 text-primary" />
                              </motion.div>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 2: Describe Project */}
              {currentStep === 2 && (
                <div className="space-y-8 h-full flex flex-col">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-3xl font-extrabold text-slate-800 tracking-tight">Project Details</h3>
                    <p className="text-muted-foreground text-lg">Tell us about your goals, current challenges, and requirements.</p>
                  </div>
                  <div className="relative group flex-1">
                    <textarea
                      value={formData.projectDescription}
                      onChange={(e) => handleInputChange("projectDescription", e.target.value)}
                      placeholder="E.g., We need to rebuild our current Next.js website and implement an AI-powered lead capture system to improve our conversion rate..."
                      className="w-full h-64 p-6 rounded-2xl border-2 border-border/60 bg-white/70 focus:bg-white transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none resize-none shadow-sm text-lg leading-relaxed text-slate-700 placeholder:text-muted-foreground/60"
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Timeline & Budget */}
              {currentStep === 3 && (
                <div className="space-y-8">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-3xl font-extrabold text-slate-800 tracking-tight">Timeline & Budget</h3>
                    <p className="text-muted-foreground text-lg">Help us understand the scope so we can align our resources.</p>
                  </div>

                  <div className="space-y-8 bg-slate-50/50 p-6 sm:p-8 rounded-4xl border border-border/50">
                    <div>
                      <label className="flex items-center gap-2 text-base font-bold mb-4 text-slate-800">
                        Target Timeline <span className="text-primary">*</span>
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {timelineOptions.map((option) => (
                          <button
                            key={option}
                            onClick={() => handleInputChange("timeline", option)}
                            className={`p-4 rounded-xl border-2 font-semibold transition-all duration-300 text-sm sm:text-base ${formData.timeline === option
                                ? "border-primary bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-[1.02]"
                                : "border-border/60 bg-white text-muted-foreground hover:border-primary/40 hover:text-slate-800 hover:shadow-sm"
                              }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-base font-bold mb-4 text-slate-800">
                        Estimated Budget Range <span className="text-primary">*</span>
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {budgetOptions.map((option) => (
                          <button
                            key={option}
                            onClick={() => handleInputChange("budget", option)}
                            className={`p-4 rounded-xl border-2 font-semibold transition-all duration-300 text-sm sm:text-base ${formData.budget === option
                                ? "border-primary bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-[1.02]"
                                : "border-border/60 bg-white text-muted-foreground hover:border-primary/40 hover:text-slate-800 hover:shadow-sm"
                              }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Contact Details */}
              {currentStep === 4 && (
                <div className="space-y-8">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-3xl font-extrabold text-slate-800 tracking-tight">Your Details</h3>
                    <p className="text-muted-foreground text-lg">Where should we send your custom quote?</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50/50 p-6 sm:p-8 rounded-4xl border border-border/50">

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Full Name <span className="text-primary">*</span></label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/60" />
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-border/60 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none bg-white shadow-sm placeholder:text-muted-foreground/50 font-medium"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Email Address <span className="text-primary">*</span></label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/60" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-border/60 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none bg-white shadow-sm placeholder:text-muted-foreground/50 font-medium"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Phone Number <span className="text-primary">*</span></label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/60" />
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-border/60 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none bg-white shadow-sm placeholder:text-muted-foreground/50 font-medium"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Company Name</label>
                      <div className="relative">
                        <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/60" />
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-border/60 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none bg-white shadow-sm placeholder:text-muted-foreground/50 font-medium"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div className="md:col-span-2 space-y-2">
                      <label className="text-sm font-bold text-slate-700">Website URL (if applicable)</label>
                      <div className="relative">
                        <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/60" />
                        <input
                          type="url"
                          value={formData.website}
                          onChange={(e) => handleInputChange("website", e.target.value)}
                          className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-border/60 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none bg-white shadow-sm placeholder:text-muted-foreground/50 font-medium"
                          placeholder="https://yourwebsite.com"
                        />
                      </div>
                    </div>

                  </div>
                </div>
              )}

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Actions */}
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 1}
            className={`border-2 border-slate-200 hover:bg-slate-100 hover:text-slate-800 rounded-full px-8 py-6 text-base font-semibold transition-all ${currentStep === 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back
          </Button>

          {currentStep < 4 ? (
            <Button
              onClick={handleNext}
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-6 text-base font-bold shadow-lg shadow-primary/20 transition-all hover:-translate-y-1 hover:shadow-xl ml-auto"
            >
              Continue
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-6 text-base font-bold shadow-lg shadow-primary/20 transition-all hover:-translate-y-1 hover:shadow-xl ml-auto"
            >
              {isSubmitting ? (
                <>
                  <Send className="mr-2 h-5 w-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Mail className="mr-2 h-5 w-5" />
                  Request Quote
                </>
              )}
            </Button>
          )}
        </div>

      </section>
    </>
  );
}

