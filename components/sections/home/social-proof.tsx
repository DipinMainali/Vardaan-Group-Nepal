"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  Newspaper,
} from "lucide-react";
import Section, { SectionHeader } from "@/components/shared/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const awards = [
  {
    title: "Best Travel Service Excellence",
    year: "2025",
    type: "Award",
    detail:
      "Recognized for consistently delivering customer-first travel planning with high service satisfaction.",
    image:
      "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=1000&q=80",
  },
  {
    title: "ISO 9001:2015 Certified Process",
    year: "2024",
    type: "Certification",
    detail:
      "Certified operating standards across core workflows to ensure quality, transparency, and reliability.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1000&q=80",
  },
  {
    title: "Top Furnishing Brand Mention",
    year: "2025",
    type: "Press",
    detail:
      "Featured in industry media for design-led delivery and measurable execution quality in furnishing projects.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1000&q=80",
  },
  {
    title: "Sustainable Operations Recognition",
    year: "2023",
    type: "Award",
    detail:
      "Awarded for responsible operations and measurable sustainability progress across group initiatives.",
    image:
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=1000&q=80",
  },
  {
    title: "Customer Trust Seal",
    year: "2026",
    type: "Certification",
    detail:
      "A trust benchmark highlighting dependable service, ethical practices, and strong customer retention.",
    image:
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1000&q=80",
  },
];

const partnerLogos = [
  {
    name: "SkyLine Air",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&q=80",
  },
  {
    name: "Global Stays",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=80",
  },
  {
    name: "UrbanEdge Realty",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80",
  },
  {
    name: "Prime BuildCo",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80",
  },
  {
    name: "Metro Suites",
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=900&q=80",
  },
  {
    name: "EcoWorks",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=900&q=80",
  },
];

const networkPositions = [
  { top: "14%", left: "50%" },
  { top: "28%", left: "82%" },
  { top: "72%", left: "82%" },
  { top: "86%", left: "50%" },
  { top: "72%", left: "18%" },
  { top: "28%", left: "18%" },
] as const;

export default function SocialProof() {
  const [currentAward, setCurrentAward] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentAward((prev) => (prev + 1) % awards.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goNextAward = () => {
    setDirection(1);
    setCurrentAward((prev) => (prev + 1) % awards.length);
  };

  const goPrevAward = () => {
    setDirection(-1);
    setCurrentAward((prev) => (prev - 1 + awards.length) % awards.length);
  };

  return (
    <Section variant="gray" id="social-proof">
      <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        Credibility in Action
      </p>
      <SectionHeader
        title="Social Proof"
        subtitle="Proof points that reinforce trust—from recognized standards to long-term partner relationships."
      />

      <div className="space-y-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="rounded-2xl border border-primary/15 bg-primary-50/70 p-5 sm:p-6"
        >
          <h3 className="text-2xl font-semibold text-dark-900">
            Portfolio Companies Showcase
          </h3>
          <p className="mt-1 text-sm text-dark-600">
            Start with the businesses already featured above and quickly reach
            the right vertical for your exact need.
          </p>
          <Button asChild className="mt-4" size="sm">
            <Link href="/businesses">
              Explore our companies
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        <div className="space-y-5">
          <div>
            <h3 className="text-2xl font-semibold text-dark-900">
              Awards & Recognitions
            </h3>
            <p className="mt-1 text-sm text-dark-600">
              Recognitions, certifications, and media mentions that reinforce
              confidence for clients and partners.
            </p>
          </div>

          <div className="space-y-4">
            <AnimatePresence mode="wait" initial={false}>
              {(() => {
                const award = awards[currentAward];
                const imageRight = currentAward % 2 === 0;

                return (
                  <motion.div
                    key={`${award.title}-${currentAward}`}
                    initial={{ opacity: 0, x: direction > 0 ? 45 : -45 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction > 0 ? -45 : 45 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                  >
                    <Card className="overflow-hidden border-dark-200 bg-white">
                      <div className="grid items-stretch lg:grid-cols-2">
                        <div
                          className={`p-6 sm:p-8 ${imageRight ? "order-1" : "order-2 lg:order-1"}`}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <Badge variant="outline">{award.type}</Badge>
                            <span className="text-xs font-semibold text-dark-500">
                              {award.year}
                            </span>
                          </div>
                          <h4 className="mt-4 text-2xl font-semibold text-dark-900">
                            {award.title}
                          </h4>
                          <p className="mt-3 text-sm leading-7 text-dark-600">
                            {award.detail}
                          </p>
                          <div className="mt-5 flex items-center gap-2 text-xs text-dark-500">
                            {award.type === "Award" && (
                              <Award className="h-3.5 w-3.5" />
                            )}
                            {award.type === "Certification" && (
                              <BadgeCheck className="h-3.5 w-3.5" />
                            )}
                            {award.type === "Press" && (
                              <Newspaper className="h-3.5 w-3.5" />
                            )}
                            <span>Verified recognition</span>
                          </div>
                        </div>

                        <div
                          className={`relative min-h-64 ${imageRight ? "order-2" : "order-1 lg:order-2"}`}
                        >
                          <Image
                            src={award.image}
                            alt={award.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-dark-900/50 via-dark-900/10 to-transparent" />
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })()}
            </AnimatePresence>

            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={goPrevAward}
                  className="rounded-full border border-dark-300 bg-white p-2 text-dark-700 transition-colors hover:border-primary hover:text-primary"
                  aria-label="Previous award"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={goNextAward}
                  className="rounded-full border border-dark-300 bg-white p-2 text-dark-700 transition-colors hover:border-primary hover:text-primary"
                  aria-label="Next award"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              <div className="flex items-center gap-1.5">
                {awards.map((_, index) => (
                  <button
                    key={`award-dot-${index}`}
                    onClick={() => {
                      setDirection(index > currentAward ? 1 : -1);
                      setCurrentAward(index);
                    }}
                    className={
                      index === currentAward
                        ? "h-2.5 w-6 rounded-full bg-primary"
                        : "h-2.5 w-2.5 rounded-full bg-dark-300"
                    }
                    aria-label={`Go to award ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold text-dark-900">
                Client & Partner Network
              </h3>
              <p className="mt-1 text-sm text-dark-600">
                Brands and institutions who rely on our teams for reliable,
                high-quality execution.
              </p>
            </div>
            <Badge variant="default" className="text-xs">
              100+ active client relationships
            </Badge>
          </div>

          <Card className="overflow-hidden border-dark-200 bg-white p-4 sm:p-6">
            <div className="relative h-110 overflow-hidden rounded-2xl bg-linear-to-br from-primary-50 via-white to-accent-50 sm:h-125">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
                className="absolute left-1/2 top-1/2 h-90 w-90 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
                className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/20"
              />

              <svg
                className="absolute inset-0 h-full w-full"
                aria-hidden="true"
              >
                {partnerLogos.map((_, index) => {
                  const pos = networkPositions[index % networkPositions.length];

                  return (
                    <motion.line
                      key={`link-${index}`}
                      x1="50%"
                      y1="50%"
                      x2={pos.left}
                      y2={pos.top}
                      stroke="rgba(21,27,84,0.28)"
                      strokeWidth="1.5"
                      initial={{ pathLength: 0, opacity: 0.3 }}
                      animate={{ pathLength: 1, opacity: [0.25, 0.8, 0.25] }}
                      transition={{
                        pathLength: { duration: 0.9, delay: index * 0.08 },
                        opacity: {
                          duration: 2.2,
                          repeat: Infinity,
                          delay: index * 0.12,
                        },
                      }}
                    />
                  );
                })}
              </svg>

              <motion.div
                animate={{ scale: [1, 1.03, 1] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-4 border-white bg-white shadow-[0_0_0_10px_rgba(21,27,84,0.12)] sm:h-36 sm:w-36">
                  <Image
                    src="/logo.png"
                    alt="Vardaan Group"
                    width={120}
                    height={34}
                    className="h-auto w-20 sm:w-24"
                    style={{ height: "auto", width: "auto" }}
                  />
                </div>
              </motion.div>

              {partnerLogos.map((partner, index) => {
                const pos = networkPositions[index % networkPositions.length];

                return (
                  <motion.div
                    key={`node-${partner.name}`}
                    style={{ top: pos.top, left: pos.left }}
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: [1, 1.06, 1] }}
                    transition={{
                      opacity: { duration: 0.35, delay: index * 0.08 },
                      scale: {
                        duration: 2.6,
                        repeat: Infinity,
                        delay: index * 0.2,
                      },
                    }}
                    className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="flex flex-col items-center gap-1.5">
                      <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-white shadow-md">
                        <Image
                          src={partner.image}
                          alt={partner.name}
                          fill
                          className="object-cover"
                          sizes="56px"
                        />
                      </div>
                      <span className="max-w-20 text-center text-[10px] font-semibold leading-4 text-dark-700 sm:text-xs">
                        {partner.name}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </Card>

          <div className="pt-2">
            <Button asChild variant="outline">
              <Link href="/contact">Become a strategic partner</Link>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
