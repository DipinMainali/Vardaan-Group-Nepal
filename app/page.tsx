import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Building2,
  BriefcaseBusiness,
  CheckCircle2,
  Landmark,
  Plane,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSlider from "@/components/sections/home/hero-slider";
import TrustStrip from "@/components/sections/home/trust-strip";
import OurFoundation from "@/components/sections/home/our-foundation";
import ExecutiveMessage from "@/components/sections/home/executive-message";
import HomeBusinesses from "@/components/sections/home/home-businesses";
import WhyChoose from "@/components/sections/home/why-choose";
import SocialProof from "@/components/sections/home/social-proof";
import Testimonials from "@/components/sections/home/testimonials";
import DualCTA from "@/components/sections/home/dual-cta";
import InvestorRelationsContact from "@/components/sections/home/investor-relations-contact";
import ContactQuick from "@/components/sections/home/contact-quick";
import LandingVideoBackground from "@/components/sections/home/landing-video-background";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Home",
  description:
    "Discover Vardaan Group's trusted legacy in Travels & Holidays and Furnishings with customer-first services and 25+ years of business excellence.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vardaan Group | Building Excellence Across Industries",
    description:
      "Explore Vardaan Group's premium travel and furnishings businesses with a customer-first approach.",
    url: "/",
    type: "website",
    images: [
      { url: "/logo.png", width: 512, height: 512, alt: "Vardaan Group" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vardaan Group | Building Excellence Across Industries",
    description:
      "Explore Vardaan Group's premium travel and furnishings businesses with a customer-first approach.",
    images: ["/logo.png"],
  },
};

const featureGrids = [
  {
    title: "Vardaan Travels & Holidays",
    description:
      "Curated holidays, corporate travel planning, and dependable booking support for every itinerary.",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80",
    span: "lg:col-span-7",
  },
  {
    title: "Vardaan Furnishings",
    description:
      "From concept to installation, we deliver premium furnishing solutions with elegant, functional design.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
    span: "lg:col-span-5",
  },
  {
    title: "25+ Years of Business Trust",
    description:
      "A process-led group legacy built on quality delivery, long-term relationships, and service reliability.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
    span: "lg:col-span-4",
  },
  {
    title: "Customer-First Group Execution",
    description:
      "Across verticals, Vardaan Group combines operational discipline and premium standards for consistent outcomes.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80",
    span: "lg:col-span-8",
  },
];

const highlights = [
  {
    title: "25+ Years",
    subtitle: "of Vardaan Group legacy",
    icon: BriefcaseBusiness,
  },
  {
    title: "50,000+ Clients",
    subtitle: "served with consistency",
    icon: Building2,
  },
  {
    title: "2 Core Verticals",
    subtitle: "Travels & Furnishings",
    icon: Landmark,
  },
  {
    title: "Service Excellence",
    subtitle: "with customer-first standards",
    icon: Sparkles,
  },
];

const vardaanPillars = [
  { label: "Trusted Since 2001", icon: CheckCircle2 },
  { label: "Vardaan Travels & Holidays", icon: Plane },
  { label: "Vardaan Furnishings", icon: Landmark },
];

export default function HomePage() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden border-b border-dark-200 py-24 text-white lg:py-28">
        <LandingVideoBackground />

        <div className="container-main relative z-10 grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="space-y-6 lg:col-span-7">
            <p className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-100 backdrop-blur">
              Vardaan Group of Companies
            </p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Building Excellence Across Industries Since 2001
            </h1>
            <p className="max-w-2xl text-lg text-dark-200">
              Discover Vardaan Group’s trusted legacy through our active
              businesses—Vardaan Travels & Holidays and Vardaan Furnishings—
              delivered with quality, reliability, and customer-first service.
            </p>

            <div className="flex flex-wrap gap-2">
              {vardaanPillars.map((pill) => (
                <div
                  key={pill.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs text-white/90 backdrop-blur"
                >
                  <pill.icon className="h-3.5 w-3.5" />
                  {pill.label}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-white text-dark-900 hover:bg-dark-100"
              >
                <Link href="/businesses">
                  Explore Our Businesses
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <Link href="/contact">Start a Conversation</Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
              >
                <item.icon className="mb-3 h-6 w-6 text-primary-100" />
                <p className="text-xl font-semibold">{item.title}</p>
                <p className="text-sm text-dark-200">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-main py-16 lg:py-24">
        <div className="mb-10 max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Vardaan Business Overview
          </p>
          <h2 className="heading-secondary text-3xl sm:text-4xl">
            Group highlights with large, immersive visual storytelling
          </h2>
          <p className="text-body">
            Explore our business strengths, industry trust, and customer value
            through a modern, spacious, image-led presentation.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          {featureGrids.map((grid) => (
            <article
              key={grid.title}
              className={`${grid.span} group relative min-h-96 overflow-hidden rounded-3xl border border-dark-200 bg-dark-900`}
            >
              <Image
                src={grid.image}
                alt={grid.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-dark-900/90 via-dark-900/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                  {grid.title}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-200 sm:text-base">
                  {grid.description}
                </p>
                <Link
                  href="/businesses"
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary-200 transition hover:text-white"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Existing home section stack added below current view */}
      <HeroSlider />
      <TrustStrip />
      <OurFoundation />
      <ExecutiveMessage />
      <HomeBusinesses />
      <WhyChoose />
      <SocialProof />
      <Testimonials />
      <DualCTA />
      <InvestorRelationsContact />
      <ContactQuick />
    </div>
  );
}
