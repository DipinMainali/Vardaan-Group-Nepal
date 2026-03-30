"use client";

import React, { useState } from "react";
import { Save, Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const contentSections = [
  { key: "homepage-hero", label: "Homepage Hero" },
  { key: "homepage-intro", label: "Homepage Introduction" },
  { key: "about-mission", label: "About - Mission" },
  { key: "about-vision", label: "About - Vision" },
  { key: "contact-info", label: "Contact Information" },
];

export default function ContentPage() {
  const [selectedKey, setSelectedKey] = useState(contentSections[0].key);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  async function handleSave() {
    setIsSaving(true);
    try {
      await fetch("/api/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key: selectedKey, title, body, image }),
      });
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (error) {
      console.error("Failed to save content:", error);
    }
    setIsSaving(false);
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-dark-900">Content Management</h1>
        <p className="text-dark-500">
          Edit website content sections. Changes are saved to the database and
          reflected on the live site.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[250px_1fr]">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Content Sections</CardTitle>
          </CardHeader>
          <CardContent className="space-y-1 p-2">
            {contentSections.map((section) => (
              <button
                key={section.key}
                onClick={() => setSelectedKey(section.key)}
                className={`w-full rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                  selectedKey === section.key
                    ? "bg-primary-50 font-medium text-primary"
                    : "text-dark-600 hover:bg-dark-50"
                }`}
              >
                {section.label}
              </button>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>
              {contentSections.find((s) => s.key === selectedKey)?.label}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-dark-700">
                Title
              </label>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Section title..."
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-dark-700">
                Body Content
              </label>
              <Textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Section content..."
                rows={8}
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-dark-700">
                Image URL
              </label>
              <Input
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="https://..."
              />
            </div>
            <div className="flex items-center gap-3">
              <Button onClick={handleSave} disabled={isSaving}>
                {isSaving ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Save className="mr-2 h-4 w-4" />
                )}
                Save Changes
              </Button>
              {saved && (
                <span className="text-sm text-accent">
                  ✓ Saved successfully
                </span>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
