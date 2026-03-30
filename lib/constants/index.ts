// ─── Vardaan Group Constants ─────────────────────────────────────────────────

export const SITE_CONFIG = {
  name: "Vardaan Group",
  tagline: "Building Excellence Across Industries",
  description:
    "Vardaan Group is a diversified group currently focused on curated travel and premium furnishings services.",
  url: "https://vardaangroup.com",
  email: "info@vardaangroup.com",
  phone: "+91 98765 43210",
  address: "Khusibu, Kathmandu, Nepal",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Businesses",
    href: "/businesses",
    children: [
      {
        label: "Vardaan Travels & Holidays",
        href: "/businesses/travels",
        description: "Premium travel experiences and holiday packages",
      },
      {
        label: "Vardaan Furnishings",
        href: "/businesses/furnishings",
        description: "Luxury interior solutions and furnishing services",
      },
    ],
  },
  { label: "Contact", href: "/contact" },
] as const;

export const BUSINESS_VERTICALS = [
  {
    id: "travels",
    name: "Vardaan Travels & Holidays",
    shortName: "Travels",
    slug: "travels",
    tagline: "Your Journey, Our Passion",
    description:
      "From exotic getaways to corporate travel solutions, Vardaan Travels & Holidays delivers unforgettable experiences with meticulous planning and personalized service.",
    icon: "Plane",
    color: "primary",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
    services: [
      "Domestic & International Tour Packages",
      "Corporate Travel Management",
      "Visa & Passport Assistance",
      "Hotel & Resort Bookings",
      "Cruise Holidays",
      "Adventure & Pilgrimage Tours",
    ],
    stats: [
      { label: "Happy Travelers", value: "50K+" },
      { label: "Destinations", value: "200+" },
      { label: "Years Experience", value: "15+" },
      { label: "Corporate Clients", value: "100+" },
    ],
  },
  {
    id: "furnishings",
    name: "Vardaan Furnishings",
    shortName: "Furnishings",
    slug: "furnishings",
    tagline: "Crafting Elegant Spaces",
    description:
      "Transform your living and working environments with Vardaan Furnishings. We bring together the finest materials, innovative designs, and expert craftsmanship.",
    icon: "Sofa",
    color: "secondary",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    services: [
      "Interior Design Consultation",
      "Custom Furniture Manufacturing",
      "Curtains & Blinds",
      "Wallpapers & Wall Art",
      "Flooring Solutions",
      "Commercial Furnishing Projects",
    ],
    stats: [
      { label: "Projects Completed", value: "2000+" },
      { label: "Design Awards", value: "15+" },
      { label: "Years Experience", value: "20+" },
      { label: "Showrooms", value: "5+" },
    ],
  },
] as const;

export const TESTIMONIALS = [
  {
    id: "1",
    name: "Rajesh Sharma",
    role: "CEO, TechSphere India",
    content:
      "Vardaan Travels organized our annual corporate retreat flawlessly. Every detail was taken care of, from flights to activities. Truly exceptional service!",
    avatar: "/testimonials/avatar-1.jpg",
    business: "travels",
  },
  {
    id: "2",
    name: "Priya Mehta",
    role: "Interior Designer",
    content:
      "The quality of materials and craftsmanship at Vardaan Furnishings is unmatched. They transformed our client's penthouse into a masterpiece.",
    avatar: "/testimonials/avatar-2.jpg",
    business: "furnishings",
  },
  {
    id: "3",
    name: "Amit & Neha Gupta",
    role: "Family Travelers",
    content:
      "Our holiday itinerary was perfectly curated. The team handled everything from bookings to local recommendations, and the trip was completely stress-free.",
    avatar: "/testimonials/avatar-3.jpg",
    business: "travels",
  },
  {
    id: "4",
    name: "Sunita Agarwal",
    role: "Operations Head, Agarwal Enterprises",
    content:
      "We rely on Vardaan Travels for executive and group travel. Their coordination and responsiveness make every business trip smooth and reliable.",
    avatar: "/testimonials/avatar-4.jpg",
    business: "travels",
  },
  {
    id: "5",
    name: "Vikram Singh",
    role: "Frequent Traveler",
    content:
      "From Bali to Switzerland, Vardaan Travels has curated the most memorable vacations for my family. Their attention to detail is remarkable.",
    avatar: "/testimonials/avatar-5.jpg",
    business: "travels",
  },
  {
    id: "6",
    name: "Dr. Meera Kapoor",
    role: "Homeowner",
    content:
      "Vardaan Furnishings redesigned our entire home. The result was beyond our expectations — modern yet warm, and perfectly functional.",
    avatar: "/testimonials/avatar-6.jpg",
    business: "furnishings",
  },
] as const;

export const COMPANY_STATS = [
  { label: "Years of Excellence", value: 25, suffix: "+" },
  { label: "Business Verticals", value: 2, suffix: "" },
  { label: "Happy Clients", value: 50000, suffix: "+" },
  { label: "Team Members", value: 500, suffix: "+" },
] as const;

export const FOOTER_LINKS = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about#team" },
    { label: "Careers", href: "/about#careers" },
    { label: "Contact", href: "/contact" },
  ],
  businesses: [
    { label: "Travels & Holidays", href: "/businesses/travels" },
    { label: "Furnishings", href: "/businesses/furnishings" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Sitemap", href: "/sitemap.xml" },
  ],
} as const;
