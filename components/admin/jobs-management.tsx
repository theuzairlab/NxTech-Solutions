"use client";

import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { AdminModal } from "@/components/admin/admin-modal";
import { ConfirmDialog } from "@/components/admin/confirm-dialog";
import { Pencil, Plus, Trash2, X } from "lucide-react";

type Job = {
  id: string;
  title: string;
  department: string;
  location: string | null;
  type: string | null;
  description: string;
  requirements: any;
  benefits: any;
  isActive: boolean;
  displayOrder: number | null;
  createdAt: string;
  updatedAt: string;
  _count?: {
    applications: number;
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

export function JobsManagement({ initialJobs }: { initialJobs: Job[] }) {
  const [jobs, setJobs] = useState<Job[]>(initialJobs);
  const [query, setQuery] = useState("");
  const [showCreate, setShowCreate] = useState(false);
  const [editJob, setEditJob] = useState<Job | null>(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const filtered = useMemo(
    () =>
      jobs.filter((j) =>
        `${j.title} ${j.department} ${j.location || ""}`.toLowerCase().includes(query.toLowerCase())
      ),
    [jobs, query]
  );

  const handleDelete = async (id: string) => {
    const prev = jobs;
    setJobs((list) => list.filter((j) => j.id !== id));
    try {
      await jsonFetch(`/api/admin/jobs/${id}`, { method: "DELETE" });
      toast.success("Job deleted");
    } catch (err) {
      console.error(err);
      setJobs(prev);
      toast.error("Failed to delete job");
    }
  };

  const handleCreate = async (data: Partial<Job>) => {
    setLoading(true);
    try {
      const created = await jsonFetch<Job>("/api/admin/jobs", {
        method: "POST",
        body: JSON.stringify(data),
      });
      setJobs((prev) => [created, ...prev]);
      toast.success("Job created");
      setShowCreate(false);
    } catch (err) {
      console.error(err);
      toast.error("Failed to create job");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (id: string, data: Partial<Job>) => {
    setLoading(true);
    try {
      const updated = await jsonFetch<Job>(`/api/admin/jobs/${id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
      });
      setJobs((prev) => prev.map((j) => (j.id === id ? updated : j)));
      toast.success("Job updated");
      setEditJob(null);
    } catch (err) {
      console.error(err);
      toast.error("Failed to update job");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <Input
            placeholder="Search jobs..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="max-w-sm"
          />
          <Button onClick={() => setShowCreate(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add Job
          </Button>
        </div>

        <div className="grid gap-4">
          {filtered.map((job) => (
            <Card key={job.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="flex items-center gap-2">
                      {job.title}
                      {job._count && job._count.applications > 0 && (
                        <Badge variant="secondary">
                          {job._count.applications} application{job._count.applications !== 1 ? "s" : ""}
                        </Badge>
                      )}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{job.department}</span>
                      {job.location && <span>• {job.location}</span>}
                      {job.type && <span>• {job.type}</span>}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={job.isActive ? "default" : "secondary"}>
                      {job.isActive ? "Active" : "Inactive"}
                    </Badge>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setEditJob(job)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setConfirmDeleteId(job.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {job.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            {query ? "No jobs found matching your search." : "No jobs yet. Create your first job posting."}
          </div>
        )}
      </div>

      <JobFormModal
        open={showCreate}
        onClose={() => setShowCreate(false)}
        onSubmit={handleCreate}
        loading={loading}
      />

      {editJob && (
        <JobFormModal
          open={!!editJob}
          onClose={() => setEditJob(null)}
          onSubmit={(data) => handleUpdate(editJob.id, data)}
          initialData={editJob}
          loading={loading}
        />
      )}

      <ConfirmDialog
        open={!!confirmDeleteId}
        onCancel={() => setConfirmDeleteId(null)}
        onConfirm={() => {
          if (confirmDeleteId) {
            handleDelete(confirmDeleteId);
            setConfirmDeleteId(null);
          }
        }}
        title="Delete Job"
        description="Are you sure you want to delete this job? This action cannot be undone."
      />
    </>
  );
}

function JobFormModal({
  open,
  onClose,
  onSubmit,
  initialData,
  loading,
}: {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: Partial<Job>) => Promise<void>;
  initialData?: Job;
  loading: boolean;
}) {
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    department: initialData?.department || "",
    location: initialData?.location || "",
    type: initialData?.type || "",
    description: initialData?.description || "",
    requirements: initialData?.requirements || [],
    benefits: initialData?.benefits || [],
    isActive: initialData?.isActive ?? true,
    displayOrder: initialData?.displayOrder?.toString() || "",
  });

  const [requirementsText, setRequirementsText] = useState(
    Array.isArray(formData.requirements)
      ? formData.requirements.join("\n")
      : ""
  );
  const [benefitsText, setBenefitsText] = useState(
    Array.isArray(formData.benefits)
      ? formData.benefits.join("\n")
      : ""
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const requirements = requirementsText
      .split("\n")
      .map((r) => r.trim())
      .filter((r) => r.length > 0);
    const benefits = benefitsText
      .split("\n")
      .map((b) => b.trim())
      .filter((b) => b.length > 0);

    await onSubmit({
      ...formData,
      requirements: requirements.length > 0 ? requirements : null,
      benefits: benefits.length > 0 ? benefits : null,
      displayOrder: formData.displayOrder ? parseInt(formData.displayOrder) : null,
    });
  };

  return (
    <AdminModal open={open} onClose={onClose} title={initialData ? "Edit Job" : "Create Job"}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="title">Title *</Label>
          <Input
            id="title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
          />
        </div>

        <div>
          <Label htmlFor="department">Department *</Label>
          <Input
            id="department"
            value={formData.department}
            onChange={(e) => setFormData({ ...formData, department: e.target.value })}
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              placeholder="e.g., Remote, New York, NY"
            />
          </div>

          <div>
            <Label htmlFor="type">Type</Label>
            <Input
              id="type"
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              placeholder="e.g., Full-time, Part-time"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="description">Description *</Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows={6}
            required
          />
        </div>

        <div>
          <Label htmlFor="requirements">Requirements (one per line)</Label>
          <Textarea
            id="requirements"
            value={requirementsText}
            onChange={(e) => setRequirementsText(e.target.value)}
            rows={4}
            placeholder="Enter each requirement on a new line"
          />
        </div>

        <div>
          <Label htmlFor="benefits">Benefits (one per line)</Label>
          <Textarea
            id="benefits"
            value={benefitsText}
            onChange={(e) => setBenefitsText(e.target.value)}
            rows={4}
            placeholder="Enter each benefit on a new line"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="displayOrder">Display Order</Label>
            <Input
              id="displayOrder"
              type="number"
              value={formData.displayOrder}
              onChange={(e) => setFormData({ ...formData, displayOrder: e.target.value })}
            />
          </div>

          <div className="flex items-center gap-2 pt-8">
            <Switch
              id="isActive"
              checked={formData.isActive}
              onCheckedChange={(checked) => setFormData({ ...formData, isActive: checked })}
            />
            <Label htmlFor="isActive">Active</Label>
          </div>
        </div>

        <div className="flex justify-end gap-2 pt-4">
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" disabled={loading}>
            {loading ? "Saving..." : initialData ? "Update" : "Create"}
          </Button>
        </div>
      </form>
    </AdminModal>
  );
}

