import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  Phone,
  Plane,
  Sofa,
  Hotel,
  Building2,
} from "lucide-react";
import Section, { SectionHeader } from "@/components/shared/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  Plane: <Plane className="h-12 w-12" />,
  Sofa: <Sofa className="h-12 w-12" />,
  Hotel: <Hotel className="h-12 w-12" />,
  Building2: <Building2 className="h-12 w-12" />,
};

interface BusinessPageTemplateProps {
  business: {
    id: string;
    name: string;
    shortName: string;
    slug: string;
    tagline: string;
    description: string;
    icon: string;
    color: string;
    image: string;
    services: readonly string[];
    stats: readonly { label: string; value: string }[];
    comingSoon?: boolean;
  };
  gallery?: { src: string; alt: string }[];
  teamMembers?: { name: string; role: string; image?: string }[];
}

export default function BusinessPageTemplate({
  business,
  gallery,
  teamMembers,
}: BusinessPageTemplateProps) {
  return (
    <>
      {/* Hero */}
      <div className="relative h-112.5 w-full overflow-hidden lg:h-125">
        <Image
          src={business.image}
          alt={business.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-r from-dark-900/85 via-dark-900/55 to-dark-900/25" />
        <div className="container-main relative flex h-full items-center">
          <div className="max-w-2xl space-y-6 animate-fade-in">
            {business.comingSoon && (
              <Badge variant="warning" className="text-sm px-3 py-1">
                Coming Soon
              </Badge>
            )}
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-200">
              Specialized Vertical · Customer-Led Services
            </p>
            <div className="text-white">{iconMap[business.icon]}</div>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              {business.name}
            </h1>
            <p className="text-xl text-dark-200">{business.tagline}</p>
            <div className="flex gap-4">
              <Button size="lg" asChild>
                <Link href={`/contact?business=${business.slug}`}>
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="border-y border-primary-700 bg-primary">
        <div className="container-main grid grid-cols-2 gap-4 py-8 lg:grid-cols-4">
          {business.stats.slice(0, 4).map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-primary-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* About */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
          <div className="space-y-4">
            <SectionHeader
              title={`About ${business.shortName}`}
              subtitle="A focused practice built around quality outcomes and dependable customer support."
              centered={false}
              className="mb-2"
            />
            <p className="text-body text-lg">{business.description}</p>
          </div>

          <Card className="border-primary/15 bg-primary-50/70 p-6">
            <h3 className="text-lg font-semibold text-dark-900">
              Why clients choose us
            </h3>
            <p className="mt-2 text-sm leading-7 text-dark-700">
              Structured planning, responsive teams, and measurable service
              quality at every stage of delivery.
            </p>
          </Card>
        </div>
      </Section>

      {/* Services Grid */}
      <Section variant="gray">
        <SectionHeader
          title="Our Services"
          subtitle={`Comprehensive ${business.shortName.toLowerCase()} solutions tailored to your needs.`}
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-12">
          {business.services.map((service, index) => (
            <Card
              key={index}
              className={cn(
                "card-hover lg:col-span-3",
                index % 3 === 0 && "lg:col-span-6",
              )}
            >
              <CardContent className="flex items-start gap-4 p-6">
                <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-accent" />
                <div>
                  <h3 className="font-semibold text-dark-900">{service}</h3>
                  <p className="mt-1 text-sm text-dark-500">
                    Professional {service.toLowerCase()} services with attention
                    to detail and customer satisfaction guaranteed.
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Portfolio Gallery */}
      {gallery && gallery.length > 0 && (
        <Section>
          <SectionHeader
            title="Our Portfolio"
            subtitle="A showcase of our finest work and experiences."
          />
          <div className="grid auto-rows-[220px] gap-4 md:grid-cols-2 lg:grid-cols-12">
            {gallery.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "group relative overflow-hidden rounded-xl lg:col-span-3",
                  index % 5 === 0 && "lg:col-span-6",
                )}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-dark-900/0 transition-colors group-hover:bg-dark-900/40" />
                <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform group-hover:translate-y-0">
                  <p className="text-sm font-medium text-white">{item.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Team */}
      {teamMembers && teamMembers.length > 0 && (
        <Section variant="gray">
          <SectionHeader
            title="Meet the Team"
            subtitle={`The dedicated professionals behind ${business.shortName}.`}
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <Card
                key={member.name}
                className={cn(
                  "overflow-hidden card-hover text-center",
                  index === 0 && "md:col-span-2 lg:col-span-2",
                )}
              >
                <div className="flex h-40 items-center justify-center bg-linear-to-br from-primary-100 to-primary-200">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-2xl font-bold text-primary shadow-lg">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-dark-900">{member.name}</h3>
                  <p className="text-sm text-dark-500">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>
      )}

      {/* Contact CTA */}
      <Section variant="primary" className="py-16!">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Interested in {business.shortName}?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-100">
            Get in touch with our {business.shortName.toLowerCase()} team for
            personalized assistance and consultation.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-dark-100"
              asChild
            >
              <Link href={`/contact?business=${business.slug}`}>
                <Mail className="mr-2 h-4 w-4" />
                Send Inquiry
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white! text-white! hover:bg-white/10!"
              asChild
            >
              <a href="tel:+919876543210">
                <Phone className="mr-2 h-4 w-4" />
                Call Us
              </a>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
