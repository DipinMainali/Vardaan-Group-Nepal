import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Section, { SectionHeader } from "@/components/shared/section";
import { Card, CardContent } from "@/components/ui/card";

const featuredBusinesses = [
  {
    name: "Vardaan Travels & Holidays",
    href: "/businesses/travels",
    tagline: "Curated journeys with seamless planning and local insights.",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=900&q=80",
  },
  {
    name: "Vardaan Furnishings",
    href: "/businesses/furnishings",
    tagline: "Elegant interiors and premium furniture crafted for impact.",
    image:
      "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=900&q=80",
  },
];

export default function HomeBusinesses() {
  return (
    <Section variant="gray">
      <SectionHeader
        title="Our Businesses"
        subtitle="Currently focused on two flagship verticals—travel and furnishings."
      />
      <div className="grid gap-8 md:grid-cols-2">
        {featuredBusinesses.map((biz) => (
          <Link key={biz.href} href={biz.href} className="group">
            <Card className="h-full overflow-hidden card-hover">
              <div className="relative h-56">
                <Image
                  src={biz.image}
                  alt={biz.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/70 via-dark-900/25 to-transparent" />
              </div>
              <CardContent className="space-y-3 p-6">
                <h3 className="text-xl font-semibold text-dark-900">
                  {biz.name}
                </h3>
                <p className="text-sm text-dark-600">{biz.tagline}</p>
                <span className="inline-flex items-center text-sm font-medium text-primary">
                  View Business
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
