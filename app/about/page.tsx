import type { Metadata } from "next";
import Image from "next/image";
import { Target, Eye, Heart, Users, Award, Globe } from "lucide-react";
import Section, { SectionHeader } from "@/components/shared/section";
import { Card, CardContent } from "@/components/ui/card";
import StatsCounter from "@/components/sections/about/stats-counter";
import CTASection from "@/components/sections/shared/cta-section";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Vardaan Group's journey, mission, values, and the team behind 25+ years of excellence.",
};

const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "We strive for the highest standards in everything we do, from service delivery to customer experience.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description:
      "Our business is built on trust, transparency, and ethical practices that have earned us lasting relationships.",
  },
  {
    icon: Users,
    title: "People First",
    description:
      "Our team and clients are at the heart of everything. We invest in people because they are our greatest asset.",
  },
  {
    icon: Globe,
    title: "Innovation",
    description:
      "We embrace change and continuously seek new ways to improve, adapt, and deliver value to our stakeholders.",
  },
  {
    icon: Award,
    title: "Quality",
    description:
      "Quality is non-negotiable. From materials to processes, we ensure the best at every touchpoint.",
  },
  {
    icon: Eye,
    title: "Vision",
    description:
      "We look beyond today, planning for sustainable growth that benefits our communities and future generations.",
  },
];

const timeline = [
  {
    year: "2001",
    title: "Foundation",
    description: "Vardaan Group established with Vardaan Travels & Holidays.",
  },
  {
    year: "2005",
    title: "Furnishings Launch",
    description: "Expanded into interior furnishing and design solutions.",
  },
  {
    year: "2010",
    title: "Service Expansion",
    description: "Scaled operations with dedicated customer success teams.",
  },
  {
    year: "2015",
    title: "National Expansion",
    description: "Expanded operations to 10+ cities across India.",
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description:
      "Embraced technology-driven operations and online booking systems.",
  },
  {
    year: "2026",
    title: "Focused Growth",
    description:
      "Strengthened focus on travel and furnishings with group-wide modernization.",
  },
];

const leadership = [
  { name: "Rajiv Vardaan", role: "Chairman & Founder" },
  { name: "Anita Vardaan", role: "Managing Director" },
  { name: "Vikram Vardaan", role: "Group Strategy Lead" },
  { name: "Priya Vardaan", role: "Head, Furnishings Division" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <div className="relative h-120 w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
          alt="About Vardaan Group"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-r from-dark-900/88 via-dark-900/60 to-dark-900/35" />
        <div className="container-main relative flex h-full items-center">
          <div className="max-w-3xl space-y-5 animate-fade-in">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-200">
              Built on Trust, Designed for Progress
            </p>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Our Story
            </h1>
            <p className="text-lg text-dark-200">
              25+ years of building excellence, trust, and innovation across
              travel, furnishings, and customer-first services in India.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="space-y-6 rounded-2xl border border-primary/15 bg-primary-50/70 p-6 lg:col-span-6">
            <div className="inline-flex rounded-lg bg-white p-3 shadow-sm">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h2 className="heading-secondary">Our Mission</h2>
            <p className="text-body">
              To deliver exceptional value across every business vertical we
              operate in, creating meaningful experiences and lasting
              relationships with our customers, partners, and communities.
            </p>
            <p className="text-body">
              We are committed to sustainable growth, innovation, and
              maintaining the highest standards of quality and integrity in all
              our endeavors.
            </p>
          </div>
          <div className="space-y-6 rounded-2xl border border-secondary/20 bg-white p-6 shadow-sm lg:col-span-6">
            <div className="inline-flex rounded-lg bg-secondary-100 p-3">
              <Eye className="h-6 w-6 text-secondary" />
            </div>
            <h2 className="heading-secondary">Our Vision</h2>
            <p className="text-body">
              To be India&apos;s most respected diversified group, known for
              transforming industries through innovation, quality, and a
              relentless focus on customer delight.
            </p>
            <p className="text-body">
              We envision a future where Vardaan Group is synonymous with
              excellence across every sector we serve, expanding our footprint
              nationally and internationally.
            </p>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section variant="gray">
        <SectionHeader
          title="Our Core Values"
          subtitle="The principles that guide every decision and action at Vardaan Group."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-12">
          {values.map((value, index) => (
            <Card
              key={value.title}
              className={cn(
                "card-hover lg:col-span-3",
                index % 4 === 0 && "lg:col-span-6",
              )}
            >
              <CardContent className="p-6">
                <div className="mb-4 inline-flex rounded-lg bg-primary-50 p-3">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-dark-900">
                  {value.title}
                </h3>
                <p className="text-sm text-dark-500">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <StatsCounter />

      {/* Timeline */}
      <Section>
        <SectionHeader
          title="Our Journey"
          subtitle="Key milestones in the Vardaan Group story."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {timeline.map((item) => (
            <Card key={item.year} className="border-dark-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                {item.year}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-dark-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-dark-600">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Team Section */}
      <Section variant="gray" id="team">
        <SectionHeader
          title="Leadership Team"
          subtitle="Meet the people driving Vardaan Group's vision forward."
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {leadership.map((member) => (
            <Card
              key={member.name}
              className="overflow-hidden card-hover text-center"
            >
              <div className="flex h-48 items-center justify-center bg-linear-to-br from-primary-100 to-primary-200">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white text-3xl font-bold text-primary shadow-lg">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
              </div>
              <CardContent className="p-5">
                <h3 className="text-lg font-semibold text-dark-900">
                  {member.name}
                </h3>
                <p className="text-sm text-dark-500">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
