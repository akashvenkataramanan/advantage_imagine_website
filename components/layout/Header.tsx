"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, CONTACT, BASE_PATH } from "@/lib/constants";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar with phone */}
      <div className="bg-[var(--primary)] text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Call us:</span>
            <a href={`tel:${CONTACT.phone[0]}`} className="hover:underline">
              {CONTACT.phone[0]}
            </a>
          </div>
          <div className="hidden md:flex items-center gap-4 text-xs md:text-sm">
            <span>Mon-Sat: {CONTACT.hours.weekdays}</span>
            <span className="mx-1">|</span>
            <span>Sun: {CONTACT.hours.sunday}</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={`${BASE_PATH}/images/logo/logo.png`}
              alt="Advantage Imaging"
              width={180}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors ${
                  pathname === link.href
                    ? "text-[var(--primary)]"
                    : "text-[var(--foreground)] hover:text-[var(--primary)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
                "Hello, I would like to book an appointment at Advantage Imaging."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--accent)] text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium transition-colors ${
                    pathname === link.href
                      ? "text-[var(--primary)]"
                      : "text-[var(--foreground)] hover:text-[var(--primary)]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
                  "Hello, I would like to book an appointment at Advantage Imaging."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--accent)] text-white px-6 py-2 rounded-full font-medium text-center hover:opacity-90 transition-opacity"
              >
                Book Appointment
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
