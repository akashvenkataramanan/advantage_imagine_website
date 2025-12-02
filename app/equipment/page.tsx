"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, ArrowRight, Phone, Shield, Zap, Heart, Eye } from "lucide-react";
import { EQUIPMENT, CONTACT, BASE_PATH } from "@/lib/constants";

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

export default function EquipmentPage() {
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
              Our Equipment
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              State-of-the-Art{" "}
              <span className="text-[var(--secondary-light)]">Technology</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-white/90">
              Advanced diagnostic imaging equipment that matches corporate hospital
              standards, making high-end radiology accessible to everyone.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Equipment Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-16"
          >
            {EQUIPMENT.map((item, index) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-2xl p-12 text-white text-center">
                    <div className="text-6xl md:text-7xl font-bold mb-2">
                      {index === 0 ? "uCT 780" : index === 1 ? "uMR 570" : index === 2 ? "HD" : "DR"}
                    </div>
                    <div className="text-xl text-white/80">
                      {index === 0 ? "160-Slice CT Scanner" : index === 1 ? "1.5T Wide-Bore MRI" : index === 2 ? "Ultrasound" : "Digital X-Ray"}
                    </div>
                    {index === 0 && (
                      <div className="mt-4 text-sm text-white/70">United Imaging</div>
                    )}
                    {index === 1 && (
                      <div className="mt-4 text-sm text-white/70">United Imaging</div>
                    )}
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="text-3xl font-bold mb-2">{item.name}</h2>
                  <p className="text-[var(--secondary)] font-medium text-lg mb-4">
                    {item.tagline}
                  </p>
                  <p className="text-[var(--foreground-muted)] mb-6">
                    {item.description}
                  </p>
                  <ul className="space-y-3">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                        <span className="text-[var(--foreground)]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Facility Features */}
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
              Our Facility
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Designed for Excellence
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-[var(--foreground-muted)] max-w-2xl mx-auto"
            >
              Our facility is designed with patient comfort and safety in mind,
              featuring the latest in infection control and imaging technology.
            </motion.p>
          </motion.div>

          {/* Facility Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Image
              src={`${BASE_PATH}/images/equipment/room.png`}
              alt="State-of-the-art scanning facility at Advantage Imaging"
              width={1200}
              height={500}
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: Shield,
                title: "HEPA Filtered Rooms",
                description: "Advanced air filtration systems to prevent infections and ensure patient safety.",
              },
              {
                icon: Zap,
                title: "Fast Workstations",
                description: "Sophisticated computers for analyzing thousands of image sections efficiently.",
              },
              {
                icon: Heart,
                title: "Patient Comfort",
                description: "Wide bore MRI and spacious scan rooms designed to reduce anxiety and claustrophobia.",
              },
              {
                icon: Eye,
                title: "HD Displays",
                description: "High-resolution displays for detailed image analysis and accurate diagnosis.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <div className="w-14 h-14 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-[var(--primary)]" />
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-[var(--foreground-muted)] text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technology Advantage */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <motion.p
                variants={fadeInUp}
                className="text-[var(--secondary)] font-medium mb-2"
              >
                Why It Matters
              </motion.p>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                The Technology Advantage
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-[var(--foreground-muted)] mb-6"
              >
                Radiology machines come in low, mid, and high-end ranges, and outputs
                always differ. For example, you cannot perform a coronary angiogram
                based on a 16 slice CT scan &ndash; a minimum of 128 slice scanner is required.
              </motion.p>
              <motion.p
                variants={fadeInUp}
                className="text-[var(--foreground-muted)] mb-6"
              >
                Our 160 slice scanner with high tube rotation speed can complete a
                whole heart scan in just 4 seconds, even in patients with high heart
                rates. The high-quality detector morphology provides clear and sharp
                images, much like high megapixel cameras compared to lower versions.
              </motion.p>
              <motion.div variants={fadeInUp} className="space-y-4">
                {[
                  "Early detection of diseases through superior image quality",
                  "Clear visualization of small structures like blood vessels",
                  "Accurate staging of cancers for treatment planning",
                  "Non-invasive alternatives to surgical procedures",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--foreground)]">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[var(--background-alt)] rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold mb-6">Equipment Comparison</h3>
              <div className="space-y-6">
                {[
                  {
                    label: "CT Scanner",
                    ours: "160 Slice (uCT 780)",
                    typical: "16-64 Slice",
                  },
                  {
                    label: "CT Rotation Speed",
                    ours: "0.3 seconds",
                    typical: "0.5-1 second",
                  },
                  {
                    label: "MRI Bore Width",
                    ours: "70cm (uMR 570)",
                    typical: "60cm Standard",
                  },
                  {
                    label: "MRI Tunnel Length",
                    ours: "150cm Short",
                    typical: "170-200cm",
                  },
                  {
                    label: "Cardiac CT Time",
                    ours: "4 Seconds",
                    typical: "10-15 Seconds",
                  },
                  {
                    label: "Patient Capacity",
                    ours: "Up to 250kg",
                    typical: "Up to 150kg",
                  },
                ].map((item, index) => (
                  <div key={index} className="grid grid-cols-3 gap-4 items-center">
                    <div className="font-medium text-sm">{item.label}</div>
                    <div className="text-center">
                      <span className="bg-[var(--primary)] text-white px-3 py-1 rounded-full text-sm">
                        {item.ours}
                      </span>
                    </div>
                    <div className="text-center text-[var(--foreground-muted)] text-sm">
                      {item.typical}
                    </div>
                  </div>
                ))}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[var(--border)] text-xs text-[var(--foreground-muted)]">
                  <div></div>
                  <div className="text-center font-medium text-[var(--primary)]">Our Equipment</div>
                  <div className="text-center">Typical Centers</div>
                </div>
              </div>
            </motion.div>
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
              Experience the Difference
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-white/90 text-lg mb-8 max-w-2xl mx-auto"
            >
              Get scanned on equipment that matches corporate hospital standards,
              at a fraction of the cost.
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
                Book Your Scan
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
