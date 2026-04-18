import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Compass,
  Globe2,
  Headset,
  Landmark,
  MapPinned,
  Mountain,
  ShieldCheck,
  Sparkles,
  Wallet,
} from "lucide-react";
import { BUSINESS_VERTICALS } from "@/lib/constants";
import Section, { SectionHeader } from "@/components/shared/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { SITE_CONFIG } from "@/lib/constants";

const business = BUSINESS_VERTICALS.find((b) => b.slug === "travels")!;

export const revalidate = 21600;

export const metadata: Metadata = {
  title: business.name,
  description: business.description,
  alternates: {
    canonical: "/businesses/travels",
  },
  openGraph: {
    title: "Vardaan Travels & Holidays",
    description:
      "Explore curated domestic and international travel packages with expert planning and dependable support.",
    url: "/businesses/travels",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=2200&q=80",
        width: 2200,
        height: 1467,
        alt: "Vardaan Travels & Holidays",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vardaan Travels & Holidays",
    description:
      "Book curated domestic and international travel packages with Vardaan Travels.",
    images: [
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=2200&q=80",
    ],
  },
};

const categories = [
  {
    title: "Domestic Tours",
    description:
      "Curated itineraries across India with local-first experiences.",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1000&q=80",
    icon: MapPinned,
  },
  {
    title: "International Tours",
    description: "End-to-end travel planning for top global destinations.",
    image:
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=1000&q=80",
    icon: Globe2,
  },
  {
    title: "Adventure Trips",
    description: "High-energy journeys with safety, guides, and gear support.",
    image:
      "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=1000&q=80",
    icon: Mountain,
  },
  {
    title: "Religious Tours",
    description:
      "Meaningful spiritual circuits with comfort-focused logistics.",
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1000&q=80",
    icon: Landmark,
  },
] as const;

const featuredPackages = [
  {
    title: "Nepal Himalayan Escape",
    duration: "6 Days / 5 Nights",
    price: "₹42,999",
    highlights: ["Kathmandu", "Pokhara", "Sunrise at Sarangkot"],
    image:
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=1200&q=80",
  },
  {
    title: "Bali Leisure Retreat",
    duration: "5 Days / 4 Nights",
    price: "₹54,500",
    highlights: ["Ubud", "Nusa Penida", "Private Transfers"],
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80",
  },
  {
    title: "Dubai City & Desert",
    duration: "4 Days / 3 Nights",
    price: "₹48,999",
    highlights: ["Burj Khalifa", "Desert Safari", "Dhow Cruise"],
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80",
  },
  {
    title: "Europe Highlights",
    duration: "8 Days / 7 Nights",
    price: "₹1,15,000",
    highlights: ["Paris", "Swiss Alps", "Rome"],
    image:
      "https://images.unsplash.com/photo-1471623320832-752e8bbf8413?w=1200&q=80",
  },
  {
    title: "Kedarnath Spiritual Route",
    duration: "5 Days / 4 Nights",
    price: "₹29,999",
    highlights: ["Haridwar", "Guptkashi", "VIP Darshan Support"],
    image:
      "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=1200&q=80",
  },
  {
    title: "Andaman Aqua Adventure",
    duration: "5 Days / 4 Nights",
    price: "₹39,500",
    highlights: ["Scuba Intro", "Radhanagar Beach", "Island Hopping"],
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
  },
] as const;

const reasons = [
  {
    title: "Trusted Service",
    description:
      "Transparent plans, verified stays, and reliable coordination.",
    icon: ShieldCheck,
  },
  {
    title: "Affordable Pricing",
    description: "Value-driven packages without hidden costs or surprises.",
    icon: Wallet,
  },
  {
    title: "Custom Packages",
    description: "Flexible itineraries tailored to your interests and pace.",
    icon: Compass,
  },
  {
    title: "24/7 Support",
    description: "Our team is available before, during, and after your trip.",
    icon: Headset,
  },
] as const;

const showcase = [
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
    alt: "Tropical sunset at a beach resort",
    layout: "md:col-span-3 md:row-span-2",
    tag: "Island Getaway",
  },
  {
    src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80",
    alt: "Snowy mountain travel experience",
    layout: "md:col-span-3 md:row-span-1",
    tag: "Adventure",
  },
  {
    src: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=600&q=80",
    alt: "European city exploration",
    layout: "md:col-span-2 md:row-span-1",
    tag: "City Discovery",
  },
  {
    src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80",
    alt: "Road trip with scenic mountain road",
    layout: "md:col-span-2 md:row-span-1",
    tag: "Road Journey",
  },
  {
    src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=80",
    alt: "Air travel and holiday planning",
    layout: "md:col-span-2 md:row-span-1",
    tag: "International",
  },
  {
    src: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600&q=80",
    alt: "Island retreat and clear blue water",
    layout: "md:col-span-3 md:row-span-1",
    tag: "Relaxation",
  },
] as const;

const steps = [
  {
    title: "Choose Package",
    description:
      "Pick a destination package that matches your budget and travel style.",
    icon: Compass,
    previews: ["Compare packages", "Check inclusions", "Pick date window"],
  },
  {
    title: "Customize Trip",
    description:
      "Refine flights, hotels, experiences, and inclusions with our expert team.",
    icon: Sparkles,
    previews: ["Tailor itinerary", "Adjust hotel class", "Add activities"],
  },
  {
    title: "Book & Travel",
    description:
      "Confirm instantly and travel stress-free with proactive trip support.",
    icon: BadgeCheck,
    previews: ["Secure your booking", "Get travel kit", "Enjoy 24/7 support"],
  },
] as const;

const testimonials = [
  {
    name: "Ritika Sharma",
    place: "Delhi",
    quote:
      "Everything from visa guidance to airport transfers was seamless. Our Nepal trip felt premium and stress-free.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80",
  },
  {
    name: "Amit Verma",
    place: "Mumbai",
    quote:
      "We asked for a custom family itinerary, and they nailed every detail. Great pricing and even better support.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80",
  },
  {
    name: "Neha & Karan",
    place: "Jaipur",
    quote:
      "Our international tour was perfectly planned. Real-time support during travel made all the difference.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&q=80",
  },
] as const;

const faqs = [
  {
    q: "How does your visa process support work?",
    a: "We assist with document checklist, application guidance, appointment planning, and status tracking support.",
  },
  {
    q: "What are the booking steps?",
    a: "Select a package, customize your itinerary, confirm with advance payment, then receive a full travel kit and support timeline.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Cancellation charges vary by destination and supplier policy. We share exact terms before confirmation for full transparency.",
  },
] as const;

export default function TravelsPage() {
  const travelBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Vardaan Travels & Holidays",
    url: `${SITE_CONFIG.url}/businesses/travels`,
    parentOrganization: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    description: business.description,
    areaServed: "IN",
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(travelBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="relative isolate overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=2200&q=80"
          alt="Travel destination with mountains and lakes"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-r from-dark-900/90 via-dark-900/65 to-primary-900/45" />
        <div className="container-main relative py-24 sm:py-28 lg:py-36">
          <div className="max-w-3xl text-white">
            <Badge className="mb-5 bg-white/15 text-white backdrop-blur-sm hover:bg-white/20">
              Vardaan Travels & Holidays
            </Badge>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Explore the World with Confidence
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
              From spiritual journeys to global adventures, we craft memorable
              experiences with transparent pricing, expert planning, and support
              that stays with you throughout the trip.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="shadow-lg" asChild>
                <a href="#featured-packages">
                  View Packages
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white! text-white! hover:bg-white/10!"
                asChild
              >
                <a href="#plan-trip">Plan Your Trip</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Section id="travel-categories" className="scroll-mt-24">
        <SectionHeader
          title="Travel Categories"
          subtitle="Choose from curated formats designed for every type of traveller."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Card
              key={category.title}
              className="group overflow-hidden card-hover"
            >
              <div className="relative h-44">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-dark-900/70 to-transparent" />
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

      <Section id="featured-packages" variant="gray" className="scroll-mt-24">
        <SectionHeader
          title="Featured Packages"
          subtitle="Best-selling tours with balanced value, comfort, and memorable highlights."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredPackages.map((pkg) => (
            <Card key={pkg.title} className="group overflow-hidden card-hover">
              <div className="relative h-48">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardContent className="space-y-3 p-5 pt-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-dark-900">
                    {pkg.title}
                  </h3>
                  <Badge variant="secondary" className="shrink-0">
                    {pkg.duration}
                  </Badge>
                </div>
                <p className="text-2xl font-bold text-primary">{pkg.price}</p>
                <ul className="space-y-2 text-sm text-dark-600">
                  {pkg.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2">
                      <BadgeCheck className="h-4 w-4 text-accent" />
                      {h}
                    </li>
                  ))}
                </ul>
                <Button className="w-full" asChild>
                  <Link href={`/contact?business=${business.slug}`}>
                    View Details
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="why-us" className="scroll-mt-24">
        <SectionHeader
          title="Why Travel With Us"
          subtitle="A better trip starts with trust, flexibility, and responsive support."
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

      <Section id="experience-showcase" variant="gray" className="scroll-mt-24">
        <SectionHeader
          title="Travel Experience Showcase"
          subtitle="A visual glimpse into real journeys planned by our team."
        />
        <div className="mb-6 rounded-2xl border border-primary/10 bg-white/75 p-4 backdrop-blur-sm sm:p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm leading-6 text-dark-600 sm:text-base">
              Curated moments from domestic, international, spiritual, and
              adventure journeys—designed to help you preview your next
              unforgettable trip.
            </p>
            <Badge className="bg-primary/10 text-primary hover:bg-primary/15">
              Real Travel Stories
            </Badge>
          </div>
        </div>

        <div className="grid auto-rows-[180px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-6">
          {showcase.map((item) => (
            <div
              key={item.src}
              className={`group relative overflow-hidden rounded-2xl ring-1 ring-black/5 ${item.layout}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-dark-900/65 via-dark-900/20 to-transparent" />
              <div className="absolute inset-x-3 bottom-3">
                <span className="inline-flex rounded-full bg-white/20 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
                  {item.tag}
                </span>
                <p className="mt-2 text-sm font-medium text-white">
                  {item.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="how-it-works" className="scroll-mt-24">
        <SectionHeader
          title="How It Works"
          subtitle="A clear 3-step journey designed for effortless booking."
        />
        <div className="relative">
          <div className="pointer-events-none absolute left-8 right-8 top-11 hidden h-px bg-linear-to-r from-primary/10 via-primary/35 to-primary/10 lg:block" />

          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:thin] lg:grid lg:grid-cols-3 lg:overflow-visible">
            {steps.map((step, index) => (
              <Card
                key={step.title}
                className="group relative min-w-[18.5rem] snap-start overflow-hidden border-primary/15 bg-white/90 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg lg:min-w-0"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-primary/20 via-primary/70 to-accent/70" />
                <CardContent className="relative p-6 pt-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary ring-1 ring-primary/15">
                      <step.icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                      Step {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-dark-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-dark-600">
                    {step.description}
                  </p>

                  <div className="mt-4 rounded-xl border border-dark-100 bg-dark-50 p-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-dark-500">
                      Quick Preview
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {step.previews.map((preview) => (
                        <li
                          key={preview}
                          className="flex items-center gap-2 text-sm text-dark-700"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-primary/75" />
                          {preview}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section id="testimonials" variant="gray" className="scroll-mt-24">
        <SectionHeader
          title="Travel Stories"
          subtitle="What our clients say about their journey with Vardaan Travels."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.name} className="h-full">
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
                      {item.place}
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

      <Section id="travel-faq" className="scroll-mt-24">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Quick answers on visa process, booking, and cancellation policy."
        />
        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-xl border border-dark-200 bg-white p-5 open:border-primary/35 open:shadow-sm"
            >
              <summary className="cursor-pointer list-none pr-8 text-base font-semibold text-dark-900 marker:hidden">
                {faq.q}
              </summary>
              <p className="mt-3 text-sm leading-7 text-dark-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </Section>
    </div>
  );
}
