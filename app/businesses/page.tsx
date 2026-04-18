import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Plane, Sofa, Sparkles } from "lucide-react";
import Section, { SectionHeader } from "@/components/shared/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BUSINESS_VERTICALS } from "@/lib/constants";
import CTASection from "@/components/sections/shared/cta-section";

export const revalidate = 21600;

export const metadata: Metadata = {
  title: "Our Businesses",
  description:
    "Explore Vardaan Group's active businesses — Travels & Holidays and Furnishings.",
  alternates: {
    canonical: "/businesses",
  },
  openGraph: {
    title: "Vardaan Group Businesses",
    description:
      "Explore Vardaan Group's active businesses — Travels & Holidays and Furnishings.",
    url: "/businesses",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80",
        width: 1920,
        height: 1080,
        alt: "Vardaan Group Businesses",
      },
    ],
  },
};

const iconMap: Record<string, React.ReactNode> = {
  Plane: <Plane className="h-10 w-10" />,
  Sofa: <Sofa className="h-10 w-10" />,
};

export default function BusinessesPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative h-105 w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
          alt="Vardaan Group Businesses"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-r from-dark-900/85 via-dark-900/55 to-dark-900/35" />
        <div className="container-main relative flex h-full items-center">
          <div className="max-w-3xl space-y-5 animate-fade-in">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-200">
              Focused Verticals, Shared Standards
            </p>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Our Businesses
            </h1>
            <p className="text-lg text-dark-200">
              Explore the Vardaan ecosystem where every business is built for
              reliability, customer delight, and long-term value creation.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Talk to our team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Business Listings */}
      <Section>
        <SectionHeader
          title="Explore Our Vertical Ecosystem"
          subtitle="Each business has a distinct execution model while carrying one common promise: dependable outcomes for every customer."
        />
        <div className="space-y-10">
          {BUSINESS_VERTICALS.map((biz, index) => (
            <Card
              key={biz.id}
              className="group overflow-hidden border-dark-200 bg-white"
            >
              <div className={`grid items-stretch gap-0 lg:grid-cols-12`}>
                <div
                  className={`relative min-h-85 overflow-hidden ${
                    index % 2 === 0 ? "lg:col-span-7" : "lg:col-span-5"
                  }`}
                >
                  <Image
                    src={biz.image}
                    alt={biz.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-dark-900/60 via-dark-900/10 to-transparent" />
                </div>

                <div
                  className={`space-y-6 p-6 sm:p-8 ${
                    index % 2 === 0 ? "lg:col-span-5" : "lg:col-span-7"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="inline-flex rounded-xl bg-primary-50 p-3 text-primary">
                      {iconMap[biz.icon]}
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                        Customer-Focused Vertical
                      </p>
                      <h3 className="text-2xl font-semibold text-dark-900 sm:text-3xl">
                        {biz.name}
                      </h3>
                    </div>
                  </div>

                  <p className="text-body">{biz.description}</p>

                  <div className="grid grid-cols-2 gap-4 rounded-xl border border-dark-200 bg-dark-50 p-4">
                    {biz.stats.slice(0, 4).map((stat) => (
                      <div key={stat.label}>
                        <div className="text-2xl font-bold text-primary">
                          {stat.value}
                        </div>
                        <div className="text-sm text-dark-500">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <Button asChild>
                      <Link href={`/businesses/${biz.slug}`}>
                        Explore {biz.shortName}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-dark-500">
                      <Sparkles className="h-3.5 w-3.5 text-secondary" />
                      Personalized solutions available
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
