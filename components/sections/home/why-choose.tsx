import { ShieldCheck, Handshake, Sparkles, Layers3 } from "lucide-react";
import Section, { SectionHeader } from "@/components/shared/section";

const points = [
  {
    title: "Multi-industry expertise",
    description:
      "A consolidated group that understands different customer journeys end-to-end.",
    icon: Layers3,
  },
  {
    title: "Quality assurance",
    description:
      "Clear standards, vetted partners, and disciplined execution on every engagement.",
    icon: ShieldCheck,
  },
  {
    title: "Customer-first approach",
    description:
      "Every recommendation is designed around your goals, timelines, and comfort.",
    icon: Handshake,
  },
  {
    title: "Reliable service",
    description:
      "Responsive teams and dependable support from first discussion to final delivery.",
    icon: Sparkles,
  },
];

export default function WhyChoose() {
  return (
    <Section variant="gray">
      <SectionHeader
        title="Why Choose Vardaan"
        subtitle="Unified strength across businesses, delivered with accountability and care."
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {points.map((point) => (
          <div
            key={point.title}
            className="rounded-xl border border-dark-200 bg-white p-5 shadow-xs"
          >
            <div className="mb-4 inline-flex rounded-lg bg-primary-100 p-2 text-primary">
              <point.icon className="h-5 w-5" />
            </div>
            <h3 className="text-base font-semibold text-dark-900">
              {point.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-dark-600">
              {point.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
