"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Scan,
  CircleDot,
  Radio,
  Layers,
  Stethoscope,
  Syringe,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Phone,
} from "lucide-react";
import { SERVICES, CONTACT, BASE_PATH } from "@/lib/constants";

const serviceImages: { [key: string]: { src: string; alt: string }[] } = {
  ct: [
    { src: "coronary-ct.jpg", alt: "Coronary CT Angiogram" },
  ],
  mri: [
    { src: "mri-brain.jpg", alt: "Brain MRI with Contrast" },
    { src: "cardiac-mri.jpg", alt: "Cardiac MRI" },
  ],
  ultrasound: [],
  xray: [],
  clinical: [],
  interventional: [],
};

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
  Scan,
  CircleDot,
  Radio,
  Layers,
  Stethoscope,
  Syringe,
};

export default function ServicesPage() {
  const [expandedService, setExpandedService] = useState<string | null>("ct");

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
              Our Services
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Comprehensive{" "}
              <span className="text-[var(--secondary-light)]">Diagnostic Imaging</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-white/90">
              From routine scans to advanced subspecialty imaging, we offer a complete
              range of radiology services with expert interpretation and detailed reports.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-6"
          >
            {Object.entries(SERVICES).map(([key, service]) => {
              const IconComponent = iconMap[service.icon] || Scan;
              const isExpanded = expandedService === key;

              return (
                <motion.div
                  key={key}
                  variants={fadeInUp}
                  className="bg-white border border-[var(--border)] rounded-2xl overflow-hidden shadow-sm"
                >
                  {/* Service Header */}
                  <button
                    onClick={() => setExpandedService(isExpanded ? null : key)}
                    className="w-full p-6 md:p-8 flex items-center justify-between hover:bg-[var(--background-alt)] transition-colors"
                  >
                    <div className="flex items-center gap-4 md:gap-6">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center">
                        <IconComponent className="w-7 h-7 md:w-8 md:h-8 text-[var(--primary)]" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl md:text-2xl font-bold">{service.title}</h3>
                        <p className="text-[var(--foreground-muted)] text-sm md:text-base">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="hidden md:inline-block text-[var(--primary)] font-medium">
                        {service.categories.reduce((acc, cat) => acc + cat.items.length, 0)} procedures
                      </span>
                      {isExpanded ? (
                        <ChevronDown className="w-6 h-6 text-[var(--primary)]" />
                      ) : (
                        <ChevronRight className="w-6 h-6 text-[var(--foreground-muted)]" />
                      )}
                    </div>
                  </button>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 md:px-8 pb-8 pt-2 border-t border-[var(--border)]">
                          {/* Sample Scan Images */}
                          {serviceImages[key]?.length > 0 && (
                            <div className="mt-6 mb-6">
                              <h4 className="font-semibold text-[var(--foreground-muted)] mb-4 text-sm uppercase tracking-wide">
                                Sample Scans from Our Center
                              </h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {serviceImages[key].map((image, imgIndex) => (
                                  <div key={imgIndex} className="rounded-xl overflow-hidden shadow-md">
                                    <Image
                                      src={`${BASE_PATH}/images/scans/${image.src}`}
                                      alt={image.alt}
                                      width={400}
                                      height={300}
                                      className="w-full h-48 object-cover"
                                    />
                                    <div className="bg-[var(--primary)] text-white p-2 text-center text-sm">
                                      {image.alt}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                            {service.categories.map((category, categoryIndex) => (
                              <div key={categoryIndex} className="bg-[var(--background-alt)] rounded-xl p-6">
                                <h4 className="font-semibold text-[var(--primary)] mb-4">
                                  {category.name}
                                </h4>
                                <ul className="space-y-2">
                                  {category.items.map((item, itemIndex) => (
                                    <li
                                      key={itemIndex}
                                      className="flex items-center gap-2 text-sm text-[var(--foreground)]"
                                    >
                                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]" />
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Special Services */}
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
              Advanced Services
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Specialized Imaging
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-[var(--foreground-muted)] max-w-2xl mx-auto"
            >
              We offer advanced imaging services that are typically only available
              at large corporate hospitals, now accessible to everyone.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                title: "Coronary CT Angiogram",
                description: "Non-invasive imaging of the heart's coronary arteries to detect blockages and assess heart health.",
              },
              {
                title: "Whole Body MRI",
                description: "Comprehensive cancer screening and detection using advanced diffusion-weighted imaging technology.",
              },
              {
                title: "CT Enterography",
                description: "Specialized imaging of the small intestine to detect conditions like Crohn's disease and tumors.",
              },
              {
                title: "Breast MRI",
                description: "Detailed breast imaging for screening, diagnosis, and treatment planning.",
              },
              {
                title: "Cardiac Imaging",
                description: "Complete heart assessment including congenital heart disease and pre-valve replacement planning.",
              },
              {
                title: "Transplant Imaging",
                description: "Pre and post-transplant imaging for liver, kidney, and other organ transplants.",
              },
              {
                title: "Fetal MRI",
                description: "Detailed imaging of the fetus when ultrasound findings need further evaluation.",
              },
              {
                title: "Virtual Colonoscopy",
                description: "Non-invasive CT-based colon screening as an alternative to traditional colonoscopy.",
              },
              {
                title: "Liver Elastography",
                description: "Non-invasive assessment of liver fibrosis using shear wave technology.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-[var(--foreground-muted)] text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
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
              How It Works
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Your Scan Experience
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-4 gap-8"
          >
            {[
              {
                step: "1",
                title: "Book Appointment",
                description: "Schedule your scan via WhatsApp, phone, or walk-in",
              },
              {
                step: "2",
                title: "Preparation",
                description: "Receive pre-scan instructions based on your test type",
              },
              {
                step: "3",
                title: "The Scan",
                description: "Quick, comfortable scans in our HEPA-filtered rooms",
              },
              {
                step: "4",
                title: "Results",
                description: "Detailed reports with images delivered promptly",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center relative"
              >
                <div className="w-16 h-16 rounded-full bg-[var(--primary)] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-[var(--border)]" />
                )}
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-[var(--foreground-muted)] text-sm">{item.description}</p>
              </motion.div>
            ))}
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
              Need a Scan?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-white/90 text-lg mb-8 max-w-2xl mx-auto"
            >
              Our team is ready to help you schedule the right scan and answer
              any questions you may have about the procedures.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-4"
            >
              <a
                href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
                  "Hello, I would like to inquire about your services at Advantage Imaging."
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
                Call Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
