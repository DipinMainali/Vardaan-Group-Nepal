"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Compass, Flag, Gem } from "lucide-react";
import Section from "@/components/shared/section";

const corePillars = [
  {
    year: "1999",
    title: "Vision & Mission",
    description:
      "To build trusted, high-impact businesses that improve everyday life through quality, consistency, and service excellence.",
    icon: Compass,
  },
  {
    year: "2008",
    title: "Founding Story",
    description:
      "Vardaan Group began with a simple commitment: solve real customer needs with integrity, then scale thoughtfully without compromising trust.",
    icon: Flag,
  },
  {
    year: "Today",
    title: "Group Philosophy",
    description:
      "People first, quality always, growth with purpose. We expand only where we can deliver long-term value and dependable outcomes.",
    icon: Gem,
  },
];

export default function OurFoundation() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const textY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [28, -28],
  );
  const visualY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [-22, 22],
  );

  return (
    <Section
      variant="dark"
      className="relative overflow-hidden bg-linear-to-br from-dark-900 via-primary-900 to-dark-900"
      id="our-foundation"
    >
      <div
        ref={sectionRef}
        className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.14),transparent_38%),radial-gradient(circle_at_10%_90%,rgba(18,184,134,0.18),transparent_40%)]"
      />

      <div className="relative grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
        <motion.div style={{ y: textY }} className="space-y-7 lg:col-span-7">
          <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
            Our Foundation
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
              A Legacy of
              <span className="block bg-linear-to-r from-accent-200 via-white to-secondary-200 bg-clip-text text-transparent">
                Purposeful Growth
              </span>
            </h2>
            <p className="max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
              We are a purpose-driven group built on trust, execution, and
              thoughtful expansion. Our story started with solving real customer
              challenges—and today our core philosophy still guides every
              decision, partnership, and new vertical we pursue.
            </p>
          </div>

          <div className="relative space-y-4 pl-6 before:absolute before:bottom-1 before:left-2 before:top-1 before:w-px before:bg-white/25">
            {corePillars.map((pillar, index) => (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="relative rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm transition-all duration-300 hover:border-accent-300/40 hover:bg-white/15"
              >
                <span className="absolute -left-[1.16rem] top-6 h-3 w-3 rounded-full border border-white/40 bg-accent-300 shadow-[0_0_0_5px_rgba(255,255,255,0.09)]" />

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-lg bg-white/15 p-2 text-white">
                    <pillar.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent-200">
                      {pillar.year}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-white">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-white/80">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        <motion.div style={{ y: visualY }} className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
            className="relative h-96 overflow-hidden rounded-3xl border border-white/15 shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80"
              alt="Vardaan leadership and founding team"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-dark-900/80 via-dark-900/35 to-transparent" />

            <motion.div
              animate={prefersReducedMotion ? undefined : { y: [0, -6, 0] }}
              transition={
                prefersReducedMotion
                  ? undefined
                  : { duration: 5, repeat: Infinity, ease: "easeInOut" }
              }
              className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-white/15 p-4 backdrop-blur-md"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-accent-200">
                Leadership Photo
              </p>
              <p className="mt-1 text-sm leading-6 text-white/85">
                Every chapter of our growth has been anchored in ownership,
                quality, and service-led leadership.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mt-4 rounded-2xl border border-accent-300/40 bg-accent-300/10 p-4"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-accent-200">
              Group Principle
            </p>
            <p className="mt-2 text-sm leading-6 text-white/85">
              Build trust first. Scale second. Keep quality non-negotiable.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
