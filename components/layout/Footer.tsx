import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { CONTACT, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[var(--primary-dark)] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo/logo.png"
                alt="Advantage Imaging"
                width={140}
                height={50}
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-white/80 text-sm">
              Expert radiology services at affordable costs. State-of-the-art
              equipment with 30+ years of experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-[var(--secondary-light)] flex-shrink-0 mt-0.5" />
                <span className="text-white/80">
                  {CONTACT.address.line1}
                  <br />
                  {CONTACT.address.line2}
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-5 h-5 text-[var(--secondary-light)] flex-shrink-0" />
                <a
                  href={`tel:${CONTACT.phone[0]}`}
                  className="text-white/80 hover:text-white"
                >
                  {CONTACT.phone[0]}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-5 h-5 text-[var(--secondary-light)] flex-shrink-0" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-white/80 hover:text-white"
                >
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Working Hours</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <Clock className="w-5 h-5 text-[var(--secondary-light)] flex-shrink-0 mt-0.5" />
                <div className="text-white/80">
                  <p>
                    <strong>Mon - Sat:</strong>
                    <br />
                    {CONTACT.hours.weekdays}
                  </p>
                  <p className="mt-2">
                    <strong>Sunday:</strong>
                    <br />
                    {CONTACT.hours.sunday}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
          <p>
            &copy; {new Date().getFullYear()} Advantage Imaging & Research
            Institute. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
