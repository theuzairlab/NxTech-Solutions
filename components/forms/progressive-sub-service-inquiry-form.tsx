"use client";

import { useCallback, useId, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { toast } from "sonner";
import {
  ArrowLeft,
  ArrowRight,
  CalendarClock,
  Check,
  Coins,
  Layers,
  Send,
  User,
} from "lucide-react";

const TIMELINE_OPTIONS = [
  "ASAP / Urgent",
  "1–2 weeks",
  "1 month",
  "2–3 months",
  "3–6 months",
  "6+ months",
] as const;

const BUDGET_OPTIONS = [
  "Under $2,000",
  "$2,000 – $5,000",
  "$5,000 – $10,000",
  "$10,000 – $15,000",
  "$15,000 – $20,000",
  "$20,000 – $50,000",
  "$50,000+",
  "Not sure",
] as const;

const STEP_COUNT = 2;

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 26 : -26,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 26 : -26,
    opacity: 0,
  }),
};

export type ProgressiveSubServiceInquiryFormProps = {
  /** Labels sent to `/api/quote-requests` as `services` (API requires at least one). */
  serviceLabels: string[];
  /** Shown under the main title (e.g. service highlight). */
  subtitle?: string;
  className?: string;
};

type FormState = {
  timeline: string;
  budget: string;
  projectDescription: string;
  industry: string;
  company: string;
  website: string;
  name: string;
  email: string;
  phone: string;
};

const initialForm: FormState = {
  timeline: "",
  budget: "",
  projectDescription: "",
  industry: "",
  company: "",
  website: "",
  name: "",
  email: "",
  phone: "",
};

function buildProjectDescription(form: FormState): string {
  const parts = [form.projectDescription.trim()];
  if (form.industry.trim()) {
    parts.push(`Industry / niche: ${form.industry.trim()}`);
  }
  return parts.join("\n\n");
}

type FieldKey =
  | "timeline"
  | "budget"
  | "projectDescription"
  | "name"
  | "email"
  | "phone"
  | "website";

function validateStepOne(form: FormState): Partial<Record<FieldKey, string>> {
  const next: Partial<Record<FieldKey, string>> = {};
  if (!form.timeline) next.timeline = "Choose when you need this.";
  if (!form.budget) next.budget = "Choose a budget range.";
  return next;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidOptionalUrl(value: string): boolean {
  const t = value.trim();
  if (!t) return true;
  try {
    const u = new URL(t.includes("://") ? t : `https://${t}`);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}

function validateStepTwo(form: FormState): Partial<Record<FieldKey, string>> {
  const next: Partial<Record<FieldKey, string>> = {};
  if (!form.projectDescription.trim()) {
    next.projectDescription = "Describe what you want to achieve.";
  }
  if (!form.name.trim()) {
    next.name = "Enter your name.";
  }
  if (!form.email.trim()) {
    next.email = "Enter your email.";
  } else if (!EMAIL_RE.test(form.email.trim())) {
    next.email = "Enter a valid email address.";
  }
  if (!form.phone.trim()) {
    next.phone = "Enter your phone number.";
  }
  if (form.website.trim() && !isValidOptionalUrl(form.website)) {
    next.website = "Enter a valid URL (e.g. https://example.com).";
  }
  return next;
}

const FIELD_FOCUS_ORDER: FieldKey[] = [
  "projectDescription",
  "name",
  "email",
  "phone",
  "website",
];

function fieldToElementId(key: FieldKey): string {
  if (key === "projectDescription") return "desc";
  return key;
}

export function ProgressiveSubServiceInquiryForm({
  serviceLabels,
  subtitle,
  className = "",
}: ProgressiveSubServiceInquiryFormProps) {
  const reactId = useId();
  const safeId = useCallback(
    (name: string) => `${reactId.replace(/:/g, "")}-${name}`,
    [reactId],
  );

  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(0);
  const [form, setForm] = useState<FormState>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<FieldKey, string>>>({});

  const progressRatio = step / STEP_COUNT;

  const touchField = useCallback((key: FieldKey) => {
    setFieldErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }, []);

  const goNext = () => {
    const errs = validateStepOne(form);
    if (Object.keys(errs).length > 0) {
      setFieldErrors((prev) => ({ ...prev, ...errs }));
      return;
    }
    setFieldErrors({});
    setDirection(1);
    setStep(2);
  };

  const goBack = () => {
    setFieldErrors({});
    setDirection(-1);
    setStep(1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step !== STEP_COUNT) return;

    const errs = validateStepTwo(form);
    if (Object.keys(errs).length > 0) {
      setFieldErrors((prev) => ({ ...prev, ...errs }));
      const firstKey = FIELD_FOCUS_ORDER.find((k) => errs[k]);
      if (firstKey) {
        const domId = safeId(fieldToElementId(firstKey));
        queueMicrotask(() => {
          const el = document.getElementById(domId);
          el?.scrollIntoView({ behavior: "smooth", block: "nearest" });
          if (el && "focus" in el && typeof (el as HTMLElement).focus === "function") {
            (el as HTMLElement).focus();
          }
        });
      }
      return;
    }

    if (serviceLabels.length === 0) {
      toast.error("Something went wrong. Please refresh the page and try again.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/quote-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          company: form.company.trim() || undefined,
          website: form.website.trim() || undefined,
          services: serviceLabels,
          projectDescription: buildProjectDescription(form),
          timeline: form.timeline,
          budget: form.budget,
        }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Failed to submit");
      }

      setIsSubmitted(true);
      setForm(initialForm);
      setFieldErrors({});
      setStep(1);
      setDirection(0);
      window.setTimeout(() => setIsSubmitted(false), 4200);
    } catch (err) {
      console.error("Progressive inquiry submit failed", err);
      toast.error("Something went wrong. Please try again in a moment.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const chipBase =
    "flex w-full items-center gap-2 rounded-xl border px-3 py-2.5 text-left text-[11px] font-bold transition-all sm:py-3 sm:text-[12px]";
  const chipIdle = "border-slate-200 bg-slate-50/80 text-foreground hover:border-primary/35 hover:bg-white";
  const chipOn = "border-primary bg-primary text-primary-foreground shadow-md";

  const inputErrorRing =
    "border-destructive focus:border-destructive focus:ring-2 focus:ring-destructive/25";

  return (
    <motion.div
      className={`relative mx-auto w-[340px] sm:w-[420px] lg:w-[520px] ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div
        className="relative overflow-hidden rounded-3xl border border-primary/15 bg-white/80 p-1.5 backdrop-blur-2xl"
        style={{
          boxShadow:
            "0 25px 80px rgba(15,23,42,0.35), 0 0 0 1px rgba(148,163,184,0.3) inset",
        }}
      >
        <div className="relative flex min-h-[520px] flex-col rounded-[22px] bg-white/95 text-foreground backdrop-blur-xl sm:min-h-[540px]">
          {/* Header */}
          <div className="border-b border-slate-200 px-4 py-3 sm:px-5">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
                  Project inquiry
                </p>
                <p className="truncate text-[13px] font-bold text-foreground">
                  Tell us what you need
                </p>
                {subtitle ? (
                  <p className="mt-0.5 line-clamp-2 text-[11px] text-muted-foreground">{subtitle}</p>
                ) : null}
              </div>
              <span className="shrink-0 rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-semibold text-primary">
                Step {step}/{STEP_COUNT}
              </span>
            </div>
            {/* Progress */}
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100">
              <motion.div
                className="h-full origin-left rounded-full bg-primary will-change-transform"
                initial={false}
                animate={{ scaleX: progressRatio }}
                transition={{ type: "spring", stiffness: 280, damping: 30 }}
                style={{ width: "100%" }}
              />
            </div>
          </div>

          <form noValidate onSubmit={handleSubmit} className="flex min-h-0 flex-1 flex-col">
            <div className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden p-4 sm:p-5">
              <AnimatePresence mode="wait" custom={direction}>
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 320, damping: 32 },
                      opacity: { duration: 0.2 },
                    }}
                    className="flex h-full flex-col items-center justify-center gap-4 py-10"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 320, damping: 22, delay: 0.08 }}
                      className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-emerald-200 bg-emerald-50"
                    >
                      <Check className="h-8 w-8 text-emerald-600" strokeWidth={2.5} />
                    </motion.div>
                    <div className="text-center">
                      <p className="text-[15px] font-bold text-foreground">Request received</p>
                      <p className="mt-1 text-[12px] text-muted-foreground">
                        We&apos;ll reply within 24 hours with next steps.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key={step}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 320, damping: 32 },
                      opacity: { duration: 0.2 },
                    }}
                    className="flex flex-col gap-4"
                  >
                    {step === 1 && (
                      <>
                        <div className="flex items-center gap-2 text-slate-800">
                          <CalendarClock className="h-4 w-4 text-primary" />
                          <p className="text-[12px] font-bold">Timeline & budget</p>
                        </div>
                        <div>
                          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500">
                            When do you need this?
                          </p>
                          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                            {TIMELINE_OPTIONS.map((opt) => {
                              const on = form.timeline === opt;
                              return (
                                <motion.button
                                  key={opt}
                                  type="button"
                                  whileTap={{ scale: 0.98 }}
                                  onClick={() => {
                                    setForm((p) => ({ ...p, timeline: on ? "" : opt }));
                                    touchField("timeline");
                                  }}
                                  className={`${chipBase} ${on ? chipOn : chipIdle}`}
                                >
                                  <span className="leading-snug">{opt}</span>
                                  {on ? <Check className="ml-auto h-4 w-4 shrink-0" /> : null}
                                </motion.button>
                              );
                            })}
                          </div>
                          {fieldErrors.timeline ? (
                            <p
                              id={safeId("err-timeline")}
                              role="alert"
                              className="mt-2 text-[11px] font-medium text-destructive"
                            >
                              {fieldErrors.timeline}
                            </p>
                          ) : null}
                        </div>
                        <div>
                          <p className="mb-2 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500">
                            <Coins className="h-3 w-3" />
                            Budget range
                          </p>
                          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                            {BUDGET_OPTIONS.map((opt) => {
                              const on = form.budget === opt;
                              return (
                                <motion.button
                                  key={opt}
                                  type="button"
                                  whileTap={{ scale: 0.98 }}
                                  onClick={() => {
                                    setForm((p) => ({ ...p, budget: on ? "" : opt }));
                                    touchField("budget");
                                  }}
                                  className={`${chipBase} ${on ? chipOn : chipIdle}`}
                                >
                                  <span className="leading-snug">{opt}</span>
                                  {on ? <Check className="ml-auto h-4 w-4 shrink-0" /> : null}
                                </motion.button>
                              );
                            })}
                          </div>
                          {fieldErrors.budget ? (
                            <p
                              id={safeId("err-budget")}
                              role="alert"
                              className="mt-2 text-[11px] font-medium text-destructive"
                            >
                              {fieldErrors.budget}
                            </p>
                          ) : null}
                        </div>
                      </>
                    )}

                    {step === 2 && (
                      <>
                        <div className="flex items-center gap-2 text-slate-800">
                          <Layers className="h-4 w-4 text-primary" />
                          <p className="text-[12px] font-bold">Scope & context</p>
                        </div>
                        <div className="group relative">
                          <textarea
                            id={safeId("desc")}
                            rows={4}
                            value={form.projectDescription}
                            onChange={(e) => {
                              setForm((p) => ({ ...p, projectDescription: e.target.value }));
                              touchField("projectDescription");
                            }}
                            aria-invalid={!!fieldErrors.projectDescription}
                            aria-describedby={
                              fieldErrors.projectDescription
                                ? safeId("err-projectDescription")
                                : undefined
                            }
                            placeholder=" "
                            className={`peer w-full resize-none rounded-xl border bg-slate-50/80 px-4 pt-7 pb-2 text-[13px] text-foreground outline-none transition-all placeholder-transparent focus:bg-white ${fieldErrors.projectDescription ? inputErrorRing : "border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20"}`}
                          />
                          <label
                            htmlFor={safeId("desc")}
                            className="pointer-events-none absolute left-4 top-2 text-[10px] font-bold uppercase tracking-[0.1em] text-primary/70 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-[13px] peer-placeholder-shown:font-medium peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-slate-500 peer-focus:top-2 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-[0.1em] peer-focus:text-primary/70"
                          >
                            What do you want to achieve? *
                          </label>
                          {fieldErrors.projectDescription ? (
                            <p
                              id={safeId("err-projectDescription")}
                              role="alert"
                              className="mt-1.5 text-[11px] font-medium text-destructive"
                            >
                              {fieldErrors.projectDescription}
                            </p>
                          ) : null}
                        </div>

                        <div className="group relative">
                          <input
                            id={safeId("industry")}
                            type="text"
                            value={form.industry}
                            onChange={(e) => setForm((p) => ({ ...p, industry: e.target.value }))}
                            placeholder=" "
                            className="peer h-14 w-full rounded-xl border border-slate-200 bg-slate-50/80 px-4 pt-5 pb-1 text-[13px] text-foreground outline-none transition-all focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 placeholder-transparent"
                          />
                          <label
                            htmlFor={safeId("industry")}
                            className="pointer-events-none absolute left-4 top-2 text-[10px] font-bold uppercase tracking-[0.1em] text-primary/70 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-[13px] peer-placeholder-shown:font-medium peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-slate-500 peer-focus:top-2 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-[0.1em] peer-focus:text-primary/70"
                          >
                            Industry / niche (optional)
                          </label>
                        </div>

                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                          <div className="group relative">
                            <input
                              id={safeId("company")}
                              type="text"
                              value={form.company}
                              onChange={(e) =>
                                setForm((p) => ({ ...p, company: e.target.value }))
                              }
                              placeholder=" "
                              className="peer h-14 w-full rounded-xl border border-slate-200 bg-slate-50/80 px-4 pt-5 pb-1 text-[13px] text-foreground outline-none transition-all focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 placeholder-transparent"
                            />
                            <label
                              htmlFor={safeId("company")}
                              className="pointer-events-none absolute left-4 top-2 text-[10px] font-bold uppercase tracking-[0.1em] text-primary/70 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-[13px] peer-placeholder-shown:font-medium peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-slate-500 peer-focus:top-2 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-[0.1em] peer-focus:text-primary/70"
                            >
                              Company (optional)
                            </label>
                          </div>
                          <div className="group relative">
                            <input
                              id={safeId("website")}
                              type="text"
                              inputMode="url"
                              autoComplete="url"
                              value={form.website}
                              onChange={(e) => {
                                setForm((p) => ({ ...p, website: e.target.value }));
                                touchField("website");
                              }}
                              aria-invalid={!!fieldErrors.website}
                              aria-describedby={
                                fieldErrors.website ? safeId("err-website") : undefined
                              }
                              placeholder=" "
                              className={`peer h-14 w-full rounded-xl border bg-slate-50/80 px-4 pt-5 pb-1 text-[13px] text-foreground outline-none transition-all placeholder-transparent focus:bg-white ${fieldErrors.website ? inputErrorRing : "border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20"}`}
                            />
                            <label
                              htmlFor={safeId("website")}
                              className="pointer-events-none absolute left-4 top-2 text-[10px] font-bold uppercase tracking-[0.1em] text-primary/70 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-[13px] peer-placeholder-shown:font-medium peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-slate-500 peer-focus:top-2 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-[0.1em] peer-focus:text-primary/70"
                            >
                              Website (optional)
                            </label>
                            {fieldErrors.website ? (
                              <p
                                id={safeId("err-website")}
                                role="alert"
                                className="mt-1.5 text-[11px] font-medium text-destructive"
                              >
                                {fieldErrors.website}
                              </p>
                            ) : null}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-slate-800">
                          <User className="h-4 w-4 text-primary" />
                          <p className="text-[12px] font-bold">Your contact details</p>
                        </div>
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                          <div className="group relative">
                            <input
                              id={safeId("name")}
                              name="name"
                              value={form.name}
                              onChange={(e) => {
                                setForm((p) => ({ ...p, name: e.target.value }));
                                touchField("name");
                              }}
                              aria-invalid={!!fieldErrors.name}
                              aria-describedby={
                                fieldErrors.name ? safeId("err-name") : undefined
                              }
                              placeholder=" "
                              className={`peer h-14 w-full rounded-xl border bg-slate-50/80 px-4 pt-5 pb-1 text-[13px] text-foreground outline-none transition-all placeholder-transparent focus:bg-white ${fieldErrors.name ? inputErrorRing : "border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20"}`}
                            />
                            <label
                              htmlFor={safeId("name")}
                              className="pointer-events-none absolute left-4 top-2 text-[10px] font-bold uppercase tracking-[0.1em] text-primary/70 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-[13px] peer-placeholder-shown:font-medium peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-slate-500 peer-focus:top-2 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-[0.1em] peer-focus:text-primary/70"
                            >
                              Name *
                            </label>
                            {fieldErrors.name ? (
                              <p id={safeId("err-name")} role="alert" className="mt-1.5 text-[11px] font-medium text-destructive">
                                {fieldErrors.name}
                              </p>
                            ) : null}
                          </div>
                          <div className="group relative">
                            <input
                              id={safeId("email")}
                              type="email"
                              value={form.email}
                              onChange={(e) => {
                                setForm((p) => ({ ...p, email: e.target.value }));
                                touchField("email");
                              }}
                              aria-invalid={!!fieldErrors.email}
                              aria-describedby={
                                fieldErrors.email ? safeId("err-email") : undefined
                              }
                              placeholder=" "
                              className={`peer h-14 w-full rounded-xl border bg-slate-50/80 px-4 pt-5 pb-1 text-[13px] text-foreground outline-none transition-all placeholder-transparent focus:bg-white ${fieldErrors.email ? inputErrorRing : "border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20"}`}
                            />
                            <label
                              htmlFor={safeId("email")}
                              className="pointer-events-none absolute left-4 top-2 text-[10px] font-bold uppercase tracking-[0.1em] text-primary/70 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-[13px] peer-placeholder-shown:font-medium peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-slate-500 peer-focus:top-2 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-[0.1em] peer-focus:text-primary/70"
                            >
                              Email *
                            </label>
                            {fieldErrors.email ? (
                              <p id={safeId("err-email")} role="alert" className="mt-1.5 text-[11px] font-medium text-destructive">
                                {fieldErrors.email}
                              </p>
                            ) : null}
                          </div>
                        </div>
                        <div className="group relative">
                          <input
                            id={safeId("phone")}
                            type="tel"
                            autoComplete="tel"
                            value={form.phone}
                            onChange={(e) => {
                              setForm((p) => ({ ...p, phone: e.target.value }));
                              touchField("phone");
                            }}
                            aria-invalid={!!fieldErrors.phone}
                            aria-describedby={
                              fieldErrors.phone ? safeId("err-phone") : undefined
                            }
                            placeholder=" "
                            className={`peer h-14 w-full rounded-xl border bg-slate-50/80 px-4 pt-5 pb-1 text-[13px] text-foreground outline-none transition-all placeholder-transparent focus:bg-white ${fieldErrors.phone ? inputErrorRing : "border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20"}`}
                          />
                          <label
                            htmlFor={safeId("phone")}
                            className="pointer-events-none absolute left-4 top-2 text-[10px] font-bold uppercase tracking-[0.1em] text-primary/70 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-[13px] peer-placeholder-shown:font-medium peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-slate-500 peer-focus:top-2 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-[0.1em] peer-focus:text-primary/70"
                          >
                            Phone *
                          </label>
                          {fieldErrors.phone ? (
                            <p id={safeId("err-phone")} role="alert" className="mt-1.5 text-[11px] font-medium text-destructive">
                              {fieldErrors.phone}
                            </p>
                          ) : null}
                        </div>
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer actions */}
            {!isSubmitted ? (
              <div className="mt-auto shrink-0 border-t border-slate-100 px-4 py-3 sm:px-5">
                <div className="flex items-center gap-2">
                  {step > 1 ? (
                    <motion.button
                      type="button"
                      onClick={goBack}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex h-11 shrink-0 items-center justify-center gap-1 rounded-full border border-slate-200 bg-white px-4 text-[12px] font-bold text-foreground transition-colors hover:bg-slate-50"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Back
                    </motion.button>
                  ) : null}
                  {step < STEP_COUNT ? (
                    <motion.button
                      type="button"
                      onClick={goNext}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-full bg-primary py-2 text-[13px] font-bold text-primary-foreground shadow-lg transition-opacity disabled:opacity-60"
                    >
                      Continue
                      <ArrowRight className="h-4 w-4" />
                    </motion.button>
                  ) : (
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={isSubmitting ? {} : { scale: 1.01 }}
                      whileTap={isSubmitting ? {} : { scale: 0.98 }}
                      className="relative inline-flex h-11 flex-1 items-center justify-center gap-2 overflow-hidden rounded-full py-2 text-[13px] font-bold text-white shadow-lg transition-all disabled:opacity-70"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--primary) 0%, oklch(0.55 0.18 220) 100%)",
                      }}
                    >
                      {!isSubmitting ? (
                        <motion.div
                          className="pointer-events-none absolute inset-0 -skew-x-12 bg-white/10"
                          initial={{ x: "-100%" }}
                          animate={{ x: "200%" }}
                          transition={{ duration: 2.4, ease: "linear", repeat: Infinity, repeatDelay: 0.8 }}
                        />
                      ) : null}
                      <span className="relative flex items-center gap-2">
                        {isSubmitting ? (
                          <>
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                            Sending…
                          </>
                        ) : (
                          <>
                            Send request
                            <Send className="h-4 w-4" />
                          </>
                        )}
                      </span>
                    </motion.button>
                  )}
                </div>
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </motion.div>
  );
}
