"use client";

import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AdminModal } from "@/components/admin/admin-modal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from "sonner";

type ContactSubmissionStatus = "NEW" | "READ" | "REPLIED";

type ContactSubmissionSummary = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  subject: string;
  message: string;
  status: ContactSubmissionStatus;
  createdAt: string;
  updatedAt: string;
};

type QuoteRequestStatus = "NEW" | "IN_PROGRESS" | "QUOTED" | "COMPLETED";

type QuoteRequestSummary = {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string | null;
  website: string | null;
  services: string[];
  projectDescription: string;
  timeline: string;
  budget: string;
  status: QuoteRequestStatus;
  createdAt: string;
  updatedAt: string;
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

function getWordPreview(text: string, wordCount = 5): string {
  if (!text) return "";
  const words = text.trim().split(/\s+/);
  if (words.length <= wordCount) return text;
  return `${words.slice(0, wordCount).join(" ")} ...`;
}

export function ContactsManagement({
  initialContactSubmissions,
  initialQuoteRequests,
}: {
  initialContactSubmissions: ContactSubmissionSummary[];
  initialQuoteRequests: QuoteRequestSummary[];
}) {
  const [contactSubmissions, setContactSubmissions] = useState<ContactSubmissionSummary[]>(initialContactSubmissions);
  const [quoteRequests, setQuoteRequests] = useState<QuoteRequestSummary[]>(initialQuoteRequests);

  const [contactQuery, setContactQuery] = useState("");
  const [contactStatusFilter, setContactStatusFilter] = useState<"all" | ContactSubmissionStatus>("all");
  const [selectedContact, setSelectedContact] = useState<ContactSubmissionSummary | null>(null);

  const [quoteQuery, setQuoteQuery] = useState("");
  const [quoteStatusFilter, setQuoteStatusFilter] = useState<"all" | QuoteRequestStatus>("all");
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequestSummary | null>(null);

  const filteredContacts = useMemo(() => {
    return contactSubmissions.filter((c) => {
      const matchesStatus = contactStatusFilter === "all" ? true : c.status === contactStatusFilter;
      const q = contactQuery.toLowerCase();
      const matchesQuery =
        !q ||
        `${c.name} ${c.email} ${c.subject}`
          .toLowerCase()
          .includes(q);
      return matchesStatus && matchesQuery;
    });
  }, [contactSubmissions, contactStatusFilter, contactQuery]);

  const filteredQuotes = useMemo(() => {
    return quoteRequests.filter((q) => {
      const matchesStatus = quoteStatusFilter === "all" ? true : q.status === quoteStatusFilter;
      const search = quoteQuery.toLowerCase();
      const matchesQuery =
        !search ||
        `${q.name} ${q.email} ${q.company || ""} ${q.services.join(", ")}`
          .toLowerCase()
          .includes(search);
      return matchesStatus && matchesQuery;
    });
  }, [quoteRequests, quoteStatusFilter, quoteQuery]);

  const updateContactStatus = async (id: string, status: ContactSubmissionStatus) => {
    const prev = contactSubmissions;
    setContactSubmissions((list) =>
      list.map((c) => (c.id === id ? { ...c, status } : c))
    );
    try {
      await jsonFetch<ContactSubmissionSummary>(`/api/admin/contact-submissions/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ status }),
      });
      toast.success("Contact status updated");
    } catch (error) {
      console.error(error);
      setContactSubmissions(prev);
      toast.error("Failed to update contact status");
    }
  };

  const updateQuoteStatus = async (id: string, status: QuoteRequestStatus) => {
    const prev = quoteRequests;
    setQuoteRequests((list) =>
      list.map((q) => (q.id === id ? { ...q, status } : q))
    );
    try {
      await jsonFetch<QuoteRequestSummary>(`/api/admin/quote-requests/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ status }),
      });
      toast.success("Quote request status updated");
    } catch (error) {
      console.error(error);
      setQuoteRequests(prev);
      toast.error("Failed to update quote status");
    }
  };

  const formatDate = (iso: string) => {
    try {
      return new Date(iso).toLocaleString();
    } catch {
      return iso;
    }
  };

  const renderContactStatusBadge = (status: ContactSubmissionStatus) => {
    switch (status) {
      case "NEW":
        return <Badge className="bg-blue-500/10 text-blue-700 border border-blue-500/30 text-xs">New</Badge>;
      case "READ":
        return <Badge className="bg-amber-500/10 text-amber-700 border border-amber-500/30 text-xs">Read</Badge>;
      case "REPLIED":
        return <Badge className="bg-emerald-500/10 text-emerald-700 border border-emerald-500/30 text-xs">Replied</Badge>;
      default:
        return <Badge variant="outline" className="text-xs">{status}</Badge>;
    }
  };

  const renderQuoteStatusBadge = (status: QuoteRequestStatus) => {
    switch (status) {
      case "NEW":
        return <Badge className="bg-blue-500/10 text-blue-700 border border-blue-500/30 text-xs">New</Badge>;
      case "IN_PROGRESS":
        return <Badge className="bg-amber-500/10 text-amber-700 border border-amber-500/30 text-xs">In Progress</Badge>;
      case "QUOTED":
        return <Badge className="bg-purple-500/10 text-purple-700 border border-purple-500/30 text-xs">Quoted</Badge>;
      case "COMPLETED":
        return <Badge className="bg-emerald-500/10 text-emerald-700 border border-emerald-500/30 text-xs">Completed</Badge>;
      default:
        return <Badge variant="outline" className="text-xs">{status}</Badge>;
    }
  };

  return (
    <Tabs defaultValue="contacts" className="space-y-6">
      <TabsList>
        <TabsTrigger value="contacts">Contact Messages</TabsTrigger>
        <TabsTrigger value="quotes">Quote Requests</TabsTrigger>
      </TabsList>

      <TabsContent value="contacts" className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-semibold">Contact Messages</h2>
            <Badge variant="secondary">{contactSubmissions.length}</Badge>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Input
              placeholder="Search by name, email, subject..."
              value={contactQuery}
              onChange={(e) => setContactQuery(e.target.value)}
              className="h-9 w-56"
            />
            <select
              value={contactStatusFilter}
              onChange={(e) => setContactStatusFilter(e.target.value as any)}
              className="h-9 rounded-md border border-border bg-background px-2 text-sm"
            >
              <option value="all">All statuses</option>
              <option value="NEW">New</option>
              <option value="READ">Read</option>
              <option value="REPLIED">Replied</option>
            </select>
          </div>
        </div>

        <div className="rounded-2xl border border-border/70 overflow-hidden bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[220px]">Name</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead className="hidden md:table-cell">Created</TableHead>
                <TableHead className="w-[160px]">Status</TableHead>
                <TableHead className="w-[140px] text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredContacts.map((contact) => (
                <TableRow key={contact.id}>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <p className="font-medium text-sm">{contact.name}</p>
                        {renderContactStatusBadge(contact.status)}
                      </div>
                      <p className="text-xs text-muted-foreground truncate">
                        {contact.email}
                        {contact.phone ? ` • ${contact.phone}` : ""}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">{getWordPreview(contact.subject, 5)}</p>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {getWordPreview(contact.message, 5)}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-xs text-muted-foreground">
                    {formatDate(contact.createdAt)}
                  </TableCell>
                  <TableCell>
                    <select
                      value={contact.status}
                      onChange={(e) =>
                        updateContactStatus(contact.id, e.target.value as ContactSubmissionStatus)
                      }
                      className="h-8 w-full rounded-md border border-border bg-background px-2 text-xs"
                    >
                      <option value="NEW">New</option>
                      <option value="READ">Read</option>
                      <option value="REPLIED">Replied</option>
                    </select>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedContact(contact)}
                    >
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              {filteredContacts.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="py-10 text-center text-sm text-muted-foreground">
                    No contact messages found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </TabsContent>

      <TabsContent value="quotes" className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-semibold">Quote Requests</h2>
            <Badge variant="secondary">{quoteRequests.length}</Badge>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Input
              placeholder="Search by name, email, company..."
              value={quoteQuery}
              onChange={(e) => setQuoteQuery(e.target.value)}
              className="h-9 w-56"
            />
            <select
              value={quoteStatusFilter}
              onChange={(e) => setQuoteStatusFilter(e.target.value as any)}
              className="h-9 rounded-md border border-border bg-background px-2 text-sm"
            >
              <option value="all">All statuses</option>
              <option value="NEW">New</option>
              <option value="IN_PROGRESS">In Progress</option>
              <option value="QUOTED">Quoted</option>
              <option value="COMPLETED">Completed</option>
            </select>
          </div>
        </div>

        <div className="rounded-2xl border border-border/70 overflow-hidden bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[220px]">Client</TableHead>
                <TableHead>Services</TableHead>
                <TableHead className="hidden lg:table-cell">Timeline / Budget</TableHead>
                <TableHead className="hidden xl:table-cell">Project</TableHead>
                <TableHead className="w-[160px]">Status</TableHead>
                <TableHead className="w-[140px] text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredQuotes.map((quote) => (
                <TableRow key={quote.id}>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="font-medium text-sm">{quote.name}</p>
                        {quote.company && (
                          <Badge variant="outline" className="text-[10px]">
                            {quote.company}
                          </Badge>
                        )}
                        {renderQuoteStatusBadge(quote.status)}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {quote.email} • {quote.phone}
                      </p>
                      {quote.website && (
                        <p className="text-xs text-muted-foreground truncate max-w-[260px]">
                          {quote.website}
                        </p>
                      )}
                      <p className="text-xs text-muted-foreground">
                        {formatDate(quote.createdAt)}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {quote.services.map((service) => (
                        <Badge key={service} variant="outline" className="text-[10px]">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="hidden lg:table-cell text-xs">
                    <div className="space-y-1">
                      <div>
                        <span className="font-medium text-muted-foreground">Timeline: </span>
                        <span>{quote.timeline}</span>
                      </div>
                      <div>
                        <span className="font-medium text-muted-foreground">Budget: </span>
                        <span>{quote.budget}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="hidden xl:table-cell text-xs text-muted-foreground">
                    <p className="line-clamp-3">
                      {getWordPreview(quote.projectDescription, 5)}
                    </p>
                  </TableCell>
                  <TableCell>
                    <select
                      value={quote.status}
                      onChange={(e) =>
                        updateQuoteStatus(quote.id, e.target.value as QuoteRequestStatus)
                      }
                      className="h-8 w-full rounded-md border border-border bg-background px-2 text-xs"
                    >
                      <option value="NEW">New</option>
                      <option value="IN_PROGRESS">In Progress</option>
                      <option value="QUOTED">Quoted</option>
                      <option value="COMPLETED">Completed</option>
                    </select>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedQuote(quote)}
                    >
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              {filteredQuotes.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} className="py-10 text-center text-sm text-muted-foreground">
                    No quote requests found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </TabsContent>

      {/* Contact detail modal */}
      <AdminModal
        open={!!selectedContact}
        onClose={() => setSelectedContact(null)}
        title={selectedContact ? `Contact from ${selectedContact.name}` : "Contact details"}
        description={selectedContact?.subject || ""}
      >
        {selectedContact && (
          <div className="space-y-4 text-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground">Name</Label>
                <p>{selectedContact.name}</p>
              </div>
              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground">Email</Label>
                <p>{selectedContact.email}</p>
              </div>
              {selectedContact.phone && (
                <div className="space-y-1">
                  <Label className="text-xs text-muted-foreground">Phone</Label>
                  <p>{selectedContact.phone}</p>
                </div>
              )}
              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground">Status</Label>
                {renderContactStatusBadge(selectedContact.status)}
              </div>
            </div>
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground">Subject</Label>
              <p>{selectedContact.subject}</p>
            </div>
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground">Message</Label>
              <p className="whitespace-pre-wrap">{selectedContact.message}</p>
            </div>
          </div>
        )}
      </AdminModal>

      {/* Quote detail modal */}
      <AdminModal
        open={!!selectedQuote}
        onClose={() => setSelectedQuote(null)}
        title={selectedQuote ? `Quote request from ${selectedQuote.name}` : "Quote request details"}
        description={selectedQuote?.company || ""}
      >
        {selectedQuote && (
          <div className="space-y-4 text-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground">Name</Label>
                <p>{selectedQuote.name}</p>
              </div>
              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground">Email</Label>
                <p>{selectedQuote.email}</p>
              </div>
              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground">Phone</Label>
                <p>{selectedQuote.phone}</p>
              </div>
              {selectedQuote.company && (
                <div className="space-y-1">
                  <Label className="text-xs text-muted-foreground">Company</Label>
                  <p>{selectedQuote.company}</p>
                </div>
              )}
              {selectedQuote.website && (
                <div className="space-y-1">
                  <Label className="text-xs text-muted-foreground">Website</Label>
                  <p>{selectedQuote.website}</p>
                </div>
              )}
              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground">Status</Label>
                {renderQuoteStatusBadge(selectedQuote.status)}
              </div>
            </div>

            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground">Services</Label>
              <div className="flex flex-wrap gap-1">
                {selectedQuote.services.map((service) => (
                  <Badge key={service} variant="outline" className="text-[10px]">
                    {service}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground">Timeline</Label>
                <p>{selectedQuote.timeline}</p>
              </div>
              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground">Budget</Label>
                <p>{selectedQuote.budget}</p>
              </div>
            </div>

            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground">Project Description</Label>
              <p className="whitespace-pre-wrap">{selectedQuote.projectDescription}</p>
            </div>
          </div>
        )}
      </AdminModal>
    </Tabs>
  );
}


