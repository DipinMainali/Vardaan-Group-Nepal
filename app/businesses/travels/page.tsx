import type { Metadata } from "next";
import { BUSINESS_VERTICALS } from "@/lib/constants";
import BusinessPageTemplate from "@/components/sections/businesses/business-page-template";

const business = BUSINESS_VERTICALS.find((b) => b.slug === "travels")!;

export const metadata: Metadata = {
  title: business.name,
  description: business.description,
};

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
    alt: "Tropical Beach Getaway",
  },
  {
    src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80",
    alt: "Mountain Adventure Tour",
  },
  {
    src: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=600&q=80",
    alt: "European City Tour",
  },
  {
    src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80",
    alt: "Road Trip Experiences",
  },
  {
    src: "https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=600&q=80",
    alt: "Luxury Cruise Holidays",
  },
  {
    src: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600&q=80",
    alt: "Island Paradise Retreats",
  },
];

const teamMembers = [
  { name: "Arun Mehta", role: "Director, Travel Operations" },
  { name: "Sonia Kapoor", role: "Head, Corporate Travel" },
  { name: "Ravi Shankar", role: "Senior Tour Manager" },
  { name: "Neha Gupta", role: "Customer Experience Lead" },
];

export default function TravelsPage() {
  return (
    <BusinessPageTemplate
      business={business}
      gallery={gallery}
      teamMembers={teamMembers}
    />
  );
}
