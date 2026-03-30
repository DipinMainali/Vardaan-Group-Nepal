"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const slides = [
  {
    title: "Seamless Travels, Every Time",
    subtitle:
      "From quick getaways to detailed international itineraries, we make every journey effortless and memorable.",
    cta: { label: "Explore Travels", href: "/businesses/travels" },
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=80",
  },
  {
    title: "Curated Holiday Experiences",
    subtitle:
      "Relax while we curate your perfect holiday with personalized stays, activities, and on-ground support.",
    cta: { label: "Plan Your Holiday", href: "/businesses/travels" },
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80",
  },
  {
    title: "Guided Tours That Inspire",
    subtitle:
      "Discover iconic landmarks and hidden gems through thoughtfully designed domestic and international tour packages.",
    cta: { label: "Browse Tours", href: "/businesses/travels" },
    image:
      "https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=1920&q=80",
  },
  {
    title: "Fast & Reliable Ticketing",
    subtitle:
      "Get hassle-free flight, rail, and bus ticketing with transparent support and timely confirmations.",
    cta: { label: "Book Ticketing Services", href: "/businesses/travels" },
    image:
      "https://images.unsplash.com/photo-1540339832862-474599807836?w=1920&q=80",
  },
  {
    title: "Premium Furnishings, Timeless Style",
    subtitle:
      "Transform your home and office with elegant interior solutions, bespoke furniture, and expert craftsmanship.",
    cta: { label: "Explore Furnishings", href: "/businesses/furnishings" },
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&q=80",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, next]);

  return (
    <div
      className="relative h-150 w-full overflow-hidden lg:h-175"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-700",
            index === current ? "opacity-100" : "opacity-0 pointer-events-none",
          )}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-r from-dark-900/80 via-dark-900/50 to-transparent" />

          <div className="container-main relative flex h-full items-center">
            <div className="max-w-2xl space-y-6">
              <h1
                className={cn(
                  "text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl",
                  index === current && "animate-fade-in",
                )}
              >
                {slide.title}
              </h1>
              <p
                className={cn(
                  "text-lg text-dark-200 sm:text-xl",
                  index === current && "animate-slide-up",
                )}
              >
                {slide.subtitle}
              </p>
              <div className="flex gap-4">
                <Button size="lg" asChild>
                  <Link href={slide.cta.href}>{slide.cta.label}</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link
                    href="/contact"
                    className="border-white! text-white! hover:bg-white! hover:text-dark-900!"
                  >
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/40"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/40"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={cn(
              "h-2.5 rounded-full transition-all",
              index === current
                ? "w-8 bg-white"
                : "w-2.5 bg-white/50 hover:bg-white/75",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
