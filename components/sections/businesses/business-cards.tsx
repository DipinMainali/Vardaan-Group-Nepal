import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Plane, Sofa } from "lucide-react";
import Section, { SectionHeader } from "@/components/shared/section";
import { Card, CardContent } from "@/components/ui/card";
import { BUSINESS_VERTICALS } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  Plane: <Plane className="h-8 w-8" />,
  Sofa: <Sofa className="h-8 w-8" />,
};

const colorMap: Record<string, string> = {
  primary: "bg-primary-100 text-primary-700",
  secondary: "bg-secondary-100 text-secondary-700",
};

export default function BusinessCards() {
  return (
    <Section variant="gray">
      <SectionHeader
        title="Our Business Verticals"
        subtitle="Diverse expertise. Unified excellence. Explore our family of businesses."
      />
      <div className="grid gap-8 md:grid-cols-2">
        {BUSINESS_VERTICALS.map((biz) => (
          <Link key={biz.id} href={`/businesses/${biz.slug}`} className="group">
            <Card className="h-full overflow-hidden card-hover">
              <div className="relative h-48">
                <Image
                  src={biz.image}
                  alt={biz.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-dark-900/60 to-transparent" />
              </div>
              <CardContent className="p-5">
                <div
                  className={`mb-3 inline-flex rounded-lg p-2 ${colorMap[biz.color]}`}
                >
                  {iconMap[biz.icon]}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-dark-900">
                  {biz.shortName}
                </h3>
                <p className="mb-4 text-sm text-dark-500 line-clamp-2">
                  {biz.tagline}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}
