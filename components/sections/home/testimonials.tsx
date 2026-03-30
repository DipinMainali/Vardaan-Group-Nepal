"use client";

import React, { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Section, { SectionHeader } from "@/components/shared/section";
import { TESTIMONIALS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const visibleCount = 3;
  const maxIndex = Math.max(0, TESTIMONIALS.length - visibleCount);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(maxIndex, c + 1));

  return (
    <Section variant="gray">
      <SectionHeader
        title="What Our Clients Say"
        subtitle="Hear from the people who have experienced the Vardaan difference."
      />

      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${current * (100 / visibleCount)}%)`,
            }}
          >
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-full shrink-0 px-3 md:w-1/2 lg:w-1/3"
              >
                <div className="h-full rounded-xl bg-white p-6 shadow-sm">
                  <Quote className="mb-4 h-8 w-8 text-primary-200" />
                  <p className="mb-6 text-sm leading-6 text-dark-600">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-dark-900">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-dark-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nav Buttons */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            disabled={current === 0}
            className={cn(
              "rounded-full p-2 transition-colors",
              current === 0
                ? "text-dark-300"
                : "text-dark-700 hover:bg-dark-100",
            )}
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-1.5">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={cn(
                  "h-2 rounded-full transition-all",
                  i === current ? "w-6 bg-primary" : "w-2 bg-dark-300",
                )}
                aria-label={`Go to group ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            disabled={current === maxIndex}
            className={cn(
              "rounded-full p-2 transition-colors",
              current === maxIndex
                ? "text-dark-300"
                : "text-dark-700 hover:bg-dark-100",
            )}
            aria-label="Next testimonials"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </Section>
  );
}
