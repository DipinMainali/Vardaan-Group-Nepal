"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import Section from "@/components/shared/section";
import { Button } from "@/components/ui/button";

export default function ExecutiveMessage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const textY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [24, -24],
  );
  const visualY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [-20, 20],
  );
  const quoteY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [16, -16],
  );

  return (
    <Section
      className="relative overflow-hidden bg-linear-to-b from-white via-dark-50/50 to-white"
      id="executive-message"
    >
      <div
        ref={sectionRef}
        className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(21,27,84,0.06),transparent_40%),radial-gradient(circle_at_90%_20%,rgba(253,126,20,0.12),transparent_36%)]"
      />

      <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_1.08fr] lg:gap-14">
        <motion.div
          style={{ y: visualY }}
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative h-96 overflow-hidden rounded-3xl border border-dark-200/70 bg-white shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&q=80"
              alt="Vardaan executive leadership"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-dark-900/65 via-dark-900/15 to-transparent" />

            <motion.div
              animate={prefersReducedMotion ? undefined : { y: [0, -7, 0] }}
              transition={
                prefersReducedMotion
                  ? undefined
                  : { duration: 5.5, repeat: Infinity, ease: "easeInOut" }
              }
              className="absolute left-5 top-5 rounded-xl border border-white/45 bg-white/85 px-3 py-2 backdrop-blur"
            >
              <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                Leadership Photo
              </p>
            </motion.div>
          </div>

          <motion.div
            style={{ y: quoteY }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="relative -mt-14 ml-4 max-w-sm rounded-2xl border border-dark-200 bg-white p-4 shadow-xl sm:ml-8"
          >
            <Quote className="h-4 w-4 text-primary" />
            <p className="mt-2 text-sm leading-6 text-dark-700">
              We are building a disciplined ecosystem where every business
              vertical earns trust through reliable execution.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: textY }}
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
