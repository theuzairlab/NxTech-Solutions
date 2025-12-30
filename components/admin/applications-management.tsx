"use client";

import { useMemo, useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AdminModal } from "@/components/admin/admin-modal";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Download, ExternalLink, Eye } from "lucide-react";

type JobApplicationStatus = "NEW" | "SHORTLISTED" | "REJECTED";

type JobApplication = {
  id: string;
  jobId: string;
  fullName: string;
  email: string;
  roleApplyingFor: string;
  yearsOfExperience: string;
  coreSkills: string[];
  resumeUrl: string;
  linkedinUrl: string | null;
  portfolioUrl: string | null;
  status: JobApplicationStatus;
  createdAt: string;
  updatedAt: string;
  job: {
    id: string;
    title: string;
    department: string;
  };
};

async function jsonFetch<T>(url: string, options?: RequestInit): Promise<T> {
  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    },
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "Request failed");
  }
  try {
    return (await res.json()) as T;
  } catch {
    return undefined as T;
  }
}

export function ApplicationsManagement({ initialApplications }: { initialApplications: JobApplication[] }) {
  const [applications, setApplications] = useState<JobApplication[]>(initialApplications);
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | JobApplicationStatus>("all");
  const [jobFilter, setJobFilter] = useState<string>("all");
  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null);
  const [loading, setLoading] = useState(false);

  const jobs = useMemo(() => {
    const jobMap = new Map<string, { id: string; title: string; department: string }>();
    applications.forEach((app) => {
      if (!jobMap.has(app.jobId)) {
        jobMap.set(app.jobId, app.job);
      }
    });
    return Array.from(jobMap.values());
  }, [applications]);

  const filtered = useMemo(() => {
    return applications.filter((app) => {
      const matchesStatus = statusFilter === "all" ? true : app.status === statusFilter;
      const matchesJob = jobFilter === "all" ? true : app.jobId === jobFilter;
      const q = query.toLowerCase();
      const matchesQuery =
        !q ||
        `${app.fullName} ${app.email} ${app.roleApplyingFor} ${app.job.title}`
          .toLowerCase()
          .includes(q);
      return matchesStatus && matchesJob && matchesQuery;
    });
  }, [applications, statusFilter, jobFilter, query]);

  const handleStatusChange = async (id: string, newStatus: JobApplicationStatus) => {
    setLoading(true);
    const prev = applications;
    setApplications((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status: newStatus } : app))
    );
    try {
      const updated = await jsonFetch<JobApplication>(`/api/admin/applications/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ status: newStatus }),
      });
      setApplications((prev) => prev.map((app) => (app.id === id ? updated : app)));
      toast.success("Status updated");
    } catch (err) {
      console.error(err);
      setApplications(prev);
      toast.error("Failed to update status");
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadgeVariant = (status: JobApplicationStatus) => {
    switch (status) {
      case "NEW":
        return "default";
      case "SHORTLISTED":
        return "secondary";
      case "REJECTED":
        return "destructive";
      default:
        return "default";
    }
  };

  return (
    <>
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <Input
            placeholder="Search by name, email, role..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1"
          />
          <Select value={statusFilter} onValueChange={(v) => setStatusFilter(v as any)}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="NEW">New</SelectItem>
              <SelectItem value="SHORTLISTED">Shortlisted</SelectItem>
              <SelectItem value="REJECTED">Rejected</SelectItem>
            </SelectContent>
          </Select>
          <Select value={jobFilter} onValueChange={setJobFilter}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Filter by job" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Jobs</SelectItem>
              {jobs.map((job) => (
                <SelectItem key={job.id} value={job.id}>
                  {job.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Candidate</TableHead>
                <TableHead>Job</TableHead>
                <TableHead>Experience</TableHead>
                <TableHead>Skills</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((app) => (
                <TableRow key={app.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{app.fullName}</div>
                      <div className="text-sm text-muted-foreground">{app.email}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{app.job.title}</div>
                      <div className="text-sm text-muted-foreground">{app.job.department}</div>
                    </div>
                  </TableCell>
                  <TableCell>{app.yearsOfExperience}</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {app.coreSkills.slice(0, 3).map((skill, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {app.coreSkills.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{app.coreSkills.length - 3}
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Select
                      value={app.status}
                      onValueChange={(v) => handleStatusChange(app.id, v as JobApplicationStatus)}
                      disabled={loading}
                    >
                      <SelectTrigger className="w-[140px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="NEW">New</SelectItem>
                        <SelectItem value="SHORTLISTED">Shortlisted</SelectItem>
                        <SelectItem value="REJECTED">Rejected</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {new Date(app.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setSelectedApplication(app)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => window.open(app.resumeUrl, "_blank")}
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            {query || statusFilter !== "all" || jobFilter !== "all"
              ? "No applications found matching your filters."
              : "No applications yet."}
          </div>
        )}
      </div>

      {selectedApplication && (
        <ApplicationDetailModal
          application={selectedApplication}
          onClose={() => setSelectedApplication(null)}
          onStatusChange={(newStatus) => handleStatusChange(selectedApplication.id, newStatus)}
        />
      )}
    </>
  );
}

function ApplicationDetailModal({
  application,
  onClose,
  onStatusChange,
}: {
  application: JobApplication;
  onClose: () => void;
  onStatusChange: (status: JobApplicationStatus) => void;
}) {
  return (
    <AdminModal open={!!application} onClose={onClose} title="Application Details">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="text-xs text-muted-foreground">Full Name</Label>
            <p className="font-medium">{application.fullName}</p>
          </div>
          <div>
            <Label className="text-xs text-muted-foreground">Email</Label>
            <p className="font-medium">{application.email}</p>
          </div>
        </div>

        <div>
          <Label className="text-xs text-muted-foreground">Job Applied For</Label>
          <p className="font-medium">{application.job.title} ({application.job.department})</p>
        </div>

        <div>
          <Label className="text-xs text-muted-foreground">Role Applying For</Label>
          <p className="font-medium">{application.roleApplyingFor}</p>
        </div>

        <div>
          <Label className="text-xs text-muted-foreground">Years of Experience</Label>
          <p className="font-medium">{application.yearsOfExperience}</p>
        </div>

        <div>
          <Label className="text-xs text-muted-foreground">Core Skills</Label>
          <div className="flex flex-wrap gap-2 mt-2">
            {application.coreSkills.map((skill, idx) => (
              <Badge key={idx} variant="outline">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {(application.linkedinUrl || application.portfolioUrl) && (
          <div>
            <Label className="text-xs text-muted-foreground">Links</Label>
            <div className="flex flex-col gap-2 mt-2">
              {application.linkedinUrl && (
                <a
                  href={application.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  LinkedIn Profile
                </a>
              )}
              {application.portfolioUrl && (
                <a
                  href={application.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Portfolio
                </a>
              )}
            </div>
          </div>
        )}

        <div>
          <Label className="text-xs text-muted-foreground">Resume</Label>
          <div className="mt-2">
            <Button
              variant="outline"
              onClick={() => window.open(application.resumeUrl, "_blank")}
              className="w-full"
            >
              <Download className="h-4 w-4 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>

        <div>
          <Label className="text-xs text-muted-foreground">Status</Label>
          <Select
            value={application.status}
            onValueChange={(v) => onStatusChange(v as JobApplicationStatus)}
          >
            <SelectTrigger className="mt-2">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="NEW">New</SelectItem>
              <SelectItem value="SHORTLISTED">Shortlisted</SelectItem>
              <SelectItem value="REJECTED">Rejected</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="pt-4 border-t">
          <div className="text-xs text-muted-foreground">
            Applied on {new Date(application.createdAt).toLocaleString()}
          </div>
        </div>
      </div>
    </AdminModal>
  );
}

