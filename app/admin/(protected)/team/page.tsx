"use client";

import React, { useState, useEffect } from "react";
import { Plus, Edit, Trash2, Users, Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio?: string;
  image?: string;
  order: number;
}

export default function TeamPage() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editMember, setEditMember] = useState<Partial<TeamMember>>({});
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    fetchMembers();
  }, []);

  async function fetchMembers() {
    try {
      const res = await fetch("/api/team");
      const data = await res.json();
      setMembers(data.members || []);
    } catch (error) {
      console.error("Failed to fetch team:", error);
    }
  }

  async function saveMember() {
    setIsSaving(true);
    try {
      const method = editMember.id ? "PUT" : "POST";
      await fetch("/api/team", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editMember),
      });
      setIsEditing(false);
      setEditMember({});
      fetchMembers();
    } catch (error) {
      console.error("Failed to save member:", error);
    }
    setIsSaving(false);
  }

  async function deleteMember(id: string) {
    if (!confirm("Are you sure you want to delete this team member?")) return;
    try {
      await fetch(`/api/team?id=${id}`, { method: "DELETE" });
      fetchMembers();
    } catch (error) {
      console.error("Failed to delete member:", error);
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-dark-900">Team Management</h1>
          <p className="text-dark-500">Add, edit, or remove team members.</p>
        </div>
        <Button
          onClick={() => {
            setEditMember({ order: members.length });
            setIsEditing(true);
          }}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Member
        </Button>
      </div>

      {isEditing && (
        <Card>
          <CardHeader>
            <CardTitle>
              {editMember.id ? "Edit Member" : "Add New Member"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium">Name</label>
                <Input
                  value={editMember.name || ""}
                  onChange={(e) =>
                    setEditMember({ ...editMember, name: e.target.value })
                  }
                  placeholder="Full name"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Role</label>
                <Input
                  value={editMember.role || ""}
                  onChange={(e) =>
                    setEditMember({ ...editMember, role: e.target.value })
                  }
                  placeholder="Job title"
                />
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Bio</label>
              <Textarea
                value={editMember.bio || ""}
                onChange={(e) =>
                  setEditMember({ ...editMember, bio: e.target.value })
                }
                placeholder="Short biography..."
                rows={3}
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">
                Image URL
              </label>
              <Input
                value={editMember.image || ""}
                onChange={(e) =>
                  setEditMember({ ...editMember, image: e.target.value })
                }
                placeholder="https://..."
              />
            </div>
            <div className="flex gap-3">
              <Button onClick={saveMember} disabled={isSaving}>
                {isSaving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {editMember.id ? "Update" : "Create"}
              </Button>
              <Button
                variant="ghost"
                onClick={() => {
                  setIsEditing(false);
                  setEditMember({});
                }}
              >
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {members.length === 0 ? (
        <Card>
          <CardContent className="py-16 text-center text-dark-400">
            <Users className="mx-auto mb-3 h-12 w-12" />
            <p className="text-lg font-medium">No team members yet</p>
            <p className="text-sm">
              Add team members to display on the website.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <Card key={member.id}>
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark-900">
                        {member.name}
                      </h3>
                      <p className="text-sm text-dark-500">{member.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => {
                        setEditMember(member);
                        setIsEditing(true);
                      }}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="text-red-500 hover:text-red-600"
                      onClick={() => deleteMember(member.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                {member.bio && (
                  <p className="mt-3 text-sm text-dark-500">{member.bio}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
