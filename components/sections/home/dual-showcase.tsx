import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Section, { SectionHeader } from "@/components/shared/section";

export default function DualShowcase() {
  return (
    <Section>
      <SectionHeader
        title="Dual Showcase"
        subtitle="Travel experiences on one side, furnishing transformations on the other—two distinct strengths, one unified standard."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <article className="group overflow-hidden rounded-2xl border border-dark-200 bg-white shadow-sm">
          <div className="relative h-64">
            <Image
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000&q=80"
              alt="Travel destinations and experiences"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="space-y-3 p-6">
            <h3 className="text-2xl font-semibold text-dark-900">
              Travel Experiences
            </h3>
            <p className="text-sm text-dark-600">
              Discover handpicked destinations, easy itineraries, and reliable
              support—from quick escapes to full international holidays.
            </p>
            <Link
              href="/businesses/travels"
              className="inline-flex items-center text-sm font-medium text-primary"
            >
              Explore Travel
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </article>

        <article className="group overflow-hidden rounded-2xl border border-dark-200 bg-white shadow-sm">
          <div className="relative h-64">
            <Image
              src="https://images.unsplash.com/photo-1617104551722-3b2d51366400?w=1000&q=80"
              alt="Interior and furnishing projects"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="space-y-3 p-6">
            <h3 className="text-2xl font-semibold text-dark-900">
              Furnishing Projects
            </h3>
            <p className="text-sm text-dark-600">
              Upgrade homes and workspaces with high-quality materials,
              practical layouts, and timeless design execution.
            </p>
            <Link
              href="/businesses/furnishings"
              className="inline-flex items-center text-sm font-medium text-primary"
            >
              Explore Furnishings
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </article>
      </div>
    </Section>
  );
}
