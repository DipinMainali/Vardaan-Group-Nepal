import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { SITE_CONFIG } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  applicationName: "Vardaan Group",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  title: {
    default: "Vardaan Group",
    template: "%s | Vardaan Group",
  },
  description:
    "Vardaan Group is a diversified group with 25+ years of excellence, currently focused on travel and furnishings.",
  keywords: [
    "Vardaan Group",
    "Vardaan Travels",
    "Vardaan Furnishings",
    "corporate group",
  ],
  authors: [{ name: "Vardaan Group" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_CONFIG.url,
    siteName: "Vardaan Group",
    title: "Vardaan Group | Building Excellence Across Industries",
    description:
      "A diversified group delivering premium services in travel and furnishings.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Vardaan Group logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vardaan Group",
    description:
      "Building Excellence Across Industries — Travel & Furnishings.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.phone,
    logo: `${SITE_CONFIG.url}/logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address,
      addressCountry: "NP",
    },
    sameAs: [],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_CONFIG.url}/businesses?query={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
