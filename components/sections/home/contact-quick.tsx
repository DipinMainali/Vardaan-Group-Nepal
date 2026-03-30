import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Section, { SectionHeader } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";

export default function ContactQuick() {
  return (
    <Section id="contact">
      <SectionHeader
        title="Contact"
        subtitle="Tell us what you need—travel planning, furnishing support, or a general inquiry."
      />

      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div className="rounded-2xl border border-dark-200 bg-white p-6">
          <p className="text-sm leading-7 text-dark-600">
            This website is your current gateway to Vardaan Group services.
            Individual business websites can be launched later while this hub
            continues to route visitors to the right team.
          </p>
          <div className="mt-6">
            <Button asChild>
              <Link href="/contact">Open Full Contact Form</Link>
            </Button>
          </div>
        </div>

        <div className="rounded-2xl border border-dark-200 bg-dark-50 p-6 text-sm">
          <ul className="space-y-4 text-dark-700">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 text-primary" />
              <a href={`tel:${SITE_CONFIG.phone}`}>{SITE_CONFIG.phone}</a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 text-primary" />
              <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-primary" />
              <span>{SITE_CONFIG.address}</span>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
