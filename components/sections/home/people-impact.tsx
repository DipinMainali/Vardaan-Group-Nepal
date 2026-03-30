"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Linkedin, Target } from "lucide-react";
import Section, { SectionHeader } from "@/components/shared/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const leaders = [
  {
    name: "Aarav Vardaan",
    title: "Group Managing Director",
    bio: "Leads strategy, governance, and long-term multi-vertical growth.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Naina Kapoor",
    title: "CEO, Travel & Holidays",
    bio: "Builds customer-first travel products across global destinations.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Raghav Malhotra",
    title: "CEO, Furnishings",
    bio: "Drives premium design execution and quality-led operations.",
    image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=600&q=80",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Ishita Verma",
    title: "Chief Sustainability Officer",
    bio: "Leads ESG roadmap, impact measurement, and sustainability programs.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80",
    linkedin: "https://www.linkedin.com/",
  },
];

const esgMetrics = [
  { label: "Carbon Reduction Goal", value: "35% by 2030" },
  { label: "Community Programs", value: "24 active" },
  { label: "Volunteer Hours", value: "12,000+" },
  { label: "Women in Leadership", value: "42%" },
];

const initiatives = [
  "Skill development programs for youth and local communities",
  "Responsible sourcing for furnishings and vendor compliance",
  "Low-impact travel initiatives and eco-conscious itineraries",
  "Annual education and healthcare support drives",
];

const sdgGoals = ["SDG 4", "SDG 8", "SDG 11", "SDG 12", "SDG 13"];

export default function PeopleImpact() {
  return (
    <Section id="people-impact">
      <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        People Behind the Promise
      </p>
      <SectionHeader
        title="People & Impact"
        subtitle="Leadership strength and measurable impact programs built to create long-term value for clients, communities, and partners."
      />

      <div className="space-y-14">
        <div className="space-y-5">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold text-dark-900">
                Leadership Team
              </h3>
              <p className="mt-1 text-sm text-dark-600">
                Meet the leaders who shape strategy, quality, and customer-first
                execution.
              </p>
            </div>
            <Button asChild variant="outline" size="sm">
              <Link href="/about#team">Meet full leadership</Link>
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className={index === 0 ? "lg:col-span-6" : "lg:col-span-3"}
              >
                <Card className="group overflow-hidden border-dark-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div
                    className={index === 0 ? "relative h-72" : "relative h-64"}
                  >
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-dark-900/75 via-dark-900/15 to-transparent" />
                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="absolute right-3 top-3 rounded-lg bg-white/85 p-2 text-primary backdrop-blur transition hover:bg-white"
                      aria-label={`${leader.name} LinkedIn`}
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                  <div className="space-y-2 p-4">
                    <h4 className="text-base font-semibold text-dark-900">
                      {leader.name}
                    </h4>
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                      {leader.title}
                    </p>
                    <p className="text-sm text-dark-600">{leader.bio}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <div>
            <h3 className="text-2xl font-semibold text-dark-900">
              CSR & Sustainability
            </h3>
            <p className="mt-1 text-sm text-dark-600">
              ESG goals and impact initiatives designed for responsible and
              resilient growth.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
            {esgMetrics.map((metric) => (
              <Card
                key={metric.label}
                className="border-dark-200 bg-dark-50 p-5 lg:col-span-3"
              >
                <p className="text-sm font-medium text-dark-600">
                  {metric.label}
                </p>
                <p className="mt-2 text-2xl font-bold text-dark-900">
                  {metric.value}
                </p>
              </Card>
            ))}
          </div>

          <div className="grid gap-5 lg:grid-cols-12">
            <Card className="border-dark-200 bg-white p-5 lg:col-span-8">
              <div className="mb-4 flex items-center gap-2">
                <Leaf className="h-5 w-5 text-accent" />
                <h4 className="text-lg font-semibold text-dark-900">
                  Impact Initiatives
                </h4>
              </div>
              <ul className="space-y-3 text-sm text-dark-700">
                {initiatives.map((initiative) => (
                  <li key={initiative} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{initiative}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="border-dark-200 bg-white p-5 lg:col-span-4">
              <div className="mb-4 flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                <h4 className="text-lg font-semibold text-dark-900">
                  SDG Goals
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {sdgGoals.map((goal) => (
                  <Badge key={goal} variant="outline">
                    {goal}
                  </Badge>
                ))}
              </div>
              <Button asChild className="mt-5" size="sm">
                <Link href="/about">
                  Read ESG roadmap
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
}
