import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import Section, { SectionHeader } from "@/components/shared/section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Static placeholder news - will be replaced by CMS data
const NEWS_ITEMS = [
  {
    id: "1",
    title: "Vardaan Group Accelerates Digital Service Experience",
    excerpt:
      "We launched a faster inquiry and customer support workflow to improve response time across all group touchpoints.",
    date: "2026-01-15",
    category: "Company News",
    slug: "digital-service-experience",
  },
  {
    id: "2",
    title: "Vardaan Furnishings Completes 500+ Premium Projects",
    excerpt:
      "Our furnishings team marked a new milestone with projects spanning luxury residences, offices, and curated interiors.",
    date: "2025-12-20",
    category: "Furnishings",
    slug: "furnishings-500-projects",
  },
  {
    id: "3",
    title: "New European Destinations Added to Travel Portfolio",
    excerpt:
      "Vardaan Travels expands its international offerings with 25 new curated European tour packages for the 2026 season.",
    date: "2025-11-10",
    category: "Travels",
    slug: "european-destinations-2026",
  },
];

export default function LatestNews() {
  return (
    <Section>
      <SectionHeader
        title="Latest News & Updates"
        subtitle="Stay informed about the latest happenings across Vardaan Group."
      />
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {NEWS_ITEMS.map((item) => (
          <Card key={item.id} className="overflow-hidden card-hover">
            <div className="h-2 bg-gradient-to-r from-primary via-secondary to-accent" />
            <CardContent className="p-6">
              <div className="mb-3 flex items-center gap-3">
                <Badge variant="default">{item.category}</Badge>
                <span className="flex items-center gap-1 text-xs text-dark-400">
                  <Calendar className="h-3 w-3" />
                  {new Date(item.date).toLocaleDateString("en-IN", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-dark-900 line-clamp-2">
                {item.title}
              </h3>
              <p className="mb-4 text-sm text-dark-500 line-clamp-3">
                {item.excerpt}
              </p>
              <Link
                href={`/news/${item.slug}`}
                className="inline-flex items-center text-sm font-medium text-primary hover:gap-2 transition-all"
              >
                Read More
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
