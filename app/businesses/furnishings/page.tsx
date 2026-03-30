import type { Metadata } from "next";
import { BUSINESS_VERTICALS } from "@/lib/constants";
import BusinessPageTemplate from "@/components/sections/businesses/business-page-template";

const business = BUSINESS_VERTICALS.find((b) => b.slug === "furnishings")!;

export const metadata: Metadata = {
  title: business.name,
  description: business.description,
};

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80",
    alt: "Modern Living Room",
  },
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    alt: "Luxury Bedroom Design",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    alt: "Contemporary Kitchen",
  },
  {
    src: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&q=80",
    alt: "Office Interior",
  },
  {
    src: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=600&q=80",
    alt: "Minimalist Study",
  },
  {
    src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80",
    alt: "Elegant Dining Space",
  },
];

const teamMembers = [
  { name: "Priya Vardaan", role: "Head of Furnishings" },
  { name: "Amit Deshmukh", role: "Lead Interior Designer" },
  { name: "Kavita Rao", role: "Project Manager" },
  { name: "Danish Khan", role: "Procurement Head" },
];

export default function FurnishingsPage() {
  return (
    <BusinessPageTemplate
      business={business}
      gallery={gallery}
      teamMembers={teamMembers}
    />
  );
}
