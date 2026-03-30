"use client";

import React, { useEffect, useState } from "react";
import { Search, Eye, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  business: string;
  subject: string;
  message: string;
  status: string;
  createdAt: string;
}

const statusColors: Record<
  string,
  "default" | "warning" | "success" | "accent" | "destructive"
> = {
  NEW: "default",
  CONTACTED: "warning",
  IN_PROGRESS: "accent",
  CONVERTED: "success",
  CLOSED: "destructive",
};

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [search, setSearch] = useState("");
  const [filterBusiness, setFilterBusiness] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  useEffect(() => {
    fetchLeads();
  }, [filterBusiness, filterStatus]);

  async function fetchLeads() {
    try {
      const params = new URLSearchParams();
      if (filterBusiness !== "all") params.set("business", filterBusiness);
      if (filterStatus !== "all") params.set("status", filterStatus);

      const res = await fetch(`/api/leads?${params}`);
      const data = await res.json();
      setLeads(data.leads || []);
    } catch (error) {
      console.error("Failed to fetch leads:", error);
    }
  }

  const filteredLeads = leads.filter(
    (lead) =>
      lead.name.toLowerCase().includes(search.toLowerCase()) ||
      lead.email.toLowerCase().includes(search.toLowerCase()) ||
      lead.subject.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-dark-900">Lead Management</h1>
        <p className="text-dark-500">
          View and manage all contact form submissions and inquiries.
        </p>
      </div>

      <Card>
        <CardContent className="flex flex-wrap items-center gap-4 p-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-dark-400" />
              <Input
                className="pl-10"
                placeholder="Search leads..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <Select value={filterBusiness} onValueChange={setFilterBusiness}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="All Businesses" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Businesses</SelectItem>
              <SelectItem value="travels">Travels</SelectItem>
              <SelectItem value="furnishings">Furnishings</SelectItem>
              <SelectItem value="hotels">Hotels</SelectItem>
              <SelectItem value="builders">Builders</SelectItem>
              <SelectItem value="general">General</SelectItem>
            </SelectContent>
          </Select>
          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="All Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="NEW">New</SelectItem>
              <SelectItem value="CONTACTED">Contacted</SelectItem>
              <SelectItem value="IN_PROGRESS">In Progress</SelectItem>
              <SelectItem value="CONVERTED">Converted</SelectItem>
              <SelectItem value="CLOSED">Closed</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-0">
          {filteredLeads.length === 0 ? (
            <div className="py-16 text-center text-dark-400">
              <Mail className="mx-auto mb-3 h-12 w-12" />
              <p className="text-lg font-medium">No leads found</p>
              <p className="text-sm">
                {leads.length === 0
                  ? "Connect your database to start receiving leads."
                  : "Try adjusting your filters."}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b border-dark-200 bg-dark-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-medium text-dark-500">
                      Name
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-dark-500">
                      Business
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-dark-500">
                      Subject
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-dark-500">
                      Status
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-dark-500">
                      Date
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-dark-500">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLeads.map((lead) => (
                    <tr
                      key={lead.id}
                      className="border-b border-dark-100 hover:bg-dark-50"
                    >
                      <td className="px-4 py-3">
                        <div>
                          <p className="font-medium text-dark-900">
                            {lead.name}
                          </p>
                          <p className="text-xs text-dark-400">{lead.email}</p>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <Badge variant="outline">{lead.business}</Badge>
                      </td>
                      <td className="px-4 py-3 text-dark-600">
                        {lead.subject}
                      </td>
                      <td className="px-4 py-3">
                        <Badge variant={statusColors[lead.status] || "default"}>
                          {lead.status}
                        </Badge>
                      </td>
                      <td className="px-4 py-3 text-dark-500">
                        {new Date(lead.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-3">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => setSelectedLead(lead)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>

      {selectedLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark-900/50">
          <Card className="w-full max-w-lg">
            <CardContent className="space-y-4 pt-6">
              <h2 className="text-lg font-semibold text-dark-900">
                Lead Details
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-medium text-dark-400">Name</p>
                  <p className="text-dark-900">{selectedLead.name}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-dark-400">Email</p>
                  <p className="text-dark-900">{selectedLead.email}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-dark-400">Phone</p>
                  <p className="text-dark-900">{selectedLead.phone}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-dark-400">Business</p>
                  <p className="text-dark-900">{selectedLead.business}</p>
                </div>
              </div>
              <div>
                <p className="text-xs font-medium text-dark-400">Subject</p>
                <p className="text-dark-900">{selectedLead.subject}</p>
              </div>
              <div>
                <p className="text-xs font-medium text-dark-400">Message</p>
                <p className="text-dark-700">{selectedLead.message}</p>
              </div>
              <div className="flex justify-end">
                <Button variant="ghost" onClick={() => setSelectedLead(null)}>
                  Close
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
