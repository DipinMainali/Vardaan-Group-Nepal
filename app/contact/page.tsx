import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Section, { SectionHeader } from "@/components/shared/section";
import { Card, CardContent } from "@/components/ui/card";
import { SITE_CONFIG } from "@/lib/constants";
import ContactForm from "./contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Vardaan Group. Send us your queries about travels, furnishings, or a general inquiry.",
};

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: [SITE_CONFIG.phone],
    action: `tel:${SITE_CONFIG.phone}`,
  },
  {
    icon: Mail,
    title: "Email",
    details: [SITE_CONFIG.email],
    action: `mailto:${SITE_CONFIG.email}`,
  },
  {
    icon: MapPin,
    title: "Address",
    details: [SITE_CONFIG.address],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: Closed"],
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
            alt="Contact Vardaan Group"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-r from-dark-900/85 via-dark-900/60 to-primary/45" />
        </div>
        <div className="container-main relative py-24">
          <div className="max-w-3xl animate-fade-in space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-200">
              Customer Support, Faster Routing
            </p>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Let’s Start the Right Conversation
            </h1>
            <p className="text-lg text-dark-200">
              Share your requirement once—we’ll route it to the right business
              team and respond with clear next steps within 24 hours.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-12">
          {contactInfo.map((info, index) => (
            <Card
              key={info.title}
              className={`card-hover text-center ${index === 0 ? "lg:col-span-6" : "lg:col-span-2"}`}
            >
              <CardContent className="p-6">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-50">
                  <info.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold text-dark-900">
                  {info.title}
                </h3>
                {info.details.map((detail, i) =>
                  info.action ? (
                    <a
                      key={i}
                      href={info.action}
                      className="block text-sm text-primary hover:underline"
                    >
                      {detail}
                    </a>
                  ) : (
                    <p key={i} className="text-sm text-dark-500">
                      {detail}
                    </p>
                  ),
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact Form */}
      <Section variant="gray">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <SectionHeader
              title="Tell Us What You Need"
              subtitle="Whether it’s travel planning, furnishing projects, or investor communication—we’re here to help."
              centered={false}
              className="mb-2"
            />
            <Card className="border-primary/15 bg-primary-50/70">
              <CardContent className="p-6 text-sm text-dark-700">
                Share as much detail as possible and our support desk will
                connect you directly with the relevant team for faster closure.
              </CardContent>
            </Card>
          </div>

          <Card className="overflow-hidden border-dark-200">
            <CardContent className="p-8">
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Map */}
      <div className="h-100 border-y border-dark-200 bg-dark-100">
        <div className="h-full w-full">
          <iframe
            title="Vardaan Group offices map"
            src="https://www.google.com/maps?q=Khusibu,+Kathmandu,+Nepal&output=embed"
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </>
  );
}
