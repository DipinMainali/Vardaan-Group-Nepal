import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Section from "@/components/shared/section";
import { Button } from "@/components/ui/button";

export default function DualCTA() {
  return (
    <Section variant="primary" className="!py-18">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Ready to Get Started?
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-primary-100">
          Choose your path below and our team will assist you with the right
          plan.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-dark-100"
            asChild
          >
            <Link href="/contact?business=travels">
              Plan Your Trip
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="!border-white !text-white hover:!bg-white/10"
            asChild
          >
            <Link href="/contact?business=furnishings">
              Request Furnishing Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
