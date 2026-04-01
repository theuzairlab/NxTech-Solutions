"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import {
  Plus,
  Minus,
  HelpCircle,
  MessageCircle,
  Zap,
  Globe,
  TrendingUp,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { CTABanner } from "@/components/sections/cta-banner";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

const FAQItem = ({ question, answer, isOpen, onToggle, index }: FAQItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <button
        onClick={onToggle}
        className="w-full text-left p-6 rounded-2xl bg-white border border-primary/10 hover:border-primary/30 hover:shadow-md transition-all duration-300 flex items-start gap-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20"
      >
        <div className={`mt-1 p-2 rounded-lg transition-colors duration-300 ${isOpen ? 'bg-primary text-white' : 'bg-primary/5 text-primary'}`}>
          <HelpCircle className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            {question}
          </h3>
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className={`mt-1 p-1 rounded-full transition-transform duration-300 ${isOpen ? 'rotate-180 bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
    </motion.div>
  );
};

const CATEGORIES = [
  {
    id: "general",
    label: "General",
    icon: MessageCircle,
    faqs: [
      {
        question: "What services does NxTechNova provide?",
        answer: "NxTechNova is a full-service digital transformation agency specializing in AI Automation, Custom Web & Mobile Development, and ROI-focused Digital Marketing. We build end-to-end systems that help businesses scale efficiently.",
      },
      {
        question: "How do I get started with a project?",
        answer: "Getting started is easy! Simply click any 'Get Started' or 'Contact Us' button to book a free discovery call. We'll discuss your goals, analyze your current systems, and provide a tailored roadmap for your project.",
      },
    ],
  },
  {
    id: "ai-automation",
    label: "AI & Automation",
    icon: Zap,
    faqs: [
      {
        question: "How can AI automation help my business?",
        answer: "AI automation can handle repetitive tasks like lead qualification, customer support, and CRM management 24/7. This allows your team to focus on high-value activities while reducing operational costs and human error.",
      },
      {
        question: "Are the AI agents customizable to my brand voice?",
        answer: "Absolutely. Every AI agent we deploy is trained specifically on your data and brand guidelines. They will interact with your customers exactly how your best employee would, maintaining a consistent tone and deep product knowledge.",
      },
    ],
  },
  {
    id: "dev-marketing",
    label: "Development & Marketing",
    icon: Globe,
    faqs: [
      {
        question: "What is the typical timeline for a custom website?",
        answer: "A custom high-performance website typically takes 4–8 weeks from strategy to launch. This includes design, development, content integration, and rigorous SEO/Performance testing.",
      },
      {
        question: "How do you measure success in digital marketing?",
        answer: "We focus on 'North Star' metrics that drive revenue: Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), and Conversion Rates. Every campaign is tracked in real-time through custom dashboards we provide to our clients.",
      },
    ],
  },
  {
    id: "pricing-support",
    label: "Pricing & Support",
    icon: ShieldCheck,
    faqs: [
      {
        question: "What is your pricing structure?",
        answer: "We offer flexible pricing models including project-based fixed fees and monthly growth retainers. Our solutions are designed to provide clear ROI, ensuring the value generated far exceeds the investment.",
      },
      {
        question: "Do you offer ongoing maintenance and support?",
        answer: "Yes, we provide 24/7 monitoring and premium support packages. As your business grows, we continuously optimize your systems to ensure peak performance and security.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -120;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-linear-to-b from-primary/5 to-background">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary mb-6">
              Knowledge Base
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">
              Common <span className="text-primary italic">Questions</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Find answers to common questions about our AI-powered systems, development process, and how we help businesses grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Sidebar Navigation (Desktop) */}
            <aside className="hidden lg:block lg:col-span-4 h-fit sticky top-32">
              <div className="space-y-4">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => scrollToSection(cat.id)}
                    className="w-full flex items-center justify-between p-4 rounded-xl bg-white border border-primary/5 hover:border-primary/20 hover:bg-primary/5 transition-all group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <cat.icon className="w-5 h-5 text-primary" />
                      <span className="font-semibold text-foreground group-hover:text-primary transition-colors italic">
                        {cat.label}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1" />
                  </button>
                ))}
              </div>

              <div className="mt-12 p-8 rounded-3xl bg-primary/5 border border-primary/10">
                <h4 className="text-xl font-bold text-foreground mb-4 italic">Still have questions?</h4>
                <p className="text-muted-foreground text-sm mb-6">
                  Can't find the answer you're looking for? Reach out to our expert team.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 font-bold text-primary hover:text-primary/80 transition-all group"
                >
                  Message Us
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </aside>

            {/* Questions Content */}
            <div className="lg:col-span-8 space-y-24">
              {CATEGORIES.map((cat) => (
                <div key={cat.id} id={cat.id} className="scroll-mt-32">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <cat.icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground">
                      {cat.label}
                    </h2>
                  </div>
                  <div className="space-y-4">
                    {cat.faqs.map((faq, faqIdx) => (
                      <FAQItem
                        key={faq.question}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openQuestion === faq.question}
                        onToggle={() => setOpenQuestion(openQuestion === faq.question ? null : faq.question)}
                        index={faqIdx}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTABanner />
    </div>
  );
}

