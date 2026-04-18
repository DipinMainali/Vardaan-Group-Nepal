"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden bg-dark-900 text-white lg:block">
        <div className="container-main flex items-center justify-between py-2 text-xs">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center gap-1 hover:text-primary-300"
            >
              <Phone className="h-3 w-3" />
              {SITE_CONFIG.phone}
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="flex items-center gap-1 hover:text-primary-300"
            >
              <Mail className="h-3 w-3" />
              {SITE_CONFIG.email}
            </a>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            <span>{SITE_CONFIG.address}</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          isScrolled
            ? "border-b border-dark-200 bg-white/95 shadow-sm backdrop-blur supports-backdrop-filter:bg-white/80"
            : "bg-white",
        )}
      >
        <div className="container-main">
          <div className="flex h-16 items-center justify-between lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Vardaan Group"
                width={140}
                height={40}
                className="block h-8 w-auto lg:h-10"
                style={{ width: "auto" }}
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex lg:items-center lg:gap-1">
              {NAV_LINKS.map((link) => (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() =>
                    "children" in link ? setOpenDropdown(link.href) : undefined
                  }
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                      pathname === link.href ||
                        pathname.startsWith(link.href + "/")
                        ? "text-primary"
                        : "text-dark-700 hover:bg-dark-50 hover:text-dark-900",
                    )}
                  >
                    {link.label}
                    {"children" in link && <ChevronDown className="h-4 w-4" />}
                  </Link>

                  {/* Dropdown */}
                  {"children" in link && openDropdown === link.href && (
                    <div className="absolute left-0 top-full w-72 animate-slide-down rounded-xl border border-dark-200 bg-white p-2 shadow-xl">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            "block rounded-lg px-4 py-3 transition-colors hover:bg-primary-50",
                            pathname === child.href && "bg-primary-50",
                          )}
                        >
                          <span className="block text-sm font-medium text-dark-900">
                            {child.label}
                          </span>
                          <span className="block text-xs text-dark-500">
                            {child.description}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Button asChild className="hidden sm:inline-flex">
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <button
                className="inline-flex items-center justify-center rounded-lg p-2 text-dark-700 hover:bg-dark-100 lg:hidden"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                aria-label="Toggle menu"
              >
                {isMobileOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileOpen && (
          <div className="border-t border-dark-200 bg-white lg:hidden">
            <div className="container-main py-4">
              {NAV_LINKS.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "block rounded-lg px-4 py-3 text-sm font-medium",
                      pathname === link.href
                        ? "bg-primary-50 text-primary"
                        : "text-dark-700 hover:bg-dark-50",
                    )}
                  >
                    {link.label}
                  </Link>
                  {"children" in link && (
                    <div className="ml-4 border-l-2 border-dark-200 pl-4">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-lg px-4 py-2 text-sm text-dark-600 hover:bg-dark-50 hover:text-dark-900"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-4 px-4">
                <Button asChild className="w-full">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
