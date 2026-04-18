import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CircleDollarSign,
  Clock3,
  Layers3,
  Palette,
  PenTool,
  Sofa,
  Sparkles,
  Truck,
} from "lucide-react";
import { BUSINESS_VERTICALS } from "@/lib/constants";
import Section, { SectionHeader } from "@/components/shared/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SITE_CONFIG } from "@/lib/constants";

const business = BUSINESS_VERTICALS.find((b) => b.slug === "furnishings")!;

export const revalidate = 21600;

export const metadata: Metadata = {
  title: business.name,
  description: business.description,
  alternates: {
    canonical: "/businesses/furnishings",
  },
  openGraph: {
    title: "Vardaan Furnishings",
    description:
      "Premium furnishings and interior solutions for homes, offices, and hospitality projects.",
    url: "/businesses/furnishings",
    type: "website",
    images: [
      {
        url: "/furnishings/interior-solutions.jpeg",
        alt: "Vardaan Furnishings interior solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vardaan Furnishings",
    description:
      "Explore premium furnishing collections and custom interior solutions.",
    images: ["/furnishings/interior-solutions.jpeg"],
  },
};

const categories = [
  {
    title: "Sofas",
    description: "Premium comfort sofas tailored for elegant everyday living.",
    image: "/furnishings/sofas.webp",
    icon: Sofa,
  },
  {
    title: "Beds",
    description:
      "Stylish bed collections combining comfort, quality, and durability.",
    image: "/furnishings/beds.jpeg",
    icon: Sparkles,
  },
  {
    title: "Office Furniture",
    description:
      "Functional, ergonomic office solutions for modern workspaces.",
    image: "/furnishings/office-furnitures.jpeg",
    icon: Building2,
  },
  {
    title: "Interior Solutions",
    description:
      "End-to-end interiors with custom planning and cohesive execution.",
    image: "/furnishings/interior-solutions.jpeg",
    icon: Palette,
  },
] as const;

const collections = [
  {
    title: "Verve Living Collection",
    range: "From Rs.48,000",
    description: "Modern living room setups with modular elegance.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
    highlights: [
      "Premium fabric",
      "Custom sizing",
      "5-year structure warranty",
    ],
  },
  {
    title: "Luxe Bedroom Series",
    range: "From Rs.62,000",
    description: "Contemporary beds and storage with refined finishes.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
    highlights: [
      "Soft-close storage",
      "Engineered wood core",
      "Designer headboards",
    ],
  },
  {
    title: "Executive Office Line",
    range: "From Rs.35,000",
    description: "Ergonomic desks and seating for high-performance teams.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80",
    highlights: [
      "Ergonomic support",
      "Cable management",
      "Bulk order discounts",
    ],
  },
  {
    title: "Hospitality Interior Kit",
    range: "Project-based",
    description: "Complete furnishing packages for hotels and serviced stays.",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80",
    highlights: ["Custom themes", "Fire-safe fabrics", "Turnkey execution"],
  },
] as const;

const solutions = [
  {
    title: "Home Furnishing",
    description:
      "Living, bedroom, and dining collections tailored to your space.",
    icon: Sofa,
  },
  {
    title: "Office Setup",
    description:
      "Smart workplace furniture designed for productivity and comfort.",
    icon: Building2,
  },
  {
    title: "Custom Interior Design",
    description:
      "Concept-to-installation design support for bespoke interiors.",
    icon: PenTool,
  },
  {
    title: "Bulk Supply",
    description:
      "Reliable project-scale supply for residences, offices, and hotels.",
    icon: Layers3,
  },
] as const;

const projects = [
  {
    name: "Urban Family Residence",
    type: "Home Project",
    before:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1000&q=80",
    after:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1000&q=80",
  },
  {
    name: "Corporate Office Revamp",
    type: "Office Project",
    before:
      "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=1000&q=80",
    after:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&q=80",
  },
  {
    name: "Boutique Hotel Interiors",
    type: "Hospitality Project",
    single:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80",
  },
] as const;

const reasons = [
  {
    title: "Quality Materials",
    description: "Durable materials sourced for long-term performance.",
    icon: BadgeCheck,
  },
  {
    title: "Custom Designs",
    description: "Design flexibility to match your taste and practical needs.",
    icon: Palette,
  },
  {
    title: "Affordable Pricing",
    description: "Premium outcomes with transparent, value-driven pricing.",
    icon: CircleDollarSign,
  },
  {
    title: "On-time Delivery",
    description: "Disciplined project tracking and dependable timelines.",
    icon: Clock3,
  },
] as const;

const processSteps = [
  {
    title: "Consultation",
    description: "Understand your needs, space dimensions, and style goals.",
    icon: Sparkles,
  },
  {
    title: "Design",
    description: "Share layouts, materials, and design direction for approval.",
    icon: PenTool,
  },
  {
    title: "Production",
    description: "Build with quality checks at each stage of manufacturing.",
    icon: Layers3,
  },
  {
    title: "Delivery",
    description: "Timely installation and final handover with support.",
    icon: Truck,
  },
] as const;

const testimonials = [
  {
    name: "Ananya Mehta",
    project: "Home Interior Project · Noida",
    quote:
      "From concept to final setup, the team was thoughtful and precise. Our home now feels premium yet warm.",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&q=80",
  },
  {
    name: "Rahul Khanna",
    project: "Office Setup · Gurugram",
    quote:
      "Excellent ergonomics, fast turnaround, and professional installation. Great experience for our new office floor.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
  },
  {
    name: "Nisha Kapoor",
    project: "Hospitality Furnishing · Jaipur",
    quote:
      "Their bulk supply quality was consistent and the execution was on-time. Highly reliable partner for projects.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&q=80",
  },
] as const;

const heroBackgrounds = [
  {
    src: "https://images.unsplash.com/photo-1616486701797-0f33f61038f8?w=2200&q=80",
    alt: "Luxury furnished living room with modern decor",
  },
  {
    src: "https://images.unsplash.com/photo-1616594039964-3f5d0e785f2b?w=2200&q=80",
    alt: "Elegant premium bedroom interior and furnishings",
  },
  {
    src: "https://images.unsplash.com/photo-1616627561839-074385245ff6?w=2200&q=80",
    alt: "Contemporary office interior with designer furniture",
  },
] as const;

export default function FurnishingsPage() {
  const furnishingsBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "FurnitureStore",
    name: "Vardaan Furnishings",
    url: `${SITE_CONFIG.url}/businesses/furnishings`,
    parentOrganization: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    description: business.description,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    areaServed: "IN",
    makesOffer: collections.map((collection) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: collection.title,
        description: collection.description,
      },
    })),
  };

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(furnishingsBusinessSchema),
        }}
      />

      <section className="relative isolate overflow-hidden">
        {heroBackgrounds.map((media, index) => (
          <div
            key={media.src}
            aria-hidden
            className="absolute inset-0 animate-[heroFade_18s_ease-in-out_infinite]"
            style={{ animationDelay: `${index * 6}s` }}
          >
            <Image
              src={media.src}
              alt={media.alt}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-linear-to-r from-dark-900/90 via-dark-900/70 to-primary-900/40" />
        <div className="container-main relative py-24 sm:py-28 lg:py-36">
          <div className="max-w-3xl text-white">
            <Badge className="mb-5 bg-white/15 text-white backdrop-blur-sm hover:bg-white/20">
              Vardaan Furnishings
            </Badge>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Designing Spaces That Inspire
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
              We build refined, functional interiors for homes, offices, and
              hospitality spaces—with thoughtful design, dependable quality, and
              project-first execution.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="shadow-lg" asChild>
                <a href="#featured-collections">
                  Explore Collection
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white! text-white! hover:bg-white/10!"
                asChild
              >
                <Link href={`/contact?business=${business.slug}`}>
                  Get Quote
                </Link>
              </Button>
            </div>

            <div className="mt-8 hidden items-center gap-2 sm:flex">
              {heroBackgrounds.map((media, index) => (
                <span
                  key={media.src}
                  className="h-2.5 rounded-full bg-white/70"
                  style={{
                    width: index === 0 ? "2.25rem" : "0.625rem",
                    opacity: index === 0 ? 1 : 0.7,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section id="product-categories" className="scroll-mt-24">
        <SectionHeader
          title="Product Categories"
          subtitle="Cleanly organized collections crafted for modern lifestyle and workspace needs."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Card
              key={category.title}
              className="group overflow-hidden border-primary/10 card-hover"
            >
              <div className="relative h-44">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-dark-900/65 to-transparent" />
                <category.icon className="absolute bottom-3 right-3 h-8 w-8 text-white" />
              </div>
              <CardContent className="p-5 pt-5">
                <h3 className="text-lg font-semibold text-dark-900">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-dark-600">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="featured-collections"
        variant="gray"
        className="scroll-mt-24"
      >
        <SectionHeader
          title="Featured Products & Collections"
          subtitle="High-quality, design-forward selections with practical customization options."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {collections.map((item) => (
            <Card key={item.title} className="group overflow-hidden card-hover">
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <CardContent className="space-y-3 p-5 pt-5">
                <h3 className="text-lg font-semibold text-dark-900">
                  {item.title}
                </h3>
                <p className="text-xl font-bold text-primary">{item.range}</p>
                <p className="text-sm leading-6 text-dark-600">
                  {item.description}
                </p>
                <ul className="space-y-1.5 text-sm text-dark-600">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2">
                      <BadgeCheck className="h-4 w-4 text-accent" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <Button className="w-full" asChild>
                  <Link href={`/contact?business=${business.slug}`}>
                    Request Quote
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="our-solutions" className="scroll-mt-24">
        <SectionHeader
          title="Our Solutions"
          subtitle="A complete furnishings partner across residential, corporate, and project-scale needs."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {solutions.map((item) => (
            <Card
              key={item.title}
              className="h-full border-primary/15 card-hover"
            >
              <CardContent className="p-6 pt-6">
                <div className="mb-4 inline-flex rounded-xl bg-primary-50 p-3 text-primary">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-dark-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-dark-600">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="project-showcase" variant="gray" className="scroll-mt-24">
        <SectionHeader
          title="Project Showcase"
          subtitle="Real transformation stories from homes, offices, and hospitality spaces."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {projects
            .filter((project) => "before" in project)
            .map((project) => (
              <Card
                key={project.name}
                className="overflow-hidden border-primary/10"
              >
                <CardContent className="p-0">
                  <div className="grid grid-cols-2 gap-0">
                    <div className="relative h-56 sm:h-64">
                      <Image
                        src={project.before}
                        alt={`${project.name} before transformation`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 50vw, 33vw"
                      />
                      <span className="absolute left-3 top-3 rounded-full bg-dark-900/75 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                        Before
                      </span>
                    </div>
                    <div className="relative h-56 sm:h-64">
                      <Image
                        src={project.after}
                        alt={`${project.name} after transformation`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 50vw, 33vw"
                      />
                      <span className="absolute left-3 top-3 rounded-full bg-primary/85 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                        After
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                      {project.type}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-dark-900">
                      {project.name}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>

        <div className="mt-6">
          {projects
            .filter((project) => "single" in project)
            .map((project) => (
              <Card
                key={project.name}
                className="group overflow-hidden border-primary/10"
              >
                <CardContent className="p-0">
                  <div className="relative h-64 sm:h-80">
                    <Image
                      src={project.single}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-dark-900/65 via-dark-900/15 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-100">
                        {project.type}
                      </p>
                      <h3 className="mt-1 text-2xl font-semibold text-white">
                        {project.name}
                      </h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </Section>

      <Section id="why-choose-us" className="scroll-mt-24">
        <SectionHeader
          title="Why Choose Us"
          subtitle="The right blend of quality, customization, value, and dependable delivery."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <Card
              key={reason.title}
              className="h-full border-primary/15 card-hover"
            >
              <CardContent className="p-6 pt-6">
                <div className="mb-4 inline-flex rounded-xl bg-primary-50 p-3 text-primary">
                  <reason.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-dark-900">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-dark-600">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="process" variant="gray" className="scroll-mt-24">
        <SectionHeader
          title="Our Process"
          subtitle="A transparent 4-step workflow to move from idea to installation smoothly."
        />
        <div className="relative">
          <div className="pointer-events-none absolute left-10 right-10 top-11 hidden h-px bg-linear-to-r from-primary/10 via-primary/35 to-primary/10 lg:block" />
          <div className="grid gap-5 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <Card
                key={step.title}
                className="relative overflow-hidden border-primary/15 bg-white"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-primary/20 via-primary/70 to-accent/70" />
                <CardContent className="p-6 pt-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary ring-1 ring-primary/15">
                      <step.icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                      Step {index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-dark-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-dark-600">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section id="testimonials" className="scroll-mt-24">
        <SectionHeader
          title="Client Testimonials"
          subtitle="Project-based feedback from homeowners and business clients."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.name} className="h-full border-primary/10">
              <CardContent className="p-6 pt-6">
                <div className="mb-4 flex items-center gap-3">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={52}
                    height={52}
                    className="h-13 w-13 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-dark-900">{item.name}</p>
                    <p className="text-xs uppercase tracking-wide text-dark-500">
                      {item.project}
                    </p>
                  </div>
                </div>
                <p className="text-sm leading-7 text-dark-700">
                  “{item.quote}”
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
