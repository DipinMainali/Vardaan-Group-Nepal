"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Building,
  Globe,
  Landmark,
  Mail,
  MapPin,
  Newspaper,
} from "lucide-react";
import Section, { SectionHeader } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SITE_CONFIG } from "@/lib/constants";

const contactPaths = [
  {
    title: "Business Partnerships",
    description:
      "For strategic alliances, enterprise deals, and ecosystem collaborations.",
    icon: Building,
    href: "/contact",
  },
  {
    title: "Investor Relations",
    description:
      "For investor updates, governance queries, and financial communication.",
    icon: Landmark,
    href: "/contact",
  },
  {
    title: "Media Inquiries",
    description:
      "For press interactions, interviews, and official media statements.",
    icon: Newspaper,
    href: "/contact",
  },
  {
    title: "General Queries",
    description:
      "For customer support and general information about group companies.",
    icon: Mail,
    href: "/contact",
  },
];

const offices = [
  "Khusibu, Kathmandu",
  "Baluwatar, Kathmandu",
  "Lalitpur, Nepal",
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "Facebook", href: "https://www.facebook.com/" },
];

export default function InvestorRelationsContact() {
  return (
    <Section id="contact-investor-relations">
      <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        Let’s Connect with Clarity
      </p>
      <SectionHeader
        title="Contact & Investor Relations"
        subtitle="Clear communication channels for clients, partners, investors, and media—so every inquiry reaches the right team faster."
      />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            {contactPaths.map((path, index) => (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <Card className="border-dark-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-3 inline-flex rounded-lg bg-primary-100 p-2 text-primary">
                    <path.icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-base font-semibold text-dark-900">
                    {path.title}
                  </h3>
                  <p className="mt-2 text-sm text-dark-600">
                    {path.description}
                  </p>
                  <Button asChild variant="outline" size="sm" className="mt-4">
                    <Link href={path.href}>Connect now</Link>
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>

          <Card className="border-primary/20 bg-primary-50 p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                  Investor IR link
                </p>
                <p className="mt-1 text-sm text-dark-700">
                  Request investor deck, governance details, and periodic
                  updates.
                </p>
              </div>
              <Button asChild>
                <Link href="/contact">Open IR request</Link>
              </Button>
            </div>
          </Card>
        </div>

        <div className="space-y-5">
          <Card className="overflow-hidden border-dark-200 bg-white p-0">
            <div className="relative h-44">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
                alt="Vardaan Group office network"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-dark-900/70 via-dark-900/20 to-transparent" />
              <div className="absolute bottom-3 left-3 rounded-lg bg-white/90 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur-sm">
                Global-ready, Nepal-rooted office network
              </div>
            </div>
          </Card>

          <Card className="border-dark-200 bg-white p-0 overflow-hidden">
            <div className="flex items-center gap-2 border-b border-dark-200 bg-dark-50 px-4 py-3 text-sm font-semibold text-dark-800">
              <MapPin className="h-4 w-4 text-primary" />
              Office Locations
            </div>
            <ul className="space-y-2 px-4 py-3 text-sm text-dark-700">
              {offices.map((office) => (
                <li key={office} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>{office}</span>
                </li>
              ))}
            </ul>
            <div className="h-64 border-t border-dark-200">
              <iframe
                title="Vardaan Group office map"
                src="https://www.google.com/maps?q=Khusibu,+Kathmandu,+Nepal&output=embed"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Card>

          <Card className="border-dark-200 bg-white p-5">
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-dark-800">
              <Globe className="h-4 w-4 text-primary" />
              Social Links
            </div>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-dark-300 px-3 py-1.5 text-xs font-semibold text-dark-700 transition-colors hover:border-primary hover:text-primary"
                >
                  {social.label}
                </a>
              ))}
            </div>
            <p className="mt-4 text-xs text-dark-500">
              Email: {SITE_CONFIG.email} · Phone: {SITE_CONFIG.phone}
            </p>
          </Card>
        </div>
      </div>
    </Section>
  );
}
