"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  MapPin,
  Clock,
  ChevronRight,
  Award,
  GraduationCap,
  Building2,
  Globe,
  Scan,
  CircleDot,
  Radio,
  Layers,
  ArrowRight,
  CheckCircle,
  Stethoscope,
  Syringe,
} from "lucide-react";
import { CONTACT, STATS, EQUIPMENT, SERVICES, FOUNDER, TRUST_INDICATORS } from "@/lib/constants";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Award,
  GraduationCap,
  Building2,
  Globe,
  Scan,
  CircleDot,
  Radio,
  Layers,
  Stethoscope,
  Syringe,
};

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeInUp}
              className="text-[var(--secondary-light)] font-medium mb-4"
            >
              Welcome to Advantage Imaging
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Expert Radiology Services at{" "}
              <span className="text-[var(--secondary-light)]">Affordable Costs</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-white/90 mb-8">
              State-of-the-art 160 slice CT, 1.5T Wide Bore MRI, and advanced diagnostic
              imaging led by internationally acclaimed radiologist with 30+ years of experience.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <a
                href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
                  "Hello, I would like to book an appointment at Advantage Imaging."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[var(--primary)] px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors flex items-center gap-2"
              >
                Book Appointment
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={`tel:${CONTACT.phone[0]}`}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <div className="relative bg-white/10 backdrop-blur-sm border-t border-white/20">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {STATS.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-[var(--background-alt)]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {TRUST_INDICATORS.map((indicator, index) => {
              const IconComponent = iconMap[indicator.icon] || Award;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-[var(--primary)]" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{indicator.title}</h3>
                  <p className="text-[var(--foreground-muted)] text-sm">
                    {indicator.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.p
                variants={fadeInUp}
                className="text-[var(--secondary)] font-medium mb-2"
              >
                About Us
              </motion.p>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                Bringing High-End Radiology to{" "}
                <span className="text-[var(--primary)]">Every Patient</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-[var(--foreground-muted)] mb-6">
                Advantage Imaging & Research Institute is an outpatient radiology imaging
                center in Chennai, conceived with the objective of providing expert radiology
                services to the community at reasonable costs.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-[var(--foreground-muted)] mb-6">
                All high-end radiology machines are typically clustered within large corporate
                hospitals, making them out of reach for the common man. Our center brings
                sophisticated radiology equipment within reach of all, in the heart of Chennai.
              </motion.p>
              <motion.div variants={fadeInUp} className="space-y-3 mb-8">
                {[
                  "Detailed reports with images as roadmaps for clinicians",
                  "Tailored studies targeting specific disease conditions",
                  "Wide bore MRI that reduces claustrophobia",
                  "HEPA filtered scan rooms for infection prevention",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--foreground)]">{item}</span>
                  </div>
                ))}
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-[var(--primary)] font-semibold hover:gap-3 transition-all"
                >
                  Learn More About Us
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </motion.div>

              {/* Team Photo */}
              <motion.div variants={fadeInUp} className="mt-8">
                <Image
                  src="/images/about/mission.png"
                  alt="Our Team at Advantage Imaging"
                  width={600}
                  height={300}
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </motion.div>
            </motion.div>

            {/* Founder Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[var(--background-alt)] rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="/images/doctor/doctor.png"
                  alt={FOUNDER.name}
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold">{FOUNDER.name}</h3>
                  <p className="text-[var(--foreground-muted)]">{FOUNDER.title}</p>
                  <p className="text-[var(--secondary)] font-medium text-sm">
                    {FOUNDER.experience} Experience
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                {FOUNDER.credentials.slice(0, 4).map((credential, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--primary)] mt-2 flex-shrink-0" />
                    <span className="text-sm text-[var(--foreground)]">{credential}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/about"
                className="mt-6 inline-flex items-center gap-2 text-[var(--primary)] font-medium text-sm hover:gap-3 transition-all"
              >
                View Full Profile
                <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20 bg-[var(--background-alt)]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.p
              variants={fadeInUp}
              className="text-[var(--secondary)] font-medium mb-2"
            >
              Our Equipment
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              State-of-the-Art Technology
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-[var(--foreground-muted)] max-w-2xl mx-auto"
            >
              Advanced diagnostic imaging equipment that matches corporate hospital
              standards, now accessible to everyone.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {EQUIPMENT.map((item, index) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
              >
                <div className="h-40 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <div className="text-4xl font-bold mb-1">
                      {index === 0 ? "160" : index === 1 ? "1.5T" : index === 2 ? "HD" : "DR"}
                    </div>
                    <div className="text-sm text-white/80">
                      {index === 0 ? "Slice CT" : index === 1 ? "MRI" : index === 2 ? "Ultrasound" : "X-Ray"}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                  <p className="text-[var(--secondary)] text-sm font-medium mb-3">
                    {item.tagline}
                  </p>
                  <ul className="space-y-2">
                    {item.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-[var(--foreground-muted)]">
                        <CheckCircle className="w-4 h-4 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Equipment Room Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Image
              src="/images/equipment/room.png"
              alt="State-of-the-art scanning room at Advantage Imaging"
              width={1200}
              height={500}
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link
              href="/equipment"
              className="inline-flex items-center gap-2 bg-[var(--primary)] text-white px-8 py-3 rounded-full font-semibold hover:bg-[var(--primary-dark)] transition-colors"
            >
              View All Equipment
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.p
              variants={fadeInUp}
              className="text-[var(--secondary)] font-medium mb-2"
            >
              Our Services
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Comprehensive Diagnostic Imaging
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-[var(--foreground-muted)] max-w-2xl mx-auto"
            >
              From routine scans to advanced subspecialty imaging, we offer a complete
              range of radiology services tailored to your needs.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {Object.entries(SERVICES).slice(0, 6).map(([key, service]) => {
              const IconComponent = iconMap[service.icon] || Scan;
              return (
                <motion.div
                  key={key}
                  variants={fadeInUp}
                  className="bg-white border border-[var(--border)] rounded-xl p-6 hover:shadow-lg hover:border-[var(--primary)]/20 transition-all group"
                >
                  <div className="w-14 h-14 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center mb-4 group-hover:bg-[var(--primary)] transition-colors">
                    <IconComponent className="w-7 h-7 text-[var(--primary)] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">{service.title}</h3>
                  <p className="text-[var(--foreground-muted)] text-sm mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.categories[0].items.slice(0, 3).map((item, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-[var(--background-alt)] text-[var(--foreground-muted)] px-2 py-1 rounded"
                      >
                        {item}
                      </span>
                    ))}
                    {service.categories[0].items.length > 3 && (
                      <span className="text-xs text-[var(--primary)] font-medium">
                        +{service.categories[0].items.length - 3} more
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-[var(--primary)] text-white px-8 py-3 rounded-full font-semibold hover:bg-[var(--primary-dark)] transition-colors"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Ready to Book Your Scan?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-white/90 text-lg mb-8 max-w-2xl mx-auto"
            >
              Get expert radiology services at affordable costs. Our team is ready to
              assist you with scheduling and any questions you may have.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-4"
            >
              <a
                href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
                  "Hello, I would like to book an appointment at Advantage Imaging."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[var(--primary)] px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors flex items-center gap-2"
              >
                Chat on WhatsApp
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={`tel:${CONTACT.phone[0]}`}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                {CONTACT.phone[0]}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.p
                variants={fadeInUp}
                className="text-[var(--secondary)] font-medium mb-2"
              >
                Visit Us
              </motion.p>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                Located in the Heart of{" "}
                <span className="text-[var(--primary)]">Mylapore</span>
              </motion.h2>
              <motion.div variants={fadeInUp} className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[var(--primary)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <p className="text-[var(--foreground-muted)]">
                      {CONTACT.address.line1}
                      <br />
                      {CONTACT.address.line2}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[var(--primary)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Working Hours</h4>
                    <p className="text-[var(--foreground-muted)]">
                      Mon - Sat: {CONTACT.hours.weekdays}
                      <br />
                      Sunday: {CONTACT.hours.sunday}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[var(--primary)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-[var(--foreground-muted)]">
                      {CONTACT.phone.join(" / ")}
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <a
                  href={CONTACT.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[var(--primary)] text-white px-6 py-3 rounded-full font-semibold hover:bg-[var(--primary-dark)] transition-colors"
                >
                  Get Directions
                  <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-lg h-[400px] bg-[var(--background-alt)]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0!2d80.26!3d13.04!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266f1eb72a8eb%3A0x1234567890abcdef!2sRoyapettah%20High%20Rd%2C%20Mylapore%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Advantage Imaging Location"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
