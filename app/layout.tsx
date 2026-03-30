import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Vardaan Group | Building Excellence Across Industries",
    template: "%s | Vardaan Group",
  },
  description:
    "Vardaan Group is a diversified group with 25+ years of excellence, currently focused on travel and furnishings.",
  keywords: [
    "Vardaan Group",
    "Vardaan Travels",
    "Vardaan Furnishings",
    "corporate group India",
  ],
  authors: [{ name: "Vardaan Group" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://vardaangroup.com",
    siteName: "Vardaan Group",
    title: "Vardaan Group | Building Excellence Across Industries",
    description:
      "A diversified group delivering premium services in travel and furnishings.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vardaan Group",
    description:
      "Building Excellence Across Industries — Travel & Furnishings.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
