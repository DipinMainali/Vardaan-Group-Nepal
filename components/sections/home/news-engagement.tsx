"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ExternalLink, Megaphone, Sparkles } from "lucide-react";
import Section, { SectionHeader } from "@/components/shared/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type NewsCategory = "all" | "company" | "press" | "expansion";

const newsItems = [
  {
    title: "Vardaan Group expands strategic footprint in North India",
    excerpt:
      "New operational partnerships were signed to strengthen service delivery in key growth regions.",
    date: "2026-02-02",
    category: "expansion",
    href: "/about",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1000&q=80",
  },
  {
    title: "Vardaan Furnishings recognized for quality-driven execution",
    excerpt:
      "The furnishings division received industry recognition for process quality and customer satisfaction.",
    date: "2026-01-12",
    category: "press",
    href: "/businesses/furnishings",
    image:
      "https://images.unsplash.com/photo-1617104551722-3b2d51366400?w=1000&q=80",
  },
  {
    title: "Annual leadership note announces FY roadmap",
    excerpt:
      "Group leadership shared strategic priorities around innovation, sustainability, and customer experience.",
    date: "2025-12-21",
    category: "company",
    href: "/about",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1000&q=80",
  },
  {
    title: "Travel vertical adds new curated international tour circuits",
    excerpt:
      "Fresh destination bundles and flexible itineraries launched for families and corporate groups.",
    date: "2025-11-28",
    category: "expansion",
    href: "/businesses/travels",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1000&q=80",
  },
];

const roles = [
  {
    role: "Senior Travel Consultant",
    vertical: "Travel",
    location: "New Delhi",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=80",
  },
  {
    role: "Interior Project Lead",
    vertical: "Furnishings",
    location: "Gurugram",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=900&q=80",
  },
  {
    role: "Performance Marketing Manager",
    vertical: "Group Shared Services",
    location: "Hybrid",
    image:
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=900&q=80",
  },
];

const categories: Array<{ label: string; value: NewsCategory }> = [
  { label: "All", value: "all" },
  { label: "Company", value: "company" },
  { label: "Press", value: "press" },
  { label: "Expansion", value: "expansion" },
];

export default function NewsEngagement() {
  const [category, setCategory] = useState<NewsCategory>("all");

  const filteredNews = useMemo(() => {
    if (category === "all") return newsItems;
    return newsItems.filter((item) => item.category === category);
  }, [category]);

  return (
    <Section variant="gray" id="news-engagement">
      <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        Insights & Opportunities
      </p>
      <SectionHeader
        title="News & Engagement"
        subtitle="From strategic announcements to career opportunities—everything that keeps stakeholders connected with our growth story."
      />

      <div className="space-y-14">
        <div className="space-y-5">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold text-dark-900">
                News & Press Room
              </h3>
              <p className="mt-1 text-sm text-dark-600">
                Follow milestone announcements, expansions, and stories that
                matter to our customers and partners.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((item) => (
                <button
                  key={item.value}
                  onClick={() => setCategory(item.value)}
                  className={cn(
                    "rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-wide transition-all",
                    category === item.value
                      ? "border-primary bg-primary text-white"
                      : "border-dark-300 bg-white text-dark-700 hover:border-primary/40",
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-12">
            {filteredNews.map((item) => (
              <Card
                key={`${item.title}-${item.date}`}
                className="group overflow-hidden border-dark-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{
                  gridColumn:
                    item.title === filteredNews[0]?.title
                      ? "span 7 / span 7"
                      : "span 5 / span 5",
                }}
              >
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-dark-900/70 via-dark-900/20 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="mb-3 flex items-center gap-2">
                    <Badge variant="outline" className="capitalize">
                      {item.category}
                    </Badge>
                    <span className="flex items-center gap-1 text-xs text-dark-500">
                      <Calendar className="h-3 w-3" />
                      {new Date(item.date).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-dark-900">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm text-dark-600">{item.excerpt}</p>
                  <Link
                    href={item.href}
                    className="mt-4 inline-flex items-center text-sm font-medium text-primary"
                  >
                    Read full coverage
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold text-dark-900">Careers</h3>
              <p className="mt-1 text-sm text-dark-600">
                Build your future with teams focused on quality, innovation, and
                real customer impact.
              </p>
            </div>
            <Badge variant="default">Hiring across 3 verticals</Badge>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {roles.map((job) => (
              <Card
                key={job.role}
                className="group overflow-hidden border-dark-200 bg-white"
              >
                <div className="relative h-32">
                  <Image
                    src={job.image}
                    alt={`${job.role} culture`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-dark-900/45" />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {job.vertical}
                    </p>
                    <Sparkles className="h-4 w-4 text-secondary" />
                  </div>
                  <h4 className="mt-2 text-lg font-semibold text-dark-900">
                    {job.role}
                  </h4>
                  <p className="mt-1 text-sm text-dark-600">{job.location}</p>
                  <Button asChild size="sm" className="mt-4">
                    <Link href="/contact">Apply now</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="rounded-2xl border border-primary/20 bg-primary-50 p-5">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Megaphone className="h-5 w-5 text-primary" />
                <p className="text-sm font-medium text-dark-700">
                  Explore culture, benefits, and growth tracks across Vardaan
                  Group.
                </p>
              </div>
              <Button asChild variant="outline">
                <Link href="/contact">View all openings</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
