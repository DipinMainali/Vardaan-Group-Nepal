"use client";

import Image from "next/image";
import Link from "next/link";
import { type Variants, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import Section from "@/components/shared/section";
import { Button } from "@/components/ui/button";

const executives = [
  {
    name: "S.K. Yamin Shakil",
    designation: "Chief Executive, Vardaan Furnishings",
    image: "/Chief-Executive-Vardaan-Furnishings-SK-YAMIN_SHAKIL.jpeg",
    message:
      "Our commitment at Vardaan Furnishings is simple: blend aesthetics, durability, and dependable service to create spaces people truly enjoy living in.",
  },
  {
    name: "S.K. Rehan Shakil",
    designation: "Chief Executive, Vardaan Travels & Holidays",
    image: "/Chief-Executive-Vardaan-Travels-Holidays-SK-REHAN_SHAKIL.jpeg",
    message:
      "At Vardaan Travels & Holidays, we focus on making every journey smooth, transparent, and memorable—because trust should travel with every customer.",
  },
] as const;

export default function ExecutiveMessage() {
  const prefersReducedMotion = useReducedMotion();

  const listVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.16,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <Section
      className="relative overflow-hidden bg-linear-to-b from-white via-dark-50/50 to-white"
      id="executive-message"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(21,27,84,0.06),transparent_40%),radial-gradient(circle_at_90%_20%,rgba(253,126,20,0.12),transparent_36%)]" />

      <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_1.08fr] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="relative space-y-5"
        >
          <motion.ul
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-5"
          >
            {executives.map((executive, index) => (
              <motion.li
                key={executive.name}
                variants={cardVariants}
                whileHover={
                  prefersReducedMotion ? undefined : { y: -4, scale: 1.01 }
                }
                className="group relative overflow-hidden rounded-3xl border border-dark-200/80 bg-white shadow-lg"
              >
                <div className="relative h-72 sm:h-80">
                  <Image
                    src={executive.image}
                    alt={`${executive.name} - ${executive.designation}`}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-dark-900/80 via-dark-900/25 to-transparent" />

                  <motion.div
                    animate={
                      prefersReducedMotion ? undefined : { y: [0, -6, 0] }
                    }
                    transition={
                      prefersReducedMotion
                        ? undefined
                        : { duration: 5.2, repeat: Infinity, ease: "easeInOut" }
                    }
                    className="absolute left-4 top-4 rounded-xl border border-white/40 bg-white/85 px-3 py-1.5 backdrop-blur"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                      Executive Profile
                    </p>
                  </motion.div>

                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <h3 className="text-xl font-bold tracking-tight">
                      {executive.name}
                    </h3>
                    <p className="mt-1 text-sm text-white/90">
                      {executive.designation}
                    </p>
                  </div>
                </div>

                <div className="border-t border-dark-100 bg-white p-5">
                  <Quote className="h-4 w-4 text-primary" />
                  <p className="mt-2 text-sm leading-6 text-dark-700">
                    {executive.message}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="relative ml-2 max-w-sm rounded-2xl border border-dark-200 bg-white p-4 shadow-xl sm:ml-6"
          >
            <Quote className="h-4 w-4 text-primary" />
            <p className="mt-2 text-sm leading-6 text-dark-700">
              We are building a disciplined ecosystem where every business
              vertical earns trust through reliable execution.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="space-y-6"
        >
          <div className="inline-flex rounded-full border border-primary/20 bg-primary-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Executive Message
          </div>

          <div>
            <h2 className="text-4xl font-bold leading-tight text-dark-900 sm:text-5xl">
              Leadership that turns
              <span className="block text-primary">vision into execution</span>
            </h2>
            <p className="mt-4 text-body max-w-xl">
              The Vardaan Group journey is built on long-term trust, bold
              thinking, and practical outcomes across every business we operate.
            </p>
          </div>

          <p className="text-body">
            We started with a simple belief: meaningful businesses are built by
            solving real customer needs with integrity. Today, that belief
            powers our work in travel and furnishings—and it will continue to
            guide each future vertical we launch.
          </p>

          <div className="rounded-2xl border border-primary/20 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Founder Vision
            </p>
            <p className="mt-2 text-sm leading-6 text-dark-700">
              To create a trusted multi-industry ecosystem where families and
              businesses can discover dependable services through one strong,
              quality-first brand.
            </p>
          </div>

          <Button asChild>
            <Link href="/about">
              Read Full About Story
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}
