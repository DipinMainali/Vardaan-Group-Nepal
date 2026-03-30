import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Section, { SectionHeader } from "@/components/shared/section";
import { Button } from "@/components/ui/button";

export default function IntroSection() {
  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Image */}
        <div className="relative h-[400px] overflow-hidden rounded-2xl lg:h-[500px]">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
            alt="Vardaan Group Office"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark-900/80 to-transparent p-6">
            <p className="text-lg font-semibold text-white">
              25+ Years of Excellence
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <SectionHeader
            title="Welcome to Vardaan Group"
            subtitle="A legacy of trust, quality, and innovation spanning over two decades across multiple industries."
            centered={false}
          />
          <div className="space-y-4 text-body">
            <p>
              Founded with a vision to create value across diverse sectors,
              Vardaan Group has grown into a reputed conglomerate with business
              interests currently focused on travel and furnishings.
            </p>
            <p>
              Our commitment to excellence, customer satisfaction, and
              sustainable growth has made us a trusted name in every industry we
              operate in. With a team of 500+ professionals and a portfolio
              serving 50,000+ happy clients, we continue to set new benchmarks.
            </p>
          </div>
          <div className="flex gap-4">
            <Button asChild>
              <Link href="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
