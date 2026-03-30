"use client";

import React, { useEffect, useState, useRef } from "react";
import Section from "@/components/shared/section";
import { COMPANY_STATS } from "@/lib/constants";

function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return { count, ref };
}

function StatItem({
  label,
  value,
  suffix,
}: {
  label: string;
  value: number;
  suffix: string;
}) {
  const { count, ref } = useCountUp(value);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-bold text-white lg:text-5xl">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="mt-2 text-sm font-medium text-primary-200">{label}</div>
    </div>
  );
}

export default function StatsCounter() {
  return (
    <Section variant="dark" className="!py-16">
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {COMPANY_STATS.map((stat) => (
          <StatItem
            key={stat.label}
            label={stat.label}
            value={stat.value}
            suffix={stat.suffix}
          />
        ))}
      </div>
    </Section>
  );
}
