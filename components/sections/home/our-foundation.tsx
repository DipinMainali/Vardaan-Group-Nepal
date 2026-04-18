"use client";

import { motion, useReducedMotion } from "framer-motion";
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
  const prefersReducedMotion = useReducedMotion();

  const morphTransition = {
    duration: 14,
    ease: "easeInOut" as const,
    repeat: Infinity,
    repeatType: "mirror" as const,
  };

  return (
    <Section
      variant="dark"
      className="relative overflow-hidden bg-linear-to-br from-[#091722] via-[#0d2235] to-[#0f1b2e]"
      id="our-foundation"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(119,224,255,0.16),transparent_35%),radial-gradient(circle_at_80%_85%,rgba(56,189,248,0.14),transparent_36%)]" />

      <motion.div
        aria-hidden
        className="absolute -left-24 top-12 h-72 w-72 rounded-[44%_56%_52%_48%/42%_38%_62%_58%] bg-linear-to-br from-cyan-300/30 to-blue-400/10 blur-2xl"
        animate={
          prefersReducedMotion
            ? undefined
            : {
                borderRadius: [
                  "44% 56% 52% 48% / 42% 38% 62% 58%",
                  "58% 42% 60% 40% / 46% 60% 40% 54%",
                  "44% 56% 52% 48% / 42% 38% 62% 58%",
                ],
                x: [0, 28, -10, 0],
                y: [0, -24, 10, 0],
                scale: [1, 1.07, 0.96, 1],
              }
        }
        transition={morphTransition}
      />

      <motion.div
        aria-hidden
        className="absolute -bottom-14 right-0 h-80 w-80 rounded-[52%_48%_38%_62%/49%_52%_48%_51%] bg-linear-to-tl from-emerald-300/25 to-cyan-300/10 blur-2xl"
        animate={
          prefersReducedMotion
            ? undefined
            : {
                borderRadius: [
                  "52% 48% 38% 62% / 49% 52% 48% 51%",
                  "37% 63% 55% 45% / 55% 42% 58% 45%",
                  "52% 48% 38% 62% / 49% 52% 48% 51%",
                ],
                x: [0, -34, 8, 0],
                y: [0, 22, -10, 0],
                scale: [1, 0.94, 1.05, 1],
              }
        }
        transition={{ ...morphTransition, duration: 16 }}
      />

      <div className="relative grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
        <motion.div
          className="space-y-8 lg:col-span-7"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/90 backdrop-blur-md">
            Our Foundation
          </div>

          <div className="space-y-5">
            <h2 className="text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[3.35rem]">
              Built To Endure.
              <motion.span
                className="block bg-linear-to-r from-cyan-200 via-white to-emerald-200 bg-clip-text text-transparent"
                animate={
                  prefersReducedMotion
                    ? undefined
                    : { backgroundPositionX: ["0%", "100%", "0%"] }
                }
                transition={{
                  duration: 6,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                style={{ backgroundSize: "200% auto" }}
              >
                Designed To Evolve.
              </motion.span>
            </h2>

            <p className="max-w-2xl text-base leading-7 text-slate-100/85 sm:text-lg">
              Vardaan Group is shaped by disciplined execution, trusted
              relationships, and intentional expansion. Every milestone reflects
              one principle: create meaningful value that improves daily life,
              not just quarterly numbers.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { value: "25+", label: "Years of trust" },
              { value: "2", label: "Core verticals" },
              { value: "100%", label: "Purpose-led growth" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={
                  prefersReducedMotion ? undefined : { y: -3, scale: 1.01 }
                }
                className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md"
              >
                <p className="text-2xl font-bold text-white">{item.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-cyan-100/80">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative lg:col-span-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          <div className="rounded-[1.8rem] border border-white/20 bg-white/[0.07] p-5 shadow-[0_20px_80px_rgba(7,19,35,0.45)] backdrop-blur-xl sm:p-6">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-100/85">
                Foundation Timeline
              </h3>
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-cyan-200/70" />
                <span className="h-2 w-2 rounded-full bg-emerald-200/60" />
                <span className="h-2 w-2 rounded-full bg-white/55" />
              </div>
            </div>

            <div className="relative space-y-3.5 pl-5 before:absolute before:bottom-2 before:left-1.5 before:top-2 before:w-px before:bg-white/25">
              {corePillars.map((pillar, index) => (
                <motion.article
                  key={pillar.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                  whileHover={
                    prefersReducedMotion
                      ? undefined
                      : {
                          y: -3,
                          boxShadow: "0 12px 30px rgba(6, 20, 36, 0.35)",
                        }
                  }
                  className="relative rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md"
                >
                  <span className="absolute -left-[1.03rem] top-6 h-2.5 w-2.5 rounded-full border border-cyan-100/70 bg-cyan-300/90 shadow-[0_0_0_5px_rgba(147,197,253,0.18)]" />

                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-xl border border-white/15 bg-white/10 p-2 text-cyan-50">
                      <pillar.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-100/85">
                        {pillar.year}
                      </p>
                      <h4 className="mt-1 text-base font-semibold text-white">
                        {pillar.title}
                      </h4>
                      <p className="mt-1.5 text-sm leading-6 text-slate-100/80">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
