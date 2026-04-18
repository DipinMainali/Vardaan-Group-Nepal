import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { SITE_CONFIG, FOOTER_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-dark-300">
      {/* Main Footer */}
      <div className="container-main py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white p-1.5 shadow-sm">
                <Image
                  src="/logo.png"
                  alt="Vardaan Group Logo"
                  width={56}
                  height={56}
                  className="h-auto w-full object-contain"
                  style={{ height: "auto" }}
                />
              </div>
              <div>
                <span className="text-lg font-bold text-white">Vardaan</span>
                <span className="text-lg font-bold text-primary-400">
                  {" "}
                  Group
                </span>
              </div>
            </Link>
            <p className="text-sm leading-6">{SITE_CONFIG.description}</p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-dark-800 text-dark-400 transition-colors hover:bg-primary hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Our Businesses
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.businesses.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center gap-2 text-sm transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 text-primary-400" />
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-2 text-sm transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 text-primary-400" />
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" />
                {SITE_CONFIG.address}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-800">
        <div className="container-main flex flex-col items-center justify-between gap-4 py-6 text-xs sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            {FOOTER_LINKS.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
