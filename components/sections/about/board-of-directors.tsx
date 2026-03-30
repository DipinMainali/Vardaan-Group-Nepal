"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";

const directors = [
  {
    id: 1,
    name: "Rajesh Vardaan",
    title: "Chairman & Managing Director",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=750&fit=crop&crop=face",
    message:
      "Our vision has always been to build lasting value — for our stakeholders, our communities, and the generations that follow. Every decision we make is rooted in integrity and the pursuit of excellence that defines the Vardaan legacy.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    title: "Executive Director & CFO",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=750&fit=crop&crop=face",
    message:
      "Financial discipline and transparency are the cornerstones of sustainable growth. We are committed to delivering consistent returns while upholding the highest standards of corporate governance and fiduciary responsibility.",
  },
  {
    id: 3,
    name: "Anil Mehta",
    title: "Independent Director",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=750&fit=crop&crop=face",
    message:
      "Innovation and adaptability define the Vardaan Group. I am proud to serve a board that embraces forward-thinking strategy while staying true to its founding principles of trust, quality, and community impact.",
  },
  {
    id: 4,
    name: "Sunita Kapoor",
    title: "Director — Strategy & Growth",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=750&fit=crop&crop=face",
    message:
      "Our strategic roadmap is designed to unlock new opportunities across sectors. With a relentless focus on quality and a commitment to our people, we aim to set benchmarks that inspire the entire industry.",
  },
];

export default function BoardOfDirectors() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const active = directors[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-dark-50 py-20 lg:py-32"
    >
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40  rounded-full bg-primary-100/40 blur-3xl" />
        <div className="absolute -bottom-32 -left-32  rounded-full bg-secondary-100/30 blur-3xl" />
      </div>

      <div className="container-main relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center lg:mb-20"
        >
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Leadership
          </span>
          <h2 className="heading-primary mt-2">Board of Directors</h2>
          <p className="mx-auto mt-4 max-w-xl text-body">
            Guided by decades of experience and an unwavering commitment to
            excellence, our board steers the Vardaan Group towards a future of
            trust, innovation, and sustainable growth.
          </p>
          <div className="mx-auto mt-6 h-1 w-14 rounded-full bg-secondary" />
        </motion.div>

        {/* Main content: Message left, Image card right */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* LEFT — Message area */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                {/* Decorative quote */}
                <span className="block text-8xl leading-none text-primary-200 lg:text-9xl">
                  &ldquo;
                </span>

                <blockquote className="-mt-6 text-lg leading-relaxed text-dark-700 sm:text-xl lg:text-[1.35rem] lg:leading-[1.8]">
                  {active.message}
                </blockquote>

                <div className="mt-8 flex items-center gap-4">
                  <span className="h-px w-12 bg-primary" />
                  <div>
                    <p className="text-lg font-bold text-dark-900">
                      {active.name}
                    </p>
                    <p className="text-sm font-medium text-primary">
                      {active.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Director selector dots */}
            <div className="mt-10 flex items-center gap-3">
              {directors.map((d, i) => (
                <button
                  key={d.id}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`View message from ${d.name}`}
                  className={`group relative h-12 w-12 overflow-hidden rounded-full ring-2 transition-all duration-300 ${
                    i === activeIndex
                      ? "scale-110 ring-primary shadow-lg shadow-primary/20"
                      : "ring-dark-200 hover:ring-primary-400 grayscale hover:grayscale-0"
                  }`}
                >
                  <Image
                    src={d.image}
                    alt={d.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Image card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="order-1 flex justify-center lg:order-2 lg:justify-end"
          >
            <div className="relative">
              {/* Decorative border frame offset behind the card */}
              <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl border-2 border-primary/20" />

              <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl shadow-dark-900/10 ring-1 ring-dark-100">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="relative"
                  >
                    <Image
                      src={active.image}
                      alt={active.name}
                      width={480}
                      height={600}
                      className="h-105 w-[320px] object-cover sm:h-130 sm:w-100 lg:h-145 lg:w-110"
                      priority
                    />

                    {/* Bottom gradient overlay with name */}
                    <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-dark-900/80 via-dark-900/30 to-transparent px-6 pb-6 pt-20">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                      >
                        <p className="text-xl font-bold text-white lg:text-2xl">
                          {active.name}
                        </p>
                        <p className="mt-1 text-sm font-medium text-primary-200">
                          {active.title}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
