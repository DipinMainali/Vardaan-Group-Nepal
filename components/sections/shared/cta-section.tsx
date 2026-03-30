import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Section from "@/components/shared/section";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <Section variant="primary" className="!py-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Ready to Partner With Us?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100">
          Whether you&apos;re looking for travel solutions, interior design,
          hospitality services, or real estate — Vardaan Group has you covered.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-dark-100"
            asChild
          >
            <Link href="/contact">
              Contact Us Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="!border-white !text-white hover:!bg-white/10"
            asChild
          >
            <Link href="/about">Learn About Our Story</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
