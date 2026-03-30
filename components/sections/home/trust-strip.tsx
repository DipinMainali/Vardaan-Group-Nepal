import {
  Building2,
  Handshake,
  Layers3,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const trustPoints = [
  {
    label: "25+ Years of Legacy",
    icon: Building2,
    iconClassName: "text-primary",
  },
  {
    label: "50,000+ Happy Clients",
    icon: Users,
    iconClassName: "text-secondary",
  },
  {
    label: "Multi-Industry Expertise",
    icon: Layers3,
    iconClassName: "text-accent",
  },
  {
    label: "Customer-First Service",
    icon: Handshake,
    iconClassName: "text-primary",
  },
  {
    label: "Reliable End-to-End Delivery",
    icon: ShieldCheck,
    iconClassName: "text-accent",
  },
];

export default function TrustStrip() {
  return (
    <section className="relative overflow-hidden border-y border-dark-200/70 bg-linear-to-r from-primary-50/60 via-white to-accent-50/50 py-7 sm:py-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(21,27,84,0.08),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(18,184,134,0.1),transparent_45%)]" />

      <div className="container-main relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {trustPoints.map((point, index) => {
          const Icon = point.icon;

          return (
            <div
              key={point.label}
              style={{ animationDelay: `${index * 90}ms` }}
              className="group animate-fade-in"
            >
              <Card className="relative h-full overflow-hidden border-dark-200/80 bg-white/95 p-4 shadow-sm ring-1 ring-white/70 backdrop-blur transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-xl hover:shadow-primary-100/60 sm:p-5">
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-linear-to-r from-primary-50/50 via-transparent to-accent-50/50" />

                <div className="relative flex items-center gap-3 text-left text-base font-semibold text-dark-700">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-dark-100/80 ring-1 ring-dark-200/60 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-white">
                    <Icon className={`h-5 w-5 ${point.iconClassName}`} />
                  </span>
                  <span className="leading-snug">{point.label}</span>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </section>
  );
}
