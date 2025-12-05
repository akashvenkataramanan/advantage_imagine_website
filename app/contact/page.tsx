"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight } from "lucide-react";
import { CONTACT, BASE_PATH } from "@/lib/constants";

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

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
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
              Contact Us
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Get in{" "}
              <span className="text-[var(--secondary-light)]">Touch</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-white/90">
              We&apos;re here to help you with scheduling, questions, and any
              information you need about our services.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Map */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-8">
                Contact Information
              </motion.h2>

              <motion.div variants={fadeInUp} className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4 p-6 bg-[var(--background-alt)] rounded-xl">
                  <div className="w-14 h-14 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-[var(--primary)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Address</h3>
                    <p className="text-[var(--foreground-muted)]">
                      {CONTACT.address.line1}
                      <br />
                      {CONTACT.address.line2}
                    </p>
                    <a
                      href={CONTACT.googleMapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[var(--primary)] font-medium text-sm mt-3 hover:gap-3 transition-all"
                    >
                      Get Directions
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-6 bg-[var(--background-alt)] rounded-xl">
                  <div className="w-14 h-14 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-7 h-7 text-[var(--primary)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Phone</h3>
                    <div className="space-y-1">
                      {CONTACT.phone.map((phone, index) => (
                        <a
                          key={index}
                          href={`tel:${phone}`}
                          className="block text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors"
                        >
                          {phone}
                        </a>
                      ))}
                      <p className="text-[var(--foreground-muted)]">
                        Landline: {CONTACT.landline}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-6 bg-[var(--background-alt)] rounded-xl">
                  <div className="w-14 h-14 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-7 h-7 text-[var(--primary)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors"
                    >
                      {CONTACT.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 p-6 bg-[var(--background-alt)] rounded-xl">
                  <div className="w-14 h-14 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-7 h-7 text-[var(--primary)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Working Hours</h3>
                    <div className="text-[var(--foreground-muted)]">
                      <p>
                        <strong>Monday - Saturday:</strong>
                        <br />
                        {CONTACT.hours.weekdays}
                      </p>
                      <p className="mt-2">
                        <strong>Sunday:</strong>
                        <br />
                        {CONTACT.hours.sunday}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Map & Facility Photos */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8">Find Us</h2>

              {/* Facility Photo Gallery */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="rounded-xl overflow-hidden shadow-md">
                  <Image
                    src={`${BASE_PATH}/images/clinic/building-front.jpg`}
                    alt="Advantage Imaging building exterior"
                    width={400}
                    height={250}
                    className="w-full h-40 object-cover"
                  />
                  <div className="bg-[var(--primary)] text-white p-2 text-center text-sm">
                    Our Building
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden shadow-md">
                  <Image
                    src={`${BASE_PATH}/images/clinic/waiting-hall.jpg`}
                    alt="Waiting area at Advantage Imaging"
                    width={400}
                    height={250}
                    className="w-full h-40 object-cover"
                  />
                  <div className="bg-[var(--primary)] text-white p-2 text-center text-sm">
                    Waiting Area
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-lg h-[350px] bg-[var(--background-alt)]">
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
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-20 bg-[var(--background-alt)]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div
              variants={fadeInUp}
              className="w-20 h-20 rounded-full bg-[#25D366] mx-auto mb-6 flex items-center justify-center"
            >
              <MessageCircle className="w-10 h-10 text-white" fill="white" />
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Quick Contact via WhatsApp
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-[var(--foreground-muted)] text-lg mb-8 max-w-2xl mx-auto"
            >
              For the fastest response, reach out to us on WhatsApp. We&apos;ll help
              you schedule appointments and answer your questions.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <a
                href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
                  "Hello, I would like to book an appointment at Advantage Imaging."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#20bd5a] transition-colors"
              >
                <MessageCircle className="w-6 h-6" fill="white" />
                Chat on WhatsApp
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Frequently Asked Questions
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-4"
          >
            {[
              {
                question: "Do I need an appointment?",
                answer: "While walk-ins are welcome, we recommend scheduling an appointment via WhatsApp or phone for faster service and to ensure availability.",
              },
              {
                question: "How long does a scan take?",
                answer: "Scan times vary by type. CT scans typically take 10-30 minutes, MRI scans 30-60 minutes, Ultrasound 15-30 minutes, and X-rays just a few minutes.",
              },
              {
                question: "When will I receive my reports?",
                answer: "Most reports are available within 24-48 hours. Emergency cases are prioritized and reports can be expedited when needed.",
              },
              {
                question: "Do you accept insurance?",
                answer: "Please contact us directly to discuss payment options and insurance coverage for your specific situation.",
              },
              {
                question: "What should I bring for my appointment?",
                answer: "Please bring your doctor's referral/prescription, any previous scan reports, and a valid ID. Specific preparation instructions will be provided when you book.",
              },
              {
                question: "Is the MRI safe for people with claustrophobia?",
                answer: "Our 1.5T MRI features a 70cm wide bore design and shorter tunnel, specifically chosen to reduce claustrophobia and improve patient comfort.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white border border-[var(--border)] rounded-xl p-6"
              >
                <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                <p className="text-[var(--foreground-muted)]">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
