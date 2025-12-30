"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { X, Upload, Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

type Job = {
  id: string;
  title: string;
  department: string;
  location: string | null;
  type: string | null;
  description: string;
  requirements: any;
  benefits: any;
};

export function JobApplicationForm({ job, onClose }: { job: Job; onClose: () => void }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    roleApplyingFor: job.title,
    yearsOfExperience: "",
    coreSkills: [] as string[],
    resumeUrl: "",
    linkedinUrl: "",
    portfolioUrl: "",
  });

  const [skillsInput, setSkillsInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [uploadingResume, setUploadingResume] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAddSkill = () => {
    const skill = skillsInput.trim();
    if (skill) {
      setFormData((prev) => {
        if (!prev.coreSkills || !prev.coreSkills.includes(skill)) {
          return {
            ...prev,
            coreSkills: [...(prev.coreSkills || []), skill],
          };
        }
        return prev;
      });
      setSkillsInput("");
    }
  };

  const handleRemoveSkill = (skill: string) => {
    setFormData((prev) => ({
      ...prev,
      coreSkills: (prev.coreSkills || []).filter((s) => s !== skill),
    }));
  };

  const handleResumeUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowedTypes.includes(file.type)) {
      toast.error("Please upload a PDF or DOC/DOCX file");
      return;
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      toast.error("File size must be less than 10MB");
      return;
    }

    setUploadingResume(true);
    try {
      const uploadFormData = new FormData();
      uploadFormData.append("file", file);
      uploadFormData.append("fileName", file.name);

      const res = await fetch("/api/admin/uploads/resume", {
        method: "POST",
        body: uploadFormData,
      });

      if (!res.ok) {
        throw new Error("Upload failed");
      }

      const data = await res.json();
      setFormData((prev) => ({ ...prev, resumeUrl: data.url }));
      toast.success("Resume uploaded successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to upload resume. Please try again.");
    } finally {
      setUploadingResume(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.roleApplyingFor || !formData.yearsOfExperience) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (!formData.coreSkills || formData.coreSkills.length === 0) {
      toast.error("Please add at least one core skill");
      return;
    }

    if (!formData.resumeUrl) {
      toast.error("Please upload your resume");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/job-applications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jobId: job.id,
          ...formData,
        }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Failed to submit application");
      }

      setIsSubmitted(true);
      toast.success("Application submitted successfully!");
    } catch (error: any) {
      console.error("Failed to submit application", error);
      toast.error(error.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100000] bg-black/50 flex items-center justify-center p-4 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        >
          {isSubmitted ? (
            <div className="p-8 text-center">
              <CheckCircle2 className="h-16 w-16 mx-auto mb-4 text-green-500" />
              <h2 className="text-2xl font-bold mb-2">Application Submitted!</h2>
              <p className="text-muted-foreground mb-6">
                Thank you for your interest. We'll review your application and get back to you soon.
              </p>
              <Button onClick={onClose}>Close</Button>
            </div>
          ) : (
            <>
              <div className="bg-primary text-white p-4 flex items-center justify-between sticky top-0 z-10">
                <div>
                  <h2 className="text-xl font-semibold">Apply for {job.title}</h2>
                  <p className="text-sm text-white/80">{job.department}</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg hover:bg-white/20 transition-colors"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="roleApplyingFor">Role Applying For *</Label>
                  <Input
                    id="roleApplyingFor"
                    value={formData.roleApplyingFor}
                    onChange={(e) => setFormData({ ...formData, roleApplyingFor: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="yearsOfExperience">Years of Experience *</Label>
                  <Input
                    id="yearsOfExperience"
                    value={formData.yearsOfExperience}
                    onChange={(e) => setFormData({ ...formData, yearsOfExperience: e.target.value })}
                    placeholder="e.g., 3-5 years"
                    required
                  />
                </div>

                <div>
                  <Label>Core Skills *</Label>
                  <div className="flex gap-2 mb-2">
                    <Input
                      value={skillsInput}
                      onChange={(e) => setSkillsInput(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          handleAddSkill();
                        }
                      }}
                      placeholder="Add a skill and press Enter"
                    />
                    <Button type="button" onClick={handleAddSkill} variant="outline">
                      Add
                    </Button>
                  </div>
                  {formData.coreSkills && formData.coreSkills.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {formData.coreSkills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {skill}
                          <button
                            type="button"
                            onClick={() => handleRemoveSkill(skill)}
                            className="hover:text-primary/70"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <Label>Resume Upload * (PDF or DOC/DOCX, max 10MB)</Label>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleResumeUpload}
                    className="hidden"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={uploadingResume}
                    className="w-full"
                  >
                    {uploadingResume ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Uploading...
                      </>
                    ) : formData.resumeUrl ? (
                      <>
                        <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />
                        Resume Uploaded
                      </>
                    ) : (
                      <>
                        <Upload className="h-4 w-4 mr-2" />
                        Upload Resume
                      </>
                    )}
                  </Button>
                  {formData.resumeUrl && (
                    <p className="text-xs text-muted-foreground mt-2">
                      Resume uploaded successfully
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="linkedinUrl">LinkedIn URL (Optional)</Label>
                  <Input
                    id="linkedinUrl"
                    type="url"
                    value={formData.linkedinUrl}
                    onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>

                <div>
                  <Label htmlFor="portfolioUrl">Portfolio URL (Optional)</Label>
                  <Input
                    id="portfolioUrl"
                    type="url"
                    value={formData.portfolioUrl}
                    onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                    placeholder="https://yourportfolio.com"
                  />
                </div>

                <div className="flex justify-end gap-2 pt-4 border-t">
                  <Button type="button" variant="outline" onClick={onClose}>
                    Cancel
                  </Button>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Submit Application"
                    )}
                  </Button>
                </div>
              </form>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

